import { defineConfig } from 'vite';
import * as path from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, `src/lib/index.ts`),
      fileName: format => `vue-virtual-keyboard.${format}.js`,
      formats: [
        `es`,
        `umd`,
      ],
      name: `vue-virtual-keyboard`,
    },
    outDir: `./dist`,
    rollupOptions: {
      external: [`vue`],
      output: {
        globals: {
          vue: `Vue`,
        },
      },
    },
  },
  define: { 'process.env': {} },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, `./src`),
    },
  },
  server: {
    open: true,
    port: 9090,
  },
});
