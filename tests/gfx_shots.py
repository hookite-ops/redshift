# Graphics screenshots at each quality level: menu orbit, in-game view, a bot up close, a thrown disc.
# usage: python3 tests/gfx_shots.py <prefix> [quality ...]
import asyncio, sys
from playwright.async_api import async_playwright
ARGS = ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"]
PRE = sys.argv[1] if len(sys.argv) > 1 else 'gfx'
QS = sys.argv[2:] or ['high']
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=ARGS)
        for q in QS:
            pg = await b.new_page(viewport={"width": 1280, "height": 720})
            errs = []
            pg.on("pageerror", lambda e: errs.append(str(e)))
            pg.on("console", lambda m: errs.append(m.text) if m.type == 'error' else None)
            await pg.add_init_script("localStorage.setItem('redshift4_settings', JSON.stringify({quality:'" + q + "', full:0, botSkill:'easy'}))")
            await pg.goto("http://localhost:8766/index.html", timeout=120000); await pg.wait_for_timeout(3000)
            await pg.screenshot(path=f"tests/shots/{PRE}_{q}_menu.png", timeout=120000)
            await pg.evaluate("document.querySelector('[data-act=duel]').click()"); await pg.wait_for_timeout(500)
            # stand near the centre looking at the stage, freeze the bot in view
            await pg.evaluate("""() => { const g = __game.game; __game.input.locked = true; g.state = 'play';
              const P = g.player; P.pos.set(-14, 0, 22); P.prevPos.copy(P.pos); P.vel.set(0,0,0); P.yaw = -0.45; P.pitch = -0.05;
              const bot = g.fighters[1]; if (bot) { bot.body.pos.set(-8, 0, 12); bot.body.prevPos.copy(bot.body.pos); bot.brain.tick = () => bot.brain.inp; } }""")
            await pg.wait_for_timeout(1500)
            await pg.screenshot(path=f"tests/shots/{PRE}_{q}_play.png", timeout=120000)
            await pg.evaluate("() => { const g = __game.game; g.throwFor(g.me, g.player.lookDir(new g.camera.position.constructor())); }")
            await pg.wait_for_timeout(250)
            await pg.screenshot(path=f"tests/shots/{PRE}_{q}_throw.png", timeout=120000)
            # bot close-up: put it 4 m in front of the camera, facing us
            await pg.evaluate("""() => { const g = __game.game; const bot = g.fighters[1]; if (!bot) return; const P = g.player;
              P.pos.set(0, 0, 30); P.prevPos.copy(P.pos); P.yaw = 0; P.pitch = 0.05;
              bot.body.pos.set(0.6, 0, 26); bot.body.prevPos.copy(bot.body.pos); bot.body.vel.set(0,0,0); bot.body.yaw = Math.PI; }""")
            await pg.wait_for_timeout(400)
            await pg.screenshot(path=f"tests/shots/{PRE}_{q}_bot.png", timeout=120000)
            # flat-out speed: lens streaks + speed lines
            await pg.evaluate("""() => { const g = __game.game; const P = g.player; P.pos.set(0, 0, 40); P.prevPos.copy(P.pos); P.yaw = 0; P.pitch = 0; P.vel.set(0, 0, -48); }""")
            await pg.wait_for_timeout(300)
            await pg.screenshot(path=f"tests/shots/{PRE}_{q}_speed.png", timeout=120000)
            print(q, "fps-ish", await pg.evaluate("__game.game.fpsShown || 0"), "errors:", errs[:5])
            await pg.close()
        await b.close()
asyncio.run(main())
