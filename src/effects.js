import * as THREE from 'three';

// GPU point sparks with per-particle color/size/life
export class Sparks {
  constructor(scene, max = 3000) {
    this.max = max; this.n = 0;
    this.pos = new Float32Array(max * 3);
    this.vel = new Float32Array(max * 3);
    this.col = new Float32Array(max * 3);
    this.size = new Float32Array(max);
    this.life = new Float32Array(max);
    this.maxLife = new Float32Array(max);
    this.drag = new Float32Array(max);
    this.grav = new Float32Array(max);
    const g = this.geo = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    this.alpha = new Float32Array(max);
    g.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('size', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    const m = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { scale: { value: 600 } },
      vertexShader: `
        attribute float alpha; attribute float size; attribute vec3 color;
        varying float vA; varying vec3 vC; uniform float scale;
        void main(){ vA = alpha; vC = color;
          vec4 mv = modelViewMatrix * vec4(position,1.);
          gl_PointSize = size * scale / -mv.z;
          gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `
        varying float vA; varying vec3 vC;
        void main(){ vec2 p = gl_PointCoord - .5; float d = length(p);
          float a = smoothstep(.5, .0, d); a = a*a;
          gl_FragColor = vec4(vC * (0.8 + 1.2*a), a * vA); }`
    });
    this.points = new THREE.Points(g, m);
    this.points.frustumCulled = false;
    scene.add(this.points);
  }

  emit(p, count, { color = [1, .2, .25], speed = 8, spread = 1, dir = null, size = 0.25, life = 0.6, drag = 2, gravity = 12 } = {}) {
    for (let k = 0; k < count; k++) {
      const i = this.n < this.max ? this.n++ : (Math.random() * this.max) | 0;
      this.pos[i * 3] = p.x; this.pos[i * 3 + 1] = p.y; this.pos[i * 3 + 2] = p.z;
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
        if (i !== n) { // swap with last
          for (let c = 0; c < 3; c++) {
            this.pos[i * 3 + c] = this.pos[n * 3 + c]; this.vel[i * 3 + c] = this.vel[n * 3 + c]; this.col[i * 3 + c] = this.col[n * 3 + c];
          }
          this.size[i] = this.size[n]; this.life[i] = this.life[n]; this.maxLife[i] = this.maxLife[n];
          this.drag[i] = this.drag[n]; this.grav[i] = this.grav[n];
        }
        i--; continue;
      }
      const d = Math.exp(-this.drag[i] * dt);
      this.vel[i * 3] *= d; this.vel[i * 3 + 1] = this.vel[i * 3 + 1] * d - this.grav[i] * dt; this.vel[i * 3 + 2] *= d;
      this.pos[i * 3] += this.vel[i * 3] * dt; this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt; this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      if (this.pos[i * 3 + 1] < 0.02) { this.pos[i * 3 + 1] = 0.02; this.vel[i * 3 + 1] *= -0.4; }
      this.alpha[i] = this.life[i] / this.maxLife[i];
    }
    this.n = n;
    this.geo.setDrawRange(0, n);
    const g = this.geo.attributes;
    g.position.needsUpdate = g.color.needsUpdate = g.alpha.needsUpdate = g.size.needsUpdate = true;
  }
}

// Fading line tracers (bullet trails, slash streaks)
export class Tracers {
  constructor(scene) {
    this.scene = scene; this.list = [];
  }
  add(a, b, color = 0xffd0a0, life = 0.12, width = 0.06) {
    const dir = new THREE.Vector3().subVectors(b, a);
    const len = dir.length();
    const geo = new THREE.CylinderGeometry(width, width * 0.4, len, 6, 1, true);
    geo.translate(0, len / 2, 0); geo.rotateX(Math.PI / 2);
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false }));
    m.position.copy(a); m.lookAt(b);
    this.scene.add(m);
    this.list.push({ m, life, max: life });
  }
  update(dt) {
    for (let i = this.list.length - 1; i >= 0; i--) {
      const t = this.list[i]; t.life -= dt;
      t.m.material.opacity = Math.max(0, t.life / t.max);
      t.m.scale.x = t.m.scale.y = t.life / t.max;
      if (t.life <= 0) { this.scene.remove(t.m); t.m.geometry.dispose(); t.m.material.dispose(); this.list.splice(i, 1); }
    }
  }
}

// Expanding rings / flashes at impact points
export class Bursts {
  constructor(scene) {
    this.scene = scene; this.list = [];
    this.ringGeo = new THREE.RingGeometry(0.85, 1, 48);
    this.flashGeo = new THREE.SphereGeometry(1, 16, 12);
  }
  ring(p, normal, color, size = 3, life = 0.35) {
    const m = new THREE.Mesh(this.ringGeo, new THREE.MeshBasicMaterial({ color, transparent: true, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false }));
    m.position.copy(p);
    if (normal) m.lookAt(p.clone().add(normal)); else m.rotation.x = -Math.PI / 2;
    this.scene.add(m); this.list.push({ m, life, max: life, size, kind: 'ring' });
  }
  flash(p, color, size = 1, life = 0.12) {
    const m = new THREE.Mesh(this.flashGeo, new THREE.MeshBasicMaterial({ color, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    m.position.copy(p); this.scene.add(m); this.list.push({ m, life, max: life, size, kind: 'flash' });
  }
  update(dt) {
    for (let i = this.list.length - 1; i >= 0; i--) {
      const b = this.list[i]; b.life -= dt;
      const k = 1 - b.life / b.max;
      const s = b.kind === 'ring' ? b.size * (0.2 + k * 0.8) : b.size * (1 - k * 0.5);
      b.m.scale.setScalar(Math.max(0.001, s));
      b.m.material.opacity = Math.max(0, 1 - k);
      if (b.life <= 0) { this.scene.remove(b.m); b.m.material.dispose(); this.list.splice(i, 1); }
    }
  }
}

// World-space slash arc (crescent) used for both player and enemy swings
export class SlashArcs {
  constructor(scene) {
    this.scene = scene; this.list = [];
    this.mat = (color) => new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
      uniforms: { t: { value: 0 }, color: { value: new THREE.Color(color) } },
      vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
      fragmentShader: `varying vec2 vUv; uniform float t; uniform vec3 color;
        void main(){
          float ang = vUv.x; float rad = vUv.y;
          float head = 1.0 - t*1.4;
          float tail = smoothstep(head - 0.9, head, ang) * step(ang, head + 0.02);
          float edge = smoothstep(0.0, 0.7, rad) * smoothstep(1.0, 0.85, rad);
          float a = tail * edge * (1.0 - t);
          vec3 c = mix(color, vec3(1.0), smoothstep(0.8, 1.0, rad) * 0.8);
          gl_FragColor = vec4(c * 2.2, a);
        }`
    });
  }
  add(origin, quat, color = 0xff2a48, radius = 2.6, life = 0.22, flip = false, tiltRoll = 0) {
    const geo = new THREE.RingGeometry(radius * 0.35, radius, 40, 1, -Math.PI * 0.55, Math.PI * 1.1);
    // remap uv: x = angle 0..1, y = radius 0..1
    const pos = geo.attributes.position, uv = geo.attributes.uv;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), y = pos.getY(i);
      let a = (Math.atan2(y, x) + Math.PI * 0.55) / (Math.PI * 1.1);
      if (flip) a = 1 - a;
      const r = (Math.hypot(x, y) - radius * 0.35) / (radius * 0.65);
      uv.setXY(i, a, r);
    }
    const m = new THREE.Mesh(geo, this.mat(color));
    m.position.copy(origin); m.quaternion.copy(quat);
    m.rotateX(-Math.PI / 2); m.rotateZ(Math.PI / 2); m.rotateX(tiltRoll);
    this.scene.add(m); this.list.push({ m, life, max: life });
  }
  update(dt) {
    for (let i = this.list.length - 1; i >= 0; i--) {
      const s = this.list[i]; s.life -= dt;
      s.m.material.uniforms.t.value = 1 - s.life / s.max;
      if (s.life <= 0) { this.scene.remove(s.m); s.m.geometry.dispose(); s.m.material.dispose(); this.list.splice(i, 1); }
    }
  }
}

// Post-processing shader: speed lines, radial blur, chromatic aberration, vignette, damage tint, parry flash
export const SpeedShader = {
  uniforms: {
    tDiffuse: { value: null },
    speed: { value: 0 },
    time: { value: 0 },
    damage: { value: 0 },
    flash: { value: 0 },
    slowmo: { value: 0 },
    aspect: { value: 1 },
  },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float speed, time, damage, flash, slowmo, aspect;
    varying vec2 vUv;
    float hash(float n){ return fract(sin(n)*43758.5453); }
    void main(){
      vec2 c = vUv - 0.5;
      float r = length(c * vec2(aspect, 1.0));
      // radial blur toward edges, scaled with speed
      float s = clamp(speed, 0.0, 1.0);
      float blur = s * 0.035 * smoothstep(0.15, 0.7, r);
      vec3 col = vec3(0.0);
      for (int i = 0; i < 8; i++) {
        float k = float(i) / 7.0;
        vec2 uv = vUv - c * blur * k;
        // chromatic aberration
        float ca = (0.002 + s * 0.006 + flash * 0.01) * r;
        col.r += texture2D(tDiffuse, uv + c * ca).r;
        col.g += texture2D(tDiffuse, uv).g;
        col.b += texture2D(tDiffuse, uv - c * ca).b;
      }
      col /= 8.0;
      // speed lines
      float ang = atan(c.y, c.x);
      float lineId = floor(ang * 60.0);
      float lt = fract(hash(lineId) * 10.0 + time * (1.5 + hash(lineId + 3.0) * 2.5));
      float line = smoothstep(0.02, 0.0, abs(fract(ang * 60.0) - 0.5) - 0.42) ;
      float reach = smoothstep(0.32 + lt * 0.3, 0.9, r) * step(0.55, hash(lineId + floor(time * 8.0)));
      col += vec3(1.0, 0.85, 0.9) * line * reach * smoothstep(0.45, 1.0, s) * 0.35;
      // slowmo desaturate + cyan tint
      float g = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(col, vec3(g) * vec3(0.8, 1.0, 1.15), slowmo * 0.6);
      // damage vignette
      float vig = smoothstep(0.35, 0.95, r);
      col = mix(col, col * 0.35, vig * 0.55);
      col += vec3(0.7, 0.0, 0.05) * vig * damage;
      // parry flash
      col += vec3(0.9, 0.95, 1.0) * flash * 0.35 * (1.0 - r);
      gl_FragColor = vec4(col, 1.0);
    }`
};
