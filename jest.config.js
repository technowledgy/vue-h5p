export default {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**'
  ],
  coverageReporters: [
    'lcov',
    'text-summary'
  ],
  moduleFileExtensions: [
    'js'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: [
    '<rootDir>/tests/setup.js'
  ],
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testEnvironment: 'jsdom',
  testMatch: [
    '**/tests/unit/**/*.spec.js'
  ],
  transform: {
    '^.+\\.vue$': '@vue/vue2-jest',
    '^.+\\.js$': 'babel-jest'
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}
