# Multiplayer end-to-end: a local server + two separate browser players in one room (+ host bots).
# usage: (PORT=8766 node server/index.js &) ; python3 tests/net_test.py [seconds]
import asyncio, sys, json
from playwright.async_api import async_playwright
SECS = float(sys.argv[1]) if len(sys.argv) > 1 else 30
ARGS = ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"]
STATE = """() => { const g = __game.game; return JSON.stringify({ online: g.online, room: g.roomCode, host: g.isHost, me: g.me.netId, hp: Math.round(g.me.hp),
  fighters: g.fighters.map(f => ({ id: f.netId, n: f.name, remote: !!f.remote, bot: !!f.netBot, k: f.kills, d: f.deaths, hp: Math.round(f.hp), alive: f.alive, st: f.remote ? undefined : { th: f.st.throws, hi: f.st.hits, bl: f.st.blinks }, tgt: f.brain && f.brain.target ? f.brain.target.name : null, intent: f.brain ? f.brain.intent : null, pos: f.body.pos.toArray().map(v => Math.round(v * 10) / 10) })) }); }"""

async def player(b, name, settings):
    ctx = await b.new_context(viewport={"width": 960, "height": 540})
    pg = await ctx.new_page()
    errs = []
    pg.on("pageerror", lambda e: errs.append(name + " PAGEERROR: " + str(e)))
    pg.on("console", lambda m: errs.append(name + " " + m.type + ": " + m.text) if m.type == 'error' else None)
    await pg.add_init_script("localStorage.setItem('redshift4_settings', JSON.stringify(" + json.dumps(settings) + "))")
    await pg.goto("http://localhost:8766/index.html", timeout=120000)
    await pg.wait_for_timeout(1500)
    return pg, errs

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=ARGS)
        A, ea = await player(b, "A", {"quality": "low", "gfx": 2, "full": 0, "name": "ALPHA", "weapon": "disc", "skill": "reflect"})
        B, eb = await player(b, "B", {"quality": "low", "gfx": 2, "full": 0, "name": "BRAVO", "weapon": "rail", "skill": "heal"})
        # A creates a room with 2 bots through the real UI
        await A.click("[data-act=online]")
        await A.wait_for_timeout(1000)
        print("A status:", await A.inner_text("#oStatus"))
        await A.click("#oCreateBtn"); await A.select_option("#oBots", "2"); await A.select_option("#oBotSkill", "normal")
        await A.click("#oCreate")
        await A.wait_for_timeout(1500)
        code = await A.evaluate("__game.game.roomCode")
        print("A in room", code, "host:", await A.evaluate("__game.game.isHost"))
        # B joins by code
        await B.click("[data-act=online]")
        await B.wait_for_timeout(1000)
        await B.fill("#oCode", code); await B.click("#oJoin")
        await B.wait_for_timeout(1500)
        print("B in room", await B.evaluate("__game.game.roomCode"))
        for pg in (A, B): await pg.evaluate("__game.input.locked = true; __game.game.autopilot('hard'); __game.game.render = () => {}")
        await A.wait_for_timeout(int(SECS * 1000))
        sa = json.loads(await A.evaluate(STATE)); sb = json.loads(await B.evaluate(STATE))
        print("A view:", json.dumps(sa, ensure_ascii=False))
        print("B view:", json.dumps(sb, ensure_ascii=False))
        ka = {f['id']: (f['k'], f['d']) for f in sa['fighters']}; kb = {f['id']: (f['k'], f['d']) for f in sb['fighters']}
        print("same roster:", sorted(ka) == sorted(kb), " same scores:", ka == kb)
        a_me = next(f for f in sa['fighters'] if f['id'] == sa['me']); a_in_b = next((f for f in sb['fighters'] if f['id'] == sa['me']), None)
        print("A pos self", a_me['pos'], " A pos seen by B", a_in_b and a_in_b['pos'])
        print("server rooms:", await A.evaluate("fetch('/rooms').then(r => r.text())"))
        # --- reconnect: drop A's socket; it must come back as the same player in the same room
        await A.evaluate("__game.game.net.ws.close()")
        await A.wait_for_timeout(2500)
        print("A after drop: status", await A.evaluate("__game.game.net.status"), "me", await A.evaluate("__game.game.me.netId"), "room", await A.evaluate("__game.game.roomCode"))
        print("server rooms after drop:", await A.evaluate("fetch('/rooms').then(r => r.text())"))
        # --- host hand-off: A leaves, B must take over the bots
        await A.evaluate("__game.game.leaveOnline(); __game.game.state = 'menu'")
        await B.wait_for_timeout(3000)
        sb2 = json.loads(await B.evaluate(STATE))
        print("B after A left: host", sb2['host'], [(f['n'], 'remote' if f['remote'] else 'local', f['pos']) for f in sb2['fighters']])
        await B.wait_for_timeout(2000)
        sb3 = json.loads(await B.evaluate(STATE))
        print("bots moving on B:", [(f['n'], f['pos']) for f in sb3['fighters'] if f['bot']])
        print("\n".join((ea + eb)[:20]))
        await b.close()

asyncio.run(main())
