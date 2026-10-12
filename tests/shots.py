import asyncio, sys, json
from playwright.async_api import async_playwright
Q = sys.argv[1] if len(sys.argv) > 1 else 'high'
views = json.loads(sys.argv[2]) if len(sys.argv) > 2 else []
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=["--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader"])
        pg = await b.new_page(viewport={"width":int(sys.argv[3]) if len(sys.argv)>3 else 1280,"height":int(int(sys.argv[3])*9/16) if len(sys.argv)>3 else 720})
        errs=[]
        pg.on("pageerror", lambda e: errs.append("PAGEERROR: "+str(e)))
        await pg.add_init_script(f"localStorage.setItem('redshift2_settings', JSON.stringify({{quality:'{Q}', full:0}}))")
        await pg.goto("http://localhost:8766/index.html", timeout=180000)
        await pg.wait_for_timeout(2500)
        mode = 'arena'
        await pg.evaluate(f"window.__game.start('{mode}'); window.__game.input.locked = true; window.G=__game.game;")
        for i, v in enumerate(views):
            name, x, y, z, yaw, pitch, pre = v
            await pg.evaluate(f"""(()=>{{ G.state='play'; {pre}; const P=G.player; P.reset(new P.pos.constructor({x},{y},{z}), {yaw}); P.pitch={pitch}; G.state='paused'; document.getElementById('pause').classList.add('hidden'); }})()""")
            await pg.wait_for_timeout(2500)
            await pg.screenshot(path=f"tests/shots/{name}.png", timeout=180000)
            print('shot', name, flush=True)
        print("\n".join(errs))
        await b.close()
asyncio.run(main())
