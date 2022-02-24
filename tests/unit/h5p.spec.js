import fs from 'fs'
import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'

function sleep (ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

function createComponent (props, attachTo) {
  const h5p = require('@/h5p.vue').default
  return shallowMount(h5p, {
    attachTo,
    propsData: props,
    scopedSlots: {
      default: () => 'hello from the DEFAULT slot',
      error: ({ error }) => `hello from the ERROR slot: ${error}`
    }
  })
}

async function createComponentWithIframeSource (props) {
  let wrapper = createComponent(props)
  await flushPromises()

  // Write the srcdoc content to a local file to work around the jsdom limitation,
  // which does not implement srcdoc just yet.
  fs.writeFileSync('tests/mocks/srcdoc.tmp', wrapper.get('iframe').element.srcdoc)

  wrapper.destroy()

  wrapper = createComponent(props, document.body)
  // mock this once, because it would fail on first load
  jest.spyOn(wrapper.vm, 'addEventHandlers').mockImplementationOnce(() => {})
  await flushPromises()

  const iframe = wrapper.get('iframe')

  iframe.element.setAttribute('srcdoc', '')
  iframe.element.setAttribute('src', 'srcdoc.tmp')

  // Need to wait for some time to make JSDOM load all files
  await sleep(1000)

  return wrapper
}

describe('Component', () => {
  let wrapper

  beforeEach(() => {
    // just reset .mock data, but not .mockResponse
    fetch.mockClear()

    jest.doMock('../frame/style?raw', () => {
      return '/* MOCKED_FRAME_CSS */'
    }, {
      virtual: true
    })

    jest.doMock('../frame/script.es?raw', () => {
      return '/* MOCKED_FRAME_JS */'
    }, {
      virtual: true
    })
  })

  afterEach(() => {
    wrapper.destroy()
    jest.resetModules()
  })

  it('renders an iframe for existing h5p-content', async () => {
    wrapper = createComponent({
      src: '/hello-world'
    })
    await flushPromises()
    expect(wrapper.get('iframe').element.constructor.name).toBe('HTMLIFrameElement')
  })

  it('renders default slot content while loading', async () => {
    wrapper = createComponent({
      src: '/hello-world'
    })
    // this would fail without proper iframe content
    jest.spyOn(wrapper.vm, 'addEventHandlers').mockImplementation(() => {})
    expect(wrapper).toMatchSnapshot('should have only default slot content')
    await flushPromises()
    expect(wrapper).toMatchSnapshot('should have default slot content on top of iframe content')
    wrapper.get('iframe').trigger('load')
    expect(wrapper).toMatchSnapshot('should have only iframe content')
  })

  it('renders error slot on fetch-errors and provides response object', async () => {
    wrapper = createComponent({
      src: '/404'
    })
    await flushPromises()
    expect(wrapper).toMatchSnapshot('should have error slot content')
  })

  it('correctly handles the src prop', async () => {
    wrapper = createComponent({
      src: '/hello-world'
    })
    await flushPromises()
    expect(fetch).toHaveBeenCalledWith('/hello-world/h5p.json', expect.anything())
    wrapper.destroy()
    fetch.mockClear()

    wrapper = createComponent({
      src: '/hello-world/'
    })
    await flushPromises()
    expect(fetch).toHaveBeenCalledWith('/hello-world/h5p.json', expect.anything())
  })

  it('requests the neccessary json files', async () => {
    wrapper = createComponent({
      src: '/hello-world'
    })
    await flushPromises()
    expect(fetch).toHaveBeenCalledWith('/hello-world/h5p.json', expect.anything())
    expect(fetch).toHaveBeenCalledWith('/hello-world/content/content.json', expect.anything())
    expect(fetch).toHaveBeenCalledWith('/hello-world/H5P.GreetingCard-1.0/library.json', expect.anything())
  })

  describe('iframe', () => {
    it('has correct attribute srcdoc', async () => {
      wrapper = createComponent({
        src: '/hello-world'
      })
      await flushPromises()
      expect(wrapper.get('iframe').element.srcdoc).toMatchSnapshot()
    })

    it('has sorted dependencies', async () => {
      wrapper = createComponent({
        src: '/course-presentation'
      })
      await flushPromises()
      expect(wrapper.get('iframe').element.srcdoc).toMatchSnapshot()
    })

    it('without version in library paths', async () => {
      wrapper = createComponent({
        src: '/hello-world-no-version'
      })
      await flushPromises()
      expect(wrapper.get('iframe').element.srcdoc).toMatchSnapshot()
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
        resize: 'resize code',
        integration: {
          fullscreenDisabled: true
        }
      })
      await flushPromises()
      expect(wrapper.get('iframe').element.srcdoc).toMatchSnapshot()
    })

    // TODO: This test is put last on purpose - because it leaves a dirty environment
    it('emits h5p events', async () => {
      jest.dontMock('../frame/script.es?raw')

      wrapper = await createComponentWithIframeSource({
        src: '/hello-world'
      })

      const iframe = wrapper.get('iframe')

      iframe.element.contentWindow.H5P.externalDispatcher.trigger('Test', { mock: 'data' })

      expect(wrapper.emitted('test')).toHaveLength(1)
      expect(wrapper.emitted('test')[0]).toStrictEqual([{ mock: 'data' }])
    })
  })
})
