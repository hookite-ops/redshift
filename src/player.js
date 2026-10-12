import * as THREE from 'three';

const UP = new THREE.Vector3(0, 1, 0);
const tmp = new THREE.Vector3(), tmp2 = new THREE.Vector3();

export const TUNING = {
  gravity: 30,
  runSpeed: 11.5,
  groundAccel: 14,
  friction: 7.5,
  airCap: 1.5,
  airAccel: 110,
  airControl: 5,
  jumpVel: 10.5,
  doubleJumpVel: 10,
  dashSpeed: 22,
  dashCharges: 3,
  dashRecharge: 1.35,
  slideBoost: 6,
  slideFriction: 0.55,
  slideMinSpeed: 6.5,
  wallrunMinSpeed: 7,
  wallrunTime: 2.2,
  wallrunSpeed: 16,
  wallJumpOut: 10,
  wallJumpUp: 9.5,
  grappleRange: 70,
  grapplePull: 62,
  grappleCooldown: 2.6,
  standH: 1.8,
  slideH: 1.0,
  radius: 0.4,
};

export class Player {
  constructor(world, events) {
    this.world = world;
    this.ev = events;
    this.pos = new THREE.Vector3(0, 0, 30);
    this.vel = new THREE.Vector3();
    this.yaw = Math.PI; this.pitch = 0;
    this.h = TUNING.standH; this.eyeH = 1.65;
    this.onGround = false; this.groundTime = 0; this.airTime = 0;
    this.coyote = 0; this.jumpBuffer = 0;
    this.airJumps = 1;
    this.dashCharges = TUNING.dashCharges; this.dashTimer = 0; this.dashActive = 0;
    this.sliding = false; this.crouching = false; this.slideBoostCd = 0;
    this.wallrun = null; // {normal, time, dir}
    this.wallCooldown = 0; this.lastWallNormal = new THREE.Vector3();
    this.grapple = null; this.grappleCd = 0;
    this.tilt = 0; this.landDip = 0;
    this.stepAcc = 0;
    this.speed = 0;
    this.lastLandSpeed = 0;
    this.alive = true;
  }

  reset(p, yaw) {
    this.pos.copy(p); this.vel.set(0, 0, 0); this.yaw = yaw; this.pitch = 0;
    this.wallrun = null; this.grapple = null; this.sliding = false; this.crouching = false;
    this.dashCharges = TUNING.dashCharges; this.airJumps = 1; this.h = TUNING.standH;
    this.alive = true;
  }

  get eye() { return tmp2.set(this.pos.x, this.pos.y + this.eyeH, this.pos.z); }

  forward(out) { return out.set(-Math.sin(this.yaw) * Math.cos(this.pitch), Math.sin(this.pitch), -Math.cos(this.yaw) * Math.cos(this.pitch)); }
  flatForward(out) { return out.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw)); }
  flatRight(out) { return out.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw)); }

  wishDir(input, out) {
    const f = this.flatForward(new THREE.Vector3()), r = this.flatRight(new THREE.Vector3());
    out.set(0, 0, 0).addScaledVector(f, input.fwd).addScaledVector(r, input.right);
    if (out.lengthSq() > 0) out.normalize();
    return out;
  }

  accelerate(wish, wishSpeed, accel, dt) {
    const cur = this.vel.x * wish.x + this.vel.z * wish.z;
    const add = wishSpeed - cur;
    if (add <= 0) return;
    const a = Math.min(accel * dt * wishSpeed, add);
    this.vel.x += wish.x * a; this.vel.z += wish.z * a;
  }

  hSpeed() { return Math.hypot(this.vel.x, this.vel.z); }

  // ---------------- main update ----------------
  update(dt, input) {
    const T = TUNING;
    const wish = this.wishDir(input, new THREE.Vector3());
    const hasWish = wish.lengthSq() > 0;

    this.dashTimer += dt;
    if (this.dashCharges < T.dashCharges && this.dashTimer > T.dashRecharge) { this.dashCharges++; this.dashTimer = 0; }
    if (this.dashCharges >= T.dashCharges) this.dashTimer = 0;
    this.grappleCd = Math.max(0, this.grappleCd - dt);
    this.wallCooldown = Math.max(0, this.wallCooldown - dt);
    this.slideBoostCd = Math.max(0, this.slideBoostCd - dt);
    this.coyote -= dt; this.jumpBuffer -= dt;
    if (input.jumpPressed) this.jumpBuffer = 0.15;

    // ---- Dash ----
    if (input.dashPressed && this.dashCharges > 0) {
      this.dashCharges--; this.dashTimer = 0;
      const dir = hasWish ? wish.clone() : this.flatForward(new THREE.Vector3());
      const hs = this.hSpeed();
      const base = Math.max(hs, T.runSpeed);
      this.vel.x = dir.x * (base + T.dashSpeed * 0.55);
      this.vel.z = dir.z * (base + T.dashSpeed * 0.55);
      if (!this.onGround) this.vel.y = Math.max(this.vel.y, 1.5);
      this.dashActive = 0.16;
      this.wallrun = null;
      this.ev.dash(dir);
    }
    this.dashActive = Math.max(0, this.dashActive - dt);

    // ---- Grapple ----
    if (this.grapple) this.updateGrapple(dt, input);

    // ---- Crouch / slide ----
    const wantCrouch = input.crouch;
    if (wantCrouch && !this.crouching) {
      this.crouching = true;
      if (this.onGround && this.hSpeed() > T.slideMinSpeed) this.startSlide(wish);
    }
    if (!wantCrouch && this.crouching) {
      if (this.canStand()) { this.crouching = false; this.sliding = false; }
    }
    const targetH = this.crouching ? T.slideH : T.standH;
    if (targetH > this.h) this.h = Math.min(targetH, this.h + dt * 8); else this.h = targetH;
    this.eyeH += ((this.h - 0.15) - this.eyeH) * Math.min(1, dt * 14);

    // ---- Wallrun ----
    if (this.wallrun) this.updateWallrun(dt, input, wish);
    else if (!this.onGround && !this.grapple && this.wallCooldown <= 0 && !this.crouching) this.tryStartWallrun(wish);

    // ---- Jump ----
    if (this.jumpBuffer > 0) {
      if (this.wallrun) { this.wallJump(); this.jumpBuffer = 0; }
      else if (this.onGround || this.coyote > 0) {
        this.vel.y = T.jumpVel; this.onGround = false; this.coyote = 0; this.jumpBuffer = 0;
        if (this.sliding) { // slide-jump keeps momentum, a small boost
          const hs = this.hSpeed(); if (hs > 0) { const k = (hs + 1.5) / hs; this.vel.x *= k; this.vel.z *= k; }
        }
        this.sliding = false;
        this.ev.jump(false);
      } else if (input.jumpPressed && this.airJumps > 0 && !this.grapple) {
        this.airJumps--; this.jumpBuffer = 0;
        this.vel.y = T.doubleJumpVel;
        if (hasWish) { // redirect momentum toward input, keep magnitude
          const hs = Math.max(this.hSpeed(), T.runSpeed * 0.8);
          const cx = this.vel.x / (this.hSpeed() || 1), cz = this.vel.z / (this.hSpeed() || 1);
          const nx = cx * 0.35 + wish.x * 0.65, nz = cz * 0.35 + wish.z * 0.65; const nl = Math.hypot(nx, nz) || 1;
          this.vel.x = nx / nl * hs; this.vel.z = nz / nl * hs;
        }
        this.ev.jump(true);
      }
    }

    // ---- Horizontal movement ----
    if (this.wallrun) {
      // handled in updateWallrun
    } else if (this.onGround) {
      if (this.sliding) {
        this.applyFriction(T.slideFriction, dt);
        if (hasWish) this.accelerate(wish, 3, 6, dt); // light steering
        if (this.hSpeed() < 4.5) this.sliding = false;
      } else {
        const justLanded = this.groundTime < 0.12 && this.jumpBuffer > 0;
        if (!justLanded && this.dashActive <= 0) this.applyFriction(T.friction, dt);
        const sp = this.crouching ? T.runSpeed * 0.45 : T.runSpeed;
        if (hasWish) this.accelerate(wish, sp, T.groundAccel, dt);
      }
    } else if (!this.grapple || true) {
      if (hasWish) {
        this.accelerate(wish, T.airCap, T.airAccel, dt);            // strafe gain
        if (this.hSpeed() < T.runSpeed) this.accelerate(wish, T.runSpeed, T.airControl, dt);
        // CPM-style forward air steering (turn without losing speed)
        if (input.fwd > 0 && input.right === 0) {
          const hs = this.hSpeed();
          if (hs > 1) {
            const f = this.flatForward(tmp);
            const k = Math.min(1, dt * 2.2);
            const nx = this.vel.x / hs * (1 - k) + f.x * k, nz = this.vel.z / hs * (1 - k) + f.z * k;
            const nl = Math.hypot(nx, nz);
            this.vel.x = nx / nl * hs; this.vel.z = nz / nl * hs;
          }
        }
      }
    }

    // ---- Gravity ----
    if (!this.onGround) {
      let g = T.gravity;
      if (this.wallrun) g *= 0.0;
      if (this.dashActive > 0) g *= 0.15;
      if (this.crouching && this.vel.y < 0) g *= 1.6; // fast-fall
      this.vel.y -= g * dt;
    } else if (this.vel.y <= 0) {
      this.vel.y = -2; // keep in contact with the ground
    }

    // ---- Integrate with collisions (substeps) ----
    this.speed = this.vel.length();
    const steps = Math.max(1, Math.ceil(this.speed * dt / 0.3));
    const sdt = dt / steps;
    const wasGround = this.onGround;
    const preVy = this.vel.y;
    this.mantleOk = input.fwd > 0;
    this.onGround = false;
    for (let i = 0; i < steps; i++) this.move(sdt);

    // jump pads
    for (const p of this.world.jumpPads) {
      if (this.pos.y < 0.6 && Math.hypot(this.pos.x - p.x, this.pos.z - p.z) < p.r) {
        this.vel.y = 30; this.onGround = false; this.airJumps = 1;
        this.ev.jumpPad();
      }
    }

    if (this.onGround) {
      this.groundTime += dt;
      if (!wasGround) this.onLand(preVy, wish);
      this.airTime = 0; this.coyote = 0.12; this.airJumps = 1;
      if (this.wallrun) this.endWallrun();
    } else {
      this.groundTime = 0; this.airTime += dt;
    }

    // footsteps
    if (this.onGround && !this.sliding && this.hSpeed() > 2) {
      this.stepAcc += this.hSpeed() * dt;
      if (this.stepAcc > 3.2) { this.stepAcc = 0; this.ev.step(); }
    }

    // camera tilt (wallrun + strafe lean)
    let targetTilt = -input.right * 0.025;
    if (this.wallrun) {
      const r = this.flatRight(tmp);
      targetTilt = -(this.wallrun.normal.dot(r)) * 0.2;
    }
    if (this.sliding) targetTilt += 0.05;
    this.tilt += (targetTilt - this.tilt) * Math.min(1, dt * 8);
    this.landDip *= Math.pow(0.0001, dt);

    if (this.pos.y < -20) { this.pos.set(0, 5, 30); this.vel.set(0, 0, 0); }
    this.speed = this.vel.length();
  }

  applyFriction(f, dt) {
    const s = this.hSpeed();
    if (s < 0.01) { this.vel.x = this.vel.z = 0; return; }
    const control = Math.max(s, 3);
    const drop = control * f * dt;
    const ns = Math.max(0, s - drop) / s;
    this.vel.x *= ns; this.vel.z *= ns;
  }

  startSlide(wish) {
    this.sliding = true;
    if (this.slideBoostCd <= 0) {
      const hs = this.hSpeed();
      const k = (hs + TUNING.slideBoost) / hs;
      this.vel.x *= k; this.vel.z *= k;
      this.slideBoostCd = 1.2;
    }
    this.ev.slide();
  }

  onLand(vy, wish) {
    const impact = -vy;
    this.lastLandSpeed = impact;
    this.landDip = Math.min(0.35, impact * 0.012);
    // Slide-landing converts fall speed into forward speed
    if (this.crouching && impact > 6) {
      const hs = this.hSpeed();
      const dir = hs > 1 ? tmp.set(this.vel.x / hs, 0, this.vel.z / hs) : this.flatForward(tmp);
      const add = Math.min(impact * 0.4, 10);
      this.vel.x += dir.x * add; this.vel.z += dir.z * add;
      this.sliding = true;
      this.ev.slide();
    } else if (this.crouching && this.hSpeed() > TUNING.slideMinSpeed) {
      this.sliding = true; this.ev.slide();
    }
    this.ev.land(impact);
  }

  canStand() {
    const r = TUNING.radius;
    const mn = tmp.set(this.pos.x - r, this.pos.y + 0.1, this.pos.z - r);
    const mx = tmp2.set(this.pos.x + r, this.pos.y + TUNING.standH, this.pos.z + r);
    for (const c of this.world.colliders) {
      if (mx.x > c.min.x && mn.x < c.max.x && mx.y > c.min.y && mn.y < c.max.y && mx.z > c.min.z && mn.z < c.max.z) return false;
    }
    return true;
  }

  // Axis-separated AABB movement
  move(dt) {
    const r = TUNING.radius;
    const cols = this.world.colliders;
    for (let axis = 0; axis < 3; axis++) {
      const comp = axis === 0 ? 'x' : axis === 1 ? 'y' : 'z';
      const delta = this.vel[comp] * dt;
      if (delta === 0) continue;
      this.pos[comp] += delta;
      const mnx = this.pos.x - r, mxx = this.pos.x + r, mny = this.pos.y, mxy = this.pos.y + this.h, mnz = this.pos.z - r, mxz = this.pos.z + r;
      for (const c of cols) {
        if (mxx <= c.min.x || mnx >= c.max.x || mxy <= c.min.y || mny >= c.max.y || mxz <= c.min.z || mnz >= c.max.z) continue;
        if (axis === 1) {
          if (delta < 0) { this.pos.y = c.max.y; this.onGround = true; this.vel.y = 0; }
          else { this.pos.y = c.min.y - this.h; this.vel.y = Math.min(0, this.vel.y); }
        } else {
          // step-up / mantle
          const top = c.max.y - this.pos.y;
          if (top > 0 && top <= 0.6 && this.canOccupy(this.pos.x, c.max.y + 0.01, this.pos.z)) { this.pos.y = c.max.y + 0.01; continue; }
          if (top > 0 && top <= 1.5 && this.vel.y < 4 && !this.wallrun && this.mantleOk && this.canOccupy(this.pos.x, c.max.y + 0.01, this.pos.z)) {
            this.vel.y = Math.max(this.vel.y, 8.5); this.ev.mantle && this.ev.mantle();
          }
          if (delta > 0) this.pos[comp] = c.min[comp] - r - 0.0001; else this.pos[comp] = c.max[comp] + r + 0.0001;
          this.lastHitNormal = { axis: comp, sign: delta > 0 ? -1 : 1, collider: c };
          this.vel[comp] = 0;
        }
        break;
      }
    }
  }

  canOccupy(x, y, z) {
    const r = TUNING.radius;
    for (const c of this.world.colliders) {
      if (x + r > c.min.x && x - r < c.max.x && y + this.h > c.min.y && y < c.max.y && z + r > c.min.z && z - r < c.max.z) return false;
    }
    return true;
  }

  // Find a wall touching the player's side
  findWall() {
    const r = TUNING.radius + 0.25;
    const y0 = this.pos.y + 0.3, y1 = this.pos.y + this.h - 0.2;
    let best = null, bestD = 1e9;
    for (const c of this.world.colliders) {
      if (!c.wallrun || c.ground) continue;
      if (y1 < c.min.y || y0 > c.max.y - 0.3) continue;
      // check x faces
      const inZ = this.pos.z > c.min.z - 0.05 && this.pos.z < c.max.z + 0.05;
      const inX = this.pos.x > c.min.x - 0.05 && this.pos.x < c.max.x + 0.05;
      if (inZ) {
        const dl = this.pos.x - c.max.x; if (dl >= -0.05 && dl < r && dl < bestD) { bestD = dl; best = new THREE.Vector3(1, 0, 0); }
        const dr = c.min.x - this.pos.x; if (dr >= -0.05 && dr < r && dr < bestD) { bestD = dr; best = new THREE.Vector3(-1, 0, 0); }
      }
      if (inX) {
        const dl = this.pos.z - c.max.z; if (dl >= -0.05 && dl < r && dl < bestD) { bestD = dl; best = new THREE.Vector3(0, 0, 1); }
        const dr = c.min.z - this.pos.z; if (dr >= -0.05 && dr < r && dr < bestD) { bestD = dr; best = new THREE.Vector3(0, 0, -1); }
      }
    }
    return best;
  }

  tryStartWallrun(wish) {
    if (this.airTime < 0.08) return;
    const hs = this.hSpeed();
    if (hs < TUNING.wallrunMinSpeed) return;
    const n = this.findWall();
    if (!n) return;
    if (this.wallCooldown > 0 && n.equals(this.lastWallNormal)) return;
    // must be moving mostly along the wall, not straight into it
    const vx = this.vel.x / hs, vz = this.vel.z / hs;
    const into = -(vx * n.x + vz * n.z);
    if (into > 0.85) return;
    const along = new THREE.Vector3(-n.z, 0, n.x);
    if (along.x * vx + along.z * vz < 0) along.negate();
    this.wallrun = { normal: n, dir: along, time: 0, entry: Math.max(hs, TUNING.wallrunSpeed) };
    this.vel.y = Math.max(this.vel.y * 0.3, 1.5);
    this.airJumps = 1;
    if (this.dashCharges < TUNING.dashCharges) this.dashTimer += 0.5;
    this.ev.wallrunStart();
  }

  updateWallrun(dt, input, wish) {
    const w = this.wallrun;
    w.time += dt;
    const n = this.findWall();
    if (!n || !n.equals(w.normal) || w.time > TUNING.wallrunTime || this.onGround || input.crouch) { this.endWallrun(); return; }
    // follow look direction along wall
    const f = this.flatForward(tmp);
    if (f.dot(w.dir) < -0.2) w.dir.negate();
    const target = Math.max(w.entry, TUNING.wallrunSpeed) + (input.fwd > 0 ? 2 * w.time : 0);
    const cur = this.vel.x * w.dir.x + this.vel.z * w.dir.z;
    const sp = cur + (target - cur) * Math.min(1, dt * 3);
    this.vel.x = w.dir.x * sp - w.normal.x * 1.5;
    this.vel.z = w.dir.z * sp - w.normal.z * 1.5;
    // gentle arc: rise then fall
    this.vel.y += (1.2 - w.time * 3.2 - this.vel.y) * Math.min(1, dt * 3);
  }

  wallJump() {
    const w = this.wallrun, T = TUNING;
    const f = this.flatForward(tmp);
    const hs = this.hSpeed();
    // blend of along-wall momentum, away from wall, and look direction
    let dx = w.dir.x * 0.6 + w.normal.x * 0.7 + f.x * 0.5;
    let dz = w.dir.z * 0.6 + w.normal.z * 0.7 + f.z * 0.5;
    // never jump back into the wall
    const into = dx * w.normal.x + dz * w.normal.z;
    if (into < 0.35) { dx += w.normal.x * (0.35 - into); dz += w.normal.z * (0.35 - into); }
    const l = Math.hypot(dx, dz);
    const s = Math.max(hs, T.wallrunSpeed) + 1.5;
    this.vel.x = dx / l * s; this.vel.z = dz / l * s;
    this.vel.y = T.wallJumpUp;
    this.lastWallNormal.copy(w.normal);
    this.wallCooldown = 0.35;
    this.wallrun = null;
    this.airJumps = 1;
    this.ev.jump(false, true);
  }

  endWallrun() {
    if (!this.wallrun) return;
    this.lastWallNormal.copy(this.wallrun.normal);
    this.wallCooldown = 0.3;
    this.wallrun = null;
  }

  startGrapple(point, target) {
    if (this.grappleCd > 0) return false;
    this.grapple = { point: point.clone(), target, time: 0, len: point.distanceTo(this.eye) };
    this.wallrun = null; this.sliding = false;
    if (this.onGround) { this.vel.y = 6; this.onGround = false; }
    this.ev.grapple();
    return true;
  }

  updateGrapple(dt, input) {
    const g = this.grapple;
    g.time += dt;
    if (g.target) { if (!g.target.alive) { this.endGrapple(); return; } g.point.copy(g.target.chest); }
    const eye = this.eye.clone();
    const to = tmp.subVectors(g.point, eye);
    const dist = to.length();
    to.divideScalar(dist || 1);
    if (!input.grapple || dist < (g.target ? 2.8 : 2.2) || g.time > 2.6) { this.endGrapple(); return; }
    // pull
    const pull = TUNING.grapplePull * (g.target ? 1.3 : 1);
    this.vel.addScaledVector(to, pull * dt);
    // counter gravity a bit while pulling
    this.vel.y += TUNING.gravity * 0.45 * dt;
    // damp sideways drift slightly so it feels snappy
    const along = this.vel.dot(to);
    tmp2.copy(this.vel).addScaledVector(to, -along);
    this.vel.addScaledVector(tmp2, -Math.min(1, dt * 1.5));
    const maxS = 48;
    if (this.vel.length() > maxS) this.vel.setLength(maxS);
  }

  endGrapple() {
    if (!this.grapple) return;
    if (this.vel.y < 6) this.vel.y += 3;
    this.grapple = null;
    this.grappleCd = TUNING.grappleCooldown;
  }
}
