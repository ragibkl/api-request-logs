module.exports = {
  env: {
    es2021: true,
    jest: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.ts', '**/*.test.tsx'] }],
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'ignorePackages', { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }],
  },
  settings: {
    'import/resolver': { node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] } },
  },
};
