// MINDFORGE · 신경망 — 어떤 게임에도 붙는 작은 정책 신경망 (게임과 무관한 공용 코드)
//
// Policy = 관찰 정규화(평균·표준편차) + MLP(tanh 은닉층, 선형 출력).
// 파라미터는 Float32Array 한 줄이라서 진화 학습(ES)으로 통째로 흔들고, base64 JSON 으로 저장한다.

export function paramCount(sizes) {
  let n = 0;
  for (let i = 0; i < sizes.length - 1; i++) n += sizes[i] * sizes[i + 1] + sizes[i + 1];
  return n;
}

export class MLP {
  constructor(sizes, params = null) {
    this.sizes = sizes.slice();
    this.n = paramCount(sizes);
    this.p = params ? Float32Array.from(params) : new Float32Array(this.n);
    this.buf = sizes.map(s => new Float32Array(s));
  }
  // He/Xavier-ish init (small last layer so a fresh net is calm)
  init(rand = Math.random) {
    const gauss = () => { let u = 0, v = 0; while (u === 0) u = rand(); v = rand(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
    let o = 0;
    for (let l = 0; l < this.sizes.length - 1; l++) {
      const a = this.sizes[l], b = this.sizes[l + 1], last = l === this.sizes.length - 2;
      const s = (last ? 0.1 : 1) / Math.sqrt(a);
      for (let i = 0; i < a * b; i++) this.p[o++] = gauss() * s;
      for (let i = 0; i < b; i++) this.p[o++] = 0;
    }
    return this;
  }
  // x: input array (already normalised) → returns the output buffer (linear)
  forward(x) {
    const S = this.sizes, p = this.p;
    let inp = this.buf[0];
    for (let i = 0; i < S[0]; i++) inp[i] = x[i];
    let o = 0;
    for (let l = 0; l < S.length - 1; l++) {
      const a = S[l], b = S[l + 1], out = this.buf[l + 1], last = l === S.length - 2;
      const W = o, B = o + a * b;
      for (let j = 0; j < b; j++) {
        let s = p[B + j];
        const row = W + j * a;
        for (let i = 0; i < a; i++) s += p[row + i] * inp[i];
        out[j] = last ? s : Math.tanh(s);
      }
      o = B + b;
      inp = out;
    }
    return inp;
  }
}

// running mean / std of observations (Welford) — ES works much better on normalised inputs
export class ObsNorm {
  constructor(n) { this.n = n; this.count = 1e-4; this.mean = new Float64Array(n); this.m2 = new Float64Array(n).fill(1e-4); this.std = new Float32Array(n).fill(1); this.mu = new Float32Array(n); }
  push(x) {
    this.count++;
    for (let i = 0; i < this.n; i++) { const d = x[i] - this.mean[i]; this.mean[i] += d / this.count; this.m2[i] += d * (x[i] - this.mean[i]); }
  }
  // merge raw sums collected elsewhere (other workers / other pages)
  merge(cnt, sum, sumsq) {
    if (!cnt) return;
    for (let i = 0; i < this.n; i++) {
      const mB = sum[i] / cnt, vB = Math.max(0, sumsq[i] / cnt - mB * mB);
      const n = this.count + cnt, d = mB - this.mean[i];
      this.m2[i] += vB * cnt + d * d * this.count * cnt / n;
      this.mean[i] += d * cnt / n;
    }
    this.count += cnt;
  }
  freeze() { for (let i = 0; i < this.n; i++) { this.mu[i] = this.mean[i]; this.std[i] = Math.max(1e-2, Math.sqrt(this.m2[i] / this.count)); } }
}

const toB64 = f32 => { const u8 = new Uint8Array(f32.buffer, f32.byteOffset, f32.byteLength); let s = ''; for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000)); return btoa(s); };
const fromB64 = b => { const s = atob(b), u8 = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) u8[i] = s.charCodeAt(i); return new Float32Array(u8.buffer); };
export { toB64, fromB64 };

export class Policy {
  constructor(sizes, { params = null, mu = null, std = null, meta = {} } = {}) {
    this.net = new MLP(sizes, params);
    this.mu = mu ? Float32Array.from(mu) : new Float32Array(sizes[0]);
    this.std = std ? Float32Array.from(std) : new Float32Array(sizes[0]).fill(1);
    this.x = new Float32Array(sizes[0]);
    this.meta = meta;
  }
  get sizes() { return this.net.sizes; }
  act(obs) {
    const x = this.x, mu = this.mu, sd = this.std;
    for (let i = 0; i < x.length; i++) { const v = (obs[i] - mu[i]) / sd[i]; x[i] = v > 5 ? 5 : v < -5 ? -5 : v; }
    return this.net.forward(x);
  }
  clone() { return new Policy(this.sizes, { params: this.net.p, mu: this.mu, std: this.std, meta: { ...this.meta } }); }
  toJSON() { return { v: 1, sizes: this.sizes, p: toB64(this.net.p), mu: Array.from(this.mu, v => +v.toFixed(5)), std: Array.from(this.std, v => +v.toFixed(5)), meta: this.meta }; }
  static fromJSON(j) {
    if (typeof j === 'string') j = JSON.parse(j);
    return new Policy(j.sizes, { params: fromB64(j.p), mu: j.mu, std: j.std, meta: j.meta || {} });
  }
}
