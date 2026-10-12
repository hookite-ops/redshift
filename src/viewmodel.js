import * as THREE from 'three';

const ease = {
  outCubic: t => 1 - Math.pow(1 - t, 3),
  inOutCubic: t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  outBack: t => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); },
};

function std(color, o = {}) { return new THREE.MeshStandardMaterial({ color, roughness: 0.45, metalness: 0.6, ...o }); }

function wrapTexture() {
  const c = document.createElement('canvas'); c.width = 64; c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#0c0c10'; g.fillRect(0, 0, 64, 256);
  g.strokeStyle = '#7a0a18'; g.lineWidth = 7;
  for (let y = -64; y < 320; y += 32) { g.beginPath(); g.moveTo(0, y); g.lineTo(64, y + 32); g.stroke(); g.beginPath(); g.moveTo(64, y); g.lineTo(0, y + 32); g.stroke(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

function bladeTexture() {
  const c = document.createElement('canvas'); c.width = 512; c.height = 64;
  const g = c.getContext('2d');
  const grd = g.createLinearGradient(0, 0, 0, 64);
  grd.addColorStop(0, '#f4f4ff'); grd.addColorStop(0.45, '#b8bac8'); grd.addColorStop(0.5, '#ffffff'); grd.addColorStop(1, '#5a5c68');
  g.fillStyle = grd; g.fillRect(0, 0, 512, 64);
  // hamon (temper line)
  g.strokeStyle = 'rgba(255,255,255,0.85)'; g.lineWidth = 3; g.beginPath();
  for (let x = 0; x <= 512; x += 8) g.lineTo(x, 22 + Math.sin(x * 0.09) * 5 + Math.sin(x * 0.23) * 3);
  g.stroke();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export class ViewModel {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(62, 1, 0.01, 10);
    this.scene.add(new THREE.AmbientLight(0x6060a0, 0.9));
    const key = new THREE.DirectionalLight(0xffe0e0, 2.2); key.position.set(1, 2, 1); this.scene.add(key);
    const rim = new THREE.DirectionalLight(0xff2040, 3.0); rim.position.set(-1, 0.5, -1.5); this.scene.add(rim);
    const rim2 = new THREE.DirectionalLight(0x30d0ff, 1.5); rim2.position.set(2, -1, -1); this.scene.add(rim2);
    this.root = new THREE.Group(); this.scene.add(this.root);

    const sleeve = std(0x15151c, { roughness: 0.8, metalness: 0.1 });
    const glove = std(0x0b0b0e, { roughness: 0.6, metalness: 0.3 });
    const accent = new THREE.MeshStandardMaterial({ color: 0x200006, emissive: 0xff1838, emissiveIntensity: 3 });
    const metal = std(0x2a2b33, { roughness: 0.25, metalness: 0.95 });
    const dark = std(0x0e0e12, { roughness: 0.5, metalness: 0.7 });
    this.accentMat = accent;

    // ---------------- KATANA (right) ----------------
    this.swordPivot = new THREE.Group(); // animated
    this.root.add(this.swordPivot);
    const sword = this.sword = new THREE.Group();
    this.swordPivot.add(sword);
    // forearm + hand
    const fore = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.06, 0.42, 10), sleeve);
    fore.rotation.x = Math.PI / 2; fore.position.set(0.04, -0.03, 0.24); sword.add(fore);
    const cuff = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.052, 0.04, 10), accent);
    cuff.rotation.x = Math.PI / 2; cuff.position.set(0.04, -0.03, 0.05); sword.add(cuff);
    const hand = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.09, 0.1), glove); hand.position.set(0.02, -0.01, 0.0); sword.add(hand);
    // handle (tsuka) along -z up the blade direction: we orient blade along +y local then tilt
    const blade = this.blade = new THREE.Group();
    blade.position.set(0, 0, -0.02);
    sword.add(blade);
    const tsuka = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.024, 0.28, 10), new THREE.MeshStandardMaterial({ map: wrapTexture(), roughness: 0.8 }));
    tsuka.position.y = 0.0; blade.add(tsuka);
    const kashira = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.022, 0.03, 10), metal); kashira.position.y = -0.15; blade.add(kashira);
    const tsuba = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.015, 24), dark); tsuba.position.y = 0.15; blade.add(tsuba);
    const tsubaRing = new THREE.Mesh(new THREE.TorusGeometry(0.058, 0.006, 6, 32), accent); tsubaRing.rotation.x = Math.PI / 2; tsubaRing.position.y = 0.15; blade.add(tsubaRing);
    const habaki = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.04, 0.018), new THREE.MeshStandardMaterial({ color: 0xb08030, metalness: 1, roughness: 0.3 }));
    habaki.position.y = 0.175; blade.add(habaki);
    // blade profile: curved, single-edge
    const L = 0.95, shape = new THREE.Shape();
    const curve = x => 0.035 * Math.pow(x / L, 2);
    shape.moveTo(-0.014, 0);
    for (let i = 0; i <= 20; i++) { const y = i / 20 * L * 0.94; shape.lineTo(-0.014 + curve(y) * 1.0 - 0.0, y); }
    shape.lineTo(0.0 + curve(L), L);
    for (let i = 20; i >= 0; i--) { const y = i / 20 * L * 0.94; shape.lineTo(0.016 + curve(y) - (i === 20 ? 0.006 : 0), y); }
    const bgeo = new THREE.ExtrudeGeometry(shape, { depth: 0.005, bevelEnabled: true, bevelThickness: 0.002, bevelSize: 0.002, bevelSegments: 1 });
    bgeo.translate(0, 0, -0.0025);
    // UV remap so the texture runs along the blade
    { const pos = bgeo.attributes.position, uv = bgeo.attributes.uv; for (let i = 0; i < pos.count; i++) uv.setXY(i, pos.getY(i) / L, (pos.getX(i) + 0.014) / 0.03 * 0.0 + (pos.getX(i) - curve(pos.getY(i)) + 0.016) / 0.032); }
    const bmesh = new THREE.Mesh(bgeo, new THREE.MeshStandardMaterial({ map: bladeTexture(), metalness: 1.0, roughness: 0.12, envMapIntensity: 1.5 }));
    bmesh.position.y = 0.185; blade.add(bmesh);
    // glowing edge
    const edgePts = []; for (let i = 0; i <= 30; i++) { const y = i / 30 * L; edgePts.push(new THREE.Vector3(0.017 + curve(y) - (y > L * 0.94 ? (y - L * 0.94) / (L * 0.06) * 0.017 : 0), y + 0.185, 0)); }
    const edgeGeo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(edgePts), 30, 0.0028, 4, false);
    this.edgeMat = new THREE.MeshBasicMaterial({ color: 0xff2040 });
    blade.add(new THREE.Mesh(edgeGeo, this.edgeMat));
    this.bladeTip = new THREE.Object3D(); this.bladeTip.position.set(0.02, 0.185 + L, 0); blade.add(this.bladeTip);
    // default grip orientation: blade forward/up
    blade.rotation.set(-1.15, 0.0, -0.25);

    // ---------------- REVOLVER (left) ----------------
    this.gunPivot = new THREE.Group(); this.root.add(this.gunPivot);
    const gun = this.gun = new THREE.Group(); this.gunPivot.add(gun);
    const gfore = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.06, 0.42, 10), sleeve);
    gfore.rotation.x = Math.PI / 2; gfore.position.set(-0.02, -0.07, 0.26); gun.add(gfore);
    const gcuff = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.052, 0.04, 10), accent);
    gcuff.rotation.x = Math.PI / 2; gcuff.position.set(-0.02, -0.07, 0.07); gun.add(gcuff);
    const ghand = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.1, 0.1), glove); ghand.position.set(0, -0.06, 0.0); gun.add(ghand);
    const grip = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.12, 0.05), new THREE.MeshStandardMaterial({ color: 0x3a0a10, roughness: 0.5, metalness: 0.2 }));
    grip.position.set(0, -0.04, 0.0); grip.rotation.x = 0.25; gun.add(grip);
    const frame = new THREE.Mesh(new THREE.BoxGeometry(0.038, 0.06, 0.13), metal); frame.position.set(0, 0.04, -0.06); gun.add(frame);
    this.cyl = new THREE.Group(); this.cyl.position.set(0, 0.04, -0.07); gun.add(this.cyl);
    const cyl = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.07, 6), dark); cyl.rotation.x = Math.PI / 2; this.cyl.add(cyl);
    for (let i = 0; i < 6; i++) {
      const a = i / 6 * Math.PI * 2;
      const fl = new THREE.Mesh(new THREE.BoxGeometry(0.006, 0.006, 0.072), accent);
      fl.position.set(Math.cos(a) * 0.033, Math.sin(a) * 0.033, 0); this.cyl.add(fl);
    }
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.016, 0.24, 12), metal); barrel.rotation.x = Math.PI / 2; barrel.position.set(0, 0.055, -0.22); gun.add(barrel);
    const rib = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.018, 0.24), dark); rib.position.set(0, 0.075, -0.22); gun.add(rib);
    const ribGlow = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.004, 0.22), accent); ribGlow.position.set(0, 0.086, -0.22); gun.add(ribGlow);
    const hammer = this.hammer = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.03, 0.02), metal); hammer.position.set(0, 0.075, 0.0); gun.add(hammer);
    const sight = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.012, 0.008), new THREE.MeshBasicMaterial({ color: 0x30ff90 })); sight.position.set(0, 0.09, -0.33); gun.add(sight);
    this.muzzle = new THREE.Object3D(); this.muzzle.position.set(0, 0.055, -0.36); gun.add(this.muzzle);
    // muzzle flash
    const fm = new THREE.MeshBasicMaterial({ color: 0xffb070, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
    this.flash = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.22), fm);
    this.flash.position.copy(this.muzzle.position).add(new THREE.Vector3(0, 0, -0.04)); gun.add(this.flash);
    this.flash2 = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.4), fm); this.flash2.rotation.y = Math.PI / 2;
    this.flash2.position.copy(this.flash.position).add(new THREE.Vector3(0, 0, -0.1)); gun.add(this.flash2);
    this.flashLight = new THREE.PointLight(0xffa060, 0, 2); this.flashLight.position.copy(this.flash.position); gun.add(this.flashLight);

    // state
    this.t = 0;
    this.swayX = 0; this.swayY = 0; this.bob = 0;
    this.anim = { sword: null, gun: null };
    this.slashIdx = 0;
    this.recoil = 0;
    this.cylAngle = 0; this.cylTarget = 0;
    this.restSword = { p: new THREE.Vector3(0.3, -0.3, -0.5), r: new THREE.Euler(0.1, 0.0, 0.05) };
    this.restGun = { p: new THREE.Vector3(-0.23, -0.21, -0.46), r: new THREE.Euler(0.04, 0.1, 0.05) };
    this.sprintBlend = 0;
  }

  resize(aspect) { this.camera.aspect = aspect; this.camera.updateProjectionMatrix(); }

  // ----- triggers -----
  slash(heavy) {
    const kinds = [
      { from: [0.55, 0.15, -0.35, -0.2, 0.9, -1.4], mid: [0.0, -0.05, -0.75, -0.5, 0.0, -1.35], to: [-0.5, -0.35, -0.45, -0.7, -0.9, -1.2] }, // right→left
      { from: [-0.45, 0.1, -0.4, -0.3, -0.9, 1.3], mid: [0.05, -0.08, -0.75, -0.5, 0.0, 1.45], to: [0.55, -0.4, -0.45, -0.6, 0.9, 1.4] },     // left→right
      { from: [0.2, 0.45, -0.3, 0.9, 0.0, 0.1], mid: [0.05, 0.0, -0.8, -0.6, 0.0, 0.0], to: [-0.05, -0.55, -0.5, -1.4, 0.0, 0.0] },          // overhead
    ];
    const k = heavy ? kinds[2] : kinds[this.slashIdx % 2];
    this.slashIdx++;
    this.anim.sword = { type: 'slash', t: 0, dur: heavy ? 0.38 : 0.28, k };
    return heavy ? 2 : (this.slashIdx - 1) % 2;
  }
  parry() { this.anim.sword = { type: 'parry', t: 0, dur: 0.42 }; }
  parrySuccess() { this.anim.sword = { type: 'parryHit', t: 0, dur: 0.3 }; this.edgeFlash = 0.4; }
  shoot() {
    this.recoil = 1; this.flash.material.opacity = 1; this.flashLight.intensity = 8;
    this.flash.rotation.z = Math.random() * Math.PI; this.cylTarget += Math.PI / 3;
  }
  reload(dur) { this.anim.gun = { type: 'reload', t: 0, dur }; }

  update(dt, s) {
    this.t += dt;
    const sp = Math.min(s.hSpeed / 25, 1);
    // sway (lags behind mouse)
    this.swayX += (-s.mouseDX * 0.0006 - this.swayX) * Math.min(1, dt * 10);
    this.swayY += (s.mouseDY * 0.0006 - this.swayY) * Math.min(1, dt * 10);
    this.swayX = THREE.MathUtils.clamp(this.swayX, -0.08, 0.08); this.swayY = THREE.MathUtils.clamp(this.swayY, -0.08, 0.08);
    if (s.onGround && !s.sliding) this.bob += dt * (4 + s.hSpeed * 0.55);
    const bobAmt = s.onGround && !s.sliding ? Math.min(1, s.hSpeed / 10) : 0;
    const bx = Math.sin(this.bob) * 0.012 * bobAmt, by = -Math.abs(Math.cos(this.bob)) * 0.016 * bobAmt;
    this.sprintBlend += ((s.hSpeed > 14 ? 1 : 0) - this.sprintBlend) * Math.min(1, dt * 4);
    const fallLift = THREE.MathUtils.clamp(-s.vy * 0.004, -0.04, 0.06);
    const land = s.landDip * 0.3;

    // ---- sword ----
    const sp_ = this.swordPivot;
    let px = this.restSword.p.x, py = this.restSword.p.y, pz = this.restSword.p.z;
    let rx = this.restSword.r.x, ry = this.restSword.r.y, rz = this.restSword.r.z;
    // speed pose: blade trailing back
    rx -= this.sprintBlend * 0.25; rz -= this.sprintBlend * 0.25; py -= this.sprintBlend * 0.03;
    if (s.wallrun) { rz += s.wallSide * 0.3; }
    const a = this.anim.sword;
    if (a) {
      a.t += dt; const u = Math.min(1, a.t / a.dur);
      if (a.type === 'slash') {
        const k = a.k;
        const lerp6 = (A, B, t) => A.map((v, i) => v + (B[i] - v) * t);
        let v;
        if (u < 0.15) v = lerp6([px, py, pz, rx, ry, rz], k.from, ease.outCubic(u / 0.15));
        else if (u < 0.55) { const w = (u - 0.15) / 0.4; v = w < 0.5 ? lerp6(k.from, k.mid, ease.inOutCubic(w * 2)) : lerp6(k.mid, k.to, ease.outCubic((w - 0.5) * 2)); }
        else v = lerp6(k.to, [px, py, pz, rx, ry, rz], ease.inOutCubic((u - 0.55) / 0.45));
        [px, py, pz, rx, ry, rz] = v;
      } else if (a.type === 'parry' || a.type === 'parryHit') {
        const hold = [0.05, -0.08, -0.45, 0.05, 0.0, 1.45];
        const w = a.type === 'parryHit' ? Math.sin(u * Math.PI) * 0.08 : 0;
        let t = u < 0.2 ? ease.outBack(u / 0.2) : u > 0.75 ? 1 - ease.inOutCubic((u - 0.75) / 0.25) : 1;
        const base = [px, py, pz, rx, ry, rz];
        [px, py, pz, rx, ry, rz] = base.map((v, i) => v + (hold[i] - v) * t);
        py += w; rx += w * 3;
      }
      if (u >= 1) this.anim.sword = null;
    }
    sp_.position.set(px + this.swayX + bx, py + this.swayY + by + fallLift - land, pz);
    sp_.rotation.set(rx + this.swayY * 2, ry + this.swayX * 2, rz);

    // ---- gun ----
    this.recoil = Math.max(0, this.recoil - dt * 6);
    const r = ease.outCubic(this.recoil);
    let gx = this.restGun.p.x + this.swayX + bx * 0.8, gy = this.restGun.p.y + this.swayY + by + fallLift - land, gz = this.restGun.p.z + r * 0.08;
    let grx = this.restGun.r.x + r * 0.5 + this.swayY * 2, gry = this.restGun.r.y + this.swayX * 2, grz = this.restGun.r.z;
    grx -= this.sprintBlend * 0.3; gy -= this.sprintBlend * 0.04;
    const ga = this.anim.gun;
    if (ga) {
      ga.t += dt; const u = Math.min(1, ga.t / ga.dur);
      const t = Math.sin(u * Math.PI);
      grz += t * 1.2; gy -= t * 0.08; grx += t * 0.4;
      this.cylTarget = this.cylAngle + (u < 0.9 ? 0.5 : 0);
      if (u >= 1) this.anim.gun = null;
    }
    this.gunPivot.position.set(gx, gy, gz);
    this.gunPivot.rotation.set(grx, gry, grz);
    this.cylAngle += (this.cylTarget - this.cylAngle) * Math.min(1, dt * 20);
    this.cyl.rotation.z = this.cylAngle;
    this.hammer.rotation.x = -r * 0.8;

    // flash fade
    this.flash.material.opacity = Math.max(0, this.flash.material.opacity - dt * 22);
    this.flashLight.intensity = Math.max(0, this.flashLight.intensity - dt * 120);
    this.flash.scale.setScalar(0.7 + this.flash.material.opacity * 0.6);

    // edge glow pulse
    this.edgeFlash = Math.max(0, (this.edgeFlash || 0) - dt);
    const pulse = 0.5 + 0.5 * Math.sin(this.t * 3);
    const charge = s.momentum; // 0..1
    this.edgeMat.color.setRGB(1, 0.12 + this.edgeFlash * 2 + charge * 0.3, 0.25 + this.edgeFlash * 2 + pulse * 0.1).multiplyScalar(1 + charge * 1.5 + this.edgeFlash * 3);
    this.camera.rotation.z = 0;
  }
}
