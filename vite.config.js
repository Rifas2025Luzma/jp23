import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/jp23/',
  server: {
    open: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/scss/variables.scss";`
      }
    }
  }
});