// Procedural textures for the white arena: everything is drawn on canvases at start-up (no image files),
// including normal maps made from height maps, so panels and floor tiles catch the light for real.
import * as THREE from 'three';

function canvas(S) { const c = document.createElement('canvas'); c.width = c.height = S; return c; }
// tiny deterministic random so every launch looks the same
function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }

// height canvas (grey = height) → tangent-space normal map
function normalFromHeight(hc, strength = 2) {
  const S = hc.width, src = hc.getContext('2d').getImageData(0, 0, S, S).data;
  const out = canvas(S), g = out.getContext('2d'), img = g.createImageData(S, S), d = img.data;
  const h = (x, y) => src[(((y + S) % S) * S + ((x + S) % S)) * 4] / 255;
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    const dx = (h(x + 1, y) - h(x - 1, y)) * strength, dy = (h(x, y + 1) - h(x, y - 1)) * strength;
    const l = Math.hypot(dx, dy, 1), i = (y * S + x) * 4;
    d[i] = (-dx / l * 0.5 + 0.5) * 255; d[i + 1] = (dy / l * 0.5 + 0.5) * 255; d[i + 2] = (1 / l * 0.5 + 0.5) * 255; d[i + 3] = 255;
  }
  g.putImageData(img, 0, 0); return out;
}
function tex(c, { srgb = false, repeat = true, aniso = 8 } = {}) {
  const t = new THREE.CanvasTexture(c);
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = aniso; return t;
}

// Floor: 8 m × 8 m of 2 m tiles — slightly glossy tiles, rough grout, a little tone variation per tile.
export function floorTextures(S = 1024) {
  const r = rng(7), N = 4, T = S / N, G = Math.max(3, S / 256);
  const col = canvas(S), cg = col.getContext('2d');
  const hgt = canvas(S), hg = hgt.getContext('2d');
  const rough = canvas(S), rg = rough.getContext('2d');
  cg.fillStyle = '#d9d9d5'; cg.fillRect(0, 0, S, S);
  hg.fillStyle = '#000'; hg.fillRect(0, 0, S, S);
  rg.fillStyle = '#e6e6e6'; rg.fillRect(0, 0, S, S);
  for (let ty = 0; ty < N; ty++) for (let tx = 0; tx < N; tx++) {
    const x = tx * T + G / 2, y = ty * T + G / 2, w = T - G, v = 242 + r() * 9 | 0;
    cg.fillStyle = `rgb(${v},${v},${v - 2})`; cg.fillRect(x, y, w, w);
    // faint diagonal sheen so big floors don't look like flat paper
    const grd = cg.createLinearGradient(x, y, x + w, y + w);
    grd.addColorStop(0, 'rgba(255,255,255,0.35)'); grd.addColorStop(1, 'rgba(0,0,0,0.035)');
    cg.fillStyle = grd; cg.fillRect(x, y, w, w);
    hg.fillStyle = '#fff'; hg.fillRect(x + 1, y + 1, w - 2, w - 2);
    const rv = 95 + r() * 30 | 0; rg.fillStyle = `rgb(${rv},${rv},${rv})`; rg.fillRect(x, y, w, w);
    // small inset marker in some tile corners (test-chamber feel)
    if (r() < 0.35) { cg.fillStyle = 'rgba(0,0,0,0.06)'; cg.fillRect(x + w * 0.06, y + w * 0.06, w * 0.05, w * 0.05); }
  }
  // speckle noise
  const id = cg.getImageData(0, 0, S, S), d = id.data;
  for (let i = 0; i < d.length; i += 4) { const n = (r() - 0.5) * 6; d[i] += n; d[i + 1] += n; d[i + 2] += n; }
  cg.putImageData(id, 0, 0);
  // soft blur on the height so the grout is a bevel, not a cliff
  const hb = canvas(S), hbg = hb.getContext('2d'); hbg.filter = 'blur(1.5px)'; hbg.drawImage(hgt, 0, 0);
  return { map: tex(col, { srgb: true, aniso: 16 }), normalMap: tex(normalFromHeight(hb, 3), { aniso: 16 }), roughnessMap: tex(rough, { aniso: 16 }) };
}

// Wall / block panels: 8 m texture of 2 m × 2 m panels with grooves, a few bolts and service hatches.
export function panelTextures(S = 1024) {
  const r = rng(11), N = 4, T = S / N, G = Math.max(4, S / 200);
  const col = canvas(S), cg = col.getContext('2d');
  const hgt = canvas(S), hg = hgt.getContext('2d');
  const rough = canvas(S), rg = rough.getContext('2d');
  cg.fillStyle = '#cfcfcb'; cg.fillRect(0, 0, S, S);
  hg.fillStyle = '#000'; hg.fillRect(0, 0, S, S);
  rg.fillStyle = '#fff'; rg.fillRect(0, 0, S, S);
  for (let ty = 0; ty < N; ty++) for (let tx = 0; tx < N; tx++) {
    const x = tx * T + G / 2, y = ty * T + G / 2, w = T - G, v = 246 + r() * 7 | 0;
    cg.fillStyle = `rgb(${v},${v},${v})`; cg.fillRect(x, y, w, w);
    hg.fillStyle = '#c8c8c8'; hg.fillRect(x, y, w, w);
    hg.fillStyle = '#fff'; hg.fillRect(x + G, y + G, w - 2 * G, w - 2 * G); // raised panel face
    const rv = 150 + r() * 40 | 0; rg.fillStyle = `rgb(${rv},${rv},${rv})`; rg.fillRect(x, y, w, w);
    // bolts
    for (const [bx, by] of [[0.06, 0.06], [0.94, 0.06], [0.06, 0.94], [0.94, 0.94]]) {
      hg.fillStyle = '#7a7a7a'; hg.beginPath(); hg.arc(x + w * bx, y + w * by, G * 0.9, 0, 7); hg.fill();
      cg.fillStyle = 'rgba(0,0,0,0.12)'; cg.beginPath(); cg.arc(x + w * bx, y + w * by, G * 0.7, 0, 7); cg.fill();
    }
    const k = r();
    if (k < 0.18) { // vent slats
      for (let i = 0; i < 6; i++) { hg.fillStyle = '#909090'; hg.fillRect(x + w * 0.3, y + w * (0.3 + i * 0.07), w * 0.4, G * 0.8); cg.fillStyle = 'rgba(0,0,0,0.07)'; cg.fillRect(x + w * 0.3, y + w * (0.3 + i * 0.07), w * 0.4, G * 0.8); }
    } else if (k < 0.3) { // hatch outline
      hg.strokeStyle = '#a0a0a0'; hg.lineWidth = G * 0.6; hg.strokeRect(x + w * 0.25, y + w * 0.25, w * 0.5, w * 0.5);
      cg.strokeStyle = 'rgba(0,0,0,0.06)'; cg.lineWidth = G * 0.5; cg.strokeRect(x + w * 0.25, y + w * 0.25, w * 0.5, w * 0.5);
    } else if (k < 0.36) { // small orange caution tag
      cg.fillStyle = '#ff5a1f'; cg.fillRect(x + w * 0.08, y + w * 0.82, w * 0.12, w * 0.04);
    }
  }
  const id = cg.getImageData(0, 0, S, S), d = id.data;
  for (let i = 0; i < d.length; i += 4) { const n = (r() - 0.5) * 5; d[i] += n; d[i + 1] += n; d[i + 2] += n; }
  cg.putImageData(id, 0, 0);
  const hb = canvas(S), hbg = hb.getContext('2d'); hbg.filter = 'blur(1px)'; hbg.drawImage(hgt, 0, 0);
  return { map: tex(col, { srgb: true }), normalMap: tex(normalFromHeight(hb, 2.2)), roughnessMap: tex(rough) };
}

// Baked contact shadow for the floor: blurred dark footprints of everything standing on it.
// shapes: [{x, z, w, d, ry, k}] boxes (k = darkness 0..1) or {x, z, r, k} circles; covers [-E, E]² metres.
export function floorAO(shapes, E, S = 512) {
  const c = canvas(S), g = c.getContext('2d');
  g.fillStyle = '#fff'; g.fillRect(0, 0, S, S);
  const m = S / (2 * E);
  const draw = (pad, alpha) => {
    for (const s of shapes) {
      g.save(); g.translate((s.x + E) * m, (s.z + E) * m); g.globalAlpha = alpha * (s.k ?? 1); g.fillStyle = '#000';
      if (s.r) { g.beginPath(); g.arc(0, 0, (s.r + pad) * m, 0, 7); g.fill(); }
      else { g.rotate(-(s.ry || 0)); g.fillRect(-(s.w / 2 + pad) * m, -(s.d / 2 + pad) * m, (s.w + 2 * pad) * m, (s.d + 2 * pad) * m); }
      g.restore();
    }
  };
  // layered falloff (works even where canvas blur filters are missing)
  for (const [pad, a] of [[1.6, 0.06], [1.0, 0.08], [0.55, 0.1], [0.25, 0.14], [0.05, 0.2]]) draw(pad, a);
  const out = canvas(S), og = out.getContext('2d'); og.filter = 'blur(3px)'; og.drawImage(c, 0, 0);
  const t = new THREE.CanvasTexture(out);
  t.channel = 1; return t;
}

// Soft round glow sprite (for light cones / sparks)
export function glowTexture(S = 128) {
  const c = canvas(S), g = c.getContext('2d');
  const grd = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(0.35, 'rgba(255,255,255,0.45)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd; g.fillRect(0, 0, S, S);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
