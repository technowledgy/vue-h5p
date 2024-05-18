import { FlatCompat } from '@eslint/eslintrc'
import globals from 'globals'
import vue from 'eslint-plugin-vue'

const compat = new FlatCompat()

export default [
  {
    ignores: [
      'vendor/**',
      'frame/**',
      'dist/**',
      '**/public/**',
      'package.json.cjs'
    ]
  },
  ...compat.extends('@vue/standard'),
  ...vue.configs['flat/vue2-recommended'],
  {
    files: ['**/*.js', '**/*.vue'],
    languageOptions: {
    },
    settings: {
      jest: {
        version: 29
      }
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'vue/multi-word-component-names': 'off'
    }
  },
  {
    files: ['**/*.spec.js'],
    languageOptions: {
      globals: globals.jest
    }
  }
]
