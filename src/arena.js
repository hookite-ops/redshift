// ARENA ENGINE — builds one of the maps in maps.js into merged meshes + a collision world, and can tear it
// down and build another one at any time (online rooms rotate maps between rounds).
// Every map is the same 100 m × 100 m walled square, so movement / bounds / bots work everywhere.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { CollisionWorld, SURF } from './physics.js';
import { uvBox, wedge } from './geom.js';
import { floorTextures, panelTextures, floorAO, graphiteTextures, ledBoardTexture, courtLogoTexture } from './textures.js';
import { MAPS } from './maps.js';

const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _p = new THREE.Vector3(), _s = new THREE.Vector3(1, 1, 1);

// emissive light strips: colour above 1.0 so the bloom pass makes them glow (and they stay bright without it)

// arena shading on top of PBR: walls darken toward the floor (fake ambient occlusion), the floor reads a baked
// contact-shadow map, so objects sit on the ground even on phones with shadows off
function shade(mat, { floor = false, aoU = null, E = 70, base = 0.6 } = {}) {
  mat.onBeforeCompile = sh => {
    sh.uniforms.rsAo = aoU || { value: null }; // shared object: a new map swaps the texture in place sh.uniforms.rsE = { value: E };
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vRsW;')
      .replace('#include <project_vertex>', '#include <project_vertex>\nvRsW = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vRsW;\nuniform sampler2D rsAo; uniform float rsE;')
      .replace('#include <map_fragment>', '#include <map_fragment>\n' + (floor
        ? 'diffuseColor.rgb *= mix(0.42, 1.0, texture2D(rsAo, vRsW.xz / (2.0 * rsE) + 0.5).r);'
        : `diffuseColor.rgb *= mix(${base.toFixed(2)}, 1.0, smoothstep(0.0, 1.6, vRsW.y)) * mix(0.9, 1.0, smoothstep(0.0, 9.0, vRsW.y));`));
  };
  mat.customProgramCacheKey = () => (floor ? 'rsfloor' : 'rswall' + base);
  return mat;
}

export class Arena {
  constructor(scene, Q) {
    this.scene = scene; this.Q = Q;
    this.col = new CollisionWorld(90, 4);
    this.half = 50;
    this.objects = [];
    const hi = Q.shadows, S = hi ? 1024 : 512;
    const fl = floorTextures(S), pn = panelTextures(S), gr = graphiteTextures(hi ? 512 : 256);
    const panel = (color, ns = 0.5) => new THREE.MeshStandardMaterial({ color, map: pn.map, normalMap: pn.normalMap, normalScale: new THREE.Vector2(ns, ns), roughnessMap: pn.roughnessMap, roughness: 0.95, metalness: 0, envMapIntensity: 0.7 });
    const graphite = (color = 0xffffff, rough = 0.9, metal = 0.35) => new THREE.MeshStandardMaterial({ color, map: gr.map, roughnessMap: gr.roughnessMap, roughness: rough, metalness: metal, envMapIntensity: 1.1 });
    this.ledTex = ledBoardTexture('WHITE ARENA');
    this.logoTex = courtLogoTexture(hi ? 1024 : 512);
    this.M = {
      // polished resin court: satin, reflects the sky and the light strips
      floor: new THREE.MeshStandardMaterial({ color: 0xe6e8ec, map: fl.map, normalMap: fl.normalMap, normalScale: new THREE.Vector2(0.6, 0.6), roughnessMap: fl.roughnessMap, roughness: 0.85, metalness: 0.05, envMapIntensity: 1.25 }),
      wall: shade(panel(0xf6f6f4), { base: 0.72 }),
      block: shade(panel(0xffffff), { base: 0.7 }),
      top: shade(panel(0xd9dce1), { base: 0.72 }),
      ramp: shade(new THREE.MeshStandardMaterial({ color: 0xc9ccd2, map: fl.map, normalMap: fl.normalMap, roughnessMap: fl.roughnessMap, roughness: 1, metalness: 0.05 }), { base: 0.75 }),
      dark: shade(graphite(), { base: 0.85 }),
      stand: new THREE.MeshStandardMaterial({ color: 0x8b929d, roughness: 0.75, metalness: 0.1 }),
      canopy: panel(0xeef0f2),
      glass: new THREE.MeshStandardMaterial({ color: 0x2a3a4e, roughness: 0.12, metalness: 0.9, envMapIntensity: 1.6 }),
      glow: new THREE.MeshBasicMaterial({ color: 0xffffff }),
      glowSoft: new THREE.MeshBasicMaterial({ color: 0xffffff }),
      white: new THREE.MeshBasicMaterial({ color: 0xffffff }),
      pad: new THREE.MeshBasicMaterial({ color: 0xffffff }),
      led: new THREE.MeshBasicMaterial({ map: this.ledTex, color: 0xffffff }),
      logo: new THREE.MeshBasicMaterial({ map: this.logoTex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 }),
      paint: new THREE.MeshStandardMaterial({ color: 0xff7a45, roughness: 0.5, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }),
      paintDark: new THREE.MeshStandardMaterial({ color: 0x3a3e46, roughness: 0.6, transparent: true, opacity: 0.55, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }),
    };
    this.aoU = { value: null };
    shade(this.M.floor, { floor: true, aoU: this.aoU, E: 70 });
    this.edgeMat = new THREE.LineBasicMaterial({ color: 0x5d636c, transparent: true, opacity: 0.18 });
    // web fonts arrive after the first build: redraw the LED boards and the court logo once they do
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => this.redrawDecals()).catch(() => { });
    this.load('arena');
  }

  // ---------------------------------------------------------------- (re)build a map
  load(id) {
    const map = MAPS[id] || MAPS.arena;
    for (const o of this.objects) { this.scene.remove(o); o.geometry.dispose(); }
    this.objects = [];
    this.col.clear();
    this.map = map; this.mapId = map.id;
    this.batches = new Map(); this.edges = [];
    this.spawnGround = []; this.spawnHigh = []; this.cover = [];
    this.jumpPads = []; this.boostPads = []; this.animated = []; this.footprints = [];
    // map colours: the glow strips, pads and floor paint take the map's accent
    const acc = new THREE.Color(map.accent);
    this.accent = acc.clone();
    this.M.glow.color.copy(acc).multiplyScalar(6);
    this.M.glowSoft.color.copy(acc).lerp(new THREE.Color(0xffffff), 0.65).multiplyScalar(2.6);
    this.M.pad.color.copy(acc).multiplyScalar(4);
    this.M.paint.color.copy(acc).lerp(new THREE.Color(0xffffff), 0.15);
    this.M.logo.color.copy(acc).lerp(new THREE.Color(0x2a2d33), 0.25);
    this.redrawDecals();
    this.wallH = map.wallH || 12;
    this.ceiling = this.wallH + (map.headroom || 14);
    this.buildShell();
    map.build(this);
    this.skyline(map.seed || 42);
    // the floor's contact shadows are baked from everything that stands on it
    if (this.aoU.value) this.aoU.value.dispose();
    this.aoU.value = floorAO(this.footprints, 70);
    this.finalize();
    // spawn points must be free (pads and decoration can't eat them)
    this.spawnGround = this.spawnGround.filter(p => this.col.capsuleFree(p.x, p.y + 0.05, p.z, 0.42, 1.8));
    this.spawnHigh = this.spawnHigh.filter(p => this.col.capsuleFree(p.x, p.y + 0.05, p.z, 0.42, 1.8));
    if (!this.cover.length) this.cover.push([0, 0]);
    return map;
  }

  redrawDecals() {
    const map = this.map; if (!map) return;
    const css = '#' + new THREE.Color(map.accent).getHexString();
    const old = this.ledTex; this.ledTex = ledBoardTexture(String(map.label || map.name).toUpperCase(), css);
    this.M.led.map = this.ledTex; this.M.led.needsUpdate = true; if (old) old.dispose();
    const ol = this.logoTex; this.logoTex = courtLogoTexture(this.Q.shadows ? 1024 : 512);
    this.M.logo.map = this.logoTex; this.M.logo.needsUpdate = true; if (ol) ol.dispose();
  }
  // flat decal lying on a surface at height y (the RED/SHIFT court logo)
  logo(x, y, z, size, ry = 0) {
    const g = new THREE.PlaneGeometry(size, size); g.rotateX(-Math.PI / 2);
    this.deco(g, x, y + 0.012, z, 'logo', ry);
  }

  add(geo, matrix, key, { collide = true, edges = true } = {}) {
    const g = geo.index ? geo.toNonIndexed() : geo;
    if (matrix) g.applyMatrix4(matrix);
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
    if (!this.batches.has(key)) this.batches.set(key, []);
    this.batches.get(key).push(g);
    if (collide) this.col.addGeometry(g, null, SURF.WALLRUN | SURF.GRAPPLE);
    if (edges) this.edges.push(new THREE.EdgesGeometry(g, 30));
  }
  // bottom-centred box. o.trim: dark foot + glowing band near the top
  box(x, y, z, w, h, d, key = 'block', ry = 0, o = {}) {
    if (y < 0.05 && o.collide !== false && o.ao !== false) this.footprints.push({ x, z, w, d, ry, k: Math.min(1, 0.45 + h * 0.08) });
    _e.set(0, ry, 0); _q.setFromEuler(_e); _m.compose(_p.set(x, y + h / 2, z), _q, _s);
    this.add(uvBox(w, h, d, 8, 8), _m, key, o);
    if (o.trim) {
      // graphite plinth, graphite cap, one thin accent line under the cap
      if (y < 0.05) this.deco(new THREE.BoxGeometry(w + 0.08, 0.5, d + 0.08), x, 0.25, z, 'dark', ry);
      if (h > 2.5) {
        this.deco(new THREE.BoxGeometry(w + 0.08, 0.32, d + 0.08), x, y + h - 0.14, z, 'dark', ry);
        this.deco(new THREE.BoxGeometry(w + 0.03, 0.07, d + 0.03), x, y + h - 0.42, z, 'glow', ry);
      } else {
        this.deco(new THREE.BoxGeometry(w + 0.06, 0.12, d + 0.06), x, y + h - 0.04, z, 'dark', ry);
        this.deco(new THREE.BoxGeometry(w + 0.025, 0.05, d + 0.025), x, y + h - 0.16, z, 'glowSoft', ry);
      }
    }
  }
  // round column / disc. o.trim like box
  cyl(x, y, z, r, h, key = 'block', o = {}) {
    const seg = Math.max(16, Math.round(r * 10));
    if (y < 0.05 && o.collide !== false) this.footprints.push({ x, z, r, k: Math.min(1, 0.45 + h * 0.08) });
    _m.makeTranslation(x, y + h / 2, z);
    this.add(new THREE.CylinderGeometry(r, r, h, seg), _m, key, o);
    if (o.trim) {
      if (y < 0.05) this.deco(new THREE.CylinderGeometry(r + 0.05, r + 0.05, 0.5, seg), x, 0.25, z, 'dark');
      const tall = h > 2.5;
      this.deco(new THREE.CylinderGeometry(r + 0.05, r + 0.05, tall ? 0.32 : 0.12, seg), x, y + h - (tall ? 0.14 : 0.04), z, 'dark');
      const band = new THREE.TorusGeometry(r + 0.02, tall ? 0.04 : 0.03, 6, seg * 2); band.rotateX(Math.PI / 2);
      this.deco(band, x, y + h - (tall ? 0.42 : 0.16), z, tall ? 'glow' : 'glowSoft');
    }
  }
  // wedge: low end at (x, z), rising along (sin ry, cos ry) by h over len
  ramp(x, z, ry, width, len, h, y = 0) {
    _e.set(0, ry, 0); _q.setFromEuler(_e); _m.compose(_p.set(x, y, z), _q, _s);
    this.add(wedge(width, len, h, 8, 8), _m, 'ramp');
    if (y < 0.05) this.footprints.push({ x: x + Math.sin(ry) * len / 2, z: z + Math.cos(ry) * len / 2, w: width, d: len, ry, k: 0.25 });
  }
  // decoration only: no collision, no outline
  deco(geo, x, y, z, key, ry = 0, rx = 0) {
    _e.set(rx, ry, 0); _q.setFromEuler(_e); _m.compose(_p.set(x, y, z), _q, _s);
    this.add(geo, _m, key, { collide: false, edges: false });
  }
  ring(r0, r1, seg = 96) { const g = new THREE.RingGeometry(r0, r1, seg); g.rotateX(-Math.PI / 2); return g; }
  // launch pad: step on it and you fly straight up (power = take-off speed, ~power²/60 m high)
  jumpPad(x, y, z, power = 22, r = 1.6) {
    this.jumpPads.push({ x, y, z, r, power });
    this.deco(new THREE.CylinderGeometry(r, r + 0.15, 0.12, 32), x, y + 0.06, z, 'dark');
    const t = new THREE.TorusGeometry(r - 0.15, 0.09, 6, 40); t.rotateX(Math.PI / 2);
    this.deco(t, x, y + 0.14, z, 'pad');
    this.deco(this.ring(0.3, 0.55, 24), x, y + 0.13, z, 'pad');
    // light column so you can find pads from afar
    const beam = new THREE.CylinderGeometry(0.05, 0.05, 2.4, 6);
    this.deco(beam, x, y + 1.3, z, 'glowSoft');
  }
  // speed strip: run over it in its direction and you're flung to ~32 m/s
  boostPad(x, y, z, ry, len = 8, w = 3) {
    const dir = new THREE.Vector3(Math.sin(ry), 0, Math.cos(ry));
    this.boostPads.push({ x, y, z, dir, len, w });
    this.deco(new THREE.BoxGeometry(w, 0.06, len), x, y + 0.03, z, 'dark', ry);
    for (let k = -1; k <= 1; k++) {
      for (const s of [-1, 1]) {
        const g = new THREE.BoxGeometry(0.16, 0.05, w * 0.55); g.rotateY(s * 0.7);
        g.translate(s * w * 0.18, 0, 0);
        this.deco(g, x + dir.x * k * len * 0.28, y + 0.07, z + dir.z * k * len * 0.28, 'pad', ry);
      }
    }
  }
  spawn(x, z, y = 0) { this.spawnGround.push(new THREE.Vector3(x, y, z)); }
  high(x, y, z) { this.spawnHigh.push(new THREE.Vector3(x, y, z)); }
  addCover(x, z) { this.cover.push([x, z]); }

  // floor + the four outer walls with their lighting (same frame on every map)
  buildShell() {
    const H = this.half, WH = this.wallH, T = 2;
    const fg = new THREE.PlaneGeometry(H * 2 + 40, H * 2 + 40); fg.rotateX(-Math.PI / 2);
    { const uv = fg.attributes.uv, p = fg.attributes.position; for (let i = 0; i < uv.count; i++) uv.setXY(i, p.getX(i) / 8, -p.getZ(i) / 8); }
    this.add(fg, null, 'floor', { collide: false, edges: false });
    this.box(0, 0, -H - T / 2, H * 2 + T * 2, WH, T, 'wall');
    this.box(0, 0, H + T / 2, H * 2 + T * 2, WH, T, 'wall');
    this.box(-H - T / 2, 0, 0, T, WH, H * 2, 'wall');
    this.box(H + T / 2, 0, 0, T, WH, H * 2, 'wall');
    const bar = (w, h, d) => new THREE.BoxGeometry(w, h, d);
    for (const [x, z, ry] of [[0, -H, 0], [0, H, Math.PI], [-H, 0, Math.PI / 2], [H, 0, -Math.PI / 2]]) {
      const inward = new THREE.Vector3(-x, 0, -z).normalize();
      const L = H * 2, at = (k, y, w, h, dd, key) => this.deco(bar(w, h, dd), x + inward.x * k, y, z + inward.z * k, key, ry);
      at(0.08, 1.2, L, 2.4, 0.16, 'dark');                 // graphite kick panel
      at(0.17, 2.46, L, 0.05, 0.04, 'glowSoft');           // light line on its top edge
      at(0.1, 3.55, L, 1.1, 0.06, 'led');                  // stadium LED ribbon
      at(0.14, 2.98, L, 0.06, 0.1, 'dark'); at(0.14, 4.12, L, 0.06, 0.1, 'dark');
      at(0.05, WH - 0.55, L, 0.12, 0.05, 'glow');          // accent line under the coping
      at(-0.2, WH + 0.15, L + 4.4, 0.3, 2.5, 'dark');      // graphite coping
    }
    // court boundary line 3 m in from the walls
    for (const [x, z, w, d] of [[0, -(H - 3), (H - 3) * 2, 0.12], [0, H - 3, (H - 3) * 2, 0.12], [-(H - 3), 0, 0.12, (H - 3) * 2], [H - 3, 0, 0.12, (H - 3) * 2]]) {
      const g = new THREE.PlaneGeometry(w, d); g.rotateX(-Math.PI / 2); this.deco(g, x, 0.008, z, 'paintDark');
    }
  }

  // the stadium around the court: stepped stands on all four sides under a floating canopy, floodlight
  // masts in the corners, and a ring of dark glass towers in the distance
  skyline(seed) {
    const bar = (w, h, d) => new THREE.BoxGeometry(w, h, d);
    const r = (i => () => ((i = (i * 16807) % 2147483647) / 2147483647))(seed);
    const H = this.half, WH = this.wallH;
    for (const [sx, sz, ry] of [[0, -1, 0], [0, 1, Math.PI], [-1, 0, Math.PI / 2], [1, 0, -Math.PI / 2]]) {
      const out = new THREE.Vector3(sx, 0, sz), place = (dist, y, w, h, d, key) => this.deco(bar(w, h, d), out.x * dist, y, out.z * dist, key, ry);
      place(H + 5, WH - 0.6, 108, 1.2, 8, 'dark');           // concourse behind the wall
      for (let i = 0; i < 9; i++) {                          // 9 rows of seating rising away
        const d0 = H + 9 + i * 3.4, y0 = WH + 0.6 + i * 2.1, w = 112 + i * 7;
        place(d0 + 1.7, y0 / 2, w, y0, 3.4, 'stand');
        place(d0 + 0.1, y0 + 0.02, w, 0.06, 0.08, i % 3 === 2 ? 'glowSoft' : 'dark');
      }
      place(H + 41, (WH + 20) / 2, 180, WH + 20, 2, 'stand'); // back wall
      place(H + 25, WH + 30, 176, 0.9, 36, 'canopy');         // floating canopy
      place(H + 7.2, WH + 29.4, 176, 0.5, 0.5, 'dark');
      place(H + 7.0, WH + 29.0, 176, 0.12, 0.12, 'glow');
      for (let k = -3; k <= 3; k++) {
        const along = new THREE.Vector3(Math.cos(ry), 0, -Math.sin(ry)).multiplyScalar(k * 25);
        this.deco(bar(0.8, 12, 0.8), out.x * (H + 40) + along.x, WH + 24, out.z * (H + 40) + along.z, 'dark', ry);
      }
    }
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {   // corner floodlight masts
      const x = sx * (H + 30), z = sz * (H + 30), a = Math.atan2(sx, sz);
      this.deco(new THREE.CylinderGeometry(0.7, 1.2, 64, 10), x, 32, z, 'dark');
      this.deco(bar(12, 6, 0.8), x, 64, z, 'dark', a);
      this.deco(bar(11, 5, 0.2), x - sx * 0.35, 64, z - sz * 0.35, 'white', a);
    }
    for (let i = 0; i < 22; i++) {                           // distant city: dark glass towers
      const a = i / 22 * Math.PI * 2 + r() * 0.15, d = 175 + r() * 80, h = 50 + r() * 120, w = 14 + r() * 18, dd = 14 + r() * 16;
      const x = Math.sin(a) * d, z = Math.cos(a) * d;
      this.deco(bar(w, h, dd), x, h / 2 - 2, z, 'glass', -a);
      if (r() < 0.6) this.deco(bar(0.5, h * 0.8, dd + 0.2), x, h * 0.45, z, 'glowSoft', -a);
    }
  }

  finalize() {
    for (const [key, geos] of this.batches) {
      const g = mergeGeometries(geos, false);
      for (const x of geos) x.dispose();
      const mesh = new THREE.Mesh(g, this.M[key]);
      const lit = !['glow', 'glowSoft', 'pad', 'led', 'white', 'logo'].includes(key);
      mesh.castShadow = lit && !['floor', 'canopy', 'stand', 'glass'].includes(key) && !key.startsWith('paint'); mesh.receiveShadow = lit && key !== 'glass';
      this.scene.add(mesh); this.objects.push(mesh);
    }
    if (this.edges.length) {
      const eg = mergeGeometries(this.edges, false);
      for (const x of this.edges) x.dispose();
      const lines = new THREE.LineSegments(eg, this.edgeMat);
      this.scene.add(lines); this.objects.push(lines);
    }
    this.batches = null; this.edges = null;
    this.col.build();
  }

  update(t, dt) {
    if (this.ledTex) this.ledTex.offset.x = (t * 0.02) % 1; // the LED ribbons scroll
    for (const f of this.animated) f(t, dt);
  }
}
