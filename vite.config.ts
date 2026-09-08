import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: './',

  plugins: [
    react(),
    tailwindcss(),

    VitePWA({
      registerType: 'autoUpdate',

      manifest: {
        name: 'Ephore',
        short_name: 'Ephore',
        description: 'Application Ephore',
        theme_color: '#eb2d86',
        background_color: '#eb2d86',
        display: 'standalone',

        icons: [
          {
            src: 'noga.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'noga.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        splash: resolve(__dirname, 'splash.html'),
      },
    },
  },

  server: {
    port: 5173,
    strictPort: true,
  },
})