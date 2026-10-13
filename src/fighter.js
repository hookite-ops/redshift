// A FIGHTER is anyone who carries a disc: the human (first person, no model) or a bot (third person body).
import * as THREE from 'three';
import { Player, T } from './player.js';
import { Disc, WEAPONS, discModel } from './disc.js';

export const BOT_ROSTER = [
  { name: 'VEGA', color: 0x2f6bff },
  { name: 'NOVA', color: 0x16a864 },
  { name: 'KITE', color: 0x8a4dff },
  { name: 'FLUX', color: 0xe0a800 },
  { name: 'ECHO', color: 0xff3fa4 },
  { name: 'RAZE', color: 0x12a9b8 },
];

const _v = new THREE.Vector3();

export class Fighter {
  constructor(game, { name, color, isBot, body = null, disc = null, weapon = 'disc', skill = 'reflect' }) {
    this.game = game; this.name = name; this.color = color; this.isBot = isBot;
    this.css = '#' + color.toString(16).padStart(6, '0');
    this.body = body || new Player(game.arena, game.botEvents(this));
    this.body.easy = true; this.body.noWall = true;
    this.disc = disc || new Disc(game, this, color, weapon);
    this.disc.owner = this;
    this.skill = skill; this.skillCd = 0; this.reflectT = 0; this.overT = 0; this.healT = 0;
    this.hp = 100; this.kills = 0; this.deaths = 0; this.alive = true;
    this.respawnT = 0; this.protT = 0; this.invulnT = 0; this.regenT = 0;
    this.lastHitBy = null; this.lastHitT = -9; this.streak = 0;
    this.st = { throws: 0, hits: 0, blinks: 0, slams: 0, dodges: 0, bank: 0, ret: 0 };
    this.center = new THREE.Vector3();
    this.brain = null;
    if (isBot) this.buildModel();
  }

  get invuln() { return this.body.invuln || this.invulnT > 0 || this.protT > 0; }
  updateCenter() { const p = this.body.pos; this.center.set(p.x, p.y + 1.0, p.z); return this.center; }

  // ---------------- bot body ----------------
  buildModel() {
    const dark = new THREE.MeshStandardMaterial({ color: 0x1e1e24, roughness: 0.55, metalness: 0.1 });
    const team = this.teamMat = new THREE.MeshStandardMaterial({ color: this.color, roughness: 0.4, emissive: new THREE.Color(this.color).multiplyScalar(0.3) });
    const white = new THREE.MeshStandardMaterial({ color: 0xf2f2f0, roughness: 0.6 });
    const m = (g, mat, x = 0, y = 0, z = 0) => { const o = new THREE.Mesh(g, mat); o.position.set(x, y, z); o.castShadow = true; return o; };
    const root = this.model = new THREE.Group();
    const body = this.torso = new THREE.Group(); root.add(body);
    body.add(m(new THREE.CapsuleGeometry(0.31, 0.55, 4, 12), dark, 0, 0.98, 0));
    const belt = m(new THREE.TorusGeometry(0.32, 0.05, 8, 24), team, 0, 0.92, 0); belt.rotation.x = Math.PI / 2; body.add(belt);
    body.add(m(new THREE.BoxGeometry(0.42, 0.22, 0.08), white, 0, 1.2, 0.27)); // back plate
    this.head = m(new THREE.SphereGeometry(0.21, 16, 12), dark, 0, 1.64, 0); body.add(this.head);
    this.head.add(m(new THREE.BoxGeometry(0.32, 0.08, 0.1), team, 0, 0.02, -0.17));
    this.legs = [];
    for (const s of [-1, 1]) {
      const leg = new THREE.Group(); leg.position.set(s * 0.13, 0.55, 0);
      leg.add(m(new THREE.CapsuleGeometry(0.09, 0.36, 4, 8), dark, 0, -0.27, 0));
      root.add(leg); this.legs.push(leg);
    }
    // throwing arm with a small copy of the disc
    this.arm = new THREE.Group(); this.arm.position.set(0.36, 1.28, 0); body.add(this.arm);
    this.arm.add(m(new THREE.CapsuleGeometry(0.075, 0.36, 4, 8), dark, 0, -0.22, 0));
    const hd = this.handDisc = new THREE.Group(); hd.position.set(0.04, -0.45, -0.12);
    hd.rotation.y = Math.PI / 2;
    this.arm.add(hd);
    this.setHandDisc();
    // reflect bubble + chat bubble
    this.dome = new THREE.Mesh(new THREE.SphereGeometry(1.15, 24, 16), new THREE.MeshBasicMaterial({ color: this.color, transparent: true, opacity: 0.22, depthWrite: false }));
    this.dome.position.y = 1.0; this.dome.visible = false; root.add(this.dome);
    const bc = this.bubbleCanvas = document.createElement('canvas'); bc.width = 512; bc.height = 96;
    this.bubbleTex = new THREE.CanvasTexture(bc); this.bubbleTex.colorSpace = THREE.SRGBColorSpace;
    this.bubble = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.bubbleTex, depthTest: false, transparent: true }));
    this.bubble.renderOrder = 21; this.bubble.visible = false; this.bubble.position.y = 2.95; root.add(this.bubble);
    this.bubbleT = 0;
    // name tag + health (through walls, so you always know where they are — they know where you are)
    const c = this.tagCanvas = document.createElement('canvas'); c.width = 256; c.height = 64;
    this.tagTex = new THREE.CanvasTexture(c); this.tagTex.colorSpace = THREE.SRGBColorSpace;
    this.tag = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.tagTex, depthTest: false, transparent: true }));
    this.tag.scale.set(1.6, 0.4, 1); this.tag.renderOrder = 20;
    root.add(this.tag); this.tag.position.y = 2.35;
    this._tagHp = -1; this.drawTag();
    this.game.scene.add(root);
    this.walk = 0; this.lean = 0; this.throwT = 0;
  }
  setHandDisc() {
    if (!this.handDisc) return;
    this.handDisc.clear();
    this.handDisc.add(discModel(this.color, this.disc.w, 0.5 * Math.min(1.4, this.disc.w.scale)));
  }
  // short chat line over the head (bots only)
  say(text, dur = 2.6) {
    if (!this.bubble) return;
    const g = this.bubbleCanvas.getContext('2d');
    g.clearRect(0, 0, 512, 96);
    g.font = '700 34px "Noto Sans KR", sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    const w = Math.min(500, g.measureText(text).width + 40);
    g.fillStyle = 'rgba(22,22,26,.88)';
    const x = 256 - w / 2; g.beginPath(); g.roundRect ? g.roundRect(x, 10, w, 64, 18) : g.rect(x, 10, w, 64); g.fill();
    g.beginPath(); g.moveTo(240, 74); g.lineTo(256, 92); g.lineTo(272, 74); g.fill();
    g.fillStyle = '#fff'; g.fillText(text, 256, 43);
    this.bubbleTex.needsUpdate = true; this.bubble.visible = true; this.bubbleT = dur;
  }
  drawTag() {
    const g = this.tagCanvas.getContext('2d'), hp = Math.max(0, Math.round(this.hp));
    if (hp === this._tagHp) return; this._tagHp = hp;
    g.clearRect(0, 0, 256, 64);
    g.font = '700 26px "Space Grotesk", "Noto Sans KR", sans-serif'; g.textAlign = 'center';
    g.lineWidth = 5; g.strokeStyle = 'rgba(255,255,255,.95)'; g.strokeText(this.name, 128, 27);
    g.fillStyle = this.css; g.fillText(this.name, 128, 27);
    g.fillStyle = 'rgba(0,0,0,.22)'; g.fillRect(48, 40, 160, 10);
    g.fillStyle = hp < 35 ? '#e8202f' : '#16161a'; g.fillRect(48, 40, 160 * hp / 100, 10);
    this.tagTex.needsUpdate = true;
  }
  renderModel(dt, alpha, t) {
    if (!this.model) return;
    const B = this.body, root = this.model;
    root.visible = this.alive && !(this.protT > 0 && Math.sin(t * 40) > 0.3);
    if (!this.alive) return;
    root.position.set(B.prevPos.x + (B.pos.x - B.prevPos.x) * alpha, B.prevPos.y + (B.pos.y - B.prevPos.y) * alpha, B.prevPos.z + (B.pos.z - B.prevPos.z) * alpha);
    root.rotation.y = B.yaw;
    const hs = B.hSpeed;
    // lean into the run, legs swing, tuck in the air
    const fwd = B.flatFwd(_v); const along = (B.vel.x * fwd.x + B.vel.z * fwd.z);
    this.lean += (THREE.MathUtils.clamp(-along * 0.012, -0.35, 0.35) - this.lean) * Math.min(1, dt * 8);
    this.torso.rotation.x = this.lean;
    if (B.grounded) this.walk += dt * (2 + hs * 0.9);
    const sw = B.grounded ? Math.sin(this.walk) * Math.min(1, hs / 8) * 0.8 : 0.5;
    this.legs[0].rotation.x = B.grounded ? sw : -0.6; this.legs[1].rotation.x = B.grounded ? -sw : 0.3;
    this.head.rotation.x = B.pitch * 0.6;
    this.throwT = Math.max(0, this.throwT - dt);
    const k = this.throwT > 0 ? Math.sin((1 - this.throwT / 0.25) * Math.PI) : 0;
    this.arm.rotation.x = 0.35 + B.pitch * 0.5 + k * 1.4;
    this.arm.rotation.z = -0.15;
    this.handDisc.visible = this.disc.state === 'hand';
    this.dome.visible = this.reflectT > 0;
    if (this.dome.visible) { this.dome.scale.setScalar(0.9 + Math.sin(t * 30) * 0.05); this.dome.material.opacity = 0.1 + this.reflectT * 0.15; }
    this.teamMat.emissiveIntensity = this.overT > 0 ? 2.2 + Math.sin(t * 20) * 0.6 : 1;
    if (this.bubbleT > 0) { this.bubbleT -= dt; if (this.bubbleT <= 0) this.bubble.visible = false; }
    this.handDisc.rotation.z += dt * 2;
    this.drawTag();
    // keep the tag a readable size at distance
    const d = Math.max(4, root.position.distanceTo(this.game.camera.position));
    const s = 0.4 + d * 0.035; this.tag.scale.set(s * 4, s, 1);
    this.bubble.scale.set(s * 4.4, s * 0.83, 1); this.bubble.position.y = 2.35 + s * 0.9;
  }
  shatter(dir) {
    const pieces = [];
    if (!this.model) return pieces;
    this.model.updateMatrixWorld(true);
    this.model.traverse(o => {
      if (!o.isMesh || !o.visible) return;
      const wp = new THREE.Vector3(), wq = new THREE.Quaternion(), ws = new THREE.Vector3();
      o.matrixWorld.decompose(wp, wq, ws);
      const p = new THREE.Mesh(o.geometry, o.material); p.position.copy(wp); p.quaternion.copy(wq); p.scale.copy(ws); p.castShadow = true;
      this.game.scene.add(p);
      const v = new THREE.Vector3((Math.random() - 0.5) * 8, 3 + Math.random() * 6, (Math.random() - 0.5) * 8);
      if (dir) v.addScaledVector(dir, 9);
      pieces.push({ m: p, v, av: new THREE.Vector3(Math.random() * 14 - 7, Math.random() * 14 - 7, Math.random() * 14 - 7), life: 2 + Math.random() });
    });
    this.model.visible = false;
    return pieces;
  }
  dispose() {
    if (this.model) this.game.scene.remove(this.model);
    if (this.isBot) this.disc.dispose();
  }
}
export { T };
