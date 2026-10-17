// AI 훈련소 — 게임 안에서 학습 AI 를 이어서 학습시키고, 실력을 재고, 관전하고, 두뇌를 저장/공유한다.
import { ES, rng } from './ai/es.js';
import { Policy } from './ai/nn.js';
import { evalMatchAsync } from './trainlab.js';
import { activeBrain, shippedBrain, saveCustomBrain, clearCustomBrain, loadCustomBrain } from './neurobot.js';

const HIST_KEY = 'redshift_ai_hist';
const LAB = { pop: 8, sigma: 0.02, lr: 0.01, secs: 25 };

export function installLab(game, { $, show, onSpectate }) {
  let running = false, busy = false, hist = [];
  try { hist = JSON.parse(localStorage.getItem(HIST_KEY) || '[]'); } catch { hist = []; }
  const saveHist = () => { try { localStorage.setItem(HIST_KEY, JSON.stringify(hist.slice(-400))); } catch { } };

  const status = (t, cls = '') => { const e = $('labStatus'); e.textContent = t; e.className = 'lstatus ' + cls; };
  const bar = p => { $('labBar').style.width = Math.round(p * 100) + '%'; };

  function renderInfo() {
    const pol = activeBrain(), sh = shippedBrain();
    if (!pol) { $('labBrain').innerHTML = '<b>두뇌 없음</b>'; return; }
    const m = pol.meta || {}, mine = pol !== sh;
    $('labBrain').innerHTML =
      `<div class="stat"><span>사용 중인 두뇌</span><b>${mine ? '내가 학습시킨 두뇌' : '기본 탑재 두뇌'}</b></div>` +
      `<div class="stat"><span>세대</span><b>${m.gen || 0}</b></div>` +
      `<div class="stat"><span>학습한 경기 수</span><b>${(m.matches || 0).toLocaleString()}판</b></div>` +
      (m.bench ? `<div class="stat"><span>최강 봇 상대 (최근 측정)</span><b>${m.bench.win}승 ${m.bench.loss}패 · K/D ${m.bench.kd}</b></div>` : '') +
      (m.labGens ? `<div class="stat"><span>여기서 이어서 학습</span><b>${m.labGens}세대</b></div>` : '');
    $('labReset').disabled = !mine || running;
    drawChart();
  }

  function drawChart() {
    const cv = $('labChart'), ctx = cv.getContext('2d');
    const w = cv.width = cv.clientWidth * devicePixelRatio, h = cv.height = cv.clientHeight * devicePixelRatio;
    ctx.clearRect(0, 0, w, h);
    const css = getComputedStyle(document.body);
    ctx.strokeStyle = 'rgba(128,128,128,.35)'; ctx.lineWidth = 1 * devicePixelRatio;
    ctx.beginPath(); ctx.moveTo(0, h / 2); ctx.lineTo(w, h / 2); ctx.stroke();
    if (hist.length < 2) {
      ctx.fillStyle = 'rgba(128,128,128,.8)'; ctx.font = `${12 * devicePixelRatio}px sans-serif`; ctx.textAlign = 'center';
      ctx.fillText('학습을 시작하면 세대별 점수가 여기에 그려져요', w / 2, h / 2 - 8 * devicePixelRatio); return;
    }
    const ys = hist.map(x => x.fit);
    // smoothed line (raw generations are noisy)
    const sm = []; let acc = ys[0];
    for (const y of ys) { acc = acc * 0.8 + y * 0.2; sm.push(acc); }
    const lo = Math.min(-60, ...sm), hi = Math.max(60, ...sm), span = hi - lo;
    const X = i => i / (ys.length - 1) * (w - 8 * devicePixelRatio) + 4 * devicePixelRatio, Y = v => h - (v - lo) / span * (h - 10 * devicePixelRatio) - 5 * devicePixelRatio;
    ctx.strokeStyle = 'rgba(128,128,128,.6)'; ctx.beginPath(); ctx.moveTo(0, Y(0)); ctx.lineTo(w, Y(0)); ctx.stroke();
    ctx.fillStyle = 'rgba(255,90,31,.25)';
    ys.forEach((y, i) => { ctx.fillRect(X(i) - 1, Y(y) - 1, 2 * devicePixelRatio, 2 * devicePixelRatio); });
    ctx.strokeStyle = '#ff5a1f'; ctx.lineWidth = 2.2 * devicePixelRatio; ctx.beginPath();
    sm.forEach((y, i) => i ? ctx.lineTo(X(i), Y(y)) : ctx.moveTo(X(i), Y(y))); ctx.stroke();
  }

  // keep the sim silent and off-screen while the lab works
  let vol = null;
  function enterLab() { vol = [game.S.sfx, game.S.music]; game.audio.setVolumes(0, 0); }
  function leaveLab() { game.clear(); game.state = 'menu'; if (vol) game.audio.setVolumes(vol[0], vol[1]); vol = null; }

  async function train() {
    if (busy) return;
    const base = activeBrain(); if (!base) return;
    running = busy = true; setButtons(); enterLab();
    const R = rng((Date.now() & 0x7fffffff) ^ 0x51ed);
    const es = new ES(base.net.p, { pop: LAB.pop, sigma: LAB.sigma, lr: LAB.lr, seed: (R() * 2 ** 31) | 0 });
    let cur = base.clone();
    const league = [base.clone()];
    try {
      while (running) {
        const cands = es.ask();
        const seeds = [(R() * 2 ** 30) | 0, (R() * 2 ** 30) | 0];
        const opps = [{ type: 'bot', skill: 'max' }, R() < 0.5 ? { type: 'neuro', policy: league[(R() * league.length) | 0].clone() } : { type: 'bot', skill: 'hard' }];
        const fits = [];
        let kills = 0, deaths = 0;
        const total = cands.length * seeds.length;
        for (let ci = 0; ci < cands.length && running; ci++) {
          const pol = cur.clone(); pol.net.p.set(cands[ci].params);
          let sum = 0;
          for (let si = 0; si < seeds.length && running; si++) {
            const done = ci * seeds.length + si;
            status(`${(cur.meta.gen || 0) + 1}세대 학습 중 · 후보 ${ci + 1}/${cands.length} · ${si === 0 ? '최강 봇' : opps[1].type === 'neuro' ? '과거의 나' : '어려움 봇'}과 대결`);
            const r = await evalMatchAsync(game, { a: { type: 'neuro', policy: pol }, b: opps[si], seed: seeds[si], secs: LAB.secs, lab: true },
              { cancel: () => !running, onProgress: p => bar((done + p) / total) });
            if (!r) break;
            game.state = 'lab';
            sum += r.fit; kills += r.k; deaths += r.d;
          }
          fits.push(sum / seeds.length);
        }
        if (!running || fits.length < cands.length) break;
        const st = es.tell(fits);
        const next = cur.clone(); next.net.p.set(es.theta);
        next.meta = { ...cur.meta, gen: (cur.meta.gen || 0) + 1, stage: 'lab', labGens: (cur.meta.labGens || 0) + 1, matches: (cur.meta.matches || 0) + total, bench: cur.meta.bench };
        cur = next; saveCustomBrain(cur);
        if (st.gen % 5 === 0) { league.push(cur.clone()); if (league.length > 6) league.shift(); }
        hist.push({ gen: cur.meta.gen, fit: Math.round(st.mean), kd: +(kills / Math.max(1, deaths)).toFixed(2) }); saveHist();
        bar(0); renderInfo();
        status(`${cur.meta.gen}세대 완료 · 평균 점수 ${Math.round(st.mean)} · K/D ${(kills / Math.max(1, deaths)).toFixed(2)} — 자동 저장됨`, 'good');
      }
    } catch (e) { console.error(e); status('학습 중 오류: ' + (e && e.message || e), 'bad'); }
    running = busy = false; leaveLab(); bar(0); setButtons(); renderInfo();
    if (!$('labStatus').classList.contains('good') && !$('labStatus').classList.contains('bad')) status('학습을 멈췄어요. 지금까지 배운 건 저장돼 있어요.');
  }

  async function bench() {
    if (busy) return;
    const pol = activeBrain(); if (!pol) return;
    busy = true; setButtons(); enterLab();
    const N = 10; let k = 0, d = 0, win = 0, loss = 0;
    const R = rng(Date.now() & 0x7fffffff);
    try {
      for (let i = 0; i < N; i++) {
        status(`실력 측정 중 · ${i + 1}/${N}판 (학습 AI vs 최강 봇, 40초 경기)`);
        const r = await evalMatchAsync(game, { a: { type: 'neuro', policy: pol.clone() }, b: { type: 'bot', skill: 'max' }, seed: (R() * 2 ** 30) | 0, secs: 40, lab: true },
          { onProgress: p => bar((i + p) / N) });
        game.state = 'lab';
        k += r.k; d += r.d; if (r.k > r.d) win++; else if (r.k < r.d) loss++;
      }
      const b = { win, loss, kd: +(k / Math.max(1, d)).toFixed(2), n: N };
      pol.meta.bench = b;
      if (pol !== shippedBrain()) saveCustomBrain(pol);
      status(`결과: ${win}승 ${N - win - loss}무 ${loss}패 · 킬 ${k} / 데스 ${d} (K/D ${b.kd})`, win >= loss ? 'good' : '');
    } catch (e) { console.error(e); status('측정 중 오류: ' + (e && e.message || e), 'bad'); }
    busy = false; leaveLab(); bar(0); setButtons(); renderInfo();
  }

  function setButtons() {
    $('labTrain').textContent = running ? '학습 멈추기' : '이어서 학습하기';
    $('labTrain').classList.toggle('on', running);
    for (const id of ['labBench', 'labWatch', 'labImport', 'labBack']) $(id).disabled = busy;
    $('labReset').disabled = busy;
  }

  $('labTrain').onclick = () => { if (running) { running = false; status('멈추는 중… (지금 경기만 끝내고 저장해요)'); } else train(); };
  $('labBench').onclick = () => bench();
  $('labWatch').onclick = () => { if (!busy) onSpectate(); };
  $('labExport').onclick = async () => {
    const pol = activeBrain(); if (!pol) return;
    const txt = JSON.stringify(pol.toJSON());
    try {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([txt], { type: 'application/json' }));
      a.download = `redshift-ai-gen${pol.meta.gen || 0}.json`; a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    } catch { }
    try { await navigator.clipboard.writeText(txt); status('두뇌 파일을 내려받았어요 (클립보드에도 복사됨)', 'good'); }
    catch { status('두뇌 파일을 내려받았어요', 'good'); }
  };
  $('labImport').onclick = () => $('labFile').click();
  $('labFile').onchange = async () => {
    const f = $('labFile').files[0]; if (!f) return;
    try {
      const pol = Policy.fromJSON(await f.text());
      const sh = shippedBrain();
      if (sh && pol.sizes.join() !== sh.sizes.join()) throw new Error('이 게임 버전과 맞지 않는 두뇌예요');
      pol.meta.gen = Math.max(pol.meta.gen || 0, sh ? sh.meta.gen || 0 : 0);
      saveCustomBrain(pol); status('두뇌를 불러왔어요 — 이제 학습 AI 봇이 이 두뇌로 싸워요', 'good');
    } catch (e) { status('불러오기 실패: ' + (e.message || e), 'bad'); }
    $('labFile').value = ''; renderInfo();
  };
  $('labReset').onclick = () => {
    if (!confirm('내가 학습시킨 두뇌를 지우고 기본 탑재 두뇌로 돌아갈까요?')) return;
    clearCustomBrain(); hist = []; saveHist(); loadCustomBrain(); status('기본 두뇌로 돌아갔어요'); renderInfo();
  };
  $('labBack').onclick = () => show('menu');

  return {
    open() { show('ailab'); status(running ? '학습 중…' : '학습 AI 는 최강 봇을 보고 따라 배운 뒤, 수천 판 자가대전으로 스스로 강해졌어요.'); setButtons(); renderInfo(); },
    get busy() { return busy; },
  };
}
