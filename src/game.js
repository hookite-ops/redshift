// REDSHIFT 3.3 — white arena, 4 disc weapons, 4 skills. Modes: arena waves, practice, 1V1 and FFA vs human-like bots.
// One weapon, six inputs: WASD · Space · Shift · LMB (throw / recall) · RMB (blink to the disc).
import * as THREE from 'three';
import { Arena } from './arena.js';
import { Player, T } from './player.js';
import { Foe, FOE } from './foes.js';
import { Disc, DISC, WEAPONS } from './disc.js';
import { SKILLS, CHAT, pick } from './skills.js';
import { Hand } from './hand.js';
import { Particles, Rings, SpeedLines, Ribbon } from './fx.js';
import { Fighter, BOT_ROSTER } from './fighter.js';
import { BotBrain, SKILL, PERSONAS } from './bot.js';
import { makeBrain } from './neurobot.js';
import { rankState, tierOf, opponentFor, applyResult } from './rank.js';
import { wallet, owns, CATS, earn, EMOTES, byId as cosm } from './cosmetics.js';
import { Net } from './net.js';
import { installOnline } from './online.js';
import { Audio } from './audio.js';
import { MAPS, MAP_IDS } from './maps.js';
import { Post } from './post.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { QUALITY, ASSIST, keyName } from './settings.js';

export const BLINK_CD = 3;   // 순간이동 쿨타임 (초)
const TICK = 1 / 120;
export const DIFF = {
  easy: { name: '쉬움', dmg: 0.55, windup: 1.4, count: 0.75, projSpeed: 0.75, enemyHp: 0.8, speedMul: 0.8, attackers: 2, regen: 20, killHeal: 6, assist: 0.09 },
  normal: { name: '보통', dmg: 0.85, windup: 1.1, count: 1, projSpeed: 0.9, enemyHp: 1, speedMul: 0.92, attackers: 3, regen: 14, killHeal: 4, assist: 0.06 },
  hard: { name: '어려움', dmg: 1.15, windup: 0.9, count: 1.25, projSpeed: 1.1, enemyHp: 1.15, speedMul: 1.05, attackers: 5, regen: 9, killHeal: 2, assist: 0.03 },
};
const SPAWN = new THREE.Vector3(0, 0, 22);
const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _c = new THREE.Vector3(), _d = new THREE.Vector3();
const _UP = new THREE.Vector3(0, 1, 0);
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
  { k: 'skill', a: 'skill', t: '스킬 쓰기 (메뉴에서 바꿀 수 있어요)' },
];

const TOUCH_NAME = { throw: '던지기', blink: '순간이동', jump: '점프', dash: '대시', skill: '스킬' };

function segParam(a, b, p) {
  const abx = b.x - a.x, aby = b.y - a.y, abz = b.z - a.z;
  const l2 = abx * abx + aby * aby + abz * abz; if (l2 < 1e-9) return 0;
  const t = ((p.x - a.x) * abx + (p.y - a.y) * aby + (p.z - a.z) * abz) / l2;
  return t < 0 ? 0 : t > 1 ? 1 : t;
}
// closest distance between segments a-b and c-d (disc sweep vs a fighter's capsule axis)
const _ss = { d: 0, s: 0 };
const c01 = x => x < 0 ? 0 : x > 1 ? 1 : x;
function segSeg(a, b, c, d, out) {
  const d1x = b.x - a.x, d1y = b.y - a.y, d1z = b.z - a.z, d2x = d.x - c.x, d2y = d.y - c.y, d2z = d.z - c.z;
  const rx = a.x - c.x, ry = a.y - c.y, rz = a.z - c.z;
  const A = d1x * d1x + d1y * d1y + d1z * d1z, E = d2x * d2x + d2y * d2y + d2z * d2z, F = d2x * rx + d2y * ry + d2z * rz;
  let s = 0, t = 0;
  if (A < 1e-9 && E < 1e-9) { s = t = 0; }
  else if (A < 1e-9) { t = c01(F / E); }
  else {
    const C = d1x * rx + d1y * ry + d1z * rz;
    if (E < 1e-9) { s = c01(-C / A); }
    else {
      const Bd = d1x * d2x + d1y * d2y + d1z * d2z, den = A * E - Bd * Bd;
      s = den > 1e-9 ? c01((Bd * F - C * E) / den) : 0;
      t = (Bd * s + F) / E;
      if (t < 0) { t = 0; s = c01(-C / A); } else if (t > 1) { t = 1; s = c01((Bd - C) / A); }
    }
  }
  const x = rx + d1x * s - d2x * t, y = ry + d1y * s - d2y * t, z = rz + d1z * s - d2z * t;
  out.d = Math.sqrt(x * x + y * y + z * z); out.s = s; return out;
}
const _c1 = new THREE.Vector3(), _c2 = new THREE.Vector3();
function segDist(a, b, p, t) {
  const x = a.x + (b.x - a.x) * t - p.x, y = a.y + (b.y - a.y) * t - p.y, z = a.z + (b.z - a.z) * t - p.z;
  return Math.sqrt(x * x + y * y + z * z);
}

// sky dome: cool blue overhead fading to a warm white haze at the horizon, with a soft glow around the sun
function makeSky(sunPos, clouds = true) {
  const m = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    defines: clouds ? { CLOUDS: 1 } : {},
    uniforms: { sunDir: { value: sunPos.clone().normalize() }, uTime: { value: 0 } },
    vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,
    fragmentShader: `varying vec3 vDir; uniform vec3 sunDir; uniform float uTime;
      float h21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y); }
      float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * vn(p); p = p * 2.03 + 7.1; a *= 0.5; } return s; }
      void main(){
        float h = vDir.y;
        vec3 horizon = vec3(0.84, 0.89, 0.94), zenith = vec3(0.24, 0.46, 0.80), ground = vec3(0.80, 0.84, 0.88);
        vec3 c = h > 0.0 ? mix(horizon, zenith, pow(smoothstep(0.0, 0.9, h), 0.7)) : mix(horizon, ground, smoothstep(0.0, -0.2, h));
        float s = max(dot(vDir, sunDir), 0.0);
        c += vec3(1.0, 0.9, 0.75) * (pow(s, 10.0) * 0.22 + pow(s, 600.0) * 3.0);
        // a thin bright band right at the horizon (haze)
        c = mix(c, vec3(0.93, 0.95, 0.97), exp(-abs(h) * 18.0) * 0.6);
        #ifdef CLOUDS
        if (h > 0.02) {
          // thin high clouds drifting slowly, lit on the sun side
          vec2 uv = vDir.xz / (h + 0.18) * 1.6 + vec2(uTime * 0.004, uTime * 0.0015);
          float n = fbm(uv) * 0.75 + fbm(uv * 3.1 + 2.0) * 0.25;
          float cl = smoothstep(0.52, 0.82, n) * smoothstep(0.02, 0.22, h) * (1.0 - smoothstep(0.65, 1.0, h) * 0.6);
          float lit = 0.85 + 0.25 * pow(max(dot(vDir, sunDir), 0.0), 4.0);
          c = mix(c, vec3(0.97, 0.975, 0.985) * lit, cl * 0.85);
        }
        #endif
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(400, 32, 16), m);
  sky.frustumCulled = false; sky.renderOrder = -1;
  return sky;
}

export class Game {
  constructor(canvas, S, input) {
    this.canvas = canvas; this.S = S; this.input = input;
    this.Q = QUALITY[S.quality] || QUALITY.high;
    this.state = 'menu'; this.mode = 'arena';
    this._el = {}; this._txt = {};
    this.audio = new Audio();

    const r = this.renderer = new THREE.WebGLRenderer({ canvas, antialias: this.Q.aa && !this.Q.post, powerPreference: 'high-performance', stencil: false });
    // render scale: starts at the quality's ceiling and drops automatically if the frame rate does
    this.prMax = Math.min(devicePixelRatio, this.Q.pr); this.pr = this.prMax; this.perf = { t: 0, n: 0, good: 0 };
    r.setPixelRatio(this.pr);
    r.setSize(innerWidth, innerHeight);
    r.toneMapping = THREE.NeutralToneMapping; r.toneMappingExposure = 1.1; // scene is lit a bit dark so only real glows pass the bloom threshold
    r.autoClear = false;
    r.shadowMap.enabled = this.Q.shadows; r.shadowMap.type = THREE.PCFSoftShadowMap;

    const sc = this.scene = new THREE.Scene();
    sc.background = new THREE.Color(0xdfe7ef);
    sc.fog = new THREE.Fog(0xdde5ee, 120, 420);
    // image-based light: a soft studio room reflected in every material (cheap after this one-time bake)
    const pm = new THREE.PMREMGenerator(r);
    this.envMap = pm.fromScene(new RoomEnvironment(), 0.04).texture; pm.dispose();
    sc.environment = this.envMap; sc.environmentIntensity = 0.35;
    sc.add(new THREE.HemisphereLight(0xdfeaff, 0xcfd2d6, 0.55));
    const sun = this.sun = new THREE.DirectionalLight(0xfff4e6, 2.9);
    sun.position.set(34, 62, 18);
    sc.add(this.sky = makeSky(sun.position, this.Q.shadows));
    if (this.Q.shadows) {
      sun.castShadow = true; sun.shadow.mapSize.set(this.Q.shadowSize, this.Q.shadowSize); sun.shadow.radius = 3;
      const c = sun.shadow.camera; c.left = -62; c.right = 62; c.top = 62; c.bottom = -62; c.near = 1; c.far = 200;
      sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.04;
    }
    sc.add(sun);
    this.camera = new THREE.PerspectiveCamera(S.fov, innerWidth / innerHeight, 0.05, 600);
    this.camera.rotation.order = 'YXZ';
    sc.add(this.camera);

    this.arena = new Arena(sc, this.Q);
    this.hand = new Hand(); this.hand.scene.environment = this.envMap;
    this.post = this.Q.post ? new Post(r, sc, this.camera, this.hand, this.Q) : null;
    Disc.glow = Ribbon.glow = Foe.glow = this.Q.post ? 4 : 1;
    this.parts = new Particles(sc, this.Q.particles); this.parts.mat.uniforms.boost.value = this.Q.post ? 3.5 : 1;
    this.rings = new Rings(sc);
    this.lines = new SpeedLines(sc, 90);
    this.player = new Player(this.arena, this.playerEvents());
    this.player.easy = true; this.player.noWall = true;
    this.pctx = {};
    this.disc = new Disc(this);
    this.me = new Fighter(this, { name: '나', color: 0xff5a1f, isBot: false, body: this.player, disc: this.disc });
    this.fighters = [this.me];
    this.grenades = []; this.wells = []; this.chatLines = []; this.shards = [];
    this.nadeGeo = new THREE.SphereGeometry(0.24, 14, 10);
    this.wellGeo = new THREE.SphereGeometry(1, 28, 18);
    this.versus = false; this.match = { limit: 0, timeLeft: 0, over: true };
    this.net = new Net(this); this.online = false; this.byId = new Map(); this.menuOpen = false;
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

    this.captureEnv();
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

  // the human's health lives on their fighter
  get hp() { return this.me ? this.me.hp : 100; }
  set hp(v) { if (this.me) this.me.hp = v; }
  get trail() { return this.disc.trail; }

  // ======================= small DOM helpers =======================
  el(id) { let e = this._el[id]; if (e === undefined) { e = document.getElementById(id); this._el[id] = e; } return e || DUMMY_EL; }
  txt(id, s) { if (this._txt[id] !== s) { this._txt[id] = s; this.el(id).textContent = s; } }
  css(id, k, v) { const key = id + '.' + k; if (this._txt[key] !== v) { this._txt[key] = v; this.el(id).style[k] = v; } }
  cls(id, c, on) { const key = id + '#' + c; if (this._txt[key] !== on) { this._txt[key] = on; this.el(id).classList.toggle(c, on); } }

  resize() {
    this.renderer.setPixelRatio(this.pr);
    this.renderer.setSize(innerWidth, innerHeight);
    if (this.post) this.post.setSize(innerWidth, innerHeight, this.pr);
    this.camera.aspect = innerWidth / innerHeight; this.camera.updateProjectionMatrix();
    this.hand.resize(innerWidth / innerHeight);
    this.parts.mat.uniforms.scale.value = innerHeight * this.renderer.getPixelRatio() * 0.5;
  }

  // ======================= run state =======================
  resetRun() {
    this.hp = 100; this.score = 0; this.kills = 0; this.wave = 0;
    this.combo = 0; this.comboT = 0; this.bestCombo = 0;
    this.maxSpeed = 0; this.gameTime = 0; this.regenT = 0;
    this.waveState = 'break'; this.breakT = 3; this.queue = []; this.spawnT = 0;
    this.chain = 0; this.chainT = 0; this.throwBuf = 0;
    this.dmgFx = 0; this.flashFx = 0; this.hitT = 0; this.bannerT = 0; this.popT = 0; this.hintT = 0; this.dirT = 0;
    this.stats = { throws: 0, hits: 0, banks: 0, blinks: 0, slams: 0 };
    this.tut = new Set();
  }

  start(mode, opts = {}) {
    this.ranked = !!opts.ranked && mode === 'duel';
    if (this.me) this.me.brain = null; // (AI 관전 / lab matches put a brain in your slot — a new game gives it back)
    this.mode = ['practice', 'duel', 'ffa', 'online'].includes(mode) ? mode : 'arena';
    this.versus = this.mode === 'duel' || this.mode === 'ffa' || this.mode === 'online';
    if (this.mode !== 'online') { if (this.online) this.leaveOnline(); this.online = false; }
    this.D = DIFF[this.S.difficulty] || DIFF.easy;
    this.clear(); this.resetRun();
    // map: practice always uses the white arena (its dummies are placed for it); online uses the room's map
    let mapId = this.mode === 'practice' ? 'arena' : this.mode === 'online' ? (this.netMap || 'arena') : this.S.map;
    if (!MAPS[mapId]) mapId = MAP_IDS[(Math.random() * MAP_IDS.length) | 0];
    this.loadMap(mapId);
    const P = this.player; P.easy = true; P.noWall = true;
    if (this.mode === 'practice') P.reset(SPAWN.clone(), 0);
    else { const sp = this.pickSpawn(this.me); P.reset(sp, Math.atan2(sp.x, sp.z)); }
    const me = this.me;
    me.st = { throws: 0, hits: 0, blinks: 0, slams: 0, dodges: 0, bank: 0, ret: 0 };
    Object.assign(me, { kills: 0, deaths: 0, alive: true, protT: 0, invulnT: 0, regenT: 0, streak: 0, lastHitBy: null, respawnT: 0 });
    this.deathInfo = null; this.match = { limit: 0, timeLeft: 0, over: true };
    this.disc.caught(); this.disc.catchCd = 0; this.trail.reset();
    // your look: only what you own (falls back to the free items)
    const S = this.S, rec = wallet(this.records || {});
    const pickOwned = (cat, id) => owns(rec, cat, id) ? id : CATS[cat].find(x => x.free).id;
    me.setLook({ skin: pickOwned('skin', S.skin), wskin: pickOwned('wskin', S.wskin), killfx: pickOwned('killfx', S.killfx) });
    me.showSelf = false; me.emote = null;
    this.disc.setWeapon(S.weapon); this.hand.setWeapon(this.disc.w, 0xff5a1f, me.wskin);
    me.skill = SKILLS[this.S.skill] ? this.S.skill : 'reflect';
    me.skillCd = 0; me.blinkCd = 0; me.reflectT = me.overT = me.healT = 0; P.speedMul = 1;
    this.state = 'play'; this.acc = 0; this.last = performance.now(); this.timeScale = 1; this.slowT = this.stopT = 0;
    Object.assign(this.camState, { dip: 0, dipV: 0, tilt: 0, fov: this.S.fov, kick: 0, trauma: 0 });
    this.buildDashPips();
    if (this.mode === 'practice') { this.setupPractice(); this.banner('연습장', '체크리스트를 따라 해보세요 · 맞아도 안 죽어요', 2.6); }
    else if (this.versus && this.mode !== 'online') this.setupVersus();
    else { this.banner('아레나', `${this.mapName} · 원반 하나로 끝까지 버티기`, 2.4); }
    this.cls('deathMsg', 'show', false); this.cls('board', 'hidden', !this.versus); this._boardT = 0;
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
    for (const g of this.grenades || []) this.scene.remove(g.m);
    for (const w of this.wells || []) { this.scene.remove(w.m); this.scene.remove(w.ring); }
    this.grenades = []; this.wells = [];
    for (const s of this.shards || []) this.scene.remove(s.m);
    this.shards = [];
    if (this.chatLines) { for (const c of this.chatLines) c.el.remove(); this.chatLines = []; }
    this.blinkGhost.visible = false;
    if (this.disc) { this.disc.caught(); this.trail.reset(); }
    if (this.fighters) { for (const f of this.fighters) if (f !== this.me) f.dispose(); this.fighters = [this.me]; }
    if (this.byId) this.byId.clear();
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
    if (this.tut.size === TUTORIAL.length) this.banner('완료!', `이제 실전에서 써먹어 보세요 (${this.input.touch ? 'II' : 'ESC'} → 메뉴)`, 3);
  }
  renderTut(flash) {
    const box = this.el('tut');
    if (this.mode !== 'practice') { box.innerHTML = ''; this.cls('tut', 'hidden', true); return; }
    this.cls('tut', 'hidden', false);
    const touch = this.input.touch;
    const kn = a => a ? `<b>${touch ? TOUCH_NAME[a] : keyName(this.S.binds[a] && this.S.binds[a][0])}</b>` : '';
    // on phones only the next few steps are listed so the checklist stays out of the thumb zone
    const list = touch ? TUTORIAL.filter(s => !this.tut.has(s.k) || s.k === flash).slice(0, 3) : TUTORIAL;
    box.innerHTML = `<h4>연습 체크리스트 <span>${this.tut.size}/${TUTORIAL.length}</span></h4>` +
      list.map(s => `<div class="${this.tut.has(s.k) ? 'done' : ''}${flash === s.k ? ' pop' : ''}">${kn(s.a)}${s.t}</div>`).join('');
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
      hookFire() { }, hookMiss() { }, hookAttach() { }, hookRelease() { },
      pad(p) { g.audio.jump(); g.audio.boost(); g.camState.kick = Math.max(g.camState.kick, 1.2); g.rings.add(new THREE.Vector3(p.x, p.y + 0.15, p.z), g.arena.accent.getHex(), 3, 0.4); },
      boost() { g.audio.boost(); g.camState.kick = Math.max(g.camState.kick, 1.5); g.shake(0.06); },
      fell() { if (g.versus) g.respawn(g.me); else g.player.reset(g.mode === 'practice' ? SPAWN.clone() : g.pickSpawn(g.me), 0); },
    };
  }
  botEvents(f) {
    const g = this;
    const nop = () => { };
    return {
      jump: nop, land: nop, slide: nop, wallStart: nop, climb: nop, mantle: nop, hookFire: nop, hookMiss: nop, hookAttach: nop, hookRelease: nop, pad: nop, boost: nop,
      dash() { g.spatial(f.body.pos, () => g.audio.dash()); },
      fell() { g.respawn(f); },
    };
  }
  // play a sound as if it came from pos (quieter with distance)
  spatial(pos, fn) {
    const d = pos.distanceTo(this.camera.position);
    if (d > 70) return;
    this.audio.vol = Math.pow(Math.max(0.06, 1 - d / 70), 1.5);
    try { fn(); } finally { this.audio.vol = 1; }
  }

  // ======================= main loop =======================
  frame(now) {
    if (this.state === 'lab') { this.last = now; return; } // AI 훈련소 is running matches in the background
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
      fwd: THREE.MathUtils.clamp((I.is('forward') ? 1 : 0) - (I.is('back') ? 1 : 0) + I.axis.y, -1, 1),
      right: THREE.MathUtils.clamp((I.is('right') ? 1 : 0) - (I.is('left') ? 1 : 0) + I.axis.x, -1, 1),
      jumpPressed: I.pressed('jump'), jumpHeld: I.is('jump'),
      crouch: false, dashPressed: I.pressed('dash'),
      grapplePressed: false, grappleHeld: false,
      autoHop: !!this.S.autoHop,
      throwPressed: I.pressed('throw'), blinkPressed: I.pressed('blink'), skillPressed: I.pressed('skill'), emotePressed: I.pressed('emote'),
    };
    I.consumeEdges();
    return inp;
  }

  clampBounds(B) {
    const L = this.arena.half - 0.45;
    if (Math.abs(B.pos.x) > L) { B.pos.x = Math.sign(B.pos.x) * L; if (B.vel.x * Math.sign(B.pos.x) > 0) B.vel.x = 0; }
    if (Math.abs(B.pos.z) > L) { B.pos.z = Math.sign(B.pos.z) * L; if (B.vel.z * Math.sign(B.pos.z) > 0) B.vel.z = 0; }
    if (B.pos.y > this.arena.ceiling) { B.pos.y = this.arena.ceiling; B.vel.y = Math.min(B.vel.y, 0); }
  }

  tick(dt) {
    this.gameTime += dt;
    const P = this.player, d = this.disc, me = this.me;
    let inp = this.readInput();
    if (this.menuOpen) { inp.fwd = inp.right = 0; inp.jumpPressed = inp.jumpHeld = inp.dashPressed = inp.throwPressed = inp.blinkPressed = inp.skillPressed = false; }
    if (me.brain) inp = me.brain.tick(dt); // autopilot (used by the automated tests)
    if (inp.emotePressed && this.onEmoteKey) this.onEmoteKey();
    if (me.emote && (inp.fwd || inp.right || inp.jumpPressed || inp.dashPressed || inp.throwPressed || inp.blinkPressed || inp.skillPressed || !me.alive)) { me.emote = null; }
    me.showSelf = !!me.emote;
    // party emotes throw confetti
    this.confT = (this.confT || 0) - dt;
    if (this.confT <= 0) { this.confT = 0.12; for (const f of this.fighters) if (f.emote && f.emote.def.confetti && f.alive) this.confetti(f.body.pos, 5, 2.4); }
    if (this.online) this.updateRemotes();
    if (me.alive) {
      P.tick(dt, inp, this.pctx);
      this.clampBounds(P);
      this.maxSpeed = Math.max(this.maxSpeed, P.hSpeed);
      // ---------- the disc ----------
      if (!me.brain) {
        this.throwBuf -= dt;
        if (inp.throwPressed) {
          if (d.state === 'hand') { if (d.catchCd > 0) this.throwBuf = 0.4; else this.throwDisc(); }
          else if (d.state === 'out') this.recallFor(me);
          else this.throwBuf = 0.4; // still flying home: throw again the moment it lands in your hand
        }
        if (this.throwBuf > 0 && d.state === 'hand' && d.catchCd <= 0) { this.throwBuf = 0; this.throwDisc(); }
        if (inp.blinkPressed) this.blink();
        if (inp.skillPressed) this.useSkill(me);
      }
    }
    // ---------- bots ----------
    for (const f of this.fighters) {
      if (f === me || !f.alive || f.remote || !f.brain) continue;
      const bi = this.match.over && this.versus ? f.brain.inp : f.brain.tick(dt);
      f.body.tick(dt, bi, this.pctx);
      this.clampBounds(f.body);
    }
    for (const f of this.fighters) if (!f.remote) f.disc.tick(dt);
    this.tickSkills(dt); this.tickShards(dt);

    // ---------- vitals ----------
    for (const f of this.fighters) {
      f.invulnT -= dt; f.protT = Math.max(0, f.protT - dt);
      if (!this.versus) continue;
      if (!f.alive) { if (!this.match.over && !f.remote) { f.respawnT -= dt; if (f.respawnT <= 0) this.respawn(f); } continue; }
      if (this.online) continue; // the server owns health online
      f.regenT -= dt;
      if (f.regenT <= 0 && f.hp < 100) f.hp = Math.min(100, f.hp + 8 * dt);
    }
    if (!this.versus) {
      this.regenT -= dt;
      if (this.regenT <= 0 && this.hp < 100) this.hp = Math.min(100, this.hp + this.D.regen * dt);
    }
    if (this.comboT > 0) { this.comboT -= dt; if (this.comboT <= 0) this.combo = 0; }
    if (this.chainT > 0) { this.chainT -= dt; if (this.chainT <= 0) this.chain = 0; }

    // ---------- world ----------
    this.tickDebris(dt);
    if (this.online) this.netTick(dt);
    if (this.versus) { this.tickMatch(dt); return; }
    const ctx = this.ctx();
    for (const f of this.foes) if (f.alive) { if (f.dummy) this.tickDummy(f, dt, ctx); else f.update(dt, ctx); }
    this.foes = this.foes.filter(f => f.alive);
    this.tickOrbs(dt);
    if (this.mode === 'arena') this.tickWaves(dt); else this.tickPractice(dt);
  }

  // ======================= emotes & cosmetics =======================
  emote(id) {
    const me = this.me;
    if (this.state !== 'play' || !me.alive || !me.body.grounded) return false;
    if (!me.playEmote(id)) return false;
    me.showSelf = true;
    if (this.online) this.netFx({ k: 'emote', id: me.netId, e: id });
    return true;
  }
  confetti(pos, n = 30, h = 1.2) {
    const P = [[1, 0.31, 0.08], [0.1, 0.55, 1], [0.15, 0.85, 0.45], [1, 0.82, 0.1], [1, 0.25, 0.65], [1, 1, 1]];
    this.parts.emit(new THREE.Vector3(pos.x, pos.y + h, pos.z), n, { color: P, speed: 6, life: 1.1, gravity: 6, size: 0.12 });
  }
  // what a kill looks like depends on the KILLER's kill effect
  killEffect(k, v, c, dir) {
    const fx = k && k.killfx || 'cubes', col = new THREE.Color(v.color);
    if (fx === 'confetti') { this.confetti(v.body.pos, 70, 1.1); this.rings.add(c.clone(), 0xffffff, 2.2, 0.35, null); }
    else if (fx === 'pixel') {
      for (let i = 0; i < 4; i++) this.parts.emit(new THREE.Vector3(c.x, c.y - 0.6 + i * 0.4, c.z), 14, { color: [[col.r, col.g, col.b], [1, 1, 1]], speed: 1.5, life: 1.3, gravity: -4, size: 0.16 });
    } else if (fx === 'bolt') {
      for (let i = 0; i < 26; i++) { const t = i / 25, j = (Math.random() - 0.5) * 0.9 * (1 - t); this.parts.emit(new THREE.Vector3(c.x + j, c.y + t * 14, c.z + (Math.random() - 0.5) * 0.9 * (1 - t)), 2, { color: [[0.75, 0.85, 1], [1, 1, 1]], speed: 0.6, life: 0.35, gravity: 0, size: 0.22 }); }
      this.rings.add(new THREE.Vector3(v.body.pos.x, v.body.pos.y + 0.06, v.body.pos.z), 0xbfd8ff, 4.2, 0.4);
      this.flashFx = 1; this.shake(0.15);
    } else if (fx === 'hole') {
      for (let i = 0; i < 3; i++) this.rings.add(c.clone(), 0x0e1116, 3.2 - i * 0.8, 0.5 + i * 0.12, null);
      for (let i = 0; i < 36; i++) { // a ring of debris sucked into the middle
        const ang = i / 36 * Math.PI * 2, p = new THREE.Vector3(c.x + Math.cos(ang) * 2.6, c.y + (Math.random() - 0.5), c.z + Math.sin(ang) * 2.6);
        this.parts.emit(p, 1, { color: [[0.05, 0.05, 0.08], [0.55, 0.3, 1], [col.r, col.g, col.b]], dir: new THREE.Vector3(-Math.cos(ang), 0, -Math.sin(ang)), spread: 0.1, speed: 6, life: 0.45, gravity: 0, drag: 0, size: 0.14 });
      }
    }
  }
  // coins for playing (cosmetics)
  award(n, why) {
    if (this.trainLock || n <= 0) return 0;
    const got = earn(wallet(this.records), n, why); this.saveRecords && this.saveRecords();
    this.coinsWon = (this.coinsWon || 0) + got;
    return got;
  }

  // ======================= the disc =======================
  throwDisc() {
    const P = this.player, A = this.assistCfg();
    const dir = P.lookDir(new THREE.Vector3());
    const origin = new THREE.Vector3().copy(P.eye); origin.y -= 0.15;
    const lock = this.aimAssist(origin, dir);
    if (!this.throwFor(this.me, dir)) return;
    const d = this.disc;
    d.homing = A.homing; d.cone = A.cone; d.range = A.range; d.bonus = A.bonus; d.lock = lock; d.headAim = !!(lock && this.headAim);
  }
  throwFor(f, dir) {
    const B = f.body, d = f.disc;
    const origin = new THREE.Vector3().copy(B.eye); origin.y -= 0.15; origin.addScaledVector(dir, 0.3);
    if (!d.throw(origin, dir, B.vel, f.overT > 0 ? 1.25 : 1)) return false;
    f.st.throws++;
    this.noise(f, origin, 30);
    if (this.online) this.netFx({ k: 'throw', id: f.netId });
    if (f === this.me) {
      this.stats.throws++;
      this.audio.discThrow(1); this.hand.throwAnim();
      this.camState.kick = Math.max(this.camState.kick, 0.25);
      this.train('throw');
    } else { f.throwT = 0.25; this.spatial(origin, () => this.audio.discThrow(0.8)); }
    return true;
  }
  recallFor(f) {
    if (!f.disc.recall()) return false;
    if (f === this.me) { this.audio.discBounce(0); this.train('recall'); }
    return true;
  }
  // ---------- aim help for YOUR throws (settings → 조준 보조) ----------
  assistCfg() {
    let A = ASSIST[this.S.aimAssist] || ASSIST.strong;
    if (this.ranked && A === ASSIST.strong) A = ASSIST.normal; // ranked: no strong aim help
    // thumbs are less precise than a mouse: a wider snap cone on touch screens
    return this.input.touch && A.snap ? (this._touchA || (this._touchA = {})) && Object.assign(this._touchA, A, { snap: A.snap * 1.6, cone: A.cone * 1.15 }) : A;
  }
  assistTargets() {
    if (this.versus) return this.fighters.filter(f => f !== this.me && f.alive);
    return this.foes.filter(f => f.alive);
  }
  // where to aim: chest + velocity, airborne fighters follow gravity
  tInfo(t) {
    if (t instanceof Fighter) { const B = t.body; return { c: t.updateCenter(), v: B.vel, air: !B.grounded }; }
    return { c: t.center, v: t.vel, air: false };
  }
  leadPoint(origin, t, out) {
    const { c, v, air } = this.tInfo(t), P = this.player;
    const W = this.disc.w;
    let tt = origin.distanceTo(c) / W.speed;
    for (let k = 0; k < 3; k++) {
      out.copy(c).addScaledVector(v, tt);
      if (air) { out.y += -0.5 * T.gravity * tt * tt; if (out.y < 0.8) out.y = 0.8; } else out.y = c.y;
      const d = origin.distanceTo(out);
      _d.subVectors(out, origin).divideScalar(d || 1);
      tt = d / (W.speed + Math.max(0, P.vel.dot(_d)) * W.carry);
    }
    return out;
  }
  // point roughly at someone and the throw leads them for you. Returns the locked target.
  aimAssist(origin, dir, apply = true) {
    const A = this.assistCfg(); if (!A.snap) return null;
    let best = null, bestA = A.snap; const bestDir = new THREE.Vector3(), lp = new THREE.Vector3();
    for (const t of this.assistTargets()) {
      const { c } = this.tInfo(t);
      _b.subVectors(c, origin); const dist = _b.length();
      if (dist < 1.2 || dist > 80) continue;
      _b.divideScalar(dist);
      this.leadPoint(origin, t, lp);
      _a.subVectors(lp, origin).normalize();
      // aiming at the body OR at the lead point both count
      const ang = Math.min(Math.acos(THREE.MathUtils.clamp(_a.dot(dir), -1, 1)), Math.acos(THREE.MathUtils.clamp(_b.dot(dir), -1, 1)));
      if (ang >= bestA) continue;
      if (this.los(origin, lp)) { bestA = ang; best = t; bestDir.copy(_a); }
      else if (this.los(origin, c)) { bestA = ang; best = t; bestDir.copy(_b); }
    }
    // aiming at the head (clearly above the chest) keeps the head as the target: headshots stay a skill
    this.headAim = false;
    if (best && best instanceof Fighter) {
      const { c } = this.tInfo(best), dist = origin.distanceTo(c);
      const above = (Math.asin(THREE.MathUtils.clamp(dir.y, -1, 1)) - Math.asin(THREE.MathUtils.clamp(bestDir.y, -1, 1))) * dist;
      if (above > 0.32 && above < 1.3) { this.headAim = true; bestDir.y += 0.66 / Math.max(1, dist); bestDir.normalize(); }
    }
    if (best && apply) dir.copy(bestDir);
    return best;
  }
  // results line: accuracy + how much the game helped. Unassisted accuracy is also kept as a personal best.
  aimStats() {
    const S = this.stats, th = S.throws || 0, acc = th ? Math.min(100, Math.round(S.hits / th * 100)) : 0;
    const mode = this.ranked && this.S.aimAssist === 'strong' ? 'normal' : this.S.aimAssist;
    const label = { strong: '강함 (보정 있음)', normal: '보통 (보정 약간)', guide: '가이드 · 보정 0%', off: '끔 · 보정 0%' }[mode] || mode;
    const pure = mode === 'guide' || mode === 'off';
    const rec = this.records; let best = '';
    if (pure && th >= 8) { if (acc > (rec.pureAcc || 0)) { rec.pureAcc = acc; best = ' · 최고 기록!'; } }
    return [['명중률', th ? `${acc}% (${Math.min(S.hits, th)}/${th})${best}` : '—'], ['조준 보조', label]];
  }
  // 가이드 mode: find who you're roughly looking at and where your disc would have to go to meet them.
  // Nothing about the throw changes — this is information only, like a ghost line on a pool table.
  aimGuide(origin, dir) {
    let best = null, bestA = 0.55; const lp = this._gLp || (this._gLp = new THREE.Vector3()), out = this._gOut || (this._gOut = { t: null, p: new THREE.Vector3(), on: false, head: false });
    for (const t of this.assistTargets()) {
      if (t.protT > 0) continue;
      const { c } = this.tInfo(t);
      const dist = origin.distanceTo(c); if (dist < 1.2 || dist > 70) continue;
      this.leadPoint(origin, t, lp);
      _a.subVectors(lp, origin).normalize(); _b.subVectors(c, origin).divideScalar(dist);
      const ang = Math.min(Math.acos(THREE.MathUtils.clamp(_a.dot(dir), -1, 1)), Math.acos(THREE.MathUtils.clamp(_b.dot(dir), -1, 1)));
      if (ang < bestA && this.los(origin, lp)) { bestA = ang; best = t; out.p.copy(lp); }
    }
    out.t = best; out.on = false; out.head = false;
    if (best) {
      const dist = origin.distanceTo(out.p), w = this.disc.w;
      _a.subVectors(out.p, origin).normalize();
      // the disc connects if the aim line passes within (body radius + disc radius) of the lead point
      const off = Math.sin(Math.acos(THREE.MathUtils.clamp(_a.dot(dir), -1, 1))) * dist;
      const along = dir.dot(_b.subVectors(out.p, origin));
      out.on = along > 0 && off < T.radius * 0.85 + w.radius;
      // aiming above the chest line at the right lead = headshot
      if (best instanceof Fighter) { const up = (dir.y - _a.y) * dist; out.head = out.on && up > 0.32; }
    }
    return out;
  }
  // your disc bends toward the enemy it is flying at. Acquire inside a cone; once locked it keeps
  // tracking anywhere in front of it, and steers harder the closer it gets (so it finishes the job).
  discHoming(d, dt) {
    const sp = d.vel.length(); if (sp < 1) return;
    const dir = _a.copy(d.vel).divideScalar(sp);
    const valid = t => t && t.alive && !d.hit.has(t) && !(t.protT > 0);
    let best = null;
    if (valid(d.lock)) {
      const { c } = this.tInfo(d.lock);
      _b.subVectors(c, d.pos); const dist = _b.length();
      if (dist < d.range && _b.dot(dir) > dist * 0.15) best = d.lock; // still roughly ahead (< ~80°)
    }
    if (!best) {
      let bestS = 1e9;
      for (const t of this.assistTargets()) {
        if (!valid(t)) continue;
        const { c } = this.tInfo(t);
        _b.subVectors(c, d.pos); const dist = _b.length();
        if (dist > d.range || dist < 0.4) continue;
        const ang = Math.acos(THREE.MathUtils.clamp(_b.dot(dir) / dist, -1, 1));
        if (ang < d.cone && ang < bestS) { bestS = ang; best = t; }
      }
      if (best) d.lock = best;
    }
    if (!best) return;
    const { c, v } = this.tInfo(best);
    if (!this.los(d.pos, c)) return; // never steer into cover
    const dist = d.pos.distanceTo(c), tt = dist / sp;
    _c.copy(c).addScaledVector(v, tt * 0.7);
    if (d.headAim && best instanceof Fighter) _c.y += 0.66;
    _c.sub(d.pos).normalize();
    const ang = Math.acos(THREE.MathUtils.clamp(_c.dot(dir), -1, 1));
    if (ang < 1e-4) return;
    const rate = Math.min(14, d.homing * (1 + 8 / Math.max(1.5, dist)));
    dir.lerp(_c, Math.min(1, rate * dt / ang)).normalize();
    d.vel.copy(dir).multiplyScalar(sp);
  }
  onDiscBounce(d, p, n) {
    if (this.online && d.owner && !d.owner.remote) this.netFx({ k: 'bounce', id: d.owner.netId, p: [p.x, p.y, p.z].map(v => Math.round(v * 100) / 100), n: [n.x, n.y, n.z].map(v => Math.round(v * 100) / 100), b: d.bounces });
    if (d.owner === this.me) this.audio.discBounce(d.bounces);
    else this.spatial(p, () => this.audio.discBounce(d.bounces));
    d.trail.width = 0.25 + Math.min(4, d.bounces) * 0.07;
    const c = new THREE.Color(d.color);
    this.parts.emit(p, 10, { color: [[c.r, c.g, c.b], [0.15, 0.15, 0.17]], speed: 7, dir: n, spread: 0.8, life: 0.35, gravity: 10 });
    this.rings.add(p.clone().addScaledVector(n, 0.04), d.color, 1.1 + d.bounces * 0.35, 0.3, n);
  }
  // ---- weapon tricks ----
  // seeker: turn toward the best visible enemy in front, all the way
  discSeek(d, dt) {
    const sp = d.vel.length(); if (sp < 1) return;
    const dir = _a.copy(d.vel).divideScalar(sp), owner = d.reflectedBy || d.owner;
    const list = this.versus ? this.fighters : this.foes;
    let best = null, bc = null, bs = 1e9;
    for (const t of list) {
      if (!t.alive || t === owner || (this.versus && (t === d.owner && !d.reflectedBy)) || t.protT > 0 || d.hit.has(t)) continue;
      const c = t.updateCenter ? t.updateCenter() : t.center;
      _b.subVectors(c, d.pos); const dist = _b.length(); if (dist > 70 || dist < 0.3) continue;
      const cos = _b.dot(dir) / dist; if (cos < -0.1) continue;
      const score = dist * (1.7 - cos) - (t === d.seekLock ? 10 : 0);
      if (score < bs && this.los(d.pos, c)) { bs = score; best = t; bc = c; }
    }
    d.seekLock = best;
    if (!best) return;
    _c.subVectors(bc, d.pos).normalize();
    const ang = Math.acos(THREE.MathUtils.clamp(_c.dot(dir), -1, 1));
    if (ang < 1e-4) return;
    dir.lerp(_c, Math.min(1, d.w.seek * dt / ang)).normalize();
    d.vel.copy(dir).multiplyScalar(sp);
  }
  // damage everyone (but the thrower) within r of p; falloff to minK at the edge
  discArea(d, p, r, dmg, kind, minK = 0.5, hit = d.hit) {
    const by = d.reflectedBy || d.owner;
    if (this.versus) {
      for (const t of this.fighters) {
        if (t === by || !t.alive || hit.has(t)) continue;
        const c = t.updateCenter(), dist = c.distanceTo(p);
        if (dist > r + T.radius || !this.los(p, c)) continue;
        hit.add(t);
        if (t.invuln) continue;
        const dir = _b.subVectors(c, p).setY(0); if (dir.lengthSq() < 1e-4) dir.set(1, 0, 0); dir.normalize();
        this.damageFighter(t, dmg * (1 - (1 - minK) * Math.min(1, dist / r)), by, kind, dir.clone(), 0);
      }
    } else {
      for (const f of this.foes) {
        if (!f.alive || hit.has(f) || f.spawnT > 0.25) continue;
        const dist = f.center.distanceTo(p);
        if (dist > r + f.hitRadius || !this.los(p, f.center)) continue;
        hit.add(f);
        const dir = _b.subVectors(f.center, p).normalize();
        this.hitFoe(f, dmg * (1 - (1 - minK) * Math.min(1, dist / r)), dir.clone(), kind, 0);
      }
    }
  }
  // nova: explode where it first touches anything
  discBlast(d, p, fromNet = false) {
    const w = WEAPONS.nova;
    if (!fromNet) {
      if (this.online && d.owner) this.netFx({ k: 'blast', id: d.owner.netId, p: [p.x, p.y, p.z].map(v => Math.round(v * 100) / 100) });
      this.discArea(d, p, w.blast.r, w.blast.dmg, 'blast', 0.45, new Set());
    }
    const c = new THREE.Color(d.color);
    this.rings.add(p.clone(), d.color, w.blast.r * 2, 0.45, null);
    this.rings.add(new THREE.Vector3(p.x, Math.max(0.06, p.y - 1), p.z), d.color, w.blast.r * 1.6, 0.5);
    this.parts.emit(p, 46, { color: [[c.r, c.g, c.b], [1, 0.9, 0.7], [0.15, 0.15, 0.17]], speed: 16, life: 0.55, gravity: 8, size: 0.16 });
    const near = this.player.pos.distanceTo(p);
    if (near < 18) this.shake(0.3 * (1 - near / 18));
    this.spatial(p, () => this.audio.slam());
  }
  // splitter: becomes three shards fanning out from the wall
  discSplit(d, p) {
    const sp = Math.max(d.vel.length(), 40) * 1.05, base = _a.copy(d.vel).normalize();
    const vels = [];
    for (const ang of [-0.5, 0, 0.5]) {
      const v = base.clone().applyAxisAngle(_UP, ang); v.y += ang === 0 ? 0.08 : 0; v.normalize().multiplyScalar(sp);
      vels.push(v);
    }
    for (const v of vels) this.spawnShard(d.owner, d.color, p, v, d.w.shardDmg, false);
    if (this.online && d.owner) this.netFx({ k: 'split', id: d.owner.netId, p: [p.x, p.y, p.z].map(v => Math.round(v * 100) / 100), v: vels.map(v => [v.x, v.y, v.z].map(x => Math.round(x * 10) / 10)) });
    d.recall();
  }
  spawnShard(owner, color, p, v, dmg, visual) {
    if (!this.shardGeo) { this.shardGeo = new THREE.BoxGeometry(0.07, 0.07, 0.7); this.shardMats = new Map(); }
    let mat = this.shardMats.get(color);
    if (!mat) { mat = new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(Disc.glow > 1 ? 5 : 1) }); this.shardMats.set(color, mat); }
    const m = new THREE.Mesh(this.shardGeo, mat); m.position.copy(p); this.scene.add(m);
    this.shards.push({ m, pos: p.clone(), vel: v.clone(), owner, dmg, visual: visual || (owner && owner.remote), life: 0.7, hit: new Set() });
  }
  tickShards(dt) {
    const col = this.arena.col;
    for (let i = this.shards.length - 1; i >= 0; i--) {
      const s = this.shards[i]; s.life -= dt;
      const step = s.vel.length() * dt, dir = _a.copy(s.vel).normalize();
      const h = col.raycast(s.pos.x, s.pos.y, s.pos.z, dir.x, dir.y, dir.z, step, _hit);
      const end = _d.copy(s.pos).addScaledVector(dir, h ? h.t : step);
      if (!s.visual) {
        if (this.versus) {
          for (const t of this.fighters) {
            if (t === s.owner || !t.alive || s.hit.has(t)) continue;
            const B = t.body; _c1.set(B.pos.x, B.pos.y + 0.4, B.pos.z); _c2.set(B.pos.x, B.pos.y + Math.max(0.6, B.h - 0.4), B.pos.z);
            if (segSeg(s.pos, end, _c1, _c2, _ss).d < T.radius + 0.25) { s.hit.add(t); if (!t.invuln) this.damageFighter(t, s.dmg, s.owner, 'shard', dir.clone(), 1); }
          }
        } else {
          for (const f of this.foes) {
            if (!f.alive || s.hit.has(f)) continue;
            if (segDist(s.pos, end, f.center, segParam(s.pos, end, f.center)) < f.hitRadius + 0.25) { s.hit.add(f); this.hitFoe(f, s.dmg, dir.clone(), 'shard', 1); }
          }
        }
      }
      s.pos.copy(end);
      if (h || s.life <= 0) {
        if (h) this.parts.emit(s.pos, 6, { color: [[1, 1, 1], [0.15, 0.15, 0.17]], speed: 5, life: 0.25, gravity: 8 });
        this.scene.remove(s.m); this.shards.splice(i, 1); continue;
      }
    }
  }
  renderShards() {
    for (const s of this.shards) { s.m.position.copy(s.pos); s.m.lookAt(_d.copy(s.pos).add(s.vel)); }
  }
  onDiscCatch(d) {
    if (d.state === 'hand') return;
    d.caught();
    if (d.owner === this.me) { this.audio.discCatch(); this.hand.catchAnim(); }
  }
  // everything the disc touches between a and b
  discSweep(d, a, b, leg) {
    const len = a.distanceTo(b); if (len < 1e-6) return null;
    const dir = new THREE.Vector3().subVectors(b, a).divideScalar(len);
    if (this.versus) return this.sweepFighters(d, a, b, dir, leg);
    const hits = [];
    for (const f of this.foes) {
      if (!f.alive || d.hit.has(f) || f.spawnT > 0.25) continue;
      const t = segParam(a, b, f.center);
      if (segDist(a, b, f.center, t) < f.hitRadius + d.w.radius + (d.bonus || 0)) hits.push({ f, t });
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
        ? d.w.dmg * (1 + d.w.bounceMul * d.bounces) * (0.75 + 0.25 * d.speedMul())
        : d.w.returnDmg * (1 + 0.2 * d.bounces);
      this.hitFoe(f, dmg, dir, leg === 'out' ? (d.bounces > 0 ? 'bank' : 'direct') : 'return', d.bounces);
      if (d.w.blast && leg === 'out' && !d.blasted) { d.blasted = true; this.discBlast(d, at); d.recall(); return at; }
    }
    // the disc also swats enemy orbs out of the air
    for (let i = this.orbs.length - 1; i >= 0; i--) {
      const o = this.orbs[i];
      if (segDist(a, b, o.pos, segParam(a, b, o.pos)) < d.w.radius + 0.55) this.killOrb(o, true);
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
  blink() { return this.blinkFor(this.me); }
  blinkFor(f) {
    const d = f.disc, B = f.body, isMe = f === this.me;
    if (d.state === 'hand') {
      if (isMe) { this.audio.empty(); this.hint(`순간이동은 원반이 날아가는 동안만 — 먼저 ${keyName(this.S.binds.throw[0])}로 던지세요`, 'blinkEmpty'); }
      return false;
    }
    if (f.blinkCd > 0) {
      if (isMe) { this.audio.empty(); this.hint(`순간이동 쿨타임 ${f.blinkCd.toFixed(1)}초`, 'blinkCd'); this.blinkDeny = 0.35; }
      return false;
    }
    const spot = d.blinkSpot(this.arena.col);
    if (!spot) { if (isMe) this.audio.empty(); return false; }
    f.blinkCd = BLINK_CD;
    const lim = this.arena.half - 1;
    spot.x = THREE.MathUtils.clamp(spot.x, -lim, lim); spot.z = THREE.MathUtils.clamp(spot.z, -lim, lim);
    spot.y = Math.min(spot.y, this.arena.ceiling - 2);
    const from = B.pos.clone();
    B.pos.copy(spot); B.prevPos.copy(spot);
    // momentum: carry what you had (min 16 m/s) +3, in the direction you are looking
    const hs = B.hSpeedNow();
    const sp = Math.min(42, Math.max(hs, 16) + 3);
    const fw = B.flatFwd(new THREE.Vector3());
    B.vel.set(fw.x * sp, Math.max(B.vel.y, 4), fw.z * sp);
    B.grounded = false; B.airJumps = T.airJumps;
    B.dashCharges = Math.min(B.dashMax, B.dashCharges + 1);
    f.invulnT = this.versus ? 0 : 0.3; f.st.blinks++;
    // shockwave
    const c = new THREE.Vector3(spot.x, spot.y + 0.9, spot.z);
    let slammed = 0;
    if (this.versus) {
      for (const o of this.fighters) {
        if (o === f || !o.alive) continue;
        if (o.updateCenter().distanceTo(c) < d.w.blinkRadius + T.radius) {
          const out = new THREE.Vector3().subVectors(o.body.pos, spot).setY(0);
          if (out.lengthSq() < 1e-4) out.set(1, 0, 0);
          out.normalize();
          if (o.reflectT > 0) { // the shockwave bounces off a reflect bubble and throws YOU back
            B.vel.addScaledVector(out, -14); B.vel.y = 6; f.st.reflected = (f.st.reflected || 0) + 1;
            this.reflectFx(o, c);
            if (f.brain) this.chat(f, 'reflected', 0.5);
            continue;
          }
          if (this.damageFighter(o, d.w.blinkSlam * (1 + 0.15 * d.bounces), f, 'slam', out, d.bounces)) { slammed++; f.st.slams++; }
        }
      }
    } else {
      for (const e of this.foes) {
        if (!e.alive) continue;
        if (e.center.distanceTo(c) < d.w.blinkRadius + e.cfg.r) {
          const out = new THREE.Vector3().subVectors(e.pos, spot).setY(0);
          if (out.lengthSq() < 1e-4) out.set(1, 0, 0);
          out.normalize();
          slammed++;
          this.hitFoe(e, d.w.blinkSlam * (1 + 0.15 * d.bounces), out, 'slam', d.bounces);
          if (e.alive) { e.vel.addScaledVector(out, 9); e.vel.y = 5; }
        }
      }
      for (let i = this.orbs.length - 1; i >= 0; i--) if (this.orbs[i].pos.distanceTo(c) < d.w.blinkRadius) this.killOrb(this.orbs[i], true);
    }
    // fx
    const col = new THREE.Color(f.color);
    const n = Math.min(24, Math.ceil(from.distanceTo(spot) / 1.5));
    for (let i = 0; i <= n; i++) {
      const p = _c.lerpVectors(from, spot, i / n); p.y += 1;
      this.parts.emit(p, 2, { color: [[col.r, col.g, col.b], [0.12, 0.12, 0.14]], speed: 1.5, life: 0.45, gravity: 0, size: 0.14 });
    }
    this.rings.add(new THREE.Vector3(spot.x, spot.y + 0.06, spot.z), slammed ? 0x16161a : f.color, slammed ? d.w.blinkRadius * 1.3 : 2.2, 0.45);
    this.noise(f, spot, 38);
    if (this.online) this.netFx({ k: 'blink', id: f.netId, a: [from.x, from.y, from.z].map(v => Math.round(v * 100) / 100), b: [spot.x, spot.y, spot.z].map(v => Math.round(v * 100) / 100), s: slammed ? 1 : 0 });
    if (isMe) {
      this.audio.blink(); this.hand.blinkAnim();
      this.camState.kick = Math.max(this.camState.kick, 1.3); this.flashFx = Math.max(this.flashFx, 0.6);
      if (slammed) { this.audio.slam(); this.shake(0.25); this.stats.slams++; this.train('slam'); if (slammed >= 2) this.slowT = Math.max(this.slowT, 0.25); }
      this.chain++; this.chainT = 2.5;
      if (this.chain >= 2) this.popup(`순간이동 ×${this.chain}`);
      this.stats.blinks++; this.train('blink');
    } else {
      this.spatial(spot, () => { this.audio.blink(); if (slammed) this.audio.slam(); });
      if (slammed && spot.distanceTo(this.player.pos) < 8) this.shake(0.15);
    }
    this.onDiscCatch(d);
    return true;
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
    this.orbs.push({ m, halo, pos: o, vel: dir.multiplyScalar(15 * this.D.projSpeed), life: 6, dmg: 12 * this.D.dmg, dodged: false, t: 0, from: f, reflected: false });
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
      if (o.reflected) {
        let hitF = null;
        for (const f of this.foes) if (f.alive && f.center.distanceTo(o.pos) < f.hitRadius + 0.4) { hitF = f; break; }
        if (hitF) { this.hitFoe(hitF, 35, o.vel.clone().normalize(), 'reflect', 0); this.killOrb(o, false); continue; }
        if (o.life <= 0) this.killOrb(o, false);
        continue;
      }
      // reflect bubble bats the orb straight back at the turret that fired it
      if (this.me.reflectT > 0 && o.pos.distanceTo(this.me.updateCenter()) < 1.9) {
        const back = o.from && o.from.alive ? _b.subVectors(o.from.center, o.pos).normalize() : _b.copy(o.vel).negate().normalize();
        o.vel.copy(back).multiplyScalar(30); o.reflected = true; o.life = 3;
        o.m.material = this.orbMatR || (this.orbMatR = new THREE.MeshBasicMaterial({ color: 0xff5a1f }));
        this.reflectFx(this.me, o.pos); continue;
      }
      // hit test against the player's capsule
      const yb = P.pos.y + 0.4, yt = P.pos.y + P.h - 0.4;
      const cy = THREE.MathUtils.clamp(o.pos.y, yb, yt);
      const dd = Math.hypot(o.pos.x - P.pos.x, o.pos.y - cy, o.pos.z - P.pos.z);
      if (dd < 0.3 + T.radius) {
        if (this.me.invuln) {
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
    if (this.me.invuln || f.cd > 0) return;
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
    if (dist < 3.4 && Math.abs(dy) < 2 && to.dot(fw) / (dist || 1) > 0.35 && !this.me.invuln) {
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

  // drive the human fighter with a bot brain (automated tests / bot-vs-bot measurements)
  autopilot(skill) { this.me.brain = !skill ? null : skill === 'ai' ? makeBrain(this, this.me, null) : new BotBrain(this, this.me, skill); }

  // ======================= SKILLS (Q) =======================
  useSkill(f) {
    const K = SKILLS[f.skill];
    if (!K || !f.alive) return false;
    if (f.skillCd > 0) { if (f === this.me) this.audio.empty(); return false; }
    f.skillCd = K.cd; f.st.skills = (f.st.skills || 0) + 1;
    const B = f.body, isMe = f === this.me, c = f.updateCenter().clone();
    const play = fn => isMe ? fn() : this.spatial(c, fn);
    if (f.skill === 'reflect') { f.reflectT = K.dur; play(() => this.audio.shieldClang()); this.rings.add(c, f.color, 2.4, 0.3, null); }
    else if (f.skill === 'overdrive') { f.overT = K.dur; B.speedMul = 1.35; B.dashCharges = B.dashMax; play(() => this.audio.boost()); this.rings.add(new THREE.Vector3(B.pos.x, B.pos.y + 0.06, B.pos.z), f.color, 3, 0.4); }
    else if (f.skill === 'gravity') { this.throwGrenade(f); play(() => this.audio.discThrow(0.6)); }
    else if (f.skill === 'heal') {
      f.hp = Math.min(100, f.hp + 35); f.healT = K.dur; play(() => this.audio.checkpoint(false));
      this.parts.emit(c, 20, { color: [[0.25, 0.85, 0.45], [1, 1, 1]], speed: 4, life: 0.6, gravity: -3 });
    }
    if (isMe) { this.train('skill'); this.hand.blinkAnim(); if (f.skill === 'overdrive') this.camState.kick = Math.max(this.camState.kick, 1); }
    this.noise(f, c, 25);
    if (this.online) { this.netFx({ k: 'skill', id: f.netId, s: f.skill }); if (f.skill === 'heal') this.net.send({ t: 'heal', id: f.netId }); }
    return true;
  }
  tickSkills(dt) {
    for (const f of this.fighters) {
      f.skillCd = Math.max(0, f.skillCd - dt); f.blinkCd = Math.max(0, (f.blinkCd || 0) - dt);
      if (f.reflectT > 0) f.reflectT -= dt;
      if (f.overT > 0) { f.overT -= dt; if (f.alive) f.body.dashCharges = f.body.dashMax; if (f.overT <= 0) f.body.speedMul = 1; }
      if (f.healT > 0) { f.healT -= dt; if (f.alive) f.hp = Math.min(100, f.hp + 12 * dt); }
    }
    this.tickGrenades(dt); this.tickWells(dt);
  }
  throwGrenade(f, dir = null, pos = null, vel = null) {
    const B = f.body;
    if (!pos) {
      dir = dir || B.lookDir(new THREE.Vector3());
      pos = new THREE.Vector3().copy(B.eye); pos.y -= 0.2; pos.addScaledVector(dir, 0.5);
      vel = dir.clone().multiplyScalar(24).add(new THREE.Vector3(0, 4, 0)).addScaledVector(B.vel, 0.4);
      if (this.online) this.netFx({ k: 'nade', id: f.netId, p: [pos.x, pos.y, pos.z], v: [vel.x, vel.y, vel.z] });
    }
    const m = new THREE.Mesh(this.nadeGeo, new THREE.MeshStandardMaterial({ color: 0x16161a, emissive: new THREE.Color(f.color).multiplyScalar(0.6) }));
    m.position.copy(pos); m.castShadow = true; this.scene.add(m);
    this.grenades.push({ f, pos, vel, t: 0, m });
  }
  tickGrenades(dt) {
    const col = this.arena.col;
    for (let i = this.grenades.length - 1; i >= 0; i--) {
      const g = this.grenades[i]; g.t += dt;
      g.vel.y -= 22 * dt;
      const sp = g.vel.length(), step = sp * dt;
      const h = sp > 0 ? col.raycast(g.pos.x, g.pos.y, g.pos.z, g.vel.x / sp, g.vel.y / sp, g.vel.z / sp, step + 0.25, _hit) : null;
      let boom = !!(h && h.t < step + 0.25);
      if (boom) g.pos.set(h.x + h.nx * 0.3, h.y + h.ny * 0.3, h.z + h.nz * 0.3); else g.pos.addScaledVector(g.vel, dt);
      if (g.pos.y < 0.2) { g.pos.y = 0.2; boom = true; }
      for (const o of this.fighters) if (o !== g.f && o.alive && o.updateCenter().distanceTo(g.pos) < 1.3) boom = true;
      for (const e of this.foes) if (e.alive && e.center.distanceTo(g.pos) < e.hitRadius + 0.4) boom = true;
      if (g.t > 1.6) boom = true;
      g.m.position.copy(g.pos);
      if (boom) { this.scene.remove(g.m); this.grenades.splice(i, 1); this.makeWell(g.f, g.pos.clone()); }
    }
  }
  makeWell(f, pos) {
    const K = SKILLS.gravity;
    const m = new THREE.Mesh(this.wellGeo, new THREE.MeshBasicMaterial({ color: 0x16161a, transparent: true, opacity: 0.18, depthWrite: false }));
    m.position.copy(pos); this.scene.add(m);
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.9, 1, 48), new THREE.MeshBasicMaterial({ color: f.color, transparent: true, opacity: 0.7, side: THREE.DoubleSide, depthWrite: false }));
    ring.rotation.x = -Math.PI / 2; ring.position.set(pos.x, Math.max(0.06, pos.y - 0.9), pos.z); ring.scale.setScalar(7.5); this.scene.add(ring);
    this.wells.push({ f, pos, t: 0, dur: K.dur, r: 7.5, m, ring });
    this.spatial(pos, () => this.audio.slam());
    this.parts.emit(pos, 24, { color: [[0.08, 0.08, 0.1], [0.5, 0.5, 0.55]], speed: 6, life: 0.5, gravity: 0 });
    this.noise(f, pos, 35);
  }
  tickWells(dt) {
    for (let i = this.wells.length - 1; i >= 0; i--) {
      const w = this.wells[i]; w.t += dt;
      const k = w.t / w.dur;
      w.m.scale.setScalar(w.r * (0.25 + 0.15 * Math.sin(w.t * 18)) * (1 - k * 0.5));
      w.m.material.opacity = 0.22 * (1 - k);
      w.ring.scale.setScalar(w.r * (1 - k * 0.6)); w.ring.material.opacity = 0.7 * (1 - k);
      const pull = (B, cx, cy, cz) => {
        const dx = w.pos.x - cx, dy = w.pos.y - cy, dz = w.pos.z - cz, d = Math.hypot(dx, dy, dz);
        if (d > w.r || d < 0.3) return false;
        const a = 52 * (1 - d / w.r * 0.5) * dt;
        B.vel.x += dx / d * a; B.vel.z += dz / d * a; B.vel.y += (dy / d * a) * 0.5 + 9 * dt;
        return true;
      };
      for (const o of this.fighters) {
        if (o === w.f || !o.alive || o.reflectT > 0) continue;
        const B = o.body;
        if (pull(B, B.pos.x, B.pos.y + 1, B.pos.z)) { B.grounded = false; if (o === this.me && Math.random() < dt * 4) this.shake(0.05); }
      }
      for (const e of this.foes) if (e.alive) pull(e, e.center.x, e.center.y, e.center.z);
      if (w.t >= w.dur) { this.scene.remove(w.m); this.scene.remove(w.ring); this.wells.splice(i, 1); }
    }
  }
  // sounds you make tell nearby bots where you are
  noise(f, pos, radius) {
    for (const o of this.fighters) if (o.brain && o !== f && o.alive && o.body.pos.distanceTo(pos) < radius * o.brain.S.hear) o.brain.hear(f, pos);
  }
  // little chat line from a bot: bubble over the head + the chat box
  chat(f, kind, p = 0.3) {
    if (!f.brain || !CHAT[kind] || Math.random() > p * f.brain.p.chatty) return;
    if (this.gameTime - (f.lastChat || -9) < 2.5) return;
    f.lastChat = this.gameTime;
    const text = pick(CHAT[kind]);
    this.sayLine(f, text);
    if (this.online && !f.remote) this.netFx({ k: 'say', id: f.netId, text });
  }
  sayLine(f, text) {
    f.say(text);
    const box = this.el('chat'); if (box === DUMMY_EL) return;
    const row = document.createElement('div');
    const n = document.createElement('b'); n.textContent = f.name; n.style.color = f.css;
    const tx = document.createElement('span'); tx.textContent = text;
    row.append(n, tx); box.append(row);
    this.chatLines.push({ el: row, t: 0 });
    while (this.chatLines.length > 4) this.chatLines.shift().el.remove();
  }

  // ======================= VERSUS: 1V1 / FFA against bots =======================
  setupVersus() {
    const duel = this.mode === 'duel';
    const opp = this.ranked ? opponentFor(rankState(this.records).r) : null;
    const skill = opp ? opp.skill : SKILL[this.S.botSkill] ? this.S.botSkill : 'max';
    this.botSkill = skill; this.oppLabel = opp ? opp.label : null; this.matchPoint = false;
    const roster = BOT_ROSTER.slice().sort(() => Math.random() - 0.5);
    for (let i = 0; i < (duel ? 1 : 5); i++) {
      const r = roster[i];
      const per = PERSONAS[(Math.random() * PERSONAS.length) | 0];
      const f = new Fighter(this, { name: r.name, color: r.color, isBot: true, weapon: per.weapons[(Math.random() * per.weapons.length) | 0], skill: per.skills[(Math.random() * per.skills.length) | 0] });
      f.brain = skill === 'ai' ? makeBrain(this, f, per, opp ? opp.motor : 'max') : new BotBrain(this, f, skill, per);
      this.fighters.push(f);
    }
    setTimeout(() => { for (const f of this.fighters) if (f.brain && this.versus) this.chat(f, 'start', 0.55); }, 900);
    for (const f of this.fighters) f.alive = false;
    for (const f of this.fighters) this.respawn(f, true);
    this.match = { limit: duel ? 5 : 15, timeLeft: duel ? 0 : 240, over: false };
    const bot = this.fighters[1];
    if (this.ranked) { const rs = rankState(this.records), t = tierOf(rs.r); this.banner('랭크전', `${t.name} ${rs.r} RP · 상대 ${bot.name} (${opp.label}) · 5킬 먼저`, 2.8); }
    else if (duel) this.banner('1 V 1', `${this.mapName} · ${bot.name} · 봇 실력 ${SKILL[skill].name} · 5킬 먼저`, 2.6);
    else this.banner('FFA', `${this.mapName} · 봇 5명 · ${SKILL[skill].name} · 15킬 먼저 (4분)`, 2.6);
    this._boardHtml = '';
    // compile the bots' materials now, not on the first frame they appear
    if (!this.trainLock) try { this.renderer.compile(this.scene, this.camera); } catch { }
  }
  spawnPoints() {
    if (!this._spawns) { const A = this.arena; this._spawns = [...A.spawnGround, ...A.spawnHigh]; }
    return this._spawns;
  }
  // swap the map (keeps everyone; callers respawn them)
  loadMap(id) {
    if (this.arena.mapId === id && this.arena.map) return false;
    this.arena.load(id);
    this._spawns = null;
    for (const f of this.fighters) { if (f.disc.state !== 'hand' && !f.remote) f.disc.caught(); f.disc.trail.reset(); }
    for (const s of this.shards || []) this.scene.remove(s.m);
    this.shards = [];
    this.captureEnv();
    if (!this.trainLock) try { this.renderer.compile(this.scene, this.camera); } catch { }
    return true;
  }
  // reflections of the REAL arena: render the stadium into a cube map once per map and use it as the
  // scene environment, so the glossy floor, chrome and armour reflect the actual sky, stands and light strips.
  // A one-time cost on map load — nothing per frame.
  captureEnv() {
    if (this.trainLock || !this.Q.shadows) return; // low quality keeps the cheap studio light
    try {
      const r = this.renderer, sc = this.scene, size = this.Q.shadowSize >= 4096 ? 256 : 128;
      if (!this._cubeRT) { this._cubeRT = new THREE.WebGLCubeRenderTarget(size, { type: THREE.HalfFloatType }); this._cubeCam = new THREE.CubeCamera(0.5, 500, this._cubeRT); sc.add(this._cubeCam); }
      const hidden = [];
      for (const f of this.fighters || []) if (f.model && f.model.visible) { f.model.visible = false; hidden.push(f.model); }
      // from head height at a free spawn spot: sees floor, walls and stands as well as sky (a neutral, believable mix)
      const sp = (this.arena.spawnGround && this.arena.spawnGround[0]) || new THREE.Vector3(0, 0, 20);
      this._cubeCam.position.set(sp.x * 0.6, sp.y + 2.2, sp.z * 0.6);
      const env = sc.environment; sc.environment = this.envMap;
      this._cubeCam.update(r, sc);
      sc.environment = env;
      for (const m of hidden) m.visible = true;
      if (!this._pm) this._pm = new THREE.PMREMGenerator(r);
      const old = this.arenaEnv;
      this.arenaEnv = this._pm.fromCubemap(this._cubeRT.texture).texture;
      sc.environment = this.arenaEnv; sc.environmentIntensity = 0.5;
      if (old) old.dispose();
    } catch (e) { console.warn('env', e); }
  }
  get mapName() { return (MAPS[this.arena.mapId] || MAPS.arena).name; }
  pickSpawn(f) {
    let best = null, bs = -1;
    for (const p of this.spawnPoints()) {
      let m = 200;
      for (const o of this.fighters) if (o !== f && o.alive) m = Math.min(m, o.body.pos.distanceTo(p));
      const s = m + Math.random() * 8;
      if (s > bs) { bs = s; best = p; }
    }
    return best.clone();
  }
  respawn(f, initial = false) {
    const p = this.pickSpawn(f), B = f.body;
    B.reset(p, Math.atan2(p.x, p.z));
    f.hp = 100; f.alive = true; f.protT = initial ? 0.6 : 1.5; f.invulnT = 0; f.regenT = 0; f.respawnT = 0;
    f.reflectT = f.overT = f.healT = 0; f.blinkCd = 0; B.speedMul = 1;
    if (f.disc.state !== 'hand') f.disc.caught();
    f.disc.catchCd = 0; f.disc.trail.reset();
    if (f.brain) f.brain.reset();
    if (f === this.me) { this.deathInfo = null; this.cls('deathMsg', 'show', false); this.camState.fov = this.S.fov; this.throwBuf = 0; }
    if (!initial) this.rings.add(new THREE.Vector3(p.x, p.y + 0.06, p.z), f.color, 2.6, 0.5);
    if (this.online && !f.remote && f.netId) this.net.send({ t: 'respawn', id: f.netId });
  }
  sweepFighters(d, a, b, dir, leg) {
    const attacker = d.reflectedBy || d.owner;
    for (const t of this.fighters) {
      if (t === attacker || !t.alive || d.hit.has(t)) continue;
      if (t === d.owner && !d.reflectedBy) continue;
      const B = t.body;
      _c1.set(B.pos.x, B.pos.y + 0.4, B.pos.z); _c2.set(B.pos.x, B.pos.y + Math.max(0.6, B.h - 0.4), B.pos.z);
      if (segSeg(a, b, _c1, _c2, _ss).d >= T.radius + d.w.radius + (d.bonus || 0) + (t.reflectT > 0 ? 0.6 : 0)) continue;
      d.hit.add(t);
      // reflect bubble: the disc flies back at whoever threw it and now hurts THEM
      if (t.reflectT > 0 && t !== d.owner) {
        const at = new THREE.Vector3().lerpVectors(a, b, _ss.s);
        const o = d.owner, sp = Math.max(d.vel.length(), d.w.speed) * 1.15;
        const back = o.alive ? _b.subVectors(o.updateCenter(), at).normalize() : _b.copy(d.vel).negate().normalize();
        d.vel.copy(back).multiplyScalar(sp);
        d.state = 'out'; d.t = Math.min(d.t, 0.3); d.hit.clear(); d.hit.add(t); d.reflectedBy = t; d.leg++;
        d.homing = 0; d.bonus = t === this.me ? this.assistCfg().bonus : 0;
        t.st.reflects = (t.st.reflects || 0) + 1;
        this.reflectFx(t, at);
        if (o.brain) this.chat(o, 'reflected', 0.45);
        return at.addScaledVector(back, 0.05);
      }
      if (t.invuln) {
        t.st.dodges++;
        if (t === this.me) this.popup('회피!');
        else if (attacker === this.me) this.popupWorld(t.updateCenter(), '회피');
        continue;
      }
      const w = d.w;
      const dmg = leg === 'out'
        ? w.dmg * (1 + w.bounceMul * d.bounces) * (0.75 + 0.25 * d.speedMul()) * (d.reflectedBy ? 1.2 : 1)
        : w.returnDmg * (1 + 0.2 * d.bounces);
      const hitAt = new THREE.Vector3().lerpVectors(a, b, _ss.s);
      // headshot: the disc passed through the head (top ~40 cm) → ×1.5 and its own hit sound / marker
      const crit = leg === 'out' && hitAt.y - B.pos.y > B.h - 0.42;
      this._crit = crit;
      this.damageFighter(t, crit ? dmg * 1.5 : dmg, attacker, d.reflectedBy ? 'reflect' : leg === 'out' ? (d.bounces > 0 ? 'bank' : 'direct') : 'return', dir, d.bounces);
      if (w.blast && leg === 'out' && !d.blasted) { d.blasted = true; this.discBlast(d, hitAt); d.recall(); return hitAt; }
    }
    return null;
  }
  reflectFx(t, at, fromNet = false) {
    if (this.online && !fromNet && !t.remote) this.netFx({ k: 'refl', id: t.netId, p: [at.x, at.y, at.z] });
    this.rings.add(at.clone(), t.color, 2.2, 0.3, null);
    this.parts.emit(at, 16, { color: [[1, 1, 1], [0.9, 0.9, 0.95]], speed: 9, life: 0.3, gravity: 0 });
    if (t === this.me) { this.audio.shieldClang(); this.popup('반사!'); this.flashFx = Math.max(this.flashFx, 0.4); }
    else this.spatial(at, () => this.audio.shieldClang());
  }
  damageFighter(t, dmg, by, kind, dir, bounces = 0) {
    if (this.online) return this.netHit(t, dmg, by, kind, dir, bounces);
    if (!t.alive || t.invuln) return null;
    dmg = Math.round(dmg);
    t.hp -= dmg; t.regenT = 5; t.lastHitBy = by; t.lastHitT = this.gameTime;
    const kn = by ? by.disc.w.knock : 5;
    const B = t.body, push = kind === 'slam' ? 8 + kn * 0.3 : kind === 'blast' ? 16 : kn;
    B.vel.x += dir.x * push; B.vel.z += dir.z * push; B.vel.y = Math.max(B.vel.y, kind === 'slam' ? 5 : kind === 'blast' ? 7 : 2.5); B.grounded = false;
    const c = t.updateCenter().clone(), col = new THREE.Color(t.color);
    this.parts.emit(c, 14, { color: [[0.1, 0.1, 0.12], [col.r, col.g, col.b]], speed: 8, dir, spread: 0.9, life: 0.4 });
    const killed = t.hp <= 0;
    if (by) { by.st.hits++; if (kind === 'bank') by.st.bank++; if (kind === 'return') by.st.ret++; }
    if (t.brain) t.brain.onHurt(by, kind);
    if (t === this.me) { this.dmgFx = 1; this.shake(0.22); this.audio.hurt(); if (by) this.hurtDir(by.updateCenter()); }
    const crit = this._crit; this._crit = false;
    if (crit && by) by.st.crits = (by.st.crits || 0) + 1;
    if (by === this.me) {
      this.audio.discHit(bounces + 1 + (crit ? 2 : 0)); this.stats.hits++;
      if (crit) this.audio.crit && this.audio.crit();
      this.dmgNumber(c, crit ? `${dmg}!` : dmg, crit || kind === 'bank' || kind === 'slam');
      this.hitmarker(killed, crit);
      if (crit && !killed) this.popup('헤드샷');
      // hit-stop: the world freezes for a beat so every hit lands with weight
      this.stopT = Math.max(this.stopT, killed ? 0.11 : crit || kind === 'bank' ? 0.065 : 0.04);
      this.shake(killed ? 0.2 : crit ? 0.12 : 0.07);
      this.camState.kick = Math.max(this.camState.kick, crit ? 0.5 : 0.3);
    } else if (t !== this.me) this.spatial(c, () => this.audio.discHit(1));
    if (killed) this.killFighter(t, by, kind, bounces, dir);
    return killed ? 'kill' : 'hit';
  }
  hurtDir(from) {
    _c.copy(from).applyMatrix4(this.camera.matrixWorldInverse);
    this.dirAng = Math.atan2(_c.x, -_c.z); this.dirT = 1;
  }
  killFighter(v, k, kind, n, dir, net = false) {
    v.alive = false; v.hp = 0; v.streak = 0; if (!net) v.deaths++;
    v.reflectT = v.overT = v.healT = 0; v.body.speedMul = 1;
    v.respawnT = this.mode === 'duel' ? 2.2 : 2.8;
    if (v.disc.state !== 'hand') v.disc.caught();
    v.disc.trail.reset();
    const fl = new THREE.Vector3(dir.x, Math.max(0.2, dir.y), dir.z).normalize();
    if (v.isBot) this.debris.push(...v.shatter(fl));
    const c = v.updateCenter().clone(), col = new THREE.Color(v.color);
    this.parts.emit(c, 28, { color: [[0.08, 0.08, 0.1], [col.r, col.g, col.b], [1, 1, 1]], speed: 10, life: 0.6 });
    this.rings.add(new THREE.Vector3(v.body.pos.x, v.body.pos.y + 0.06, v.body.pos.z), v.color, 3, 0.45);
    let tag = kind === 'bank' ? (n >= 2 ? `${n}쿠션 뱅크샷` : '뱅크샷') : kind === 'return' ? '회수 타격' : kind === 'slam' ? '순간이동 충격' : kind === 'blast' ? '충격탄' : kind === 'saw' ? '톱날 덫' : kind === 'shard' ? '파편' : '';
    if (k && !k.body.grounded && k.body.airTime > 0.3) tag = tag ? tag + ' · 공중' : '공중';
    const counts = !this.match.over && !net;
    if (k && k !== v && counts) {
      k.kills++; k.streak++;
      k.hp = Math.min(100, k.hp + 25);
      k.body.dashCharges = Math.min(k.body.dashMax, k.body.dashCharges + 1);
    }
    this.feedKill(k, v, tag);
    if (k && k !== v && (k.killfx || 'cubes') !== 'cubes') this.killEffect(k, v, c, dir);
    if (k && k.brain && k !== v && !k.remote && Math.random() < 0.18 && k.body.grounded) { const E = ['wave', 'taunt', 'flex', 'cheer', 'clap']; k.playEmote(E[(Math.random() * E.length) | 0]); }
    if (k && k.brain && k !== v) { k.brain.onKill(v); this.chat(k, k.streak === 3 ? 'streak' : kind === 'bank' ? 'bank' : kind === 'slam' ? 'slam' : 'kill', v === this.me ? 0.4 : 0.22); }
    if (v.brain) { v.brain.onDeath(k); this.chat(v, 'death', k === this.me ? 0.35 : 0.15); }
    if (k === this.me) {
      // multi-kills inside 4 s get their own call-out; every kill gets a short slow-motion beat
      const now = this.gameTime; this.multi = now - (this.multiT || -9) < 4 ? (this.multi || 1) + 1 : 1; this.multiT = now;
      const MULTI = ['', '', '더블 킬', '트리플 킬', '쿼드라 킬', '펜타 킬'];
      const call = this.multi >= 2 ? MULTI[Math.min(5, this.multi)] || `${this.multi}연속 킬` : null;
      this.popup(call || (k.streak >= 3 ? `${k.streak}연속 처치!` : (tag || '처치!')));
      this.killCard(v, call || tag);
      this.slowT = Math.max(this.slowT, this.multi >= 2 ? 0.45 : 0.22); this.flashFx = 1;
      this.audio.kill(Math.min(k.streak + this.multi, 10)); this.shake(0.12); this.kills++;
      if (kind === 'bank') this.stats.banks++;
    } else this.spatial(c, () => this.audio.kill(1));
    if (v === this.me) { this.deathInfo = { by: k, pos: this.player.pos.clone(), t: 0 }; this.throwBuf = 0; }
    if (counts && k && k.kills >= this.match.limit) this.endMatch();
    else if (counts && k && this.mode === 'duel' && !this.matchPoint && k.kills === this.match.limit - 1) {
      this.matchPoint = true; this.banner('매치 포인트', k === this.me ? '한 킬만 더!' : `${k.name}이(가) 한 킬 남았어요`, 1.8);
    }
    if (net && v === this.me) this.audio.hurt();
  }
  feedText(text) {
    const box = this.el('feed'); if (box === DUMMY_EL) return;
    const row = document.createElement('div'); row.className = 'kf sys'; row.textContent = text;
    box.prepend(row); while (box.children.length > 6) box.lastChild.remove();
    setTimeout(() => row.classList.add('out'), 3800); setTimeout(() => row.remove(), 4300);
  }
  feedKill(k, v, tag) {
    const box = this.el('feed'); if (box === DUMMY_EL) return;
    const row = document.createElement('div'); row.className = 'kf';
    const nm = f => { const e = document.createElement('span'); e.textContent = f ? f.name : '?'; if (f) e.style.color = f.css; return e; };
    const arrow = document.createElement('em'); arrow.textContent = '→';
    row.append(nm(k), arrow, nm(v));
    if (tag) { const t = document.createElement('small'); t.textContent = tag; row.append(t); }
    if (k === this.me || v === this.me) row.classList.add('mine');
    box.prepend(row);
    while (box.children.length > 6) box.lastChild.remove();
    setTimeout(() => row.classList.add('out'), 3800);
    setTimeout(() => row.remove(), 4300);
  }
  ranking() {
    const me = this.me;
    return [...this.fighters].sort((a, b) => b.kills - a.kills || a.deaths - b.deaths || (a === me ? -1 : b === me ? 1 : 0));
  }
  tickMatch(dt) {
    const M = this.match;
    if (this.deathInfo) this.deathInfo.t += dt;
    if (M.over) return;
    if (M.timeLeft > 0) { M.timeLeft -= dt; if (M.timeLeft <= 0) { M.timeLeft = 0; if (!this.online) this.endMatch(); } }
  }
  endMatch() {
    if (this.online) return; // the server decides
    const M = this.match; if (M.over) return; M.over = true;
    this.slowT = Math.max(this.slowT, 1.0);
    const me = this.me, rank = this.ranking(), myRank = rank.indexOf(me) + 1, rec = this.records;
    let title, sub;
    if (this.mode === 'duel') {
      const bot = this.fighters[1];
      title = me.kills > bot.kills ? '승리!' : me.kills === bot.kills ? '무승부' : '패배';
      sub = `${me.kills} : ${bot.kills}`;
      if (me.kills > bot.kills) rec.duelWin = (rec.duelWin || 0) + 1;
      else if (me.kills < bot.kills) rec.duelLose = (rec.duelLose || 0) + 1;
      if (this.ranked) {
        const res = this.rankResult = applyResult(rankState(rec), me.kills, bot.kills), t = tierOf(res.after);
        sub = `${me.kills} : ${bot.kills} · ${res.delta >= 0 ? '+' : ''}${res.delta} RP`;
        if (res.promoted) { title = `${res.promoted.name} 승급!`; }
        else if (res.demoted) { sub += ` · ${res.demoted.name}(으)로 강등`; }
        this.rankLine = [`랭크`, `${t.name} · ${res.after} RP (${res.delta >= 0 ? '+' : ''}${res.delta})`];
      } else this.rankLine = null;
    } else {
      title = myRank === 1 ? '1위!' : `${myRank}위`;
      sub = `${me.kills}킬 · ${me.deaths}데스`;
      if (myRank === 1) rec.ffaWin = (rec.ffaWin || 0) + 1;
      rec.ffaBest = Math.min(rec.ffaBest || 99, myRank);
    }
    rec.speed = Math.max(rec.speed || 0, this.maxSpeed);
    // coins: practice vs bots pays a little (ranked and online pay more)
    const coins = this.award(20 + me.kills * 6 + (myRank === 1 ? 30 : 0), '봇 연습');
    this.saveRecords && this.saveRecords();
    this.banner(title, sub, 1.8);
    if (myRank === 1) this.audio.checkpoint(true); else this.audio.wave();
    for (const f of this.fighters) if (f.brain) this.chat(f, rank[0] === f ? 'win' : 'lose', 0.6);
    if (rank[0] && rank[0].brain && rank[0].body.grounded) rank[0].playEmote(Math.random() < 0.5 ? 'disco' : 'groove');
    const stats = rank.map((f, i) => [`${i + 1}. ${f.name}`, `${f.kills} 킬 · ${f.deaths} 데스`]);
    if (this.ranked && this.rankLine) { const rs = rankState(rec); stats.unshift(this.rankLine); stats.push(['연승', rs.streak > 0 ? `${rs.streak}연승` : rs.streak < 0 ? `${-rs.streak}연패` : '—'], ['헤드샷', `${me.st.crits || 0}번`]); }
    else stats.push(['봇 실력', SKILL[this.botSkill].name], ['헤드샷', `${me.st.crits || 0}번`]);
    stats.push(...this.aimStats(), ['최고 속도', Math.round(this.maxSpeed * 3.6) + ' KM/H'], ['코인', `+${coins}`]);
    this.result = { title, stats, rank: myRank };
    setTimeout(() => {
      if (this.state !== 'play' || this.match !== M) return;
      this.state = 'dead'; this.input.unlock();
      this.onEnd && this.onEnd(title, stats);
    }, 1700);
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
  killCard(v, tag) {
    const e = this.el('killCard'); if (e === DUMMY_EL) return;
    this.el('kcName').textContent = v.name; this.el('kcName').style.color = v.css || '#fff';
    this.el('kcTag').textContent = tag || '처치';
    e.classList.remove('show'); void e.offsetWidth; e.classList.add('show');
  }
  hitmarker(kill, crit = false) {
    const h = this.el('hit'); h.classList.toggle('kill', !!kill); h.classList.toggle('crit', !!crit && !kill);
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
    const deathCam = this.versus && !this.me.alive && this.deathInfo && this.state === 'play';
    if (deathCam) {
      // killed: rise over your body and watch whoever did it
      const di = this.deathInfo, k = di.by, look = k && k.alive ? k.body.pos : di.pos;
      const u = Math.min(1, di.t);
      _a.subVectors(di.pos, look).setY(0); if (_a.lengthSq() < 1e-3) _a.set(0, 0, 1); _a.normalize();
      _d.set(di.pos.x, di.pos.y + 3 + u * 3, di.pos.z).addScaledVector(_a, 3 + u * 4);
      this.camera.position.lerp(_d, Math.min(1, rawDt * 5));
      this.camera.lookAt(look.x, look.y + 1, look.z);
      this.camera.fov = 62; this.camera.updateProjectionMatrix();
    } else if (inGame && this.me.emote && this.me.alive) {
      // emoting: swing out in front of yourself so you can see it
      const B = this.me.body, a = B.yaw + 0.4 + Math.sin(this.clockT * 0.4) * 0.3;   // in front of you, slowly drifting
      _d.set(B.pos.x - Math.sin(a) * 3.6, B.pos.y + 1.45, B.pos.z - Math.cos(a) * 3.6);
      if (this.camera.position.distanceTo(_d) > 6) this.camera.position.copy(_d); else this.camera.position.lerp(_d, Math.min(1, rawDt * 6));
      this.camera.lookAt(B.pos.x, B.pos.y + 1.05, B.pos.z);
      this.camera.fov = 58; this.camera.updateProjectionMatrix();
    } else if (!inGame) {
      // menu: slow orbit over the arena
      const a = this.clockT * 0.06;
      this.camera.position.set(Math.sin(a) * 42, 15 + Math.sin(this.clockT * 0.2) * 3, Math.cos(a) * 42);
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
    const alphaR = this.state === 'play' ? THREE.MathUtils.clamp(this.acc / TICK, 0, 1) : 1;
    for (const f of this.fighters) {
      f.disc.render(fxDt);
      f.disc.trail.update(f.disc.pos, this.camera.position, f.disc.out && this.state !== 'menu');
      f.renderModel(rawDt, alphaR, this.clockT);
    }
    this.renderShards();
    this.parts.update(fxDt);
    this.rings.update(fxDt);
    this.arena.update(this.clockT, fxDt);
    if (this.sky.material.uniforms.uTime) this.sky.material.uniforms.uTime.value = this.clockT;
    for (const o of this.orbs) o.halo.scale.setScalar(1.7 + Math.sin(o.t * 18) * 0.25);
    this.updateLasers();
    this.updateBlinkGhost();
    this.lines.update(this.camera.position, P.vel, this.state === 'play' && this.me.alive ? Math.max(this.me.overT > 0 ? 0.6 : 0, THREE.MathUtils.clamp((P.speed - 17) / 20, 0, 1)) : 0);

    this.hand.update(this.state === 'play' ? rawDt * Math.max(this.timeScale, 0.4) : rawDt, {
      mx: this.mouseDX || 0, my: this.mouseDY || 0, hs: P.hSpeed, vy: P.vel.y, grounded: P.grounded, discOut: this.disc.out,
    });
    const intensity = this.state !== 'play' ? 0.2 : this.versus ? 0.65 : this.mode === 'arena' ? Math.min(1, 0.25 + this.foes.length * 0.07 + Math.min(this.combo, 10) * 0.04) : 0.2;
    this.audio.update(this.state === 'play' ? P.speed : 0, false, rawDt, intensity);

    if (inGame) this.updateHud(rawDt);
    this.cls('hud', 'emoting', !!(this.me.emote && inGame));

    const r = this.renderer, hands = (this.state === 'play' || this.state === 'paused') && this.me.alive && !this.me.emote;
    this.sky.position.copy(this.camera.position);
    if (this.post) {
      const sp = this.state === 'play' && this.me.alive ? THREE.MathUtils.clamp((P.speed - 20) / 26, 0, 1) * (this.S.fovFx > 0 ? 1 : 0.5) : 0;
      this.post.render(rawDt, { hands, speed: sp, hurt: Math.min(1, this.dmgFx || 0) * 0.6, vignette: inGame ? 0.3 : 0.18 });
    } else {
      r.clear();
      r.render(this.scene, this.camera);
      if (hands) { r.clearDepth(); r.render(this.hand.scene, this.hand.camera); }
    }
    this.adaptRes(rawDt);
  }
  // keep the frame rate up: lower the render scale when frames run long, creep back up when there is headroom
  adaptRes(dt) {
    if (!this.S.adaptive || this.state !== 'play' || document.hidden) return;
    const pf = this.perf; pf.t += dt; pf.n++;
    if (pf.t < 1) return;
    const avg = pf.t / pf.n; pf.t = 0; pf.n = 0;
    const min = Math.min(this.prMax, 0.5);
    let pr = this.pr;
    if (avg > 1 / 48 && pr > min) { pr = Math.max(min, pr * 0.85); pf.good = 0; }
    else if (avg < 1 / 57) { if (++pf.good >= 3 && pr < this.prMax) { pr = Math.min(this.prMax, pr * 1.1); pf.good = 0; } }
    else pf.good = 0;
    if (Math.abs(pr - this.pr) > 0.01) { this.pr = pr; this.resize(); }
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
    this.css('hpFill', 'width', hp + '%'); this.css('hpGhost', 'width', hp + '%');
    this.txt('hpNum', String(hp));
    this.cls('hpBar', 'low', hp < 35);
    if (this.versus) this.updateVersusHud(dt);
    else {
      this.txt('scoreTxt', this.score.toLocaleString());
      const mult = 1 + Math.min(4, Math.max(0, this.combo - 1) * 0.25);
      this.txt('comboTxt', this.combo >= 2 ? `${this.combo} 콤보 · ×${mult.toFixed(2)}` : '');
    }
    this.txt('speedNum', String(Math.round(P.hSpeed * 3.6)));
    // dash pips
    const pips = this.el('dashPips').children;
    if (this._pipsN !== P.dashCharges) { this._pipsN = P.dashCharges; for (let i = 0; i < pips.length; i++) pips[i].classList.toggle('on', i < P.dashCharges); }
    // disc state
    const st = d.state;
    this.cls('discIcon', 'hand', st === 'hand'); this.cls('discIcon', 'out', st === 'out'); this.cls('discIcon', 'ret', st === 'return');
    const kn = a => keyName(this.S.binds[a] && this.S.binds[a][0]);
    const power = d.out ? Math.round((1 + 0.35 * d.bounces) * 100) : 100;
    const bcd = this.me.blinkCd || 0, bl = bcd > 0 ? `순간이동 ${bcd.toFixed(1)}s` : `${kn('blink')} 순간이동`;
    this.txt('discTxt', st === 'hand' ? `${kn('throw')} 던지기` : st === 'out' ? `${kn('throw')} 회수 · ${bl}` : `돌아오는 중 · ${bl}`);
    { const v = (1 - bcd / BLINK_CD).toFixed(2); if (this._bp !== v) { this._bp = v; this.el('blinkRing').style.setProperty('--p', v); } }
    this.cls('blinkRing', 'cool', bcd > 0); this.cls('blinkRing', 'deny', (this.blinkDeny = Math.max(0, (this.blinkDeny || 0) - dt)) > 0);
    this.txt('discPow', d.out && d.bounces > 0 ? `튕김 ${d.bounces} · 피해 ${power}%` : '');
    this.cls('cross', 'out', d.out); this.cls('cross', 'hidden', !this.me.alive);
    // skill
    const me = this.me, K = SKILLS[me.skill];
    if (K) {
      this.txt('skillKey', keyName(this.S.binds.skill && this.S.binds.skill[0]));
      this.txt('skillName', K.name);
      this.txt('skillCd', me.skillCd > 0 ? me.skillCd.toFixed(1) + 's' : '준비');
      this.css('skillFill', 'width', ((1 - me.skillCd / K.cd) * 100).toFixed(1) + '%');
      this.cls('skillBox', 'ready', me.skillCd <= 0);
      this.cls('skillBox', 'active', me.reflectT > 0 || me.overT > 0 || me.healT > 0);
    }
    this.cls('hud', 'over', me.overT > 0); this.cls('hud', 'refl', me.reflectT > 0);
    if (this.touchUI) this.touchUI.update(this);
    for (let i = this.chatLines.length - 1; i >= 0; i--) { const c = this.chatLines[i]; c.t += dt; if (c.t > 6) { c.el.remove(); this.chatLines.splice(i, 1); } else if (c.t > 5) c.el.style.opacity = String(6 - c.t); }
    // lock-on marker: who your next throw will track
    let lock = null;
    if (this.me.alive && this.state === 'play' && d.state === 'hand') {
      const org = (this._lockO || (this._lockO = new THREE.Vector3())).copy(P.eye); org.y -= 0.15;
      lock = this.aimAssist(org, P.lookDir(this._lockD || (this._lockD = new THREE.Vector3())), false);
    } else if (d.out && d.lock && (d.lock.alive) && !d.hit.has(d.lock)) lock = d.lock;
    // 가이드: a hollow diamond where to aim; it fills (and the ring turns red) when this throw would land
    const Ac = this.assistCfg();
    if (Ac.guide && this.me.alive && this.state === 'play' && d.state === 'hand') {
      const org = (this._lockO || (this._lockO = new THREE.Vector3())).copy(P.eye); org.y -= 0.15;
      const g = this.aimGuide(org, P.lookDir(this._lockD || (this._lockD = new THREE.Vector3())));
      if (g.t) {
        _a.copy(g.p).project(this.camera);
        this.css('lead', 'transform', `translate(${((_a.x + 1) / 2 * W).toFixed(1)}px,${((1 - _a.y) / 2 * H).toFixed(1)}px)`);
        this.cls('lead', 'show', true); this.cls('lead', 'on', g.on); this.cls('cross', 'lock', g.on); this.cls('cross', 'head', g.head);
      } else { this.cls('lead', 'show', false); this.cls('cross', 'lock', false); this.cls('cross', 'head', false); }
    } else this.cls('lead', 'show', false);
    if (lock) {
      _a.copy(this.tInfo(lock).c).project(this.camera);
      this.css('lock', 'transform', `translate(${((_a.x + 1) / 2 * W).toFixed(1)}px,${((1 - _a.y) / 2 * H).toFixed(1)}px)`);
      this.cls('lock', 'show', true); this.cls('cross', 'lock', d.state === 'hand');
    } else { this.cls('lock', 'show', false); if (!Ac.guide) this.cls('cross', 'lock', false); }
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
      // your disc is next to an enemy: tell the player to blink NOW (shockwave)
      let cue = false;
      for (const t of this.assistTargets()) { if (this.tInfo(t).c.distanceTo(d.pos) < d.w.blinkRadius + 0.3 && !(t.protT > 0)) { cue = true; break; } }
      this.cls('discMark', 'cue', cue);
      if (cue) this.txt('slamCue', `${keyName(this.S.binds.blink[0])}!`);
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
    this.css('lowhp', 'opacity', (this.mode !== 'practice' && this.me.alive ? Math.max(0, 0.4 - this.hp / 100) / 0.4 : 0).toFixed(2));
    this.css('dmgDir', 'opacity', this.dirT.toFixed(2));
    if (this.dirT > 0) this.css('dmgDir', 'transform', `rotate(${(this.dirAng || 0).toFixed(3)}rad)`);
    // mode / wave text
    if (this.versus) { /* handled in updateVersusHud */ }
    else if (this.mode === 'arena') {
      this.txt('modeTxt', this.wave ? `WAVE ${this.wave}` : 'WAVE —');
      this.txt('subTxt', this.waveState === 'break' ? `다음 웨이브 ${Math.max(0, Math.ceil(this.breakT))}초` : `남은 적 ${this.queue.length + this.foes.length}`);
    } else {
      this.txt('modeTxt', '연습장'); this.txt('subTxt', `난이도 무관 · 체력 무한 · ${this.input.touch ? 'II' : 'ESC'} 메뉴`);
    }
    // timers for transient ui
    if (this.bannerT > 0) { this.bannerT -= dt; if (this.bannerT <= 0) this.el('banner').classList.remove('show'); }
    if (this.hintT > 0) { this.hintT -= dt; if (this.hintT <= 0) this.cls('hint', 'show', false); }
  }

  updateVersusHud(dt) {
    const me = this.me, M = this.match, skill = SKILL[this.botSkill] ? SKILL[this.botSkill].name : '';
    if (this.online && this.rankedOnline) {
      const op = this.fighters.find(f => f !== me && !f.netBot), R = this.rankedOnline, t = Math.max(0, Math.ceil(M.timeLeft || 0));
      this.txt('modeTxt', '랭크전');
      this.txt('subTxt', `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')} · vs ${op ? op.name : '…'}${R.op ? ` (${R.op.tier} ${R.op.r})` : ''} · ${M.limit}킬 먼저 · ${Math.round(this.net.rtt)}ms`);
      this.txt('scoreTxt', `${me.kills} : ${op ? op.kills : 0}`);
      this.txt('comboTxt', '');
    } else if (this.online) {
      const t = Math.max(0, Math.ceil(M.timeLeft || 0)), people = this.fighters.filter(f => !f.netBot).length;
      this.txt('modeTxt', `온라인 · ${this.roomCode || ''}`);
      this.txt('subTxt', `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')} · ${M.limit}킬 먼저 · ${people}명${this.fighters.length - people ? ` + 봇 ${this.fighters.length - people}` : ''} · ${Math.round(this.net.rtt)}ms${this.net.status === 'reconnecting' ? ' · 재연결 중…' : ''}`);
      this.txt('scoreTxt', `${me.kills} 킬`);
      this.txt('comboTxt', `현재 ${this.ranking().indexOf(me) + 1}위`);
    } else if (this.mode === 'duel') {
      const bot = this.fighters[1];
      if (this.ranked) { const rs = rankState(this.records); this.txt('modeTxt', '랭크전'); this.txt('subTxt', `${tierOf(rs.r).name} ${rs.r} RP · ${M.limit}킬 먼저 · ${bot ? bot.name : ''} (${this.oppLabel})`); }
      else { this.txt('modeTxt', '1V1'); this.txt('subTxt', `${M.limit}킬 먼저 · ${bot ? bot.name : ''} (${skill})`); }
      this.txt('scoreTxt', `${me.kills} : ${bot ? bot.kills : 0}`);
      this.txt('comboTxt', me.streak >= 2 ? `${me.streak}연속 처치` : '');
    } else {
      const t = Math.max(0, Math.ceil(M.timeLeft));
      this.txt('modeTxt', 'FFA');
      this.txt('subTxt', `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')} · ${M.limit}킬 먼저 · 봇 ${skill}`);
      this.txt('scoreTxt', `${me.kills} 킬`);
      this.txt('comboTxt', `현재 ${this.ranking().indexOf(me) + 1}위`);
    }
    this._boardT -= dt;
    if (this._boardT <= 0) {
      this._boardT = 0.2;
      const html = this.ranking().map(f => `<div class="${f === me ? 'me' : ''}${f.alive ? '' : ' dead'}"><i style="background:${f.css}"></i><span>${f.name}</span><b>${f.kills}</b><small>${f.deaths}</small></div>`).join('');
      if (html !== this._boardHtml) { this._boardHtml = html; this.el('board').innerHTML = html; }
    }
    const dead = !me.alive && !M.over;
    this.cls('deathMsg', 'show', dead);
    if (dead) {
      const k = this.deathInfo && this.deathInfo.by;
      this.txt('deathBy', k ? `${k.name}에게 당함` : '쓰러짐');
      this.css('deathBy', 'color', k ? k.css : '');
      this.txt('deathT', `부활까지 ${Math.max(0, me.respawnT).toFixed(1)}초`);
    }
  }

  updateThreats() {
    const box = this.el('threats'); if (box === DUMMY_EL) return;
    if (!this._thr) { this._thr = []; for (let i = 0; i < 6; i++) { const e = document.createElement('i'); box.appendChild(e); this._thr.push(e); } }
    let k = 0;
    // enemy discs about to hit you (dash through them!)
    if (this.versus && this.me.alive) {
      const B = this.player, cx = B.pos.x, cy = B.pos.y + 0.9, cz = B.pos.z;
      for (const f of this.fighters) {
        if (f === this.me || k >= this._thr.length) continue;
        const d = f.disc; if (d.state === 'hand' || d.hit.has(this.me)) continue;
        const rx = d.pos.x - cx, ry = d.pos.y - cy, rz = d.pos.z - cz;
        const vx = d.vel.x - B.vel.x, vy = d.vel.y - B.vel.y, vz = d.vel.z - B.vel.z;
        const v2 = vx * vx + vy * vy + vz * vz; if (v2 < 1) continue;
        const tca = -(rx * vx + ry * vy + rz * vz) / v2;
        if (tca < 0 || tca > 0.7) continue;
        if (Math.hypot(rx + vx * tca, ry + vy * tca, rz + vz * tca) > 2.4) continue;
        _a.copy(d.pos).applyMatrix4(this.camera.matrixWorldInverse);
        const e = this._thr[k++];
        e.style.transform = `rotate(${Math.atan2(_a.x, -_a.z).toFixed(3)}rad) translateY(-86px) scale(${tca < 0.25 ? 1.5 : 1})`;
        e.style.opacity = '1'; e.className = tca < 0.25 ? '' : 'near';
      }
    }
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

installOnline(Game);
