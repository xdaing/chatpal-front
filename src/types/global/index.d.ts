/*
 * @Date: 2023-09-30 15:59:18
 * @LastEditors: 咩咩
 * @LastEditTime: 2023-10-01 09:19:12
 * @Description: web、node通用类型
 */
interface PreloadAPI {
  loadConfig: () => Promise<unknown>
}
type Lang = 'zh' | 'en'
type Theme = 'light' | 'system' | 'dark'
interface ApplicationConfig {
  lang: Lang
  theme: Theme
}
type ApplicationConfigKey = keyof ApplicationConfig
type ApplicationConfigValue = ApplicationConfig[ApplicationConfigKey]
type TypeCheckFunction<Expect> = (value: unknown) => value is Expect
