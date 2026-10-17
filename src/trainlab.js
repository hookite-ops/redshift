// AI 훈련장 (헤드리스 경기 하네스) — 같은 코드를 쓰는 곳이 둘:
//   1) 개발용 사전 학습 (tools/train: 브라우저 여러 개로 수천 경기를 돌림)
//   2) 게임 안 "AI 훈련소" (내 폰/PC 에서 이어서 학습)
// 경기는 렌더링 없이 1/120초 물리 틱만 돌려서 실제 시간보다 수백 배 빠르다.
import { BotBrain, PERSONAS, SKILL } from './bot.js';
import { NeuroBrain, observe, frame, OBS, ACT, A, SIZES } from './neurobot.js';
import { Policy } from './ai/nn.js';
import { rng } from './ai/es.js';
import { MAP_IDS } from './maps.js';
import { WEAPON_IDS } from './disc.js';

const DT = 1 / 120;
const SKILL_IDS = ['reflect', 'overdrive', 'gravity', 'heal'];
const RECORD_DT = 1 / 20;

// run fn with Math.random replaced by a seeded generator → the same seed replays the same match
function seeded(seed, fn) {
  const orig = Math.random; Math.random = rng(seed);
  try { return fn(); } finally { Math.random = orig; }
}

// set up a 1v1: fighter[0] (the slot the human normally uses) vs fighter[1]
function setupDuel(game, seed, opts) {
  const R = rng(seed ^ 0x9e3779b9);
  const pick = arr => arr[(R() * arr.length) | 0];
  const S = game.S, keep = { map: S.map, weapon: S.weapon, skill: S.skill, botSkill: S.botSkill };
  S.map = opts.map || pick(MAP_IDS); S.weapon = opts.weapon || pick(WEAPON_IDS); S.skill = opts.skill || pick(SKILL_IDS);
  S.botSkill = 'max';
  game.trainLock = true;                   // (set before start: no shader warm-up, HUD stays quiet)
  game.start(opts.ffa ? 'ffa' : 'duel');
  Object.assign(S, keep);
  if (game.input) game.input.locked = true;
  game.match.limit = 1e9; if (opts.ffa) game.match.timeLeft = 1e9;   // fixed-length matches: score = what happened in that time
  return { me: game.fighters[0], op: game.fighters[1], rest: game.fighters.slice(2) };
}

function brainFor(game, f, spec) {
  const per = PERSONAS[(Math.random() * PERSONAS.length) | 0];
  if (spec.type === 'neuro') return new NeuroBrain(game, f, spec.policy, spec.motor || 'max', per);
  return new BotBrain(game, f, spec.skill || 'max', per);
}

// wraps damage so every point of HP lost is credited to the right fighter
function trackDamage(game, tally) {
  const orig = game.damageFighter;
  game.damageFighter = function (t, dmg, by, ...rest) {
    const hp0 = t.alive && !t.invuln ? t.hp : null;
    const r = orig.call(this, t, dmg, by, ...rest);
    if (hp0 !== null && r) {
      const lost = hp0 - Math.max(0, t.hp);
      const tt = tally.get(t); if (tt) tt.taken += lost;
      const bb = by && tally.get(by); if (bb && by !== t) bb.dealt += lost;
    }
    return r;
  };
  return () => { game.damageFighter = orig; };
}

export function fitnessOf(r) { return (r.dealt - r.taken) + 60 * (r.k - r.d); }

// one evaluation match. a/b: { type: 'neuro', policy } | { type: 'bot', skill }
// written as a generator so the in-game lab can run it in small slices (the screen stays responsive)
// ffa: true → the same, but a 6-player free-for-all: a = me, b = all five others
function* matchSteps(game, { a, b, seed = 1, secs = 40, map, weapon, skill, collectObs = false, lab = false, ffa = false }, out) {
  const { me, op, rest } = setupDuel(game, seed, { map, weapon, skill, ffa });
  for (const f of rest) f.brain = brainFor(game, f, b);
  if (lab) game.state = 'lab';           // the frame loop leaves a lab match alone (no real-time ticking, no drawing)
  me.brain = brainFor(game, me, a);
  op.brain = brainFor(game, op, b);
  const tally = new Map([[me, { dealt: 0, taken: 0 }], [op, { dealt: 0, taken: 0 }]]);
  const undo = trackDamage(game, tally);
  let obsN = 0, obsSum = null, obsSq = null;
  if (collectObs && me.brain.neuro) {
    obsSum = new Float64Array(OBS); obsSq = new Float64Array(OBS);
    me.brain.onObs = o => { obsN++; for (let i = 0; i < OBS; i++) { obsSum[i] += o[i]; obsSq[i] += o[i] * o[i]; } };
  }
  try {
    const n = Math.round(secs / DT);
    for (let i = 0; i < n; i++) { game.tick(DT); if ((i & 127) === 127) yield i / n; }
  } finally { undo(); game.trainLock = false; }
  const A_ = tally.get(me);
  const res = { k: me.kills, d: me.deaths, dealt: Math.round(A_.dealt), taken: Math.round(A_.taken), map: game.arena.mapId, weapon: me.disc.w.id, opWeapon: op.disc.w.id, st: { ...me.st } };
  res.fit = fitnessOf(res);
  if (obsSum) res.obs = { n: obsN, sum: Array.from(obsSum), sq: Array.from(obsSq) };
  out.res = res;
}

export function evalMatch(game, opts) {
  const out = {};
  seeded(opts.seed || 1, () => { for (const _ of matchSteps(game, opts, out)); });
  return out.res;
}

// same match, but hands control back to the browser every ~sliceMs (Math.random is seeded only inside the slices)
export async function evalMatchAsync(game, opts, { sliceMs = 24, onProgress, cancel } = {}) {
  const out = {}, R = rng(opts.seed || 1), it = matchSteps(game, opts, out);
  for (; ;) {
    const orig = Math.random; Math.random = R;
    let done = false, p = 0;
    try {
      const t0 = performance.now();
      while (performance.now() - t0 < sliceMs) { const r = it.next(); if (r.done) { done = true; break; } p = r.value; }
    } finally { Math.random = orig; }
    if (done) return out.res;
    if (onProgress) onProgress(p);
    if (cancel && cancel()) { it.return(); return null; }
    await new Promise(r => setTimeout(r, 0));
  }
}

// free-for-all check: `nNeuro` of the 6 fighters use the learned brain, the rest are 최강 bots.
// returns kills/deaths per side so we can see whether the duel-trained brain also holds up in a crowd
export function evalFFA(game, { policy, nNeuro = 3, seed = 1, secs = 90 }) {
  return seeded(seed, () => {
    const R = rng(seed ^ 0x5bd1e995);
    const S = game.S, keep = { map: S.map, weapon: S.weapon, skill: S.skill, botSkill: S.botSkill };
    S.map = MAP_IDS[(R() * MAP_IDS.length) | 0]; S.weapon = WEAPON_IDS[(R() * WEAPON_IDS.length) | 0]; S.skill = SKILL_IDS[(R() * 4) | 0]; S.botSkill = 'max';
    game.trainLock = true; game.start('ffa'); Object.assign(S, keep);
    if (game.input) game.input.locked = true;
    game.match.limit = 1e9; game.match.timeLeft = 1e9;
    const fs = game.fighters;
    fs.forEach((f, i) => { f.brain = brainFor(game, f, i < nNeuro ? { type: 'neuro', policy: policy.clone() } : { type: 'bot', skill: 'max' }); f.side = i < nNeuro ? 'ai' : 'max'; });
    const n = Math.round(secs / DT);
    try { for (let i = 0; i < n; i++) game.tick(DT); } finally { game.trainLock = false; }
    const out = { ai: { k: 0, d: 0, n: 0 }, max: { k: 0, d: 0, n: 0 } };
    for (const f of fs) { const o = out[f.side]; o.k += f.kills; o.d += f.deaths; o.n++; }
    return out;
  });
}

// ---------------------------------------------------------------------------
// imitation data: watch the scripted 최강 bot play and write down, 20 times a second,
// what it saw (the same observation the network gets) and what it did (in network action terms)
export function recordMatch(game, { seed = 1, secs = 60, skills = ['max', 'max'] }) {
  return seeded(seed, () => {
    const { me, op } = setupDuel(game, seed, {});
    const fighters = [me, op];
    fighters.forEach((f, i) => { f.brain = brainFor(game, f, { type: 'bot', skill: skills[i] }); });
    const rows = [];
    const rec = new Map();
    for (const f of fighters) rec.set(f, Object.assign(newWin(), { pending: [] }));
    // hook the actions that don't show up in WASD
    const G = game, hooks = {};
    for (const k of ['throwFor', 'recallFor', 'blinkFor', 'useSkill']) {
      const orig = hooks[k] = G[k];
      G[k] = function (f, ...rest) {
        const r = orig.call(this, f, ...rest);
        const w = rec.get(f);
        if (w && r !== false) {
          if (k === 'throwFor') { w.throw = 1; const br = f.brain; w.style = br.plan ? (br._bankAt > G.gameTime - 0.5 ? 1 : 2) : 0; }
          else if (k === 'recallFor') w.recall = 1;
          else if (k === 'blinkFor') w.blink = 1;
          else w.skill = 1;
        }
        return r;
      };
    }
    // remember when a bank solution was found (to tell a bank plan from a lob plan)
    for (const f of fighters) {
      const br = f.brain, sb = br.solveBank.bind(br);
      br.solveBank = (o, t) => { const r = sb(o, t); if (r) br._bankAt = G.gameTime; return r; };
    }
    const n = Math.round(secs / DT), every = Math.round(RECORD_DT / DT);
    try {
      for (let i = 0; i < n; i++) {
        // decision point: snapshot observation before this tick
        if (i % every === 0) {
          for (const f of fighters) {
            const w = rec.get(f);
            if (w.obs) closeWin(w, rows);
            const br = f.brain;
            if (f.alive && br.target) {
              const o = new Float32Array(OBS);
              const fr = frame(br);
              observe(br, br.scanThreats(), o, fr);
              Object.assign(w, newWin(), { obs: o, fr, f });
            } else Object.assign(w, newWin());
          }
        }
        G.tick(DT);
        for (const f of fighters) {
          const w = rec.get(f); if (!w.obs) continue;
          const inp = f.brain.inp, B = f.body;
          const fx = -Math.sin(B.yaw), fz = -Math.cos(B.yaw), rx = Math.cos(B.yaw), rz = -Math.sin(B.yaw);
          const dx = inp.fwd * fx + inp.right * rx, dz = inp.fwd * fz + inp.right * rz, dl = Math.hypot(dx, dz) || 1;
          if (inp.fwd || inp.right) { w.mx += dx / dl; w.mz += dz / dl; }
          w.ticks++; if (inp.jumpHeld) w.hop++; if (inp.jumpPressed) w.jump = 1; if (inp.dashPressed) w.dash = 1;
          if (f.brain.intent === 'retreat') w.cover++;
        }
      }
    } finally { for (const k in hooks) G[k] = hooks[k]; game.trainLock = false; }
    for (const w of rec.values()) { if (w.obs) closeWin(w, rows); for (const p of w.pending) rows.push(p.row); }
    return { rows: rows.map(packRow), n: rows.length };
  });
}
function newWin() { return { obs: null, fr: null, f: null, ticks: 0, mx: 0, mz: 0, hop: 0, jump: 0, dash: 0, throw: 0, style: -1, recall: 0, blink: 0, skill: 0, cover: 0 }; }
function closeWin(w, rows) {
  const pending = w.pending;
  const t = Math.max(1, w.ticks), fr = w.fr;
  const mxw = w.mx / t, mzw = w.mz / t;
  const y = new Float32Array(ACT + 2);   // last two: style class (-1 = none), sample weight
  y[A.MOVE_F] = mxw * fr.fx + mzw * fr.fz; y[A.MOVE_S] = mxw * fr.rx + mzw * fr.rz;
  y[A.COVER] = w.cover / t > 0.5 ? 1 : 0; y[A.HOP] = w.hop / t > 0.5 ? 1 : 0;
  y[A.JUMP] = w.jump; y[A.DASH] = w.dash; y[A.THROW] = w.throw; y[A.RECALL] = w.recall; y[A.BLINK] = w.blink; y[A.SKILL] = w.skill;
  y[ACT] = w.throw ? w.style : -1; y[ACT + 1] = 1;
  const row = { obs: w.obs, y };
  // "about to throw": the network has to hold the trigger while the aim settles → mark the 2 windows before a throw too
  if (w.throw) for (const p of pending) p.row.y[A.THROW] = 1;
  pending.push({ row });
  while (pending.length > 2) rows.push(pending.shift().row);
}
const packRow = r => [Array.from(r.obs, v => +v.toFixed(4)), Array.from(r.y, v => +v.toFixed(3))];

// ---------------------------------------------------------------------------
// headless API for the offline trainer (tools/train/train.py drives this through a browser)
export function installTrainAPI(game) {
  const cache = new Map();
  const pol = j => { const key = typeof j === 'string' ? j : JSON.stringify(j); let p = cache.get(key); if (!p) { p = Policy.fromJSON(j); cache.set(key, p); if (cache.size > 64) cache.delete(cache.keys().next().value); } return p; };
  const spec = s => s.type === 'neuro' ? { type: 'neuro', policy: pol(s.policy).clone(), motor: s.motor } : s;
  window.__ai = {
    SIZES, OBS, ACT, A, SKILL: Object.keys(SKILL),
    evalMatch: (o) => {
      const t0 = performance.now();
      const r = evalMatch(game, { ...o, a: spec(o.a), b: spec(o.b) });
      r.ms = Math.round(performance.now() - t0); return r;
    },
    // a whole batch in one call (fewer browser round trips): jobs = [{ a, b, seed, secs }]
    evalBatch: (jobs) => jobs.map(o => { const r = evalMatch(game, { ...o, a: spec(o.a), b: spec(o.b) }); delete r.st; return r; }),
    recordMatch: (o) => recordMatch(game, o),
    evalFFA: (o) => evalFFA(game, { ...o, policy: pol(o.policy) }),
  };
}
