import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=["--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader"])
        pg = await b.new_page(viewport={"width":640,"height":360})
        errs=[]
        pg.on("console", lambda m: errs.append(m.type+": "+m.text) if m.type in ('error',) else None)
        pg.on("pageerror", lambda e: errs.append("PAGEERROR: "+str(e)))
        await pg.add_init_script("localStorage.setItem('redshift2_settings', JSON.stringify({quality:'low', full:0, fps:1}))")
        await pg.goto("http://localhost:8766/index.html", timeout=120000)
        await pg.wait_for_timeout(1500)
        # click the real menu button (no pointer lock in headless → simulate lock flag)
        await pg.click("#menu [data-act=arena]")
        await pg.evaluate("__game.input.locked = true")
        await pg.keyboard.down("KeyW")
        for i in range(10):
            await pg.mouse.move(320 + i * 5, 180)
            await pg.keyboard.press("Space")
            await pg.keyboard.press("ShiftLeft")
            await pg.mouse.down(); await pg.mouse.up()
            await pg.wait_for_timeout(700)
        await pg.keyboard.up("KeyW")
        st = await pg.evaluate("JSON.stringify({state:__game.game.state, wave:__game.game.wave, spd:__game.game.player.hSpeed.toFixed(1), fps:document.getElementById('fps').textContent})")
        print(st)
        await pg.keyboard.press("Escape")
        await pg.wait_for_timeout(500)
        print('pause visible', await pg.evaluate("!document.getElementById('pause').classList.contains('hidden')"))
        print("\n".join(errs[:20]))
        await b.close()
asyncio.run(main())
