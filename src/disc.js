// THE DISC — our one weapon. Throw it, bank it off walls, pull it back, or blink to wherever it is.
import * as THREE from 'three';
import { Ribbon } from './fx.js';

export const DISC = {
  speed: 46,          // base throw speed (m/s); your own forward speed is added on top
  carry: 0.7,         // how much of your velocity the throw inherits
  maxBounces: 3,
  outTime: 0.95,      // seconds before it heads home on its own
  returnSpeed: 58,
  catchDist: 1.7,
  radius: 0.35,
  dmg: 40,            // + 35% per bounce, more when thrown fast
  returnDmg: 30,
  blinkSlam: 45, blinkRadius: 3.8,
};

const v1 = new THREE.Vector3(), v2 = new THREE.Vector3();
const _hit = { t: 0, x: 0, y: 0, z: 0, nx: 0, ny: 0, nz: 0, flags: 0, tri: 0 };

export class Disc {
  constructor(game, owner = null, color = 0xff5a1f) {
    this.game = game; this.owner = owner; this.color = color;
    this.state = 'hand';          // hand | out | return
    this.pos = new THREE.Vector3(); this.vel = new THREE.Vector3();
    this.t = 0; this.bounces = 0; this.hit = new Set(); this.blinked = false; this.catchCd = 0; this.kills = 0;
    this.id = Disc.nextId = (Disc.nextId || 0) + 1; this.leg = 0;
    // world model
    const g = this.mesh = new THREE.Group();
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.06, 10, 40), new THREE.MeshStandardMaterial({ color, roughness: 0.35, emissive: new THREE.Color(color).multiplyScalar(0.25) }));
    const face = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.05, 32), new THREE.MeshStandardMaterial({ color: 0x1a1a1e, roughness: 0.4 }));
    face.rotation.x = Math.PI / 2;
    const dot = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.07, 16), new THREE.MeshStandardMaterial({ color }));
    dot.rotation.x = Math.PI / 2;
    for (let i = 0; i < 3; i++) {
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.16, 0.04), new THREE.MeshStandardMaterial({ color: 0xffffff }));
      const a = i / 3 * Math.PI * 2; blade.position.set(Math.cos(a) * 0.42, Math.sin(a) * 0.42, 0); blade.rotation.z = a; g.add(blade);
    }
    g.add(rim, face, dot); rim.castShadow = face.castShadow = true;
    this.spinner = g;
    this.holder = new THREE.Group(); this.holder.add(g); this.holder.visible = false;
    game.scene.add(this.holder);
    this.trail = new Ribbon(game.scene, 22, color, 0.25);
  }
  get body() { return this.owner ? this.owner.body : this.game.player; }
  dispose() { this.game.scene.remove(this.holder); this.game.scene.remove(this.trail.mesh); }

  get out() { return this.state !== 'hand'; }

  throw(origin, dir, playerVel) {
    if (this.state !== 'hand' || this.catchCd > 0) return false;
    this.state = 'out'; this.t = 0; this.bounces = 0; this.hit.clear(); this.blinked = false; this.kills = 0; this.leg++;
    const carry = Math.max(0, playerVel.dot(dir)) * DISC.carry;
    this.pos.copy(origin); this.vel.copy(dir).multiplyScalar(DISC.speed + carry);
    this.holder.visible = true; this.trail.reset(); this.trail.width = 0.25;
    return true;
  }

  recall() {
    if (this.state !== 'out') return false;
    this.state = 'return'; this.hit.clear(); this.leg++;
    return true;
  }

  caught() {
    this.state = 'hand'; this.holder.visible = false; this.catchCd = 0.12;
  }

  speedMul() { return THREE.MathUtils.clamp(this.vel.length() / DISC.speed, 1, 2); }

  tick(dt) {
    this.catchCd -= dt;
    if (this.state === 'hand') return;
    const G = this.game, col = G.arena.col;
    this.t += dt;
    if (this.state === 'out') {
      let remain = this.vel.length() * dt;
      for (let guard = 0; guard < 5 && remain > 1e-4; guard++) {
        const sp = this.vel.length(); v1.copy(this.vel).divideScalar(sp);
        const h = col.raycast(this.pos.x, this.pos.y, this.pos.z, v1.x, v1.y, v1.z, remain + DISC.radius, _hit);
        const hitWall = !!h && (h.t - DISC.radius) < remain;
        const hx = h ? h.x : 0, hy = h ? h.y : 0, hz = h ? h.z : 0, nx = h ? h.nx : 0, ny = h ? h.ny : 0, nz = h ? h.nz : 0;
        const travel = hitWall ? Math.max(0, h.t - DISC.radius) : remain;
        const end = v2.copy(this.pos).addScaledVector(v1, travel);
        // enemies along the way (a shield can bat the disc back)
        const block = G.discSweep(this, this.pos, end, 'out');
        if (block) { remain -= this.pos.distanceTo(block); this.pos.copy(block); continue; }
        this.pos.copy(end); remain -= travel;
        if (!hitWall) break;
        const n = new THREE.Vector3(nx, ny, nz);
        const vn = this.vel.dot(n); this.vel.addScaledVector(n, -2 * vn);
        if (n.y > 0.7) this.vel.y = Math.abs(this.vel.y) * 0.6; // skim off floors instead of rocketing up
        this.bounces++;
        G.onDiscBounce(this, new THREE.Vector3(hx, hy, hz), n);
        if (this.bounces > DISC.maxBounces) { this.recall(); break; }
      }
      // invisible glass above the outer walls and under the ceiling keeps it in the arena
      if (this.state === 'out') {
        const A = G.arena, lim = A.half - DISC.radius;
        let nx = 0, ny = 0, nz = 0;
        if (this.pos.y > A.ceiling && this.vel.y > 0) { this.pos.y = A.ceiling; this.vel.y = -this.vel.y; ny = -1; }
        if (Math.abs(this.pos.x) > lim && this.vel.x * this.pos.x > 0) { nx = -Math.sign(this.pos.x); this.pos.x = Math.sign(this.pos.x) * lim; this.vel.x = -this.vel.x; }
        if (Math.abs(this.pos.z) > lim && this.vel.z * this.pos.z > 0) { nz = -Math.sign(this.pos.z); this.pos.z = Math.sign(this.pos.z) * lim; this.vel.z = -this.vel.z; }
        if (nx || ny || nz) {
          this.bounces++;
          G.onDiscBounce(this, this.pos.clone(), new THREE.Vector3(nx, ny, nz).normalize());
          if (this.bounces > DISC.maxBounces) this.recall();
        }
      }
      if (this.state === 'out' && this.t > DISC.outTime + this.bounces * 0.12) this.recall();
    }
    if (this.state === 'return') {
      const B = this.body;
      const target = v1.copy(B.eye).addScaledVector(B.vel, 0.04);
      const to = v2.subVectors(target, this.pos); const d = to.length();
      if (d < DISC.catchDist) { G.onDiscCatch(this); return; }
      const want = to.divideScalar(d).multiplyScalar(DISC.returnSpeed + B.speed);
      this.vel.lerp(want, Math.min(1, dt * 9));
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
    this.spinner.rotation.z += dt * 30;
  }
}
