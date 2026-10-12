import asyncio, sys
from playwright.async_api import async_playwright
JS = sys.argv[1]
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=["--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader"])
        pg = await b.new_page(viewport={"width":320,"height":180})
        errs=[]
        pg.on("pageerror", lambda e: errs.append("PAGEERROR: "+str(e)))
        await pg.add_init_script("localStorage.setItem('redshift3_settings', JSON.stringify({quality:'low', full:0}))")
        await pg.goto("http://localhost:8766/index.html", timeout=120000)
        await pg.wait_for_timeout(1500)
        await pg.evaluate("window.__game.start('training'); window.__game.input.locked = true; window.G=__game.game; window.P=G.player; window.col=G.map.col; window.V=(x,y,z)=>new P.pos.constructor(x,y,z);")
        print(await pg.evaluate(open(JS).read()))
        print("\n".join(errs))
        await b.close()
asyncio.run(main())
