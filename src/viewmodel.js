// First-person viewmodel: katana (right), revolver/shotgun + grapple gauntlet (left)
// Rendered in its own scene/camera so speed FOV never distorts the hands.
import * as THREE from 'three';
import { bladeTexture, wrapTexture } from './textures.js';

const ease = {
  out: t => 1 - Math.pow(1 - t, 3),
  inOut: t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  back: t => { const c1 = 1.9, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); },
};
const std = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.45, metalness: 0.6, ...o });
const at = (m, x, y, z) => { m.position.set(x, y, z); return m; };
const lerpArr = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);

export class ViewModel {
  constructor(loadout = 'revolver') {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, 1, 0.01, 20);
    this.scene.add(new THREE.HemisphereLight(0x9080c0, 0x200810, 0.75));
    this.scene.environmentIntensity = 0.45;
    const key = new THREE.DirectionalLight(0xffe4e4, 1.5); key.position.set(1, 2, 1.2); this.scene.add(key);
    this.rim = new THREE.DirectionalLight(0xff2040, 1.6); this.rim.position.set(-1.2, 0.4, -1.5); this.scene.add(this.rim);
    const rim2 = new THREE.DirectionalLight(0x30d0ff, 0.8); rim2.position.set(2, -0.6, -1); this.scene.add(rim2);
    this.root = new THREE.Group(); this.scene.add(this.root);

    const M = this.M = {
      sleeve: std(0x14141b, { roughness: 0.85, metalness: 0.05 }),
      sleeve2: std(0x1d1a22, { roughness: 0.7, metalness: 0.1 }),
      glove: std(0x0c0c0f, { roughness: 0.55, metalness: 0.35 }),
      plate: std(0x30313c, { roughness: 0.25, metalness: 0.95 }),
      metal: std(0x2a2b33, { roughness: 0.22, metalness: 0.95 }),
      dark: std(0x0e0e12, { roughness: 0.5, metalness: 0.7 }),
      gold: new THREE.MeshStandardMaterial({ color: 0xb08030, metalness: 1, roughness: 0.3 }),
      accent: new THREE.MeshBasicMaterial({ color: new THREE.Color(0xff1838).multiplyScalar(1.3) }),
      cyan: new THREE.MeshBasicMaterial({ color: new THREE.Color(0x30e0ff).multiplyScalar(1.3) }),
      grip: std(0x3a0a10, { roughness: 0.55, metalness: 0.2 }),
      wood: std(0x2a1410, { roughness: 0.6, metalness: 0.1 }),
    };

    this.buildSword();
    this.buildLeft(loadout);
    this.buildTrail();

    this.t = 0; this.swayX = 0; this.swayY = 0; this.bob = 0; this.sprint = 0; this.slideB = 0;
    this.anim = { sword: null, left: null };
    this.combo = 0; this.recoil = 0; this.charge = 0; this.edgeFlash = 0;
    this.cylA = 0; this.cylT = 0;
    this.wallL = 0; this.wallR = 0;
  }

  // ---------------- models ----------------
  arm(parent, left) {
    const M = this.M;
    const fore = new THREE.Mesh(new THREE.CylinderGeometry(0.043, 0.058, 0.44, 12), M.sleeve);
    fore.rotation.x = Math.PI / 2; fore.position.set(0, -0.02, 0.27); parent.add(fore);
    const guard = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.056, 0.16, 12, 1, false, 0, Math.PI * 1.1), M.plate);
    guard.rotation.set(Math.PI / 2, 0, left ? -0.4 : Math.PI + 0.4); guard.position.set(0, 0.0, 0.16); parent.add(guard);
    const cuff = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.007, 6, 20), M.accent);
    cuff.position.set(0, -0.02, 0.07); parent.add(cuff);
    const palm = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.085, 0.095), M.glove); palm.position.set(0, 0, 0); parent.add(palm);
    // fingers wrapped around a grip
    for (let i = 0; i < 4; i++) {
      const f = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.022, 0.05), M.glove);
      f.position.set((left ? 1 : -1) * 0.04, 0.03 - i * 0.022, -0.02); f.rotation.y = left ? 0.3 : -0.3; parent.add(f);
    }
    const thumb = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 0.055), M.glove); thumb.position.set((left ? -1 : 1) * 0.035, 0.04, -0.03); parent.add(thumb);
  }

  buildSword() {
    const M = this.M;
    this.swordPivot = new THREE.Group(); this.root.add(this.swordPivot);
    const hand = this.swordHand = new THREE.Group(); this.swordPivot.add(hand);
    this.arm(hand, false);
    const blade = this.blade = new THREE.Group(); hand.add(blade);
    const wrapMat = new THREE.MeshStandardMaterial({ map: wrapTexture(), roughness: 0.85 });
    const tsuka = new THREE.Mesh(new THREE.CylinderGeometry(0.021, 0.024, 0.3, 12), wrapMat); blade.add(tsuka);
    const kashira = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.022, 0.035, 12), M.metal); kashira.position.y = -0.16; blade.add(kashira);
    const tsuba = new THREE.Mesh(new THREE.CylinderGeometry(0.062, 0.062, 0.016, 8), M.dark); tsuba.position.y = 0.16; blade.add(tsuba);
    const tring = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.005, 6, 32), M.accent); tring.rotation.x = Math.PI / 2; tring.position.y = 0.16; blade.add(tring);
    const habaki = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.045, 0.018), M.gold); habaki.position.y = 0.188; blade.add(habaki);
    const L = 0.98, curve = y => 0.04 * Math.pow(y / L, 2);
    const shape = new THREE.Shape();
    shape.moveTo(-0.014, 0);
    for (let i = 0; i <= 24; i++) { const y = i / 24 * L * 0.93; shape.lineTo(-0.014 + curve(y), y); }
    shape.lineTo(curve(L) + 0.002, L);
    for (let i = 24; i >= 0; i--) { const y = i / 24 * L * 0.93; shape.lineTo(0.016 + curve(y) - (i === 24 ? 0.008 : 0), y); }
    const bgeo = new THREE.ExtrudeGeometry(shape, { depth: 0.005, bevelEnabled: true, bevelThickness: 0.0025, bevelSize: 0.0022, bevelSegments: 2 });
    bgeo.translate(0, 0, -0.0025);
    { const p = bgeo.attributes.position, uv = bgeo.attributes.uv; for (let i = 0; i < p.count; i++) uv.setXY(i, p.getY(i) / L, (p.getX(i) - curve(p.getY(i)) + 0.016) / 0.032); }
    this.bladeMat = new THREE.MeshStandardMaterial({ map: bladeTexture(), metalness: 1, roughness: 0.14, envMapIntensity: 1.4 });
    const bm = new THREE.Mesh(bgeo, this.bladeMat); bm.position.y = 0.2; blade.add(bm);
    const pts = []; for (let i = 0; i <= 32; i++) { const y = i / 32 * L; pts.push(new THREE.Vector3(0.017 + curve(y) - (y > L * 0.93 ? (y - L * 0.93) / (L * 0.07) * 0.016 : 0), y + 0.2, 0)); }
    this.edgeMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.4, 0.15, 0.2) });
    blade.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 32, 0.0026, 4, false), this.edgeMat));
    this.tip = new THREE.Object3D(); this.tip.position.set(0.03, 0.2 + L, 0); blade.add(this.tip);
    this.mid = new THREE.Object3D(); this.mid.position.set(0.01, 0.3, 0); blade.add(this.mid);
    blade.rotation.set(-1.25, 0.0, -0.2);
  }

  buildLeft(loadout) {
    const M = this.M;
    this.leftPivot = new THREE.Group(); this.root.add(this.leftPivot);
    const hand = this.leftHand = new THREE.Group(); this.leftPivot.add(hand);
    this.arm(hand, true);
    // grapple gauntlet on the wrist
    const g = new THREE.Group(); g.position.set(0, 0.06, 0.12); hand.add(g);
    g.add(new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.04, 0.16), M.plate));
    const coil = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.1, 12), M.dark); coil.rotation.x = Math.PI / 2; coil.position.set(0, 0.035, -0.02); g.add(coil);
    this.gauntletGlow = new THREE.Mesh(new THREE.TorusGeometry(0.02, 0.003, 6, 16), new THREE.MeshBasicMaterial({ color: new THREE.Color(0.6, 2.6, 3) })); this.gauntletGlow.position.set(0, 0.035, -0.075); g.add(this.gauntletGlow);
    this.hookTip = new THREE.Object3D(); this.hookTip.position.set(0, 0.035, -0.09); g.add(this.hookTip);
    this.setLoadout(loadout);
  }

  setLoadout(loadout) {
    const M = this.M;
    if (this.gun) this.leftHand.remove(this.gun);
    const gun = this.gun = new THREE.Group(); this.leftHand.add(gun);
    this.loadout = loadout;
    if (loadout === 'shotgun') {
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.12, 0.05), M.wood); grip.position.set(0, -0.04, 0); grip.rotation.x = 0.35; gun.add(grip);
      gun.add(at(new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.06, 0.16), M.metal), 0, 0.04, -0.06));
      for (const s of [-1, 1]) { const b = new THREE.Mesh(new THREE.CylinderGeometry(0.017, 0.017, 0.34, 12), M.dark); b.rotation.x = Math.PI / 2; b.position.set(s * 0.018, 0.05, -0.3); gun.add(b); }
      const fore = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.04, 0.12), M.wood); fore.position.set(0, 0.02, -0.22); gun.add(fore);
      const glow = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.004, 0.3), M.accent); glow.position.set(0, 0.072, -0.28); gun.add(glow);
      this.muzzle = new THREE.Object3D(); this.muzzle.position.set(0, 0.05, -0.48); gun.add(this.muzzle);
      this.cyl = null; this.hammer = null;
    } else {
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.12, 0.05), M.grip); grip.position.set(0, -0.04, 0); grip.rotation.x = 0.25; gun.add(grip);
      gun.add(at(new THREE.Mesh(new THREE.BoxGeometry(0.038, 0.06, 0.13), M.metal), 0, 0.04, -0.06));
      this.cyl = new THREE.Group(); this.cyl.position.set(0, 0.04, -0.07); gun.add(this.cyl);
      const c = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.07, 6), M.dark); c.rotation.x = Math.PI / 2; this.cyl.add(c);
      for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; const fl = new THREE.Mesh(new THREE.BoxGeometry(0.006, 0.006, 0.072), M.accent); fl.position.set(Math.cos(a) * 0.033, Math.sin(a) * 0.033, 0); this.cyl.add(fl); }
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.016, 0.24, 12), M.metal); barrel.rotation.x = Math.PI / 2; barrel.position.set(0, 0.055, -0.22); gun.add(barrel);
      gun.add(at(new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.018, 0.24), M.dark), 0, 0.075, -0.22));
      gun.add(at(new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.004, 0.22), M.accent), 0, 0.086, -0.22));
      this.hammer = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.03, 0.02), M.metal); this.hammer.position.set(0, 0.075, 0); gun.add(this.hammer);
      gun.add(at(new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.012, 0.008), new THREE.MeshBasicMaterial({ color: 0x30ff90 })), 0, 0.09, -0.33));
      this.muzzle = new THREE.Object3D(); this.muzzle.position.set(0, 0.055, -0.36); gun.add(this.muzzle);
    }
    const fm = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 1.3, 0.6), transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
    this.flash = new THREE.Mesh(new THREE.PlaneGeometry(0.24, 0.24), fm); this.flash.position.copy(this.muzzle.position).add(new THREE.Vector3(0, 0, -0.04)); gun.add(this.flash);
    this.flash2 = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.45), fm); this.flash2.rotation.y = Math.PI / 2; this.flash2.position.copy(this.flash.position).add(new THREE.Vector3(0, 0, -0.12)); gun.add(this.flash2);
    if (!this.flashLight) { this.flashLight = new THREE.PointLight(0xffa060, 0, 3); this.scene.add(this.flashLight); }
  }

  buildTrail() {
    const N = this.trailN = 18;
    this.trailPts = []; // {tip, mid}
    const geo = new THREE.BufferGeometry();
    this.trailPos = new Float32Array(N * 2 * 3);
    this.trailA = new Float32Array(N * 2);
    geo.setAttribute('position', new THREE.BufferAttribute(this.trailPos, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('a', new THREE.BufferAttribute(this.trailA, 1).setUsage(THREE.DynamicDrawUsage));
    const idx = []; for (let i = 0; i < N - 1; i++) { const a = i * 2, b = a + 1, c = a + 2, d = a + 3; idx.push(a, b, c, b, d, c); }
    geo.setIndex(idx);
    this.trailMat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
      uniforms: { color: { value: new THREE.Color(1.6, 0.15, 0.22) }, strength: { value: 0 } },
      vertexShader: `attribute float a; varying float vA; void main(){ vA = a; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
      fragmentShader: `uniform vec3 color; uniform float strength; varying float vA; void main(){ float a = vA * strength; gl_FragColor = vec4(color * (0.6 + vA), a); }`,
    });
    this.trail = new THREE.Mesh(geo, this.trailMat); this.trail.frustumCulled = false;
    this.scene.add(this.trail);
    this.trailOn = 0;
  }

  resize(aspect) { this.camera.aspect = aspect; this.camera.updateProjectionMatrix(); }

  // ---------------- triggers ----------------
  slash(kind) {
    // kind: 0 R→L, 1 L→R, 2 rising diagonal, 3 overhead (execute), 4 iaido sweep
    const K = [
      { from: [0.55, 0.12, -0.32, -0.15, 0.9, -1.5], mid: [0.02, -0.04, -0.72, -0.45, 0.05, -1.4], to: [-0.52, -0.32, -0.45, -0.7, -0.95, -1.2], dur: 0.27 },
      { from: [-0.45, 0.1, -0.38, -0.25, -0.95, 1.35], mid: [0.05, -0.06, -0.74, -0.5, 0.0, 1.5], to: [0.55, -0.38, -0.45, -0.6, 0.95, 1.45], dur: 0.27 },
      { from: [0.45, -0.42, -0.35, -1.2, 0.5, -0.6], mid: [0.05, 0.02, -0.75, -0.2, 0.0, -0.4], to: [-0.4, 0.4, -0.45, 0.6, -0.6, -0.3], dur: 0.3 },
      { from: [0.18, 0.48, -0.25, 1.0, 0.0, 0.1], mid: [0.05, 0.02, -0.82, -0.6, 0.0, 0.0], to: [-0.02, -0.55, -0.5, -1.45, 0.0, 0.0], dur: 0.36 },
      { from: [0.62, -0.1, -0.1, -0.3, 1.3, -1.55], mid: [0.0, -0.08, -0.85, -0.4, 0.0, -1.5], to: [-0.7, -0.15, -0.3, -0.5, -1.3, -1.4], dur: 0.32 },
    ];
    this.anim.sword = { type: 'slash', t: 0, ...K[kind] };
    this.trailOn = 1;
  }
  chargePose(k) { this.charge = k; }
  parry() { this.anim.sword = { type: 'parry', t: 0, dur: 0.4 }; }
  parryHit() { this.anim.sword = { type: 'parryHit', t: 0, dur: 0.32 }; this.edgeFlash = 0.5; }
  clash() { this.anim.sword = { type: 'clash', t: 0, dur: 0.3 }; this.edgeFlash = 0.6; }
  blocked() { this.anim.sword = { type: 'clash', t: 0, dur: 0.22 }; }
  shoot(kick = 1) {
    this.recoil = kick; this.flash.material.opacity = 1; this.flashLight.intensity = 12;
    this.flash.rotation.z = Math.random() * Math.PI; this.cylT += Math.PI / 3;
  }
  reload(dur) { this.anim.left = { type: 'reload', t: 0, dur }; }
  hookFire() { this.anim.left = { type: 'hook', t: 0, dur: 0.28 }; }
  inspect() { if (!this.anim.sword) this.anim.sword = { type: 'inspect', t: 0, dur: 1.4 }; }

  // world position of a vm point in world space given the main camera
  toWorld(obj, mainCam, out) {
    obj.getWorldPosition(out);              // vm-space (vm camera at origin, identity)
    out.applyQuaternion(mainCam.quaternion).add(mainCam.position);
    return out;
  }

  update(dt, s) {
    dt = Math.max(0, dt || 0);
    this.t += dt;
    // sway & bob
    this.swayX += (-s.mouseDX * 0.00045 - this.swayX) * Math.min(1, dt * 12);
    this.swayY += (s.mouseDY * 0.00045 - this.swayY) * Math.min(1, dt * 12);
    this.swayX = THREE.MathUtils.clamp(this.swayX, -0.07, 0.07); this.swayY = THREE.MathUtils.clamp(this.swayY, -0.06, 0.06);
    const moving = s.grounded && !s.sliding;
    if (moving) this.bob += dt * (3 + s.hSpeed * 0.62);
    const bobAmt = moving ? Math.min(1, s.hSpeed / 11) * s.bobScale : 0;
    const bx = Math.sin(this.bob) * 0.013 * bobAmt, by = -Math.abs(Math.cos(this.bob)) * 0.017 * bobAmt;
    const breathe = Math.sin(this.t * 1.6) * 0.004;
    this.sprint += ((s.hSpeed > 17 ? 1 : 0) - this.sprint) * Math.min(1, dt * 4);
    this.slideB += ((s.sliding ? 1 : 0) - this.slideB) * Math.min(1, dt * 8);
    this.wallL += ((s.wallSide < 0 ? 1 : 0) - this.wallL) * Math.min(1, dt * 10);
    this.wallR += ((s.wallSide > 0 ? 1 : 0) - this.wallR) * Math.min(1, dt * 10);
    const fall = THREE.MathUtils.clamp(-s.vy * 0.0035, -0.05, 0.07);
    const land = s.landDip * 0.35;

    // ---------- sword ----------
    let P = [0.29, -0.29 + breathe, -0.5, 0.08, 0.0, 0.05];
    // speed / slide / wall poses
    P = lerpArr(P, [0.33, -0.36, -0.42, -0.25, 0.25, -0.35], this.sprint * 0.8);
    P = lerpArr(P, [0.36, -0.4, -0.4, -0.5, 0.4, -0.8], this.slideB);
    P = lerpArr(P, [0.42, -0.24, -0.5, 0.0, 0.0, -0.55], this.wallR);
    if (this.charge > 0) { // iaido draw stance: blade low & back, trembling
      const c = ease.out(Math.min(1, this.charge));
      P = lerpArr(P, [0.48, -0.36, -0.18, -0.35, 1.25, -1.55], c);
      P[0] += (Math.random() - 0.5) * 0.004 * c; P[1] += (Math.random() - 0.5) * 0.004 * c;
    }
    // held guard: blade across the body
    this.guardB = (this.guardB || 0) + (((this.guard && !this.anim.sword) ? 1 : 0) - (this.guardB || 0)) * Math.min(1, dt * 18);
    if (this.guardB > 0.001) P = lerpArr(P, [0.08, -0.1, -0.46, 0.1, 0.0, 1.4], this.guardB);
    const a = this.anim.sword;
    if (a) {
      a.t += dt; const u = Math.min(1, a.t / a.dur);
      if (a.type === 'slash') {
        if (u < 0.12) P = lerpArr(P, a.from, ease.out(u / 0.12));
        else if (u < 0.5) { const w = (u - 0.12) / 0.38; P = w < 0.5 ? lerpArr(a.from, a.mid, ease.inOut(w * 2)) : lerpArr(a.mid, a.to, ease.out((w - 0.5) * 2)); }
        else P = lerpArr(a.to, P, ease.inOut((u - 0.5) / 0.5));
        if (u > 0.5) this.trailOn = Math.max(0, 1 - (u - 0.5) * 4);
      } else if (a.type === 'parry' || a.type === 'parryHit' || a.type === 'clash') {
        const hold = a.type === 'clash' ? [0.12, -0.02, -0.38, 0.25, 0.1, 1.2] : [0.06, -0.06, -0.44, 0.05, 0.0, 1.45];
        const t = u < 0.18 ? ease.back(u / 0.18) : u > 0.7 ? 1 - ease.inOut((u - 0.7) / 0.3) : 1;
        P = lerpArr(P, hold, t);
        if (a.type !== 'parry') { const k = Math.sin(u * Math.PI) * (a.type === 'clash' ? 0.12 : 0.07); P[2] += k; P[3] += k * 2.5; P[1] += k * 0.5; }
      } else if (a.type === 'inspect') {
        const t = Math.sin(u * Math.PI);
        P = lerpArr(P, [0.1, -0.12, -0.42, 0.2, -0.6, 1.2], t);
        this.blade.rotation.y = u * Math.PI * 4 * (u < 0.5 ? 1 : 1);
      }
      if (u >= 1) { this.anim.sword = null; this.blade.rotation.y = 0; }
    }
    this.swordPivot.position.set(P[0] + this.swayX + bx, P[1] + this.swayY + by + fall - land, P[2]);
    this.swordPivot.rotation.set(P[3] + this.swayY * 2, P[4] + this.swayX * 2, P[5]);

    // ---------- left hand (gun / gauntlet) ----------
    this.recoil = Math.max(0, this.recoil - dt * (this.loadout === 'shotgun' ? 3.5 : 6));
    const r = ease.out(Math.min(1, this.recoil));
    let G = [-0.24, -0.22 + breathe, -0.46, 0.04 + r * (this.loadout === 'shotgun' ? 0.7 : 0.5), 0.1, 0.05];
    G[2] += r * 0.09;
    G = lerpArr(G, [-0.28, -0.32, -0.4, -0.3, 0.2, 0.2], this.sprint * 0.8);
    G = lerpArr(G, [-0.3, -0.36, -0.38, -0.45, 0.3, 0.4], this.slideB);
    // wall on the left: reach out and touch it
    G = lerpArr(G, [-0.62, -0.02, -0.42, 0.2, 0.9, 1.4], this.wallL);
    const la = this.anim.left;
    if (la) {
      la.t += dt; const u = Math.min(1, la.t / la.dur);
      if (la.type === 'reload') {
        const t = Math.sin(u * Math.PI);
        G[5] += t * (this.loadout === 'shotgun' ? 0.4 : 1.2); G[1] -= t * 0.1; G[3] += t * (this.loadout === 'shotgun' ? -0.6 : 0.4);
        if (this.cyl) this.cylT = this.cylA + (u < 0.9 ? 0.6 : 0);
      } else if (la.type === 'hook') {
        const t = u < 0.25 ? ease.out(u / 0.25) : 1 - ease.inOut((u - 0.25) / 0.75);
        G = lerpArr(G, [-0.16, -0.12, -0.62, 0.1, 0.0, -0.3], t);
      }
      if (u >= 1) this.anim.left = null;
    }
    this.leftPivot.position.set(G[0] + this.swayX * 0.9 + bx * 0.8, G[1] + this.swayY + by + fall - land, G[2]);
    this.leftPivot.rotation.set(G[3] + this.swayY * 2, G[4] + this.swayX * 2, G[5]);
    if (this.cyl) { this.cylA += (this.cylT - this.cylA) * Math.min(1, dt * 20); this.cyl.rotation.z = this.cylA; }
    if (this.hammer) this.hammer.rotation.x = -r * 0.8;
    this.gauntletGlow.material.color.setRGB(0.3, 1.3, 1.5).multiplyScalar(s.grappleReady ? 1 : 0.2);

    // flash fade
    this.flash.material.opacity = Math.max(0, this.flash.material.opacity - dt * 20);
    this.flash.scale.setScalar(0.6 + this.flash.material.opacity * 0.7);
    this.muzzle.getWorldPosition(this.flashLight.position);
    this.flashLight.intensity = Math.max(0, this.flashLight.intensity - dt * 150);

    // blade glow: momentum & feedback
    this.edgeFlash = Math.max(0, this.edgeFlash - dt);
    const m = s.momentum, ch = this.charge;
    const k = 0.9 + m * 1.3 + this.edgeFlash * 3 + ch * 1.6;
    this.edgeMat.color.setRGB(1.3 * k, (0.12 + this.edgeFlash * 0.9 + ch * 0.5) * k, (0.18 + this.edgeFlash * 0.9 + ch * 0.6) * k);
    this.rim.intensity = 1.6 + m * 1.2 + this.edgeFlash * 3;

    // ---------- trail ----------
    this.updateTrail(dt, s);
  }

  updateTrail(dt, s) {
    const tip = new THREE.Vector3(), mid = new THREE.Vector3();
    this.tip.getWorldPosition(tip); this.mid.getWorldPosition(mid);
    this.trailPts.unshift({ tip, mid });
    if (this.trailPts.length > this.trailN) this.trailPts.pop();
    const n = this.trailPts.length;
    for (let i = 0; i < this.trailN; i++) {
      const p = this.trailPts[Math.min(i, n - 1)];
      this.trailPos.set([p.tip.x, p.tip.y, p.tip.z], i * 6);
      this.trailPos.set([p.mid.x, p.mid.y, p.mid.z], i * 6 + 3);
      const a = Math.pow(1 - i / (this.trailN - 1), 1.6);
      this.trailA[i * 2] = a; this.trailA[i * 2 + 1] = a * 0.15;
    }
    this.trail.geometry.attributes.position.needsUpdate = true; this.trail.geometry.attributes.a.needsUpdate = true;
    this.trailOn = Math.max(0, this.trailOn - dt * 1.5);
    this.trailMat.uniforms.strength.value = this.trailOn * (0.8 + s.momentum * 0.8);
    this.trailMat.uniforms.color.value.setRGB(1.4 + s.momentum * 1.2, 0.12 + this.charge * 0.9, 0.2 + this.charge * 1.0);
  }
}
