/*
 * @Date: 2023-09-30 15:59:32
 * @LastEditors: 咩咩
 * @LastEditTime: 2023-10-01 09:01:53
 * @Description: web类型
 */

import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electronAPI: ElectronAPI
    preloadAPI: PreloadAPI
  }
}
