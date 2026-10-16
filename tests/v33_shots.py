# Screenshots: menu with loadout, duel with chat bubble / reflect dome / gravity well, skill HUD.
import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=["--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"])
        pg = await b.new_page(viewport={"width":1280,"height":720})
        pg.on("pageerror", lambda e: print("PAGEERROR", e))
        await pg.add_init_script("localStorage.setItem('redshift4_settings', JSON.stringify({quality:'low', gfx:2, full:0, botSkill:'easy', skill:'gravity', weapon:'heavy'}))")
        await pg.goto("http://localhost:8766/index.html")
        await pg.wait_for_timeout(2000)
        await pg.screenshot(path="tests/shots/v33_menu.png", timeout=120000)
        await pg.evaluate("__game.start('duel'); __game.input.locked = true")
        await pg.evaluate("""(()=>{const g=__game.game,P=g.player,o=g.fighters[1],V=P.pos.constructor; o.brain.tick=()=>o.brain.inp; P.reset(new V(0,0,16),0); o.body.reset(new V(2,0,4),Math.PI); o.protT=0; g.me.protT=0; o.reflectT=5; o.say('반사 실화냐'); g.makeWell(g.me, new V(-4,1,6)); const e=P.eye,c=o.updateCenter(); const dx=c.x-e.x,dy=c.y-e.y,dz=c.z-e.z; P.yaw=Math.atan2(-dx,-dz)-0.15; P.pitch=Math.asin(dy/Math.hypot(dx,dy,dz)); g.me.skillCd=4.2; g.chat(o,'start',99);})()""")
        await pg.wait_for_timeout(500)
        await pg.screenshot(path="tests/shots/v33_duel.png", timeout=120000)
        await b.close()
asyncio.run(main())
