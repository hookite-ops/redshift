# Every map × every weapon: bots play FFA on each map with the nine weapons handed out, headless and fast.
# Checks: map builds, spawns are valid, no errors, bots fight (kills), bots move around (not stuck),
# weapon tricks fire (shards, saw traps, blasts), and bots reach the high ground somewhere.
# usage: python3 tests/maps_test.py [seconds-per-map]
import asyncio, sys, json
from playwright.async_api import async_playwright
SECS = float(sys.argv[1]) if len(sys.argv) > 1 else 40
RUN = """async ([map, secs]) => {
  const G = __game, g = G.game;
  G.S.map = map; G.S.botSkill = 'hard';
  G.start('ffa'); G.input.locked = true;
  g.autopilot('hard');
  const W = ['disc','heavy','rail','boomerang','splitter','saw','seeker','nova','prism'];
  g.fighters.forEach((f, i) => { f.disc.setWeapon(W[(i * 2 + map.length) % W.length]); f.setHandDisc && f.setHandDisc(); });
  const A = g.arena, stat = { shards: 0, stuck: 0, blasts: 0, high: 0, pads: 0, boosts: 0 };
  const ob = g.discBlast.bind(g); g.discBlast = (...a) => { stat.blasts++; return ob(...a); };
  const os = g.spawnShard.bind(g); g.spawnShard = (...a) => { stat.shards++; return os(...a); };
  const moved = new Map(g.fighters.map(f => [f, 0])); const last = new Map(g.fighters.map(f => [f, f.body.pos.clone()]));
  const dt = 1 / 120; let ticks = 0, maxY = 0;
  for (let t = 0; t < secs && g.state === 'play' && !g.match.over; t += dt) {
    g.tick(dt); ticks++;
    if (ticks % 60 === 0) for (const f of g.fighters) {
      if (!f.alive) continue;
      moved.set(f, moved.get(f) + f.body.pos.distanceTo(last.get(f))); last.get(f).copy(f.body.pos);
      if (f.body.pos.y > 1.6) stat.high++;
      maxY = Math.max(maxY, f.body.pos.y);
      if (f.disc.stuckT > 0) stat.stuck++;
    }
  }
  return { map, name: g.mapName, spawns: A.spawnGround.length + '+' + A.spawnHigh.length, pads: A.jumpPads.length, boostPads: A.boostPads.length, cover: A.cover.length,
    simSec: +(ticks * dt).toFixed(1), ...stat, maxY: +maxY.toFixed(1),
    fighters: g.fighters.map(f => [f.name, f.disc.w.id, f.kills, f.deaths, f.st.throws, f.st.hits, Math.round(moved.get(f))]) };
}"""

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"])
        pg = await b.new_page(viewport={"width": 640, "height": 360})
        errs = []
        pg.on("pageerror", lambda e: errs.append("PAGEERROR: " + str(e)))
        pg.on("console", lambda m: errs.append(m.type + ": " + m.text) if m.type == 'error' else None)
        await pg.add_init_script("localStorage.setItem('redshift4_settings', JSON.stringify({quality:'low', gfx:2, full:0, adaptive:0}))")
        await pg.goto("http://localhost:8766/index.html", timeout=120000)
        await pg.wait_for_timeout(1500)
        await pg.evaluate("__game.game.render = () => {}")
        for m in ['arena', 'spire', 'lanes', 'forest', 'orbit']:
            r = await pg.evaluate(RUN, [m, SECS])
            print(json.dumps(r, ensure_ascii=False), flush=True)
        print("\n".join(errs[:20]) or "no errors")
        await b.close()
asyncio.run(main())
