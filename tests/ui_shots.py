import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=["--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader"])
        pg = await b.new_page(viewport={"width":1100,"height":620})
        errs=[]
        pg.on("pageerror", lambda e: errs.append("PAGEERROR: "+str(e)))
        await pg.add_init_script("localStorage.setItem('redshift2_settings', JSON.stringify({quality:'medium', full:0}))")
        await pg.goto("http://localhost:8766/index.html", timeout=180000)
        await pg.wait_for_timeout(2500)
        await pg.evaluate("__game.start('trial'); __game.input.locked = true; __game.sim(0.5, ['KeyW'])")
        await pg.wait_for_timeout(1500)
        await pg.evaluate("__game.game.state='paused'")
        await pg.wait_for_timeout(1200)
        await pg.screenshot(path="tests/shots/ui_trial.png", timeout=180000)
        await pg.evaluate("__game.game.state='play'; __game.start('training'); __game.input.locked = true; __game.game.player.yaw = Math.PI; __game.sim(0.3, [])")
        await pg.wait_for_timeout(1500)
        await pg.evaluate("__game.game.state='paused'")
        await pg.wait_for_timeout(1200)
        await pg.screenshot(path="tests/shots/ui_training.png", timeout=180000)
        await pg.evaluate("document.querySelector('[data-act=quit]').click()")
        await pg.wait_for_timeout(800)
        await pg.evaluate("document.querySelector('#menu [data-act=settings]').click()")
        await pg.wait_for_timeout(800)
        await pg.screenshot(path="tests/shots/ui_settings.png", timeout=180000)
        print("\n".join(errs))
        await b.close()
asyncio.run(main())
