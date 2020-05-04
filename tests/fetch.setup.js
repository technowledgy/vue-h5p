import fetchMock from 'jest-fetch-mock'

fetchMock.enableFetchMocks()
fetchMock.doMock(req => {
  return Promise.resolve({
    body: JSON.stringify(require(`./mocks/fetch/${new URL(req.url).pathname}`))
  })
})
