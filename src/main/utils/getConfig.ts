/*
 * @Date: 2023-09-30 17:59:39
 * @LastEditors: 咩咩
 * @LastEditTime: 2023-10-01 09:24:58
 * @Description: 加载本地配置项相关
 */
import store, { defaultConfig } from '@main/settings/store'
import { isTheme, isLang } from './typeCheck'

/**
 * @description: 加载并验证本地配置项
 */
const loadConfigItem = <ConfigItemValue extends ApplicationConfigValue>(
  key: ApplicationConfigKey,
  checkFunction: TypeCheckFunction<ConfigItemValue>
): ConfigItemValue => {
  const localValue = store.get(key)
  if (checkFunction(localValue)) return localValue
  else {
    // 配置错误修改配置
    const defaultValue = defaultConfig[key] as ConfigItemValue
    store.set(key, defaultValue)
    return defaultValue
  }
}

/**
 * @description: 加载所有配置项
 * @return {config} ApplicationConfig
 */
export const getConfig = (): ApplicationConfig => {
  return {
    lang: loadConfigItem<Lang>('lang', isLang),
    theme: loadConfigItem<Theme>('theme', isTheme)
  }
}
