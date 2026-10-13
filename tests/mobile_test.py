# Phone emulation (landscape, touch): menu layout, touch HUD, stick moves, drag looks, buttons act.
import asyncio, json
from playwright.async_api import async_playwright
ARGS = ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"]
async def touch(cdp, typ, pts):
    await cdp.send("Input.dispatchTouchEvent", {"type": typ, "touchPoints": [{"x": x, "y": y, "id": i} for (i, x, y) in pts]})
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=ARGS)
        dev = p.devices["Pixel 7"]
        ctx = await b.new_context(**{**dev, "viewport": {"width": 915, "height": 412}, "screen": {"width": 915, "height": 412}})
        pg = await ctx.new_page()
        errs = []
        pg.on("pageerror", lambda e: errs.append("PAGEERROR: " + str(e)))
        await pg.goto("http://localhost:8766/index.html"); await pg.wait_for_timeout(2500)
        print("touch mode:", await pg.evaluate("document.body.classList.contains('touch')"), "quality:", await pg.evaluate("__game.S.quality"))
        await pg.screenshot(path="tests/shots/v40_mobile_menu.png", timeout=120000)
        await pg.tap("[data-act=practice]"); await pg.wait_for_timeout(800)
        cdp = await ctx.new_cdp_session(pg)
        s0 = json.loads(await pg.evaluate("JSON.stringify({p:__game.game.player.pos.toArray(), yaw:__game.game.player.yaw, disc:__game.game.disc.state, ui: !document.getElementById('touch').classList.contains('hidden')})"))
        print("start", s0)
        # left stick: push up (forward) for ~1.5 s
        await touch(cdp, "touchStart", [(1, 150, 300)])
        for k in range(10): await touch(cdp, "touchMove", [(1, 150, 300 - 6 * (k + 1))]); await pg.wait_for_timeout(30)
        await pg.wait_for_timeout(1500)
        await touch(cdp, "touchEnd", [])
        s1 = json.loads(await pg.evaluate("JSON.stringify({p:__game.game.player.pos.toArray(), yaw:__game.game.player.yaw})"))
        print("after stick", s1, "moved", round(((s1['p'][0]-s0['p'][0])**2 + (s1['p'][2]-s0['p'][2])**2) ** 0.5, 1))
        # right side drag: look
        await touch(cdp, "touchStart", [(2, 640, 200)])
        for k in range(8): await touch(cdp, "touchMove", [(2, 640 + 15 * (k + 1), 200)]); await pg.wait_for_timeout(20)
        await touch(cdp, "touchEnd", [])
        await pg.wait_for_timeout(200)
        s2 = json.loads(await pg.evaluate("JSON.stringify({yaw:__game.game.player.yaw})"))
        print("yaw change", round(s2['yaw'] - s1['yaw'], 3))
        # throw button
        box = await pg.eval_on_selector("#touch .throw", "e => { const r = e.getBoundingClientRect(); return [r.x + r.width / 2, r.y + r.height / 2]; }")
        await touch(cdp, "touchStart", [(3, box[0], box[1])]); await pg.wait_for_timeout(120); await touch(cdp, "touchEnd", [])
        await pg.wait_for_timeout(150)
        print("disc after throw button:", await pg.evaluate("__game.game.disc.state"), "label:", await pg.inner_text("#touch .throw"))
        await pg.wait_for_timeout(600)
        await pg.screenshot(path="tests/shots/v40_mobile_play.png", timeout=120000)
        # pause button
        pb = await pg.eval_on_selector("#tPause", "e => { const r = e.getBoundingClientRect(); return [r.x + r.width / 2, r.y + r.height / 2]; }")
        await touch(cdp, "touchStart", [(4, pb[0], pb[1])]); await touch(cdp, "touchEnd", [])
        await pg.wait_for_timeout(300)
        print("paused:", await pg.evaluate("__game.game.state"), "pause menu:", await pg.evaluate("!document.getElementById('pause').classList.contains('hidden')"))
        print("\n".join(errs[:10]))
        await b.close()
asyncio.run(main())
