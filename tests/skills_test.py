# Functional checks for the 4 weapons and 4 skills (human side) + reflect vs a bot.
import asyncio, json
from playwright.async_api import async_playwright
WEAPON = """async (wp) => {
  const G = __game, g = G.game; G.S.weapon = wp; G.S.aimAssist = 'off';
  G.start('practice'); G.input.locked = true; g.sim ? 0 : 0;
  const P = g.player, V = P.pos.constructor; P.reset(new V(0, 0, 12), 0);
  for (let i = 0; i < 60; i++) g.tick(1/120);
  const t = g.foes.find(f => Math.abs(f.pos.x) < 0.5 && Math.abs(f.pos.z) < 0.5);
  const e = P.eye, c = t.center; const dx = c.x-e.x, dy = c.y-e.y, dz = c.z-e.z, d = Math.hypot(dx,dy,dz);
  P.yaw = Math.atan2(-dx,-dz); P.pitch = Math.asin(dy/d);
  const log = []; const orig = g.hitFoe.bind(g); g.hitFoe = (f, dmg, dir, kind, b) => { log.push([kind, Math.round(dmg)]); return orig(f, dmg, dir, kind, b); };
  G.press('Mouse0'); let maxT = 0;
  for (let i = 0; i < 240; i++) { g.tick(1/120); if (g.disc.state !== 'hand') maxT = g.disc.t; }
  return { wp, w: g.disc.w.name, speed: g.disc.w.speed, log, flight: +maxT.toFixed(2), back: g.disc.state };
}"""
SKILLS = """async () => {
  const G = __game, g = G.game, out = {};
  G.S.botSkill = 'easy'; G.S.weapon = 'disc';
  // --- heal
  G.S.skill = 'heal'; G.start('duel'); G.input.locked = true;
  g.me.hp = 40; G.press('KeyQ'); for (let i = 0; i < 240; i++) g.tick(1/120);
  out.heal = { hp: Math.round(g.me.hp), cd: +g.me.skillCd.toFixed(1) };
  // --- overdrive: run speed
  G.S.skill = 'overdrive'; G.start('duel'); G.input.locked = true;
  const P = g.player, V = P.pos.constructor; P.reset(new V(0, 0, 30), 0);
  for (let i = 0; i < 120; i++) { G.input.down.add('KeyW'); g.tick(1/120); }
  const before = P.hSpeed;
  G.press('KeyQ'); for (let i = 0; i < 120; i++) { G.input.down.add('KeyW'); g.tick(1/120); }
  out.overdrive = { before: +before.toFixed(1), during: +P.hSpeed.toFixed(1), dashes: P.dashCharges, overT: +g.me.overT.toFixed(1) };
  G.input.down.clear();
  // --- reflect: the bot throws at me while my bubble is up
  G.S.skill = 'reflect'; G.start('duel'); G.input.locked = true;
  const bot = g.fighters[1]; bot.brain.tick = () => bot.brain.inp; // freeze the bot's brain
  P.reset(new V(0, 0, 10), 0); bot.body.reset(new V(0, 0, -10), Math.PI); bot.protT = 0; g.me.protT = 0;
  for (let i = 0; i < 30; i++) g.tick(1/120);
  const log = []; const orig = g.damageFighter.bind(g); g.damageFighter = (t, dmg, by, kind, d2, b) => { log.push([t.name, by && by.name, kind, Math.round(dmg)]); return orig(t, dmg, by, kind, d2, b); };
  G.press('KeyQ'); g.tick(1/120);
  const to = new V().subVectors(g.me.updateCenter(), bot.body.eye).normalize();
  g.throwFor(bot, to);
  for (let i = 0; i < 120; i++) g.tick(1/120);
  out.reflect = { log, botHp: Math.round(bot.hp), meHp: Math.round(g.me.hp), reflects: g.me.st.reflects || 0 };
  // --- gravity: grenade at the bot pulls it toward the well
  G.S.skill = 'gravity'; G.start('duel'); G.input.locked = true;
  const b2 = g.fighters[1]; b2.brain.tick = () => b2.brain.inp;
  P.reset(new V(0, 0, 14), 0); b2.body.reset(new V(4, 0, 0), 0); b2.protT = 0;
  for (let i = 0; i < 30; i++) g.tick(1/120);
  const tgt = new V(0, 1, 0); const e = P.eye; const dx = tgt.x - e.x, dz = tgt.z - e.z, dd = Math.hypot(dx, dz);
  P.yaw = Math.atan2(-dx, -dz); P.pitch = 0.08;
  const start = b2.body.pos.clone();
  G.press('KeyQ');
  let well = null; for (let i = 0; i < 240; i++) { g.tick(1/120); if (!well && g.wells.length) well = g.wells[0].pos.clone(); }
  out.gravity = { well: well && well.toArray().map(v => +v.toFixed(1)), botFrom: start.toArray().map(v => +v.toFixed(1)), botTo: b2.body.pos.toArray().map(v => +v.toFixed(1)), moved: +start.distanceTo(b2.body.pos).toFixed(1) };
  return out;
}"""
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=["--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"])
        pg = await b.new_page(viewport={"width":800,"height":450})
        errs = []
        pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.add_init_script("localStorage.setItem('redshift4_settings', JSON.stringify({quality:'low', full:0}))")
        await pg.goto("http://localhost:8766/index.html")
        await pg.wait_for_timeout(1500)
        await pg.evaluate("__game.game.state = 'paused'")
        for wp in ['disc', 'heavy', 'rail', 'boomerang']:
            await pg.evaluate("__game.game.state = 'menu'")
            r = await pg.evaluate(WEAPON, wp)
            await pg.evaluate("__game.game.state = 'paused'")
            print(json.dumps(r, ensure_ascii=False), flush=True)
        await pg.evaluate("__game.game.state = 'menu'")
        print(json.dumps(await pg.evaluate(SKILLS), ensure_ascii=False, indent=1))
        print("\n".join(errs[:10]))
        await b.close()
asyncio.run(main())
