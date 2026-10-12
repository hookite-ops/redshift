import * as THREE from 'three';

const _v = new THREE.Vector3(), _v2 = new THREE.Vector3();

const MATS = {};
function mats() {
  if (MATS.body) return MATS;
  MATS.body = new THREE.MeshStandardMaterial({ color: 0x1a1b22, roughness: 0.35, metalness: 0.85 });
  MATS.armor = new THREE.MeshStandardMaterial({ color: 0x3a3c48, roughness: 0.3, metalness: 0.9 });
  MATS.red = new THREE.MeshStandardMaterial({ color: 0x300008, emissive: 0xff1030, emissiveIntensity: 2.4 });
  MATS.cyan = new THREE.MeshStandardMaterial({ color: 0x002030, emissive: 0x20d0ff, emissiveIntensity: 2.4 });
  MATS.gold = new THREE.MeshStandardMaterial({ color: 0x2a1a00, emissive: 0xffaa20, emissiveIntensity: 2.4 });
  MATS.blade = new THREE.MeshStandardMaterial({ color: 0xdddde8, roughness: 0.15, metalness: 1.0 });
  MATS.gun = new THREE.MeshStandardMaterial({ color: 0x15161b, roughness: 0.4, metalness: 0.8 });
  return MATS;
}

const TYPES = {
  gunner: { hp: 90, speed: 7.5, accent: 'red', range: [14, 30], color: 0xff1030 },
  blade: { hp: 110, speed: 12, accent: 'cyan', range: [0, 2.6], color: 0x20d0ff },
  elite: { hp: 260, speed: 10.5, accent: 'gold', range: [0, 3.0], color: 0xffaa20 },
};

function box(w, h, d, m) { const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); mesh.castShadow = true; return mesh; }

export class Enemy {
  constructor(scene, world, type, pos) {
    const M = mats(), T = TYPES[type];
    this.scene = scene; this.world = world; this.type = type; this.cfg = T;
    this.hp = this.maxHp = T.hp;
    this.alive = true;
    this.pos = pos.clone(); this.vel = new THREE.Vector3();
    this.yaw = 0; this.onGround = false;
    this.state = 'chase'; this.stateT = 0;
    this.attackCd = 1 + Math.random() * 1.5;
    this.strafeDir = Math.random() < 0.5 ? -1 : 1; this.strafeT = 0;
    this.stagger = 0; this.flash = 0;
    this.dashCd = 2 + Math.random() * 2;
    this.chest = new THREE.Vector3();
    this.head = new THREE.Vector3();
    this.windup = 0; this.burstLeft = 0; this.burstT = 0;
    this.animT = Math.random() * 10;

    const accent = M[T.accent];
    const g = this.group = new THREE.Group();
    const scale = type === 'elite' ? 1.18 : 1;
    // legs
    this.legL = new THREE.Group(); this.legR = new THREE.Group();
    [this.legL, this.legR].forEach((leg, i) => {
      const thigh = box(0.22, 0.5, 0.24, M.body); thigh.position.y = -0.25; leg.add(thigh);
      const shin = box(0.2, 0.5, 0.22, M.armor); shin.position.y = -0.72; leg.add(shin);
      const strip = box(0.04, 0.35, 0.05, accent); strip.position.set(0, -0.7, 0.12); leg.add(strip);
      leg.position.set(i ? 0.15 : -0.15, 0.95, 0); g.add(leg);
    });
    // torso
    this.torso = new THREE.Group(); this.torso.position.y = 0.95; g.add(this.torso);
    const pelvis = box(0.42, 0.18, 0.26, M.body); pelvis.position.y = 0.05; this.torso.add(pelvis);
    const chest = box(0.52, 0.5, 0.3, M.armor); chest.position.y = 0.42; this.torso.add(chest);
    const core = box(0.14, 0.14, 0.04, accent); core.position.set(0, 0.45, 0.16); this.torso.add(core);
    const spine = box(0.06, 0.45, 0.04, accent); spine.position.set(0, 0.42, -0.16); this.torso.add(spine);
    // shoulders
    [-1, 1].forEach(s => { const sh = box(0.2, 0.14, 0.32, M.armor); sh.position.set(s * 0.34, 0.66, 0); this.torso.add(sh); });
    // head
    this.headG = new THREE.Group(); this.headG.position.y = 0.8; this.torso.add(this.headG);
    const helm = box(0.28, 0.3, 0.3, M.body); helm.position.y = 0.12; this.headG.add(helm);
    const visor = box(0.3, 0.07, 0.06, accent); visor.position.set(0, 0.14, 0.15); this.headG.add(visor);
    if (type !== 'gunner') { const crest = box(0.04, 0.12, 0.28, accent); crest.position.set(0, 0.32, 0); this.headG.add(crest); }
    // arms
    this.armL = new THREE.Group(); this.armR = new THREE.Group();
    [this.armL, this.armR].forEach((arm, i) => {
      const up = box(0.15, 0.36, 0.16, M.body); up.position.y = -0.18; arm.add(up);
      const fore = box(0.14, 0.34, 0.15, M.armor); fore.position.y = -0.52; arm.add(fore);
      arm.position.set(i ? 0.36 : -0.36, 0.62, 0); this.torso.add(arm);
    });
    // weapon
    if (type === 'gunner') {
      const gun = new THREE.Group();
      const body = box(0.1, 0.14, 0.7, M.gun); gun.add(body);
      const barrel = box(0.05, 0.05, 0.35, M.armor); barrel.position.z = 0.5; gun.add(barrel);
      const glow = box(0.03, 0.03, 0.5, accent); glow.position.set(0.06, 0.03, 0.05); gun.add(glow);
      this.muzzle = new THREE.Object3D(); this.muzzle.position.z = 0.7; gun.add(this.muzzle);
      gun.position.set(0, -0.62, 0.25);
      this.armR.add(gun); this.weapon = gun;
      this.weaponGlow = glow;
    } else {
      const sword = new THREE.Group();
      const hilt = box(0.05, 0.05, 0.3, M.gun); sword.add(hilt);
      const guard = box(0.14, 0.04, 0.04, accent); guard.position.z = 0.16; sword.add(guard);
      const blade = box(0.02, 0.07, type === 'elite' ? 1.35 : 1.1, M.blade); blade.position.z = 0.16 + (type === 'elite' ? 0.68 : 0.55); sword.add(blade);
      const edge = box(0.025, 0.012, type === 'elite' ? 1.35 : 1.1, accent); edge.position.set(0, -0.04, blade.position.z); sword.add(edge);
      sword.position.set(0, -0.65, 0.05);
      this.armR.add(sword); this.weapon = sword; this.weaponGlow = edge;
    }
    g.scale.setScalar(scale);
    this.scale = scale;
    g.position.copy(this.pos);
    scene.add(g);

    // health bar
    const hb = new THREE.Group();
    const bg = new THREE.Mesh(new THREE.PlaneGeometry(1, 0.08), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.6, depthTest: false }));
    this.hbFill = new THREE.Mesh(new THREE.PlaneGeometry(1, 0.08), new THREE.MeshBasicMaterial({ color: T.color, depthTest: false }));
    this.hbFill.position.z = 0.001;
    hb.add(bg, this.hbFill); hb.position.y = 2.25 * scale; hb.renderOrder = 10; bg.renderOrder = 10; this.hbFill.renderOrder = 11;
    hb.visible = false;
    this.hb = hb; g.add(hb);

    this.updateAnchors();
  }

  updateAnchors() {
    const s = this.scale;
    this.chest.set(this.pos.x, this.pos.y + 1.4 * s, this.pos.z);
    this.head.set(this.pos.x, this.pos.y + 1.9 * s, this.pos.z);
  }

  // Hit test against a ray: returns {t, head}
  rayHit(o, d, maxT) {
    const s = this.scale;
    // head sphere
    let best = null;
    const hr = 0.26 * s;
    const th = raySphere(o, d, this.head, hr);
    if (th !== null && th < maxT) best = { t: th, head: true };
    // body: capsule approx by two spheres + cylinder sample
    for (const [y, r] of [[1.35, 0.38], [0.95, 0.3], [0.5, 0.26], [0.2, 0.24]]) {
      _v.set(this.pos.x, this.pos.y + y * s, this.pos.z);
      const tb = raySphere(o, d, _v, r * s);
      if (tb !== null && tb < maxT && (!best || tb < best.t)) best = { t: tb, head: false };
    }
    return best;
  }

  damage(n, from) {
    if (!this.alive) return false;
    this.hp -= n; this.flash = 0.12;
    this.hb.visible = true;
    if (from) { _v.subVectors(this.pos, from).setY(0).normalize(); this.vel.addScaledVector(_v, Math.min(8, n * 0.08)); }
    if (this.hp <= 0) { this.alive = false; return true; }
    return false;
  }

  update(dt, ctx) {
    const p = ctx.player;
    this.animT += dt;
    this.flash = Math.max(0, this.flash - dt);
    this.stagger = Math.max(0, this.stagger - dt);
    this.attackCd -= dt; this.dashCd -= dt; this.strafeT -= dt;

    const toP = _v.subVectors(p.pos, this.pos); toP.y = 0;
    const dist = toP.length();
    const dir = toP.clone().normalize();
    const targetYaw = Math.atan2(dir.x, dir.z);
    let dy = targetYaw - this.yaw; while (dy > Math.PI) dy -= Math.PI * 2; while (dy < -Math.PI) dy += Math.PI * 2;
    this.yaw += dy * Math.min(1, dt * (this.windup > 0 ? 4 : 10));

    let wishX = 0, wishZ = 0, sp = this.cfg.speed;
    const lineOfSight = ctx.los(this.chest, p.eye);

    if (this.stagger > 0) {
      sp = 0;
    } else if (this.type === 'gunner') {
      const [near, far] = this.cfg.range;
      if (this.strafeT <= 0) { this.strafeDir *= -1; this.strafeT = 1 + Math.random() * 2; }
      const side = new THREE.Vector3(dir.z, 0, -dir.x).multiplyScalar(this.strafeDir);
      let fwd = dist > far || !lineOfSight ? 1 : dist < near ? -1 : 0;
      wishX = dir.x * fwd + side.x * 0.8; wishZ = dir.z * fwd + side.z * 0.8;
      // shooting: telegraphed bursts
      if (this.windup > 0) {
        this.windup -= dt; sp *= 0.3;
        if (this.windup <= 0) { this.burstLeft = this.type === 'gunner' ? 3 : 1; this.burstT = 0; }
      } else if (this.burstLeft > 0) {
        this.burstT -= dt; sp *= 0.3;
        if (this.burstT <= 0) { this.burstLeft--; this.burstT = 0.13; ctx.enemyShoot(this); }
        if (this.burstLeft === 0) this.attackCd = 1.4 + Math.random() * 1.6;
      } else if (this.attackCd <= 0 && lineOfSight && dist < 55) {
        this.windup = 0.55;
      }
    } else {
      // melee rusher
      if (this.windup > 0) {
        this.windup -= dt; sp *= 0.25;
        wishX = dir.x; wishZ = dir.z;
        if (this.windup <= 0) {
          ctx.enemyMelee(this);
          this.attackCd = this.type === 'elite' ? 0.9 : 1.3;
          this.recover = 0.35;
        }
      } else {
        if (this.recover > 0) { this.recover -= dt; sp *= 0.4; }
        wishX = dir.x; wishZ = dir.z;
        // circle slightly when close
        if (dist < 6) { const side = new THREE.Vector3(dir.z, 0, -dir.x).multiplyScalar(this.strafeDir * 0.5); wishX += side.x; wishZ += side.z; }
        if (dist < this.cfg.range[1] + 0.8 && this.attackCd <= 0 && Math.abs(p.pos.y - this.pos.y) < 2.5) {
          this.windup = this.type === 'elite' ? 0.38 : 0.48;
          ctx.enemyTelegraph(this);
        }
        // gap-close dash
        if (dist > 7 && dist < 22 && this.dashCd <= 0 && this.onGround && lineOfSight) {
          this.vel.x = dir.x * 26; this.vel.z = dir.z * 26; this.vel.y = 4 + Math.max(0, (p.pos.y - this.pos.y)) * 0.9;
          this.dashCd = 2.5 + Math.random() * 2; ctx.enemyDash(this);
        }
        // jump to reach elevated player
        if (p.pos.y - this.pos.y > 2.5 && dist < 10 && this.onGround && Math.random() < dt * 2) { this.vel.y = 13; }
      }
    }

    // locomotion
    const wl = Math.hypot(wishX, wishZ);
    if (wl > 0) { wishX /= wl; wishZ /= wl; }
    const accel = this.onGround ? 12 : 2;
    const tx = wishX * sp, tz = wishZ * sp;
    const hv = Math.hypot(this.vel.x, this.vel.z);
    if (hv > sp + 1 && this.onGround) { this.vel.x *= Math.exp(-6 * dt); this.vel.z *= Math.exp(-6 * dt); }
    else { this.vel.x += (tx - this.vel.x) * Math.min(1, accel * dt); this.vel.z += (tz - this.vel.z) * Math.min(1, accel * dt); }
    this.vel.y -= 30 * dt;

    // separation from other enemies
    for (const o of ctx.enemies) {
      if (o === this || !o.alive) continue;
      const dx = this.pos.x - o.pos.x, dz = this.pos.z - o.pos.z, d2 = dx * dx + dz * dz;
      if (d2 < 1.4 && d2 > 0.0001) { const d = Math.sqrt(d2); this.vel.x += dx / d * 6 * dt * 10; this.vel.z += dz / d * 6 * dt * 10; }
    }

    this.move(dt);
    // jump pads work for bots too
    for (const jp of this.world.jumpPads) if (this.pos.y < 0.6 && Math.hypot(this.pos.x - jp.x, this.pos.z - jp.z) < jp.r) this.vel.y = 30;

    this.updateAnchors();
    this.animate(dt, hv, dist);
  }

  move(dt) {
    const r = 0.38 * this.scale, h = 1.95 * this.scale;
    this.onGround = false;
    let blocked = false;
    for (const comp of ['x', 'y', 'z']) {
      const delta = this.vel[comp] * dt;
      this.pos[comp] += delta;
      for (const c of this.world.colliders) {
        if (this.pos.x + r <= c.min.x || this.pos.x - r >= c.max.x || this.pos.y + h <= c.min.y || this.pos.y >= c.max.y || this.pos.z + r <= c.min.z || this.pos.z - r >= c.max.z) continue;
        if (comp === 'y') {
          if (delta < 0) { this.pos.y = c.max.y; this.onGround = true; } else this.pos.y = c.min.y - h;
          this.vel.y = 0;
        } else {
          const top = c.max.y - this.pos.y;
          if (top < 0.6) { this.pos.y = c.max.y + 0.01; continue; }
          this.pos[comp] = delta > 0 ? c.min[comp] - r - 0.001 : c.max[comp] + r + 0.001;
          this.vel[comp] = 0; blocked = true;
        }
        break;
      }
    }
    if (blocked && this.onGround) this.vel.y = 12; // hop over obstacles
    const lim = this.world.size / 2 - 3;
    this.pos.x = Math.max(-lim, Math.min(lim, this.pos.x));
    this.pos.z = Math.max(-lim, Math.min(lim, this.pos.z));
  }

  animate(dt, hv, dist) {
    const g = this.group;
    g.position.copy(this.pos);
    g.rotation.y = this.yaw;
    const run = Math.min(1, hv / 10);
    const ph = this.animT * (6 + hv * 0.6);
    this.legL.rotation.x = Math.sin(ph) * 0.9 * run;
    this.legR.rotation.x = -Math.sin(ph) * 0.9 * run;
    this.torso.rotation.x = run * 0.25;
    this.torso.position.y = 0.95 + Math.abs(Math.sin(ph)) * 0.06 * run;
    if (!this.onGround) { this.legL.rotation.x = -0.6; this.legR.rotation.x = 0.4; }

    if (this.type === 'gunner') {
      const aim = this.windup > 0 || this.burstLeft > 0;
      this.armR.rotation.x = aim ? -1.5 : -0.7 + Math.sin(ph) * 0.1;
      this.armL.rotation.x = aim ? -1.4 : -0.5;
      this.armL.rotation.z = aim ? -0.5 : 0;
      this.weaponGlow.material = this.windup > 0 && Math.sin(this.animT * 40) > 0 ? MATS.gold : MATS.red;
    } else {
      if (this.windup > 0) { // raised sword wind-up
        this.armR.rotation.set(-2.6, 0, -0.4);
        this.torso.rotation.y = 0.6;
        this.weaponGlow.material = Math.sin(this.animT * 50) > 0 ? MATS.gold : MATS[this.cfg.accent];
      } else if (this.recover > 0) {
        this.armR.rotation.set(-0.3, 0, 0.9);
        this.torso.rotation.y = -0.5;
        this.weaponGlow.material = MATS[this.cfg.accent];
      } else {
        this.armR.rotation.set(-0.9 + Math.sin(ph) * 0.3 * run, 0, 0.2);
        this.torso.rotation.y *= 0.8;
      }
      this.armL.rotation.x = -Math.sin(ph) * 0.8 * run;
    }
    if (this.stagger > 0) { this.torso.rotation.x = -0.5; this.headG.rotation.x = -0.4; } else this.headG.rotation.x = 0;

    // hit flash: scale pulse
    const f = this.flash > 0 ? 1.06 : 1;
    this.torso.scale.setScalar(f);

    // health bar faces camera (billboard via parent counter-rotation)
    this.hb.rotation.y = -this.yaw + (this.camYaw || 0);
    this.hbFill.scale.x = Math.max(0.001, this.hp / this.maxHp);
    this.hbFill.position.x = -(1 - this.hbFill.scale.x) / 2;
  }

  // Break into flying pieces
  shatter(scene, impulseDir, sliced) {
    const pieces = [];
    this.group.updateMatrixWorld(true);
    this.group.traverse(o => {
      if (o.isMesh && o.parent !== this.hb) {
        const wp = new THREE.Vector3(), wq = new THREE.Quaternion(), ws = new THREE.Vector3();
        o.matrixWorld.decompose(wp, wq, ws);
        const m = new THREE.Mesh(o.geometry, o.material);
        m.position.copy(wp); m.quaternion.copy(wq); m.scale.copy(ws); m.castShadow = true;
        scene.add(m);
        const v = new THREE.Vector3((Math.random() - 0.5) * 6, 4 + Math.random() * 6, (Math.random() - 0.5) * 6);
        if (impulseDir) v.addScaledVector(impulseDir, sliced ? 9 : 14);
        if (sliced && wp.y > this.pos.y + 1.2 * this.scale) v.y += 5;
        pieces.push({ m, v, av: new THREE.Vector3(Math.random() * 14 - 7, Math.random() * 14 - 7, Math.random() * 14 - 7), life: 2.5 + Math.random() });
      }
    });
    scene.remove(this.group);
    return pieces;
  }

  dispose() { this.scene.remove(this.group); }
}

export function raySphere(o, d, c, r) {
  const ox = o.x - c.x, oy = o.y - c.y, oz = o.z - c.z;
  const b = ox * d.x + oy * d.y + oz * d.z;
  const cc = ox * ox + oy * oy + oz * oz - r * r;
  const disc = b * b - cc;
  if (disc < 0) return null;
  const t = -b - Math.sqrt(disc);
  return t >= 0 ? t : null;
}

export const ENEMY_TYPES = TYPES;
