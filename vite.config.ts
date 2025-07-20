import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/2025-survey/',
  plugins: [
    vue({
      include: [/\.vue$/]
    })
  ],
  resolve: {
    alias: {
      '@': './'
    }
  },
  build: {
    chunkSizeWarningLimit: 1600,
    target: ['chrome58', 'ios11', 'es2015'],
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        report: resolve(__dirname, 'report/index.html')
      }
    }
  }
})
