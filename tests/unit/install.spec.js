import { createLocalVue } from '@vue/test-utils'
import { install } from '@/index'

describe('Plugin installation', () => {
  it('registers a global component', () => {
    const localVue = createLocalVue()
    expect(localVue.options.components.h5p).toBeUndefined()
    localVue.use(install)
    expect(localVue.options.components.h5p).toBeTruthy()
  })
})
