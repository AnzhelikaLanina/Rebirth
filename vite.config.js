import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';

export default defineConfig({
  base: '/Rebirth/',
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        exportType: 'default',
      },
      include: ['**/*.svg', '**/*.svg?react'],
    }),
    viteCompression({ algorithm: 'brotliCompress' }),
    visualizer({
      open: true,
      filename: 'stats.html',
      template: 'treemap',
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';

          if (id.includes('src/pages')) return 'pages';
          if (id.includes('src/widgets')) return 'widgets';

          if (id.includes('src/shared/assets/images')) return 'images';
          if (id.includes('src/shared/assets/locales')) return 'locales';

          return 'misc';
        },
      },
    },
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
