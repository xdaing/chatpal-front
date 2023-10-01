/*
 * @Date: 2023-09-30 15:59:27
 * @LastEditors: 咩咩
 * @LastEditTime: 2023-10-01 09:01:27
 * @Description: web环境变量
 */

/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly RENDERER_VITE_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
