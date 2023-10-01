/*
 * @Date: 2023-09-30 17:41:34
 * @LastEditors: 咩咩
 * @LastEditTime: 2023-10-01 09:25:52
 * @Description: electron-store本地存储
 */
import Store from 'electron-store'
import { isTheme, isLang } from '@main/utils/typeCheck'

export const defaultConfig: ApplicationConfig = {
  theme: isTheme(import.meta.env.MAIN_VITE_DEFAULT_THEME)
    ? import.meta.env.MAIN_VITE_DEFAULT_THEME
    : 'system',
  lang: isLang(import.meta.env.MAIN_VITE_DEFAULT_LANG)
    ? import.meta.env.MAIN_VITE_DEFAULT_LANG
    : 'zh'
}

const store = new Store<ApplicationConfig>({
  defaults: defaultConfig
})

export default store
