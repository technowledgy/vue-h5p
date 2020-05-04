import { shallowMount } from '@vue/test-utils'
import h5p from '@/h5p'
import flushPromises from 'flush-promises'

describe('Component', () => {
  it('correctly handles the src prop', async () => {
    const src = 'http://test.example/h5p'
    const wrapper = shallowMount(h5p, {
      propsData: {
        src
      },
      slots: {
        default: 'Loading',
        404: 'Error'
      }
    })
    expect(wrapper.vm.loading).toBe(true)
    await flushPromises()
    expect(wrapper.vm.loading).toBe(false)
    expect(wrapper.vm.path).toBe(src)
    wrapper.destroy()

    const wrapper2 = await shallowMount(h5p, {
      propsData: {
        src: 'http://test.example/h5p/'
      },
      slots: {
        default: 'Loading',
        404: 'Error'
      }
    })
    expect(wrapper2.vm.loading).toBe(true)
    await flushPromises()
    expect(wrapper2.vm.loading).toBe(false)
    expect(wrapper2.vm.path).toBe(src)
    wrapper2.destroy()
  })
})
