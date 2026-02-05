/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    legacy()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',

    // ✔ Unit tests dentro de src
    include: ['src/**/*.spec.ts'],

    // ✔ NO ejecutar E2E
    exclude: ['tests/e2e/**']
  }
})
