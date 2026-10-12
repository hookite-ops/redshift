// REDSHIFT movement controller — fixed-tick (120 Hz) capsule physics.
// Techniques: bhop/air-strafe, slide (+slope gain, slide-landing), slide-hop, dash, wallrun,
// wall-jump, wall-climb, mantle, grapple (hook projectile + swing), jump pads, boost strips.
import * as THREE from 'three';
import { SURF } from './physics.js';

export const T = {
  gravity: 30,
  runSpeed: 11.5,
  crouchSpeed: 5.0,
  groundAccel: 14,
  friction: 8,
  stopSpeed: 5,
  airAccel: 12,
  airCap: 1.0,
  airControl: 3.5,
  airSteer: 1.7,          // W-only mouse steering (rad/s, speed-preserving)
  jumpVel: 10.2,
  airJumpVel: 9.6,
  airJumps: 1,
  coyote: 0.11,
  jumpBuffer: 0.13,
  slideTarget: 16.5,
  slideBoostMin: 3.5,
  slideBoostMax: 9,
  slideBoostCd: 1.25,
  slideFriction: 0.42,
  slideMinSpeed: 4.5,
  slideSteer: 2.2,
  slideLandFactor: 0.38,
  dashCharges: 2,
  dashRecharge: 1.6,
  dashBurst: 27,
  dashTime: 0.13,
  dashGain: 5,
  wallrunMin: 6,
  wallrunTime: 1.75,
  wallrunSpeed: 14,
  wallJumpOut: 8.5,
  wallJumpUp: 9.5,
  climbTime: 0.45,
  climbVel: 7.5,
  grappleRange: 75,
  grappleHookSpeed: 200,
  grapplePull: 40,
  grappleYank: 7,
  grappleCharges: 2,
  grappleRecharge: 2.4,
  maxSpeed: 80,
  standH: 1.8, crouchH: 1.05, radius: 0.4,
};

// "Easy" (default) assist layer — keeps the speed fantasy, removes the execution barrier
export const EASY = {
  coyote: 0.16, jumpBuffer: 0.2,
  momentumDecay: 2.6,       // m/s² lost while running above run speed (instead of friction)
  groundTurn: 7,            // rad/s steering of momentum on the ground
  airTurn: 4.2,             // rad/s steering of momentum in the air (speed preserved)
  airBrake: 9,              // m/s² when holding the opposite direction in the air
  airAccel: 9,              // up to run speed from a standstill jump
  dashCharges: 3, dashRecharge: 1.15,
  wallReach: 0.85,          // how far a wall can be to auto-attach
  wallrunTime: 2.6, wallSagStart: 1.1,
  wallrunMin: 3,
  slideFriction: 0.32, slideSteer: 3.2,
  grappleTap: true,
};

const UP = new THREE.Vector3(0, 1, 0);
const v1 = new THREE.Vector3(), v2 = new THREE.Vector3(), v3 = new THREE.Vector3();
const _contacts = [];
const _preVel = new THREE.Vector3();
const _hit = { t: 0, x: 0, y: 0, z: 0, nx: 0, ny: 0, nz: 0, flags: 0, tri: 0 };
const _hit2 = { t: 0, x: 0, y: 0, z: 0, nx: 0, ny: 0, nz: 0, flags: 0, tri: 0 };

export class Player {
  constructor(map, events) {
    this.map = map; this.col = map.col; this.ev = events;
    this.pos = new THREE.Vector3(); this.prevPos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.yaw = 0; this.pitch = 0;
    this.reset(new THREE.Vector3(0, 0, 30), Math.PI);
  }

  reset(p, yaw) {
    this.pos.copy(p); this.prevPos.copy(p); this.vel.set(0, 0, 0);
    this.yaw = yaw; this.pitch = 0;
    this.h = T.standH; this.eyeH = T.standH - 0.14; this.prevEyeH = this.eyeH;
    this.grounded = false; this.groundN = new THREE.Vector3(0, 1, 0); this.groundTime = 0; this.airTime = 0;
    this.coyoteT = 0; this.bufferT = 0;
    this.airJumps = T.airJumps;
    this.state = 'air';
    this.crouching = false; this.sliding = false; this.slideCd = 0; this.slideT = 0;
    this.dashCharges = this.easy === false ? T.dashCharges : EASY.dashCharges; this.dashRegen = 0; this.dashT = 0; this.dashDir = new THREE.Vector3(); this.dashExit = 0;
    this.wall = null; this.wallCd = 0; this.lastWallN = new THREE.Vector3(); this.wallContact = null;
    this.climbT = 0; this.climbUsed = false;
    this.mantle = null;
    this.hook = null; this.grapple = null; this.grappleCharges = T.grappleCharges; this.grappleRegen = 0;
    this.stagger = 0; this.burstT = 0; this.burstDir = new THREE.Vector3(); this.burstSpeed = 0; this.burstExit = 0;
    this.speed = 0; this.hSpeed = 0;
    this.jumpedTick = false;
    this.lastLand = 0;
    this.padCd = 0;
    this.alive = true;
    this.easy = this.easy ?? true;
  }

  get dashMax() { return this.easy ? EASY.dashCharges : T.dashCharges; }

  get eye() { return v3.set(this.pos.x, this.pos.y + this.eyeH, this.pos.z); }
  lookDir(out) { return out.set(-Math.sin(this.yaw) * Math.cos(this.pitch), Math.sin(this.pitch), -Math.cos(this.yaw) * Math.cos(this.pitch)); }
  flatFwd(out) { return out.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw)); }
  flatRight(out) { return out.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw)); }

  wish(inp, out) {
    const f = this.flatFwd(v1), r = this.flatRight(v2);
    out.set(f.x * inp.fwd + r.x * inp.right, 0, f.z * inp.fwd + r.z * inp.right);
    const l = out.length(); if (l > 0) out.divideScalar(l);
    return out;
  }

  accelerate(dir, wishSpeed, accel, dt, cap = Infinity) {
    const cur = this.vel.x * dir.x + this.vel.z * dir.z;
    const add = Math.min(wishSpeed, cap) - cur;
    if (add <= 0) return;
    const a = Math.min(accel * dt * wishSpeed, add);
    this.vel.x += dir.x * a; this.vel.z += dir.z * a;
  }

  friction(f, dt) {
    // on the ground the velocity lies in the slope plane, so scale all of it
    const full = this.grounded;
    const s = full ? this.vel.length() : Math.hypot(this.vel.x, this.vel.z);
    if (s < 0.05) { this.vel.x = this.vel.z = 0; if (full) this.vel.y = 0; return; }
    const drop = Math.max(s, T.stopSpeed) * f * dt;
    const k = Math.max(0, s - drop) / s;
    this.vel.x *= k; this.vel.z *= k; if (full) this.vel.y *= k;
  }

  // rotate horizontal velocity toward a direction, preserving speed
  steer(dir, rate, dt) {
    const s = Math.hypot(this.vel.x, this.vel.z); if (s < 0.5) return;
    const cx = this.vel.x / s, cz = this.vel.z / s;
    const cross = cx * dir.z - cz * dir.x, dot = cx * dir.x + cz * dir.z;
    const ang = Math.atan2(cross, dot);
    const step = Math.sign(ang) * Math.min(Math.abs(ang), rate * dt);
    const c = Math.cos(step), sn = Math.sin(step);
    this.vel.x = (cx * c - cz * sn) * s; this.vel.z = (cx * sn + cz * c) * s;
  }

  // ======================= TICK =======================
  tick(dt, inp, ctx) {
    this.prevPos.copy(this.pos); this.prevEyeH = this.eyeH;
    const wish = this.wish(inp, new THREE.Vector3());
    const hasWish = wish.lengthSq() > 0;
    this.jumpedTick = false;

    // timers
    this.coyoteT -= dt; this.bufferT -= dt; this.dashCd = (this.dashCd || 0) - dt; this.steerLock = (this.steerLock || 0) - dt; this.slideCd -= dt; this.wallCd -= dt; this.padCd -= dt;
    this.stagger = Math.max(0, this.stagger - dt);
    const E = this.easy;
    if (inp.jumpPressed) this.bufferT = E ? EASY.jumpBuffer : T.jumpBuffer;
    const dRe = E ? EASY.dashRecharge : T.dashRecharge;
    if (this.dashCharges < this.dashMax) { this.dashRegen += dt; if (this.dashRegen >= dRe) { this.dashCharges++; this.dashRegen = 0; } } else this.dashRegen = 0;
    if (this.grappleCharges < T.grappleCharges && !this.grapple && !this.hook) { this.grappleRegen += dt; if (this.grappleRegen >= T.grappleRecharge) { this.grappleCharges++; this.grappleRegen = 0; } }
    const stunned = this.stagger > 0;

    // ---------- mantle (scripted vault) ----------
    if (this.mantle) { this.tickMantle(dt); return; }

    // ---------- crouch / slide state ----------
    const wantCrouch = inp.crouch && !stunned;
    if (wantCrouch && !this.crouching) {
      this.crouching = true;
      if (this.grounded && this.hSpeedNow() > T.slideMinSpeed - 1) this.startSlide(wish);
      if (this.wall) this.endWall();
    }
    if (!wantCrouch && this.crouching && this.canStand()) { this.crouching = false; this.sliding = false; }
    const targetH = this.crouching ? T.crouchH : T.standH;
    if (targetH < this.h) this.h = targetH;
    else if (targetH > this.h) this.h = Math.min(targetH, this.h + dt * 9);
    const eyeTarget = this.h - (this.crouching ? 0.2 : 0.14);
    this.eyeH += (eyeTarget - this.eyeH) * Math.min(1, dt * 16);

    // ---------- dash ----------
    if (inp.dashPressed && this.dashCharges > 0 && !stunned) this.startDash(hasWish ? wish : this.flatFwd(new THREE.Vector3()), inp);
    if (this.dashT > 0) {
      this.dashT -= dt;
      this.vel.x = this.dashDir.x * Math.max(T.dashBurst, this.dashExit + 6);
      this.vel.z = this.dashDir.z * Math.max(T.dashBurst, this.dashExit + 6);
      if (!this.grounded) this.vel.y = Math.max(this.vel.y, 0) * 0.5;
      if (this.dashT <= 0) { this.vel.x = this.dashDir.x * this.dashExit; this.vel.z = this.dashDir.z * this.dashExit; }
    }

    // ---------- scripted burst (iaido dash-cut) ----------
    if (this.burstT > 0) {
      this.burstT -= dt;
      this.vel.copy(this.burstDir).multiplyScalar(this.burstSpeed);
      if (this.burstT <= 0) this.vel.copy(this.burstDir).multiplyScalar(this.burstExit);
    }

    // ---------- grapple ----------
    if (inp.grapplePressed && E && (this.grapple || this.hook)) { if (this.grapple) this.releaseGrapple(false); else this.hook = null; inp.grapplePressed = false; }
    if (inp.grapplePressed && !this.hook && !this.grapple && this.grappleCharges > 0 && !stunned) this.fireHook(ctx);
    if (this.hook) this.tickHook(dt, ctx);
    if (this.grapple) this.tickGrapple(dt, inp, ctx);

    // ---------- walls ----------
    this.scanWall();
    if (this.wall) this.tickWall(dt, inp, wish);
    else if (!this.grounded && !this.grapple && this.dashT <= 0) this.tryWall(inp, wish);

    // ---------- jump ----------
    if (this.bufferT > 0 && !stunned) {
      if (this.wall) { this.wallJump(inp); this.bufferT = 0; }
      else if (this.grounded || this.coyoteT > 0) { this.groundJump(); this.bufferT = 0; }
      else if (inp.jumpPressed && this.grapple) { this.releaseGrapple(true); this.vel.y = Math.max(this.vel.y, 0) + 5; this.bufferT = 0; this.ev.jump('grapple'); }
      else if (inp.jumpPressed && this.airJumps > 0) { this.airJump(wish, hasWish); this.bufferT = 0; }
    }
    // auto-hop when holding jump (bhop assist)
    if (inp.jumpHeld && inp.autoHop && this.grounded && !this.jumpedTick && !stunned && this.groundTime > 0) { this.groundJump(); }

    // ---------- movement ----------
    if (this.wall || this.dashT > 0 || this.burstT > 0) {
      // handled
    } else if (this.grounded) {
      if (this.sliding) this.tickSlide(dt, inp, wish, hasWish);
      else if (E && hasWish && !stunned && !this.crouching && this.hSpeedNow() > T.runSpeed + 0.5) {
        // momentum mode: running above run speed bleeds speed slowly and steers like a car, no friction wall
        const hs = this.hSpeedNow();
        this.steer(wish, EASY.groundTurn * (1 - Math.min(0.55, hs / 70)), dt);
        const ns = Math.max(T.runSpeed, hs - EASY.momentumDecay * dt) / hs;
        this.vel.x *= ns; this.vel.z *= ns;
      } else {
        // skip friction on the landing tick if jumping (perfect bhop)
        if (!this.jumpedTick) this.friction(T.friction, dt);
        const sp = this.crouching ? T.crouchSpeed : T.runSpeed;
        if (hasWish && !stunned) {
          // project wish onto the ground plane
          const n = this.groundN;
          v1.copy(wish).addScaledVector(n, -wish.dot(n)).normalize();
          const cur = this.vel.dot(v1); const add = sp - cur;
          if (add > 0) this.vel.addScaledVector(v1, Math.min(T.groundAccel * dt * sp, add));
        }
      }
    } else if (E) {
      if (hasWish && !stunned) {
        const hs = this.hSpeedNow();
        const dot = hs > 0.5 ? (this.vel.x * wish.x + this.vel.z * wish.z) / hs : 1;
        if (dot < -0.4 && hs > 2) { const k = Math.max(0, hs - EASY.airBrake * dt) / hs; this.vel.x *= k; this.vel.z *= k; }
        else if (!this.grapple && this.steerLock <= 0) this.steer(wish, EASY.airTurn * (1 - Math.min(0.5, hs / 80)), dt);
        if (this.hSpeedNow() < T.runSpeed) this.accelerate(wish, T.runSpeed, EASY.airAccel, dt);
        this.accelerate(wish, T.runSpeed, T.airAccel, dt, T.airCap); // strafe gain still works for experts
      }
    } else {
      if (hasWish && !stunned) {
        this.accelerate(wish, T.runSpeed, T.airAccel, dt, T.airCap);           // Quake air strafe
        const hs = this.hSpeedNow();
        if (hs < T.runSpeed * 0.95) this.accelerate(wish, T.runSpeed, T.airControl, dt);
        if (inp.fwd > 0 && inp.right === 0 && !this.grapple && this.steerLock <= 0) {
          const rate = T.airSteer * (1.2 - Math.min(0.7, hs / 60));
          this.steer(this.flatFwd(v2), rate, dt);
        }
      }
    }

    // ---------- gravity ----------
    if (!this.grounded) {
      let g = T.gravity;
      if (this.wall) g = 0;                     // wall handles vertical
      else if (this.climbT > 0) g = 0;
      else if (this.dashT > 0) g *= 0.1;
      else if (this.burstT > 0) g = 0;
      else if (this.crouching && this.vel.y < 0) g *= 1.55; // fast fall
      this.vel.y -= g * dt;
    } else if (this.sliding) {
      // slope gravity: accelerate down hill
      const n = this.groundN;
      v1.set(0, -T.gravity, 0); v1.addScaledVector(n, -v1.dot(n));
      this.vel.addScaledVector(v1, dt);
    }

    // speed cap (soft)
    const sp = this.vel.length();
    if (sp > T.maxSpeed) this.vel.multiplyScalar(1 - Math.min(1, (sp - T.maxSpeed) / sp * dt * 6));

    // ---------- integrate ----------
    const wasGrounded = this.grounded;
    _preVel.copy(this.vel); const preVy = _preVel.y;
    this.integrate(dt);
    if (wasGrounded && this.wallContact && !this.jumpedTick) this.stepUp(_preVel);

    // ground snapping (stick to slopes and ramp descents)
    if (wasGrounded && !this.grounded && !this.jumpedTick && this.dashT <= 0 && this.vel.y < 3 && !this.grapple) this.snap();

    // vault over waist/chest-high ledges when running into them
    if (!this.mantle && !this.wall && inp.fwd > 0 && this.wallContact && this.vel.y < 6 && !stunned) this.tryMantle();

    // pads
    this.checkPads();

    if (this.grounded) {
      if (!wasGrounded) this.onLand(preVy, wish);
      this.groundTime += dt; this.airTime = 0; this.coyoteT = E ? EASY.coyote : T.coyote;
      this.airJumps = T.airJumps; this.climbUsed = false;
      if (this.wall) this.endWall();
    } else { this.groundTime = 0; this.airTime += dt; }
    if (this.sliding && !this.grounded && this.airTime > 0.15) this.sliding = false;

    this.hSpeed = this.hSpeedNow(); this.speed = this.vel.length();
    this.state = this.mantle ? 'mantle' : this.wall ? 'wall' : this.grapple ? 'grapple' : this.dashT > 0 ? 'dash' : this.sliding ? 'slide' : this.grounded ? 'ground' : 'air';
    if (this.pos.y < -30) { this.ev.fell && this.ev.fell(); }
  }

  hSpeedNow() { return Math.hypot(this.vel.x, this.vel.z); }

  get invuln() { return this.dashT > 0 || this.burstT > 0; }

  burst(dir, speed, time, exit) {
    this.burstDir = dir.clone().normalize(); this.burstSpeed = speed; this.burstT = time; this.burstExit = exit;
    if (this.wall) this.endWall();
    if (this.grapple) this.releaseGrapple(false);
    this.sliding = false;
    if (this.grounded && this.burstDir.y < 0.05) this.burstDir.y = Math.max(this.burstDir.y, 0.02);
  }

  integrate(dt) {
    const sp = this.vel.length();
    const steps = Math.min(10, Math.max(1, Math.ceil(sp * dt / 0.22)));
    const h = dt / steps;
    this.grounded = false; this.wallContact = null;
    for (let s = 0; s < steps; s++) {
      this.pos.addScaledVector(this.vel, h);
      if (this.col.collideCapsule(this.pos, T.radius, this.h, _contacts)) {
        for (const c of _contacts) {
          if (c.y > 0.68) { this.grounded = true; this.groundN.set(c.x, c.y, c.z); }
          else if (c.y < -0.6) { if (this.vel.y > 0) this.vel.y = 0; }
          else if (Math.abs(c.y) < 0.35) this.wallContact = { x: c.x, y: c.y, z: c.z };
          const vn = this.vel.x * c.x + this.vel.y * c.y + this.vel.z * c.z;
          if (vn < 0) { this.vel.x -= c.x * vn; this.vel.y -= c.y * vn; this.vel.z -= c.z * vn; }
        }
      }
    }
    // when standing on ground, don't keep a downward drift
    if (this.grounded && !this.sliding) { const vn = this.vel.dot(this.groundN); if (vn < 0) this.vel.addScaledVector(this.groundN, -vn); }
  }

  snap() {
    // probe straight down; only ever move vertically (moving along the contact normal would
    // shove the player backwards on slopes)
    const d = 0.45;
    v1.copy(this.pos); v1.y -= d;
    if (this.col.collideCapsule(v1, T.radius, this.h, _contacts)) {
      let ground = null;
      for (const c of _contacts) if (c.y > 0.68 && (!ground || c.y < ground.y)) ground = c;
      if (!ground) return;
      const push = Math.hypot(v1.x - this.pos.x, v1.y - (this.pos.y - d), v1.z - this.pos.z);
      const y = this.pos.y - d + push / Math.max(0.68, ground.y);
      if (y <= this.pos.y + 0.05) {
        this.pos.y = Math.min(this.pos.y, y + 0.001);
        this.grounded = true; this.groundN.set(ground.x, ground.y, ground.z);
        const vn = this.vel.dot(this.groundN); if (vn > 0) this.vel.addScaledVector(this.groundN, -vn);
      }
    }
  }

  // climb small curbs/steps (≤ 0.45m) without losing speed
  stepUp(pre) {
    const hs = Math.hypot(pre.x, pre.z); if (hs < 1) return;
    const dx = pre.x / hs, dz = pre.z / hs;
    const fx = this.pos.x + dx * (T.radius + 0.12), fz = this.pos.z + dz * (T.radius + 0.12);
    const h = this.col.raycast(fx, this.pos.y + 0.5, fz, 0, -1, 0, 0.5, _hit2);
    if (!h || h.ny < 0.7) return;
    const rise = h.y - this.pos.y;
    if (rise < 0.03 || rise > 0.46) return;
    if (!this.col.capsuleFree(this.pos.x + dx * 0.08, h.y + 0.02, this.pos.z + dz * 0.08, T.radius, this.h)) return;
    this.pos.set(this.pos.x + dx * 0.08, h.y + 0.02, this.pos.z + dz * 0.08);
    this.vel.x = pre.x; this.vel.z = pre.z; if (this.vel.y < 0) this.vel.y = 0;
    this.grounded = true;
  }

  canStand() { return this.col.capsuleFree(this.pos.x, this.pos.y + 0.02, this.pos.z, T.radius - 0.02, T.standH); }

  // ---------------- jumping ----------------
  groundJump() {
    const n = this.grounded ? this.groundN : UP;
    // jump mostly up, slightly off slopes
    this.vel.y = Math.max(this.vel.y, 0) + T.jumpVel;
    if (n.y < 0.97) { this.vel.x += n.x * 2; this.vel.z += n.z * 2; }
    if (this.sliding) { const hs = this.hSpeedNow(); if (hs > 1) { const k = (hs + 0.6) / hs; this.vel.x *= k; this.vel.z *= k; } this.ev.jump('slide'); }
    else this.ev.jump('ground');
    this.sliding = false;
    this.grounded = false; this.coyoteT = 0; this.jumpedTick = true;
  }

  airJump(wish, hasWish) {
    this.airJumps--;
    this.vel.y = Math.max(this.vel.y * 0.25, 0) + T.airJumpVel;
    if (hasWish) {
      // redirect momentum toward input (keeps speed, a bit of control)
      const hs = Math.max(this.hSpeedNow(), T.runSpeed * 0.85);
      const s = this.hSpeedNow() || 1;
      let nx = this.vel.x / s * 0.3 + wish.x * 0.7, nz = this.vel.z / s * 0.3 + wish.z * 0.7;
      const nl = Math.hypot(nx, nz) || 1;
      this.vel.x = nx / nl * hs; this.vel.z = nz / nl * hs;
    }
    this.jumpedTick = true;
    this.ev.jump('air');
  }

  onLand(vy, wish) {
    const impact = Math.max(0, -vy);
    this.lastLand = impact;
    // slide-landing: convert fall energy into forward speed
    if (this.crouching && impact > 5) {
      const hs = this.hSpeedNow();
      const dir = hs > 1 ? v1.set(this.vel.x / hs, 0, this.vel.z / hs) : this.flatFwd(v1);
      const add = Math.min(impact * T.slideLandFactor, 10);
      this.vel.x += dir.x * add; this.vel.z += dir.z * add;
      this.sliding = true; this.slideT = 0;
      this.ev.slide('land', add);
    } else if (this.crouching && this.hSpeedNow() > T.slideMinSpeed) { this.sliding = true; this.slideT = 0; this.ev.slide('enter', 0); }
    this.ev.land(impact);
  }

  // ---------------- slide ----------------
  startSlide(wish) {
    this.sliding = true; this.slideT = 0;
    let boost = 0;
    if (this.slideCd <= 0) {
      const hs = this.hSpeedNow();
      boost = THREE.MathUtils.clamp(T.slideTarget - hs, T.slideBoostMin, T.slideBoostMax);
      const dir = hs > 1 ? v1.set(this.vel.x / hs, 0, this.vel.z / hs) : (wish.lengthSq() ? v1.copy(wish) : this.flatFwd(v1));
      this.vel.x += dir.x * boost; this.vel.z += dir.z * boost;
      this.slideCd = T.slideBoostCd;
    }
    this.ev.slide('enter', boost);
  }

  tickSlide(dt, inp, wish, hasWish) {
    this.slideT += dt;
    this.friction((this.easy ? EASY.slideFriction : T.slideFriction) * (this.groundN.y > 0.985 ? 1 : 0.25), dt);
    if (hasWish) this.steer(wish, this.easy ? EASY.slideSteer : T.slideSteer, dt);
    if (this.hSpeedNow() < T.slideMinSpeed && this.groundN.y > 0.985) this.sliding = false;
  }

  // ---------------- dash ----------------
  startDash(dir, inp) {
    if (this.dashCd > 0) return;
    this.dashCharges--; this.dashRegen = Math.min(this.dashRegen, 0.2); this.dashCd = 0.22;
    // chaining dashes builds speed from the previous exit speed, not from the burst itself
    const baseVel = this.dashT > 0 ? v2.copy(this.dashDir).multiplyScalar(this.dashExit) : v2.copy(this.vel);
    this.dashDir.copy(dir).setY(0).normalize();
    const along = Math.max(0, baseVel.x * this.dashDir.x + baseVel.z * this.dashDir.z);
    const hsBase = Math.hypot(baseVel.x, baseVel.z);
    this.dashExit = Math.max(along, hsBase * 0.85, T.runSpeed) + T.dashGain;
    this.dashT = T.dashTime;
    if (this.wall) this.endWall();
    if (this.grapple) this.releaseGrapple(false);
    if (!this.grounded) this.vel.y = Math.max(this.vel.y, 0);
    if (this.grounded && inp.crouch) { this.sliding = true; }
    this.ev.dash(this.dashDir);
  }

  // ---------------- walls ----------------
  scanWall() {
    // find nearest runnable wall around the capsule (8 directions, 2 heights)
    this.nearWall = null;
    if (this.grounded) return;
    let best = 1e9;
    const r = T.radius + (this.easy ? EASY.wallReach : 0.45);
    for (let k = 0; k < 8; k++) {
      const a = this.yaw + k * Math.PI / 4;
      const dx = Math.cos(a), dz = -Math.sin(a);
      let ok = 0, hx = 0, hz = 0, dist = 0, nx = 0, nz = 0;
      for (const hh of [0.55, 1.3]) {
        const h = this.col.raycast(this.pos.x, this.pos.y + Math.min(hh, this.h - 0.2), this.pos.z, dx, 0, dz, r, _hit, SURF.WALLRUN);
        if (h && Math.abs(h.ny) < 0.3) { ok++; dist = h.t; nx = h.nx; nz = h.nz; }
      }
      if (ok === 2 && dist < best) { best = dist; this.nearWall = { nx, nz, dist }; }
    }
  }

  tryWall(inp, wish) {
    if (this.airTime < 0.05 || this.crouching) return;
    const w = this.nearWall; if (!w) return;
    const n = v1.set(w.nx, 0, w.nz).normalize();
    if (this.wallCd > 0 && n.dot(this.lastWallN) > 0.9) return;
    const hs = this.hSpeedNow();
    const vdir = hs > 0.1 ? v2.set(this.vel.x / hs, 0, this.vel.z / hs) : this.flatFwd(v2);
    const into = -vdir.dot(n);
    const lookInto = -this.flatFwd(v3).dot(n);
    // straight into the wall → climb
    if ((into > 0.75 || (hs < 4 && lookInto > 0.7)) && inp.fwd > 0 && lookInto > 0.6) {
      if (!this.climbUsed && this.vel.y > -6) { this.climbT = T.climbTime; this.climbUsed = true; this.wall = { n: n.clone(), dir: new THREE.Vector3(), t: 0, climb: true }; this.bufferT = 0; this.ev.climb(); }
      return;
    }
    if (hs < (this.easy ? EASY.wallrunMin : T.wallrunMin)) return;
    if (!this.easy && inp.fwd <= 0 && Math.abs(inp.right) === 0) return;
    if (this.easy && inp.fwd < 0) return;
    const along = new THREE.Vector3(-n.z, 0, n.x);
    if (along.dot(vdir) < 0) along.negate();
    this.wall = { n: n.clone(), dir: along, t: 0, entry: Math.max(hs, T.wallrunSpeed), climb: false };
    this.vel.y = THREE.MathUtils.clamp(this.vel.y, this.easy ? 0 : -1.5, 4.5);
    this.airJumps = T.airJumps;
    this.climbUsed = false;
    this.bufferT = 0;
    this.ev.wallStart(n);
  }

  tickWall(dt, inp, wish) {
    const w = this.wall; w.t += dt;
    const nw = this.nearWall;
    const same = nw && (nw.nx * w.n.x + nw.nz * w.n.z) > 0.8;
    if (w.climb) {
      this.climbT -= dt;
      if (!same || this.climbT <= 0 || inp.fwd <= 0) {
        this.wall = null; this.climbT = 0;
        if (this.vel.y > 0) this.vel.y = Math.min(this.vel.y, 4);
        return;
      }
      this.vel.y = T.climbVel * (0.6 + 0.4 * (this.climbT / T.climbTime));
      this.vel.x = -w.n.x * 1.5; this.vel.z = -w.n.z * 1.5;
      this.tryMantle(true);
      return;
    }
    if (!same || w.t > (this.easy ? EASY.wallrunTime : T.wallrunTime) || this.grounded) { this.endWall(); return; }
    if (nw) w.n.set(nw.nx, 0, nw.nz).normalize();
    // keep direction aligned with the wall and the view
    w.dir.set(-w.n.z, 0, w.n.x);
    if (w.dir.dot(this.flatFwd(v1)) < 0) w.dir.negate();
    const cur = this.vel.x * w.dir.x + this.vel.z * w.dir.z;
    const target = Math.max(w.entry, T.wallrunSpeed) + (inp.fwd > 0 ? w.t * 1.2 : -w.t * 3);
    const sp = cur + (target - cur) * Math.min(1, dt * 4);
    const stick = this.easy ? 3 : 1.8;
    this.vel.x = w.dir.x * sp - w.n.x * stick;
    this.vel.z = w.dir.z * sp - w.n.z * stick;
    // vertical arc: hold height, then sag
    const sag0 = this.easy ? EASY.wallSagStart : 0.35, sagK = this.easy ? 3.5 : 5.5;
    const vyTarget = w.t < sag0 ? (this.easy ? 0.6 : 1.2) : (this.easy ? 0.6 : 1.2) - (w.t - sag0) * sagK;
    this.vel.y += (vyTarget - this.vel.y) * Math.min(1, dt * 6);
    // stepping off: pressing away from the wall
    const away = (inp.right !== 0) ? this.wish(inp, v2).dot(w.n) : 0;
    if (away > 0.6 && w.t > 0.15) { this.vel.x += w.n.x * 4; this.vel.z += w.n.z * 4; this.endWall(); }
  }

  wallJump(inp) {
    const w = this.wall;
    if (w.climb) {
      // kick off backwards
      this.vel.set(w.n.x * T.wallJumpOut * 1.1, T.wallJumpUp, w.n.z * T.wallJumpOut * 1.1);
    } else {
      const f = this.flatFwd(v1);
      const hs = Math.max(this.hSpeedNow(), T.wallrunSpeed);
      const lk = this.easy ? 1.1 : 0.45, al = this.easy ? 0.5 : 0.75;
      let dx = w.dir.x * al + w.n.x * 0.55 + f.x * lk, dz = w.dir.z * al + w.n.z * 0.55 + f.z * lk;
      const into = dx * w.n.x + dz * w.n.z;
      if (into < 0.3) { dx += w.n.x * (0.3 - into); dz += w.n.z * (0.3 - into); }
      const l = Math.hypot(dx, dz);
      const s = hs + 1.2;
      this.vel.set(dx / l * s + w.n.x * 2, T.wallJumpUp, dz / l * s + w.n.z * 2);
    }
    this.lastWallN.copy(w.n); this.wallCd = 0.4;
    this.wall = null; this.climbT = 0;
    this.airJumps = T.airJumps;
    this.jumpedTick = true; this.steerLock = this.easy ? 0.15 : 0.35;
    this.ev.jump('wall');
  }

  endWall() {
    if (!this.wall) return;
    this.lastWallN.copy(this.wall.n); this.wallCd = 0.3;
    this.wall = null; this.climbT = 0;
  }

  // ---------------- mantle ----------------
  tryMantle(force = false) {
    if (this.mantle) return false;
    const f = this.flatFwd(v1);
    const h = this.col.raycast(this.pos.x, this.pos.y + 0.9, this.pos.z, f.x, 0, f.z, T.radius + 0.7, _hit);
    if (!h || Math.abs(h.ny) > 0.3) return false;
    // the obstacle must end below ~2.4m (otherwise it's a wall, not a ledge)
    const tall = this.col.raycast(this.pos.x, this.pos.y + 2.45, this.pos.z, f.x, 0, f.z, T.radius + 0.9, _hit2);
    if (tall && Math.abs(tall.ny) < 0.3) return false;
    const hx = h.x - h.nx * 0.45, hz = h.z - h.nz * 0.45;
    const top = this.col.raycast(hx, this.pos.y + 2.6, hz, 0, -1, 0, 2.6, _hit);
    if (!top || top.ny < 0.7) return false;
    const rise = top.y - this.pos.y;
    if (rise < 0.4 || rise > 2.3) return false;
    const tx = top.x - h.nx * 0.0 + f.x * (T.radius * 0.6), tz = top.z + f.z * (T.radius * 0.6);
    if (!this.col.capsuleFree(tx, top.y + 0.03, tz, T.radius, T.crouchH)) return false;
    this.mantle = { from: this.pos.clone(), to: new THREE.Vector3(tx, top.y + 0.03, tz), t: 0, dur: 0.14 + rise * 0.05, speed: Math.max(this.hSpeedNow(), 7), dir: f.clone() };
    this.wall = null; this.climbT = 0;
    this.ev.mantle();
    return true;
  }

  tickMantle(dt) {
    const m = this.mantle; m.t += dt;
    const u = Math.min(1, m.t / m.dur);
    const e = 1 - Math.pow(1 - u, 2);
    // up first, then forward
    this.pos.x = m.from.x + (m.to.x - m.from.x) * Math.max(0, (u - 0.35) / 0.65);
    this.pos.z = m.from.z + (m.to.z - m.from.z) * Math.max(0, (u - 0.35) / 0.65);
    this.pos.y = m.from.y + (m.to.y - m.from.y) * Math.min(1, e * 1.4);
    this.vel.set(0, 0, 0);
    if (u >= 1) {
      this.mantle = null;
      this.vel.set(m.dir.x * m.speed, 0, m.dir.z * m.speed);
      this.grounded = true; this.groundN.set(0, 1, 0);
    }
  }

  // ---------------- grapple ----------------
  fireHook(ctx) {
    this.grappleCharges--; this.grappleRegen = 0;
    const d = this.lookDir(new THREE.Vector3());
    const e = this.eye.clone();
    this.hook = { pos: e.clone().addScaledVector(d, 0.6), dir: d, traveled: 0 };
    this.ev.hookFire();
  }

  tickHook(dt, ctx) {
    const h = this.hook;
    const step = T.grappleHookSpeed * dt;
    // enemies first (they move)
    const target = ctx && ctx.hookEnemy ? ctx.hookEnemy(h.pos, h.dir, step) : null;
    const wh = this.col.raycast(h.pos.x, h.pos.y, h.pos.z, h.dir.x, h.dir.y, h.dir.z, step, _hit, SURF.GRAPPLE);
    if (target && (!wh || target.t < wh.t)) {
      this.attach(target.point, target.enemy); this.hook = null; return;
    }
    if (wh) { this.attach(new THREE.Vector3(wh.x, wh.y, wh.z), null, new THREE.Vector3(wh.nx, wh.ny, wh.nz)); this.hook = null; return; }
    h.pos.addScaledVector(h.dir, step); h.traveled += step;
    if (h.traveled > T.grappleRange) { this.hook = null; this.ev.hookMiss(); this.grappleCharges = Math.min(T.grappleCharges, this.grappleCharges + 1); }
  }

  attach(point, enemy, normal) {
    this.grapple = { point: point.clone(), enemy, t: 0, normal };
    // yank toward anchor
    const to = v1.subVectors(point, this.eye).normalize();
    const along = this.vel.dot(to);
    if (along < T.grappleYank) this.vel.addScaledVector(to, T.grappleYank - Math.max(0, along) * 0.5);
    if (this.grounded) { this.vel.y = Math.max(this.vel.y, 5); this.grounded = false; }
    this.sliding = false;
    if (this.wall) this.endWall();
    this.ev.hookAttach(point, !!enemy);
  }

  tickGrapple(dt, inp, ctx) {
    const g = this.grapple; g.t += dt;
    if (g.enemy) { if (!g.enemy.alive) { this.releaseGrapple(false); return; } g.point.copy(g.enemy.chest); }
    const e = this.eye;
    const to = v1.subVectors(g.point, e); const dist = to.length(); to.divideScalar(dist || 1);
    const holding = this.easy ? true : inp.grappleHeld;
    if (!holding || dist < (g.enemy ? 3.0 : 2.4) || g.t > (this.easy ? 2.6 : 3.2)) { this.releaseGrapple(dist < 3.2); return; }
    const pull = T.grapplePull * (g.enemy ? 1.35 : 1) * (dist > 8 ? 1 : 0.6 + dist / 20);
    this.vel.addScaledVector(to, pull * dt);
    // partial gravity compensation so the swing feels lively not sluggish
    this.vel.y += T.gravity * 0.35 * dt;
    // input lets you swing sideways
    const r = this.flatRight(v2);
    this.vel.addScaledVector(r, inp.right * 9 * dt);
    const s = this.vel.length(); if (s > 55) this.vel.multiplyScalar(55 / s);
  }

  releaseGrapple(arrived) {
    if (!this.grapple) return;
    const enemy = this.grapple.enemy;
    this.grapple = null;
    if (arrived && this.vel.y < 4) this.vel.y += 3.5;
    // easy mode: arriving at a ledge pulls you up onto it
    if (arrived && !enemy && this.easy) this.tryMantle();
    this.ev.hookRelease(arrived, enemy);
  }

  // ---------------- pads ----------------
  checkPads() {
    if (this.padCd > 0) return;
    for (const p of this.map.jumpPads) {
      if (Math.abs(this.pos.y - p.y) < 0.7 && (this.pos.x - p.x) ** 2 + (this.pos.z - p.z) ** 2 < p.r * p.r) {
        this.vel.y = p.power; this.vel.x *= 1.1; this.vel.z *= 1.1;
        this.grounded = false; this.airJumps = T.airJumps; this.padCd = 0.4; this.sliding = false;
        this.ev.pad(p); return;
      }
    }
    if (!this.grounded) return;
    for (const b of this.map.boostPads) {
      const dx = this.pos.x - b.x, dz = this.pos.z - b.z;
      const along = dx * b.dir.x + dz * b.dir.z, side = dx * b.dir.z - dz * b.dir.x;
      if (Math.abs(along) < b.len / 2 && Math.abs(side) < b.w / 2 && Math.abs(this.pos.y - b.y) < 0.6) {
        const cur = this.vel.x * b.dir.x + this.vel.z * b.dir.z;
        const target = 32;
        if (cur < target) { this.vel.x += b.dir.x * (target - cur); this.vel.z += b.dir.z * (target - cur); }
        this.padCd = 0.5;
        this.ev.boost(b);
        return;
      }
    }
  }
}
