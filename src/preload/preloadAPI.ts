/*
 * @Date: 2023-09-30 16:19:20
 * @LastEditors: 咩咩
 * @LastEditTime: 2023-10-01 09:06:14
 * @Description: 预加载脚本
 */
import { ipcRenderer } from 'electron'

export const preloadAPI: PreloadAPI = {
  loadConfig: () => ipcRenderer.invoke('load:config')
}
