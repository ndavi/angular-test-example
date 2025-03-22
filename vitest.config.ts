import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: 'node',
    include: ['src/app/**/*.spec.ts'],
    globals: true,
    deps: {
      // Enable CommonJS interoperability
      interopDefault: true,
    },
  },
  build: {
    commonjsOptions: { transformMixedEsModules: true }, // Change
  },
});
