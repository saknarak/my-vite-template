<template>
  <router-view></router-view>
</template>

<script>
import { useAppStore } from '../store/app-store'

export default {
  async beforeRouteEnter(to, from, next) {
    try {
      const appStore = useAppStore()
      if (!appStore.token) {
        throw new Error('auth.token.expired')
      }

      // fetch profile
      await appStore.fetchProfile()

      if (!appStore.profile) {
        throw new Error('auth.token.expired')
      }
      next()
    } catch (e) {
      next('/signin')
    }
  },
}
</script>
