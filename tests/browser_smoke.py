import asyncio, sys, json
from playwright.async_api import async_playwright
Q = sys.argv[1] if len(sys.argv) > 1 else 'low'
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=["--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"])
        pg = await b.new_page(viewport={"width":960,"height":540})
        errs=[]
        pg.on("console", lambda m: errs.append(m.type+": "+m.text) if m.type in ('error','warning') else None)
        pg.on("pageerror", lambda e: errs.append("PAGEERROR: "+str(e)))
        await pg.add_init_script(f"localStorage.setItem('redshift2_settings', JSON.stringify({{quality:'{Q}', fps:1, full:0}}))")
        await pg.goto("http://localhost:8766/index.html", timeout=120000)
        await pg.wait_for_timeout(3000)
        await pg.screenshot(path="tests/shots/menu.png", timeout=120000)
        print("menu ok", flush=True)
        await pg.evaluate("window.__game.start('arena'); window.__game.input.locked = true")
        await pg.evaluate("window.__game.sim(4, [])")
        print(await pg.evaluate("JSON.stringify({st:__game.game.state, wave:__game.game.wave, en:__game.game.enemies.map(e=>e.type), hp:__game.game.hp})"), flush=True)
        await pg.screenshot(path="tests/shots/arena.png", timeout=120000)
        print("\n".join(errs[:30]))
        await b.close()
asyncio.run(main())
