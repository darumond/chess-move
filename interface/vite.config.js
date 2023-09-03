import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  outputDir: path.resolve(__dirname, "../chessengine/public"),
  server: {
    proxy: {
      '/chessengine': {
        target: 'http://localhost:8000',
      },
  },
},
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    global: {},
  },
})

