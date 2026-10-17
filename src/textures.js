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

// smooth value noise on a canvas-sized grid (tileable): soft cloudy variation for big surfaces
function cloud(S, r, cells, amp) {
  const g = []; for (let i = 0; i < cells * cells; i++) g.push(r());
  const at = (x, y) => g[((y % cells + cells) % cells) * cells + ((x % cells + cells) % cells)];
  const out = new Float32Array(S * S), k = cells / S;
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    const fx = x * k, fy = y * k, ix = Math.floor(fx), iy = Math.floor(fy), tx = fx - ix, ty = fy - iy;
    const sx = tx * tx * (3 - 2 * tx), sy = ty * ty * (3 - 2 * ty);
    const a = at(ix, iy) + (at(ix + 1, iy) - at(ix, iy)) * sx, b = at(ix, iy + 1) + (at(ix + 1, iy + 1) - at(ix, iy + 1)) * sx;
    out[y * S + x] = (a + (b - a) * sy - 0.5) * amp;
  }
  return out;
}

// Floor: polished resin court. One 8 m texture = four 4 m slabs with hairline seams, a soft cloudy sheen
// and a satin finish (low roughness → the sky and the light strips reflect in it).
export function floorTextures(S = 1024) {
  const r = rng(7), N = 2, T = S / N, G = Math.max(2, S / 512);
  const col = canvas(S), cg = col.getContext('2d');
  const hgt = canvas(S), hg = hgt.getContext('2d');
  const rough = canvas(S), rg = rough.getContext('2d');
  cg.fillStyle = '#b9bcc2'; cg.fillRect(0, 0, S, S);
  hg.fillStyle = '#000'; hg.fillRect(0, 0, S, S);
  rg.fillStyle = '#9a9a9a'; rg.fillRect(0, 0, S, S);
  for (let ty = 0; ty < N; ty++) for (let tx = 0; tx < N; tx++) {
    const x = tx * T + G / 2, y = ty * T + G / 2, w = T - G, v = 218 + r() * 5 | 0;
    cg.fillStyle = `rgb(${v - 1},${v},${v + 3})`; cg.fillRect(x, y, w, w);
    hg.fillStyle = '#fff'; hg.fillRect(x, y, w, w);
    const rv = 70 + r() * 18 | 0; rg.fillStyle = `rgb(${rv},${rv},${rv})`; rg.fillRect(x, y, w, w);
  }
  // cloudy tone + polish variation (two scales), very fine grain
  const c1 = cloud(S, r, 6, 10), c2 = cloud(S, r, 24, 4), c3 = cloud(S, r, 10, 40);
  const id = cg.getImageData(0, 0, S, S), d = id.data, rd = rg.getImageData(0, 0, S, S), dd = rd.data;
  for (let i = 0, p = 0; i < d.length; i += 4, p++) {
    const n = c1[p] + c2[p] + (r() - 0.5) * 2.5;
    d[i] += n; d[i + 1] += n; d[i + 2] += n;
    dd[i] = dd[i + 1] = dd[i + 2] = Math.max(0, Math.min(255, dd[i] + c3[p]));
  }
  cg.putImageData(id, 0, 0); rg.putImageData(rd, 0, 0);
  const hb = canvas(S), hbg = hb.getContext('2d'); hbg.filter = 'blur(1px)'; hbg.drawImage(hgt, 0, 0);
  return { map: tex(col, { srgb: true, aniso: 16 }), normalMap: tex(normalFromHeight(hb, 2), { aniso: 16 }), roughnessMap: tex(rough, { aniso: 16 }) };
}

// Wall / block panels: smooth composite cladding — long 4 m × 1 m panels with thin shadow gaps, staggered,
// a faint satin variation. No bolts or vents: clean, architectural.
export function panelTextures(S = 1024) {
  const r = rng(11), cols = 4, rows = 2, PW = S / cols, PH = S / rows, G = Math.max(2, S / 400);
  const col = canvas(S), cg = col.getContext('2d');
  const hgt = canvas(S), hg = hgt.getContext('2d');
  const rough = canvas(S), rg = rough.getContext('2d');
  cg.fillStyle = '#a9acb2'; cg.fillRect(0, 0, S, S);
  hg.fillStyle = '#000'; hg.fillRect(0, 0, S, S);
  rg.fillStyle = '#d0d0d0'; rg.fillRect(0, 0, S, S);
  for (let ry = 0; ry < rows; ry++) {
    const off = 0;
    for (let cx = -1; cx < cols; cx++) {
      const x = cx * PW + off + G / 2, y = ry * PH + G / 2, w = PW - G, h = PH - G, v = 244 + r() * 6 | 0;
      cg.fillStyle = `rgb(${v},${v},${v + 1})`; cg.fillRect(x, y, w, h);
      hg.fillStyle = '#fff'; hg.fillRect(x, y, w, h);
      const rv = 120 + r() * 30 | 0; rg.fillStyle = `rgb(${rv},${rv},${rv})`; rg.fillRect(x, y, w, h);
    }
  }
  const c1 = cloud(S, r, 8, 5);
  const id = cg.getImageData(0, 0, S, S), d = id.data;
  for (let i = 0, p = 0; i < d.length; i += 4, p++) { const n = c1[p] + (r() - 0.5) * 2; d[i] += n; d[i + 1] += n; d[i + 2] += n; }
  cg.putImageData(id, 0, 0);
  const hb = canvas(S), hbg = hb.getContext('2d'); hbg.filter = 'blur(0.8px)'; hbg.drawImage(hgt, 0, 0);
  return { map: tex(col, { srgb: true }), normalMap: tex(normalFromHeight(hb, 2.5)), roughnessMap: tex(rough) };
}

// Graphite: dark brushed composite for structure (bases, caps, columns, stands)
export function graphiteTextures(S = 512) {
  const r = rng(23);
  const col = canvas(S), cg = col.getContext('2d');
  const rough = canvas(S), rg = rough.getContext('2d');
  const id = cg.createImageData(S, S), d = id.data, rid = rg.createImageData(S, S), rd = rid.data;
  const c1 = cloud(S, r, 6, 8);
  const streak = new Float32Array(S); for (let y = 0; y < S; y++) streak[y] = (r() - 0.5) * 10;
  for (let y = 0, p = 0; y < S; y++) for (let x = 0; x < S; x++, p++) {
    const v = 46 + c1[p] + streak[y] * 0.5 + (r() - 0.5) * 3, i = p * 4;
    d[i] = v; d[i + 1] = v + 2; d[i + 2] = v + 6; d[i + 3] = 255;
    const q = 105 + streak[y] * 3 + c1[p] * 2; rd[i] = rd[i + 1] = rd[i + 2] = q; rd[i + 3] = 255;
  }
  cg.putImageData(id, 0, 0); rg.putImageData(rid, 0, 0);
  return { map: tex(col, { srgb: true }), roughnessMap: tex(rough) };
}

// Stadium LED ribbon: dark screen with the map's accent text, scrolled sideways by the arena each frame
export function ledBoardTexture(text, accent = '#ff5a1f', W = 2048, H = 64) {
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d');
  g.fillStyle = '#0b0c10'; g.fillRect(0, 0, W, H);
  const items = [text, 'REDSHIFT', '◆', 'DISC LEAGUE', '◆', text, 'THROW · BANK · BLINK', '◆'];
  g.font = `700 ${H * 0.56}px "Space Grotesk", "Pretendard", sans-serif`; g.textBaseline = 'middle';
  let x = 30; let i = 0;
  while (x < W - 40) {
    const t = items[i++ % items.length];
    g.fillStyle = t === '◆' ? 'rgba(255,255,255,0.5)' : (i % 3 === 0 ? '#ffffff' : accent);
    g.fillText(t, x, H * 0.54); x += g.measureText(t).width + 46;
  }
  // LED pixel grid
  g.fillStyle = 'rgba(0,0,0,0.35)';
  for (let y = 0; y < H; y += 4) g.fillRect(0, y, W, 1);
  for (let xx = 0; xx < W; xx += 4) g.fillRect(xx, 0, 1, H);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = THREE.RepeatWrapping; t.anisotropy = 8;
  return t;
}

// Big centre-court decal: ring + wordmark, drawn white-on-transparent and tinted by the material
export function courtLogoTexture(S = 1024) {
  const c = canvas(S), g = c.getContext('2d');
  g.clearRect(0, 0, S, S);
  g.strokeStyle = '#fff'; g.lineWidth = S * 0.012;
  g.beginPath(); g.arc(S / 2, S / 2, S * 0.47, 0, 7); g.stroke();
  g.lineWidth = S * 0.004; g.beginPath(); g.arc(S / 2, S / 2, S * 0.43, 0, 7); g.stroke();
  g.fillStyle = '#fff'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.font = `700 ${S * 0.13}px "Space Grotesk", sans-serif`;
  g.fillText('RED/SHIFT', S / 2, S / 2);
  g.font = `500 ${S * 0.035}px "Space Grotesk", sans-serif`;
  g.fillText('DISC  LEAGUE', S / 2, S * 0.6);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
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
