// Client side of multiplayer: one WebSocket to the REDSHIFT server, auto-reconnect into the same room.
export class Net {
  constructor(game) {
    this.G = game; this.ws = null; this.status = 'off'; this.token = null; this.base = '';
    this.inRoom = false; this.intentional = false; this.retries = 0; this.rtt = 0; this.onStatus = null;
    this.pinger = setInterval(() => { if (this.open) this.send({ t: 'ping', c: performance.now() }); }, 2000);
  }
  get open() { return this.ws && this.ws.readyState === 1; }
  // where to connect: saved address > address baked into config.js > the site this page came from
  static defaultServer() {
    try { const s = localStorage.getItem('redshift_server'); if (s) return s; } catch { }
    const cfg = String(window.REDSHIFT_SERVER || '').trim();
    if (cfg) return cfg;
    if (/^https?:$/.test(location.protocol) && !window.REDSHIFT_APP) return location.origin;
    return '';
  }
  static save(base) { try { if (base) localStorage.setItem('redshift_server', base); else localStorage.removeItem('redshift_server'); } catch { } }
  // apps (APK/EXE) with no address yet: read the shared address from a small text file in the GitHub repo,
  // so every installed copy finds the server without rebuilding (edit server.txt to move the server)
  static async discover() {
    const url = String(window.REDSHIFT_DISCOVERY || '').trim();
    if (!url) return '';
    try {
      const ctl = new AbortController(); const to = setTimeout(() => ctl.abort(), 6000);
      const r = await fetch(url + (url.includes('?') ? '&' : '?') + 't=' + Date.now(), { cache: 'no-store', signal: ctl.signal });
      clearTimeout(to);
      if (!r.ok) return '';
      const line = (await r.text()).split(/\r?\n/).map(l => l.trim()).find(l => l && !l.startsWith('#'));
      return line && /^(https?|wss?):\/\/[^\s]+$/i.test(line) ? line : '';
    } catch { return ''; }
  }
  wsUrl(base) {
    let u = String(base || '').trim().replace(/\/+$/, '');
    if (!/^[a-z]+:\/\//i.test(u)) u = (/^(localhost|127\.|192\.168\.|10\.)/.test(u) ? 'http://' : 'https://') + u;
    return u.replace(/^http/i, 'ws') + '/ws';
  }
  setStatus(s, msg = '') { this.status = s; this.onStatus && this.onStatus(s, msg); }
  connect(base, hello) {
    this.base = base; this.hello = hello; this.intentional = false;
    return new Promise((resolve, reject) => {
      let done = false;
      const fail = msg => { if (!done) { done = true; reject(new Error(msg)); } };
      let ws;
      try { ws = new WebSocket(this.wsUrl(base) + (this.token && this.inRoom ? '?resume=' + encodeURIComponent(this.token) : '')); }
      catch (e) { return fail('주소가 이상해요'); }
      this.ws = ws; this.setStatus('connecting');
      const timer = setTimeout(() => { fail('서버가 응답하지 않아요'); try { ws.close(); } catch { } }, 9000);
      ws.onopen = () => { this.send({ t: 'hello', ...hello }); };
      ws.onmessage = e => {
        let m; try { m = JSON.parse(e.data); } catch { return; }
        if (m.t === 'hi') { this.token = m.token; this.clientId = m.clientId; this.retries = 0; clearTimeout(timer); this.setStatus('online'); if (!done) { done = true; resolve(m); } }
        if (m.t === 'pong') { this.rtt = performance.now() - m.c; return; }
        if (m.t === 'joined') { this.inRoom = true; this.clientId = m.clientId || this.clientId; }
        this.G.onNet(m);
      };
      ws.onerror = () => fail('연결 실패');
      ws.onclose = () => {
        clearTimeout(timer);
        if (ws !== this.ws) return;
        fail('연결이 끊겼어요');
        if (this.intentional) { this.setStatus('off'); return; }
        // Cloud Run closes sockets after its request timeout — come right back into the same room
        if (this.inRoom && this.retries < 6) {
          this.retries++; this.setStatus('reconnecting');
          setTimeout(() => this.connect(this.base, this.hello).catch(() => { }), 600 * this.retries);
        } else { this.setStatus('off', '연결이 끊겼어요'); this.inRoom = false; this.G.onNet({ t: 'dropped' }); }
      };
    });
  }
  send(o) { if (this.open) this.ws.send(JSON.stringify(o)); }
  leave() { this.send({ t: 'leave' }); this.inRoom = false; }
  close() { this.intentional = true; this.inRoom = false; try { this.ws && this.ws.close(); } catch { } this.ws = null; this.setStatus('off'); }
}
