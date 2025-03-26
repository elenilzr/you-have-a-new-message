import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 2,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/script-indent': ['error', 2, { baseIndent: 1, switchCase: true }],
    'vue/html-indent': ['error', 2, { baseIndent: 1 }],
    'indent': 'off',
    'style/indent': 'off',
    'ts/consistent-type-definitions': 'off',
  },
})
