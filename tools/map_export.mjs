// Records what a map in src/maps.js builds (boxes, cylinders, ramps, pads, spawns) into the map-checker JSON.
// usage: node tools/map_export.mjs <mapId> > map.json
import { MAPS } from '../src/maps.js';
const id = process.argv[2], M = MAPS[id];
const solids = [], pads = [], spawns = [], zones = [];
const A = {
  half: 50, wallH: M.wallH || 12,
  box(x, y, z, w, h, d, key = 'block', ry = 0, o = {}) { if (o.collide !== false) solids.push({ type: 'box', x, z, w, d, h, y, ry, tag: key }); },
  cyl(x, y, z, r, h, key = 'block', o = {}) { if (o.collide !== false) solids.push({ type: 'cyl', x, z, r, h, y, tag: key }); },
  ramp(x, z, ry, width, len, h, y = 0) { solids.push({ type: 'ramp', x, z, ry, width, len, h, y, tag: 'ramp' }); },
  jumpPad(x, y, z, power = 22, r = 1.6) { pads.push({ x, z, r, to_height: y + power * power / 60, reach: 12 }); },
  boostPad() { }, deco() { }, logo() { }, addCover() { }, customMap() { },
  ring() { return { rotateX() { } }; },
  spawn(x, z, y = 0) { spawns.push({ x, z }); },
  high(x, y, z) { zones.push({ x, z, r: 4, label: 'high spawn' }); },
  animated: [], footprints: [], spawnGround: spawns, scene: { add() { } }, objects: [],
};
// THREE geometry calls inside build (deco helpers) need real THREE — maps.js imports it, so they run fine.
M.build(A);
const metrics = { player_radius: 0.4, eye_height: 1.6, step_height: 0.5, jump_height: 3.2, jump_distance: 9, run_speed: 11.5, weapon_range: 44, cover_height: 1.2, cover_reach: 3 };
console.log(JSON.stringify({ name: M.name, concept: M.desc, bounds: { x: [-50, 50], z: [-50, 50] }, walls: { height: M.wallH || 12, thickness: 2 }, metrics,
  targets: { cover_min: 0.5, spawn_exposure_max: 0.3, long_sight_frac_max: 0.15 },
  style: { floor: '#f1f2f4', tiers: ['#d9dbe0', '#b9bfca', '#8f9aab', '#5f6c80'], accent: '#' + M.accent.toString(16).padStart(6, '0') },
  solids, pads, spawns, objectives: [], pickups: [], zones }, null, 1));
