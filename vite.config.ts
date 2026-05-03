import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  base: '/metronome-app/',
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [path.resolve(__dirname, 'node_modules')],
      },
    },
  },
  worker: {
    format: 'es',
  },
  build: {
    sourcemap: true,
    outDir: 'dist',
  },
  server: {
    port: 3000,
  },
});
