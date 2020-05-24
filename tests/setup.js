import fetchMock from 'jest-fetch-mock'

fetchMock.enableFetchMocks()
fetchMock.doMock(req => {
  try {
    return Promise.resolve({
      status: 200,
      body: JSON.stringify(require(`./mocks/${req.url}`))
    })
  } catch {
    return Promise.resolve({
      status: 404
    })
  }
})

// only mock global Vue instance for index file
if (globalThis.jasmine.testPath.includes('index.spec.js')) {
  Object.defineProperty(globalThis, 'Vue', {
    writable: true,
    value: {
      use: jest.fn()
    }
  })
}

jest.mock('!to-string-loader!css-loader!../vendor/h5p/styles/h5p.css', () => {
  return '/* MOCKED_FRAME_CSS */'
}, {
  virtual: true
})

jest.mock('!raw-loader!../frame/frame', () => {
  return '/* MOCKED_FRAME_JS */'
}, {
  virtual: true
})
