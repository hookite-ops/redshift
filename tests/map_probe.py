import asyncio, json
from playwright.async_api import async_playwright
JS = r"""
(() => {
  const G = __game.game, col = G.map.col, P = G.player;
  const out = {};
  out.tris = col.count;
  out.cps = G.map.checkpoints.map((c,i) => { const free = col.capsuleFree(c.x, c.y-1, c.z, 0.4, 1.8); const h = col.raycast(c.x, c.y, c.z, 0,-1,0, 60); return i+':'+(free?'free':'BLOCKED')+' gnd'+(h?h.t.toFixed(1):'-'); });
  out.start = col.capsuleFree(G.map.trialStart.pos.x, G.map.trialStart.pos.y, G.map.trialStart.pos.z, 0.4, 1.8);
  const I = (o={}) => o;
  const run = (sec, keys) => __game.sim(sec, keys);
  // spiral slide from the deck exit: spiral end at angle 3.5pi → (0,24,-13.6), descending direction = -tangent = +x
  P.reset(new P.pos.constructor(-1, 24.1, -13.6), Math.PI/2); // yaw pi/2 → fwd -x (down the spiral)
  run(0.3, ['KeyW']); run(0.05, ['KeyW','KeyC']);
  let maxS = 0, t = 0; for (; t < 9; t += 1/120) { __game.sim(1/120, ['KeyW','KeyC']); maxS = Math.max(maxS, P.hSpeed); 
    // steer along the spiral: aim tangent (decreasing angle)
    const a = Math.atan2(P.pos.z, P.pos.x); const tx = Math.sin(a), tz = -Math.cos(a); P.yaw = Math.atan2(-tx, -tz);
    if (P.pos.y < 0.3 && t > 1) break; }
  out.spiral = { t: t.toFixed(2), maxKmh: (maxS*3.6).toFixed(0), endKmh: (P.hSpeed*3.6).toFixed(0), y: P.pos.y.toFixed(2), state: P.state };
  // loop: start at on-ramp a=0 bottom (55,0,-34) facing +z, run up
  P.reset(new P.pos.constructor(55, 0.05, -40), Math.PI); run(3, ['KeyW']);
  out.loopRamp = { y: P.pos.y.toFixed(2), z: P.pos.z.toFixed(1), kmh: (P.hSpeed*3.6).toFixed(0), g: P.grounded };
  // keep running along the ring: steer tangentially CCW
  for (let k = 0; k < 600; k++) { const a = Math.atan2(P.pos.z, P.pos.x); P.yaw = Math.atan2(Math.sin(a), Math.cos(a)) ; const tx=-Math.sin(a), tz=Math.cos(a); P.yaw = Math.atan2(-tx,-tz); __game.sim(1/120, ['KeyW']); }
  out.loopRun = { r: Math.hypot(P.pos.x, P.pos.z).toFixed(1), y: P.pos.y.toFixed(2), kmh: (P.hSpeed*3.6).toFixed(0) };
  // quarter pipe at (26,114) facing +z: approach from z=80 at speed
  P.reset(new P.pos.constructor(26, 0.05, 70), Math.PI); P.vel.set(0,0,24); let maxY = 0;
  for (let k = 0; k < 360; k++) { __game.sim(1/120, ['KeyW']); maxY = Math.max(maxY, P.pos.y); }
  out.qpipe = { maxY: maxY.toFixed(2), z: P.pos.z.toFixed(1), vz: P.vel.z.toFixed(1) };
  // wallrun corridor slab (0,34): kicker at x=-17..-10, z=34, facing +x
  P.reset(new P.pos.constructor(-26, 0.05, 33), -Math.PI/2 - 0.12); let wr = 0, maxH=0;
  for (let k = 0; k < 400; k++) { const keys = ['KeyW']; if (k===110) __game.press('Space'); __game.sim(1/120, keys); if (P.state==='wall') wr++; maxH=Math.max(maxH,P.pos.y); }
  out.corridor = { wallTicks: wr, x: P.pos.x.toFixed(1), maxH: maxH.toFixed(2), kmh: (P.hSpeed*3.6).toFixed(0) };
  return JSON.stringify(out, null, 1);
})()
"""
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=["--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader"])
        pg = await b.new_page(viewport={"width":480,"height":270})
        errs=[]
        pg.on("pageerror", lambda e: errs.append("PAGEERROR: "+str(e)))
        await pg.add_init_script("localStorage.setItem('redshift3_settings', JSON.stringify({quality:'low', full:0}))")
        await pg.goto("http://localhost:8766/index.html", timeout=120000)
        await pg.wait_for_timeout(2000)
        await pg.evaluate("window.__game.start('training'); window.__game.input.locked = true")
        print(await pg.evaluate(JS))
        print("\n".join(errs))
        await b.close()
asyncio.run(main())
