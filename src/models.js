// MODELS — the weapons and the 프로 선수 skin are modelled in Blender and shipped as GLB files (public/models/).
// They load in the background; until they arrive (or if one fails) the hand-built code models are used, then
// everything that shows a weapon is rebuilt once (onModelsReady).
// Material NAMES are the contract with Blender: Pearl/Graphite/Chrome/Gun keep their finish, Glow/GlowSoft/Tint/
// Glass/Iris take the owner's team colour — so the game swaps in its own materials (team colour + weapon skins).
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const WEAPON_IDS = ['disc', 'heavy', 'rail', 'boomerang', 'splitter', 'saw', 'seeker', 'nova', 'prism'];
const scenes = new Map();
let ready = false; const waiters = [];
export const modelsReady = () => ready;
export function onModelsReady(fn) { if (ready) fn(); else waiters.push(fn); }

export function loadModels(base = 'models/') {
  const L = new GLTFLoader();
  const one = (key, url) => L.loadAsync(base + url).then(g => {
    const s = g.scene; s.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = false; } });
    scenes.set(key, s);
  }).catch(e => console.warn('[models]', key, e && e.message));
  return Promise.all([...WEAPON_IDS.map(id => one('w:' + id, `weapons/${id}.glb`)), one('athlete', 'athlete.glb')])
    .then(() => { ready = true; for (const f of waiters.splice(0)) { try { f(); } catch (e) { console.warn(e); } } });
}

// weapon: same footprint as the code models (radius ≈ 0.45 × s, XY plane, spins around Z)
const MAP = { Pearl: 'pearl', Graphite: 'graphite', Chrome: 'chrome', Gun: 'gun', Glow: 'glow', GlowSoft: 'glowSoft', Tint: 'tint', Glass: 'glass', Iris: 'iris' };
export function weaponFromGLB(id, M, s) {
  const src = scenes.get('w:' + id); if (!src) return null;
  const g = src.clone(true);
  g.traverse(o => {
    if (!o.isMesh) return;
    const name = (o.material && o.material.name || '').replace(/\.\d+$/, '');
    const k = MAP[name]; if (k && M[k]) o.material = M[k];
    o.castShadow = k !== 'glow' && k !== 'glass' && k !== 'glowSoft';
  });
  const w = new THREE.Group(); w.add(g); w.scale.setScalar(s);
  return w;
}

// 프로 선수: a jointed body with the SAME joint names as avatar.js (hips > spine > chest > neck > head, sh0/1, el0/1,
// hand0/1 > handDisc, hip0/1, knee0/1, ankle0/1) — the existing animation and emotes drive it unchanged.
export function athleteRig(teamMat, glowMat) {
  const src = scenes.get('athlete'); if (!src) return null;
  const root = src.clone(true);
  const by = n => root.getObjectByName(n);
  const R = { hips: by('hips'), spine: by('spine'), chest: by('chest'), neck: by('neck'), head: by('head'), sh: [], el: [], hand: [], hip: [], knee: [], ankle: [] };
  for (const i of [0, 1]) for (const k of ['sh', 'el', 'hand', 'hip', 'knee', 'ankle']) R[k].push(by(k + i));
  if (!R.hips || !R.head || R.sh.some(x => !x) || R.hip.some(x => !x)) return null;
  root.traverse(o => {
    if (!o.isMesh) return;
    const n = (o.material && o.material.name || '').replace(/\.\d+$/, '');
    if (n === 'Glow') o.material = glowMat; else if (n === 'Tint') o.material = teamMat;
    o.castShadow = true;
  });
  // the GLB carries a sample disc in the hand: the game puts the real weapon there instead
  const hd = by('handDisc'); if (hd) hd.clear();
  return { root, rig: R, head: R.head, handDisc: hd };
}
