import { shallowMount } from '@vue/test-utils'
import h5p from '@/h5p'
import flushPromises from 'flush-promises'

jest.mock('!to-string-loader!css-loader!../vendor/h5p/styles/h5p.css', () => {
  return 'MOCKED_FRAME_CSS'
}, {
  virtual: true
})

jest.mock('!raw-loader!../frame/frame', () => {
  return 'MOCKED_FRAME_JS'
}, {
  virtual: true
})

function createComponent (props, cbDefault, cbError) {
  const renderDefault = jest.fn(cbDefault)
  const renderError = jest.fn(cbError)
  const wrapper = shallowMount(h5p, {
    propsData: props,
    scopedSlots: {
      default: renderDefault,
      error: renderError
    }
  })
  return {
    renderDefault,
    renderError,
    wrapper
  }
}

describe('Component', () => {
  let wrapper
  let renderDefault
  let renderError

  beforeEach(() => {
    // just reset .mock data, but not .mockResponse
    fetch.mockClear()
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('renders an iframe for existing h5p-content', async () => {
    ({ wrapper } = createComponent({
      src: 'http://test.example/h5p'
    }))
    await flushPromises()
    expect(wrapper.element.constructor.name).toBe('HTMLIFrameElement')
  })

  it('renders default slot content while loading', async () => {
    ({ renderDefault, wrapper } = createComponent({
      src: 'http://test.example/h5p'
    }))
    expect(wrapper.vm.loading).toBe(true)
    expect(renderDefault).toHaveBeenCalled()
    await flushPromises()
    expect(wrapper.vm.loading).toBe(false)
    expect(renderDefault).toHaveBeenCalledTimes(1)
  })

  it('renders error slot on fetch-errors and provides response object', async () => {
    ({ renderError, wrapper } = createComponent({
      src: 'http://test.example/404'
    }))
    await flushPromises()
    expect(wrapper.vm.loading).toBe(false)
    expect(renderError).toHaveBeenCalledWith(expect.objectContaining({
      response: expect.any(Object)
    }))
  })

  it('does not render error slot on succesful fetch', async () => {
    ({ renderError, wrapper } = createComponent({
      src: 'http://test.example/h5p'
    }))
    await flushPromises()
    expect(wrapper.vm.loading).toBe(false)
    expect(renderError).toHaveBeenCalledTimes(0)
  })

  it('correctly handles the src prop', async () => {
    ({ wrapper } = createComponent({
      src: 'http://test.example/h5p'
    }))
    await flushPromises()
    expect(fetch).toHaveBeenCalledWith('http://test.example/h5p/h5p.json', expect.anything())
    wrapper.destroy()
    fetch.mockClear();

    ({ wrapper } = createComponent({
      src: 'http://test.example/h5p/'
    }))
    await flushPromises()
    expect(fetch).toHaveBeenCalledWith('http://test.example/h5p/h5p.json', expect.anything())
  })

  it('requests the neccessary json files', async () => {
    ({ wrapper } = createComponent({
      src: 'http://test.example/h5p'
    }))
    await flushPromises()
    expect(fetch).toHaveBeenCalledWith('http://test.example/h5p/h5p.json', expect.anything())
    expect(fetch).toHaveBeenCalledWith('http://test.example/h5p/content/content.json', expect.anything())
    expect(fetch).toHaveBeenCalledWith('http://test.example/h5p/H5P.Image-1.1/library.json', expect.anything())
  })

  describe('iframe', () => {
    it('has correct attribute srcdoc', async () => {
      ({ wrapper } = createComponent({
        src: 'http://test.example/h5p'
      }))
      await flushPromises()
      expect(wrapper.element.srcdoc).toMatchSnapshot()
    })

    describe('window has correct h5pIntegration object', () => {
      // TODO: how to wait for iframe load event to get access to iframe documentWindow?
    })
  })
})
