import fetchMock from 'jest-fetch-mock'
import { shallowMount } from '@vue/test-utils'
import h5p from '@/h5p'

fetchMock.enableFetchMocks()
fetchMock.mockResponse(JSON.stringify({ asd: '12345' }))

describe('Component', () => {
  it('correctly handles the src prop', async () => {
    const src = 'http://localhost:8080/h5p/'
    const wrapper = await shallowMount(h5p, {
      propsData: {
        src
      }
    })
    expect(wrapper.vm.path).toBe(src)

    const wrapper2 = await shallowMount(h5p, {
      propsData: {
        src: 'http://localhost:8080/h5p'
      }
    })
    expect(wrapper2.vm.path).toBe(src)
  })
})
