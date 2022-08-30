import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import axios from '@/lib/axios.js'

export const useAppStore = defineStore('app-old', {
  state() {
    return {
      lang: useStorage('lang', 'en'),
      theme: useStorage('theme', 'light'),
      token: useStorage('token', '', window.sessionStorage),
      profile: null,
    }
  }, // state

  getters: {
  },

  actions: {
    async refreshToken() {
      try {
        let { data } = await axios({
          method: 'get',
          url: '/api/token',
        })
        this.token = data.token ?? ''
      } catch (err) {
        console.log(err.message)
      }
    }, // refreshToken

    async fetchProfile() {
      // TODO: fetch profile
    },
  }, // actions
})
