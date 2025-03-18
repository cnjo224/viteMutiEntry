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
    outDir: path.join(__dirname, 'dist'),
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src', 'index.html'),
        //nested: resolve(__dirname, 'nested/index.html'),
      },
    },
  },
})