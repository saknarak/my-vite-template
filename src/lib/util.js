import * as _dayjs from 'dayjs'

export const dayjs = _dayjs

export async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
