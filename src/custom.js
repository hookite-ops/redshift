// CUSTOM ASSETS — drop your own models, images and styles into public/custom/ and the game uses them.
//
//   public/custom/weapons/<무기id>.glb      무기 9종 (disc heavy rail boomerang splitter saw seeker nova prism)
//   public/custom/characters/<스킨id>.glb   캐릭터 (스킨별) · characters/all.glb = 모든 캐릭터
//   public/custom/hands/right.glb, left.glb  1인칭 손
//   public/custom/foes/<turret|chaser|shield>.glb  연습 모드 적
//   public/custom/maps/<맵id>.glb           맵 교체 (arena spire lanes forest orbit) · 다른 이름 = 새 맵
//   public/custom/sky.jpg                    하늘 (360° 파노라마)
//   public/custom/textures/<floor|wall|block|top|ramp|dark>.png  맵 표면
//   public/custom/ui/...                     UI 이미지 · style.css · 글꼴
//
// Model formats: .glb / .gltf (best — Draco and meshopt compressed files work too), .fbx, .obj (+ .mtl).
// Every model can have a <same name>.json next to it: { "scale": 1, "rotate": [x, y, z], "offset": [x, y, z], "fit": true }
// The game finds the files through custom/index.json (the server lists the folder by itself).
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { clone as skClone } from 'three/examples/jsm/utils/SkeletonUtils.js';

const BASE = 'custom/';
const MODEL_EXT = ['glb', 'gltf', 'fbx', 'obj'];
const IMG_EXT = ['png', 'jpg', 'jpeg', 'webp', 'gif', 'svg'];
const FONT_EXT = ['woff2', 'woff', 'ttf', 'otf'];

// ---------------------------------------------------------------- what can be replaced (also drives the 확인 screen + guide)
export const SLOTS = [
  ['무기', 'model', [
    ['weapons/disc', '원반'], ['weapons/heavy', '헤비'], ['weapons/rail', '레일'], ['weapons/boomerang', '부메랑'], ['weapons/splitter', '스플리터'],
    ['weapons/saw', '톱날'], ['weapons/seeker', '시커'], ['weapons/nova', '노바'], ['weapons/prism', '프리즘']]],
  ['캐릭터', 'model', [
    ['characters/all', '모든 캐릭터 (스킨 전부)'], ['characters/runner', '러너'], ['characters/jumpsuit', '점프슈트'], ['characters/hoodie', '후디'],
    ['characters/ninja', '닌자'], ['characters/scout', '스카우트'], ['characters/astro', '우주비행사'], ['characters/robot', '로봇'], ['characters/penguin', '펭귄'],
    ['characters/neon', '네온'], ['characters/golem', '골렘'], ['characters/frost', '프로스트'], ['characters/champ', '챔피언']]],
  ['1인칭 손', 'model', [['hands/right', '오른손 (원반 드는 손)'], ['hands/left', '왼손 (없으면 오른손을 뒤집어 씀)']]],
  ['연습 모드 적', 'model', [['foes/turret', '포탑'], ['foes/chaser', '추적자'], ['foes/shield', '방패병']]],
  ['맵', 'model', [['maps/arena', '화이트 아레나'], ['maps/spire', '스파이어'], ['maps/lanes', '회랑'], ['maps/forest', '기둥 숲'], ['maps/orbit', '궤도']]],
  ['하늘 · 맵 표면', 'image', [['sky', '하늘 (360° 파노라마)'], ['textures/floor', '바닥'], ['textures/wall', '바깥 벽'], ['textures/block', '블록·기둥'],
    ['textures/top', '단상·고지대 윗면'], ['textures/ramp', '경사로'], ['textures/dark', '검은 테두리·받침']]],
  ['UI 이미지', 'image', [
    ['ui/logo', '메뉴 로고'], ['ui/background', '메뉴 배경'], ['ui/loading', '로딩 화면'], ['ui/icon', '앱·탭 아이콘'],
    ['ui/crosshair', '조준선'], ['ui/crosshair-lock', '조준선 (적 겨눔)'], ['ui/hitmarker', '명중 표시'],
    ['ui/btn-throw', '터치: 던지기'], ['ui/btn-blink', '터치: 순간이동'], ['ui/btn-jump', '터치: 점프'], ['ui/btn-dash', '터치: 대시'],
    ['ui/btn-skill', '터치: 스킬'], ['ui/btn-emote', '터치: 이모트'], ['ui/btn-pause', '터치: 일시정지'], ['ui/joystick', '터치: 조이스틱 판'], ['ui/joystick-knob', '터치: 조이스틱 손잡이']]],
  ['UI 스타일 · 글꼴', 'other', [['ui/style', '스타일 (style.css — 색·위치·크기 전부)'], ['ui/font', '기본 글꼴'], ['ui/font-num', '숫자·제목 글꼴']]],
];

export const CUSTOM = { files: [], byKey: new Map(), models: new Map(), images: new Map(), status: new Map(), extraMaps: [], ready: false };
if (typeof window !== 'undefined') window.__custom = CUSTOM;
const lc = s => String(s).toLowerCase();
const extOf = f => lc(f.split('.').pop());
const keyOf = f => lc(f.replace(/\.[^./]+$/, ''));
const url = f => BASE + f.split('/').map(encodeURIComponent).join('/');

// ---------------------------------------------------------------- loading
let gltf = null;
function gltfLoader() {
  if (gltf) return gltf;
  gltf = new GLTFLoader();
  const draco = new DRACOLoader(); draco.setDecoderPath('draco/'); gltf.setDRACOLoader(draco);
  gltf.setMeshoptDecoder(MeshoptDecoder);
  return gltf;
}
async function loadModel(file) {
  const e = extOf(file), u = url(file);
  if (e === 'glb' || e === 'gltf') { const g = await gltfLoader().loadAsync(u); const s = g.scene || g.scenes[0]; s.animations = g.animations || []; return s; }
  if (e === 'fbx') return await new FBXLoader().loadAsync(u);
  if (e === 'obj') {
    const L = new OBJLoader(), mtl = CUSTOM.files.find(f => keyOf(f) === keyOf(file) && extOf(f) === 'mtl');
    if (mtl) {
      const dir = url(file).replace(/[^/]*$/, '');
      const M = await new MTLLoader().setResourcePath(dir).loadAsync(url(mtl)); M.preload(); L.setMaterials(M);
    }
    return await L.loadAsync(u);
  }
  throw new Error('모르는 형식');
}
async function loadJSON(file) { const r = await fetch(url(file), { cache: 'no-cache' }); if (!r.ok) throw new Error('읽기 실패'); return r.json(); }

function prep(obj) {
  let skinned = false;
  obj.traverse(o => {
    if (o.isSkinnedMesh) { skinned = true; o.frustumCulled = false; }
    if (o.isMesh) {
      o.castShadow = true; o.receiveShadow = true;
      // FBX/OBJ often come with dull Phong/Lambert materials and no colour space: make them sit with the PBR scene
      const fix = m => {
        if (m.map) m.map.colorSpace = THREE.SRGBColorSpace;
        if (m.isMeshPhongMaterial || m.isMeshLambertMaterial) {
          const n = new THREE.MeshStandardMaterial({ color: m.color, map: m.map, normalMap: m.normalMap, emissive: m.emissive, emissiveMap: m.emissiveMap, transparent: m.transparent, opacity: m.opacity, alphaTest: m.alphaTest, side: m.side, roughness: 0.65, metalness: 0.05 });
          n.name = m.name; return n;
        }
        return m;
      };
      o.material = Array.isArray(o.material) ? o.material.map(fix) : fix(o.material);
    }
  });
  return skinned;
}

export async function loadCustom(onProgress = () => { }) {
  try {
    const r = await fetch(BASE + 'index.json', { cache: 'no-cache' });
    if (!r.ok) return CUSTOM;
    const j = await r.json();
    CUSTOM.files = (Array.isArray(j) ? j : j.files || []).filter(f => typeof f === 'string' && !f.includes('..'));
  } catch { return CUSTOM; }
  // one file per key: the best format wins
  const rank = f => { const e = extOf(f); const i = [...MODEL_EXT, ...IMG_EXT, ...FONT_EXT, 'css', 'json'].indexOf(e); return i < 0 ? 99 : i; };
  for (const f of [...CUSTOM.files].sort((a, b) => rank(a) - rank(b))) {
    const e = extOf(f), k = keyOf(f);
    if (e === 'json' || e === 'mtl' || e === 'bin' || e === 'txt' || e === 'md') continue;
    if (!CUSTOM.byKey.has(k)) CUSTOM.byKey.set(k, f);
  }
  const jobs = [];
  for (const [k, f] of CUSTOM.byKey) {
    const e = extOf(f);
    if (MODEL_EXT.includes(e)) jobs.push([k, async () => {
      const side = CUSTOM.files.find(x => keyOf(x) === k && extOf(x) === 'json');
      let adj = {};
      if (side) { try { adj = await loadJSON(side); } catch { } }
      const obj = await loadModel(f);
      const skinned = prep(obj);
      CUSTOM.models.set(k, { obj, skinned, adj, file: f });
      CUSTOM.status.set(k, { ok: true, file: f, msg: skinned ? '뼈대 있음' : '' });
    }]);
    else if (IMG_EXT.includes(e) || FONT_EXT.includes(e) || e === 'css') { CUSTOM.images.set(k, url(f)); CUSTOM.status.set(k, { ok: true, file: f }); }
  }
  let done = 0;
  onProgress(0, jobs.length);
  await Promise.all(jobs.map(async ([k, job]) => {
    try { await job(); } catch (err) { CUSTOM.status.set(k, { ok: false, file: CUSTOM.byKey.get(k), msg: String(err && err.message || err).slice(0, 120) }); console.warn('[custom]', k, err); }
    onProgress(++done, jobs.length);
  }));
  CUSTOM.ready = true;
  return CUSTOM;
}

// a fresh copy of a loaded model (skinned models need their skeleton cloned too)
export function customObject(key) {
  const M = CUSTOM.models.get(lc(key)); if (!M) return null;
  const o = M.skinned ? skClone(M.obj) : M.obj.clone(true);
  return { obj: o, adj: M.adj || {}, skinned: M.skinned };
}
export const hasCustom = key => CUSTOM.models.has(lc(key)) || CUSTOM.images.has(lc(key));
export const customURL = key => CUSTOM.images.get(lc(key)) || null;

const D2R = Math.PI / 180;
// wrap + auto-size: `size` is the target size of the chosen measure; the json can turn fitting off or nudge it
function fit(obj, adj, { size = 1, measure = 'max', anchor = 'center' } = {}) {
  const inner = new THREE.Group(); inner.add(obj);
  if (adj.rotate) obj.rotation.set((adj.rotate[0] || 0) * D2R, (adj.rotate[1] || 0) * D2R, (adj.rotate[2] || 0) * D2R);
  obj.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(obj, true);
  if (box.isEmpty()) return inner;
  const sz = box.getSize(new THREE.Vector3()), c = box.getCenter(new THREE.Vector3());
  let k = 1;
  if (adj.fit !== false) {
    const m = measure === 'height' ? sz.y : measure === 'xz' ? Math.max(sz.x, sz.z) : Math.max(sz.x, sz.y, sz.z);
    if (m > 1e-6) k = size / m;
  }
  k *= adj.scale || 1;
  obj.scale.multiplyScalar(k);
  obj.position.set(-c.x * k, (anchor === 'bottom' ? -box.min.y : -c.y) * k, -c.z * k);
  if (adj.offset) obj.position.add(new THREE.Vector3(adj.offset[0] || 0, adj.offset[1] || 0, adj.offset[2] || 0));
  return inner;
}

// ---------------------------------------------------------------- weapons: lie flat (Y up) in the file → the game's XY plane spinning around Z
export function customWeapon(id, s) {
  const C = customObject('weapons/' + id); if (!C) return null;
  const g = fit(C.obj, C.adj, { size: 0.9 * s, measure: 'xz' });
  g.rotation.x = Math.PI / 2;
  const out = new THREE.Group(); out.add(g); out.userData.custom = true;
  return out;
}

// ---------------------------------------------------------------- 1st-person hands: fingers pointing forward (the model's front)
export function customHand(side) {
  const C = customObject('hands/' + side) || (side === 'left' ? customObject('hands/right') : null);
  if (!C) return null;
  const g = fit(C.obj, C.adj, { size: 0.55 });
  g.rotation.y = Math.PI;                         // model front (+Z) → away from the camera (-Z)
  const out = new THREE.Group(); out.add(g); out.position.z = 0.2;
  if (side === 'left' && !CUSTOM.models.has('hands/left')) out.scale.x = -1;  // mirror the right hand
  return out;
}

// ---------------------------------------------------------------- foes
export function customFoe(type, h) {
  const C = customObject('foes/' + type); if (!C) return null;
  return fit(C.obj, C.adj, { size: h, measure: 'height', anchor: 'bottom' });
}

// ---------------------------------------------------------------- characters: retarget the game's joint rig onto the model's skeleton
const FINGER = /thumb|index|middle|ring|pinky|little|finger/;
function sideOf(name) {
  const s = lc(name);
  if (/left/.test(s) || /(^|[^a-z])l([^a-z]|$)/.test(s)) return 0;
  if (/right/.test(s) || /(^|[^a-z])r([^a-z]|$)/.test(s)) return 1;
  return -1;
}
function partOf(name) {
  const n = lc(name).replace(/mixamorig\d*/, '').replace(/left|right/g, '').replace(/[^a-z0-9]/g, '');
  if (/end$|top$|nub$|tip/.test(n) || FINGER.test(n) || /toe|eye|jaw|twist|roll/.test(n)) return null;
  if (/hips?$|pelvis/.test(n)) return 'hips';
  if (/neck/.test(n)) return 'neck';
  if (/^(head|jbiphead|bheadx?)$/.test(n) || /head$/.test(n)) return 'head';
  if (/upperchest|chest/.test(n) || /spine/.test(n)) return 'spine*';
  if (/forearm|lowerarm|elbow/.test(n)) return 'el';
  if (/upperarm|arm$/.test(n) && !/forearm|lowerarm/.test(n)) return 'sh';
  if (/hand|wrist/.test(n)) return 'hand';
  if (/upleg|thigh|upperleg/.test(n)) return 'hip';
  if (/calf|shin|lowerleg|knee/.test(n) || (/leg$/.test(n) && !/upleg|upperleg/.test(n))) return 'knee';
  if (/foot|ankle/.test(n)) return 'ankle';
  return null;
}
function mapSkeleton(root) {
  const bones = []; root.traverse(o => { if (o.isBone || (o.type === 'Object3D' && /mixamorig/i.test(o.name))) bones.push(o); });
  if (bones.length < 8) return null;
  const B = { hips: null, spine: [], neck: null, head: null, sh: [null, null], el: [null, null], hand: [null, null], hip: [null, null], knee: [null, null], ankle: [null, null] };
  for (const b of bones) {                        // traverse order = parents first, so the first match is the main bone
    const p = partOf(b.name); if (!p) continue;
    if (p === 'spine*') { B.spine.push(b); continue; }
    if (['hips', 'neck', 'head'].includes(p)) { if (!B[p]) B[p] = b; continue; }
    const s = sideOf(b.name); if (s < 0) continue;
    if (!B[p][s]) B[p][s] = b;
  }
  if (!B.hips || !B.head || !B.sh[0] || !B.sh[1] || !B.hip[0] || !B.hip[1]) return null;
  return B;
}
const _q1 = new THREE.Quaternion(), _q2 = new THREE.Quaternion(), _q3 = new THREE.Quaternion(), _v1 = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3();
const wq = (o, q) => o.getWorldQuaternion(q), wp = (o, v) => o.getWorldPosition(v);

// attach a custom character to an avatar built by avatar.js. Returns a sync() to call after each pose, or null.
export function attachCharacter(A, skinId) {
  const C = customObject('characters/' + skinId) || customObject('characters/all');
  if (!C) return null;
  const root = A.root, R = A.rig;
  // hide the blocky meshes (the joints stay: they drive the custom body and carry the held weapon)
  const hidden = [];
  root.traverse(o => { if (o.isMesh) { o.visible = false; hidden.push(o); } });
  A.hidden = hidden;
  const g = fit(C.obj, C.adj, { size: 1.98, measure: 'height', anchor: 'bottom' });
  g.rotation.y = Math.PI;                          // model faces +Z (glTF/Blender front) → the game's runners face -Z
  root.add(g);
  const B = mapSkeleton(C.obj);
  const st = CUSTOM.status.get(CUSTOM.models.has('characters/' + skinId) ? 'characters/' + skinId : 'characters/all');
  if (st && st.ok) st.msg = B ? '뼈대 연결됨 — 게임 동작을 따라 움직여요' : '뼈대를 못 찾음 — 고정된 모양으로 표시';
  if (!B) return { sync: () => { }, rigged: false };
  // rest pose: the game's joints all at zero; the model in its bind pose
  const pairs = [];
  const add = (J, b, Jc, bc) => { if (J && b) pairs.push({ J, b, Jc, bc }); };
  add(R.hips, B.hips); add(R.spine, B.spine[0]); add(R.chest, B.spine[B.spine.length - 1] !== B.spine[0] ? B.spine[B.spine.length - 1] : null);
  add(R.neck, B.neck); add(R.head, B.head);
  for (const s of [0, 1]) {
    add(R.sh[s], B.sh[s], R.el[s], B.el[s]); add(R.el[s], B.el[s], R.hand[s], B.hand[s]); add(R.hand[s], B.hand[s]);
    add(R.hip[s], B.hip[s], R.knee[s], B.knee[s]); add(R.knee[s], B.knee[s], R.ankle[s], B.ankle[s]); add(R.ankle[s], B.ankle[s]);
  }
  const zero = () => { for (const k of ['hips', 'spine', 'chest', 'neck', 'head']) R[k].rotation.set(0, 0, 0); for (const k of ['sh', 'el', 'hand', 'hip', 'knee', 'ankle']) for (const j of R[k]) j.rotation.set(0, 0, 0); };
  zero(); const saveHips = R.hips.position.clone();
  root.updateMatrixWorld(true);
  const rootQ = wq(root, new THREE.Quaternion()), rootQi = rootQ.clone().invert();
  for (const P of pairs) {
    P.Jrest = rootQi.clone().multiply(wq(P.J, _q1));                    // in avatar-root space
    const Brest = rootQi.clone().multiply(wq(P.b, _q2));
    let align = new THREE.Quaternion();
    if (P.Jc && P.bc) {                                                  // limbs: point the bone the way the game's limb points
      const our = wp(P.Jc, new THREE.Vector3()).sub(wp(P.J, _v1)).applyQuaternion(rootQi).normalize();
      const its = wp(P.bc, new THREE.Vector3()).sub(wp(P.b, _v2)).applyQuaternion(rootQi).normalize();
      align.setFromUnitVectors(its, our);
    }
    P.target = align.multiply(Brest);                                    // bone rest, rotated to match the game's rest
    P.Jrest.invert();
  }
  // apply the rest alignment once so the model stands like the runner even before the first sync
  const hipsRest = new THREE.Vector3();
  const sync = () => {
    root.updateMatrixWorld(true);
    const rq = wq(root, _q3), rqi = rq.clone().invert();
    for (const P of pairs) {
      const Jnow = _q1.copy(rqi).multiply(wq(P.J, _q2));                 // root space
      const delta = Jnow.multiply(P.Jrest);
      const want = delta.multiply(P.target);                             // root space
      const parentQ = rqi.clone().multiply(wq(P.b.parent, _q2));
      P.b.quaternion.copy(parentQ.invert().multiply(want));
      P.b.updateMatrixWorld(true);
    }
    // body bob / crouch: move the whole model with the game's hips
    g.position.copy(R.hips.position).sub(hipsRest);
  };
  hipsRest.copy(saveHips);
  sync();
  return { sync, rigged: true };
}

// ---------------------------------------------------------------- maps
// A custom map is a model in metres, centred on (0,0), inside the usual 100 m square (±50 m).
// Objects named spawn* / high* / jump*[_power] / boost* / cover* are markers (not drawn). Objects named deco* / nocol* don't collide.
export function registerMaps(MAPS, MAP_IDS) {
  for (const [k, M] of CUSTOM.models) {
    if (!k.startsWith('maps/')) continue;
    const id = k.slice(5), adj = M.adj || {}, orig = MAPS[id];
    const accent = adj.accent ? new THREE.Color(adj.accent).getHex() : orig ? orig.accent : 0xff5a1f;
    const m = {
      id, custom: true, label: adj.label || (orig ? orig.label : id.toUpperCase()), name: adj.name || (orig ? orig.name : id), desc: adj.desc || '내가 만든 맵', accent,
      seed: orig ? orig.seed : 7, wallH: adj.wallH || (orig && orig.wallH), headroom: adj.headroom || (orig && orig.headroom),
      shell: adj.shell !== false, stadium: adj.stadium !== false,
      build(A) { if (orig && adj.keep) orig.build(A); A.customMap(customObject(k)); },
    };
    MAPS[id] = m;
    if (!orig) { MAP_IDS.push(id); CUSTOM.extraMaps.push(m); }
  }
}
export function buildCustomMap(A, C) {
  if (!C) return;
  const obj = C.obj, adj = C.adj || {};
  if (adj.rotate) obj.rotation.set((adj.rotate[0] || 0) * D2R, (adj.rotate[1] || 0) * D2R, (adj.rotate[2] || 0) * D2R);
  if (adj.scale) obj.scale.multiplyScalar(adj.scale);
  if (adj.offset) obj.position.set(adj.offset[0] || 0, adj.offset[1] || 0, adj.offset[2] || 0);
  obj.updateMatrixWorld(true);
  const markers = [], meshes = [];
  obj.traverse(o => {
    const n = lc(o.name);
    if (/^(spawn|high|jump|boost|cover)/.test(n) && o !== obj) markers.push(o);
    else if (o.isMesh) meshes.push(o);
  });
  const box = new THREE.Box3();
  const isInMarker = o => { for (let p = o; p; p = p.parent) if (markers.includes(p)) return true; return false; };
  for (const mk of markers) {
    const n = lc(mk.name);
    box.setFromObject(mk, true);
    const p = box.isEmpty() ? mk.getWorldPosition(new THREE.Vector3()) : new THREE.Vector3((box.min.x + box.max.x) / 2, box.min.y, (box.min.z + box.max.z) / 2);
    if (n.startsWith('spawn')) A.spawn(p.x, p.z, p.y);
    else if (n.startsWith('high')) A.high(p.x, p.y, p.z);
    else if (n.startsWith('cover')) A.addCover(p.x, p.z);
    else if (n.startsWith('jump')) { const pw = +(n.match(/(\d+(\.\d+)?)/) || [])[1] || 22; A.jumpPad(p.x, p.y, p.z, THREE.MathUtils.clamp(pw, 8, 45)); }
    else if (n.startsWith('boost')) { const f = new THREE.Vector3(0, 0, 1).applyQuaternion(mk.getWorldQuaternion(new THREE.Quaternion())); A.boostPad(p.x, p.y, p.z, Math.atan2(f.x, f.z)); }
  }
  for (const mk of markers) mk.visible = false;
  for (const m of meshes) {
    if (isInMarker(m)) continue;
    let deco = false;
    for (let p = m; p && p !== obj.parent; p = p.parent) if (/^(deco|nocol)/.test(lc(p.name))) deco = true;
    if (deco) continue;
    A.col.addGeometry(m.geometry, m.matrixWorld);
    box.setFromObject(m, true);
    if (box.min.y < 0.15 && box.max.y - box.min.y > 0.3) A.footprints.push({ x: (box.min.x + box.max.x) / 2, z: (box.min.z + box.max.z) / 2, w: box.max.x - box.min.x, d: box.max.z - box.min.z, ry: 0, k: Math.min(1, 0.45 + (box.max.y - box.min.y) * 0.08) });
  }
  obj.userData.custom = true;
  A.scene.add(obj); A.objects.push(obj);
}

// ---------------------------------------------------------------- sky + surfaces
const texCache = new Map();
export function customTexture(key, repeat = false) {
  const u = customURL(key); if (!u) return null;
  if (texCache.has(key)) return texCache.get(key);
  const t = new THREE.TextureLoader().load(u);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  texCache.set(key, t);
  return t;
}
export function applyCustomSurfaces(M) {
  for (const k of ['floor', 'wall', 'block', 'top', 'ramp', 'dark']) {
    const t = customTexture('textures/' + k, true); if (!t || !M[k]) continue;
    const m = M[k]; m.map = t; m.color.set(0xffffff); m.normalMap = null; m.roughnessMap = null; m.needsUpdate = true;
  }
}
export function customSky() {
  const t = customTexture('sky'); if (!t) return null;
  t.mapping = THREE.EquirectangularReflectionMapping;
  const m = new THREE.MeshBasicMaterial({ map: t, side: THREE.BackSide, depthWrite: false, fog: false, toneMapped: false });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(400, 48, 24), m);
  sky.scale.x = -1; sky.frustumCulled = false; sky.renderOrder = -1;
  t.mapping = THREE.UVMapping;
  return sky;
}

// ---------------------------------------------------------------- UI: style sheet, images, fonts
export function applyCustomUI() {
  const I = k => customURL('ui/' + k);
  let css = '';
  const img = (k, rule) => { const u = I(k); if (u) css += rule(`url("${u}")`) + '\n'; };
  img('logo', u => `.logo{background:${u} left center/contain no-repeat;color:transparent!important;min-height:1.7em}.logo span{visibility:hidden}`);
  img('background', u => `#menu{background:${u} center/cover no-repeat}`);
  img('loading', u => `#loading{background:#000 ${u} center/cover no-repeat}`);
  img('crosshair', u => `#cross .ring{border:0!important;box-shadow:none!important;background:${u} center/contain no-repeat;width:34px;height:34px;left:-17px;top:-17px}#cross .dot{display:none}`);
  img('crosshair-lock', u => `#cross.lock .ring{border:0!important;background:${u} center/contain no-repeat}`);
  img('hitmarker', u => `#hit i{display:none}#hit{background:${u} center/contain no-repeat;transform:none}`);
  for (const [k, sel] of [['btn-throw', '.throw'], ['btn-blink', '.blink'], ['btn-jump', '.jump'], ['btn-dash', '.dash'], ['btn-skill', '.skill']])
    img(k, u => `#touch .tb${sel}{background:${u} center/contain no-repeat!important;border:0!important;box-shadow:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}#touch .tb${sel} b{opacity:0}`);
  img('btn-emote', u => `.emoteBtn{background:${u} center/contain no-repeat!important;border:0!important;box-shadow:none!important;backdrop-filter:none!important;color:transparent!important}`);
  img('btn-pause', u => `#touch .tpause{background:${u} center/contain no-repeat!important;border:0!important;box-shadow:none!important;backdrop-filter:none!important;color:transparent!important}`);
  img('joystick', u => `#touch .joy{background:${u} center/contain no-repeat;border:0;backdrop-filter:none}`);
  img('joystick-knob', u => `#touch .joy .knob{background:${u} center/contain no-repeat;box-shadow:none}`);
  const font = I('font'), num = I('font-num');
  if (font) css += `@font-face{font-family:'RSCustom';src:url("${font}");font-display:swap}\nbody,body *{font-family:'RSCustom',sans-serif!important}\n`;
  if (num) css += `@font-face{font-family:'RSNum';src:url("${num}");font-display:swap}\n.num,.logo,#speedNum,#scoreTxt,#hpNum,#bannerBig,#modeTxt,.panel h2,.dn{font-family:'RSNum',sans-serif!important}\n`;
  if (css) { const s = document.createElement('style'); s.id = 'customUI'; s.textContent = css; document.head.appendChild(s); }
  const st = I('style');
  if (st) { const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = st; document.head.appendChild(l); }   // last = wins
  const ic = I('icon');
  if (ic) document.querySelectorAll('link[rel=icon],link[rel=apple-touch-icon]').forEach(l => { l.href = ic; });
}

// ---------------------------------------------------------------- 확인 screen
export function openCustomPanel() {
  let el = document.getElementById('customPanel');
  if (!el) {
    el = document.createElement('div'); el.id = 'customPanel'; el.className = 'screen clear';
    el.style.zIndex = 40;
    document.body.appendChild(el);
    el.addEventListener('click', e => { if (e.target.dataset.close !== undefined || e.target === el) el.remove(); if (e.target.dataset.reload !== undefined) location.reload(); });
  }
  const st = CUSTOM.status;
  const used = [...st.values()].filter(x => x.ok).length, bad = [...st.values()].filter(x => !x.ok).length;
  const known = new Set(SLOTS.flatMap(([, , list]) => list.map(([k]) => k)));
  const extra = [...st.keys()].filter(k => !known.has(k));
  const row = (k, label) => {
    const s = st.get(k);
    const mark = !s ? '<i class="cpOff">기본</i>' : s.ok ? '<i class="cpOk">적용</i>' : '<i class="cpBad">오류</i>';
    return `<div class="cpRow">${mark}<span>${label}<small>${s ? s.file + (s.msg ? ' · ' + s.msg : '') : 'public/custom/' + k + '.glb 등'}</small></span></div>`;
  };
  el.innerHTML = `<div class="panel" style="width:min(680px,94vw);max-height:88vh;overflow:auto">
    <h2>CUSTOM</h2>
    <p class="cpTop">public/custom 폴더에서 찾은 파일 <b>${used}개 적용</b>${bad ? ` · <b style="color:var(--red)">${bad}개 오류</b>` : ''}. 파일을 바꾼 뒤에는 새로고침하면 다시 읽어요.</p>
    ${SLOTS.map(([cat, , list]) => `<h3>${cat}</h3>${list.map(([k, n]) => row(k, n)).join('')}`).join('')}
    ${extra.length ? `<h3>그 밖의 파일</h3>${extra.map(k => row(k, k.startsWith('maps/') ? '새 맵: ' + k.slice(5) : k)).join('')}` : ''}
    <div class="row" style="justify-content:flex-end;gap:8px;margin-top:14px"><button class="btn" data-reload>새로고침</button><button class="btn main" data-close>닫기</button></div>
  </div>`;
}
