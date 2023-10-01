/*
 * @Date: 2023-09-30 17:17:51
 * @LastEditors: 咩咩
 * @LastEditTime: 2023-10-01 09:12:01
 * @Description: i18n配置
 */
import { createI18n } from 'vue-i18n'
import { zh, en } from './lang'

const i18n = createI18n({
  locale: 'zh',
  legacy: false,
  globalInjection: true,
  messages: {
    en,
    zh
  },
  fallbackLocale: 'zh'
})

export default i18n
