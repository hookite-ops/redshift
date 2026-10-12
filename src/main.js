// Bootstrap: settings, menus, pointer lock, main loop
import { Game } from './game.js';
import { Input } from './input.js';
import { ACTIONS, DEFAULT_BINDS, loadSettings, saveSettings, loadRecords, saveRecords, keyName } from './settings.js';

const $ = id => document.getElementById(id);
const S = loadSettings();
const canvas = $('c');
const input = new Input(canvas, S);
let game;

try {
  game = new Game(canvas, S, input);
} catch (err) {
  $('loading').innerHTML = `<div style="font-family:'Noto Sans KR';letter-spacing:1px;color:#fff;text-align:center;line-height:1.8">WebGL을 시작하지 못했어요.<br><span style="color:#999;font-size:13px">${String(err && err.message || err)}</span></div>`;
  throw err;
}
game.records = loadRecords();
game.saveRecords = () => saveRecords(game.records);

// ---------------- screens ----------------
const SCREENS = ['menu', 'pause', 'settings', 'controls', 'death'];
function show(id) { SCREENS.forEach(s => $(s).classList.toggle('hidden', s !== id)); }
let returnTo = 'menu';

function startMode(mode) {
  game.start(mode);
  show(null);
  $('hud').classList.remove('hidden');
  $('clickTo').classList.add('hidden');
  if (S.full && !document.fullscreenElement) {
    const p = document.documentElement.requestFullscreen?.();
    p && p.then(() => navigator.keyboard?.lock?.(['KeyW', 'KeyA', 'KeyS', 'KeyD', 'KeyC', 'KeyQ', 'KeyE', 'KeyF', 'KeyR', 'KeyT', 'KeyV', 'Space', 'ShiftLeft', 'ControlLeft']).catch(() => { })).catch(() => { });
  }
  input.lock();
}
function pause() { if (game.state !== 'play') return; game.state = 'paused'; show('pause'); }
function resume() { show(null); $('clickTo').classList.remove('hidden'); input.lock(); }
function toMenu() {
  game.state = 'menu'; game.clearWorld(); show('menu'); $('hud').classList.add('hidden'); $('clickTo').classList.add('hidden');
  input.unlock();
  if (document.fullscreenElement) document.exitFullscreen?.();
  renderBest();
}
game.onEnd = (title, stats) => {
  game.state = 'dead';
  input.unlock();
  $('endTitle').textContent = title;
  $('endStats').innerHTML = stats.map(([a, b]) => `<div class="stat"><span>${a}</span><b>${b}</b></div>`).join('');
  $('hud').classList.add('hidden');
  show('death');
};

input.onLockChange = locked => {
  if (locked) { $('clickTo').classList.add('hidden'); if (game.state === 'paused') { game.state = 'play'; show(null); } }
  else if (game.state === 'play') pause();
};
input.onKey = e => {
  if (e.code === 'Escape') {
    if (game.state === 'play') { input.unlock(); pause(); return true; }
    if (!$('settings').classList.contains('hidden') || !$('controls').classList.contains('hidden')) { show(returnTo); return true; }
  }
  return false;
};
canvas.addEventListener('mousedown', () => { if ((game.state === 'play' || game.state === 'paused') && !input.locked && $('pause').classList.contains('hidden')) input.lock(); });
$('clickTo').addEventListener('mousedown', () => input.lock());
addEventListener('beforeunload', e => { if (game.state === 'play') { e.preventDefault(); e.returnValue = ''; } });

document.querySelectorAll('[data-act]').forEach(b => b.addEventListener('click', () => {
  game.audio.init(); game.audio.setVolumes(S.sfx, S.music); game.audio.ui();
  const a = b.dataset.act;
  if (a === 'arena' || a === 'trial' || a === 'training') startMode(a);
  else if (a === 'settings') { returnTo = game.state === 'paused' ? 'pause' : 'menu'; openSettings(); show('settings'); }
  else if (a === 'controls') { returnTo = game.state === 'paused' ? 'pause' : 'menu'; buildControls(); show('controls'); }
  else if (a === 'back') show(returnTo);
  else if (a === 'resume') resume();
  else if (a === 'restart') startMode(game.mode);
  else if (a === 'quit') toMenu();
}));

// loadout
function renderLoadout() { document.querySelectorAll('#loadout button').forEach(b => b.classList.toggle('on', b.dataset.lo === S.loadout)); }
document.querySelectorAll('#loadout button').forEach(b => b.addEventListener('click', () => { S.loadout = b.dataset.lo; saveSettings(S); renderLoadout(); game.audio.init(); game.audio.ui(); }));
renderLoadout();

function buildControls() {
  $('ctrlGrid').innerHTML = ACTIONS.map(([a, n]) => `<div><span>${n}</span><b>${S.binds[a].map(keyName).join(' / ')}</b></div>`).join('') + `<div><span>일시정지</span><b>ESC</b></div>`;
}
function openSettings() {
  const sl = (id, key, fmt = v => v) => {
    const el = $('s' + id), vl = $('v' + id);
    el.value = S[key]; vl.textContent = fmt(S[key]);
    el.oninput = () => { S[key] = parseFloat(el.value); vl.textContent = fmt(S[key]); saveSettings(S); applySettings(); };
  };
  sl('Sens', 'sens', v => (+v).toFixed(2)); sl('Fov', 'fov'); sl('FovFx', 'fovFx'); sl('Shake', 'shake', v => (+v).toFixed(2));
  sl('Tilt', 'tilt', v => (+v).toFixed(2)); sl('Bob', 'bob', v => (+v).toFixed(2)); sl('Blur', 'blur', v => (+v).toFixed(2));
  sl('Sfx', 'sfx', v => Math.round(v * 100)); sl('Music', 'music', v => Math.round(v * 100));
  const sel = (id, key, num = true, after) => { const el = $('s' + id); el.value = String(S[key]); el.onchange = () => { S[key] = num ? +el.value : el.value; saveSettings(S); applySettings(); after && after(); }; };
  sel('AutoHop', 'autoHop'); sel('Fps', 'fps'); sel('Full', 'full'); sel('Cross', 'crosshair', false);
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
        saveSettings(S); renderBinds();
      };
    }, 50);
  });
  $('resetBinds').onclick = () => { S.binds = JSON.parse(JSON.stringify(DEFAULT_BINDS)); saveSettings(S); renderBinds(); };
}
function applySettings() {
  game.audio.setVolumes(S.sfx, S.music);
  $('fps').classList.toggle('hidden', !S.fps);
  document.documentElement.style.setProperty('--xc', S.crosshair);
}
applySettings();

function renderBest() {
  const r = game.records;
  const parts = [];
  if (r.score) parts.push(`아레나 최고 ${r.score.toLocaleString()}점 · WAVE ${r.wave}`);
  if (r.trial) parts.push(`타임 어택 ${Math.floor(r.trial / 60)}:${(r.trial % 60).toFixed(2).padStart(5, '0')}`);
  if (r.speed) parts.push(`최고 속도 ${Math.round(r.speed * 3.6)} KM/H`);
  $('best').innerHTML = parts.join('<br>');
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
    for (let t = 0; t < sec; t += dt) { keys.forEach(k => input.down.add(k)); g.tick(dt); }
    keys.forEach(k => input.down.delete(k));
  },
  press(c) { input.edges.add(c); input.down.add(c); },
  release(c) { input.down.delete(c); input.releases.add(c); },
};
