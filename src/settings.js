// Six inputs total: WASD, jump, dash, throw/recall, blink.
export const ACTIONS = [
  ['forward', '앞으로'], ['back', '뒤로'], ['left', '왼쪽'], ['right', '오른쪽'],
  ['jump', '점프 (공중에서 한 번 더)'], ['dash', '대시 (대시 중 무적)'],
  ['throw', '원반 던지기 / 회수'], ['blink', '순간이동 (원반 위치로)'], ['skill', '스킬'],
];
export const DEFAULT_BINDS = {
  forward: ['KeyW'], back: ['KeyS'], left: ['KeyA'], right: ['KeyD'],
  jump: ['Space'], dash: ['ShiftLeft'],
  throw: ['Mouse0'], blink: ['Mouse2', 'KeyE'], skill: ['KeyQ', 'KeyF'],
};
export const DEFAULTS = {
  sens: 0.8, fov: 103, fovFx: 14, shake: 0.5, tilt: 0.5, bob: 0.4,
  sfx: 0.8, music: 0.4, quality: 'auto', adaptive: 1, fps: 0, full: 1, autoHop: 1, touchSens: 1, touchUI: 'auto', touchLayout: 'auto',
  difficulty: 'easy', botSkill: 'max', aimAssist: 'strong', weapon: 'disc', skill: 'reflect', map: 'random', keyHints: 1, name: '',
  binds: DEFAULT_BINDS,
};
export const QUALITY = {
  low: { pr: 0.85, shadows: false, shadowSize: 1024, aa: true, post: false, particles: 800 },
  medium: { pr: 1.0, shadows: true, shadowSize: 2048, aa: true, post: true, bloom: 0.38, msaa: 0, particles: 1800 },
  high: { pr: 1.5, shadows: true, shadowSize: 4096, aa: true, post: true, bloom: 0.42, msaa: 4, particles: 3000 },
};
// your throws only: snap = cone (rad) in which the throw auto-leads the target,
// homing = how hard the disc bends toward the enemy in front of it (rad/s), bonus = extra hit radius (m)
export const ASSIST = {
  strong: { snap: 0.11, homing: 1.9, cone: 0.5, range: 40, bonus: 0.32 },
  normal: { snap: 0.05, homing: 0.8, cone: 0.36, range: 30, bonus: 0.12 },
  off: { snap: 0, homing: 0, cone: 0, range: 0, bonus: 0 },
};
const KEY = 'redshift4_settings', REC = 'redshift4_records';
export function loadSettings() {
  try {
    const s = JSON.parse(localStorage.getItem(KEY) || '{}');
    const S = { ...DEFAULTS, ...s, binds: { ...DEFAULT_BINDS, ...(s.binds || {}) } };
    if (s.gfx !== 2) { S.quality = 'auto'; S.gfx = 2; } // 4.1 graphics: everyone re-picks the best level once
    // auto: phones/tablets start on medium (the render scale then adapts to keep the frame rate), PCs on high
    if (!QUALITY[S.quality]) S.quality = (window.matchMedia && matchMedia('(pointer: coarse)').matches) || window.REDSHIFT_APP === 'android' ? 'medium' : 'high';
    if (!S.name) S.name = '플레이어' + Math.floor(10 + Math.random() * 90);
    return S;
  } catch { return JSON.parse(JSON.stringify(DEFAULTS)); }
}
export function saveSettings(S) { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch { } }
export function loadRecords() { const d = { score: 0, wave: 0, speed: 0, combo: 0, duelWin: 0, duelLose: 0, ffaWin: 0, ffaBest: 0 }; try { return { ...d, ...JSON.parse(localStorage.getItem(REC) || '{}') }; } catch { return d; } }
export function saveRecords(r) { try { localStorage.setItem(REC, JSON.stringify(r)); } catch { } }

export function keyName(c) {
  if (!c) return '—';
  if (c.startsWith('Mouse')) return ['좌클릭', '휠클릭', '우클릭', '마우스4', '마우스5'][+c.slice(5)] || c;
  return c.replace('Key', '').replace('Digit', '').replace('ControlLeft', 'L-CTRL').replace('ControlRight', 'R-CTRL').replace('ShiftLeft', 'SHIFT').replace('ShiftRight', 'R-SHIFT').replace('AltLeft', 'L-ALT').replace('Space', 'SPACE').replace('ArrowUp', '↑').replace('ArrowDown', '↓').replace('ArrowLeft', '←').replace('ArrowRight', '→');
}
