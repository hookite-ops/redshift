# FFA 확인: 6명 중 n명은 학습 AI, 나머지는 최강 봇 — 1:1 로만 학습한 두뇌가 난전에서도 통하는지
#   python3 tools/train/bench_ffa.py brains/best.json [판수] [학습AI 수]
import asyncio, sys, os, json
sys.path.insert(0, os.path.dirname(__file__))
from common import *
async def main(path, n, k):
    serve_public()
    pol = json.load(open(path))
    async with Workers(2) as W:
        jobs = [{'policy': pol, 'nNeuro': k, 'seed': 4242 + i, 'secs': 90} for i in range(n)]
        res = await W.map("js => js.map(o => __ai.evalFFA(o))", jobs, chunk=2)
        tot = {'ai': [0, 0, 0], 'max': [0, 0, 0]}
        for r in res:
            for s in ('ai', 'max'):
                tot[s][0] += r[s]['k']; tot[s][1] += r[s]['d']; tot[s][2] += r[s]['n']
        for s, (kk, dd, nn) in tot.items():
            print(f'{s:>4}: 1명당 킬 {kk / nn:.2f} · 데스 {dd / nn:.2f} · K/D {kk / max(1, dd):.2f}')
if __name__ == '__main__':
    asyncio.run(main(sys.argv[1], int(sys.argv[2]) if len(sys.argv) > 2 else 20, int(sys.argv[3]) if len(sys.argv) > 3 else 3))
