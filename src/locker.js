// 보관함 (LOCKER) — browse, buy and equip skins, weapon finishes, emotes and kill effects, with a live
// 3D preview of your runner (it plays the emote you tap). Own small renderer, drawn only while open.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { buildAvatar, emotePose } from './avatar.js';
import { discModel, WEAPONS } from './disc.js';
import { SKINS, WSKINS, EMOTES, KILLFX, RARITY, byId, priceOf, wallet, owns, buy, skinTexture } from './cosmetics.js';
import { buildWeaponModel } from './weapons3d.js';
import { modelsReady } from './models.js';

const TABS = [['skin', '캐릭터', SKINS], ['wskin', '무기 스킨', WSKINS], ['emote', '이모트', EMOTES], ['killfx', '처치 효과', KILLFX]];
const FX_ICON = { cubes: '🧊', confetti: '🎉', pixel: '🟧', bolt: '⚡', hole: '🕳️' };

class AvatarView {
  constructor(canvas) {
    this.canvas = canvas;
    const r = this.r = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
    r.setPixelRatio(Math.min(2, devicePixelRatio)); r.toneMapping = THREE.NeutralToneMapping;
    const sc = this.scene = new THREE.Scene();
    const pm = new THREE.PMREMGenerator(r); sc.environment = pm.fromScene(new RoomEnvironment(), 0.03).texture; pm.dispose();
    sc.add(new THREE.HemisphereLight(0xffffff, 0xb8bec8, 0.9));
    const key = new THREE.DirectionalLight(0xffffff, 2.0); key.position.set(2, 4, 4); sc.add(key);
    const rim = new THREE.DirectionalLight(0xffd9c8, 1.4); rim.position.set(-3, 2, -3); sc.add(rim);
    this.cam = new THREE.PerspectiveCamera(30, 1, 0.1, 30); this.cam.position.set(0, 1.25, 5.2); this.cam.lookAt(0, 0.95, 0);
    const disk = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.9, 0.06, 48), new THREE.MeshStandardMaterial({ color: 0x1b1e25, roughness: 0.4, metalness: 0.6 }));
    disk.position.y = -0.03; sc.add(disk);
    this.ring = new THREE.Mesh(new THREE.TorusGeometry(0.87, 0.012, 6, 96), new THREE.MeshBasicMaterial({ color: 0xff4f14 })); this.ring.rotation.x = Math.PI / 2; this.ring.position.y = 0.005; sc.add(this.ring);
    this.pivot = new THREE.Group(); sc.add(this.pivot);
    this.t = 0; this.emoteT = 0; this.emote = null; this.yaw = Math.PI + 0.35; this.drag = null;
    canvas.addEventListener('pointerdown', e => { this.drag = e.clientX; this.lastX = e.clientX; canvas.setPointerCapture(e.pointerId); });
    canvas.addEventListener('pointermove', e => { if (this.drag !== null) { this.yaw += (e.clientX - this.lastX) * 0.012; this.lastX = e.clientX; } });
    canvas.addEventListener('pointerup', () => { this.drag = null; });
  }
  set(skin, wskin, weapon) {
    const key = skin + wskin + weapon + modelsReady(); if (key === this.key) return; this.key = key;
    this.pivot.clear();
    const A = this.A = buildAvatar(skin, 0xff4f14, 1.6);
    A.handDisc.add(discModel(0xff4f14, WEAPONS[weapon] || WEAPONS.disc, 0.5 * Math.min(1.4, (WEAPONS[weapon] || WEAPONS.disc).scale), 1, wskin));
    this.pivot.add(A.root);
    // a big copy of the weapon floating beside the runner, so finishes are easy to judge
    const big = buildWeaponModel(0xff4f14, WEAPONS[weapon] || WEAPONS.disc, 0.55, 1, 1, wskin);
    big.position.set(0.95, 1.25, 0.1); big.rotation.y = -0.5; this.big = big; this.pivot.add(big);
    this.pop = 0;
  }
  play(id) { this.emote = id; this.emoteT = 0; }
  resize() {
    const w = this.canvas.clientWidth || 300, h = this.canvas.clientHeight || 300;
    if (w === this._w && h === this._h) return; this._w = w; this._h = h;
    this.r.setSize(w, h, false); this.cam.aspect = w / h; this.cam.updateProjectionMatrix();
  }
  frame(dt) {
    this.resize(); this.t += dt;
    if (!this.A) return;
    const R = this.A.rig, root = this.A.root;
    this.pop = Math.min(1, (this.pop || 0) + dt * 3);
    root.scale.setScalar(0.93 * (0.9 + 0.1 * (1 - Math.pow(1 - this.pop, 3))));
    const def = this.emote && EMOTES.find(e => e.id === this.emote);
    if (def) {
      this.emoteT += dt;
      emotePose(R, def.id, this.emoteT, root);
      if (this.emoteT > (def.loop ? 4 : def.dur)) this.emote = null;
    } else {
      // idle: breathe, glance around, hold the disc ready
      emotePose(R, 'none', this.t, root);
      R.chest.rotation.x = Math.sin(this.t * 1.8) * 0.02; R.head.rotation.y = Math.sin(this.t * 0.6) * 0.25;
      R.sh[1].rotation.set(0.7, 0, -0.3); R.el[1].rotation.x = 1.4; R.sh[0].rotation.z = 0.1 + Math.sin(this.t * 1.8) * 0.02;
    }
    if (this.drag === null) this.yaw += dt * 0.25;
    this.pivot.rotation.y = this.yaw + (root.userData.spin || 0);
    if (this.big) { this.big.rotation.z += dt * 1.4; this.big.position.y = 1.25 + Math.sin(this.t * 1.6) * 0.04; }
    this.ring.material.color.setHSL(0.04, 1, 0.5 + Math.sin(this.t * 2) * 0.08);
    this.r.render(this.scene, this.cam);
  }
}

export function installLocker({ $, S, game, show, saveSettings, onChange }) {
  let tab = 'skin', sel = null, view = null;
  const rec = () => wallet(game.records);
  const equipped = (cat, id) => cat === 'emote' ? (S.emotes || []).includes(id) : S[cat] === id;
  function swatch(cat, it) {
    if (cat === 'skin') { const c = skinTexture(it, 'face').image; return `<img class="pix" src="${c.toDataURL()}">`; }
    if (cat === 'wskin') {
      const p = it.pearl || {}, g = it.glow || '#ff4f14';
      return `<i class="sw" style="background:${p.tex ? `linear-gradient(135deg,${p.color || '#fff'},${g})` : `radial-gradient(circle at 35% 30%,#fff,${p.color || '#f4f5f7'} 45%,${(it.graphite && it.graphite.color) || '#1b1e25'} 90%)`};box-shadow:inset 0 0 0 3px ${g}"></i>`;
    }
    if (cat === 'emote') return `<i class="em">${it.icon}</i>`;
    return `<i class="em">${FX_ICON[it.id] || '✦'}</i>`;
  }
  function render() {
    const R0 = rec();
    $('lkCoins').textContent = R0.coins.toLocaleString();
    $('lkTabs').innerHTML = TABS.map(([k, n]) => `<button data-tab="${k}" class="${k === tab ? 'on' : ''}">${n}</button>`).join('');
    const list = TABS.find(t => t[0] === tab)[2];
    $('lkGrid').innerHTML = list.map(it => {
      const own = owns(R0, tab, it.id), eq = equipped(tab, it.id), r = RARITY[it.rarity];
      return `<button class="lkItem ${eq ? 'eq' : ''} ${sel === it.id ? 'sel' : ''} ${own ? '' : 'locked'}" data-id="${it.id}" style="--rc:${r.color}">
        ${swatch(tab, it)}<b>${it.name}</b><small>${own ? (eq ? '장착 중' : r.name) : `🪙 ${priceOf(it).toLocaleString()}`}</small></button>`;
    }).join('');
    $('lkSlots').classList.toggle('hidden', tab !== 'emote');
    if (tab === 'emote') $('lkSlots').innerHTML = '<span>이모트 휠 (최대 4개)</span>' + [0, 1, 2, 3].map(i => { const e = (S.emotes || [])[i]; const d = e && EMOTES.find(x => x.id === e); return `<i>${d ? d.icon : '·'}</i>`; }).join('');
    // detail panel
    const it = list.find(x => x.id === sel) || list.find(x => equipped(tab, x.id)) || list[0];
    const own = owns(R0, tab, it.id), eq = equipped(tab, it.id), r = RARITY[it.rarity];
    $('lkName').textContent = it.name; $('lkRarity').textContent = r.name; $('lkRarity').style.background = r.color;
    const btn = $('lkAct');
    btn.disabled = false;
    if (!own) { btn.textContent = `🪙 ${priceOf(it).toLocaleString()} 구매`; btn.className = 'btn main'; btn.disabled = R0.coins < priceOf(it); }
    else if (tab === 'emote') { btn.textContent = eq ? '휠에서 빼기' : '휠에 넣기'; btn.className = eq ? 'btn' : 'btn main'; }
    else { btn.textContent = eq ? '장착 중 ✓' : '장착하기'; btn.className = eq ? 'btn' : 'btn main'; btn.disabled = eq; }
    btn.onclick = () => act(it);
    // preview what is selected (owned or not)
    const skin = tab === 'skin' ? it.id : owns(R0, 'skin', S.skin) ? S.skin : 'runner';
    const wsk = tab === 'wskin' ? it.id : owns(R0, 'wskin', S.wskin) ? S.wskin : 'std';
    if (view) view.set(skin, wsk, S.weapon);
  }
  function act(it) {
    const R0 = rec();
    if (!owns(R0, tab, it.id)) {
      const r = buy(R0, tab, it.id);
      if (!r.ok) { $('lkMsg').textContent = r.msg; return; }
      $('lkMsg').textContent = `${it.name} 획득!`; game.audio.checkpoint && game.audio.checkpoint(true);
      game.saveRecords();
    }
    if (tab === 'emote') {
      const E = S.emotes = (S.emotes || []).slice();
      const i = E.indexOf(it.id);
      if (i >= 0) E.splice(i, 1); else { if (E.length >= 4) E.shift(); E.push(it.id); }
      if (view) view.play(it.id);
    } else S[tab] = it.id;
    saveSettings(S); render(); onChange && onChange();
  }
  $('lkTabs').addEventListener('click', e => { const b = e.target.closest('[data-tab]'); if (!b) return; tab = b.dataset.tab; sel = null; $('lkMsg').textContent = ''; render(); game.audio.ui(); });
  $('lkGrid').addEventListener('click', e => {
    const b = e.target.closest('.lkItem'); if (!b) return;
    sel = b.dataset.id; $('lkMsg').textContent = ''; game.audio.ui();
    if (tab === 'emote' && view) view.play(sel);
    if (tab === 'killfx') $('lkMsg').textContent = '처치 효과는 내가 상대를 쓰러뜨릴 때 보여요';
    render();
  });
  let last = 0;
  return {
    open() {
      if (!view) { try { view = new AvatarView($('lkCanvas')); } catch { $('lkCanvas').style.display = 'none'; } }
      sel = null; $('lkMsg').textContent = ''; show('locker'); render();
    },
    frame(now) { if (view && !$('locker').classList.contains('hidden') && now - last > 16) { view.frame(Math.min(0.1, (now - last) / 1000)); last = now; } else if ($('locker').classList.contains('hidden')) last = now; },
    render,
  };
}
