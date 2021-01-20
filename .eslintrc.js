module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ['markdown'],
  overrides: [
    {
      files: ['*.md', '*.markdown'],
      processor: 'markdown/markdown',
      rules: {
        'no-console': 'off',
      },
    },
  ],
  rules: {
    // 要求使用分号代替 ASI (semi)
    semi: ['error', 'always'],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
  },
};
