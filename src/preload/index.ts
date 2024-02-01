import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', {
      ...electronAPI,
      openDialog: (method, config) => ipcRenderer.invoke('dialog', method, config),
      readFile: (path) => ipcRenderer.invoke('readFile', path),
      writeFile: (path, data) => ipcRenderer.invoke('writeFile', path, data)
    })
    contextBridge.exposeInMainWorld('api', api)
    
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
