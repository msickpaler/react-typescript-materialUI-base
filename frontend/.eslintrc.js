module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // 追記
    'prettier/@typescript-eslint', // 追記
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    rules: {
      'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],
      // note you must disable the base rule as it can report incorrect errors
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {},
  },
};
