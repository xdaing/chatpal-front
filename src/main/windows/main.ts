/*
 * @Date: 2023-09-30 15:29:20
 * @LastEditors: 咩咩
 * @LastEditTime: 2023-10-01 10:26:55
 * @Description: mainWindow
 */
import { BrowserWindow, shell } from 'electron'
import { join } from 'node:path'

export const createMainWindow = (): BrowserWindow => {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    frame: false,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })
  process.env['ELECTRON_RENDERER_URL'] && mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })
  mainWindow.webContents.setWindowOpenHandler(details => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })
  return mainWindow
}
