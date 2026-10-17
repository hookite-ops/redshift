// NEURO BRAIN — REDSHIFT 용 "스스로 배운" 봇 두뇌 (MINDFORGE 어댑터)
//
// 기존 봇(BotBrain)의 눈·귀·기억·조준 스프링 같은 "몸"은 그대로 쓰고,
// 언제 어디로 움직일지 · 언제 던질지(직선/쿠션/로브) · 회수 · 순간이동 · 대시 · 점프 · 스킬은
// 학습된 신경망이 1초에 20번 결정한다. 사람과 같은 입력만 쓰고, 조준 속도·반응 한계도 사람급 그대로.
//
// 게임 ↔ 엔진 규약 (다른 게임에 붙일 때도 이 세 가지만 만들면 됨):
//   observe(brain, threat, out)  → 숫자 배열(관찰)
//   ACT 개의 출력                 → 행동 (아래 A 표)
//   보상                          → trainlab.js 의 경기 점수
import * as THREE from 'three';
import { BotBrain, SKILL } from './bot.js';
import { T } from './player.js';
import { Policy } from './ai/nn.js';

export const OBS = 67;
export const ACT = 15;
export const SIZES = [OBS, 64, 48, ACT];
// action layout
export const A = { MOVE_F: 0, MOVE_S: 1, COVER: 2, HOP: 3, JUMP: 4, DASH: 5, THROW: 6, DIRECT: 7, BANK: 8, LOB: 9, AIM_Y: 10, AIM_P: 11, RECALL: 12, BLINK: 13, SKILL: 14 };
const SKILL_IDS = ['reflect', 'overdrive', 'gravity', 'heal'];
const DECIDE = 1 / 20;
const RAYS = 8;

const clamp = THREE.MathUtils.clamp;
const _eye = new THREE.Vector3(), _org = new THREE.Vector3(), _aim = new THREE.Vector3(), _dir = new THREE.Vector3(), _look = new THREE.Vector3();
const _des = new THREE.Vector3(), _q = new THREE.Vector3();
const _hit = { t: 0, x: 0, y: 0, z: 0, nx: 0, ny: 0, nz: 0, flags: 0, tri: 0 };
const sig = x => 1 / (1 + Math.exp(-x));

// ---------------------------------------------------------------------------
// what the bot "sees" — works for any BotBrain (also used to record the scripted bot for imitation)
// target frame: F = flat unit vector from me to my target, R = F rotated right
export function frame(br) {
  const B = br.f.body, tgt = br.target;
  let fx = 0, fz = -1;
  if (tgt) { const tp = br.tpos(tgt); fx = tp.x - B.pos.x; fz = tp.z - B.pos.z; const l = Math.hypot(fx, fz); if (l > 1e-3) { fx /= l; fz /= l; } else { fx = -Math.sin(B.yaw); fz = -Math.cos(B.yaw); } }
  else { fx = -Math.sin(B.yaw); fz = -Math.cos(B.yaw); }
  return { fx, fz, rx: -fz, rz: fx };
}

export function observe(br, threat, o, fr = frame(br)) {
  const G = br.G, f = br.f, B = f.body, d = f.disc, w = d.w, tgt = br.target, now = br.now;
  const { fx, fz, rx, rz } = fr;
  let i = 0;
  const put = v => { o[i++] = Number.isFinite(v) ? v : 0; };
  // --- self (17)
  put(f.hp / 100); put(B.hSpeed / 25);
  put((B.vel.x * fx + B.vel.z * fz) / 20); put((B.vel.x * rx + B.vel.z * rz) / 20); put(B.vel.y / 12);
  put(B.grounded ? 1 : 0); put(B.airJumps > 0 ? 1 : 0); put(B.dashCharges / 3); put(B.dashT > 0 ? 1 : 0); put(f.invuln ? 1 : 0);
  put(f.skillCd <= 0 ? 1 : 0); for (const s of SKILL_IDS) put(f.skill === s ? 1 : 0);
  put(f.overT > 0 ? 1 : 0); put(f.reflectT > 0 ? 1 : 0);
  // --- my disc (10)
  put(d.state === 'hand' ? 1 : 0); put(d.state === 'out' ? 1 : 0); put(d.state === 'return' ? 1 : 0);
  put(d.state === 'hand' && d.catchCd <= 0 ? 1 : 0); put(d.state === 'hand' ? 0 : Math.min(1.5, d.t) / 1.5);
  if (d.state === 'hand') { put(0); put(0); put(0); put(0); put(0); }
  else {
    const px = d.pos.x - B.pos.x, py = d.pos.y - B.pos.y, pz = d.pos.z - B.pos.z;
    put((px * fx + pz * fz) / 30); put((px * rx + pz * rz) / 30); put(py / 10);
    put(tgt ? d.pos.distanceTo(tgt.updateCenter()) / 20 : 2);
    put(tgt && d.state === 'out' && br.seen(tgt) && d.t > 0.08 && br.returnHits(tgt) ? 1 : 0);
  }
  // --- weapon (5)
  put(w.speed / 60); put(w.maxBounces / 6); put(w.blinkRadius / 5); put(w.dmg / 50); put(w.outTime / 1.5);
  // --- target (16)
  if (tgt) {
    const k = br.known.get(tgt), tp = br.tpos(tgt), tb = tgt.body;
    const dist = Math.hypot(tp.x - B.pos.x, tp.z - B.pos.z);
    put(dist / 40); put((tp.y - B.pos.y) / 10); put(k && k.seen ? 1 : 0); put(k ? Math.min(3, now - k.t) / 3 : 1);
    put(tgt.hp / 100);
    const v = br.seen(tgt) ? tb.vel : _q.set(0, 0, 0);
    put((v.x * fx + v.z * fz) / 20); put((v.x * rx + v.z * rz) / 20); put(v.y / 12);
    put(tb.grounded ? 1 : 0); put(tb.dashCharges / 3); put(tgt.invuln ? 1 : 0); put(tgt.reflectT > 0 ? 1 : 0); put(tgt.skillCd <= 0 ? 1 : 0);
    const td = tgt.disc;
    put(td.state === 'hand' ? 1 : 0);
    if (td.state === 'hand') { put(2); put(0); }
    else {
      const ex = td.pos.x - B.pos.x, ey = td.pos.y - B.pos.y - 0.9, ez = td.pos.z - B.pos.z, el = Math.hypot(ex, ey, ez) || 1;
      put(el / 20); put(-(td.vel.x * ex + td.vel.y * ey + td.vel.z * ez) / el / 50); // closing speed
    }
  } else { put(2); put(0); put(0); put(1); put(1); for (let k = 0; k < 8; k++) put(0); put(1); put(2); put(0); }
  // --- geometry (14)
  if (tgt) {
    _eye.copy(B.eye); _org.copy(_eye); _org.y -= 0.15;
    const tt = br.intercept(_org, tgt, _aim);
    put(G.los(_org, _aim) ? 1 : 0); put(Math.min(2, tt));
  } else { put(0); put(0); }
  const col = G.arena.col;
  for (let k = 0; k < RAYS; k++) {
    const a = k / RAYS * Math.PI * 2, c = Math.cos(a), s = Math.sin(a);
    const dx = fx * c + rx * s, dz = fz * c + rz * s;
    const h = col.raycast(B.pos.x, B.pos.y + 0.9, B.pos.z, dx, 0, dz, 15, _hit);
    put(h ? h.t / 15 : 1);
  }
  const cv = coverPoint(br);
  if (cv) { const cx = cv[0] - B.pos.x, cz = cv[1] - B.pos.z, cl = Math.hypot(cx, cz) || 1; put((cx * fx + cz * fz) / cl); put((cx * rx + cz * rz) / cl); put(Math.min(30, cl) / 30); }
  else { put(0); put(0); put(1); }
  const H = G.arena.half; put(Math.min(20, H - Math.max(Math.abs(B.pos.x), Math.abs(B.pos.z))) / 20);
  // --- crowd (2)
  let n = 0, nearest = 80;
  for (const [o2, k] of br.known) {
    if (o2 === tgt || !o2.alive) continue;
    const dd = k.pos.distanceTo(B.pos); if (dd < 20) n++; nearest = Math.min(nearest, dd);
  }
  put(n / 3); put(nearest / 40);
  // --- incoming threat (3)
  if (threat) {
    put(1); put(threat.tca / 0.6);
    let px = -threat.vz, pz = threat.vx; const pl = Math.hypot(px, pz) || 1;
    put(((B.pos.x - threat.d.pos.x) * px + (B.pos.z - threat.d.pos.z) * pz) / pl >= 0 ? 1 : -1);
  } else { put(0); put(1); put(0); }
  return i;
}

// nearest cover spot on the far side from the target (same idea the scripted bot retreats to)
export function coverPoint(br) {
  const B = br.f.body, tgt = br.target, CV = br.G.arena.cover;
  if (!tgt || !CV || !CV.length) return null;
  const tp = br.tpos(tgt), dist = Math.hypot(tp.x - B.pos.x, tp.z - B.pos.z);
  let best = null, bs = 1e9;
  for (const [cx, cz] of CV) {
    const ax = cx - tp.x, az = cz - tp.z, al = Math.hypot(ax, az) || 1;
    const px = cx + ax / al * 3.2, pz = cz + az / al * 3.2;
    const d = Math.hypot(px - B.pos.x, pz - B.pos.z);
    const wrong = Math.hypot(px - tp.x, pz - tp.z) < dist ? 25 : 0;
    if (d + wrong < bs) { bs = d + wrong; best = [px, pz]; }
  }
  return best;
}

// ---------------------------------------------------------------------------
export class NeuroBrain extends BotBrain {
  // skill = motor tier (aim speed / reaction) — the decisions always come from the network
  constructor(game, fighter, policy, skill = 'max', persona = null) {
    super(game, fighter, SKILL[skill] && skill !== 'ai' ? skill : 'max', persona);
    this.policy = policy;
    this.obs = new Float32Array(OBS);
    this.a = new Float32Array(ACT);
    this.neuro = true;
    this.onObs = null;           // training hook: (obs) => void
  }
  reset() {
    super.reset();
    this.decT = 0; this.prev = { jump: false, dash: false, recall: false, blink: false, skill: false };
    this.fire = { jump: false, dash: false, recall: false, blink: false, skill: false };
    if (this.a) this.a.fill(0);
    this.bankT = -9; this.style = 0;
  }
  tick(dt) {
    const f = this.f, B = f.body, inp = this.inp;
    inp.fwd = 0; inp.right = 0; inp.jumpPressed = false; inp.dashPressed = false; inp.jumpHeld = false; inp.autoHop = true;
    if (!f.alive) return inp;
    this.thinkT -= dt;
    if (this.thinkT <= 0) {
      this.thinkT = this.S.think * (0.7 + Math.random() * 0.6);
      this.sense();
      const prev = this.target;
      this.target = this.pickTarget();
      if (this.target !== prev && this.target) this.reactUntil = this.now + this.S.react * (0.7 + Math.random() * 0.7);
    }
    if (this.target && (!this.target.alive || !this.known.has(this.target))) { this.target = null; this.thinkT = 0; }
    this.perceive(dt);
    this.cool -= dt; this.techCd -= dt;
    const threat = this.scanThreats();
    if (!this.target) {
      // nobody known: wander and listen like the scripted bot (nothing to decide yet)
      if (this.intent !== 'roam') { this.intent = 'roam'; this.intentStart = this.now; }
      this.move(dt, inp, threat); this.combat(dt);
      return inp;
    }
    // ---- think: 20 decisions per second ----
    this.decT -= dt;
    if (this.decT <= 0) {
      this.decT += DECIDE; if (this.decT < 0) this.decT = DECIDE;
      this.fr = frame(this);
      observe(this, threat, this.obs, this.fr);
      if (this.onObs) this.onObs(this.obs);
      const y = this.policy.act(this.obs);
      for (let i = 0; i < ACT; i++) this.a[i] = y[i];
      const a = this.a, P = this.prev, F = this.fire;
      for (const [k, idx] of [['jump', A.JUMP], ['dash', A.DASH], ['recall', A.RECALL], ['blink', A.BLINK], ['skill', A.SKILL]]) {
        const on = a[idx] > 0; F[k] = on && !P[k]; P[k] = on;
      }
      this.style = a[A.BANK] > a[A.DIRECT] && a[A.BANK] > a[A.LOB] ? 1 : a[A.LOB] > a[A.DIRECT] ? 2 : 0;
      // the scripted helpers read this.intent — keep it meaningful
      this.intent = sig(a[A.COVER]) > 0.5 ? 'retreat' : 'engage';
    }
    this.nMove(dt, inp, threat);
    this.nCombat(dt);
    this.nSkill();
    return inp;
  }

  nMove(dt, inp, threat) {
    const B = this.f.body, a = this.a, fr = this.fr || frame(this);
    const mf = Math.tanh(a[A.MOVE_F]), ms = Math.tanh(a[A.MOVE_S]), cw = sig(a[A.COVER]);
    const des = _des.set(fr.fx * mf + fr.rx * ms, 0, fr.fz * mf + fr.rz * ms);
    if (cw > 0.5) {
      const cv = coverPoint(this);
      if (cv) { const cx = cv[0] - B.pos.x, cz = cv[1] - B.pos.z, cl = Math.hypot(cx, cz); if (cl > 1.5) { des.x += cx / cl * (cw - 0.5) * 3; des.z += cz / cl * (cw - 0.5) * 3; } }
    }
    // reflexes the body does on its own: don't run into walls, hop small ledges, get unstuck
    this.jumpNow = false;
    this.avoid(des);
    if (this.jumpNow && B.grounded) inp.jumpPressed = true;
    if (B.hSpeed < 2.5 && des.lengthSq() > 0.1) { this.stuckT += dt; if (this.stuckT > 0.45) { this.strafe = -this.strafe; inp.jumpPressed = true; this.stuckT = 0; } }
    else this.stuckT = 0;
    const dl = Math.hypot(des.x, des.z);
    if (dl > 0.25) {
      const fx = -Math.sin(B.yaw), fz = -Math.cos(B.yaw), rx = Math.cos(B.yaw), rz = -Math.sin(B.yaw);
      const p = (des.x * fx + des.z * fz) / dl, q = (des.x * rx + des.z * rz) / dl;
      inp.fwd = p > 0.38 ? 1 : p < -0.38 ? -1 : 0;
      inp.right = q > 0.38 ? 1 : q < -0.38 ? -1 : 0;
      this.travelDir = (this.travelDir || new THREE.Vector3()).set(des.x / dl, 0, des.z / dl);
    } else this.travelDir = null;
    if (a[A.HOP] > 0) inp.jumpHeld = true;
    const F = this.fire;
    if (F.jump) { inp.jumpPressed = true; F.jump = false; }
    if (F.dash) { if (B.dashCharges > 0) { inp.dashPressed = true; if (threat) this.f.st.dodges = (this.f.st.dodges || 0) + 1; } F.dash = false; }
  }

  nCombat(dt) {
    const G = this.G, f = this.f, B = f.body, S = this.S, d = f.disc, tgt = this.target, a = this.a, F = this.fire;
    _eye.copy(B.eye);
    const origin = _org.copy(_eye); origin.y -= 0.15;
    let want;
    if (this.skillPlan) want = _dir.copy(this.skillPlan.dir);
    else {
      this.intercept(origin, tgt, _aim);
      want = _dir.subVectors(_aim, origin).normalize();
      if (d.state === 'hand') {
        if (this.plan && this.plan.until > this.now) want.copy(this.plan.dir);
        else {
          this.plan = null;
          if (this.style === 1 && a[A.THROW] > 0 && this.now - this.bankT > 0.3) {
            this.bankT = this.now;
            const bank = this.solveBank(origin, tgt);
            if (bank) { this.plan = { dir: bank.clone(), until: this.now + 0.35, bank: true }; want.copy(bank); }
          } else if (this.style === 2) {
            _q.copy(_aim); _q.y += 2.8; want.subVectors(_q, origin).normalize();
          }
        }
      }
      // learned fine adjustment of the aim point
      const oy = Math.tanh(a[A.AIM_Y]) * 0.06, op = Math.tanh(a[A.AIM_P]) * 0.06;
      if (oy || op) {
        const yaw = Math.atan2(-want.x, -want.z) + oy, pitch = clamp(Math.asin(clamp(want.y, -1, 1)) + op, -1.4, 1.4), cp = Math.cos(pitch);
        want.set(-Math.sin(yaw) * cp, Math.sin(pitch), -Math.cos(yaw) * cp);
      }
    }
    this.aim(dt, want);
    if (a[A.THROW] > 0 && !this.skillPlan && d.state === 'hand' && d.catchCd <= 0 && this.cool <= 0 && this.now >= this.reactUntil) {
      const look = B.lookDir(_look);
      if (look.angleTo(want) < S.align * 1.5) {
        if (G.throwFor(f, look)) { this.cool = S.pause * (0.5 + Math.random()); this.plan = null; }
      }
    }
    if (d.state === 'out' && F.recall) { if (d.t > 0.05) G.recallFor(f); F.recall = false; }
    if (d.state !== 'hand' && F.blink) { if (d.t > 0.04 || d.state === 'return') G.blinkFor(f); F.blink = false; }
    if (d.state === 'hand') F.recall = F.blink = false;
  }

  nSkill() {
    const G = this.G, f = this.f, B = f.body, F = this.fire;
    if (f.skillCd > 0) { this.skillPlan = null; F.skill = false; return; }
    if (this.skillPlan) {
      if (B.lookDir(_look).angleTo(this.skillPlan.dir) < 0.08 || this.now > this.skillPlan.until) { G.useSkill(f); this.skillPlan = null; this.cool = Math.min(this.cool, 0.25); }
      return;
    }
    if (!F.skill) return;
    F.skill = false;
    if (f.skill === 'gravity') {
      const tgt = this.target; if (!tgt) return;
      const tp = this.tpos(tgt), dd = tp.distanceTo(B.pos);
      const t = dd / 24;
      this.predict(tgt, t, _q); _q.y -= 1;
      const lift = Math.max(0, 0.5 * 22 * t * t - 4 * t) / Math.max(1, dd);
      _q.sub(B.eye).normalize(); _q.y += lift; _q.normalize();
      this.skillPlan = { dir: _q.clone(), until: this.now + 0.45 };
    } else G.useSkill(f);
  }
}

// ---------------------------------------------------------------------------
// the shipped brain + the one you trained yourself (훈련소) — the newer generation wins
let _shipped = null, _custom = null, _active = null;
export function setShippedBrain(json) { try { _shipped = Policy.fromJSON(json); } catch (e) { console.warn('brain', e); } _active = null; }
export function loadCustomBrain() {
  try { const s = localStorage.getItem('redshift_ai_brain'); _custom = s ? Policy.fromJSON(s) : null; } catch { _custom = null; }
  _active = null; return _custom;
}
export function saveCustomBrain(policy) {
  _custom = policy; _active = null;
  try { localStorage.setItem('redshift_ai_brain', JSON.stringify(policy.toJSON())); } catch { }
}
export function clearCustomBrain() { _custom = null; _active = null; try { localStorage.removeItem('redshift_ai_brain'); } catch { } }
export function shippedBrain() { return _shipped; }
export function activeBrain() {
  if (_active) return _active;
  if (_custom === null) loadCustomBrain();
  const sg = _shipped ? (_shipped.meta.gen || 0) : -1, cg = _custom ? (_custom.meta.gen || 0) : -1;
  _active = _custom && cg >= sg ? _custom : _shipped;
  return _active;
}
// one brain object per bot (each keeps its own small buffers)
export function makeBrain(game, fighter, persona, motor = 'max') {
  const pol = activeBrain();
  if (!pol) return new BotBrain(game, fighter, 'max', persona);
  return new NeuroBrain(game, fighter, pol.clone(), motor, persona);
}
