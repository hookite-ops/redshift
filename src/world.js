import * as THREE from 'three';

// Seeded RNG so the map is identical every run
function rng(seed) {
  let s = seed >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

function windowTexture(seed, lit = 0.35, hue = 'warm') {
  const c = document.createElement('canvas'); c.width = 256; c.height = 512;
  const g = c.getContext('2d');
  const r = rng(seed);
  g.fillStyle = '#07070b'; g.fillRect(0, 0, 256, 512);
  const cols = 8, rows = 24;
  for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
    const on = r() < lit;
    let col;
    if (!on) col = `rgba(30,32,45,${0.5 + r() * 0.4})`;
    else {
      const p = r();
      if (hue === 'warm') col = p < 0.6 ? `rgba(255,${170 + r() * 60 | 0},${110 + r() * 60 | 0},1)` : p < 0.85 ? 'rgba(255,60,70,1)' : 'rgba(120,220,255,1)';
      else col = p < 0.6 ? 'rgba(120,200,255,1)' : p < 0.85 ? 'rgba(255,50,80,1)' : 'rgba(255,240,220,1)';
    }
    g.fillStyle = col;
    g.fillRect(x * 32 + 5, y * 21 + 4, 22, 13);
  }
  // horizontal floor bands
  g.fillStyle = 'rgba(0,0,0,0.6)';
  for (let y = 0; y < rows; y += 4) g.fillRect(0, y * 21, 256, 3);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

function groundTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 1024;
  const g = c.getContext('2d');
  g.fillStyle = '#121218'; g.fillRect(0, 0, 1024, 1024);
  const r = rng(77);
  for (let i = 0; i < 6000; i++) {
    g.fillStyle = `rgba(${r() * 60 | 0},${r() * 60 | 0},${r() * 70 | 0},${r() * 0.25})`;
    g.fillRect(r() * 1024, r() * 1024, r() * 4, r() * 4);
  }
  g.strokeStyle = 'rgba(255,40,60,0.55)'; g.lineWidth = 3;
  for (let i = 0; i <= 1024; i += 256) {
    g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 1024); g.stroke();
    g.beginPath(); g.moveTo(0, i); g.lineTo(1024, i); g.stroke();
  }
  g.strokeStyle = 'rgba(120,130,160,0.15)'; g.lineWidth = 1;
  for (let i = 0; i <= 1024; i += 64) {
    g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 1024); g.stroke();
    g.beginPath(); g.moveTo(0, i); g.lineTo(1024, i); g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 16;
  return t;
}

function emissiveFromMap(tex) {
  return tex; // window texture doubles as emissive map
}

function panelTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#1b1c24'; g.fillRect(0, 0, 256, 256);
  g.strokeStyle = '#2c2e3a'; g.lineWidth = 4; g.strokeRect(2, 2, 252, 252);
  g.strokeStyle = '#25262f'; g.lineWidth = 2;
  g.strokeRect(20, 20, 216, 216);
  g.fillStyle = '#ff2a44'; g.fillRect(0, 248, 256, 8);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export class World {
  constructor(scene, quality) {
    this.scene = scene;
    this.colliders = []; // {min, max, mesh?}
    this.jumpPads = [];
    this.spawnPoints = [];
    this.animated = [];
    this.size = 170;
    this.build(quality);
  }

  addBox(x, y, z, w, h, d, mat, opts = {}) {
    const geo = new THREE.BoxGeometry(w, h, d);
    if (opts.uvScale) {
      // scale UVs to world size so windows stay square
      const uv = geo.attributes.uv, pos = geo.attributes.position, nrm = geo.attributes.normal;
      for (let i = 0; i < uv.count; i++) {
        const nx = Math.abs(nrm.getX(i)), ny = Math.abs(nrm.getY(i));
        const px = pos.getX(i) + w / 2, py = pos.getY(i) + h / 2, pz = pos.getZ(i) + d / 2;
        let u, v;
        if (ny > 0.5) { u = px; v = pz; } else if (nx > 0.5) { u = pz; v = py; } else { u = px; v = py; }
        uv.setXY(i, u / opts.uvScale[0], v / opts.uvScale[1]);
      }
    }
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y + h / 2, z);
    m.castShadow = opts.cast !== false; m.receiveShadow = true;
    this.scene.add(m);
    if (opts.collide !== false) {
      this.colliders.push({
        min: new THREE.Vector3(x - w / 2, y, z - d / 2),
        max: new THREE.Vector3(x + w / 2, y + h, z + d / 2),
        mesh: m, wallrun: opts.wallrun !== false
      });
    }
    return m;
  }

  neonStrip(x, y, z, w, h, d, color) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshBasicMaterial({ color }));
    m.position.set(x, y, z);
    this.scene.add(m);
    return m;
  }

  build(q) {
    const S = this.scene, R = rng(1337);
    const half = this.size / 2;

    // ---------- Sky ----------
    const skyGeo = new THREE.SphereGeometry(900, 48, 24);
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: { time: { value: 0 } },
      vertexShader: `varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
      fragmentShader: `
        varying vec3 vP; uniform float time;
        float h(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,45.164)))*43758.5453); }
        void main(){
          float y = vP.y;
          vec3 top = vec3(0.01,0.008,0.03);
          vec3 mid = vec3(0.10,0.015,0.05);
          vec3 hor = vec3(0.55,0.06,0.10);
          vec3 c = mix(hor, mid, smoothstep(-0.02, 0.18, y));
          c = mix(c, top, smoothstep(0.15, 0.7, y));
          // giant red sun
          vec3 sd = normalize(vec3(0.0, 0.18, -1.0));
          float d = dot(vP, sd);
          float sun = smoothstep(0.9935, 0.995, d);
          float bands = step(0.5, fract((vP.y - 0.12) * 90.0)) ;
          float lowHalf = smoothstep(0.2, 0.12, vP.y);
          sun *= mix(1.0, bands, lowHalf);
          c += vec3(1.6,0.12,0.18) * sun;
          c += vec3(0.9,0.05,0.1) * pow(max(d,0.0), 60.0) * 0.6;
          // stars
          vec3 sp = floor(vP * 300.0);
          float st = step(0.997, h(sp)) * smoothstep(0.1, 0.5, y);
          c += vec3(st) * (0.5 + 0.5*sin(time*2.0 + h(sp)*40.0));
          gl_FragColor = vec4(c, 1.0);
        }`
    });
    this.sky = new THREE.Mesh(skyGeo, skyMat);
    S.add(this.sky);

    S.fog = new THREE.FogExp2(0x1a0610, 0.0058);

    // ---------- Lights ----------
    S.add(new THREE.HemisphereLight(0x6a5aa0, 0x200810, 0.55));
    const sun = new THREE.DirectionalLight(0xff8a8a, 1.6);
    sun.position.set(60, 120, -140);
    sun.castShadow = q.shadows;
    if (q.shadows) {
      sun.shadow.mapSize.set(q.shadowSize, q.shadowSize);
      const sc = sun.shadow.camera; sc.left = -110; sc.right = 110; sc.top = 110; sc.bottom = -110; sc.near = 10; sc.far = 400;
      sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.04;
    }
    S.add(sun); S.add(sun.target);
    this.sunLight = sun;
    const fill = new THREE.DirectionalLight(0x40c8ff, 0.35); fill.position.set(-80, 40, 100); S.add(fill);

    // ---------- Ground ----------
    const gt = groundTexture(); gt.repeat.set(this.size / 32, this.size / 32);
    const groundMat = new THREE.MeshStandardMaterial({ map: gt, roughness: 0.35, metalness: 0.55, color: 0xbbbbcc });
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(this.size * 3, this.size * 3), groundMat);
    gt.repeat.set(this.size * 3 / 32, this.size * 3 / 32);
    ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; S.add(ground);
    this.colliders.push({ min: new THREE.Vector3(-999, -10, -999), max: new THREE.Vector3(999, 0, 999), wallrun: false, ground: true });

    // ---------- Materials ----------
    const winTex = [windowTexture(1, 0.22, 'warm'), windowTexture(2, 0.18, 'cool'), windowTexture(3, 0.3, 'warm')];
    const bMats = winTex.map(t => new THREE.MeshStandardMaterial({
      map: t, emissiveMap: t, emissive: 0xffffff, emissiveIntensity: 0.75, roughness: 0.55, metalness: 0.4
    }));
    const pt = panelTexture();
    const panelMat = new THREE.MeshStandardMaterial({ map: pt, roughness: 0.6, metalness: 0.5 });
    const darkMetal = new THREE.MeshStandardMaterial({ color: 0x24252e, roughness: 0.3, metalness: 0.9 });
    const redMetal = new THREE.MeshStandardMaterial({ color: 0x5a0a14, roughness: 0.35, metalness: 0.8, emissive: 0x200004 });
    const glass = new THREE.MeshStandardMaterial({ color: 0x0b1020, roughness: 0.05, metalness: 1.0, emissive: 0x050814 });

    const RED = 0xff2240, CYAN = 0x30e0ff, PINK = 0xff40c0, AMBER = 0xffa020;

    // ---------- Boundary walls (tall, wallrunnable) ----------
    const wallH = 40;
    const bw = [[0, -half, this.size, 4], [0, half, this.size, 4], [-half, 0, 4, this.size], [half, 0, 4, this.size]];
    bw.forEach(([x, z, w, d], i) => {
      const m = this.addBox(x, 0, z, w + (i < 2 ? 8 : 0), wallH, d, bMats[i % 3], { uvScale: [12, 24] });
      // neon bands
      for (let y of [6, 20, 39.6]) {
        const nx = x + (i === 2 ? 2.1 : i === 3 ? -2.1 : 0), nz = z + (i === 0 ? 2.1 : i === 1 ? -2.1 : 0);
        this.neonStrip(nx, y, nz, i < 2 ? this.size : 0.15, 0.25, i < 2 ? 0.15 : this.size, y === 20 ? CYAN : RED);
      }
    });

    // ---------- Central tower "Spire" ----------
    this.addBox(0, 0, 0, 14, 4, 14, darkMetal);
    this.addBox(0, 4, 0, 8, 26, 8, glass, { uvScale: [4, 4] });
    this.addBox(0, 30, 0, 14, 1.2, 14, panelMat, { uvScale: [4, 4] });
    for (const [cx, cz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) this.neonStrip(cx * 4.05, 17, cz * 4.05, 0.14, 26, 0.14, RED);
    for (let y = 8; y < 30; y += 7) this.neonStrip(0, y, 0, 8.12, 0.08, 8.12, CYAN);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(10, 0.25, 12, 96), new THREE.MeshBasicMaterial({ color: RED }));
    ring.rotation.x = Math.PI / 2; ring.position.y = 36; S.add(ring);
    this.animated.push(t => { ring.rotation.z = t * 0.3; ring.position.y = 36 + Math.sin(t) * 0.6; });
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(13, 0.12, 8, 96), new THREE.MeshBasicMaterial({ color: CYAN }));
    ring2.rotation.x = Math.PI / 2.3; ring2.position.y = 38; S.add(ring2);
    this.animated.push(t => { ring2.rotation.z = -t * 0.5; ring2.rotation.x = Math.PI / 2.3 + Math.sin(t * 0.7) * 0.2; });

    // ---------- Wallrun corridors: pairs of parallel slabs ----------
    const corridor = (cx, cz, len, gap, h, along, mat) => {
      for (const s of [-1, 1]) {
        const ox = along === 'x' ? 0 : s * gap / 2, oz = along === 'x' ? s * gap / 2 : 0;
        const w = along === 'x' ? len : 1.6, d = along === 'x' ? 1.6 : len;
        this.addBox(cx + ox, 0, cz + oz, w, h, d, mat, { uvScale: [12, 24] });
        this.neonStrip(cx + ox, h + 0.1, cz + oz, w + 0.1, 0.2, d + 0.1, s > 0 ? RED : CYAN);
      }
    };
    corridor(0, -48, 50, 9, 14, 'x', bMats[0]);
    corridor(0, 48, 50, 9, 14, 'x', bMats[1]);
    corridor(-48, 0, 50, 9, 14, 'z', bMats[2]);
    corridor(48, 0, 50, 9, 14, 'z', bMats[0]);

    // ---------- Corner skyscraper clusters ----------
    const corners = [[-1, -1], [1, -1], [-1, 1], [1, 1]];
    corners.forEach(([sx, sz], ci) => {
      const cx = sx * 58, cz = sz * 58;
      // main tower
      const h = 34 + ci * 4;
      this.addBox(cx, 0, cz, 16, h, 16, bMats[ci % 3], { uvScale: [12, 24] });
      this.neonStrip(cx, h + 0.15, cz, 16.3, 0.3, 16.3, ci % 2 ? CYAN : RED);
      // stepped roof deck
      this.addBox(cx - sx * 11, 0, cz, 6, h * 0.55, 10, bMats[(ci + 1) % 3], { uvScale: [12, 24] });
      this.addBox(cx, 0, cz - sz * 11, 10, h * 0.35, 6, bMats[(ci + 2) % 3], { uvScale: [12, 24] });
      // antenna
      const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.3, 14, 6), darkMetal);
      ant.position.set(cx + 4, h + 7, cz + 4); S.add(ant);
      const blink = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 8), new THREE.MeshBasicMaterial({ color: RED }));
      blink.position.set(cx + 4, h + 14.3, cz + 4); S.add(blink);
      this.animated.push(t => { blink.visible = Math.sin(t * 3 + ci) > 0; });
    });

    // ---------- Mid ring of platforms and pillars ----------
    for (let i = 0; i < 12; i++) {
      const a = i / 12 * Math.PI * 2 + 0.26;
      const r = 26 + (i % 2) * 6;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      const h = 3 + (i % 3) * 3.5;
      this.addBox(x, 0, z, 2.2, h, 2.2, darkMetal);
      this.addBox(x, h, z, 7, 0.8, 7, panelMat, { uvScale: [4, 4] });
      this.neonStrip(x, h + 0.82, z, 7.05, 0.06, 7.05, [RED, CYAN, PINK][i % 3]);
    }

    // ---------- Bridges between corner towers and spire ----------
    const bridge = (x1, z1, x2, z2, y, w) => {
      const dx = x2 - x1, dz = z2 - z1;
      if (Math.abs(dx) > Math.abs(dz)) this.addBox((x1 + x2) / 2, y, z1, Math.abs(dx), 0.8, w, redMetal);
      else this.addBox(x1, y, (z1 + z2) / 2, w, 0.8, Math.abs(dz), redMetal);
    };
    bridge(-50, -30, -8, -30, 18, 4);
    bridge(8, 30, 50, 30, 18, 4);
    bridge(30, -50, 30, -8, 22, 4);
    bridge(-30, 8, -30, 50, 22, 4);
    [[-29, -30, 'x'], [29, 30, 'x'], [30, -29, 'z'], [-30, 29, 'z']].forEach(([x, z, ax]) => {
      this.neonStrip(x, ax === 'x' ? 18.9 : 22.9, z, ax === 'x' ? 42 : 0.1, 0.08, ax === 'x' ? 0.1 : 42, PINK);
    });

    // ---------- Scattered cover blocks / crates ----------
    for (let i = 0; i < 40; i++) {
      let x = (R() - 0.5) * (this.size - 30), z = (R() - 0.5) * (this.size - 30);
      if (Math.abs(x) < 10 && Math.abs(z) < 10) continue;
      const w = 2 + R() * 4, h = 1.2 + R() * 3.5, d = 2 + R() * 4;
      if (this.overlaps(x, z, w, d)) continue;
      this.addBox(x, 0, z, w, h, d, R() < 0.5 ? panelMat : redMetal, { uvScale: [3, 3] });
    }

    // ---------- Floating platforms high up (grapple targets) ----------
    for (let i = 0; i < 10; i++) {
      const a = i / 10 * Math.PI * 2;
      const r = 40 + (i % 2) * 15;
      const x = Math.cos(a) * r, z = Math.sin(a) * r, y = 26 + (i % 3) * 6;
      if (this.overlaps(x, z, 6, 6, y)) continue;
      const p = this.addBox(x, y, z, 6, 1, 6, panelMat, { uvScale: [4, 4] });
      const under = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 0.1, 2.4, 6, 1, true), new THREE.MeshBasicMaterial({ color: CYAN, transparent: true, opacity: 0.25, side: THREE.DoubleSide, depthWrite: false }));
      under.position.set(x, y - 1.2, z); S.add(under);
      this.neonStrip(x, y + 1.03, z, 6.05, 0.05, 6.05, CYAN);
    }

    // ---------- Jump pads ----------
    const padGeo = new THREE.CylinderGeometry(1.6, 1.8, 0.35, 32);
    const padMat = new THREE.MeshStandardMaterial({ color: 0x103040, emissive: CYAN, emissiveIntensity: 2.2 });
    const padSpots = [[18, 0], [-18, 0], [0, 18], [0, -18], [70, 70], [-70, -70], [70, -70], [-70, 70], [36, 36], [-36, -36]];
    padSpots.forEach(([x, z]) => {
      if (this.overlaps(x, z, 3.6, 3.6)) return;
      const p = new THREE.Mesh(padGeo, padMat); p.position.set(x, 0.17, z); S.add(p);
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 10, 24, 1, true), new THREE.MeshBasicMaterial({ color: CYAN, transparent: true, opacity: 0.12, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
      beam.position.set(x, 5, z); S.add(beam);
      this.animated.push(t => { beam.material.opacity = 0.08 + 0.06 * Math.sin(t * 4 + x); });
      this.jumpPads.push({ x, z, r: 1.8 });
    });

    // ---------- Distant skyline (decor, no collision) ----------
    const skyMats = winTex.map(t => new THREE.MeshBasicMaterial({ map: t, fog: true, color: 0x9999aa }));
    for (let i = 0; i < 90; i++) {
      const a = R() * Math.PI * 2, r = 160 + R() * 220;
      const w = 12 + R() * 30, h = 40 + R() * 160;
      const geo = new THREE.BoxGeometry(w, h, w);
      const m = new THREE.Mesh(geo, skyMats[i % 3]);
      // stretch UVs
      const uv = geo.attributes.uv; for (let k = 0; k < uv.count; k++) uv.setXY(k, uv.getX(k) * w / 8, uv.getY(k) * h / 16);
      m.position.set(Math.cos(a) * r, h / 2, Math.sin(a) * r); S.add(m);
      if (R() < 0.4) this.neonStrip(m.position.x, h + 0.3, m.position.z, w + 0.3, 0.6, w + 0.3, [RED, CYAN, PINK, AMBER][i % 4]);
    }

    // ---------- Holo billboards ----------
    const holo = (x, y, z, ry, text, col) => {
      const c = document.createElement('canvas'); c.width = 512; c.height = 256;
      const g = c.getContext('2d');
      g.fillStyle = 'rgba(0,0,0,0)'; g.fillRect(0, 0, 512, 256);
      g.strokeStyle = col; g.lineWidth = 6; g.strokeRect(10, 10, 492, 236);
      g.font = '900 96px "Segoe UI", sans-serif'; g.fillStyle = col; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.shadowColor = col; g.shadowBlur = 30;
      g.fillText(text, 256, 128);
      for (let yy = 0; yy < 256; yy += 4) { g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(0, yy, 512, 2); }
      const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
      const m = new THREE.Mesh(new THREE.PlaneGeometry(16, 8), new THREE.MeshBasicMaterial({ map: t, transparent: true, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
      m.position.set(x, y, z); m.rotation.y = ry; S.add(m);
      this.animated.push(tt => { m.material.opacity = 0.75 + 0.25 * Math.sin(tt * 13 + x) * (Math.sin(tt * 0.7 + z) > 0.9 ? 1 : 0.1); });
    };
    holo(0, 28, -half + 2.6, 0, 'REDSHIFT', '#ff2a48');
    holo(0, 28, half - 2.6, Math.PI, 'VELOCITY', '#30e0ff');
    holo(-half + 2.6, 28, 0, Math.PI / 2, '赤線', '#ff40c0');
    holo(half - 2.6, 28, 0, -Math.PI / 2, 'NO LIMIT', '#ffa020');

    // ---------- Neon accent point lights ----------
    if (q.lights) {
      [[0, 6, 0, RED, 30], [-48, 8, 0, CYAN, 25], [48, 8, 0, RED, 25], [0, 8, -48, PINK, 25], [0, 8, 48, CYAN, 25]].forEach(([x, y, z, c, d]) => {
        const l = new THREE.PointLight(c, 60, d, 1.6); l.position.set(x, y, z); S.add(l);
      });
    }

    // ---------- Floating embers ----------
    const N = q.particles;
    const pg = new THREE.BufferGeometry();
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) { pos[i * 3] = (R() - 0.5) * this.size; pos[i * 3 + 1] = R() * 50; pos[i * 3 + 2] = (R() - 0.5) * this.size; }
    pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const pm = new THREE.PointsMaterial({ color: 0xff5060, size: 0.18, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false });
    const pts = new THREE.Points(pg, pm); S.add(pts);
    this.animated.push((t, dt) => {
      const a = pg.attributes.position.array;
      for (let i = 0; i < N; i++) {
        a[i * 3 + 1] += dt * (0.6 + (i % 7) * 0.15);
        a[i * 3] += Math.sin(t + i) * dt * 0.3;
        if (a[i * 3 + 1] > 50) a[i * 3 + 1] = 0;
      }
      pg.attributes.position.needsUpdate = true;
    });

    // ---------- Spawn points ----------
    for (let i = 0; i < 16; i++) {
      const a = i / 16 * Math.PI * 2;
      const r = 20 + (i % 4) * 16;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      if (!this.overlaps(x, z, 2, 2)) this.spawnPoints.push(new THREE.Vector3(x, 0, z));
    }
  }

  overlaps(x, z, w, d, y = 0) {
    for (const c of this.colliders) {
      if (c.ground) continue;
      if (x + w / 2 + 1 > c.min.x && x - w / 2 - 1 < c.max.x && z + d / 2 + 1 > c.min.z && z - d / 2 - 1 < c.max.z && y < c.max.y + 3 && y + 3 > c.min.y) return true;
    }
    return false;
  }

  update(t, dt) {
    this.sky.material.uniforms.time.value = t;
    for (const f of this.animated) f(t, dt);
  }

  // Ray vs all AABBs. Returns {dist, point, normal, collider} or null.
  raycast(origin, dir, maxDist) {
    let best = null, bestT = maxDist;
    for (const c of this.colliders) {
      const r = rayAABB(origin, dir, c.min, c.max, bestT);
      if (r && r.t < bestT) { bestT = r.t; best = { dist: r.t, normal: r.n, collider: c }; }
    }
    if (best) best.point = origin.clone().addScaledVector(dir, best.dist);
    return best;
  }
}

const _n = new THREE.Vector3();
export function rayAABB(o, d, mn, mx, maxT) {
  let tmin = 0, tmax = maxT, axis = -1, sign = 0;
  for (let i = 0; i < 3; i++) {
    const oi = i === 0 ? o.x : i === 1 ? o.y : o.z;
    const di = i === 0 ? d.x : i === 1 ? d.y : d.z;
    const lo = i === 0 ? mn.x : i === 1 ? mn.y : mn.z;
    const hi = i === 0 ? mx.x : i === 1 ? mx.y : mx.z;
    if (Math.abs(di) < 1e-8) { if (oi < lo || oi > hi) return null; continue; }
    let t1 = (lo - oi) / di, t2 = (hi - oi) / di, s = -1;
    if (t1 > t2) { const tmp = t1; t1 = t2; t2 = tmp; s = 1; }
    if (t1 > tmin) { tmin = t1; axis = i; sign = s; }
    if (t2 < tmax) tmax = t2;
    if (tmin > tmax) return null;
  }
  if (axis < 0) return null; // origin inside box
  const n = new THREE.Vector3(); n.setComponent(axis, sign);
  return { t: tmin, n };
}
