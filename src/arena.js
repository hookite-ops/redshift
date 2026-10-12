// WHITE ARENA — a clean, bright test chamber. Everything is light grey/white with thin outlines,
// so enemies (black/red) and the disc (orange) always read instantly.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { CollisionWorld, SURF } from './physics.js';
import { uvBox, wedge } from './geom.js';

const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _p = new THREE.Vector3(), _s = new THREE.Vector3(1, 1, 1);

function gridTexture() {
  const S = 512, c = document.createElement('canvas'); c.width = c.height = S;
  const g = c.getContext('2d');
  g.fillStyle = '#f4f4f2'; g.fillRect(0, 0, S, S);
  g.strokeStyle = '#e2e2df'; g.lineWidth = 2;
  for (let i = 0; i <= S; i += S / 8) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, S); g.stroke(); g.beginPath(); g.moveTo(0, i); g.lineTo(S, i); g.stroke(); }
  g.strokeStyle = '#cfcfcb'; g.lineWidth = 4; g.strokeRect(0, 0, S, S);
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 16;
  return t;
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
    const grid = gridTexture();
    this.M = {
      floor: new THREE.MeshStandardMaterial({ map: grid, roughness: 0.92, metalness: 0 }),
      wall: new THREE.MeshStandardMaterial({ color: 0xfafafa, roughness: 0.95 }),
      block: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9 }),
      top: new THREE.MeshStandardMaterial({ color: 0xececea, roughness: 0.9 }),
      ramp: new THREE.MeshStandardMaterial({ color: 0xe6e6e3, roughness: 0.85 }),
      accent: new THREE.MeshStandardMaterial({ color: 0xff5a1f, roughness: 0.6 }),
    };
    this.edgeMat = new THREE.LineBasicMaterial({ color: 0xb4b4b0 });
    this.build();
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
    _e.set(0, ry, 0); _q.setFromEuler(_e); _m.compose(_p.set(x, y + h / 2, z), _q, _s);
    this.add(uvBox(w, h, d, 8, 8), _m, key, o);
  }
  ramp(x, z, ry, width, len, h, y = 0) {
    _e.set(0, ry, 0); _q.setFromEuler(_e); _m.compose(_p.set(x, y, z), _q, _s);
    this.add(wedge(width, len, h, 8, 8), _m, 'ramp');
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

  finalize() {
    for (const [key, geos] of this.batches) {
      const g = mergeGeometries(geos, false);
      const mesh = new THREE.Mesh(g, this.M[key]);
      mesh.castShadow = key !== 'floor'; mesh.receiveShadow = true;
      this.scene.add(mesh);
    }
    const eg = mergeGeometries(this.edges, false);
    const lines = new THREE.LineSegments(eg, this.edgeMat);
    this.scene.add(lines);
    this.col.build();
  }

  update(t, dt) { for (const f of this.animated) f(t, dt); }
}
