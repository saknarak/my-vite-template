
import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

let i18n = null

export default function (store) {
  if (!i18n) {
    i18n = createI18n({
      legacy: false,
      globalInjection: true,
      fallbackLocale: 'en',
      locale: store?.lang ?? 'en',
      messages,
    })
  }
  return i18n
}
