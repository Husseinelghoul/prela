// Right-size + re-encode raster images in public/images to visually-lossless WebP.
//
// WHY: several source images were exported at absurd dimensions (e.g. a 5000×3333
// hero at 8.4 MB, a 7355×4137 "thumbnail"). They display far smaller, so capping
// the longest edge + WebP q82 cuts ~90% with no perceptible quality loss.
//
//   node scripts/optimize-images.mjs           # optimize (overwrites in place)
//   node scripts/optimize-images.mjs --dry     # report only, no writes
//
// Originals are backed up to scripts/images-full/ (not deployed) the first time
// each file is touched, so re-runs are safe and reversible.
import sharp from 'sharp';
import { readdir, stat, mkdir, copyFile, access } from 'fs/promises';
import { join, relative, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'public/images');
const BACKUP = join(ROOT, 'scripts/images-full');
const DRY = process.argv.includes('--dry');

const QUALITY = 85;                 // visually lossless for web photography
const maxEdgeFor = (p) =>
    /banner|breadcrumb|footer/.test(p) ? 2400 : 1600; // full-bleed vs content

async function walk(dir) {
    const out = [];
    for (const e of await readdir(dir, { withFileTypes: true })) {
        const full = join(dir, e.name);
        if (e.isDirectory()) out.push(...await walk(full));
        else if (/\.(webp|png|jpe?g)$/i.test(e.name)) out.push(full);
    }
    return out;
}

const exists = (p) => access(p).then(() => true).catch(() => false);
const kb = (n) => Math.round(n / 1024);

let before = 0, after = 0, changed = 0;
for (const file of await walk(SRC)) {
    const rel = relative(SRC, file);
    const maxEdge = maxEdgeFor(rel);
    const origSize = (await stat(file)).size;
    let img = sharp(file, { failOn: 'none' });
    const meta = await img.metadata();
    const longest = Math.max(meta.width ?? 0, meta.height ?? 0);
    const needsResize = longest > maxEdge;

    // Encode a candidate: resize if oversized, always re-encode as WebP q82.
    if (needsResize) img = img.resize({
        width: meta.width >= meta.height ? maxEdge : null,
        height: meta.height > meta.width ? maxEdge : null,
        withoutEnlargement: true,
    });
    const buf = await img.webp({ quality: QUALITY, effort: 6 }).toBuffer();

    before += origSize;
    // Keep the smaller of original/candidate (never regress).
    if (buf.length < origSize * 0.98) {
        after += buf.length;
        changed++;
        console.log(`${needsResize ? 'resize' : 're-enc'} ${rel}: ${meta.width}x${meta.height} ${kb(origSize)}KB -> ${kb(buf.length)}KB`);
        if (!DRY) {
            const bk = join(BACKUP, rel);
            if (!await exists(bk)) { await mkdir(dirname(bk), { recursive: true }); await copyFile(file, bk); }
            await sharp(buf).toFile(file);
        }
    } else {
        after += origSize;
    }
}
console.log(`\n${DRY ? '[DRY] ' : ''}Optimised ${changed} files: ${kb(before)}KB -> ${kb(after)}KB (saved ${kb(before - after)}KB, ${Math.round((1 - after / before) * 100)}%)`);
