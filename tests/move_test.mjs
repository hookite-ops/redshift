import * as THREE from 'three';
import { CollisionWorld } from '../src/physics.js';
import { uvBox, wedge } from '../src/geom.js';
import { Player, T } from '../src/player.js';
const col = new CollisionWorld(200, 4);
const add = (g, x, y, z, ry = 0) => { const m = new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, ry, 0)), new THREE.Vector3(1,1,1)); col.addGeometry(g, m); };
add(uvBox(1, 12, 60), 20, 6, 0);         // long wall at x=20 (face at 19.5)
add(uvBox(10, 1.4, 10), -20, 0.7, 0);    // low block (mantle) top 1.4
add(wedge(8, 30, 6), 0, 0, 40, Math.PI); // ramp going -z: from z=40 (h0) rising to z=10 (h6)
add(uvBox(10, 6, 10), 0, 3, 5);          // platform at top of ramp (z 0..10, top 6)
add(uvBox(20, 40, 2), 0, 20, -60);       // tall wall for climb/grapple at z=-60
col.build();
const ev = new Proxy({}, { get: (t, k) => (...a) => { log.push(k); } });
const log = [];
const map = { col, jumpPads: [], boostPads: [] };
const P = new Player(map, ev);
const dt = 1 / 120;
const I = (o = {}) => ({ fwd: 0, right: 0, jumpPressed: false, jumpHeld: false, crouch: false, dashPressed: false, grapplePressed: false, grappleHeld: false, autoHop: true, ...o });
function run(sec, inp, each) { for (let t = 0; t < sec; t += dt) { const i = typeof inp === 'function' ? inp(t) : inp; P.tick(dt, i, {}); each && each(t); } }
const st = (l) => console.log(l.padEnd(14), 'pos', P.pos.toArray().map(v => v.toFixed(2)).join(','), 'hs', P.hSpeed.toFixed(2), 'vy', P.vel.y.toFixed(2), P.state, P.grounded ? 'G' : '-');

P.reset(new THREE.Vector3(-60, 0, 60), Math.PI / 2); // facing -x? yaw=pi/2 -> fwd = (-1,0,0)
run(0.5, I()); st('idle');
run(1.5, I({ fwd: 1 })); st('run 1.5s');
// slide
run(0.05, I({ fwd: 1, crouch: true })); st('slide start');
run(1.0, I({ fwd: 1, crouch: true })); st('slide 1s');
run(0.5, I({ fwd: 1 }));
// bhop strafe: hold jump, strafe right + turn right
P.reset(new THREE.Vector3(-80, 0, 80), Math.PI / 2); run(1, I({ fwd: 1 }));
let maxhs = 0;
run(6, (t) => { const ph = Math.floor(t / 0.6) % 2; P.yaw += (ph ? 1 : -1) * 1.6 * dt; return I({ right: ph ? -1 : 1, jumpHeld: true, autoHop: true }); }, () => maxhs = Math.max(maxhs, P.hSpeed));
st('bhop 6s'); console.log('  max hs', maxhs.toFixed(2));
// ramp slide down: start on platform top, face +z (yaw = pi → fwd (0,0,1))
P.reset(new THREE.Vector3(0, 6.05, 8), Math.PI); run(0.3, I());
st('on platform');
run(0.6, I({ fwd: 1 })); st('walk to ramp');
run(0.05, I({ fwd: 1, crouch: true }));
run(2.0, I({ fwd: 0, crouch: true })); st('ramp slide 2s');
// wallrun: wall at x=19.5 face. Run along +z near wall, jump, hold W.
P.reset(new THREE.Vector3(17.5, 0, -25), Math.PI); run(1.0, I({ fwd: 1, right: -1 }));
run(0.02, I({ fwd: 1, right: -1, jumpPressed: true, jumpHeld: true })); run(0.2, I({ fwd: 1, right: -1 }));
let wrT = 0, maxY = 0; run(1.2, I({ fwd: 1 }), () => { if (P.state === 'wall') wrT += dt; maxY = Math.max(maxY, P.pos.y); }); st('wallrun'); console.log('  maxY', maxY.toFixed(2)); console.log('  wall time', wrT.toFixed(2));
run(0.02, I({ fwd: 1, jumpPressed: true })); st('walljump');
run(0.3, I({ fwd: 1 })); st('after wj');
// mantle onto low block: block x -25..-15, top 1.4. Approach from x=-8 moving -x
P.reset(new THREE.Vector3(-8, 0, 0), Math.PI / 2); log.length = 0;
run(1.0, I({ fwd: 1 })); st('mantle?'); console.log('  events', [...new Set(log)].join(' '));
// climb: tall wall at z=-59 face. Approach from z=-50 moving -z, jump at wall
P.reset(new THREE.Vector3(0, 0, -54), 0); run(0.3, I({ fwd: 1 }));
run(0.02, I({ fwd: 1, jumpPressed: true, jumpHeld: true }));
log.length = 0; let cy=0; run(0.6, I({ fwd: 1 }), ()=>cy=Math.max(cy,P.pos.y)); st('climb'); console.log('  climb maxY', cy.toFixed(2)); console.log('  events', [...new Set(log)].join(' '));
// grapple to the tall wall from far
P.reset(new THREE.Vector3(0, 0, -20), 0); P.pitch = 0.3; log.length = 0;
run(1/120, I({ grapplePressed: true, grappleHeld: true }));
run(1.0, I({ grappleHeld: true })); st('grapple'); console.log('  events', [...new Set(log)].join(' '));
// dash
P.reset(new THREE.Vector3(-60, 0, -60), 0); run(0.5, I({ fwd: 1 }));
run(1/120, I({ fwd: 1, dashPressed: true })); run(0.13, I({ fwd: 1 })); st('dash end');
run(0.5, I({ fwd: 1 })); st('dash +0.5');
// slide-landing: fall from 12m crouched
P.reset(new THREE.Vector3(-60, 12, -90), 0); P.vel.set(0, 0, -10); run(1.5, I({ crouch: true }), () => {}); st('slide land');
console.log('--- wj debug');
P.reset(new THREE.Vector3(17.5, 0, -25), Math.PI); run(1.0, I({ fwd: 1, right: -1 }));
run(0.02, I({ fwd: 1, right: -1, jumpPressed: true, jumpHeld: true })); run(0.5, I({ fwd: 1 }));
run(1/120, I({ fwd: 1, jumpPressed: true })); 
for (let i=0;i<8;i++){ run(1/30, I({ fwd: 1 })); console.log(P.state, P.vel.toArray().map(v=>v.toFixed(2)).join(','), P.pos.x.toFixed(2)); }
