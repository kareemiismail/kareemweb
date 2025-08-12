const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,  // Width of the window
    height: 10000, // Increased height to give more space for the browser
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      // Allow navigation within webview
      webviewTag: true
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
