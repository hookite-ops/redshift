// REDSHIFT 2.0 — game orchestration: fixed-tick simulation, combat, modes, camera rig, rendering
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { GameMap } from './map.js';
import { Atmosphere } from './atmosphere.js';
import { Player, T } from './player.js';
import { Enemy, TYPES } from './enemies.js';
import { ViewModel } from './viewmodel.js';
import { Sparks, Tracers, Bursts, SlashArcs, SpeedStreaks, PostShader } from './effects.js';
import { Audio } from './audio.js';
import { HUD, RANKS, fmtTime } from './hud.js';
import { QUALITY } from './settings.js';
import { SURF } from './physics.js';

export const WEAPONS = {
  revolver: { id: 'revolver', name: 'REVOLVER', mag: 6, rate: 0.23, reload: 1.0, dmg: 34, head: 2.5, pellets: 1, spread: 0.002, airSpread: 0.005, kickAir: 2.5, kickGround: 0, inst: 9 },
  shotgun: { id: 'shotgun', name: 'SCATTER', mag: 2, rate: 0.3, reload: 0.95, dmg: 12, head: 1.5, pellets: 10, spread: 0.07, airSpread: 0.07, kickAir: 15, kickGround: 5, inst: 5 },
};
const TICK = 1 / 120;
// difficulty: how hard the enemies push. 'easy' is the default — the speed fantasy without the punishment
export const DIFF = {
  easy: { name: '쉬움', dmg: 0.55, windup: 1.45, count: 0.7, projSpeed: 0.7, parryWin: 0.32, melee: 1, ranged: 2, guards: false, regen: 24, enemyHp: 0.8, pInst: 0.55, assist: 1 },
  normal: { name: '보통', dmg: 0.85, windup: 1.15, count: 0.9, projSpeed: 0.85, parryWin: 0.25, melee: 2, ranged: 3, guards: false, regen: 17, enemyHp: 1, pInst: 0.85, assist: 0.7 },
  hard: { name: '어려움', dmg: 1.15, windup: 0.95, count: 1.15, projSpeed: 1, parryWin: 0.18, melee: 3, ranged: 5, guards: true, regen: 12, enemyHp: 1.15, pInst: 1, assist: 0.35 },
};
const v1 = new THREE.Vector3(), v2 = new THREE.Vector3(), v3 = new THREE.Vector3();
const _hit = { t: 0, x: 0, y: 0, z: 0, nx: 0, ny: 0, nz: 0, flags: 0, tri: 0 };

export class Game {
  constructor(canvas, S, input) {
    this.canvas = canvas; this.S = S; this.input = input;
    this.Q = QUALITY[S.quality] || QUALITY.high;
    this.state = 'menu'; this.mode = 'arena';
    this.hud = new HUD();
    this.audio = new Audio();
    this.initRenderer();
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(S.fov, innerWidth / innerHeight, 0.05, 2000);
    this.camera.rotation.order = 'YXZ';
    this.scene.add(this.camera);
    this.atmo = new Atmosphere(this.scene, this.Q);
    this.map = new GameMap(this.scene, this.Q);
    this.captureEnvironment();
    this.vm = new ViewModel(S.loadout);
    this.vm.scene.environment = this.scene.environment;
    this.fx = { sparks: new Sparks(this.scene, 5000), tracers: new Tracers(this.scene), bursts: new Bursts(this.scene), arcs: new SlashArcs(this.scene), streaks: new SpeedStreaks(this.scene, 90) };
    this.initComposer();
    this.player = new Player(this.map, this.playerEvents());
    this.enemies = []; this.projectiles = []; this.debris = [];
    this.initHookVisual();
    this.trialRings = [];
    this.resize();
    addEventListener('resize', () => this.resize());
    this.acc = 0; this.last = performance.now(); this.clockT = 0;
    this.fpsAcc = 0; this.fpsN = 0;
    this.camState = { dip: 0, dipV: 0, tilt: 0, fov: S.fov, kick: 0, trauma: 0, bob: 0 };
    this.D = DIFF[S.difficulty] || DIFF.easy;
    this.timeScale = 1; this.slowmoT = 0; this.hitstop = 0; this.lastRight = 0; this.mouseDX = 0; this.mouseDY = 0;
    this.records = { score: 0, wave: 0, speed: 0, trial: 0 };
    this.resetRun();
    this.hud.buildPips('dashPips', T.dashCharges, '#30e0ff');
    this.hud.buildPips('hookPips', T.grappleCharges, '#7dfcff');
    this.hud.buildPips('iaiPips', 1, '#ffc23a');
  }

  // ======================= rendering setup =======================
  initRenderer() {
    const r = this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: false, powerPreference: 'high-performance', stencil: false });
    r.setPixelRatio(Math.min(devicePixelRatio, this.Q.pr));
    r.setSize(innerWidth, innerHeight);
    r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1.08;
    r.shadowMap.enabled = this.Q.shadows; r.shadowMap.type = THREE.PCFSoftShadowMap;
  }
  initComposer() {
    const rt = new THREE.WebGLRenderTarget(innerWidth, innerHeight, { type: THREE.HalfFloatType, samples: this.Q.msaa });
    const c = this.composer = new EffectComposer(this.renderer, rt);
    c.setPixelRatio(this.renderer.getPixelRatio());
    c.addPass(new RenderPass(this.scene, this.camera));
    const vmPass = new RenderPass(this.vm.scene, this.vm.camera); vmPass.clear = false; vmPass.clearDepth = true; c.addPass(vmPass);
    this.bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.65, 0.32, 0.9);
    c.addPass(this.bloom);
    this.post = new ShaderPass(PostShader); c.addPass(this.post);
    c.addPass(new OutputPass());
  }
  captureEnvironment() {
    // render the real city into a cube map once → real neon reflections on metal/wet ground
    const res = this.Q.envRes;
    const crt = new THREE.WebGLCubeRenderTarget(res, { type: THREE.HalfFloatType });
    const cc = new THREE.CubeCamera(1, 1500, crt);
    cc.position.set(0, 10, 30);
    this.scene.add(cc);
    const fog = this.scene.fog; this.scene.fog = null;
    this.atmo.skyMesh.position.copy(cc.position);
    cc.update(this.renderer, this.scene);
    this.scene.fog = fog;
    const pm = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pm.fromCubemap(crt.texture).texture;
    this.scene.environmentIntensity = 0.85;
    this.scene.remove(cc); crt.dispose(); pm.dispose();
  }
  resize() {
    this.renderer.setSize(innerWidth, innerHeight);
    this.composer.setSize(innerWidth, innerHeight);
    this.camera.aspect = innerWidth / innerHeight; this.camera.updateProjectionMatrix();
    this.vm.resize(innerWidth / innerHeight);
    this.post.uniforms.aspect.value = innerWidth / innerHeight;
    this.fx.sparks.mat.uniforms.scale.value = innerHeight * this.renderer.getPixelRatio() * 0.32;
  }
  initHookVisual() {
    const N = 24;
    this.ropeN = N;
    this.ropeGeo = new THREE.BufferGeometry();
    this.ropeGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3).setUsage(THREE.DynamicDrawUsage));
    this.rope = new THREE.Line(this.ropeGeo, new THREE.LineBasicMaterial({ color: new THREE.Color(0.6, 2.4, 3) }));
    this.rope.frustumCulled = false; this.rope.visible = false; this.scene.add(this.rope);
    this.hookHead = new THREE.Mesh(new THREE.OctahedronGeometry(0.16), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.2, 3, 3.5) }));
    this.hookHead.visible = false; this.scene.add(this.hookHead);
    this.laserGeo = new THREE.CylinderGeometry(0.02, 0.02, 1, 6, 1, true); this.laserGeo.translate(0, 0.5, 0); this.laserGeo.rotateX(Math.PI / 2);
  }

  // ======================= run state =======================
  resetRun() {
    this.hp = 100; this.hpGhost = 100; this.regenT = 0; this.pInst = 0; this.pInstHold = 0;
    this.weapon = WEAPONS[this.S.loadout] || WEAPONS.revolver;
    this.ammo = this.weapon.mag; this.reloadT = 0; this.shootCd = 0;
    this.slashCd = 0; this.combo = 0; this.comboT = 0; this.pendingSlash = null; this.charge = 0; this.chargeHold = 0; this.iaidoCd = 0; this.iaidoActive = null;
    this.parryT = -1; this.parryCd = 0; this.parryWinNow = 0.25; this.guarding = false; this.hookSlashT = 0; this.lastHookEnemy = null;
    this.score = 0; this.kills = 0; this.maxSpeed = 0; this.bestRank = 0; this.style = 0; this.styleHold = 0; this.execs = 0; this.parries = 0;
    this.wave = 0; this.waveState = 'break'; this.waveT = 3; this.toSpawn = [];
    this.trialTime = 0; this.cpIndex = 0; this.cpTarget = null; this.trialRunning = false; this.splits = [];
    this.recoilUI = 0; this.damageFx = 0; this.flashFx = 0; this.invertFx = 0;
    this.gameTime = 0;
    this.training = { done: new Set() };
  }

  momentum() { return THREE.MathUtils.clamp((this.player.speed - 11.5) / 32, 0, 1); }
  rankIdx() { let i = 0; for (let k = 0; k < RANKS.length; k++) if (this.style >= RANKS[k].at) i = k; return i; }
  styleMult() { return 1 + this.rankIdx() * 0.35; }
  addStyle(n) { this.style = Math.min(150, this.style + n); this.styleHold = 1.5; }
  addScore(base, label) { const pts = Math.round(base * this.styleMult()); this.score += pts; if (label) this.hud.feed(label, pts); return pts; }
  lookDir(out) { return out.set(0, 0, -1).applyQuaternion(this.camera.quaternion); }
  shake(n) { this.camState.trauma = Math.min(1, this.camState.trauma + n); }
  slowmo(t) { this.slowmoT = Math.max(this.slowmoT, t); }

  // ======================= modes =======================
  start(mode) {
    this.mode = mode;
    this.audio.init(); this.audio.setVolumes(this.S.sfx, this.S.music);
    this.clearWorld();
    this.D = DIFF[this.S.difficulty] || DIFF.easy;
    this.player.easy = this.S.moveMode !== 'classic';
    this.resetRun();
    this.slowmoT = 0; this.hitstop = 0; this.timeScale = 1; this.crouchLatched = false;
    Object.assign(this.camState, { dip: 0, dipV: 0, tilt: 0, kick: 0, trauma: 0 });
    this.vm.setLoadout(this.S.loadout);
    this.vm.anim.sword = null; this.vm.anim.left = null; this.vm.charge = 0;
    const P = this.player;
    if (mode === 'trial') { P.reset(this.map.trialStart.pos, this.map.trialStart.yaw); this.setupTrial(); }
    else if (mode === 'training') { P.reset(new THREE.Vector3(-24, 0.05, 30), -Math.PI / 2 - 0.2); this.setupTraining(); }
    else { P.reset(new THREE.Vector3(0, 0.05, 40), Math.PI); }
    this.hud.show('objective', mode === 'training');
    document.getElementById('style').style.visibility = mode === 'arena' ? 'visible' : 'hidden';
    document.getElementById('modeTxt').textContent = mode === 'arena' ? 'GET READY' : mode === 'trial' ? 'TIME ATTACK' : 'TRAINING';
    document.getElementById('subTxt').textContent = mode === 'trial' ? `T 키로 재시작 · 최고 ${this.records && this.records.trial ? fmtTime(this.records.trial) : '-'}` : mode === 'training' ? '기술을 하나씩 해보세요 · 피해 없음' : '';
    if (mode === 'arena') { this.hud.banner('REDSHIFT', '멈추지 마라. 베어라.'); setTimeout(() => this.state === 'play' && this.hud.hint('Shift 대시 · C 슬라이드 · E 그래플 · F 패링 · 좌클릭 꾹 = 발도술', 5500), 2600); }
    else if (mode === 'trial') this.hud.banner('TIME ATTACK', '체크포인트를 순서대로 통과');
    else this.hud.banner('TRAINING', '왼쪽 체크리스트를 채워보세요');
    this.state = 'play';
    this.acc = 0;
  }

  clearWorld() {
    this.enemies.forEach(e => e.dispose()); this.enemies = [];
    this.projectiles.forEach(p => { this.scene.remove(p.mesh); }); this.projectiles = [];
    this.debris.forEach(d => this.scene.remove(d.m)); this.debris = [];
    this.trialRings.forEach(r => this.scene.remove(r)); this.trialRings = [];
    if (this.laser) { this.scene.remove(this.laser); this.laser = null; }
    if (this.tutMarker) this.tutMarker.visible = false;
    const tb = document.getElementById('tutBig'); if (tb) tb.classList.add('hidden');
  }

  setupTrial() {
    this.cpIndex = 0; this.trialTime = 0; this.trialRunning = false; this.splits = [];
    const geo = new THREE.TorusGeometry(3.2, 0.16, 10, 64);
    const cps = this.map.checkpoints;
    cps.forEach((p, i) => {
      const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: new THREE.Color(0.4, 2.6, 3.2), transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending }));
      const disc = new THREE.Mesh(new THREE.CircleGeometry(3.1, 48), new THREE.MeshBasicMaterial({ color: new THREE.Color(0.1, 0.6, 0.8), transparent: true, opacity: 0.18, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
      m.add(disc);
      m.position.copy(p);
      const next = cps[i + 1] || cps[i - 1];
      m.lookAt(i + 1 < cps.length ? next : p.clone().add(p.clone().sub(next)));
      this.scene.add(m); this.trialRings.push(m);
    });
    this.updateTrialRings();
  }
  updateTrialRings() {
    this.trialRings.forEach((r, i) => {
      r.visible = i >= this.cpIndex && i <= this.cpIndex + 1;
      const cur = i === this.cpIndex;
      r.material.color.setRGB(cur ? 0.4 : 0.15, cur ? 2.8 : 0.8, cur ? 3.4 : 1.0);
      r.children[0].material.opacity = cur ? 0.2 : 0.05;
      if (i === this.map.checkpoints.length - 1) r.material.color.setRGB(cur ? 3.2 : 1.2, cur ? 2.4 : 0.9, 0.4);
    });
    this.cpTarget = this.map.checkpoints[this.cpIndex] || null;
  }

  static DUMMY_SPOTS = [[-27, 0, 21], [-20, 0, 18.5], [-13, 0, 21]];
  setupTraining() {
    // dummies: blades that never move; they only start swinging (slowly, no damage) at the parry lesson
    for (const [x, y, z] of Game.DUMMY_SPOTS) {
      const e = new Enemy(this, 'blade', new THREE.Vector3(x, y, z));
      e.dummy = true; e.spawnT = 0.2;
      this.enemies.push(e);
    }
    this.tutRun = 0;
    if (!this.tutMarker) {
      const m = new THREE.Group();
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.08, 8, 40), new THREE.MeshBasicMaterial({ color: new THREE.Color(0.4, 2.6, 3.2), transparent: true, depthTest: false }));
      const arrow = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.1, 4), new THREE.MeshBasicMaterial({ color: new THREE.Color(0.4, 2.6, 3.2), depthTest: false }));
      arrow.rotation.x = Math.PI; arrow.position.y = 1.6; ring.renderOrder = arrow.renderOrder = 30;
      m.add(ring, arrow); this.scene.add(m); this.tutMarker = m;
    }
    this.renderObjectives();
  }
  // guided lessons, in order — each is ticked by the matching action (any order works)
  static TUTORIAL = [
    { k: 'run', t: 'WASD로 달리기', sub: '마우스로 보는 방향이 앞이에요' },
    { k: 'jump', t: 'Space = 점프' },
    { k: 'airjump', t: '공중에서 Space 한 번 더', sub: '= 2단 점프' },
    { k: 'dash', t: 'Shift = 대시', sub: '3번까지 연달아 · 대시 중엔 무적' },
    { k: 'slide', t: '달리면서 C = 슬라이드', sub: '순간 가속 · 내리막에선 계속 빨라져요' },
    { k: 'slidejump', t: '슬라이드 중에 Space', sub: '속도를 그대로 들고 점프' },
    { k: 'wall', t: '앞의 벽 사이로 달려가 점프해서 벽에 붙기', sub: '벽에 닿으면 자동으로 벽을 달려요', marker: [-4, 3, 34] },
    { k: 'walljump', t: '벽 달리는 중에 Space = 벽점프', sub: '보는 방향으로 튕겨나가요', marker: [-4, 3, 34] },
    { k: 'hook', t: 'E = 그래플', sub: '조준점에 청록 원이 뜨면 걸려요 · 한 번 누르면 끝까지 날아감' },
    { k: 'slash', t: '좌클릭 = 베기', sub: '허수아비 쪽을 보고 휘두르면 알아서 붙어서 벱니다', marker: 'dummy' },
    { k: 'parry', t: '허수아비가 노랗게 깜빡일 때 우클릭', sub: '= 패링 · 우클릭을 누르고 있으면 가드(막기)', marker: 'dummy' },
    { k: 'shoot', t: 'Q = 사격', sub: '조준점 근처 적에게 자동으로 보정돼요' },
    { k: 'iaido', t: '좌클릭 꾹 → 떼기 = 발도술', sub: '앞으로 순간 돌진하며 경로의 적을 전부 베기' },
    { k: 'execute', t: '노란 막대가 꽉 찬 적을 베기 = 처형', sub: '패링·베기로 막대(자세)를 채우세요', marker: 'dummy' },
  ];
  static EXTRA = [['ramp', '경사로 슬라이드로 60km/h'], ['speed', '90km/h 돌파'], ['slideland', '높은 곳에서 C 누른 채 착지'], ['climb', '벽 보고 W+점프 = 벽 오르기'], ['mantle', '턱 넘기 (자동)']];
  tutIndex() { const d = this.training.done; const i = Game.TUTORIAL.findIndex(s => !d.has(s.k)); return i < 0 ? Game.TUTORIAL.length : i; }
  renderObjectives() {
    const d = this.training.done, idx = this.tutIndex();
    // compact list: the next few lessons (finished ones collapse into the counter)
    const done = Game.TUTORIAL.filter(st => d.has(st.k)).length;
    const upcoming = Game.TUTORIAL.map((st, i) => ({ st, i })).filter(o => !d.has(o.st.k)).slice(0, 6);
    const list = upcoming.map(({ st, i }) => `<div class="it${i === idx ? ' cur' : ''}"><i></i>${st.t}</div>`).join('');
    const extra = idx >= Game.TUTORIAL.length ? `<h4 style="margin-top:6px">심화</h4>` + Game.EXTRA.map(([k, n]) => `<div class="it${d.has(k) ? ' done' : ''}"><i></i>${n}</div>`).join('') : '';
    document.getElementById('objective').innerHTML = `<h4>TUTORIAL ${done}/${Game.TUTORIAL.length}</h4>${list}${upcoming.length < Game.TUTORIAL.length - done ? '<div class="it" style="color:#776">…</div>' : ''}${extra}`;
    const big = document.getElementById('tutBig');
    if (this.mode !== 'training') { big.classList.add('hidden'); return; }
    big.classList.remove('hidden');
    const st = Game.TUTORIAL[idx];
    big.innerHTML = st ? `<div class="n">${idx + 1} / ${Game.TUTORIAL.length}</div><div class="t">${st.t}</div>${st.sub ? `<div class="s">${st.sub}</div>` : ''}`
      : `<div class="t">튜토리얼 완료!</div><div class="s">ESC → 타이틀에서 아레나나 타임 어택을 해보세요</div>`;
  }
  train(k) {
    if (this.mode !== 'training' || this.training.done.has(k)) return;
    this.training.done.add(k);
    const before = this.tutIndex();
    this.renderObjectives();
    const all = this.tutIndex() >= Game.TUTORIAL.length;
    this.audio.checkpoint(all);
    const st = Game.TUTORIAL.find(t => t.k === k) || { t: (Game.EXTRA.find(t => t[0] === k) || [0, k])[1] };
    this.hud.popup('✓ ' + st.t.split(' =')[0], '#7dfcff');
  }
  tickTutorial(dt) {
    const P = this.player;
    if (P.grounded && P.hSpeed > 3) { this.tutRun += P.hSpeed * dt; if (this.tutRun > 12) this.train('run'); }
    const st = Game.TUTORIAL[this.tutIndex()];
    const m = this.tutMarker;
    if (!st || !st.marker) { m.visible = false; return; }
    m.visible = true;
    if (st.marker === 'dummy') { const e = this.enemies[1] || this.enemies[0]; if (e) m.position.set(e.pos.x, e.pos.y + 2.9, e.pos.z); else m.visible = false; }
    else m.position.set(...st.marker);
    m.children[0].rotation.x = Math.PI / 2; m.children[1].position.y = 1.6 + Math.sin(this.clockT * 4) * 0.25;
    m.children[0].scale.setScalar(1 + Math.sin(this.clockT * 4) * 0.08);
  }

  // ======================= player events → audio/fx =======================
  playerEvents() {
    const g = this;
    let bhopChain = 0, lastLandT = 0;
    return {
      jump(kind) {
        g.audio.jump();
        const P = g.player;
        if (kind === 'ground') g.train('jump');
        if (kind === 'air') { g.train('airjump'); g.fx.sparks.emit(v1.copy(P.pos).setY(P.pos.y + 0.1), 14, { color: [0.3, 0.9, 1], speed: 5, life: 0.35, gravity: 2 }); g.fx.bursts.ring(v1.copy(P.pos).setY(P.pos.y + 0.05), null, 0x30e0ff, 2, 0.3); }
        if (kind === 'wall') { g.addStyle(2); g.shake(0.05); g.train('walljump'); }
        if (kind === 'slide') { g.train('slidejump'); }
        if (kind === 'ground' || kind === 'slide') {
          if (g.gameTime - lastLandT < 0.08 && P.hSpeed > 11) { bhopChain++; if (bhopChain >= 3 && P.hSpeed * 3.6 > 40) g.train('bhop'); } else bhopChain = 0;
        }
      },
      land(impact) {
        lastLandT = g.gameTime;
        g.audio.land(impact > 14);
        if (impact > 6) g.camState.dipV -= Math.min(5, impact * 0.18);
        if (impact > 14) { g.shake(Math.min(0.35, impact * 0.012)); g.fx.sparks.emit(v1.copy(g.player.pos).setY(g.player.pos.y + 0.1), 18, { color: [1, 0.55, 0.45], speed: 7, life: 0.4 }); g.fx.bursts.ring(v1.copy(g.player.pos).setY(g.player.pos.y + 0.05), null, 0xff6050, Math.min(5, impact * 0.18), 0.35); }
      },
      slide(kind, boost) {
        g.audio.slideStart(); g.train('slide');
        if (kind === 'land' && boost > 3) { g.train('slideland'); g.addStyle(3); g.camState.kick = Math.max(g.camState.kick, 0.4); }
        if (boost > 0) g.addStyle(1);
      },
      dash(dir) {
        g.audio.dash(); g.camState.kick = 1; g.shake(0.08); g.addStyle(1.5); g.train('dash');
        g.fx.sparks.emit(v1.copy(g.player.pos).setY(g.player.pos.y + 1), 16, { color: [0.3, 0.9, 1], speed: 6, dir: dir.clone().negate(), spread: 0.6, life: 0.3, gravity: 0 });
      },
      wallStart(n) { g.audio.wallStart(); g.addStyle(2); g.train('wall'); },
      climb() { g.audio.climb(); g.train('climb'); },
      mantle() { g.audio.mantle(); g.train('mantle'); g.camState.dipV -= 1.5; },
      hookFire() { g.audio.hookFire(); g.vm.hookFire(); },
      hookMiss() { g.audio.empty(); },
      hookAttach(p, enemy) {
        g.audio.hookAttach(enemy); g.addStyle(2); g.train('hook');
        g.fx.sparks.emit(p, 12, { color: [0.4, 0.95, 1], speed: 5, life: 0.3 });
        g.fx.bursts.ring(p, null, 0x30e0ff, 1.2, 0.3);
      },
      hookRelease(arrived, enemy) {
        if (enemy && arrived) { g.hookSlashT = 0.7; g.lastHookEnemy = enemy; g.hud.hint('지금 베기! — 그래플 연계 보너스', 900); }
      },
      pad() { g.audio.dash(); g.camState.kick = 0.8; g.shake(0.06); },
      boost() { g.audio.boost(); g.camState.kick = 0.7; },
      fell() { g.player.reset(new THREE.Vector3(0, 1, 40), Math.PI); },
    };
  }

  // ======================= main loop =======================
  frame(now) {
    const realDt = Math.max(0, Math.min(0.1, (now - this.last) / 1000)); this.last = Math.max(this.last, now);
    this.fpsAcc += realDt; this.fpsN++;
    if (this.fpsAcc > 0.5) { document.getElementById('fps').textContent = Math.round(this.fpsN / this.fpsAcc) + ' FPS'; this.fpsAcc = 0; this.fpsN = 0; }
    this.update(Math.min(0.05, realDt));
    this.render(Math.min(0.05, realDt));
  }

  update(rawDt) {
    this.clockT += rawDt;
    // time scale: hitstop > slowmo
    let target = 1;
    if (this.slowmoT > 0) { this.slowmoT -= rawDt; target = 0.3; }
    if (this.hitstop > 0) { this.hitstop -= rawDt; target = 0.05; }
    this.timeScale += (target - this.timeScale) * Math.min(1, rawDt * (target < this.timeScale ? 40 : 7));
    const playing = this.state === 'play';
    // mouse look happens every frame (never interpolated or time-scaled)
    const [mx, my] = this.input.takeMouse();
    this.mouseDX = mx; this.mouseDY = my;
    if (playing) {
      const sens = this.S.sens * 0.0012;
      this.player.yaw -= mx * sens; this.player.pitch -= my * sens;
      this.player.pitch = THREE.MathUtils.clamp(this.player.pitch, -1.56, 1.56);
      this.acc += rawDt * this.timeScale;
      let n = 0;
      while (this.acc >= TICK && n < 12) { this.tick(TICK); this.acc -= TICK; n++; }
      if (n === 12) this.acc = 0;
    } else if (this.state === 'dead') {
      this.tickWorldOnly(rawDt * 0.3);
    }
    if (!playing) this.input.consumeEdges();
  }

  // input snapshot for one tick (edges consumed by the first tick that sees them)
  readInput() {
    const I = this.input;
    const inp = {
      fwd: (I.is('forward') ? 1 : 0) - (I.is('back') ? 1 : 0),
      right: (I.is('right') ? 1 : 0) - (I.is('left') ? 1 : 0),
      jumpPressed: I.pressed('jump'), jumpHeld: I.is('jump'),
      crouch: I.is('crouch'), crouchPressed: I.pressed('crouch'), dashPressed: I.pressed('dash'),
      grapplePressed: I.pressed('grapple'), grappleHeld: I.is('grapple'),
      autoHop: !!this.S.autoHop,
      slashPressed: I.pressed('slash'), slashHeld: I.is('slash'), slashReleased: I.released('slash'),
      shootPressed: I.pressed('shoot'), shootHeld: I.is('shoot'),
      blockPressed: I.pressed('block'), blockHeld: I.is('block'), reloadPressed: I.pressed('reload'), inspectPressed: I.pressed('inspect'), restartPressed: I.pressed('restart'),
    };
    I.consumeEdges();
    return inp;
  }

  tick(dt) {
    this.gameTime += dt;
    const P = this.player;
    const inp = this.readInput();
    const stunned = P.stagger > 0;
    if (inp.restartPressed && this.mode === 'trial') { this.restartTrial(); return; }

    // crouch toggle option
    if (this.S.crouchToggle) { if (inp.crouchPressed) this.crouchLatched = !this.crouchLatched; if (inp.jumpPressed && this.crouchLatched && P.sliding) this.crouchLatched = false; inp.crouch = this.crouchLatched; }
    P.tick(dt, inp, this.playerCtx || (this.playerCtx = { hookEnemy: (pos, dir, step) => this.hookEnemy(pos, dir, step) }));
    // soft world bounds (roofs of the boundary blocks are reachable, the void beyond is not)
    const B = this.map.half + 11;
    if (Math.abs(P.pos.x) > B) { P.pos.x = Math.sign(P.pos.x) * B; if (P.vel.x * Math.sign(P.pos.x) > 0) P.vel.x = 0; }
    if (Math.abs(P.pos.z) > B) { P.pos.z = Math.sign(P.pos.z) * B; if (P.vel.z * Math.sign(P.pos.z) > 0) P.vel.z = 0; }
    this.maxSpeed = Math.max(this.maxSpeed, P.hSpeed);
    if (P.sliding && P.groundN.y < 0.985 && P.hSpeed * 3.6 > 60) this.train('ramp');
    if (P.hSpeed * 3.6 > 90 && P.dashT <= 0 && P.burstT <= 0) this.train('speed');

    // ---------- combat input ----------
    this.slashCd -= dt; this.shootCd -= dt; this.parryCd -= dt; this.comboT -= dt; this.iaidoCd -= dt; this.hookSlashT -= dt;
    if (this.parryT >= 0) { this.parryT += dt; if (this.parryT > this.parryWinNow) this.parryT = -1; }
    this.guarding = inp.blockHeld && !stunned;
    if (!stunned) {
      if (inp.slashPressed && this.slashCd <= 0 && !this.iaidoActive) this.doSlash();
      // hold to charge iaido
      if (inp.slashHeld && !this.guarding && this.slashCd <= 0.05 && this.iaidoCd <= 0 && !this.iaidoActive) {
        this.chargeHold += dt;
        if (this.chargeHold > 0.22) { if (this.charge === 0) this.audio.chargeStart(); this.charge = Math.min(1, this.charge + dt * 2.4); }
      }
      if (!inp.slashHeld) {
        if (this.charge >= 0.5) this.iaido();
        this.charge = 0; this.chargeHold = 0;
      }
      if (inp.shootPressed && this.shootCd <= 0) this.shoot();
      if (inp.blockPressed) this.tryParry();
      if (inp.reloadPressed) this.startReload();
      if (inp.inspectPressed) this.vm.inspect();
    } else { this.charge = 0; this.chargeHold = 0; }
    this.vm.chargePose(this.charge);
    this.vm.guard = this.guarding;
    if (this.pendingSlash) { const ps = this.pendingSlash; ps.t -= dt; if (ps.t <= 0) { this.resolveSlash(ps); ps.checks--; ps.t = 0.05; if (ps.checks <= 0) this.pendingSlash = null; } }
    if (this.iaidoActive) this.tickIaido(dt);
    if (this.reloadT > 0) { this.reloadT -= dt; if (this.reloadT <= 0) { this.ammo = this.weapon.mag; if (this.weapon.id === 'shotgun') this.audio.pump(); } }
    this.recoilUI = Math.max(0, this.recoilUI - dt * 4);

    // ---------- vitals ----------
    this.regenT -= dt;
    if (this.regenT <= 0 && this.hp < 100) this.hp = Math.min(100, this.hp + this.D.regen * dt);
    if ((this.pInstHold -= dt) <= 0) this.pInst = Math.max(0, this.pInst - 22 * dt);
    if (this.mode === 'training') this.hp = 100;

    // ---------- world ----------
    const ctx = this.enemyCtx();
    for (const e of this.enemies) if (e.alive) {
      if (e.dummy) this.tickDummy(e, dt, ctx); else e.update(dt, ctx);
    }
    for (const e of this.enemies) if (!e.alive && !e.removed) { e.removed = true; }
    this.enemies = this.enemies.filter(e => e.alive);
    this.tickProjectiles(dt);
    this.tickDebris(dt);
    if (this.mode === 'arena') this.tickWaves(dt);
    if (this.mode === 'trial') this.tickTrial(dt);
    if (this.mode === 'training') { this.tickTraining(dt); this.tickTutorial(dt); }

    // style
    this.styleHold -= dt;
    const fast = P.hSpeed > 18;
    if (P.hSpeed > 25) this.style = Math.min(150, this.style + dt * 2.5);
    if (this.styleHold <= 0) this.style = Math.max(0, this.style - dt * (fast ? 2 : 7));
    this.bestRank = Math.max(this.bestRank, this.rankIdx());
  }

  tickWorldOnly(dt) {
    this.tickDebris(dt);
  }

  // ======================= COMBAT: melee =======================
  doSlash() {
    const m = this.momentum();
    if (this.comboT <= 0) this.combo = 0;
    const kinds = [0, 1, 2];
    let kind = kinds[this.combo % 3];
    const target = this.findBrokenTarget(4.5 + m * 2);
    if (target) kind = 3; // execute overhead
    this.vm.slash(kind);
    this.audio.slash(1 + m * 0.5);
    this.slashCd = kind === 2 ? 0.32 : 0.27;
    this.combo++; this.comboT = 0.7;
    // magnetism: snap toward the enemy you're roughly facing (wide cone, generous range)
    const f = this.lookDir(new THREE.Vector3());
    const assist = this.D.assist;
    const reach = 6 + m * 4 + assist * 3, cone = 0.88 - assist * 0.22;
    let lunge = target, best = -1;
    if (!lunge) for (const e of this.enemies) {
      if (!e.alive) continue;
      v1.subVectors(e.chest, this.player.eye); const d = v1.length();
      if (d > reach) continue;
      const dot = v1.normalize().dot(f); if (dot < cone) continue;
      const score = dot * 2 - d * 0.08;
      if (score > best) { best = score; lunge = e; }
    }
    this.slashTarget = lunge;
    if (lunge) {
      v1.subVectors(lunge.chest, this.player.eye); const d = v1.length(); v1.normalize();
      if (d > 2.2) {
        const want = Math.min(20, d * 4.5);
        const cur = this.player.vel.dot(v1);
        if (cur < want) this.player.vel.addScaledVector(v1, want - Math.max(0, cur));
      }
      if (this.player.vel.y > 7) this.player.vel.y = 7;
    }
    const q = this.camera.quaternion.clone();
    const origin = this.player.eye.clone().addScaledVector(f, 0.9).add(v2.set(0, -0.2, 0));
    const roll = [0.2, -0.2, 0.9, Math.PI / 2, 0][kind];
    this.fx.arcs.add(origin, q, kind === 3 ? 0xffd040 : 0xff2a48, (kind === 3 ? 3.2 : 2.7) + m * 0.8, 0.2, kind === 0 || kind === 2, roll);
    this.pendingSlash = { t: 0.045, checks: 3, m, kind, hit: new Set(), dmg: kind === 2 ? 56 : 42 };
  }

  findBrokenTarget(range) {
    const f = this.lookDir(v3);
    let best = null, bd = range;
    for (const e of this.enemies) {
      if (!e.alive || e.broken <= 0) continue;
      v1.subVectors(e.chest, this.player.eye); const d = v1.length();
      if (d < bd && v1.normalize().dot(f) > 0.5) { bd = d; best = e; }
    }
    return best;
  }

  resolveSlash(ps) {
    const P = this.player, f = this.lookDir(new THREE.Vector3()), eye = P.eye.clone();
    const range = 3.4 + ps.m * 1.8;
    let hitAny = false, blockedAny = false;
    for (const e of this.enemies) {
      if (!e.alive || ps.hit.has(e)) continue;
      let bd = 1e9, bp = null;
      for (const p of [e.chest, e.head, v2.set(e.pos.x, e.pos.y + 0.6, e.pos.z)]) { const d = p.distanceTo(eye); if (d < bd) { bd = d; bp = p.clone(); } }
      const magnet = e === this.slashTarget;
      if (bd > range + (e.type === 'brute' ? 0.6 : 0) + (magnet ? 1.2 : 0)) continue;
      v1.subVectors(bp, eye).normalize();
      if (!magnet && v1.dot(f) < (bd < 1.8 ? -0.3 : 0.3)) continue;
      ps.hit.add(e);
      // ---- execute broken enemy ----
      if (e.broken > 0) { this.execute(e, f); hitAny = true; continue; }
      // ---- clash: both blades meet ----
      if (e.state === 'windup' && e.windup < 0.16 && e.parryable && (e.type === 'blade' || e.type === 'brute')) { this.clash(e, bp, ps.m); hitAny = true; continue; }
      // ---- guard ----
      if (e.state === 'guard' && e.facingDot(P.pos) > 0.3) {
        if (ps.m < 0.5) { this.blocked(e, bp, ps.m); blockedAny = true; continue; }
        e.guardT = 0; e.state = 'idle'; e.stagger = 0.6; e.addInst(45);
        this.hud.feed('GUARD BREAK'); this.addStyle(6);
      }
      let dmg = ps.dmg * (1 + ps.m * 1.5);
      const labels = [];
      if (this.hookSlashT > 0 && this.lastHookEnemy === e) { dmg *= 1.5; labels.push('HOOK SLASH'); this.hookSlashT = 0; }
      if (e.stagger > 0) dmg *= 1.3;
      const killed = e.damage(dmg, { from: P.pos, inst: 16 * (1 + ps.m) });
      hitAny = true;
      this.hud.damageNumber(e.chest, dmg, ps.m > 0.6 ? 'big' : '');
      this.fx.sparks.emit(bp, 24, { color: [1, 0.12, 0.2], speed: 10, dir: f, spread: 1, life: 0.5, size: 0.14 });
      this.fx.sparks.emit(bp, 8, { color: [1, 0.85, 0.6], speed: 15, dir: f, spread: 0.6, life: 0.2, size: 0.07 });
      this.fx.bursts.flash(bp, 0xff2040, 0.25, 0.08);
      if (labels.length) this.hud.feed(labels.join(' · '));
      if (killed) this.onKill(e, 'slash', f);
      else { this.addStyle(3); this.addScore(10); }
    }
    // deflect projectiles in front of the swing
    for (const p of this.projectiles) {
      if (p.owner !== 'enemy' || p.dead) continue;
      if (p.pos.distanceTo(eye) < 3.8 && v1.subVectors(p.pos, eye).normalize().dot(f) > 0.25) this.reflect(p, false);
    }
    if (hitAny) { this.train('slash'); this.audio.slashHit(); this.hud.hitmarker(false); this.hitstop = Math.max(this.hitstop, 0.045 + ps.m * 0.03); this.shake(0.16); }
    if (blockedAny && !hitAny) this.vm.blocked();
  }

  execute(e, f) {
    this.execs++;
    this.audio.execute();
    this.slowmo(0.45); this.hitstop = 0.09; this.flashFx = 1; this.shake(0.4);
    this.fx.sparks.emit(e.chest, 70, { color: [1, 0.8, 0.3], speed: 16, life: 0.7, size: 0.16 });
    this.fx.bursts.ring(e.chest, f.clone().negate(), 0xffc23a, 4, 0.45);
    this.hud.popup('EXECUTE', '#ffc23a');
    this.hud.damageNumber(e.chest, 'EXECUTE', 'big');
    e.hp = 0; e.alive = false;
    this.hp = Math.min(100, this.hp + 25);
    this.player.dashCharges = T.dashCharges;
    this.train('execute');
    this.onKill(e, 'execute', f);
  }

  clash(e, p, m) {
    e.cancelAttack();
    e.addInst(34 * (1 + m * 1.5));
    this.addPInst(16 * (1 - m * 0.6));
    this.audio.clash(); this.vm.clash();
    this.slowmo(0.18); this.shake(0.3); this.flashFx = 0.5;
    this.fx.sparks.emit(p, 50, { color: [1, 0.85, 0.25], speed: 14, life: 0.5, size: 0.12 });
    this.fx.bursts.flash(p, 0xffd040, 0.4, 0.1);
    this.fx.bursts.ring(p, this.lookDir(v1).negate(), 0xffd040, 1.6, 0.3);
    this.hud.popup('CLASH', '#ffc23a');
    this.addStyle(10); this.addScore(60);
    // push both apart
    v1.subVectors(e.pos, this.player.pos).setY(0).normalize();
    e.vel.addScaledVector(v1, 7 + m * 8); this.player.vel.addScaledVector(v1, -4 * (1 - m));
  }

  blocked(e, p, m) {
    e.addInst(26 * (1 + m));
    this.addPInst(8);
    this.audio.block();
    this.fx.sparks.emit(p, 26, { color: [1, 0.85, 0.3], speed: 10, life: 0.35, size: 0.1 });
    this.hud.hint('막혔다! 빠르게 들어가거나 옆/뒤에서, 혹은 발도술로 가드를 깨라', 1600);
    this.shake(0.1);
  }

  iaido() {
    const P = this.player;
    const d = this.lookDir(new THREE.Vector3());
    d.y = THREE.MathUtils.clamp(d.y, -0.45, 0.45); d.normalize();
    const start = P.pos.clone();
    const exit = Math.max(P.speed, 14) + 4;
    P.burst(d, 58, 0.16, exit);
    this.iaidoActive = { t: 0.16, from: start, hit: new Set(), dir: d.clone(), m: this.momentum() };
    this.iaidoCd = 2.6;
    this.vm.slash(4);
    this.audio.iaido();
    this.camState.kick = 1.6; this.shake(0.2); this.flashFx = 0.4;
    const q = this.camera.quaternion.clone();
    this.fx.arcs.add(P.eye.clone().addScaledVector(d, 2.5), q, 0xffffff, 4.2, 0.25, false, 0, 1.4);
    this.train('iaido');
  }

  tickIaido(dt) {
    const ia = this.iaidoActive; ia.t -= dt;
    const P = this.player;
    // cut everything near the path travelled this tick
    for (const e of this.enemies) {
      if (!e.alive || ia.hit.has(e)) continue;
      const d = segPointDist(ia.from, P.pos, e.pos.clone().setY(e.pos.y + 1));
      if (d < 2.4 + (e.type === 'brute' ? 0.5 : 0)) {
        ia.hit.add(e);
        if (e.broken > 0) { this.execute(e, ia.dir); continue; }
        if (e.state === 'guard') { e.guardT = 0; e.state = 'idle'; this.hud.feed('GUARD BREAK'); }
        const dmg = 120 * (1 + ia.m * 1.2);
        const killed = e.damage(dmg, { from: P.pos, inst: 70, stagger: 0.6 });
        this.hud.damageNumber(e.chest, dmg, 'big');
        this.fx.sparks.emit(e.chest, 40, { color: [1, 1, 1], speed: 14, dir: ia.dir, spread: 1.2, life: 0.5, size: 0.12 });
        this.fx.sparks.emit(e.chest, 30, { color: [1, 0.1, 0.2], speed: 10, life: 0.6, size: 0.14 });
        this.hitstop = 0.06; this.shake(0.25);
        if (killed) this.onKill(e, 'iaido', ia.dir); else this.addStyle(6);
      }
    }
    for (const p of this.projectiles) if (p.owner === 'enemy' && !p.dead && segPointDist(ia.from, P.pos, p.pos) < 2.2) this.destroyProjectile(p, true);
    ia.from.copy(P.pos);
    if (ia.t <= 0) this.iaidoActive = null;
  }

  tryParry() {
    // spamming the button shrinks the window; a clean press gets the full one
    this.parryWinNow = this.parryCd > 0 ? 0.07 : this.D.parryWin;
    this.parryT = 0; this.parryCd = 0.35;
    this.vm.parry();
    this.audio._noise(0.1, { type: 'highpass', freq: 3000, gain: 0.15, rev: 0 });
  }

  parrySuccess(kind, pos) {
    this.vm.parryHit(); this.audio.parry(true);
    this.slowmo(0.42); this.flashFx = 1; this.shake(0.22);
    this.parryCd = 0; this.parries++;
    this.player.dashCharges = Math.min(T.dashCharges, this.player.dashCharges + 1);
    this.fx.sparks.emit(pos, 34, { color: [1, 0.85, 0.5], speed: 14, life: 0.45, size: 0.1 });
    this.fx.sparks.emit(pos, 20, { color: [0.2, 0.8, 1], speed: 9, life: 0.55, size: 0.12 });
    this.fx.bursts.ring(pos, this.lookDir(v1).negate(), 0x40c8ff, 1.2, 0.3);
    this.fx.bursts.flash(pos, 0xaaddff, 0.25, 0.08);
    this.hud.parryRing();
    this.hud.popup(kind === 'melee' ? 'PARRY' : 'REFLECT', '#7dfcff');
    this.addStyle(14); this.addScore(120, kind === 'melee' ? 'PERFECT PARRY' : 'REFLECT');
    this.train('parry');
  }

  addPInst(n) {
    this.pInst = Math.min(100, this.pInst + n * this.D.pInst); this.pInstHold = 1.4;
    if (this.pInst >= 100) {
      this.pInst = 0; this.player.stagger = 0.75;
      this.hud.stagger(true); setTimeout(() => this.hud.stagger(false), 750);
      this.audio.broken(); this.shake(0.3);
    }
  }

  // ======================= COMBAT: guns =======================
  shoot() {
    const W = this.weapon;
    if (this.reloadT > 0) return;
    if (this.ammo <= 0) { this.audio.empty(); this.startReload(); return; }
    this.ammo--; this.shootCd = W.rate; this.train('shoot');
    this.vm.shoot(W.id === 'shotgun' ? 1.6 : 1);
    if (W.id === 'shotgun') this.audio.shotgun(); else this.audio.gunshot();
    this.shake(W.id === 'shotgun' ? 0.22 : 0.09); this.recoilUI = 1;
    const P = this.player;
    const eye = this.camera.position.clone();
    const aim = this.lookDir(new THREE.Vector3());
    const muzzle = this.vm.toWorld(this.vm.muzzle, this.camera, new THREE.Vector3());
    // recoil movement (the scatter gun doubles as a mobility tool)
    const kick = P.grounded ? W.kickGround : W.kickAir;
    if (kick > 0) {
      P.vel.addScaledVector(aim, -kick);
      if (!P.grounded && aim.y < -0.5) P.vel.y = Math.max(P.vel.y, 0) + kick * 0.55 * -aim.y;
      if (P.grounded && aim.y < -0.6) { P.vel.y = kick * 1.2; P.grounded = false; }
    }
    const spread = P.grounded ? W.spread : W.airSpread;
    const hitsBy = new Map(); let anyHead = false;
    // aim assist: bend the shot onto an enemy close to the crosshair
    let assistDir = null;
    { const lim = Math.cos((1.5 + this.D.assist * 3.5) * Math.PI / 180); let bestDot = lim;
      for (const e of this.enemies) {
        if (!e.alive) continue; v1.subVectors(e.chest, eye); const d = v1.length(); if (d > 140) continue; v1.normalize();
        const dot = v1.dot(aim); if (dot > bestDot && this.enemyCtx().los(eye, e.chest)) { bestDot = dot; assistDir = v1.clone(); }
      } }
    for (let k = 0; k < W.pellets; k++) {
      const dir = (assistDir && (k === 0 || W.pellets === 1)) ? assistDir.clone() : aim.clone();
      if (spread > 0 && !(assistDir && k === 0)) { dir.x += (Math.random() - 0.5) * spread * 2; dir.y += (Math.random() - 0.5) * spread * 2; dir.z += (Math.random() - 0.5) * spread * 2; dir.normalize(); }
      let t = 300, enemy = null, head = false;
      const wh = this.map.col.raycast(eye.x, eye.y, eye.z, dir.x, dir.y, dir.z, 300, _hit);
      const wn = wh ? new THREE.Vector3(wh.nx, wh.ny, wh.nz) : null;
      if (wh) t = wh.t;
      for (const e of this.enemies) { if (!e.alive) continue; const r = e.rayHit(eye.x, eye.y, eye.z, dir.x, dir.y, dir.z, t); if (r) { t = r.t; enemy = e; head = r.head; } }
      // shoot bullets out of the air
      for (const p of this.projectiles) {
        if (p.owner !== 'enemy' || p.dead) continue;
        v1.subVectors(p.pos, eye); const along = v1.dot(dir);
        if (along > 0 && along < t && v1.addScaledVector(dir, -along).length() < 0.55) { t = along; enemy = null; this.destroyProjectile(p, true); this.addStyle(5); this.hud.feed('BULLET CUT'); break; }
      }
      const end = eye.clone().addScaledVector(dir, t);
      if (k < 4) this.fx.tracers.add(muzzle, end, 0xffc080, W.id === 'shotgun' ? 0.07 : 0.09, W.id === 'shotgun' ? 0.02 : 0.035);
      if (enemy) {
        const h = hitsBy.get(enemy) || { dmg: 0, head: false, pt: end };
        let dmg = W.dmg * (head ? W.head : 1) * (enemy.broken > 0 ? 2 : 1);
        if (enemy.state === 'guard' && enemy.facingDot(P.pos) > 0.3) { dmg *= 0.15; this.fx.sparks.emit(end, 6, { color: [1, 0.85, 0.3], speed: 6, life: 0.25 }); }
        h.dmg += dmg; h.head = h.head || head; anyHead = anyHead || head;
        hitsBy.set(enemy, h);
        this.fx.sparks.emit(end, head ? 12 : 6, { color: head ? [1, 0.9, 0.3] : [1, 0.2, 0.3], speed: 8, dir: dir.clone().negate(), spread: 1, life: 0.35, size: 0.1 });
      } else if (wh) {
        this.fx.sparks.emit(end, 5, { color: [1, 0.7, 0.4], speed: 6, dir: wn, spread: 0.8, life: 0.3, size: 0.08 });
        if (k < 3) this.fx.bursts.scorch(end, wn, 0xff6030, 0.18, 3);
      }
    }
    for (const [e, h] of hitsBy) {
      const killed = e.damage(h.dmg, { from: P.pos, inst: W.inst * (W.pellets > 1 ? Math.min(4, W.pellets * 0.5) : 1) });
      this.hud.damageNumber(h.pt, h.dmg, h.head ? 'head' : '');
      if (killed) this.onKill(e, h.head ? 'headshot' : 'gun', aim);
      else this.addStyle(h.head ? 5 : 2);
    }
    if (hitsBy.size) { this.hud.hitmarker(anyHead); this.audio.hitmarker(anyHead); }
    if (this.ammo === 0) setTimeout(() => { if (this.ammo === 0 && this.reloadT <= 0) this.startReload(); }, 250);
  }
  startReload() {
    if (this.reloadT > 0 || this.ammo === this.weapon.mag) return;
    this.reloadT = this.weapon.reload; this.vm.reload(this.weapon.reload);
    if (this.weapon.id === 'shotgun') this.audio.pump(); else this.audio.reload();
  }

  // ======================= projectiles =======================
  spawnProjectile(pos, vel, shooter, dmg, kind) {
    const geo = this._projGeo || (this._projGeo = (() => { const g = new THREE.CapsuleGeometry(0.08, 1.0, 4, 8); g.rotateX(Math.PI / 2); return g; })());
    const mats = this._projMats || (this._projMats = {
      enemy: new THREE.MeshBasicMaterial({ color: new THREE.Color(4, 0.4, 0.6) }),
      sniper: new THREE.MeshBasicMaterial({ color: new THREE.Color(3, 0.8, 5) }),
      small: new THREE.MeshBasicMaterial({ color: new THREE.Color(4, 0.8, 0.4) }),
      player: new THREE.MeshBasicMaterial({ color: new THREE.Color(0.8, 3.5, 4) }),
    });
    const mesh = new THREE.Mesh(geo, mats[kind] || mats.enemy);
    if (kind === 'sniper') mesh.scale.set(1.3, 1.3, 2.5); if (kind === 'small') mesh.scale.set(0.8, 0.8, 0.5);
    mesh.position.copy(pos); this.scene.add(mesh);
    this.projectiles.push({ pos: pos.clone(), vel, mesh, owner: 'enemy', dmg, life: 4, shooter, whizzed: false, kind });
  }
  destroyProjectile(p, burst) {
    p.dead = true; this.scene.remove(p.mesh);
    if (burst) this.fx.sparks.emit(p.pos, 10, { color: p.owner === 'enemy' ? [1, 0.2, 0.3] : [0.4, 0.9, 1], speed: 6, life: 0.3, size: 0.08 });
  }
  reflect(p, perfect) {
    p.owner = 'player';
    let target = null, best = -1e9;
    const f = this.lookDir(v2);
    for (const e of this.enemies) {
      if (!e.alive) continue;
      v1.subVectors(e.chest, p.pos); const d = v1.length(); v1.normalize();
      const s = v1.dot(f) * 2 - d * 0.01 + (e === p.shooter ? 0.8 : 0);
      if (s > best) { best = s; target = e; }
    }
    const sp = 80;
    if (target) p.vel.subVectors(target.chest, p.pos).normalize().multiplyScalar(sp); else p.vel.copy(f).multiplyScalar(sp);
    p.target = target; p.dmg = perfect ? 150 : 70; p.life = 3;
    p.mesh.material = this._projMats.player;
    if (perfect) this.parrySuccess('bullet', p.pos.clone());
    else { this.audio.parry(false); this.fx.sparks.emit(p.pos, 18, { color: [1, 0.9, 0.6], speed: 9, life: 0.35, size: 0.08 }); this.addStyle(6); this.hud.feed('DEFLECT'); }
  }
  tickProjectiles(dt) {
    const P = this.player;
    const eye = P.eye.clone();
    const body = new THREE.Vector3(P.pos.x, P.pos.y + P.h * 0.55, P.pos.z);
    for (const p of this.projectiles) {
      if (p.dead) continue;
      p.life -= dt;
      if (p.owner === 'player' && p.target && p.target.alive) {
        const want = v1.subVectors(p.target.chest, p.pos).normalize().multiplyScalar(p.vel.length());
        p.vel.lerp(want, Math.min(1, dt * 10));
      }
      const from = p.pos.clone();
      const len = p.vel.length() * dt; const dir = p.vel.clone().normalize();
      const wh = this.map.col.raycast(from.x, from.y, from.z, dir.x, dir.y, dir.z, len, _hit);
      const to = wh ? new THREE.Vector3(wh.x, wh.y, wh.z) : from.clone().addScaledVector(dir, len);
      if (p.owner === 'enemy') {
        // parry window catches bullets about to arrive
        const near = from.distanceTo(eye);
        if (this.parryT >= 0 && near < 5.5 && v1.subVectors(from, eye).normalize().dot(this.lookDir(v2)) > -0.2) { this.reflect(p, true); continue; }
        if (this.guarding && near < 2.2 && v1.copy(p.vel).normalize().dot(this.lookDir(v2)) < -0.25) {
          this.audio.block(); this.addPInst(4); this.destroyProjectile(p, true);
          this.fx.sparks.emit(from, 10, { color: [1, 0.85, 0.4], speed: 6, life: 0.25, size: 0.08 }); continue;
        }
        const d = segPointDist(from, to, body);
        if (d < 0.42 + P.h * 0.12 && !P.invuln) { this.hurt(p.dmg, p.shooter ? p.shooter.pos : from, 6); this.destroyProjectile(p, true); continue; }
        if (!p.whizzed && segPointDist(from, to, eye) < 2.2) { p.whizzed = true; this.audio.bulletWhiz(); }
      } else {
        let hit = null, ht = len;
        for (const e of this.enemies) { if (!e.alive) continue; const r = e.rayHit(from.x, from.y, from.z, dir.x, dir.y, dir.z, ht); if (r) { ht = r.t; hit = e; } }
        if (hit) {
          const killed = hit.damage(p.dmg, { from, inst: 60, stagger: 0.8 });
          this.hud.damageNumber(hit.chest, p.dmg, 'big'); this.hud.hitmarker(true);
          this.fx.sparks.emit(hit.chest, 30, { color: [0.4, 0.9, 1], speed: 10, life: 0.5, size: 0.12 });
          if (killed) this.onKill(hit, 'reflect', dir);
          this.destroyProjectile(p, true); continue;
        }
      }
      if (wh || p.life <= 0) { if (wh) this.fx.bursts.scorch(to, new THREE.Vector3(wh.nx, wh.ny, wh.nz), p.kind === 'sniper' ? 0xb050ff : 0xff3040, 0.25, 2.5); this.destroyProjectile(p, !!wh); continue; }
      p.pos.copy(to); p.mesh.position.copy(to);
      p.mesh.lookAt(v1.copy(to).add(p.vel));
    }
    this.projectiles = this.projectiles.filter(p => !p.dead);
  }

  hurt(n, fromPos, inst = 0) {
    if (this.state !== 'play' || this.mode === 'training') { if (this.mode === 'training') { this.damageFx = Math.min(1, this.damageFx + 0.3); this.hud.damageDir(this.dirAngle(fromPos)); } return; }
    this.hp -= n; this.regenT = 4.5; this.damageFx = Math.min(1, this.damageFx + 0.55); this.shake(0.22);
    this.audio.hurt();
    this.style = Math.max(0, this.style - 12);
    if (inst) this.addPInst(inst);
    this.hud.damageDir(this.dirAngle(fromPos));
    if (this.hp <= 0) { this.hp = 0; this.die(); }
  }
  dirAngle(fromPos) {
    const P = this.player; v1.subVectors(fromPos, P.pos);
    return Math.atan2(v1.x, v1.z) - Math.atan2(-Math.sin(P.yaw), -Math.cos(P.yaw));
  }

  onKill(e, how, dir) {
    this.kills++;
    const P = this.player;
    const labels = [];
    let base = e.cfg.score;
    if (how === 'headshot') { labels.push('HEADSHOT'); base += 80; }
    if (how === 'reflect') { labels.push('RETURN TO SENDER'); base += 150; }
    if (how === 'execute') { labels.push('EXECUTION'); base += 200; }
    if (how === 'iaido') { labels.push('IAIDO'); base += 120; }
    if (how === 'slash' && this.momentum() > 0.5) { labels.push('VELOCITY KILL'); base += 120; }
    if (P.wall) { labels.push('WALLRUN'); base += 100; } else if (!P.grounded) { labels.push('AIRBORNE'); base += 60; }
    if (P.sliding) { labels.push('SLIDE'); base += 60; }
    if (P.grapple) { labels.push('HOOKED'); base += 80; }
    if (this.mode === 'arena') this.addScore(base, `${e.cfg.name} KILL` + (labels.length ? ' · ' + labels.join(' · ') : ''));
    this.addStyle(16 + labels.length * 6);
    this.audio.kill(this.rankIdx() + 1);
    this.shake(0.18);
    const pieces = e.shatter(dir ? dir.clone().setY(0).normalize() : null, how === 'slash' || how === 'execute' || how === 'iaido');
    this.debris.push(...pieces);
    const c = e.chest.clone();
    this.fx.sparks.emit(c, 55, { color: [1, 0.08, 0.16], speed: 12, life: 0.8, size: 0.16 });
    this.fx.sparks.emit(c, 18, { color: [1, 0.7, 0.4], speed: 18, life: 0.35, size: 0.08 });
    this.fx.bursts.ring(c, null, e.cfg.accent, 3, 0.4);
    this.fx.bursts.flash(c, 0xff2040, 0.45, 0.1);
    if (e.type === 'drone') this.droneExplode(e);
    this.hp = Math.min(100, this.hp + (how === 'slash' || how === 'iaido' ? 10 : 5));
    if (this.mode === 'arena' && this.enemies.filter(x => x.alive).length === 0 && this.toSpawn.length === 0) { this.slowmo(1.0); this.hud.popup('WAVE CLEAR', '#ffc23a'); }
  }

  droneExplode(e) {
    this.audio.droneExplode();
    this.fx.sparks.emit(e.pos, 50, { color: [1, 0.5, 0.2], speed: 14, life: 0.6, size: 0.18 });
    this.fx.bursts.flash(e.pos, 0xff6020, 1.6, 0.18);
    for (const o of this.enemies) if (o !== e && o.alive && o.pos.distanceTo(e.pos) < 5) { if (o.damage(60, { from: e.pos, inst: 40 })) this.onKill(o, 'gun', null); }
  }

  onEnemyBroken(e) {
    this.audio.broken();
    this.fx.sparks.emit(e.chest, 30, { color: [1, 0.8, 0.2], speed: 8, life: 0.6, size: 0.12 });
    this.hud.popup('POSTURE BROKEN', '#ffc23a');
    this.hud.hint('지금 베면 처형!', 1500);
    this.addStyle(8);
  }

  // ======================= enemy context =======================
  enemyCtx() {
    if (this._ectx) { this._ectx.player = this.player; this._ectx.enemies = this.enemies; return this._ectx; }
    const g = this;
    const ctx = this._ectx = {
      player: this.player, enemies: this.enemies, camera: this.camera,
      los(a, b) { v1.subVectors(b, a); const len = v1.length(); v1.divideScalar(len); return !g.map.col.raycast(a.x, a.y, a.z, v1.x, v1.y, v1.z, len - 0.3, _hit); },
      // attack tokens: only a few enemies may attack at the same time
      canAttack(e, kind) {
        let n = 0;
        for (const o of g.enemies) {
          if (o === e || !o.alive) continue;
          const busy = kind === 'melee' ? (o.state === 'windup' && (o.type === 'blade' || o.type === 'brute')) : (o.state === 'windup' || o.state === 'burst' || o.state === 'aim') && !(o.type === 'blade' || o.type === 'brute');
          if (busy) n++;
        }
        return n < (kind === 'melee' ? g.D.melee : g.D.ranged);
      },
      get windMul() { return g.D.windup; },
      get guards() { return g.D.guards; },
      telegraph(e, parryable) { g.audio.telegraph(parryable); g.once(parryable ? 'yellow' : 'red', parryable ? '노란 깜빡임 = 패링 타이밍 (F)' : '빨간 공격은 패링 불가 — 대시(Shift)로 피하기'); },
      enemyDash(e) { g.fx.sparks.emit(e.chest, 12, { color: [0.3, 0.9, 1], speed: 5, life: 0.3, gravity: 0, size: 0.1 }); g.audio._noise(0.2, { type: 'bandpass', freq: 600, sweepTo: 1800, gain: 0.12 }); },
      relocate(e) {
        const spots = g.map.spawnHigh.filter(p => p.distanceTo(g.player.pos) > 40);
        if (!spots.length) return;
        g.fx.sparks.emit(e.chest, 30, { color: [0.7, 0.3, 1], speed: 6, life: 0.5, gravity: -4 });
        e.pos.copy(spots[(Math.random() * spots.length) | 0]); e.vel.set(0, 0, 0);
        g.fx.sparks.emit(v1.copy(e.pos).setY(e.pos.y + 1), 30, { color: [0.7, 0.3, 1], speed: 6, life: 0.5, gravity: -4 });
      },
      enemyShoot(e, o) {
        const m = new THREE.Vector3();
        if (e.gunTip) e.gunTip.getWorldPosition(m); else m.copy(e.chest);
        const P = g.player;
        const target = o.at ? o.at.clone() : P.eye.clone().setY(P.eye.y - 0.35);
        const dist = m.distanceTo(target);
        if (!o.at) target.addScaledVector(P.vel, dist / (o.speed * g.D.projSpeed) * 0.5 * g.D.dmg);
        const dir = target.sub(m).normalize();
        const spr = (o.spread || 0) + Math.min(0.03, P.speed * 0.001);
        if (spr > 0) { dir.x += (Math.random() - 0.5) * spr; dir.y += (Math.random() - 0.5) * spr; dir.z += (Math.random() - 0.5) * spr; dir.normalize(); }
        g.spawnProjectile(m, dir.multiplyScalar(o.speed * g.D.projSpeed), e, o.dmg * g.waveDmg(), o.sniper ? 'sniper' : o.small ? 'small' : 'enemy');
        if (o.sniper) g.audio.sniperShot(dist); else g.audio.enemyShot(dist);
        g.fx.bursts.flash(m, o.sniper ? 0xb050ff : 0xff3050, o.sniper ? 0.6 : 0.3, 0.06);
      },
      enemyStrike(e, o) {
        const P = g.player;
        const d = v1.subVectors(P.pos, e.pos); const dy = Math.abs(d.y); d.y = 0;
        const dist = d.length();
        const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, e.yaw + Math.PI, 0, 'YXZ'));
        g.fx.arcs.add(e.chest.clone().addScaledVector(d.clone().normalize(), 0.7), q, o.unblockable ? 0xff2020 : e.cfg.accent, o.reach * 0.75, 0.2, Math.random() < 0.5, 0.15);
        g.audio.slash(o.unblockable ? 1.2 : 0.7);
        if (dist > o.reach + 0.4 || dy > 2.4) return;
        if (e.facingDot(P.pos) < 0.15) return;
        if (P.invuln) { g.hud.popup('DODGE', '#7dfcff'); g.addStyle(6); return; }
        const dmg = o.dmg * g.waveDmg();
        const mid = e.chest.clone().lerp(P.eye, 0.5);
        const facing = v2.subVectors(e.pos, P.pos).setY(0).normalize().dot(P.flatFwd(v3)) > 0.15;
        if (!o.unblockable && g.parryT >= 0 && facing) {
          e.stagger = 0.9; e.addInst(o.inst * 2.5 + 25); e.cancelAttack();
          g.audio.clash(); g.parrySuccess('melee', mid);
        } else if (!o.unblockable && g.guarding && facing) {
          g.audio.block(); g.hud.popup('BLOCK', '#ffffff'); g.hurt(dmg * 0.15, e.pos, o.inst * 0.5); e.addInst(o.inst * 0.5);
          g.fx.sparks.emit(mid, 20, { color: [1, 0.9, 0.6], speed: 8, life: 0.3, size: 0.1 });
          P.vel.addScaledVector(d.normalize(), 3);
        } else {
          if (o.unblockable && g.parryT >= 0) g.hud.popup('UNBLOCKABLE', '#ff3048');
          g.hurt(dmg, e.pos, o.inst * 0.4);
          P.vel.addScaledVector(d.normalize(), o.unblockable ? 14 : 7); P.vel.y += 3;
        }
      },
    };
    return ctx;
  }
  once(key, text) {
    this._seen = this._seen || new Set();
    if (this._seen.has(key)) return; this._seen.add(key);
    this.hud.hint(text, 3200);
  }
  waveDmg() { return this.D.dmg * (this.mode === 'arena' ? Math.min(1.35, 0.8 + this.wave * 0.05) : 1); }

  tickDummy(e, dt, ctx) {
    // training dummy: stands still, attacks slowly when you're close so you can practise parries
    e.anim += dt; e.flashT -= dt; e.stagger = Math.max(0, e.stagger - dt); e.atkCd -= dt;
    if (e.broken > 0) { e.broken -= dt; if (e.broken <= 0) { e.inst = 0; e.state = 'idle'; } }
    else if ((e.instDecayHold -= dt) <= 0) e.inst = Math.max(0, e.inst - e.instMax * 0.1 * dt);
    e.hp = Math.min(e.maxHp, e.hp + dt * 20);
    const P = this.player; const d = v1.subVectors(P.pos, e.pos); const dist = Math.hypot(d.x, d.z);
    const target = Math.atan2(d.x, d.z); let dd = target - e.yaw; while (dd > Math.PI) dd -= Math.PI * 2; while (dd < -Math.PI) dd += Math.PI * 2;
    if (e.broken <= 0) e.yaw += dd * Math.min(1, dt * 5);
    if (e.state === 'windup') { e.windup -= dt; if (e.windup <= 0) { ctx.enemyStrike(e, { dmg: 0, reach: 3.1, inst: 0 }); e.state = 'recover'; e.stateT = 0.4; } }
    else if (e.state === 'recover') { e.stateT -= dt; if (e.stateT <= 0) { e.state = 'idle'; e.atkCd = 1.6; } }
    else if (e.broken <= 0 && dist < 3.4 && e.atkCd <= 0 && this.tutIndex() >= Game.TUTORIAL.findIndex(t => t.k === 'parry')) { e.state = 'windup'; e.windup = 0.75; e.parryable = true; this.audio.telegraph(true); }
    e.vel.set(0, 0, 0); e.updateAnchors(); e.animate(dt, ctx);
  }

  hookEnemy(pos, dir, step) {
    let best = null;
    for (const e of this.enemies) {
      if (!e.alive) continue;
      const r = e.rayHit(pos.x, pos.y, pos.z, dir.x, dir.y, dir.z, step);
      if (r && (!best || r.t < best.t)) best = { t: r.t, point: e.chest.clone(), enemy: e };
      // generous aim assist near the hook head
      if (!best) { v1.subVectors(e.chest, pos); const along = v1.dot(dir); if (along > 0 && along < step && v1.addScaledVector(dir, -along).length() < 1.4) best = { t: along, point: e.chest.clone(), enemy: e }; }
    }
    return best;
  }

  // ======================= arena waves =======================
  buildWave(n) {
    const fixed = { 1: ['blade', 'blade', 'gunner'], 2: ['blade', 'gunner', 'blade', 'gunner'], 3: ['blade', 'blade', 'gunner', 'drone', 'drone'], 4: ['blade', 'gunner', 'gunner', 'sniper', 'drone', 'blade'], 5: ['brute', 'blade', 'blade', 'gunner', 'drone', 'sniper'] };
    if (fixed[n]) return fixed[n];
    const count = Math.round(5 + n * 1.5);
    const list = [];
    for (let i = 0; i < count; i++) {
      const r = Math.random();
      list.push(r < 0.34 ? 'blade' : r < 0.58 ? 'gunner' : r < 0.74 ? 'drone' : r < 0.86 ? 'sniper' : 'brute');
    }
    if (n % 5 === 0) list.push('brute', 'brute');
    return list;
  }
  spawnEnemy(type) {
    const P = this.player;
    let pool = type === 'sniper' ? this.map.spawnHigh : this.map.spawnGround;
    pool = pool.filter(p => p.distanceTo(P.pos) > (type === 'sniper' ? 35 : 26) && p.distanceTo(P.pos) < 110);
    if (!pool.length) pool = this.map.spawnGround;
    const p = pool[(Math.random() * pool.length) | 0].clone();
    if (type !== 'sniper') { p.x += (Math.random() - 0.5) * 4; p.z += (Math.random() - 0.5) * 4; }
    if (type === 'drone') p.y = 12 + Math.random() * 6;
    const e = new Enemy(this, type, p);
    e.hp = e.maxHp = Math.round(e.maxHp * this.D.enemyHp);
    this.enemies.push(e);
    this.fx.sparks.emit(v1.copy(p).setY(p.y + 1), 40, { color: [1, 0.15, 0.3], speed: 6, life: 0.7, gravity: -6, size: 0.12 });
    this.fx.bursts.ring(v1.copy(p).setY(p.y + 0.05), null, e.cfg.accent, 3, 0.6);
  }
  tickWaves(dt) {
    if (this.waveState === 'break') {
      this.waveT -= dt;
      document.getElementById('subTxt').textContent = this.wave === 0 ? '' : `다음 웨이브까지 ${Math.ceil(this.waveT)}`;
      if (this.waveT <= 0) {
        this.wave++; this.toSpawn = this.buildWave(this.wave); this.waveState = 'fight'; this.spawnT = 0;
        { const keep = Math.max(2, Math.round(this.toSpawn.length * this.D.count)); this.toSpawn = this.toSpawn.slice(0, keep); }
        const special = this.wave === 3 ? '드론 접근' : this.wave === 4 ? '저격수 주의 — 보라색 레이저' : this.wave % 5 === 0 ? '브루트 — 빨간 공격은 대시로 회피' : `${this.toSpawn.length}명 접근 중`;
        this.hud.banner('WAVE ' + this.wave, special);
        this.audio.wave();
        document.getElementById('modeTxt').textContent = 'WAVE ' + this.wave;
      }
    } else {
      this.spawnT -= dt;
      const alive = this.enemies.length;
      if (this.toSpawn.length && this.spawnT <= 0 && alive < Math.round((4 + Math.min(5, this.wave)) * this.D.count + 1)) { this.spawnEnemy(this.toSpawn.shift()); this.spawnT = 0.9; }
      if (!this.toSpawn.length && alive === 0) {
        this.waveState = 'break'; this.waveT = 5;
        this.hp = Math.min(100, this.hp + 40);
        this.addScore(300 + this.wave * 120, `WAVE ${this.wave} CLEAR`);
      }
      document.getElementById('subTxt').textContent = `남은 적 ${alive + this.toSpawn.length}`;
    }
  }

  // ======================= time trial =======================
  tickTrial(dt) {
    const P = this.player;
    if (!this.trialRunning && (P.hSpeed > 1 || !P.grounded)) this.trialRunning = true;
    if (this.trialRunning && this.cpIndex < this.map.checkpoints.length) this.trialTime += dt;
    const cp = this.map.checkpoints[this.cpIndex];
    if (!cp) return;
    const c = v1.set(P.pos.x, P.pos.y + 1, P.pos.z);
    if (c.distanceTo(cp) < 3.8) {
      this.splits.push(this.trialTime);
      const ring = this.trialRings[this.cpIndex];
      this.fx.bursts.ring(cp.clone(), ring ? new THREE.Vector3(0, 0, 1).applyQuaternion(ring.quaternion) : null, 0x30e0ff, 4, 0.5);
      this.fx.sparks.emit(cp, 30, { color: [0.3, 0.9, 1], speed: 8, life: 0.5, size: 0.12 });
      this.cpIndex++;
      const done = this.cpIndex >= this.map.checkpoints.length;
      this.audio.checkpoint(done);
      if (done) this.finishTrial();
      else this.hud.popup(`${this.cpIndex} / ${this.map.checkpoints.length}   ${fmtTime(this.trialTime)}`, '#7dfcff');
      this.updateTrialRings();
    }
  }
  restartTrial() {
    this.player.reset(this.map.trialStart.pos, this.map.trialStart.yaw);
    this.cpIndex = 0; this.trialTime = 0; this.trialRunning = false; this.splits = [];
    this.updateTrialRings();
    this.hud.popup('RESTART', '#7dfcff');
  }
  finishTrial() {
    const t = this.trialTime;
    const rec = this.records;
    const best = !rec.trial || t < rec.trial;
    if (best) { rec.trial = t; this.saveRecords && this.saveRecords(); }
    this.hud.banner(fmtTime(t), best ? '신기록!' : `최고 기록 ${fmtTime(rec.trial)}`);
    this.trialRunning = false;
    setTimeout(() => { if (this.mode === 'trial' && this.state === 'play') this.showEnd('FINISH', [['기록', fmtTime(t)], ['최고 기록', fmtTime(rec.trial)], ['최고 속도', Math.round(this.maxSpeed * 3.6) + ' KM/H'], ['체크포인트', `${this.map.checkpoints.length} / ${this.map.checkpoints.length}`]]); }, 2200);
  }

  tickTraining(dt) {
    // respawn dummies
    if (this.enemies.length < 3 && !this._respawnT) this._respawnT = 2.5;
    if (this._respawnT) {
      this._respawnT -= dt;
      if (this._respawnT <= 0) {
        this._respawnT = 0;
        for (const [x, y, z] of Game.DUMMY_SPOTS) if (!this.enemies.some(e => Math.hypot(e.pos.x - x, e.pos.z - z) < 1)) { const e = new Enemy(this, 'blade', new THREE.Vector3(x, y, z)); e.dummy = true; this.enemies.push(e); }
      }
    }
  }

  die() {
    this.state = 'dead';
    this.input.unlock();
    const rec = this.records;
    if (this.score > rec.score) rec.score = this.score;
    rec.wave = Math.max(rec.wave, this.wave); rec.speed = Math.max(rec.speed, this.maxSpeed);
    this.saveRecords && this.saveRecords();
    setTimeout(() => this.showEnd('FLATLINED', [['점수', this.score.toLocaleString()], ['도달 웨이브', this.wave], ['처치', this.kills], ['처형 / 패링', `${this.execs} / ${this.parries}`], ['최고 속도', Math.round(this.maxSpeed * 3.6) + ' KM/H'], ['최고 랭크', RANKS[this.bestRank].r], ['최고 점수', rec.score.toLocaleString()], ['최고 웨이브', rec.wave]]), 1000);
  }
  showEnd(title, stats) { this.onEnd && this.onEnd(title, stats); }

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

  // ======================= render / camera rig =======================
  render(rawDt) {
    const P = this.player, S = this.S, cs = this.camState;
    const alpha = this.state === 'play' ? THREE.MathUtils.clamp(this.acc / TICK, 0, 1) : 1;
    const playingish = this.state === 'play' || this.state === 'paused';
    const sp01 = THREE.MathUtils.clamp((P.speed - 11) / 35, 0, 1);
    if (playingish || this.state === 'dead') {
      // interpolated eye
      const ex = P.prevPos.x + (P.pos.x - P.prevPos.x) * alpha;
      const ey = P.prevPos.y + (P.pos.y - P.prevPos.y) * alpha + P.prevEyeH + (P.eyeH - P.prevEyeH) * alpha;
      const ez = P.prevPos.z + (P.pos.z - P.prevPos.z) * alpha;
      // landing dip spring
      cs.dipV += (-cs.dip * 120 - cs.dipV * 14) * rawDt; cs.dip += cs.dipV * rawDt;
      cs.dip = THREE.MathUtils.clamp(cs.dip, -0.45, 0.2);
      // head bob
      if (P.grounded && !P.sliding && P.hSpeed > 1) cs.bob += rawDt * (4 + P.hSpeed * 0.5);
      const bobY = (P.grounded && !P.sliding ? Math.abs(Math.sin(cs.bob)) * 0.035 * Math.min(1, P.hSpeed / 11) : 0) * S.bob;
      this.camera.position.set(ex, ey + cs.dip - bobY, ez);
      // tilt
      let tilt = 0;
      if (P.wall && !P.wall.climb) tilt = -(P.wall.n.dot(P.flatRight(v1))) * 0.21 * S.tilt;
      tilt += -this.lastRight * 0.018 * S.tilt;
      if (P.sliding) tilt += 0.06 * S.tilt;
      if (P.grapple) tilt += -this.lastRight * 0.04 * S.tilt;
      cs.tilt += (tilt - cs.tilt) * Math.min(1, rawDt * 9);
      // shake
      cs.trauma = Math.max(0, cs.trauma - rawDt * 1.7);
      const sh = cs.trauma * cs.trauma * S.shake, tt = this.clockT * 42;
      this.camera.rotation.set(
        P.pitch + (Math.sin(tt * 1.1) * 0.6 + Math.sin(tt * 2.3) * 0.4) * 0.03 * sh,
        P.yaw + (Math.sin(tt * 0.9 + 1) * 0.6 + Math.sin(tt * 1.9) * 0.4) * 0.03 * sh,
        cs.tilt + Math.sin(tt * 1.3 + 2) * 0.04 * sh);
      // FOV
      cs.kick = Math.max(0, cs.kick - rawDt * 2.6);
      const fov = S.fov + S.fovFx * sp01 + cs.kick * 7 - (this.slowmoT > 0 ? 7 : 0) - this.charge * 6;
      cs.fov += (fov - cs.fov) * Math.min(1, rawDt * 7);
      this.camera.fov = cs.fov; this.camera.updateProjectionMatrix();
    }
    if (this.state === 'menu') {
      const a = this.clockT * 0.05;
      this.camera.position.set(Math.sin(a) * 62, 30 + Math.sin(this.clockT * 0.17) * 6, Math.cos(a) * 62);
      this.camera.lookAt(0, 20, 0);
      this.camera.fov = 70; this.camera.updateProjectionMatrix();
    }
    this.lastRight = (this.input.is('right') ? 1 : 0) - (this.input.is('left') ? 1 : 0);

    // grapple rope / hook
    this.updateRope(rawDt);
    this.updateSniperLasers();

    // viewmodel
    this.vm.root.visible = playingish;
    const wallSide = P.wall && !P.wall.climb ? -Math.sign(P.wall.n.dot(P.flatRight(v1))) : 0;
    this.vm.update(rawDt * (this.state === 'play' ? Math.max(this.timeScale, 0.4) : 1), {
      hSpeed: P.hSpeed, vy: P.vel.y, grounded: P.grounded, sliding: P.sliding, landDip: -Math.min(0, cs.dip) * 2,
      mouseDX: this.mouseDX || 0, mouseDY: this.mouseDY || 0, wallSide, momentum: this.momentum(),
      grappleReady: P.grappleCharges > 0, bobScale: S.bob,
    });

    // world fx
    const fxDt = this.state === 'paused' ? 0 : this.state === 'play' ? rawDt * this.timeScale : rawDt * 0.3;
    this.map.update(this.clockT, fxDt);
    this.atmo.update(this.clockT, fxDt, this.camera.position, playingish ? P.vel : null);
    for (const k of ['sparks', 'tracers', 'bursts', 'arcs']) this.fx[k].update(fxDt);
    this.fx.streaks.update(rawDt, this.camera.position, P.vel, playingish ? THREE.MathUtils.clamp((P.speed - 18) / 25, 0, 1) : 0);
    this.audio.update(this.state === 'play' ? P.speed : 0, this.state === 'play' && !!P.wall, rawDt, this.mode === 'arena' ? this.rankIdx() / 6 : Math.min(1, P.speed / 40));

    // post
    this.damageFx = Math.max(0, this.damageFx - rawDt * 1.4);
    this.flashFx = Math.max(0, this.flashFx - rawDt * 3);
    const u = this.post.uniforms;
    u.speed.value += ((playingish ? sp01 : 0) - u.speed.value) * Math.min(1, rawDt * 5);
    u.time.value = this.clockT; u.damage.value = this.damageFx;
    u.lowhp.value = playingish && this.mode === 'arena' ? Math.max(0, 0.4 - this.hp / 100) / 0.4 : 0;
    u.flash.value = this.flashFx; u.blurAmt.value = S.blur;
    u.slowmo.value += ((this.slowmoT > 0 ? 1 : 0) - u.slowmo.value) * Math.min(1, rawDt * 8);

    if (playingish) { this.updateCrosshair(); this.hud.update(rawDt, this); }
    this.composer.render();
  }

  updateCrosshair() {
    // red = an enemy is inside slash-lunge range, cyan ring = grapple target in reach
    const P = this.player, eye = this.camera.position, f = this.lookDir(v2);
    let lunge = false;
    for (const e of this.enemies) {
      if (!e.alive) continue; v1.subVectors(e.chest, eye); const d = v1.length();
      if (d < 3.8 + this.momentum() * 1.8 || (d < 8.5 && v1.normalize().dot(f) > 0.93)) { v1.subVectors(e.chest, eye).normalize(); if (v1.dot(f) > 0.6) { lunge = true; break; } }
    }
    let grap = false;
    if (P.grappleCharges > 0 && !P.grapple && !P.hook) {
      const h = this.map.col.raycast(eye.x, eye.y, eye.z, f.x, f.y, f.z, T.grappleRange, _hit, SURF.GRAPPLE);
      grap = !!h;
      if (!grap) for (const e of this.enemies) { if (e.alive && e.rayHit(eye.x, eye.y, eye.z, f.x, f.y, f.z, T.grappleRange)) { grap = true; break; } }
    }
    const el = document.getElementById('cross');
    if (this._xl !== lunge) { this._xl = lunge; el.classList.toggle('lunge', lunge); }
    if (this._xg !== grap) { this._xg = grap; el.classList.toggle('grap', grap); }
  }

  updateRope(dt) {
    const P = this.player;
    const anchor = P.grapple ? P.grapple.point : P.hook ? P.hook.pos : null;
    if (!anchor || this.state === 'menu') { this.rope.visible = false; this.hookHead.visible = false; return; }
    const hand = this.vm.toWorld(this.vm.hookTip, this.camera, v1);
    const pos = this.ropeGeo.attributes.position;
    const N = this.ropeN;
    const wob = P.grapple ? Math.max(0, 0.6 - P.grapple.t) * 0.8 : 0.3;
    const len = hand.distanceTo(anchor);
    const side = v2.subVectors(anchor, hand).cross(new THREE.Vector3(0, 1, 0)).normalize();
    for (let i = 0; i < N; i++) {
      const t = i / (N - 1);
      const w = Math.sin(t * Math.PI) * Math.sin(t * 14 - this.clockT * 30) * wob * Math.min(1, len / 10);
      pos.setXYZ(i, hand.x + (anchor.x - hand.x) * t + side.x * w, hand.y + (anchor.y - hand.y) * t + w * 0.5 - Math.sin(t * Math.PI) * (P.hook ? 0 : 0.0), hand.z + (anchor.z - hand.z) * t + side.z * w);
    }
    pos.needsUpdate = true;
    this.rope.visible = true; this.hookHead.visible = true; this.hookHead.position.copy(anchor);
    this.hookHead.rotation.y += dt * 10;
  }

  updateSniperLasers() {
    if (!this._lasers) this._lasers = new Map();
    const live = new Set();
    for (const e of this.enemies) {
      if (e.type !== 'sniper' || !e.alive || e.state !== 'aim' || !e.aimPoint) continue;
      live.add(e);
      let l = this._lasers.get(e);
      if (!l) { this.once('sniper', '보라색 레이저 = 저격 — 깜빡일 때 F로 반사하거나 엄폐'); l = new THREE.Mesh(this.laserGeo, new THREE.MeshBasicMaterial({ color: new THREE.Color(3, 0.6, 5), transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false })); this.scene.add(l); this._lasers.set(e, l); this.audio.sniperCharge(e.pos.distanceTo(this.player.pos)); }
      const m = new THREE.Vector3(); e.gunTip.getWorldPosition(m);
      const d = m.distanceTo(e.aimPoint);
      l.position.copy(m); l.lookAt(e.aimPoint); const w = 1 + Math.max(0, 1.4 - e.windup) * 1.5; l.scale.set(w, w, d);
      l.material.opacity = e.windup < 0.25 ? (Math.sin(this.clockT * 60) > 0 ? 1 : 0.3) : 0.35;
    }
    for (const [e, l] of this._lasers) if (!live.has(e)) { this.scene.remove(l); this._lasers.delete(e); }
  }
}

function segPointDist(a, b, p) {
  const abx = b.x - a.x, aby = b.y - a.y, abz = b.z - a.z;
  const l2 = abx * abx + aby * aby + abz * abz;
  let t = l2 > 0 ? ((p.x - a.x) * abx + (p.y - a.y) * aby + (p.z - a.z) * abz) / l2 : 0;
  t = Math.max(0, Math.min(1, t));
  const x = a.x + abx * t - p.x, y = a.y + aby * t - p.y, z = a.z + abz * t - p.z;
  return Math.sqrt(x * x + y * y + z * z);
}
