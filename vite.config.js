import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'

const repoDir = dirname(fileURLToPath(import.meta.url))

const frameConfig = defineConfig({
  build: {
    target: 'es2015',
    lib: {
      entry: resolve(repoDir, 'src/frame.js'),
      formats: ['cjs'],
      fileName: 'script'
    },
    minify: false,
    outDir: resolve(repoDir, 'frame')
  },
  plugins: [
    {
      generateBundle (opts, bundle) {
        bundle['script.cjs'].code = bundle['script.cjs'].code.replaceAll('</script>', '<\\/script>')
      }
    },
    copy({
      targets: [
        { src: 'frame/script.css', dest: 'frame', rename: 'style' }
      ],
      hook: 'writeBundle'
    })
  ],
  resolve: {
    alias: [
      {
        find: /^h5p/,
        replacement: resolve(repoDir, 'vendor/h5p')
      }
    ]
  }
})

const defaultConfig = defineConfig({
  build: {
    commonjsOptions: { include: [] },
    emptyOutDir: true,
    lib: {
      entry: resolve(repoDir, 'src/index.js'),
      formats: ['es', 'cjs']
    },
    minify: false,
    outDir: resolve(repoDir, 'dist'),
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
    vue(),
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
  publicDir: resolve(repoDir, 'example/public'),
  resolve: {
    alias: [
      {
        find: /^@\//,
        replacement: resolve(repoDir, 'src') + '/'
      }
    ]
  },
  root: 'example'
})

export default ({ mode }) => {
  if (mode === 'frame') return frameConfig
  return defaultConfig
}
