# Edge cases: blink after a wall bounce, recall-from-behind kill, death screen, menu buttons, hard bot.
import asyncio, sys, json
from playwright.async_api import async_playwright

AIM = """(target) => { const g = __game.game, P = g.player, e = P.eye;
  const dx = target[0]-e.x, dy = target[1]-e.y, dz = target[2]-e.z, d = Math.hypot(dx,dy,dz);
  P.yaw = Math.atan2(-dx, -dz); P.pitch = Math.asin(dy/d); }"""

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"])
        pg = await b.new_page(viewport={"width": 1280, "height": 720})
        errs = []
        pg.on("console", lambda m: errs.append(m.type + ": " + m.text) if m.type in ('error', 'warning') else None)
        pg.on("pageerror", lambda e: errs.append("PAGEERROR: " + str(e)))
        await pg.add_init_script("localStorage.setItem('redshift4_settings', JSON.stringify({quality:'low', fps:1, full:0, difficulty:'hard'}))")
        await pg.goto("http://localhost:8766/index.html", timeout=120000)
        await pg.wait_for_timeout(2000)
        # menu button → practice
        await pg.click("[data-act=practice]")
        await pg.wait_for_timeout(300)
        print("after click", await pg.evaluate("JSON.stringify({st:__game.game.state, mode:__game.game.mode, menuHidden:document.getElementById('menu').classList.contains('hidden')})"))
        await pg.evaluate("__game.input.locked = true")

        # 1) blink right after a close-range pillar bounce: stand 4m from pillar (17,_,17) face, throw at it
        await pg.evaluate("const P=__game.game.player; P.reset(new P.pos.constructor(17, 0, 23), 0);")
        await pg.evaluate("__game.sim(0.3, [])")
        await pg.evaluate(f"({AIM})([17, 1.5, 18])")
        await pg.evaluate("__game.press('Mouse0')")
        await pg.evaluate("__game.sim(0.1, [])")
        r = await pg.evaluate("JSON.stringify({b:__game.game.disc.bounces, st:__game.game.disc.state, d:__game.game.disc.pos.toArray().map(v=>+v.toFixed(2))})")
        print("pillar bounce", r)
        await pg.evaluate("__game.press('Mouse2')")
        await pg.evaluate("__game.sim(1/120, [])")
        print("blink after bounce", await pg.evaluate("JSON.stringify({pos:__game.game.player.pos.toArray().map(v=>+v.toFixed(2)), disc:__game.game.disc.state, free: __game.game.arena.col.capsuleFree(__game.game.player.pos.x, __game.game.player.pos.y, __game.game.player.pos.z, 0.38, 1.8)})"))
        await pg.evaluate("__game.sim(1.0, [])")

        # 2) hidden turret behind the far wall (0,_,-34): lob the disc over the wall, blink, throw down at it
        await pg.evaluate("const P=__game.game.player; P.reset(new P.pos.constructor(0, 0, -20), 0);")
        await pg.evaluate("__game.sim(1.5, [])")
        hp0 = await pg.evaluate("(__game.game.foes.find(f=>Math.abs(f.pos.z+34)<1)||{hp:-1}).hp")
        await pg.evaluate(f"({AIM})([0, 6, -32])")
        await pg.evaluate("__game.press('Mouse0')")
        await pg.evaluate("__game.sim(0.22, [])")
        await pg.evaluate("__game.press('Mouse2')")
        await pg.evaluate("__game.sim(0.05, [])")
        print("  over-wall blink at", await pg.evaluate("__game.game.player.pos.toArray().map(v=>+v.toFixed(1))"))
        await pg.evaluate(f"({AIM})([0, 1.2, -34])")
        await pg.evaluate("__game.press('Mouse0')")
        await pg.evaluate("__game.sim(0.4, [])")
        hp1 = await pg.evaluate("(__game.game.foes.find(f=>Math.abs(f.pos.z+34)<1)||{hp:-1}).hp")
        print("hidden turret hp", hp0, "->", hp1, "kills", await pg.evaluate("__game.game.kills"))
        await pg.evaluate("__game.sim(2.5, [])")

        # 3) slam: throw at the stage turret from close, blink next to it
        await pg.evaluate("const P=__game.game.player; P.reset(new P.pos.constructor(0, 0, 12), 0);")
        await pg.evaluate("__game.sim(2.5, [])")
        await pg.evaluate(f"({AIM})([0, 1.6, 0])")
        await pg.evaluate("__game.press('Mouse0')")
        await pg.evaluate("__game.sim(0.2, [])")
        await pg.evaluate("__game.press('Mouse2')")
        await pg.evaluate("__game.sim(0.02, [])")
        print("slam", await pg.evaluate("JSON.stringify({slams:__game.game.stats.slams, kills:__game.game.kills, tut:[...__game.game.tut]})"))

        # 4) arena, die → death screen
        await pg.evaluate("__game.start('arena'); __game.input.locked = true")
        await pg.evaluate("__game.sim(1, [])")
        await pg.evaluate("__game.game.hurt(500, __game.game.player.pos.clone())")
        await pg.wait_for_timeout(1500)
        print("death", await pg.evaluate("JSON.stringify({st:__game.game.state, deathShown:!document.getElementById('death').classList.contains('hidden'), title:document.getElementById('endTitle').textContent})"))
        await pg.screenshot(path="tests/shots/v3_death.png")
        await pg.click("#death [data-act=restart]")
        await pg.wait_for_timeout(300)
        print("restart", await pg.evaluate("JSON.stringify({st:__game.game.state, hp:__game.game.hp, foes:__game.game.foes.length})"))
        await pg.evaluate("document.exitPointerLock(); __game.game.state='paused'; document.getElementById('pause').classList.remove('hidden')")
        await pg.wait_for_timeout(200)
        await pg.click("#pause [data-act=quit]")
        await pg.wait_for_timeout(300)
        print("quit", await pg.evaluate("JSON.stringify({st:__game.game.state, menu:!document.getElementById('menu').classList.contains('hidden'), foes:__game.game.foes.length})"))
        await pg.click("#menu [data-act=controls]")
        await pg.wait_for_timeout(200)
        await pg.screenshot(path="tests/shots/v3_controls.png")
        await pg.click("#controls [data-act=back]")
        await pg.click("#menu [data-act=settings]")
        await pg.wait_for_timeout(200)
        await pg.screenshot(path="tests/shots/v3_settings.png")
        print("\n".join(errs[:30]))
        await b.close()
asyncio.run(main())
