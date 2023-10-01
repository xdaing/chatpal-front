/*
 * @Date: 2023-09-30 15:22:31
 * @LastEditors: 咩咩
 * @LastEditTime: 2023-10-01 09:11:11
 * @Description: 暴露预加载脚本
 */
import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { preloadAPI } from './preloadAPI'

if (process.contextIsolated) {
  contextBridge.exposeInMainWorld('electronAPI', electronAPI)
  contextBridge.exposeInMainWorld('preloadAPI', preloadAPI)
} else {
  // @ts-ignore (define in dts)
  window.electronAPI = electronAPI
  // @ts-ignore (define in dts)
  window.preloadAPI = preloadAPI
}
