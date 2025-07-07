import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '/Rebirth/',
  plugins: [react(),svgr({
    svgrOptions: {
      icon: true,
      exportType: 'default',
    },
    include: ['**/*.svg', '**/*.svg?react'],
  }),],
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
