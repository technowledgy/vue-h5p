import 'regenerator-runtime/runtime'
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
      status: 404,
      body: JSON.stringify({ message: 'Not Found' })
    })
  }
})

jest.mock('../frame/style?raw', () => {
  return '/* MOCKED_FRAME_CSS */'
}, {
  virtual: true
})

jest.mock('../frame/script.es?raw', () => {
  return '/* MOCKED_FRAME_JS */'
}, {
  virtual: true
})
