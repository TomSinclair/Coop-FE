module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  parser: 'babel-eslint',
  // extends: ['eslint:recommended', 'plugin:react/recommended'],
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      modules: true
    },
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'no-console': 'off',
    'linebreak-style': ['error', 'unix'],
    'no-unused-vars': ['error', { args: 'none' }],
    'react/jsx-uses-vars': 2,
    'react/jsx-uses-react': 2,
    'react/react-in-jsx-scope': 2,
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  }
};
