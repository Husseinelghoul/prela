// @ts-check
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
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
        compress({
            CSS: true,
            HTML: true,
            Image: false, // We'll handle images separately
            JavaScript: true,
            SVG: true,
        })
    ]
});
