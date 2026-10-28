import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { buildWeaponModel, shardStar } from '../src/weapons3d.js';
import { WEAPONS, WEAPON_IDS } from '../src/disc.js';
const r = new THREE.WebGLRenderer({ antialias: true }); r.setSize(1500, 1000); r.toneMapping = THREE.NeutralToneMapping; document.body.appendChild(r.domElement);
const sc = new THREE.Scene(); sc.background = new THREE.Color(0xe9ebee);
const pm = new THREE.PMREMGenerator(r); sc.environment = pm.fromScene(new RoomEnvironment(), 0.03).texture;
sc.add(new THREE.HemisphereLight(0xffffff, 0x99a0aa, 1)); const d = new THREE.DirectionalLight(0xffffff, 2); d.position.set(2, 3, 5); sc.add(d);
const cam = new THREE.OrthographicCamera(-3, 3, 2, -2, 0.1, 50); cam.position.set(0, 0, 10); cam.lookAt(0, 0, 0);
const tilt = +(location.hash.slice(1) || 0);
WEAPON_IDS.forEach((id, i) => {
  const w = WEAPONS[id], m = buildWeaponModel(0xff5a1f, w, 1, 1.2, 1, 'std');
  m.position.set(-2 + (i % 3) * 2, 1.3 - Math.floor(i / 3) * 1.35, 0); m.rotation.x = tilt; m.rotation.y = tilt * 0.6; sc.add(m);
});
const st = shardStar(0xff5a1f, 1.2); st.position.set(2.7, -1.75, 0); st.scale.setScalar(2); st.children[0].rotation.x = 0; sc.add(st);
r.render(sc, cam); window.done = true;
