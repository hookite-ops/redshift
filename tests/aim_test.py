# "Sloppy human" driver: aims at where the bot WAS ~0.15 s ago with a wobbly hand, strafes, throws
# through the real input path (so the aim assist applies). Compares hit rates per assist level.
# usage: python3 tests/aim_test.py [botSkill] [seconds]
import asyncio, sys, json
from playwright.async_api import async_playwright
SK = sys.argv[1] if len(sys.argv) > 1 else 'max'
SECS = float(sys.argv[2]) if len(sys.argv) > 2 else 60
IMM = len(sys.argv) > 3 and sys.argv[3] == 'immortal'
RUN = """async ([assist, skill, secs, IMMORTAL]) => {
  const G = __game, g = G.game, I = G.input;
  G.S.aimAssist = assist; G.S.botSkill = skill;
  G.start('duel'); I.locked = true;
  const P = g.player, bot = g.fighters[1];
  const hist = []; let errY = 0, errP = 0, last = -1, sw = 0, side = 'KeyA';
  const dt = 1/120; let t = 0; let directHits = 0;
  const orig = g.damageFighter.bind(g);
  g.damageFighter = (tg, dmg, by, kind, d2, b) => { if (by === g.me && kind !== 'slam') directHits++; return orig(tg, dmg, by, kind, d2, b); };
  const why = { dash: 0, blink: 0, spawn: 0 }; const os = g.sweepFighters.bind(g);
  g.sweepFighters = (d, a, b2, dir, leg) => { if (d.owner === g.me && bot.alive && !d.hit.has(bot) && bot.invuln) { const before = bot.st.dodges; os(d, a, b2, dir, leg); if (bot.st.dodges > before) { if (bot.protT > 0) why.spawn++; else if (bot.body.dashT > 0) why.dash++; else why.blink++; } return; } return os(d, a, b2, dir, leg); };
  while (t < secs && !g.match.over) {
    const c = bot.updateCenter().clone(); hist.push(c); if (hist.length > 18) hist.shift();
    const seen = hist[0];
    errY += (Math.random() - 0.5) * 0.012; errP += (Math.random() - 0.5) * 0.008;
    errY = Math.max(-0.06, Math.min(0.06, errY * 0.995)); errP = Math.max(-0.04, Math.min(0.04, errP * 0.995));
    if (IMMORTAL) g.me.hp = 100;
    if (g.me.alive) {
      const e = P.eye, dx = seen.x - e.x, dy = seen.y - e.y, dz = seen.z - e.z, dd = Math.hypot(dx, dy, dz);
      P.yaw = Math.atan2(-dx, -dz) + errY; P.pitch = Math.asin(dy / dd) + errP;
      I.down.clear(); I.down.add('KeyW'); sw -= dt; if (sw <= 0) { side = side === 'KeyA' ? 'KeyD' : 'KeyA'; sw = 0.7 + Math.random(); } I.down.add(side);
      if (g.disc.state === 'hand' && t - last > 0.45 + Math.random() * 0.3 && bot.alive && dd < 42) { I.edges.add('Mouse0'); last = t; }
      if (Math.random() < dt * 0.3) I.edges.add('ShiftLeft');
    }
    g.tick(dt); t += dt;
  }
  I.down.clear();
  return { assist, skill, sec: +t.toFixed(1), throws: g.me.st.throws, directHits, rate: +(directHits / Math.max(1, g.me.st.throws)).toFixed(2), score: `${g.me.kills}:${bot.kills}`, botDodges: bot.st.dodges, why };
}"""
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=["--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"])
        pg = await b.new_page(viewport={"width":800,"height":450})
        errs = []
        pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.add_init_script("localStorage.setItem('redshift4_settings', JSON.stringify({quality:'low', gfx:2, full:0}))")
        await pg.goto("http://localhost:8766/index.html")
        await pg.wait_for_timeout(1500)
        for a in ['off', 'normal', 'strong']:
            print(json.dumps(await pg.evaluate(RUN, [a, SK, SECS, IMM])), flush=True)
        print("\n".join(errs[:10]))
        await b.close()
asyncio.run(main())
