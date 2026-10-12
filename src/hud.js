// DOM HUD — cached writes so layout work stays tiny each frame
import * as THREE from 'three';

const $ = id => document.getElementById(id);
export const RANKS = [
  { r: 'D', n: 'DULL', at: 0 }, { r: 'C', n: 'CUTTING', at: 20 }, { r: 'B', n: 'BRUTAL', at: 42 },
  { r: 'A', n: 'APEX', at: 64 }, { r: 'S', n: 'SAVAGE', at: 86 }, { r: 'SS', n: 'SUPERSONIC', at: 108 }, { r: 'R', n: 'REDLINE', at: 132 },
];

export class HUD {
  constructor() {
    this.cache = {};
    this.dnums = [];
    this.threatEls = [];
    this.v = new THREE.Vector3();
  }
  text(id, v) { if (this.cache[id] !== v) { this.cache[id] = v; $(id).textContent = v; } }
  html(id, v) { if (this.cache['h' + id] !== v) { this.cache['h' + id] = v; $(id).innerHTML = v; } }
  style(id, prop, v) { const k = id + prop; if (this.cache[k] !== v) { this.cache[k] = v; $(id).style[prop] = v; } }
  show(id, on) { const k = 'vis' + id; if (this.cache[k] !== on) { this.cache[k] = on; $(id).classList.toggle('hidden', !on); } }

  buildPips(id, n, color) {
    const el = $(id); el.innerHTML = '';
    for (let i = 0; i < n; i++) { const p = document.createElement('div'); p.className = 'pip'; p.innerHTML = `<i style="background:${color};box-shadow:0 0 8px ${color}"></i>`; el.appendChild(p); }
  }
  setPips(id, full, partial) {
    const el = $(id);
    for (let i = 0; i < el.children.length; i++) {
      const f = i < full ? 1 : i === full ? partial : 0;
      const k = id + i + ':' + Math.round(f * 40);
      if (this.cache[id + i] === k) continue; this.cache[id + i] = k;
      const s = el.children[i].firstChild.style; s.transform = `scaleX(${f})`; s.opacity = f >= 1 ? 1 : 0.35;
    }
  }
  setRounds(n, max, shotgun) {
    const k = n + '/' + max + shotgun;
    if (this.cache.rounds === k) return; this.cache.rounds = k;
    $('rounds').innerHTML = Array.from({ length: max }, (_, i) => `<div class="rd${shotgun ? ' sh' : ''}${i >= n ? ' off' : ''}"></div>`).join('');
    $('ammoNum').innerHTML = `${n}<small> / ${max}</small>`;
  }

  banner(big, small) {
    const b = $('banner'); $('bannerBig').textContent = big; $('bannerSmall').textContent = small || '';
    b.classList.remove('bannerAnim'); void b.offsetWidth; b.classList.add('bannerAnim');
  }
  feed(text, pts) {
    const d = document.createElement('div'); d.className = 'feedItem';
    d.innerHTML = text + (pts ? `<b>+${pts}</b>` : '');
    const f = $('feed'); f.prepend(d); setTimeout(() => d.remove(), 2300);
    while (f.children.length > 6) f.lastChild.remove();
  }
  popup(text, color) {
    const p = $('popup'); p.textContent = text; p.style.color = color;
    p.animate([{ opacity: 0, transform: 'translateX(-50%) scale(1.7)' }, { opacity: 1, transform: 'translateX(-50%) scale(1)', offset: 0.14 }, { opacity: 1, offset: 0.7 }, { opacity: 0, transform: 'translateX(-50%) translateY(-12px)' }], { duration: 950, easing: 'ease-out' });
  }
  hint(text, dur = 2500) {
    const h = $('hint'); h.textContent = text; h.style.opacity = 1;
    clearTimeout(this._hintT); this._hintT = setTimeout(() => h.style.opacity = 0, dur);
  }
  hitmarker(head) {
    const h = $('hit'); h.classList.toggle('head', !!head);
    h.animate([{ opacity: 1, transform: 'rotate(45deg) scale(1.35)' }, { opacity: 0, transform: 'rotate(45deg) scale(1)' }], { duration: 230 });
  }
  parryRing(color = '#30e0ff') {
    const r = $('parryRing'); r.style.borderColor = color;
    r.animate([{ opacity: 1, transform: 'scale(.55)' }, { opacity: 0, transform: 'scale(1.9)' }], { duration: 380, easing: 'ease-out' });
  }
  damageNumber(pos, n, kind = '') {
    const d = document.createElement('div'); d.className = 'dnum ' + kind; d.textContent = typeof n === 'number' ? Math.round(n) : n;
    $('dnums').appendChild(d);
    this.dnums.push({ el: d, pos: pos.clone(), life: 0.9, vy: 2.2 + Math.random(), vx: (Math.random() - 0.5) * 1.6 });
  }
  damageDir(ang) {
    const el = document.createElement('div'); el.className = 'dmgdir';
    const r = 160; el.style.left = (Math.sin(-ang) * r) + 'px'; el.style.top = (-Math.cos(ang) * r) + 'px'; el.style.transform = `rotate(${-ang}rad)`;
    $('threats').appendChild(el); el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 950 }).onfinish = () => el.remove();
  }
  stagger(on) { $('staggerTxt').style.opacity = on ? 1 : 0; }

  // per-frame
  update(dt, g) {
    const p = g.player;
    const kmh = Math.round(p.hSpeed * 3.6);
    this.text('speedNum', kmh);
    this.style('speedFill', 'width', Math.min(100, p.speed / 50 * 100).toFixed(1) + '%');
    const m = g.momentum();
    this.text('momentum', m > 0.04 ? `MOMENTUM ×${(1 + m * 1.5).toFixed(1)}` : '');
    this.setPips('dashPips', p.dashCharges, p.dashRegen / 1.6);
    this.setPips('hookPips', p.grappleCharges, (p.grapple || p.hook) ? 0 : p.grappleRegen / 2.4);
    this.setPips('iaiPips', g.iaidoCd <= 0 ? 1 : 0, 1 - g.iaidoCd / 2.6);
    // vitals
    g.hpGhost += (g.hp - g.hpGhost) * Math.min(1, dt * 3); if (g.hpGhost < g.hp) g.hpGhost = g.hp;
    this.style('hpFill', 'transform', `scaleX(${(g.hp / 100).toFixed(3)})`);
    this.style('hpGhost', 'transform', `scaleX(${(g.hpGhost / 100).toFixed(3)})`);
    this.text('hpNum', Math.ceil(g.hp));
    this.style('instFill', 'transform', `scaleX(${(g.pInst / 100).toFixed(3)})`);
    const low = Math.max(0, 0.45 - g.hp / 100) / 0.45;
    this.style('lowhp', 'boxShadow', `inset 0 0 ${Math.round(140 + low * 140)}px rgba(255,0,30,${(low * 0.7).toFixed(2)})`);
    // ammo
    const w = g.weapon;
    this.text('ammoLbl', w.name);
    this.setRounds(g.ammo, w.mag, w.id === 'shotgun');
    this.text('reloadTxt', g.reloadT > 0 ? 'RELOADING' : g.ammo === 0 ? 'R — 재장전' : '');
    // style rank
    const ri = g.rankIdx();
    this.text('rank', RANKS[ri].r); this.text('rankName', RANKS[ri].n);
    const nx = RANKS[ri + 1];
    this.style('rankFill', 'width', (nx ? (g.style - RANKS[ri].at) / (nx.at - RANKS[ri].at) * 100 : 100).toFixed(0) + '%');
    this.text('mult', '×' + g.styleMult().toFixed(2));
    this.style('rank', 'color', ri >= 6 ? '#ff2a48' : ri >= 4 ? '#ffc23a' : '#fff');
    if (this.cache.ri !== undefined && ri > this.cache.ri) $('rank').animate([{ transform: 'scale(1.5)' }, { transform: 'scale(1)' }], { duration: 260 });
    this.cache.ri = ri;
    this.text('scoreTxt', g.mode === 'trial' ? fmtTime(g.trialTime) : g.score.toLocaleString());
    // charge ring
    this.style('chargeRing', 'opacity', g.charge > 0 ? 1 : 0);
    this.style('chargeRing', '--p', ''); $('chargeRing').style.setProperty('--p', (Math.min(1, g.charge) * 100).toFixed(0) + '%');
    $('chargeRing').style.background = `conic-gradient(${g.charge >= 1 ? '#fff' : '#ffc23a'} ${(Math.min(1, g.charge) * 100).toFixed(0)}%, transparent 0)`;
    // crosshair spread (dynamic)
    const spread = 1 + Math.min(1.2, p.speed / 40) * 0.6 + g.recoilUI * 1.5;
    if (Math.abs((this.cache.spread || 0) - spread) > 0.02) {
      this.cache.spread = spread;
      ['t1', 't2', 't3', 't4'].forEach((c, i) => { const el = document.querySelector('#cross .' + c); const d = (spread - 1) * 8; el.style.transform = i === 0 ? `translateY(${-d}px)` : i === 1 ? `translateY(${d}px)` : i === 2 ? `translateX(${-d}px)` : `translateX(${d}px)`; });
    }
    // threat indicators (enemies winding up / snipers aiming)
    const threats = g.enemies.filter(e => e.alive && (e.state === 'windup' || e.state === 'aim') && e.pos.distanceTo(p.pos) < (e.type === 'sniper' ? 200 : 40));
    while (this.threatEls.length < threats.length) { const el = document.createElement('div'); el.className = 'threat'; $('threats').appendChild(el); this.threatEls.push(el); }
    const fyaw = Math.atan2(-Math.sin(p.yaw), -Math.cos(p.yaw));
    this.threatEls.forEach((el, i) => {
      const e = threats[i]; if (!e) { el.style.display = 'none'; return; }
      el.style.display = 'block';
      const d = this.v.subVectors(e.pos, p.pos);
      const ang = Math.atan2(d.x, d.z) - fyaw;
      const r = 70 + Math.min(50, d.length() * 1.5);
      el.style.left = (Math.sin(-ang) * r - 12) + 'px'; el.style.top = (-Math.cos(ang) * r - 10) + 'px';
      el.style.transform = `rotate(${-ang}rad)`;
      const col = e.parryable === false ? '#ff3048' : e.type === 'sniper' ? '#b066ff' : '#ffc23a';
      el.style.borderBottomColor = col; el.style.color = col;
    });
    // damage numbers
    const cam = g.camera;
    for (let i = this.dnums.length - 1; i >= 0; i--) {
      const d = this.dnums[i]; d.life -= dt; d.pos.y += d.vy * dt; d.pos.x += d.vx * dt;
      const pp = this.v.copy(d.pos).project(cam);
      if (d.life <= 0 || pp.z > 1) { d.el.remove(); this.dnums.splice(i, 1); continue; }
      d.el.style.left = ((pp.x + 1) / 2 * innerWidth).toFixed(0) + 'px'; d.el.style.top = ((1 - pp.y) / 2 * innerHeight).toFixed(0) + 'px';
      d.el.style.opacity = Math.min(1, d.life * 3).toFixed(2);
    }
    // time-trial arrow
    if (g.mode === 'trial' && g.cpTarget) {
      this.show('cpArrow', true); this.show('cpInfo', true);
      const d = this.v.subVectors(g.cpTarget, p.pos);
      const ang = Math.atan2(d.x, d.z) - fyaw;
      $('cpArrow').firstChild.style.transform = `rotate(${-ang}rad)`;
      this.text('cpInfo', `CHECKPOINT ${g.cpIndex + 1} / ${g.map.checkpoints.length}   ·   ${Math.round(d.length())} m`);
    } else { this.show('cpArrow', false); this.show('cpInfo', false); }
  }
}

export function fmtTime(t) {
  const m = Math.floor(t / 60), s = t - m * 60;
  return `${m}:${s < 10 ? '0' : ''}${s.toFixed(2)}`;
}
