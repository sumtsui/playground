module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
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
    'newline-per-chained-call': [1, {ignoreChainWithDepth: 1}],
    '@typescript-eslint/indent': ['error', 2],
    'keyword-spacing': 2,
    'no-unused-vars': 0,
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
