module.exports = {
  extends: '@mate-academy/eslint-config',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Вимикаємо вимогу 'use strict', бо в модулях він автоматичний
    'strict': 'off',
  },
};
