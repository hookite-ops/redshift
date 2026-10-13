// Bootstrap: settings, menus, pointer lock, main loop
import { Game } from './game.js';
import { Input } from './input.js';
import { Net } from './net.js';
import { Touch, isTouchDevice } from './touch.js';
import { ACTIONS, DEFAULT_BINDS, loadSettings, saveSettings, loadRecords, saveRecords, keyName } from './settings.js';

const $ = id => document.getElementById(id);
const S = loadSettings();
const canvas = $('c');
const input = new Input(canvas, S);
let game;

try {
  game = new Game(canvas, S, input);
} catch (err) {
  $('loading').innerHTML = `<div class="err">WebGL을 시작하지 못했어요.<br><small>${String(err && err.message || err)}</small></div>`;
  throw err;
}
game.records = loadRecords();
// phones & tablets: on-screen controls instead of mouse + keyboard
const touchMode = S.touchUI === 'on' || (S.touchUI !== 'off' && isTouchDevice());
input.touch = touchMode;
document.body.classList.toggle('touch', touchMode);
if (touchMode) game.touchUI = new Touch(input, S, { onPause: () => pause() });
// fullscreen: the APK is always fullscreen; the EXE asks its own window to go borderless
const APP = window.REDSHIFT_APP || '';
function goFull(after) {
  if (APP === 'android') { after && after(); return; }
  if (APP === 'exe' && window.rsFullscreen) { window.rsFullscreen(true).catch(() => { }); after && after(); return; }
  if (!document.fullscreenElement) { const p = document.documentElement.requestFullscreen?.(); p && p.then(after).catch(() => { }); } else after && after();
}
function leaveFull() {
  if (APP === 'exe' && window.rsFullscreen) { window.rsFullscreen(false).catch(() => { }); return; }
  if (document.fullscreenElement) document.exitFullscreen?.();
}
if (APP === 'exe') addEventListener('keydown', e => { if (e.code === 'F11' && window.rsFullscreen) { e.preventDefault(); window.rsFullscreen(null).catch(() => { }); } });
function landscape() { try { screen.orientation && screen.orientation.lock && screen.orientation.lock('landscape').catch(() => { }); } catch { } }
game.saveRecords = () => saveRecords(game.records);

// ---------------- screens ----------------
const SCREENS = ['menu', 'pause', 'settings', 'controls', 'death', 'online'];
function show(id) { SCREENS.forEach(s => $(s).classList.toggle('hidden', s !== id)); }
let returnTo = 'menu';

function startMode(mode) {
  game.start(mode);
  enterGame();
}
function enterGame() {
  document.body.classList.add('playing');
  document.body.classList.toggle('show-online', !!game.online); document.body.classList.toggle('hide-online', !game.online);
  show(null);
  $('hud').classList.remove('hidden');
  $('clickTo').classList.add('hidden');
  if (touchMode) {
    input.locked = true; game.touchUI.show(true);
    goFull(landscape);
    return;
  }
  if (S.full) goFull(() => navigator.keyboard?.lock?.(['KeyW', 'KeyA', 'KeyS', 'KeyD', 'KeyE', 'KeyQ', 'KeyF', 'Space', 'ShiftLeft']).catch(() => { }));
  input.lock();
  // pointer lock can be refused after an async step (joining a room) — then ask for one click
  setTimeout(() => { if (game.state === 'play' && !input.locked && !input.touch) $('clickTo').classList.remove('hidden'); }, 400);
}
// online games never stop: the pause menu just opens over the running match
function pause() {
  if (game.state !== 'play' || game.menuOpen) return;
  if (game.online) game.menuOpen = true; else game.state = 'paused';
  if (touchMode) game.touchUI.show(false);
  document.body.classList.toggle('show-online', !!game.online); document.body.classList.toggle('hide-online', !game.online);
  show('pause');
}
function resume() { game.menuOpen = false; show(null); if (!input.touch) { $('clickTo').classList.remove('hidden'); input.lock(); } else { if (game.state === 'paused') game.state = 'play'; game.touchUI.show(true); } }
function toMenu() {
  if (game.online) game.leaveOnline();
  game.menuOpen = false; if (touchMode) game.touchUI.show(false);
  document.body.classList.remove('playing');
  game.state = 'menu'; game.clear(); show('menu'); $('hud').classList.add('hidden'); $('clickTo').classList.add('hidden');
  input.unlock();
  leaveFull();
  renderBest();
}
game.onEnd = (title, stats) => {
  game.state = 'dead'; if (touchMode) game.touchUI.show(false);
  input.unlock();
  $('endTitle').textContent = title;
  $('endStats').innerHTML = stats.map(([a, b]) => `<div class="stat"><span>${a}</span><b>${b}</b></div>`).join('');
  $('hud').classList.add('hidden');
  show('death');
};

input.onLockChange = locked => {
  if (locked) { $('clickTo').classList.add('hidden'); if (game.state === 'paused' || game.menuOpen) { if (game.state === 'paused') game.state = 'play'; game.menuOpen = false; show(null); } }
  else if (game.state === 'play' && !input.touch) pause();
};
input.onKey = e => {
  if (e.code === 'Escape') {
    if (game.state === 'play' && !game.menuOpen) { input.unlock(); pause(); return true; }
    if (!$('settings').classList.contains('hidden') || !$('controls').classList.contains('hidden') || !$('online').classList.contains('hidden')) { show(returnTo); return true; }
  }
  return false;
};
// Android back button (the APK calls this; returns false at the main menu so the app can close)
window.REDSHIFT_BACK = () => {
  const open = id => !$(id).classList.contains('hidden');
  if (game.state === 'play' && !game.menuOpen) { pause(); return true; }
  if (open('settings') || open('controls') || open('online')) { show(returnTo); return true; }
  if (open('pause')) { resume(); return true; }
  if (open('death')) { toMenu(); return true; }
  return false;
};
// app sent to the background / tab hidden: open the pause menu (touch has no pointer-lock loss to do it)
window.REDSHIFT_BACKGROUND = () => { if (game.state === 'play' && !game.menuOpen) { input.unlock(); pause(); } };
document.addEventListener('visibilitychange', () => { if (document.hidden && touchMode) window.REDSHIFT_BACKGROUND(); });
canvas.addEventListener('mousedown', () => { if (!touchMode && (game.state === 'play' || game.state === 'paused') && !input.locked && $('pause').classList.contains('hidden')) input.lock(); });
$('clickTo').addEventListener('mousedown', () => input.lock());
addEventListener('beforeunload', e => { if (game.state === 'play') { e.preventDefault(); e.returnValue = ''; } });

document.querySelectorAll('[data-act]').forEach(b => b.addEventListener('click', () => {
  game.audio.init(); game.audio.setVolumes(S.sfx, S.music); game.audio.ui();
  const a = b.dataset.act;
  if (a === 'arena' || a === 'practice' || a === 'duel' || a === 'ffa') startMode(a);
  else if (a === 'online') { returnTo = 'menu'; openOnline(); show('online'); }
  else if (a === 'settings') { returnTo = game.state === 'paused' || game.menuOpen ? 'pause' : 'menu'; openSettings(); show('settings'); }
  else if (a === 'controls') { returnTo = game.state === 'paused' || game.menuOpen ? 'pause' : 'menu'; buildControls(); show('controls'); }
  else if (a === 'back') show(returnTo);
  else if (a === 'resume') resume();
  else if (a === 'restart') startMode(game.mode);
  else if (a === 'quit') toMenu();
}));

// ---------------- online ----------------
function oStatus(text, cls = '') { const e = $('oStatus'); e.textContent = text; e.className = cls; }
function cleanName(v) { return String(v || '').replace(/[<>&"'`\\]/g, '').trim().slice(0, 12) || S.name; }
async function openOnline() {
  $('oName').value = S.name;
  if (game.net.open) { $('oServer').value = game.net.base; oStatus('연결됨', 'ok'); game.net.send({ t: 'list' }); return; }
  $('oServer').value = Net.defaultServer();
  if (!$('oServer').value) {
    oStatus('서버 찾는 중…');
    const found = await Net.discover();
    if (found && !$('oServer').value) $('oServer').value = found;
  }
  if ($('oServer').value) connectOnline();
  else oStatus('서버 주소를 넣어 주세요 (웹 버전 주소 그대로, 예: https://redshift-xxxx.run.app)');
}
async function connectOnline() {
  const base = $('oServer').value.trim();
  S.name = cleanName($('oName').value); saveSettings(S);
  if (!base) { oStatus('서버 주소를 넣어 주세요', 'bad'); return false; }
  const hello = { name: S.name, weapon: S.weapon, skill: S.skill };
  if (game.net.open && game.net.base === base) { game.net.send({ t: 'hello', ...hello }); return true; }
  if (game.net.ws) game.net.close();
  oStatus('연결 중…');
  try {
    const hi = await game.net.connect(base, hello);
    oStatus(`연결됨 · 열린 방 ${hi.rooms.length}개`, 'ok'); renderRooms(hi.rooms);
    return true;
  } catch (e) { oStatus(`${e.message} — 서버 주소를 확인해 주세요`, 'bad'); return false; }
}
function renderRooms(list) {
  const box = $('oRooms');
  if (!list.length) { box.innerHTML = '<div class="empty">아직 열린 방이 없어요 — 빠른 참가나 방 만들기를 눌러 보세요</div>'; return; }
  box.innerHTML = '';
  for (const r of list) {
    const d = document.createElement('div'); d.className = 'room';
    const n = document.createElement('span'); n.textContent = r.name;
    const i = document.createElement('b'); i.textContent = `${r.code} · ${r.humans}명${r.bots ? ' + 봇 ' + r.bots : ''} / ${r.max}`;
    d.append(n, i); d.onclick = () => joinBy({ t: 'join', code: r.code });
    box.append(d);
  }
}
async function joinBy(msg) {
  game.audio.init(); game.audio.ui();
  if (!(await connectOnline())) return;
  oStatus('들어가는 중…');
  game.net.send(msg);
}
game.onRooms = list => { if (!$('online').classList.contains('hidden')) renderRooms(list); };
game.onNetError = msg => oStatus(msg, 'bad');
game.onJoined = () => enterGame();
game.onNetDropped = () => { toMenu(); openOnline(); show('online'); oStatus('서버와 연결이 끊겼어요', 'bad'); };
game.net.onStatus = (st, msg) => { if (st === 'reconnecting') oStatus('다시 연결하는 중…'); };
$('oQuick').onclick = () => joinBy({ t: 'quick' });
$('oCreateBtn').onclick = () => $('oCreateOpts').classList.toggle('hidden');
$('oCreate').onclick = () => joinBy({ t: 'create', name: $('oRoomName').value || `${cleanName($('oName').value)}의 방`, bots: +$('oBots').value, botSkill: $('oBotSkill').value, limit: +$('oLimit').value, priv: $('oPriv').value === '1' });
$('oJoin').onclick = () => { const c = $('oCode').value.trim().toUpperCase(); if (c.length === 4) joinBy({ t: 'join', code: c }); else oStatus('코드 4글자를 넣어 주세요', 'bad'); };
$('oRefresh').onclick = async () => { if (await connectOnline()) game.net.send({ t: 'list' }); };
// only an address the player typed is remembered — otherwise the built-in / shared address keeps working when it moves
$('oServer').addEventListener('change', () => { Net.save($('oServer').value.trim()); if (game.net.ws) game.net.close(); if ($('oServer').value.trim()) connectOnline(); else openOnline(); });

// difficulty
function renderDifficulty() {
  document.querySelectorAll('#difficulty button').forEach(b => b.classList.toggle('on', b.dataset.df === S.difficulty));
  document.querySelectorAll('#botskill button').forEach(b => b.classList.toggle('on', b.dataset.bs === S.botSkill));
  document.querySelectorAll('#weapons button').forEach(b => b.classList.toggle('on', b.dataset.wp === S.weapon));
  document.querySelectorAll('#skills button').forEach(b => b.classList.toggle('on', b.dataset.sk === S.skill));
}
document.querySelectorAll('#weapons button').forEach(b => b.addEventListener('click', () => { S.weapon = b.dataset.wp; saveSettings(S); renderDifficulty(); game.audio.init(); game.audio.ui(); }));
document.querySelectorAll('#skills button').forEach(b => b.addEventListener('click', () => { S.skill = b.dataset.sk; saveSettings(S); renderDifficulty(); game.audio.init(); game.audio.ui(); }));
document.querySelectorAll('#botskill button').forEach(b => b.addEventListener('click', () => { S.botSkill = b.dataset.bs; saveSettings(S); renderDifficulty(); game.audio.init(); game.audio.ui(); }));
document.querySelectorAll('#difficulty button').forEach(b => b.addEventListener('click', () => { S.difficulty = b.dataset.df; saveSettings(S); renderDifficulty(); game.audio.init(); game.audio.ui(); }));
renderDifficulty();

function buildControls() {
  $('ctrlGrid').innerHTML = ACTIONS.map(([a, n]) => `<div><span>${n}</span><b>${S.binds[a].map(keyName).join(' / ')}</b></div>`).join('') + `<div><span>일시정지</span><b>ESC</b></div>`;
}
function openSettings() {
  const sl = (id, key, fmt = v => v) => {
    const el = $('s' + id), vl = $('v' + id);
    el.value = S[key]; vl.textContent = fmt(S[key]);
    el.oninput = () => { S[key] = parseFloat(el.value); vl.textContent = fmt(S[key]); saveSettings(S); applySettings(); };
  };
  sl('Sens', 'sens', v => { const cm = (2 * Math.PI / (v * 0.0012) / 800 * 2.54); $('cm360').textContent = `(800DPI 기준 360° = ${cm.toFixed(1)}cm)`; return (+v).toFixed(2); });
  sl('Fov', 'fov'); sl('FovFx', 'fovFx'); sl('Shake', 'shake', v => (+v).toFixed(2)); sl('Tilt', 'tilt', v => (+v).toFixed(2)); sl('Bob', 'bob', v => (+v).toFixed(2));
  sl('Sfx', 'sfx', v => Math.round(v * 100)); sl('Music', 'music', v => Math.round(v * 100));
  const sel = (id, key, num = true, after) => { const el = $('s' + id); el.value = String(S[key]); el.onchange = () => { S[key] = num ? +el.value : el.value; saveSettings(S); applySettings(); after && after(); }; };
  sel('AimAssist', 'aimAssist', false); sel('AutoHop', 'autoHop'); sel('TouchUI', 'touchUI', false, () => { if (confirm('조작 방식을 바꾸려면 새로고침이 필요해요. 지금 할까요?')) { game.state = 'menu'; location.reload(); } });
  sl('TouchSens', 'touchSens', v => (+v).toFixed(2)); sel('TouchLayout', 'touchLayout', false); sel('KeyHints', 'keyHints'); sel('Fps', 'fps'); sel('Full', 'full');
  sel('Quality', 'quality', false, () => { if (confirm('그래픽 품질을 바꾸려면 새로고침이 필요해요. 지금 새로고침할까요?')) { game.state = 'menu'; location.reload(); } });
  renderBinds();
}
let listening = null;
function renderBinds() {
  $('binds').innerHTML = ACTIONS.map(([a, n]) => `<div class="row k"><span>${n}</span><span><button class="key" data-a="${a}" data-i="0">${keyName(S.binds[a][0])}</button> <button class="key" data-a="${a}" data-i="1">${keyName(S.binds[a][1])}</button></span></div>`).join('')
    + `<div class="row k"><span></span><button class="key" id="resetBinds">기본값으로</button></div>`;
  $('binds').querySelectorAll('.key[data-a]').forEach(b => b.onclick = e => {
    e.stopPropagation();
    if (listening) return;
    listening = b; b.textContent = '키 입력…'; b.classList.add('listen');
    setTimeout(() => {
      input.capture = code => {
        const a = b.dataset.a, i = +b.dataset.i; listening = null;
        if (code !== 'Escape') {
          for (const k in S.binds) S.binds[k] = S.binds[k].map(c => c === code ? undefined : c);
          const arr = [...S.binds[a]]; arr[i] = code; S.binds[a] = arr;
          for (const k in S.binds) S.binds[k] = S.binds[k].filter(Boolean);
        }
        saveSettings(S); renderBinds(); renderKeyHints();
      };
    }, 50);
  });
  $('resetBinds').onclick = () => { S.binds = JSON.parse(JSON.stringify(DEFAULT_BINDS)); saveSettings(S); renderBinds(); renderKeyHints(); };
}
function renderKeyHints() {
  const k = a => (S.binds[a] && S.binds[a][0]) ? keyName(S.binds[a][0]) : '—';
  const items = [['throw', '던지기 / 회수'], ['blink', '순간이동'], ['skill', '스킬'], ['dash', '대시'], ['jump', '점프 ×2']];
  $('keyHints').innerHTML = items.map(([a, n]) => `<span><b>${k(a)}</b>${n}</span>`).join('');
  $('keyHints').classList.toggle('hidden', !S.keyHints);
  // the menu cheat-sheet uses the same binds
  document.querySelectorAll('[data-key]').forEach(e => { e.textContent = k(e.dataset.key); });
}
function applySettings() {
  game.audio.setVolumes(S.sfx, S.music);
  renderKeyHints();
  $('fps').classList.toggle('hidden', !S.fps);
  // tablets: buttons sit higher than the move stick, so two thumbs never share a row (some pads drop
  // the second touch when both are at a similar height)
  const big = Math.min(screen.width || innerWidth, screen.height || innerHeight) >= 600;
  document.body.classList.toggle('raised', S.touchLayout === 'raised' || (S.touchLayout === 'auto' && big));
}
applySettings();

function renderBest() {
  const r = game.records;
  const parts = [];
  if (r.score) parts.push(`최고 ${r.score.toLocaleString()}점 · WAVE ${r.wave}`);
  if (r.duelWin || r.duelLose) parts.push(`1V1 ${r.duelWin || 0}승 ${r.duelLose || 0}패`);
  if (r.ffaBest) parts.push(`FFA 최고 ${r.ffaBest}위${r.ffaWin ? ` · 1위 ${r.ffaWin}번` : ''}`);
  if (r.combo) parts.push(`최고 콤보 ${r.combo}`);
  if (r.speed) parts.push(`최고 속도 ${Math.round(r.speed * 3.6)} KM/H`);
  $('best').innerHTML = parts.join(' &nbsp;·&nbsp; ');
}

// ---------------- boot ----------------
show('menu'); renderBest();
$('loading').classList.add('hidden');
function loop(now) { requestAnimationFrame(loop); game.frame(now); }
requestAnimationFrame(loop);

// test hooks
window.__game = {
  game, S, input,
  start: m => startMode(m),
  sim(sec, keys = []) {
    const g = game; const dt = 1 / 120;
    for (let t = 0; t < sec && g.state === 'play'; t += dt) { keys.forEach(k => input.down.add(k)); g.tick(dt); }
    keys.forEach(k => input.down.delete(k));
  },
  press(c) { input.edges.add(c); input.down.add(c); },
  release(c) { input.down.delete(c); input.releases.add(c); },
};
