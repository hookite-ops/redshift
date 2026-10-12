# Headless smoke test for the disc version: menu, practice mechanics, arena bot run, screenshots.
# usage: python3 tests/disc_smoke.py [quality] [difficulty] [botSeconds]
import asyncio, sys, json
from playwright.async_api import async_playwright
Q = sys.argv[1] if len(sys.argv) > 1 else 'low'
DF = sys.argv[2] if len(sys.argv) > 2 else 'easy'
BOT = float(sys.argv[3]) if len(sys.argv) > 3 else 60

AIM = """(target) => { const g = __game.game, P = g.player, e = P.eye;
  const dx = target[0]-e.x, dy = target[1]-e.y, dz = target[2]-e.z, d = Math.hypot(dx,dy,dz);
  P.yaw = Math.atan2(-dx, -dz); P.pitch = Math.asin(dy/d); }"""

BOTJS = """(secs) => {
  const G = __game, g = G.game, P = g.player, I = G.input; let t = 0, last = 0, minHp = 100, blinks = 0, throws = 0;
  const dt = 1/120; let strafe = 1, sw = 0;
  while (t < secs && g.state === 'play') {
    // nearest foe
    let best = null, bd = 1e9; for (const f of g.foes) { if (!f.alive) continue; const d = f.center.distanceTo(P.pos); if (d < bd) { bd = d; best = f; } }
    I.down.clear(); I.down.add('KeyW'); I.down.add(strafe > 0 ? 'KeyD' : 'KeyA');
    sw -= dt; if (sw <= 0) { strafe = -strafe; sw = 0.8 + Math.random(); }
    if (best) {
      const e = P.eye, dx = best.center.x-e.x, dy = best.center.y-e.y, dz = best.center.z-e.z, d = Math.hypot(dx,dy,dz);
      P.yaw = Math.atan2(-dx, -dz); P.pitch = Math.asin(dy/d);
      if (g.disc.state === 'hand' && t - last > 0.25) { I.edges.add('Mouse0'); last = t; throws++; }
      else if (g.disc.state === 'out' && g.disc.t > 0.35 && bd > 14 && Math.random() < 0.02) { I.edges.add('Mouse2'); blinks++; }
    }
    if (Math.random() < 0.004) I.edges.add('ShiftLeft');
    if (Math.random() < 0.01) I.edges.add('Space');
    g.tick(dt); t += dt; minHp = Math.min(minHp, g.hp);
  }
  I.down.clear();
  return { t: +t.toFixed(1), state: g.state, wave: g.wave, kills: g.kills, score: g.score, hp: Math.round(g.hp), minHp: Math.round(minHp), throws, blinks, stats: g.stats, foes: g.foes.length };
}"""

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"])
        pg = await b.new_page(viewport={"width": 1280, "height": 720})
        errs = []
        pg.on("console", lambda m: errs.append(m.type + ": " + m.text) if m.type in ('error', 'warning') else None)
        pg.on("pageerror", lambda e: errs.append("PAGEERROR: " + str(e)))
        await pg.add_init_script(f"localStorage.setItem('redshift4_settings', JSON.stringify({{quality:'{Q}', fps:1, full:0, difficulty:'{DF}'}}))")
        await pg.goto("http://localhost:8766/index.html", timeout=120000)
        await pg.wait_for_timeout(2500)
        await pg.screenshot(path="tests/shots/v3_menu.png", timeout=120000)
        print("menu ok", flush=True)

        # ---------- practice: throw / recall / bank / blink ----------
        await pg.evaluate("__game.start('practice'); __game.input.locked = true")
        await pg.evaluate("__game.sim(0.8, [])")
        info = await pg.evaluate("JSON.stringify(__game.game.foes.map(f=>[f.type, +f.center.x.toFixed(1), +f.center.y.toFixed(1), +f.center.z.toFixed(1), f.hp]))")
        print("dummies", info)
        foes = json.loads(info)
        # aim at the stage turret and throw
        t0 = foes[0]
        await pg.evaluate(f"({AIM})([{t0[1]},{t0[2]},{t0[3]}])")
        await pg.evaluate("__game.press('Mouse0')")
        await pg.evaluate("__game.sim(0.05, [])")
        st = await pg.evaluate("JSON.stringify({disc:__game.game.disc.state, pos:__game.game.disc.pos.toArray().map(v=>+v.toFixed(1))})")
        print("after throw", st)
        await pg.screenshot(path="tests/shots/v3_throw.png", timeout=120000)
        await pg.evaluate("__game.sim(0.5, [])")
        print("after 0.5s", await pg.evaluate("JSON.stringify({disc:__game.game.disc.state, hits:__game.game.stats.hits, kills:__game.game.kills, tut:[...__game.game.tut]})"))
        await pg.evaluate("__game.press('Mouse0')")  # recall
        await pg.evaluate("__game.sim(1.5, [])")
        print("after recall", await pg.evaluate("JSON.stringify({disc:__game.game.disc.state, hits:__game.game.stats.hits, kills:__game.game.kills, tut:[...__game.game.tut]})"))

        # bank shot on the turret hidden behind the far wall (0,0,-34): throw at the pillar-side wall
        # blink test: throw forward then blink
        await pg.evaluate("const P=__game.game.player; P.yaw=0; P.pitch=0.05;")
        before = await pg.evaluate("__game.game.player.pos.toArray().map(v=>+v.toFixed(2))")
        await pg.evaluate("__game.press('Mouse0')")
        await pg.evaluate("__game.sim(0.25, [])")
        await pg.evaluate("__game.press('Mouse2')")
        await pg.evaluate("__game.sim(1/120, [])")
        after = await pg.evaluate("JSON.stringify({pos:__game.game.player.pos.toArray().map(v=>+v.toFixed(2)), vel:__game.game.player.vel.toArray().map(v=>+v.toFixed(1)), disc:__game.game.disc.state, dash:__game.game.player.dashCharges})")
        print("blink from", before, "->", after)
        await pg.evaluate("__game.sim(0.4, [])")
        await pg.wait_for_timeout(200)
        await pg.screenshot(path="tests/shots/v3_blink.png", timeout=120000)

        # shield: hit from the front (should be blocked) and flank
        sh = [f for f in foes if f[0] == 'shield'][0]
        await pg.evaluate(f"const P=__game.game.player; P.reset(new P.pos.constructor({sh[1]}, 0, {sh[3]+12}), 0);")
        await pg.evaluate("__game.sim(0.6, [])")
        await pg.evaluate(f"({AIM})([{sh[1]},{sh[2]},{sh[3]}])")
        hp0 = await pg.evaluate("__game.game.foes.filter(f=>f.type==='shield')[0].hp")
        await pg.evaluate("__game.press('Mouse0')")
        await pg.evaluate("__game.sim(0.3, [])")
        hp1 = await pg.evaluate("__game.game.foes.filter(f=>f.type==='shield')[0].hp")
        print("shield front hp", hp0, "->", hp1, "(should be unchanged)")
        await pg.evaluate("__game.sim(1.5, [])")

        await pg.evaluate("__game.sim(0.2, [])")
        await pg.screenshot(path="tests/shots/v3_practice.png", timeout=120000)

        # ---------- arena ----------
        await pg.evaluate("__game.start('arena'); __game.input.locked = true")
        await pg.evaluate("__game.sim(5, [])")
        print(await pg.evaluate("JSON.stringify({st:__game.game.state, wave:__game.game.wave, foes:__game.game.foes.map(f=>f.type), hp:__game.game.hp})"))
        await pg.wait_for_timeout(300)
        await pg.screenshot(path="tests/shots/v3_arena.png", timeout=120000)
        res = await pg.evaluate(f"({BOTJS})({BOT})")
        print("bot", json.dumps(res))
        await pg.wait_for_timeout(300)
        await pg.screenshot(path="tests/shots/v3_arena2.png", timeout=120000)
        print("\n".join(errs[:30]))
        await b.close()
asyncio.run(main())
