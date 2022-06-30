import preact from '@preact/preset-vite';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  resolve: {
    alias: [{ find: '@', replacement: path.join(__dirname, 'src') }]
  },
  plugins: [preact()]
});
