const electron = require("electron");
const app = electron.app || electron.remote.app;

const isEnvSet = "ELECTRON_IS_DEV" in process.env;
// @ts-ignore
const getFromEnv = parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;

export const isDev = isEnvSet ? getFromEnv : !app.isPackaged;
