// Effects that read on a white background (normal blending, solid colours)
import * as THREE from 'three';

export class Particles {
  constructor(scene, max = 3000) {
    this.max = max; this.n = 0;
    this.pos = new Float32Array(max * 3); this.vel = new Float32Array(max * 3); this.col = new Float32Array(max * 3);
    this.size = new Float32Array(max); this.life = new Float32Array(max); this.maxLife = new Float32Array(max);
    this.grav = new Float32Array(max); this.drag = new Float32Array(max); this.alpha = new Float32Array(max);
    const g = this.geo = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('size', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    this.mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      uniforms: { scale: { value: 300 } },
      vertexShader: `attribute float alpha; attribute float size; attribute vec3 color; varying float vA; varying vec3 vC; uniform float scale;
        void main(){ vA = alpha; vC = color; vec4 mv = modelViewMatrix * vec4(position,1.); gl_PointSize = max(2.0, size * scale / -mv.z); gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `varying float vA; varying vec3 vC; void main(){ vec2 p = gl_PointCoord - .5; if (max(abs(p.x), abs(p.y)) > 0.5) discard; gl_FragColor = vec4(vC, vA); }`,
    });
    this.points = new THREE.Points(g, this.mat); this.points.frustumCulled = false; scene.add(this.points);
  }
  emit(p, count, { color = [0.1, 0.1, 0.1], speed = 7, dir = null, spread = 1, size = 0.12, life = 0.6, gravity = 14, drag = 1.5 } = {}) {
    for (let k = 0; k < count; k++) {
      const i = this.n < this.max ? this.n++ : (Math.random() * this.max) | 0;
      this.pos[i * 3] = p.x; this.pos[i * 3 + 1] = p.y; this.pos[i * 3 + 2] = p.z;
      let vx = Math.random() * 2 - 1, vy = Math.random() * 2 - 1, vz = Math.random() * 2 - 1;
      const l = Math.hypot(vx, vy, vz) || 1; vx /= l; vy /= l; vz /= l;
      if (dir) { vx = dir.x + vx * spread; vy = dir.y + vy * spread; vz = dir.z + vz * spread; }
      const s = speed * (0.3 + Math.random() * 0.9);
      this.vel[i * 3] = vx * s; this.vel[i * 3 + 1] = vy * s; this.vel[i * 3 + 2] = vz * s;
      const c = Array.isArray(color[0]) ? color[(Math.random() * color.length) | 0] : color;
      this.col[i * 3] = c[0]; this.col[i * 3 + 1] = c[1]; this.col[i * 3 + 2] = c[2];
      this.size[i] = size * (0.5 + Math.random());
      this.life[i] = this.maxLife[i] = life * (0.5 + Math.random() * 0.8);
      this.grav[i] = gravity; this.drag[i] = drag;
    }
  }
  update(dt) {
    let n = this.n;
    for (let i = 0; i < n; i++) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        n--;
        if (i !== n) {
          for (let c = 0; c < 3; c++) { this.pos[i * 3 + c] = this.pos[n * 3 + c]; this.vel[i * 3 + c] = this.vel[n * 3 + c]; this.col[i * 3 + c] = this.col[n * 3 + c]; }
          this.size[i] = this.size[n]; this.life[i] = this.life[n]; this.maxLife[i] = this.maxLife[n]; this.grav[i] = this.grav[n]; this.drag[i] = this.drag[n];
        }
        i--; continue;
      }
      const d = Math.exp(-this.drag[i] * dt);
      this.vel[i * 3] *= d; this.vel[i * 3 + 1] = this.vel[i * 3 + 1] * d - this.grav[i] * dt; this.vel[i * 3 + 2] *= d;
      this.pos[i * 3] += this.vel[i * 3] * dt; this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt; this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      if (this.pos[i * 3 + 1] < 0.03) { this.pos[i * 3 + 1] = 0.03; this.vel[i * 3 + 1] *= -0.3; this.vel[i * 3] *= 0.6; this.vel[i * 3 + 2] *= 0.6; }
      this.alpha[i] = Math.min(1, this.life[i] / this.maxLife[i] * 2);
    }
    this.n = n; this.geo.setDrawRange(0, n);
    const a = this.geo.attributes; a.position.needsUpdate = a.color.needsUpdate = a.alpha.needsUpdate = a.size.needsUpdate = true;
  }
}

// Expanding rings on the floor / in the air
export class Rings {
  constructor(scene) { this.scene = scene; this.list = []; this.geo = new THREE.RingGeometry(0.9, 1, 48); }
  add(p, color, size = 3, life = 0.4, normal = null) {
    const m = new THREE.Mesh(this.geo, new THREE.MeshBasicMaterial({ color, transparent: true, side: THREE.DoubleSide, depthWrite: false }));
    m.position.copy(p); if (normal) m.lookAt(p.clone().add(normal)); else m.rotation.x = -Math.PI / 2;
    this.scene.add(m); this.list.push({ m, life, max: life, size });
  }
  update(dt) {
    for (let i = this.list.length - 1; i >= 0; i--) {
      const r = this.list[i]; r.life -= dt; const k = 1 - r.life / r.max;
      r.m.scale.setScalar(Math.max(0.01, r.size * (0.15 + (1 - Math.pow(1 - k, 3)) * 0.85)));
      r.m.material.opacity = Math.max(0, 1 - k);
      if (r.life <= 0) { this.scene.remove(r.m); r.m.material.dispose(); this.list.splice(i, 1); }
    }
  }
}

// camera-facing ribbon that follows a moving point (disc trail)
export class Ribbon {
  constructor(scene, n = 24, color = 0xff5a1f, width = 0.28) {
    this.n = n; this.width = width; this.pts = [];
    const g = this.geo = new THREE.BufferGeometry();
    this.p = new Float32Array(n * 2 * 3); this.a = new Float32Array(n * 2);
    g.setAttribute('position', new THREE.BufferAttribute(this.p, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('alpha', new THREE.BufferAttribute(this.a, 1).setUsage(THREE.DynamicDrawUsage));
    const idx = []; for (let i = 0; i < n - 1; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); } g.setIndex(idx);
    this.mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, side: THREE.DoubleSide,
      uniforms: { color: { value: new THREE.Color(color) } },
      vertexShader: `attribute float alpha; varying float vA; void main(){ vA = alpha; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
      fragmentShader: `uniform vec3 color; varying float vA; void main(){ gl_FragColor = vec4(color, vA * 0.75); }`,
    });
    this.mesh = new THREE.Mesh(g, this.mat); this.mesh.frustumCulled = false; scene.add(this.mesh);
  }
  reset() { this.pts.length = 0; }
  update(head, camPos, on) {
    if (on) { this.pts.unshift(head.clone()); if (this.pts.length > this.n) this.pts.pop(); }
    else if (this.pts.length) this.pts.pop();
    const m = this.pts.length;
    this.mesh.visible = m > 1;
    if (m < 2) return;
    const side = new THREE.Vector3(), seg = new THREE.Vector3(), view = new THREE.Vector3();
    for (let i = 0; i < this.n; i++) {
      const p = this.pts[Math.min(i, m - 1)], q = this.pts[Math.min(i + 1, m - 1)] || p;
      seg.subVectors(p, q); if (seg.lengthSq() < 1e-6) seg.set(1, 0, 0);
      view.subVectors(camPos, p);
      side.crossVectors(seg, view).normalize().multiplyScalar(this.width * (1 - i / this.n));
      this.p.set([p.x + side.x, p.y + side.y, p.z + side.z], i * 6);
      this.p.set([p.x - side.x, p.y - side.y, p.z - side.z], i * 6 + 3);
      const a = i < m ? 1 - i / Math.min(this.n, m) : 0;
      this.a[i * 2] = this.a[i * 2 + 1] = a;
    }
    this.geo.attributes.position.needsUpdate = true; this.geo.attributes.alpha.needsUpdate = true;
  }
}

// grey streaks that rush past the camera when you are fast — the main "speed" read on a white arena
export class SpeedLines {
  constructor(scene, n = 90) {
    this.n = n;
    this.arr = new Float32Array(n * 6);
    this.pts = Array.from({ length: n }, () => new THREE.Vector3(1e5, 0, 0));
    const g = this.geo = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.arr, 3).setUsage(THREE.DynamicDrawUsage));
    this.mat = new THREE.LineBasicMaterial({ color: 0x7c7c78, transparent: true, opacity: 0, depthWrite: false });
    this.mesh = new THREE.LineSegments(g, this.mat); this.mesh.frustumCulled = false; this.mesh.visible = false;
    scene.add(this.mesh);
    this.dir = new THREE.Vector3(); this.side = new THREE.Vector3(); this.up = new THREE.Vector3(); this.tmp = new THREE.Vector3();
  }
  update(cam, vel, amt) {
    if (amt < 0.02) { this.mesh.visible = false; return; }
    const sp = vel.length(); if (sp < 1) { this.mesh.visible = false; return; }
    this.mesh.visible = true; this.mat.opacity = Math.min(0.6, amt * 0.6);
    const d = this.dir.copy(vel).divideScalar(sp);
    this.side.set(-d.z, 0, d.x); if (this.side.lengthSq() < 1e-4) this.side.set(1, 0, 0); this.side.normalize();
    this.up.crossVectors(this.side, d).normalize();
    const len = Math.min(9, sp * 0.12);
    for (let i = 0; i < this.n; i++) {
      const p = this.pts[i];
      const rel = this.tmp.subVectors(p, cam);
      const along = rel.dot(d);
      if (along < -4 || rel.lengthSq() > 45 * 45) {
        // respawn ahead of the camera in a hollow tube around the travel direction
        const a = Math.random() * Math.PI * 2, r = 3.5 + Math.random() * 9;
        p.copy(cam).addScaledVector(d, 12 + Math.random() * 30)
          .addScaledVector(this.side, Math.cos(a) * r).addScaledVector(this.up, Math.sin(a) * r * 0.7);
        if (p.y < 0.15) p.y = 0.15 + Math.random() * 0.5;
      }
      this.arr[i * 6] = p.x; this.arr[i * 6 + 1] = p.y; this.arr[i * 6 + 2] = p.z;
      this.arr[i * 6 + 3] = p.x - d.x * len; this.arr[i * 6 + 4] = p.y - d.y * len; this.arr[i * 6 + 5] = p.z - d.z * len;
    }
    this.geo.attributes.position.needsUpdate = true;
  }
}
