// Menu weapon showcase: the selected weapon slowly turning on a little stage, with its stats.
// Own small renderer (transparent canvas), only drawn while the menu is open.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { WEAPONS } from './disc.js';
import { buildWeaponModel } from './weapons3d.js';

export class WeaponView {
  constructor(canvas, color = 0xff4f14) {
    this.canvas = canvas; this.color = color;
    const r = this.r = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
    r.setPixelRatio(Math.min(2, devicePixelRatio)); r.toneMapping = THREE.NeutralToneMapping; r.toneMappingExposure = 1.05;
    const sc = this.scene = new THREE.Scene();
    const pm = new THREE.PMREMGenerator(r);
    sc.environment = pm.fromScene(new RoomEnvironment(), 0.03).texture; pm.dispose();
    sc.add(new THREE.HemisphereLight(0xffffff, 0xb8bec8, 0.8));
    const key = new THREE.DirectionalLight(0xffffff, 2.2); key.position.set(2, 3, 4); sc.add(key);
    const rim = new THREE.DirectionalLight(0xffd9c8, 1.2); rim.position.set(-3, 1, -2); sc.add(rim);
    this.cam = new THREE.PerspectiveCamera(30, 2, 0.1, 20); this.cam.position.set(0, 0.35, 2.4); this.cam.lookAt(0, 0, 0);
    // soft floor shadow + glowing ring under the model
    const sh = document.createElement('canvas'); sh.width = sh.height = 128;
    const g = sh.getContext('2d'), gr = g.createRadialGradient(64, 64, 4, 64, 64, 62);
    gr.addColorStop(0, 'rgba(14,17,22,.35)'); gr.addColorStop(1, 'rgba(14,17,22,0)'); g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
    const shadow = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1.5), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(sh), transparent: true, depthWrite: false }));
    shadow.rotation.x = -Math.PI / 2; shadow.position.y = -0.42; sc.add(shadow);
    const ringM = new THREE.Mesh(new THREE.RingGeometry(0.5, 0.515, 96), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.6 }));
    ringM.rotation.x = -Math.PI / 2; ringM.position.y = -0.415; sc.add(ringM);
    this.pivot = new THREE.Group(); sc.add(this.pivot);
    this.t = 0; this.id = null; this.spin = 0;
    this.resize();
  }
  resize() {
    const w = this.canvas.clientWidth || 300, h = this.canvas.clientHeight || 150;
    if (w === this._w && h === this._h) return; this._w = w; this._h = h;
    this.r.setSize(w, h, false); this.cam.aspect = w / h; this.cam.updateProjectionMatrix();
  }
  set(id) {
    if (id === this.id) return; this.id = id;
    this.pivot.clear();
    const w = WEAPONS[id] || WEAPONS.disc;
    this.model = buildWeaponModel(this.color, w, 0.82, 1, 1);
    this.pivot.add(this.model);
    this.pop = 0;
  }
  frame(dt) {
    this.resize();
    this.t += dt; this.pop = Math.min(1, (this.pop || 0) + dt * 4);
    const e = 1 - Math.pow(1 - this.pop, 3);
    this.pivot.position.y = Math.sin(this.t * 1.6) * 0.03;
    this.pivot.rotation.set(-0.62 + Math.sin(this.t * 0.7) * 0.08, Math.sin(this.t * 0.5) * 0.55, 0);
    this.pivot.scale.setScalar(0.85 + 0.15 * e);
    if (this.model) this.model.rotation.z += dt * 1.2;
    this.r.render(this.scene, this.cam);
  }
}
