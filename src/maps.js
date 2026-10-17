// MAPS — five arenas with different shapes of play. All are the same walled 100 m square (so movement,
// bounds and bots work everywhere); what changes is height, sight lines and how discs can be banked.
//   arena    화이트 아레나  — the original: central stage, four bounce pillars, corner high ground
//   spire    스파이어       — vertical: a tower ringed by a deck, launch pads, bridges to corner platforms
//   lanes    회랑           — three long lanes split by walls with doorways, speed strips, side walkways
//   forest   기둥 숲        — a grid of round and square columns: bank shots everywhere, short sight lines
//   orbit    궤도           — a raised ring track with speed strips around a bowl and a central column
import * as THREE from 'three';

const rng = seed => { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); };
const Q4 = [[-1, -1], [1, -1], [-1, 1], [1, 1]];

export const MAPS = {
  arena: {
    id: 'arena', label: 'WHITE ARENA', name: '화이트 아레나', desc: '가운데 무대 · 기둥 4개 · 모서리 고지대', accent: 0xff5a1f, seed: 42,
    build(A) {
      A.cyl(0, 0, 0, 7, 1, 'top');
      A.logo(0, 1, 0, 12.6);
      const rim = new THREE.TorusGeometry(7.02, 0.06, 6, 96); rim.rotateX(Math.PI / 2);
      A.deco(rim, 0, 1.0, 0, 'glow');
      A.deco(new THREE.CylinderGeometry(7.04, 7.04, 0.3, 64, 1, true), 0, 0.15, 0, 'dark');
      for (let k = 0; k < 4; k++) { const a = k * Math.PI / 2; A.ramp(Math.sin(a) * 11, Math.cos(a) * 11, a + Math.PI, 4, 4.2, 1); }
      for (const [sx, sz] of Q4) A.box(sx * 17, 0, sz * 17, 3, 9, 3, 'block', 0, { trim: true });
      for (let k = 0; k < 4; k++) { const a = k * Math.PI / 2 + Math.PI / 4; A.box(Math.cos(a) * 28, 0, Math.sin(a) * 28, 7, 1.4, 1, 'block', -a + Math.PI / 2, { trim: true }); }
      for (const [x, z, ry] of [[0, -30, 0], [0, 30, 0], [-30, 0, Math.PI / 2], [30, 0, Math.PI / 2]]) A.box(x, 0, z, 10, 2.6, 1, 'block', ry, { trim: true });
      for (const [sx, sz] of Q4) {
        const cx = sx * 40, cz = sz * 40;
        A.box(cx, 0, cz, 14, 3.5, 14, 'top', 0, { trim: true });
        A.ramp(cx, cz - sz * 17, sz > 0 ? 0 : Math.PI, 5, 10, 3.5);
        A.high(cx + sx * 2, 3.5, cz + sz * 2);
      }
      for (let i = 0; i < 12; i++) {
        const a = i / 12 * Math.PI * 2 + 0.13, r = 36 + (i % 2) * 6, x = Math.cos(a) * r, z = Math.sin(a) * r;
        if (Math.abs(Math.abs(x) - 40) < 9 && Math.abs(Math.abs(z) - 40) < 9) continue;
        A.spawn(x, z);
      }
      for (const [x, z] of [[0, -42], [0, 42], [-42, 0], [42, 0], [-22, -40], [22, 40], [-24, 8], [24, -8], [8, 24], [-8, -24], [0, 15], [0, -15], [15, 0], [-15, 0]]) A.spawn(x, z);
      for (const c of [[-17, -17], [17, -17], [-17, 17], [17, 17], [0, -30], [0, 30], [-30, 0], [30, 0], [0, 0]]) A.addCover(...c);
      A.deco(A.ring(9.3, 9.5), 0, 0.01, 0, 'paint');
      A.deco(A.ring(13.8, 13.9), 0, 0.01, 0, 'paintDark');
      for (let k = 0; k < 4; k++) {
        const a = k * Math.PI / 2 + Math.PI / 4, g = new THREE.PlaneGeometry(0.14, 22); g.rotateX(-Math.PI / 2);
        A.deco(g, Math.sin(a) * 25, 0.01, Math.cos(a) * 25, 'paintDark', a);
      }
    },
  },

  spire: {
    id: 'spire', label: 'SPIRE', name: '스파이어', desc: '탑과 공중 데크 · 점프대 · 높이 싸움', accent: 0x19c3ff, wallH: 14, headroom: 22, seed: 7,
    build(A) {
      // the tower and the deck around it (top at 6 m), on dark columns
      A.box(0, 0, 0, 8, 16, 8, 'block', 0, { trim: true });
      A.box(0, 5.2, -7, 20, 0.8, 6, 'top'); A.box(0, 5.2, 7, 20, 0.8, 6, 'top');
      A.box(-7, 5.2, 0, 6, 0.8, 8, 'top'); A.box(7, 5.2, 0, 6, 0.8, 8, 'top');
      for (const [sx, sz] of Q4) A.cyl(sx * 9.2, 0, sz * 9.2, 0.5, 5.2, 'dark');
      const edge = new THREE.TorusGeometry(14.1, 0.06, 4, 4); edge.rotateX(Math.PI / 2); edge.rotateY(Math.PI / 4);
      A.deco(edge, 0, 6.02, 0, 'glow');
      // launch pads onto the deck from the ground, and from the deck onto the tower top
      for (const [x, z] of [[0, -11.8], [0, 11.8], [-11.8, 0], [11.8, 0]]) A.jumpPad(x, 0, z, 22);
      A.jumpPad(0, 6, -5.2, 32, 1.2); A.jumpPad(0, 6, 5.2, 32, 1.2);
      A.high(0, 16, 0);
      // corner platforms at deck height, a ramp up to each and a bridge across to the deck
      for (const [sx, sz] of Q4) {
        A.box(sx * 26, 5.2, sz * 26, 10, 0.8, 10, 'top', 0, { trim: true });
        A.cyl(sx * 26, 0, sz * 26, 0.7, 5.2, 'dark');
        A.ramp(sx * 26, sz * 7, sz > 0 ? 0 : Math.PI, 4, 14, 6);
        A.box(sx * 15.5, 5.2, sz * 15.5, 3, 0.8, 17, 'top', Math.atan2(sx, sz));
        A.high(sx * 27, 6, sz * 27);
      }
      A.high(0, 6, -7); A.high(0, 6, 7); A.high(-7, 6, 0); A.high(7, 6, 0);
      // ground: bounce pillars on the axes and low walls to vault
      for (const [x, z] of [[36, 0], [-36, 0], [0, 36], [0, -36]]) A.box(x, 0, z, 3, 8, 3, 'block', 0, { trim: true });
      for (const [sx, sz] of Q4) { A.box(sx * 36, 0, sz * 18, 1, 1.4, 7, 'block', 0, { trim: true }); A.box(sx * 18, 0, sz * 36, 7, 1.4, 1, 'block', 0, { trim: true }); }
      for (const [x, z] of [[40, 40], [-40, 40], [40, -40], [-40, -40], [0, 43], [0, -43], [43, 0], [-43, 0], [20, 0], [-20, 0], [0, 20], [0, -20], [40, 12], [-40, -12], [12, -40], [-12, 40]]) A.spawn(x, z);
      for (const c of [[0, 0], [36, 0], [-36, 0], [0, 36], [0, -36], [26, 26], [-26, 26], [26, -26], [-26, -26]]) A.addCover(...c);
      A.deco(A.ring(16, 16.2), 0, 0.01, 0, 'paint');
    },
  },

  lanes: {
    id: 'lanes', label: 'THE LANES', name: '회랑', desc: '벽으로 나뉜 세 갈래 길 · 가속 발판 · 벽 튕기기', accent: 0xff2d8a, wallH: 10, seed: 19,
    build(A) {
      // two divider walls with three doorways each
      for (const sz of [-1, 1]) for (const [x0, x1] of [[-36, -20], [-14, -3], [3, 14], [20, 36]]) A.box((x0 + x1) / 2, 0, sz * 12, x1 - x0, 4.5, 1, 'block', 0, { trim: true });
      // centre lane: speed strips at both ends, low cover, a round post in the middle
      A.boostPad(-41, 0, 0, Math.PI / 2, 8, 3.5); A.boostPad(41, 0, 0, -Math.PI / 2, 8, 3.5);
      A.cyl(0, 0, 0, 1.6, 3.4, 'block', { trim: true });
      for (const [x, z, w, d] of [[-27, -4, 1, 5], [27, 4, 1, 5], [-9, 5, 4, 1], [9, -5, 4, 1]]) A.box(x, 0, z, w, 1.3, d, 'block', 0, { trim: true });
      // side lanes: raised walkways along the outer walls with ramps at the ends, crates, columns
      for (const sz of [-1, 1]) {
        A.box(0, 0, sz * 44.5, 76, 2.5, 9, 'top', 0, { trim: true });
        A.ramp(48, sz * 44.5, -Math.PI / 2, 8, 10, 2.5); A.ramp(-48, sz * 44.5, Math.PI / 2, 8, 10, 2.5);
        A.box(-20, 0, sz * 28, 4, 2.2, 4, 'block', 0.3, { trim: true });
        A.box(10, 0, sz * 24, 2, 3.5, 6, 'block', 0, { trim: true });
        A.box(30, 0, sz * 30, 5, 1.4, 1, 'block', 0, { trim: true });
        A.cyl(-5, 0, sz * 32, 1.2, 7, 'block', { trim: true });
        for (const x of [-25, 0, 25]) A.high(x, 2.5, sz * 44.5);
      }
      // end plazas: a tall pillar each
      A.box(43, 0, 0, 4, 10, 4, 'block', 0, { trim: true }); A.box(-43, 0, 0, 4, 10, 4, 'block', 0, { trim: true });
      for (const [x, z] of [[44, 20], [-44, 20], [44, -20], [-44, -20], [30, 6], [-30, -6], [-30, 6], [30, -6], [0, 22], [0, -22], [-32, 32], [-32, -32], [18, 34], [18, -34], [-12, 0], [12, 0]]) A.spawn(x, z);
      for (const c of [[-27, -4], [27, 4], [-9, 5], [9, -5], [0, 0], [-20, 28], [-20, -28], [10, 24], [10, -24], [43, 0], [-43, 0], [-5, 32], [-5, -32]]) A.addCover(...c);
      for (const sz of [-1, 1]) { const g = new THREE.PlaneGeometry(72, 0.14); g.rotateX(-Math.PI / 2); A.deco(g, 0, 0.01, sz * 6, 'paintDark'); }
      { const g = new THREE.PlaneGeometry(60, 0.2); g.rotateX(-Math.PI / 2); A.deco(g, 0, 0.01, 0, 'paint'); }
    },
  },

  forest: {
    id: 'forest', label: 'PILLAR FOREST', name: '기둥 숲', desc: '빽빽한 기둥 사이 · 튕겨 맞히기 천국', accent: 0x26d97a, seed: 31,
    build(A) {
      const r = rng(31), S = 12.5;
      for (let gx = -3; gx <= 3; gx++) for (let gz = -3; gz <= 3; gz++) {
        if (Math.abs(gx) <= 1 && Math.abs(gz) <= 1) continue; // clearing in the middle
        const x = gx * S + (r() - 0.5) * 4, z = gz * S + (r() - 0.5) * 4;
        if (Math.abs(gx) === 2 && Math.abs(gz) === 2) { // four lookouts with launch pads beside them
          const sx = Math.sign(gx), sz = Math.sign(gz);
          A.box(sx * 25, 0, sz * 25, 6, 4, 6, 'top', 0, { trim: true });
          A.jumpPad(sx * 25 - sx * 4.8, 0, sz * 25, 20);
          A.high(sx * 25, 4, sz * 25);
          continue;
        }
        const k = r();
        if (k < 0.55) A.cyl(x, 0, z, 1 + r() * 0.8, 6 + r() * 5, 'block', { trim: true });
        else if (k < 0.8) A.box(x, 0, z, 2.6, 4 + r() * 5, 2.6, 'block', r() * Math.PI, { trim: true });
        else A.box(x, 0, z, 4, 1.3, 1.5, 'block', r() * Math.PI, { trim: true });
        A.addCover(x, z);
      }
      // the clearing: a tall bounce post and four low arcs around it
      A.cyl(0, 0, 0, 1.5, 12, 'block', { trim: true });
      for (let k = 0; k < 4; k++) { const a = k * Math.PI / 2 + Math.PI / 4; A.box(Math.sin(a) * 9, 0, Math.cos(a) * 9, 6, 1.3, 1, 'block', a, { trim: true }); }
      A.addCover(0, 0);
      for (let gx = -4; gx < 4; gx++) for (let gz = -4; gz < 4; gz++) if ((gx + gz) & 1) A.spawn((gx + 0.5) * S, (gz + 0.5) * S);
      A.deco(A.ring(15, 15.2), 0, 0.01, 0, 'paint');
    },
  },

  orbit: {
    id: 'orbit', label: 'ORBIT', name: '궤도', desc: '둥근 고가 트랙 · 가속 발판으로 빙글빙글', accent: 0xffbf1a, seed: 57,
    build(A) {
      // raised ring track (r 29–39, 2 m high)
      const N = 36;
      for (let i = 0; i < N; i++) { const a = i / N * Math.PI * 2; A.box(Math.sin(a) * 34, 0, Math.cos(a) * 34, 6.4, 2, 10, 'top', a, { ao: true }); }
      for (const rr of [29, 39]) { const t = new THREE.TorusGeometry(rr, 0.07, 4, 120); t.rotateX(Math.PI / 2); A.deco(t, 0, 2.02, 0, 'glow'); }
      // speed strips all pointing the same way round
      for (let k = 0; k < 4; k++) { const a = k * Math.PI / 2 + 0.2; A.boostPad(Math.sin(a) * 34, 2, Math.cos(a) * 34, a + Math.PI / 2, 8, 4); }
      // ramps up from the bowl and from the outside
      for (let k = 0; k < 4; k++) {
        const a = k * Math.PI / 2 + Math.PI / 4;
        A.ramp(Math.sin(a) * 22.2, Math.cos(a) * 22.2, a, 5, 7, 2);
        A.ramp(Math.sin(a) * 45.8, Math.cos(a) * 45.8, a + Math.PI, 5, 7, 2);
      }
      // the bowl: island + column, low blocks
      A.cyl(0, 0, 0, 7, 1.5, 'top', { trim: true });
      A.cyl(0, 1.5, 0, 1.4, 9, 'block', { trim: true });
      for (let k = 0; k < 4; k++) { const a = k * Math.PI / 2; A.ramp(Math.sin(a) * 10.5, Math.cos(a) * 10.5, a + Math.PI, 3, 3.6, 1.5); }
      for (let k = 0; k < 6; k++) { const a = k / 6 * Math.PI * 2 + 0.5; A.box(Math.sin(a) * 17, 0, Math.cos(a) * 17, 5, 1.3, 1, 'block', a, { trim: true }); A.addCover(Math.sin(a) * 17, Math.cos(a) * 17); }
      // corner towers outside the ring with launch pads
      for (const [sx, sz] of Q4) {
        A.box(sx * 43, 0, sz * 43, 8, 7, 8, 'top', 0, { trim: true });
        A.jumpPad(sx * 36.6, 0, sz * 43, 24);
        A.high(sx * 43, 7, sz * 43); A.addCover(sx * 43, sz * 43);
      }
      A.addCover(0, 0);
      for (let k = 0; k < 8; k++) { const a = k / 8 * Math.PI * 2 + 0.3; A.spawn(Math.sin(a) * 14, Math.cos(a) * 14); A.spawn(Math.sin(a + 0.4) * 34, Math.cos(a + 0.4) * 34, 2); }
      for (const [x, z] of [[45, 0], [-45, 0], [0, 45], [0, -45]]) A.spawn(x, z);
      A.deco(A.ring(24.5, 24.7), 0, 0.01, 0, 'paint');
    },
  },
};
export const MAP_IDS = Object.keys(MAPS);
