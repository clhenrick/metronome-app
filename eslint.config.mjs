import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import vitest from '@vitest/eslint-plugin';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  {
    ignores: [
      'dist/**',
      // legacy Web Audio API polyfill — slated for deletion in Phase 7
      'src/utils/monkeypatch.ts',
    ],
  },

  // Source and test files
  {
    files: ['src/**/*.{ts,tsx}', 'tests/**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'], // React 18 — no import React needed for JSX
    ],
    plugins: {
      'react-hooks': reactHooks,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off', // TypeScript handles prop types
      '@typescript-eslint/no-explicit-any': 'warn',
      // Allow _-prefixed names as intentionally unused (e.g. destructured-to-omit)
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        },
      ],
    },
  },

  // Accessibility rules — full recommended severity (errors)
  {
    files: ['src/**/*.{ts,tsx}'],
    ...jsxA11y.flatConfigs.recommended,
  },

  // Vitest globals and rules for test files
  {
    files: ['tests/**/*.{ts,tsx}'],
    ...vitest.configs.recommended,
  },

  // Prettier — disables conflicting formatting rules (must be last)
  prettierConfig
);
