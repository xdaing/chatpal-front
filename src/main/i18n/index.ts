/*
 * @Date: 2023-09-30 17:20:31
 * @LastEditors: 咩咩
 * @LastEditTime: 2023-10-01 09:05:50
 * @Description: i18n配置
 */
import i18n from 'i18next'
import { zh, en } from './lang'

i18n.init({
  fallbackLng: 'zh',
  lng: 'zh',
  resources: {
    en,
    zh
  }
})

export default i18n
