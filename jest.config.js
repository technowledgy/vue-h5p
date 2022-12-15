import path from 'path'
import { ResourceLoader } from 'jsdom'

class LocalFileLoader extends ResourceLoader {
  fetch (url, options) {
    return super.fetch(url.replace('http://localhost', path.join(path.dirname(import.meta.url), 'tests', 'mocks')), options)
  }
}

export default {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**'
  ],
  coverageProvider: 'v8',
  coverageReporters: [
    'lcov',
    'text-summary'
  ],
  moduleFileExtensions: [
    'js'
  ],
  moduleNameMapper: {
    '^../frame/(.*)\\?raw$': '<rootDir>/frame/$1',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: [
    '<rootDir>/tests/setup.js'
  ],
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    resources: new LocalFileLoader(),
    runScripts: 'dangerously'
  },
  testMatch: [
    '**/tests/unit/**/*.spec.js'
  ],
  transform: {
    '/frame/': '<rootDir>/jest-raw-loader.js',
    '^.+\\.vue$': '@vue/vue2-jest',
    '^.+\\.js$': 'babel-jest'
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}
