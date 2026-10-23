// ONLINE mode — installs multiplayer behaviour onto Game.
// Each client simulates its own fighter (+ the room's bots if it is the host) and streams snapshots;
// other players are "remote" fighters drawn from interpolated snapshots. Hits are detected by the
// thrower's client and sent to the server, which owns health, kills, respawns and the match clock.
import * as THREE from 'three';
import { Fighter } from './fighter.js';
import { BotBrain, PERSONAS } from './bot.js';
import { makeBrain } from './neurobot.js';
import { SKILLS } from './skills.js';

const INTERP = 0.08;           // seconds of interpolation delay for remote players
const SEND_HZ = 30;
const r2 = v => Math.round(v * 100) / 100;
const r3 = v => Math.round(v * 1000) / 1000;
const nowS = () => performance.now() / 1000;
const V = (a) => new THREE.Vector3(a[0], a[1], a[2]);

export function installOnline(Game) {
  const G = Game.prototype;

  // ---------------------------------------------------------------- lifecycle
  G.startOnline = function (m) {
    const S = this.S;
    this.netMap = (m.match && m.match.map) || 'arena';
    this.start('online');
    this.online = true; this.versus = true; this.roomCode = m.code; this.roomName = m.name;
    this.isHost = !!m.host; this.netBotSkill = m.botSkill || 'hard'; this.botSkill = this.netBotSkill;
    this.rankedOnline = m.ranked ? (this.rankedOnline || { op: null }) : null;
    this.byId = new Map(); this.sendT = 0; this.menuOpen = false;
    const me = this.me;
    me.netId = m.you; me.name = (S.name || '나'); this.byId.set(me.netId, me);
    for (const p of m.players) if (p.id !== m.you) this.addNetFighter(p);
    const mine = m.players.find(p => p.id === m.you);
    if (mine) { me.color = mine.color; me.css = '#' + mine.color.toString(16).padStart(6, '0'); me.kills = mine.kills; me.deaths = mine.deaths; }
    this.applyMatch(m.match);
    this.respawn(me, true);
    if (!m.ranked) this.banner('온라인', `방 ${m.code} · ${this.mapName} · ${m.players.filter(p => !p.bot).length}명 접속 · ${this.match.limit}킬 먼저`, 2.6);
    this.cls('board', 'hidden', false);
    this._boardHtml = '';
    try { this.renderer.compile(this.scene, this.camera); } catch { }
  };
  G.leaveOnline = function () {
    if (!this.online) return;
    this.net.leave(); this.net.close();
    this.online = false;
  };
  G.applyMatch = function (mt) {
    if (!mt) return;
    this.match = { limit: mt.limit, timeLeft: mt.timeLeft, over: mt.state !== 'play', online: true };
    if (mt.ranking) for (const [id, k, d] of mt.ranking) { const f = this.byId.get(id); if (f) { f.kills = k; f.deaths = d; } }
  };
  G.addNetFighter = function (p) {
    const local = p.bot && p.owner === this.net.clientId;
    const f = new Fighter(this, { name: p.name, color: p.color, isBot: true, weapon: p.weapon, skill: p.skill, skin: p.look && p.look.skin, wskin: p.look && p.look.wskin, killfx: p.look && p.look.killfx });
    f.netId = p.id; f.netBot = p.bot; f.persona = p.persona;
    f.kills = p.kills || 0; f.deaths = p.deaths || 0; f.hp = p.hp ?? 100; f.alive = p.alive !== false;
    f.snaps = [];
    if (local) this.makeLocal(f);
    else { f.remote = true; f.body.reset(new THREE.Vector3(0, -50, 0), 0); f.model.visible = false; f.seen = false; }
    this.fighters.push(f); this.byId.set(p.id, f);
    try { this.renderer.compile(this.scene, this.camera); } catch { }
    return f;
  };
  // this client now simulates f (a bot): give it a brain and put it in the world
  G.makeLocal = function (f) {
    f.remote = false;
    const per = PERSONAS.find(x => x.id === f.persona) || PERSONAS[(Math.random() * PERSONAS.length) | 0];
    f.brain = this.netBotSkill === 'ai' ? makeBrain(this, f, per) : new BotBrain(this, f, this.netBotSkill, per);
    f.alive = true; f.hp = Math.max(1, f.hp);
    this.respawn(f, true);
  };

  // ---------------------------------------------------------------- incoming
  G.onNet = function (m) {
    const by = id => this.byId && this.byId.get(id);
    switch (m.t) {
      case 'joined':
        if (m.resumed && this.online) { this.applyMatch(m.match); return; }
        this.startOnline(m); this.onJoined && this.onJoined(m);
        return;
      case 'rooms': case 'hi': this.onRooms && this.onRooms(m.rooms || []); return;
      case 'err': this.onNetError && this.onNetError(m.msg); return;
      case 'dropped': if (this.online) { this.online = false; this.onNetDropped && this.onNetDropped(); } return;
      // ranked (players only): queue status, the pairing, the server's verdict, the room closing
      case 'rankq': this.onRankQueue && this.onRankQueue(m); return;
      case 'rankmatch':
        this.rankedOnline = { you: m.you, op: m.op };
        this.banner('랭크전', `${m.you.name} (${m.you.tier} ${m.you.r})  VS  ${m.op.name} (${m.op.tier} ${m.op.r}) · 5킬 먼저`, 3.2);
        this.audio.checkpoint && this.audio.checkpoint(false);
        return;
      case 'rankres': { const got = this.award(m.result === 'win' ? 150 : m.result === 'draw' ? 80 : 50, '랭크전'); m.coins = got; this.rankResult = m; this.onRankResult && this.onRankResult(m); return; }
      case 'closed': if (this.online) { this.online = false; this.net.inRoom = false; this.onRankClosed && this.onRankClosed(); } return;
    }
    if (!this.online) return;
    switch (m.t) {
      case 'join': {
        if (by(m.p.id)) return;
        const f = this.addNetFighter(m.p);
        if (!m.p.bot) { this.feedText(`${m.p.name} 님이 들어왔어요`); this.audio.ui(); }
        if (f.brain) this.chat(f, 'start', 0.4);
        return;
      }
      case 'leave': {
        const f = by(m.id); if (!f || f === this.me) return;
        if (!f.netBot) this.feedText(`${f.name} 님이 나갔어요`);
        f.dispose(); this.fighters = this.fighters.filter(x => x !== f); this.byId.delete(m.id);
        return;
      }
      case 'host': {
        this.isHost = true; this.netBotSkill = m.botSkill || this.netBotSkill;
        for (const b of m.bots) { const f = by(b.id); if (f && f.remote) { f.persona = b.persona; this.makeLocal(f); } }
        return;
      }
      case 'owners': {
        for (const [id, owner] of m.list) { const f = by(id); if (f && owner !== this.net.clientId && !f.remote) { f.remote = true; f.brain = null; f.snaps = []; } }
        return;
      }
      case 'st': {
        const f = by(m.id); if (!f || !f.remote) return;
        m.at = nowS(); f.snaps.push(m); if (f.snaps.length > 12) f.snaps.shift();
        if (m.al && !f.alive) { f.alive = true; }
        f.hp = m.hp ?? f.hp;
        return;
      }
      case 'dmg': return this.netDamage(m);
      case 'kill': return this.netKill(m);
      case 'spawn': {
        const f = by(m.id); if (!f) return;
        f.alive = true; f.hp = m.hp; f.protT = 1.5;
        if (f.remote) { f.snaps = []; }
        return;
      }
      case 'hp': for (const [id, hp] of m.list) { const f = by(id); if (f) f.hp = hp; } return;
      case 'clock': if (this.match) { this.match.timeLeft = m.timeLeft; } return;
      case 'match': {
        const wasOver = this.match && this.match.over;
        this.applyMatch(m);
        if (m.state === 'over' && !wasOver) this.netMatchOver(m);
        if (m.reset) {
          if (m.map && m.map !== this.arena.mapId) { this.netMap = m.map; this.loadMap(m.map); }
          for (const p of m.players || []) { const f = by(p.id); if (f) { f.kills = 0; f.deaths = 0; f.hp = 100; f.alive = true; } }
          for (const f of this.fighters) if (!f.remote) { this.respawn(f, true); f.alive = true; f.protT = 2; }
          this.deathInfo = null;
          this.banner('새 라운드', `${this.mapName} · ${this.match.limit}킬 먼저`, 2);
        }
        return;
      }
      case 'loadout': { const f = by(m.id); if (f && f.remote) { f.disc.setWeapon(m.weapon); f.setHandDisc(); f.skill = m.skill; if (m.look) f.setLook(m.look); } return; }
      case 'fx': return this.netFxIn(m);
    }
  };
  G.netDamage = function (m) {
    const t = this.byId.get(m.target), by = this.byId.get(m.by); if (!t) return;
    t.hp = m.hp; t.regenT = 5; t.lastHitBy = by; t.lastHitT = this.gameTime;
    const dir = V(m.dir);
    const c = t.updateCenter().clone(), col = new THREE.Color(t.color);
    if (!t.remote) {
      const kn = by ? by.disc.w.knock : 5, B = t.body, push = m.kind === 'slam' ? 8 + kn * 0.3 : m.kind === 'blast' ? 16 : kn;
      B.vel.x += dir.x * push; B.vel.z += dir.z * push; B.vel.y = Math.max(B.vel.y, m.kind === 'slam' ? 5 : m.kind === 'blast' ? 7 : 2.5); B.grounded = false;
      if (t.brain) t.brain.onHurt(by, m.kind);
    }
    if (t === this.me) { this.dmgFx = 1; this.shake(0.22); this.audio.hurt(); if (by) this.hurtDir(by.updateCenter()); }
    else if (!(by && !by.remote)) this.parts.emit(c, 12, { color: [[0.1, 0.1, 0.12], [col.r, col.g, col.b]], speed: 8, dir, spread: 0.9, life: 0.4 });
  };
  G.netKill = function (m) {
    const v = this.byId.get(m.victim), k = this.byId.get(m.by); if (!v) return;
    if (k) { k.kills = m.kills; k.hp = m.hp; k.streak = (k.streak || 0) + 1; }
    v.deaths = m.deaths;
    this.killFighter(v, k, m.kind, m.b, V(m.dir), true);
    if (k && !k.remote) k.body.dashCharges = Math.min(k.body.dashMax, k.body.dashCharges + 1);
  };
  G.netMatchOver = function (m) {
    if (this.rankedOnline) {
      const me = this.me, op = this.fighters.find(f => f !== me && !f.netBot);
      const win = op ? me.kills > op.kills : true;
      this.banner(win ? '승리!' : me.kills === (op ? op.kills : 0) ? '무승부' : '패배', `${me.kills} : ${op ? op.kills : 0}`, 3);
      if (win) this.audio.checkpoint(true); else this.audio.wave();
      this.slowT = Math.max(this.slowT, 1.0);
      return;
    }
    const rank = (m.ranking || []).map(([id, k, d]) => ({ f: this.byId.get(id), k, d })).filter(x => x.f);
    const w = rank[0];
    const myRank = rank.findIndex(x => x.f === this.me) + 1;
    this.banner(w && w.f === this.me ? '1위!' : `${w ? w.f.name : '?'} 우승`, `내 순위 ${myRank}위 · 8초 뒤 새 라운드`, 7);
    if (myRank === 1) this.audio.checkpoint(true); else this.audio.wave();
    const rec = this.records; rec.onlineGames = (rec.onlineGames || 0) + 1; if (myRank === 1) rec.onlineWins = (rec.onlineWins || 0) + 1;
    const got = this.award(40 + this.me.kills * 8 + (myRank === 1 ? 60 : 0), '온라인 대전'); if (got) this.feedText(`+${got} 코인`);
    this.saveRecords && this.saveRecords();
    for (const f of this.fighters) if (f.brain) this.chat(f, w && w.f === f ? 'win' : 'lose', 0.5);
  };
  G.netFxIn = function (m) {
    const f = this.byId.get(m.id); if (!f) return;
    const at = m.p ? V(m.p) : f.updateCenter().clone();
    switch (m.k) {
      case 'throw': f.throwT = 0.25; this.spatial(at, () => this.audio.discThrow(0.8)); break;
      case 'bounce': {
        const n = V(m.n), c = new THREE.Color(f.color);
        this.parts.emit(at, 8, { color: [[c.r, c.g, c.b], [0.15, 0.15, 0.17]], speed: 7, dir: n, spread: 0.8, life: 0.35, gravity: 10 });
        this.rings.add(at.clone().addScaledVector(n, 0.04), f.color, 1.1 + (m.b || 0) * 0.35, 0.3, n);
        this.spatial(at, () => this.audio.discBounce(m.b || 0));
        break;
      }
      case 'blink': {
        const a = V(m.a), b = V(m.b), c = new THREE.Color(f.color);
        const n = Math.min(24, Math.ceil(a.distanceTo(b) / 1.5));
        for (let i = 0; i <= n; i++) { const p = new THREE.Vector3().lerpVectors(a, b, i / n); p.y += 1; this.parts.emit(p, 2, { color: [[c.r, c.g, c.b], [0.12, 0.12, 0.14]], speed: 1.5, life: 0.45, gravity: 0, size: 0.14 }); }
        this.rings.add(new THREE.Vector3(b.x, b.y + 0.06, b.z), m.s ? 0x16161a : f.color, m.s ? f.disc.w.blinkRadius * 1.3 : 2.2, 0.45);
        this.spatial(b, () => { this.audio.blink(); if (m.s) this.audio.slam(); });
        if (f.remote) { f.snaps = []; f.body.pos.copy(b); f.body.prevPos.copy(b); }
        break;
      }
      case 'skill': {
        if (m.s === 'heal') this.parts.emit(at, 20, { color: [[0.25, 0.85, 0.45], [1, 1, 1]], speed: 4, life: 0.6, gravity: -3 });
        if (m.s === 'reflect') this.spatial(at, () => this.audio.shieldClang());
        if (m.s === 'overdrive') this.spatial(at, () => this.audio.boost());
        this.rings.add(at, f.color, 2.4, 0.3, null);
        break;
      }
      case 'refl': this.reflectFx(f, at, true); break;
      case 'emote': if (f.remote) f.playEmote(m.e); break;
      case 'nade': this.throwGrenade(f, null, V(m.p), V(m.v)); break;
      case 'blast': this.discBlast(f.disc, V(m.p), true); break;
      case 'split': for (const v of m.v || []) this.spawnShard(f, f.color, V(m.p), V(v), 0, true); break;
      case 'say': if (typeof m.text === 'string') this.sayLine(f, m.text.slice(0, 40)); break;
    }
  };

  // ---------------------------------------------------------------- outgoing
  G.netFx = function (o) { if (this.online) this.net.send({ t: 'fx', ...o }); };
  G.netHit = function (t, dmg, by, kind, dir, bounces) {
    if (!t.alive || t.invuln || !by) return null;
    dmg = Math.round(dmg);
    this.net.send({ t: 'hit', target: t.netId, by: by.netId, dmg, kind, dir: [r2(dir.x), r2(dir.y), r2(dir.z)], b: bounces | 0 });
    const c = t.updateCenter().clone();
    by.st.hits++;
    if (by === this.me) {
      this.audio.discHit(bounces + 1); this.stats.hits++;
      this.dmgNumber(c, dmg, kind === 'bank' || kind === 'slam' || kind === 'reflect');
      this.hitmarker(t.hp - dmg <= 0);
      this.stopT = Math.max(this.stopT, 0.02);
      const col = new THREE.Color(t.color);
      this.parts.emit(c, 14, { color: [[0.1, 0.1, 0.12], [col.r, col.g, col.b]], speed: 8, dir, spread: 0.9, life: 0.4 });
    }
    return t.hp - dmg <= 0 ? 'kill' : 'hit';
  };
  // stream my fighters' state
  G.netTick = function (dt) {
    this.sendT -= dt;
    if (this.sendT > 0) return;
    this.sendT = 1 / SEND_HZ;
    for (const f of this.fighters) {
      if (f.remote || !f.netId) continue;
      const B = f.body, d = f.disc;
      let fl = 0;
      if (B.grounded) fl |= 1; if (B.dashT > 0 || f.invulnT > 0) fl |= 2; if (f.reflectT > 0) fl |= 4; if (f.overT > 0) fl |= 8; if (f.protT > 0) fl |= 16;
      const m = { t: 'st', id: f.netId, x: r2(B.pos.x), y: r2(B.pos.y), z: r2(B.pos.z), vx: r2(B.vel.x), vy: r2(B.vel.y), vz: r2(B.vel.z), yw: r3(B.yaw), pt: r3(B.pitch), fl, ds: d.state === 'hand' ? 0 : d.state === 'out' ? 1 : 2, w: d.w.id };
      if (d.state !== 'hand') { m.dp = [r2(d.pos.x), r2(d.pos.y), r2(d.pos.z)]; m.dv = [r2(d.vel.x), r2(d.vel.y), r2(d.vel.z)]; m.db = d.bounces; }
      this.net.send(m);
    }
  };
  // place remote fighters where the network says they were INTERP seconds ago
  G.updateRemotes = function () {
    const rt = nowS() - INTERP;
    for (const f of this.fighters) {
      if (!f.remote) continue;
      const s = f.snaps; if (!s.length) continue;
      let a = s[0], b = null;
      for (let i = s.length - 1; i >= 0; i--) if (s[i].at <= rt) { a = s[i]; b = s[i + 1] || null; break; }
      const B = f.body;
      let k = 0;
      if (b) {
        k = THREE.MathUtils.clamp((rt - a.at) / Math.max(1e-3, b.at - a.at), 0, 1);
        B.pos.set(a.x + (b.x - a.x) * k, a.y + (b.y - a.y) * k, a.z + (b.z - a.z) * k);
        let dy = b.yw - a.yw; while (dy > Math.PI) dy -= Math.PI * 2; while (dy < -Math.PI) dy += Math.PI * 2;
        B.yaw = a.yw + dy * k; B.pitch = a.pt + (b.pt - a.pt) * k;
      } else {
        const e = Math.min(0.15, Math.max(0, rt - a.at));
        B.pos.set(a.x + a.vx * e, a.y + a.vy * e, a.z + a.vz * e);
        B.yaw = a.yw; B.pitch = a.pt;
      }
      B.prevPos.copy(B.pos); B.vel.set(a.vx, a.vy, a.vz);
      B.speed = B.vel.length(); B.hSpeed = Math.hypot(a.vx, a.vz);
      B.grounded = !!(a.fl & 1); B.dashT = a.fl & 2 ? 0.05 : 0;
      f.reflectT = a.fl & 4 ? 0.25 : 0; f.overT = a.fl & 8 ? 0.25 : 0; f.protT = a.fl & 16 ? 0.2 : 0;
      if (!f.seen) { f.seen = true; if (f.model) f.model.visible = f.alive; }
      // their disc
      const d = f.disc;
      if (a.w && a.w !== d.w.id) { d.setWeapon(a.w); f.setHandDisc(); }
      if (a.ds === 0 || !f.alive) { if (d.state !== 'hand') { d.state = 'hand'; d.holder.visible = false; } }
      else {
        d.state = a.ds === 1 ? 'out' : 'return'; d.holder.visible = true; d.bounces = a.db || 0;
        if (b && b.ds && b.dp) d.pos.set(a.dp[0] + (b.dp[0] - a.dp[0]) * k, a.dp[1] + (b.dp[1] - a.dp[1]) * k, a.dp[2] + (b.dp[2] - a.dp[2]) * k);
        else { const e = Math.min(0.12, Math.max(0, rt - a.at)); d.pos.set(a.dp[0] + a.dv[0] * e, a.dp[1] + a.dv[1] * e, a.dp[2] + a.dv[2] * e); }
        d.vel.set(a.dv[0], a.dv[1], a.dv[2]);
      }
    }
  };
}
