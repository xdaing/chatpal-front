/*
 * @Date: 2023-09-30 15:58:48
 * @LastEditors: 咩咩
 * @LastEditTime: 2023-10-01 09:00:30
 * @Description: node环境变量
 */
interface ImportMetaEnv {
  readonly MAIN_VITE_DEFAULT_THEME: string
  readonly MAIN_VITE_DEFAULT_LANG: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
