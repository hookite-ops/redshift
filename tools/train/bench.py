# 실력 측정: python3 tools/train/bench.py brains/best.json [n] [opp]   (A=bot:max 로 주면 규칙 봇끼리 기준선)
import asyncio, sys, os, json
sys.path.insert(0, os.path.dirname(__file__))
from common import *
from train import summarize, EVAL_JS
async def main(spec, n, opp, base):
    serve_public()
    a = {'type': 'bot', 'skill': spec.split(':')[1]} if spec.startswith('bot:') else {'type': 'neuro', 'policy': json.load(open(spec))}
    b = {'type': 'bot', 'skill': opp.split(':')[1]} if opp.startswith('bot:') else {'type': 'neuro', 'policy': json.load(open(opp))}
    async with Workers(2) as W:
        jobs = [{'a': a, 'b': b, 'seed': s, 'secs': 40, 'ffa': os.environ.get('FFA') == '1'} for s in range(base, base + n)]
        res = await W.map(EVAL_JS, jobs, chunk=4)
        print(json.dumps(summarize(res)))
        if '-v' in sys.argv:
            for r in res: print(r)
if __name__ == '__main__':
    asyncio.run(main(sys.argv[1], int(sys.argv[2]) if len(sys.argv) > 2 else 40, sys.argv[3] if len(sys.argv) > 3 else 'bot:max', int(os.environ.get('BASE', '555000'))))
