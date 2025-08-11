// vite.config.js
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/', // keep this since you have a custom domain
  build: {
    outDir: 'docs', // ⬅ GitHub Pages will use this
  },
  server: {
    port: 3000,
    open: true
  },
  preview: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  css: {
    preprocessorOptions: {
      css: {
        charset: false
      }
    }
  }
});
