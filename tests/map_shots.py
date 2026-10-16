# One overview + one in-game screenshot per map.  usage: python3 tests/map_shots.py [quality] [maps...]
import asyncio, sys
from playwright.async_api import async_playwright
Q = sys.argv[1] if len(sys.argv) > 1 else 'medium'
MAPS = sys.argv[2:] or ['arena', 'spire', 'lanes', 'forest', 'orbit']
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"])
        pg = await b.new_page(viewport={"width": 1280, "height": 720})
        errs = []
        pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.add_init_script("localStorage.setItem('redshift4_settings', JSON.stringify({quality:'" + Q + "', gfx:2, full:0, adaptive:0, botSkill:'easy'}))")
        await pg.goto("http://localhost:8766/index.html", timeout=120000); await pg.wait_for_timeout(2500)
        for m in MAPS:
            await pg.evaluate("""(m) => { const G = __game, g = G.game; G.S.map = m; G.start('ffa'); G.input.locked = true;
              for (const f of g.fighters) if (f.brain) f.brain.tick = () => f.brain.inp;
              document.querySelectorAll('.screen').forEach(e => e.classList.add('hidden')); document.getElementById('hud').classList.add('hidden');
              g.state = 'menu'; g.clockT = 4; }""", m)
            await pg.wait_for_timeout(1200)
            await pg.screenshot(path=f"tests/shots/map_{m}_over.png", timeout=120000)
            await pg.evaluate("""() => { const g = __game.game; g.state = 'play'; document.getElementById('hud').classList.remove('hidden');
              const P = g.player, s = g.arena.spawnGround[3] || g.arena.spawnGround[0]; P.pos.copy(s); P.prevPos.copy(s); P.vel.set(0,0,0);
              P.yaw = Math.atan2(s.x, s.z); P.pitch = 0.05; }""")
            await pg.wait_for_timeout(1200)
            await pg.screenshot(path=f"tests/shots/map_{m}_fp.png", timeout=120000)
            print(m, 'ok', flush=True)
        print(errs[:5] or 'no errors')
        await b.close()
asyncio.run(main())
