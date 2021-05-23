import { createLocalVue } from '@vue/test-utils'
import { install } from '@/index'

describe('Plugin installation', () => {
  it('registers a global component', () => {
    const localVue = createLocalVue()
    expect(localVue.options.components.H5p).toBeUndefined()
    localVue.use(install)
    expect(localVue.options.components.H5p).toBeTruthy()
  })
})
