const { app, BrowserWindow } = require('electron')

function createWindow() {

  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('indexCINCO.html')
  //win.removeMenu() tirar o comentário no final do projeto, comando q retira o menu no Electron
  win.removeBrowserView
}

app.whenReady().then(() => {
  createWindow()
})