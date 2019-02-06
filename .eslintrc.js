module.exports = {
  extends: ['mcansh/typescript'],
  rules: {
    'no-undef': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
      },
    ],
  },
};
