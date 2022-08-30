import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import ViteComponents from 'unplugin-vue-components/vite'
import WindiCSS from 'vite-plugin-windicss'
import VueI18n from '@intlify/vite-plugin-vue-i18n'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  server: {
    host: 'localhost',
    port: 3008,
    proxy: {
      '/api': {
        target: 'https://localhost:1880',
        changeOrigin: true,
      },
    },
  },

  plugins: [
    vue(),
    Pages(),
    Layouts(),
    WindiCSS(),
    ViteComponents(),
    VueI18n({
      compositionOnly: false,
      include: [path.resolve(__dirname, 'locales/**')],
    }),
  ],
})
