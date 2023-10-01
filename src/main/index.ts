/*
 * @Date: 2023-09-30 15:22:31
 * @LastEditors: 咩咩
 * @LastEditTime: 2023-10-01 10:30:44
 * @Description: electron启动入口
 */
import { app } from 'electron'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import { createMainWindow } from '@main/windows'
import { ipcMainRegister } from '@main/settings/ipcMainRegister'

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')
  optimizer.registerFramelessWindowIpc()
  app.on('browser-window-created', (_, window) => optimizer.watchWindowShortcuts(window))
  ipcMainRegister()
  createMainWindow()
})
