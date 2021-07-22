import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'

const __dirname = dirname(fileURLToPath(import.meta.url))

const frameConfig = defineConfig({
  build: {
    target: 'es2015',
    lib: {
      entry: resolve(__dirname, 'src/frame.js'),
      formats: ['es'],
      fileName: 'script'
    },
    outDir: resolve(__dirname, 'frame')
  },
  plugins: [
    copy({
      targets: [
        { src: 'frame/style.css', dest: 'frame', rename: 'style' }
      ],
      hook: 'writeBundle'
    })
  ],
  resolve: {
    alias: [
      {
        find: /^h5p/,
        replacement: resolve(__dirname, 'vendor/h5p')
      }
    ]
  }
})

const defaultConfig = defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      formats: ['es', 'cjs']
    },
    minify: false,
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      external: ['toposort-class'],
      output: {
        entryFileNames: '[format]/vue-h5p.js',
        exports: 'named'
      }
    },
    sourcemap: true
  },
  plugins: [
    createVuePlugin(),
    copy({
      targets: [
        { src: 'package.json.cjs', dest: 'dist/cjs', rename: 'package.json' }
      ],
      hook: 'writeBundle'
    }),
    del({
      targets: ['dist/h5p'],
      hook: 'writeBundle',
      verbose: true
    })
  ],
  publicDir: resolve(__dirname, 'example/public'),
  resolve: {
    alias: [
      {
        find: /^@/,
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  root: 'example'
})

export default ({ mode }) => {
  if (mode === 'frame') return frameConfig
  return defaultConfig
}
