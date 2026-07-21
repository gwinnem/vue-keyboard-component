import { defineConfig } from 'vite';
import * as path from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: `modern-compiler`,
      },
    },
  },
  build: {
    emptyOutDir: true,
    lib: {
      cssFileName: `style`,
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
        exports: `named`,
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
    open: !process.env.CI,
    port: 9090,
  },
  test: {
    coverage: {
      exclude: [
        `src/core/ms-keyboards/**`,
        `src/**/*.d.ts`,
      ],
      include: [
        `src/core/enums/**`,
        `src/core/helpers/**`,
        `src/core/keyboard-layouts/**`,
        `src/core/layouts/**`,
        `src/lib/components/**`,
      ],
      provider: `v8`,
      thresholds: {
        branches: 98,
        functions: 100,
        lines: 99,
        statements: 99,
      },
    },
    environment: `jsdom`,
    exclude: [
      `**/node_modules/**`,
      `**/dist/**`,
      `e2e/**`,
    ],
    globals: true,
    setupFiles: [`./src/test-setup.ts`],
  },
});
