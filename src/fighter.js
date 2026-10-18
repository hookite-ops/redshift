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
    // ---- skeleton: hips → spine → chest → neck → head, shoulders → elbows → hands, hips → knees → ankles ----
    // joints are Groups; meshes hang off them, so the procedural animation in renderModel bends real joints
    const J = (parent, x, y, z) => { const g = new THREE.Group(); g.position.set(x, y, z); parent.add(g); return g; };
    const limb = (parent, len, r0, r1, mat) => { const o = m(new THREE.CylinderGeometry(r1, r0, len, 12), mat, 0, -len / 2, 0); parent.add(o); return o; };
    const ball = (parent, r, mat, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1) => { const o = m(new THREE.SphereGeometry(r, 16, 12), mat, x, y, z); o.scale.set(sx, sy, sz); parent.add(o); return o; };
    const R = this.rig = {};
    const hips = R.hips = J(root, 0, 0.96, 0);
    ball(hips, 0.14, dark, 0, 0, 0, 1.3, 0.85, 1.0);                                   // pelvis
    hips.add(m(new THREE.TorusGeometry(0.135, 0.013, 6, 32).rotateX(Math.PI / 2), glow, 0, 0.04, 0)); // belt light
    const spine = R.spine = J(hips, 0, 0.07, 0);
    ball(spine, 0.125, dark, 0, 0.1, 0, 1.2, 1.2, 0.9);                                 // waist
    const chest = R.chest = J(spine, 0, 0.2, 0);
    ball(chest, 0.16, dark, 0, 0.04, 0, 1.25, 1.0, 0.82);                                 // ribcage
    const plate = m(rbox(0.36, 0.16, 0.22), white, 0, 0.06, -0.015); chest.add(plate);    // chest armour
    chest.add(m(new THREE.BoxGeometry(0.05, 0.2, 0.02), team, 0, 0.05, -0.135));         // front stripe
    chest.add(m(new THREE.BoxGeometry(0.2, 0.018, 0.02), glow, 0, 0.12, -0.14));          // chest light
    chest.add(m(rbox(0.2, 0.18, 0.08), dark, 0, 0.04, 0.14));                            // back unit
    chest.add(m(new THREE.BoxGeometry(0.025, 0.2, 0.02), glow, 0, 0.04, 0.185));          // spine light
    const neck = R.neck = J(chest, 0, 0.2, 0);
    neck.add(m(new THREE.CylinderGeometry(0.045, 0.055, 0.09, 10), dark, 0, 0.03, 0));
    const head = this.head = R.head = J(neck, 0, 0.1, 0);
    ball(head, 0.115, white, 0, 0.04, 0.005, 0.95, 1.12, 1.05);                           // helmet
    head.add(m(new THREE.SphereGeometry(0.117, 18, 10, Math.PI * 0.6, Math.PI * 0.8, Math.PI * 0.36, Math.PI * 0.34), dark, 0, 0.035, 0.005)); // face plate
    head.add(m(new THREE.CylinderGeometry(0.118, 0.118, 0.022, 20, 1, true, Math.PI * 0.66, Math.PI * 0.68), glow, 0, 0.05, 0.005)); // visor
    head.add(m(new THREE.BoxGeometry(0.022, 0.016, 0.2), team, 0, 0.165, 0.02));           // crest
    // arms (index 0 = left, 1 = right / throwing)
    R.sh = []; R.el = []; R.hand = [];
    for (const s of [-1, 1]) {
      const sh = J(chest, s * 0.2, 0.13, 0);
      ball(sh, 0.085, white, s * 0.02, 0.01, 0, 1.2, 0.85, 1.1);                          // shoulder pad
      limb(sh, 0.27, 0.06, 0.072, dark);
      sh.add(m(rbox(0.13, 0.12, 0.12), white, 0, -0.13, 0));                                // upper-arm plate
      const el = J(sh, 0, -0.27, 0);
      ball(el, 0.058, dark);
      limb(el, 0.25, 0.05, 0.06, dark);
      el.add(m(new THREE.CylinderGeometry(0.068, 0.06, 0.13, 12), white, 0, -0.16, 0));     // bracer
      el.add(m(new THREE.TorusGeometry(0.067, 0.009, 6, 20).rotateX(Math.PI / 2), glow, 0, -0.095, 0));
      const hand = J(el, 0, -0.26, 0);
      ball(hand, 0.055, dark, 0, -0.03, 0, 0.9, 1.15, 0.7);
      R.sh.push(sh); R.el.push(el); R.hand.push(hand);
    }
    // legs
    R.hip = []; R.knee = []; R.ankle = [];
    for (const s of [-1, 1]) {
      const hp = J(hips, s * 0.095, -0.03, 0);
      limb(hp, 0.44, 0.075, 0.1, dark);
      hp.add(m(rbox(0.17, 0.2, 0.16), white, 0, -0.17, -0.012));                          // thigh plate
      const kn = J(hp, 0, -0.44, 0);
      ball(kn, 0.07, team, 0, 0, -0.03, 1, 1, 0.8);                                      // knee cap
      limb(kn, 0.42, 0.058, 0.078, dark);
      kn.add(m(rbox(0.13, 0.22, 0.1), white, 0, -0.18, -0.03));                            // shin guard
      const an = J(kn, 0, -0.42, 0);
      an.add(m(rbox(0.12, 0.06, 0.25), white, 0, -0.035, -0.05));                           // boot
      an.add(m(new THREE.BoxGeometry(0.105, 0.016, 0.23), glow, 0, -0.068, -0.05));        // sole light
      R.hip.push(hp); R.knee.push(kn); R.ankle.push(an);
    }
    this.torso = spine; this.arm = R.sh[1];
    const hd = this.handDisc = new THREE.Group(); hd.position.set(0.02, -0.07, -0.06); hd.rotation.set(0, Math.PI / 2, 0);
    R.hand[1].add(hd);
    this.anim = { ph: 0, run: 0, air: 0, dash: 0, land: 0, wasAir: false, hipYaw: 0, dir: 1, aim: 0 };
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
    const B = this.body, root = this.model, R = this.rig, A = this.anim;
    root.visible = this.alive && !(this.protT > 0 && Math.sin(t * 40) > 0.3);
    if (!this.alive) return;
    root.position.set(B.prevPos.x + (B.pos.x - B.prevPos.x) * alpha, B.prevPos.y + (B.pos.y - B.prevPos.y) * alpha, B.prevPos.z + (B.pos.z - B.prevPos.z) * alpha);
    root.rotation.y = B.yaw;
    const k = (v, target, rate) => v + (target - v) * Math.min(1, dt * rate);
    // velocity in the body's frame: f = forward (toward -z of the model), s = right
    const fx = -Math.sin(B.yaw), fz = -Math.cos(B.yaw);
    const vf = B.vel.x * fx + B.vel.z * fz, vs = B.vel.x * -fz + B.vel.z * fx, hs = Math.hypot(vf, vs);
    const ground = B.grounded;
    // ---- state blends ----
    A.run = k(A.run, ground ? Math.min(1, hs / 7) : 0, 10);
    A.air = k(A.air, ground ? 0 : 1, ground ? 14 : 6);
    A.dash = k(A.dash, B.dashT > 0 ? 1 : 0, 16);
    if (ground && A.wasAir && A.fallV < -6) A.land = Math.min(1, -A.fallV / 18);
    A.wasAir = !ground; if (!ground) A.fallV = B.vel.y;
    A.land = Math.max(0, A.land - dt * 4);
    // lower body turns toward the direction of travel (backwards = run facing forward, legs reversed)
    let mv = hs > 1.2 ? Math.atan2(vs, vf) : 0, dir = 1;
    if (Math.abs(mv) > Math.PI / 2 + 0.2) { mv -= Math.sign(mv) * Math.PI; dir = -1; }
    A.hipYaw = k(A.hipYaw, -THREE.MathUtils.clamp(mv, -1.1, 1.1) * 0.85, 10);
    A.dir = dir;
    // ---- gait: phase advances with distance travelled, so feet don't skate ----
    const stride = 1.25 + Math.min(hs, 16) * 0.07;
    if (ground) A.ph += dir * Math.min(hs, 16) / stride * Math.PI * dt;
    const ph = A.ph, run = A.run, air = A.air, dash = A.dash;
    const bob = Math.abs(Math.sin(ph)) * 0.05 * run;
    R.hips.position.y = 0.96 - 0.03 * run + bob - A.land * 0.14 - dash * 0.06;
    R.hips.rotation.set(0, A.hipYaw, Math.sin(ph) * 0.06 * run);
    // upper body: counter-turns so the chest faces where the bot aims, leans into speed
    const lean = -THREE.MathUtils.clamp(vf * 0.022, -0.3, 0.35) * (1 - air) - dash * 0.45 - A.land * 0.25;
    R.spine.rotation.set(lean, -A.hipYaw * 0.8 + Math.sin(ph) * 0.16 * run, -Math.sin(ph) * 0.04 * run);
    R.chest.rotation.set(-0.05 * run + Math.sin(t * 2.2) * 0.015 * (1 - run), -A.hipYaw * 0.2, 0);
    this.head.rotation.set(THREE.MathUtils.clamp(B.pitch, -0.9, 0.9) * 0.65 - lean * 0.6, 0, 0);
    // legs
    for (let i = 0; i < 2; i++) {
      const p = ph + (i ? Math.PI : 0), sw = Math.sin(p), cw = Math.cos(p);
      let hip = sw * 0.75 * run, knee = -(0.12 + 1.15 * Math.max(0, cw)) * run, ank = 0;
      // air: tucked, one leg forward; dash: long reaching stride
      hip = hip * (1 - air) + (i ? 0.25 : 0.95) * air;
      knee = knee * (1 - air) - (i ? 0.9 : 1.35) * air;
      hip += dash * (i ? -0.5 : 0.6); knee -= dash * (i ? 0.6 : 0.2);
      hip += A.land * 0.6; knee -= A.land * 1.1;
      ank = -(hip + knee) * 0.45;
      R.hip[i].rotation.set(hip, 0, (i ? -1 : 1) * (0.04 + air * 0.06));
      R.knee[i].rotation.x = knee;
      R.ankle[i].rotation.x = ank;
    }
    // arms: swing against the legs; out in the air; swept back in a dash
    this.throwT = Math.max(0, this.throwT - dt);
    const th = this.throwT > 0 ? 1 - this.throwT / 0.25 : -1;
    for (let i = 0; i < 2; i++) {
      const p = ph + (i ? 0 : Math.PI), sw = Math.sin(p) * 0.85 * run;
      let sx = sw * (1 - air) + 0.15, sz = (i ? -1 : 1) * (0.12 + air * 0.55 + run * 0.05), ex = 0.35 + 0.75 * run;
      sx = sx * (1 - dash) - 0.9 * dash; ex = ex * (1 - dash) + 0.3 * dash;
      if (i === 1) {
        // throwing arm: holds the disc ready at chest height; the throw is a sidearm whip toward the aim
        const hold = this.disc.state === 'hand' ? 1 - dash * 0.7 : 0;
        sx = sx * (1 - hold) + (0.7 + B.pitch * 0.5) * hold; ex = ex * (1 - hold) + 1.5 * hold; sz = sz * (1 - hold) - 0.35 * hold;
        if (th >= 0) {
          const wind = th < 0.35 ? th / 0.35 : 1, rel = th < 0.35 ? 0 : (th - 0.35) / 0.65, e = 1 - Math.pow(1 - rel, 3);
          sx = 1.3 + B.pitch * 0.8; ex = 1.6 * (1 - e) + 0.15 * e; sz = -0.9 * wind * (1 - e) + 0.5 * e;
        }
      }
      R.sh[i].rotation.set(sx, 0, sz);
      R.el[i].rotation.set(ex, 0, 0);
    }
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
