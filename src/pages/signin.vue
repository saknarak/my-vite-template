<route lang="yaml">
meta:
  layout: public
</route>

<template>
  <div>
    <div>
      {{ $t('auth.welcome') }} ({{ lang }})
    </div>
    <lang-selector></lang-selector>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useAppStore } from '../store/app-store'

export default {
  computed: {
    ...mapState(useAppStore, ['lang']),
  },
}
</script>
