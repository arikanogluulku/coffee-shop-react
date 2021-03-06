module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['babel', 'import', 'jsx-a11y'],
  rules: {
    'linebreak-style': 0,
    'no-console': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/destructuring-assignment': [0, 'always'],
    'import/no-named-as-default ': 0,
    'class-methods-use-this': 0,
    'import/prefer-default-export': 0,
    'react/prop-types ': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-array-index-key': 0,
    'prefer-const': 0,
    'react/no-children-prop': 0,
  },
};
