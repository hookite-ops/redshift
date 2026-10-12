// Enemy roster: GUNNER, BLADE, BRUTE, SNIPER, DRONE
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { SURF } from './physics.js';

const v1 = new THREE.Vector3(), v2 = new THREE.Vector3(), v3 = new THREE.Vector3();
const _contacts = [];
const _hit = { t: 0, x: 0, y: 0, z: 0, nx: 0, ny: 0, nz: 0, flags: 0, tri: 0 };

export const TYPES = {
  gunner: { hp: 80, inst: 80, speed: 8, accent: 0xff1838, r: 0.4, h: 1.9, score: 150, name: 'GUNNER' },
  blade: { hp: 110, inst: 100, speed: 12.5, accent: 0x20d8ff, r: 0.4, h: 1.9, score: 180, name: 'BLADE' },
  brute: { hp: 320, inst: 220, speed: 8.5, accent: 0xffa020, r: 0.62, h: 2.5, score: 450, name: 'BRUTE' },
  sniper: { hp: 60, inst: 60, speed: 7, accent: 0xb050ff, r: 0.4, h: 1.9, score: 220, name: 'SNIPER' },
  drone: { hp: 45, inst: 40, speed: 14, accent: 0xff3048, r: 0.6, h: 1.2, score: 120, name: 'DRONE' },
};

// ---------- shared materials / geometry cache ----------
const MAT = {}; const GEO = {};
function mats() {
  if (MAT.body) return MAT;
  MAT.body = new THREE.MeshStandardMaterial({ color: 0x15161d, roughness: 0.35, metalness: 0.85 });
  MAT.armor = new THREE.MeshStandardMaterial({ color: 0x3b3d4a, roughness: 0.25, metalness: 0.95 });
  MAT.cloth = new THREE.MeshStandardMaterial({ color: 0x0c0c10, roughness: 0.9, metalness: 0.0 });
  MAT.blade = new THREE.MeshStandardMaterial({ color: 0xe8e8f4, roughness: 0.12, metalness: 1.0 });
  MAT.gun = new THREE.MeshStandardMaterial({ color: 0x101116, roughness: 0.4, metalness: 0.8 });
  MAT.flash = new THREE.MeshBasicMaterial({ color: new THREE.Color(5, 5, 5) });
  MAT.yellow = new THREE.MeshBasicMaterial({ color: new THREE.Color(4, 3.2, 0.6) });
  MAT.redHot = new THREE.MeshBasicMaterial({ color: new THREE.Color(5, 0.3, 0.4) });
  for (const k in TYPES) {
    MAT['acc_' + k] = new THREE.MeshBasicMaterial({ color: new THREE.Color(TYPES[k].accent).multiplyScalar(3.2) });
    // per-type body materials with a fresnel rim in the accent colour → readable silhouettes at night
    MAT['body_' + k] = rimify(MAT.body.clone(), TYPES[k].accent, 2.2, 1.1);
    MAT['armor_' + k] = rimify(MAT.armor.clone(), TYPES[k].accent, 2.6, 0.8);
    MAT['cloth_' + k] = rimify(MAT.cloth.clone(), TYPES[k].accent, 2.0, 0.9);
  }
  return MAT;
}
function rimify(m, color, power, strength) {
  const c = new THREE.Color(color);
  m.onBeforeCompile = sh => {
    sh.uniforms.rimColor = { value: c }; sh.uniforms.rimPower = { value: power }; sh.uniforms.rimStrength = { value: strength };
    sh.fragmentShader = 'uniform vec3 rimColor; uniform float rimPower; uniform float rimStrength;\n' + sh.fragmentShader.replace('#include <emissivemap_fragment>',
      '#include <emissivemap_fragment>\n  { vec3 vd = normalize(vViewPosition); float fr = pow(1.0 - clamp(abs(dot(normal, vd)), 0.0, 1.0), rimPower); totalEmissiveRadiance += rimColor * fr * rimStrength; }');
  };
  m.customProgramCacheKey = () => 'rim' + color + power + strength;
  return m;
}
function rbox(w, h, d, r = 0.04) {
  const k = `${w}|${h}|${d}|${r}`;
  return GEO[k] || (GEO[k] = new RoundedBoxGeometry(w, h, d, 2, Math.min(r, w / 2 - 0.001, h / 2 - 0.001, d / 2 - 0.001)));
}
function part(g, m, x = 0, y = 0, z = 0) { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.castShadow = true; return o; }

export class Enemy {
  constructor(game, type, pos) {
    const M = mats();
    this.game = game; this.col = game.map.col; this.scene = game.scene;
    this.type = type; this.cfg = TYPES[type];
    this.hp = this.maxHp = this.cfg.hp; this.inst = 0; this.instMax = this.cfg.inst;
    this.alive = true; this.spawnT = 0.6;
    this.pos = pos.clone(); this.vel = new THREE.Vector3(); this.yaw = Math.random() * 6; this.grounded = false;
    this.chest = new THREE.Vector3(); this.head = new THREE.Vector3(); this.muzzle = new THREE.Vector3();
    this.state = 'idle'; this.stateT = 0;
    this.atkCd = 1.2 + Math.random() * 1.2; this.dashCd = 2 + Math.random() * 2;
    this.strafe = Math.random() < 0.5 ? -1 : 1; this.strafeT = 0;
    this.stagger = 0; this.broken = 0; this.flashT = 0; this.guardT = 0;
    this.anim = Math.random() * 10; this.losT = 0; this.los = false;
    this.hoverY = 8 + Math.random() * 5; this.orbit = Math.random() * 6.28;
    this.lastHitBy = null; this.instDecayHold = 0; this.windup = 0; this.chain = 0;
    this.build(M);
    this.updateAnchors();
  }

  // ---------------- model ----------------
  build(M) {
    const t = this.type, acc = M['acc_' + t];
    const g = this.group = new THREE.Group();
    if (t === 'drone') {
      const core = part(new THREE.SphereGeometry(0.42, 20, 14), M['armor_drone']); g.add(core);
      const eye = part(new THREE.SphereGeometry(0.16, 12, 8), acc, 0, 0, 0.36); g.add(eye); this.eye = eye;
      const ring = part(new THREE.TorusGeometry(0.62, 0.06, 8, 32), M['body_drone']); ring.rotation.x = Math.PI / 2; g.add(ring);
      const ringGlow = part(new THREE.TorusGeometry(0.62, 0.02, 6, 32), acc); ringGlow.rotation.x = Math.PI / 2; ringGlow.position.y = 0.05; g.add(ringGlow);
      this.rotors = [];
      for (let i = 0; i < 4; i++) {
        const a = i * Math.PI / 2 + Math.PI / 4;
        const arm = part(rbox(0.1, 0.06, 0.5, 0.02), M.body, Math.cos(a) * 0.6, 0.05, Math.sin(a) * 0.6); arm.rotation.y = -a; g.add(arm);
        const rot = part(new THREE.CylinderGeometry(0.28, 0.28, 0.02, 16), new THREE.MeshBasicMaterial({ color: 0x404050, transparent: true, opacity: 0.35 }), Math.cos(a) * 0.85, 0.12, Math.sin(a) * 0.85);
        g.add(rot); this.rotors.push(rot);
      }
      this.gunTip = new THREE.Object3D(); this.gunTip.position.set(0, -0.1, 0.5); g.add(this.gunTip);
      this.parts = { core };
    } else {
      const S = t === 'brute' ? 1.32 : 1;
      const body = t === 'sniper' ? M['cloth_' + t] : M['body_' + t];
      const armor = M['armor_' + t], cloth = M['cloth_' + t];
      // legs
      const legs = [];
      for (const s of [-1, 1]) {
        const hip = new THREE.Group(); hip.position.set(s * 0.15, 0.95, 0);
        hip.add(part(rbox(0.2, 0.48, 0.22), body, 0, -0.24, 0));
        const knee = new THREE.Group(); knee.position.y = -0.48; hip.add(knee);
        knee.add(part(rbox(0.19, 0.48, 0.21), armor, 0, -0.24, 0));
        knee.add(part(rbox(0.05, 0.3, 0.05, 0.01), acc, s * 0.06, -0.22, 0.11));
        knee.add(part(rbox(0.2, 0.08, 0.3), M['body_' + t], 0, -0.48, 0.05));
        g.add(hip); legs.push({ hip, knee });
      }
      this.legs = legs;
      // torso
      const torso = this.torso = new THREE.Group(); torso.position.y = 0.95; g.add(torso);
      torso.add(part(rbox(0.38, 0.2, 0.24), body, 0, 0.08, 0));
      torso.add(part(rbox(0.32, 0.22, 0.2), M['body_' + t], 0, 0.26, 0));
      torso.add(part(rbox(0.52, 0.34, 0.3), armor, 0, 0.5, 0));
      torso.add(part(rbox(0.16, 0.12, 0.04, 0.02), acc, 0, 0.52, 0.16));
      torso.add(part(rbox(0.04, 0.38, 0.03, 0.01), acc, 0, 0.45, -0.16));
      for (const s of [-1, 1]) torso.add(part(rbox(0.22, 0.14, 0.34), armor, s * 0.34, 0.68, 0));
      // scarf / cloth for blades & snipers
      if (t === 'blade' || t === 'sniper') {
        const scarf = part(rbox(0.3, 0.04, 0.5, 0.01), cloth, 0, 0.72, -0.3); scarf.rotation.x = -0.4; torso.add(scarf); this.scarf = scarf;
      }
      // head
      const head = this.headG = new THREE.Group(); head.position.y = 0.78; torso.add(head);
      head.add(part(rbox(0.12, 0.1, 0.12), M['body_' + t], 0, 0.0, 0));
      head.add(part(rbox(0.27, 0.29, 0.29, 0.07), body, 0, 0.16, 0));
      const visor = part(rbox(0.28, 0.06, 0.05, 0.02), acc, 0, 0.18, 0.13); head.add(visor); this.visor = visor;
      if (t === 'blade') head.add(part(rbox(0.04, 0.14, 0.3, 0.01), acc, 0, 0.36, 0));
      if (t === 'brute') { head.add(part(rbox(0.36, 0.08, 0.32), armor, 0, 0.32, 0)); }
      if (t === 'sniper') { const hood = part(rbox(0.33, 0.33, 0.34, 0.1), cloth, 0, 0.19, -0.02); head.add(hood); }
      // arms
      const arms = [];
      for (const s of [-1, 1]) {
        const sh = new THREE.Group(); sh.position.set(s * 0.36, 0.64, 0); torso.add(sh);
        sh.add(part(rbox(0.15, 0.36, 0.16), body, 0, -0.18, 0));
        const el = new THREE.Group(); el.position.y = -0.36; sh.add(el);
        el.add(part(rbox(0.14, 0.34, 0.15), armor, 0, -0.17, 0));
        el.add(part(rbox(0.12, 0.1, 0.13), M['body_' + t], 0, -0.38, 0));
        arms.push({ sh, el });
      }
      this.arms = arms;
      // weapon in right hand
      const hand = new THREE.Group(); hand.position.set(0, -0.4, 0.02); arms[1].el.add(hand); this.hand = hand;
      if (t === 'gunner' || t === 'sniper') {
        const L = t === 'sniper' ? 1.3 : 0.75;
        const gun = new THREE.Group();
        gun.add(part(rbox(0.09, 0.14, L, 0.02), M.gun, 0, 0, L / 2 - 0.15));
        gun.add(part(rbox(0.05, 0.05, 0.4, 0.01), armor, 0, 0.02, L - 0.05));
        const glow = part(rbox(0.025, 0.025, L * 0.7, 0.008), acc, 0.055, 0.03, L / 2 - 0.1); gun.add(glow);
        if (t === 'sniper') gun.add(part(new THREE.CylinderGeometry(0.04, 0.04, 0.3, 10), armor, 0, 0.11, 0.3)).rotation.x = Math.PI / 2;
        this.gunTip = new THREE.Object3D(); this.gunTip.position.set(0, 0.02, L + 0.15); gun.add(this.gunTip);
        gun.rotation.x = Math.PI / 2; hand.add(gun); this.weapon = gun; this.weaponGlow = glow;
      } else {
        const L = t === 'brute' ? 1.6 : 1.1;
        const sword = new THREE.Group();
        sword.add(part(rbox(0.05, 0.3, 0.05, 0.015), M.gun, 0, 0, 0));
        sword.add(part(rbox(0.16, 0.04, 0.05, 0.01), acc, 0, 0.16, 0));
        const bl = part(rbox(t === 'brute' ? 0.14 : 0.03, L, t === 'brute' ? 0.03 : 0.07, 0.01), M.blade, 0, 0.18 + L / 2, 0); sword.add(bl);
        const edge = part(rbox(0.012, L, 0.012, 0.004), acc, 0, 0.18 + L / 2, t === 'brute' ? 0.02 : 0.04); sword.add(edge);
        sword.rotation.x = Math.PI / 2; hand.add(sword); this.weapon = sword; this.weaponGlow = edge;
        this.swordTip = new THREE.Object3D(); this.swordTip.position.y = 0.18 + L; sword.add(this.swordTip);
      }
      g.scale.setScalar(S);
      this.S = S;
    }
    g.position.copy(this.pos);
    this.scene.add(g);
    // floating status bars (world space, billboarded each frame)
    const bars = this.bars = new THREE.Group();
    const mk = (w, h, color, y, op = 1) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: op, depthTest: false, toneMapped: false })); m.position.y = y; m.renderOrder = 20; bars.add(m); return m; };
    mk(1.04, 0.13, 0x000000, 0, 0.55);
    this.hpBar = mk(1, 0.07, new THREE.Color(this.cfg.accent).multiplyScalar(1.4), 0.02);
    this.instBar = mk(1, 0.035, 0xffd040, -0.045);
    this.brokenIcon = mk(0.32, 0.32, new THREE.Color(4, 3, 0.5), 0.36); this.brokenIcon.rotation.z = Math.PI / 4; this.brokenIcon.visible = false;
    bars.visible = false;
    this.scene.add(bars);
    this.scaleIn = 0;
  }

  updateAnchors() {
    const s = this.S || 1;
    if (this.type === 'drone') { this.chest.copy(this.pos); this.head.copy(this.pos); return; }
    this.chest.set(this.pos.x, this.pos.y + 1.4 * s, this.pos.z);
    this.head.set(this.pos.x, this.pos.y + 1.92 * s, this.pos.z);
  }

  // ray hit → {t, head}
  rayHit(ox, oy, oz, dx, dy, dz, maxT) {
    const s = this.S || 1;
    let best = null;
    const test = (cx, cy, cz, r, head) => {
      const lx = ox - cx, ly = oy - cy, lz = oz - cz;
      const b = lx * dx + ly * dy + lz * dz, c = lx * lx + ly * ly + lz * lz - r * r, d = b * b - c;
      if (d < 0) return; const t = -b - Math.sqrt(d);
      if (t >= 0 && t < maxT && (!best || t < best.t)) best = { t, head };
    };
    if (this.type === 'drone') { test(this.pos.x, this.pos.y, this.pos.z, 0.75, false); return best; }
    test(this.head.x, this.head.y, this.head.z, 0.24 * s, true);
    for (const [y, r] of [[1.38, 0.38], [1.0, 0.32], [0.6, 0.28], [0.22, 0.26]]) test(this.pos.x, this.pos.y + y * s, this.pos.z, r * s, false);
    return best;
  }

  facingDot(p) { // how much the enemy faces point p (1 = straight at it)
    v1.set(p.x - this.pos.x, 0, p.z - this.pos.z).normalize();
    return Math.sin(this.yaw) * v1.x + Math.cos(this.yaw) * v1.z;
  }

  damage(n, opts = {}) {
    if (!this.alive) return false;
    this.hp -= n; this.flashT = 0.1; this.bars.visible = true;
    if (opts.inst) this.addInst(opts.inst);
    if (opts.from && this.type !== 'brute') { v1.subVectors(this.pos, opts.from).setY(0).normalize(); this.vel.addScaledVector(v1, Math.min(9, n * 0.07)); }
    if (opts.stagger) this.stagger = Math.max(this.stagger, opts.stagger);
    if (this.hp <= 0) { this.alive = false; return true; }
    return false;
  }

  addInst(n) {
    if (this.broken > 0) return;
    this.inst = Math.min(this.instMax, this.inst + n);
    this.instDecayHold = 2.0;
    this.bars.visible = true;
    if (this.inst >= this.instMax) {
      this.broken = this.type === 'brute' ? 3.2 : 2.6; this.state = 'broken'; this.windup = 0; this.guardT = 0;
      this.game.onEnemyBroken(this);
    }
  }

  cancelAttack() { this.windup = 0; this.state = 'recover'; this.stateT = 0.5; this.atkCd = 1.0; }

  // ======================= AI =======================
  update(dt, ctx) {
    const p = ctx.player;
    this.anim += dt; this.flashT -= dt; this.stagger = Math.max(0, this.stagger - dt);
    this.atkCd -= dt; this.dashCd -= dt; this.strafeT -= dt; this.losT -= dt; this.guardT -= dt;
    this.spawnT -= dt;
    if (this.broken > 0) { this.broken -= dt; if (this.broken <= 0) { this.inst = this.instMax * 0.35; this.state = 'idle'; } }
    else if ((this.instDecayHold -= dt) <= 0) this.inst = Math.max(0, this.inst - this.instMax * 0.12 * dt);

    const toP = v2.subVectors(p.pos, this.pos); const dy = toP.y; toP.y = 0;
    const dist = toP.length(); const dir = toP.clone().divideScalar(dist || 1);
    if (this.losT <= 0) { this.losT = 0.15 + Math.random() * 0.1; this.los = ctx.los(this.type === 'drone' ? this.pos : this.chest, p.eye); }

    // facing
    if (this.broken <= 0 && this.stagger <= 0) {
      const target = Math.atan2(dir.x, dir.z);
      let d = target - this.yaw; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2;
      const turn = this.state === 'windup' ? (this.type === 'brute' ? 1.5 : 5) : 9;
      this.yaw += d * Math.min(1, dt * turn);
    }

    let wx = 0, wz = 0, sp = this.cfg.speed;
    const busy = this.broken > 0 || this.stagger > 0 || this.spawnT > 0;
    if (!busy) {
      const ai = this['ai_' + this.type];
      const w = ai.call(this, dt, ctx, p, dist, dir, dy);
      if (w) { wx = w.x; wz = w.z; sp = w.s ?? sp; }
    }

    if (this.type === 'drone') { this.flyMove(dt, ctx, p, dist, dir); }
    else this.groundMove(dt, wx, wz, sp, ctx);
    this.updateAnchors();
    this.animate(dt, ctx);
  }

  // ---- GUNNER ----
  ai_gunner(dt, ctx, p, dist, dir) {
    if (this.strafeT <= 0) { this.strafe *= -1; this.strafeT = 1 + Math.random() * 1.8; }
    const side = v1.set(dir.z, 0, -dir.x).multiplyScalar(this.strafe);
    const fwd = (!this.los || dist > 34) ? 1 : dist < 14 ? -1 : 0;
    let w = { x: dir.x * fwd + side.x * 0.75, z: dir.z * fwd + side.z * 0.75 };
    if (this.state === 'windup') {
      this.windup -= dt; w.s = 2.5;
      if (this.windup <= 0) { this.state = 'burst'; this.shots = 3; this.shotT = 0; }
    } else if (this.state === 'burst') {
      w.s = 2.5; this.shotT -= dt;
      if (this.shotT <= 0) { this.shotT = 0.12; this.shots--; ctx.enemyShoot(this, { speed: 48, dmg: 8, spread: 0.035 }); if (this.shots <= 0) { this.state = 'idle'; this.atkCd = 1.5 + Math.random() * 1.5; } }
    } else if (this.atkCd <= 0 && this.los && dist < 60) { this.state = 'windup'; this.windup = 0.55; this.parryable = true; }
    return w;
  }

  // ---- BLADE ----
  ai_blade(dt, ctx, p, dist, dir, dy) {
    let w = { x: dir.x, z: dir.z };
    if (this.state === 'windup') {
      this.windup -= dt; w.s = 2;
      if (this.windup <= 0) { ctx.enemyStrike(this, { dmg: 18, reach: 3.1, inst: 22 }); this.state = 'recover'; this.stateT = 0.32; this.chain = (this.chain || 0) + 1; }
      return w;
    }
    if (this.state === 'recover') {
      this.stateT -= dt; w.s = 3;
      if (this.stateT <= 0) {
        if (this.chain < 2 && Math.random() < 0.4 && dist < 3.5) { this.state = 'windup'; this.windup = 0.32; this.parryable = true; ctx.telegraph(this, true); }
        else { this.state = 'idle'; this.atkCd = 0.9 + Math.random() * 0.8; this.chain = 0; }
      }
      return w;
    }
    if (this.guardT > 0) { this.state = 'guard'; w.s = 3; w.x = dir.x * 0.3 + dir.z * this.strafe * 0.7; w.z = dir.z * 0.3 - dir.x * this.strafe * 0.7; return w; }
    if (this.state === 'guard') this.state = 'idle';
    // guard when the player is close and facing us
    if (dist < 7 && Math.random() < dt * 0.6 && this.atkCd > 0.2) { this.guardT = 1.0 + Math.random() * 0.8; }
    if (dist < 6) { const s = v1.set(dir.z, 0, -dir.x).multiplyScalar(this.strafe * 0.6); w.x += s.x; w.z += s.z; }
    if (dist < 3.2 && this.atkCd <= 0 && Math.abs(dy) < 2.4) { this.state = 'windup'; this.windup = 0.48; this.parryable = true; this.chain = 0; ctx.telegraph(this, true); }
    // gap closer
    if (dist > 7 && dist < 22 && this.dashCd <= 0 && this.grounded && this.los) {
      this.vel.x = dir.x * 26; this.vel.z = dir.z * 26; this.vel.y = 4 + Math.max(0, dy) * 1.1;
      this.dashCd = 2.4 + Math.random() * 2; ctx.enemyDash(this);
    }
    if (dy > 2.5 && dist < 12 && this.grounded && Math.random() < dt * 1.5) { this.vel.y = 12 + Math.min(dy, 8) * 0.9; this.vel.x += dir.x * 6; this.vel.z += dir.z * 6; }
    return w;
  }

  // ---- BRUTE ----
  ai_brute(dt, ctx, p, dist, dir, dy) {
    let w = { x: dir.x, z: dir.z };
    if (this.state === 'windup') {
      this.windup -= dt; w.s = this.unblockable ? 1.5 : 1;
      if (this.windup <= 0) {
        ctx.enemyStrike(this, this.unblockable ? { dmg: 38, reach: 4.4, inst: 0, unblockable: true, arc: 0.0 } : { dmg: 26, reach: 3.9, inst: 40 });
        this.state = 'recover'; this.stateT = 0.6;
      }
      return w;
    }
    if (this.state === 'recover') { this.stateT -= dt; w.s = 1; if (this.stateT <= 0) { this.state = 'idle'; this.atkCd = 1.2 + Math.random(); } return w; }
    if (dist < 4.2 && this.atkCd <= 0 && Math.abs(dy) < 3) {
      this.unblockable = Math.random() < 0.35; this.state = 'windup'; this.windup = this.unblockable ? 0.8 : 0.6; this.parryable = !this.unblockable;
      ctx.telegraph(this, !this.unblockable);
    }
    if (dist > 8 && dist < 16 && this.dashCd <= 0 && this.grounded && this.los) { // lunge
      this.vel.x = dir.x * 20; this.vel.z = dir.z * 20; this.vel.y = 7; this.dashCd = 4 + Math.random() * 2; ctx.enemyDash(this);
    }
    return w;
  }

  // ---- SNIPER ----
  ai_sniper(dt, ctx, p, dist, dir) {
    const w = { x: 0, z: 0, s: 0 };
    if (this.state === 'aim') {
      this.windup -= dt;
      this.aimPoint = this.aimPoint || p.eye.clone();
      // track with lag, lock in the last 0.25s
      if (this.windup > 0.25) this.aimPoint.lerp(v1.copy(p.eye).setY(p.eye.y - 0.3), Math.min(1, dt * 5));
      if (this.windup <= 0) {
        ctx.enemyShoot(this, { speed: 130, dmg: 30, spread: 0, at: this.aimPoint, sniper: true });
        this.state = 'idle'; this.atkCd = 2.6 + Math.random() * 1.5; this.aimPoint = null;
        this.shotsHere = (this.shotsHere || 0) + 1;
        if (this.shotsHere >= 2) { this.shotsHere = 0; ctx.relocate(this); }
      }
    } else if (this.atkCd <= 0 && this.los && dist < 140) { this.state = 'aim'; this.windup = 1.4; this.parryable = true; this.aimPoint = p.eye.clone(); }
    return w;
  }

  // ---- DRONE ---- (movement in flyMove)
  ai_drone(dt, ctx, p, dist, dir) {
    if (this.state === 'windup') {
      this.windup -= dt;
      if (this.windup <= 0) { this.state = 'burst'; this.shots = 3; this.shotT = 0; }
    } else if (this.state === 'burst') {
      this.shotT -= dt;
      if (this.shotT <= 0) { this.shotT = 0.16; this.shots--; ctx.enemyShoot(this, { speed: 34, dmg: 6, spread: 0.05, small: true }); if (this.shots <= 0) { this.state = 'idle'; this.atkCd = 1.6 + Math.random() * 1.4; } }
    } else if (this.atkCd <= 0 && this.los && dist < 45) { this.state = 'windup'; this.windup = 0.45; this.parryable = true; }
    return null;
  }

  // ---------------- locomotion ----------------
  groundMove(dt, wx, wz, sp, ctx) {
    const wl = Math.hypot(wx, wz); if (wl > 0) { wx /= wl; wz /= wl; }
    // obstacle avoidance: probe ahead, hop low things, sidestep tall ones
    if (wl > 0 && this.grounded) {
      const h = this.col.raycast(this.pos.x, this.pos.y + 0.5, this.pos.z, wx, 0, wz, 1.6, _hit);
      if (h && Math.abs(h.ny) < 0.5) {
        const tall = this.col.raycast(this.pos.x, this.pos.y + 2.4, this.pos.z, wx, 0, wz, 1.8, _hit);
        if (!tall) this.vel.y = 10.5;
        else { const s = this.strafe; const nx = wx * 0.3 + -wz * s, nz = wz * 0.3 + wx * s; wx = nx; wz = nz; }
      }
    }
    const accel = this.grounded ? 10 : 1.5;
    const hv = Math.hypot(this.vel.x, this.vel.z);
    if (hv > sp + 2 && this.grounded) { const k = Math.exp(-5 * dt); this.vel.x *= k; this.vel.z *= k; }
    else { this.vel.x += (wx * sp - this.vel.x) * Math.min(1, accel * dt); this.vel.z += (wz * sp - this.vel.z) * Math.min(1, accel * dt); }
    this.vel.y -= 30 * dt;
    // separation
    for (const o of ctx.enemies) {
      if (o === this || !o.alive || o.type === 'drone') continue;
      const dx = this.pos.x - o.pos.x, dz = this.pos.z - o.pos.z, d2 = dx * dx + dz * dz;
      if (d2 < 1.6 && d2 > 1e-4) { const d = Math.sqrt(d2); this.vel.x += dx / d * 30 * dt; this.vel.z += dz / d * 30 * dt; }
    }
    this.pos.addScaledVector(this.vel, dt);
    this.grounded = false;
    const r = this.cfg.r, h = this.cfg.h * (this.S || 1);
    if (this.col.collideCapsule(this.pos, r, h, _contacts)) {
      for (const c of _contacts) {
        if (c.y > 0.65) this.grounded = true;
        const vn = this.vel.x * c.x + this.vel.y * c.y + this.vel.z * c.z;
        if (vn < 0) { this.vel.x -= c.x * vn; this.vel.y -= c.y * vn; this.vel.z -= c.z * vn; }
      }
    }
    // pads
    for (const p of this.game.map.jumpPads) if (Math.abs(this.pos.y - p.y) < 0.7 && (this.pos.x - p.x) ** 2 + (this.pos.z - p.z) ** 2 < p.r * p.r) this.vel.y = p.power;
    const lim = this.game.map.half - 2;
    this.pos.x = THREE.MathUtils.clamp(this.pos.x, -lim, lim); this.pos.z = THREE.MathUtils.clamp(this.pos.z, -lim, lim);
    if (this.pos.y < -10) { this.pos.set(0, 1, 40); this.vel.set(0, 0, 0); }
  }

  flyMove(dt, ctx, p, dist, dir) {
    if (this.broken > 0) { this.vel.y -= 9 * dt; }
    else {
      this.orbit += dt * 0.6 * this.strafe;
      const R = 14 + Math.sin(this.anim * 0.3) * 4;
      const tx = p.pos.x + Math.cos(this.orbit) * R, tz = p.pos.z + Math.sin(this.orbit) * R;
      const ty = Math.max(p.pos.y + this.hoverY * 0.6, 4) + Math.sin(this.anim * 1.3) * 1.2;
      v1.set(tx - this.pos.x, ty - this.pos.y, tz - this.pos.z);
      const l = v1.length(); if (l > 0.01) v1.multiplyScalar(Math.min(this.cfg.speed, l * 1.5) / l);
      this.vel.lerp(v1, Math.min(1, dt * 2.2));
    }
    this.pos.addScaledVector(this.vel, dt);
    if (this.col.collideCapsule(v3.set(this.pos.x, this.pos.y - 0.5, this.pos.z), 0.55, 1.0, _contacts)) {
      this.pos.set(v3.x, v3.y + 0.5, v3.z);
      for (const c of _contacts) { const vn = this.vel.x * c.x + this.vel.y * c.y + this.vel.z * c.z; if (vn < 0) { this.vel.x -= c.x * vn * 1.5; this.vel.y -= c.y * vn * 1.5; this.vel.z -= c.z * vn * 1.5; } }
    }
    const lim = this.game.map.half - 2;
    this.pos.x = THREE.MathUtils.clamp(this.pos.x, -lim, lim); this.pos.z = THREE.MathUtils.clamp(this.pos.z, -lim, lim);
  }

  // ---------------- animation ----------------
  animate(dt, ctx) {
    const g = this.group;
    this.scaleIn = Math.min(1, this.scaleIn + dt * 3);
    const S = (this.S || 1) * (0.2 + 0.8 * easeOut(this.scaleIn));
    g.scale.setScalar(S);
    g.position.copy(this.pos);
    g.rotation.y = this.yaw;
    const M = MAT;
    const tele = this.state === 'windup' || this.state === 'aim';
    const flashOn = Math.sin(this.anim * 38) > 0;
    if (this.type === 'drone') {
      this.rotors.forEach((r, i) => r.rotation.y += dt * 40);
      g.rotation.z = THREE.MathUtils.clamp(-this.vel.x * 0.03, -0.4, 0.4); g.rotation.x = THREE.MathUtils.clamp(this.vel.z * 0.03, -0.4, 0.4);
      // face player
      v1.subVectors(ctx.player.eye, this.pos); g.rotation.y = Math.atan2(v1.x, v1.z);
      this.eye.material = tele ? (flashOn ? M.yellow : M['acc_drone']) : M['acc_drone'];
      if (this.broken > 0) g.rotation.z += this.anim * 6;
    } else {
      const hv = Math.hypot(this.vel.x, this.vel.z);
      const run = Math.min(1, hv / 10);
      const ph = this.anim * (5 + hv * 0.55);
      const [L, R] = this.legs;
      if (this.grounded) {
        L.hip.rotation.x = Math.sin(ph) * 0.9 * run; R.hip.rotation.x = -Math.sin(ph) * 0.9 * run;
        L.knee.rotation.x = Math.max(0, -Math.cos(ph)) * 1.1 * run; R.knee.rotation.x = Math.max(0, Math.cos(ph)) * 1.1 * run;
      } else { L.hip.rotation.x = -0.7; R.hip.rotation.x = 0.4; L.knee.rotation.x = 1.0; R.knee.rotation.x = 0.3; }
      this.torso.rotation.x = run * 0.22; this.torso.position.y = 0.95 + Math.abs(Math.sin(ph)) * 0.05 * run;
      this.torso.rotation.y *= 0.85;
      const [aL, aR] = this.arms;
      const t = this.type;
      if (t === 'gunner' || t === 'sniper') {
        const aim = tele || this.state === 'burst';
        aR.sh.rotation.set(aim ? -1.45 : -0.5 + Math.sin(ph) * 0.15 * run, 0, 0); aR.el.rotation.x = aim ? -0.1 : -0.6;
        aL.sh.rotation.set(aim ? -1.3 : -Math.sin(ph) * 0.6 * run, 0, aim ? 0.6 : 0); aL.el.rotation.x = aim ? -0.6 : -0.3;
        if (this.weaponGlow) this.weaponGlow.material = tele && flashOn ? M.yellow : M['acc_' + t];
        if (t === 'sniper' && this.state === 'aim') { this.torso.rotation.x = 0.1; L.hip.rotation.x = -0.5; L.knee.rotation.x = 1.2; R.knee.rotation.x = 0.4; }
      } else {
        if (this.state === 'windup') {
          const k = 1 - Math.max(0, this.windup) / 0.6;
          aR.sh.rotation.set(-2.5 - k * 0.3, 0, -0.5); aR.el.rotation.x = -0.5; this.torso.rotation.y = 0.7;
          aL.sh.rotation.set(-0.8, 0, 0.4);
          this.weaponGlow.material = this.parryable ? (flashOn ? M.yellow : M['acc_' + t]) : (flashOn ? M.redHot : M['acc_' + t]);
        } else if (this.state === 'recover') {
          aR.sh.rotation.set(-0.4, 0, 1.0); aR.el.rotation.x = -0.2; this.torso.rotation.y = -0.6;
          this.weaponGlow.material = M['acc_' + t];
        } else if (this.state === 'guard') {
          aR.sh.rotation.set(-1.4, 0.0, 0.9); aR.el.rotation.x = -1.2; aL.sh.rotation.set(-1.2, 0, -0.5); aL.el.rotation.x = -1.4;
          this.weapon.rotation.set(Math.PI / 2, 0, 1.4);
        } else {
          aR.sh.rotation.set(-0.7 + Math.sin(ph) * 0.3 * run, 0, 0.25); aR.el.rotation.x = -0.6;
          aL.sh.rotation.set(-Math.sin(ph) * 0.8 * run, 0, 0); aL.el.rotation.x = -0.4;
          this.weapon.rotation.set(Math.PI / 2, 0, 0);
          this.weaponGlow.material = M['acc_' + t];
        }
        if (this.state !== 'guard') this.weapon.rotation.z = 0;
      }
      if (this.broken > 0) { this.torso.rotation.x = 0.7 + Math.sin(this.anim * 3) * 0.05; this.headG.rotation.x = 0.5; aR.sh.rotation.set(0.2, 0, 0.3); aL.sh.rotation.set(0.2, 0, -0.3); L.knee.rotation.x = 1.2; R.knee.rotation.x = 0.6; L.hip.rotation.x = -0.6; }
      else if (this.stagger > 0) { this.torso.rotation.x = -0.45; this.headG.rotation.x = -0.35; }
      else this.headG.rotation.x = 0;
      if (this.scarf) this.scarf.rotation.x = -0.4 - Math.min(0.9, hv * 0.05) + Math.sin(this.anim * 9) * 0.08;
      this.visor.material = this.flashT > 0 ? M.flash : M['acc_' + t];
    }
    // bars
    const cam = ctx.camera;
    this.bars.position.set(this.pos.x, this.type === 'drone' ? this.pos.y + 1.0 : this.head.y + 0.55, this.pos.z);
    this.bars.quaternion.copy(cam.quaternion);
    this.hpBar.scale.x = Math.max(0.001, this.hp / this.maxHp); this.hpBar.position.x = -(1 - this.hpBar.scale.x) / 2;
    this.instBar.scale.x = Math.max(0.001, this.inst / this.instMax); this.instBar.position.x = -(1 - this.instBar.scale.x) / 2;
    this.instBar.material.color.setRGB(1, this.inst / this.instMax > 0.75 ? 0.45 : 0.8, 0.2);
    this.brokenIcon.visible = this.broken > 0;
    if (this.broken > 0) { this.bars.visible = true; this.brokenIcon.scale.setScalar(1 + Math.sin(this.anim * 10) * 0.15); }
  }

  shatter(dir, sliced) {
    const pieces = [];
    this.group.updateMatrixWorld(true);
    this.group.traverse(o => {
      if (!o.isMesh) return;
      const wp = new THREE.Vector3(), wq = new THREE.Quaternion(), ws = new THREE.Vector3();
      o.matrixWorld.decompose(wp, wq, ws);
      const m = new THREE.Mesh(o.geometry, o.material);
      m.position.copy(wp); m.quaternion.copy(wq); m.scale.copy(ws); m.castShadow = true;
      this.scene.add(m);
      const v = new THREE.Vector3((Math.random() - 0.5) * 7, 3 + Math.random() * 7, (Math.random() - 0.5) * 7);
      if (dir) v.addScaledVector(dir, sliced ? 8 : 13);
      if (sliced && wp.y > this.pos.y + 1.1) v.y += 4;
      pieces.push({ m, v, av: new THREE.Vector3(Math.random() * 16 - 8, Math.random() * 16 - 8, Math.random() * 16 - 8), life: 2.4 + Math.random() * 1.2 });
    });
    this.dispose();
    return pieces;
  }

  dispose() { this.scene.remove(this.group); this.scene.remove(this.bars); }
}

function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
