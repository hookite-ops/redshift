// A FIGHTER is anyone who carries a disc: the human (first person, no model) or a bot (third person body).
import * as THREE from 'three';
import { Player, T } from './player.js';
import { Disc, WEAPONS, discModel } from './disc.js';
import { SKINS, byId, EMOTES } from './cosmetics.js';
import { buildAvatar, emotePose } from './avatar.js';

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
  constructor(game, { name, color, isBot, body = null, disc = null, weapon = 'disc', skill = 'reflect', skin = null, wskin = 'std', killfx = 'cubes' }) {
    this.game = game; this.name = name; this.color = color; this.isBot = isBot;
    this.css = '#' + color.toString(16).padStart(6, '0');
    this.body = body || new Player(game.arena, game.botEvents(this));
    this.body.easy = true; this.body.noWall = true;
    this.disc = disc || new Disc(game, this, color, weapon);
    this.disc.owner = this;
    this.skill = skill; this.skillCd = 0; this.blinkCd = 0; this.reflectT = 0; this.overT = 0; this.healT = 0;
    this.hp = 100; this.kills = 0; this.deaths = 0; this.alive = true;
    this.respawnT = 0; this.protT = 0; this.invulnT = 0; this.regenT = 0;
    this.lastHitBy = null; this.lastHitT = -9; this.streak = 0;
    this.st = { throws: 0, hits: 0, blinks: 0, slams: 0, dodges: 0, bank: 0, ret: 0 };
    this.center = new THREE.Vector3();
    this.brain = null;
    // cosmetics: bots wear a random outfit; your own model exists too (seen while you emote)
    this.skinId = skin || (isBot ? SKINS[(Math.random() * SKINS.length) | 0].id : 'runner');
    this.wskin = wskin; this.killfx = killfx; this.emote = null;
    this.showSelf = false;
    this.buildModel();
  }
  playEmote(id) {
    const def = EMOTES.find(e => e.id === id); if (!def || !this.alive) return false;
    this.emote = { def, t: 0 }; return true;
  }
  setLook({ skin, wskin, killfx } = {}) {
    if (killfx) this.killfx = killfx;
    if (wskin && wskin !== this.wskin) { this.wskin = wskin; this.disc.setWeapon(this.disc.w.id); this.setHandDisc(); }
    if (skin && skin !== this.skinId) { this.skinId = skin; const vis = this.model && this.model.visible; this.buildModel(); this.model.visible = !!vis; }
  }

  get invuln() { return this.body.invuln || this.invulnT > 0 || this.protT > 0; }
  updateCenter() { const p = this.body.pos; this.center.set(p.x, p.y + 1.0, p.z); return this.center; }

  // ---------------- bot body ----------------
  buildModel() {
    // BLOCKY RUNNER — chunky rounded blocks with 16×16 pixel-art skins (cosmetics.js); a team-coloured
    // arm band and belt glow so you can still tell who is who at a glance
    if (this.model) { this.game.scene.remove(this.model); this.model = null; }
    const A = buildAvatar(this.skinId, this.color, (this.game.Q && this.game.Q.post) ? 2.4 : 1.3);
    const root = this.model = A.root; this.rig = A.rig; this.head = A.head; this.handDisc = A.handDisc;
    this.glowMat = A.glow; this.teamMat = A.team; this.glowK = A.glowK;
    this.torso = A.rig.spine; this.arm = A.rig.sh[1];
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
    this.handDisc.add(discModel(this.color, this.disc.w, 0.5 * Math.min(1.4, this.disc.w.scale), 1, this.wskin));
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
    root.visible = this.alive && !(this.protT > 0 && Math.sin(t * 40) > 0.3) && (this.isBot || this.showSelf);
    this.tag.visible = this.isBot;
    if (!root.visible) return;
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
    // emote: overrides the pose (cancelled by moving, or after its length)
    if (this.emote) {
      const E = this.emote; E.t += dt;
      if ((!E.def.loop && E.t > E.def.dur) || (hs > 2.5 && E.t > 0.2) || !ground) this.emote = null;
      else { emotePose(R, E.def.id, E.t, root); root.rotation.y = B.yaw + (root.userData.spin || 0); }
    }
    this.handDisc.visible = this.disc.state === 'hand' && !this.emote;
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
