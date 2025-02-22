import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'

const warnHandler = jest.fn()
const resizeObserver = jest.fn()
const observe = jest.fn()
const disconnect = jest.fn()

global.ResizeObserver = resizeObserver.mockImplementation(() => ({
  observe,
  disconnect
}))

jest.doMock('../frame/style?raw', () => {
  return '/* MOCKED_FRAME_CSS */'
}, {
  virtual: true
})

jest.doMock('../frame/script.cjs?raw', () => {
  return `
    var callback;
    H5P.externalDispatcher = { on: (_, cb) => { callback = cb }, trigger: (type, data) => callback({ type, data }) };
    window.top.postMessage({ context: "h5p", action: "hello" }, "*");
    H5P.instances = [Symbol("instance")];
    var lastTrigger;
    H5P.trigger = (instance, action) => { lastTrigger = { instance, action }};
  `
}, {
  virtual: true
})

function sleep (ms = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

describe('Component', () => {
  const h5p = require('@/h5p.vue').default
  let wrapper

  function createComponent (props) {
    return shallowMount(h5p, {
      attachTo: document.body,
      props,
      slots: {
        default: () => 'hello from the DEFAULT slot',
        error: ({ error }) => `hello from the ERROR slot: ${error}`
      },
      global: {
        config: {
          warnHandler: (msg) => warnHandler(msg)
        }
      }
    })
  }

  beforeEach(() => {
    // just reset .mock data, but not .mockResponse
    fetch.mockClear()
  })

  afterEach(() => {
    wrapper.unmount()
    jest.resetModules()
  })

  it('renders an iframe for existing h5p-content', async () => {
    wrapper = createComponent({
      src: '/hello-world'
    })
    await flushPromises()
    await sleep()
    expect(wrapper.get('iframe').element.constructor.name).toBe('HTMLIFrameElement')
  })

  it('renders default slot content while loading', async () => {
    wrapper = createComponent({
      src: '/hello-world'
    })
    expect(wrapper).toMatchSnapshot('should have only default slot content')
    await flushPromises()
    expect(wrapper).toMatchSnapshot('should have default slot content on top of iframe content')
    await sleep()
    expect(wrapper).toMatchSnapshot('should have only iframe content')
  })

  it('renders error slot on fetch-errors and provides response object', async () => {
    wrapper = createComponent({
      src: '/404'
    })
    await flushPromises()
    await sleep()
    expect(wrapper).toMatchSnapshot('should have error slot content')
  })

  it('correctly handles the src prop', async () => {
    wrapper = createComponent({
      src: '/hello-world'
    })
    await flushPromises()
    await sleep()
    expect(fetch).toHaveBeenCalledWith('/hello-world/h5p.json', expect.anything())
    wrapper.unmount()
    fetch.mockClear()

    wrapper = createComponent({
      src: '/hello-world/'
    })
    await flushPromises()
    await sleep()
    expect(fetch).toHaveBeenCalledWith('/hello-world/h5p.json', expect.anything())
  })

  it('requests the neccessary json files', async () => {
    wrapper = createComponent({
      src: '/hello-world'
    })
    await flushPromises()
    await sleep()
    expect(fetch).toHaveBeenCalledWith('/hello-world/h5p.json', expect.anything())
    expect(fetch).toHaveBeenCalledWith('/hello-world/content/content.json', expect.anything())
    expect(fetch).toHaveBeenCalledWith('/hello-world/H5P.GreetingCard-1.0/library.json', expect.anything())
  })

  it('should observe resizes of the wrapper', async () => {
    wrapper = createComponent({
      src: '/hello-world'
    })
    await flushPromises()
    await sleep()
    expect(observe).toHaveBeenCalledWith(wrapper.vm.$el)
  })

  it('should disconnect ResizeObserver before destroy', async () => {
    wrapper = createComponent({
      src: '/hello-world'
    })
    await flushPromises()
    await sleep()
    wrapper.unmount()
    expect(disconnect).toHaveBeenCalledTimes(1)
  })

  it('should trigger H5P resize when wrapper is resized', async () => {
    wrapper = createComponent({
      src: '/hello-world'
    })
    await flushPromises()
    await sleep()
    const iframeWindow = wrapper.get('iframe').element.contentWindow

    expect(iframeWindow.lastTrigger).toBeUndefined()

    resizeObserver.mock.calls[0][0]()

    expect(iframeWindow.lastTrigger).toMatchInlineSnapshot(`
      {
        "action": "resize",
        "instance": Symbol(instance),
      }
    `)
  })

  describe('iframe', () => {
    it('has correct attribute srcdoc', async () => {
      wrapper = createComponent({
        src: '/hello-world'
      })
      await flushPromises()
      await sleep()
      expect(wrapper.get('iframe').element.contentDocument.documentElement.outerHTML).toMatchSnapshot()
    })

    it('has sorted dependencies', async () => {
      wrapper = createComponent({
        src: '/course-presentation'
      })
      await flushPromises()
      await sleep()
      expect(wrapper.get('iframe').element.contentDocument.documentElement.outerHTML).toMatchSnapshot()
    })

    it('without version in library paths', async () => {
      wrapper = createComponent({
        src: '/hello-world-no-version'
      })
      await flushPromises()
      await sleep()
      expect(wrapper.get('iframe').element.contentDocument.documentElement.outerHTML).toMatchSnapshot()
    })

    it('should throw on wrong actor prop', async () => {
      wrapper = createComponent({
        src: '/hello-world',
        actor: { foo: 'bar' }
      })
      await flushPromises()
      await sleep()
      expect(warnHandler).toHaveBeenCalledWith('Invalid prop: custom validator check failed for prop "actor".')
    })

    it('should not set H5PUserUUID in the local storage when no actor prop is set with a mail ', async () => {
      wrapper = createComponent({
        src: '/hello-world',
        actor: {
          name: '123',
          mail: 'mock@test.local'
        }
      })
      await flushPromises()
      await sleep()
      expect(warnHandler).not.toHaveBeenCalled()
      expect(localStorage.getItem('H5PUserUUID')).toBeNull()
    })

    it('should set H5PUserUUID in the local storage when actor prop is set without a mail', async () => {
      wrapper = createComponent({
        src: '/hello-world',
        actor: {
          name: '123',
          homePage: 'http://test.local/'
        }
      })
      await flushPromises()
      await sleep()
      expect(warnHandler).not.toHaveBeenCalled()
      expect(localStorage.getItem('H5PUserUUID')).toBe('123')
    })

    it('passes props', async () => {
      wrapper = createComponent({
        src: '/hello-world',
        l10n: {
          advancedHelp: 'TRANSLATED1',
          author: 'TRANSLATED2',
          by: 'TRANSLATED3'
        },
        export: '/export/url',
        copy: true,
        embed: '<iframe></iframe>',
        fullscreen: true,
        copyright: true,
        css: '/* MOCKED_USER_STYLE_CSS */',
        icon: true,
        resize: 'resize code'
      })
      await flushPromises()
      await sleep()
      expect(wrapper.get('iframe').element.contentDocument.documentElement.outerHTML).toMatchSnapshot()
    })

    it('passes actor props with mail', async () => {
      wrapper = createComponent({
        src: '/hello-world',
        actor: {
          name: '123',
          mail: 'mock@test.local'
        }
      })
      await flushPromises()
      await sleep()
      expect(wrapper.get('iframe').element.contentDocument.documentElement.outerHTML).toMatchSnapshot()
    })

    it('passes actor props with homePage', async () => {
      wrapper = createComponent({
        src: '/hello-world',
        actor: {
          name: '123',
          homePage: 'http://test.local/'
        }
      })
      await flushPromises()
      await sleep()
      expect(wrapper.get('iframe').element.contentDocument.documentElement.outerHTML).toMatchSnapshot()
    })

    it('emits h5p events', async () => {
      wrapper = await createComponent({
        src: '/hello-world'
      })
      await flushPromises()
      await sleep()

      const iframe = wrapper.get('iframe')

      iframe.element.contentWindow.H5P.externalDispatcher.trigger('xAPI', { mock: 'data' })

      expect(wrapper.emitted('xapi')).toHaveLength(1)
      expect(wrapper.emitted('xapi')[0]).toStrictEqual([{ mock: 'data' }])
    })

    it('emits when H5P is ready', async () => {
      wrapper = await createComponent({
        src: '/hello-world'
      })
      await flushPromises()
      await sleep()

      expect(wrapper.emitted('ready')).toHaveLength(1)
    })

    it('emits when H5P sends prepareResize', async () => {
      wrapper = await createComponent({
        src: '/hello-world'
      })
      await flushPromises()
      await sleep()

      const iframe = wrapper.get('iframe')

      expect(wrapper.emitted('height-changed')).toBeUndefined()

      iframe.element.contentWindow.top.postMessage({ context: 'h5p', action: 'prepareResize', clientHeight: 100 }, '*')
      await flushPromises()

      expect(wrapper.emitted('height-changed')).toHaveLength(1)
      expect(wrapper.emitted('height-changed')).toStrictEqual([[100]])

      iframe.element.contentWindow.top.postMessage({ context: 'h5p', action: 'prepareResize', clientHeight: 100 }, '*')
      await flushPromises()

      expect(wrapper.emitted('height-changed')).toHaveLength(1)

      iframe.element.contentWindow.top.postMessage({ context: 'h5p', action: 'prepareResize', clientHeight: 200 }, '*')
      await flushPromises()

      expect(wrapper.emitted('height-changed')).toHaveLength(2)
      expect(wrapper.emitted('height-changed')).toStrictEqual([[100], [200]])
    })
  })
})
