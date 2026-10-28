// WEAPON MODELS — one hand-built design per weapon. Everything lies in the XY plane and spins around Z
// (the disc code rotates .rotation.z), and every model is roughly the same footprint (radius ≈ 0.45 × s)
// so the hit size the player sees matches the real one.
//
// Shared look: pearl-white ceramic shells, dark graphite cores, polished chrome edges, and the owner's
// colour as glowing channels (they bloom with post-processing on).
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { WSKINS, wskinTexture } from './cosmetics.js';

const TAU = Math.PI * 2;
const _matCache = new Map();
function mats(color, glow, wskin = 'std') {
  const WS = WSKINS.find(x => x.id === wskin) || WSKINS[0];
  if (WS.glow) color = WS.glow;
  const key = color + ':' + glow.toFixed(2) + ':' + WS.id;
  let M = _matCache.get(key);
  if (M) return M;
  const c = new THREE.Color(color);
  const hot = k => new THREE.MeshBasicMaterial({ color: c.clone().multiplyScalar(k), toneMapped: true });
  M = {
    pearl: new THREE.MeshPhysicalMaterial({ color: 0xf8f8f6, roughness: 0.22, metalness: 0.0, clearcoat: 1, clearcoatRoughness: 0.08, sheen: 0.4, sheenColor: new THREE.Color(0xdfe8ff) }),
    graphite: new THREE.MeshStandardMaterial({ color: 0x1b1e24, roughness: 0.32, metalness: 0.8 }),
    gun: new THREE.MeshStandardMaterial({ color: 0x343a44, roughness: 0.25, metalness: 0.9 }),
    chrome: new THREE.MeshStandardMaterial({ color: 0xe8ecf2, roughness: 0.08, metalness: 1.0 }),
    tint: new THREE.MeshPhysicalMaterial({ color: c.clone().lerp(new THREE.Color(0xffffff), 0.1), roughness: 0.3, metalness: 0.3, clearcoat: 0.8, emissive: c, emissiveIntensity: glow > 1 ? 0.35 : 0.12 }),
    glow: hot(glow > 1 ? 1.5 * glow : 1.0),
    glowSoft: hot(glow > 1 ? 0.7 * glow : 0.75),
    white: new THREE.MeshBasicMaterial({ color: new THREE.Color(0xffffff).multiplyScalar(glow > 1 ? 1.2 * glow : 1) }),
    glass: new THREE.MeshPhysicalMaterial({ color: c.clone().lerp(new THREE.Color(0xffffff), 0.55), roughness: 0.04, metalness: 0, transparent: true, opacity: 0.38, clearcoat: 1, depthWrite: false }),
    iris: new THREE.MeshPhysicalMaterial({ color: c.clone().lerp(new THREE.Color(0xffffff), 0.72), roughness: 0.05, metalness: 0.6, iridescence: 1, iridescenceIOR: 1.6, iridescenceThicknessRange: [200, 900], clearcoat: 1, emissive: c, emissiveIntensity: glow > 1 ? 0.25 : 0.08 }),
  };
  // weapon skin: re-finish the shell (pearl) and core (graphite)
  if (WS.pearl) {
    const q = WS.pearl;
    if (q.glass) M.pearl = new THREE.MeshPhysicalMaterial({ color: q.color, roughness: q.rough, metalness: q.metal, transmission: 0, transparent: true, opacity: 0.72, clearcoat: 1, emissive: new THREE.Color(WS.glow || color), emissiveIntensity: 0.15 });
    else {
      M.pearl = new THREE.MeshPhysicalMaterial({ color: q.color, roughness: q.rough, metalness: q.metal, clearcoat: q.metal > 0.5 ? 0.3 : 1, clearcoatRoughness: 0.1 });
      if (q.tex) { const t = wskinTexture(q.tex); M.pearl.map = t; if (q.emissiveTex) { M.pearl.emissiveMap = t; M.pearl.emissive = new THREE.Color(1, 1, 1); M.pearl.emissiveIntensity = glow > 1 ? 1.4 : 0.9; } }
    }
  }
  if (WS.graphite) { const q = WS.graphite; M.graphite = new THREE.MeshStandardMaterial({ color: q.color, roughness: q.rough, metalness: q.metal }); }
  _matCache.set(key, M);
  if (_matCache.size > 64) _matCache.delete(_matCache.keys().next().value);
  return M;
}

// ---------- geometry helpers ----------
// a disc-shaped solid of revolution around Z from an (r, z) profile (r ≥ 0), closed
function spun(profile, seg = 64) {
  const g = new THREE.LatheGeometry(profile.map(([r, z]) => new THREE.Vector2(r, z)), seg);
  g.rotateX(Math.PI / 2); // lathe spins around Y → turn so the axis is Z
  return g;
}
function extrude(shape, depth, bevel = 0.2, curve = 8) {
  const g = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: bevel > 0, bevelThickness: depth * bevel, bevelSize: depth * bevel, bevelSegments: 3, curveSegments: curve });
  g.translate(0, 0, -depth / 2); return g;
}
function ring(r, t, seg = 64) { return new THREE.TorusGeometry(r, t, 10, seg); }
function mesh(g, m, x = 0, y = 0, z = 0, rz = 0) { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.rotation.z = rz; return o; }
function annulus(r0, r1, a0 = 0, a1 = TAU) {
  const s = new THREE.Shape(); s.absarc(0, 0, r1, a0, a1, false);
  if (a1 - a0 >= TAU - 1e-6) { const h = new THREE.Path(); h.absarc(0, 0, r0, 0, TAU, true); s.holes.push(h); }
  else s.absarc(0, 0, r0, a1, a0, true);
  return s;
}
const polar = (r, a) => [Math.cos(a) * r, Math.sin(a) * r];

// ---------- the designs ----------
const BUILD = {
  // 원반 — (그림) 두툼한 테두리의 둥근 원반, 가운데 작은 점
  disc(g, M, s) {
    g.add(mesh(spun([[0, 0.05], [0.2, 0.045], [0.33, 0.035], [0.36, 0.03], [0.36, -0.03], [0.33, -0.035], [0.2, -0.045], [0, -0.05]].map(([r, z]) => [r * s, z * s])), M.pearl));
    g.add(mesh(ring(0.385 * s, 0.045 * s, 96), M.graphite));                  // the thick rim
    g.add(mesh(ring(0.385 * s, 0.012 * s, 96), M.glow, 0, 0, 0.046 * s));     // light line on the rim, both faces
    g.add(mesh(ring(0.385 * s, 0.012 * s, 96), M.glow, 0, 0, -0.046 * s));
    for (const z of [0.05, -0.05]) g.add(mesh(new THREE.SphereGeometry(0.028 * s, 16, 10), M.glow, 0, 0, z * s));   // centre dot
    g.add(mesh(ring(0.12 * s, 0.006 * s), M.chrome, 0, 0, 0.047 * s)); g.add(mesh(ring(0.12 * s, 0.006 * s), M.chrome, 0, 0, -0.047 * s));
  },
  // 해머 — (그림) 둥근 망치 머리 + 양 끝 띠, 손잡이, 끝에 고리
  heavy(g, M, s) {
    const h = new THREE.Group(); g.add(h); h.position.y = 0.09 * s;          // balance point near the head
    h.add(mesh(new RoundedBoxGeometry(0.66 * s, 0.34 * s, 0.32 * s, 3, 0.07 * s), M.pearl, 0, 0.2 * s));
    for (const x of [-0.25, 0.25]) {
      h.add(mesh(new RoundedBoxGeometry(0.07 * s, 0.37 * s, 0.35 * s, 2, 0.02 * s), M.graphite, x * s, 0.2 * s));
      h.add(mesh(new THREE.BoxGeometry(0.02 * s, 0.375 * s, 0.355 * s), M.glow, x * s * 1.18, 0.2 * s));
    }
    h.add(mesh(new THREE.CylinderGeometry(0.05 * s, 0.05 * s, 0.42 * s, 20), M.graphite, 0, -0.18 * s));
    for (const y of [-0.1, -0.2, -0.3]) h.add(mesh(new THREE.CylinderGeometry(0.056 * s, 0.056 * s, 0.025 * s, 20), M.glowSoft, 0, y * s));
    h.add(mesh(new THREE.CylinderGeometry(0.075 * s, 0.06 * s, 0.05 * s, 20), M.chrome, 0, 0.01 * s));
    h.add(mesh(ring(0.075 * s, 0.026 * s, 32), M.pearl, 0, -0.47 * s));       // pommel ring
    h.add(mesh(ring(0.075 * s, 0.009 * s, 32), M.glow, 0, -0.47 * s, 0.026 * s));
    h.add(mesh(new THREE.SphereGeometry(0.028 * s, 12, 8), M.glow, 0, -0.47 * s));
  },
  // 레일 — (그림) 위아래 두 줄 레일, 사이로 빛줄기, 뒤쪽 고리, 비스듬한 손잡이
  rail(g, M, s) {
    const r = new THREE.Group(); g.add(r); r.position.set(0.08 * s, 0.05 * s, 0);
    r.add(mesh(new RoundedBoxGeometry(0.86 * s, 0.06 * s, 0.1 * s, 2, 0.02 * s), M.pearl, -0.08 * s, 0.11 * s));    // top rail (longer)
    r.add(mesh(new RoundedBoxGeometry(0.66 * s, 0.05 * s, 0.09 * s, 2, 0.02 * s), M.pearl, 0.02 * s, -0.02 * s));    // lower rail
    r.add(mesh(new THREE.BoxGeometry(1.0 * s, 0.018 * s, 0.03 * s), M.glow, -0.16 * s, 0.045 * s));                   // the beam between them
    r.add(mesh(new THREE.BoxGeometry(0.66 * s, 0.07 * s, 0.05 * s), M.graphite, 0.02 * s, 0.045 * s));
    r.add(mesh(new RoundedBoxGeometry(0.06 * s, 0.2 * s, 0.11 * s, 2, 0.02 * s), M.graphite, 0.36 * s, 0.045 * s));   // rear block
    const loop = mesh(ring(0.085 * s, 0.024 * s, 40), M.chrome, 0.24 * s, 0.0); loop.scale.set(1.35, 1, 1); r.add(loop);     // the ring
    const lg = mesh(ring(0.085 * s, 0.008 * s, 40), M.glow, 0.24 * s, 0, 0.025 * s); lg.scale.set(1.35, 1, 1); r.add(lg);
    const grip = new THREE.Group(); grip.position.set(0.36 * s, 0.0); grip.rotation.z = 0.42; r.add(grip);
    grip.add(mesh(new RoundedBoxGeometry(0.075 * s, 0.4 * s, 0.1 * s, 2, 0.025 * s), M.graphite, 0, -0.2 * s));
    grip.add(mesh(new THREE.BoxGeometry(0.08 * s, 0.015 * s, 0.105 * s), M.glowSoft, 0, -0.12 * s));
    grip.add(mesh(new THREE.BoxGeometry(0.08 * s, 0.015 * s, 0.105 * s), M.glowSoft, 0, -0.26 * s));
  },
  // 부메랑 — (그림) 뾰족한 두 날이 가운데서 비틀려 S자로 이어짐
  boomerang(g, M, s) {
    const leaf = new THREE.Shape();
    leaf.moveTo(0, 0);
    leaf.quadraticCurveTo(0.1 * s, 0.36 * s, 0.44 * s, 0.4 * s);       // the curved outer edge up to the tip
    leaf.quadraticCurveTo(0.2 * s, 0.17 * s, 0.13 * s, -0.02 * s);    // back along the inner edge
    leaf.quadraticCurveTo(0.06 * s, -0.04 * s, 0, 0);
    const edge = new THREE.QuadraticBezierCurve3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0.1 * s, 0.36 * s, 0), new THREE.Vector3(0.44 * s, 0.4 * s, 0));
    for (const k of [0, 1]) {
      const b = new THREE.Group(); b.rotation.z = k * Math.PI; g.add(b);
      const t = new THREE.Group(); b.add(t);
      t.rotation.set(0.3, -0.3, 0);                                   // the twist in the middle
      t.add(mesh(extrude(leaf, 0.045 * s, 0.35, 16), M.pearl));
      t.add(mesh(new THREE.TubeGeometry(edge, 24, 0.012 * s, 6), M.glow, 0, 0, 0.028 * s));
      t.add(mesh(new THREE.TubeGeometry(edge, 24, 0.012 * s, 6), M.glow, 0, 0, -0.028 * s));
    }
    g.add(mesh(new THREE.CylinderGeometry(0.07 * s, 0.07 * s, 0.09 * s, 24).rotateX(Math.PI / 2), M.graphite));
    g.add(mesh(ring(0.07 * s, 0.01 * s, 24), M.chrome, 0, 0, 0.045 * s)); g.add(mesh(ring(0.07 * s, 0.01 * s, 24), M.chrome, 0, 0, -0.045 * s));
    for (const z of [0.05, -0.05]) g.add(mesh(new THREE.SphereGeometry(0.025 * s, 12, 8), M.glow, 0, 0, z * s));
  },
  // 분열 — (그림) 세 조각으로 갈라진 삼각형: 벽에 맞으면 이 세 조각이 별 파편이 되어 흩어짐
  splitter(g, M, s) {
    const R = 0.47 * s, gap = 0.03 * s;
    const P = [0, 1, 2].map(i => new THREE.Vector2(...polar(R, Math.PI / 2 + i * TAU / 3)));
    const mid = (a, b) => a.clone().add(b).multiplyScalar(0.5);
    for (let i = 0; i < 3; i++) {
      const c = P[i], m1 = mid(P[i], P[(i + 1) % 3]), m2 = mid(P[i], P[(i + 2) % 3]);
      const pts = [c, m1, new THREE.Vector2(0, 0), m2];
      const dir = c.clone().normalize().multiplyScalar(gap);          // pull each piece toward its corner: the cracks show
      const sh = new THREE.Shape(pts.map(p => p.clone().multiplyScalar(0.94).add(dir)));
      g.add(mesh(extrude(sh, 0.07 * s, 0.25, 4), M.pearl));
      const tip = c.clone().multiplyScalar(0.8);
      g.add(mesh(new THREE.SphereGeometry(0.022 * s, 10, 8), M.glow, tip.x, tip.y, 0.045 * s));
      g.add(mesh(new THREE.SphereGeometry(0.022 * s, 10, 8), M.glow, tip.x, tip.y, -0.045 * s));
      // glowing crack from the centre to the side's middle
      const mm = mid(P[(i + 1) % 3], P[(i + 2) % 3]).multiplyScalar(0.94), len = mm.length();
      g.add(mesh(new THREE.BoxGeometry(0.03 * s, len, 0.1 * s), M.glow, mm.x / 2, mm.y / 2, 0, Math.atan2(mm.y, mm.x) - Math.PI / 2));
    }
    g.add(mesh(new THREE.CylinderGeometry(0.06 * s, 0.06 * s, 0.085 * s, 6).rotateX(Math.PI / 2), M.graphite));
  },
  // 톱날 — a polished circular saw: hooked chrome teeth, graphite body, a ring of vents and a glowing core
  saw(g, M, s) {
    const N = 18, R0 = 0.36 * s, R1 = 0.47 * s, sh = new THREE.Shape();
    for (let i = 0; i < N; i++) {
      const a = i / N * TAU, b = (i + 0.62) / N * TAU, c = (i + 1) / N * TAU;
      const p0 = polar(R0, a), p1 = polar(R1, b), p2 = polar(R1 * 0.97, b + 0.03), p3 = polar(R0, c);
      if (i === 0) sh.moveTo(...p0);
      sh.quadraticCurveTo(...polar(R0 * 1.12, (a + b) / 2 - 0.05), ...p1); sh.lineTo(...p2); sh.lineTo(...p3);
    }
    const hole = new THREE.Path(); hole.absarc(0, 0, 0.12 * s, 0, TAU, true); sh.holes.push(hole);
    g.add(mesh(extrude(sh, 0.03 * s, 0.15, 6), M.chrome));
    g.add(mesh(extrude(annulus(0.12 * s, 0.33 * s), 0.05 * s, 0.15), M.graphite));
    for (let i = 0; i < 6; i++) {
      const a = i / 6 * TAU, slot = new THREE.Shape();
      slot.absarc(0, 0, 0.29 * s, a, a + 0.55, false); slot.absarc(0, 0, 0.22 * s, a + 0.55, a, true);
      g.add(mesh(extrude(slot, 0.056 * s, 0, 10), M.glowSoft));
    }
    g.add(mesh(new THREE.CylinderGeometry(0.12 * s, 0.12 * s, 0.07 * s, 32).rotateX(Math.PI / 2), M.pearl));
    for (const z of [0.037, -0.037]) g.add(mesh(new THREE.CircleGeometry(0.06 * s, 24), M.glow, 0, 0, z * s));
  },
  // 추적 — (그림) 큰 삼각 날개의 미사일 ×3 묶음. 날아갈 땐 앞을 보고 빙글 돌아요 (disc.js)
  seeker(g, M, s) {
    const one = (x, z) => {
      const m = new THREE.Group(); m.position.set(x, 0, z);
      m.add(mesh(new THREE.CylinderGeometry(0.038 * s, 0.038 * s, 0.56 * s, 16), M.pearl, 0, 0.02 * s));
      m.add(mesh(new THREE.ConeGeometry(0.038 * s, 0.16 * s, 16), M.graphite, 0, 0.38 * s));
      m.add(mesh(new THREE.SphereGeometry(0.016 * s, 8, 6), M.glow, 0, 0.465 * s));
      m.add(mesh(new THREE.CylinderGeometry(0.041 * s, 0.041 * s, 0.02 * s, 16), M.glow, 0, 0.2 * s));
      m.add(mesh(new THREE.CylinderGeometry(0.03 * s, 0.045 * s, 0.05 * s, 16), M.graphite, 0, -0.28 * s));
      m.add(mesh(new THREE.CylinderGeometry(0.022 * s, 0.022 * s, 0.012 * s, 12), M.glow, 0, -0.31 * s));
      const fin = new THREE.Shape(); fin.moveTo(0, 0.04 * s); fin.lineTo(0.17 * s, -0.24 * s); fin.lineTo(0, -0.16 * s); fin.closePath();
      for (let k = 0; k < 3; k++) {
        const f = new THREE.Group(); f.rotation.y = k * TAU / 3 + Math.atan2(x, z); m.add(f);
        f.add(mesh(extrude(fin, 0.012 * s, 0.2, 2), M.graphite, 0.035 * s, -0.12 * s));
      }
      return m;
    };
    const B = new THREE.Group(); g.add(B);
    for (let k = 0; k < 3; k++) { const [x, z] = polar(0.06 * s, k * TAU / 3 + Math.PI / 2); B.add(one(x, z)); }
    for (const y of [0.1, -0.15]) B.add(mesh(new THREE.CylinderGeometry(0.11 * s, 0.11 * s, 0.03 * s, 24), M.graphite, 0, y * s));
    B.add(mesh(new THREE.TorusGeometry(0.112 * s, 0.008 * s, 6, 32).rotateX(Math.PI / 2), M.glow, 0, 0.1 * s));
    B.add(mesh(new THREE.TorusGeometry(0.112 * s, 0.008 * s, 6, 32).rotateX(Math.PI / 2), M.glow, 0, -0.15 * s));
  },
  // 충격탄 — a caged star: a hot core inside a glass shell, held by three crossing graphite rings
  nova(g, M, s) {
    g.add(mesh(new THREE.IcosahedronGeometry(0.13 * s, 2), M.glow));
    g.add(new THREE.Mesh(new THREE.SphereGeometry(0.22 * s, 32, 20), M.glass));
    for (let i = 0; i < 3; i++) {
      const r = new THREE.Mesh(ring(0.3 * s, 0.022 * s, 64), M.graphite);
      r.rotation.set(i === 0 ? 0 : Math.PI / 2, i === 2 ? Math.PI / 2 : 0, 0); g.add(r);
      const r2 = new THREE.Mesh(ring(0.3 * s, 0.006 * s, 64), M.glowSoft); r2.rotation.copy(r.rotation); r2.scale.setScalar(1.06); g.add(r2);
    }
    g.add(mesh(spun([[0.34, 0.02], [0.42, 0.012], [0.42, -0.012], [0.34, -0.02]].map(([r, z]) => [r * s, z * s])), M.pearl));
    for (let i = 0; i < 4; i++) { const [x, y] = polar(0.42 * s, i / 4 * TAU); g.add(mesh(new THREE.SphereGeometry(0.03 * s, 12, 8), M.glow, x, y)); }
  },
  // 프리즘 — (그림) 정이십면체: 무지개빛 면, 빛나는 모서리
  prism(g, M, s) {
    const R = 0.36 * s;
    const ico = new THREE.IcosahedronGeometry(R, 0);
    const shell = new THREE.Mesh(ico, M.iris); shell.material = M.iris; g.add(shell);
    g.add(mesh(new THREE.IcosahedronGeometry(R * 0.42, 0), M.glow));
    // edges as thin chrome bars, vertices as glowing beads
    const p = ico.attributes.position, seen = new Set(), V = [];
    for (let i = 0; i < p.count; i++) { const v = new THREE.Vector3().fromBufferAttribute(p, i); const k = v.toArray().map(x => x.toFixed(3)).join(); if (!seen.has(k)) { seen.add(k); V.push(v); } }
    const L = V[0].distanceTo(V.reduce((b, v) => (v !== V[0] && (!b || v.distanceTo(V[0]) < b.distanceTo(V[0])) ? v : b), null));
    const up = new THREE.Vector3(0, 1, 0);
    for (let a = 0; a < V.length; a++) for (let b = a + 1; b < V.length; b++) {
      if (Math.abs(V[a].distanceTo(V[b]) - L) > L * 0.05) continue;
      const e = new THREE.Mesh(new THREE.CylinderGeometry(0.009 * s, 0.009 * s, L, 6), M.chrome);
      e.position.copy(V[a]).add(V[b]).multiplyScalar(0.5);
      e.quaternion.setFromUnitVectors(up, V[b].clone().sub(V[a]).normalize());
      g.add(e);
    }
    for (const v of V) g.add(mesh(new THREE.SphereGeometry(0.02 * s, 8, 6), M.glow, v.x, v.y, v.z));
  },
};

// 분열 파편 — (그림) 육각별 안에 뾰족한 별. Game shards use this (lying flat, spinning).
export function shardStar(color, glow = 1) {
  const g = new THREE.Group();
  const M = mats(color, Math.max(1, glow));
  const star = (R, r, n, a0 = 0) => { const sh = new THREE.Shape(); for (let i = 0; i < n * 2; i++) { const p = polar(i % 2 ? r : R, a0 + i * Math.PI / n); i ? sh.lineTo(...p) : sh.moveTo(...p); } sh.closePath(); return sh; };
  const outer = extrude(star(0.2, 0.115, 6, Math.PI / 2), 0.03, 0.2, 2);
  g.add(new THREE.Mesh(outer, M.glow));
  const inner = new THREE.Mesh(extrude(star(0.11, 0.05, 6, Math.PI / 2 + Math.PI / 6), 0.05, 0.2, 2), M.white);
  g.add(inner);
  g.rotation.x = Math.PI / 2;                    // lie in the plane of travel
  const w = new THREE.Group(); w.add(g); return w;
}

export function buildWeaponModel(color, w, s = 1, glowMul = 1, glowBase = 1, wskin = 'std') {
  const g = new THREE.Group(), glow = Math.max(1, glowBase * glowMul);
  const M = mats(color, glow, wskin);
  (BUILD[w.id] || BUILD.disc)(g, M, s);
  g.traverse(o => { if (o.isMesh) { o.castShadow = o.material !== M.glow && o.material !== M.glass; } });
  return g;
}
