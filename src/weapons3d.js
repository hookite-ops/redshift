// WEAPON MODELS — one hand-built design per weapon. Everything lies in the XY plane and spins around Z
// (the disc code rotates .rotation.z), and every model is roughly the same footprint (radius ≈ 0.45 × s)
// so the hit size the player sees matches the real one.
//
// Shared look: pearl-white ceramic shells, dark graphite cores, polished chrome edges, and the owner's
// colour as glowing channels (they bloom with post-processing on).
import * as THREE from 'three';

const TAU = Math.PI * 2;
const _matCache = new Map();
function mats(color, glow) {
  const key = color + ':' + glow.toFixed(2);
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
  // 원반 — the classic: bevelled ceramic ring, graphite dish, a glowing channel and three swept fins
  disc(g, M, s) {
    g.add(mesh(spun([[0.0, 0.03], [0.16, 0.03], [0.25, 0.02], [0.3, 0.045], [0.38, 0.04], [0.42, 0.012], [0.42, -0.012], [0.38, -0.04], [0.3, -0.045], [0.25, -0.02], [0.16, -0.03], [0, -0.03]].map(([r, z]) => [r * s, z * s])), M.pearl));
    g.add(mesh(new THREE.CylinderGeometry(0.245 * s, 0.245 * s, 0.05 * s, 48).rotateX(Math.PI / 2), M.graphite));
    for (const z of [0.047, -0.047]) g.add(mesh(ring(0.34 * s, 0.009 * s), M.glow, 0, 0, z * s));
    g.add(mesh(ring(0.425 * s, 0.012 * s, 96), M.chrome));
    for (let i = 0; i < 3; i++) {
      const sh = new THREE.Shape(), a = i / 3 * TAU;
      sh.moveTo(...polar(0.4 * s, a)); sh.quadraticCurveTo(...polar(0.56 * s, a + 0.35), ...polar(0.47 * s, a + 0.75));
      sh.quadraticCurveTo(...polar(0.45 * s, a + 0.35), ...polar(0.4 * s, a + 0.18));
      g.add(mesh(extrude(sh, 0.035 * s, 0.25), M.pearl));
    }
    g.add(mesh(spun([[0, 0.05], [0.07, 0.045], [0.1, 0.02], [0.1, -0.02], [0.07, -0.045], [0, -0.05]].map(([r, z]) => [r * s, z * s]), 32), M.chrome));
    for (const z of [0.052, -0.052]) g.add(mesh(new THREE.CircleGeometry(0.045 * s, 24), M.glow, 0, 0, z * s));
  },
  // 해머 — heavy armour: a thick graphite drum wrapped in six ceramic plates with glowing seams and a hex hub
  heavy(g, M, s) {
    g.add(mesh(new THREE.CylinderGeometry(0.34 * s, 0.34 * s, 0.13 * s, 48).rotateX(Math.PI / 2), M.graphite));
    for (let i = 0; i < 6; i++) {
      const a0 = i / 6 * TAU + 0.05, a1 = (i + 1) / 6 * TAU - 0.05;
      g.add(mesh(extrude(annulus(0.3 * s, 0.46 * s, a0, a1), 0.16 * s, 0.18), M.pearl));
      const [x, y] = polar(0.38 * s, (a0 + a1) / 2);
      g.add(mesh(new THREE.BoxGeometry(0.06 * s, 0.1 * s, 0.25 * s), M.gun, x, y, 0, (a0 + a1) / 2));
      const sa = (i + 1) / 6 * TAU, [sx, sy] = polar(0.38 * s, sa);
      for (const z of [0.112, -0.112]) g.add(mesh(new THREE.BoxGeometry(0.16 * s, 0.018 * s, 0.01 * s), M.glow, sx, sy, z * s, sa));
    }
    for (const z of [0.09, -0.09]) g.add(mesh(ring(0.3 * s, 0.012 * s), M.glow, 0, 0, z * s));
    g.add(mesh(new THREE.CylinderGeometry(0.15 * s, 0.15 * s, 0.2 * s, 6).rotateX(Math.PI / 2), M.chrome));
    for (const z of [0.102, -0.102]) g.add(mesh(new THREE.CircleGeometry(0.08 * s, 6), M.glow, 0, 0, z * s));
  },
  // 레일 — a slim lens-shaped blade with a glowing spine and twin chrome edges: built for speed
  rail(g, M, s) {
    const L = 0.62 * s, W = 0.17 * s, lens = new THREE.Shape();
    lens.moveTo(-L, 0); lens.quadraticCurveTo(0, W * 2, L, 0); lens.quadraticCurveTo(0, -W * 2, -L, 0);
    g.add(mesh(extrude(lens, 0.04 * s, 0.35, 24), M.pearl));
    const core = new THREE.Shape(); core.moveTo(-L * 0.7, 0); core.quadraticCurveTo(0, W * 1.1, L * 0.7, 0); core.quadraticCurveTo(0, -W * 1.1, -L * 0.7, 0);
    g.add(mesh(extrude(core, 0.06 * s, 0.2, 24), M.graphite));
    g.add(mesh(new THREE.BoxGeometry(L * 1.25, 0.012 * s, 0.07 * s), M.glow));
    for (const sy of [1, -1]) {
      const e = new THREE.Shape(); e.moveTo(-L, 0); e.quadraticCurveTo(0, sy * W * 2.02, L, 0); e.quadraticCurveTo(0, sy * W * 1.8, -L, 0);
      g.add(mesh(extrude(e, 0.05 * s, 0, 24), M.chrome));
    }
    g.add(mesh(new THREE.CylinderGeometry(0.07 * s, 0.07 * s, 0.09 * s, 24).rotateX(Math.PI / 2), M.chrome));
    for (const z of [0.047, -0.047]) g.add(mesh(new THREE.CircleGeometry(0.035 * s, 20), M.glow, 0, 0, z * s));
  },
  // 부메랑 — two swept wings with glowing leading edges around a chrome pivot
  boomerang(g, M, s) {
    const wing = new THREE.Shape();
    wing.moveTo(0.02 * s, 0.1 * s);
    wing.bezierCurveTo(0.25 * s, 0.22 * s, 0.5 * s, 0.25 * s, 0.66 * s, 0.1 * s);
    wing.quadraticCurveTo(0.7 * s, 0.04 * s, 0.62 * s, 0.03 * s);
    wing.bezierCurveTo(0.45 * s, 0.1 * s, 0.25 * s, 0.05 * s, 0.08 * s, -0.08 * s);
    wing.lineTo(0.02 * s, 0.1 * s);
    for (const k of [0, 1]) {
      const w = mesh(extrude(wing, 0.05 * s, 0.25, 16), M.pearl); w.rotation.z = k * Math.PI; g.add(w);
      const lead = new THREE.Shape(); lead.moveTo(0.05 * s, 0.13 * s);
      lead.bezierCurveTo(0.26 * s, 0.24 * s, 0.5 * s, 0.27 * s, 0.67 * s, 0.11 * s); lead.lineTo(0.64 * s, 0.09 * s);
      lead.bezierCurveTo(0.48 * s, 0.22 * s, 0.26 * s, 0.2 * s, 0.06 * s, 0.1 * s);
      const l = mesh(extrude(lead, 0.062 * s, 0, 16), M.glow); l.rotation.z = k * Math.PI; g.add(l);
      const inset = new THREE.Shape(); inset.moveTo(0.2 * s, 0.08 * s); inset.quadraticCurveTo(0.38 * s, 0.14 * s, 0.52 * s, 0.1 * s); inset.quadraticCurveTo(0.38 * s, 0.08 * s, 0.2 * s, 0.03 * s);
      const n = mesh(extrude(inset, 0.064 * s, 0, 12), M.graphite); n.rotation.z = k * Math.PI; g.add(n);
    }
    g.add(mesh(spun([[0, 0.06], [0.08, 0.05], [0.13, 0.02], [0.13, -0.02], [0.08, -0.05], [0, -0.06]].map(([r, z]) => [r * s, z * s]), 32), M.chrome));
    g.add(mesh(ring(0.13 * s, 0.012 * s), M.glow));
  },
  // 분열 — three separate petals held together by light: you can see where it will split
  splitter(g, M, s) {
    for (let i = 0; i < 3; i++) {
      const a0 = i / 3 * TAU + 0.09, a1 = (i + 1) / 3 * TAU - 0.09;
      const p = new THREE.Shape();
      p.moveTo(...polar(0.08 * s, (a0 + a1) / 2));
      p.lineTo(...polar(0.16 * s, a0)); p.absarc(0, 0, 0.44 * s, a0, a1, false); p.lineTo(...polar(0.16 * s, a1)); p.closePath();
      g.add(mesh(extrude(p, 0.05 * s, 0.25, 16), M.pearl));
      const tip = new THREE.Shape(); tip.absarc(0, 0, 0.455 * s, a0 + 0.12, a1 - 0.12, false); tip.absarc(0, 0, 0.41 * s, a1 - 0.12, a0 + 0.12, true);
      g.add(mesh(extrude(tip, 0.06 * s, 0, 16), M.gun));
      const [x, y] = polar(0.29 * s, (a0 + a1) / 2);
      g.add(mesh(new THREE.CylinderGeometry(0.045 * s, 0.045 * s, 0.11 * s, 16).rotateX(Math.PI / 2), M.graphite, x, y));
      for (const z of [0.057, -0.057]) g.add(mesh(new THREE.CircleGeometry(0.025 * s, 16), M.glow, x, y, z * s));
      // the glowing seam between this petal and the next
      const sa = (i + 1) / 3 * TAU, [sx, sy] = polar(0.29 * s, sa);
      g.add(mesh(new THREE.BoxGeometry(0.3 * s, 0.025 * s, 0.035 * s), M.glow, sx, sy, 0, sa));
    }
    g.add(mesh(new THREE.CylinderGeometry(0.09 * s, 0.09 * s, 0.075 * s, 3).rotateX(Math.PI / 2), M.chrome));
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
  // 추적 — the hunter: a slim ring with a glass dome "eye", a glowing iris and three steering fins
  seeker(g, M, s) {
    g.add(mesh(spun([[0.2, 0.025], [0.36, 0.03], [0.42, 0.01], [0.42, -0.01], [0.36, -0.03], [0.2, -0.025]].map(([r, z]) => [r * s, z * s])), M.pearl));
    g.add(mesh(new THREE.CylinderGeometry(0.21 * s, 0.21 * s, 0.05 * s, 40).rotateX(Math.PI / 2), M.graphite));
    for (const sz of [1, -1]) {
      const dome = new THREE.Mesh(new THREE.SphereGeometry(0.16 * s, 32, 16, 0, TAU, 0, Math.PI / 2), M.glass);
      dome.rotation.x = sz > 0 ? Math.PI / 2 : -Math.PI / 2; dome.scale.set(1, 0.55, 1); dome.position.z = sz * 0.02 * s; g.add(dome);
      g.add(mesh(ring(0.08 * s, 0.014 * s, 40), M.glow, 0, 0, sz * 0.045 * s));
      g.add(mesh(new THREE.CircleGeometry(0.035 * s, 24), M.white, 0, 0, sz * 0.05 * s));
    }
    for (let i = 0; i < 3; i++) {
      const a = i / 3 * TAU + Math.PI / 6, fin = new THREE.Shape();
      fin.moveTo(...polar(0.4 * s, a - 0.2)); fin.lineTo(...polar(0.55 * s, a)); fin.lineTo(...polar(0.4 * s, a + 0.2)); fin.closePath();
      g.add(mesh(extrude(fin, 0.03 * s, 0.3), M.tint));
    }
    g.add(mesh(ring(0.3 * s, 0.008 * s), M.glowSoft, 0, 0, 0.03 * s));
    g.add(mesh(ring(0.3 * s, 0.008 * s), M.glowSoft, 0, 0, -0.03 * s));
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
  // 프리즘 — a cut crystal: an iridescent faceted hexagon with a glowing gem and six mirror facets
  prism(g, M, s) {
    const hex = new THREE.Shape();
    for (let i = 0; i < 6; i++) { const p = polar(0.4 * s, i / 6 * TAU + Math.PI / 6); i ? hex.lineTo(...p) : hex.moveTo(...p); }
    hex.closePath();
    g.add(mesh(extrude(hex, 0.05 * s, 0.4, 1), M.iris));
    const inner = new THREE.Shape();
    for (let i = 0; i < 6; i++) { const p = polar(0.24 * s, i / 6 * TAU); i ? inner.lineTo(...p) : inner.moveTo(...p); }
    inner.closePath();
    g.add(mesh(extrude(inner, 0.13 * s, 0.15, 1), M.graphite));
    const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.15 * s), M.glow); gem.scale.z = 0.75; g.add(gem);
    for (let i = 0; i < 6; i++) {
      const a = i / 6 * TAU + Math.PI / 6, [x, y] = polar(0.4 * s, a);
      g.add(mesh(new THREE.OctahedronGeometry(0.045 * s), M.chrome, x, y));
      const [mx, my] = polar(0.31 * s, a + Math.PI / 6);
      g.add(mesh(new THREE.BoxGeometry(0.12 * s, 0.012 * s, 0.09 * s), M.glowSoft, mx, my, 0, a + Math.PI / 6 + Math.PI / 2));
    }
  },
};

export function buildWeaponModel(color, w, s = 1, glowMul = 1, glowBase = 1) {
  const g = new THREE.Group(), glow = Math.max(1, glowBase * glowMul);
  const M = mats(color, glow);
  (BUILD[w.id] || BUILD.disc)(g, M, s);
  g.traverse(o => { if (o.isMesh) { o.castShadow = o.material !== M.glow && o.material !== M.glass; } });
  return g;
}
