// REDSHIFT accounts — Google sign-in + cloud save, no extra npm packages.
//
//   · Google ID tokens are checked with Google's tokeninfo endpoint (audience must be our client ID).
//   · Saves and sessions live in Firestore (same Google Cloud project as Cloud Run; the service's default
//     account can use it). Until Firestore is created, everything still works from memory (lost on restart).
//   · Apps (APK / EXE) can't show Google's login inside their web view, so they use a device link:
//     the app asks for a code, opens the site in the phone's browser, you sign in there, and the app is handed
//     a session for the same account.
//
// HTTP API (JSON, CORS open, Bearer token auth):
//   GET  /api/auth/config            → { clientId, storage }
//   POST /api/auth/google {credential} → { token, user, save, updated }
//   GET  /api/me                     → { user, save, updated }
//   PUT  /api/save {save}            → { updated }
//   POST /api/logout
//   POST /api/link/new               → { code, key }
//   POST /api/link/approve {code}    (signed in, from the browser)
//   POST /api/link/poll {code, key}  → { status: 'wait' | 'ok', token, user, save, updated }
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const MAX_BODY = 900 * 1024;
const SESSION_DAYS = 180;
const DEV = process.env.AUTH_DEV === '1';           // tests: accept "dev:<sub>:<name>" as a credential
const sha = s => crypto.createHash('sha256').update(s).digest('hex');
const now = () => Date.now();

export function createAuth({ publicDir }) {
  // ---------- config: client ID from the env or public/auth.json (a Google client ID is not a secret) ----------
  let clientId = process.env.GOOGLE_CLIENT_ID || '';
  const readCfg = () => {
    if (process.env.GOOGLE_CLIENT_ID) return;
    try { clientId = String(JSON.parse(fs.readFileSync(path.join(publicDir, 'auth.json'), 'utf8')).googleClientId || '').trim(); } catch { clientId = ''; }
  };
  readCfg();

  // ---------- storage: Firestore over REST with the metadata-server token, else memory ----------
  const mem = { users: new Map(), sessions: new Map() };
  let fsReady = null, project = null, tok = null, tokExp = 0, storage = 'memory', probedAt = 0;
  const meta = async p => {
    // the metadata IP, not its DNS name: a name lookup that hangs would block the whole server
    const r = await fetch('http://169.254.169.254/computeMetadata/v1/' + p, { headers: { 'Metadata-Flavor': 'Google' }, signal: AbortSignal.timeout(1500) });
    if (!r.ok) throw new Error('metadata ' + r.status); return r;
  };
  async function token() {
    if (tok && now() < tokExp) return tok;
    const j = await (await meta('instance/service-accounts/default/token')).json();
    tok = j.access_token; tokExp = now() + (j.expires_in - 60) * 1000; return tok;
  }
  async function initStore() {
    // a "no database yet" answer is re-checked every 2 minutes, so creating Firestore later just starts working
    if (fsReady === true || (fsReady === false && now() - probedAt < 120e3)) return fsReady;
    probedAt = now();
    // only Cloud Run (K_SERVICE) or an explicit project has Firestore; anywhere else stay in memory
    if (!process.env.K_SERVICE && !process.env.GOOGLE_CLOUD_PROJECT) { fsReady = false; storage = 'memory'; return false; }
    try {
      project = process.env.GOOGLE_CLOUD_PROJECT || (await (await meta('project/project-id')).text());
      await token();
      // probe: a missing database answers 404 / 400 → stay in memory and say so
      const r = await fsReq('GET', 'users/__probe__');
      fsReady = r.status === 200 || (r.status === 404 && !/does not exist for project|NOT_FOUND.*database/i.test(await r.text()));
    } catch (e) { fsReady = false; }
    const was = storage; storage = fsReady ? 'firestore' : 'memory';
    if (was !== storage || !fsReady && probedAt) console.log('[auth] storage:', storage, project || '');
    if (fsReady && mem.users.size) { // anything saved while Firestore was missing is moved over
      for (const [k, v] of mem.users) await put('users', k, v).catch(() => { });
      for (const [k, v] of mem.sessions) await put('sessions', k, v).catch(() => { });
      mem.users.clear(); mem.sessions.clear();
    }
    return fsReady;
  }
  const base = () => `https://firestore.googleapis.com/v1/projects/${project}/databases/(default)/documents/`;
  async function fsReq(method, doc, body) {
    return fetch(base() + doc, { method, headers: { authorization: 'Bearer ' + await token(), 'content-type': 'application/json' }, body: body ? JSON.stringify(body) : undefined, signal: AbortSignal.timeout(8000) });
  }
  // documents hold one JSON string field — no Firestore type mapping needed
  async function get(coll, id) {
    if (!(await initStore())) return mem[coll].get(id) || null;
    const r = await fsReq('GET', `${coll}/${encodeURIComponent(id)}`);
    if (r.status === 404) return null;
    if (!r.ok) throw new Error('firestore get ' + r.status);
    const j = await r.json(); try { return JSON.parse(j.fields.data.stringValue); } catch { return null; }
  }
  async function put(coll, id, value) {
    if (!(await initStore())) { mem[coll].set(id, value); return; }
    const r = await fsReq('PATCH', `${coll}/${encodeURIComponent(id)}`, { fields: { data: { stringValue: JSON.stringify(value) } } });
    if (!r.ok) throw new Error('firestore put ' + r.status + ' ' + (await r.text()).slice(0, 200));
  }
  async function del(coll, id) {
    if (!(await initStore())) { mem[coll].delete(id); return; }
    await fsReq('DELETE', `${coll}/${encodeURIComponent(id)}`);
  }

  // ---------- Google ID token ----------
  async function verifyGoogle(credential) {
    if (DEV && credential.startsWith('dev:')) { const [, sub, name] = credential.split(':'); return { sub: 'dev-' + sub, name: name || sub, email: sub + '@dev', picture: '' }; }
    if (!clientId) throw Object.assign(new Error('구글 로그인 설정(클라이언트 ID)이 아직 없어요'), { code: 503 });
    const r = await fetch('https://oauth2.googleapis.com/tokeninfo?id_token=' + encodeURIComponent(credential), { signal: AbortSignal.timeout(8000) });
    if (!r.ok) throw Object.assign(new Error('구글 로그인을 확인하지 못했어요'), { code: 401 });
    const c = await r.json();
    if (c.aud !== clientId || !/accounts\.google\.com$/.test(c.iss) || +c.exp * 1000 < now()) throw Object.assign(new Error('잘못된 로그인 정보예요'), { code: 401 });
    return { sub: c.sub, name: c.name || c.given_name || (c.email || '').split('@')[0], email: c.email || '', picture: c.picture || '' };
  }

  // ---------- sessions ----------
  async function newSession(uid) {
    const t = crypto.randomBytes(32).toString('base64url');
    await put('sessions', sha(t), { uid, exp: now() + SESSION_DAYS * 864e5 });
    return t;
  }
  async function who(req) {
    const m = /^Bearer\s+(\S+)/.exec(req.headers.authorization || ''); if (!m) return null;
    const s = await get('sessions', sha(m[1]));
    if (!s || s.exp < now()) return null;
    return { uid: s.uid, key: sha(m[1]) };
  }
  const pub = u => ({ name: u.name, email: u.email, picture: u.picture, since: u.since });
  async function loginResult(uid) {
    const u = await get('users', uid), t = await newSession(uid);
    return { token: t, user: pub(u), save: u.save || null, updated: u.updated || 0 };
  }

  // ---------- device link (apps) ----------
  const links = new Map(); // code → { key, exp, uid? }
  const linkCode = () => { let c; do { c = Array.from({ length: 6 }, () => 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[crypto.randomInt(32)]).join(''); } while (links.has(c)); return c; };
  setInterval(() => { const t = now(); for (const [c, l] of links) if (l.exp < t) links.delete(c); }, 60e3).unref();

  // ---------- HTTP ----------
  const send = (res, code, obj) => { res.writeHead(code, { 'content-type': 'application/json; charset=utf-8', 'access-control-allow-origin': '*', 'cache-control': 'no-store' }); res.end(JSON.stringify(obj)); };
  const body = req => new Promise((ok, bad) => {
    let n = 0; const parts = [];
    req.on('data', c => { n += c.length; if (n > MAX_BODY) { bad(Object.assign(new Error('너무 큰 데이터예요'), { code: 413 })); req.destroy(); } else parts.push(c); });
    req.on('end', () => { try { ok(parts.length ? JSON.parse(Buffer.concat(parts).toString('utf8')) : {}); } catch { bad(Object.assign(new Error('잘못된 요청'), { code: 400 })); } });
    req.on('error', bad);
  });
  const ipHits = new Map(); // tiny rate limit for login/link endpoints
  const limited = req => {
    const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim(), t = now();
    const h = (ipHits.get(ip) || []).filter(x => t - x < 60e3); h.push(t); ipHits.set(ip, h);
    if (ipHits.size > 5000) ipHits.clear();
    return h.length > 60;
  };

  async function handle(req, res) {
    const url = new URL(req.url, 'http://x'), p = url.pathname;
    if (!p.startsWith('/api/')) return false;
    if (req.method === 'OPTIONS') {
      res.writeHead(204, { 'access-control-allow-origin': '*', 'access-control-allow-methods': 'GET,POST,PUT,OPTIONS', 'access-control-allow-headers': 'authorization,content-type', 'access-control-max-age': '86400' });
      res.end(); return true;
    }
    try {
      if (p === '/api/auth/config') { readCfg(); await initStore(); return send(res, 200, { clientId, storage }), true; }
      if ((p === '/api/auth/google' || p.startsWith('/api/link/')) && limited(req)) return send(res, 429, { error: '잠시 후 다시 해 주세요' }), true;
      if (p === '/api/auth/google' && req.method === 'POST') {
        const { credential } = await body(req);
        if (!credential) return send(res, 400, { error: '로그인 정보가 없어요' }), true;
        const g = await verifyGoogle(String(credential)), uid = 'g' + g.sub;
        const u = (await get('users', uid)) || { since: now(), save: null, updated: 0 };
        Object.assign(u, { name: g.name, email: g.email, picture: g.picture, last: now() });
        await put('users', uid, u);
        return send(res, 200, await loginResult(uid)), true;
      }
      if (p === '/api/link/new' && req.method === 'POST') {
        const code = linkCode(), key = crypto.randomBytes(18).toString('base64url');
        links.set(code, { key: sha(key), exp: now() + 10 * 60e3 });
        return send(res, 200, { code, key, ttl: 600 }), true;
      }
      if (p === '/api/link/poll' && req.method === 'POST') {
        const { code, key } = await body(req), l = links.get(String(code || '').toUpperCase());
        if (!l || l.key !== sha(String(key || ''))) return send(res, 404, { error: '연결 코드가 만료됐어요' }), true;
        if (!l.uid) return send(res, 200, { status: 'wait' }), true;
        links.delete(String(code).toUpperCase());
        return send(res, 200, { status: 'ok', ...(await loginResult(l.uid)) }), true;
      }
      // everything below needs a session
      const me = await who(req);
      if (!me) return send(res, 401, { error: '로그인이 필요해요' }), true;
      if (p === '/api/link/approve' && req.method === 'POST') {
        const { code } = await body(req), c = String(code || '').toUpperCase().trim(), l = links.get(c);
        if (!l) return send(res, 404, { error: '코드가 없거나 만료됐어요 (10분)' }), true;
        l.uid = me.uid;
        return send(res, 200, { ok: true }), true;
      }
      if (p === '/api/me' && req.method === 'GET') {
        const u = await get('users', me.uid); if (!u) return send(res, 401, { error: '계정이 없어요' }), true;
        return send(res, 200, { user: pub(u), save: u.save || null, updated: u.updated || 0 }), true;
      }
      if (p === '/api/save' && req.method === 'PUT') {
        const { save } = await body(req);
        if (!save || typeof save !== 'object') return send(res, 400, { error: '저장할 내용이 없어요' }), true;
        const u = await get('users', me.uid); if (!u) return send(res, 401, { error: '계정이 없어요' }), true;
        u.save = save; u.updated = now();
        await put('users', me.uid, u);
        return send(res, 200, { updated: u.updated }), true;
      }
      if (p === '/api/logout' && req.method === 'POST') { await del('sessions', me.key); return send(res, 200, { ok: true }), true; }
      send(res, 404, { error: 'not found' }); return true;
    } catch (e) {
      console.error('[auth]', e.message);
      send(res, e.code && e.code < 600 ? e.code : 500, { error: e.code ? e.message : '서버 오류가 났어요' }); return true;
    }
  }
  initStore();
  return { handle };
}
