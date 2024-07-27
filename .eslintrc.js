module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended'
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      'react',
      'react-hooks',
    ],
    rules: {
      'react-hooks/exhaustive-deps': 'off',
      'react/no-unescaped-entities': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'no-unused-vars': 'off',
      'react/jsx-key': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/no-children-prop': 'off',
      'no-case-declarations': 'off',
      'no-extra-semi': 'off',
      'react/no-find-dom-node': 'off',
      'no-prototype-builtins': 'off'
      // Add other rules as needed
    },
  };
  