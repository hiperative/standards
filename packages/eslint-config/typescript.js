module.exports = {
  root: true,
  extends: [
    require.resolve('./base'),
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'prettier/@typescript-eslint',
  ],

  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint'],

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    // typescript-eslint specific options
    warnOnUnsupportedTypeScriptVersion: true,
  },

  rules: {
    // TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
    'default-case': 'off',

    // Uses @typescript-eslint/dot-notation instead
    'dot-notation': 'off',

    // TypeScript compilation already ensures that named imports exist in the referenced module
    'import/named': 'off',

    // @TYPESCRIPT PLUGIN
    '@typescript-eslint/ban-ts-comment': 'off',

    '@typescript-eslint/consistent-type-assertions': 'error',

    '@typescript-eslint/dot-notation': 'error',

    '@typescript-eslint/member-ordering': 'warn',

    '@typescript-eslint/no-shadow': [
      'warn',
      {
        hoist: 'all',
      },
    ],

    '@typescript-eslint/no-unused-expressions': 'warn',

    '@typescript-eslint/prefer-for-of': 'warn',
  },
}
