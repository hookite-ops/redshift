// MINDFORGE · 진화 전략(ES) 학습기 — 게임과 무관한 공용 코드
//
// OpenAI-ES 방식: 현재 두뇌(θ)를 작은 노이즈로 흔든 후보들을 쌍(+ε / −ε)으로 시험하고,
// 순위를 매긴 점수로 "좋아지는 쪽"을 추정해 Adam 으로 한 걸음 옮긴다.
// 미분이 필요 없어서 어떤 게임 규칙이든(점프, 순간이동, 튕기는 원반…) 그대로 학습할 수 있다.
//
//   const es = new ES(theta, { pop: 16 });
//   const cands = es.ask();                 // [{ params, i }]  (pop 개)
//   es.tell(cands.map(c => evaluate(c.params)));   // 점수가 클수록 좋음
//   es.theta                                 // 학습된 파라미터

export function rng(seed) {             // mulberry32: 같은 시드 → 같은 난수 (재현 가능한 경기)
  let a = seed >>> 0;
  return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
export function gaussFill(out, rand) {
  for (let i = 0; i < out.length; i += 2) {
    let u = rand(); if (u < 1e-12) u = 1e-12;
    const r = Math.sqrt(-2 * Math.log(u)), a = 2 * Math.PI * rand();
    out[i] = r * Math.cos(a); if (i + 1 < out.length) out[i + 1] = r * Math.sin(a);
  }
  return out;
}

export class ES {
  constructor(theta, { pop = 16, sigma = 0.04, lr = 0.02, wd = 0.005, seed = (Math.random() * 2 ** 31) | 0 } = {}) {
    this.theta = Float32Array.from(theta);
    this.n = this.theta.length;
    this.pop = pop + (pop & 1);           // antithetic pairs → even
    this.sigma = sigma; this.lr = lr; this.wd = wd;
    this.m = new Float32Array(this.n); this.v = new Float32Array(this.n); this.t = 0;
    this.rand = rng(seed); this.gen = 0;
    this.eps = [];
  }
  ask() {
    const half = this.pop / 2, out = [];
    this.eps = [];
    for (let k = 0; k < half; k++) {
      const e = gaussFill(new Float32Array(this.n), this.rand);
      this.eps.push(e);
      for (const s of [1, -1]) {
        const p = new Float32Array(this.n);
        for (let i = 0; i < this.n; i++) p[i] = this.theta[i] + s * this.sigma * e[i];
        out.push({ params: p, i: out.length });
      }
    }
    return out;
  }
  // fitness[i] belongs to ask()[i]
  tell(fitness) {
    const N = fitness.length;
    // centered ranks in [-0.5, 0.5]: robust to lucky blow-out games
    const order = fitness.map((f, i) => i).sort((a, b) => fitness[a] - fitness[b]);
    const rank = new Float32Array(N);
    order.forEach((idx, r) => { rank[idx] = r / (N - 1) - 0.5; });
    const g = new Float32Array(this.n);
    for (let k = 0; k < this.eps.length; k++) {
      const w = rank[2 * k] - rank[2 * k + 1], e = this.eps[k];
      if (w === 0) continue;
      for (let i = 0; i < this.n; i++) g[i] += w * e[i];
    }
    const scale = 1 / (N * this.sigma);
    // Adam ascent + decoupled weight decay
    this.t++;
    const b1 = 0.9, b2 = 0.999, c1 = 1 - b1 ** this.t, c2 = 1 - b2 ** this.t;
    for (let i = 0; i < this.n; i++) {
      const gi = g[i] * scale;
      this.m[i] = b1 * this.m[i] + (1 - b1) * gi;
      this.v[i] = b2 * this.v[i] + (1 - b2) * gi * gi;
      this.theta[i] += this.lr * (this.m[i] / c1) / (Math.sqrt(this.v[i] / c2) + 1e-8) - this.lr * this.wd * this.theta[i];
    }
    this.gen++;
    let best = 0; for (let i = 1; i < N; i++) if (fitness[i] > fitness[best]) best = i;
    return { gen: this.gen, mean: fitness.reduce((a, b) => a + b, 0) / N, best: fitness[best] };
  }
}

// Elo-style rating for a league of opponents (self-play keeps a pool of frozen past versions)
export function eloUpdate(ra, rb, scoreA, k = 24) {
  const ea = 1 / (1 + 10 ** ((rb - ra) / 400));
  return [ra + k * (scoreA - ea), rb - k * (scoreA - ea)];
}
