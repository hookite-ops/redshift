// COSMETICS — character skins (blocky pixel outfits), weapon skins, emotes, kill effects, and the coins
// that unlock them. Everything is drawn in code (16×16 pixel canvases), nothing to download.
import * as THREE from 'three';

export const RARITY = {
  common: { name: '일반', color: '#8a93a0', price: 300 },
  rare: { name: '희귀', color: '#2f8cff', price: 600 },
  epic: { name: '영웅', color: '#a24bff', price: 1200 },
  legendary: { name: '전설', color: '#ff9a14', price: 2500 },
};

// ---------------------------------------------------------------- character skins
// p = palette: skin (face), hair, top, top2 (detail), bottom, shoe, glow (accent); look = drawing style
export const SKINS = [
  { id: 'runner', name: '기본 러너', rarity: 'common', free: true, look: 'runner', p: { skin: '#f1c9a5', hair: '#2b2f38', top: '#f4f5f7', top2: '#ff4f14', bottom: '#2a2e36', shoe: '#f4f5f7', glow: '#ff4f14' } },
  { id: 'jumpsuit', name: '오렌지 점프슈트', rarity: 'common', look: 'jumpsuit', p: { skin: '#e8b48d', hair: '#5a3a22', top: '#ff7a1a', top2: '#ffd2a8', bottom: '#ff7a1a', shoe: '#3a3f48', glow: '#ffffff' } },
  { id: 'hoodie', name: '해커 후드', rarity: 'rare', look: 'hoodie', p: { skin: '#d9a07a', hair: '#1a1c22', top: '#2d3340', top2: '#3ddc84', bottom: '#1d2129', shoe: '#e6e8eb', glow: '#3ddc84' } },
  { id: 'ninja', name: '블록 닌자', rarity: 'rare', look: 'ninja', p: { skin: '#e8b48d', hair: '#14161b', top: '#1b1e25', top2: '#e8202f', bottom: '#1b1e25', shoe: '#14161b', glow: '#ff2e43' } },
  { id: 'scout', name: '숲의 정찰병', rarity: 'rare', look: 'scout', p: { skin: '#e2b088', hair: '#6b4a2b', top: '#3f7a3a', top2: '#2b5a28', bottom: '#5b4632', shoe: '#3a2a1c', glow: '#9be36a' } },
  { id: 'astro', name: '우주비행사', rarity: 'epic', look: 'astro', p: { skin: '#f1c9a5', hair: '#ffffff', top: '#f2f3f5', top2: '#2f6bff', bottom: '#e4e7ec', shoe: '#9aa2ad', glow: '#ffb02e' } },
  { id: 'robot', name: '로봇 R-07', rarity: 'epic', look: 'robot', p: { skin: '#8d96a3', hair: '#5e6672', top: '#a9b1bc', top2: '#4c5560', bottom: '#7b8490', shoe: '#3d444e', glow: '#19c3ff' } },
  { id: 'penguin', name: '펭귄 옷', rarity: 'epic', look: 'penguin', p: { skin: '#ffffff', hair: '#1a1d24', top: '#1a1d24', top2: '#ffffff', bottom: '#1a1d24', shoe: '#ffa21a', glow: '#ffa21a' } },
  { id: 'neon', name: '네온 펑크', rarity: 'epic', look: 'neon', p: { skin: '#e8b48d', hair: '#ff2fa0', top: '#121419', top2: '#19e6ff', bottom: '#121419', shoe: '#ff2fa0', glow: '#ff2fa0' } },
  { id: 'golem', name: '용암 골렘', rarity: 'legendary', look: 'golem', p: { skin: '#3a3533', hair: '#2a2624', top: '#3a3533', top2: '#ff6a1a', bottom: '#2f2a28', shoe: '#221f1d', glow: '#ff6a1a' } },
  { id: 'frost', name: '얼음 기사', rarity: 'legendary', look: 'frost', p: { skin: '#cfe9ff', hair: '#e9f6ff', top: '#bfe3ff', top2: '#5ab8ff', bottom: '#9fd0f5', shoe: '#e9f6ff', glow: '#7fd4ff' } },
  { id: 'champ', name: '골드 챔피언', rarity: 'legendary', look: 'champ', p: { skin: '#f1c9a5', hair: '#3a2a12', top: '#f2c230', top2: '#fff1b0', bottom: '#2a2e36', shoe: '#f2c230', glow: '#ffd84a' } },
];

// ---------------------------------------------------------------- weapon skins (finishes)
export const WSKINS = [
  { id: 'std', name: '기본', rarity: 'common', free: true },
  { id: 'carbon', name: '카본', rarity: 'common', pearl: { color: '#2a2e35', rough: 0.35, metal: 0.4, tex: 'carbon' } },
  { id: 'chrome', name: '크롬 미러', rarity: 'rare', pearl: { color: '#e9edf2', rough: 0.05, metal: 1 }, graphite: { color: '#9aa3ad', rough: 0.1, metal: 1 } },
  { id: 'sakura', name: '벚꽃', rarity: 'rare', pearl: { color: '#ffd6e4', rough: 0.3, metal: 0, tex: 'petals' }, glow: '#ff6fa8' },
  { id: 'pixel', name: '픽셀 블록', rarity: 'rare', pearl: { color: '#ffffff', rough: 0.6, metal: 0, tex: 'pixel' } },
  { id: 'gold', name: '골드', rarity: 'epic', pearl: { color: '#ffcf4a', rough: 0.18, metal: 1 }, graphite: { color: '#5a4310', rough: 0.3, metal: 1 }, glow: '#fff1a0' },
  { id: 'galaxy', name: '갤럭시', rarity: 'epic', pearl: { color: '#ffffff', rough: 0.25, metal: 0.2, tex: 'galaxy' }, glow: '#b98cff' },
  { id: 'lava', name: '용암', rarity: 'legendary', pearl: { color: '#ffffff', rough: 0.7, metal: 0, tex: 'lava', emissiveTex: true }, glow: '#ff6a1a' },
  { id: 'ice', name: '빙결', rarity: 'legendary', pearl: { color: '#cfefff', rough: 0.05, metal: 0.1, glass: true }, glow: '#7fd4ff' },
];

// ---------------------------------------------------------------- emotes
// loop: keeps going until you move; dur: one-shot length (s)
export const EMOTES = [
  { id: 'wave', name: '손 흔들기', rarity: 'common', free: true, dur: 2.4, icon: '👋' },
  { id: 'clap', name: '박수', rarity: 'common', free: true, dur: 2.4, icon: '👏' },
  { id: 'cheer', name: '만세 점프', rarity: 'common', dur: 2.2, icon: '🙌' },
  { id: 'sit', name: '앉아서 쉬기', rarity: 'common', loop: true, icon: '🪑' },
  { id: 'taunt', name: '덤벼!', rarity: 'rare', dur: 2.6, icon: '🤙' },
  { id: 'robot', name: '로봇 춤', rarity: 'rare', loop: true, icon: '🤖' },
  { id: 'spin', name: '빙글빙글', rarity: 'rare', dur: 2.4, icon: '🌀' },
  { id: 'flex', name: '근육 자랑', rarity: 'epic', dur: 2.8, icon: '💪' },
  { id: 'groove', name: '그루브', rarity: 'epic', loop: true, icon: '🕺' },
  { id: 'disco', name: '디스코 피버', rarity: 'legendary', loop: true, icon: '✨', confetti: true },
];

// ---------------------------------------------------------------- kill effects (what YOUR kills look like)
export const KILLFX = [
  { id: 'cubes', name: '큐브 폭발', rarity: 'common', free: true },
  { id: 'confetti', name: '색종이', rarity: 'rare' },
  { id: 'pixel', name: '픽셀 소멸', rarity: 'rare' },
  { id: 'bolt', name: '번개', rarity: 'epic' },
  { id: 'hole', name: '블랙홀', rarity: 'legendary' },
];

export const CATS = { skin: SKINS, wskin: WSKINS, emote: EMOTES, killfx: KILLFX };
export const byId = (cat, id) => (CATS[cat] || []).find(x => x.id === id) || CATS[cat][0];
export const priceOf = it => it.free ? 0 : RARITY[it.rarity].price;

// ---------------------------------------------------------------- ownership & coins (saved in records)
export function wallet(rec) {
  if (!rec.coins && rec.coins !== 0) rec.coins = 600;               // a little to start with
  if (!Array.isArray(rec.owned)) rec.owned = [];
  return rec;
}
export const owns = (rec, cat, id) => { const it = byId(cat, id); return it.free || wallet(rec).owned.includes(cat + ':' + id); };
export function buy(rec, cat, id) {
  const it = byId(cat, id), w = wallet(rec), p = priceOf(it);
  if (owns(rec, cat, id)) return { ok: true };
  if (w.coins < p) return { ok: false, msg: `코인이 ${p - w.coins}개 모자라요` };
  w.coins -= p; w.owned.push(cat + ':' + id); return { ok: true };
}
// coins for playing: a reason to keep going
export function earn(rec, n, why) { wallet(rec); rec.coins += Math.max(0, Math.round(n)); rec.lastEarn = { n: Math.round(n), why }; return Math.round(n); }
export function daily(rec) {
  const d = new Date(), key = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  if (rec.dailyKey === key) return 0;
  rec.dailyKey = key; return earn(rec, 150, '오늘의 출석');
}

// ---------------------------------------------------------------- pixel textures
const tcache = new Map();
function pixTex(key, paint) {
  let t = tcache.get(key); if (t) return t;
  const c = document.createElement('canvas'); c.width = c.height = 16;
  const g = c.getContext('2d'); g.imageSmoothingEnabled = false;
  paint(g, (x, y, w, h, col) => { g.fillStyle = col; g.fillRect(x, y, w, h); });
  t = new THREE.CanvasTexture(c); t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; t.generateMipmaps = false; t.colorSpace = THREE.SRGBColorSpace;
  tcache.set(key, t); return t;
}
// tiny per-pixel noise so flat colours read as "blocks"
function noise(g, col, amt = 10, seed = 1) {
  const c = new THREE.Color(col); let s = seed * 9301;
  for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
    s = (s * 16807) % 2147483647; const k = ((s % 1000) / 1000 - 0.5) * amt / 255;
    g.fillStyle = '#' + new THREE.Color(Math.min(1, Math.max(0, c.r + k)), Math.min(1, Math.max(0, c.g + k)), Math.min(1, Math.max(0, c.b + k))).getHexString(); g.fillRect(x, y, 1, 1);
  }
}

// one texture per body face: part ∈ face|head|headBack|headSide|headTop|chest|back|side|arm|hand|leg|shoe
export function skinTexture(skin, part) {
  const S = typeof skin === 'string' ? byId('skin', skin) : skin, P = S.p, L = S.look;
  return pixTex(S.id + ':' + part, (g, r) => {
    const base = { face: P.skin, head: P.hair, headBack: P.hair, headSide: P.hair, headTop: P.hair, chest: P.top, back: P.top, side: P.top, arm: P.top, hand: P.skin, leg: P.bottom, shoe: P.shoe }[part];
    noise(g, base, L === 'golem' || L === 'robot' ? 26 : 12, part.length * 7 + S.id.length);
    const eye = (x, y, col = '#1a1c22', w = 2) => { r(x, y, w, 2, '#ffffff'); r(x + (w - 1), y, 1, 2, col); };
    switch (part) {
      case 'face': {
        if (L === 'robot') { r(2, 4, 12, 5, '#2b3038'); r(4, 6, 3, 1, P.glow); r(9, 6, 3, 1, P.glow); r(5, 11, 6, 1, '#4c5560'); break; }
        if (L === 'astro') { r(1, 2, 14, 10, P.glow); r(2, 3, 12, 8, '#2a2d34'); r(3, 4, 4, 2, '#ffffff'); r(0, 0, 16, 2, P.top); break; }
        if (L === 'golem') { r(4, 6, 2, 2, P.glow); r(10, 6, 2, 2, P.glow); r(5, 11, 6, 1, P.glow); r(2, 2, 1, 4, '#221f1d'); r(13, 9, 1, 4, '#221f1d'); break; }
        if (L === 'ninja') { r(0, 0, 16, 5, P.hair); r(0, 9, 16, 7, P.top); r(0, 5, 16, 4, P.skin); r(3, 6, 3, 2, '#fff'); r(4, 6, 2, 2, '#14161b'); r(10, 6, 3, 2, '#fff'); r(10, 6, 2, 2, '#14161b'); r(0, 3, 16, 1, P.top2); break; }
        if (L === 'penguin') { r(0, 0, 16, 16, P.hair); r(3, 4, 10, 11, '#ffffff'); eye(4, 6); eye(10, 6); r(6, 9, 4, 2, P.shoe); break; }
        if (L === 'frost') { r(0, 0, 16, 4, '#e9f6ff'); r(2, 5, 12, 2, '#5ab8ff'); r(3, 5, 3, 2, '#e9f6ff'); r(10, 5, 3, 2, '#e9f6ff'); r(0, 8, 16, 8, '#bfe3ff'); r(6, 10, 4, 1, '#5ab8ff'); break; }
        // people: hair fringe, eyes, mouth
        r(0, 0, 16, 4, P.hair); r(0, 4, 2, 3, P.hair); r(14, 4, 2, 3, P.hair);
        if (L === 'hoodie') { r(0, 0, 16, 5, P.top); r(0, 5, 2, 9, P.top); r(14, 5, 2, 9, P.top); }
        if (L === 'scout') { r(0, 0, 16, 5, P.top2); r(0, 5, 1, 6, P.top2); r(15, 5, 1, 6, P.top2); }
        if (L === 'champ') { r(0, 0, 16, 2, P.top); r(2, 2, 12, 1, P.top2); }
        eye(3, 7, '#2b3a55'); eye(11, 7, '#2b3a55');
        if (L === 'neon') { r(2, 6, 12, 1, P.top2); }
        r(6, 11, 4, 1, '#a0523d');
        if (L === 'runner') r(0, 4, 16, 1, P.glow);
        break;
      }
      case 'head': case 'headSide': case 'headBack': case 'headTop': {
        if (L === 'robot') { r(0, 0, 16, 1, '#4c5560'); r(7, 0, 2, 16, '#4c5560'); if (part === 'headSide') r(5, 5, 6, 6, P.glow); break; }
        if (L === 'astro') { r(0, 14, 16, 2, P.top2); if (part === 'headSide') { r(5, 5, 6, 6, '#c9ced6'); r(6, 6, 4, 4, P.glow); } break; }
        if (L === 'penguin' && part === 'headTop') break;
        if (L === 'ninja' && part !== 'headTop') r(0, 3, 16, 1, P.top2);
        if (L === 'ninja' && part === 'headBack') { r(6, 3, 4, 8, P.top2); }
        if (L === 'hoodie' || L === 'scout') { noise(g, L === 'hoodie' ? P.top : P.top2, 10, 3); if (part === 'headBack') r(5, 10, 6, 6, '#00000033'); }
        if (L === 'champ' && part !== 'headBack') { r(0, 0, 16, 2, P.top); }
        if (L === 'frost') { noise(g, '#e9f6ff', 8, 5); r(0, 12, 16, 1, '#5ab8ff'); }
        if (L === 'golem') { r(3, 2, 1, 5, P.glow); r(9, 8, 1, 6, P.glow); r(12, 3, 3, 1, P.glow); }
        if (L === 'neon' && part === 'headTop') { r(6, 0, 4, 16, P.top2); }
        if (L === 'runner' && part === 'headSide') r(0, 8, 16, 1, P.glow);
        break;
      }
      case 'chest': {
        if (L === 'runner') { r(6, 0, 4, 16, P.top2); r(0, 12, 16, 2, '#2a2e36'); }
        if (L === 'jumpsuit') { r(7, 0, 2, 16, P.top2); r(2, 3, 3, 2, '#ffffff'); r(0, 12, 16, 1, '#3a3f48'); }
        if (L === 'hoodie') { r(4, 0, 1, 7, '#e6e8eb'); r(11, 0, 1, 7, '#e6e8eb'); r(4, 9, 8, 4, '#232833'); r(6, 4, 4, 3, P.top2); }
        if (L === 'ninja') { r(0, 9, 16, 2, P.top2); r(6, 0, 4, 9, '#262a33'); }
        if (L === 'scout') { r(0, 0, 3, 16, '#5b4632'); r(13, 0, 3, 16, '#5b4632'); r(3, 10, 10, 2, '#3a2a1c'); r(7, 10, 2, 2, '#d8b45a'); }
        if (L === 'astro') { r(4, 3, 8, 6, '#dfe3ea'); r(5, 4, 2, 1, '#e8202f'); r(8, 4, 3, 1, P.top2); r(5, 6, 6, 1, P.glow); r(0, 13, 16, 1, P.top2); }
        if (L === 'robot') { r(3, 3, 10, 7, '#4c5560'); r(5, 5, 6, 3, P.glow); r(0, 12, 16, 1, '#3d444e'); }
        if (L === 'penguin') { r(3, 0, 10, 16, '#ffffff'); r(6, 1, 4, 2, P.shoe); }
        if (L === 'neon') { r(0, 4, 16, 1, P.top2); r(0, 11, 16, 1, P.hair); r(7, 0, 2, 16, P.hair); }
        if (L === 'golem') { r(4, 2, 1, 6, P.glow); r(10, 6, 1, 8, P.glow); r(5, 7, 5, 1, P.glow); r(1, 12, 3, 1, P.glow); }
        if (L === 'frost') { r(6, 0, 4, 16, P.top2); r(2, 4, 12, 1, '#e9f6ff'); r(5, 8, 6, 3, '#e9f6ff'); }
        if (L === 'champ') { r(0, 0, 16, 3, P.top2); r(6, 4, 4, 4, '#e8202f'); r(7, 5, 2, 2, '#fff1b0'); r(0, 12, 16, 2, '#2a2e36'); }
        break;
      }
      case 'back': case 'side': {
        if (L === 'runner' && part === 'back') { r(7, 0, 2, 16, P.top2); r(3, 3, 10, 6, '#e3e5e9'); }
        if (L === 'astro' && part === 'back') { r(2, 1, 12, 12, '#d5d9e0'); r(4, 3, 3, 3, P.glow); r(9, 3, 3, 3, P.top2); }
        if (L === 'robot') { r(0, 4, 16, 1, '#4c5560'); r(0, 10, 16, 1, '#4c5560'); }
        if (L === 'neon') { r(0, 4, 16, 1, P.top2); r(0, 11, 16, 1, P.hair); }
        if (L === 'ninja' && part === 'back') { r(0, 9, 16, 2, P.top2); r(2, 0, 3, 16, '#3a3f48'); }
        if (L === 'golem') { r(3, 3, 1, 8, P.glow); r(11, 2, 1, 5, P.glow); }
        if (L === 'champ' && part === 'back') { r(0, 0, 16, 3, P.top2); r(4, 5, 8, 6, '#e8202f'); }
        if (L === 'penguin' && part === 'side') { r(0, 0, 16, 16, P.hair); }
        break;
      }
      case 'arm': {
        if (L === 'runner') r(0, 10, 16, 2, P.top2);
        if (L === 'jumpsuit') r(0, 12, 16, 1, P.top2);
        if (L === 'neon') r(0, 6, 16, 1, P.top2);
        if (L === 'robot') { r(0, 8, 16, 1, '#4c5560'); r(6, 0, 1, 16, '#4c5560'); }
        if (L === 'golem') { r(4, 3, 1, 7, P.glow); }
        if (L === 'champ') r(0, 0, 16, 4, P.top2);
        if (L === 'frost') r(0, 10, 16, 2, P.top2);
        if (L === 'astro') r(0, 12, 16, 2, P.top2);
        break;
      }
      case 'hand': {
        if (L === 'robot' || L === 'golem' || L === 'astro' || L === 'frost') noise(g, P.top2 === '#ff6a1a' ? '#2a2624' : P.shoe, 10, 4);
        if (L === 'ninja' || L === 'neon') noise(g, '#14161b', 10, 4);
        if (L === 'penguin') noise(g, P.hair, 8, 4);
        break;
      }
      case 'leg': {
        if (L === 'runner') r(0, 0, 2, 16, P.top2);
        if (L === 'jumpsuit') r(0, 6, 16, 1, '#ffd2a8');
        if (L === 'scout') { r(0, 6, 16, 3, '#4a3a28'); }
        if (L === 'neon') r(7, 0, 2, 16, P.top2);
        if (L === 'robot') { r(0, 5, 16, 1, '#4c5560'); r(6, 8, 4, 4, '#3d444e'); }
        if (L === 'golem') { r(5, 2, 1, 9, P.glow); }
        if (L === 'frost') r(0, 3, 16, 2, '#e9f6ff');
        if (L === 'astro') r(0, 9, 16, 2, P.top2);
        break;
      }
      case 'shoe': {
        r(0, 12, 16, 4, '#00000033');
        if (L === 'runner' || L === 'neon') r(0, 10, 16, 1, P.glow);
        break;
      }
    }
  });
}

// textures for weapon skins (tiled on the disc's pearl parts)
export function wskinTexture(kind) {
  const key = 'w:' + kind; let t = tcache.get(key); if (t) return t;
  const S = 64, c = document.createElement('canvas'); c.width = c.height = S; const g = c.getContext('2d');
  const R = (a => () => ((a = (a * 16807) % 2147483647) / 2147483647))(kind.length * 977 + 13);
  if (kind === 'carbon') { for (let y = 0; y < S; y += 4) for (let x = 0; x < S; x += 4) { g.fillStyle = ((x + y) / 4) % 2 ? '#30353d' : '#22262c'; g.fillRect(x, y, 4, 4); } }
  else if (kind === 'pixel') { for (let y = 0; y < S; y += 8) for (let x = 0; x < S; x += 8) { const h = R(); g.fillStyle = h < 0.33 ? '#ff4f14' : h < 0.66 ? '#ffffff' : '#1b1e25'; g.fillRect(x, y, 8, 8); } }
  else if (kind === 'galaxy') { const gr = g.createLinearGradient(0, 0, S, S); gr.addColorStop(0, '#1a0f3a'); gr.addColorStop(0.5, '#4b1f7a'); gr.addColorStop(1, '#0d1a40'); g.fillStyle = gr; g.fillRect(0, 0, S, S); for (let i = 0; i < 60; i++) { g.fillStyle = `rgba(255,255,255,${0.4 + R() * 0.6})`; g.fillRect(R() * S | 0, R() * S | 0, 1, 1); } }
  else if (kind === 'lava') { g.fillStyle = '#1d1a19'; g.fillRect(0, 0, S, S); g.strokeStyle = '#ff6a1a'; g.lineWidth = 2; for (let i = 0; i < 9; i++) { g.beginPath(); let x = R() * S, y = R() * S; g.moveTo(x, y); for (let k = 0; k < 4; k++) { x += (R() - 0.5) * 22; y += (R() - 0.5) * 22; g.lineTo(x, y); } g.stroke(); } }
  else if (kind === 'petals') { g.fillStyle = '#ffe3ee'; g.fillRect(0, 0, S, S); for (let i = 0; i < 14; i++) { g.fillStyle = R() < 0.5 ? '#ff9cc0' : '#ffffff'; g.beginPath(); g.ellipse(R() * S, R() * S, 4, 2.4, R() * 3, 0, 7); g.fill(); } }
  t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace;
  if (kind === 'pixel' || kind === 'carbon') { t.magFilter = THREE.NearestFilter; }
  tcache.set(key, t); return t;
}
