// Touch controls for phones/tablets: left thumb = move stick (appears where you touch),
// right thumb = drag to look, buttons for throw / blink / jump / dash / skill. Dragging the throw
// button also aims, like most mobile shooters.
export class Touch {
  constructor(input, S, { onPause } = {}) {
    this.input = input; this.S = S; this.onPause = onPause;
    this.joy = null; this.look = new Map(); this.btn = new Map();
    const root = this.root = document.createElement('div');
    root.id = 'touch'; root.className = 'hidden';
    root.innerHTML = `
      <div class="joy" id="tJoy"><div class="knob"></div></div>
      <button class="tb throw" data-a="throw"><b>던지기</b></button>
      <button class="tb blink" data-a="blink"><b>순간이동</b></button>
      <button class="tb jump" data-a="jump"><b>점프</b></button>
      <button class="tb dash" data-a="dash"><b>대시</b></button>
      <button class="tb skill" data-a="skill"><b>스킬</b><i></i></button>
      <button class="tpause" id="tPause">II</button>`;
    document.body.appendChild(root);
    this.joyEl = root.querySelector('#tJoy'); this.knob = this.joyEl.querySelector('.knob');
    this.skillEl = root.querySelector('.skill'); this.throwEl = root.querySelector('.throw');
    const opt = { passive: false };
    root.addEventListener('touchstart', e => this.start(e), opt);
    root.addEventListener('touchmove', e => this.move(e), opt);
    root.addEventListener('touchend', e => this.end(e), opt);
    root.addEventListener('touchcancel', e => this.end(e), opt);
    root.querySelector('#tPause').addEventListener('touchend', e => { e.preventDefault(); e.stopPropagation(); this.onPause && this.onPause(); });
  }
  show(on) { this.root.classList.toggle('hidden', !on); if (!on) this.reset(); }
  reset() {
    this.joy = null; this.look.clear();
    for (const a of this.btn.values()) this.input.down.delete('T_' + a.a);
    this.btn.clear(); this.input.axis.x = this.input.axis.y = 0;
    this.joyEl.classList.remove('on');
  }
  start(e) {
    e.preventDefault();
    for (const t of e.changedTouches) {
      const b = t.target.closest && t.target.closest('.tb');
      if (b) {
        const a = b.dataset.a;
        this.input.down.add('T_' + a); this.input.edges.add('T_' + a);
        this.btn.set(t.identifier, { a, x: t.clientX, y: t.clientY, el: b }); b.classList.add('on');
        continue;
      }
      if (t.target.id === 'tPause') continue;
      if (t.clientX < innerWidth * 0.42 && !this.joy) {
        this.joy = { id: t.identifier, x: t.clientX, y: t.clientY };
        this.joyEl.style.left = t.clientX + 'px'; this.joyEl.style.top = t.clientY + 'px';
        this.joyEl.classList.add('on'); this.knob.style.transform = 'translate(-50%,-50%)';
      } else this.look.set(t.identifier, { x: t.clientX, y: t.clientY });
    }
  }
  move(e) {
    e.preventDefault();
    const k = 2.4 * (this.S.touchSens || 1);
    for (const t of e.changedTouches) {
      if (this.joy && t.identifier === this.joy.id) {
        const R = Math.min(innerWidth, innerHeight) * 0.12;
        let dx = t.clientX - this.joy.x, dy = t.clientY - this.joy.y;
        const l = Math.hypot(dx, dy);
        if (l > R) { dx *= R / l; dy *= R / l; }
        this.knob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
        const ax = dx / R, ay = -dy / R;
        this.input.axis.x = Math.abs(ax) > 0.22 ? ax : 0; this.input.axis.y = Math.abs(ay) > 0.22 ? ay : 0;
        continue;
      }
      const l = this.look.get(t.identifier) || (this.btn.get(t.identifier)?.a === 'throw' ? this.btn.get(t.identifier) : null);
      if (l) { this.input.dx += (t.clientX - l.x) * k; this.input.dy += (t.clientY - l.y) * k; l.x = t.clientX; l.y = t.clientY; }
    }
  }
  end(e) {
    e.preventDefault();
    for (const t of e.changedTouches) {
      if (this.joy && t.identifier === this.joy.id) { this.joy = null; this.input.axis.x = this.input.axis.y = 0; this.joyEl.classList.remove('on'); continue; }
      const b = this.btn.get(t.identifier);
      if (b) { this.input.down.delete('T_' + b.a); this.input.releases.add('T_' + b.a); b.el.classList.remove('on'); this.btn.delete(t.identifier); continue; }
      this.look.delete(t.identifier);
    }
  }
  // reflect game state on the buttons (called every frame by the HUD)
  update(g) {
    const d = g.disc, me = g.me;
    const label = d.state === 'hand' ? '던지기' : d.state === 'out' ? '회수' : '…';
    if (this._tl !== label) { this._tl = label; this.throwEl.querySelector('b').textContent = label; }
    const cd = me.skillCd > 0 ? Math.ceil(me.skillCd) + '' : '';
    if (this._cd !== cd) { this._cd = cd; this.skillEl.querySelector('i').textContent = cd; this.skillEl.classList.toggle('cool', !!cd); }
  }
}
// primary pointer is a finger (phones/tablets) — touchscreen laptops with a mouse stay on mouse controls
export const isTouchDevice = () => window.REDSHIFT_APP === 'android' || !!(window.matchMedia && matchMedia('(pointer: coarse)').matches);
