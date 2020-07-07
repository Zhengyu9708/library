// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  // 全局配置
  globals: {
    conf: false,
    WebVideoCtrl: false
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-cond-assign': [2, 'always'],
    'no-constant-condition': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-func-assign': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'use-isnan': 2,
    'valid-typeof': 2,
    'eqeqeq': [2, 'always'],
    'no-caller': 2,
    'no-eval': 2,
    'no-redeclare': 2,
    'no-undef': 2,
    'no-unused-vars': 1,
    'no-use-before-define': 2,
    'comma-dangle': [1, 'never'],
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'indent': 'off',
    'no-tabs':'off'
  }
}
