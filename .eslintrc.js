module.exports = {
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es6: true,
    amd: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
  },
  extends: 'eslint:recommended',
  rules: {
    indent: 0,
    'linebreak-style': 0,
    quotes: ['error', 'single'],
    semi: 0,
  },
};
