// Enemies for the white arena: TURRET (shoots slow orbs), CHASER (rolls into you), SHIELD (blocks from the front)
import * as THREE from 'three';

const v1 = new THREE.Vector3(), v2 = new THREE.Vector3();
const _contacts = [];
const _hit = { t: 0, x: 0, y: 0, z: 0, nx: 0, ny: 0, nz: 0, flags: 0, tri: 0 };

export const FOE = {
  turret: { hp: 60, r: 0.75, h: 1.9, speed: 2.5, score: 100, name: '포탑' },
  chaser: { hp: 40, r: 0.6, h: 1.2, speed: 9, score: 80, name: '추적자' },
  shield: { hp: 90, r: 0.55, h: 2.0, speed: 4.5, score: 150, name: '방패병' },
};

const MAT = {};
function mats() {
  if (MAT.black) return MAT;
  MAT.black = new THREE.MeshStandardMaterial({ color: 0x16161a, roughness: 0.45, metalness: 0.2 });
  MAT.dark = new THREE.MeshStandardMaterial({ color: 0x2c2c33, roughness: 0.5, metalness: 0.2 });
  MAT.red = new THREE.MeshStandardMaterial({ color: 0xe8202f, roughness: 0.4, emissive: 0x500008 });
  // with bloom on (Foe.glow > 1) the eyes / charging parts glow
  MAT.red.emissiveIntensity = Foe.glow > 1 ? 4 : 1;
  MAT.hot = new THREE.MeshStandardMaterial({ color: 0xff3a3a, roughness: 0.3, emissive: 0xff2020, emissiveIntensity: Foe.glow > 1 ? 7 : 1.5 });
  MAT.white = new THREE.MeshStandardMaterial({ color: 0xf0f0f0, roughness: 0.6 });
  MAT.flash = new THREE.MeshBasicMaterial({ color: 0xffffff });
  return MAT;
}
const mesh = (g, m, x = 0, y = 0, z = 0) => { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.castShadow = true; return o; };

export class Foe {
  constructor(game, type, pos) {
    const M = mats();
    this.game = game; this.col = game.arena.col; this.scene = game.scene;
    this.type = type; this.cfg = FOE[type];
    this.hp = this.maxHp = Math.round(this.cfg.hp * game.D.enemyHp);
    this.pos = pos.clone(); this.vel = new THREE.Vector3(); this.yaw = Math.random() * 6;
    this.alive = true; this.grounded = false;
    this.center = new THREE.Vector3();
    this.t = Math.random() * 10; this.cd = 1.5 + Math.random() * 1.5; this.windup = 0; this.stun = 0; this.flashT = 0;
    this.spawnT = 0.5;
    const g = this.group = new THREE.Group();
    if (type === 'turret') {
      g.add(mesh(new THREE.CylinderGeometry(0.35, 0.55, 0.7, 12), M.dark, 0, 0.35, 0));
      this.head = new THREE.Group(); this.head.position.y = 1.25; g.add(this.head);
      this.head.add(mesh(new THREE.BoxGeometry(1.1, 1.0, 1.1), M.black));
      this.eye = mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.12, 16), M.red, 0, 0, 0.58); this.eye.rotation.x = Math.PI / 2; this.head.add(this.eye);
      this.barrel = mesh(new THREE.BoxGeometry(0.16, 0.16, 0.5), M.dark, 0, -0.3, 0.6); this.head.add(this.barrel);
    } else if (type === 'chaser') {
      this.body = mesh(new THREE.IcosahedronGeometry(0.6, 0), M.black); this.body.position.y = 0.6; g.add(this.body);
      this.core = mesh(new THREE.SphereGeometry(0.28, 12, 8), M.red); this.body.add(this.core);
      for (let i = 0; i < 8; i++) {
        const sp = mesh(new THREE.ConeGeometry(0.12, 0.45, 6), M.dark);
        const d = new THREE.Vector3(Math.cos(i * 2.4), Math.sin(i * 1.7) * 0.8, Math.sin(i * 2.4)).normalize();
        sp.position.copy(d.clone().multiplyScalar(0.62)); sp.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d); this.body.add(sp);
      }
    } else {
      g.add(mesh(new THREE.CapsuleGeometry(0.45, 1.0, 4, 10), M.black, 0, 0.95, 0));
      g.add(mesh(new THREE.SphereGeometry(0.3, 12, 8), M.dark, 0, 1.85, 0));
      this.eye = mesh(new THREE.BoxGeometry(0.3, 0.07, 0.05), M.red, 0, 1.88, 0.27); g.add(this.eye);
      this.shield = new THREE.Group(); this.shield.position.set(0, 1.0, 0.75); g.add(this.shield);
      this.shield.add(mesh(new THREE.BoxGeometry(1.5, 1.8, 0.14), M.white));
      this.shield.add(mesh(new THREE.BoxGeometry(1.52, 0.1, 0.16), M.red, 0, 0.6, 0));
      this.shield.add(mesh(new THREE.BoxGeometry(1.52, 0.1, 0.16), M.red, 0, -0.6, 0));
    }
    // hp bar
    const bar = this.bar = new THREE.Group();
    const bg = new THREE.Mesh(new THREE.PlaneGeometry(1, 0.1), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.35, depthTest: false }));
    this.fill = new THREE.Mesh(new THREE.PlaneGeometry(1, 0.1), new THREE.MeshBasicMaterial({ color: 0xe8202f, depthTest: false }));
    bg.renderOrder = 10; this.fill.renderOrder = 11; bar.add(bg, this.fill); bar.visible = false;
    this.scene.add(bar);
    g.scale.setScalar(0.01);
    g.position.copy(this.pos);
    this.scene.add(g);
    this.updateCenter();
  }

  updateCenter() {
    if (this.type === 'chaser') this.center.set(this.pos.x, this.pos.y + 0.6, this.pos.z);
    else if (this.type === 'turret') this.center.set(this.pos.x, this.pos.y + 1.2, this.pos.z);
    else this.center.set(this.pos.x, this.pos.y + 1.1, this.pos.z);
  }
  get hitRadius() { return this.type === 'chaser' ? 0.9 : this.type === 'turret' ? 0.95 : 0.85; }
  facing(out) { return out.set(Math.sin(this.yaw), 0, Math.cos(this.yaw)); }

  // does an attack coming *from* direction `dir` (travel direction) hit the shield?
  shieldBlocks(dir) {
    if (this.type !== 'shield' || this.stun > 0) return false;
    const f = this.facing(v1);
    return (dir.x * f.x + dir.z * f.z) < -0.35;
  }

  damage(n, from) {
    if (!this.alive) return false;
    this.hp -= n; this.flashT = 0.1; this.bar.visible = true;
    if (from) { v1.subVectors(this.pos, from).setY(0).normalize(); this.vel.addScaledVector(v1, Math.min(10, n * 0.12)); }
    if (this.hp <= 0) { this.alive = false; return true; }
    return false;
  }

  update(dt, ctx) {
    const P = ctx.player;
    this.t += dt; this.cd -= dt; this.flashT -= dt; this.stun = Math.max(0, this.stun - dt); this.spawnT -= dt;
    const to = v2.subVectors(P.pos, this.pos); const dy = to.y; to.y = 0; const dist = to.length(); to.divideScalar(dist || 1);
    const want = Math.atan2(to.x, to.z);
    let dyaw = want - this.yaw; while (dyaw > Math.PI) dyaw -= Math.PI * 2; while (dyaw < -Math.PI) dyaw += Math.PI * 2;
    const turn = this.type === 'shield' ? 1.6 : this.type === 'turret' ? 3 : 8;
    if (this.stun <= 0 && this.spawnT <= 0) this.yaw += Math.sign(dyaw) * Math.min(Math.abs(dyaw), turn * dt);
    let wx = 0, wz = 0, sp = this.cfg.speed;
    const busy = this.stun > 0 || this.spawnT > 0;

    if (this.type === 'turret' && !busy) {
      if (this.windup > 0) {
        this.windup -= dt;
        if (this.windup <= 0) { ctx.fireOrb(this); this.cd = 2.0 + Math.random() * 1.2; }
      } else if (this.cd <= 0 && dist < 70 && ctx.canAttack(this) && ctx.los(this.center, P.eye)) { this.windup = 0.7 * ctx.windMul; }
      // drift sideways slowly so turrets aren't sitting ducks
      const side = Math.sin(this.t * 0.6) > 0 ? 1 : -1;
      wx = to.z * side * 0.6; wz = -to.x * side * 0.6;
      if (dist < 8) { wx -= to.x; wz -= to.z; }
    } else if (this.type === 'chaser' && !busy) {
      wx = to.x; wz = to.z; sp = this.cfg.speed * ctx.speedMul;
      if (dist < 1.25 + 0.4 && Math.abs(dy) < 1.6) ctx.contact(this);
      if (dy > 1.5 && dist < 6 && this.grounded && Math.random() < dt * 2) this.vel.y = 11;
    } else if (this.type === 'shield' && !busy) {
      if (this.windup > 0) {
        this.windup -= dt; sp = 1;
        if (this.windup <= 0) { ctx.shove(this); this.cd = 1.6; }
      } else {
        wx = to.x; wz = to.z;
        if (dist < 2.6 && this.cd <= 0 && ctx.canAttack(this)) this.windup = 0.6 * ctx.windMul;
      }
    }

    // locomotion
    const wl = Math.hypot(wx, wz); if (wl > 0) { wx /= wl; wz /= wl; }
    const acc = this.grounded ? 9 : 1.5;
    const hv = Math.hypot(this.vel.x, this.vel.z);
    if (hv > sp + 2 && this.grounded) { const k = Math.exp(-5 * dt); this.vel.x *= k; this.vel.z *= k; }
    else { this.vel.x += (wx * sp - this.vel.x) * Math.min(1, acc * dt); this.vel.z += (wz * sp - this.vel.z) * Math.min(1, acc * dt); }
    this.vel.y -= 30 * dt;
    for (const o of ctx.foes) {
      if (o === this || !o.alive) continue;
      const dx = this.pos.x - o.pos.x, dz = this.pos.z - o.pos.z, d2 = dx * dx + dz * dz, rr = (this.cfg.r + o.cfg.r) ** 2;
      if (d2 < rr && d2 > 1e-4) { const d = Math.sqrt(d2); this.vel.x += dx / d * 25 * dt; this.vel.z += dz / d * 25 * dt; }
    }
    this.pos.addScaledVector(this.vel, dt);
    this.grounded = false;
    if (this.col.collideCapsule(this.pos, this.cfg.r, this.cfg.h, _contacts)) {
      for (const c of _contacts) {
        if (c.y > 0.65) this.grounded = true;
        const vn = this.vel.x * c.x + this.vel.y * c.y + this.vel.z * c.z;
        if (vn < 0) { this.vel.x -= c.x * vn; this.vel.y -= c.y * vn; this.vel.z -= c.z * vn; }
      }
    }
    // hop low obstacles
    if (wl > 0 && this.grounded && this.type !== 'turret') {
      const h = this.col.raycast(this.pos.x, this.pos.y + 0.4, this.pos.z, wx, 0, wz, this.cfg.r + 0.6, _hit);
      if (h && Math.abs(h.ny) < 0.5) this.vel.y = 9;
    }
    const lim = this.game.arena.half - 1;
    this.pos.x = THREE.MathUtils.clamp(this.pos.x, -lim, lim); this.pos.z = THREE.MathUtils.clamp(this.pos.z, -lim, lim);
    this.updateCenter();
    this.animate(dt, ctx, hv);
  }

  animate(dt, ctx, hv) {
    const M = MAT, g = this.group;
    const s = Math.min(1, g.scale.x + dt * 4);
    g.scale.setScalar(s);
    g.position.copy(this.pos);
    if (this.type === 'chaser') {
      // roll in the direction of travel
      const ax = new THREE.Vector3(this.vel.z, 0, -this.vel.x);
      const l = ax.length(); if (l > 0.01) this.body.rotateOnWorldAxis(ax.divideScalar(l), hv * dt / 0.6);
      this.core.material = this.flashT > 0 ? M.flash : M.red;
      this.body.position.y = 0.6 + (this.stun > 0 ? Math.abs(Math.sin(this.t * 20)) * 0.1 : 0);
    } else {
      g.rotation.y = this.type === 'turret' ? 0 : this.yaw;
      if (this.type === 'turret') {
        this.head.rotation.y = this.yaw;
        const charging = this.windup > 0;
        this.eye.material = this.flashT > 0 ? M.flash : charging ? (Math.sin(this.t * 40) > 0 ? M.hot : M.red) : M.red;
        this.eye.scale.setScalar(charging ? 1 + (0.7 * ctx.windMul - this.windup) * 0.8 : 1);
      } else {
        this.eye.material = this.flashT > 0 ? M.flash : M.red;
        this.shield.position.z = this.windup > 0 ? 0.75 - Math.max(0, this.windup) * 0.6 : 0.75;
        this.shield.rotation.x = this.windup > 0 ? -0.3 : 0;
        this.shield.visible = true;
        g.rotation.z = this.stun > 0 ? Math.sin(this.t * 18) * 0.15 : 0;
      }
    }
    // hp bar
    this.bar.position.set(this.pos.x, this.pos.y + this.cfg.h + 0.45, this.pos.z);
    this.bar.quaternion.copy(ctx.camera.quaternion);
    this.fill.scale.x = Math.max(0.001, this.hp / this.maxHp); this.fill.position.x = -(1 - this.fill.scale.x) / 2;
  }

  // fly apart into pieces
  shatter(dir) {
    const pieces = [];
    this.group.updateMatrixWorld(true);
    this.group.traverse(o => {
      if (!o.isMesh) return;
      const wp = new THREE.Vector3(), wq = new THREE.Quaternion(), ws = new THREE.Vector3();
      o.matrixWorld.decompose(wp, wq, ws);
      const m = new THREE.Mesh(o.geometry, o.material); m.position.copy(wp); m.quaternion.copy(wq); m.scale.copy(ws); m.castShadow = true;
      this.scene.add(m);
      const v = new THREE.Vector3((Math.random() - 0.5) * 8, 3 + Math.random() * 6, (Math.random() - 0.5) * 8);
      if (dir) v.addScaledVector(dir, 10);
      pieces.push({ m, v, av: new THREE.Vector3(Math.random() * 14 - 7, Math.random() * 14 - 7, Math.random() * 14 - 7), life: 2 + Math.random() });
    });
    this.dispose();
    return pieces;
  }
  dispose() { this.scene.remove(this.group); this.scene.remove(this.bar); }
}
