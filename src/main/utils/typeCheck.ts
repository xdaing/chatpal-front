/*
 * @Date: 2023-09-30 17:58:38
 * @LastEditors: 咩咩
 * @LastEditTime: 2023-10-01 09:03:18
 * @Description: 类型校验
 */
export const isTheme: TypeCheckFunction<Theme> = (value): value is Theme =>
  typeof value === 'string' ? ['light', 'system', 'dark'].includes(value) : false

export const isLang: TypeCheckFunction<Lang> = (value): value is Lang =>
  typeof value === 'string' ? ['zh', 'en'].includes(value) : false
