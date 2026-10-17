# 2단계 — 자가대전 진화 학습(ES): 모방으로 배운 두뇌를 수천 판 싸우게 하며 "이기는 쪽" 으로 밀어 간다.
#   python3 tools/train/train.py --start brains/gen0.json --gens 200 --workers 2
# 상대: 최강/어려움 규칙 봇 + 리그(과거의 나 자신). 점수 = (준 피해 − 받은 피해) + 60 × (킬 − 데스)
import asyncio, sys, os, time, json, argparse, random
import numpy as np
sys.path.insert(0, os.path.dirname(__file__))
from common import *

BRAINS = os.path.join(ROOT, 'tools', 'train', 'brains')
EVAL_JS = "js => __ai.evalBatch(js)"

def bench_jobs(pol, seeds, opp='max', secs=40):
    return [{'a': {'type': 'neuro', 'policy': pol}, 'b': {'type': 'bot', 'skill': opp}, 'seed': s, 'secs': secs} for s in seeds]

def summarize(res):
    k = sum(r['k'] for r in res); d = sum(r['d'] for r in res)
    wins = sum(1 for r in res if r['k'] > r['d']); loss = sum(1 for r in res if r['k'] < r['d'])
    return {'fit': float(np.mean([r['fit'] for r in res])), 'kd': round(k / max(1, d), 3), 'win': wins, 'loss': loss, 'n': len(res),
            'dealt': float(np.mean([r['dealt'] for r in res])), 'taken': float(np.mean([r['taken'] for r in res]))}

async def bench(W, pol, n=40, opp='max', base=777000):
    res = await W.map(EVAL_JS, bench_jobs(pol, range(base, base + n), opp), chunk=4)
    out = summarize(res)
    # FFA: me (learned) vs five 최강 bots — 'kd' here is my K/D in the crowd (최강 vs 최강 baseline ≈ 1)
    fj = [dict(j, ffa=True) for j in bench_jobs(pol, range(base + 50000, base + 50000 + n // 2), opp)]
    fr = await W.map(EVAL_JS, fj, chunk=2)
    f = summarize(fr)
    out['ffa'] = {'fit': round(f['fit'], 1), 'kd': f['kd']}
    out['score'] = round(out['fit'] + f['fit'], 1)
    return out

async def main(a):
    serve_public()
    sizes, theta, mu, std, meta = from_json(json.load(open(a.start)))
    theta = theta.astype(np.float32)
    gen0 = int(meta.get('gen', 0))
    n = theta.size
    rs = np.random.RandomState(a.seed)
    m = np.zeros(n, np.float32); v = np.zeros(n, np.float32); t = 0
    league = []      # frozen past selves
    log = open(os.path.join(BRAINS, 'train_log.jsonl'), 'a')
    pol_of = lambda p, g: to_json(sizes, p, mu, std, {'gen': g, 'stage': 'selfplay'})
    async with Workers(a.workers) as W:
        cur = pol_of(theta, gen0)
        b0 = await bench(W, cur, a.bench)
        print('start bench vs max:', b0, flush=True)
        best_fit = b0['score']; best = cur
        log.write(json.dumps({'gen': gen0, 'bench': b0}) + '\n'); log.flush()
        for g in range(gen0 + 1, gen0 + a.gens + 1):
            t0 = time.time()
            half = a.pop // 2
            eps = rs.randn(half, n).astype(np.float32)
            cands = []
            for k in range(half):
                cands.append(theta + a.sigma * eps[k]); cands.append(theta - a.sigma * eps[k])
            # the same matches for every candidate this generation (fair comparison)
            seeds = [rs.randint(1, 2 ** 30) for _ in range(a.k)]
            # match plan (k=6): 1v1 최강 ×2 · 1v1 어려움 · 1v1 과거의 나 · FFA(최강 5명) ×2
            plan = []
            for i in range(a.k):
                r = i % 6
                if r == 3 and league: plan.append(({'type': 'neuro', 'policy': random.Random(seeds[i]).choice(league)}, False))
                elif r == 2: plan.append(({'type': 'bot', 'skill': 'hard'}, False))
                elif r >= 4 and a.ffa: plan.append(({'type': 'bot', 'skill': 'max'}, True))
                else: plan.append(({'type': 'bot', 'skill': 'max'}, False))
            jobs = []
            for c in cands:
                pj = pol_of(c, g)
                for s, (o, ffa) in zip(seeds, plan):
                    jobs.append({'a': {'type': 'neuro', 'policy': pj}, 'b': o, 'seed': int(s), 'secs': a.secs, 'ffa': ffa})
            res = await W.map(EVAL_JS, jobs, chunk=a.k)
            fit = np.array([np.mean([r['fit'] * (a.ffa_w if j['ffa'] else 1) for r, j in zip(res[i * a.k:(i + 1) * a.k], jobs[i * a.k:(i + 1) * a.k])]) for i in range(len(cands))])
            # centered ranks → gradient
            order = fit.argsort(); rank = np.empty(len(fit)); rank[order] = np.arange(len(fit)) / (len(fit) - 1) - 0.5
            wv = rank[0::2] - rank[1::2]
            grad = (wv[:, None] * eps).sum(0) / (len(fit) * a.sigma)
            t += 1
            m = 0.9 * m + 0.1 * grad; v = 0.999 * v + 0.001 * grad * grad
            theta = theta + a.lr * (m / (1 - 0.9 ** t)) / (np.sqrt(v / (1 - 0.999 ** t)) + 1e-8) - a.lr * a.wd * theta
            theta = theta.astype(np.float32)
            line = {'gen': g, 'mean': round(float(fit.mean()), 1), 'best': round(float(fit.max()), 1), 'sec': round(time.time() - t0, 1),
                    'kd': round(sum(r['k'] for r in res) / max(1, sum(r['d'] for r in res)), 3)}
            if g % a.league_every == 0:
                league.append(pol_of(theta, g)); league = league[-8:]
            if g % a.bench_every == 0:
                cur = pol_of(theta, g)
                b = await bench(W, cur, a.bench)
                line['bench'] = b
                json.dump(cur, open(os.path.join(BRAINS, 'latest.json'), 'w'))
                if b['score'] > best_fit:
                    best_fit = b['score']; best = cur
                    json.dump(best, open(os.path.join(BRAINS, 'best.json'), 'w'))
                    line['new_best'] = True
            print(json.dumps(line), flush=True)
            log.write(json.dumps(line) + '\n'); log.flush()

if __name__ == '__main__':
    p = argparse.ArgumentParser()
    p.add_argument('--start', default=os.path.join(BRAINS, 'gen0.json'))
    p.add_argument('--gens', type=int, default=100)
    p.add_argument('--pop', type=int, default=32)
    p.add_argument('--k', type=int, default=4)
    p.add_argument('--secs', type=float, default=30)
    p.add_argument('--sigma', type=float, default=0.02)
    p.add_argument('--lr', type=float, default=0.01)
    p.add_argument('--wd', type=float, default=0.0)
    p.add_argument('--workers', type=int, default=2)
    p.add_argument('--bench', type=int, default=40)
    p.add_argument('--bench_every', type=int, default=5)
    p.add_argument('--league_every', type=int, default=10)
    p.add_argument('--seed', type=int, default=1)
    p.add_argument('--ffa', type=int, default=1)
    p.add_argument('--ffa_w', type=float, default=1.5)
    asyncio.run(main(p.parse_args()))
