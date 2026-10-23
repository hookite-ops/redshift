// REDSHIFT multiplayer server — serves the game files AND runs WebSocket rooms (Cloud Run, port 8080).
//
// Model: each client simulates its own player (and, for the room host, the room's bots) and reports
// state ~30x/s. Hits are detected by the thrower's client and sent as "hit"; the SERVER owns health,
// kills, regen, respawn and the match clock, so everyone agrees on the score.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { WebSocketServer } from 'ws';
import { createAuth } from './auth.js';

const __dir = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = process.env.PUBLIC_DIR || path.resolve(__dir, '..', 'public');
const PORT = +process.env.PORT || 8080;
const MAX_PLAYERS = 8;
const COLORS = [0xff5a1f, 0x2f6bff, 0x16a864, 0x8a4dff, 0xe0a800, 0xff3fa4, 0x12a9b8, 0x6b7280];
const BOT_NAMES = ['VEGA', 'NOVA', 'KITE', 'FLUX', 'ECHO', 'RAZE', 'ORBIT'];
const PERSONAS = { rusher: [['heavy', 'disc', 'nova', 'saw'], ['overdrive', 'heal']], sniper: [['rail', 'prism'], ['reflect', 'gravity']], trick: [['boomerang', 'disc', 'splitter', 'prism'], ['gravity', 'overdrive']], guard: [['disc', 'heavy', 'seeker', 'saw'], ['reflect', 'heal']] };
const WEAPONS = ['disc', 'heavy', 'rail', 'boomerang', 'splitter', 'saw', 'seeker', 'nova', 'prism'], SKILLS = ['reflect', 'overdrive', 'gravity', 'heal'];
const MAPS = ['arena', 'spire', 'lanes', 'forest', 'orbit'];
const nextMap = cur => { const o = MAPS.filter(m => m !== cur); return o[(Math.random() * o.length) | 0]; };
const pick = a => a[(Math.random() * a.length) | 0];
const now = () => Date.now() / 1000;
const clean = (s, n) => String(s || '').replace(/[<>&"'`\\\u0000-\u001f]/g, '').trim().slice(0, n);

// ---------------------------------------------------------------- static files
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript; charset=utf-8', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.txt': 'text/plain; charset=utf-8', '.webmanifest': 'application/manifest+json' };
const cache = new Map();
function serveStatic(req, res) {
  let p = decodeURIComponent((req.url || '/').split('?')[0]);
  if (p === '/' || p === '') p = '/index.html';
  const file = path.resolve(PUBLIC, '.' + p);
  if (!file.startsWith(PUBLIC)) { res.writeHead(403); return res.end(); }
  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404, { 'content-type': 'text/plain' }); return res.end('not found'); }
    const type = MIME[path.extname(file)] || 'application/octet-stream';
    const gz = /gzip/.test(req.headers['accept-encoding'] || '') && /text|javascript|json|svg/.test(type);
    const key = file + (gz ? ':gz' : '') + ':' + st.mtimeMs;
    let body = cache.get(key);
    if (!body) { body = fs.readFileSync(file); if (gz) body = zlib.gzipSync(body); cache.set(key, body); }
    const h = { 'content-type': type, 'cache-control': /index\.html|game\.js|config\.js/.test(file) ? 'no-cache' : 'public, max-age=3600', 'access-control-allow-origin': '*' };
    if (gz) h['content-encoding'] = 'gzip';
    res.writeHead(200, h); res.end(body);
  });
}
const auth = createAuth({ publicDir: PUBLIC });
const server = http.createServer(async (req, res) => {
  if (req.url.startsWith('/api/') && await auth.handle(req, res)) return;
  if (req.url === '/health') { res.writeHead(200, { 'access-control-allow-origin': '*' }); return res.end('ok'); }
  if (req.url === '/rooms') { res.writeHead(200, { 'content-type': 'application/json', 'access-control-allow-origin': '*' }); return res.end(JSON.stringify(roomList())); }
  serveStatic(req, res);
});

// ---------------------------------------------------------------- rooms
const rooms = new Map();      // code → room
const clients = new Map();    // clientId → client
const tokens = new Map();     // resume token → client (kept for a grace period after a drop)
let nextClient = 1;

function code4() { let c; do { c = Array.from({ length: 4 }, () => 'ABCDEFGHJKLMNPQRSTUVWXYZ'[(Math.random() * 24) | 0]).join(''); } while (rooms.has(c)); return c; }
function makeRoom({ name, priv = false, bots = 3, botSkill = 'hard', limit = 15, duration = 300, map = 'rotate' } = {}) {
  const r = {
    code: code4(), name: clean(name, 24) || '자유 대전', priv: !!priv, botSkill: ['easy', 'normal', 'hard', 'max', 'ai'].includes(botSkill) ? botSkill : 'hard',
    wantBots: Math.max(0, Math.min(6, bots | 0)), limit: Math.max(3, Math.min(50, limit | 0)), duration: Math.max(60, Math.min(900, duration | 0)),
    players: new Map(), clients: new Set(), host: null, state: 'play', timeLeft: 0, overT: 0, nextId: 1, created: now(),
  };
  r.timeLeft = r.duration;
  // a fixed map, or 'rotate': a new map every round
  r.mapMode = MAPS.includes(map) ? 'fixed' : 'rotate';
  r.map = MAPS.includes(map) ? map : nextMap(null);
  rooms.set(r.code, r);
  return r;
}
function roomList() {
  return [...rooms.values()].filter(r => !r.priv).map(r => ({ code: r.code, name: r.name, humans: humans(r).length, bots: [...r.players.values()].filter(p => p.bot).length, max: MAX_PLAYERS, state: r.state, map: r.map }));
}
const humans = r => [...r.players.values()].filter(p => !p.bot);
function freeColor(r) { const used = new Set([...r.players.values()].map(p => p.color)); return COLORS.find(c => !used.has(c)) ?? pick(COLORS); }
function pub(p) { return { id: p.id, name: p.name, color: p.color, weapon: p.weapon, skill: p.skill, bot: p.bot, persona: p.persona, owner: p.owner, hp: Math.round(p.hp), alive: p.alive, kills: p.kills, deaths: p.deaths }; }
function send(c, m) { if (c && c.ws && c.ws.readyState === 1) c.ws.send(typeof m === 'string' ? m : JSON.stringify(m)); }
function cast(r, m, except = null) { const s = JSON.stringify(m); for (const c of r.clients) if (c !== except) send(c, s); }
function addPlayer(r, o) {
  const p = { id: 'p' + r.nextId++, hp: 100, alive: true, kills: 0, deaths: 0, prot: now() + 1.5, lastDmg: 0, healT: 0, st: null, ...o };
  p.color = o.color ?? freeColor(r);
  r.players.set(p.id, p);
  return p;
}
// bots fill the room up to the requested count while there's space; the host simulates them
function fillBots(r) {
  const bots = [...r.players.values()].filter(p => p.bot);
  const room = MAX_PLAYERS - r.players.size;
  const want = Math.min(r.wantBots, bots.length + room);
  const added = [];
  for (let i = bots.length; i < want; i++) {
    const used = new Set([...r.players.values()].map(p => p.name));
    const persona = pick(Object.keys(PERSONAS)), [ws, ss] = PERSONAS[persona];
    const p = addPlayer(r, { name: BOT_NAMES.find(n => !used.has(n)) || 'BOT' + i, bot: true, persona, weapon: pick(ws), skill: pick(ss), owner: r.host ? r.host.id : null });
    added.push(p); cast(r, { t: 'join', p: pub(p) });
  }
  // too many players now? drop bots first
  while (r.players.size > MAX_PLAYERS || (bots.length > r.wantBots)) {
    const b = [...r.players.values()].reverse().find(p => p.bot); if (!b) break;
    r.players.delete(b.id); cast(r, { t: 'leave', id: b.id }); bots.pop();
  }
  return added;
}
function setHost(r, c) {
  r.host = c;
  if (!c) return;
  const bots = [...r.players.values()].filter(p => p.bot);
  for (const b of bots) b.owner = c.id;
  send(c, { t: 'host', bots: bots.map(pub), botSkill: r.botSkill });
  cast(r, { t: 'owners', list: bots.map(b => [b.id, c.id]) }, c);
}
function joinRoom(c, r) {
  if (c.room) leaveRoom(c, true);
  if (humans(r).length >= MAX_PLAYERS) { send(c, { t: 'err', msg: '방이 꽉 찼어요' }); return; }
  // make space by removing a bot if needed
  if (r.players.size >= MAX_PLAYERS) { const b = [...r.players.values()].reverse().find(p => p.bot); if (b) { r.players.delete(b.id); cast(r, { t: 'leave', id: b.id }); } }
  const p = addPlayer(r, { name: c.name, weapon: c.weapon, skill: c.skill, bot: false, owner: c.id });
  c.room = r; c.pid = p.id; r.clients.add(c);
  const becameHost = !r.host;
  if (becameHost) r.host = c;
  cast(r, { t: 'join', p: pub(p) }, c);
  send(c, { t: 'joined', code: r.code, name: r.name, you: p.id, clientId: c.id, players: [...r.players.values()].map(pub), match: matchInfo(r), botSkill: r.botSkill, host: r.host === c });
  fillBots(r);
  if (becameHost) setHost(r, c);
}
function leaveRoom(c, quiet = false) {
  const r = c.room; if (!r) return;
  r.clients.delete(c);
  if (c.pid) { r.players.delete(c.pid); cast(r, { t: 'leave', id: c.pid }); }
  c.room = null; c.pid = null;
  if (r.clients.size === 0) { rooms.delete(r.code); return; }
  if (r.host === c) setHost(r, [...r.clients][0]);
  fillBots(r);
}
function matchInfo(r) { return { state: r.state, limit: r.limit, timeLeft: Math.round(r.timeLeft), ranking: ranking(r), map: r.map }; }
function ranking(r) { return [...r.players.values()].sort((a, b) => b.kills - a.kills || a.deaths - b.deaths).map(p => [p.id, p.kills, p.deaths]); }

// ---------------------------------------------------------------- combat (server owns health)
function onHit(c, m) {
  const r = c.room; if (!r || r.state !== 'play') return;
  const by = r.players.get(m.by), t = r.players.get(m.target);
  if (!by || !t || !t.alive) return;
  // normally you can only report hits by players you own; a reflected disc hitting YOU is reported by you
  if (by.owner !== c.id && !(m.kind === 'reflect' && t.owner === c.id)) return;
  const tnow = now();
  if (t.prot > tnow) return;
  const dmg = Math.max(1, Math.min(100, +m.dmg || 0));
  t.hp -= dmg; t.lastDmg = tnow; t.lastBy = by.id;
  const dmgMsg = { t: 'dmg', target: t.id, by: by.id, dmg: Math.round(dmg), kind: clean(m.kind, 10), dir: Array.isArray(m.dir) ? m.dir.slice(0, 3).map(Number) : [0, 0, 0], b: m.b | 0, hp: Math.max(0, Math.round(t.hp)) };
  cast(r, dmgMsg);
  if (t.hp <= 0) {
    t.hp = 0; t.alive = false; t.deaths++; t.healT = 0;
    if (by !== t) { by.kills++; by.hp = Math.min(100, by.hp + 25); }
    cast(r, { t: 'kill', victim: t.id, by: by.id, kind: dmgMsg.kind, b: dmgMsg.b, dir: dmgMsg.dir, kills: by.kills, deaths: t.deaths, hp: Math.round(by.hp) });
    if (by.kills >= r.limit) endMatch(r);
  }
}
function endMatch(r) {
  if (r.state !== 'play') return;
  r.state = 'over'; r.overT = 8;
  cast(r, { t: 'match', ...matchInfo(r) });
}
function resetMatch(r) {
  r.state = 'play'; r.timeLeft = r.duration;
  if (r.mapMode === 'rotate') r.map = nextMap(r.map);
  for (const p of r.players.values()) { p.kills = 0; p.deaths = 0; p.hp = 100; p.alive = true; p.prot = now() + 2; }
  cast(r, { t: 'match', ...matchInfo(r), reset: true, players: [...r.players.values()].map(pub) });
}

// ---------------------------------------------------------------- messages
function onMessage(c, raw) {
  let m; try { m = JSON.parse(raw); } catch { return; }
  if (!m || typeof m.t !== 'string') return;
  c.seen = now();
  const r = c.room;
  switch (m.t) {
    case 'hello': {
      c.name = clean(m.name, 12) || '플레이어';
      c.weapon = WEAPONS.includes(m.weapon) ? m.weapon : 'disc';
      c.skill = SKILLS.includes(m.skill) ? m.skill : 'reflect';
      send(c, { t: 'hi', clientId: c.id, token: c.token, rooms: roomList() });
      break;
    }
    case 'list': send(c, { t: 'rooms', rooms: roomList() }); break;
    case 'quick': {
      const open = [...rooms.values()].filter(x => !x.priv && humans(x).length < MAX_PLAYERS).sort((a, b) => humans(b).length - humans(a).length)[0];
      joinRoom(c, open || makeRoom({ name: c.name + '의 방', bots: 3 }));
      break;
    }
    case 'create': joinRoom(c, makeRoom({ name: m.name, priv: m.priv, bots: m.bots, botSkill: m.botSkill, limit: m.limit, duration: m.duration, map: m.map })); break;
    case 'join': {
      const x = rooms.get(String(m.code || '').toUpperCase());
      if (!x) send(c, { t: 'err', msg: '그 코드의 방이 없어요' }); else joinRoom(c, x);
      break;
    }
    case 'leave': leaveRoom(c); break;
    case 'st': { // movement snapshot for a player this client owns → everyone else
      if (!r) return;
      const p = r.players.get(m.id); if (!p || p.owner !== c.id) return;
      p.st = m; m.hp = Math.round(p.hp); m.al = p.alive ? 1 : 0;
      cast(r, m, c);
      break;
    }
    case 'hit': if (r) onHit(c, m); break;
    case 'respawn': {
      if (!r) return;
      const p = r.players.get(m.id); if (!p || p.owner !== c.id || p.alive) return;
      p.alive = true; p.hp = 100; p.prot = now() + 1.5;
      cast(r, { t: 'spawn', id: p.id, hp: 100 });
      break;
    }
    case 'heal': {
      if (!r) return;
      const p = r.players.get(m.id); if (!p || p.owner !== c.id || !p.alive) return;
      p.hp = Math.min(100, p.hp + 35); p.healT = 2;
      cast(r, { t: 'hp', list: [[p.id, Math.round(p.hp)]] });
      break;
    }
    case 'fx': { if (!r) return; const p = r.players.get(m.id); if (!p || p.owner !== c.id) return; cast(r, m, c); break; }
    case 'loadout': {
      if (!r) return;
      const p = r.players.get(c.pid); if (!p) return;
      if (WEAPONS.includes(m.weapon)) p.weapon = m.weapon; if (SKILLS.includes(m.skill)) p.skill = m.skill;
      cast(r, { t: 'loadout', id: p.id, weapon: p.weapon, skill: p.skill });
      break;
    }
    case 'ping': send(c, { t: 'pong', c: m.c }); break;
  }
}

// ---------------------------------------------------------------- connections
const wss = new WebSocketServer({ server, path: '/ws', maxPayload: 16 * 1024 });
wss.on('connection', (ws, req) => {
  const url = new URL(req.url, 'http://x');
  const resume = url.searchParams.get('resume');
  let c = resume && tokens.get(resume);
  if (c && c.dropT) {                    // came back within the grace period: same player, same room
    c.ws = ws; c.dropT = 0;
    if (c.room) send(c, { t: 'joined', code: c.room.code, name: c.room.name, you: c.pid, clientId: c.id, players: [...c.room.players.values()].map(pub), match: matchInfo(c.room), botSkill: c.room.botSkill, host: c.room.host === c, resumed: true });
    if (c.room && c.room.host === c) setHost(c.room, c);
  } else {
    c = { id: 'c' + nextClient++, ws, token: crypto.randomBytes(9).toString('base64url'), room: null, pid: null, name: '플레이어', weapon: 'disc', skill: 'reflect', seen: now(), dropT: 0 };
    clients.set(c.id, c); tokens.set(c.token, c);
  }
  ws.on('message', d => onMessage(c, d));
  ws.on('close', () => { if (c.ws === ws) { c.ws = null; c.dropT = now(); } });
  ws.on('error', () => { });
});

// ---------------------------------------------------------------- world clock (10 Hz)
let hpT = 0;
setInterval(() => {
  const t = now(), dt = 0.1;
  // drop clients that didn't come back
  for (const c of clients.values()) {
    if (c.dropT && t - c.dropT > 12) { leaveRoom(c); clients.delete(c.id); tokens.delete(c.token); }
  }
  hpT += dt;
  for (const r of rooms.values()) {
    if (r.state === 'play') {
      r.timeLeft -= dt;
      if (r.timeLeft <= 0) endMatch(r);
    } else if ((r.overT -= dt) <= 0) resetMatch(r);
    const changed = [];
    for (const p of r.players.values()) {
      if (!p.alive || p.hp >= 100) continue;
      let add = 0;
      if (p.healT > 0) { p.healT -= dt; add += 12 * dt; }
      if (t - p.lastDmg > 5) add += 8 * dt;
      if (add > 0) { p.hp = Math.min(100, p.hp + add); changed.push([p.id, Math.round(p.hp)]); }
    }
    if (changed.length && hpT >= 0.25) cast(r, { t: 'hp', list: changed });
    if (Math.round(r.timeLeft * 10) % 10 === 0) cast(r, { t: 'clock', timeLeft: Math.round(r.timeLeft), state: r.state });
  }
  if (hpT >= 0.25) hpT = 0;
}, 100);

server.listen(PORT, () => console.log(`REDSHIFT server on :${PORT} (files: ${PUBLIC})`));
if (process.env.DEBUG_NET) setInterval(() => { for (const r of rooms.values()) console.log(r.code, [...r.players.values()].map(p => `${p.name}:${Math.round(p.hp)} k${p.kills}`).join(' ')); }, 5000);
