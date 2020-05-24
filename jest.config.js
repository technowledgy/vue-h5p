module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**'
  ],
  coverageReporters: [
    'lcov',
    'text-summary'
  ],
  setupFiles: ['<rootDir>/tests/fetch.setup.js']
}
