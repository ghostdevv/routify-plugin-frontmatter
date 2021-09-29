import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { mdsvex } from 'mdsvex'
import routify from '@roxi/routify/vite-plugin'

export default defineConfig({
    clearScreen: false,

    plugins: [
        routify(),
        svelte({
            emitCss: true,
            extensions: ['.md', '.svelte'],
            preprocess: [mdsvex({ extension: 'md' })],
        }),
    ],

    server: { port: 1337 },
})
