# 1단계 — 모방 학습: 최강 봇의 플레이를 보고 "이럴 땐 이렇게" 를 신경망에 옮겨 담는다.
#   python3 tools/train/imitate.py collect 400      # 경기 400판 기록 → data/imitation.npz
#   python3 tools/train/imitate.py fit              # 학습 → brains/gen0.json
import asyncio, sys, os, time, json
import numpy as np
sys.path.insert(0, os.path.dirname(__file__))
from common import *

DATA = os.path.join(ROOT, 'tools', 'train', 'data'); os.makedirs(DATA, exist_ok=True)
BRAINS = os.path.join(ROOT, 'tools', 'train', 'brains'); os.makedirs(BRAINS, exist_ok=True)
SIZES = [67, 64, 48, 15]
OBS, ACT = 67, 15
MOVE_F, MOVE_S, COVER, HOP, JUMP, DASH, THROW, DIRECT, BANK, LOB, AIM_Y, AIM_P, RECALL, BLINK, SKILL = range(15)
GATES = [COVER, HOP, JUMP, DASH, THROW, RECALL, BLINK, SKILL]

async def collect(n, workers=2, secs=60):
    serve_public()
    jobs = [{'seed': 1000 + i, 'secs': secs} for i in range(n)]
    X, Y = [], []
    t0 = time.time()
    async with Workers(workers) as W:
        done = 0
        for s in range(0, n, 20):
            res = await W.map("js => js.map(o => __ai.recordMatch(o))", jobs[s:s + 20], chunk=2)
            for r in res:
                for o, y in r['rows']: X.append(o); Y.append(y)
            done += len(res)
            print(f'{done}/{n} matches, {len(X)} rows, {time.time() - t0:.0f}s', flush=True)
    X = np.array(X, np.float32); Y = np.array(Y, np.float32)
    np.savez_compressed(os.path.join(DATA, 'imitation.npz'), X=X, Y=Y)
    print('saved', X.shape)

def fit(epochs=30, out='gen0.json'):
    d = np.load(os.path.join(DATA, 'imitation.npz')); X, Y = d['X'], d['Y']
    mu = X.mean(0); std = np.maximum(X.std(0), 1e-2)
    Xn = np.clip((X - mu) / std, -5, 5)
    N = len(X); rs = np.random.RandomState(0); idx = rs.permutation(N)
    va, tr = idx[:N // 20], idx[N // 20:]
    # layers
    L = []
    for a, b in zip(SIZES[:-1], SIZES[1:]):
        L.append([rs.randn(b, a).astype(np.float32) / np.sqrt(a), np.zeros(b, np.float32)])
    m = [[np.zeros_like(W), np.zeros_like(b)] for W, b in L]; v = [[np.zeros_like(W), np.zeros_like(b)] for W, b in L]
    # gate positives are rare (throw ~10%, blink ~1%) → weight them up
    pos = np.clip(Y[:, GATES].mean(0), 1e-3, 1)
    gw = np.clip(0.5 / pos, 1, 15).astype(np.float32)
    print('gate pos rates', dict(zip(['cover','hop','jump','dash','throw','recall','blink','skill'], pos.round(3))))

    def loss_grad(xb, yb, train=True):
        hs = [xb]; h = xb
        for i, (W, b) in enumerate(L):
            z = h @ W.T + b
            h = np.tanh(z) if i < len(L) - 1 else z
            hs.append(h)
        out = hs[-1]; B = len(xb)
        g = np.zeros_like(out); loss = 0.0
        # move: MSE on tanh(out)
        for k in (MOVE_F, MOVE_S):
            t = np.tanh(out[:, k]); e = t - yb[:, k]
            loss += (e ** 2).mean(); g[:, k] = 2 * e * (1 - t * t) / B
        # gates: weighted BCE on sigmoid(out)
        for j, k in enumerate(GATES):
            p = 1 / (1 + np.exp(-out[:, k])); y = yb[:, k]; w = np.where(y > 0.5, gw[j], 1.0)
            loss += (w * -(y * np.log(p + 1e-7) + (1 - y) * np.log(1 - p + 1e-7))).mean()
            g[:, k] = w * (p - y) / B
        # throw style: softmax CE where a throw happened
        sty = yb[:, ACT].astype(int); msk = sty >= 0
        if msk.any():
            lg = out[msk][:, [DIRECT, BANK, LOB]]; lg = lg - lg.max(1, keepdims=True)
            pr = np.exp(lg); pr /= pr.sum(1, keepdims=True)
            loss += -np.log(pr[np.arange(msk.sum()), sty[msk]] + 1e-7).mean() * msk.mean()
            gg = pr.copy(); gg[np.arange(msk.sum()), sty[msk]] -= 1
            G3 = np.zeros((B, 3), np.float32); G3[msk] = gg / B
            g[:, DIRECT] = G3[:, 0]; g[:, BANK] = G3[:, 1]; g[:, LOB] = G3[:, 2]
        # aim offsets: keep near 0
        for k in (AIM_Y, AIM_P):
            loss += 0.01 * (out[:, k] ** 2).mean(); g[:, k] = 0.02 * out[:, k] / B
        if not train: return loss, None
        grads = []; delta = g
        for i in range(len(L) - 1, -1, -1):
            W, b = L[i]; hin = hs[i]
            grads.append((delta.T @ hin, delta.sum(0)))
            if i > 0: delta = (delta @ W) * (1 - hs[i] ** 2)
        return loss, grads[::-1]

    lr, t = 2e-3, 0
    bs = 512
    for ep in range(epochs):
        rs.shuffle(tr); tl = 0; nb = 0
        for s in range(0, len(tr), bs):
            bi = tr[s:s + bs]
            l, grads = loss_grad(Xn[bi], Y[bi]); tl += l; nb += 1; t += 1
            for i, (gW, gb) in enumerate(grads):
                for j, gg in enumerate((gW, gb)):
                    m[i][j] = 0.9 * m[i][j] + 0.1 * gg; v[i][j] = 0.999 * v[i][j] + 0.001 * gg * gg
                    L[i][j] -= lr * (m[i][j] / (1 - 0.9 ** t)) / (np.sqrt(v[i][j] / (1 - 0.999 ** t)) + 1e-8)
        if ep == int(epochs * 0.7): lr *= 0.3
        vl, _ = loss_grad(Xn[va], Y[va], train=False)
        print(f'epoch {ep + 1}: train {tl / nb:.4f}  val {vl:.4f}', flush=True)
    # report gate accuracy on validation
    o_ = Xn[va]
    for i, (W, b) in enumerate(L):
        o_ = o_ @ W.T + b
        if i < len(L) - 1: o_ = np.tanh(o_)
    yv = Y[va]
    for name, k in [('throw', THROW), ('blink', BLINK), ('recall', RECALL), ('dash', DASH), ('jump', JUMP), ('skill', SKILL), ('cover', COVER)]:
        pred = o_[:, k] > 0; tru = yv[:, k] > 0.5
        print(f'  {name}: recall {(pred & tru).sum() / max(1, tru.sum()):.2f}  precision {(pred & tru).sum() / max(1, pred.sum()):.2f}  rate pred {pred.mean():.3f} true {tru.mean():.3f}')
    params = pack([(W, b) for W, b in L])
    j = to_json(SIZES, params, mu, std, {'gen': 0, 'stage': 'imitation', 'rows': int(N)})
    json.dump(j, open(os.path.join(BRAINS, out), 'w'))
    print('saved', out, params.size, 'params')

if __name__ == '__main__':
    cmd = sys.argv[1]
    if cmd == 'collect': asyncio.run(collect(int(sys.argv[2]) if len(sys.argv) > 2 else 300))
    elif cmd == 'fit': fit(int(sys.argv[2]) if len(sys.argv) > 2 else 30)
