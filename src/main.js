import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { World } from './world.js';
import { Player, TUNING } from './player.js';
import { Enemy, raySphere } from './enemies.js';
import { ViewModel } from './viewmodel.js';
import { Sparks, Tracers, Bursts, SlashArcs, SpeedShader } from './effects.js';
import { Audio } from './audio.js';

const $ = id => document.getElementById(id);

// ======================= SETTINGS =======================
const ACTIONS = [
  ['forward', '앞으로'], ['back', '뒤로'], ['left', '왼쪽'], ['right', '오른쪽'],
  ['jump', '점프 / 벽점프'], ['crouch', '슬라이드 / 웅크리기'], ['dash', '대시'],
  ['slash', '카타나 베기'], ['shoot', '리볼버 사격'], ['parry', '패링'], ['grapple', '그래플'], ['reload', '재장전'],
];
const DEFAULT_BINDS = {
  forward: ['KeyW'], back: ['KeyS'], left: ['KeyA'], right: ['KeyD'],
  jump: ['Space'], crouch: ['KeyC', 'ControlLeft'], dash: ['ShiftLeft'],
  slash: ['Mouse0'], shoot: ['Mouse2'], parry: ['KeyF', 'Mouse3'], grapple: ['KeyE', 'KeyQ'], reload: ['KeyR'],
};
const DEFAULTS = { sens: 1.0, fov: 100, fovFx: 18, shake: 1, sfx: 0.8, music: 0.45, quality: 'high', fps: 0, full: 1, binds: DEFAULT_BINDS };
function loadSettings() {
  try { const s = JSON.parse(localStorage.getItem('redshift_settings') || '{}'); return { ...DEFAULTS, ...s, binds: { ...DEFAULT_BINDS, ...(s.binds || {}) } }; }
  catch { return { ...DEFAULTS }; }
}
function saveSettings() { try { localStorage.setItem('redshift_settings', JSON.stringify(S)); } catch { } }
const S = loadSettings();
let best = { score: 0, wave: 0, speed: 0 };
try { best = { ...best, ...JSON.parse(localStorage.getItem('redshift_best') || '{}') }; } catch { }

const QUALITY = {
  low: { pr: 0.85, shadows: false, shadowSize: 1024, bloom: true, msaa: 0, particles: 300, lights: false },
  high: { pr: 1.25, shadows: true, shadowSize: 2048, bloom: true, msaa: 4, particles: 1200, lights: true },
  ultra: { pr: 2.0, shadows: true, shadowSize: 4096, bloom: true, msaa: 4, particles: 2500, lights: true },
};
const Q = QUALITY[S.quality] || QUALITY.high;

// ======================= RENDERER =======================
const canvas = $('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', stencil: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, Q.pr));
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.shadowMap.enabled = Q.shadows;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(S.fov, innerWidth / innerHeight, 0.05, 1500);
camera.rotation.order = 'YXZ';
scene.add(camera);

// simple env map so metals reflect neon
{
  const pm = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();
  const g = new THREE.SphereGeometry(10, 32, 16);
  const m = new THREE.ShaderMaterial({ side: THREE.BackSide, vertexShader: `varying vec3 p; void main(){p=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`, fragmentShader: `varying vec3 p; void main(){ vec3 c = mix(vec3(0.6,0.05,0.12), vec3(0.02,0.02,0.06), smoothstep(-0.1,0.5,p.y)); c += vec3(0.1,0.6,0.8)*smoothstep(0.85,1.0,p.x)*0.6; c += vec3(1.0,0.2,0.3)*smoothstep(0.9,1.0,-p.z)*0.8; gl_FragColor=vec4(c,1.);}` });
  envScene.add(new THREE.Mesh(g, m));
  scene.environment = pm.fromScene(envScene, 0.02).texture;
  scene.environmentIntensity = 0.6;
}

const world = new World(scene, Q);
const vm = new ViewModel();
vm.scene.environment = scene.environment;

const rt = new THREE.WebGLRenderTarget(innerWidth, innerHeight, { type: THREE.HalfFloatType, samples: Q.msaa });
const composer = new EffectComposer(renderer, rt);
composer.setPixelRatio(renderer.getPixelRatio());
const mainPass = new RenderPass(scene, camera);
composer.addPass(mainPass);
const vmPass = new RenderPass(vm.scene, vm.camera);
vmPass.clear = false; vmPass.clearDepth = true;
composer.addPass(vmPass);
const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.85, 0.55, 0.82);
bloom.enabled = Q.bloom;
composer.addPass(bloom);
const speedPass = new ShaderPass(SpeedShader);
composer.addPass(speedPass);
composer.addPass(new OutputPass());

function resize() {
  renderer.setSize(innerWidth, innerHeight);
  composer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  vm.resize(innerWidth / innerHeight);
  speedPass.uniforms.aspect.value = innerWidth / innerHeight;
  sparks.points.material.uniforms.scale.value = innerHeight * renderer.getPixelRatio() * 0.32;
}

// ======================= FX / AUDIO =======================
const sparks = new Sparks(scene, 4000);
const tracers = new Tracers(scene);
const bursts = new Bursts(scene);
const arcs = new SlashArcs(scene);
const audio = new Audio();
resize();
addEventListener('resize', resize);

// grapple rope
const ropeGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
const rope = new THREE.Line(ropeGeo, new THREE.LineBasicMaterial({ color: 0x30e0ff }));
rope.frustumCulled = false; rope.visible = false; scene.add(rope);
const ropeTip = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 8), new THREE.MeshBasicMaterial({ color: 0x80f0ff }));
ropeTip.visible = false; scene.add(ropeTip);

// ======================= INPUT =======================
const down = new Set();
const pressed = new Set();
let mouseDX = 0, mouseDY = 0;
let locked = false;
let listening = null; // keybind capture

function codeFor(e) { return e.type.startsWith('mouse') ? 'Mouse' + e.button : e.code; }
function isDown(a) { return S.binds[a].some(c => down.has(c)); }
function wasPressed(a) { return S.binds[a].some(c => pressed.has(c)); }

addEventListener('keydown', e => {
  if (listening) { e.preventDefault(); finishBind(e.code); return; }
  if (e.code === 'Escape') { if (state === 'play') { if (document.pointerLockElement) document.exitPointerLock(); pause(); } return; }
  if (state === 'play' && locked) e.preventDefault();
  if (!down.has(e.code)) pressed.add(e.code);
  down.add(e.code);
});
addEventListener('keyup', e => { down.delete(e.code); });
canvas.addEventListener('mousedown', e => {
  if ((state === 'play' || state === 'paused') && !locked && $('pause').classList.contains('hidden')) { lockPointer(); return; }
  const c = codeFor(e); if (!down.has(c)) pressed.add(c); down.add(c);
});
addEventListener('mousedown', e => { if (listening && e.target.id !== listening.btnId) { e.preventDefault(); finishBind('Mouse' + e.button); } });
addEventListener('mouseup', e => down.delete('Mouse' + e.button));
addEventListener('contextmenu', e => e.preventDefault());
addEventListener('mousemove', e => { if (locked) { mouseDX += THREE.MathUtils.clamp(e.movementX, -400, 400); mouseDY += THREE.MathUtils.clamp(e.movementY, -400, 400); } });
addEventListener('blur', () => down.clear());
addEventListener('beforeunload', e => { if (state === 'play') { e.preventDefault(); e.returnValue = ''; } });

function lockPointer() {
  const p = canvas.requestPointerLock({ unadjustedMovement: true });
  if (p && p.catch) p.catch(() => canvas.requestPointerLock());
}
document.addEventListener('pointerlockchange', () => {
  locked = document.pointerLockElement === canvas;
  if (locked) { $('clickTo').classList.add('hidden'); if (state === 'paused') resume(); }
  else if (state === 'play') pause();
});

// ======================= GAME STATE =======================
let state = 'menu'; // menu | play | paused | dead
let mode = 'arena';
let player, enemies = [], projectiles = [], debris = [];
let hp = 100, hpGhost = 100, regenT = 0;
let ammo = 6, reloadT = 0, shootCd = 0, slashCd = 0, parryT = -1, parryCd = 0, pendingSlash = null;
let wave = 0, waveState = 'idle', waveTimer = 0, toSpawn = [], spawnTimer = 0;
let score = 0, kills = 0, maxSpeed = 0, bestRank = 0;
let style = 0, styleDecayHold = 0;
let timeScale = 1, slowmoT = 0, hitstop = 0;
let trauma = 0, fovKick = 0, damageFx = 0, flashFx = 0;
let gameTime = 0;
const RANKS = [
  { r: 'D', n: 'DULL', at: 0 }, { r: 'C', n: 'CUTTING', at: 20 }, { r: 'B', n: 'BRUTAL', at: 40 },
  { r: 'A', n: 'APEX', at: 60 }, { r: 'S', n: 'SAVAGE', at: 80 }, { r: 'SS', n: 'SUPERSONIC', at: 100 }, { r: 'R', n: 'REDLINE', at: 125 },
];
function rankIdx() { let i = 0; RANKS.forEach((r, k) => { if (style >= r.at) i = k; }); return i; }

const events = {
  jump: (air, wall) => { audio.jump(); if (air) { sparks.emit(player.pos.clone().add(new THREE.Vector3(0, 0.2, 0)), 14, { color: [0.3, 0.9, 1], speed: 5, life: 0.35, gravity: 2 }); bursts.ring(player.pos.clone().add(new THREE.Vector3(0, 0.1, 0)), null, 0x30e0ff, 2.2, 0.3); } if (wall) { addStyle(3); trauma += 0.08; } },
  land: (impact) => { audio.land(impact > 15); if (impact > 15) { trauma += Math.min(0.4, impact * 0.012); sparks.emit(player.pos.clone().add(new THREE.Vector3(0, 0.1, 0)), 20, { color: [1, 0.5, 0.4], speed: 7, life: 0.4 }); } },
  dash: dir => { audio.dash(); fovKick = 1; trauma += 0.12; addStyle(1.5); sparks.emit(player.pos.clone().add(new THREE.Vector3(0, 1, 0)), 18, { color: [0.3, 0.9, 1], speed: 6, dir: dir.clone().negate(), spread: 0.6, life: 0.3, gravity: 0 }); },
  slide: () => { audio.slideStart(); },
  step: () => audio.step(),
  wallrunStart: () => { addStyle(2); },
  grapple: () => audio.grapple(),
  jumpPad: () => { audio.dash(); fovKick = 0.8; },
  mantle: () => { },
};

function newPlayer() {
  player = new Player(world, events);
  player.reset(new THREE.Vector3(0, 0.1, 30), 0);
}
newPlayer();
camera.position.set(0, 1.7, 30);

// ======================= UI =======================
function show(id) { ['menu', 'pause', 'settings', 'controls', 'death'].forEach(s => $(s).classList.toggle('hidden', s !== id)); }
let returnTo = 'menu';

document.querySelectorAll('[data-act]').forEach(b => b.addEventListener('click', e => {
  audio.init(); audio.ui();
  const a = b.dataset.act;
  if (a === 'arena' || a === 'freerun') { mode = a; startGame(); }
  else if (a === 'settings') { returnTo = state === 'paused' ? 'pause' : 'menu'; openSettings(); show('settings'); }
  else if (a === 'controls') { returnTo = state === 'paused' ? 'pause' : 'menu'; buildControls(); show('controls'); }
  else if (a === 'back') { show(returnTo); }
  else if (a === 'resume') { resumeRequest(); }
  else if (a === 'restart') { startGame(); }
  else if (a === 'quit') { toMenu(); }
}));

function keyName(c) {
  if (!c) return '—';
  if (c.startsWith('Mouse')) return ['마우스 왼쪽', '마우스 휠', '마우스 오른쪽', '마우스 뒤로', '마우스 앞으로'][+c.slice(5)] || c;
  return c.replace('Key', '').replace('Digit', '').replace('Left', ' L').replace('Right', ' R').replace('Space', 'SPACE').replace('Control', 'CTRL').replace('Shift', 'SHIFT').replace('Alt', 'ALT');
}
function buildControls() {
  $('ctrlGrid').innerHTML = ACTIONS.map(([a, n]) => `<div><span>${n}</span><b>${S.binds[a].map(keyName).join(' / ')}</b></div>`).join('') + `<div><span>일시정지</span><b>ESC</b></div>`;
}
function openSettings() {
  const sl = (id, key, fmt = v => v) => {
    const el = $('s' + id), vl = $('v' + id);
    el.value = S[key]; vl.textContent = fmt(S[key]);
    el.oninput = () => { S[key] = parseFloat(el.value); vl.textContent = fmt(S[key]); saveSettings(); applySettings(); };
  };
  sl('Sens', 'sens', v => (+v).toFixed(2)); sl('Fov', 'fov'); sl('FovFx', 'fovFx'); sl('Shake', 'shake', v => (+v).toFixed(2));
  sl('Sfx', 'sfx', v => Math.round(v * 100)); sl('Music', 'music', v => Math.round(v * 100));
  $('sQuality').value = S.quality;
  $('sQuality').onchange = () => { S.quality = $('sQuality').value; saveSettings(); if (confirm('그래픽 품질을 바꾸려면 새로고침이 필요해요. 지금 새로고침할까요?')) { state = 'menu'; location.reload(); } };
  $('sFps').value = String(S.fps); $('sFps').onchange = () => { S.fps = +$('sFps').value; saveSettings(); applySettings(); };
  $('sFull').value = String(S.full); $('sFull').onchange = () => { S.full = +$('sFull').value; saveSettings(); };
  renderBinds();
}
function renderBinds() {
  $('binds').innerHTML = ACTIONS.map(([a, n]) => `<div class="row"><span>${n}</span><span><button class="key" id="b_${a}_0" data-a="${a}" data-i="0">${keyName(S.binds[a][0])}</button> <button class="key" id="b_${a}_1" data-a="${a}" data-i="1">${keyName(S.binds[a][1])}</button></span></div>`).join('')
    + `<div class="row"><span></span><button class="key" id="resetBinds">기본값으로</button></div>`;
  $('binds').querySelectorAll('.key[data-a]').forEach(b => b.onclick = (e) => {
    e.stopPropagation();
    if (listening) return;
    listening = { a: b.dataset.a, i: +b.dataset.i, btnId: b.id };
    b.textContent = '키를 누르세요…'; b.classList.add('listen');
  });
  $('resetBinds').onclick = () => { S.binds = JSON.parse(JSON.stringify(DEFAULT_BINDS)); saveSettings(); renderBinds(); };
}
function finishBind(code) {
  const { a, i } = listening; listening = null;
  if (code !== 'Escape') {
    // remove this code from other actions to avoid conflicts
    for (const k in S.binds) S.binds[k] = S.binds[k].map(c => c === code ? undefined : c);
    const arr = [...S.binds[a]]; arr[i] = code; S.binds[a] = arr;
    for (const k in S.binds) S.binds[k] = S.binds[k].filter(Boolean);
  }
  saveSettings(); setTimeout(renderBinds, 0);
}
function applySettings() {
  audio.setVolumes(S.sfx, S.music);
  $('fps').classList.toggle('hidden', !S.fps);
}
applySettings();

function updateBestTxt() {
  $('bestTxt').textContent = best.score ? `최고 기록 — ${best.score.toLocaleString()}점 · WAVE ${best.wave} · ${Math.round(best.speed * 3.6)} KM/H` : '';
}

function startGame() {
  audio.init();
  // cleanup
  enemies.forEach(e => e.dispose()); enemies = [];
  projectiles.forEach(p => scene.remove(p.mesh)); projectiles = [];
  debris.forEach(d => scene.remove(d.m)); debris = [];
  newPlayer();
  const sp = new THREE.Vector3(0, 0.1, 30);
  player.reset(sp, 0);
  hp = hpGhost = 100; ammo = 6; reloadT = 0; style = 0; score = 0; kills = 0; maxSpeed = 0; bestRank = 0;
  wave = 0; waveState = 'break'; waveTimer = mode === 'arena' ? 2.5 : 1e9; toSpawn = [];
  timeScale = 1; slowmoT = 0; trauma = 0;
  $('waveTxt').textContent = mode === 'arena' ? 'GET READY' : 'FREE RUN';
  $('enemyTxt').textContent = mode === 'arena' ? '' : '이동기 연습 — ESC로 메뉴';
  $('scoreTxt').style.visibility = mode === 'arena' ? 'visible' : 'hidden';
  $('style').style.visibility = mode === 'arena' ? 'visible' : 'hidden';
  show(null);
  $('hud').classList.remove('hidden');
  state = 'play';
  if (S.full && !document.fullscreenElement) {
    document.documentElement.requestFullscreen?.().then(() => navigator.keyboard?.lock?.(['KeyW', 'KeyA', 'KeyS', 'KeyD', 'KeyC', 'KeyQ', 'KeyE', 'KeyF', 'KeyR', 'Space', 'ShiftLeft', 'ControlLeft']).catch(() => { })).catch(() => { });
  }
  lockPointer();
  if (mode === 'arena') banner('REDSHIFT', '적을 베어라. 멈추지 마라.');
  else banner('FREE RUN', '속도를 느껴라');
}
function pause() {
  if (state !== 'play') return;
  state = 'paused'; show('pause');
}
function resume() { state = 'play'; show(null); }
function resumeRequest() { show(null); $('clickTo').classList.remove('hidden'); state = 'paused'; lockPointer(); }
function toMenu() {
  state = 'menu'; show('menu'); $('hud').classList.add('hidden');
  if (document.pointerLockElement) document.exitPointerLock();
  if (document.fullscreenElement) document.exitFullscreen?.();
  updateBestTxt();
}
function die() {
  state = 'dead';
  if (document.pointerLockElement) document.exitPointerLock();
  if (mode === 'arena') {
    if (score > best.score) best.score = score;
    best.wave = Math.max(best.wave, wave);
  }
  best.speed = Math.max(best.speed, maxSpeed);
  try { localStorage.setItem('redshift_best', JSON.stringify(best)); } catch { }
  $('deathStats').innerHTML = [
    ['점수', score.toLocaleString()], ['도달 웨이브', wave], ['처치', kills],
    ['최고 속도', Math.round(maxSpeed * 3.6) + ' KM/H'], ['최고 랭크', RANKS[bestRank].r], ['최고 점수', best.score.toLocaleString()],
  ].map(([a, b]) => `<div class="stat"><span>${a}</span><b>${b}</b></div>`).join('');
  setTimeout(() => { if (state === 'dead') { show('death'); $('hud').classList.add('hidden'); } }, 900);
}

// banners, feed, popups
let bannerTimer = 0;
function banner(big, small) {
  const b = $('banner'); $('bannerBig').textContent = big; $('bannerSmall').textContent = small || '';
  b.classList.remove('bannerAnim'); void b.offsetWidth; b.classList.add('bannerAnim');
}
function feed(text, pts) {
  const d = document.createElement('div'); d.className = 'feedItem';
  d.innerHTML = text + (pts ? `<b>+${pts}</b>` : '');
  $('feed').prepend(d); setTimeout(() => d.remove(), 2200);
  while ($('feed').children.length > 6) $('feed').lastChild.remove();
}
function popup(text, color) {
  const p = $('popup'); p.textContent = text; p.style.color = color;
  p.animate([{ opacity: 0, transform: 'translateX(-50%) scale(1.6)' }, { opacity: 1, transform: 'translateX(-50%) scale(1)', offset: 0.15 }, { opacity: 1, offset: 0.7 }, { opacity: 0, transform: 'translateX(-50%) translateY(-10px)' }], { duration: 900, easing: 'ease-out' });
}
const dnums = [];
function damageNumber(pos, n, head) {
  const d = document.createElement('div'); d.className = 'dnum' + (head ? ' head' : ''); d.textContent = Math.round(n);
  $('dnums').appendChild(d);
  dnums.push({ el: d, pos: pos.clone(), life: 0.8, vy: 2 + Math.random(), vx: (Math.random() - 0.5) * 1.5 });
}
function hitmarker(head) {
  const h = $('hit'); h.classList.toggle('head', !!head);
  h.animate([{ opacity: 1, transform: 'translate(-50%,-50%) rotate(45deg) scale(1.3)' }, { opacity: 0, transform: 'translate(-50%,-50%) rotate(45deg) scale(1)' }], { duration: 220 });
  audio.hitmarker(head);
}

function addStyle(n) { style = Math.min(150, style + n); styleDecayHold = 1.2; }
function styleMult() { return 1 + rankIdx() * 0.35; }
function addScore(base, label) {
  const pts = Math.round(base * styleMult());
  score += pts;
  if (label) feed(label, pts);
}

// ======================= COMBAT =======================
const _fwd = new THREE.Vector3(), _v = new THREE.Vector3(), _v2 = new THREE.Vector3();

function waveDmg() { return Math.min(1.3, 0.75 + wave * 0.06); }
function momentum() { return THREE.MathUtils.clamp((player.speed - 11) / 30, 0, 1); }

function camForward(out) { return out.set(0, 0, -1).applyQuaternion(camera.quaternion); }

function doSlash() {
  const m = momentum();
  const heavy = m > 0.6;
  const kind = vm.slash(heavy);
  audio.slash(1 + m * 0.5);
  slashCd = heavy ? 0.4 : 0.3;
  // lunge toward aimed enemy
  const f = camForward(new THREE.Vector3());
  let lungeTarget = null, bestDot = 0.93;
  for (const e of enemies) {
    if (!e.alive) continue;
    _v.subVectors(e.chest, player.eye); const d = _v.length();
    if (d > 9 || d < 2) continue;
    const dot = _v.normalize().dot(f);
    if (dot > bestDot) { bestDot = dot; lungeTarget = e; }
  }
  if (lungeTarget) {
    _v.subVectors(lungeTarget.chest, player.eye).normalize();
    const add = 12;
    player.vel.addScaledVector(_v, add);
    if (player.vel.y > 8) player.vel.y = 8;
  }
  // visual arc in world
  const q = camera.quaternion.clone();
  const origin = player.eye.clone().addScaledVector(f, 1.0).add(new THREE.Vector3(0, -0.2, 0));
  const roll = kind === 2 ? Math.PI / 2 : kind === 0 ? 0.25 : -0.25;
  arcs.add(origin, q, heavy ? 0xffffff : 0xff2a48, heavy ? 3.4 : 2.8, 0.2, kind === 0, roll);
  pendingSlash = { t: 0.05, heavy, m };
}

function resolveSlash(ps) {
  const f = camForward(new THREE.Vector3());
  const eye = player.eye.clone();
  const range = 3.6 + ps.m * 1.4 + (ps.heavy ? 0.6 : 0);
  let hitAny = false;
  for (const e of enemies) {
    if (!e.alive) continue;
    // closest of chest/head/feet
    let bestD = 1e9, bestP = null;
    for (const p of [e.chest, e.head, _v2.set(e.pos.x, e.pos.y + 0.6, e.pos.z)]) {
      const d = p.distanceTo(eye); if (d < bestD) { bestD = d; bestP = p.clone(); }
    }
    if (bestD > range) continue;
    _v.subVectors(bestP, eye).normalize();
    if (_v.dot(f) < (bestD < 1.6 ? -0.2 : 0.45)) continue;
    const dmg = (55 + (ps.heavy ? 30 : 0)) * (1 + ps.m * 1.5) * (e.stagger > 0 ? 1.6 : 1);
    hitAny = true;
    const killed = e.damage(dmg, player.pos);
    damageNumber(e.chest, dmg, false);
    sparks.emit(bestP, 26, { color: [1, 0.12, 0.2], speed: 10, dir: f, spread: 1, life: 0.5, size: 0.16 });
    sparks.emit(bestP, 8, { color: [1, 0.8, 0.6], speed: 14, dir: f, spread: 0.7, life: 0.22, size: 0.08 });
    bursts.flash(bestP, 0xff2040, 0.22, 0.08);
    if (killed) onKill(e, 'slash', f);
    else { addStyle(4); addScore(10); }
  }
  // slash deflects bullets in front
  for (const p of projectiles) {
    if (p.owner !== 'enemy') continue;
    if (p.pos.distanceTo(eye) < 3.8 && _v.subVectors(p.pos, eye).normalize().dot(f) > 0.3) reflect(p, false);
  }
  if (hitAny) { audio.slashHit(); hitmarker(false); hitstop = 0.05 + ps.m * 0.03; trauma += 0.18; }
}

function shoot() {
  if (reloadT > 0) return;
  if (ammo <= 0) { audio.empty(); startReload(); return; }
  ammo--; shootCd = 0.26;
  vm.shoot(); audio.gunshot(); trauma += 0.1;
  const dir = camForward(new THREE.Vector3());
  // small spread when moving fast in air
  const spread = player.onGround ? 0.002 : 0.006;
  dir.x += (Math.random() - 0.5) * spread; dir.y += (Math.random() - 0.5) * spread; dir.normalize();
  const eye = camera.position.clone();
  let hitT = 300, hitEnemy = null, head = false;
  const wh = world.raycast(eye, dir, 300);
  if (wh) hitT = wh.dist;
  for (const e of enemies) {
    if (!e.alive) continue;
    const r = e.rayHit(eye, dir, hitT);
    if (r && r.t < hitT) { hitT = r.t; hitEnemy = e; head = r.head; }
  }
  // shoot enemy projectiles out of the air
  for (const p of projectiles) {
    if (p.owner !== 'enemy') continue;
    const t = raySphere(eye, dir, p.pos, 0.6);
    if (t !== null && t < hitT) { hitT = t; hitEnemy = null; destroyProjectile(p, true); addStyle(6); feed('BULLET CUT', null); break; }
  }
  const end = eye.clone().addScaledVector(dir, hitT);
  const muzzle = new THREE.Vector3(); vm.muzzle.getWorldPosition(muzzle);
  // convert viewmodel muzzle (vm space) to world-ish: offset from camera
  const ofs = muzzle.clone(); // vm camera sits at origin, same orientation as camera
  ofs.applyQuaternion(camera.quaternion);
  tracers.add(eye.clone().add(ofs.multiplyScalar(0.9)), end, 0xffc080, 0.09, 0.04);
  if (hitEnemy) {
    const dmg = head ? 90 : 36;
    const killed = hitEnemy.damage(dmg, player.pos);
    damageNumber(end, dmg, head);
    hitmarker(head);
    sparks.emit(end, head ? 26 : 14, { color: head ? [1, 0.9, 0.3] : [1, 0.2, 0.3], speed: 8, dir: dir.clone().negate(), spread: 1, life: 0.4 });
    if (killed) onKill(hitEnemy, head ? 'headshot' : 'gun', dir);
    else addStyle(head ? 6 : 2);
  } else if (wh) {
    sparks.emit(end, 10, { color: [1, 0.7, 0.4], speed: 6, dir: wh.normal, spread: 0.8, life: 0.35 });
    bursts.ring(end.clone().addScaledVector(wh.normal, 0.02), wh.normal, 0xffa050, 0.5, 0.25);
  }
  if (ammo === 0) setTimeout(() => { if (ammo === 0 && reloadT <= 0) startReload(); }, 250);
}
function startReload() {
  if (reloadT > 0 || ammo === 6) return;
  reloadT = 1.05; vm.reload(1.05); audio.reload();
}

function tryParry() {
  if (parryCd > 0) return;
  parryT = 0; parryCd = 0.55;
  vm.parry();
  audio._noise(0.1, { type: 'highpass', freq: 3000, gain: 0.15, rev: 0 });
}
const PARRY_PERFECT = 0.24, PARRY_BLOCK = 0.42;

function parrySuccess(kind, pos) {
  vm.parrySuccess();
  audio.parry(true);
  slowmoT = 0.5; flashFx = 1; trauma += 0.25;
  player.dashCharges = Math.min(TUNING.dashCharges, player.dashCharges + 1);
  sparks.emit(pos, 36, { color: [1, 0.85, 0.5], speed: 14, spread: 1, life: 0.45, size: 0.12 });
  sparks.emit(pos, 20, { color: [0.2, 0.8, 1], speed: 9, spread: 1, life: 0.55, size: 0.14 });
  bursts.ring(pos, camForward(new THREE.Vector3()).negate(), 0x40c8ff, 1.1, 0.3);
  bursts.flash(pos, 0xaaddff, 0.25, 0.08);
  $('parryRing').animate([{ opacity: 1, transform: 'scale(.6)' }, { opacity: 0, transform: 'scale(1.8)' }], { duration: 350 });
  popup(kind === 'melee' ? 'PARRY' : 'REFLECT', '#80f0ff');
  addStyle(14); addScore(150, kind === 'melee' ? 'PERFECT PARRY' : 'REFLECT');
}

function reflect(p, perfect) {
  p.owner = 'player';
  // aim at nearest enemy in view
  let target = null, bestS = -1;
  const f = camForward(new THREE.Vector3());
  for (const e of enemies) {
    if (!e.alive) continue;
    _v.subVectors(e.chest, p.pos); const d = _v.length(); _v.normalize();
    const s = _v.dot(f) * 2 - d * 0.01 + (e === p.shooter ? 0.6 : 0);
    if (s > bestS) { bestS = s; target = e; }
  }
  const sp = 70;
  if (target) p.vel.subVectors(target.chest, p.pos).normalize().multiplyScalar(sp);
  else p.vel.copy(f).multiplyScalar(sp);
  p.target = target; p.dmg = perfect ? 140 : 70;
  p.mesh.material = projMatPlayer;
  p.life = 3;
  if (perfect) parrySuccess('bullet', p.pos.clone());
  else { audio.parry(false); sparks.emit(p.pos, 20, { color: [1, 0.9, 0.6], speed: 9, life: 0.4 }); addStyle(6); feed('DEFLECT', null); }
}

const projGeo = new THREE.CapsuleGeometry(0.09, 1.1, 4, 8); projGeo.rotateX(Math.PI / 2);
const projMatEnemy = new THREE.MeshBasicMaterial({ color: 0xff3048 });
const projMatPlayer = new THREE.MeshBasicMaterial({ color: 0x60f0ff });
function spawnProjectile(pos, vel, shooter) {
  const mesh = new THREE.Mesh(projGeo, projMatEnemy);
  mesh.position.copy(pos); scene.add(mesh);
  projectiles.push({ pos: pos.clone(), vel, mesh, owner: 'enemy', dmg: 9 * waveDmg(), life: 4, shooter, whizzed: false });
}
function destroyProjectile(p, burst) {
  p.dead = true; scene.remove(p.mesh);
  if (burst) sparks.emit(p.pos, 12, { color: p.owner === 'enemy' ? [1, 0.2, 0.3] : [0.4, 0.9, 1], speed: 6, life: 0.3 });
}

function segPointDist(a, b, p) {
  const ab = _v.subVectors(b, a); const t = THREE.MathUtils.clamp(_v2.subVectors(p, a).dot(ab) / (ab.lengthSq() || 1), 0, 1);
  return a.clone().addScaledVector(ab, t).distanceTo(p);
}

function updateProjectiles(dt) {
  const eye = player.eye.clone();
  const bodyMid = new THREE.Vector3(player.pos.x, player.pos.y + player.h * 0.55, player.pos.z);
  for (const p of projectiles) {
    if (p.dead) continue;
    p.life -= dt;
    if (p.owner === 'player' && p.target && p.target.alive) { // homing
      const want = _v.subVectors(p.target.chest, p.pos).normalize().multiplyScalar(p.vel.length());
      p.vel.lerp(want, Math.min(1, dt * 8));
    }
    const from = p.pos.clone();
    const step = p.vel.clone().multiplyScalar(dt);
    const len = step.length();
    const dir = step.clone().divideScalar(len || 1);
    // world hit
    const wh = world.raycast(from, dir, len);
    let to = wh ? wh.point : from.clone().add(step);
    if (p.owner === 'enemy') {
      // parry window check (bullets near player)
      if (parryT >= 0 && parryT < PARRY_BLOCK && from.distanceTo(eye) < 4.5) { reflect(p, parryT < PARRY_PERFECT); p.pos.copy(from); continue; }
      const d = segPointDist(from, to, bodyMid);
      if (d < 0.5 + player.h * 0.15) {
        hurt(p.dmg, p.shooter ? p.shooter.pos : from);
        destroyProjectile(p, true); continue;
      }
      if (!p.whizzed && segPointDist(from, to, eye) < 2) { p.whizzed = true; audio.bulletWhiz(); }
    } else {
      let hit = null, ht = len;
      for (const e of enemies) { if (!e.alive) continue; const r = e.rayHit(from, dir, ht); if (r && r.t < ht) { ht = r.t; hit = e; } }
      if (hit) {
        const killed = hit.damage(p.dmg, from);
        damageNumber(hit.chest, p.dmg, false); hitmarker(true);
        sparks.emit(hit.chest, 30, { color: [0.4, 0.9, 1], speed: 10, life: 0.5 });
        if (killed) onKill(hit, 'reflect', dir); else { hit.stagger = 1.0; }
        destroyProjectile(p, true); continue;
      }
    }
    if (wh || p.life <= 0) { destroyProjectile(p, !!wh); continue; }
    p.pos.copy(to);
    p.mesh.position.copy(p.pos);
    p.mesh.lookAt(_v.copy(p.pos).add(p.vel));
  }
  projectiles = projectiles.filter(p => !p.dead);
}

function hurt(n, fromPos) {
  if (state !== 'play') return;
  hp -= n; regenT = 4.5; damageFx = Math.min(1, damageFx + 0.6); trauma += 0.25;
  audio.hurt();
  style = Math.max(0, style - 10);
  // directional indicator
  const d = _v.subVectors(fromPos, player.pos); d.y = 0;
  const ang = Math.atan2(d.x, d.z) - Math.atan2(-Math.sin(player.yaw), -Math.cos(player.yaw));
  const el = document.createElement('div'); el.className = 'dmgdir';
  const r = 150;
  el.style.left = (Math.sin(-ang) * r) + 'px'; el.style.top = (-Math.cos(ang) * r) + 'px';
  el.style.transform = `rotate(${-ang}rad)`;
  $('threats').appendChild(el);
  el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 900 }).onfinish = () => el.remove();
  if (hp <= 0) { hp = 0; die(); }
}

function onKill(e, how, dir) {
  kills++;
  const airborne = !player.onGround;
  const labels = [];
  let base = e.type === 'elite' ? 400 : 150;
  if (how === 'headshot') { labels.push('HEADSHOT'); base += 80; }
  if (how === 'reflect') { labels.push('RETURN TO SENDER'); base += 150; }
  if (how === 'slash' && momentum() > 0.5) { labels.push('VELOCITY KILL'); base += 120; }
  if (player.wallrun) { labels.push('WALLRUN'); base += 100; }
  else if (airborne) { labels.push('AIRBORNE'); base += 60; }
  if (player.sliding) { labels.push('SLIDE'); base += 60; }
  if (player.grapple) { labels.push('HOOKED'); base += 80; }
  addScore(base, (e.type === 'elite' ? 'ELITE ' : '') + 'KILL' + (labels.length ? ' · ' + labels.join(' · ') : ''));
  addStyle(20 + labels.length * 6);
  audio.kill(rankIdx() + 1);
  trauma += 0.2;
  const pieces = e.shatter(scene, dir ? dir.clone().setY(0).normalize() : null, how === 'slash');
  debris.push(...pieces);
  sparks.emit(e.chest, 55, { color: [1, 0.08, 0.16], speed: 12, life: 0.8, size: 0.18 });
  sparks.emit(e.chest, 20, { color: [1, 0.7, 0.4], speed: 18, life: 0.35, size: 0.09 });
  bursts.ring(e.chest, null, e.cfg.color, 3.2, 0.4);
  bursts.flash(e.chest, 0xff2040, 0.5, 0.12);
  // small heal on kill (aggression rewarded)
  hp = Math.min(100, hp + (how === 'slash' ? 12 : 6));
  // last enemy of wave → slowmo
  if (mode === 'arena' && enemies.filter(x => x.alive).length === 0 && toSpawn.length === 0) { slowmoT = 1.2; popup('WAVE CLEAR', '#ffb030'); }
}

// ======================= ENEMY CONTEXT =======================
const ectx = {
  player: null, enemies: null,
  los(a, b) { const d = _v.subVectors(b, a); const len = d.length(); d.divideScalar(len); const h = world.raycast(a, d.clone(), len); return !h; },
  enemyShoot(e) {
    const m = new THREE.Vector3(); e.muzzle.getWorldPosition(m);
    const target = player.eye.clone(); target.y -= 0.35;
    const dist = m.distanceTo(target);
    const speed = 42;
    // partial lead
    target.addScaledVector(player.vel, dist / speed * 0.55);
    const dir = target.sub(m).normalize();
    const spr = 0.03 + Math.min(0.04, player.speed * 0.0012);
    dir.x += (Math.random() - 0.5) * spr; dir.y += (Math.random() - 0.5) * spr; dir.z += (Math.random() - 0.5) * spr; dir.normalize();
    spawnProjectile(m, dir.multiplyScalar(speed), e);
    audio.enemyShot(dist);
    bursts.flash(m, 0xff3050, 0.35, 0.06);
  },
  enemyTelegraph(e) { audio._tone(1800, 0.08, { type: 'square', gain: 0.05, rev: 0 }); },
  enemyDash(e) { sparks.emit(e.chest, 14, { color: [0.3, 0.9, 1], speed: 5, life: 0.3, gravity: 0 }); audio._noise(0.2, { type: 'bandpass', freq: 600, sweepTo: 1800, gain: 0.15 }); },
  enemyMelee(e) {
    const reach = e.cfg.range[1] + 1.2;
    const d = _v.subVectors(player.pos, e.pos); const dy = Math.abs(d.y); d.y = 0;
    const dist = d.length();
    // swing arc visual
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, e.yaw + Math.PI, 0, 'YXZ'));
    arcs.add(e.chest.clone().add(d.clone().normalize().multiplyScalar(0.8)), q, e.cfg.color, 2.4, 0.2, Math.random() < 0.5, 0.2);
    audio.slash(0.7);
    if (dist > reach || dy > 2.2) return;
    const facing = new THREE.Vector3(Math.sin(e.yaw), 0, Math.cos(e.yaw));
    if (facing.dot(d.normalize()) < 0.2) return;
    const dmg = (e.type === 'elite' ? 30 : 20) * waveDmg();
    if (parryT >= 0 && parryT < PARRY_PERFECT) {
      e.stagger = 1.6; e.windup = 0; audio.clash();
      parrySuccess('melee', e.chest.clone().lerp(player.eye, 0.5));
      e.damage(20, player.pos);
    } else if (parryT >= 0 && parryT < PARRY_BLOCK) {
      audio.parry(false); popup('BLOCK', '#ffffff'); hurt(dmg * 0.3, e.pos);
      sparks.emit(e.chest.clone().lerp(player.eye, 0.5), 20, { color: [1, 0.9, 0.6], speed: 8, life: 0.3 });
    } else {
      hurt(dmg, e.pos);
      player.vel.addScaledVector(d, 8); player.vel.y += 3;
    }
  },
};

// ======================= WAVES =======================
function buildWave(n) {
  const list = [];
  const count = 3 + Math.floor(n * 1.8);
  for (let i = 0; i < count; i++) {
    let t = 'gunner';
    const r = Math.random();
    if (n >= 3 && r < Math.min(0.12 + n * 0.02, 0.3)) t = 'elite';
    else if (r < 0.55) t = 'blade';
    list.push(t);
  }
  if (n === 1) return ['blade', 'gunner', 'blade'];
  return list;
}
function spawnEnemy(type) {
  const pts = world.spawnPoints.filter(p => p.distanceTo(player.pos) > 28);
  const p = (pts.length ? pts : world.spawnPoints)[(Math.random() * (pts.length || world.spawnPoints.length)) | 0].clone();
  p.x += (Math.random() - 0.5) * 3; p.z += (Math.random() - 0.5) * 3; p.y = 0.05;
  const e = new Enemy(scene, world, type, p);
  enemies.push(e);
  // spawn pillar
  sparks.emit(p.clone().add(new THREE.Vector3(0, 1, 0)), 40, { color: [1, 0.15, 0.3], speed: 6, life: 0.7, gravity: -6 });
  bursts.ring(p.clone().add(new THREE.Vector3(0, 0.05, 0)), null, e.cfg.color, 3, 0.6);
}
function updateWaves(dt) {
  if (mode !== 'arena') return;
  if (waveState === 'break') {
    waveTimer -= dt;
    if (waveTimer <= 0) {
      wave++; toSpawn = buildWave(wave); waveState = 'fight'; spawnTimer = 0;
      banner('WAVE ' + wave, wave % 5 === 0 ? '엘리트 경보' : `${toSpawn.length}명 접근 중`);
      audio.wave();
      $('waveTxt').textContent = 'WAVE ' + wave;
    }
  } else if (waveState === 'fight') {
    spawnTimer -= dt;
    const alive = enemies.filter(e => e.alive).length;
    if (toSpawn.length && spawnTimer <= 0 && alive < 6 + Math.min(4, wave)) { spawnEnemy(toSpawn.shift()); spawnTimer = 0.7; }
    if (!toSpawn.length && alive === 0) {
      waveState = 'break'; waveTimer = 4;
      hp = Math.min(100, hp + 35);
      addScore(300 + wave * 100, `WAVE ${wave} CLEAR`);
    }
    $('enemyTxt').textContent = `남은 적 ${alive + toSpawn.length}`;
  }
}

// ======================= HUD =======================
const pipsEl = $('pips');
function buildPips() { pipsEl.innerHTML = ''; for (let i = 0; i < TUNING.dashCharges; i++) { const p = document.createElement('div'); p.className = 'pip'; p.innerHTML = '<i></i>'; pipsEl.appendChild(p); } }
buildPips();
const roundsEl = $('rounds');
roundsEl.innerHTML = '<div class="rd"></div>'.repeat(6);
const threatEls = [];
let lastHud = {};
function setText(id, v) { if (lastHud[id] !== v) { lastHud[id] = v; $(id).textContent = v; } }

function updateHUD(dt) {
  const kmh = Math.round(player.hSpeed() * 3.6);
  setText('speedNum', kmh);
  $('speedFill').style.width = Math.min(100, player.speed / 45 * 100) + '%';
  const m = momentum();
  setText('momentum', m > 0.05 ? `MOMENTUM x${(1 + m * 1.5).toFixed(1)}` : '');
  // dash pips
  [...pipsEl.children].forEach((p, i) => {
    const fill = i < player.dashCharges ? 1 : i === player.dashCharges ? player.dashTimer / TUNING.dashRecharge : 0;
    p.firstChild.style.transform = `scaleX(${fill})`;
    p.firstChild.style.opacity = fill >= 1 ? 1 : 0.4;
  });
  // hp
  hpGhost += (hp - hpGhost) * Math.min(1, dt * 3);
  if (hpGhost < hp) hpGhost = hp;
  $('hpFill').style.transform = `scaleX(${hp / 100})`;
  $('hpGhost').style.transform = `scaleX(${hpGhost / 100})`;
  setText('hpNum', Math.ceil(hp));
  $('lowhp').style.boxShadow = `inset 0 0 ${120 + (1 - hp / 100) * 120}px rgba(255,0,30,${Math.max(0, 0.6 - hp / 100) * 1.2})`;
  // grapple
  const gp = player.grappleCd > 0 ? (1 - player.grappleCd / TUNING.grappleCooldown) * 100 : 100;
  $('grapIcon').style.setProperty('--p', gp + '%');
  $('grapIcon').style.opacity = player.grappleCd > 0 ? 0.5 : 1;
  // ammo
  setText('ammoNum', ammo);
  if (lastHud.rounds !== ammo) { lastHud.rounds = ammo; [...roundsEl.children].forEach((r, i) => r.classList.toggle('off', i >= ammo)); }
  setText('reloadTxt', reloadT > 0 ? 'RELOADING' : ammo === 0 ? 'R 재장전' : '');
  // style
  const ri = rankIdx();
  setText('rank', RANKS[ri].r); setText('rankName', RANKS[ri].n);
  const next = RANKS[ri + 1];
  $('rankFill').style.width = (next ? (style - RANKS[ri].at) / (next.at - RANKS[ri].at) * 100 : 100) + '%';
  setText('mult', 'x' + styleMult().toFixed(2));
  $('rank').style.color = ri >= 6 ? '#ff2a48' : ri >= 4 ? '#ffb030' : '#fff';
  if (ri > bestRank) bestRank = ri;
  if (lastHud.ri !== undefined && ri > lastHud.ri) $('rank').animate([{ transform: 'scale(1.5)' }, { transform: 'scale(1)' }], { duration: 250 });
  lastHud.ri = ri;
  setText('scoreTxt', score.toLocaleString());

  // threat indicators for winding-up enemies
  const winding = enemies.filter(e => e.alive && e.windup > 0 && e.pos.distanceTo(player.pos) < 30);
  while (threatEls.length < winding.length) { const el = document.createElement('div'); el.className = 'threat'; $('threats').appendChild(el); threatEls.push(el); }
  threatEls.forEach((el, i) => {
    const e = winding[i];
    if (!e) { el.style.display = 'none'; return; }
    el.style.display = 'block';
    const d = _v.subVectors(e.pos, player.pos);
    const ang = Math.atan2(d.x, d.z) - Math.atan2(-Math.sin(player.yaw), -Math.cos(player.yaw));
    const r = 60 + Math.min(40, d.length() * 2);
    el.style.left = (Math.sin(-ang) * r - 11) + 'px'; el.style.top = (-Math.cos(ang) * r - 9) + 'px';
    el.style.transform = `rotate(${-ang}rad)`;
    el.style.borderBottomColor = e.type === 'gunner' ? '#ff3048' : '#ffb030';
  });

  // damage numbers
  for (let i = dnums.length - 1; i >= 0; i--) {
    const d = dnums[i]; d.life -= dt; d.pos.y += d.vy * dt; d.pos.x += d.vx * dt;
    const p = d.pos.clone().project(camera);
    if (d.life <= 0 || p.z > 1) { d.el.remove(); dnums.splice(i, 1); continue; }
    d.el.style.left = ((p.x + 1) / 2 * innerWidth) + 'px'; d.el.style.top = ((1 - p.y) / 2 * innerHeight) + 'px';
    d.el.style.opacity = Math.min(1, d.life * 3);
  }
}

// ======================= MAIN LOOP =======================
let last = performance.now(), fpsAcc = 0, fpsN = 0;
const clock = { t: 0 };

function frame(now) {
  requestAnimationFrame(frame);
  const realDt = (now - last) / 1000; last = now;
  fpsAcc += realDt; fpsN++;
  if (fpsAcc > 0.5) { $('fps').textContent = Math.round(fpsN / fpsAcc) + ' FPS'; fpsAcc = 0; fpsN = 0; }
  tick(Math.min(0.05, realDt));
  composer.render();
  pressed.clear(); mouseDX = 0; mouseDY = 0;
}

function tick(rawDt) {
  clock.t += rawDt;

  // time scale: hitstop > slowmo
  let target = 1;
  if (slowmoT > 0) { slowmoT -= rawDt; target = 0.3; }
  if (hitstop > 0) { hitstop -= rawDt; target = 0.06; }
  timeScale += (target - timeScale) * Math.min(1, rawDt * (target < timeScale ? 30 : 8));
  const playing = state === 'play';
  const dt = playing ? rawDt * timeScale : (state === 'dead' ? rawDt * 0.25 : 0);

  if (playing) {
    gameTime += dt;
    // ---- look ----
    const sens = S.sens * 0.0022;
    player.yaw -= mouseDX * sens; player.pitch -= mouseDY * sens;
    player.pitch = THREE.MathUtils.clamp(player.pitch, -1.55, 1.55);

    const input = {
      fwd: (isDown('forward') ? 1 : 0) - (isDown('back') ? 1 : 0),
      right: (isDown('right') ? 1 : 0) - (isDown('left') ? 1 : 0),
      jumpPressed: wasPressed('jump'), crouch: isDown('crouch'),
      dashPressed: wasPressed('dash'), grapple: isDown('grapple'),
    };

    // grapple start
    if (wasPressed('grapple') && !player.grapple && player.grappleCd <= 0) {
      const eye = camera.position.clone(); const dir = camForward(new THREE.Vector3());
      let tgt = null, tT = TUNING.grappleRange;
      for (const e of enemies) { if (!e.alive) continue; const r = e.rayHit(eye, dir, tT); if (r) { tT = r.t; tgt = e; } }
      // soft aim-assist for enemies
      if (!tgt) for (const e of enemies) {
        if (!e.alive) continue; _v.subVectors(e.chest, eye); const d = _v.length();
        if (d < TUNING.grappleRange && _v.normalize().dot(dir) > 0.985 && ectx.los(eye, e.chest)) { tgt = e; tT = d; break; }
      }
      const wh = world.raycast(eye, dir, TUNING.grappleRange);
      if (tgt && (!wh || wh.dist > tT)) { player.startGrapple(tgt.chest, tgt); audio.grappleHit(); }
      else if (wh) { player.startGrapple(wh.point, null); audio.grappleHit(); sparks.emit(wh.point, 10, { color: [0.3, 0.9, 1], speed: 5, life: 0.3 }); }
      else { audio.empty(); }
    }

    player.update(dt, input);
    maxSpeed = Math.max(maxSpeed, player.hSpeed());

    // combat inputs
    slashCd -= dt; shootCd -= dt; parryCd -= dt;
    if (parryT >= 0) { parryT += dt; if (parryT > PARRY_BLOCK) parryT = -1; }
    if (wasPressed('slash') && slashCd <= 0) doSlash();
    if (isDown('shoot') && shootCd <= 0 && wasPressed('shoot')) shoot();
    if (wasPressed('parry')) tryParry();
    if (wasPressed('reload')) startReload();
    if (pendingSlash) { pendingSlash.t -= dt; if (pendingSlash.t <= 0) { resolveSlash(pendingSlash); pendingSlash = null; } }
    if (reloadT > 0) { reloadT -= dt; if (reloadT <= 0) ammo = 6; }

    // regen
    regenT -= dt; if (regenT <= 0 && hp < 100) hp = Math.min(100, hp + 14 * dt);

    // enemies
    ectx.player = player; ectx.enemies = enemies;
    for (const e of enemies) { if (e.alive) { e.camYaw = player.yaw; e.update(dt, ectx); } }
    enemies = enemies.filter(e => e.alive);
    updateProjectiles(dt);
    updateWaves(dt);

    // style decay
    styleDecayHold -= dt;
    const moving = player.hSpeed() > 14;
    if (moving) style = Math.min(150, style + dt * (player.hSpeed() > 25 ? 2.5 : 0.8));
    if (styleDecayHold <= 0) style = Math.max(0, style - dt * (moving ? 3 : 9));
  }

  // debris physics (runs in dead state too)
  for (let i = debris.length - 1; i >= 0; i--) {
    const d = debris[i]; d.life -= dt;
    d.v.y -= 25 * dt;
    d.m.position.addScaledVector(d.v, dt);
    d.m.rotation.x += d.av.x * dt; d.m.rotation.y += d.av.y * dt; d.m.rotation.z += d.av.z * dt;
    if (d.m.position.y < 0.08) { d.m.position.y = 0.08; d.v.y *= -0.35; d.v.x *= 0.7; d.v.z *= 0.7; d.av.multiplyScalar(0.7); }
    if (d.life < 0.5) d.m.scale.multiplyScalar(Math.max(0, 1 - dt * 6));
    if (d.life <= 0) { scene.remove(d.m); debris.splice(i, 1); }
  }

  // ---- camera ----
  const eye = player.eye;
  camera.position.copy(eye);
  camera.position.y -= player.landDip;
  trauma = Math.min(1, Math.max(0, trauma - rawDt * 1.6));
  const sh = trauma * trauma * S.shake;
  const tt = clock.t * 40;
  camera.rotation.set(
    player.pitch + Math.sin(tt * 1.1) * 0.03 * sh,
    player.yaw + Math.sin(tt * 0.9 + 1) * 0.03 * sh,
    player.tilt + Math.sin(tt * 1.3 + 2) * 0.04 * sh
  );
  fovKick = Math.max(0, fovKick - rawDt * 3);
  const sp01 = THREE.MathUtils.clamp((player.speed - 10) / 32, 0, 1);
  const targetFov = S.fov + S.fovFx * sp01 + fovKick * 8 - (slowmoT > 0 ? 6 : 0);
  camera.fov += (targetFov - camera.fov) * Math.min(1, rawDt * 6);
  camera.updateProjectionMatrix();
  vm.camera.rotation.z = 0;

  // grapple rope
  if (player.grapple) {
    const hand = new THREE.Vector3(-0.25, -0.25, -0.4).applyQuaternion(camera.quaternion).add(camera.position);
    const pos = ropeGeo.attributes.position;
    pos.setXYZ(0, hand.x, hand.y, hand.z); pos.setXYZ(1, player.grapple.point.x, player.grapple.point.y, player.grapple.point.z);
    pos.needsUpdate = true; rope.visible = true; ropeTip.visible = true; ropeTip.position.copy(player.grapple.point);
  } else { rope.visible = false; ropeTip.visible = false; }

  // sun shadow follows player
  const sun = world.sunLight;
  sun.position.set(player.pos.x + 60, 120, player.pos.z - 140);
  sun.target.position.set(player.pos.x, 0, player.pos.z);

  // viewmodel
  vm.update(rawDt * (playing ? Math.max(timeScale, 0.35) : 1), {
    hSpeed: player.hSpeed(), vy: player.vel.y, onGround: player.onGround, sliding: player.sliding,
    mouseDX, mouseDY, landDip: player.landDip, wallrun: !!player.wallrun,
    wallSide: player.wallrun ? Math.sign(player.wallrun.normal.dot(player.flatRight(new THREE.Vector3()))) : 0,
    momentum: momentum(),
  });
  vm.root.visible = state === 'play' || state === 'paused';

  // fx
  const fxDt = state === 'paused' ? 0 : (playing ? dt : rawDt * 0.25);
  world.update(clock.t, fxDt);
  sparks.update(fxDt); tracers.update(fxDt); bursts.update(fxDt); arcs.update(fxDt);
  audio.update(playing ? player.speed : 0, playing && !!player.wallrun, rawDt);

  damageFx = Math.max(0, damageFx - rawDt * 1.5);
  flashFx = Math.max(0, flashFx - rawDt * 3);
  const u = speedPass.uniforms;
  u.speed.value += ((playing ? sp01 : 0) - u.speed.value) * Math.min(1, rawDt * 5);
  u.time.value = clock.t; u.damage.value = damageFx + Math.max(0, 0.35 - hp / 100) * (0.5 + 0.5 * Math.sin(clock.t * 6));
  u.flash.value = flashFx; u.slowmo.value += ((slowmoT > 0 ? 1 : 0) - u.slowmo.value) * Math.min(1, rawDt * 8);

  if (playing || state === 'paused') updateHUD(rawDt);

  // menu camera: slow orbit
  if (state === 'menu') {
    const a = clock.t * 0.06;
    camera.position.set(Math.sin(a) * 55, 22 + Math.sin(clock.t * 0.2) * 4, Math.cos(a) * 55);
    camera.lookAt(0, 14, 0);
    camera.fov = 75; camera.updateProjectionMatrix();
  }

}

// boot
show('menu'); updateBestTxt();
$('loading').classList.add('hidden');
requestAnimationFrame(frame);
window.__game = { sim(sec, keys = []) { for (let t = 0; t < sec; t += 1 / 60) { keys.forEach(k => down.add(k)); tick(1 / 60); pressed.clear(); mouseDX = 0; mouseDY = 0; } }, press(c) { pressed.add(c); down.add(c); }, release(c) { down.delete(c); }, look(dx, dy) { mouseDX += dx; mouseDY += dy; }, get dbg() { return { wave, waveState, waveTimer, toSpawn: toSpawn.length, mode, timeScale, hp }; }, get state() { return state; }, get player() { return player; }, get enemies() { return enemies; }, startGame: (m) => { mode = m || 'arena'; startGame(); }, setLocked: v => { locked = v; } };
