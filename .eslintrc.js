module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: [ 'react', 'react-hooks', 'import' ],
  extends: [
    '@meteorjs/eslint-config-meteor',
  ],
  globals: {
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`.
      // If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' },
    ],
  },
  rules: {
    'object-curly-spacing': [ 'error', 'always', { objectsInObjects: false, arraysInObjects: false }],
    'space-in-parens': [ 'error', 'always', { exceptions: [ '{}', '[]', '()', 'empty' ]}],
    'array-bracket-spacing': [ 'error', 'always', { objectsInArrays: false, arraysInArrays: false }],
    'computed-property-spacing': [ 'error', 'always' ],
    'max-len': [ 'error', { code: 150, tabWidth: 2 }],
    'object-curly-newline': [ 'error', { ObjectExpression: { consistent: true }}],
    'no-nested-ternary': 'off',
    'no-underscore-dangle': [ 'error', { allow: [ '_id' ]}],
    'arrow-parens': [ 'error', 'as-needed' ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'no-unused-vars': [ 'error', { args: 'none', ignoreRestSiblings: true }],
    'no-console': [ 'off', { allow: [ 'warn', 'error' ]}],
    'import/prefer-default-export': [ 'off' ],
    'react/jsx-one-expression-per-line': [ 'warn' ],
    'class-methods-use-this': [ 'off' ],
    'react/destructuring-assignment': [ 'off' ],
    'jsx-a11y/label-has-for': [ 'off' ],
    'jsx-a11y/label-has-associated-control': [ 'error', {}],
    'no-param-reassign': [ 'error', { props: false }],
    'react/forbid-prop-types': [ 'warn', { forbid: [ 'object', 'array' ], checkContextTypes: true, checkChildContextTypes: true }],
    'no-return-assign': [ 'off' ],
    'template-curly-spacing': 'off',
    indent: [ 'error', 2, {
      ignoredNodes: [ 'TemplateLiteral' ],
      SwitchCase: 1,
    }],
    'react/jsx-props-no-spreading': [ 'off' ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-curly-newline': 'off',
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/default': 'error',
    'import/no-self-import': 'error',
    'react/react-in-jsx-scope': 'off',
  },
};
