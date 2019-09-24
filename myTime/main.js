const { app, BrowserWindow } = require('electron')

function createWindow() {
	// ブラウザウインドウを作成
	let win = new BrowserWindow({
		width: 500,
		height: 400,
		webPreferences: {
			nodeIntegration: true
		}
	})

	// そしてこのアプリの index.html をロード
	win.loadFile('index.html')
}

app.on('ready', createWindow)