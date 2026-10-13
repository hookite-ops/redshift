// THE DISC family — everyone's one thrown weapon. Throw it, bank it, pull it back, or blink to it.
// Four variants are picked in the loadout; they all use the same two buttons.
import * as THREE from 'three';
import { Ribbon } from './fx.js';

export const WEAPONS = {
  disc: {
    id: 'disc', name: '원반', desc: '기본 · 튕길 때마다 +35%',
    speed: 46, carry: 0.7, maxBounces: 3, outTime: 0.95, returnSpeed: 58, returnTurn: 9, catchDist: 1.7, radius: 0.35,
    dmg: 40, returnDmg: 30, bounceMul: 0.35, blinkSlam: 45, blinkRadius: 3.8, knock: 5, scale: 1, blades: 3, trail: 0.25,
  },
  heavy: {
    id: 'heavy', name: '해머', desc: '느리지만 크고 묵직 · 충격파 강화',
    speed: 33, carry: 0.6, maxBounces: 1, outTime: 1.15, returnSpeed: 46, returnTurn: 7, catchDist: 2.0, radius: 0.62,
    dmg: 58, returnDmg: 38, bounceMul: 0.25, blinkSlam: 56, blinkRadius: 4.8, knock: 11, scale: 1.75, blades: 6, trail: 0.5,
  },
  rail: {
    id: 'rail', name: '레일', desc: '아주 빠르고 멀리 · 벽에 맞으면 귀환',
    speed: 78, carry: 0.5, maxBounces: 0, outTime: 0.75, returnSpeed: 72, returnTurn: 12, catchDist: 1.7, radius: 0.26,
    dmg: 52, returnDmg: 22, bounceMul: 0, blinkSlam: 38, blinkRadius: 3.2, knock: 6, scale: 0.72, blades: 2, trail: 0.15,
  },
  boomerang: {
    id: 'boomerang', name: '부메랑', desc: '크게 휘어 돌아오며 두 번 때림',
    speed: 40, carry: 0.7, maxBounces: 2, outTime: 0.6, returnSpeed: 50, returnTurn: 3.2, catchDist: 1.9, radius: 0.42,
    dmg: 34, returnDmg: 34, bounceMul: 0.3, blinkSlam: 42, blinkRadius: 3.8, knock: 5, scale: 1.15, blades: 2, trail: 0.32,
  },
};
export const DISC = WEAPONS.disc; // the baseline numbers (some systems still reason in these)

const v1 = new THREE.Vector3(), v2 = new THREE.Vector3();
const _hit = { t: 0, x: 0, y: 0, z: 0, nx: 0, ny: 0, nz: 0, flags: 0, tri: 0 };

export function discModel(color, w, s = 1) {
  const g = new THREE.Group();
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.34 * s, 0.06 * s * (w.id === 'heavy' ? 1.5 : 1), 10, 40), new THREE.MeshStandardMaterial({ color, roughness: 0.35, emissive: new THREE.Color(color).multiplyScalar(0.25) }));
  const face = new THREE.Mesh(new THREE.CylinderGeometry(0.3 * s, 0.3 * s, 0.05 * s * (w.id === 'heavy' ? 2 : 1), 32), new THREE.MeshStandardMaterial({ color: 0x1a1a1e, roughness: 0.4 }));
  face.rotation.x = Math.PI / 2;
  const dot = new THREE.Mesh(new THREE.CylinderGeometry(0.1 * s, 0.1 * s, 0.07 * s, 16), new THREE.MeshStandardMaterial({ color }));
  dot.rotation.x = Math.PI / 2;
  const bladeMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const long = w.id === 'boomerang' ? 2.6 : w.id === 'rail' ? 1.8 : 1;
  for (let i = 0; i < w.blades; i++) {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.06 * s, 0.16 * s * long, 0.04 * s), bladeMat);
    const a = i / w.blades * Math.PI * 2, r = (0.42 + (long - 1) * 0.08) * s;
    blade.position.set(Math.cos(a) * r, Math.sin(a) * r, 0); blade.rotation.z = a; g.add(blade);
  }
  g.add(rim, face, dot); rim.castShadow = face.castShadow = true;
  return g;
}

export class Disc {
  constructor(game, owner = null, color = 0xff5a1f, weapon = 'disc') {
    this.game = game; this.owner = owner; this.color = color;
    this.state = 'hand';          // hand | out | return
    this.pos = new THREE.Vector3(); this.vel = new THREE.Vector3();
    this.t = 0; this.bounces = 0; this.hit = new Set(); this.blinked = false; this.catchCd = 0; this.kills = 0;
    this.id = Disc.nextId = (Disc.nextId || 0) + 1; this.leg = 0;
    this.reflectedBy = null;
    this.holder = new THREE.Group(); this.holder.visible = false;
    game.scene.add(this.holder);
    this.trail = new Ribbon(game.scene, 22, color, 0.25);
    this.setWeapon(weapon);
  }
  setWeapon(id) {
    this.w = WEAPONS[id] || WEAPONS.disc;
    if (this.spinner) this.holder.remove(this.spinner);
    this.spinner = this.mesh = discModel(this.color, this.w, this.w.scale);
    this.holder.add(this.spinner);
  }
  get body() { return this.owner ? this.owner.body : this.game.player; }
  dispose() { this.game.scene.remove(this.holder); this.game.scene.remove(this.trail.mesh); }

  get out() { return this.state !== 'hand'; }

  throw(origin, dir, playerVel, speedMul = 1) {
    if (this.state !== 'hand' || this.catchCd > 0) return false;
    const w = this.w;
    this.state = 'out'; this.t = 0; this.bounces = 0; this.hit.clear(); this.blinked = false; this.kills = 0; this.leg++;
    this.homing = 0; this.bonus = 0; this.lock = null; this.cone = 0; this.range = 0; this.reflectedBy = null;
    const carry = Math.max(0, playerVel.dot(dir)) * w.carry;
    this.pos.copy(origin); this.vel.copy(dir).multiplyScalar((w.speed + carry) * speedMul);
    this.holder.visible = true; this.trail.reset(); this.trail.width = w.trail;
    return true;
  }

  recall() {
    if (this.state !== 'out') return false;
    this.state = 'return'; this.hit.clear(); this.leg++;
    if (this.reflectedBy) this.hit.add(this.reflectedBy);
    return true;
  }

  caught() {
    this.state = 'hand'; this.holder.visible = false; this.catchCd = 0.12; this.reflectedBy = null;
  }

  speedMul() { return THREE.MathUtils.clamp(this.vel.length() / this.w.speed, 1, 2); }

  tick(dt) {
    this.catchCd -= dt;
    if (this.state === 'hand') return;
    const G = this.game, col = G.arena.col, w = this.w, R = w.radius;
    this.t += dt;
    if (this.state === 'out') {
      if (this.homing > 0) G.discHoming(this, dt);
      let remain = this.vel.length() * dt;
      for (let guard = 0; guard < 5 && remain > 1e-4; guard++) {
        const sp = this.vel.length(); v1.copy(this.vel).divideScalar(sp);
        const h = col.raycast(this.pos.x, this.pos.y, this.pos.z, v1.x, v1.y, v1.z, remain + R, _hit);
        const hitWall = !!h && (h.t - R) < remain;
        const hx = h ? h.x : 0, hy = h ? h.y : 0, hz = h ? h.z : 0, nx = h ? h.nx : 0, ny = h ? h.ny : 0, nz = h ? h.nz : 0;
        const travel = hitWall ? Math.max(0, h.t - R) : remain;
        const end = v2.copy(this.pos).addScaledVector(v1, travel);
        // enemies along the way (a shield or a reflect can bat the disc back)
        const block = G.discSweep(this, this.pos, end, 'out');
        if (block) { remain -= this.pos.distanceTo(block); this.pos.copy(block); continue; }
        this.pos.copy(end); remain -= travel;
        if (!hitWall) break;
        const n = new THREE.Vector3(nx, ny, nz);
        const vn = this.vel.dot(n); this.vel.addScaledVector(n, -2 * vn);
        if (n.y > 0.7) this.vel.y = Math.abs(this.vel.y) * 0.6; // skim off floors instead of rocketing up
        this.bounces++;
        G.onDiscBounce(this, new THREE.Vector3(hx, hy, hz), n);
        if (this.bounces > w.maxBounces) { this.recall(); break; }
      }
      // invisible glass above the outer walls and under the ceiling keeps it in the arena
      if (this.state === 'out') {
        const A = G.arena, lim = A.half - R;
        let nx = 0, ny = 0, nz = 0;
        if (this.pos.y > A.ceiling && this.vel.y > 0) { this.pos.y = A.ceiling; this.vel.y = -this.vel.y; ny = -1; }
        if (Math.abs(this.pos.x) > lim && this.vel.x * this.pos.x > 0) { nx = -Math.sign(this.pos.x); this.pos.x = Math.sign(this.pos.x) * lim; this.vel.x = -this.vel.x; }
        if (Math.abs(this.pos.z) > lim && this.vel.z * this.pos.z > 0) { nz = -Math.sign(this.pos.z); this.pos.z = Math.sign(this.pos.z) * lim; this.vel.z = -this.vel.z; }
        if (nx || ny || nz) {
          this.bounces++;
          G.onDiscBounce(this, this.pos.clone(), new THREE.Vector3(nx, ny, nz).normalize());
          if (this.bounces > w.maxBounces) this.recall();
        }
      }
      if (this.state === 'out' && this.t > w.outTime + this.bounces * 0.12) this.recall();
    }
    if (this.state === 'return') {
      const B = this.body;
      const target = v1.copy(B.eye).addScaledVector(B.vel, 0.04);
      const to = v2.subVectors(target, this.pos); const d = to.length();
      if (d < w.catchDist) { G.onDiscCatch(this); return; }
      const want = to.divideScalar(d).multiplyScalar(w.returnSpeed + B.speed);
      this.vel.lerp(want, Math.min(1, dt * w.returnTurn));
      const next = v2.copy(this.pos).addScaledVector(this.vel, dt);
      G.discSweep(this, this.pos, next, 'return');
      this.pos.copy(next); // phases through walls on the way home
      if (this.t > 4) G.onDiscCatch(this);
    }
  }

  // where would the player stand if they blinked now? (null if nowhere safe)
  blinkSpot(col) {
    // try the disc's own spot first, then step along its path both ways (right after a bounce the
    // free side is "forward"), then a little higher
    const dir = v1.copy(this.vel).normalize();
    for (let k = 0; k <= 8; k++) {
      for (const s of k ? [-1, 1] : [1]) {
        const back = s * k * 0.4;
        for (const up of [0, 0.6, 1.2]) {
          const x = this.pos.x - dir.x * back, z = this.pos.z - dir.z * back;
          const y = Math.max(0, this.pos.y - 0.9 - dir.y * back) + up;
          if (col.capsuleFree(x, y, z, 0.4, 1.8)) return new THREE.Vector3(x, y, z);
        }
      }
    }
    return null;
  }

  render(dt) {
    if (this.state === 'hand') return;
    this.holder.position.copy(this.pos);
    // lie roughly flat in the plane of travel and spin
    const d = v1.copy(this.vel).normalize();
    this.holder.rotation.set(-Math.PI / 2 + d.y * 0.6, 0, 0);
    this.spinner.rotation.z += dt * (this.w.id === 'heavy' ? 16 : 30);
  }
}
