import react from '@vitejs/plugin-react'

import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import path from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  root: path.join(__dirname, 'src'),
  plugins: [react()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        mainEntry: resolve(__dirname, 'mainEntry', 'index.html'),
        testEntry: resolve(__dirname, 'testEntry', 'index.html'),
      },
      output: {
        dir: 'dist', // Default output directory
        entryFileNames: '[name]/build.js', // Create separate build files for each app
        chunkFileNames: '[name].js', // Create separate chunk files for each app
        assetFileNames: '[name]/assets/[name].[ext]', // Create separate assets directory for each app
      },
    },
  },
})