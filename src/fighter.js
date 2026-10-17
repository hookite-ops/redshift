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
    // suit: dark under-layer, white armour plates, team-coloured glow lines (visor, belt, spine) that bloom
    const glowK = (this.game.Q && this.game.Q.post) ? 2.4 : 1.3;
    const dark = new THREE.MeshStandardMaterial({ color: 0x23262d, roughness: 0.45, metalness: 0.45 });
    const team = this.teamMat = new THREE.MeshStandardMaterial({ color: this.color, roughness: 0.35, emissive: new THREE.Color(this.color).multiplyScalar(0.3) });
    const white = new THREE.MeshStandardMaterial({ color: 0xf7f7f5, roughness: 0.22, metalness: 0.05, envMapIntensity: 1.3 });
    const glow = this.glowMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(this.color).multiplyScalar(glowK) });
    this.glowK = glowK;
    const m = (g, mat, x = 0, y = 0, z = 0) => { const o = new THREE.Mesh(g, mat); o.position.set(x, y, z); o.castShadow = true; return o; };
    const rbox = (w, h, d) => { const g = new THREE.CapsuleGeometry(Math.min(w, d) / 2, h, 4, 10); g.scale(w / Math.min(w, d), 1, d / Math.min(w, d)); return g; };
    const root = this.model = new THREE.Group();
    const body = this.torso = new THREE.Group(); root.add(body);
    const cap = (r, l, mat, x, y, z) => m(new THREE.CapsuleGeometry(r, l, 4, 10), mat, x, y, z);
    // core: graphite bodysuit, white shell plates, a team-coloured stripe and glowing accents
    body.add(cap(0.16, 0.22, dark, 0, 1.05, 0));                                     // waist
    body.add(m(rbox(0.34, 0.12, 0.2), dark, 0, 0.93, 0));                            // pelvis
    const chest = m(rbox(0.44, 0.26, 0.26), white, 0, 1.33, -0.01); body.add(chest);   // chest shell
    body.add(m(new THREE.BoxGeometry(0.07, 0.3, 0.02), team, 0, 1.3, -0.145));        // front stripe
    body.add(m(new THREE.BoxGeometry(0.26, 0.022, 0.02), glow, 0, 1.4, -0.152));      // chest light
    const belt = m(new THREE.TorusGeometry(0.175, 0.016, 6, 32), glow, 0, 0.99, 0); belt.rotation.x = Math.PI / 2; belt.scale.set(1.05, 0.75, 1); body.add(belt);
    for (const sx of [-1, 1]) { const sp = m(new THREE.SphereGeometry(0.1, 14, 10), white, sx * 0.26, 1.45, 0); sp.scale.set(1.15, 0.8, 1.1); body.add(sp); }
    body.add(m(rbox(0.22, 0.3, 0.08), dark, 0, 1.3, 0.15));                          // back fin
    body.add(m(new THREE.BoxGeometry(0.03, 0.26, 0.02), glow, 0, 1.3, 0.195));        // spine light
    body.add(m(new THREE.CylinderGeometry(0.055, 0.065, 0.1, 10), dark, 0, 1.55, 0));  // neck
    // helmet: smooth white shell, dark face plate, thin glowing visor slit
    this.head = m(new THREE.SphereGeometry(0.15, 22, 16), white, 0, 1.7, 0); this.head.scale.set(0.95, 1.08, 1.05); body.add(this.head);
    this.head.add(m(new THREE.SphereGeometry(0.152, 20, 12, Math.PI * 0.62, Math.PI * 0.76, Math.PI * 0.32, Math.PI * 0.36), dark, 0, 0, 0));
    this.head.add(m(new THREE.CylinderGeometry(0.155, 0.155, 0.028, 22, 1, true, Math.PI * 0.68, Math.PI * 0.64), glow, 0, 0.012, 0));
    this.head.add(m(new THREE.BoxGeometry(0.03, 0.02, 0.24), team, 0, 0.15, 0.02));    // crest
    // off arm (static) — upper white, forearm graphite
    const offArm = new THREE.Group(); offArm.position.set(-0.29, 1.43, 0); offArm.rotation.set(0.25, 0, 0.12); body.add(offArm);
    offArm.add(cap(0.06, 0.2, white, 0, -0.14, 0)); offArm.add(cap(0.052, 0.2, dark, 0, -0.38, -0.02));
    offArm.add(m(new THREE.BoxGeometry(0.11, 0.02, 0.11), glow, 0, -0.27, 0));
    // legs: white thigh, knee cap, graphite shin, white boot with a glowing sole line
    this.legs = [];
    for (const s of [-1, 1]) {
      const leg = new THREE.Group(); leg.position.set(s * 0.11, 0.92, 0);
      leg.add(cap(0.08, 0.26, white, 0, -0.2, 0));
      leg.add(m(rbox(0.11, 0.06, 0.08), team, 0, -0.43, -0.06));
      leg.add(cap(0.062, 0.28, dark, 0, -0.62, 0));
      leg.add(m(rbox(0.12, 0.08, 0.26), white, 0, -0.86, -0.04));
      leg.add(m(new THREE.BoxGeometry(0.125, 0.018, 0.27), glow, 0, -0.905, -0.04));
      root.add(leg); this.legs.push(leg);
    }
    // throwing arm with a small copy of the disc
    this.arm = new THREE.Group(); this.arm.position.set(0.29, 1.43, 0); body.add(this.arm);
    this.arm.add(cap(0.06, 0.2, white, 0, -0.14, 0));
    this.arm.add(cap(0.052, 0.2, dark, 0, -0.38, 0));
    this.arm.add(m(new THREE.BoxGeometry(0.11, 0.02, 0.11), glow, 0, -0.27, 0));
    const hd = this.handDisc = new THREE.Group(); hd.position.set(0.04, -0.52, -0.1);
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
    g.font = '700 24px "Space Grotesk", "Noto Sans KR", sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    const w = Math.min(230, g.measureText(this.name).width + 44), x = 128 - w / 2;
    g.fillStyle = 'rgba(14,17,22,.82)'; g.beginPath(); g.roundRect ? g.roundRect(x, 4, w, 32, 6) : g.rect(x, 4, w, 32); g.fill();
    g.fillStyle = this.css; g.fillRect(x + 8, 12, 5, 16);
    g.fillStyle = '#fff'; g.fillText(this.name, 128 + 6, 21);
    g.fillStyle = 'rgba(14,17,22,.55)'; g.fillRect(64, 44, 128, 8);
    g.fillStyle = hp < 35 ? '#ff3b4a' : this.css; g.fillRect(65, 45, 126 * hp / 100, 6);
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
    const gk = this.overT > 0 ? 1.6 + Math.sin(t * 20) * 0.4 : 1;
    if (this._gk !== gk) { this._gk = gk; this.glowMat.color.set(this.color).multiplyScalar(this.glowK * gk); }
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
    if (this.model) { this.game.scene.remove(this.model); freeTree(this.model); }
    if (this.isBot) { this.disc.dispose(); freeTree(this.disc.holder); if (this.disc.trail && this.disc.trail.mesh) freeTree(this.disc.trail.mesh); }
  }
}
// give a removed bot's GPU buffers back (each match builds fresh bots — without this they pile up)
function freeTree(root) {
  if (!root) return;
  root.traverse(o => {
    if (o.geometry) o.geometry.dispose();
    const m = o.material; if (m) (Array.isArray(m) ? m : [m]).forEach(x => x.dispose());
  });
}
export { T };
