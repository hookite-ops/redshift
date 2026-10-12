// Keyboard + mouse with rebindable actions and pointer lock (raw input)
export class Input {
  constructor(canvas, S) {
    this.canvas = canvas; this.S = S;
    this.down = new Set(); this.edges = new Set(); this.releases = new Set();
    this.dx = 0; this.dy = 0; this.locked = false;
    this.capture = null; // rebinding callback
    this.onKey = null; // ui hook (escape etc.)
    const codeOfMouse = b => 'Mouse' + b;
    addEventListener('keydown', e => {
      if (this.capture) { e.preventDefault(); const c = this.capture; this.capture = null; c(e.code); return; }
      if (this.onKey && this.onKey(e)) return;
      if (this.locked) e.preventDefault();
      if (!this.down.has(e.code)) this.edges.add(e.code);
      this.down.add(e.code);
    });
    addEventListener('keyup', e => { if (this.down.has(e.code)) this.releases.add(e.code); this.down.delete(e.code); });
    addEventListener('mousedown', e => {
      if (this.capture) { e.preventDefault(); const c = this.capture; this.capture = null; c(codeOfMouse(e.button)); return; }
      if (!this.locked) return;
      const c = codeOfMouse(e.button); if (!this.down.has(c)) this.edges.add(c); this.down.add(c);
    });
    addEventListener('mouseup', e => { const c = codeOfMouse(e.button); if (this.down.has(c)) this.releases.add(c); this.down.delete(c); });
    addEventListener('contextmenu', e => e.preventDefault());
    addEventListener('mousemove', e => {
      if (!this.locked) return;
      // guard against the occasional pointer-lock spike
      const mx = Math.abs(e.movementX) > 600 ? 0 : e.movementX, my = Math.abs(e.movementY) > 600 ? 0 : e.movementY;
      this.dx += mx; this.dy += my;
    });
    addEventListener('blur', () => { this.down.clear(); });
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === canvas;
      if (!this.locked) this.down.clear();
      this.onLockChange && this.onLockChange(this.locked);
    });
  }
  lock() {
    try {
      const p = this.canvas.requestPointerLock({ unadjustedMovement: true });
      if (p && p.catch) p.catch(() => { try { this.canvas.requestPointerLock(); } catch { } });
    } catch { try { this.canvas.requestPointerLock(); } catch { } }
  }
  unlock() { if (document.pointerLockElement) document.exitPointerLock(); }
  is(a) { const b = this.S.binds[a]; for (let i = 0; i < b.length; i++) if (this.down.has(b[i])) return true; return false; }
  pressed(a) { const b = this.S.binds[a]; for (let i = 0; i < b.length; i++) if (this.edges.has(b[i])) return true; return false; }
  released(a) { const b = this.S.binds[a]; for (let i = 0; i < b.length; i++) if (this.releases.has(b[i])) return true; return false; }
  consumeEdges() { this.edges.clear(); this.releases.clear(); }
  takeMouse() { const r = [this.dx, this.dy]; this.dx = 0; this.dy = 0; return r; }
}
