// REDSHIFT collision world — triangle soup in a 2D uniform grid (XZ),
// exact capsule-vs-triangle contacts and DDA raycasts. Allocation-free hot paths.
import * as THREE from 'three';

export const SURF = { WALLRUN: 1, GRAPPLE: 2, NOWALL: 4 };

const EPS = 1e-7;

export class CollisionWorld {
  constructor(half = 220, cell = 4) {
    this.half = half; this.cell = cell;
    this.n = Math.ceil(half * 2 / cell);
    this.cells = new Array(this.n * this.n);
    this.tris = [];          // flat numbers, 9 per tri
    this.nrm = [];           // 3 per tri
    this.box = [];           // 6 per tri (min xyz, max xyz)
    this.flags = [];
    this.count = 0;
    this.stamp = 0;
    this.marks = null;
    this.groundY = 0;        // analytic infinite ground plane
    this._c = { px: 0, py: 0, pz: 0, qx: 0, qy: 0, qz: 0, d2: 0 };
  }

  addGeometry(geo, matrix, flags = SURF.WALLRUN | SURF.GRAPPLE) {
    const g = geo.index ? geo.toNonIndexed() : geo;
    const p = g.attributes.position;
    const v = new THREE.Vector3();
    const a = [], tmp = [];
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i);
      if (matrix) v.applyMatrix4(matrix);
      tmp.push(v.x, v.y, v.z);
      if (tmp.length === 9) { this.addTri(tmp, flags); tmp.length = 0; }
    }
    if (g !== geo) g.dispose();
  }

  addTri(t, flags) {
    const [ax, ay, az, bx, by, bz, cx, cy, cz] = t;
    // normal
    const ux = bx - ax, uy = by - ay, uz = bz - az, vx = cx - ax, vy = cy - ay, vz = cz - az;
    let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    const l = Math.hypot(nx, ny, nz);
    if (l < 1e-9) return; // degenerate
    nx /= l; ny /= l; nz /= l;
    const i = this.count++;
    this.tris.push(ax, ay, az, bx, by, bz, cx, cy, cz);
    this.nrm.push(nx, ny, nz);
    const mnx = Math.min(ax, bx, cx), mny = Math.min(ay, by, cy), mnz = Math.min(az, bz, cz);
    const mxx = Math.max(ax, bx, cx), mxy = Math.max(ay, by, cy), mxz = Math.max(az, bz, cz);
    this.box.push(mnx, mny, mnz, mxx, mxy, mxz);
    this.flags.push(flags);
    const c = this.cell, h = this.half, n = this.n;
    const x0 = Math.max(0, Math.floor((mnx + h) / c)), x1 = Math.min(n - 1, Math.floor((mxx + h) / c));
    const z0 = Math.max(0, Math.floor((mnz + h) / c)), z1 = Math.min(n - 1, Math.floor((mxz + h) / c));
    for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) {
      const k = x * n + z;
      (this.cells[k] || (this.cells[k] = [])).push(i);
    }
  }

  build() {
    this.T = new Float32Array(this.tris);
    this.N = new Float32Array(this.nrm);
    this.B = new Float32Array(this.box);
    this.F = new Uint8Array(this.flags);
    this.marks = new Uint32Array(this.count);
    this.tris = this.nrm = this.box = this.flags = null;
    for (let k = 0; k < this.cells.length; k++) if (this.cells[k]) this.cells[k] = Int32Array.from(this.cells[k]);
  }

  // ---------- query helpers ----------
  _gather(mnx, mny, mnz, mxx, mxy, mxz, out) {
    const c = this.cell, h = this.half, n = this.n;
    const x0 = Math.max(0, Math.floor((mnx + h) / c)), x1 = Math.min(n - 1, Math.floor((mxx + h) / c));
    const z0 = Math.max(0, Math.floor((mnz + h) / c)), z1 = Math.min(n - 1, Math.floor((mxz + h) / c));
    const st = ++this.stamp; const M = this.marks, B = this.B;
    out.length = 0;
    for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) {
      const list = this.cells[x * n + z]; if (!list) continue;
      for (let j = 0; j < list.length; j++) {
        const i = list[j];
        if (M[i] === st) continue; M[i] = st;
        const o = i * 6;
        if (B[o] > mxx || B[o + 3] < mnx || B[o + 1] > mxy || B[o + 4] < mny || B[o + 2] > mxz || B[o + 5] < mnz) continue;
        out.push(i);
      }
    }
    return out;
  }

  // closest points between segment [p0,p1] and triangle i → this._c, returns squared distance
  _segTri(p0x, p0y, p0z, p1x, p1y, p1z, i) {
    const T = this.T, o = i * 9;
    const ax = T[o], ay = T[o + 1], az = T[o + 2], bx = T[o + 3], by = T[o + 4], bz = T[o + 5], cx = T[o + 6], cy = T[o + 7], cz = T[o + 8];
    const c = this._c;
    // 1) segment crosses the triangle? (Möller–Trumbore)
    const dx = p1x - p0x, dy = p1y - p0y, dz = p1z - p0z;
    const e1x = bx - ax, e1y = by - ay, e1z = bz - az, e2x = cx - ax, e2y = cy - ay, e2z = cz - az;
    const hx = dy * e2z - dz * e2y, hy = dz * e2x - dx * e2z, hz = dx * e2y - dy * e2x;
    const det = e1x * hx + e1y * hy + e1z * hz;
    if (Math.abs(det) > EPS) {
      const inv = 1 / det;
      const sx = p0x - ax, sy = p0y - ay, sz = p0z - az;
      const u = (sx * hx + sy * hy + sz * hz) * inv;
      if (u >= 0 && u <= 1) {
        const qx = sy * e1z - sz * e1y, qy = sz * e1x - sx * e1z, qz = sx * e1y - sy * e1x;
        const v = (dx * qx + dy * qy + dz * qz) * inv;
        if (v >= 0 && u + v <= 1) {
          const t = (e2x * qx + e2y * qy + e2z * qz) * inv;
          if (t >= 0 && t <= 1) {
            c.px = c.qx = p0x + dx * t; c.py = c.qy = p0y + dy * t; c.pz = c.qz = p0z + dz * t;
            return (c.d2 = 0);
          }
        }
      }
    }
    let best = Infinity, bpx, bpy, bpz, bqx, bqy, bqz;
    // 2) endpoints vs triangle
    for (let k = 0; k < 2; k++) {
      const px = k ? p1x : p0x, py = k ? p1y : p0y, pz = k ? p1z : p0z;
      ptTri(px, py, pz, ax, ay, az, bx, by, bz, cx, cy, cz, _q);
      const d2 = (px - _q[0]) ** 2 + (py - _q[1]) ** 2 + (pz - _q[2]) ** 2;
      if (d2 < best) { best = d2; bpx = px; bpy = py; bpz = pz; bqx = _q[0]; bqy = _q[1]; bqz = _q[2]; }
    }
    // 3) segment vs edges
    for (let k = 0; k < 3; k++) {
      const sx = k === 0 ? ax : k === 1 ? bx : cx, sy = k === 0 ? ay : k === 1 ? by : cy, sz = k === 0 ? az : k === 1 ? bz : cz;
      const ex = k === 0 ? bx : k === 1 ? cx : ax, ey = k === 0 ? by : k === 1 ? cy : ay, ez = k === 0 ? bz : k === 1 ? cz : az;
      const d2 = segSeg(p0x, p0y, p0z, p1x, p1y, p1z, sx, sy, sz, ex, ey, ez, _s);
      if (d2 < best) { best = d2; bpx = _s[0]; bpy = _s[1]; bpz = _s[2]; bqx = _s[3]; bqy = _s[4]; bqz = _s[5]; }
    }
    c.px = bpx; c.py = bpy; c.pz = bpz; c.qx = bqx; c.qy = bqy; c.qz = bqz;
    return (c.d2 = best);
  }

  // Resolve a capsule (feet position pos, radius r, height h). Mutates pos.
  // contacts: array that receives {x,y,z} normals (reused objects).
  collideCapsule(pos, r, h, contacts, maxIter = 4) {
    contacts.length = 0;
    const list = _list;
    for (let it = 0; it < maxIter; it++) {
      const ax = pos.x, ay = pos.y + r, az = pos.z, by = pos.y + h - r;
      let deepest = 0, nx = 0, ny = 0, nz = 0;
      // analytic ground plane
      if (pos.y < this.groundY) { deepest = this.groundY - pos.y; nx = 0; ny = 1; nz = 0; }
      this._gather(ax - r, pos.y - 0.01, az - r, ax + r, pos.y + h + 0.01, az + r, list);
      for (let j = 0; j < list.length; j++) {
        const i = list[j];
        const d2 = this._segTri(ax, ay, az, ax, by, az, i);
        if (d2 >= r * r) continue;
        const c = this._c;
        let depth, cnx, cny, cnz;
        const N = this.N, o = i * 3;
        if (d2 < 1e-10) {
          // segment intersects triangle — push along face normal toward the side holding the segment center
          let fx = N[o], fy = N[o + 1], fz = N[o + 2];
          const T = this.T, t = i * 9;
          const midY = (ay + by) / 2;
          const side = (ax - T[t]) * fx + (midY - T[t + 1]) * fy + (az - T[t + 2]) * fz;
          if (side < 0) { fx = -fx; fy = -fy; fz = -fz; }
          const da = (ax - T[t]) * fx + (ay - T[t + 1]) * fy + (az - T[t + 2]) * fz;
          const db = (ax - T[t]) * fx + (by - T[t + 1]) * fy + (az - T[t + 2]) * fz;
          depth = r - Math.min(da, db);
          cnx = fx; cny = fy; cnz = fz;
        } else {
          const d = Math.sqrt(d2);
          depth = r - d;
          cnx = (c.px - c.qx) / d; cny = (c.py - c.qy) / d; cnz = (c.pz - c.qz) / d;
          // prefer exact face normal when contact is on the face interior (avoids jitter)
          const fd = cnx * N[o] + cny * N[o + 1] + cnz * N[o + 2];
          if (Math.abs(fd) > 0.999) {
            // face-interior contact: always push out along the outward face normal (meshes are closed, outward-facing)
            cnx = N[o]; cny = N[o + 1]; cnz = N[o + 2];
            depth = r - fd * d;
          }
        }
        if (depth > deepest) { deepest = depth; nx = cnx; ny = cny; nz = cnz; }
      }
      if (deepest <= 0) break;
      const push = deepest + 1e-4;
      pos.x += nx * push; pos.y += ny * push; pos.z += nz * push;
      const ct = contacts.length < _contactPool.length ? _contactPool[contacts.length] : (_contactPool.push({ x: 0, y: 0, z: 0, depth: 0 }), _contactPool[contacts.length]);
      ct.x = nx; ct.y = ny; ct.z = nz; ct.depth = deepest;
      contacts.push(ct);
    }
    return contacts.length > 0;
  }

  // Does a capsule overlap anything? (no resolution)
  capsuleFree(x, y, z, r, h) {
    if (y < this.groundY - 0.001) return false;
    const list = this._gather(x - r, y, z - r, x + r, y + h, z + r, _list);
    for (let j = 0; j < list.length; j++) if (this._segTri(x, y + r, z, x, y + h - r, z, list[j]) < r * r - 1e-6) return false;
    return true;
  }

  // Raycast. dir must be normalized. Returns hit object (shared) or null.
  raycast(ox, oy, oz, dx, dy, dz, maxD, out = _hit, mask = 0) {
    let bestT = maxD, bestI = -1;
    // ground plane
    if (dy < -1e-6 && oy > this.groundY) { const t = (this.groundY - oy) / dy; if (t < bestT) { bestT = t; bestI = -2; } }
    const c = this.cell, h = this.half, n = this.n;
    let gx = Math.floor((ox + h) / c), gz = Math.floor((oz + h) / c);
    const stepX = dx > 0 ? 1 : -1, stepZ = dz > 0 ? 1 : -1;
    const tDX = Math.abs(dx) > 1e-9 ? c / Math.abs(dx) : Infinity, tDZ = Math.abs(dz) > 1e-9 ? c / Math.abs(dz) : Infinity;
    let tMX = Math.abs(dx) > 1e-9 ? (((dx > 0 ? gx + 1 : gx) * c - h) - ox) / dx : Infinity;
    let tMZ = Math.abs(dz) > 1e-9 ? (((dz > 0 ? gz + 1 : gz) * c - h) - oz) / dz : Infinity;
    const st = ++this.stamp; const M = this.marks, T = this.T, F = this.F;
    let tEnter = 0;
    for (let guard = 0; guard < 400; guard++) {
      if (gx >= 0 && gz >= 0 && gx < n && gz < n) {
        const list = this.cells[gx * n + gz];
        if (list) for (let j = 0; j < list.length; j++) {
          const i = list[j];
          if (M[i] === st) continue; M[i] = st;
          if (mask && !(F[i] & mask)) continue;
          const o = i * 9;
          const t = rayTri(ox, oy, oz, dx, dy, dz, T[o], T[o + 1], T[o + 2], T[o + 3], T[o + 4], T[o + 5], T[o + 6], T[o + 7], T[o + 8]);
          if (t > 0 && t < bestT) { bestT = t; bestI = i; }
        }
      }
      const tExit = Math.min(tMX, tMZ);
      if (bestT <= tExit || tExit > maxD) break;
      tEnter = tExit;
      if (tMX < tMZ) { gx += stepX; tMX += tDX; } else { gz += stepZ; tMZ += tDZ; }
      if ((gx < 0 && stepX < 0) || (gz < 0 && stepZ < 0) || (gx >= n && stepX > 0) || (gz >= n && stepZ > 0)) break;
    }
    if (bestI === -1) return null;
    out.t = bestT; out.x = ox + dx * bestT; out.y = oy + dy * bestT; out.z = oz + dz * bestT;
    if (bestI === -2) { out.nx = 0; out.ny = 1; out.nz = 0; out.flags = SURF.GRAPPLE; out.tri = -1; }
    else {
      const N = this.N, o = bestI * 3;
      let nx = N[o], ny = N[o + 1], nz = N[o + 2];
      if (nx * dx + ny * dy + nz * dz > 0) { nx = -nx; ny = -ny; nz = -nz; }
      out.nx = nx; out.ny = ny; out.nz = nz; out.flags = F[bestI]; out.tri = bestI;
    }
    return out;
  }
}

const _list = [];
const _contactPool = [];
const _q = [0, 0, 0];
const _s = [0, 0, 0, 0, 0, 0];
const _hit = { t: 0, x: 0, y: 0, z: 0, nx: 0, ny: 0, nz: 0, flags: 0, tri: 0 };

function rayTri(ox, oy, oz, dx, dy, dz, ax, ay, az, bx, by, bz, cx, cy, cz) {
  const e1x = bx - ax, e1y = by - ay, e1z = bz - az, e2x = cx - ax, e2y = cy - ay, e2z = cz - az;
  const hx = dy * e2z - dz * e2y, hy = dz * e2x - dx * e2z, hz = dx * e2y - dy * e2x;
  const det = e1x * hx + e1y * hy + e1z * hz;
  if (Math.abs(det) < 1e-9) return -1;
  const inv = 1 / det;
  const sx = ox - ax, sy = oy - ay, sz = oz - az;
  const u = (sx * hx + sy * hy + sz * hz) * inv;
  if (u < 0 || u > 1) return -1;
  const qx = sy * e1z - sz * e1y, qy = sz * e1x - sx * e1z, qz = sx * e1y - sy * e1x;
  const v = (dx * qx + dy * qy + dz * qz) * inv;
  if (v < 0 || u + v > 1) return -1;
  return (e2x * qx + e2y * qy + e2z * qz) * inv;
}

// Ericson: closest point on triangle to point
function ptTri(px, py, pz, ax, ay, az, bx, by, bz, cx, cy, cz, out) {
  const abx = bx - ax, aby = by - ay, abz = bz - az, acx = cx - ax, acy = cy - ay, acz = cz - az;
  const apx = px - ax, apy = py - ay, apz = pz - az;
  const d1 = abx * apx + aby * apy + abz * apz, d2 = acx * apx + acy * apy + acz * apz;
  if (d1 <= 0 && d2 <= 0) { out[0] = ax; out[1] = ay; out[2] = az; return; }
  const bpx = px - bx, bpy = py - by, bpz = pz - bz;
  const d3 = abx * bpx + aby * bpy + abz * bpz, d4 = acx * bpx + acy * bpy + acz * bpz;
  if (d3 >= 0 && d4 <= d3) { out[0] = bx; out[1] = by; out[2] = bz; return; }
  const vc = d1 * d4 - d3 * d2;
  if (vc <= 0 && d1 >= 0 && d3 <= 0) { const v = d1 / (d1 - d3); out[0] = ax + abx * v; out[1] = ay + aby * v; out[2] = az + abz * v; return; }
  const cpx = px - cx, cpy = py - cy, cpz = pz - cz;
  const d5 = abx * cpx + aby * cpy + abz * cpz, d6 = acx * cpx + acy * cpy + acz * cpz;
  if (d6 >= 0 && d5 <= d6) { out[0] = cx; out[1] = cy; out[2] = cz; return; }
  const vb = d5 * d2 - d1 * d6;
  if (vb <= 0 && d2 >= 0 && d6 <= 0) { const w = d2 / (d2 - d6); out[0] = ax + acx * w; out[1] = ay + acy * w; out[2] = az + acz * w; return; }
  const va = d3 * d6 - d5 * d4;
  if (va <= 0 && (d4 - d3) >= 0 && (d5 - d6) >= 0) { const w = (d4 - d3) / ((d4 - d3) + (d5 - d6)); out[0] = bx + (cx - bx) * w; out[1] = by + (cy - by) * w; out[2] = bz + (cz - bz) * w; return; }
  const den = 1 / (va + vb + vc), v = vb * den, w = vc * den;
  out[0] = ax + abx * v + acx * w; out[1] = ay + aby * v + acy * w; out[2] = az + abz * v + acz * w;
}

// Ericson: closest points between segments; returns squared distance; out = [p..., q...]
function segSeg(p1x, p1y, p1z, q1x, q1y, q1z, p2x, p2y, p2z, q2x, q2y, q2z, out) {
  const d1x = q1x - p1x, d1y = q1y - p1y, d1z = q1z - p1z, d2x = q2x - p2x, d2y = q2y - p2y, d2z = q2z - p2z;
  const rx = p1x - p2x, ry = p1y - p2y, rz = p1z - p2z;
  const a = d1x * d1x + d1y * d1y + d1z * d1z, e = d2x * d2x + d2y * d2y + d2z * d2z, f = d2x * rx + d2y * ry + d2z * rz;
  let s, t;
  if (a <= EPS && e <= EPS) { s = t = 0; }
  else if (a <= EPS) { s = 0; t = Math.min(1, Math.max(0, f / e)); }
  else {
    const c = d1x * rx + d1y * ry + d1z * rz;
    if (e <= EPS) { t = 0; s = Math.min(1, Math.max(0, -c / a)); }
    else {
      const b = d1x * d2x + d1y * d2y + d1z * d2z, den = a * e - b * b;
      s = den !== 0 ? Math.min(1, Math.max(0, (b * f - c * e) / den)) : 0;
      t = (b * s + f) / e;
      if (t < 0) { t = 0; s = Math.min(1, Math.max(0, -c / a)); }
      else if (t > 1) { t = 1; s = Math.min(1, Math.max(0, (b - c) / a)); }
    }
  }
  out[0] = p1x + d1x * s; out[1] = p1y + d1y * s; out[2] = p1z + d1z * s;
  out[3] = p2x + d2x * t; out[4] = p2y + d2y * t; out[5] = p2z + d2z * t;
  return (out[0] - out[3]) ** 2 + (out[1] - out[4]) ** 2 + (out[2] - out[5]) ** 2;
}
