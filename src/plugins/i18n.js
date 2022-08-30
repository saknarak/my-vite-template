import i18n from '@/lib/i18n.js'

export const install = ({ app, appStore }) => {
  app.use(i18n(appStore))
}
