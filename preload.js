const { contextBridge } = require('electron');

// No APIs needed yet — can be extended later
contextBridge.exposeInMainWorld('electronAPI', {});