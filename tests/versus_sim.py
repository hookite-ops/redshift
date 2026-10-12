# Bot-vs-bot measurements: drive the human slot with a bot brain and play real matches headlessly.
# usage: python3 tests/versus_sim.py
import asyncio, sys, json, time
from playwright.async_api import async_playwright

RUN = """async ([mode, botSkill, meSkill, secs]) => {
  const G = __game, g = G.game;
  G.S.botSkill = botSkill;
  G.start(mode); G.input.locked = true;
  g.autopilot(meSkill);
  const t0 = performance.now(); let ticks = 0;
  const dt = 1/120;
  for (let t = 0; t < secs && g.state === 'play' && !g.match.over; t += dt) { g.tick(dt); ticks++; }
  const ms = (performance.now() - t0) / ticks;
  const res = g.fighters.map(f => ({ n: f.name, k: f.kills, d: f.deaths, ...f.st }));
  return { mode, botSkill, meSkill, simSec: +(ticks*dt).toFixed(1), msPerTick: +ms.toFixed(3), over: g.match.over, res, throws: g.stats.throws, hits: g.stats.hits };
}"""

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"])
        pg = await b.new_page(viewport={"width": 960, "height": 540})
        errs = []
        pg.on("pageerror", lambda e: errs.append("PAGEERROR: " + str(e)))
        pg.on("console", lambda m: errs.append(m.type + ": " + m.text) if m.type == 'error' else None)
        await pg.add_init_script("localStorage.setItem('redshift4_settings', JSON.stringify({quality:'low', full:0}))")
        await pg.goto("http://localhost:8766/index.html", timeout=120000)
        await pg.wait_for_timeout(1500)
        plan = [a.split(':') for a in sys.argv[1:]] or [['duel','max','hard','120'],['duel','hard','max','120'],['duel','max','max','120'],['duel','hard','normal','120'],['duel','normal','easy','120'],['ffa','max','max','60']]
        for mode, bs, ms, secs in plan:
            r = await pg.evaluate(RUN, [mode, bs, ms, float(secs)])
            print(json.dumps(r, ensure_ascii=False), flush=True)
        print("\n".join(errs[:20]))
        await b.close()
asyncio.run(main())
