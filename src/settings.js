export const ACTIONS = [
  ['forward', '앞으로'], ['back', '뒤로'], ['left', '왼쪽'], ['right', '오른쪽'],
  ['jump', '점프 / 벽점프'], ['crouch', '슬라이드 / 웅크리기'], ['dash', '대시'],
  ['slash', '베기 (꾹 = 발도술)'], ['shoot', '사격'], ['parry', '패링'], ['grapple', '그래플 (누르고 있기)'],
  ['reload', '재장전'], ['inspect', '칼 돌리기'], ['restart', '타임어택 재시작'],
];
export const DEFAULT_BINDS = {
  forward: ['KeyW'], back: ['KeyS'], left: ['KeyA'], right: ['KeyD'],
  jump: ['Space'], crouch: ['KeyC', 'ControlLeft'], dash: ['ShiftLeft'],
  slash: ['Mouse0'], shoot: ['Mouse2'], parry: ['KeyF', 'Mouse3'], grapple: ['KeyE', 'KeyQ'],
  reload: ['KeyR'], inspect: ['KeyV'], restart: ['KeyT'],
};
export const DEFAULTS = {
  sens: 1.0, fov: 100, fovFx: 18, shake: 1, tilt: 1, bob: 1, blur: 1,
  sfx: 0.8, music: 0.4, quality: 'high', fps: 0, full: 1, autoHop: 1, loadout: 'revolver', crosshair: '#ffffff',
  binds: DEFAULT_BINDS,
};
export const QUALITY = {
  low: { pr: 0.8, shadows: false, shadowSize: 1024, bloom: true, msaa: 0, particles: 300, lights: false, rain: false, rainCount: 0, traffic: 30, envRes: 128 },
  medium: { pr: 1.0, shadows: true, shadowSize: 1024, bloom: true, msaa: 0, particles: 800, lights: true, rain: true, rainCount: 1500, traffic: 60, envRes: 256 },
  high: { pr: 1.25, shadows: true, shadowSize: 2048, bloom: true, msaa: 4, particles: 1500, lights: true, rain: true, rainCount: 3000, traffic: 90, envRes: 256 },
  ultra: { pr: 2.0, shadows: true, shadowSize: 4096, bloom: true, msaa: 4, particles: 2500, lights: true, rain: true, rainCount: 5000, traffic: 140, envRes: 512 },
};
const KEY = 'redshift2_settings';
export function loadSettings() {
  try {
    const s = JSON.parse(localStorage.getItem(KEY) || '{}');
    return { ...DEFAULTS, ...s, binds: { ...DEFAULT_BINDS, ...(s.binds || {}) } };
  } catch { return JSON.parse(JSON.stringify(DEFAULTS)); }
}
export function saveSettings(S) { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch { } }
export function loadRecords() { try { return { score: 0, wave: 0, speed: 0, trial: 0, ...JSON.parse(localStorage.getItem('redshift2_records') || '{}') }; } catch { return { score: 0, wave: 0, speed: 0, trial: 0 }; } }
export function saveRecords(r) { try { localStorage.setItem('redshift2_records', JSON.stringify(r)); } catch { } }

export function keyName(c) {
  if (!c) return '—';
  if (c.startsWith('Mouse')) return ['좌클릭', '휠클릭', '우클릭', '마우스4', '마우스5'][+c.slice(5)] || c;
  return c.replace('Key', '').replace('Digit', '').replace('ControlLeft', 'L-CTRL').replace('ControlRight', 'R-CTRL').replace('ShiftLeft', 'L-SHIFT').replace('ShiftRight', 'R-SHIFT').replace('AltLeft', 'L-ALT').replace('Space', 'SPACE').replace('ArrowUp', '↑').replace('ArrowDown', '↓').replace('ArrowLeft', '←').replace('ArrowRight', '→');
}
