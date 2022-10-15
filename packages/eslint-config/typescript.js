module.exports = {
  root: true,
  extends: [require.resolve('./base'), 'prettier'],

  overrides: [
    {
      files: ['**/*.ts?(x)'],

      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],

      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],

      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: 'tsconfig.json',
        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: true,
      },

      rules: {
        // TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
        'default-case': 'off',

        // TypeScript compilation already ensures that named imports exist in the referenced module
        'import/named': 'off',

        // @TYPESCRIPT PLUGIN
        '@typescript-eslint/ban-ts-comment': 'off',

        '@typescript-eslint/consistent-type-assertions': 'warn',

        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': 'error',

        '@typescript-eslint/member-ordering': 'warn',

        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'warn',

        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'error',

        '@typescript-eslint/no-shadow': [
          'error',
          {
            hoist: 'all',
          },
        ],

        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],

        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'warn',
          {
            functions: false,
            classes: false,
            variables: false,
            typedefs: false,
          },
        ],

        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',

        '@typescript-eslint/prefer-for-of': 'warn',

        '@typescript-eslint/type-annotation-spacing': 'warn',
      },
    },
  ],
}
