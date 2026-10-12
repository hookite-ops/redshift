// Sky dome, distant skyline, flying traffic, rain, lighting rig
import * as THREE from 'three';
import { rng, facadeTexture } from './textures.js';

export class Atmosphere {
  constructor(scene, Q) {
    this.scene = scene; this.Q = Q;
    this.updaters = [];
    this.sky();
    this.lights();
    this.skyline();
    this.traffic();
    if (Q.rain) this.rain();
  }

  sky() {
    const mat = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: { time: { value: 0 } },
      vertexShader: `varying vec3 vP; void main(){ vP = normalize(position); vec4 p = projectionMatrix*modelViewMatrix*vec4(position,1.); gl_Position = p.xyww; }`,
      fragmentShader: `
        varying vec3 vP; uniform float time;
        float h(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,45.164)))*43758.5453); }
        float h2(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
        float n2(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
          return mix(mix(h2(i),h2(i+vec2(1,0)),f.x), mix(h2(i+vec2(0,1)),h2(i+vec2(1,1)),f.x), f.y); }
        float fbm(vec2 p){ float s=0., a=.5; for(int i=0;i<5;i++){ s+=a*n2(p); p*=2.03; a*=.5; } return s; }
        void main(){
          vec3 d = normalize(vP);
          float y = d.y;
          vec3 top = vec3(0.012,0.008,0.03);
          vec3 mid = vec3(0.09,0.012,0.06);
          vec3 hor = vec3(0.42,0.04,0.11);
          vec3 c = mix(hor, mid, smoothstep(-0.02, 0.2, y));
          c = mix(c, top, smoothstep(0.18, 0.75, y));
          // city glow at horizon
          c += vec3(0.5,0.06,0.12) * exp(-max(y,0.)*14.) * 0.6;
          // moon
          vec3 md = normalize(vec3(-0.35, 0.42, -0.84));
          float mdot = dot(d, md);
          float moon = smoothstep(0.9988, 0.9991, mdot);
          vec2 mp = (d - md*mdot).xy * 80.;
          float crater = fbm(mp*0.6 + 3.);
          c = mix(c, vec3(1.0,0.86,0.86) * (0.7 + 0.5*crater), moon);
          c += vec3(0.9,0.35,0.45) * pow(max(mdot,0.), 400.) * 0.7;
          c += vec3(0.5,0.12,0.2) * pow(max(mdot,0.), 30.) * 0.15;
          // clouds (two layers drifting), lit from below by the city
          if (y > 0.0) {
            vec2 uv = d.xz / (y + 0.12);
            float cl = fbm(uv * 0.9 + vec2(time*0.006, time*0.002));
            float cl2 = fbm(uv * 2.2 - vec2(time*0.01, 0.));
            float cov = smoothstep(0.48, 0.85, cl*0.7 + cl2*0.35);
            vec3 cc = mix(vec3(0.35,0.05,0.12), vec3(0.06,0.02,0.07), smoothstep(0.,0.5,y));
            c = mix(c, cc, cov * smoothstep(0.0, 0.08, y) * (1.0 - moon));
            // stars where clear
            vec3 sp = floor(d * 360.0);
            float st = step(0.9965, h(sp)) * smoothstep(0.12, 0.45, y) * (1.0 - cov);
            c += vec3(st) * (0.4 + 0.6*sin(time*2.0 + h(sp)*40.0));
          }
          gl_FragColor = vec4(c, 1.0);
        }`
    });
    this.skyMesh = new THREE.Mesh(new THREE.SphereGeometry(1200, 64, 32), mat);
    this.skyMesh.frustumCulled = false;
    this.scene.add(this.skyMesh);
    this.scene.fog = new THREE.FogExp2(0x1c0712, 0.0042);
    this.scene.background = new THREE.Color(0x05020a);
  }

  lights() {
    const S = this.scene, Q = this.Q;
    S.add(new THREE.HemisphereLight(0x7a6ab8, 0x2a0a14, 0.6));
    const moon = new THREE.DirectionalLight(0xc8b8ff, 1.15);
    moon.position.set(-60, 110, -140);
    moon.castShadow = Q.shadows;
    if (Q.shadows) {
      moon.shadow.mapSize.set(Q.shadowSize, Q.shadowSize);
      const sc = moon.shadow.camera; sc.left = -80; sc.right = 80; sc.top = 80; sc.bottom = -80; sc.near = 20; sc.far = 400;
      moon.shadow.bias = -0.0003; moon.shadow.normalBias = 0.05;
    }
    S.add(moon); S.add(moon.target);
    this.moon = moon;
    const rim = new THREE.DirectionalLight(0xff3050, 0.55); rim.position.set(80, 30, 120); S.add(rim);
    const fill = new THREE.DirectionalLight(0x30c8ff, 0.3); fill.position.set(-100, 20, 60); S.add(fill);
    if (Q.lights) {
      const pts = [[0, 4, 0, 0xff2240, 40, 80], [0, 26, 0, 0x30e0ff, 30, 50], [55, 9, 0, 0xffa020, 26, 40], [-55, 9, 0, 0xffa020, 26, 40], [0, 9, 55, 0xff2240, 26, 40], [0, 9, -55, 0xff2240, 26, 40],
      [-34, 6, 96, 0xff40c0, 30, 60], [90, 8, -10, 0xffa020, 30, 50], [-86, 6, 0, 0xffa020, 30, 50], [0, 8, -96, 0x30e0ff, 30, 60]];
      for (const [x, y, z, c, d, i] of pts) { const l = new THREE.PointLight(c, i, d, 1.6); l.position.set(x, y, z); S.add(l); }
    }
  }

  skyline() {
    const R = rng(4242);
    const fac = [facadeTexture(901, 0), facadeTexture(902, 1), facadeTexture(903, 2)];
    const mats = fac.map(f => new THREE.MeshBasicMaterial({ map: f.emissive, color: 0xbbaaff, fog: true }));
    const base = new THREE.MeshBasicMaterial({ color: 0x0a0810 });
    const N = 160;
    const geo = new THREE.BoxGeometry(1, 1, 1);
    const inst = mats.map(m => new THREE.InstancedMesh(geo, [base, base, m, base, m, m].map((x, i) => i === 2 ? base : m), N));
    const counts = [0, 0, 0];
    const mtx = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
    for (let i = 0; i < N * 3; i++) {
      const a = R() * Math.PI * 2, r = 180 + R() * 420;
      const w = 14 + R() * 34, h = 50 + R() * 220 * (r > 350 ? 1.3 : 1);
      const k = i % 3; if (counts[k] >= N) continue;
      q.setFromEuler(new THREE.Euler(0, R() * Math.PI, 0));
      p.set(Math.cos(a) * r, h / 2, Math.sin(a) * r); s.set(w, h, w * (0.6 + R() * 0.8));
      mtx.compose(p, q, s); inst[k].setMatrixAt(counts[k]++, mtx);
    }
    // per-instance UV scaling isn't available; textures stretch — fine at distance
    inst.forEach((m, k) => { m.count = counts[k]; m.frustumCulled = false; this.scene.add(m); });
    // tall spires with blinking beacons
    const bgeo = new THREE.SphereGeometry(1.4, 8, 6);
    const bmat = new THREE.MeshBasicMaterial({ color: new THREE.Color(0xff2040).multiplyScalar(4) });
    const beacons = new THREE.InstancedMesh(bgeo, bmat, 40);
    for (let i = 0; i < 40; i++) {
      const a = R() * Math.PI * 2, r = 220 + R() * 300;
      mtx.makeTranslation(Math.cos(a) * r, 120 + R() * 180, Math.sin(a) * r); beacons.setMatrixAt(i, mtx);
    }
    this.scene.add(beacons);
    this.updaters.push(t => { beacons.visible = Math.sin(t * 2.4) > -0.2; });
  }

  traffic() {
    const N = this.Q.traffic;
    const geo = new THREE.BoxGeometry(2.2, 0.7, 4.4);
    const body = new THREE.InstancedMesh(geo, new THREE.MeshBasicMaterial({ color: 0x15121c }), N);
    const lgeo = new THREE.BoxGeometry(2.0, 0.25, 0.2);
    const tail = new THREE.InstancedMesh(lgeo, new THREE.MeshBasicMaterial({ color: new THREE.Color(0xff1030).multiplyScalar(5) }), N);
    const head = new THREE.InstancedMesh(lgeo, new THREE.MeshBasicMaterial({ color: new THREE.Color(0xfff0d0).multiplyScalar(4) }), N);
    const R = rng(77);
    const cars = [];
    for (let i = 0; i < N; i++) {
      const lane = i % 6;
      cars.push({ r: 150 + lane * 22 + R() * 6, y: 55 + lane * 9 + R() * 4, a: R() * Math.PI * 2, s: (lane % 2 ? 1 : -1) * (0.05 + R() * 0.05) });
    }
    [body, tail, head].forEach(m => { m.frustumCulled = false; this.scene.add(m); });
    const mtx = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1), off = new THREE.Vector3();
    this.updaters.push((t, dt) => {
      for (let i = 0; i < N; i++) {
        const c = cars[i]; c.a += c.s * dt;
        p.set(Math.cos(c.a) * c.r, c.y + Math.sin(t + i) * 0.5, Math.sin(c.a) * c.r);
        const yaw = -c.a + (c.s > 0 ? 0 : Math.PI);
        q.setFromAxisAngle(THREE.Object3D.DEFAULT_UP, yaw);
        mtx.compose(p, q, one); body.setMatrixAt(i, mtx);
        off.set(0, 0, -2.25).applyQuaternion(q).add(p); mtx.compose(off, q, one); tail.setMatrixAt(i, mtx);
        off.set(0, 0, 2.25).applyQuaternion(q).add(p); mtx.compose(off, q, one); head.setMatrixAt(i, mtx);
      }
      body.instanceMatrix.needsUpdate = tail.instanceMatrix.needsUpdate = head.instanceMatrix.needsUpdate = true;
    });
  }

  rain() {
    const N = this.Q.rainCount;
    const pos = new Float32Array(N * 6);
    this.rainData = new Float32Array(N * 4);
    for (let i = 0; i < N; i++) {
      this.rainData[i * 4] = (Math.random() - 0.5) * 80; this.rainData[i * 4 + 1] = Math.random() * 40;
      this.rainData[i * 4 + 2] = (Math.random() - 0.5) * 80; this.rainData[i * 4 + 3] = 28 + Math.random() * 10;
    }
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
    const mat = new THREE.LineBasicMaterial({ color: 0x9aa8d8, transparent: true, opacity: 0.32, blending: THREE.AdditiveBlending, depthWrite: false });
    const lines = new THREE.LineSegments(geo, mat); lines.frustumCulled = false;
    this.scene.add(lines);
    this.rainLines = lines;
    this.rainCenter = new THREE.Vector3();
  }

  update(t, dt, camPos, playerVel) {
    this.skyMesh.material.uniforms.time.value = t;
    this.skyMesh.position.copy(camPos);
    for (const f of this.updaters) f(t, dt);
    // keep the shadow frustum on the player
    this.moon.position.set(camPos.x - 60, 110, camPos.z - 140);
    this.moon.target.position.set(camPos.x, 0, camPos.z);
    if (this.rainLines) {
      const N = this.Q.rainCount, D = this.rainData, P = this.rainLines.geometry.attributes.position.array;
      const wx = 2.5 - (playerVel ? playerVel.x * 0.25 : 0), wz = 1.0 - (playerVel ? playerVel.z * 0.25 : 0);
      for (let i = 0; i < N; i++) {
        let x = D[i * 4], y = D[i * 4 + 1], z = D[i * 4 + 2]; const sp = D[i * 4 + 3];
        y -= sp * dt; x += 2.5 * dt; z += 1.0 * dt;
        // wrap around camera
        const rx = x - camPos.x, rz = z - camPos.z;
        if (y < 0 || rx > 40 || rx < -40 || rz > 40 || rz < -40) { x = camPos.x + (Math.random() - 0.5) * 80; z = camPos.z + (Math.random() - 0.5) * 80; y = camPos.y + 10 + Math.random() * 30; }
        D[i * 4] = x; D[i * 4 + 1] = y; D[i * 4 + 2] = z;
        const L = 0.06;
        P[i * 6] = x; P[i * 6 + 1] = y; P[i * 6 + 2] = z;
        P[i * 6 + 3] = x - (2.5 - wx) * L * 0 + wx * L; P[i * 6 + 4] = y + sp * L; P[i * 6 + 5] = z + wz * L;
      }
      this.rainLines.geometry.attributes.position.needsUpdate = true;
    }
  }
}
