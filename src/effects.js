// Particle & screen effects
import * as THREE from 'three';

export class Sparks {
  constructor(scene, max = 4000) {
    this.max = max; this.n = 0;
    this.pos = new Float32Array(max * 3); this.vel = new Float32Array(max * 3); this.col = new Float32Array(max * 3);
    this.size = new Float32Array(max); this.life = new Float32Array(max); this.maxLife = new Float32Array(max);
    this.drag = new Float32Array(max); this.grav = new Float32Array(max); this.alpha = new Float32Array(max);
    const g = this.geo = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('size', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    this.mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { scale: { value: 300 } },
      vertexShader: `attribute float alpha; attribute float size; attribute vec3 color; varying float vA; varying vec3 vC; uniform float scale;
        void main(){ vA = alpha; vC = color; vec4 mv = modelViewMatrix * vec4(position,1.); gl_PointSize = max(1.5, size * scale / -mv.z); gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `varying float vA; varying vec3 vC; void main(){ vec2 p = gl_PointCoord - .5; float d = length(p); float a = smoothstep(.5, .0, d); a *= a; gl_FragColor = vec4(vC * (0.9 + 1.4*a), a * vA); }`
    });
    this.points = new THREE.Points(g, this.mat); this.points.frustumCulled = false; scene.add(this.points);
  }
  emit(p, count, { color = [1, .2, .25], speed = 8, spread = 1, dir = null, size = 0.15, life = 0.6, drag = 2, gravity = 12, jitter = 0 } = {}) {
    for (let k = 0; k < count; k++) {
      const i = this.n < this.max ? this.n++ : (Math.random() * this.max) | 0;
      this.pos[i * 3] = p.x + (Math.random() - 0.5) * jitter; this.pos[i * 3 + 1] = p.y + (Math.random() - 0.5) * jitter; this.pos[i * 3 + 2] = p.z + (Math.random() - 0.5) * jitter;
      let vx = Math.random() * 2 - 1, vy = Math.random() * 2 - 1, vz = Math.random() * 2 - 1;
      const l = Math.hypot(vx, vy, vz) || 1; vx /= l; vy /= l; vz /= l;
      if (dir) { vx = dir.x + vx * spread; vy = dir.y + vy * spread; vz = dir.z + vz * spread; }
      const s = speed * (0.3 + Math.random() * 0.9);
      this.vel[i * 3] = vx * s; this.vel[i * 3 + 1] = vy * s; this.vel[i * 3 + 2] = vz * s;
      this.col[i * 3] = color[0]; this.col[i * 3 + 1] = color[1]; this.col[i * 3 + 2] = color[2];
      this.size[i] = size * (0.5 + Math.random());
      this.life[i] = this.maxLife[i] = life * (0.5 + Math.random() * 0.8);
      this.drag[i] = drag; this.grav[i] = gravity;
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
          this.size[i] = this.size[n]; this.life[i] = this.life[n]; this.maxLife[i] = this.maxLife[n]; this.drag[i] = this.drag[n]; this.grav[i] = this.grav[n];
        }
        i--; continue;
      }
      const d = Math.exp(-this.drag[i] * dt);
      this.vel[i * 3] *= d; this.vel[i * 3 + 1] = this.vel[i * 3 + 1] * d - this.grav[i] * dt; this.vel[i * 3 + 2] *= d;
      this.pos[i * 3] += this.vel[i * 3] * dt; this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt; this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      if (this.pos[i * 3 + 1] < 0.02) { this.pos[i * 3 + 1] = 0.02; this.vel[i * 3 + 1] *= -0.4; }
      this.alpha[i] = this.life[i] / this.maxLife[i];
    }
    this.n = n; this.geo.setDrawRange(0, n);
    const g = this.geo.attributes; g.position.needsUpdate = g.color.needsUpdate = g.alpha.needsUpdate = g.size.needsUpdate = true;
  }
}

export class Tracers {
  constructor(scene) { this.scene = scene; this.list = []; this.geo = new THREE.CylinderGeometry(1, 0.35, 1, 6, 1, true); this.geo.translate(0, 0.5, 0); this.geo.rotateX(Math.PI / 2); }
  add(a, b, color = 0xffd0a0, life = 0.1, width = 0.035, intensity = 3) {
    const len = a.distanceTo(b);
    const m = new THREE.Mesh(this.geo, new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(intensity), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    m.position.copy(a); m.lookAt(b); m.scale.set(width, width, len);
    this.scene.add(m); this.list.push({ m, life, max: life, w: width });
  }
  update(dt) {
    for (let i = this.list.length - 1; i >= 0; i--) {
      const t = this.list[i]; t.life -= dt; const k = Math.max(0, t.life / t.max);
      t.m.material.opacity = k; t.m.scale.x = t.m.scale.y = t.w * k;
      if (t.life <= 0) { this.scene.remove(t.m); t.m.material.dispose(); this.list.splice(i, 1); }
    }
  }
}

export class Bursts {
  constructor(scene) { this.scene = scene; this.list = []; this.ringGeo = new THREE.RingGeometry(0.86, 1, 64); this.flashGeo = new THREE.SphereGeometry(1, 16, 12); this.diskGeo = new THREE.CircleGeometry(1, 32); }
  ring(p, normal, color, size = 3, life = 0.35, intensity = 3) {
    const m = new THREE.Mesh(this.ringGeo, new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(intensity), transparent: true, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false }));
    m.position.copy(p);
    if (normal) m.lookAt(p.clone().add(normal)); else m.rotation.x = -Math.PI / 2;
    this.scene.add(m); this.list.push({ m, life, max: life, size, kind: 'ring' });
  }
  flash(p, color, size = 1, life = 0.12, intensity = 3) {
    const m = new THREE.Mesh(this.flashGeo, new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(intensity), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    m.position.copy(p); this.scene.add(m); this.list.push({ m, life, max: life, size, kind: 'flash' });
  }
  scorch(p, normal, color, size = 0.4, life = 4) {
    const m = new THREE.Mesh(this.diskGeo, new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(2), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }));
    m.position.copy(p).addScaledVector(normal, 0.02); m.lookAt(p.clone().add(normal)); m.scale.setScalar(size);
    this.scene.add(m); this.list.push({ m, life, max: life, size, kind: 'scorch' });
  }
  update(dt) {
    for (let i = this.list.length - 1; i >= 0; i--) {
      const b = this.list[i]; b.life -= dt; const k = 1 - b.life / b.max;
      if (b.kind === 'ring') { b.m.scale.setScalar(Math.max(0.001, b.size * (0.15 + ease(k) * 0.85))); b.m.material.opacity = Math.max(0, 1 - k); }
      else if (b.kind === 'flash') { b.m.scale.setScalar(Math.max(0.001, b.size * (1 - k * 0.6))); b.m.material.opacity = Math.max(0, 1 - k); }
      else { b.m.material.opacity = Math.max(0, 1 - k) * 0.8; }
      if (b.life <= 0) { this.scene.remove(b.m); b.m.material.dispose(); this.list.splice(i, 1); }
    }
  }
}
const ease = t => 1 - Math.pow(1 - t, 3);

export class SlashArcs {
  constructor(scene) { this.scene = scene; this.list = []; }
  mat(color) {
    return new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
      uniforms: { t: { value: 0 }, color: { value: new THREE.Color(color) } },
      vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
      fragmentShader: `varying vec2 vUv; uniform float t; uniform vec3 color;
        void main(){ float head = 1.0 - t*1.5; float tail = smoothstep(head - 0.8, head, vUv.x) * step(vUv.x, head + 0.03);
          float edge = smoothstep(0.0, 0.75, vUv.y) * smoothstep(1.0, 0.86, vUv.y);
          float a = tail * edge * (1.0 - t);
          vec3 c = mix(color, vec3(1.0), smoothstep(0.82, 1.0, vUv.y) * 0.85);
          gl_FragColor = vec4(c * 2.6, a); }`
    });
  }
  add(origin, quat, color = 0xff2a48, radius = 2.6, life = 0.2, flip = false, roll = 0, sweep = 1.1) {
    const geo = new THREE.RingGeometry(radius * 0.32, radius, 48, 1, -Math.PI * sweep / 2, Math.PI * sweep);
    const pos = geo.attributes.position, uv = geo.attributes.uv;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), y = pos.getY(i);
      let a = (Math.atan2(y, x) + Math.PI * sweep / 2) / (Math.PI * sweep); if (flip) a = 1 - a;
      uv.setXY(i, a, (Math.hypot(x, y) - radius * 0.32) / (radius * 0.68));
    }
    const m = new THREE.Mesh(geo, this.mat(color));
    m.position.copy(origin); m.quaternion.copy(quat);
    m.rotateX(-Math.PI / 2); m.rotateZ(Math.PI / 2); m.rotateX(roll);
    this.scene.add(m); this.list.push({ m, life, max: life });
  }
  update(dt) {
    for (let i = this.list.length - 1; i >= 0; i--) {
      const s = this.list[i]; s.life -= dt; s.m.material.uniforms.t.value = 1 - s.life / s.max;
      if (s.life <= 0) { this.scene.remove(s.m); s.m.geometry.dispose(); s.m.material.dispose(); this.list.splice(i, 1); }
    }
  }
}

// World-space wind streaks around a fast-moving player
export class SpeedStreaks {
  constructor(scene, n = 120) {
    this.n = n;
    const geo = new THREE.BufferGeometry();
    this.p = new Float32Array(n * 6); this.data = [];
    geo.setAttribute('position', new THREE.BufferAttribute(this.p, 3).setUsage(THREE.DynamicDrawUsage));
    this.mat = new THREE.LineBasicMaterial({ color: new THREE.Color(1.6, 1.4, 1.6), transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
    this.lines = new THREE.LineSegments(geo, this.mat); this.lines.frustumCulled = false; scene.add(this.lines);
    for (let i = 0; i < n; i++) this.data.push(new THREE.Vector3(), 0);
    this.items = Array.from({ length: n }, () => ({ p: new THREE.Vector3(), life: 0 }));
  }
  update(dt, eye, vel, strength) {
    const sp = vel.length();
    this.mat.opacity = Math.min(0.35, strength * 0.4);
    if (strength <= 0.01) return;
    const dir = vel.clone().divideScalar(sp || 1);
    for (let i = 0; i < this.n; i++) {
      const it = this.items[i];
      it.life -= dt;
      if (it.life <= 0) {
        // spawn ahead of the player in a ring around the view axis
        const a = Math.random() * Math.PI * 2, r = 1.4 + Math.random() * 3.5;
        const side = new THREE.Vector3().crossVectors(dir, Math.abs(dir.y) > 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0)).normalize();
        const up = new THREE.Vector3().crossVectors(side, dir);
        it.p.copy(eye).addScaledVector(dir, 6 + Math.random() * 10).addScaledVector(side, Math.cos(a) * r).addScaledVector(up, Math.sin(a) * r);
        it.life = 0.2 + Math.random() * 0.25;
      }
      const L = Math.min(3, sp * 0.05);
      this.p.set([it.p.x, it.p.y, it.p.z, it.p.x - dir.x * L, it.p.y - dir.y * L, it.p.z - dir.z * L], i * 6);
    }
    this.lines.geometry.attributes.position.needsUpdate = true;
  }
}

// Post-processing: radial blur + CA + speed lines + vignette + grading
export const PostShader = {
  uniforms: {
    tDiffuse: { value: null }, speed: { value: 0 }, time: { value: 0 }, damage: { value: 0 }, flash: { value: 0 },
    slowmo: { value: 0 }, aspect: { value: 1 }, lowhp: { value: 0 }, grain: { value: 0.035 }, blurAmt: { value: 1 }, invert: { value: 0 },
  },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float speed, time, damage, flash, slowmo, aspect, lowhp, grain, blurAmt, invert;
    varying vec2 vUv;
    float hash(float n){ return fract(sin(n)*43758.5453); }
    float h2(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
    void main(){
      vec2 c = vUv - 0.5;
      float r = length(c * vec2(aspect, 1.0));
      float s = clamp(speed, 0.0, 1.0);
      float blur = s * 0.04 * blurAmt * smoothstep(0.12, 0.75, r) + flash * 0.01;
      vec3 col = vec3(0.0);
      float ca = (0.0015 + s * 0.006 + flash * 0.012 + damage * 0.006) * r;
      for (int i = 0; i < 10; i++) {
        float k = float(i) / 9.0;
        vec2 uv = vUv - c * blur * k;
        col.r += texture2D(tDiffuse, uv + c * ca).r;
        col.g += texture2D(tDiffuse, uv).g;
        col.b += texture2D(tDiffuse, uv - c * ca).b;
      }
      col /= 10.0;
      // speed lines
      float ang = atan(c.y, c.x);
      float id = floor(ang * 70.0);
      float lt = fract(hash(id) * 10.0 + time * (1.5 + hash(id + 3.0) * 3.0));
      float line = smoothstep(0.03, 0.0, abs(fract(ang * 70.0) - 0.5) - 0.42);
      float reach = smoothstep(0.34 + lt * 0.28, 0.95, r) * step(0.6, hash(id + floor(time * 10.0)));
      col += vec3(1.0, 0.9, 0.95) * line * reach * smoothstep(0.5, 1.0, s) * 0.28;
      // grading: lift shadows toward violet, keep highlights warm
      col = mix(col, col * vec3(1.04, 0.96, 1.08), 0.5);
      // slowmo / low hp desaturation
      float g = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(col, vec3(g) * vec3(0.85, 1.0, 1.2), slowmo * 0.55);
      col = mix(col, vec3(g) * vec3(1.2, 0.85, 0.85), lowhp * 0.5);
      // vignette + damage
      float vig = smoothstep(0.38, 1.0, r);
      col *= 1.0 - vig * 0.5;
      col += vec3(0.8, 0.0, 0.06) * vig * damage;
      col += vec3(0.9, 0.95, 1.0) * flash * 0.3 * (1.0 - r);
      col = mix(col, vec3(1.0) - col * 0.85, invert);
      // film grain
      col += (h2(vUv * 1000.0 + time) - 0.5) * grain;
      gl_FragColor = vec4(col, 1.0);
    }`
};
