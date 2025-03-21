import js from '@eslint/js';
import globals from 'globals';
import typescript from 'typescript-eslint';
import cypress from 'eslint-plugin-cypress/flat';

export default typescript.config(
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    ignores: ['target/'],
  },
  js.configs.recommended,
  {
    files: ['src/test/webapp/e2e/**/*.ts'],
    extends: [...typescript.configs.recommendedTypeChecked, cypress.configs.recommended],
    languageOptions: {
      parserOptions: {
        project: ['src/test/webapp/e2e/tsconfig.json'],
      },
    },
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
    },
  },
  ...typescript.configs.recommended.map(config => (config.name === 'typescript-eslint/base' ? config : { ...config, files: ['**/*.ts'] })),
  {
    files: ['src/*/webapp/**/*.ts'],
    languageOptions: {
      globals: { ...globals.browser },
    },
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
    },
  },
);
