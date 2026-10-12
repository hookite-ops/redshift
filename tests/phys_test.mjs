import * as THREE from 'three';
import { CollisionWorld } from '../src/physics.js';
const W = new CollisionWorld(100, 4);
const box = new THREE.BoxGeometry(4, 3, 4); const m = new THREE.Matrix4().makeTranslation(10, 1.5, 0);
W.addGeometry(box, m);
// ramp: box rotated 20deg about z, at x=-10
const ramp = new THREE.BoxGeometry(10, 0.5, 4); const rm = new THREE.Matrix4().compose(new THREE.Vector3(-10, 1.5, 0), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, 0.35)), new THREE.Vector3(1,1,1));
W.addGeometry(ramp, rm);
W.build();
console.log('tris', W.count);
const c = [];
let p = new THREE.Vector3(10, 2.9, 0); W.collideCapsule(p, 0.4, 1.8, c); console.log('on top', p.toArray().map(v=>v.toFixed(3)), c.map(k=>[k.x,k.y,k.z].map(v=>v.toFixed(2))));
p = new THREE.Vector3(8.2, 0.5, 0); W.collideCapsule(p, 0.4, 1.8, c); console.log('side', p.toArray().map(v=>v.toFixed(3)), c.map(k=>[k.x,k.y,k.z].map(v=>v.toFixed(2))));
p = new THREE.Vector3(5, -0.2, 3); W.collideCapsule(p, 0.4, 1.8, c); console.log('ground', p.toArray().map(v=>v.toFixed(3)));
p = new THREE.Vector3(-10, 1.6, 0); W.collideCapsule(p, 0.4, 1.8, c); console.log('ramp', p.toArray().map(v=>v.toFixed(3)), c.map(k=>[k.x,k.y,k.z].map(v=>v.toFixed(2))));
let h = W.raycast(0, 1, 0, 1, 0, 0, 50); console.log('ray x', h && h.t.toFixed(3), h && [h.nx,h.ny,h.nz]);
h = W.raycast(10, 10, 0, 0, -1, 0, 50); console.log('ray down', h && h.t.toFixed(3), h && [h.nx,h.ny,h.nz]);
h = W.raycast(30, 1, 30, -0.7071, 0, -0.7071, 80); console.log('ray diag', h && h.t.toFixed(3));
h = W.raycast(0, 5, 0, 0, -0.2, -0.98, 80); console.log('ray ground', h && h.t.toFixed(3), h && h.y.toFixed(3));
console.log('free', W.capsuleFree(10, 3.01, 0, 0.4, 1.8), W.capsuleFree(10, 2.5, 0, 0.4, 1.8));
// perf
let t0=performance.now(); for(let i=0;i<100000;i++){ p.set(10+Math.random()*0.5, 2.8, Math.random()); W.collideCapsule(p,0.4,1.8,c);} console.log('100k collide ms', (performance.now()-t0).toFixed(0));
