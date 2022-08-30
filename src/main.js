import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { createPinia } from 'pinia'

import App from './app.vue'

import 'virtual:windi.css'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active-link',
})

const app = createApp(App)
  .use(createPinia())
  .use(router)

const context = {
  app,
  router,
}

Object.values(import.meta.globEager('./plugins/*.js')).map(i => i.install?.(context))

app.mount('#app')
