// First-person hands: right hand holds/throws the disc, left hand points when you blink
import * as THREE from 'three';
import { discModel, WEAPONS } from './disc.js';
import { customHand } from './custom.js';

const lerpArr = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);
const easeOut = t => 1 - Math.pow(1 - t, 3);

export class Hand {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, 1, 0.01, 10);
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0xb9bec6, 1.15));
    const d = new THREE.DirectionalLight(0xfff4e8, 1.3); d.position.set(1, 2, 1); this.scene.add(d);
    const rim = new THREE.DirectionalLight(0xcfe0ff, 0.6); rim.position.set(-1.5, 0.5, -1); this.scene.add(rim);
    const sleeve = new THREE.MeshStandardMaterial({ color: 0xcfcfca, roughness: 0.85 });
    const glove = new THREE.MeshStandardMaterial({ color: 0x222226, roughness: 0.6 });
    const orange = new THREE.MeshStandardMaterial({ color: 0xff5a1f, roughness: 0.4, emissive: 0x401000 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x1a1a1e, roughness: 0.4 });
    const arm = (parent, side = 'right') => {
      const ch = customHand(side);                   // public/custom/hands/right.glb · left.glb
      if (ch) { parent.add(ch); return; }
      const fore = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.06, 0.44, 12), sleeve);
      fore.rotation.x = Math.PI / 2; fore.position.set(0, -0.02, 0.27); parent.add(fore);
      const band = new THREE.Mesh(new THREE.CylinderGeometry(0.051, 0.051, 0.03, 12), orange); band.rotation.x = Math.PI / 2; band.position.set(0, -0.02, 0.08); parent.add(band);
      parent.add(new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.09, 0.1), glove));
      const thumb = new THREE.Mesh(new THREE.BoxGeometry(0.022, 0.022, 0.06), glove); thumb.position.set(0.045, 0.03, -0.03); parent.add(thumb);
    };
    this.right = new THREE.Group(); this.scene.add(this.right); arm(this.right);
    this.left = new THREE.Group(); this.scene.add(this.left); arm(this.left, 'left');
    // keep the viewmodel small: the arena and the disc in flight are what matter
    this.right.scale.setScalar(0.6); this.left.scale.setScalar(0.6); this.left.visible = false;
    // disc held flat in the right hand
    const disc = this.disc = new THREE.Group();
    this.setWeapon(WEAPONS.disc, 0xff5a1f);
    disc.scale.setScalar(0.7); disc.rotation.x = -Math.PI / 2 + 0.22; disc.position.set(-0.02, 0.03, -0.12);
    this.right.add(disc);
    this.t = 0; this.bob = 0; this.swayX = 0; this.swayY = 0;
    this.anim = null; this.leftAnim = null;
  }
  setWeapon(w, color, wskin = 'std') {
    this.disc.clear();
    this.disc.add(discModel(color, w, 0.5 * Math.min(1.1, w.scale), 0.3, wskin)); // close to the lens: much less glow
  }
  resize(a) { this.camera.aspect = a; this.camera.updateProjectionMatrix(); }
  throwAnim() { this.anim = { t: 0, dur: 0.28, k: 'throw' }; }
  catchAnim() { this.anim = { t: 0, dur: 0.22, k: 'catch' }; }
  blinkAnim() { this.leftAnim = { t: 0, dur: 0.35 }; }

  update(dt, s) {
    this.t += dt;
    this.swayX += (-s.mx * 0.0005 - this.swayX) * Math.min(1, dt * 12);
    this.swayY += (s.my * 0.0005 - this.swayY) * Math.min(1, dt * 12);
    this.swayX = THREE.MathUtils.clamp(this.swayX, -0.06, 0.06); this.swayY = THREE.MathUtils.clamp(this.swayY, -0.05, 0.05);
    if (s.grounded) this.bob += dt * (3 + s.hs * 0.6);
    const ba = s.grounded ? Math.min(1, s.hs / 11) : 0;
    const bx = Math.sin(this.bob) * 0.012 * ba, by = -Math.abs(Math.cos(this.bob)) * 0.015 * ba;
    const fall = THREE.MathUtils.clamp(-s.vy * 0.003, -0.04, 0.05);
    // right hand
    let R = [0.25, -0.24, -0.5, 0.15, -0.15, 0.1];
    const out = s.discOut;
    if (out) R = [0.3, -0.52, -0.45, -0.35, -0.1, 0.2];
    if (this.anim) {
      const a = this.anim; a.t += dt; const u = Math.min(1, a.t / a.dur);
      if (a.k === 'throw') {
        const wind = [0.38, -0.2, -0.3, 0.2, 0.6, 0.4], rel = [0.0, -0.18, -0.75, -0.25, -0.5, -0.2];
        R = u < 0.3 ? lerpArr(R, wind, easeOut(u / 0.3)) : u < 0.6 ? lerpArr(wind, rel, easeOut((u - 0.3) / 0.3)) : lerpArr(rel, R, (u - 0.6) / 0.4);
      } else {
        const k = Math.sin(u * Math.PI);
        R = lerpArr(R, [0.24, -0.22, -0.52, 0.35, -0.2, 0.2], k);
      }
      if (u >= 1) this.anim = null;
    }
    this.disc.visible = !out;
    this.right.position.set(R[0] + this.swayX + bx, R[1] + this.swayY + by + fall, R[2]);
    this.right.rotation.set(R[3] + this.swayY * 2, R[4] + this.swayX * 2, R[5]);
    // left hand: low unless blinking
    let L = [-0.3, -0.42, -0.4, -0.2, 0.2, -0.1];
    if (this.leftAnim) {
      const a = this.leftAnim; a.t += dt; const u = Math.min(1, a.t / a.dur);
      const k = u < 0.3 ? easeOut(u / 0.3) : 1 - (u - 0.3) / 0.7;
      L = lerpArr(L, [-0.12, -0.12, -0.62, 0.05, 0, -0.3], k);
      if (u >= 1) this.leftAnim = null;
    }
    this.left.visible = !!this.leftAnim;
    this.left.position.set(L[0] + this.swayX + bx, L[1] + this.swayY + by + fall, L[2]);
    this.left.rotation.set(L[3] + this.swayY * 2, L[4] + this.swayX * 2, L[5]);
    this.disc.rotation.z += dt * (out ? 0 : 1.5);
  }
}
