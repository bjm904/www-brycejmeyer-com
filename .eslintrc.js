// Must be CommonJS Module becasue this is used outside of webpack
module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:consistent-default-export-name/fixed',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-underscore-dangle': 'off',
    'sort-imports': ['error', { allowSeparatedGroups: true, ignoreCase: true }],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:consistent-default-export-name/fixed',
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      rules: {
        'no-underscore-dangle': 'off',
        'sort-imports': ['error', { allowSeparatedGroups: true, ignoreCase: true }],
        '@typescript-eslint/explicit-function-return-type': 'error',
        'react/jsx-key': 'error',
        'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
      },
    },
  ],
};
