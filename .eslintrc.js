module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  plugins: ['replace-hooks', 'import'],
  settings: {
    //自动发现React的版本，从而进行规范react代码
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  parserOptions: {
    //指定ESLint可以解析JSX语法
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-default-export': 2,
    'import/no-duplicates': 2,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
    'replace-hooks/no-forbidden-hooks': [
      'error',
      { useState: { tip: 'useSafeState', dependency: '@td-design/rn-hooks' } },
    ],
  },
};
