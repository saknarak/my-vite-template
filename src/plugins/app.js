import * as util from '@/lib/util'
import config from '@/config'

export const install = ({ app, appStore }) => {
  app.config.globalProperties.$util = util
  app.config.globalProperties.$config = config
}
