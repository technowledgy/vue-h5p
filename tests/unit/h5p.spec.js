import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import h5p from '@/h5p.vue'

function createComponent (props) {
  return shallowMount(h5p, {
    propsData: props,
    scopedSlots: {
      default: () => 'hello from the DEFAULT slot',
      error: ({ error }) => `hello from the ERROR slot: ${error}`
    }
  })
}

describe('Component', () => {
  let wrapper

  beforeEach(() => {
    // just reset .mock data, but not .mockResponse
    fetch.mockClear()
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('renders an iframe for existing h5p-content', async () => {
    wrapper = createComponent({
      src: '/hello-world'
    })
    await flushPromises()
    expect(wrapper.find('iframe').element.constructor.name).toBe('HTMLIFrameElement')
  })

  it('renders default slot content while loading', async () => {
    wrapper = createComponent({
      src: '/hello-world'
    })
    expect(wrapper).toMatchSnapshot('should have default slot content')
    await flushPromises()
    expect(wrapper).toMatchSnapshot('should have iframe content')
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
      expect(wrapper.element.srcdoc).toMatchSnapshot()
    })

    it('has sorted dependencies', async () => {
      wrapper = createComponent({
        src: '/course-presentation'
      })
      await flushPromises()
      expect(wrapper.element.srcdoc).toMatchSnapshot()
    })

    it('without version in library paths', async () => {
      wrapper = createComponent({
        src: '/hello-world-no-version'
      })
      await flushPromises()
      expect(wrapper.element.srcdoc).toMatchSnapshot()
    })

    // TODO: wait for JSDOM implementing srcdoc, so that the iframe actually works
    it.todo('emits h5p events')

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
      expect(wrapper.element.srcdoc).toMatchSnapshot()
    })
  })
})
