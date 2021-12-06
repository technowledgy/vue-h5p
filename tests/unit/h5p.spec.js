import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import h5p from '@/h5p.vue'
import { FetchError } from '@/errors'

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
      src: '/hello-world'
    }))
    await flushPromises()
    expect(wrapper.element.constructor.name).toBe('HTMLIFrameElement')
  })

  it('renders default slot content while loading', async () => {
    ({ renderDefault, wrapper } = createComponent({
      src: '/hello-world'
    }))
    expect(wrapper.vm.loading).toBe(true)
    expect(renderDefault).toHaveBeenCalled()
    await flushPromises()
    expect(wrapper.vm.loading).toBe(false)
    expect(renderDefault).toHaveBeenCalledTimes(1)
  })

  it('renders error slot on fetch-errors and provides response object', async () => {
    ({ renderError, wrapper } = createComponent({
      src: '/404'
    }))
    await flushPromises()
    expect(wrapper.vm.loading).toBe(false)
    expect(renderError).toHaveBeenCalledWith(expect.objectContaining({
      error: expect.any(FetchError)
    }))
  })

  it('does not render error slot on succesful fetch', async () => {
    ({ renderError, wrapper } = createComponent({
      src: '/hello-world'
    }))
    await flushPromises()
    expect(wrapper.vm.loading).toBe(false)
    expect(renderError).toHaveBeenCalledTimes(0)
  })

  it('correctly handles the src prop', async () => {
    ({ wrapper } = createComponent({
      src: '/hello-world'
    }))
    await flushPromises()
    expect(fetch).toHaveBeenCalledWith('/hello-world/h5p.json', expect.anything())
    wrapper.destroy()
    fetch.mockClear();

    ({ wrapper } = createComponent({
      src: '/hello-world/'
    }))
    await flushPromises()
    expect(fetch).toHaveBeenCalledWith('/hello-world/h5p.json', expect.anything())
  })

  it('requests the neccessary json files', async () => {
    ({ wrapper } = createComponent({
      src: '/hello-world'
    }))
    await flushPromises()
    expect(fetch).toHaveBeenCalledWith('/hello-world/h5p.json', expect.anything())
    expect(fetch).toHaveBeenCalledWith('/hello-world/content/content.json', expect.anything())
    expect(fetch).toHaveBeenCalledWith('/hello-world/H5P.GreetingCard-1.0/library.json', expect.anything())
  })

  describe('iframe', () => {
    it('has correct attribute srcdoc', async () => {
      ({ wrapper } = createComponent({
        src: '/hello-world'
      }))
      await flushPromises()
      expect(wrapper.element.srcdoc).toMatchSnapshot()
    })

    it('has sorted dependencies', async () => {
      ({ wrapper } = createComponent({
        src: '/course-presentation'
      }))
      await flushPromises()
      expect(wrapper.element.srcdoc).toMatchSnapshot()
    })

    it('without version in library paths', async () => {
      ({ wrapper } = createComponent({
        src: '/hello-world-no-version'
      }))
      await flushPromises()
      expect(wrapper.element.srcdoc).toMatchSnapshot()
    })

    it('emits h5p events', () => {
      // TODO: wait for JSDOM implementing srcdoc, so that the iframe actually works
    })

    it('passes props', async () => {
      ({ wrapper } = createComponent({
        src: '/hello-world',
        l10n: {
          advancedHelp: 'TRANSLATED1',
          author: 'TRANSLATED2',
          by: 'TRANSLATED3'
        },
        export: '/export/url',
        embed: '<iframe></iframe>',
        fullscreen: true,
        copyright: true,
        css: '/* MOCKED_USER_STYLE_CSS */',
        icon: true,
        resize: 'resize code',
        integration: {
          fullscreenDisabled: true
        }
      }))
      await flushPromises()
      expect(wrapper.element.srcdoc).toMatchSnapshot()
    })
  })
})
