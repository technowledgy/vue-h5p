import fetchMock from 'jest-fetch-mock'

fetchMock.enableFetchMocks()
fetchMock.doMock(req => {
  try {
    return Promise.resolve({
      status: 200,
      body: JSON.stringify(require(`./mocks/fetch/${new URL(req.url).pathname}`))
    })
  } catch {
    return Promise.resolve({
      status: 404
    })
  }
})
