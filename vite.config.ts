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
        // skeleton-scss uses legacy Sass APIs; silence until it's replaced
        silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'slash-div'],
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
