// Tier emblems — one SVG per tier: a faceted shield in the tier colour, more wings and stars as you climb.
import { TIERS } from './rank.js';

export function tierIndex(r) { let i = 0; TIERS.forEach((t, k) => { if (r >= t.min) i = k; }); return i; }

export function emblemSVG(r, size = 96, glow = true) {
  const i = tierIndex(r), t = TIERS[i], c = t.color, id = 'e' + i + '_' + Math.random().toString(36).slice(2, 7);
  const wings = Math.min(3, Math.floor(i / 2) + (i >= 1 ? 1 : 0));
  const stars = i >= 6 ? 3 : i >= 5 ? 2 : i >= 4 ? 1 : 0;
  let w = '';
  for (let k = 0; k < wings; k++) {
    const o = 6 + k * 7, y = 40 + k * 9;
    w += `<path d="M${30 - o} ${y} L${8 - o} ${y - 14 + k * 3} L${18 - o} ${y + 10} Z" fill="url(#g${id})" opacity="${0.95 - k * 0.2}"/>`;
    w += `<path d="M${70 + o} ${y} L${92 + o} ${y - 14 + k * 3} L${82 + o} ${y + 10} Z" fill="url(#g${id})" opacity="${0.95 - k * 0.2}"/>`;
  }
  let st = '';
  for (let k = 0; k < stars; k++) { const x = 50 + (k - (stars - 1) / 2) * 14; st += `<path d="M${x} 4 l3 6 6 .6 -4.6 4 1.4 6 -5.8 -3.2 -5.8 3.2 1.4 -6 -4.6 -4 6 -.6z" fill="#fff" stroke="${c}" stroke-width="1"/>`; }
  return `<svg viewBox="-20 0 140 110" width="${size}" height="${size * 110 / 140}" aria-label="${t.name}" style="overflow:visible">
  <defs>
    <linearGradient id="g${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".9"/><stop offset=".35" stop-color="${c}"/><stop offset="1" stop-color="${shade(c, -0.45)}"/></linearGradient>
    <linearGradient id="f${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${shade(c, 0.35)}"/><stop offset="1" stop-color="${shade(c, -0.3)}"/></linearGradient>
    ${glow ? `<filter id="b${id}" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4"/></filter>` : ''}
  </defs>
  ${glow ? `<path d="M50 14 L82 28 L78 70 L50 96 L22 70 L18 28 Z" fill="${c}" opacity=".45" filter="url(#b${id})"/>` : ''}
  ${w}
  <path d="M50 14 L82 28 L78 70 L50 96 L22 70 L18 28 Z" fill="#0e1116"/>
  <path d="M50 19 L77 31 L73.5 67.5 L50 90 L26.5 67.5 L23 31 Z" fill="url(#f${id})"/>
  <path d="M50 19 L77 31 L50 50 Z" fill="#fff" opacity=".22"/><path d="M50 50 L73.5 67.5 L50 90 Z" fill="#000" opacity=".18"/>
  <path d="M50 30 L64 38 L62 60 L50 72 L38 60 L36 38 Z" fill="#0e1116" opacity=".85"/>
  <path d="M44 44 L56 44 L50 58 Z" fill="${shade(c, 0.5)}"/>
  <text x="50" y="${i >= 6 ? 66 : 53}" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-weight="700" font-size="${i >= 6 ? 9 : 0}" fill="#fff">RS</text>
  ${st}
</svg>`;
}
function shade(hex, k) {
  const n = parseInt(hex.slice(1), 16); let r = n >> 16, g = (n >> 8) & 255, b = n & 255;
  const f = v => Math.round(k >= 0 ? v + (255 - v) * k : v * (1 + k));
  r = f(r); g = f(g); b = f(b);
  return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}
