// REDSHIFT 3.0 — white arena + THE DISC.
// One weapon, six inputs: WASD · Space · Shift · LMB (throw / recall) · RMB (blink to the disc).
import * as THREE from 'three';
import { Arena } from './arena.js';
import { Player, T } from './player.js';
import { Foe, FOE } from './foes.js';
import { Disc, DISC } from './disc.js';
import { Hand } from './hand.js';
import { Particles, Rings, Ribbon, SpeedLines } from './fx.js';
import { Audio } from './audio.js';
import { QUALITY, keyName } from './settings.js';

const TICK = 1 / 120;
export const DIFF = {
  easy: { name: '쉬움', dmg: 0.55, windup: 1.4, count: 0.75, projSpeed: 0.75, enemyHp: 0.8, speedMul: 0.8, attackers: 2, regen: 20, killHeal: 6, assist: 0.09 },
  normal: { name: '보통', dmg: 0.85, windup: 1.1, count: 1, projSpeed: 0.9, enemyHp: 1, speedMul: 0.92, attackers: 3, regen: 14, killHeal: 4, assist: 0.06 },
  hard: { name: '어려움', dmg: 1.15, windup: 0.9, count: 1.25, projSpeed: 1.1, enemyHp: 1.15, speedMul: 1.05, attackers: 5, regen: 9, killHeal: 2, assist: 0.03 },
};
const SPAWN = new THREE.Vector3(0, 0, 22);
const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _c = new THREE.Vector3(), _d = new THREE.Vector3();
const _hit = { t: 0, x: 0, y: 0, z: 0, nx: 0, ny: 0, nz: 0, flags: 0, tri: 0 };
const DUMMY_EL = { style: { setProperty() { } }, classList: { toggle() { }, add() { }, remove() { }, contains() { return false; } }, textContent: '', innerHTML: '', children: [], appendChild() { }, querySelectorAll() { return []; } };

// practice checklist — teaches the whole moveset in under a minute
const TUTORIAL = [
  { k: 'throw', a: 'throw', t: '원반 던지기' },
  { k: 'recall', a: 'throw', t: '한 번 더 눌러 회수 (돌아오면서도 때려요)' },
  { k: 'blink', a: 'blink', t: '원반이 날아가는 동안 순간이동' },
  { k: 'bank', a: null, t: '벽에 튕겨서 맞히기 (튕길 때마다 +35% 피해)' },
  { k: 'slam', a: 'blink', t: '적 바로 옆으로 순간이동 → 충격파' },
  { k: 'flank', a: null, t: '방패병을 옆·뒤에서 맞히기' },
  { k: 'dash', a: 'dash', t: '대시 (대시 중엔 무적)' },
  { k: 'air', a: 'jump', t: '공중에서 한 번 더 점프' },
];

function segParam(a, b, p) {
  const abx = b.x - a.x, aby = b.y - a.y, abz = b.z - a.z;
  const l2 = abx * abx + aby * aby + abz * abz; if (l2 < 1e-9) return 0;
  const t = ((p.x - a.x) * abx + (p.y - a.y) * aby + (p.z - a.z) * abz) / l2;
  return t < 0 ? 0 : t > 1 ? 1 : t;
}
function segDist(a, b, p, t) {
  const x = a.x + (b.x - a.x) * t - p.x, y = a.y + (b.y - a.y) * t - p.y, z = a.z + (b.z - a.z) * t - p.z;
  return Math.sqrt(x * x + y * y + z * z);
}

export class Game {
  constructor(canvas, S, input) {
    this.canvas = canvas; this.S = S; this.input = input;
    this.Q = QUALITY[S.quality] || QUALITY.high;
    this.state = 'menu'; this.mode = 'arena';
    this._el = {}; this._txt = {};
    this.audio = new Audio();

    const r = this.renderer = new THREE.WebGLRenderer({ canvas, antialias: this.Q.aa, powerPreference: 'high-performance', stencil: false });
    r.setPixelRatio(Math.min(devicePixelRatio, this.Q.pr));
    r.setSize(innerWidth, innerHeight);
    r.toneMapping = THREE.NeutralToneMapping; r.toneMappingExposure = 1.0;
    r.autoClear = false;
    r.shadowMap.enabled = this.Q.shadows; r.shadowMap.type = THREE.PCFSoftShadowMap;

    const sc = this.scene = new THREE.Scene();
    sc.background = new THREE.Color(0xf3f3f1);
    sc.fog = new THREE.Fog(0xf3f3f1, 70, 170);
    sc.add(new THREE.HemisphereLight(0xffffff, 0xd8d8d4, 1.5));
    const sun = this.sun = new THREE.DirectionalLight(0xffffff, 2.0);
    sun.position.set(30, 60, 20);
    if (this.Q.shadows) {
      sun.castShadow = true; sun.shadow.mapSize.set(this.Q.shadowSize, this.Q.shadowSize);
      const c = sun.shadow.camera; c.left = -62; c.right = 62; c.top = 62; c.bottom = -62; c.near = 1; c.far = 200;
      sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.04;
    }
    sc.add(sun);
    this.camera = new THREE.PerspectiveCamera(S.fov, innerWidth / innerHeight, 0.05, 600);
    this.camera.rotation.order = 'YXZ';
    sc.add(this.camera);

    this.arena = new Arena(sc, this.Q);
    this.hand = new Hand();
    this.parts = new Particles(sc, this.Q.particles);
    this.rings = new Rings(sc);
    this.trail = new Ribbon(sc, 22, 0xff5a1f, 0.25);
    this.lines = new SpeedLines(sc, 90);
    this.player = new Player(this.arena, this.playerEvents());
    this.player.easy = true; this.player.noWall = true;
    this.pctx = {};
    this.disc = new Disc(this);
    this.foes = []; this.orbs = []; this.debris = []; this.respawns = []; this.dnums = [];

    // enemy orb visuals + aim lasers
    this.orbGeo = new THREE.SphereGeometry(0.3, 16, 12);
    this.orbMat = new THREE.MeshBasicMaterial({ color: 0xe8202f });
    this.orbHalo = new THREE.MeshBasicMaterial({ color: 0xff3a48, transparent: true, opacity: 0.22, depthWrite: false });
    this.lasers = [];
    for (let i = 0; i < 8; i++) {
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
      const l = new THREE.Line(g, new THREE.LineBasicMaterial({ color: 0xe8202f, transparent: true, opacity: 0.5 }));
      l.frustumCulled = false; l.visible = false; sc.add(l); this.lasers.push(l);
    }
    // where-will-I-land marker for the blink
    this.blinkGhost = new THREE.Mesh(new THREE.RingGeometry(0.45, 0.6, 32), new THREE.MeshBasicMaterial({ color: 0xff5a1f, transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthWrite: false }));
    this.blinkGhost.rotation.x = -Math.PI / 2; this.blinkGhost.visible = false; sc.add(this.blinkGhost);

    this.D = DIFF[S.difficulty] || DIFF.easy;
    this.camState = { dip: 0, dipV: 0, tilt: 0, fov: S.fov, kick: 0, trauma: 0, bob: 0 };
    this.acc = 0; this.last = performance.now(); this.clockT = 0; this.fpsAcc = 0; this.fpsN = 0;
    this.timeScale = 1; this.slowT = 0; this.stopT = 0; this.mouseDX = 0; this.mouseDY = 0; this.lastRight = 0;
    this.records = { score: 0, wave: 0, speed: 0, combo: 0 };
    this.hinted = new Set();
    this.resetRun();
    this.resize();
    addEventListener('resize', () => this.resize());
  }

  // ======================= small DOM helpers =======================
  el(id) { let e = this._el[id]; if (e === undefined) { e = document.getElementById(id); this._el[id] = e; } return e || DUMMY_EL; }
  txt(id, s) { if (this._txt[id] !== s) { this._txt[id] = s; this.el(id).textContent = s; } }
  css(id, k, v) { const key = id + '.' + k; if (this._txt[key] !== v) { this._txt[key] = v; this.el(id).style[k] = v; } }
  cls(id, c, on) { const key = id + '#' + c; if (this._txt[key] !== on) { this._txt[key] = on; this.el(id).classList.toggle(c, on); } }

  resize() {
    this.renderer.setSize(innerWidth, innerHeight);
    this.camera.aspect = innerWidth / innerHeight; this.camera.updateProjectionMatrix();
    this.hand.resize(innerWidth / innerHeight);
    this.parts.mat.uniforms.scale.value = innerHeight * this.renderer.getPixelRatio() * 0.5;
  }

  // ======================= run state =======================
  resetRun() {
    this.hp = 100; this.score = 0; this.kills = 0; this.wave = 0;
    this.combo = 0; this.comboT = 0; this.bestCombo = 0;
    this.maxSpeed = 0; this.gameTime = 0; this.regenT = 0; this.invulnT = 0;
    this.waveState = 'break'; this.breakT = 3; this.queue = []; this.spawnT = 0;
    this.chain = 0; this.chainT = 0; this.throwBuf = 0;
    this.dmgFx = 0; this.flashFx = 0; this.hitT = 0; this.bannerT = 0; this.popT = 0; this.hintT = 0; this.dirT = 0;
    this.stats = { throws: 0, hits: 0, banks: 0, blinks: 0, slams: 0 };
    this.tut = new Set();
  }

  start(mode) {
    this.mode = mode === 'practice' ? 'practice' : 'arena';
    this.D = DIFF[this.S.difficulty] || DIFF.easy;
    this.clear(); this.resetRun();
    const P = this.player; P.easy = true; P.noWall = true;
    P.reset(SPAWN.clone(), 0);
    this.disc.caught(); this.disc.catchCd = 0; this.trail.reset();
    this.state = 'play'; this.acc = 0; this.last = performance.now(); this.timeScale = 1; this.slowT = this.stopT = 0;
    Object.assign(this.camState, { dip: 0, dipV: 0, tilt: 0, fov: this.S.fov, kick: 0, trauma: 0 });
    this.buildDashPips();
    if (this.mode === 'practice') { this.setupPractice(); this.banner('연습장', '체크리스트를 따라 해보세요 · 맞아도 안 죽어요', 2.6); }
    else { this.banner('아레나', '원반 하나로 끝까지 버티기', 2.4); }
    this.el('feed').innerHTML = ''; this.el('dnums').innerHTML = '';
    this.renderTut();
    this.txt('hint', ''); this.cls('hint', 'show', false);
  }

  clear() {
    for (const f of this.foes) f.dispose();
    for (const o of this.orbs) this.scene.remove(o.m);
    for (const d of this.debris) this.scene.remove(d.m);
    for (const n of this.dnums) n.el.remove();
    this.foes = []; this.orbs = []; this.debris = []; this.respawns = []; this.dnums = [];
    for (const l of this.lasers) l.visible = false;
    this.blinkGhost.visible = false;
    if (this.disc) { this.disc.caught(); this.trail.reset(); }
  }
  clearWorld() { this.clear(); }

  buildDashPips() {
    const box = this.el('dashPips'); if (box === DUMMY_EL) return;
    box.innerHTML = '';
    for (let i = 0; i < this.player.dashMax; i++) box.appendChild(document.createElement('i'));
    this._pipsN = -1;
  }

  // ======================= practice =======================
  setupPractice() {
    const spots = [
      ['turret', [0, 1, 0], 0],          // on the stage
      ['turret', [-17, 0, -6], 0],       // beside a pillar
      ['turret', [17, 0, -6], 0],
      ['turret', [0, 0, -34], 0],        // hiding behind the far wall → bank it or blink
      ['shield', [-8, 0, -22], 0],       // faces you: go around it
      ['chaser', [10, 0, 10], 0],
    ];
    for (const [type, p] of spots) this.spawnDummy(type, new THREE.Vector3(...p));
  }
  spawnDummy(type, p) {
    const f = this.spawnFoe(type, p);
    f.dummy = true; f.home = p.clone(); f.cd = 1e9;
    return f;
  }
  tickDummy(f, dt, ctx) {
    f.t += dt; f.flashT -= dt; f.stun = Math.max(0, f.stun - dt); f.spawnT -= dt;
    // knockback drifts, then springs home
    f.pos.addScaledVector(f.vel, dt); f.vel.multiplyScalar(Math.exp(-6 * dt));
    f.pos.x += (f.home.x - f.pos.x) * Math.min(1, dt * 2); f.pos.z += (f.home.z - f.pos.z) * Math.min(1, dt * 2); f.pos.y = f.home.y;
    // shields always face you, so you have to go around
    const P = ctx.player;
    const want = Math.atan2(P.pos.x - f.pos.x, P.pos.z - f.pos.z);
    let d = want - f.yaw; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2;
    if (f.stun <= 0) f.yaw += Math.sign(d) * Math.min(Math.abs(d), (f.type === 'shield' ? 2.2 : 4) * dt);
    f.updateCenter();
    f.animate(dt, ctx, 0);
  }
  tickPractice(dt) {
    for (let i = this.respawns.length - 1; i >= 0; i--) {
      const r = this.respawns[i]; r.t -= dt;
      if (r.t <= 0) { this.spawnDummy(r.type, r.pos); this.respawns.splice(i, 1); }
    }
    this.hp = 100;
  }
  train(k) {
    if (this.mode !== 'practice' || this.tut.has(k)) return;
    this.tut.add(k); this.renderTut(k);
    this.audio.checkpoint(this.tut.size === TUTORIAL.length);
    if (this.tut.size === TUTORIAL.length) this.banner('완료!', '이제 아레나에서 써먹어 보세요 (ESC → 메뉴)', 3);
  }
  renderTut(flash) {
    const box = this.el('tut');
    if (this.mode !== 'practice') { box.innerHTML = ''; this.cls('tut', 'hidden', true); return; }
    this.cls('tut', 'hidden', false);
    const kn = a => a ? `<b>${keyName(this.S.binds[a] && this.S.binds[a][0])}</b>` : '';
    box.innerHTML = `<h4>연습 체크리스트 <span>${this.tut.size}/${TUTORIAL.length}</span></h4>` +
      TUTORIAL.map(s => `<div class="${this.tut.has(s.k) ? 'done' : ''}${flash === s.k ? ' pop' : ''}">${kn(s.a)}${s.t}</div>`).join('');
  }

  // ======================= player events =======================
  playerEvents() {
    const g = this;
    const feet = () => _d.copy(g.player.pos).setY(g.player.pos.y + 0.05);
    return {
      jump(kind) {
        g.audio.jump();
        if (kind === 'air') {
          g.train('air');
          g.parts.emit(feet(), 10, { color: [0.2, 0.2, 0.22], speed: 4, life: 0.3, gravity: 2 });
          g.rings.add(feet().clone(), 0x2a2a2e, 1.6, 0.3);
        }
      },
      land(impact) {
        g.audio.land(impact > 14);
        if (impact > 6) g.camState.dipV -= Math.min(5, impact * 0.18);
        if (impact > 14) { g.shake(Math.min(0.3, impact * 0.01)); g.rings.add(feet().clone(), 0x9a9a96, Math.min(4, impact * 0.15), 0.35); }
      },
      slide() { },
      dash(dir) {
        g.audio.dash(); g.camState.kick = Math.max(g.camState.kick, 1); g.shake(0.05); g.train('dash');
        g.parts.emit(_d.copy(g.player.pos).setY(g.player.pos.y + 0.9), 12, { color: [0.15, 0.15, 0.17], speed: 6, dir: dir.clone().negate(), spread: 0.6, life: 0.3, gravity: 0 });
      },
      wallStart() { }, climb() { },
      mantle() { g.audio.mantle(); g.camState.dipV -= 1.5; },
      hookFire() { }, hookMiss() { }, hookAttach() { }, hookRelease() { }, pad() { }, boost() { },
      fell() { g.player.reset(SPAWN.clone(), 0); },
    };
  }

  // ======================= main loop =======================
  frame(now) {
    const realDt = Math.max(0, Math.min(0.1, (now - this.last) / 1000)); this.last = Math.max(this.last, now);
    this.fpsAcc += realDt; this.fpsN++;
    if (this.fpsAcc > 0.5) { this.txt('fps', Math.round(this.fpsN / this.fpsAcc) + ' FPS'); this.fpsAcc = 0; this.fpsN = 0; }
    const dt = Math.min(0.05, realDt);
    this.update(dt);
    this.render(dt);
  }

  update(rawDt) {
    this.clockT += rawDt;
    let target = 1;
    if (this.slowT > 0) { this.slowT -= rawDt; target = 0.35; }
    if (this.stopT > 0) { this.stopT -= rawDt; target = 0.08; }
    this.timeScale += (target - this.timeScale) * Math.min(1, rawDt * (target < this.timeScale ? 50 : 10));
    const [mx, my] = this.input.takeMouse();
    this.mouseDX = mx; this.mouseDY = my;
    if (this.state === 'play') {
      const P = this.player, sens = this.S.sens * 0.0012;
      P.yaw -= mx * sens; P.pitch = THREE.MathUtils.clamp(P.pitch - my * sens, -1.55, 1.55);
      this.acc += rawDt * this.timeScale;
      let n = 0;
      while (this.acc >= TICK && n < 12) { this.tick(TICK); this.acc -= TICK; n++; if (this.state !== 'play') break; }
      if (n === 12) this.acc = 0;
    } else if (this.state === 'dead') {
      this.tickDebris(rawDt * 0.4);
    }
    if (this.state !== 'play') this.input.consumeEdges();
  }

  readInput() {
    const I = this.input;
    const inp = {
      fwd: (I.is('forward') ? 1 : 0) - (I.is('back') ? 1 : 0),
      right: (I.is('right') ? 1 : 0) - (I.is('left') ? 1 : 0),
      jumpPressed: I.pressed('jump'), jumpHeld: I.is('jump'),
      crouch: false, dashPressed: I.pressed('dash'),
      grapplePressed: false, grappleHeld: false,
      autoHop: !!this.S.autoHop,
      throwPressed: I.pressed('throw'), blinkPressed: I.pressed('blink'),
    };
    I.consumeEdges();
    return inp;
  }

  tick(dt) {
    this.gameTime += dt;
    const P = this.player, d = this.disc;
    const inp = this.readInput();
    P.tick(dt, inp, this.pctx);
    // arena bounds (the walls already stop you; this catches the sky above them)
    const B = this.arena.half - 0.45;
    if (Math.abs(P.pos.x) > B) { P.pos.x = Math.sign(P.pos.x) * B; if (P.vel.x * Math.sign(P.pos.x) > 0) P.vel.x = 0; }
    if (Math.abs(P.pos.z) > B) { P.pos.z = Math.sign(P.pos.z) * B; if (P.vel.z * Math.sign(P.pos.z) > 0) P.vel.z = 0; }
    if (P.pos.y > this.arena.ceiling) { P.pos.y = this.arena.ceiling; P.vel.y = Math.min(P.vel.y, 0); }
    this.maxSpeed = Math.max(this.maxSpeed, P.hSpeed);

    // ---------- the disc ----------
    this.throwBuf -= dt;
    if (inp.throwPressed) {
      if (d.state === 'hand') { if (d.catchCd > 0) this.throwBuf = 0.4; else this.throwDisc(); }
      else if (d.state === 'out') { d.recall(); this.audio.discBounce(0); this.train('recall'); }
      else this.throwBuf = 0.4; // still flying home: throw again the moment it lands in your hand
    }
    if (this.throwBuf > 0 && d.state === 'hand' && d.catchCd <= 0) { this.throwBuf = 0; this.throwDisc(); }
    if (inp.blinkPressed) this.blink();
    d.tick(dt);

    // ---------- vitals ----------
    this.invulnT -= dt;
    this.regenT -= dt;
    if (this.regenT <= 0 && this.hp < 100) this.hp = Math.min(100, this.hp + this.D.regen * dt);
    if (this.comboT > 0) { this.comboT -= dt; if (this.comboT <= 0) this.combo = 0; }
    if (this.chainT > 0) { this.chainT -= dt; if (this.chainT <= 0) this.chain = 0; }

    // ---------- world ----------
    const ctx = this.ctx();
    for (const f of this.foes) if (f.alive) { if (f.dummy) this.tickDummy(f, dt, ctx); else f.update(dt, ctx); }
    this.foes = this.foes.filter(f => f.alive);
    this.tickOrbs(dt);
    this.tickDebris(dt);
    if (this.mode === 'arena') this.tickWaves(dt); else this.tickPractice(dt);
  }

  // ======================= the disc =======================
  throwDisc() {
    const P = this.player, d = this.disc;
    const dir = P.lookDir(new THREE.Vector3());
    const origin = new THREE.Vector3().copy(P.eye);
    origin.y -= 0.15;
    this.aimAssist(origin, dir);
    origin.addScaledVector(dir, 0.3);
    if (!d.throw(origin, dir, P.vel)) return;
    d.kills = 0;
    this.trail.width = 0.25;
    this.stats.throws++;
    this.audio.discThrow(1); this.hand.throwAnim();
    this.camState.kick = Math.max(this.camState.kick, 0.25);
    this.train('throw');
  }
  // gentle magnetism toward an enemy right under the crosshair
  aimAssist(origin, dir) {
    let best = null, bestA = this.D.assist;
    for (const f of this.foes) {
      if (!f.alive) continue;
      _a.subVectors(f.center, origin); const dist = _a.length();
      if (dist < 1.5 || dist > 70) continue;
      _a.divideScalar(dist);
      const ang = Math.acos(THREE.MathUtils.clamp(_a.dot(dir), -1, 1));
      if (ang < bestA && this.los(origin, f.center)) { bestA = ang; best = _a.clone(); }
    }
    if (best) dir.lerp(best, 0.85).normalize();
  }
  onDiscBounce(d, p, n) {
    this.audio.discBounce(d.bounces);
    this.trail.width = 0.25 + Math.min(4, d.bounces) * 0.07;
    this.parts.emit(p, 10, { color: [[1, 0.35, 0.12], [0.15, 0.15, 0.17]], speed: 7, dir: n, spread: 0.8, life: 0.35, gravity: 10 });
    this.rings.add(p.clone().addScaledVector(n, 0.04), 0xff5a1f, 1.1 + d.bounces * 0.35, 0.3, n);
  }
  onDiscCatch(d) {
    if (d.state === 'hand') return;
    d.caught();
    this.audio.discCatch(); this.hand.catchAnim();
  }
  // everything the disc touches between a and b
  discSweep(d, a, b, leg) {
    const len = a.distanceTo(b); if (len < 1e-6) return null;
    const dir = new THREE.Vector3().subVectors(b, a).divideScalar(len);
    const hits = [];
    for (const f of this.foes) {
      if (!f.alive || d.hit.has(f) || f.spawnT > 0.25) continue;
      const t = segParam(a, b, f.center);
      if (segDist(a, b, f.center, t) < f.hitRadius + DISC.radius) hits.push({ f, t });
    }
    hits.sort((x, y) => x.t - y.t);
    for (const { f, t } of hits) {
      d.hit.add(f);
      const at = new THREE.Vector3().lerpVectors(a, b, t);
      if (f.shieldBlocks(dir)) {
        this.audio.shieldClang();
        this.parts.emit(at, 12, { color: [[1, 1, 1], [0.9, 0.15, 0.2]], speed: 8, life: 0.3, gravity: 6 });
        this.hint('방패병은 정면을 막아요 — 옆·뒤를 노리거나 뒤로 순간이동!', 'shield');
        this.popupWorld(at, '막힘');
        if (leg === 'out') {
          const fn = f.facing(_c);
          const vn = d.vel.dot(fn); if (vn < 0) d.vel.addScaledVector(fn, -2 * vn);
          d.bounces++;
          this.onDiscBounce(d, at.clone(), fn.clone());
          return at.addScaledVector(dir, -0.05);
        }
        continue;
      }
      if (f.type === 'shield') this.train('flank');
      const dmg = leg === 'out'
        ? DISC.dmg * (1 + 0.35 * d.bounces) * (0.75 + 0.25 * d.speedMul())
        : DISC.returnDmg * (1 + 0.2 * d.bounces);
      this.hitFoe(f, dmg, dir, leg === 'out' ? (d.bounces > 0 ? 'bank' : 'direct') : 'return', d.bounces);
    }
    // the disc also swats enemy orbs out of the air
    for (let i = this.orbs.length - 1; i >= 0; i--) {
      const o = this.orbs[i];
      if (segDist(a, b, o.pos, segParam(a, b, o.pos)) < DISC.radius + 0.55) this.killOrb(o, true);
    }
    return null;
  }

  hitFoe(f, dmg, dir, kind, bounces = 0) {
    dmg = Math.round(dmg);
    const from = new THREE.Vector3().copy(f.center).addScaledVector(dir, -1);
    const killed = f.damage(dmg, from);
    this.stats.hits++;
    f.windup = 0; f.cd = Math.max(f.cd, 0.8);
    f.stun = Math.max(f.stun, kind === 'slam' ? 0.6 : 0.15);
    this.audio.discHit(bounces + 1);
    this.parts.emit(f.center, 14, { color: [[0.1, 0.1, 0.12], [0.9, 0.15, 0.2]], speed: 8, dir, spread: 0.9, life: 0.4 });
    this.dmgNumber(f.center, dmg, kind === 'bank' || kind === 'slam');
    this.hitmarker(killed);
    this.stopT = Math.max(this.stopT, killed ? 0.05 : 0.02);
    if (kind === 'bank') this.train('bank');
    if (killed) this.onKill(f, kind, dir, bounces);
    else this.addScore(10);
  }

  // RMB: teleport to the disc, keep your speed (and then some), shock everything nearby
  blink() {
    const d = this.disc, P = this.player;
    if (d.state === 'hand') {
      this.audio.empty();
      this.hint(`순간이동은 원반이 날아가는 동안만 — 먼저 ${keyName(this.S.binds.throw[0])}로 던지세요`, 'blinkEmpty');
      return;
    }
    const spot = d.blinkSpot(this.arena.col);
    if (!spot) { this.audio.empty(); return; }
    const lim = this.arena.half - 1;
    spot.x = THREE.MathUtils.clamp(spot.x, -lim, lim); spot.z = THREE.MathUtils.clamp(spot.z, -lim, lim);
    spot.y = Math.min(spot.y, this.arena.ceiling - 2);
    const from = P.pos.clone();
    P.pos.copy(spot); P.prevPos.copy(spot);
    // momentum: carry what you had (min 16 m/s) +3, in the direction you are looking
    const hs = P.hSpeedNow();
    const sp = Math.min(42, Math.max(hs, 16) + 3);
    const f = P.flatFwd(_a);
    P.vel.set(f.x * sp, Math.max(P.vel.y, 4), f.z * sp);
    P.grounded = false; P.airJumps = T.airJumps;
    P.dashCharges = Math.min(P.dashMax, P.dashCharges + 1);
    this.invulnT = 0.3;
    // shockwave
    const c = _b.set(spot.x, spot.y + 0.9, spot.z);
    let slammed = 0;
    for (const e of this.foes) {
      if (!e.alive) continue;
      if (e.center.distanceTo(c) < DISC.blinkRadius + e.cfg.r) {
        const out = new THREE.Vector3().subVectors(e.pos, spot).setY(0);
        if (out.lengthSq() < 1e-4) out.set(1, 0, 0);
        out.normalize();
        slammed++;
        this.hitFoe(e, DISC.blinkSlam * (1 + 0.15 * d.bounces), out, 'slam', d.bounces);
        if (e.alive) { e.vel.addScaledVector(out, 9); e.vel.y = 5; }
      }
    }
    for (let i = this.orbs.length - 1; i >= 0; i--) if (this.orbs[i].pos.distanceTo(c) < DISC.blinkRadius) this.killOrb(this.orbs[i], true);
    // fx
    this.audio.blink(); this.hand.blinkAnim();
    this.camState.kick = Math.max(this.camState.kick, 1.3); this.flashFx = Math.max(this.flashFx, 0.6);
    const n = Math.min(24, Math.ceil(from.distanceTo(spot) / 1.5));
    for (let i = 0; i <= n; i++) {
      const p = _c.lerpVectors(from, spot, i / n); p.y += 1;
      this.parts.emit(p, 2, { color: [[1, 0.35, 0.12], [0.12, 0.12, 0.14]], speed: 1.5, life: 0.45, gravity: 0, size: 0.14 });
    }
    this.rings.add(new THREE.Vector3(spot.x, spot.y + 0.06, spot.z), slammed ? 0x16161a : 0xff5a1f, slammed ? DISC.blinkRadius * 1.3 : 2.2, 0.45);
    if (slammed) { this.audio.slam(); this.shake(0.25); this.stats.slams++; this.train('slam'); if (slammed >= 2) this.slowT = Math.max(this.slowT, 0.25); }
    this.onDiscCatch(d);
    this.chain++; this.chainT = 2.5;
    if (this.chain >= 2) this.popup(`순간이동 ×${this.chain}`);
    this.stats.blinks++; this.train('blink');
  }

  // ======================= enemies =======================
  los(a, b) {
    const dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z, dist = Math.hypot(dx, dy, dz);
    if (dist < 1e-3) return true;
    const h = this.arena.col.raycast(a.x, a.y, a.z, dx / dist, dy / dist, dz / dist, dist, _hit);
    return !h || h.t > dist - 0.3;
  }
  ctx() {
    if (!this._ctx) this._ctx = {
      player: this.player, foes: null, camera: this.camera, windMul: 1, speedMul: 1,
      los: (a, b) => this.los(a, b),
      canAttack: f => { let n = 0; for (const o of this.foes) if (o !== f && o.alive && o.windup > 0) n++; return n < this.D.attackers; },
      fireOrb: f => this.fireOrb(f),
      contact: f => this.foeContact(f),
      shove: f => this.foeShove(f),
    };
    const c = this._ctx; c.foes = this.foes; c.windMul = this.D.windup; c.speedMul = this.D.speedMul;
    return c;
  }
  fireOrb(f) {
    const P = this.player;
    const o = new THREE.Vector3().copy(f.center).addScaledVector(f.facing(_a), 0.8);
    const target = _b.copy(P.pos).setY(P.pos.y + 1.0);
    const dist = o.distanceTo(target);
    const dir = new THREE.Vector3().subVectors(target, o).normalize();
    const m = new THREE.Mesh(this.orbGeo, this.orbMat);
    const halo = new THREE.Mesh(this.orbGeo, this.orbHalo); halo.scale.setScalar(1.9); m.add(halo);
    m.position.copy(o); this.scene.add(m);
    this.orbs.push({ m, halo, pos: o, vel: dir.multiplyScalar(15 * this.D.projSpeed), life: 6, dmg: 12 * this.D.dmg, dodged: false, t: 0 });
    this.audio.orbFire(dist);
    this.parts.emit(o, 6, { color: [0.9, 0.15, 0.2], speed: 3, life: 0.25, gravity: 0 });
  }
  tickOrbs(dt) {
    const P = this.player, col = this.arena.col;
    for (let i = this.orbs.length - 1; i >= 0; i--) {
      const o = this.orbs[i];
      o.life -= dt; o.t += dt;
      const sp = o.vel.length(), step = sp * dt;
      const h = col.raycast(o.pos.x, o.pos.y, o.pos.z, o.vel.x / sp, o.vel.y / sp, o.vel.z / sp, step + 0.3, _hit);
      if (h && h.t < step + 0.3) { o.pos.set(h.x, h.y, h.z); this.killOrb(o, false); continue; }
      o.pos.addScaledVector(o.vel, dt);
      o.m.position.copy(o.pos);
      // hit test against the player's capsule
      const yb = P.pos.y + 0.4, yt = P.pos.y + P.h - 0.4;
      const cy = THREE.MathUtils.clamp(o.pos.y, yb, yt);
      const dd = Math.hypot(o.pos.x - P.pos.x, o.pos.y - cy, o.pos.z - P.pos.z);
      if (dd < 0.3 + T.radius) {
        if (P.invuln || this.invulnT > 0) {
          if (!o.dodged) { o.dodged = true; this.addScore(25); this.popup('회피!'); }
        } else { this.hurt(o.dmg, o.pos); this.killOrb(o, false); continue; }
      }
      if (o.life <= 0) this.killOrb(o, false);
    }
  }
  killOrb(o, shotDown) {
    const i = this.orbs.indexOf(o); if (i < 0) return;
    this.orbs.splice(i, 1); this.scene.remove(o.m);
    this.parts.emit(o.pos, shotDown ? 16 : 8, { color: [[0.9, 0.15, 0.2], [1, 0.6, 0.6]], speed: shotDown ? 7 : 4, life: 0.35, gravity: 4 });
    if (shotDown) { const pts = this.addScore(15); this.feed('구체 격추', pts); this.rings.add(o.pos.clone(), 0xe8202f, 1.2, 0.25, null); this.audio.discBounce(2); }
  }
  foeContact(f) {
    const P = this.player;
    if (P.invuln || this.invulnT > 0 || f.cd > 0) return;
    f.cd = 1.2;
    this.hurt(14 * this.D.dmg, f.center);
    const away = _a.subVectors(P.pos, f.pos).setY(0); if (away.lengthSq() < 1e-4) away.set(0, 0, 1); away.normalize();
    P.vel.addScaledVector(away, 8); P.vel.y = Math.max(P.vel.y, 5); P.grounded = false;
    f.vel.addScaledVector(away, -10); f.stun = 0.5;
  }
  foeShove(f) {
    const P = this.player, fw = f.facing(new THREE.Vector3());
    const to = _a.subVectors(P.pos, f.pos); const dy = to.y; to.y = 0; const dist = to.length();
    this.audio.shieldClang();
    this.rings.add(new THREE.Vector3().copy(f.center).addScaledVector(fw, 1.1), 0xe8202f, 2.4, 0.3, fw);
    if (dist < 3.4 && Math.abs(dy) < 2 && to.dot(fw) / (dist || 1) > 0.35 && !(P.invuln || this.invulnT > 0)) {
      this.hurt(16 * this.D.dmg, f.center);
      P.vel.addScaledVector(fw, 14); P.vel.y = Math.max(P.vel.y, 6); P.grounded = false;
    }
  }
  hurt(n, from) {
    this.dmgFx = 1; this.shake(0.22); this.audio.hurt(); this.regenT = 3;
    // direction of the hit, relative to the view
    if (from) {
      _c.copy(from).applyMatrix4(this.camera.matrixWorldInverse);
      this.dirAng = Math.atan2(_c.x, -_c.z); this.dirT = 1; // 0 = in front, + = to the right
    }
    if (this.mode === 'practice') return;
    this.hp -= n; this.combo = 0; this.comboT = 0;
    if (this.hp <= 0) this.die();
  }
  onKill(f, kind, dir, n) {
    const P = this.player;
    this.kills++;
    this.combo++; this.comboT = 3.2; this.bestCombo = Math.max(this.bestCombo, this.combo);
    let base = f.cfg.score; const tags = [];
    if (kind === 'bank') { base += 50 * n; tags.push(n >= 2 ? `${n}쿠션 뱅크샷` : '뱅크샷'); this.stats.banks++; }
    if (kind === 'return') tags.push('회수 타격');
    if (kind === 'slam') { base += 80; tags.push('순간이동 충격'); }
    if (!P.grounded && P.airTime > 0.3) { base += 30; tags.push('공중'); }
    if (kind !== 'slam' && this.disc.out) {
      this.disc.kills = (this.disc.kills || 0) + 1;
      if (this.disc.kills >= 2) { base += 60 * (this.disc.kills - 1); tags.push(`${this.disc.kills}연속 관통`); }
    }
    const pts = this.addScore(base);
    this.feed(`${f.cfg.name} 처치${tags.length ? ' · ' + tags.join(' · ') : ''}`, pts);
    if (tags.length) this.popup(tags[tags.length - 1]);
    this.audio.kill(Math.min(this.combo, 8));
    const fl = new THREE.Vector3(dir.x, Math.max(0, dir.y), dir.z).normalize();
    this.debris.push(...f.shatter(fl));
    this.parts.emit(f.center, 26, { color: [[0.08, 0.08, 0.1], [0.9, 0.15, 0.2], [1, 1, 1]], speed: 10, life: 0.6 });
    this.rings.add(new THREE.Vector3(f.pos.x, f.pos.y + 0.06, f.pos.z), 0xe8202f, 3, 0.4);
    this.shake(0.12);
    // rewards keep you moving: a dash back and a sip of health
    P.dashCharges = Math.min(P.dashMax, P.dashCharges + 1);
    if (this.mode === 'arena') this.hp = Math.min(100, this.hp + this.D.killHeal);
    if (f.dummy) this.respawns.push({ type: f.type, pos: f.home.clone(), t: 2 });
  }

  // ======================= waves =======================
  buildWave(n) {
    const D = this.D;
    let list;
    if (n === 1) list = ['turret', 'chaser', 'turret'];
    else if (n === 2) list = ['turret', 'chaser', 'turret', 'chaser', 'turret'];
    else if (n === 3) list = ['shield', 'turret', 'chaser', 'turret', 'chaser'];
    else {
      list = [];
      const total = Math.round(4 + n * 1.2);
      for (let i = 0; i < total; i++) { const r = Math.random(); list.push(r < 0.4 ? 'turret' : r < 0.72 ? 'chaser' : 'shield'); }
    }
    const extra = Math.round(list.length * (D.count - 1));
    if (extra < 0) list.splice(list.length + extra, -extra);
    else for (let i = 0; i < extra; i++) list.push(['turret', 'chaser', n >= 3 ? 'shield' : 'turret'][i % 3]);
    if (!list.length) list.push('turret');
    return list;
  }
  spawnFoe(type, at) {
    const P = this.player;
    let pos = at;
    if (!pos) {
      const high = type === 'turret' && Math.random() < 0.5;
      const pool = high ? this.arena.spawnHigh : this.arena.spawnGround;
      const far = pool.filter(p => p.distanceTo(P.pos) >= 18);
      pos = (far.length ? far : pool)[(Math.random() * (far.length || pool.length)) | 0].clone();
      if (!high) { pos.x += (Math.random() - 0.5) * 3; pos.z += (Math.random() - 0.5) * 3; }
    }
    const f = new Foe(this, type, pos);
    this.foes.push(f);
    this.rings.add(new THREE.Vector3(pos.x, pos.y + 0.06, pos.z), 0xe8202f, 2.4, 0.5);
    this.parts.emit(_a.set(pos.x, pos.y + 1, pos.z), 10, { color: [0.1, 0.1, 0.12], speed: 4, life: 0.4, gravity: -2 });
    return f;
  }
  tickWaves(dt) {
    if (this.waveState === 'break') {
      this.breakT -= dt;
      if (this.breakT <= 0) {
        this.wave++; this.queue = this.buildWave(this.wave); this.waveState = 'fight'; this.spawnT = 0;
        const sub = this.wave === 1 ? '포탑의 빨간 구체를 피하면서 원반을 던져요'
          : this.wave === 3 ? '방패병 등장 — 정면은 막혀요. 옆·뒤로 돌거나 뒤로 순간이동!'
            : `적 ${this.queue.length}`;
        this.banner(`WAVE ${this.wave}`, sub, 2.4);
        this.audio.wave();
      }
      return;
    }
    this.spawnT -= dt;
    const cap = Math.min(14, 5 + this.wave);
    if (this.queue.length && this.spawnT <= 0 && this.foes.length < cap) { this.spawnFoe(this.queue.shift()); this.spawnT = 0.7; }
    if (!this.queue.length && this.foes.length === 0) {
      this.waveState = 'break'; this.breakT = 4;
      const bonus = 100 * this.wave;
      const pts = this.addScore(bonus);
      this.feed(`WAVE ${this.wave} 클리어`, pts);
      this.hp = Math.min(100, this.hp + 35);
      this.banner('클리어!', `+${pts} · 체력 회복`, 2);
      this.audio.checkpoint(true);
    }
  }

  die() {
    this.hp = 0; this.state = 'dead';
    this.input.unlock();
    this.slowT = 0; this.stopT = 0;
    const rec = this.records;
    const newBest = this.score > (rec.score || 0);
    rec.score = Math.max(rec.score || 0, this.score); rec.wave = Math.max(rec.wave || 0, this.wave);
    rec.speed = Math.max(rec.speed || 0, this.maxSpeed); rec.combo = Math.max(rec.combo || 0, this.bestCombo);
    this.saveRecords && this.saveRecords();
    const stats = [
      ['점수', this.score.toLocaleString() + (newBest ? '  ★ 신기록' : '')], ['도달 웨이브', this.wave], ['처치', this.kills],
      ['최고 콤보', this.bestCombo], ['뱅크샷 처치', this.stats.banks], ['순간이동 / 충격파', `${this.stats.blinks} / ${this.stats.slams}`],
      ['최고 속도', Math.round(this.maxSpeed * 3.6) + ' KM/H'], ['최고 기록', `${rec.score.toLocaleString()} · WAVE ${rec.wave}`],
    ];
    setTimeout(() => this.onEnd && this.onEnd('GAME OVER', stats), 900);
  }

  tickDebris(dt) {
    for (let i = this.debris.length - 1; i >= 0; i--) {
      const d = this.debris[i]; d.life -= dt; d.v.y -= 25 * dt;
      d.m.position.addScaledVector(d.v, dt);
      d.m.rotation.x += d.av.x * dt; d.m.rotation.y += d.av.y * dt; d.m.rotation.z += d.av.z * dt;
      if (d.m.position.y < 0.06) { d.m.position.y = 0.06; d.v.y *= -0.35; d.v.x *= 0.7; d.v.z *= 0.7; d.av.multiplyScalar(0.7); }
      if (d.life < 0.5) d.m.scale.multiplyScalar(Math.max(0, 1 - dt * 6));
      if (d.life <= 0) { this.scene.remove(d.m); this.debris.splice(i, 1); }
    }
  }

  // ======================= feedback helpers =======================
  addScore(base) {
    const mult = 1 + Math.min(4, Math.max(0, this.combo - 1) * 0.25);
    const pts = Math.round(base * mult);
    this.score += pts;
    return pts;
  }
  shake(n) { this.camState.trauma = Math.min(1, this.camState.trauma + n); }
  banner(big, small, dur = 2.2) {
    this.el('bannerBig').textContent = big; this.el('bannerSmall').textContent = small || '';
    const b = this.el('banner'); b.classList.remove('show'); void b.offsetWidth; b.classList.add('show');
    this.bannerT = dur;
  }
  feed(text, pts) {
    const box = this.el('feed'); if (box === DUMMY_EL) return;
    const row = document.createElement('div');
    row.innerHTML = `<span></span><b>+${pts}</b>`; row.firstChild.textContent = text;
    box.prepend(row);
    while (box.children.length > 5) box.lastChild.remove();
    setTimeout(() => row.classList.add('out'), 2200);
    setTimeout(() => row.remove(), 2700);
  }
  popup(text) {
    const p = this.el('popup'); p.textContent = text;
    p.classList.remove('show'); void p.offsetWidth; p.classList.add('show');
  }
  popupWorld(pos, text) { this.dmgNumber(pos, text, false, true); }
  hitmarker(kill) {
    const h = this.el('hit'); h.classList.toggle('kill', !!kill);
    h.classList.remove('show'); void h.offsetWidth; h.classList.add('show');
  }
  hint(text, key, ms = 2800) {
    if (key) { if (this.hinted.has(key)) return; this.hinted.add(key); }
    this.txt('hint', text); this.cls('hint', 'show', true); this.hintT = ms / 1000;
  }
  dmgNumber(pos, n, big, plain) {
    const box = this.el('dnums'); if (box === DUMMY_EL) return;
    const e = document.createElement('div');
    e.className = plain ? 'dn plain' : big ? 'dn big' : 'dn';
    e.textContent = n;
    box.appendChild(e);
    this.dnums.push({ el: e, pos: pos.clone(), t: 0, vx: (Math.random() - 0.5) * 30 });
    if (this.dnums.length > 24) this.dnums.shift().el.remove();
  }

  // ======================= render =======================
  render(rawDt) {
    const P = this.player, S = this.S, cs = this.camState;
    const inGame = this.state === 'play' || this.state === 'paused' || this.state === 'dead';
    if (!inGame) {
      // menu: slow orbit over the arena
      const a = this.clockT * 0.06;
      this.camera.position.set(Math.sin(a) * 58, 24 + Math.sin(this.clockT * 0.2) * 3, Math.cos(a) * 58);
      this.camera.lookAt(0, 2, 0);
      this.camera.fov = 62; this.camera.updateProjectionMatrix();
    } else {
      const alpha = this.state === 'play' ? THREE.MathUtils.clamp(this.acc / TICK, 0, 1) : 1;
      const ex = P.prevPos.x + (P.pos.x - P.prevPos.x) * alpha;
      const ey = P.prevPos.y + (P.pos.y - P.prevPos.y) * alpha + P.prevEyeH + (P.eyeH - P.prevEyeH) * alpha;
      const ez = P.prevPos.z + (P.pos.z - P.prevPos.z) * alpha;
      cs.dipV += (-cs.dip * 120 - cs.dipV * 14) * rawDt; cs.dip += cs.dipV * rawDt;
      cs.dip = THREE.MathUtils.clamp(cs.dip, -0.45, 0.2);
      if (P.grounded && P.hSpeed > 1) cs.bob += rawDt * (4 + P.hSpeed * 0.5);
      const bobY = (P.grounded ? Math.abs(Math.sin(cs.bob)) * 0.035 * Math.min(1, P.hSpeed / 11) : 0) * S.bob;
      const deadDrop = this.state === 'dead' ? -0.9 : 0;
      this.camera.position.set(ex, ey + cs.dip - bobY + deadDrop, ez);
      const tilt = -this.lastRight * 0.02 * S.tilt * Math.min(1, P.hSpeed / 12);
      cs.tilt += (tilt - cs.tilt) * Math.min(1, rawDt * 8);
      cs.trauma = Math.max(0, cs.trauma - rawDt * 1.8);
      const sh = cs.trauma * cs.trauma * S.shake, tt = this.clockT * 42;
      this.camera.rotation.set(
        P.pitch + (Math.sin(tt * 1.1) * 0.6 + Math.sin(tt * 2.3) * 0.4) * 0.03 * sh,
        P.yaw + (Math.sin(tt * 0.9 + 1) * 0.6 + Math.sin(tt * 1.9) * 0.4) * 0.03 * sh,
        cs.tilt + Math.sin(tt * 1.3 + 2) * 0.04 * sh + (this.state === 'dead' ? 0.3 : 0));
      cs.kick = Math.max(0, cs.kick - rawDt * 2.8);
      const sp01 = THREE.MathUtils.clamp((P.hSpeed - 11) / 30, 0, 1);
      // the FOV setting is horizontal (like most PC shooters); three.js wants vertical
      const fov = S.fov + S.fovFx * sp01 + cs.kick * 6;
      cs.fov += (fov - cs.fov) * Math.min(1, rawDt * 7);
      const hf = THREE.MathUtils.degToRad(Math.min(150, cs.fov));
      this.camera.fov = THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(hf / 2) / this.camera.aspect));
      this.camera.updateProjectionMatrix();
    }
    this.lastRight = (this.input.is('right') ? 1 : 0) - (this.input.is('left') ? 1 : 0);
    this.camera.updateMatrixWorld();

    const fxDt = this.state === 'paused' ? 0 : this.state === 'play' ? rawDt * this.timeScale : rawDt * 0.4;
    this.disc.render(fxDt);
    this.trail.update(this.disc.pos, this.camera.position, this.disc.out && this.state !== 'menu');
    this.parts.update(fxDt);
    this.rings.update(fxDt);
    this.arena.update(this.clockT, fxDt);
    for (const o of this.orbs) o.halo.scale.setScalar(1.7 + Math.sin(o.t * 18) * 0.25);
    this.updateLasers();
    this.updateBlinkGhost();
    this.lines.update(this.camera.position, P.vel, this.state === 'play' ? THREE.MathUtils.clamp((P.speed - 17) / 20, 0, 1) : 0);

    this.hand.update(this.state === 'play' ? rawDt * Math.max(this.timeScale, 0.4) : rawDt, {
      mx: this.mouseDX || 0, my: this.mouseDY || 0, hs: P.hSpeed, vy: P.vel.y, grounded: P.grounded, discOut: this.disc.out,
    });
    const intensity = this.mode === 'arena' && this.state === 'play' ? Math.min(1, 0.25 + this.foes.length * 0.07 + Math.min(this.combo, 10) * 0.04) : 0.2;
    this.audio.update(this.state === 'play' ? P.speed : 0, false, rawDt, intensity);

    if (inGame) this.updateHud(rawDt);

    const r = this.renderer;
    r.clear();
    r.render(this.scene, this.camera);
    if (this.state === 'play' || this.state === 'paused') { r.clearDepth(); r.render(this.hand.scene, this.hand.camera); }
  }

  updateLasers() {
    let k = 0;
    const P = this.player;
    if (this.state === 'play' || this.state === 'paused') {
      for (const f of this.foes) {
        if (k >= this.lasers.length) break;
        if (!f.alive || f.type !== 'turret' || f.windup <= 0 || f.dummy) continue;
        const l = this.lasers[k++]; const a = l.geometry.attributes.position;
        a.setXYZ(0, f.center.x, f.center.y, f.center.z); a.setXYZ(1, P.pos.x, P.pos.y + 1.0, P.pos.z); a.needsUpdate = true;
        const prog = 1 - f.windup / (0.7 * this.D.windup);
        l.material.opacity = 0.15 + prog * 0.6; l.visible = true;
      }
    }
    for (; k < this.lasers.length; k++) this.lasers[k].visible = false;
  }
  updateBlinkGhost() {
    const d = this.disc, g = this.blinkGhost;
    if (!(this.state === 'play' || this.state === 'paused') || !d.out) { g.visible = false; return; }
    // project the disc straight down so you can read where you'd land
    const h = this.arena.col.raycast(d.pos.x, d.pos.y, d.pos.z, 0, -1, 0, 40, _hit);
    const y = h ? h.y : 0;
    g.position.set(d.pos.x, Math.max(0, y) + 0.05, d.pos.z);
    g.scale.setScalar(1 + Math.sin(this.clockT * 12) * 0.08);
    g.visible = true;
  }

  updateHud(dt) {
    const P = this.player, d = this.disc, W = innerWidth, H = innerHeight;
    // vitals
    const hp = Math.max(0, Math.round(this.hp));
    this.css('hpFill', 'width', hp + '%');
    this.txt('hpNum', String(hp));
    this.cls('hpBar', 'low', hp < 35);
    this.txt('scoreTxt', this.score.toLocaleString());
    const mult = 1 + Math.min(4, Math.max(0, this.combo - 1) * 0.25);
    this.txt('comboTxt', this.combo >= 2 ? `${this.combo} 콤보 · ×${mult.toFixed(2)}` : '');
    this.txt('speedNum', String(Math.round(P.hSpeed * 3.6)));
    // dash pips
    const pips = this.el('dashPips').children;
    if (this._pipsN !== P.dashCharges) { this._pipsN = P.dashCharges; for (let i = 0; i < pips.length; i++) pips[i].classList.toggle('on', i < P.dashCharges); }
    // disc state
    const st = d.state;
    this.cls('discIcon', 'hand', st === 'hand'); this.cls('discIcon', 'out', st === 'out'); this.cls('discIcon', 'ret', st === 'return');
    const kn = a => keyName(this.S.binds[a] && this.S.binds[a][0]);
    const power = d.out ? Math.round((1 + 0.35 * d.bounces) * 100) : 100;
    this.txt('discTxt', st === 'hand' ? `${kn('throw')} 던지기` : st === 'out' ? `${kn('throw')} 회수 · ${kn('blink')} 순간이동` : `돌아오는 중 · ${kn('blink')} 순간이동`);
    this.txt('discPow', d.out && d.bounces > 0 ? `튕김 ${d.bounces} · 피해 ${power}%` : '');
    this.cls('cross', 'out', d.out);
    // disc marker on screen (where a blink would take you)
    const mk = this.el('discMark');
    if (d.out && this.state === 'play') {
      _a.copy(d.pos).applyMatrix4(this.camera.matrixWorldInverse);
      const behind = _a.z > 0;
      _a.copy(d.pos).project(this.camera);
      let x = _a.x, y = _a.y;
      if (behind) { x = -x; y = -y; }
      const edge = behind || Math.abs(x) > 0.94 || Math.abs(y) > 0.9;
      if (edge) { const m = Math.max(Math.abs(x) / 0.94, Math.abs(y) / 0.9); x /= m; y /= m; }
      this.css('discMark', 'transform', `translate(${((x + 1) / 2 * W).toFixed(1)}px,${((1 - y) / 2 * H).toFixed(1)}px)`);
      this.cls('discMark', 'edge', edge); this.cls('discMark', 'show', true);
    } else this.cls('discMark', 'show', false);
    // threat chevrons for anything winding up
    this.updateThreats();
    // damage numbers
    for (let i = this.dnums.length - 1; i >= 0; i--) {
      const n = this.dnums[i]; n.t += dt;
      if (n.t > 0.9) { n.el.remove(); this.dnums.splice(i, 1); continue; }
      _a.copy(n.pos).applyMatrix4(this.camera.matrixWorldInverse);
      if (_a.z > -0.2) { n.el.style.opacity = 0; continue; }
      _a.copy(n.pos).project(this.camera);
      const x = (_a.x + 1) / 2 * W + n.vx * n.t, y = (1 - _a.y) / 2 * H - 40 * n.t - 20;
      n.el.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px) translate(-50%,-50%) scale(${(1 + Math.max(0, 0.15 - n.t) * 3).toFixed(2)})`;
      n.el.style.opacity = String(Math.min(1, (0.9 - n.t) * 4));
    }
    // screen fx
    this.dmgFx = Math.max(0, this.dmgFx - dt * 1.6);
    this.flashFx = Math.max(0, this.flashFx - dt * 3.5);
    this.dirT = Math.max(0, this.dirT - dt * 1.2);
    this.css('hurt', 'opacity', this.dmgFx.toFixed(2));
    this.css('flash', 'opacity', this.flashFx.toFixed(2));
    this.css('lowhp', 'opacity', (this.mode === 'arena' ? Math.max(0, 0.4 - this.hp / 100) / 0.4 : 0).toFixed(2));
    this.css('dmgDir', 'opacity', this.dirT.toFixed(2));
    if (this.dirT > 0) this.css('dmgDir', 'transform', `rotate(${(this.dirAng || 0).toFixed(3)}rad)`);
    // mode / wave text
    if (this.mode === 'arena') {
      this.txt('modeTxt', this.wave ? `WAVE ${this.wave}` : 'WAVE —');
      this.txt('subTxt', this.waveState === 'break' ? `다음 웨이브 ${Math.max(0, Math.ceil(this.breakT))}초` : `남은 적 ${this.queue.length + this.foes.length}`);
    } else {
      this.txt('modeTxt', '연습장'); this.txt('subTxt', `난이도 무관 · 체력 무한 · ESC 메뉴`);
    }
    // timers for transient ui
    if (this.bannerT > 0) { this.bannerT -= dt; if (this.bannerT <= 0) this.el('banner').classList.remove('show'); }
    if (this.hintT > 0) { this.hintT -= dt; if (this.hintT <= 0) this.cls('hint', 'show', false); }
  }

  updateThreats() {
    const box = this.el('threats'); if (box === DUMMY_EL) return;
    if (!this._thr) { this._thr = []; for (let i = 0; i < 6; i++) { const e = document.createElement('i'); box.appendChild(e); this._thr.push(e); } }
    let k = 0;
    for (const f of this.foes) {
      if (k >= this._thr.length) break;
      if (!f.alive || f.windup <= 0 || f.dummy) continue;
      _a.copy(f.center).applyMatrix4(this.camera.matrixWorldInverse);
      const ang = Math.atan2(_a.x, -_a.z); // radar style: up = in front of you
      const e = this._thr[k++];
      e.style.transform = `rotate(${ang.toFixed(3)}rad) translateY(-86px)`;
      e.style.opacity = '1';
      e.className = f.type === 'shield' ? 'near' : '';
    }
    for (; k < this._thr.length; k++) this._thr[k].style.opacity = '0';
  }
}
