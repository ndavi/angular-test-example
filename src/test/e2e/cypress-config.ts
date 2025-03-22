import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:9000',
    specPattern: 'src/test/e2e/**/*.(spec|cy).ts',
    fixturesFolder: false,
    supportFile: false,
    video: false,
  },
});
