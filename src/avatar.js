// AVATAR — the blocky runner: rounded blocks wearing 16×16 pixel-art skins, on a real joint rig
// (hips → spine → chest → neck → head, shoulders → elbows → hands, hips → knees → ankles).
// Used by fighters in the match and by the locker preview. emotePose() bends the same rig for emotes.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { byId, skinTexture } from './cosmetics.js';
import { attachCharacter } from './custom.js';

export function buildAvatar(skinId, color, glowK = 1.3) {
    const SK = byId('skin', skinId), P = SK.p;
    const glow = new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(glowK) });
    const accent = new THREE.MeshBasicMaterial({ color: new THREE.Color(P.glow).multiplyScalar(glowK * 0.9) });
    const team = new THREE.MeshStandardMaterial({ color, roughness: 0.4, emissive: new THREE.Color(color).multiplyScalar(0.3) });
    const shiny = SK.look === 'robot' || SK.look === 'champ' || SK.look === 'frost' || SK.look === 'astro';
    const mat = part => { const m = new THREE.MeshStandardMaterial({ map: skinTexture(SK, part), roughness: shiny ? 0.35 : 0.75, metalness: SK.look === 'robot' || SK.look === 'champ' ? 0.45 : 0.02 }); return m; };
    const mats = {}; const M = part => mats[part] || (mats[part] = mat(part));
    // a material per box face: [+x, -x, +y, -y, +z (back), -z (front)]
    const faces = (front, side, top, back = side, bottom = top) => [M(side), M(side), M(top), M(bottom), M(back), M(front)];
    const m = (g, mt, x = 0, y = 0, z = 0) => { const o = new THREE.Mesh(g, mt); o.position.set(x, y, z); o.castShadow = true; return o; };
    const blk = (w, h, d, r = 0.035) => new RoundedBoxGeometry(w, h, d, 2, Math.min(r, w / 2.2, h / 2.2, d / 2.2));
    const J = (parent, x, y, z) => { const g = new THREE.Group(); g.position.set(x, y, z); parent.add(g); return g; };
    const root = new THREE.Group();
    const R = {};
    const hips = R.hips = J(root, 0, 0.92, 0);
    hips.add(m(blk(0.44, 0.16, 0.25), faces('leg', 'leg', 'leg'), 0, 0.02, 0));
    hips.add(m(new THREE.BoxGeometry(0.455, 0.035, 0.265), glow, 0, 0.08, 0));                         // team belt
    const spine = R.spine = J(hips, 0, 0.09, 0);
    spine.add(m(blk(0.42, 0.2, 0.23), faces('chest', 'side', 'side', 'back'), 0, 0.09, 0));
    const chest = R.chest = J(spine, 0, 0.19, 0);
    chest.add(m(blk(0.5, 0.34, 0.27, 0.05), faces('chest', 'side', 'side', 'back'), 0, 0.17, 0));
    const neck = R.neck = J(chest, 0, 0.34, 0);
    const head = R.head = J(neck, 0, 0.0, 0);
    head.add(m(blk(0.44, 0.44, 0.44, 0.07), faces('face', 'headSide', 'headTop', 'headBack', 'face'), 0, 0.22, 0));
    if (SK.look === 'astro') { const v = m(blk(0.47, 0.47, 0.47, 0.09), new THREE.MeshPhysicalMaterial({ color: 0xffffff, transparent: true, opacity: 0.18, roughness: 0.05, clearcoat: 1, depthWrite: false }), 0, 0.22, 0); v.castShadow = false; head.add(v); }
    if (SK.look === 'champ') { for (let k = -2; k <= 2; k++) head.add(m(blk(0.07, 0.1, 0.07, 0.01), new THREE.MeshStandardMaterial({ color: 0xf2c230, metalness: 1, roughness: 0.25 }), k * 0.09, 0.48, 0)); }
    if (SK.look === 'robot') { head.add(m(new THREE.CylinderGeometry(0.012, 0.012, 0.16, 6), M('headSide'), 0.12, 0.52, 0)); head.add(m(new THREE.SphereGeometry(0.03, 8, 6), accent, 0.12, 0.61, 0)); }
    if (SK.look === 'ninja') { const t = m(blk(0.06, 0.03, 0.22, 0.01), new THREE.MeshStandardMaterial({ color: P.top2 }), 0, 0.33, 0.27); t.rotation.x = 0.6; head.add(t); }
    // arms (0 = left, 1 = right / throwing)
    R.sh = []; R.el = []; R.hand = [];
    for (const s of [-1, 1]) {
      const sh = J(chest, s * 0.335, 0.29, 0);
      sh.add(m(blk(0.18, 0.3, 0.19), faces('arm', 'arm', 'side', 'arm', 'hand'), 0, -0.12, 0));
      sh.add(m(new THREE.BoxGeometry(0.19, 0.035, 0.2), glow, 0, -0.2, 0));                              // team arm band
      const el = J(sh, 0, -0.27, 0);
      el.add(m(blk(0.165, 0.24, 0.175), faces('arm', 'arm', 'arm', 'arm', 'hand'), 0, -0.11, 0));
      const hand = J(el, 0, -0.25, 0);
      hand.add(m(blk(0.15, 0.12, 0.155, 0.03), faces('hand', 'hand', 'hand'), 0, -0.02, 0));
      R.sh.push(sh); R.el.push(el); R.hand.push(hand);
    }
    // legs
    R.hip = []; R.knee = []; R.ankle = [];
    for (const s of [-1, 1]) {
      const hp = J(hips, s * 0.11, -0.04, 0);
      hp.add(m(blk(0.2, 0.42, 0.22), faces('leg', 'leg', 'leg'), 0, -0.19, 0));
      const kn = J(hp, 0, -0.4, 0);
      kn.add(m(blk(0.19, 0.36, 0.21), faces('leg', 'leg', 'leg'), 0, -0.17, 0));
      const an = J(kn, 0, -0.36, 0);
      an.add(m(blk(0.21, 0.12, 0.29, 0.04), faces('shoe', 'shoe', 'shoe'), 0, -0.06, -0.035));
      an.add(m(new THREE.BoxGeometry(0.215, 0.018, 0.295), accent, 0, -0.115, -0.035));                // sole light
      R.hip.push(hp); R.knee.push(kn); R.ankle.push(an);
    }
    root.scale.setScalar(0.93);
    const hd = new THREE.Group(); hd.position.set(0.02, -0.06, -0.08); hd.rotation.set(0, Math.PI / 2, 0);
    R.hand[1].add(hd);
    const A = { root, rig: R, head, handDisc: hd, glow, team, glowK, sync: null };
    const C = attachCharacter(A, skinId);              // public/custom/characters/<skin>.glb
    if (C) A.sync = C.sync;
    return A;
}

// ---------------------------------------------------------------- emotes
// sets joint rotations for emote `id` at time t (s). Called after the normal pose, so it wins.
const S = Math.sin, C = Math.cos;
export function emotePose(R, id, t, root = null) {
  const sh = R.sh, el = R.el, hp = R.hip, kn = R.knee, an = R.ankle;
  const set = (o, x = 0, y = 0, z = 0) => o.rotation.set(x, y, z);
  // neutral base
  set(R.hips); R.hips.position.y = 0.92; set(R.spine); set(R.chest); set(R.head);
  for (let i = 0; i < 2; i++) { set(sh[i], 0, 0, (i ? -1 : 1) * 0.08); set(el[i]); set(hp[i]); set(kn[i]); set(an[i]); }
  if (root) root.userData.spin = 0;
  switch (id) {
    case 'wave': {
      set(sh[1], 0, 0, -2.6 + S(t * 9) * 0.35); set(el[1], 0, 0, -0.5 + S(t * 9) * 0.3);
      set(R.head, 0, 0, S(t * 3) * 0.08); set(R.spine, 0, 0, -0.05);
      break;
    }
    case 'clap': {
      const k = Math.abs(S(t * 9));
      set(sh[0], 1.25, 0, 0.55 - k * 0.45); set(sh[1], 1.25, 0, -0.55 + k * 0.45); set(el[0], 0.5, 0, 0); set(el[1], 0.5, 0, 0);
      R.hips.position.y = 0.92 - Math.abs(S(t * 4.5)) * 0.02;
      break;
    }
    case 'cheer': {
      const j = Math.max(0, S(t * 5.5)); R.hips.position.y = 0.92 + j * 0.35;
      set(sh[0], 0, 0, 2.7 + S(t * 11) * 0.15); set(sh[1], 0, 0, -2.7 - S(t * 11) * 0.15);
      for (let i = 0; i < 2; i++) { set(hp[i], j * 0.5); set(kn[i], -j * 1.0); }
      set(R.head, -0.25);
      break;
    }
    case 'sit': {
      R.hips.position.y = 0.38;
      for (let i = 0; i < 2; i++) { set(hp[i], 1.45, 0, (i ? -1 : 1) * 0.15); set(kn[i], -1.45); set(an[i], 0.1); set(sh[i], -0.2, 0, (i ? -1 : 1) * 0.25); set(el[i], 0.6); }
      set(R.spine, -0.1); set(R.head, 0.15 + S(t * 0.8) * 0.05, S(t * 0.5) * 0.3);
      break;
    }
    case 'taunt': {
      const k = S(t * 10);
      set(sh[1], 1.5, 0, -0.2); set(el[1], 1.4 + k * 0.4); set(sh[0], 0.1, 0, 0.5); set(el[0], 0.9);
      set(R.spine, 0.12, -0.3); set(R.head, -0.2, 0.25);
      for (let i = 0; i < 2; i++) set(hp[i], i ? -0.25 : 0.35);
      break;
    }
    case 'robot': {
      const st = Math.floor(t * 4) % 4;   // stiff, stepped moves
      const a = [0, 0.9, 0, -0.9][st], b = [1.57, 0, -1.2, 0][st];
      set(sh[0], a, 0, 0.3); set(el[0], 1.57); set(sh[1], -a, 0, -0.3); set(el[1], 1.57);
      set(R.spine, 0, [0.3, 0, -0.3, 0][st]); set(R.head, 0, [-0.5, 0, 0.5, 0][st]);
      R.hips.position.y = 0.92 - (st % 2) * 0.05;
      for (let i = 0; i < 2; i++) set(kn[i], -(st % 2) * 0.2);
      void b;
      break;
    }
    case 'spin': {
      if (root) root.userData.spin = t * 10;
      set(sh[0], 0, 0, 1.4); set(sh[1], 0, 0, -1.4);
      for (let i = 0; i < 2; i++) set(hp[i], 0, 0, (i ? -1 : 1) * 0.2);
      R.hips.position.y = 0.92 + Math.abs(S(t * 5)) * 0.05;
      break;
    }
    case 'flex': {
      const k = 0.5 + 0.5 * S(t * 3);
      set(sh[0], 0, 0, 1.55); set(sh[1], 0, 0, -1.55); set(el[0], 0, 0, 1.4 + k * 0.4); set(el[1], 0, 0, -1.4 - k * 0.4);
      set(R.chest, -0.15 - k * 0.08); R.chest.scale.setScalar(1 + k * 0.06);
      for (let i = 0; i < 2; i++) set(hp[i], 0, 0, (i ? -1 : 1) * 0.12);
      set(R.head, -0.2);
      break;
    }
    case 'groove': {
      const k = S(t * 6);
      R.hips.position.x = k * 0.08; R.hips.position.y = 0.9 - Math.abs(C(t * 6)) * 0.04;
      set(R.hips, 0, 0, -k * 0.12); set(R.spine, 0, k * 0.3, k * 0.12); set(R.head, 0, -k * 0.2, k * 0.15);
      set(sh[0], 0.6 + k * 0.4, 0, 0.6); set(el[0], 1.2); set(sh[1], 0.6 - k * 0.4, 0, -0.6); set(el[1], 1.2);
      for (let i = 0; i < 2; i++) { set(hp[i], (i ? k : -k) * 0.25 + 0.15); set(kn[i], -0.35); }
      break;
    }
    case 'disco': {
      const up = S(t * 4) > 0;
      set(sh[1], 0, 0, up ? -2.6 : -0.6); set(el[1], 0, 0, up ? -0.2 : 0);
      set(sh[0], up ? 0.3 : 1.0, 0, 0.3); set(el[0], 1.3);
      set(R.hips, 0, 0, up ? 0.12 : -0.12); set(R.spine, 0, 0, up ? -0.15 : 0.15); set(R.head, up ? -0.3 : 0.1);
      for (let i = 0; i < 2; i++) { set(hp[i], 0, 0, (i ? -1 : 1) * (up ? 0.25 : 0.05)); set(kn[i], up && i ? -0.4 : 0); }
      R.hips.position.y = 0.9 + (up ? 0.03 : 0);
      break;
    }
  }
  if (R.chest.scale.x !== 1 && id !== 'flex') R.chest.scale.setScalar(1);
  if (id !== 'groove') R.hips.position.x = 0;
}
