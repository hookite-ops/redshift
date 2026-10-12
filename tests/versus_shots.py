# Screenshots + flow checks for 1V1 / FFA: menu, live duel, FFA board/feed, death cam, result screen.
import asyncio, json
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=["--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"])
        pg = await b.new_page(viewport={"width":1280,"height":720})
        errs=[]
        pg.on("pageerror", lambda e: errs.append("PAGEERROR: "+str(e)))
        pg.on("console", lambda m: errs.append(m.type+": "+m.text) if m.type=='error' else None)
        await pg.add_init_script("localStorage.setItem('redshift4_settings', JSON.stringify({quality:'low', full:0, fps:1}))")
        await pg.goto("http://localhost:8766/index.html")
        await pg.wait_for_timeout(2000)
        await pg.screenshot(path="tests/shots/v31_menu.png", timeout=120000); print("menu shot", flush=True)
        # duel via the menu button
        await pg.click("[data-act=duel]")
        await pg.wait_for_timeout(300)
        await pg.evaluate("__game.input.locked = true; __game.game.autopilot('hard')")
        await pg.evaluate("__game.sim(4, [])")
        # look at the bot
        await pg.evaluate("""(()=>{const g=__game.game,P=g.player,o=g.fighters[1]; const e=P.eye; const dx=o.body.pos.x-e.x, dy=o.body.pos.y+1-e.y, dz=o.body.pos.z-e.z, d=Math.hypot(dx,dy,dz); g.autopilot(null); P.yaw=Math.atan2(-dx,-dz); P.pitch=Math.asin(dy/d);})()""")
        await pg.evaluate("""(()=>{const g=__game.game,P=g.player,o=g.fighters[1]; if(!g.me.alive) g.respawn(g.me); const f=P.flatFwd(new P.pos.constructor()); o.body.pos.set(P.pos.x+f.x*5, P.pos.y, P.pos.z+f.z*5); o.body.prevPos.copy(o.body.pos); o.alive=true; o.protT=0; P.pitch=-0.05;})()""")
        print("placed", flush=True)
        await pg.wait_for_timeout(150)
        print("fps", await pg.evaluate("document.getElementById('fps').textContent"), flush=True)
        await pg.screenshot(path="tests/shots/v31_duel.png", timeout=120000)
        print("duel", await pg.evaluate("JSON.stringify(__game.game.fighters.map(f=>[f.name,f.kills,f.deaths,Math.round(f.hp),f.alive]))"))
        # get killed → death cam
        await pg.evaluate("const g=__game.game; g.me.protT=0; g.player.dashT=0; g.damageFighter(g.me, 999, g.fighters[1], 'bank', new g.player.pos.constructor(1,0,0), 2)")
        await pg.wait_for_timeout(900)
        await pg.screenshot(path="tests/shots/v31_deathcam.png", timeout=120000)
        print("dead", await pg.evaluate("JSON.stringify({alive:__game.game.me.alive, respawnT:__game.game.me.respawnT.toFixed(2), show:document.getElementById('deathMsg').className, by:document.getElementById('deathBy').textContent})"))
        await pg.evaluate("__game.sim(3, [])")
        print("respawned", await pg.evaluate("JSON.stringify({alive:__game.game.me.alive, prot:__game.game.me.protT.toFixed(2)})"))
        # FFA
        await pg.evaluate("__game.game.state='menu'")
        await pg.evaluate("__game.start('ffa'); __game.input.locked = true; __game.game.autopilot('max')")
        await pg.evaluate("__game.sim(25, [])")
        await pg.wait_for_timeout(4000)   # let fx settle in real time
        await pg.evaluate("__game.game.autopilot(null)")
        await pg.screenshot(path="tests/shots/v31_ffa.png", timeout=120000)
        print("ffa", await pg.evaluate("JSON.stringify(__game.game.ranking().map(f=>[f.name,f.kills,f.deaths]))"))
        # end the match → result screen
        await pg.evaluate("const g=__game.game; g.me.kills = 14; g.me.protT=0; const v=g.fighters.find(f=>f!==g.me&&f.alive); v.protT=0; v.invulnT=-1; v.body.dashT=0; v.body.burstT=0; g.damageFighter(v, 999, g.me, 'slam', new g.player.pos.constructor(1,0,0), 0)")
        await pg.wait_for_timeout(2600)
        await pg.screenshot(path="tests/shots/v31_result.png", timeout=120000)
        print("result", await pg.evaluate("JSON.stringify({st:__game.game.state, title:document.getElementById('endTitle').textContent, shown:!document.getElementById('death').classList.contains('hidden')})"))
        print("\n".join(errs[:20]))
        await b.close()
asyncio.run(main())
