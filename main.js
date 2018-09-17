'use strict';

const electron = require('electron')

const {app, BrowserWindow} = electron

require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
});

app.on('ready', () => {
  let win = new BrowserWindow({
    height: 640,
    icon: 'resources/logo.png',
    minWidth: 320,
    frame: false,
    width: 320
  })
  win.loadURL(`file://${__dirname}/index.html`)
})
