// BOT BRAIN 2 — drives a Fighter with exactly the inputs a person has (WASD, jump, dash, throw/recall, blink, skill).
// Human-like on purpose:
//   · senses: a field of view + hearing + short memory (they can lose you, be flanked, chase sounds)
//   · intents: engage / hunt / flank / search / retreat / roam, re-decided every ~0.4 s with hysteresis
//   · movement tech: dash → bunny-hop chains, throw-and-blink travel, air jukes
//   · aim: a spring that flicks, overshoots a little and settles, after a reaction delay
//   · personality (돌격/저격/곡예/수비) picks weapon, skill, range, risk; mood (tilt / confidence) shifts it
// The higher tiers keep the sharp tools: target leading with gravity, bank-shot solver, recall timing,
// hit-then-blink-slam, dash/reflect dodging.
import * as THREE from 'three';
import { T } from './player.js';
import { SKILLS } from './skills.js';

export const SKILL = {
  easy: { name: '쉬움', react: 0.42, err: 0.075, aimK: 45, aimZ: 0.55, turn: 6, align: 0.12, lead: 0.5, gravity: false, bank: 0, lob: 0, recall: 0.2, slam: 0.12, dodge: 0.03, dodgeLead: 0.06, bhop: 0.15, strafe: 0.55, strafeMin: 0.9, strafeMax: 2.0, think: 0.3, pause: 0.6, escape: 0, mobility: 0, fov: 0.75, hear: 0.5, mem: 2.5, tech: 0.1, skillUse: 0.3, mistake: 0.25 },
  normal: { name: '보통', react: 0.27, err: 0.04, aimK: 95, aimZ: 0.6, turn: 10, align: 0.07, lead: 0.85, gravity: true, bank: 0.25, lob: 0.2, recall: 0.5, slam: 0.4, dodge: 0.1, dodgeLead: 0.08, bhop: 0.45, strafe: 0.8, strafeMin: 0.6, strafeMax: 1.5, think: 0.18, pause: 0.3, escape: 0.4, mobility: 0.3, fov: 0.9, hear: 0.75, mem: 3.5, tech: 0.4, skillUse: 0.55, mistake: 0.12 },
  hard: { name: '어려움', react: 0.17, err: 0.018, aimK: 170, aimZ: 0.65, turn: 18, align: 0.04, lead: 1, gravity: true, bank: 0.8, lob: 0.6, recall: 0.85, slam: 0.75, dodge: 0.22, dodgeLead: 0.1, bhop: 0.75, strafe: 1, strafeMin: 0.35, strafeMax: 1.1, think: 0.1, pause: 0.12, escape: 0.8, mobility: 0.6, fov: 1.05, hear: 0.9, mem: 5, tech: 0.75, skillUse: 0.8, mistake: 0.05 },
  max: { name: '최강', react: 0.1, err: 0.008, aimK: 320, aimZ: 0.7, turn: 30, align: 0.02, lead: 1, gravity: true, bank: 1, lob: 1, recall: 1, slam: 1, dodge: 0.35, dodgeLead: 0.11, bhop: 1, strafe: 1, strafeMin: 0.22, strafeMax: 0.9, think: 0.05, pause: 0.02, escape: 1, mobility: 1, fov: 1.2, hear: 1, mem: 7, tech: 0.95, skillUse: 0.95, mistake: 0.02 },
  // 학습 AI: same human-level body as 최강, but every decision comes from the trained network (neurobot.js)
  ai: null,
};

// personalities: how they like to fight. weapon/skill are drawn from these lists.
SKILL.ai = { ...SKILL.max, name: '학습 AI' };

export const PERSONAS = [
  { id: 'rusher', name: '돌격형', aggro: 0.9, caution: 0.2, flair: 0.6, patience: 0.15, chatty: 1.0, band: [5, 12], weapons: ['heavy', 'disc', 'nova', 'saw'], skills: ['overdrive', 'heal'] },
  { id: 'sniper', name: '저격형', aggro: 0.35, caution: 0.7, flair: 0.3, patience: 0.8, chatty: 0.6, band: [18, 32], weapons: ['rail', 'prism'], skills: ['reflect', 'gravity'] },
  { id: 'trick', name: '곡예형', aggro: 0.65, caution: 0.4, flair: 1.0, patience: 0.35, chatty: 0.9, band: [9, 18], weapons: ['boomerang', 'disc', 'splitter', 'prism'], skills: ['gravity', 'overdrive'] },
  { id: 'guard', name: '수비형', aggro: 0.45, caution: 0.85, flair: 0.4, patience: 0.6, chatty: 0.5, band: [12, 22], weapons: ['disc', 'heavy', 'seeker', 'saw'], skills: ['reflect', 'heal'] },
];

const GRAV = T.gravity;
const PITCHES = [-0.12, -0.06, -0.02, 0.03, 0.09, 0.17];
const _eye = new THREE.Vector3(), _org = new THREE.Vector3(), _aim = new THREE.Vector3(), _dir = new THREE.Vector3();
const _look = new THREE.Vector3(), _des = new THREE.Vector3(), _p = new THREE.Vector3(), _sp = new THREE.Vector3(), _sv = new THREE.Vector3();
const _q = new THREE.Vector3(), _w = new THREE.Vector3(), _t = new THREE.Vector3();
const _hit = { t: 0, x: 0, y: 0, z: 0, nx: 0, ny: 0, nz: 0, flags: 0, tri: 0 };
const _hit2 = { t: 0, x: 0, y: 0, z: 0, nx: 0, ny: 0, nz: 0, flags: 0, tri: 0 };
const clamp = THREE.MathUtils.clamp;
const wrap = a => { while (a > Math.PI) a -= Math.PI * 2; while (a < -Math.PI) a += Math.PI * 2; return a; };
const jitter = (v, a) => clamp(v + (Math.random() - 0.5) * a, 0, 1.2);

export class BotBrain {
  constructor(game, fighter, skill = 'max', persona = null) {
    this.G = game; this.f = fighter; this.key = SKILL[skill] ? skill : 'max'; this.S = SKILL[this.key];
    const P = persona || PERSONAS[3];
    // everyone is a little different, even with the same personality
    this.p = { ...P, aggro: jitter(P.aggro, 0.2), caution: jitter(P.caution, 0.2), flair: jitter(P.flair, 0.2), patience: jitter(P.patience, 0.2) };
    this.inp = { fwd: 0, right: 0, jumpPressed: false, jumpHeld: false, crouch: false, dashPressed: false, grapplePressed: false, grappleHeld: false, autoHop: true };
    this.tilt = 0; this.confidence = 0;
    this.reset();
  }
  reset() {
    this.target = null; this.known = new Map(); this.thinkT = 0; this.decideT = 0;
    this.intent = 'roam'; this.intentStart = 0; this.flankSide = Math.random() < 0.5 ? 1 : -1;
    this.strafe = Math.random() < 0.5 ? 1 : -1; this.strafeT = 0;
    this.pv = new Map(); this.rolls = new Map();
    this.cool = 0.25 + Math.random() * 0.3; this.waitT = 0;
    const B = this.f.body;
    this.aimYaw = B.yaw; this.aimPitch = 0; this.vYaw = 0; this.vPitch = 0; this.ph = Math.random() * 100;
    this.lastWant = null; this.reactUntil = 0;
    this.plan = null; this.lastBank = -9; this.slamHold = 0;
    this.hopT = 0; this.hopOn = false; this.stuckT = 0; this.jumpNow = false;
    this.macro = null; this.techCd = 1 + Math.random(); this.skillPlan = null; this.travelDir = null;
    this.dest = new THREE.Vector3(); this.wanderT = 0; this.lookAround = 0; this.lastHurtT = -9;
  }
  roll(key, p) {
    let r = this.rolls.get(key);
    if (r === undefined) { r = Math.random() < p; this.rolls.set(key, r); if (this.rolls.size > 80) this.rolls.delete(this.rolls.keys().next().value); }
    return r;
  }
  get now() { return this.G.gameTime; }

  // ======================= senses & memory =======================
  sense() {
    _eye.copy(this.f.body.eye);
    const G = this.G, f = this.f, B = f.body, now = this.now;
    B.lookDir(_look);
    for (const o of G.fighters) {
      if (o === f) continue;
      if (!o.alive) { this.known.delete(o); continue; }
      const c = o.updateCenter();
      _t.subVectors(c, _eye); const d = _t.length() || 1; _t.divideScalar(d);
      const ang = Math.acos(clamp(_t.dot(_look), -1, 1));
      const near = d < 7 * this.S.hear;                 // you can feel someone right next to you
      const see = (ang < this.S.fov || near) && G.los(_eye, c);
      let k = this.known.get(o);
      if (see) {
        if (!k) { k = { pos: new THREE.Vector3(), vel: new THREE.Vector3(), t: now, seen: false, first: now }; this.known.set(o, k); }
        if (!k.seen) k.first = now;
        k.pos.copy(o.body.pos); k.vel.copy(o.body.vel); k.t = now; k.seen = true;
      } else if (k) {
        k.seen = false;
        if (now - k.t > this.S.mem) this.known.delete(o);
      }
    }
  }
  hear(o, pos) {
    let k = this.known.get(o);
    if (!k) { k = { pos: new THREE.Vector3(), vel: new THREE.Vector3(), t: 0, seen: false, first: this.now }; this.known.set(o, k); }
    if (k.seen) return;
    k.pos.set(pos.x + (Math.random() - 0.5) * 3, o.body.pos.y, pos.z + (Math.random() - 0.5) * 3); k.vel.set(0, 0, 0); k.t = this.now;
  }
  onHurt(by) {
    this.lastHurtT = this.now;
    if (by && by !== this.f) { this.hear(by, by.body.pos); const k = this.target && this.known.get(this.target); if (!k || !k.seen) this.target = by; }
  }
  onKill() { this.confidence = Math.min(1, this.confidence + 0.35); }
  onDeath(k) { this.tilt = 1; this.revenge = k; this.confidence = Math.max(0, this.confidence - 0.4); }
  seen(o) { const k = this.known.get(o); return !!(k && k.seen); }

  perceive(dt) {
    const k = Math.min(1, dt / this.S.react);
    for (const o of this.G.fighters) {
      if (o === this.f) continue;
      let v = this.pv.get(o);
      if (!v) { v = o.body.vel.clone(); this.pv.set(o, v); }
      if (this.seen(o)) v.lerp(o.body.vel, k); else v.multiplyScalar(Math.exp(-3 * dt));
    }
  }
  // where will o's chest be in t seconds (as far as this bot can tell)
  predict(o, t, out) {
    const k = this.known.get(o);
    if (k && !k.seen) { out.set(k.pos.x, k.pos.y + 1, k.pos.z); return out; }
    const B = o.body, v = this.pv.get(o) || B.vel, L = this.S.lead;
    out.set(B.pos.x + v.x * t * L, B.pos.y + 1.0, B.pos.z + v.z * t * L);
    if (!B.grounded) out.y += (this.S.gravity ? v.y * t - 0.5 * GRAV * t * t : v.y * t) * L;
    if (out.y < 0.8) out.y = 0.8;
    const lim = this.G.arena.half - 0.6;
    out.x = clamp(out.x, -lim, lim); out.z = clamp(out.z, -lim, lim);
    return out;
  }
  intercept(origin, o, out) {
    const B = this.f.body, w = this.f.disc.w, mul = this.f.overT > 0 ? 1.25 : 1;
    let t = o.body.pos.distanceTo(origin) / w.speed;
    for (let i = 0; i < 4; i++) {
      this.predict(o, t, out);
      const dx = out.x - origin.x, dy = out.y - origin.y, dz = out.z - origin.z, d = Math.hypot(dx, dy, dz) || 1;
      const carry = Math.max(0, (B.vel.x * dx + B.vel.y * dy + B.vel.z * dz) / d) * w.carry;
      t = d / ((w.speed + carry) * mul);
    }
    return t;
  }
  tpos(o) { const k = this.known.get(o); return k && !k.seen ? k.pos : o.body.pos; }
  pickTarget() {
    const f = this.f, now = this.now;
    let best = null, bs = 1e9;
    for (const [o, k] of this.known) {
      if (!o.alive) continue;
      const d = k.pos.distanceTo(f.body.pos);
      let s = d + (k.seen ? 0 : 12 + (now - k.t) * 4) + o.hp * 0.08 + (o.protT > 0 ? 30 : 0);
      if (o === f.lastHitBy && now - f.lastHitT < 3) s -= 12;    // revenge
      if (o === this.revenge && this.tilt > 0.3) s -= 10;         // tilted: "where's the guy who got me"
      if (o === this.target) s -= 6;                              // don't flip-flop
      if (s < bs) { bs = s; best = o; }
    }
    return best;
  }
  decide() {
    const f = this.f, tgt = this.target, now = this.now, p = this.p;
    let intent = 'roam';
    if (tgt) {
      const k = this.known.get(tgt), d = this.tpos(tgt).distanceTo(f.body.pos);
      const retreatHp = 22 + p.caution * 28 - this.tilt * 10;
      const brave = tgt.hp < f.hp * 0.55 && p.aggro > 0.6;
      if (f.hp < retreatHp && d < 30 && !brave) intent = 'retreat';
      else if (k && k.seen && tgt.hp <= 45 && p.aggro + this.confidence * 0.3 + this.tilt * 0.2 > 0.45) intent = 'hunt';
      else if (k && !k.seen) intent = now - k.t < 1.6 && p.flair + p.aggro > 0.9 ? 'flank' : 'search';
      else intent = 'engage';
      // humans don't always make the best call
      if (Math.random() < this.S.mistake && intent === 'retreat') intent = 'engage';
    }
    // hysteresis: a fresh intent is kept at least ~0.8 s (except emergencies)
    if (intent !== this.intent && (now - this.intentStart > 0.8 || intent === 'retreat' || this.intent === 'roam')) {
      this.intent = intent; this.intentStart = now;
      if (intent === 'flank') { this.flankSide = Math.random() < 0.5 ? 1 : -1; f.st.flanks = (f.st.flanks || 0) + 1; }
      if (intent === 'retreat') { this.G.chat(f, 'retreat', 0.25); f.st.retreats = (f.st.retreats || 0) + 1; }
    }
  }

  // ======================= main =======================
  tick(dt) {
    const f = this.f, B = f.body, inp = this.inp;
    inp.fwd = 0; inp.right = 0; inp.jumpPressed = false; inp.dashPressed = false; inp.jumpHeld = false; inp.autoHop = true;
    if (!f.alive) return inp;
    _eye.copy(B.eye);
    this.tilt = Math.max(0, this.tilt - dt / 12); this.confidence = Math.max(0, this.confidence - dt / 25);
    this.thinkT -= dt;
    if (this.thinkT <= 0) {
      this.thinkT = this.S.think * (0.7 + Math.random() * 0.6);
      this.sense();
      const prev = this.target;
      this.target = this.pickTarget();
      if (this.target !== prev && this.target) this.reactUntil = this.now + this.S.react * (0.7 + Math.random() * 0.7); // "oh, there he is"
    }
    if (this.target && (!this.target.alive || !this.known.has(this.target))) { this.target = null; this.thinkT = 0; }
    if (!this.target && this.intent !== 'roam') { this.intent = 'roam'; this.intentStart = this.now; }
    this.perceive(dt);
    this.decideT -= dt;
    if (this.decideT <= 0) { this.decideT = 0.3 + Math.random() * 0.3; this.decide(); }
    this.cool -= dt; this.techCd -= dt;
    const threat = this.scanThreats();
    this.move(dt, inp, threat);
    this.combat(dt);
    this.useSkills(dt, threat);
    return inp;
  }

  // incoming discs: the most imminent one that would actually touch me
  scanThreats() {
    const f = this.f, B = f.body;
    const cx = B.pos.x, cy = B.pos.y + 0.9, cz = B.pos.z;
    let best = null;
    for (const o of this.G.fighters) {
      const d = o.disc; if (d.state === 'hand' || d.hit.has(f)) continue;
      if (o === f && !d.reflectedBy) continue;
      const rx = d.pos.x - cx, ry = d.pos.y - cy, rz = d.pos.z - cz;
      const vx = d.vel.x - B.vel.x, vy = d.vel.y - B.vel.y, vz = d.vel.z - B.vel.z;
      const v2 = vx * vx + vy * vy + vz * vz; if (v2 < 1) continue;
      const tca = -(rx * vx + ry * vy + rz * vz) / v2;
      if (tca < 0 || tca > 0.6) continue;
      const mx = rx + vx * tca, my = ry + vy * tca, mz = rz + vz * tca;
      const miss = Math.hypot(mx, my - clamp(my, -0.5, 0.5), mz);
      if (miss > T.radius + d.w.radius + 0.45) continue;
      if (!best || tca < best.tca) best = { tca, d, vx, vz, key: d.id + ':' + d.leg };
    }
    return best;
  }

  // ======================= movement =======================
  move(dt, inp, threat) {
    const G = this.G, f = this.f, B = f.body, S = this.S, p = this.p, tgt = this.target;
    const des = _des.set(0, 0, 0);
    let travel = false, dist = 0;
    const tp = tgt ? this.tpos(tgt) : null;
    if (tp) dist = Math.hypot(tp.x - B.pos.x, tp.z - B.pos.z);
    this.strafeT -= dt;
    if (this.strafeT <= 0) { this.strafe = Math.random() < 0.8 ? -this.strafe : this.strafe; this.strafeT = S.strafeMin + Math.random() * (S.strafeMax - S.strafeMin); }
    const intent = tp ? this.intent : 'roam';
    if (intent === 'engage' || intent === 'hunt') {
      let dx = tp.x - B.pos.x, dz = tp.z - B.pos.z; const l = Math.hypot(dx, dz) || 1; dx /= l; dz /= l;
      if (intent === 'engage') {
        const [lo, hi] = p.band;
        const radial = dist > hi ? 1 : dist < lo ? -0.9 : 0;
        des.set(-dz * this.strafe * S.strafe + dx * radial, 0, dx * this.strafe * S.strafe + dz * radial);
        travel = dist > hi + 10;
      } else {
        const weave = dist > 6 ? 0.45 : 1;
        des.set(dx + -dz * this.strafe * weave, 0, dz + dx * this.strafe * weave);
        travel = dist > 12;
      }
    } else if (intent === 'flank') {
      let dx = tp.x - B.pos.x, dz = tp.z - B.pos.z; const l = Math.hypot(dx, dz) || 1; dx /= l; dz /= l;
      this.dest.set(tp.x - dz * this.flankSide * 11 - dx * 2, 0, tp.z + dx * this.flankSide * 11 - dz * 2);
      des.set(this.dest.x - B.pos.x, 0, this.dest.z - B.pos.z);
      if (des.length() < 3) { this.intent = 'search'; this.intentStart = this.now; }
      travel = des.length() > 10;
    } else if (intent === 'search') {
      des.set(tp.x - B.pos.x, 0, tp.z - B.pos.z);
      if (des.length() < 3) {
        des.set(0, 0, 0); this.lookAround += dt;
        if (this.lookAround > 1.5) { this.known.delete(tgt); this.target = null; this.lookAround = 0; }
      }
      travel = des.length() > 14;
    } else if (intent === 'retreat') {
      // run for the nearest cover on the far side from the threat, healing on the way
      let best = null, bs = 1e9;
      for (const [cx, cz] of this.G.arena.cover) {
        const ax = cx - tp.x, az = cz - tp.z, al = Math.hypot(ax, az) || 1;
        const px = cx + ax / al * 3.2, pz = cz + az / al * 3.2;
        const d = Math.hypot(px - B.pos.x, pz - B.pos.z);
        const wrongSide = Math.hypot(px - tp.x, pz - tp.z) < dist ? 25 : 0;
        if (d + wrongSide < bs) { bs = d + wrongSide; best = [px, pz]; }
      }
      des.set(best[0] - B.pos.x, 0, best[1] - B.pos.z);
      if (des.length() < 2) des.set(-(tp.z - B.pos.z) * this.strafe, 0, (tp.x - B.pos.x) * this.strafe).normalize().multiplyScalar(0.4);
      travel = des.length() > 6;
    } else { // roam: drift toward cover points / the middle and listen
      this.wanderT -= dt;
      if (this.wanderT <= 0) { this.wanderT = 2 + Math.random() * 3; const CV = this.G.arena.cover, c = CV[(Math.random() * CV.length) | 0]; this.dest.set(c[0] + (Math.random() - 0.5) * 16, 0, c[1] + (Math.random() - 0.5) * 16); }
      des.set(this.dest.x - B.pos.x, 0, this.dest.z - B.pos.z);
      travel = des.length() > 12;
    }
    // never loiter next to an enemy disc — its owner can blink onto it
    for (const o of G.fighters) {
      if (o === f) continue; const d = o.disc; if (d.state !== 'out') continue;
      const ex = B.pos.x - d.pos.x, ez = B.pos.z - d.pos.z, e = Math.hypot(ex, ez);
      if (e < 6.5 && e > 0.01) { des.x += ex / e * 1.4; des.z += ez / e * 1.4; }
    }
    // stay off the outer walls
    const H = G.arena.half - 6;
    if (B.pos.x > H) des.x -= 1.5; if (B.pos.x < -H) des.x += 1.5;
    if (B.pos.z > H) des.z -= 1.5; if (B.pos.z < -H) des.z += 1.5;
    // incoming disc: sidestep off its line, dash through it at the last moment (dash = invulnerable)
    if (threat) {
      let px = -threat.vz, pz = threat.vx; const pl = Math.hypot(px, pz) || 1; px /= pl; pz /= pl;
      const side = (B.pos.x - threat.d.pos.x) * px + (B.pos.z - threat.d.pos.z) * pz >= 0 ? 1 : -1;
      des.set(px * side * 2, 0, pz * side * 2);
      if (threat.tca < S.dodgeLead && this.roll('dodge' + threat.key, S.dodge)) {
        if (B.dashCharges > 0 && B.dashT <= 0 && !(B.dashCd > 0)) inp.dashPressed = true;
        else if (B.grounded || B.airJumps > 0) inp.jumpPressed = true;
        this.macro = null;
      }
    }
    this.jumpNow = false;
    this.avoid(des);
    if (this.jumpNow && B.grounded) inp.jumpPressed = true;
    // unstick
    if (B.hSpeed < 2.5 && des.lengthSq() > 0.1) { this.stuckT += dt; if (this.stuckT > 0.45) { this.strafe = -this.strafe; this.strafeT = 0.6; inp.jumpPressed = true; this.stuckT = 0; } }
    else this.stuckT = 0;
    const dl = Math.hypot(des.x, des.z);
    if (dl > 0.05) { des.x /= dl; des.z /= dl; }
    this.travelDir = dl > 0.05 ? (this.travelDir || new THREE.Vector3()).set(des.x, 0, des.z) : null;

    // ---- movement tech: dash → bunny hop, throw-and-blink travel ----
    if (!threat && !this.macro && this.techCd <= 0 && travel && this.travelDir) {
      const reserve = p.caution > 0.6 ? 2 : 1;
      if (f.disc.state === 'hand' && !(f.blinkCd > 0.5) && dist > 26 && !this.anyoneClose(14) && Math.random() < S.tech * p.flair * 0.6) {
        this.macro = { type: 'blinktravel', t: 0, thrown: false, dir: this.travelDir.clone() };
      } else if (B.grounded && B.dashCharges >= reserve && Math.random() < S.tech) {
        this.macro = { type: 'dashhop', t: 0, dir: this.travelDir.clone(), hold: 0.9 + Math.random() * 0.8 };
      }
      this.techCd = 1.0 + Math.random() * 1.2;
    }
    if (this.macro) this.runMacro(dt, inp, des);

    // world direction → WASD relative to where I'm looking
    if (Math.hypot(des.x, des.z) > 0.05) {
      const fx = -Math.sin(B.yaw), fz = -Math.cos(B.yaw), rx = Math.cos(B.yaw), rz = -Math.sin(B.yaw);
      const a = des.x * fx + des.z * fz, b = des.x * rx + des.z * rz;
      inp.fwd = a > 0.38 ? 1 : a < -0.38 ? -1 : 0;
      inp.right = b > 0.38 ? 1 : b < -0.38 ? -1 : 0;
    }
    // bunny-hop rhythm + erratic double jumps make you hard to lead
    this.hopT -= dt;
    if (this.hopT <= 0) { this.hopOn = Math.random() < S.bhop * (this.intent === 'engage' ? 1 : 0.7); this.hopT = 0.6 + Math.random() * 1.4; }
    if (this.hopOn || (this.macro && this.macro.hop)) inp.jumpHeld = true;
    if (inp.jumpHeld && !B.grounded && B.vel.y < -3 && B.airJumps > 0 && Math.random() < dt * 0.9 * S.bhop) inp.jumpPressed = true;
  }
  anyoneClose(r) {
    for (const [o, k] of this.known) if (o.alive && k.pos.distanceTo(this.f.body.pos) < r) return true;
    return false;
  }
  runMacro(dt, inp, des) {
    const m = this.macro, B = this.f.body, G = this.G, d = this.f.disc;
    m.t += dt;
    if (m.type === 'dashhop') {
      // dash along the route, then jump out of the dash and keep hopping: the speed survives
      des.copy(m.dir);
      if (!m.dashed) { inp.dashPressed = true; m.dashed = true; this.f.st.dashhop = (this.f.st.dashhop || 0) + 1; }
      if (m.t > 0.1 && !m.jumped) { inp.jumpPressed = true; m.jumped = true; }
      if (m.t > 0.1) { m.hop = true; if (this.travelDir) m.dir.lerp(this.travelDir, Math.min(1, dt * 3)).normalize(); }
      if (m.t > 0.1 + m.hold) this.macro = null;
    } else if (m.type === 'blinktravel') {
      // look down the route, throw long, ride the disc, then dash-hop out of the landing
      des.copy(m.dir);
      if (!m.thrown) {
        m.aim = (m.aim || new THREE.Vector3()).set(m.dir.x, 0.06, m.dir.z).normalize();
        if (d.state === 'hand' && d.catchCd <= 0 && B.lookDir(_look).angleTo(m.aim) < 0.12) { G.throwFor(this.f, _look.clone()); m.thrown = true; m.tt = 0; }
        if (m.t > 1.2) this.macro = null;
      } else {
        m.tt += dt;
        if (d.state !== 'out') { this.macro = null; return; }
        if (m.tt > 0.32 && G.blinkFor(this.f)) {
          this.f.st.blinktravel = (this.f.st.blinktravel || 0) + 1;
          this.macro = { type: 'dashhop', t: 0, dir: m.dir.clone(), hold: 1.0 };
        }
      }
    }
  }
  avoid(des) {
    const B = this.f.body, l = Math.hypot(des.x, des.z); if (l < 0.05) return;
    const dx = des.x / l, dz = des.z / l, look = 1.6 + Math.min(4, B.hSpeed * 0.15);
    const b = this.blocked(dx, dz, look);
    if (!b) return;
    if (b === 'low') { if (_hit.t < 2.2) this.jumpNow = true; return; }
    for (const a of [0.6, 1.2, 1.9]) {
      for (const s of [this.strafe, -this.strafe]) {
        const ang = a * s, c = Math.cos(ang), sn = Math.sin(ang);
        const nx = dx * c - dz * sn, nz = dx * sn + dz * c;
        if (!this.blocked(nx, nz, look)) { des.x = nx * l; des.z = nz * l; return; }
      }
    }
    des.x = -dx * l; des.z = -dz * l; this.strafe = -this.strafe;
  }
  blocked(dx, dz, dist) {
    const B = this.f.body, col = this.G.arena.col;
    const h = col.raycast(B.pos.x, B.pos.y + 0.5, B.pos.z, dx, 0, dz, dist, _hit);
    if (!h || Math.abs(h.ny) > 0.6) return false;
    const h2 = col.raycast(B.pos.x, B.pos.y + 1.75, B.pos.z, dx, 0, dz, dist + 0.6, _hit2);
    return h2 ? true : 'low';
  }

  // ======================= aiming =======================
  // spring with a little overshoot, after a reaction delay — reads like a person flicking to you
  aim(dt, want) {
    const B = this.f.body, S = this.S;
    if (this.now < this.reactUntil && this.lastWant) want = this.lastWant;
    else this.lastWant = (this.lastWant || new THREE.Vector3()).copy(want);
    const wy = Math.atan2(-want.x, -want.z), wp = Math.asin(clamp(want.y, -1, 1));
    const ey = wrap(wy - this.aimYaw), ep = wp - this.aimPitch;
    const k = S.aimK * (1 - this.tilt * 0.15), c = 2 * S.aimZ * Math.sqrt(k);
    this.vYaw += (k * ey - c * this.vYaw) * dt; this.vPitch += (k * ep - c * this.vPitch) * dt;
    const vmax = S.turn * 1.6;
    this.vYaw = clamp(this.vYaw, -vmax, vmax); this.vPitch = clamp(this.vPitch, -vmax, vmax);
    this.aimYaw = wrap(this.aimYaw + this.vYaw * dt); this.aimPitch = clamp(this.aimPitch + this.vPitch * dt, -1.5, 1.5);
    this.ph += dt;
    const n = S.err * (1 + this.tilt * 0.4);
    B.yaw = this.aimYaw + n * (Math.sin(this.ph * 1.9) + 0.6 * Math.sin(this.ph * 4.3 + 1.3)) / 1.6;
    B.pitch = clamp(this.aimPitch + n * 0.6 * (Math.sin(this.ph * 2.3 + 2) + 0.5 * Math.sin(this.ph * 5.1)) / 1.5, -1.5, 1.5);
  }

  // ======================= combat =======================
  combat(dt) {
    const G = this.G, f = this.f, B = f.body, S = this.S, d = f.disc, tgt = this.target, p = this.p;
    _eye.copy(B.eye);
    const origin = _org.copy(_eye); origin.y -= 0.15;
    let want = null, canThrow = false;
    const k = tgt ? this.known.get(tgt) : null;
    if (this.skillPlan) want = _dir.copy(this.skillPlan.dir);
    else if (this.macro && this.macro.type === 'blinktravel' && !this.macro.thrown && this.macro.aim) want = _dir.copy(this.macro.aim);
    else if (tgt && k) {
      this.intercept(origin, tgt, _aim);
      want = _dir.subVectors(_aim, origin).normalize();
      if (d.state === 'hand' && (k.seen || this.now - k.t < 0.8)) {
        if (this.plan && this.plan.until > this.now) { want = _dir.copy(this.plan.dir); canThrow = true; }
        else {
          this.plan = null;
          if (G.los(origin, _aim)) canThrow = tgt.protT <= 0.15;
          else if (this.now - this.lastBank > (this.key === 'max' ? 0.3 : 0.55)) {
            this.lastBank = this.now;
            const budget = G.bankBudget || (G.bankBudget = { t: 0, n: 0 });
            if (this.now - budget.t > 1) { budget.t = this.now; budget.n = 0; }
            const allowed = S.bank > 0 && Math.random() < S.bank && budget.n < 8;
            if (allowed) budget.n++;
            const bank = allowed ? this.solveBank(origin, tgt) : null;
            if (bank) { this.plan = { dir: bank.clone(), until: this.now + 0.35 }; want = _dir.copy(bank); canThrow = true; }
            else if (S.lob > 0 && Math.random() < S.lob * (0.5 + p.flair * 0.5)) {
              _q.copy(_aim); _q.y += 2.8;
              if (G.los(origin, _q) && origin.distanceTo(_q) < 40) { this.plan = { dir: _q.sub(origin).normalize().clone(), until: this.now + 0.35 }; want = _dir.copy(this.plan.dir); canThrow = true; }
            }
          }
        }
        // patient players wait for a better moment: target airborne, out of dashes, close, or weak
        if (canThrow && !this.plan && this.intent !== 'hunt') {
          const tb = tgt.body, good = !tb.grounded || tb.dashCharges === 0 || origin.distanceTo(_aim) < 12 || tgt.hp < 40;
          if (!good && this.waitT < p.patience * 0.8) { this.waitT += dt; canThrow = false; }
        }
      }
    } else {
      // nobody to shoot: look where you run (and glance around while searching)
      want = _dir.set(B.vel.x, 0, B.vel.z);
      if (this.travelDir) want.copy(this.travelDir);
      if (want.lengthSq() < 0.5) B.flatFwd(want);
      if (this.intent === 'search' && this.lookAround > 0) { const a = Math.sin(this.now * 2.2) * 1.2, c = Math.cos(a), s = Math.sin(a); want.set(want.x * c - want.z * s, 0, want.x * s + want.z * c); }
      want.normalize();
    }
    this.aim(dt, want);
    if (canThrow && d.state === 'hand' && d.catchCd <= 0 && this.cool <= 0 && this.now >= this.reactUntil) {
      const look = B.lookDir(_look);
      const sloppy = Math.random() < S.mistake * dt * 20; // occasionally just lets it rip
      if (look.angleTo(want) < S.align || sloppy) {
        G.throwFor(f, look);
        this.cool = S.pause * (0.5 + Math.random()) * (1 - this.confidence * 0.3);
        this.plan = null; this.waitT = 0;
      }
    }
    if (d.state !== 'hand' && !(this.macro && this.macro.type === 'blinktravel')) this.discPlay(dt);
  }

  discPlay(dt) {
    const G = this.G, f = this.f, B = f.body, S = this.S, d = f.disc, tgt = this.target, w = d.w;
    // 1) blink-slam: the disc is right next to an enemy → teleport onto them.
    //    If it is about to hit someone directly, let it land first: hit + slam is the real combo.
    let near = null, incoming = false;
    for (const o of G.fighters) {
      if (o === f || !o.alive || o.protT > 0 || !this.known.has(o)) continue;
      const c = o.updateCenter();
      if (!d.hit.has(o) && !o.invuln) {
        const rx = d.pos.x - c.x, ry = d.pos.y - c.y, rz = d.pos.z - c.z;
        const vx = d.vel.x - o.body.vel.x, vy = d.vel.y - o.body.vel.y, vz = d.vel.z - o.body.vel.z;
        const v2 = vx * vx + vy * vy + vz * vz;
        if (v2 > 1) {
          const tca = -(rx * vx + ry * vy + rz * vz) / v2;
          if (tca > 0 && tca < 0.15) {
            const my = ry + vy * tca;
            if (Math.hypot(rx + vx * tca, my - clamp(my, -0.5, 0.5), rz + vz * tca) < T.radius + w.radius) incoming = true;
          }
        }
      }
      if (!near && !o.invuln && o.reflectT <= 0 && d.pos.distanceTo(c) < w.blinkRadius * 0.8) near = o;
    }
    if (near && !incoming && d.t > 0.04) {
      this.slamHold += dt;
      if (this.slamHold >= S.react * 0.5 && this.roll('slam' + d.id + ':' + d.leg, S.slam)) { if (G.blinkFor(f)) { this.slamHold = 0; this.cool = 0; return; } }
    } else this.slamHold = 0;
    if (!tgt) return;
    // 2) recall exactly when the way home cuts through the target
    if (d.state === 'out' && d.t > 0.08 && S.recall > 0 && this.seen(tgt) && this.returnHits(tgt)) {
      if (this.roll('recall' + d.id + ':' + d.leg + ':' + Math.floor(d.t * 8), S.recall)) { G.recallFor(f); return; }
    }
    const tp = this.tpos(tgt), myD = B.pos.distanceTo(tp), dd = d.pos.distanceTo(tp);
    // 3) close a long gap by riding the disc (hunters especially)
    const mob = S.mobility * (this.intent === 'hunt' ? 1 : 0.6);
    if (d.state === 'out' && mob > 0 && d.t > 0.28 && myD > 24 && dd < myD - 12 && this.roll('mob' + d.id + ':' + d.leg, mob)) { G.blinkFor(f); return; }
    // 4) hurt and pressured: leave through the disc
    if (S.escape > 0 && (f.hp < 35 || this.intent === 'retreat') && d.state === 'out' && d.t > 0.2) {
      let close = 1e9, discClose = 1e9;
      for (const o of G.fighters) { if (o === f || !o.alive) continue; close = Math.min(close, o.body.pos.distanceTo(B.pos)); discClose = Math.min(discClose, o.body.pos.distanceTo(d.pos)); }
      if (close < 10 && discClose > 14 && this.roll('esc' + d.id + ':' + d.leg, S.escape)) { G.blinkFor(f); return; }
    }
  }

  // ======================= skills =======================
  useSkills(dt, threat) {
    const G = this.G, f = this.f, B = f.body, S = this.S, tgt = this.target, K = SKILLS[f.skill];
    if (!K || f.skillCd > 0) { this.skillPlan = null; return; }
    const use = key => this.roll(key, S.skillUse);
    if (f.skill === 'reflect') {
      // a disc that will hit me and I'm not dashing it → bubble; or an enemy disc parked next to me (slam incoming)
      if (threat && threat.tca < 0.14 && !B.invuln && !(B.dashCharges > 0 && this.rolls.get('dodge' + threat.key)) && use('refl' + threat.key)) G.useSkill(f);
      else for (const o of G.fighters) {
        if (o === f || o.disc.state !== 'out') continue;
        if (o.disc.pos.distanceTo(B.pos) < o.disc.w.blinkRadius + 0.5 && use('reflS' + o.disc.id + ':' + o.disc.leg)) { G.useSkill(f); break; }
      }
    } else if (f.skill === 'overdrive') {
      const d = tgt ? this.tpos(tgt).distanceTo(B.pos) : 0;
      if ((this.intent === 'hunt' && d > 10) || (this.intent === 'retreat' && f.hp < 40)) { if (use('od' + Math.floor(this.now))) G.useSkill(f); }
    } else if (f.skill === 'heal') {
      if (f.hp < 45 && (this.now - this.lastHurtT > 0.8 || this.intent === 'retreat') && use('heal' + Math.floor(this.now))) G.useSkill(f);
    } else if (f.skill === 'gravity') {
      if (this.skillPlan) {
        if (B.lookDir(_look).angleTo(this.skillPlan.dir) < 0.08 || this.now > this.skillPlan.until) { G.useSkill(f); this.skillPlan = null; this.cool = Math.min(this.cool, 0.25); }
        return;
      }
      if (!tgt || !this.seen(tgt)) return;
      const tp = tgt.body.pos, d = tp.distanceTo(B.pos);
      if (d < 7 || d > 30 || !use('grav' + Math.floor(this.now))) return;
      // lob it where they'll be: 24 m/s out, 4 m/s up, 22 m/s² gravity
      const t = d / 24;
      this.predict(tgt, t, _q); _q.y -= 1;
      const lift = Math.max(0, 0.5 * 22 * t * t - 4 * t) / Math.max(1, d);
      _q.sub(_eye).normalize(); _q.y += lift; _q.normalize();
      this.skillPlan = { dir: _q.clone(), until: this.now + 0.45 };
    }
  }

  // simulate the homing return flight and see if it passes through the (predicted) target
  returnHits(o) {
    const B = this.f.body, d = this.f.disc, w = d.w, h = 1 / 60;
    _sp.copy(d.pos); _sv.copy(d.vel);
    _w.copy(B.eye);
    for (let i = 0, t = 0; i < 70; i++, t += h) {
      const tx = _w.x + B.vel.x * t, ty = _w.y + B.vel.y * t * 0.5, tz = _w.z + B.vel.z * t;
      const dx = tx - _sp.x, dy = ty - _sp.y, dz = tz - _sp.z, dl = Math.hypot(dx, dy, dz);
      if (dl < w.catchDist) return false;
      const sp = w.returnSpeed + B.speed, k = Math.min(1, h * w.returnTurn);
      _sv.x += (dx / dl * sp - _sv.x) * k; _sv.y += (dy / dl * sp - _sv.y) * k; _sv.z += (dz / dl * sp - _sv.z) * k;
      _sp.addScaledVector(_sv, h);
      this.predict(o, t + h, _p);
      const mx = _sp.x - _p.x, my = _sp.y - _p.y, mz = _sp.z - _p.z;
      if (Math.hypot(mx, clamp(my, -0.5, 0.5) - my, mz) < T.radius + w.radius + 0.1) return true;
    }
    return false;
  }

  // bank-shot search: coarse fan of directions (up to 3 bounces), then refine around the near misses
  solveBank(origin, o) {
    const B = this.f.body, w = this.f.disc.w;
    if (w.maxBounces === 0) return null; // the rail doesn't bounce
    let best = null, bestT = 1e9;
    const near = [];
    const tp = this.tpos(o);
    const base = Math.atan2(-(tp.x - origin.x), -(tp.z - origin.z));
    const tryDir = (yaw, pitch, keep) => {
      const cp = Math.cos(pitch);
      _q.set(-Math.sin(yaw) * cp, Math.sin(pitch), -Math.cos(yaw) * cp);
      const sp = w.speed + Math.max(0, B.vel.dot(_q)) * w.carry;
      const t = this.simDisc(origin, _q, sp, o);
      if (t !== null) { if (t < bestT) { bestT = t; best = (best || new THREE.Vector3()).copy(_q); } }
      else if (keep && this._miss < 3.5) {
        near.push({ yaw, pitch, m: this._miss });
        if (near.length > 12) { near.sort((a, b) => a.m - b.m); near.length = 6; }
      }
    };
    for (let i = 0; i < 72; i++) {
      const yaw = base + (i % 2 ? 1 : -1) * Math.ceil(i / 2) * (Math.PI / 36);
      for (const pitch of PITCHES) tryDir(yaw, pitch, true);
    }
    if (!best) {
      near.sort((a, b) => a.m - b.m);
      for (const c of near.slice(0, 4)) {
        for (let a = -3; a <= 3; a++) for (let b = -2; b <= 2; b++) tryDir(c.yaw + a * 0.014, c.pitch + b * 0.015, false);
        if (best) break;
      }
    }
    return best;
  }
  simDisc(origin, dir, speed, o) {
    const col = this.G.arena.col, w = this.f.disc.w, R = w.radius, HR = T.radius + R;
    _sp.copy(origin); _sv.copy(dir).multiplyScalar(speed);
    let time = 0, bounces = 0;
    this._miss = 1e9;
    for (let seg = 0; seg < 4; seg++) {
      const s = _sv.length(), ux = _sv.x / s, uy = _sv.y / s, uz = _sv.z / s;
      const remain = s * (w.outTime + bounces * 0.12 - time);
      if (remain <= 0.3) return null;
      const h = col.raycast(_sp.x, _sp.y, _sp.z, ux, uy, uz, remain + R, _hit);
      const travel = h ? Math.max(0, h.t - R) : remain;
      let u = travel * 0.5;
      for (let k = 0; k < 2; k++) {
        this.predict(o, time + u / s, _p);
        u = clamp((_p.x - _sp.x) * ux + (_p.y - _sp.y) * uy + (_p.z - _sp.z) * uz, 0, travel);
      }
      this.predict(o, time + u / s, _p);
      const mx = _sp.x + ux * u - _p.x, my = _sp.y + uy * u - _p.y, mz = _sp.z + uz * u - _p.z;
      const miss = Math.hypot(mx, clamp(my, -0.5, 0.5) - my, mz);
      if (miss < HR) return time + u / s;
      if (miss < this._miss) this._miss = miss;
      if (!h) return null;
      const vn = _sv.x * h.nx + _sv.y * h.ny + _sv.z * h.nz;
      _sv.x -= 2 * vn * h.nx; _sv.y -= 2 * vn * h.ny; _sv.z -= 2 * vn * h.nz;
      if (h.ny > 0.7) _sv.y = Math.abs(_sv.y) * 0.6;
      _sp.set(_sp.x + ux * travel, _sp.y + uy * travel, _sp.z + uz * travel);
      time += travel / s; bounces++;
      if (bounces > w.maxBounces) return null;
    }
    return null;
  }
}
