import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const imagesToOptimize = [
    'public/images/about/01.webp',
    'public/images/about/02.webp',
    'public/images/about/03.webp',
    'public/images/about/why-choose-us.jpg',
    'public/images/blog/01.jpg',
    'public/images/blog/02.jpg',
    'public/images/blog/03.JPG',
    'public/images/logo/prela_logo.png',
    'public/images/footer/footer-bg.webp',
    'public/images/banner/repear.jpg',
    'public/images/banner/banner-bg-01.webp',
    'public/images/banner/banner-slider-bg-10.webp',
    'public/images/breadcrumb/portfolio-breadcrumb2.webp',
    'public/images/breadcrumb/portfolio-breadcrumb3.webp',
];

async function getFileSize(path) {
    const stats = await stat(path);
    return stats.size;
}

async function optimizeImage(imagePath) {
    try {
        const fullPath = join(__dirname, '..', imagePath);
        const ext = extname(imagePath).toLowerCase();

        console.log(`Optimizing: ${imagePath}`);

        const originalSize = await getFileSize(fullPath);

        // Determine output path
        let outputPath = fullPath;
        if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
            outputPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        }

        // Optimize and convert
        await sharp(fullPath)
            .webp({ quality: 85, effort: 6 })
            .toFile(outputPath + '.tmp');

        // Replace original with optimized
        await sharp(outputPath + '.tmp')
            .toFile(outputPath);

        // Clean up temp file
        const fs = await import('fs/promises');
        await fs.unlink(outputPath + '.tmp');

        const newSize = await getFileSize(outputPath);
        const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

        console.log(`  ✓ ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024 / 1024).toFixed(2)}MB (${savings}% reduction)`);

        if (outputPath !== fullPath) {
            console.log(`  → Converted to WebP: ${outputPath.replace(join(__dirname, '..'), '')}`);
        }
        console.log('');

    } catch (error) {
        console.error(`  ✗ Error optimizing ${imagePath}:`, error.message, '\n');
    }
}

async function main() {
    console.log('Starting image optimization...\n');

    for (const imagePath of imagesToOptimize) {
        await optimizeImage(imagePath);
    }

    console.log('Image optimization complete!');
}

main().catch(console.error);
