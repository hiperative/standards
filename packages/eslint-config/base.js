module.exports = {
  extends: ['eslint:recommended', 'plugin:promise/recommended'],

  env: {
    es2020: true,
    node: true,
  },

  plugins: ['import', 'promise'],

  rules: {
    // BEST PRACTICES

    // treat var statements as if they were block scoped
    'block-scoped-var': 'error',

    // specify the maximum cyclomatic complexity allowed in a program
    complexity: ['off', 11],

    // require return statements to either always or never specify values
    'consistent-return': 'error',

    // specify curly brace conventions for all control statements
    curly: ['error', 'multi-line'],

    // require default case in switch statements
    'default-case': ['error', { commentPattern: '^no default$' }],

    // enforces consistent newlines before or after dots
    // https://eslint.org/docs/rules/dot-location
    'dot-location': ['error', 'property'],

    // encourages use of dot notation whenever possible
    'dot-notation': ['error', { allowKeywords: true }],

    // require the use of === and !==
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: ['warn', 'smart'],

    // disallow use of the Array constructor
    'no-array-constructor': 'warn',

    // disallow Unnecessary Labels
    // https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'error',

    // disallow use of arguments.caller or arguments.callee
    'no-caller': 'error',

    // disallow else after a return in an if
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': ['error', { allowElseIf: false }],

    // disallow use of eval()
    'no-eval': 'error',

    // disallow adding to native types
    'no-extend-native': 'error',

    // disallow unnecessary function binding
    'no-extra-bind': 2,

    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    'no-octal-escape': 'error',

    // disallow unmodified conditions of loops
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'warn',

    // disallow usage of expressions in statement position
    'no-unused-expressions': [
      'error',
      {
        // Allow eg. optionConfigured && doIt();
        allowShortCircuit: true,
        // Allow eg. optionConfigured ? doIt() : null;
        allowTernary: true,
        // Allow eg. taggedTemplateStringFunctionWithSideEffects`yup`;
        allowTaggedTemplates: true,
      },
    ],

    'no-use-before-define': [
      'warn',
      {
        functions: false,
        classes: false,
        variables: false,
      },
    ],

    // disallow unnecessary constructor
    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'error',

    // IMPORT PLUGIN
    'import/no-unresolved': 'warn',

    'import/named': 'warn',

    'import/namespace': 'warn',

    'import/export': 'warn',

    'import/no-extraneous-dependencies': 'warn',

    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
      },
    ],
  },
}
