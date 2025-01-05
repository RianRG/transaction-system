import { app, BrowserWindow, protocol, dialog } from 'electron';
import path from 'node:path';
import url from 'node:url';
import os from 'node:os'
import { dirname } from 'node:path';
import { spawn, exec } from 'node:child_process'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function showDebugInfo(message) {
  dialog.showMessageBox({
    type: 'info',
    title: 'Debug Info',
    message: message
  });
}

function createWindow(){
  const backendProcess = spawn('node', [`${path.resolve(os.homedir(), 'transaction-system/nest/dist/main.js')}`], {
    detached: true
  });

  backendProcess.on('error', err => {
    showDebugInfo(`Erro no processo do backend: ${err.message}\n ${path.resolve(__dirname)}`);
  });

  backendProcess.on('close', code => {
    showDebugInfo(`Backend fechou com código: ${code}`);
  });

  const win = new BrowserWindow({
    width: 700,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'angular/dist/angular/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  win.on('close', () =>{
    backendProcess.kill()
  })
}

app.on('ready', () => {
  createWindow();
});