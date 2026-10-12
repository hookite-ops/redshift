// Procedural canvas textures (no image files needed)
import * as THREE from 'three';

export function rng(seed) {
  let s = seed >>> 0;
  return () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

function canvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; }
function tex(c, { repeat = true, srgb = true, aniso = 8 } = {}) {
  const t = new THREE.CanvasTexture(c);
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = aniso;
  return t;
}

// Building facade: returns {map, emissive}
export function facadeTexture(seed, style = 0) {
  const W = 512, H = 1024;
  const [c, g] = canvas(W, H);
  const [e, ge] = canvas(W, H);
  const r = rng(seed);
  const base = ['#16161d', '#1a1418', '#12161c', '#1c1a1a'][style % 4];
  g.fillStyle = base; g.fillRect(0, 0, W, H);
  ge.fillStyle = '#000'; ge.fillRect(0, 0, W, H);
  // panel noise
  for (let i = 0; i < 1500; i++) { g.fillStyle = `rgba(255,255,255,${r() * 0.025})`; g.fillRect(r() * W, r() * H, 2 + r() * 30, 1 + r() * 6); }
  const cols = style === 2 ? 6 : 8, rows = style === 2 ? 14 : 20;
  const cw = W / cols, rh = H / rows;
  const palettes = [
    ['#ffcf9a', '#ffd8b0', '#ff3048', '#9ae6ff', '#ffe6c8'],
    ['#8fd8ff', '#c8f0ff', '#ff3a6a', '#ffffff', '#6aa8ff'],
    ['#ff9ad0', '#ffd0f0', '#30e0ff', '#ffcf9a', '#ff3048'],
    ['#ffe0a0', '#fff0d0', '#ff5040', '#80ffd0', '#ffd090'],
  ][style % 4];
  const litChance = [0.28, 0.2, 0.34, 0.24][style % 4];
  for (let y = 0; y < rows; y++) {
    // whole floor sometimes lit/dark
    const floorBias = r() < 0.15 ? 0.6 : r() < 0.2 ? -0.2 : 0;
    for (let x = 0; x < cols; x++) {
      const px = x * cw + cw * 0.14, py = y * rh + rh * 0.2, pw = cw * 0.72, ph = rh * 0.58;
      // glass
      const gg = g.createLinearGradient(px, py, px, py + ph);
      gg.addColorStop(0, '#2a3044'); gg.addColorStop(1, '#0c0e16');
      g.fillStyle = gg; g.fillRect(px, py, pw, ph);
      if (r() < litChance + floorBias) {
        const col = palettes[(r() * (r() < 0.8 ? 2 : palettes.length)) | 0];
        const k = 0.5 + r() * 0.5;
        ge.globalAlpha = k; ge.fillStyle = col; ge.fillRect(px, py, pw, ph);
        // blinds / silhouettes
        if (r() < 0.4) { ge.globalAlpha = 0.55; ge.fillStyle = '#000'; for (let b = 0; b < ph; b += 4) ge.fillRect(px, py + b, pw, 2); }
        if (r() < 0.15) { ge.globalAlpha = 0.8; ge.fillStyle = '#000'; ge.fillRect(px + pw * r() * 0.6, py + ph * 0.35, pw * 0.25, ph * 0.65); }
        ge.globalAlpha = 1;
        g.fillStyle = col; g.globalAlpha = 0.35 * k; g.fillRect(px, py, pw, ph); g.globalAlpha = 1;
      }
    }
    // floor slab band
    g.fillStyle = 'rgba(0,0,0,0.55)'; g.fillRect(0, y * rh, W, rh * 0.12);
    g.fillStyle = 'rgba(255,255,255,0.05)'; g.fillRect(0, y * rh + rh * 0.12, W, 2);
  }
  // vertical mullions
  g.fillStyle = 'rgba(0,0,0,0.5)';
  for (let x = 0; x <= cols; x++) g.fillRect(x * cw - 3, 0, 6, H);
  return { map: tex(c), emissive: tex(e) };
}

export function asphaltTextures() {
  const S = 1024;
  const [c, g] = canvas(S, S);
  const [rc, rg] = canvas(S, S);
  const r = rng(99);
  g.fillStyle = '#17171d'; g.fillRect(0, 0, S, S);
  for (let i = 0; i < 40000; i++) {
    const v = 20 + r() * 40 | 0;
    g.fillStyle = `rgba(${v},${v},${v + 6},${0.25 + r() * 0.4})`;
    g.fillRect(r() * S, r() * S, 1 + r() * 2, 1 + r() * 2);
  }
  // concrete tiles
  g.strokeStyle = 'rgba(0,0,0,0.6)'; g.lineWidth = 4;
  for (let i = 0; i <= S; i += 128) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, S); g.stroke(); g.beginPath(); g.moveTo(0, i); g.lineTo(S, i); g.stroke(); }
  g.strokeStyle = 'rgba(120,125,150,0.08)'; g.lineWidth = 1;
  for (let i = 2; i <= S; i += 128) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, S); g.stroke(); g.beginPath(); g.moveTo(0, i); g.lineTo(S, i); g.stroke(); }
  // roughness: mid-rough with glossy puddles
  rg.fillStyle = 'rgb(150,150,150)'; rg.fillRect(0, 0, S, S);
  for (let i = 0; i < 26; i++) {
    const x = r() * S, y = r() * S, rad = 30 + r() * 110;
    const gr = rg.createRadialGradient(x, y, 0, x, y, rad);
    gr.addColorStop(0, 'rgb(20,20,20)'); gr.addColorStop(0.7, 'rgb(40,40,40)'); gr.addColorStop(1, 'rgba(150,150,150,0)');
    rg.fillStyle = gr; rg.beginPath(); rg.ellipse(x, y, rad, rad * (0.5 + r() * 0.5), r() * 3, 0, Math.PI * 2); rg.fill();
    // darken albedo in puddles (wet)
    const ga = g.createRadialGradient(x, y, 0, x, y, rad);
    ga.addColorStop(0, 'rgba(0,0,0,0.45)'); ga.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = ga; g.beginPath(); g.ellipse(x, y, rad, rad * 0.7, r() * 3, 0, Math.PI * 2); g.fill();
  }
  for (let i = 0; i < 20000; i++) { const v = 110 + r() * 90 | 0; rg.fillStyle = `rgb(${v},${v},${v})`; rg.fillRect(r() * S, r() * S, 2, 2); }
  return { map: tex(c, { aniso: 16 }), rough: tex(rc, { srgb: false, aniso: 16 }) };
}

export function panelTexture(seed = 3, accent = '#ff2a48') {
  const S = 512; const [c, g] = canvas(S, S); const r = rng(seed);
  g.fillStyle = '#1d1e26'; g.fillRect(0, 0, S, S);
  for (let i = 0; i < 3000; i++) { g.fillStyle = `rgba(255,255,255,${r() * 0.03})`; g.fillRect(r() * S, r() * S, 2, 2); }
  g.strokeStyle = '#0c0c10'; g.lineWidth = 6; g.strokeRect(3, 3, S - 6, S - 6);
  g.strokeStyle = '#2c2e3a'; g.lineWidth = 2; g.strokeRect(10, 10, S - 20, S - 20);
  g.strokeStyle = '#121218'; g.lineWidth = 3;
  g.beginPath(); g.moveTo(S / 2, 10); g.lineTo(S / 2, S - 10); g.moveTo(10, S / 2); g.lineTo(S - 10, S / 2); g.stroke();
  // bolts
  g.fillStyle = '#3a3c48';
  for (const [x, y] of [[24, 24], [S - 24, 24], [24, S - 24], [S - 24, S - 24]]) { g.beginPath(); g.arc(x, y, 6, 0, 7); g.fill(); }
  // warning stripes strip
  g.save(); g.beginPath(); g.rect(0, S - 34, S, 24); g.clip();
  for (let x = -40; x < S + 40; x += 40) { g.fillStyle = accent; g.beginPath(); g.moveTo(x, S - 34); g.lineTo(x + 20, S - 34); g.lineTo(x + 44, S - 10); g.lineTo(x + 24, S - 10); g.fill(); }
  g.restore();
  return tex(c);
}

export function concreteTexture(seed = 5) {
  const S = 512; const [c, g] = canvas(S, S); const r = rng(seed);
  g.fillStyle = '#25252c'; g.fillRect(0, 0, S, S);
  for (let i = 0; i < 9000; i++) { const v = r() * 255 | 0; g.fillStyle = `rgba(${v},${v},${v},${r() * 0.05})`; g.fillRect(r() * S, r() * S, 1 + r() * 4, 1 + r() * 4); }
  for (let i = 0; i < 30; i++) { g.fillStyle = `rgba(0,0,0,${0.05 + r() * 0.1})`; g.fillRect(r() * S, 0, 1 + r() * 3, S); }
  g.strokeStyle = 'rgba(0,0,0,0.4)'; g.lineWidth = 3; g.strokeRect(0, 0, S, S);
  return tex(c);
}

// Ramp surface: chevrons pointing up-slope (v axis)
export function rampTexture() {
  const W = 256, H = 256; const [c, g] = canvas(W, H);
  g.fillStyle = '#1a1c24'; g.fillRect(0, 0, W, H);
  for (let i = 0; i < 2000; i++) { g.fillStyle = `rgba(255,255,255,${Math.random() * 0.03})`; g.fillRect(Math.random() * W, Math.random() * H, 2, 2); }
  g.strokeStyle = 'rgba(48,224,255,0.9)'; g.lineWidth = 10; g.lineCap = 'square';
  g.beginPath(); g.moveTo(60, 170); g.lineTo(128, 100); g.lineTo(196, 170); g.stroke();
  g.fillStyle = 'rgba(48,224,255,0.6)'; g.fillRect(0, 0, 8, H); g.fillRect(W - 8, 0, 8, H);
  return tex(c);
}
export function rampEmissive() {
  const W = 256, H = 256; const [c, g] = canvas(W, H);
  g.fillStyle = '#000'; g.fillRect(0, 0, W, H);
  g.strokeStyle = '#30e0ff'; g.lineWidth = 10; g.lineCap = 'square';
  g.beginPath(); g.moveTo(60, 170); g.lineTo(128, 100); g.lineTo(196, 170); g.stroke();
  g.fillStyle = '#30e0ff'; g.fillRect(0, 0, 6, H); g.fillRect(W - 6, 0, 6, H);
  return tex(c);
}

export function signTexture(text, color, { w = 1024, h = 256, font = '900 150px "Orbitron","Noto Sans KR",sans-serif', frame = true } = {}) {
  const [c, g] = canvas(w, h);
  g.clearRect(0, 0, w, h);
  g.textAlign = 'center'; g.textBaseline = 'middle'; g.font = font;
  g.shadowColor = color; g.shadowBlur = 40; g.fillStyle = color;
  g.fillText(text, w / 2, h / 2 + 6);
  g.shadowBlur = 0; g.fillStyle = '#ffffff'; g.globalAlpha = 0.7; g.fillText(text, w / 2, h / 2 + 6); g.globalAlpha = 1;
  if (frame) { g.strokeStyle = color; g.lineWidth = 8; g.shadowBlur = 30; g.strokeRect(14, 14, w - 28, h - 28); }
  const t = tex(c, { repeat: false }); return t;
}

export function bladeTexture() {
  const [c, g] = canvas(1024, 64);
  const grd = g.createLinearGradient(0, 0, 0, 64);
  grd.addColorStop(0, '#f6f6ff'); grd.addColorStop(0.42, '#b0b2c0'); grd.addColorStop(0.5, '#ffffff'); grd.addColorStop(1, '#4a4c58');
  g.fillStyle = grd; g.fillRect(0, 0, 1024, 64);
  g.strokeStyle = 'rgba(255,255,255,0.9)'; g.lineWidth = 3; g.beginPath();
  for (let x = 0; x <= 1024; x += 6) g.lineTo(x, 22 + Math.sin(x * 0.05) * 5 + Math.sin(x * 0.17) * 3);
  g.stroke();
  for (let i = 0; i < 400; i++) { g.fillStyle = `rgba(255,255,255,${Math.random() * 0.15})`; g.fillRect(Math.random() * 1024, Math.random() * 64, 6, 1); }
  return tex(c, { repeat: false });
}

export function wrapTexture() {
  const [c, g] = canvas(64, 256);
  g.fillStyle = '#0c0c10'; g.fillRect(0, 0, 64, 256);
  g.strokeStyle = '#8a0c1c'; g.lineWidth = 8;
  for (let y = -64; y < 320; y += 32) { g.beginPath(); g.moveTo(0, y); g.lineTo(64, y + 32); g.stroke(); g.beginPath(); g.moveTo(64, y); g.lineTo(0, y + 32); g.stroke(); }
  g.fillStyle = 'rgba(255,255,255,0.08)';
  for (let y = 0; y < 256; y += 32) g.fillRect(28, y + 12, 8, 8);
  return tex(c);
}

export function noiseTexture(size = 256) {
  const [c, g] = canvas(size, size); const img = g.createImageData(size, size);
  for (let i = 0; i < img.data.length; i += 4) { const v = Math.random() * 255; img.data[i] = img.data[i + 1] = img.data[i + 2] = v; img.data[i + 3] = 255; }
  g.putImageData(img, 0, 0);
  return tex(c, { srgb: false });
}
