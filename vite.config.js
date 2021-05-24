import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import { string } from 'rollup-plugin-string'
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'

const __dirname = dirname(fileURLToPath(import.meta.url))

const frameConfig = defineConfig({
  build: {
    target: 'es2015',
    lib: {
      entry: resolve(__dirname, 'src/frame.js'),
      formats: ['es'],
      fileName: 'frame'
    },
    outDir: resolve(__dirname, 'frame')
  },
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
    string({ include: 'frame/*.js' }),
    copy({
      targets: [
        { src: 'package.json.cjs', dest: 'dist/cjs', rename: 'package.json' }
      ],
      hook: 'writeBundle'
    }),
    del({
      targets: ['dist/style.css', 'dist/h5p'],
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
      },
      {
        find: /^frame\/script$/,
        replacement: resolve(__dirname, 'frame/frame.es.js')
      },
      {
        find: /^frame\/style$/,
        replacement: resolve(__dirname, 'frame/style.css')
      }
    ]
  },
  root: 'example'
})

export default ({ mode }) => {
  if (mode === 'frame') return frameConfig
  return defaultConfig
}
