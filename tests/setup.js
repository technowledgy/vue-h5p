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
      status: 404
    })
  }
})

jest.mock('frame/style', () => {
  return '/* MOCKED_FRAME_CSS */'
}, {
  virtual: true
})

jest.mock('frame/script', () => {
  return '/* MOCKED_FRAME_JS */'
}, {
  virtual: true
})
