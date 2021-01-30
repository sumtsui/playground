module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  env: {
    node: true,
    browser: true,
    es2020: true,
    jest: true,
  },
  reportUnusedDisableDirectives: true,
  root: true,
  rules: {
    '@typescript-eslint/indent': ['error', 2],
    // 'newline-per-chained-call': 'error',
    'keyword-spacing': 2,
    'no-unused-vars': 'warn',
    'quote-props': ['error', 'consistent-as-needed'],
    'semi': 'warn',
    'no-undef': 'error',
    'no-global-assign': 'error',
    'quotes': ['warn', 'single', { avoidEscape: true }],
    'comma-dangle': ['error', 'only-multiline'],
    'eqeqeq': ['error', 'always'],
    'no-unused-expressions': [
      'warn',
      {
        allowTaggedTemplates: true,
        allowTernary: true,
        allowShortCircuit: true,
      },
    ],
    'no-console': 0,
    '@typescript-eslint/no-var-requires': 0,
  },
  parserOptions: {
    sourceType: 'module',
  },
};
