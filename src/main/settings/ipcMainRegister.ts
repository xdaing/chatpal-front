/*
 * @Date: 2023-09-30 17:45:35
 * @LastEditors: 咩咩
 * @LastEditTime: 2023-10-01 09:04:43
 * @Description: ipcMain进程间通信
 */
import { ipcMain } from 'electron'
import { getConfig } from '@main/utils/getConfig'

export const ipcMainRegister = () => {
  ipcMain.handle('load:config', () => getConfig())
}
