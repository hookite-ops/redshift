# Cross-platform multiplayer: the APK's files (served from another origin, as the Android WebView does),
# the EXE's built-in server, and the normal web page all meet in one room on the same game server.
# The GitHub "server.txt" lookup is answered locally with the test server's address.
# usage: PORT=8766 node server/index.js & ; (cd android/build/assets/www && python3 -m http.server 8771) & ;
#        go run ./desktop (serves :47613) & ; python3 tests/app_test.py
import asyncio, json
from playwright.async_api import async_playwright
ARGS = ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"]
SERVER = "http://localhost:8766"

async def discovery(route):
    await route.fulfill(status=200, body="# test\n" + SERVER + "\n", headers={"access-control-allow-origin": "*", "content-type": "text/plain"})

async def open_client(b, p, name, url, phone):
    opts = {**p.devices["Pixel 7"], "viewport": {"width": 915, "height": 412}, "screen": {"width": 915, "height": 412}} if phone else {"viewport": {"width": 1100, "height": 620}}
    ctx = await b.new_context(**opts)
    await ctx.route("https://raw.githubusercontent.com/**", discovery)
    pg = await ctx.new_page()
    errs = []
    pg.on("pageerror", lambda e: errs.append(name + " PAGEERROR: " + str(e)))
    pg.on("console", lambda m: errs.append(name + " console." + m.type + ": " + m.text) if m.type == "error" else None)
    await pg.add_init_script("localStorage.setItem('redshift4_settings', JSON.stringify({quality:'low', gfx:2, full:0, name:'" + name + "'}))")
    await pg.goto(url, timeout=120000); await pg.wait_for_timeout(2000)
    return pg, errs

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=ARGS)
        apk, e1 = await open_client(b, p, "APK", "http://127.0.0.1:8771/index.html", True)
        exe, e2 = await open_client(b, p, "EXE", "http://127.0.0.1:47613/index.html", False)
        web, e3 = await open_client(b, p, "WEB", SERVER + "/index.html", False)
        for n, pg in (("APK", apk), ("EXE", exe), ("WEB", web)):
            print(n, "app:", await pg.evaluate("window.REDSHIFT_APP || 'web'"), "touch:", await pg.evaluate("document.body.classList.contains('touch')"))
        # APK: back button at the main menu must say "not handled" (so Android leaves the app)
        print("APK back at menu ->", await apk.evaluate("REDSHIFT_BACK()"))
        # APK opens online: the address must come from server.txt (no typing)
        await apk.tap("[data-act=online]"); await apk.wait_for_timeout(2500)
        print("APK server field:", await apk.input_value("#oServer"), "| status:", await apk.inner_text("#oStatus"))
        await apk.tap("#oCreateBtn"); await apk.select_option("#oBots", "1"); await apk.select_option("#oBotSkill", "easy")
        await apk.tap("#oCreate"); await apk.wait_for_timeout(2000)
        code = await apk.evaluate("__game.game.roomCode")
        print("APK made room", code, "host", await apk.evaluate("__game.game.isHost"))
        # EXE and WEB join by code
        for n, pg in (("EXE", exe), ("WEB", web)):
            await pg.click("[data-act=online]"); await pg.wait_for_timeout(2500)
            print(n, "server field:", await pg.input_value("#oServer"), "| status:", await pg.inner_text("#oStatus"))
            await pg.fill("#oCode", code); await pg.click("#oJoin"); await pg.wait_for_timeout(2000)
            print(n, "room:", await pg.evaluate("__game.game.roomCode"))
        for pg in (apk, exe, web): await pg.evaluate("__game.input.locked = true; __game.game.autopilot('normal'); __game.game.render = () => {}")
        await apk.wait_for_timeout(15000)
        Q = "JSON.stringify(__game.game.fighters.map(f => [f.name, f.remote ? 'remote' : 'local', f.kills, f.deaths]))"
        for n, pg in (("APK", apk), ("EXE", exe), ("WEB", web)): print(n, "sees:", await pg.evaluate(Q))
        # APK back button while playing = pause menu (handled), again = resume
        print("APK back in game ->", await apk.evaluate("REDSHIFT_BACK()"), "menuOpen:", await apk.evaluate("__game.game.menuOpen"))
        print("APK back again ->", await apk.evaluate("REDSHIFT_BACK()"), "menuOpen:", await apk.evaluate("__game.game.menuOpen"))
        print("server rooms:", await web.evaluate("fetch('/rooms').then(r => r.text())"))
        print("\n".join((e1 + e2 + e3)[:20]) or "no page errors")
        await b.close()

asyncio.run(main())
