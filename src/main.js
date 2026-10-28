// Boot: read the player's own files from public/custom first (models, images, styles), then start the game.
import { loadCustom, registerMaps, applyCustomUI } from './custom.js';
import { MAPS, MAP_IDS } from './maps.js';

const L = document.getElementById('loading');
loadCustom((n, all) => { if (L && all) L.dataset.custom = `커스텀 파일 ${n}/${all}`; })
  .catch(e => console.warn('[custom]', e))
  .then(() => { try { registerMaps(MAPS, MAP_IDS); applyCustomUI(); } catch (e) { console.warn('[custom]', e); } })
  .then(() => import('./app.js'));
