/**
 * This file is used specifically for security reasons.
 * Here you can access Nodejs stuff and inject functionality into
 * the renderer thread (accessible there through the "window" object)
 *
 * WARNING!
 * If you import anything from node_modules, then make sure that the package is specified
 * in package.json > dependencies and NOT in devDependencies
 *
 * Example (injects window.myAPI.doAThing() into renderer thread):
 *
 *  import { contextBridge } from 'electron'
 *  contextBridge.exposeInMainWorld('myAPI', {
 *   doAThing: () => {}
 *  })
 *
 *
 * WARNING!
 * If accessing Node functionality (like importing @electron/remote) then in your
 * electron-main.js you will need to set the following when you instantiate BrowserWindow:
 *
 * mainWindow = new BrowserWindow({
 *   // ...
 *   webPreferences: {
 *     // ...
 *     sandbox: false // <-- to be able to import @electron/remote in preload script
 *   }
 * }
 */

import { contextBridge } from "electron";
import * as path from "path";
import { readFileSync } from "fs";

import { getTable, loadDb, setTable, dir } from "./api/db-api";

let db = loadDb();

contextBridge.exposeInMainWorld("DB", {
  getAll: (tableName) => {
    const table = getTable(tableName);
    return table;
  },

  insert: (tableName, payload = {}) => {
    const newRecord = insertRecord(tableName, payload);
    return newRecord;
  },

  saveTable: (tableName, table) => {
    setTable(tableName, table);
  },

  getTrackFile: (id, track) => {
    const source = path.resolve(dir, "programs", id, track);
    const buffer = readFileSync(source);
    let arrayBuffer = buffer.slice(
      buffer.byteOffset,
      buffer.byteOffset + buffer.byteLength
    );
    arrayBuffer = [arrayBuffer];
    return new File(arrayBuffer, source);
  },
});
