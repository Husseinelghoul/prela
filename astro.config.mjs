// @ts-check
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    // Canonical origin — powers correct canonical/OG URLs and the auto-generated sitemap.
    site: 'https://prela-automobile.ch',
    output: 'static',
    build: {
        inlineStylesheets: 'auto',
    },
    image: {
        service: {
            entrypoint: 'astro/assets/services/sharp'
        }
    },
    vite: {
        build: {
            cssMinify: true,
            minify: 'terser',
            terserOptions: {
                compress: {
                    drop_console: true,
                }
            }
        }
    },
    integrations: [
        sitemap({
            // Keep the "thank you" confirmation pages (DE + FR) out of the index.
            filter: (page) => !page.includes('/danke') && !page.includes('/merci'),
        }),
        compress({
            CSS: true,
            HTML: true,
            Image: false, // We'll handle images separately
            JavaScript: true,
            SVG: true,
        })
    ]
});
