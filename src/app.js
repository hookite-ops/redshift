// Bootstrap: settings, menus, pointer lock, main loop
import { Game } from './game.js';
import { installTrainAPI } from './trainlab.js';
import { installLab } from './ailab.js';
import { setShippedBrain, makeBrain } from './neurobot.js';
import SHIPPED_BRAIN from './brain.json';
setShippedBrain(SHIPPED_BRAIN);
import { Input } from './input.js';
import { Net } from './net.js';
import { MAPS } from './maps.js';
import { WeaponView } from './weaponview.js';
import { WEAPONS } from './disc.js';
import { rankState, tierOf, nextTier, applyResult } from './rank.js';
import { Account } from './account.js';
import { emblemSVG } from './emblem.js';
import { installLocker } from './locker.js';
import { wallet, owns, EMOTES, daily } from './cosmetics.js';
import { loadCustomBrain } from './neurobot.js';
import { CUSTOM, openCustomPanel } from './custom.js';
const MAP_NAME = Object.fromEntries(Object.values(MAPS).map(m => [m.id, m.name]));
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
const SCREENS = ['menu', 'pause', 'settings', 'controls', 'death', 'online', 'ailab', 'account', 'ranked', 'locker'];
function show(id) { SCREENS.forEach(s => $(s).classList.toggle('hidden', s !== id)); }
let returnTo = 'menu';

function startMode(mode) {
  if (mode === 'rank') { openRanked(); return; }   // ranked is players-only now (online matchmaking)
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
  if (open('ailab')) { if (!lab.busy) show('menu'); return true; }
  if (open('account')) { show('menu'); return true; }
  if (open('locker')) { show('menu'); renderBest(); return true; }
  if (open('ranked')) { cancelRank(); show('menu'); return true; }
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
  if (a === 'arena' || a === 'practice' || a === 'duel' || a === 'ffa' || a === 'rank') startMode(a);
  else if (a === 'online') { returnTo = 'menu'; openOnline(); show('online'); }
  else if (a === 'settings') { returnTo = game.state === 'paused' || game.menuOpen ? 'pause' : 'menu'; openSettings(); show('settings'); }
  else if (a === 'controls') { returnTo = game.state === 'paused' || game.menuOpen ? 'pause' : 'menu'; buildControls(); show('controls'); }
  else if (a === 'ailab') lab.open();
  else if (a === 'account') { returnTo = 'menu'; openAccount(); }
  else if (a === 'locker') { returnTo = 'menu'; locker.open(); }
  else if (a === 'back') show(returnTo);
  else if (a === 'resume') resume();
  else if (a === 'restart') { forfeit(); startMode(game.ranked ? 'rank' : game.mode); }
  else if (a === 'quit') { forfeit(); toMenu(); }
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
  const hello = { name: S.name, weapon: S.weapon, skill: S.skill, look: myLook() };
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
    const i = document.createElement('b'); i.textContent = `${r.code} · ${MAP_NAME[r.map] || ''} · ${r.humans}명${r.bots ? ' + 봇 ' + r.bots : ''} / ${r.max}`;
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
game.onJoined = m => { if (m && m.ranked) { rkState = 'idle'; clearInterval(rkTimer); $('rkResult').classList.add('hidden'); } enterGame(); };
game.onNetDropped = () => { toMenu(); openOnline(); show('online'); oStatus('서버와 연결이 끊겼어요', 'bad'); };
game.net.onStatus = (st, msg) => { if (st === 'reconnecting') oStatus('다시 연결하는 중…'); };
$('oQuick').onclick = () => joinBy({ t: 'quick' });
$('oCreateBtn').onclick = () => $('oCreateOpts').classList.toggle('hidden');
$('oCreate').onclick = () => joinBy({ t: 'create', name: $('oRoomName').value || `${cleanName($('oName').value)}의 방`, bots: +$('oBots').value, botSkill: $('oBotSkill').value, limit: +$('oLimit').value, priv: $('oPriv').value === '1', map: $('oMap').value });
$('oJoin').onclick = () => { const c = $('oCode').value.trim().toUpperCase(); if (c.length === 4) joinBy({ t: 'join', code: c }); else oStatus('코드 4글자를 넣어 주세요', 'bad'); };
$('oRefresh').onclick = async () => { if (await connectOnline()) game.net.send({ t: 'list' }); };
// only an address the player typed is remembered — otherwise the built-in / shared address keeps working when it moves
$('oServer').addEventListener('change', () => { Net.save($('oServer').value.trim()); if (game.net.ws) game.net.close(); if ($('oServer').value.trim()) connectOnline(); else openOnline(); });

// difficulty
// menu weapon showcase (3D preview + stat bars)
let wview = null;
try { wview = new WeaponView($('wCanvas')); } catch (e) { $('wCanvas').style.display = 'none'; }
const WMAX = { speed: 78, dmg: 58, maxBounces: 6, blinkSlam: 56 };
function renderWeapon() {
  const w = WEAPONS[S.weapon] || WEAPONS.disc;
  if (wview) wview.set(w.id);
  $('wName').textContent = w.name; $('wDesc').textContent = w.desc;
  const set = (id, v, max) => { $(id).style.width = Math.max(6, Math.round(v / max * 100)) + '%'; };
  set('wSpd', w.speed, WMAX.speed); set('wDmg', w.dmg, WMAX.dmg); set('wBnc', w.maxBounces + 0.3, WMAX.maxBounces); set('wSlam', w.blinkSlam, WMAX.blinkSlam);
}
function renderDifficulty() {
  renderWeapon();
  document.querySelectorAll('#difficulty button').forEach(b => b.classList.toggle('on', b.dataset.df === S.difficulty));
  document.querySelectorAll('#botskill button').forEach(b => b.classList.toggle('on', b.dataset.bs === S.botSkill));
  document.querySelectorAll('#weapons button').forEach(b => b.classList.toggle('on', b.dataset.wp === S.weapon));
  document.querySelectorAll('#skills button').forEach(b => b.classList.toggle('on', b.dataset.sk === S.skill));
  document.querySelectorAll('#maps button').forEach(b => b.classList.toggle('on', b.dataset.mp === (S.map || 'random')));
}
// settings → 내 파일: what was found in public/custom
{ const n = [...CUSTOM.status.values()].filter(x => x.ok).length, bad = [...CUSTOM.status.values()].filter(x => !x.ok).length;
  $('sCustomN').textContent = n || bad ? `${n}개 적용${bad ? ` · ${bad}개 오류` : ''}` : '없음 (기본 모양)';
  $('sCustom').onclick = () => { game.audio.ui(); openCustomPanel(); }; }
// maps made in public/custom/maps that aren't one of the five: extra buttons (offline modes)
for (const m of CUSTOM.extraMaps) {
  const b = document.createElement('button'); b.dataset.mp = m.id; b.innerHTML = `${m.name}<small>내가 만든 맵</small>`;
  $('maps').appendChild(b);
}
document.querySelectorAll('#maps button').forEach(b => b.addEventListener('click', () => { S.map = b.dataset.mp; saveSettings(S); renderDifficulty(); game.audio.init(); game.audio.ui(); }));
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
  sl('TouchSens', 'touchSens', v => (+v).toFixed(2)); sel('TouchLayout', 'touchLayout', false); sel('KeyHints', 'keyHints'); sel('Fps', 'fps'); sel('Full', 'full'); sel('Adaptive', 'adaptive', true, () => { if (!S.adaptive) { game.pr = game.prMax; game.resize(); } });
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

// leaving a ranked match early counts as a loss (no dodging a bad game)
function forfeit() {
  if (!game.ranked || game.match.over || game.state === 'dead') return;
  const bot = game.fighters[1];
  applyResult(rankState(game.records), game.me.kills, Math.max(game.match.limit, bot ? bot.kills : 0));
  game.saveRecords(); game.ranked = false;
}
function renderRank() {
  const rs = acc.rank || { r: 1000, games: 0, wins: 0, streak: 0 }, t = tierOf(rs.r), nx = nextTier(rs.r);
  $('rankBadge').textContent = `${t.name} ${rs.r}`; $('rankBadge').style.color = t.color;
  $('rankSub').textContent = rs.games
    ? `${rs.wins}승 ${rs.games - rs.wins}패${rs.streak > 1 ? ` · ${rs.streak}연승 중` : ''}${nx ? ` · ${nx.name}까지 ${nx.min - rs.r} RP` : ' · 최고 티어'}`
    : '사람끼리 1V1 · 비슷한 실력과 매칭';
}
// ---------------- 랭크전 (사람끼리) ----------------
let rkState = 'idle', rkT0 = 0, rkTimer = 0;
function renderRanked() {
  const rs = acc.rank || { r: 1000, games: 0, wins: 0, losses: 0, streak: 0, best: 1000 }, t = tierOf(rs.r), nx = nextTier(rs.r);
  $('rkEmblem').innerHTML = emblemSVG(rs.r, 130);
  $('rkTier').textContent = t.name; $('rkTier').style.color = t.color; $('rkRp').textContent = rs.r;
  const lo = t.min, hi = nx ? nx.min : t.min + 300;
  $('rkBarFill').style.width = Math.max(4, Math.min(100, (rs.r - lo) / (hi - lo) * 100)) + '%';
  $('rkNext').textContent = nx ? `${nx.name}까지 ${nx.min - rs.r} RP` : '최고 티어!';
  const losses = rs.losses ?? (rs.games - rs.wins);
  $('rkStats').innerHTML = `<div><em>${rs.games}</em>경기</div><div><em>${rs.wins}</em>승</div><div><em>${losses}</em>패</div><div><em>${rs.streak > 0 ? rs.streak + '연승' : rs.streak < 0 ? -rs.streak + '연패' : '—'}</em>${rs.best ? '최고 ' + rs.best : ''}</div>`;
  $('rkGuest').innerHTML = acc.signedIn ? '' : '게스트로 플레이 중이에요. <b>구글로 로그인</b>하면 랭크가 계정에 남아서 다른 기기에서도 이어져요.';
  $('rkSearch').classList.toggle('hidden', rkState !== 'searching');
  $('rkFind').classList.toggle('hidden', rkState === 'searching');
  $('rkCancel').classList.toggle('hidden', rkState !== 'searching');
}
function openRanked() { returnTo = 'menu'; $('rkMsg').textContent = ''; show('ranked'); renderRanked(); acc.refresh().then(() => { renderRanked(); renderRank(); }); }
async function findRank() {
  $('rkMsg').textContent = ''; rkState = 'searching'; rkT0 = performance.now(); renderRanked();
  $('rkSearchT').textContent = '서버 연결 중…'; $('rkSearchS').textContent = '';
  try {
    await acc.ensureSession();
    let base = Net.defaultServer(); if (!base) base = await Net.discover();
    if (!base) throw new Error('서버 주소를 몰라요 — 온라인 화면에서 서버 주소를 먼저 넣어 주세요');
    const hello = { name: S.name, weapon: S.weapon, skill: S.skill, look: myLook() };
    if (!(game.net.open && game.net.base === base)) { if (game.net.ws) game.net.close(); await game.net.connect(base, hello); }
    if (rkState !== 'searching') return;
    game.net.send({ t: 'rankq', token: acc.token, name: S.name, weapon: S.weapon, skill: S.skill });
    $('rkSearchT').textContent = '상대 찾는 중…';
    clearInterval(rkTimer);
    rkTimer = setInterval(() => { const s = Math.round((performance.now() - rkT0) / 1000); $('rkSearchT').textContent = `상대 찾는 중… ${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; }, 500);
  } catch (e) { rkState = 'idle'; renderRanked(); $('rkMsg').textContent = e.message; $('rkMsg').className = 'lstatus bad'; }
}
function cancelRank() {
  if (rkState !== 'searching') return;
  rkState = 'idle'; clearInterval(rkTimer);
  if (game.net.open) game.net.send({ t: 'rankcancel' });
  renderRanked();
}
$('rkFind').onclick = () => { game.audio.init(); game.audio.ui(); findRank(); };
$('rkCancel').onclick = () => cancelRank();
game.onRankQueue = m => {
  if (m.state === 'searching') { const p = Math.max(0, (m.players || 1) - 1); $('rkSearchS').textContent = `내 점수 ${m.r} RP 근처에서 찾는 중 · 대기 중인 다른 사람 ${p}명 · 오래 기다릴수록 범위가 넓어져요`; }
  else if (m.state === 'error' || m.state === 'cancelled') { rkState = 'idle'; clearInterval(rkTimer); renderRanked(); if (m.msg) { $('rkMsg').textContent = m.msg; $('rkMsg').className = 'lstatus bad'; } }
};
let rkResult = null;
game.onRankResult = m => {
  rkResult = m; acc.rank = m.rank; acc.persist(); renderRank();
  rkState = 'idle'; clearInterval(rkTimer);
  if (m.forfeit && m.result === 'win') { game.banner('승리!', '상대가 나갔어요', 2.5); setTimeout(() => game.onRankClosed && game.onRankClosed(), 2600); }
};
game.onRankClosed = () => {
  if (game.online) game.leaveOnline();
  game.online = false; game.rankedOnline = null;
  toMenu(); openRanked();
  const m = rkResult; if (!m) return;
  const el = $('rkResult'); el.className = 'rkResult ' + m.result; el.classList.remove('hidden');
  el.innerHTML = `<div class="big">${m.result === 'win' ? 'VICTORY' : m.result === 'loss' ? 'DEFEAT' : 'DRAW'}</div>
    <div class="score">${m.score[0]} : ${m.score[1]} · vs ${esc(m.op)}${m.forfeit ? ' · 기권' : ''}</div>
    <div class="delta"><span id="rkDelta">${m.delta >= 0 ? '+' : ''}0</span> RP</div>
    ${m.tier !== m.tierBefore ? `<div class="promo">${m.delta > 0 ? `${m.tier} 승급!` : `${m.tier}(으)로 강등`}</div>` : ''}`;
  // count the RP change up
  const t0 = performance.now(), D = m.delta;
  const step = () => { const k = Math.min(1, (performance.now() - t0) / 900), v = Math.round(D * (1 - Math.pow(1 - k, 3))); const e = $('rkDelta'); if (e) e.textContent = (D >= 0 ? '+' : '') + v; if (k < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
  rkResult = null;
};
function myLook() {
  const rec = wallet(game.records), ok = (c, id, d) => owns(rec, c, id) ? id : d;
  return { skin: ok('skin', S.skin, 'runner'), wskin: ok('wskin', S.wskin, 'std'), killfx: ok('killfx', S.killfx, 'cubes') };
}
function renderBest() {
  renderRank();
  $('menuCoins').textContent = wallet(game.records).coins.toLocaleString();
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
// ---------------- 계정 연동 (Google) ----------------
const esc = t => String(t || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const acc = new Account({
  game, S,
  onChange: () => renderAccount(),
  onApplied: () => { loadCustomBrain(); applySettings(); renderDifficulty(); renderBest(); },
});
const pendingLink = (new URLSearchParams(location.search).get('link') || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
function renderChip() {
  const on = acc.signedIn, u = acc.user || {};
  $('accChip').classList.toggle('on', on);
  $('accName').textContent = on ? (u.name || '내 계정') : '구글로 로그인';
  $('accSub').textContent = on ? (acc.lastSync ? '동기화됨 ✓' : '연결됨') : '기록·랭크를 모든 기기에서';
  const pic = $('accPic');
  if (on && u.picture) { pic.style.backgroundImage = `url("${u.picture}")`; pic.textContent = ''; }
  else { pic.style.backgroundImage = ''; pic.textContent = on ? (u.name || '?').slice(0, 1) : 'G'; }
}
async function renderAccount() {
  renderChip();
  if ($('account').classList.contains('hidden')) return;
  const body = $('accBody'), u = acc.user || {};
  $('accMsg').textContent = acc.msg || '';
  if (acc.status === 'linking' && acc.link) {
    body.innerHTML = `<div class="accText">휴대폰 <b>브라우저</b>가 열려요. 거기서 구글로 로그인하면 이 앱이 자동으로 연결돼요.<br>브라우저가 안 열리면 아래 주소를 직접 열고 코드를 넣어 주세요.</div>
      <div class="linkCode">${esc(acc.link.code)}</div><div class="linkUrl">${esc(acc.link.url)}</div>
      <div class="row2"><button class="btn main" id="accOpen">브라우저 다시 열기</button><button class="btn" id="accCancel">취소</button></div>`;
    $('accOpen').onclick = () => acc.openBrowser(acc.link.url); $('accCancel').onclick = () => acc.cancelLink();
    return;
  }
  if (acc.signedIn) {
    const rs = rankState(game.records), t = tierOf(rs.r);
    body.innerHTML = `<div class="accProfile">${u.picture ? `<img src="${esc(u.picture)}" referrerpolicy="no-referrer">` : '<div class="ph"></div>'}<div><b>${esc(u.name)}</b><small>${esc(u.email)}</small></div></div>
      <div class="accText">이 계정에 <b>랭크 · 기록 · 설정 · AI 두뇌</b>가 저장돼요. 다른 폰·패드·PC·앱에서 같은 구글 계정으로 로그인하면 그대로 이어져요.</div>
      <div class="accList"><div><em>${esc(t.name)}</em>${rs.r} RP</div><div><em>${rs.wins}</em>랭크 승</div><div><em>${game.records.duelWin || 0}</em>1V1 승</div><div><em>${acc.lastSync ? new Date(acc.lastSync).toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }) : '—'}</em>마지막 저장</div></div>
      ${acc.app ? '' : `<h3>앱(APK·EXE) 연결하기</h3><div class="accText" style="margin-bottom:4px">앱에 뜬 6자리 코드를 넣으면 그 앱이 이 계정으로 로그인돼요.</div><div class="accRow"><input id="accCode" maxlength="6" placeholder="ABC123" value="${esc(pendingLink)}"><button class="btn main" id="accApprove">연결</button></div>`}
      <div class="row2" style="margin-top:10px"><button class="btn" id="accSync">지금 동기화</button><button class="btn" id="accOut">로그아웃</button></div>`;
    $('accSync').onclick = async () => { acc.set('busy', '동기화 중…'); try { await acc.refresh(); await acc.push(true); acc.set('signed', '동기화했어요 ✓'); } catch (e) { acc.set('signed', e.message); } };
    $('accOut').onclick = () => acc.logout();
    if ($('accApprove')) $('accApprove').onclick = () => acc.approve($('accCode').value);
    return;
  }
  const cfg = await acc.config();
  const warn = !cfg.clientId ? `<div class="accWarn">구글 로그인 준비가 아직 안 됐어요 (서버에 구글 클라이언트 ID가 없어요). 설정이 끝나면 바로 쓸 수 있어요.</div>`
    : cfg.storage === 'memory' ? `<div class="accWarn">서버 저장소(Firestore)가 아직 없어서, 서버가 다시 켜지면 클라우드 저장이 지워질 수 있어요.</div>` : '';
  body.innerHTML = `${warn}<div class="accText">구글 계정으로 로그인하면 <b>랭크 · 기록 · 설정 · AI 두뇌</b>가 클라우드에 저장돼서, 폰·패드·PC·앱 어디서든 이어서 할 수 있어요.${pendingLink ? '<br><b>앱 연결 중이에요 — 로그인하면 앱이 바로 연결돼요.</b>' : ''}</div>
    ${acc.app ? `<button class="btn main" id="accLink">구글로 로그인 (브라우저에서)</button>` : `<div id="gBtn"></div>`}`;
  if (acc.app) $('accLink').onclick = () => acc.startLink();
  else if (cfg.clientId && !(await acc.renderGoogleButton($('gBtn')))) $('gBtn').innerHTML = '<div class="accWarn">구글 로그인 버튼을 불러오지 못했어요. 인터넷 연결을 확인해 주세요.</div>';
}
function openAccount() { show('account'); renderAccount(); }
// signed in on the site because an app asked (?link=CODE): finish the link automatically
const _afterLogin = acc.afterLogin.bind(acc);
acc.afterLogin = async j => { await _afterLogin(j); if (pendingLink) await acc.approve(pendingLink); };
renderChip();
show('menu'); renderBest();
if (pendingLink) openAccount();
acc.refresh().then(() => { if (pendingLink && acc.signedIn) acc.approve(pendingLink); });
$('loading').classList.add('hidden');
// (the offline trainer sets __trainHeadless: no drawing at all, every CPU cycle goes to the matches)
let wvLast = 0;
function loop(now) {
  if (window.__trainHeadless) return;
  requestAnimationFrame(loop); game.frame(now); locker.frame(now);
  // weapon preview: only while the main menu is showing, ~30 fps
  if (wview && now - wvLast > 33 && !$('menu').classList.contains('hidden')) { wview.frame(Math.min(0.1, (now - wvLast) / 1000)); wvLast = now; }
}
requestAnimationFrame(loop);

// ---------------- AI 훈련소 ----------------
// watch the learned bot play: it takes over YOUR slot (first-person view) against a 최강 bot
function spectate() {
  const keep = S.botSkill; S.botSkill = 'max';
  game.start('duel');
  S.botSkill = keep;
  game.me.brain = makeBrain(game, game.me, null);
  game.banner('AI 관전', '학습 AI 시점 · 상대는 최강 봇 · ESC 로 나가기', 3);
  enterGame();
  if (touchMode) game.touchUI.show(false);
}
const lab = installLab(game, { $, show, onSpectate: spectate });

// ---------------- 보관함 · 이모트 ----------------
const locker = installLocker({ $, S, game, show, saveSettings, onChange: () => { renderBest(); if (game.net.open) game.net.send({ t: 'loadout', weapon: S.weapon, skill: S.skill, look: myLook() }); } });
// emote wheel: B (or the 😀 button on touch) opens it; 1–4 or a tap plays one; moving cancels the emote
function wheelOpen(on) {
  const w = $('emoteWheel');
  if (on === undefined) on = w.classList.contains('hidden');
  if (!on) { w.classList.add('hidden'); return; }
  const list = (S.emotes || []).filter(id => owns(wallet(game.records), 'emote', id)).slice(0, 4);
  const pos = [[0.5, 0.15], [0.85, 0.5], [0.5, 0.85], [0.15, 0.5]];
  w.innerHTML = '<div class="mid">EMOTE<br><small>1–4</small></div>' + list.map((id, i) => { const d = EMOTES.find(e => e.id === id); return `<button data-e="${id}" style="left:${pos[i][0] * 100}%;top:${pos[i][1] * 100}%"><kbd>${i + 1}</kbd>${d.icon}<small>${d.name}</small></button>`; }).join('');
  w.classList.remove('hidden');
}
function playEmote(id) { wheelOpen(false); if (id) game.emote(id); }
$('emoteWheel').addEventListener('click', e => { const b = e.target.closest('[data-e]'); playEmote(b ? b.dataset.e : null); });
$('emoteWheel').addEventListener('pointerdown', e => e.stopPropagation());
$('emoteBtn').addEventListener('pointerdown', e => { e.stopPropagation(); e.preventDefault(); wheelOpen(); });
game.onEmoteKey = () => wheelOpen();
addEventListener('keydown', e => {
  if ($('emoteWheel').classList.contains('hidden')) return;
  const n = /^Digit([1-4])$/.exec(e.code); if (!n) return;
  const id = ((S.emotes || []).filter(x => owns(wallet(game.records), 'emote', x)))[+n[1] - 1];
  playEmote(id);
});
// daily coins
{ const got = daily(wallet(game.records)); if (got) { game.saveRecords(); setTimeout(() => { $('menuCoins').textContent = wallet(game.records).coins.toLocaleString(); }, 0); } }

// test hooks
installTrainAPI(game);
window.__acc = acc;
window.__game = {
  game, S, input, renderWeapon,
  start: m => startMode(m),
  sim(sec, keys = []) {
    const g = game; const dt = 1 / 120;
    for (let t = 0; t < sec && g.state === 'play'; t += dt) { keys.forEach(k => input.down.add(k)); g.tick(dt); }
    keys.forEach(k => input.down.delete(k));
  },
  press(c) { input.edges.add(c); input.down.add(c); },
  release(c) { input.down.delete(c); input.releases.add(c); },
};
