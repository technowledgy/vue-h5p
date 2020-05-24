class FetchError extends Error {
  constructor (resp, body) {
    super(resp.statusText)
    this.name = 'FetchError'
    this.resp = resp
    this.status = resp.status
    Object.assign(this, body)
  }
}

export {
  FetchError
}