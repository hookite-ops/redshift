// BOT BRAIN — drives a Fighter with the same inputs a person has (WASD, jump, dash, throw/recall, blink).
// Top tier ("최강") uses everything: target-leading aim with gravity, bank-shot solver, recall timing so the
// disc cuts through you on the way home, blink-slams, dash-dodging through incoming discs (dash = invulnerable),
// erratic strafing/bunny hops, cover-aware repositioning and blink escapes.
import * as THREE from 'three';
import { DISC } from './disc.js';
import { T } from './player.js';

export const SKILL = {
  easy: { name: '쉬움', react: 0.42, err: 0.075, turn: 5, align: 0.12, lead: 0.5, gravity: false, bank: 0, lob: 0, recall: 0.2, slam: 0.12, dodge: 0.03, dodgeLead: 0.06, bhop: 0.15, strafe: 0.55, strafeMin: 0.9, strafeMax: 2.0, think: 0.3, pause: 0.6, escape: 0, mobility: 0 },
  normal: { name: '보통', react: 0.26, err: 0.04, turn: 8, align: 0.07, lead: 0.85, gravity: true, bank: 0.25, lob: 0.2, recall: 0.5, slam: 0.4, dodge: 0.1, dodgeLead: 0.08, bhop: 0.45, strafe: 0.8, strafeMin: 0.6, strafeMax: 1.5, think: 0.18, pause: 0.3, escape: 0.4, mobility: 0.3 },
  hard: { name: '어려움', react: 0.15, err: 0.018, turn: 14, align: 0.04, lead: 1, gravity: true, bank: 0.8, lob: 0.6, recall: 0.85, slam: 0.75, dodge: 0.22, dodgeLead: 0.1, bhop: 0.75, strafe: 1, strafeMin: 0.35, strafeMax: 1.1, think: 0.1, pause: 0.12, escape: 0.8, mobility: 0.6 },
  max: { name: '최강', react: 0.06, err: 0.006, turn: 30, align: 0.02, lead: 1, gravity: true, bank: 1, lob: 1, recall: 1, slam: 1, dodge: 0.35, dodgeLead: 0.11, bhop: 1, strafe: 1, strafeMin: 0.22, strafeMax: 0.9, think: 0.05, pause: 0.02, escape: 1, mobility: 1 },
};

const GRAV = T.gravity;
const HIT_R = T.radius + DISC.radius;
const PITCHES = [-0.12, -0.06, -0.02, 0.03, 0.09, 0.17];
const _eye = new THREE.Vector3(), _org = new THREE.Vector3(), _aim = new THREE.Vector3(), _dir = new THREE.Vector3();
const _look = new THREE.Vector3(), _des = new THREE.Vector3(), _p = new THREE.Vector3(), _sp = new THREE.Vector3(), _sv = new THREE.Vector3();
const _q = new THREE.Vector3(), _w = new THREE.Vector3();
const _hit = { t: 0, x: 0, y: 0, z: 0, nx: 0, ny: 0, nz: 0, flags: 0, tri: 0 };
const _hit2 = { t: 0, x: 0, y: 0, z: 0, nx: 0, ny: 0, nz: 0, flags: 0, tri: 0 };
const clamp = THREE.MathUtils.clamp;

export class BotBrain {
  constructor(game, fighter, skill = 'max') {
    this.G = game; this.f = fighter; this.key = SKILL[skill] ? skill : 'max'; this.S = SKILL[this.key];
    this.inp = { fwd: 0, right: 0, jumpPressed: false, jumpHeld: false, crouch: false, dashPressed: false, grapplePressed: false, grappleHeld: false, autoHop: true };
    this.reset();
  }
  reset() {
    this.target = null; this.thinkT = 0; this.hasLos = false;
    this.strafe = Math.random() < 0.5 ? 1 : -1; this.strafeT = 0;
    this.pv = new Map(); this.rolls = new Map();
    this.cool = 0.25 + Math.random() * 0.3;
    this.aimYaw = this.f.body.yaw; this.aimPitch = 0; this.ph = Math.random() * 100;
    this.plan = null; this.lastBank = -9; this.slamHold = 0;
    this.hopT = 0; this.hopOn = false; this.stuckT = 0; this.jumpNow = false;
    this.wanderT = 0; this.wander = new THREE.Vector3();
  }
  // decide once per situation (so a 60% dodger really dodges 60% of discs, not 60% of ticks)
  roll(key, p) {
    let r = this.rolls.get(key);
    if (r === undefined) { r = Math.random() < p; this.rolls.set(key, r); if (this.rolls.size > 80) this.rolls.delete(this.rolls.keys().next().value); }
    return r;
  }

  // ---------------- perception ----------------
  perceive(dt) {
    const k = Math.min(1, dt / this.S.react);
    for (const o of this.G.fighters) {
      if (o === this.f) continue;
      let v = this.pv.get(o);
      if (!v) { v = o.body.vel.clone(); this.pv.set(o, v); }
      v.lerp(o.body.vel, k);
    }
  }
  // where will o's chest be in t seconds (as far as this bot can tell)
  predict(o, t, out) {
    const B = o.body, v = this.pv.get(o) || B.vel, L = this.S.lead;
    out.set(B.pos.x + v.x * t * L, B.pos.y + 1.0, B.pos.z + v.z * t * L);
    if (!B.grounded) out.y += (this.S.gravity ? v.y * t - 0.5 * GRAV * t * t : v.y * t) * L;
    if (out.y < 0.8) out.y = 0.8;
    const lim = this.G.arena.half - 0.6;
    out.x = clamp(out.x, -lim, lim); out.z = clamp(out.z, -lim, lim);
    return out;
  }
  intercept(origin, o, out) {
    const B = this.f.body;
    let t = o.body.pos.distanceTo(origin) / DISC.speed;
    for (let i = 0; i < 4; i++) {
      this.predict(o, t, out);
      const dx = out.x - origin.x, dy = out.y - origin.y, dz = out.z - origin.z, d = Math.hypot(dx, dy, dz) || 1;
      const carry = Math.max(0, (B.vel.x * dx + B.vel.y * dy + B.vel.z * dz) / d) * DISC.carry;
      t = d / (DISC.speed + carry);
    }
    return t;
  }
  pickTarget(eye) {
    const G = this.G, f = this.f;
    let best = null, bs = 1e9;
    for (const o of G.fighters) {
      if (o === f || !o.alive) continue;
      const d = o.body.pos.distanceTo(f.body.pos);
      const los = G.los(eye, o.updateCenter());
      let s = d + (los ? 0 : 14) + o.hp * 0.08 + (o.protT > 0 ? 30 : 0);
      if (o === f.lastHitBy && G.gameTime - f.lastHitT < 3) s -= 12; // revenge
      if (o === this.target) s -= 6;                                  // don't flip-flop
      if (s < bs) { bs = s; best = o; }
    }
    return best;
  }

  // ---------------- main ----------------
  tick(dt) {
    const f = this.f, B = f.body, inp = this.inp;
    inp.fwd = 0; inp.right = 0; inp.jumpPressed = false; inp.dashPressed = false; inp.jumpHeld = false; inp.autoHop = true;
    if (!f.alive) return inp;
    this.perceive(dt);
    _eye.copy(B.eye);
    this.thinkT -= dt;
    if (this.target && !this.target.alive) { this.target = null; this.thinkT = 0; }
    if (this.thinkT <= 0) {
      this.thinkT = this.S.think * (0.7 + Math.random() * 0.6);
      this.target = this.pickTarget(_eye);
      this.hasLos = this.target ? this.G.los(_eye, this.target.updateCenter()) : false;
    }
    this.cool -= dt;
    const threat = this.scanThreats();
    this.move(dt, inp, threat);
    this.combat(dt);
    return inp;
  }

  // incoming discs: the most imminent one that would actually touch me
  scanThreats() {
    const f = this.f, B = f.body;
    const cx = B.pos.x, cy = B.pos.y + 0.9, cz = B.pos.z;
    let best = null;
    for (const o of this.G.fighters) {
      if (o === f) continue;
      const d = o.disc; if (d.state === 'hand' || d.hit.has(f)) continue;
      const rx = d.pos.x - cx, ry = d.pos.y - cy, rz = d.pos.z - cz;
      const vx = d.vel.x - B.vel.x, vy = d.vel.y - B.vel.y, vz = d.vel.z - B.vel.z;
      const v2 = vx * vx + vy * vy + vz * vz; if (v2 < 1) continue;
      const tca = -(rx * vx + ry * vy + rz * vz) / v2;
      if (tca < 0 || tca > 0.6) continue;
      const mx = rx + vx * tca, my = ry + vy * tca, mz = rz + vz * tca;
      const myc = clamp(my, -0.5, 0.5);
      const miss = Math.hypot(mx, my - myc, mz);
      if (miss > HIT_R + 0.45) continue;
      if (!best || tca < best.tca) best = { tca, d, vx, vz, key: d.id + ':' + d.leg };
    }
    return best;
  }

  move(dt, inp, threat) {
    const G = this.G, f = this.f, B = f.body, S = this.S, tgt = this.target;
    const des = _des.set(0, 0, 0);
    let dist = 0;
    if (tgt) {
      const tp = tgt.body.pos;
      let dx = tp.x - B.pos.x, dz = tp.z - B.pos.z; dist = Math.hypot(dx, dz) || 1; dx /= dist; dz /= dist;
      this.strafeT -= dt;
      if (this.strafeT <= 0) { this.strafe = Math.random() < 0.8 ? -this.strafe : this.strafe; this.strafeT = S.strafeMin + Math.random() * (S.strafeMax - S.strafeMin); }
      const hurt = f.hp < 40;
      const lo = hurt ? 13 : 8, hi = hurt ? 26 : 19;
      let radial = 0;
      if (!this.hasLos) radial = 0.9; else if (dist > hi) radial = 1; else if (dist < lo) radial = -0.9;
      des.set(-dz * this.strafe * S.strafe + dx * radial, 0, dx * this.strafe * S.strafe + dz * radial);
    } else {
      this.wanderT -= dt;
      if (this.wanderT <= 0) { this.wanderT = 2 + Math.random() * 2; this.wander.set((Math.random() - 0.5) * 50, 0, (Math.random() - 0.5) * 50); }
      des.set(this.wander.x - B.pos.x, 0, this.wander.z - B.pos.z);
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
    // incoming disc: sidestep off its line, and dash through it at the last moment (dash = invulnerable)
    if (threat) {
      let px = -threat.vz, pz = threat.vx; const pl = Math.hypot(px, pz) || 1; px /= pl; pz /= pl;
      const side = (B.pos.x - threat.d.pos.x) * px + (B.pos.z - threat.d.pos.z) * pz >= 0 ? 1 : -1;
      des.set(px * side * 2, 0, pz * side * 2);
      if (threat.tca < S.dodgeLead && this.roll('dodge' + threat.key, S.dodge)) {
        if (B.dashCharges > 0 && B.dashT <= 0 && !(B.dashCd > 0)) inp.dashPressed = true;
        else if (B.grounded || B.airJumps > 0) inp.jumpPressed = true;
      }
    }
    this.jumpNow = false;
    this.avoid(des);
    if (this.jumpNow && B.grounded) inp.jumpPressed = true;
    // unstick
    if (B.hSpeed < 2.5 && des.lengthSq() > 0.1) { this.stuckT += dt; if (this.stuckT > 0.45) { this.strafe = -this.strafe; this.strafeT = 0.6; inp.jumpPressed = true; this.stuckT = 0; } }
    else this.stuckT = 0;
    // world direction → WASD relative to where I'm looking
    const l = Math.hypot(des.x, des.z);
    if (l > 0.05) {
      des.x /= l; des.z /= l;
      const fx = -Math.sin(B.yaw), fz = -Math.cos(B.yaw), rx = Math.cos(B.yaw), rz = -Math.sin(B.yaw);
      const a = des.x * fx + des.z * fz, b = des.x * rx + des.z * rz;
      inp.fwd = a > 0.38 ? 1 : a < -0.38 ? -1 : 0;
      inp.right = b > 0.38 ? 1 : b < -0.38 ? -1 : 0;
    }
    // bunny-hop rhythm + erratic double jumps make you hard to lead
    this.hopT -= dt;
    if (this.hopT <= 0) { this.hopOn = Math.random() < S.bhop; this.hopT = 0.6 + Math.random() * 1.4; }
    inp.jumpHeld = this.hopOn;
    if (this.hopOn && !B.grounded && B.vel.y < -3 && B.airJumps > 0 && Math.random() < dt * 0.9 * S.bhop) inp.jumpPressed = true;
    // close a long gap with a spare dash
    if (tgt && !threat && S.mobility > 0 && dist > 26 && B.dashCharges >= B.dashMax && Math.random() < dt * S.mobility) inp.dashPressed = true;
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

  // ---------------- aiming and the disc ----------------
  aim(dt, want) {
    const B = this.f.body, S = this.S;
    const wy = Math.atan2(-want.x, -want.z), wp = Math.asin(clamp(want.y, -1, 1));
    let dy = wy - this.aimYaw; while (dy > Math.PI) dy -= Math.PI * 2; while (dy < -Math.PI) dy += Math.PI * 2;
    const step = S.turn * dt;
    this.aimYaw += clamp(dy, -step, step);
    this.aimPitch += clamp(wp - this.aimPitch, -step, step);
    // a tremor that never fully settles (scaled by skill)
    this.ph += dt;
    const n = S.err;
    B.yaw = this.aimYaw + n * (Math.sin(this.ph * 1.9) + 0.6 * Math.sin(this.ph * 4.3 + 1.3)) / 1.6;
    B.pitch = clamp(this.aimPitch + n * 0.6 * (Math.sin(this.ph * 2.3 + 2) + 0.5 * Math.sin(this.ph * 5.1)) / 1.5, -1.5, 1.5);
  }

  combat(dt) {
    const G = this.G, f = this.f, B = f.body, S = this.S, d = f.disc, tgt = this.target;
    const origin = _org.copy(_eye); origin.y -= 0.15;
    let want, canThrow = false;
    if (tgt) {
      this.intercept(origin, tgt, _aim);
      want = _dir.subVectors(_aim, origin).normalize();
      if (d.state === 'hand') {
        if (this.plan && this.plan.until > G.gameTime) { want = _dir.copy(this.plan.dir); canThrow = true; }
        else {
          this.plan = null;
          if (G.los(origin, _aim)) canThrow = tgt.protT <= 0.15;
          else if (G.gameTime - this.lastBank > (this.key === 'max' ? 0.3 : 0.55)) {
            this.lastBank = G.gameTime;
            const budget = G.bankBudget || (G.bankBudget = { t: 0, n: 0 });
            if (G.gameTime - budget.t > 1) { budget.t = G.gameTime; budget.n = 0; }
            const allowed = S.bank > 0 && Math.random() < S.bank && budget.n < 8;
            if (allowed) budget.n++;
            const bank = allowed ? this.solveBank(origin, tgt) : null;
            if (bank) { this.plan = { dir: bank.clone(), until: G.gameTime + 0.35 }; want = _dir.copy(bank); canThrow = true; }
            else if (S.lob > 0 && Math.random() < S.lob) {
              // lob it over their cover; the blink-slam check takes over when it passes them
              _q.copy(_aim); _q.y += 2.8;
              if (G.los(origin, _q) && origin.distanceTo(_q) < 40) { this.plan = { dir: _q.sub(origin).normalize().clone(), until: G.gameTime + 0.35 }; want = _dir.copy(this.plan.dir); canThrow = true; }
            }
          }
        }
      }
    } else {
      want = _dir.set(B.vel.x, 0, B.vel.z);
      if (want.lengthSq() < 0.5) B.flatFwd(want);
      want.normalize();
    }
    this.aim(dt, want);
    if (canThrow && d.state === 'hand' && d.catchCd <= 0 && this.cool <= 0) {
      const look = B.lookDir(_look);
      if (look.angleTo(want) < S.align) {
        G.throwFor(f, look);
        this.cool = S.pause * (0.5 + Math.random());
        this.plan = null;
      }
    }
    if (d.state !== 'hand') this.discPlay(dt);
  }

  discPlay(dt) {
    const G = this.G, f = this.f, B = f.body, S = this.S, d = f.disc, tgt = this.target;
    // 1) blink-slam: the disc is right next to an enemy → teleport onto them.
    //    If it is about to hit someone directly, let it land first: hit + slam is the real combo.
    let near = null, incoming = false;
    for (const o of G.fighters) {
      if (o === f || !o.alive || o.protT > 0) continue;
      const c = o.updateCenter();
      if (!d.hit.has(o) && !o.invuln) {
        const rx = d.pos.x - c.x, ry = d.pos.y - c.y, rz = d.pos.z - c.z;
        const vx = d.vel.x - o.body.vel.x, vy = d.vel.y - o.body.vel.y, vz = d.vel.z - o.body.vel.z;
        const v2 = vx * vx + vy * vy + vz * vz;
        if (v2 > 1) {
          const tca = -(rx * vx + ry * vy + rz * vz) / v2;
          if (tca > 0 && tca < 0.15) {
            const my = ry + vy * tca;
            if (Math.hypot(rx + vx * tca, my - clamp(my, -0.5, 0.5), rz + vz * tca) < HIT_R) incoming = true;
          }
        }
      }
      if (!near && !o.invuln && d.pos.distanceTo(c) < DISC.blinkRadius * 0.8) near = o; // never slam into a dash
    }
    if (near && !incoming && d.t > 0.04) {
      this.slamHold += dt;
      if (this.slamHold >= S.react * 0.5 && this.roll('slam' + d.id + ':' + d.leg, S.slam)) { if (G.blinkFor(f)) { this.slamHold = 0; this.cool = 0; return; } }
    } else this.slamHold = 0;
    if (!tgt) return;
    // 2) recall exactly when the way home cuts through the target
    if (d.state === 'out' && d.t > 0.08 && S.recall > 0 && this.returnHits(tgt)) {
      if (this.roll('recall' + d.id + ':' + d.leg + ':' + Math.floor(d.t * 8), S.recall)) { G.recallFor(f); return; }
    }
    const myD = B.pos.distanceTo(tgt.body.pos), dd = d.pos.distanceTo(tgt.body.pos);
    // 3) close a long gap by riding the disc
    if (d.state === 'out' && S.mobility > 0 && d.t > 0.28 && myD > 26 && dd < myD - 12 && this.roll('mob' + d.id + ':' + d.leg, S.mobility * 0.7)) { G.blinkFor(f); return; }
    // 4) hurt and pressured: leave through the disc
    if (S.escape > 0 && f.hp < 35 && d.state === 'out' && d.t > 0.2) {
      let close = 1e9, discClose = 1e9;
      for (const o of G.fighters) { if (o === f || !o.alive) continue; close = Math.min(close, o.body.pos.distanceTo(B.pos)); discClose = Math.min(discClose, o.body.pos.distanceTo(d.pos)); }
      if (close < 9 && discClose > 14 && this.roll('esc' + d.id + ':' + d.leg, S.escape)) { G.blinkFor(f); return; }
    }
  }

  // simulate the homing return flight and see if it passes through the (predicted) target
  returnHits(o) {
    const B = this.f.body, d = this.f.disc, h = 1 / 60;
    _sp.copy(d.pos); _sv.copy(d.vel);
    _w.copy(B.eye);
    for (let i = 0, t = 0; i < 70; i++, t += h) {
      const tx = _w.x + B.vel.x * t, ty = _w.y + B.vel.y * t * 0.5, tz = _w.z + B.vel.z * t;
      const dx = tx - _sp.x, dy = ty - _sp.y, dz = tz - _sp.z, dl = Math.hypot(dx, dy, dz);
      if (dl < DISC.catchDist) return false;
      const sp = DISC.returnSpeed + B.speed, k = Math.min(1, h * 9);
      _sv.x += (dx / dl * sp - _sv.x) * k; _sv.y += (dy / dl * sp - _sv.y) * k; _sv.z += (dz / dl * sp - _sv.z) * k;
      _sp.addScaledVector(_sv, h);
      this.predict(o, t + h, _p);
      const mx = _sp.x - _p.x, my = _sp.y - _p.y, mz = _sp.z - _p.z;
      if (Math.hypot(mx, clamp(my, -0.5, 0.5) - my, mz) < HIT_R + 0.1) return true;
    }
    return false;
  }

  // bank-shot search: coarse fan of directions (up to 3 bounces), then refine around the near misses
  solveBank(origin, o) {
    const B = this.f.body;
    let best = null, bestT = 1e9;
    const near = [];
    const base = Math.atan2(-(o.body.pos.x - origin.x), -(o.body.pos.z - origin.z));
    const tryDir = (yaw, pitch, keep) => {
      const cp = Math.cos(pitch);
      _q.set(-Math.sin(yaw) * cp, Math.sin(pitch), -Math.cos(yaw) * cp);
      const sp = DISC.speed + Math.max(0, B.vel.dot(_q)) * DISC.carry;
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
    const col = this.G.arena.col;
    _sp.copy(origin); _sv.copy(dir).multiplyScalar(speed);
    let time = 0, bounces = 0;
    this._miss = 1e9;
    for (let seg = 0; seg < 4; seg++) {
      const s = _sv.length(), ux = _sv.x / s, uy = _sv.y / s, uz = _sv.z / s;
      const remain = s * (DISC.outTime + bounces * 0.12 - time);
      if (remain <= 0.3) return null;
      const h = col.raycast(_sp.x, _sp.y, _sp.z, ux, uy, uz, remain + DISC.radius, _hit);
      const travel = h ? Math.max(0, h.t - DISC.radius) : remain;
      // closest approach to the moving target on this leg (two refinement passes)
      let u = travel * 0.5;
      for (let k = 0; k < 2; k++) {
        this.predict(o, time + u / s, _p);
        u = clamp((_p.x - _sp.x) * ux + (_p.y - _sp.y) * uy + (_p.z - _sp.z) * uz, 0, travel);
      }
      this.predict(o, time + u / s, _p);
      const mx = _sp.x + ux * u - _p.x, my = _sp.y + uy * u - _p.y, mz = _sp.z + uz * u - _p.z;
      const miss = Math.hypot(mx, clamp(my, -0.5, 0.5) - my, mz);
      if (miss < HIT_R) return time + u / s;
      if (miss < this._miss) this._miss = miss;
      if (!h) return null;
      const vn = _sv.x * h.nx + _sv.y * h.ny + _sv.z * h.nz;
      _sv.x -= 2 * vn * h.nx; _sv.y -= 2 * vn * h.ny; _sv.z -= 2 * vn * h.nz;
      if (h.ny > 0.7) _sv.y = Math.abs(_sv.y) * 0.6;
      _sp.set(_sp.x + ux * travel, _sp.y + uy * travel, _sp.z + uz * travel);
      time += travel / s; bounces++;
      if (bounces > 3) return null;
    }
    return null;
  }
}
