<template>
  <router-view>
  </router-view>
</template>

<script>
import { useAppStore } from './store/app-store'
import axios from '@/lib/axios.js'

export default {
  data() {
    const appStore = useAppStore()

    return {
      appStore,
    }
  },

  watch: {
    'appStore.lang'(newLang) {
      this.$i18n.locale = newLang
    },

    'appStore.theme'(newTheme, oldTheme) {
      this.applyTheme(newTheme, oldTheme)
    },

    'appStore.token'(newToken) {
      this.applyToken(newToken)
    },
  },

  created() {
    this.$i18n.locale = this.appStore.lang
    this.applyTheme(this.appStore.theme, '')
    this.applyToken(this.appStore.token)
  },

  methods: {
    applyTheme(newTheme, oldTheme) {
      const html = document.querySelector('html')
      if (oldTheme) {
        html.classList.remove(oldTheme)
      }
      html.classList.add(newTheme)
    }, // applyTheme

    applyToken(newToken) {
      if (newToken) {
        axios.defaults.headers.common.Authorization = `Bearer ${newToken}`
      } else {
        delete axios.defaults.headers.common.Authorization
      }
    }, // applyToken
  }, // methods
}

</script>
