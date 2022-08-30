<template>
  <div class="flex gap-3">
    <button v-for="langItem in $config.langList" :key="langItem.value" class="min-w-20 border-2" @click="lang = langItem.value">
      {{ langItem.text }}
    </button>
  </div>
</template>

<script>
import { mapWritableState } from 'pinia'
import { useAppStore } from '../store/app-store'

export default {
  computed: {
    ...mapWritableState(useAppStore, ['lang']),
  },
}
</script>
