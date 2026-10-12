// NEON DISTRICT — the arena. Static geometry is merged per material for few draw calls,
// and every collidable piece is fed into the CollisionWorld as triangles.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { CollisionWorld, SURF } from './physics.js';
import { uvBox, sweepStrip, wedge, helixFrames, curveFrames } from './geom.js';
import { rng, facadeTexture, asphaltTextures, panelTexture, concreteTexture, rampTexture, rampEmissive, signTexture } from './textures.js';

const C = { RED: 0xff2240, CYAN: 0x30e0ff, PINK: 0xff40c0, AMBER: 0xffa020, WHITE: 0xfff0e8, VIOLET: 0x9a50ff };
const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _s = new THREE.Vector3(1, 1, 1), _p = new THREE.Vector3();

export class GameMap {
  constructor(scene, Q) {
    this.scene = scene; this.Q = Q;
    this.col = new CollisionWorld(240, 4);
    this.batches = new Map();
    this.animated = [];
    this.jumpPads = []; this.boostPads = [];
    this.spawnGround = []; this.spawnHigh = []; this.spawnAir = [];
    this.checkpoints = [];
    this.half = 125;
    this.R = rng(20261012);
    this.makeMaterials();
    this.build();
    this.finalize();
  }

  makeMaterials() {
    const M = this.M = {};
    const Q = this.Q;
    const fac = [0, 1, 2, 3].map(i => facadeTexture(100 + i * 17, i));
    fac.forEach((f, i) => {
      M['fac' + i] = new THREE.MeshStandardMaterial({ map: f.map, emissiveMap: f.emissive, emissive: 0xffffff, emissiveIntensity: 1.25, roughness: 0.35, metalness: 0.55 });
    });
    const as = asphaltTextures();
    as.map.repeat.set(1 / 16, 1 / 16); as.rough.repeat.set(1 / 16, 1 / 16);
    M.ground = new THREE.MeshStandardMaterial({ map: as.map, roughnessMap: as.rough, roughness: 1, metalness: 0.15, color: 0xb0b0c0, envMapIntensity: 1.4 });
    this.groundTex = as;
    M.concrete = new THREE.MeshStandardMaterial({ map: concreteTexture(5), roughness: 0.82, metalness: 0.1, color: 0xa8a8b8 });
    M.panel = new THREE.MeshStandardMaterial({ map: panelTexture(3, '#ff2a48'), roughness: 0.45, metalness: 0.65 });
    M.panelC = new THREE.MeshStandardMaterial({ map: panelTexture(7, '#30e0ff'), roughness: 0.45, metalness: 0.65 });
    M.metal = new THREE.MeshStandardMaterial({ color: 0x2a2b34, roughness: 0.28, metalness: 0.92 });
    M.dark = new THREE.MeshStandardMaterial({ color: 0x111116, roughness: 0.6, metalness: 0.5 });
    M.red = new THREE.MeshStandardMaterial({ color: 0x6a0c18, roughness: 0.38, metalness: 0.7, emissive: 0x1a0003 });
    M.glass = new THREE.MeshStandardMaterial({ color: 0x0a0e1c, roughness: 0.04, metalness: 1.0, emissive: 0x04060e, envMapIntensity: 2.0 });
    const rt = rampTexture(), re = rampEmissive();
    M.ramp = new THREE.MeshStandardMaterial({ map: rt, emissiveMap: re, emissive: 0xffffff, emissiveIntensity: 1.6, roughness: 0.4, metalness: 0.6 });
    M.road = new THREE.MeshStandardMaterial({ map: concreteTexture(11), color: 0x5a5a70, roughness: 0.3, metalness: 0.6, envMapIntensity: 1.5 });
    const cont = ['#7a1820', '#14445a', '#5a4a14', '#2a2a36', '#6a2a50'];
    cont.forEach((c, i) => { M['cont' + i] = new THREE.MeshStandardMaterial({ map: containerTex(c, i), roughness: 0.55, metalness: 0.5 }); });
    // neon (HDR basic) — values > 1 drive bloom
    const neon = (hex, k = 2.2) => new THREE.MeshBasicMaterial({ color: new THREE.Color(hex).multiplyScalar(k), toneMapped: true });
    M.nRed = neon(C.RED); M.nCyan = neon(C.CYAN); M.nPink = neon(C.PINK); M.nAmber = neon(C.AMBER); M.nWhite = neon(C.WHITE, 1.6); M.nViolet = neon(C.VIOLET);
    M.pad = new THREE.MeshStandardMaterial({ color: 0x082030, emissive: C.CYAN, emissiveIntensity: 3 });
    M.boost = new THREE.MeshStandardMaterial({ color: 0x300808, emissive: C.AMBER, emissiveIntensity: 2.5 });
    this.neonKeys = ['nRed', 'nCyan', 'nPink', 'nAmber', 'nViolet'];
  }

  // ---------- primitives ----------
  add(geo, matrix, key, { collide = true, flags = SURF.WALLRUN | SURF.GRAPPLE, shadow = true } = {}) {
    const g = geo.index ? geo.toNonIndexed() : geo;
    if (matrix) g.applyMatrix4(matrix);
    // keep only the attributes all batches share
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
    if (!this.batches.has(key)) this.batches.set(key, { geos: [], shadow });
    this.batches.get(key).geos.push(g);
    if (collide) this.col.addGeometry(g, null, flags);
    return g;
  }
  // center-based rotated box
  box(cx, cy, cz, w, h, d, key, { rx = 0, ry = 0, rz = 0, us = 4, vs = 4, ...o } = {}) {
    _e.set(rx, ry, rz, 'YXZ'); _q.setFromEuler(_e);
    _m.compose(_p.set(cx, cy, cz), _q, _s);
    return this.add(uvBox(w, h, d, us, vs), _m, key, o);
  }
  // bottom-based axis-aligned box
  bbox(x, y, z, w, h, d, key, o = {}) { return this.box(x, y + h / 2, z, w, h, d, key, o); }
  neon(x, y, z, w, h, d, key, o = {}) { return this.box(x, y, z, w, h, d, key, { collide: false, shadow: false, ...o }); }

  wedgeAt(x, z, yaw, width, len, h, key = 'ramp', y = 0) {
    _e.set(0, yaw, 0, 'YXZ'); _q.setFromEuler(_e); _m.compose(_p.set(x, y, z), _q, _s);
    this.add(wedge(width, len, h, 4, 4, 'top'), _m, key, { flags: SURF.GRAPPLE });
    this.add(wedge(width, len, h, 4, 4, 'sides'), _m, 'concrete', { flags: SURF.GRAPPLE });
    // edge neon rails
    const dir = new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw)), side = new THREE.Vector3(dir.z, 0, -dir.x);
    for (const s of [-1, 1]) {
      const a = new THREE.Vector3(x, y, z).addScaledVector(side, s * (width / 2 - 0.05));
      const b = a.clone().addScaledVector(dir, len); b.y += h;
      this.strip(a.add(new THREE.Vector3(0, 0.03, 0)), b.add(new THREE.Vector3(0, 0.03, 0)), 0.08, 'nCyan');
    }
  }

  // thin neon tube between two points
  strip(a, b, thick, key) {
    const d = new THREE.Vector3().subVectors(b, a), len = d.length();
    const mid = a.clone().add(b).multiplyScalar(0.5);
    _q.setFromUnitVectors(new THREE.Vector3(0, 0, 1), d.normalize());
    _m.compose(mid, _q, _s);
    this.add(new THREE.BoxGeometry(thick, thick, len), _m, key, { collide: false, shadow: false });
  }

  building(x, z, w, d, h, style = 0, opts = {}) {
    const R = this.R;
    const key = 'fac' + (style % 4);
    this.bbox(x, 0, z, w, h, d, key, { us: 16, vs: 32 });
    // roof cap
    this.bbox(x, h, z, w + 0.4, 0.5, d + 0.4, 'concrete', { us: 4, vs: 4 });
    // roof trim neon
    const nk = opts.neon || this.neonKeys[(R() * this.neonKeys.length) | 0];
    const y = h + 0.55;
    this.neon(x, y, z - d / 2 - 0.2, w + 0.4, 0.12, 0.12, nk);
    this.neon(x, y, z + d / 2 + 0.2, w + 0.4, 0.12, 0.12, nk);
    this.neon(x - w / 2 - 0.2, y, z, 0.12, 0.12, d + 0.4, nk);
    this.neon(x + w / 2 + 0.2, y, z, 0.12, 0.12, d + 0.4, nk);
    // vertical corner light lines on some buildings
    if (R() < 0.45) for (const [sx, sz] of [[-1, -1], [1, 1]]) this.neon(x + sx * (w / 2 + 0.06), h / 2, z + sz * (d / 2 + 0.06), 0.1, h, 0.1, nk);
    // rooftop props
    if (!opts.cleanRoof) {
      const n = 1 + (R() * 3 | 0);
      for (let i = 0; i < n; i++) {
        const pw = 1.5 + R() * 2.5, pd = 1.5 + R() * 2.5, ph = 0.8 + R() * 1.4;
        const px = x + (R() - 0.5) * (w - pw - 2), pz = z + (R() - 0.5) * (d - pd - 2);
        this.bbox(px, h + 0.5, pz, pw, ph, pd, R() < 0.5 ? 'metal' : 'panel', { flags: SURF.GRAPPLE });
      }
      if (R() < 0.5) { // antenna
        const ax = x + (R() - 0.5) * w * 0.6, az = z + (R() - 0.5) * d * 0.6, ah = 6 + R() * 10;
        this.bbox(ax, h + 0.5, az, 0.25, ah, 0.25, 'metal', { collide: false });
        const bl = this.neon(ax, h + 0.5 + ah, az, 0.5, 0.5, 0.5, 'nRed');
      }
    }
    // a sign on a random face
    if (opts.sign) this.sign(opts.sign, x, z, w, d, h, opts.signColor || '#ff2a48', opts.signFace ?? (R() * 4 | 0));
    // record rooftop as high spawn
    if (w > 8 && d > 8) this.spawnHigh.push(new THREE.Vector3(x, h + 0.55, z));
  }

  sign(text, x, z, w, d, h, color, face) {
    const t = signTexture(text, color, { w: 1024, h: 256 });
    const sw = Math.min((face % 2 === 0 ? w : d) * 0.85, 18), sh = sw / 4;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(sw, sh), new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false, color: new THREE.Color(1.6, 1.6, 1.6) }));
    const yy = h * (0.55 + this.R() * 0.3);
    const off = 0.3;
    if (face === 0) { m.position.set(x, yy, z + d / 2 + off); }
    else if (face === 1) { m.position.set(x + w / 2 + off, yy, z); m.rotation.y = Math.PI / 2; }
    else if (face === 2) { m.position.set(x, yy, z - d / 2 - off); m.rotation.y = Math.PI; }
    else { m.position.set(x - w / 2 - off, yy, z); m.rotation.y = -Math.PI / 2; }
    this.scene.add(m);
    const ph = this.R() * 10;
    this.animated.push(tt => { const f = Math.sin(tt * 0.9 + ph) > 0.96 ? (Math.sin(tt * 60) > 0 ? 0.2 : 1) : 1; m.material.opacity = f; });
  }

  container(x, y, z, yaw = 0, ci = null) {
    const k = 'cont' + (ci ?? (this.R() * 5 | 0));
    this.box(x, y + 1.3, z, 2.6, 2.6, 6.2, k, { ry: yaw, us: 6.2, vs: 2.6 });
  }

  quarterPipe(x, z, yaw, R, width, key = 'road', segs = 14) {
    // local: approach from -z, curve rises toward +z ending vertical at z=0
    const frames = [];
    const fwd = new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw));
    const right = new THREE.Vector3(fwd.z, 0, -fwd.x);
    const origin = new THREE.Vector3(x, 0, z);
    for (let i = 0; i <= segs; i++) {
      const a = i / segs * Math.PI / 2 * 0.97;
      const lz = -R + R * Math.sin(a), ly = R - R * Math.cos(a);
      const p = origin.clone().addScaledVector(fwd, lz); p.y = ly + 0.001;
      const T = fwd.clone().multiplyScalar(Math.cos(a)).add(new THREE.Vector3(0, Math.sin(a), 0)).normalize();
      const u = new THREE.Vector3().crossVectors(right, T).normalize();
      const r = right.clone();
      frames.push({ p, r: u.y < 0 ? r.clone().negate() : r, u: u.y < 0 ? u.negate() : u });
    }
    // fix up vector orientation (must point toward the curve's center = rider side)
    for (const f of frames) { const toC = origin.clone().addScaledVector(fwd, -R).setY(R).sub(f.p); if (f.u.dot(toC) < 0) f.u.negate(); }
    const g = sweepStrip(frames, width, 0.4, { us: 4, vs: 4 });
    this.add(g, null, key, { flags: SURF.GRAPPLE });
    // backing wall + coping
    const back = origin.clone().addScaledVector(fwd, 0.7);
    this.box(back.x, R / 2, back.z, width, R, 1.0, 'concrete', { ry: yaw, flags: SURF.GRAPPLE | SURF.WALLRUN });
    const top = origin.clone(); top.y = R;
    this.strip(top.clone().addScaledVector(right, -width / 2), top.clone().addScaledVector(right, width / 2), 0.14, 'nAmber');
    // fill underneath (solid look)
    const under = origin.clone().addScaledVector(fwd, -R * 0.15);
    this.box(under.x, R * 0.25, under.z, width - 0.02, R * 0.5, R * 0.3, 'dark', { ry: yaw, collide: false });
  }

  pad(x, z, y = 0, power = 30) {
    const g = new THREE.CylinderGeometry(1.7, 1.9, 0.3, 32);
    _m.makeTranslation(x, y + 0.15, z);
    this.add(g, _m, 'pad', { collide: false, shadow: false });
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 9, 32, 1, true), new THREE.MeshBasicMaterial({ color: C.CYAN, transparent: true, opacity: 0.1, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
    beam.position.set(x, y + 4.5, z); this.scene.add(beam);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.7, 0.06, 6, 40), new THREE.MeshBasicMaterial({ color: new THREE.Color(C.CYAN).multiplyScalar(3) }));
    ring.rotation.x = Math.PI / 2; ring.position.set(x, y + 0.4, z); this.scene.add(ring);
    this.animated.push(t => { const k = (t * 0.8 + x * 0.01) % 1; ring.position.y = y + 0.4 + k * 6; ring.material.opacity = 1 - k; ring.material.transparent = true; ring.scale.setScalar(1 - k * 0.3); beam.material.opacity = 0.07 + 0.04 * Math.sin(t * 5 + x); });
    this.jumpPads.push({ x, y, z, r: 1.9, power });
  }

  boost(x, z, yaw, y = 0, len = 6) {
    _e.set(0, yaw, 0, 'YXZ'); _q.setFromEuler(_e); _m.compose(_p.set(x, y + 0.03, z), _q, _s);
    const g = new THREE.PlaneGeometry(3, len); g.rotateX(-Math.PI / 2);
    this.add(g, _m, 'boost', { collide: false, shadow: false });
    // chevrons
    const dir = new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw));
    const chev = [];
    for (let i = 0; i < 3; i++) {
      const c = new THREE.Mesh(new THREE.RingGeometry(0.6, 0.85, 3, 1, -Math.PI / 6, Math.PI * 2 / 3 * 1.0), new THREE.MeshBasicMaterial({ color: new THREE.Color(C.AMBER).multiplyScalar(3), transparent: true, depthWrite: false }));
      c.rotation.set(-Math.PI / 2, 0, -yaw + Math.PI / 2); c.position.set(x, y + 0.06, z); this.scene.add(c); chev.push(c);
    }
    this.animated.push(t => chev.forEach((c, i) => { const k = ((t * 1.5 + i / 3) % 1); c.position.set(x + dir.x * (k - 0.5) * len, y + 0.06, z + dir.z * (k - 0.5) * len); c.material.opacity = Math.sin(k * Math.PI); }));
    this.boostPads.push({ x, y, z, dir, len, w: 3 });
  }

  pillar(x, z, h, key = 'concrete', w = 1.4) { this.bbox(x, 0, z, w, h, w, key, { flags: SURF.GRAPPLE }); }

  laneBlock(x, z) {
    // kicker approach lanes run tangentially at r≈34 toward each slab pair; trial start at (-26, 34)
    for (let k = 0; k < 4; k++) {
      const a2 = (k + 1) * Math.PI / 2, tang = a2 + Math.PI / 2;
      const kx = Math.cos(a2) * 34 + Math.cos(tang) * 17, kz = Math.sin(a2) * 34 + Math.sin(tang) * 17;
      if (Math.hypot(x - kx, z - kz) < 14) return true;
    }
    return Math.hypot(x + 26, z - 34) < 10;
  }

  // ---------------- LAYOUT ----------------
  build() {
    const R = this.R, H = this.half;
    // ground (visual only; collision is the analytic plane)
    const gg = new THREE.PlaneGeometry(900, 900); gg.rotateX(-Math.PI / 2);
    const uv = gg.attributes.uv; const p = gg.attributes.position;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, p.getX(i), -p.getZ(i));
    this.add(gg, null, 'ground', { collide: false });

    // ===== boundary walls (city blocks) =====
    const wallH = 46;
    const seg = 25;
    for (let side = 0; side < 4; side++) {
      for (let k = -H; k < H; k += seg) {
        const h = wallH + (R() - 0.5) * 16;
        const st = (side + (k / seg | 0)) & 3;
        const along = k + seg / 2;
        if (side === 0) this.building(along, -H - 6, seg, 12, h, st, { cleanRoof: true });
        if (side === 1) this.building(along, H + 6, seg, 12, h, st, { cleanRoof: true });
        if (side === 2) this.building(-H - 6, along, 12, seg, h, st, { cleanRoof: true });
        if (side === 3) this.building(H + 6, along, 12, seg, h, st, { cleanRoof: true });
      }
    }
    // corner fillers
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) this.building(sx * (H + 6), sz * (H + 6), 12, 12, 52, 1, { cleanRoof: true });
    this.signs();

    // ===== HUB: spire + spiral ramp + deck =====
    this.bbox(0, 0, 0, 10, 62, 10, 'glass', { us: 4, vs: 4 });
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) this.neon(sx * 5.06, 31, sz * 5.06, 0.16, 62, 0.16, 'nRed');
    for (let y = 6; y < 62; y += 8) { this.neon(0, y, 5.06, 10.1, 0.08, 0.08, 'nCyan'); this.neon(0, y, -5.06, 10.1, 0.08, 0.08, 'nCyan'); this.neon(5.06, y, 0, 0.08, 0.08, 10.1, 'nCyan'); this.neon(-5.06, y, 0, 0.08, 0.08, 10.1, 'nCyan'); }
    // deck at 24m
    const deckY = 24;
    const deck = new THREE.CylinderGeometry(11.3, 11.3, 1, 48); _m.makeTranslation(0, deckY - 0.5, 0);
    this.add(deck, _m, 'panelC');
    const deckRing = new THREE.TorusGeometry(11.35, 0.1, 6, 96); deckRing.rotateX(Math.PI / 2); _m.makeTranslation(0, deckY + 0.02, 0);
    this.add(deckRing, _m, 'nRed', { collide: false, shadow: false });
    // spiral: 1.5 turns from ground to deck
    const spiral = helixFrames(13.6, Math.PI * 0.5, Math.PI * 0.5 + Math.PI * 3, 0.02, deckY, 120, (a, t) => -0.22 * Math.min(1, t * 12, (1 - t) * 12));
    this.add(sweepStrip(spiral, 5, 0.6, { us: 5, vs: 4 }), null, 'ramp', { flags: SURF.GRAPPLE });
    // spiral edge neon + supports
    for (let i = 0; i < spiral.length - 1; i += 1) {
      const f = spiral[i], g2 = spiral[i + 1];
      this.strip(f.p.clone().addScaledVector(f.r, 2.48).addScaledVector(f.u, 0.03), g2.p.clone().addScaledVector(g2.r, 2.48).addScaledVector(g2.u, 0.03), 0.07, 'nCyan');
      if (i % 10 === 5 && f.p.y > 3) this.bbox(f.p.x, 0, f.p.z, 0.8, f.p.y - 0.6, 0.8, 'metal', { flags: SURF.GRAPPLE });
    }
    this.pad(7.5, 0, deckY, 34);
    this.pad(-7.5, 0, deckY, 34);

    // ===== THE LOOP: a wavy banked ring — touches the ground at 4 points, crests at 7m between them =====
    const ringR = 55, ringH = 7.2;
    const hFn = (a) => 0.02 + ringH * Math.pow(Math.sin(2 * a), 2);
    const bank = (a) => -0.26 * Math.pow(Math.sin(2 * a), 2);
    const ringFrames = curveFrames(ringR, 0, Math.PI * 2, 192, hFn, bank, true);
    this.add(sweepStrip(ringFrames, 9, 0.8, { closed: true, us: 9, vs: 6 }), null, 'road', { flags: SURF.GRAPPLE });
    this.ringH = hFn; this.ringR = ringR;
    for (let i = 0; i < ringFrames.length; i++) {
      const f = ringFrames[i], g2 = ringFrames[(i + 1) % ringFrames.length];
      for (const s of [-1, 1]) this.strip(f.p.clone().addScaledVector(f.r, s * 4.45).addScaledVector(f.u, 0.05), g2.p.clone().addScaledVector(g2.r, s * 4.45).addScaledVector(g2.u, 0.05), 0.1, s > 0 ? 'nRed' : 'nAmber');
      if (i % 8 === 4 && f.p.y > 2.2) { const pp = f.p; this.bbox(pp.x, 0, pp.z, 1.4, pp.y - 0.85, 1.4, 'concrete', { flags: SURF.GRAPPLE }); }
    }
    // boost strips on the four low points (CCW direction)
    for (let k = 0; k < 4; k++) {
      const a = k * Math.PI / 2;
      const T = new THREE.Vector3(-Math.sin(a), 0, Math.cos(a));
      this.boost(Math.cos(a) * ringR, Math.sin(a) * ringR, Math.atan2(T.x, T.z), 0.06);
    }

    // ===== INNER PLAZA (r 18..48) =====
    for (let k = 0; k < 4; k++) {
      const a = k * Math.PI / 2 + Math.PI / 4;
      // jump pads
      this.pad(Math.cos(a) * 24, Math.sin(a) * 24);
      // wallrun slab pairs (tangential)
      const a2 = a + Math.PI / 4;
      const cx = Math.cos(a2) * 34, cz = Math.sin(a2) * 34;
      const tang = a2 + Math.PI / 2;
      for (const s of [-1, 1]) {
        const ox = Math.cos(a2) * s * 4.2, oz = Math.sin(a2) * s * 4.2;
        this.box(cx + ox, 5, cz + oz, 1.2, 10, 22, k % 2 ? 'panel' : 'panelC', { ry: -tang + Math.PI / 2, us: 4, vs: 4 });
        // neon top edge
        this.box(cx + ox, 10.05, cz + oz, 1.25, 0.1, 22.05, k % 2 ? 'nRed' : 'nCyan', { ry: -tang + Math.PI / 2, collide: false, shadow: false });
      }
      // kicker ramps toward the slabs
      const kx = Math.cos(a2) * 34 + Math.cos(tang) * 17, kz = Math.sin(a2) * 34 + Math.sin(tang) * 17;
      this.wedgeAt(kx, kz, Math.atan2(-Math.cos(tang), -Math.sin(tang)), 5, 7, 2.4);
      // cover blocks (kept out of kicker lanes and the trial start)
      for (let i = 0; i < 3; i++) {
        const aa = a + (R() - 0.5) * 0.9, rr = 28 + R() * 16;
        const x = Math.cos(aa) * rr, z = Math.sin(aa) * rr;
        if (Math.abs(rr - 34) < 6) continue;
        if (this.laneBlock(x, z)) continue;
        this.bbox(x, 0, z, 2 + R() * 3, 1.2 + R() * 1.8, 2 + R() * 3, R() < 0.5 ? 'panel' : 'red', { ry: R() * 3, flags: SURF.GRAPPLE });
      }
      this.spawnGround.push(new THREE.Vector3(Math.cos(a) * 40, 0, Math.sin(a) * 40));
      this.spawnGround.push(new THREE.Vector3(Math.cos(a2) * 22, 0, Math.sin(a2) * 22));
    }
    // ===== DISTRICTS =====
    this.districtNorthAlleys();
    this.districtSouthSkate();
    this.districtEastPort();
    this.districtWestMarket();
    this.districtCorners();

    // ===== landmarks: spire sky-beam, sweeping searchlights, plaza emblem =====
    const beamMat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
      uniforms: { color: { value: new THREE.Color(1.6, 0.12, 0.25) }, time: { value: 0 } },
      vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
      fragmentShader: `varying vec2 vUv; uniform vec3 color; uniform float time; void main(){ float a = (1.0 - vUv.y) * (0.6 + 0.4*sin(vUv.y*40.0 - time*6.0)); a *= smoothstep(0.0, 0.25, vUv.x) * smoothstep(1.0, 0.75, vUv.x); gl_FragColor = vec4(color, a * 0.5); }`
    });
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 2.6, 400, 24, 1, true), beamMat);
    beam.position.y = 62 + 200; this.scene.add(beam);
    const lights = [];
    for (let k = 0; k < 4; k++) {
      const m = beamMat.clone(); m.uniforms.color.value = new THREE.Color(k % 2 ? 0.25 : 0.9, k % 2 ? 0.8 : 0.15, k % 2 ? 1.1 : 0.3);
      const cone = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 9, 260, 20, 1, true), m);
      cone.geometry.translate(0, 130, 0);
      const piv = new THREE.Group(); piv.position.set((k < 2 ? -1 : 1) * 132, 52, (k % 2 ? -1 : 1) * 132); piv.add(cone); this.scene.add(piv);
      lights.push({ piv, ph: k * 1.7 });
    }
    this.animated.push(t => { beamMat.uniforms.time.value = t; lights.forEach(l => { l.piv.rotation.set(0.5 + Math.sin(t * 0.21 + l.ph) * 0.25, t * 0.13 + l.ph, Math.sin(t * 0.17 + l.ph) * 0.3); l.piv.children[0].material.uniforms.time.value = t; }); });
    // emblem painted around the spire base
    {
      const c = document.createElement('canvas'); c.width = c.height = 1024; const g = c.getContext('2d');
      g.translate(512, 512); g.strokeStyle = 'rgba(255,42,72,0.85)'; g.lineWidth = 14; g.beginPath(); g.arc(0, 0, 480, 0, Math.PI * 2); g.stroke();
      g.lineWidth = 4; g.beginPath(); g.arc(0, 0, 440, 0, Math.PI * 2); g.stroke();
      g.font = '900 64px Orbitron, sans-serif'; g.fillStyle = 'rgba(255,42,72,0.8)'; g.textAlign = 'center';
      const txt = 'REDSHIFT · VELOCITY IS THE BLADE · 赤線 · ';
      for (let i = 0; i < txt.length; i++) { g.save(); g.rotate(i / txt.length * Math.PI * 2); g.fillText(txt[i], 0, -365); g.restore(); }
      for (let i = 0; i < 24; i++) { g.save(); g.rotate(i / 24 * Math.PI * 2); g.fillStyle = 'rgba(48,224,255,0.6)'; g.fillRect(-6, -300, 12, 40); g.restore(); }
      const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
      const em = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, color: new THREE.Color(1.3, 1.3, 1.3), polygonOffset: true, polygonOffsetFactor: -2 }));
      em.rotation.x = -Math.PI / 2; em.position.y = 0.03; this.scene.add(em);
    }

    // ===== hologram rings around the spire top =====
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(9, 0.18, 10, 128), new THREE.MeshBasicMaterial({ color: new THREE.Color(C.RED).multiplyScalar(3) }));
    ring1.position.y = 66; this.scene.add(ring1);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(12, 0.1, 8, 128), new THREE.MeshBasicMaterial({ color: new THREE.Color(C.CYAN).multiplyScalar(3) }));
    ring2.position.y = 70; this.scene.add(ring2);
    this.animated.push(t => { ring1.rotation.set(Math.PI / 2 + Math.sin(t * 0.4) * 0.15, 0, t * 0.3); ring2.rotation.set(Math.PI / 2.4, t * 0.2, -t * 0.5); });

    // time-trial course
    this.course();
  }

  districtNorthAlleys() {
    // z in [-118, -68]; tall parallel blocks along x with 7m alleys → wallrun chains
    const R = this.R;
    const z0 = -76, rows = [[-94, 9], [-110, 9]];
    for (let x = -66; x <= 66; x += 33) {
      if (Math.abs(x) < 20) continue;
      this.building(x, -88, 24, 10, 18 + R() * 14, (x / 33 | 0) & 3, { sign: R() < 0.4 ? ['赤線', '夜市', 'KATANA', '네온'][R() * 4 | 0] : null, signColor: ['#ff2a48', '#30e0ff', '#ff40c0'][R() * 3 | 0], signFace: 0 });
      this.building(x + 4, -106, 24, 8, 26 + R() * 18, ((x / 33 | 0) + 1) & 3);
      this.spawnGround.push(new THREE.Vector3(x + 16, 0, -97));
    }
    // central alley gate: two long walls forming a 7m corridor running along z toward the plaza
    for (const s of [-1, 1]) {
      this.bbox(s * 4.6, 0, -96, 1.6, 16, 40, 'fac' + (s > 0 ? 1 : 2), { us: 16, vs: 32 });
      this.neon(s * 4.6 - s * 0.82, 16, -96, 0.1, 0.1, 40, s > 0 ? 'nCyan' : 'nRed');
      this.neon(s * 4.6 - s * 0.82, 8, -96, 0.1, 0.1, 40, 'nPink');
    }
    // rooftop bridges between rows
    for (let x = -66; x <= 66; x += 66) {
      if (x === 0) continue;
      this.bbox(x, 17.5, -97, 3, 0.5, 9, 'red');
      this.neon(x - 1.5, 18.05, -97, 0.08, 0.08, 9, 'nRed'); this.neon(x + 1.5, 18.05, -97, 0.08, 0.08, 9, 'nRed');
    }
    // street-level kicker into the corridor and a ramp onto the first roof row
    this.wedgeAt(0, -62, Math.PI, 6, 8, 2.2);
    this.wedgeAt(-50, -64, Math.PI, 6, 18, 9, 'ramp');
    this.bbox(-50, 0, -88, 7, 9, 10, 'panel', { us: 4, vs: 4 });
  }

  districtSouthSkate() {
    // z in [68, 118]: halfpipe, quarter pipes, kickers, bowl walls
    // big halfpipe along x
    this.quarterPipe(-34, 108, 0, 7, 22, 'road');
    this.quarterPipe(-34, 84, Math.PI, 7, 22, 'road');
    this.bbox(-34, 0, 96, 22, 0.05, 10, 'road', { collide: false });
    // quarter pipes facing the plaza
    this.quarterPipe(26, 114, 0, 9, 26, 'road');
    this.quarterPipe(66, 114, 0, 6, 18, 'road');
    // kickers and funbox
    this.wedgeAt(20, 92, 0, 6, 8, 2.8);
    this.wedgeAt(48, 92, Math.PI, 6, 8, 2.8);
    this.bbox(34, 0, 92, 12, 2.8, 8, 'panel', { flags: SURF.GRAPPLE });
    this.wedgeAt(34, 102, Math.PI, 12, 6, 2.8);
    this.wedgeAt(34, 82, 0, 12, 6, 2.8);
    // rails (thin, grapple)
    this.bbox(-4, 0, 96, 0.3, 1.1, 18, 'metal', { flags: SURF.GRAPPLE });
    this.neon(-4, 1.15, 96, 0.12, 0.08, 18, 'nAmber');
    // tall billboard frame (grapple anchor)
    this.bbox(-70, 0, 100, 1, 26, 1, 'metal'); this.bbox(-58, 0, 100, 1, 26, 1, 'metal');
    this.bbox(-64, 22, 100, 14, 6, 0.6, 'dark');
    this.billboard(-64, 25, 99.6, 13.5, 5.4, 'REDSHIFT', '#ff2a48', Math.PI);
    // side buildings
    this.building(74, 92, 10, 12, 10, 2, { sign: 'SKATE', signColor: '#ffa020', signFace: 3 });
    this.spawnGround.push(new THREE.Vector3(10, 0, 100), new THREE.Vector3(-60, 0, 80), new THREE.Vector3(60, 0, 80));
  }

  districtEastPort() {
    // x in [68, 118]: container stacks, a crane
    const R = this.R;
    for (let i = 0; i < 22; i++) {
      const x = 74 + (i % 4) * 11 + (R() - 0.5) * 2, z = -50 + Math.floor(i / 4) * 18 + (R() - 0.5) * 3;
      if (Math.hypot(x, z) < 66 || (Math.abs(x - 104) < 8 && Math.abs(z - 8) < 8)) continue;
      const stack = 1 + (R() * 3 | 0);
      const yaw = R() < 0.5 ? 0 : Math.PI / 2;
      for (let s = 0; s < stack; s++) this.container(x + (R() - 0.5) * 0.4, s * 2.6, z + (R() - 0.5) * 0.4, yaw + (R() - 0.5) * 0.05);
      if (stack >= 2) this.spawnHigh.push(new THREE.Vector3(x, stack * 2.6, z));
    }
    // crane
    const cx = 104, cz = 8;
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) this.bbox(cx + sx * 3, 0, cz + sz * 3, 0.8, 34, 0.8, 'red');
    this.bbox(cx, 34, cz, 7, 2, 7, 'red');
    this.box(cx - 20, 37, cz, 50, 1.6, 2.4, 'red', { flags: SURF.GRAPPLE | SURF.WALLRUN });
    this.neon(cx - 20, 37.85, cz, 50, 0.1, 0.1, 'nAmber');
    this.bbox(cx - 5, 34, cz, 4, 7, 4, 'panel');
    this.spawnHigh.push(new THREE.Vector3(cx, 36, cz));
    // ramp up onto containers
    this.wedgeAt(75.6, -60, Math.PI / 2, 6, 10, 2.6);
    this.container(88.6, 0, -60, Math.PI / 2, 1); this.container(97, 0, -60, Math.PI / 2, 3); this.container(97, 2.6, -60, Math.PI / 2, 0);
    this.spawnGround.push(new THREE.Vector3(80, 0, -20), new THREE.Vector3(96, 0, 40), new THREE.Vector3(86, 0, 60));
  }

  districtWestMarket() {
    // x in [-118, -68]: low buildings with ramps & bridges (rooftop parkour)
    const R = this.R;
    const blocks = [[-80, -40, 12, 14, 5], [-98, -40, 14, 14, 8], [-82, -12, 12, 12, 6.5], [-100, -14, 12, 16, 11], [-80, 16, 12, 12, 4],
    [-98, 18, 14, 14, 7.5], [-82, 44, 12, 14, 9], [-102, 46, 12, 14, 13]];
    blocks.forEach(([x, z, w, d, h], i) => {
      this.building(x, z, w, d, h, i & 3, { cleanRoof: i % 2 === 0, sign: i % 3 === 0 ? ['ラーメン', '열혈', 'OPEN 24H'][i % 3 === 0 ? (i / 3) % 3 : 0] : null, signColor: '#ffa020', signFace: 1 });
      // awning
      this.box(x + w / 2 + 1.2, 3.2, z, 2.4, 0.15, d * 0.8, 'red', { rz: -0.25, flags: SURF.GRAPPLE });
      this.neon(x + w / 2 + 2.35, 2.92, z, 0.08, 0.08, d * 0.8, 'nAmber');
    });
    // ramps & bridges
    this.wedgeAt(-80, -57, 0, 6, 10, 5.5);
    this.bbox(-89, 7, -40, 6, 0.4, 3, 'metal');
    this.wedgeAt(-82, 7, Math.PI, 6, 13, 7);
    this.bbox(-88, 6.2, 18, 4, 0.4, 3, 'metal');
    this.bbox(-91, 10, 45, 8, 0.4, 3, 'metal');
    this.spawnGround.push(new THREE.Vector3(-74, 0, 0), new THREE.Vector3(-74, 0, 30), new THREE.Vector3(-90, 0, -26));
  }

  districtCorners() {
    const R = this.R;
    const corners = [[-1, -1], [1, -1], [-1, 1], [1, 1]];
    corners.forEach(([sx, sz], ci) => {
      const cx = sx * 98, cz = sz * 98;
      // main tower
      const h = 42 + ci * 6;
      this.building(cx, cz, 18, 18, h, ci, { sign: ['REDSHIFT', 'VELOCITY', '赤線', 'NO LIMIT'][ci], signColor: ['#ff2a48', '#30e0ff', '#ff40c0', '#ffa020'][ci], signFace: sx > 0 ? 3 : 1 });
      // twin slab with a wallrun gap
      const gx = cx - sx * 15, gz = cz;
      this.building(gx, gz, 6, 18, h * 0.6, (ci + 1) & 3, { cleanRoof: true });
      // step block toward the center
      this.building(cx, cz - sz * 16, 14, 8, h * 0.35, (ci + 2) & 3);
      this.spawnHigh.push(new THREE.Vector3(cx, h + 0.55, cz));
      this.spawnGround.push(new THREE.Vector3(cx - sx * 22, 0, cz - sz * 22));
    });
  }

  billboard(x, y, z, w, h, text, color, ry) {
    const t = signTexture(text, color, { w: 1024, h: 384, font: '900 190px "Orbitron",sans-serif' });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: t, toneMapped: false, color: new THREE.Color(1.5, 1.5, 1.5) }));
    m.position.set(x, y, z); m.rotation.y = ry; this.scene.add(m);
  }

  signs() {
    const H = this.half;
    // giant holo signs on the boundary walls facing in
    const list = [[0, 30, -H + 0.3, 0, 'REDSHIFT', '#ff2a48'], [0, 30, H - 0.3, Math.PI, 'VELOCITY', '#30e0ff'], [-H + 0.3, 30, 0, Math.PI / 2, '赤線', '#ff40c0'], [H - 0.3, 30, 0, -Math.PI / 2, 'NO LIMIT', '#ffa020']];
    for (const [x, y, z, ry, text, col] of list) {
      const t = signTexture(text, col, { w: 1024, h: 256 });
      const m = new THREE.Mesh(new THREE.PlaneGeometry(36, 9), new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false, color: new THREE.Color(1.8, 1.8, 1.8) }));
      m.position.set(x, y, z); m.rotation.y = ry; this.scene.add(m);
      const ph = x + z;
      this.animated.push(tt => { m.material.opacity = 0.85 + 0.15 * Math.sin(tt * 3 + ph); });
    }
  }

  course() {
    // ordered checkpoints that walk the player through every technique
    this.trialStart = { pos: new THREE.Vector3(-26, 0.05, 34), yaw: -Math.PI / 2 };
    const pts = [
      [0, 4, 34],                       // kicker → wallrun slab corridor
      [0, 2.2, 55],                     // drop onto the wavy loop at a low point
      [-38.9, 9.4, 38.9], [-55, 2.2, 0], [-38.9, 9.4, -38.9], // ride the crests and dips
      [0, 3.5, -70], [0, 7, -96], [-12, 3.5, -119],     // alley corridor wallrun
      [-33, 4, -97.5],                  // wallrun alley between rows
      [-66, 20, -97],                   // rooftop bridge (grapple)
      [-98, 47.5, -98],                 // tower top
      [-80, 7.5, -40], [-82, 9, -12],   // market rooftops
      [-64, 30, 100],                   // billboard (grapple)
      [-34, 4, 96],                     // halfpipe
      [26, 10, 110],                    // big quarter pipe
      [34, 6, 92],                      // funbox
      [90, 40, 8],                      // crane boom
      [90, 6, -32],                     // containers
      [13.6, 13.5, 0],                  // spiral
      [0, 26.5, -8],                    // finish on the deck
    ];
    this.checkpoints = pts.map(([x, y, z]) => new THREE.Vector3(x, y, z));
  }

  finalize() {
    const Q = this.Q;
    for (const [key, b] of this.batches) {
      const merged = mergeGeometries(b.geos, false);
      b.geos.forEach(g => g.dispose());
      const mesh = new THREE.Mesh(merged, this.M[key]);
      mesh.castShadow = b.shadow && Q.shadows && key !== 'ground';
      mesh.receiveShadow = !this.neonKeys.includes(key) && !key.startsWith('n');
      mesh.matrixAutoUpdate = false; mesh.updateMatrix();
      this.scene.add(mesh);
    }
    this.batches.clear();
    this.col.build();
  }

  update(t, dt) { for (const f of this.animated) f(t, dt); }
}

function containerTex(color, seed) {
  const c = document.createElement('canvas'); c.width = 512; c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = color; g.fillRect(0, 0, 512, 256);
  for (let x = 0; x < 512; x += 16) { g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(x, 0, 6, 256); g.fillStyle = 'rgba(255,255,255,0.06)'; g.fillRect(x + 7, 0, 2, 256); }
  g.strokeStyle = 'rgba(0,0,0,0.6)'; g.lineWidth = 10; g.strokeRect(5, 5, 502, 246);
  g.fillStyle = 'rgba(255,255,255,0.75)'; g.font = '700 34px monospace'; g.fillText(['RDSH', 'NEON', 'AKSN', 'VELO', 'KTNA'][seed % 5] + ' ' + (1000 + seed * 137) % 9999, 30, 60);
  for (let i = 0; i < 300; i++) { g.fillStyle = `rgba(60,30,10,${Math.random() * 0.25})`; g.fillRect(Math.random() * 512, Math.random() * 256, 3 + Math.random() * 12, 2 + Math.random() * 6); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8;
  return t;
}
