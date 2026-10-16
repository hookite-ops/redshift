// ARENA ENGINE — builds one of the maps in maps.js into merged meshes + a collision world, and can tear it
// down and build another one at any time (online rooms rotate maps between rounds).
// Every map is the same 100 m × 100 m walled square, so movement / bounds / bots work everywhere.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { CollisionWorld, SURF } from './physics.js';
import { uvBox, wedge } from './geom.js';
import { floorTextures, panelTextures, floorAO } from './textures.js';
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
    const fl = floorTextures(S), pn = panelTextures(S);
    const panel = (color, rough, ns = 0.6) => new THREE.MeshStandardMaterial({ color, map: pn.map, normalMap: pn.normalMap, normalScale: new THREE.Vector2(ns, ns), roughnessMap: pn.roughnessMap, roughness: rough, metalness: 0 });
    this.M = {
      floor: new THREE.MeshStandardMaterial({ map: fl.map, normalMap: fl.normalMap, normalScale: new THREE.Vector2(0.7, 0.7), roughnessMap: fl.roughnessMap, roughness: 0.75, metalness: 0, envMapIntensity: 0.9 }),
      wall: shade(panel(0xf4f4f2, 0.8)),
      block: shade(panel(0xffffff, 0.7)),
      top: shade(panel(0xe9e9e6, 0.75), { base: 0.66 }),
      ramp: shade(new THREE.MeshStandardMaterial({ color: 0xe2e2df, map: fl.map, normalMap: fl.normalMap, roughness: 0.7 }), { base: 0.7 }),
      dark: shade(new THREE.MeshStandardMaterial({ color: 0x2a2a2f, roughness: 0.5, metalness: 0.3 }), { base: 0.8 }),
      glow: new THREE.MeshBasicMaterial({ color: 0xffffff }),
      glowSoft: new THREE.MeshBasicMaterial({ color: 0xffffff }),
      pad: new THREE.MeshBasicMaterial({ color: 0xffffff }),
      paint: new THREE.MeshStandardMaterial({ color: 0xff7a45, roughness: 0.6, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }),
      paintDark: new THREE.MeshStandardMaterial({ color: 0x9a9a96, roughness: 0.7, transparent: true, opacity: 0.55, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }),
    };
    this.aoU = { value: null };
    shade(this.M.floor, { floor: true, aoU: this.aoU, E: 70 });
    this.edgeMat = new THREE.LineBasicMaterial({ color: 0x9c9c98, transparent: true, opacity: 0.35 });
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
      if (y < 0.05) this.deco(new THREE.BoxGeometry(w + 0.06, 0.35, d + 0.06), x, 0.175, z, 'dark', ry);
      if (h > 2.5) this.deco(new THREE.BoxGeometry(w + 0.05, 0.13, d + 0.05), x, y + h - 0.7, z, 'glow', ry);
      else this.deco(new THREE.BoxGeometry(w + 0.04, 0.06, d + 0.04), x, y + h - 0.03, z, 'glowSoft', ry);
    }
  }
  // round column / disc. o.trim like box
  cyl(x, y, z, r, h, key = 'block', o = {}) {
    const seg = Math.max(16, Math.round(r * 10));
    if (y < 0.05 && o.collide !== false) this.footprints.push({ x, z, r, k: Math.min(1, 0.45 + h * 0.08) });
    _m.makeTranslation(x, y + h / 2, z);
    this.add(new THREE.CylinderGeometry(r, r, h, seg), _m, key, o);
    if (o.trim) {
      if (y < 0.05) this.deco(new THREE.CylinderGeometry(r + 0.04, r + 0.04, 0.35, seg), x, 0.175, z, 'dark');
      const band = new THREE.TorusGeometry(r + 0.02, 0.06, 6, seg * 2); band.rotateX(Math.PI / 2);
      this.deco(band, x, y + h - (h > 2.5 ? 0.7 : 0.03), z, h > 2.5 ? 'glow' : 'glowSoft');
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
      const inward = new THREE.Vector3(-x, 0, -z).normalize(), along = new THREE.Vector3(Math.cos(ry), 0, -Math.sin(ry));
      const L = H * 2;
      this.deco(bar(L, 0.45, 0.08), x + inward.x * 0.04, 0.225, z + inward.z * 0.04, 'dark', ry);
      this.deco(bar(L, 0.16, 0.06), x + inward.x * 0.04, WH - 0.7, z + inward.z * 0.04, 'glow', ry);
      this.deco(bar(L, 0.05, 0.05), x + inward.x * 0.03, WH * 0.52, z + inward.z * 0.03, 'glowSoft', ry);
      for (let k = -4; k <= 4; k++) this.deco(bar(0.12, 3.2, 0.06), x + inward.x * 0.035 + along.x * k * 10, WH - 3.6, z + inward.z * 0.035 + along.z * k * 10, 'glowSoft', ry);
    }
  }

  // white monoliths beyond the walls with lit slits, and a halo ring over everything
  skyline(seed) {
    const bar = (w, h, d) => new THREE.BoxGeometry(w, h, d);
    const r = (i => () => ((i = (i * 16807) % 2147483647) / 2147483647))(seed);
    for (let i = 0; i < 26; i++) {
      const a = i / 26 * Math.PI * 2 + r() * 0.12, d = 92 + r() * 70, h = 26 + r() * 70, w = 8 + r() * 14;
      const x = Math.sin(a) * d, z = Math.cos(a) * d;
      this.deco(uvBox(w, h, w * (0.6 + r() * 0.8), 8, 8).translate(0, h / 2 - 2, 0), x, 0, z, 'wall', -a);
      if (r() < 0.7) this.deco(bar(0.4, h * 0.6, 0.4), x - Math.sin(a) * w * 0.45, h * 0.45, z - Math.cos(a) * w * 0.45, 'glowSoft', -a);
    }
    const halo = new THREE.TorusGeometry(88, 0.55, 8, 200); halo.rotateX(Math.PI / 2);
    this.deco(halo, 0, 78, 0, 'glow');
    const halo2 = new THREE.TorusGeometry(88, 2.4, 6, 120); halo2.rotateX(Math.PI / 2);
    this.deco(halo2, 0, 80.5, 0, 'dark');
  }

  finalize() {
    for (const [key, geos] of this.batches) {
      const g = mergeGeometries(geos, false);
      for (const x of geos) x.dispose();
      const mesh = new THREE.Mesh(g, this.M[key]);
      const lit = key !== 'glow' && key !== 'glowSoft' && key !== 'pad';
      mesh.castShadow = lit && key !== 'floor' && !key.startsWith('paint'); mesh.receiveShadow = lit;
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

  update(t, dt) { for (const f of this.animated) f(t, dt); }
}
