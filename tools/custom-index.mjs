// Writes public/custom/index.json (the list of your custom files) for hosts that can't list folders
// (the APK/EXE builds, plain static hosting). The Node server lists the folder live, so this is only a fallback.
import fs from 'node:fs';
import path from 'node:path';
const DIR = path.resolve('public/custom');
const EXT = /\.(glb|gltf|bin|fbx|obj|mtl|png|jpe?g|webp|gif|svg|css|json|woff2?|ttf|otf|ktx2)$/i;
const out = [];
const walk = (dir, rel, depth) => {
  let list = []; try { list = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
  for (const e of list) {
    if (e.name.startsWith('.')) continue;
    const r = rel ? rel + '/' + e.name : e.name;
    if (e.isDirectory() && depth < 4) walk(path.join(dir, e.name), r, depth + 1);
    else if (e.isFile() && EXT.test(e.name) && r !== 'index.json') out.push(r);
  }
};
walk(DIR, '', 0);
fs.mkdirSync(DIR, { recursive: true });
fs.writeFileSync(path.join(DIR, 'index.json'), JSON.stringify({ files: out.sort() }, null, 1));
console.log(`custom: ${out.length} file(s)`);
