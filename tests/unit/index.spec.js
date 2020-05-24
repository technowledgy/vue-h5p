import { install } from '@/index'

describe('Global Vue', () => {
  it('makes plugin register itself', () => {
    expect(window.Vue.use).toHaveBeenCalledWith({ install })
  })
})
