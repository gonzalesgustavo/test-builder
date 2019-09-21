const { app, BrowserWindow } = require("electron");

let win;

let createWindow = () => {
  win = new BrowserWindow({
    width: 1324,
    height: 771,
    backgroundColor: "#3d3d3c"
  });

  win.loadURL(`file://${__dirname}/dist/test-builder-v1/index.html`);

  win.on("closed", () => {
    win = null;
  });
  win.webContents.openDevTools();
};
app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
