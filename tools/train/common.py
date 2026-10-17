# MINDFORGE 학습 도구 — 공용: 브라우저(헤드리스) 워커, 정책 직렬화
import asyncio, base64, json, os, subprocess, sys, time, threading, http.server, socketserver, functools
import numpy as np
from playwright.async_api import async_playwright

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
PORT = int(os.environ.get('TRAIN_PORT', '8777'))

def serve_public():
    handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=os.path.join(ROOT, 'public'))
    class Q(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a): pass
    handler = functools.partial(Q, directory=os.path.join(ROOT, 'public'))
    socketserver.TCPServer.allow_reuse_address = True
    httpd = socketserver.ThreadingTCPServer(('127.0.0.1', PORT), handler)
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd

# ---- policy <-> JSON (same layout as src/ai/nn.js) ----
def param_count(sizes):
    return sum(sizes[i] * sizes[i + 1] + sizes[i + 1] for i in range(len(sizes) - 1))

def unpack(sizes, p):
    """flat → [(W[b,a], bias[b]), ...]  (JS: weight of input i into output j at W + j*a + i)"""
    out, o = [], 0
    for l in range(len(sizes) - 1):
        a, b = sizes[l], sizes[l + 1]
        W = p[o:o + a * b].reshape(b, a); o += a * b
        bb = p[o:o + b]; o += b
        out.append((W, bb))
    return out

def pack(layers):
    return np.concatenate([np.concatenate([W.reshape(-1), b]) for W, b in layers]).astype(np.float32)

def to_json(sizes, params, mu, std, meta):
    p = np.asarray(params, dtype=np.float32)
    return {'v': 1, 'sizes': list(sizes), 'p': base64.b64encode(p.tobytes()).decode(),
            'mu': [round(float(x), 5) for x in mu], 'std': [round(float(x), 5) for x in std], 'meta': meta}

def from_json(j):
    p = np.frombuffer(base64.b64decode(j['p']), dtype=np.float32).copy()
    return j['sizes'], p, np.array(j['mu'], np.float32), np.array(j['std'], np.float32), j.get('meta', {})

def forward(sizes, p, mu, std, X):
    x = np.clip((X - mu) / std, -5, 5)
    L = unpack(sizes, p)
    for i, (W, b) in enumerate(L):
        x = x @ W.T + b
        if i < len(L) - 1: x = np.tanh(x)
    return x

# ---- headless browser workers ----
LAUNCH = ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist", "--mute-audio",
          "--disable-renderer-backgrounding", "--disable-background-timer-throttling"]

class Workers:
    def __init__(self, n):
        self.n = n
    async def __aenter__(self):
        self.pw = await async_playwright().start()
        self.browsers, self.pages = [], []
        for i in range(self.n):
            b = await self.pw.chromium.launch(args=LAUNCH)
            pg = await b.new_page(viewport={"width": 320, "height": 200})
            pg.on("pageerror", lambda e: print("PAGEERROR", e, file=sys.stderr))
            await pg.add_init_script("window.__trainHeadless = true")
            await pg.add_init_script("localStorage.setItem('redshift4_settings', JSON.stringify({quality:'low', gfx:2, full:0, sfx:0, music:0}))")
            await pg.goto(f"http://127.0.0.1:{PORT}/index.html", timeout=120000)
            await pg.wait_for_function("window.__ai && window.__game", timeout=120000)
            self.browsers.append(b); self.pages.append(pg)
        return self
    async def __aexit__(self, *a):
        for b in self.browsers: await b.close()
        await self.pw.stop()
    async def map(self, fn_js, jobs, chunk=1):
        """run jobs over all pages (each page takes `chunk` jobs per call). returns results in job order"""
        results = [None] * len(jobs)
        q = asyncio.Queue()
        for i in range(0, len(jobs), chunk): q.put_nowait(list(range(i, min(len(jobs), i + chunk))))
        async def work(pg):
            while not q.empty():
                idx = q.get_nowait()
                out = await pg.evaluate(fn_js, [jobs[i] for i in idx])
                for i, r in zip(idx, out): results[i] = r
        await asyncio.gather(*(work(pg) for pg in self.pages))
        return results

def build():
    subprocess.run(['npm', 'run', 'build'], cwd=ROOT, check=True, capture_output=True)
