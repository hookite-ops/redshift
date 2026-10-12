// Geometry helpers: world-scaled UV boxes, swept strips (ramps/loops/spirals), wedges
import * as THREE from 'three';

// Box with UVs in meters / uvScale so textures keep their real-world size
export function uvBox(w, h, d, us = 4, vs = 4) {
  const geo = new THREE.BoxGeometry(w, h, d);
  const uv = geo.attributes.uv, pos = geo.attributes.position, nrm = geo.attributes.normal;
  for (let i = 0; i < uv.count; i++) {
    const nx = Math.abs(nrm.getX(i)), ny = Math.abs(nrm.getY(i));
    const px = pos.getX(i) + w / 2, py = pos.getY(i) + h / 2, pz = pos.getZ(i) + d / 2;
    let u, v;
    if (ny > 0.5) { u = px; v = pz; } else if (nx > 0.5) { u = pz; v = py; } else { u = px; v = py; }
    uv.setXY(i, u / us, v / vs);
  }
  return geo;
}

// Build a closed strip by sweeping a rectangle (width x thick) along frames.
// frames: [{p:Vector3, r:Vector3 (unit, across), u:Vector3 (unit, up)}]
export function sweepStrip(frames, width, thick, { closed = false, us = 4, vs = 4, caps = true } = {}) {
  const pos = [], uvs = [], nrm = [];
  const n = frames.length;
  const corners = frames.map(f => {
    const L = f.p.clone().addScaledVector(f.r, -width / 2), R = f.p.clone().addScaledVector(f.r, width / 2);
    return { TL: L, TR: R, BL: L.clone().addScaledVector(f.u, -thick), BR: R.clone().addScaledVector(f.u, -thick) };
  });
  // cumulative length for v
  const lens = [0];
  for (let i = 1; i < n; i++) lens.push(lens[i - 1] + frames[i].p.distanceTo(frames[i - 1].p));
  if (closed) lens.push(lens[n - 1] + frames[0].p.distanceTo(frames[n - 1].p));
  const quad = (a, b, c, d, ua, ub, uc, ud, out) => {
    // a-b-c-d in order; ensure normal matches 'out'
    const n1 = new THREE.Vector3().subVectors(b, a).cross(new THREE.Vector3().subVectors(c, a));
    let tri = [[a, b, c, ua, ub, uc], [a, c, d, ua, uc, ud]];
    if (n1.dot(out) < 0) tri = [[a, c, b, ua, uc, ub], [a, d, c, ua, ud, uc]];
    const nn = out.clone().normalize();
    for (const [p, q, r, up, uq, ur] of tri) {
      pos.push(p.x, p.y, p.z, q.x, q.y, q.z, r.x, r.y, r.z);
      uvs.push(up[0], up[1], uq[0], uq[1], ur[0], ur[1]);
      // flat face normal from triangle
      const fn = new THREE.Vector3().subVectors(q, p).cross(new THREE.Vector3().subVectors(r, p)).normalize();
      for (let k = 0; k < 3; k++) nrm.push(fn.x, fn.y, fn.z);
    }
  };
  const segs = closed ? n : n - 1;
  for (let i = 0; i < segs; i++) {
    const j = (i + 1) % n;
    const A = corners[i], B = corners[j], fa = frames[i], fb = frames[j];
    const v0 = lens[i] / vs, v1 = lens[i + 1] / vs;
    const up = fa.u.clone().add(fb.u), right = fa.r.clone().add(fb.r);
    quad(A.TL, A.TR, B.TR, B.TL, [0, v0], [width / us, v0], [width / us, v1], [0, v1], up);
    quad(A.BL, B.BL, B.BR, A.BR, [0, v0], [0, v1], [width / us, v1], [width / us, v0], up.clone().negate());
    quad(A.TL, B.TL, B.BL, A.BL, [v0 * vs / us, 0], [v1 * vs / us, 0], [v1 * vs / us, thick / us], [v0 * vs / us, thick / us], right.clone().negate());
    quad(A.TR, A.BR, B.BR, B.TR, [v0 * vs / us, 0], [v0 * vs / us, thick / us], [v1 * vs / us, thick / us], [v1 * vs / us, 0], right);
  }
  if (!closed && caps) {
    const A = corners[0], f0 = frames[0];
    const t0 = new THREE.Vector3().subVectors(frames[0].p, frames[1].p);
    quad(A.TL, A.BL, A.BR, A.TR, [0, 0], [0, thick / us], [width / us, thick / us], [width / us, 0], t0);
    const Z = corners[n - 1];
    const t1 = new THREE.Vector3().subVectors(frames[n - 1].p, frames[n - 2].p);
    quad(Z.TL, Z.TR, Z.BR, Z.BL, [0, 0], [width / us, 0], [width / us, thick / us], [0, thick / us], t1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  return g;
}

// Solid wedge (ramp) — local: starts at z=0 (height 0) rising to height h at z=len; width along x
export function wedge(width, len, h, us = 4, vs = 4, part = 'all') {
  const hw = width / 2;
  const P = {
    a: new THREE.Vector3(-hw, 0, 0), b: new THREE.Vector3(hw, 0, 0),
    c: new THREE.Vector3(hw, 0, len), d: new THREE.Vector3(-hw, 0, len),
    e: new THREE.Vector3(hw, h, len), f: new THREE.Vector3(-hw, h, len),
  };
  const pos = [], uvs = [], nrm = [];
  const slope = Math.hypot(len, h);
  let cur = 'top';
  const tri = (p, q, r, up, uq, ur, out) => {
    if (part !== 'all' && part !== cur) return;
    let A = p, B = q, C = r, UA = up, UB = uq, UC = ur;
    const n = new THREE.Vector3().subVectors(B, A).cross(new THREE.Vector3().subVectors(C, A));
    if (n.dot(out) < 0) { [B, C] = [C, B]; [UB, UC] = [UC, UB]; }
    const fn = new THREE.Vector3().subVectors(B, A).cross(new THREE.Vector3().subVectors(C, A)).normalize();
    pos.push(A.x, A.y, A.z, B.x, B.y, B.z, C.x, C.y, C.z);
    uvs.push(...UA, ...UB, ...UC);
    for (let k = 0; k < 3; k++) nrm.push(fn.x, fn.y, fn.z);
  };
  const W = width / us;
  const topOut = new THREE.Vector3(0, len, -h);
  // slope top: a b e f
  tri(P.a, P.b, P.e, [0, 0], [W, 0], [W, slope / vs], topOut);
  tri(P.a, P.e, P.f, [0, 0], [W, slope / vs], [0, slope / vs], topOut);
  cur = 'sides';
  // bottom: a b c d
  const down = new THREE.Vector3(0, -1, 0);
  tri(P.a, P.b, P.c, [0, 0], [W, 0], [W, len / vs], down);
  tri(P.a, P.c, P.d, [0, 0], [W, len / vs], [0, len / vs], down);
  // back: d c e f
  const back = new THREE.Vector3(0, 0, 1);
  tri(P.d, P.c, P.e, [0, 0], [W, 0], [W, h / vs], back);
  tri(P.d, P.e, P.f, [0, 0], [W, h / vs], [0, h / vs], back);
  // sides
  tri(P.b, P.c, P.e, [0, 0], [len / us, 0], [len / us, h / vs], new THREE.Vector3(1, 0, 0));
  tri(P.a, P.d, P.f, [0, 0], [len / us, 0], [len / us, h / vs], new THREE.Vector3(-1, 0, 0));
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  return g;
}

// frames along a circular arc / helix
export function helixFrames(R, a0, a1, y0, y1, steps, bankFn = null, cx = 0, cz = 0) {
  const frames = [];
  const Y = new THREE.Vector3(0, 1, 0);
  for (let i = 0; i <= steps; i++) {
    const t = i / steps, a = a0 + (a1 - a0) * t;
    const p = new THREE.Vector3(cx + Math.cos(a) * R, y0 + (y1 - y0) * t, cz + Math.sin(a) * R);
    const dir = Math.sign(a1 - a0) || 1;
    const T = new THREE.Vector3(-Math.sin(a) * dir * R * Math.abs(a1 - a0), (y1 - y0), Math.cos(a) * dir * R * Math.abs(a1 - a0)).normalize();
    let r = new THREE.Vector3(Math.cos(a), 0, Math.sin(a)); // outward
    let u = new THREE.Vector3().crossVectors(T, r).normalize();
    if (u.y < 0) u.negate();
    r = new THREE.Vector3().crossVectors(u, T).normalize();
    if (r.dot(new THREE.Vector3(Math.cos(a), 0, Math.sin(a))) < 0) r.negate();
    if (bankFn) {
      const b = bankFn(a, t); // positive raises outer edge
      const q = new THREE.Quaternion().setFromAxisAngle(T, 0);
      // rotate (r,u) about T so that r tilts upward by b
      const cr = Math.cos(b), sr = Math.sin(b);
      const r2 = r.clone().multiplyScalar(cr).addScaledVector(u, sr);
      const u2 = u.clone().multiplyScalar(cr).addScaledVector(r, -sr);
      r = r2; u = u2;
    }
    frames.push({ p, r, u, T });
  }
  return frames;
}

// closed (or open) path frames from an arbitrary height function along a circle
export function curveFrames(R, a0, a1, steps, hFn, bankFn = null, closed = false) {
  const pts = [];
  const N = closed ? steps : steps + 1;
  for (let i = 0; i < N; i++) { const t = i / steps, a = a0 + (a1 - a0) * t; pts.push({ a, t, p: new THREE.Vector3(Math.cos(a) * R, hFn(a, t), Math.sin(a) * R) }); }
  return pts.map((q, i) => {
    const prev = pts[closed ? (i - 1 + N) % N : Math.max(0, i - 1)].p, next = pts[closed ? (i + 1) % N : Math.min(N - 1, i + 1)].p;
    const T = next.clone().sub(prev).normalize();
    const out = new THREE.Vector3(Math.cos(q.a), 0, Math.sin(q.a));
    let u = new THREE.Vector3().crossVectors(T, out).normalize(); if (u.y < 0) u.negate();
    let r = new THREE.Vector3().crossVectors(u, T).normalize(); if (r.dot(out) < 0) r.negate();
    if (bankFn) { const b = bankFn(q.a, q.t), c = Math.cos(b), s = Math.sin(b); const r2 = r.clone().multiplyScalar(c).addScaledVector(u, s); const u2 = u.clone().multiplyScalar(c).addScaledVector(r, -s); r = r2; u = u2; }
    return { p: q.p, r, u, T };
  });
}
