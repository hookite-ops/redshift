// LOBBY — the main menu is a place: walk your runner around a round plaza and step onto a portal pad to
// open that mode (랭크전, 봇 1V1, FFA, 아레나, 연습장, AI 훈련소, 보관함, 무기고, 온라인).
// The map itself is maps.js → lobby; this file adds the floating signs, the pad highlights, the giant
// spinning weapon over the plaza, and the card that slides in when you stand on a pad.
import * as THREE from 'three';
import { LOBBY, LOBBY_R } from './maps.js';
import { WEAPONS } from './disc.js';
import { buildWeaponModel } from './weapons3d.js';

const PAD_R = 3.4;

function signTexture(st) {
  const c = document.createElement('canvas'); c.width = 640; c.height = 220;
  const g = c.getContext('2d'), col = '#' + new THREE.Color(st.color).getHexString();
  g.clearRect(0, 0, 640, 220);
  const r = 34, x = 20, y = 30, w = 600, h = 160;
  g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath();
  g.fillStyle = 'rgba(14,16,22,.86)'; g.fill();
  g.fillStyle = col; g.fillRect(x + 34, y + 30, 10, h - 60);
  g.fillStyle = '#fff'; g.font = '900 68px "Noto Sans KR", sans-serif'; g.textBaseline = 'middle';
  g.fillText(st.name, x + 70, y + 62);
  g.fillStyle = 'rgba(255,255,255,.62)'; g.font = '500 32px "Noto Sans KR", sans-serif';
  g.fillText(st.sub, x + 72, y + 120);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}

export function installLobby({ game, $, S, act, startMode, touch, onCard }) {
  const group = new THREE.Group(); group.visible = false; game.scene.add(group);
  const items = LOBBY.map(st => {
    const pad = new THREE.Vector3(Math.sin(st.a) * LOBBY_R, 0, Math.cos(st.a) * LOBBY_R);
    const sign = new THREE.Sprite(new THREE.SpriteMaterial({ map: signTexture(st), transparent: true, depthWrite: false }));
    sign.position.set(pad.x + Math.sin(st.a) * 3.6, 9, pad.z + Math.cos(st.a) * 3.6); sign.scale.set(9, 3.1, 1); sign.renderOrder = 3;
    group.add(sign);
    // a soft disc of the station's colour on the pad: brightens and pulses while you stand on it
    const glow = new THREE.Mesh(new THREE.CircleGeometry(PAD_R - 0.25, 48), new THREE.MeshBasicMaterial({ color: st.color, transparent: true, opacity: 0.14, depthWrite: false }));
    glow.rotation.x = -Math.PI / 2; glow.position.set(pad.x, 0.245, pad.z); group.add(glow);
    // fills the arch ring with a faint film of the station's colour
    const film = new THREE.Mesh(new THREE.CircleGeometry(2.5, 64), new THREE.MeshBasicMaterial({ color: st.color, transparent: true, opacity: 0.18, depthWrite: false }));
    film.position.set(pad.x + Math.sin(st.a) * 3.6, 3.1, pad.z + Math.cos(st.a) * 3.6); film.rotation.y = st.a + Math.PI;   // faces the plaza only group.add(film);
    return { st, pad, sign, glow, film };
  });
  // the giant weapon spinning over the plaza = whatever you have equipped
  const holo = new THREE.Group(); holo.position.set(0, 6.2, 0); group.add(holo);
  let holoW = '';
  const setHolo = () => {
    if (holoW === S.weapon) return; holoW = S.weapon;
    holo.clear();
    const w = WEAPONS[S.weapon] || WEAPONS.disc;
    const m = buildWeaponModel(0xff5a1f, w, 4.2 / Math.max(0.8, w.scale), 1.6, 1.4, game.me.wskin || 'std');
    holo.add(m);
  };

  // ---------------- the card ----------------
  const card = $('lobbyCard'), body = $('lcBody'), go = $('lcGo'), store = $('lobbyStore');
  let cur = null;
  const park = () => { for (const n of [...body.querySelectorAll('[data-keep]')]) store.appendChild(n); body.innerHTML = ''; };
  const block = (title, id) => { const n = $(id); if (!n) return; const h = document.createElement('h3'); h.textContent = title; body.appendChild(h); n.dataset.keep = '1'; body.appendChild(n); };
  const text = t => { const p = document.createElement('p'); p.className = 'lcText'; p.textContent = t; body.appendChild(p); };
  const CARDS = {
    rank: () => { text($('rankBadge').textContent + ' · ' + $('rankSub').textContent); return ['매칭 시작', () => act('rank')]; },
    duel: () => { block('봇 실력', 'botskill'); block('맵', 'maps'); return ['1V1 시작', () => startMode('duel')]; },
    ffa: () => { block('봇 실력', 'botskill'); block('맵', 'maps'); return ['FFA 시작', () => startMode('ffa')]; },
    arena: () => { block('난이도', 'difficulty'); block('맵', 'maps'); return ['아레나 시작', () => startMode('arena')]; },
    practice: () => { text('체크리스트를 따라 하나씩 익혀요. 맞아도 안 죽어요.'); return ['연습장 들어가기', () => startMode('practice')]; },
    ailab: () => { text('스스로 배우는 AI를 훈련시키고, 그 AI가 싸우는 걸 지켜봐요.'); return ['AI 훈련소 열기', () => act('ailab')]; },
    locker: () => { text('캐릭터 스킨 · 무기 스킨 · 이모트 · 처치 효과'); return ['보관함 열기', () => act('locker')]; },
    loadout: () => { block('무기', 'wviewBox'); const w = $('weapons'); w.dataset.keep = '1'; body.appendChild(w); block('스킬', 'skills'); return null; },
    online: () => { text('방을 만들거나 열린 방에 들어가요. PC · 폰 · 앱 모두 같이.'); return ['온라인 대전', () => act('online')]; },
  };
  function open(it) {
    park();
    if (!it) { card.classList.add('hidden'); onCard && onCard(null); return; }
    const st = it.st;
    card.style.setProperty('--lc', '#' + new THREE.Color(st.color).getHexString());
    $('lcTitle').textContent = st.name; $('lcSub').textContent = st.sub;
    const r = CARDS[st.id]();
    go.classList.toggle('hidden', !r);
    if (r) { go.innerHTML = `${r[0]}<kbd>${touch ? '' : 'E'}</kbd>`; go.onclick = () => { game.audio.ui(); r[1](); }; }
    card.classList.remove('hidden');
    game.audio.ui();
    onCard && onCard(st, !!body.querySelector('[data-keep]'));
  }
  // E / Enter starts the station you're standing on
  addEventListener('keydown', e => {
    if (!cur || game.mode !== 'lobby' || game.state !== 'play' || game.menuOpen) return;
    if ((e.code === 'KeyE' || e.code === 'Enter') && !go.classList.contains('hidden')) { e.preventDefault(); go.click(); }
  });

  game.onLobbyTick = () => {
    const p = game.me.body.pos;
    let near = null;
    for (const it of items) if (Math.hypot(p.x - it.pad.x, p.z - it.pad.z) < PAD_R && p.y < 3) { near = it; break; }
    if (near !== cur) { cur = near; open(cur); }
  };

  return {
    frame(dt, t) {
      const on = game.mode === 'lobby' && (game.state === 'play' || game.state === 'paused');
      group.visible = on;
      if (!on) return;
      setHolo();
      holo.rotation.y += dt * 0.6; holo.rotation.x = 0.35 + Math.sin(t * 0.5) * 0.08; holo.position.y = 6.2 + Math.sin(t * 0.9) * 0.3;
      for (const it of items) {
        const active = cur === it;
        it.glow.material.opacity += ((active ? 0.32 + Math.sin(t * 6) * 0.06 : 0.12) - it.glow.material.opacity) * Math.min(1, dt * 8);
        it.film.material.opacity = (active ? 0.34 : 0.16) + Math.sin(t * 2 + it.st.a * 3) * 0.04;
        it.sign.position.y = 9 + Math.sin(t * 1.2 + it.st.a * 2) * 0.12;
      }
    },
    show(on) { $('lobbyHud').classList.toggle('hidden', !on); if (!on) { cur = null; open(null); } },
    get station() { return cur && cur.st; },
  };
}
