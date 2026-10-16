// WHITE ARENA — a clean, bright test chamber. Everything is light grey/white with thin outlines,
// so enemies (black/red) and the disc (orange) always read instantly.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { CollisionWorld, SURF } from './physics.js';
import { uvBox, wedge } from './geom.js';
import { floorTextures, panelTextures, floorAO } from './textures.js';

const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _p = new THREE.Vector3(), _s = new THREE.Vector3(1, 1, 1);

// emissive light strips: colour above 1.0 so the bloom pass makes them glow (and they stay bright without it)
const GLOW = new THREE.Color(0xff5a1f).multiplyScalar(6);
const GLOW_SOFT = new THREE.Color(0xffd2bd).multiplyScalar(2.6);

// arena shading on top of PBR: walls darken toward the floor (fake ambient occlusion), the floor reads a baked
// contact-shadow map, so objects sit on the ground even on phones with shadows off
function shade(mat, { floor = false, ao = null, E = 70, base = 0.6 } = {}) {
  mat.onBeforeCompile = sh => {
    sh.uniforms.rsAo = { value: ao }; sh.uniforms.rsE = { value: E };
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
    this.batches = new Map();
    this.edges = [];
    this.half = 50;
    this.spawnGround = []; this.spawnHigh = [];
    this.jumpPads = []; this.boostPads = [];
    this.animated = [];
    this.footprints = [];
    const hi = Q.shadows, S = hi ? 1024 : 512;
    const fl = floorTextures(S), pn = panelTextures(S);
    const panel = (color, rough, ns = 0.6) => new THREE.MeshStandardMaterial({ color, map: pn.map, normalMap: pn.normalMap, normalScale: new THREE.Vector2(ns, ns), roughnessMap: pn.roughnessMap, roughness: rough, metalness: 0 });
    this.M = {
      floor: new THREE.MeshStandardMaterial({ map: fl.map, normalMap: fl.normalMap, normalScale: new THREE.Vector2(0.7, 0.7), roughnessMap: fl.roughnessMap, roughness: 0.75, metalness: 0, envMapIntensity: 0.9 }),
      wall: shade(panel(0xf4f4f2, 0.8)),
      block: shade(panel(0xffffff, 0.7)),
      top: shade(panel(0xe9e9e6, 0.75), { base: 0.66 }),
      ramp: shade(new THREE.MeshStandardMaterial({ color: 0xe2e2df, map: fl.map, normalMap: fl.normalMap, roughness: 0.7 }), { base: 0.7 }),
      accent: new THREE.MeshStandardMaterial({ color: 0xff5a1f, roughness: 0.45 }),
      dark: shade(new THREE.MeshStandardMaterial({ color: 0x2a2a2f, roughness: 0.5, metalness: 0.3 }), { base: 0.8 }),
      glow: new THREE.MeshBasicMaterial({ color: GLOW }),
      glowSoft: new THREE.MeshBasicMaterial({ color: GLOW_SOFT }),
      paint: new THREE.MeshStandardMaterial({ color: 0xff7a45, roughness: 0.6, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }),
      paintDark: new THREE.MeshStandardMaterial({ color: 0x9a9a96, roughness: 0.7, transparent: true, opacity: 0.55, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }),
    };
    this.edgeMat = new THREE.LineBasicMaterial({ color: 0x9c9c98, transparent: true, opacity: 0.35 });
    this.build();
    this.decorate();
    // the floor's contact shadows are baked from everything that stands on it
    this.M.floor.userData.ao = floorAO(this.footprints, 70);
    shade(this.M.floor, { floor: true, ao: this.M.floor.userData.ao, E: 70 });
    this.finalize();
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
  // bottom-centred box
  box(x, y, z, w, h, d, key = 'block', ry = 0, o = {}) {
    if (y < 0.05 && o.collide !== false && o.ao !== false) this.footprints.push({ x, z, w, d, ry, k: Math.min(1, 0.45 + h * 0.08) });
    _e.set(0, ry, 0); _q.setFromEuler(_e); _m.compose(_p.set(x, y + h / 2, z), _q, _s);
    this.add(uvBox(w, h, d, 8, 8), _m, key, o);
  }
  ramp(x, z, ry, width, len, h, y = 0) {
    _e.set(0, ry, 0); _q.setFromEuler(_e); _m.compose(_p.set(x, y, z), _q, _s);
    this.add(wedge(width, len, h, 8, 8), _m, 'ramp');
    if (y < 0.05) this.footprints.push({ x, z, w: width, d: len, ry, k: 0.25 });
  }
  // decoration only: no collision, no outline
  deco(geo, x, y, z, key, ry = 0, rx = 0) {
    _e.set(rx, ry, 0); _q.setFromEuler(_e); _m.compose(_p.set(x, y, z), _q, _s);
    this.add(geo, _m, key, { collide: false, edges: false });
  }

  build() {
    const H = this.half;
    // floor (visual; collision is the analytic ground plane)
    const fg = new THREE.PlaneGeometry(H * 2 + 40, H * 2 + 40); fg.rotateX(-Math.PI / 2);
    { const uv = fg.attributes.uv, p = fg.attributes.position; for (let i = 0; i < uv.count; i++) uv.setXY(i, p.getX(i) / 8, -p.getZ(i) / 8); }
    this.add(fg, null, 'floor', { collide: false, edges: false });

    // outer walls
    const WH = 12, T = 2;
    this.box(0, 0, -H - T / 2, H * 2 + T * 2, WH, T, 'wall');
    this.box(0, 0, H + T / 2, H * 2 + T * 2, WH, T, 'wall');
    this.box(-H - T / 2, 0, 0, T, WH, H * 2, 'wall');
    this.box(H + T / 2, 0, 0, T, WH, H * 2, 'wall');
    // invisible ceiling-height lip so nothing leaves the arena
    this.ceiling = WH + 14;

    // centre: raised round stage
    const stage = new THREE.CylinderGeometry(7, 7, 1, 40); _m.makeTranslation(0, 0.5, 0);
    this.add(stage, _m, 'top');
    this.footprints.push({ x: 0, z: 0, r: 7, k: 0.5 });
    // four ramps onto the stage
    for (let k = 0; k < 4; k++) {
      const a = k * Math.PI / 2;
      this.ramp(Math.sin(a) * 11, Math.cos(a) * 11, a + Math.PI, 4, 4.2, 1);
    }

    // pillars (disc bounce boards / cover)
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) this.box(sx * 17, 0, sz * 17, 3, 9, 3, 'block');

    // low cover walls (waist height — vault over with the auto-mantle)
    for (let k = 0; k < 4; k++) {
      const a = k * Math.PI / 2 + Math.PI / 4;
      this.box(Math.cos(a) * 28, 0, Math.sin(a) * 28, 7, 1.4, 1, 'block', -a + Math.PI / 2);
    }
    // side cover walls
    for (const [x, z, ry] of [[0, -30, 0], [0, 30, 0], [-30, 0, Math.PI / 2], [30, 0, Math.PI / 2]]) this.box(x, 0, z, 10, 2.6, 1, 'block', ry);

    // corner platforms with ramps (high ground for turrets)
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      const cx = sx * 40, cz = sz * 40;
      this.box(cx, 0, cz, 14, 3.5, 14, 'top');
      // ramp running along the wall toward the centre line
      this.ramp(cx - sx * 0, cz - sz * 7 - sz * 10, sz > 0 ? 0 : Math.PI, 5, 10, 3.5);
      this.spawnHigh.push(new THREE.Vector3(cx + sx * 2, 3.5, cz + sz * 2));
    }

    // floor accent rings (spawn markers)
    for (let i = 0; i < 12; i++) {
      const a = i / 12 * Math.PI * 2 + 0.13, r = 36 + (i % 2) * 6;
      const p = new THREE.Vector3(Math.cos(a) * r, 0, Math.sin(a) * r);
      if (Math.abs(Math.abs(p.x) - 40) < 9 && Math.abs(Math.abs(p.z) - 40) < 9) continue;
      this.spawnGround.push(p);
    }
    for (const p of [[0, 0, -42], [0, 0, 42], [-42, 0, 0], [42, 0, 0], [-22, 0, -40], [22, 0, 40]]) this.spawnGround.push(new THREE.Vector3(...p));
  }

  // light strips, skirting, floor paint and the skyline outside the walls (all visual)
  decorate() {
    const H = this.half, WH = 12;
    const bar = (w, h, d) => new THREE.BoxGeometry(w, h, d);
    // outer walls: dark skirting at the floor, a glowing band near the top, and a soft one at mid height
    for (const [x, z, ry] of [[0, -H, 0], [0, H, Math.PI], [-H, 0, Math.PI / 2], [H, 0, -Math.PI / 2]]) {
      const inward = new THREE.Vector3(-x, 0, -z).normalize();
      const L = H * 2;
      this.deco(bar(L, 0.45, 0.08), x + inward.x * 0.04, 0.225, z + inward.z * 0.04, 'dark', ry);
      this.deco(bar(L, 0.16, 0.06), x + inward.x * 0.04, WH - 0.7, z + inward.z * 0.04, 'glow', ry);
      this.deco(bar(L, 0.05, 0.05), x + inward.x * 0.03, 6.2, z + inward.z * 0.03, 'glowSoft', ry);
      // tall glowing slits every 10 m
      for (let k = -4; k <= 4; k++) {
        const along = new THREE.Vector3(Math.cos(ry), 0, -Math.sin(ry));
        this.deco(bar(0.12, 3.2, 0.06), x + inward.x * 0.035 + along.x * k * 10, 8.4, z + inward.z * 0.035 + along.z * k * 10, 'glowSoft', ry);
      }
    }
    // pillars: a lit collar near the top + dark foot
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      this.deco(bar(3.06, 0.14, 3.06), sx * 17, 8.0, sz * 17, 'glow');
      this.deco(bar(3.08, 0.35, 3.08), sx * 17, 0.175, sz * 17, 'dark');
    }
    // stage: glowing rim + dark band
    const rim = new THREE.TorusGeometry(7.02, 0.06, 6, 96); rim.rotateX(Math.PI / 2);
    this.deco(rim, 0, 1.0, 0, 'glow');
    this.deco(new THREE.CylinderGeometry(7.04, 7.04, 0.3, 64, 1, true), 0, 0.15, 0, 'dark');
    // corner platforms: glowing lip along the top edges
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      const cx = sx * 40, cz = sz * 40;
      this.deco(bar(14.04, 0.1, 0.1), cx, 3.45, cz - sz * 7.02, 'glow');
      this.deco(bar(0.1, 0.1, 14.04), cx - sx * 7.02, 3.45, cz, 'glow');
      this.deco(bar(14.06, 0.4, 14.06), cx, 0.2, cz, 'dark');
    }
    // floor paint: rings around the stage, lane lines to the corners, spawn pads
    const ring = (r0, r1, seg = 96) => { const g = new THREE.RingGeometry(r0, r1, seg); g.rotateX(-Math.PI / 2); return g; };
    this.deco(ring(9.3, 9.5), 0, 0.01, 0, 'paint');
    this.deco(ring(13.8, 13.9), 0, 0.01, 0, 'paintDark');
    for (let k = 0; k < 4; k++) {
      const a = k * Math.PI / 2 + Math.PI / 4, g = new THREE.PlaneGeometry(0.14, 22); g.rotateX(-Math.PI / 2);
      this.deco(g, Math.sin(a) * 25, 0.01, Math.cos(a) * 25, 'paintDark', a);
    }
    for (const p of this.spawnGround) { this.deco(ring(0.9, 1.05, 40), p.x, 0.012, p.z, 'paintDark'); this.deco(ring(0.25, 0.4, 24), p.x, 0.012, p.z, 'paint'); }
    // skyline: white monoliths beyond the walls with lit slits, and a halo ring over the arena
    const r = (i => () => ((i = (i * 16807) % 2147483647) / 2147483647))(42);
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
      const mesh = new THREE.Mesh(g, this.M[key]);
      const lit = key !== 'glow' && key !== 'glowSoft';
      mesh.castShadow = lit && key !== 'floor' && !key.startsWith('paint'); mesh.receiveShadow = lit;
      this.scene.add(mesh);
    }
    const eg = mergeGeometries(this.edges, false);
    const lines = new THREE.LineSegments(eg, this.edgeMat);
    this.scene.add(lines);
    this.col.build();
  }

  update(t, dt) { for (const f of this.animated) f(t, dt); }
}
