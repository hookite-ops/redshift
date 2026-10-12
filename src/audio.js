// Procedural audio — every sound is synthesized, no asset files needed.
export class Audio {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.sfxVol = 0.8;
    this.musicVol = 0.45;
  }

  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = this.ctx = new AC();
    this.master = ctx.createGain();
    this.master.gain.value = 0.9;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14; comp.ratio.value = 4;
    this.master.connect(comp); comp.connect(ctx.destination);

    this.sfx = ctx.createGain(); this.sfx.gain.value = this.sfxVol; this.sfx.connect(this.master);
    this.music = ctx.createGain(); this.music.gain.value = this.musicVol; this.music.connect(this.master);

    // white noise buffer
    const len = ctx.sampleRate * 2;
    this.noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;

    // convolution reverb (short room)
    const rlen = ctx.sampleRate * 1.4;
    const ir = ctx.createBuffer(2, rlen, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const ch = ir.getChannelData(c);
      for (let i = 0; i < rlen; i++) ch[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / rlen, 3);
    }
    this.reverb = ctx.createConvolver(); this.reverb.buffer = ir;
    this.revGain = ctx.createGain(); this.revGain.gain.value = 0.22;
    this.reverb.connect(this.revGain); this.revGain.connect(this.sfx);

    // wind loop (speed-driven)
    const wn = ctx.createBufferSource(); wn.buffer = this.noiseBuf; wn.loop = true;
    this.windFilter = ctx.createBiquadFilter(); this.windFilter.type = 'bandpass';
    this.windFilter.frequency.value = 400; this.windFilter.Q.value = 0.7;
    this.windGain = ctx.createGain(); this.windGain.gain.value = 0;
    wn.connect(this.windFilter); this.windFilter.connect(this.windGain); this.windGain.connect(this.sfx);
    wn.start();

    // wallrun hum
    const wr = ctx.createBufferSource(); wr.buffer = this.noiseBuf; wr.loop = true;
    this.wrFilter = ctx.createBiquadFilter(); this.wrFilter.type = 'highpass'; this.wrFilter.frequency.value = 2500;
    this.wrGain = ctx.createGain(); this.wrGain.gain.value = 0;
    wr.connect(this.wrFilter); this.wrFilter.connect(this.wrGain); this.wrGain.connect(this.sfx);
    wr.start();

    this._musicStep = 0; this._musicNext = 0; this.musicOn = true;
  }

  setVolumes(sfx, music) {
    this.sfxVol = sfx; this.musicVol = music;
    if (!this.ctx) return;
    this.sfx.gain.value = sfx; this.music.gain.value = music;
  }

  get t() { return this.ctx.currentTime; }

  _noise(dur, { type = 'bandpass', freq = 1000, q = 1, gain = 0.5, attack = 0.002, sweepTo = null, rev = 0.3 } = {}) {
    if (!this.ctx) return;
    const ctx = this.ctx, t = this.t;
    const src = ctx.createBufferSource(); src.buffer = this.noiseBuf;
    src.playbackRate.value = 0.8 + Math.random() * 0.4;
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.setValueAtTime(freq, t); f.Q.value = q;
    if (sweepTo) f.frequency.exponentialRampToValueAtTime(sweepTo, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f); f.connect(g); g.connect(this.sfx);
    if (rev) { const rg = ctx.createGain(); rg.gain.value = rev; g.connect(rg); rg.connect(this.reverb); }
    src.start(t, Math.random()); src.stop(t + dur + 0.05);
  }

  _tone(freq, dur, { type = 'sine', gain = 0.3, attack = 0.002, slideTo = null, rev = 0.3, delay = 0 } = {}) {
    if (!this.ctx) return;
    const ctx = this.ctx, t = this.t + delay;
    const o = ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(this.sfx);
    if (rev) { const rg = ctx.createGain(); rg.gain.value = rev; g.connect(rg); rg.connect(this.reverb); }
    o.start(t); o.stop(t + dur + 0.05);
  }

  slash(power = 1) {
    this._noise(0.22, { type: 'bandpass', freq: 3500, sweepTo: 600, q: 1.2, gain: 0.35 * power, attack: 0.01 });
    this._noise(0.12, { type: 'highpass', freq: 6000, gain: 0.12 * power, rev: 0 });
  }
  slashHit() {
    this._noise(0.18, { type: 'lowpass', freq: 1800, gain: 0.6, rev: 0.2 });
    this._tone(180, 0.15, { type: 'square', gain: 0.12, slideTo: 60 });
  }
  gunshot() {
    this._noise(0.35, { type: 'lowpass', freq: 5000, sweepTo: 300, gain: 0.8, rev: 0.6 });
    this._tone(140, 0.25, { type: 'sine', gain: 0.6, slideTo: 40, rev: 0 });
    this._noise(0.05, { type: 'highpass', freq: 3000, gain: 0.4, rev: 0 });
  }
  enemyShot(dist = 10) {
    const g = Math.max(0.05, 0.4 - dist * 0.008);
    this._noise(0.25, { type: 'bandpass', freq: 1400, sweepTo: 400, gain: g, rev: 0.6 });
    this._tone(900, 0.12, { type: 'sawtooth', gain: g * 0.3, slideTo: 300, rev: 0.3 });
  }
  parry(perfect = true) {
    const base = perfect ? 1 : 0.6;
    [1, 2.76, 5.4, 8.93].forEach((m, i) => this._tone(620 * m, 0.9 / (i + 1), { type: 'sine', gain: 0.22 * base / (i * 0.6 + 1), rev: 0.7 }));
    this._noise(0.08, { type: 'highpass', freq: 4000, gain: 0.5 * base, rev: 0.5 });
    if (perfect) this._tone(1240, 0.6, { type: 'triangle', gain: 0.1, slideTo: 2480, delay: 0.03 });
  }
  clash() {
    [1, 2.4, 4.1].forEach((m, i) => this._tone(480 * m, 0.5, { type: 'triangle', gain: 0.25 / (i + 1), rev: 0.8 }));
    this._noise(0.15, { type: 'bandpass', freq: 2500, gain: 0.6 });
  }
  dash() {
    this._noise(0.3, { type: 'bandpass', freq: 400, sweepTo: 2500, q: 0.8, gain: 0.45, attack: 0.02 });
    this._tone(90, 0.2, { type: 'sine', gain: 0.3, slideTo: 200, rev: 0 });
  }
  jump() { this._noise(0.12, { type: 'lowpass', freq: 900, gain: 0.18, rev: 0 }); }
  land(hard) {
    this._noise(hard ? 0.25 : 0.1, { type: 'lowpass', freq: hard ? 500 : 900, gain: hard ? 0.5 : 0.2, rev: 0.1 });
    if (hard) this._tone(70, 0.25, { gain: 0.4, slideTo: 35, rev: 0 });
  }
  step() { this._noise(0.06, { type: 'bandpass', freq: 700 + Math.random() * 400, gain: 0.12, rev: 0 }); }
  slideStart() { this._noise(0.5, { type: 'bandpass', freq: 1800, sweepTo: 700, gain: 0.25, attack: 0.03 }); }
  grapple() {
    this._tone(1800, 0.15, { type: 'square', gain: 0.08, slideTo: 300 });
    this._noise(0.2, { type: 'highpass', freq: 2000, gain: 0.2 });
  }
  grappleHit() { this._tone(300, 0.1, { type: 'square', gain: 0.15, slideTo: 120, rev: 0 }); }
  hitmarker(head) {
    this._tone(head ? 2200 : 1600, 0.06, { type: 'square', gain: 0.08, rev: 0 });
    if (head) this._tone(3300, 0.1, { type: 'sine', gain: 0.1, rev: 0, delay: 0.02 });
  }
  kill(combo = 1) {
    const base = 440 * Math.pow(1.06, Math.min(combo, 12) * 2);
    this._tone(base, 0.25, { type: 'triangle', gain: 0.18 });
    this._tone(base * 1.5, 0.35, { type: 'triangle', gain: 0.14, delay: 0.06 });
    this._noise(0.4, { type: 'lowpass', freq: 600, sweepTo: 80, gain: 0.4 });
  }
  hurt() {
    this._tone(220, 0.25, { type: 'sawtooth', gain: 0.2, slideTo: 90, rev: 0 });
    this._noise(0.15, { type: 'lowpass', freq: 700, gain: 0.4, rev: 0 });
  }
  reload() {
    this._tone(900, 0.04, { type: 'square', gain: 0.1, rev: 0 });
    this._tone(600, 0.05, { type: 'square', gain: 0.1, rev: 0, delay: 0.25 });
    this._tone(1300, 0.05, { type: 'square', gain: 0.12, rev: 0, delay: 0.55 });
  }
  empty() { this._tone(1400, 0.03, { type: 'square', gain: 0.06, rev: 0 }); }
  wave() {
    [0, 0.12, 0.24].forEach((d, i) => this._tone(220 * Math.pow(1.5, i), 0.6, { type: 'sawtooth', gain: 0.1, delay: d }));
  }
  bulletWhiz() { this._noise(0.15, { type: 'bandpass', freq: 2500, sweepTo: 900, q: 3, gain: 0.15, rev: 0 }); }
  ui() { this._tone(1000, 0.05, { type: 'sine', gain: 0.08, rev: 0 }); }
  discThrow(p = 1) { this._noise(0.25, { type: 'bandpass', freq: 900, sweepTo: 3200, q: 1.5, gain: 0.35 * p, attack: 0.01 }); this._tone(500, 0.18, { type: 'triangle', gain: 0.08, slideTo: 1400, rev: 0.2 }); }
  discBounce(n = 1) { this._tone(900 + n * 260, 0.12, { type: 'square', gain: 0.07, rev: 0.3 }); this._noise(0.06, { type: 'highpass', freq: 3000, gain: 0.25, rev: 0.2 }); }
  discCatch() { this._tone(1500, 0.06, { type: 'triangle', gain: 0.12, rev: 0 }); this._noise(0.05, { type: 'lowpass', freq: 1500, gain: 0.2, rev: 0 }); }
  discHit(n = 1) { this._noise(0.12, { type: 'lowpass', freq: 2500, gain: 0.5, rev: 0.15 }); this._tone(240 + n * 60, 0.1, { type: 'square', gain: 0.1, slideTo: 90, rev: 0 }); }
  blink() { this._tone(300, 0.25, { type: 'sine', gain: 0.35, slideTo: 1600, rev: 0.4 }); this._noise(0.2, { type: 'bandpass', freq: 4000, sweepTo: 500, gain: 0.3 }); }
  slam() { this._noise(0.4, { type: 'lowpass', freq: 1200, sweepTo: 80, gain: 0.7, rev: 0.4 }); this._tone(70, 0.3, { type: 'sine', gain: 0.5, slideTo: 35, rev: 0 }); }
  orbFire(dist) { const g = Math.max(0.05, 0.3 - dist * 0.004); this._tone(700, 0.2, { type: 'sine', gain: g, slideTo: 250, rev: 0.4 }); }
  shieldClang() { [1, 2.3, 3.9].forEach((m, i) => this._tone(520 * m, 0.25, { type: 'triangle', gain: 0.12 / (i + 1), rev: 0.5 })); }
  shotgun() {
    this._noise(0.5, { type: 'lowpass', freq: 3500, sweepTo: 160, gain: 1.0, rev: 0.7 });
    this._tone(90, 0.35, { type: 'sine', gain: 0.8, slideTo: 30, rev: 0 });
    this._noise(0.08, { type: 'highpass', freq: 2500, gain: 0.5, rev: 0 });
  }
  pump() { this._noise(0.06, { type: 'bandpass', freq: 1500, gain: 0.2, rev: 0 }); this._noise(0.06, { type: 'bandpass', freq: 900, gain: 0.25, rev: 0, }); }
  wallStart() { this._noise(0.25, { type: 'bandpass', freq: 2200, sweepTo: 900, gain: 0.18 }); }
  climb() { this._noise(0.15, { type: 'bandpass', freq: 600, gain: 0.2, rev: 0 }); }
  mantle() { this._noise(0.18, { type: 'lowpass', freq: 700, gain: 0.25, rev: 0 }); }
  hookFire() { this._tone(2200, 0.18, { type: 'sawtooth', gain: 0.06, slideTo: 600 }); this._noise(0.12, { type: 'highpass', freq: 3000, gain: 0.2 }); }
  hookAttach(enemy) { this._tone(enemy ? 500 : 320, 0.12, { type: 'square', gain: 0.14, slideTo: 140, rev: 0.2 }); this._noise(0.06, { type: 'bandpass', freq: 1800, gain: 0.3, rev: 0 }); }
  sniperCharge(dist) { const g = Math.max(0.04, 0.22 - dist * 0.002); this._tone(1800, 1.2, { type: 'sine', gain: g, slideTo: 3600, attack: 0.05, rev: 0.4 }); }
  sniperShot(dist) { const g = Math.max(0.15, 0.7 - dist * 0.004); this._noise(0.7, { type: 'lowpass', freq: 5000, sweepTo: 200, gain: g, rev: 0.9 }); this._tone(220, 0.5, { type: 'sawtooth', gain: g * 0.3, slideTo: 50 }); }
  telegraph(parryable) { if (parryable) this._tone(2400, 0.09, { type: 'triangle', gain: 0.12, rev: 0.3 }); else { this._tone(160, 0.35, { type: 'sawtooth', gain: 0.2, slideTo: 90, rev: 0.4 }); this._tone(170, 0.35, { type: 'sawtooth', gain: 0.15, slideTo: 95 }); } }
  block() { [1, 2.1, 3.6].forEach((m, i) => this._tone(380 * m, 0.3, { type: 'triangle', gain: 0.14 / (i + 1), rev: 0.6 })); this._noise(0.08, { type: 'bandpass', freq: 2200, gain: 0.35 }); }
  broken() { this._tone(880, 0.5, { type: 'square', gain: 0.08, slideTo: 1760, rev: 0.6 }); this._tone(440, 0.6, { type: 'triangle', gain: 0.1, rev: 0.6, delay: 0.05 }); }
  execute() {
    this._noise(0.8, { type: 'lowpass', freq: 3000, sweepTo: 60, gain: 0.9, rev: 0.9 });
    this._tone(60, 0.8, { type: 'sine', gain: 0.8, slideTo: 25, rev: 0 });
    [1, 1.5, 2].forEach((m, i) => this._tone(660 * m, 1.0, { type: 'triangle', gain: 0.08, rev: 0.9, delay: 0.05 * i }));
  }
  chargeStart() { this._tone(200, 0.6, { type: 'sawtooth', gain: 0.05, slideTo: 800, attack: 0.1, rev: 0.3 }); }
  iaido() { this._noise(0.5, { type: 'bandpass', freq: 600, sweepTo: 6000, q: 0.7, gain: 0.6, attack: 0.01, rev: 0.6 }); this._tone(120, 0.4, { type: 'sine', gain: 0.5, slideTo: 40, rev: 0 }); }
  droneExplode() { this._noise(0.6, { type: 'lowpass', freq: 2000, sweepTo: 80, gain: 0.7, rev: 0.6 }); }
  checkpoint(final) { [0, 0.07, 0.14].forEach((d, i) => this._tone(880 * Math.pow(1.26, i), 0.25, { type: 'triangle', gain: 0.12, delay: d })); if (final) [0, 0.1, 0.2, 0.3].forEach((d, i) => this._tone(660 * Math.pow(1.5, i % 3), 0.5, { type: 'square', gain: 0.06, delay: 0.25 + d })); }
  boost() { this._tone(300, 0.3, { type: 'sawtooth', gain: 0.1, slideTo: 1200, rev: 0.3 }); }

  update(speed, wallrunning, dt, intensity = 0) {
    if (!this.ctx) return;
    this.intensity = (this.intensity || 0) + (intensity - (this.intensity || 0)) * Math.min(1, dt * 2);
    const s = Math.min(speed / 40, 1);
    this.windGain.gain.setTargetAtTime(Math.max(0, s - 0.15) * 0.35, this.t, 0.1);
    this.windFilter.frequency.setTargetAtTime(300 + s * 1600, this.t, 0.1);
    this.wrGain.gain.setTargetAtTime(wallrunning ? 0.06 : 0, this.t, 0.05);
    this._updateMusic();
  }

  // Lightweight procedural darksynth loop
  _updateMusic() {
    if (!this.musicOn || this.musicVol <= 0.001) return;
    const ctx = this.ctx;
    const bpm = 132, step = 60 / bpm / 4;
    if (this._musicNext < ctx.currentTime) this._musicNext = ctx.currentTime + 0.05;
    while (this._musicNext < ctx.currentTime + 0.2) {
      this._playStep(this._musicStep, this._musicNext);
      this._musicNext += step; this._musicStep = (this._musicStep + 1) % 64;
    }
  }
  _playStep(i, t) {
    const ctx = this.ctx, out = this.music;
    const bar = Math.floor(i / 16), s = i % 16;
    const roots = [36, 36, 39, 34]; // C, C, Eb, Bb
    const root = roots[bar];
    const mtof = n => 440 * Math.pow(2, (n - 69) / 12);
    const env = (node, g, dur, a = 0.003) => {
      node.gain.setValueAtTime(0.0001, t);
      node.gain.exponentialRampToValueAtTime(g, t + a);
      node.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    };
    // kick
    if (s % 4 === 0) {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(40, t + 0.12);
      env(g, 0.9, 0.3); o.connect(g); g.connect(out); o.start(t); o.stop(t + 0.32);
    }
    // snare / clap
    if (s === 4 || s === 12) {
      const n = ctx.createBufferSource(); n.buffer = this.noiseBuf;
      const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1800;
      const g = ctx.createGain(); env(g, 0.35, 0.18);
      n.connect(f); f.connect(g); g.connect(out); n.start(t, Math.random()); n.stop(t + 0.2);
    }
    // hats
    if (s % 2 === 1) {
      const n = ctx.createBufferSource(); n.buffer = this.noiseBuf;
      const f = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 8000;
      const I = this.intensity || 0; const g = ctx.createGain(); env(g, (s % 4 === 3 ? 0.12 : 0.06) * (0.6 + I * 0.8), 0.05);
      n.connect(f); f.connect(g); g.connect(out); n.start(t, Math.random()); n.stop(t + 0.06);
    }
    // bass (offbeat 16ths)
    if (s % 4 !== 0) {
      const o = ctx.createOscillator(); o.type = 'sawtooth';
      o.frequency.value = mtof(root + (s === 14 ? 12 : 0));
      const f = ctx.createBiquadFilter(); f.type = 'lowpass';
      f.frequency.setValueAtTime(900, t); f.frequency.exponentialRampToValueAtTime(150, t + 0.1); f.Q.value = 6;
      const g = ctx.createGain(); env(g, 0.22, 0.12);
      o.connect(f); f.connect(g); g.connect(out); o.start(t); o.stop(t + 0.14);
    }
    // lead stabs when the style rank is high
    if ((this.intensity || 0) > 0.55 && (s === 0 || s === 6 || s === 10)) {
      for (const det of [-7, 7]) {
        const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = mtof(root + 48 + (s === 10 ? 3 : 0)); o.detune.value = det;
        const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.setValueAtTime(3200, t); f.frequency.exponentialRampToValueAtTime(600, t + 0.25);
        const g = ctx.createGain(); env(g, 0.035 * this.intensity, 0.3);
        o.connect(f); f.connect(g); g.connect(out); const rg = ctx.createGain(); rg.gain.value = 0.6; g.connect(rg); rg.connect(this.reverb);
        o.start(t); o.stop(t + 0.32);
      }
    }
    // arp
    if (s % 2 === 0) {
      const chord = [0, 3, 7, 10, 12, 7];
      const o = ctx.createOscillator(); o.type = 'square';
      o.frequency.value = mtof(root + 36 + chord[(i / 2) % chord.length | 0]);
      const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 2400;
      const g = ctx.createGain(); env(g, 0.03 + (this.intensity || 0) * 0.035, 0.18);
      o.connect(f); f.connect(g); g.connect(out);
      const rg = ctx.createGain(); rg.gain.value = 0.5; g.connect(rg); rg.connect(this.reverb);
      o.start(t); o.stop(t + 0.2);
    }
  }
}
