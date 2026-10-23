// 계정 연동 — Google sign-in + cloud save for records, rank, settings and the trained AI brain.
// Web: the official "Sign in with Google" button. Apps (APK/EXE): Google blocks its login inside web views,
// so the app shows a code and opens the site in the real browser; signing in there links the app.
import { Net } from './net.js';
import { saveSettings, saveRecords } from './settings.js';

const KEY = 'redshift_account';
const BRAIN = 'redshift_ai_brain';
// settings that belong to one device, never synced
const LOCAL_ONLY = new Set(['quality', 'touchUI', 'touchLayout', 'full', 'adaptive', 'fps', 'touchSens']);

const load = () => { try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch { return null; } };
const store = v => { try { v ? localStorage.setItem(KEY, JSON.stringify(v)) : localStorage.removeItem(KEY); } catch { } };

// merge two record sets: best of each number; the rank with more games played (ties → higher RP)
export function mergeRecords(a = {}, b = {}) {
  const out = { ...a };
  for (const [k, v] of Object.entries(b)) {
    if (k === 'rank') {
      const x = a.rank, y = v;
      out.rank = !x ? y : !y ? x : (y.games > x.games || (y.games === x.games && y.r > x.r)) ? { ...y, best: Math.max(x.best || 0, y.best || 0) } : { ...x, best: Math.max(x.best || 0, y.best || 0) };
    } else if (k === 'ffaBest') out[k] = (a[k] && v) ? Math.min(a[k], v) : (a[k] || v || 0); // lower is better, 0 = never
    else if (typeof v === 'number') out[k] = Math.max(a[k] || 0, v);
    else if (!(k in out)) out[k] = v;
  }
  return out;
}
const brainGen = s => { try { return s ? (JSON.parse(s).meta || {}).gen || 0 : -1; } catch { return -1; } };

export class Account {
  constructor({ game, S, onChange, onApplied }) {
    this.game = game; this.S = S; this.onChange = onChange || (() => { }); this.onApplied = onApplied || (() => { });
    const a = load();
    this.token = a && a.token || null; this.user = a && a.user || null; this.base = a && a.base || '';
    this.status = this.token ? 'signed' : 'out'; this.msg = ''; this.lastSync = a && a.lastSync || 0; this.lastHash = '';
    this.cfg = null; this.link = null;
    this.app = !!window.REDSHIFT_APP;
    setInterval(() => this.autosync(), 20000);
    document.addEventListener('visibilitychange', () => { if (document.hidden) this.autosync(true); });
  }
  get signedIn() { return !!this.token; }

  async server() {
    if (this.base) return this.base;
    let b = '';
    if (/^https?:$/.test(location.protocol) && !this.app) b = location.origin;
    else b = Net.defaultServer() || await Net.discover();
    return (this.base = String(b || '').replace(/\/+$/, ''));
  }
  async api(method, path, body, auth = true) {
    const base = await this.server();
    if (!base) throw new Error('서버 주소를 몰라요 — 온라인 화면에서 서버 주소를 먼저 넣어 주세요');
    const h = { 'content-type': 'application/json' };
    if (auth && this.token) h.authorization = 'Bearer ' + this.token;
    let r;
    try { r = await fetch(base + path, { method, headers: h, body: body ? JSON.stringify(body) : undefined }); }
    catch { throw new Error('서버에 연결하지 못했어요'); }
    const j = await r.json().catch(() => ({}));
    if (r.status === 401 && auth && this.token) { this.forget(); }
    if (!r.ok) throw new Error(j.error || `서버 오류 (${r.status})`);
    return j;
  }
  persist() { store(this.token ? { token: this.token, user: this.user, base: this.base, lastSync: this.lastSync } : null); }
  set(status, msg = '') { this.status = status; this.msg = msg; this.onChange(this); }
  forget() { this.token = null; this.user = null; this.persist(); this.set('out', '로그인이 만료됐어요. 다시 로그인해 주세요'); }

  // ---------- what gets saved ----------
  snapshot() {
    const settings = {};
    for (const [k, v] of Object.entries(this.S)) if (!LOCAL_ONLY.has(k)) settings[k] = v;
    let brain = null; try { brain = localStorage.getItem(BRAIN); } catch { }
    return { v: 1, records: this.game.records, settings, brain };
  }
  apply(save) {
    if (!save) return;
    const G = this.game;
    G.records = mergeRecords(G.records, save.records || {});
    saveRecords(G.records);
    if (save.settings) {
      for (const [k, v] of Object.entries(save.settings)) if (!LOCAL_ONLY.has(k) && k in this.S) this.S[k] = v;
      saveSettings(this.S);
    }
    let mine = null; try { mine = localStorage.getItem(BRAIN); } catch { }
    if (save.brain && brainGen(save.brain) > brainGen(mine)) { try { localStorage.setItem(BRAIN, save.brain); } catch { } }
    this.onApplied();
  }
  hash(s) { const t = JSON.stringify(s); let h = 0; for (let i = 0; i < t.length; i++) h = (h * 31 + t.charCodeAt(i)) | 0; return h + ':' + t.length; }

  // ---------- sign-in flows ----------
  async afterLogin(j) {
    this.token = j.token; this.user = j.user; this.persist();
    // first sign-in on this device: combine what's here with what's in the cloud, then upload the result
    if (j.save) this.apply(j.save);
    if (!this.S.name || /^플레이어\d+$/.test(this.S.name)) { this.S.name = String(j.user.name || '').slice(0, 12) || this.S.name; saveSettings(this.S); }
    await this.push(true);
    this.set('signed', '로그인했어요 — 기록이 이 계정에 저장돼요');
  }
  async loginGoogle(credential) {
    this.set('busy', '구글 계정 확인 중…');
    try { await this.afterLogin(await this.api('POST', '/api/auth/google', { credential }, false)); }
    catch (e) { this.set(this.token ? 'signed' : 'out', e.message); }
  }
  async startLink() {
    this.set('busy', '연결 코드를 받는 중…');
    try {
      const j = await this.api('POST', '/api/link/new', null, false);
      this.link = { code: j.code, key: j.key, until: Date.now() + j.ttl * 1000, url: `${await this.server()}/?link=${j.code}` };
      this.set('linking', '');
      this.openBrowser(this.link.url);
      this.pollLink();
    } catch (e) { this.set('out', e.message); }
  }
  openBrowser(url) {
    if (window.REDSHIFT_APP === 'android') { location.href = url; return; }   // the app opens it in the phone's browser
    if (window.rsOpenURL) { window.rsOpenURL(url).catch(() => { }); return; }
    window.open(url, '_blank', 'noopener');
  }
  async pollLink() {
    const L = this.link; if (!L) return;
    if (Date.now() > L.until) { this.link = null; this.set('out', '연결 코드가 만료됐어요. 다시 시도해 주세요'); return; }
    try {
      const j = await this.api('POST', '/api/link/poll', { code: L.code, key: L.key }, false);
      if (j.status === 'ok') { this.link = null; await this.afterLogin(j); return; }
    } catch (e) { if (/만료/.test(e.message)) { this.link = null; this.set('out', e.message); return; } }
    if (this.link === L) setTimeout(() => this.pollLink(), 2500);
  }
  cancelLink() { this.link = null; this.set('out', ''); }
  async approve(code) {
    try { await this.api('POST', '/api/link/approve', { code: String(code).trim().toUpperCase() }); this.set('signed', '앱 연결 완료! 이제 앱으로 돌아가세요 — 몇 초 안에 로그인돼요'); return true; }
    catch (e) { this.set('signed', e.message); return false; }
  }
  async logout() {
    try { await this.push(true); await this.api('POST', '/api/logout'); } catch { }
    this.token = null; this.user = null; this.persist(); this.set('out', '로그아웃했어요 — 이 기기의 기록은 그대로 남아 있어요');
  }

  // ---------- sync ----------
  async refresh() {   // on start: pull what other devices saved, merge, push back
    if (!this.token) return;
    try {
      const j = await this.api('GET', '/api/me');
      this.user = j.user; this.persist();
      if (j.save) this.apply(j.save);
      await this.push();
      this.set('signed', '');
    } catch (e) { if (this.token) this.set('signed', e.message); }
  }
  async push(force = false) {
    if (!this.token) return;
    const s = this.snapshot(), h = this.hash(s);
    if (!force && h === this.lastHash) return;
    const j = await this.api('PUT', '/api/save', { save: s });
    this.lastHash = h; this.lastSync = j.updated || Date.now(); this.persist(); this.onChange(this);
  }
  autosync(now = false) {
    if (!this.token || this.status === 'busy') return;
    if (this.game.state === 'play' && !now) return; // never during a match
    this.push().catch(() => { });
  }
  async config() {
    if (this.cfg) return this.cfg;
    try { this.cfg = await this.api('GET', '/api/auth/config', null, false); } catch (e) { this.cfg = { clientId: '', storage: 'unknown', error: e.message }; }
    return this.cfg;
  }
  // Google's own button (web only)
  async renderGoogleButton(el) {
    const cfg = await this.config();
    el.innerHTML = '';
    if (!cfg.clientId) return false;
    if (!window.google || !window.google.accounts) {
      await new Promise((ok, bad) => { const s = document.createElement('script'); s.src = 'https://accounts.google.com/gsi/client'; s.async = true; s.onload = ok; s.onerror = bad; document.head.appendChild(s); }).catch(() => { });
    }
    if (!window.google || !window.google.accounts) return false;
    google.accounts.id.initialize({ client_id: cfg.clientId, callback: r => this.loginGoogle(r.credential), ux_mode: 'popup', auto_select: false });
    google.accounts.id.renderButton(el, { theme: 'filled_black', size: 'large', shape: 'pill', text: 'signin_with', locale: 'ko', width: Math.min(320, el.clientWidth || 300) });
    return true;
  }
}
