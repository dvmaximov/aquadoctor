/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src-electron/api/db-api.js":
/*!************************************!*\
  !*** ./src-electron/api/db-api.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dir\": () => (/* binding */ dir),\n/* harmony export */   \"getTable\": () => (/* binding */ getTable),\n/* harmony export */   \"loadDb\": () => (/* binding */ loadDb),\n/* harmony export */   \"setTable\": () => (/* binding */ setTable)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_services_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/services/tools */ \"./src/services/tools.js\");\n\n\n\nlet db = null;\nconst dir = process.env.PORTABLE_EXECUTABLE_DIR ? process.env.PORTABLE_EXECUTABLE_DIR : \"\";\nconst loadDb = () => {\n  const source = path__WEBPACK_IMPORTED_MODULE_1__.resolve(dir, \"db.json\");\n  // const log1 = path.resolve(dir);\n  // const log2 = path.resolve(dir, \"db.json\");\n  // const log = path.resolve(dir, \"log.txt\");\n  // console.log(log);\n  // console.log(`\n  //   source ${source}\n  //   dir ${log1}\n  //   db ${log2}\n  // `);\n  // writeFileSync(\n  //   log,\n  //   `\n  //   source ${source}\n  //   log1 ${log1}\n  //   log2 ${log2}\n  // `\n  // );\n\n  try {\n    db = (0,fs__WEBPACK_IMPORTED_MODULE_0__.readFileSync)(source, \"utf8\").toString();\n    db = JSON.parse(db);\n  } catch {\n    db = null;\n  }\n  return db;\n};\nconst saveDb = async () => {\n  try {\n    const source = path__WEBPACK_IMPORTED_MODULE_1__.resolve(dir, \"db.json\");\n    (0,fs__WEBPACK_IMPORTED_MODULE_0__.writeFileSync)(source, JSON.stringify(db));\n  } catch (e) {\n    return false;\n  }\n  return true;\n};\nconst getTable = tableName => {\n  let table = [];\n  try {\n    table = db[tableName];\n  } catch (e) {\n    table = [];\n  }\n  return table;\n};\nconst setTable = (tableName, table) => {\n  const newValue = (0,_src_services_tools__WEBPACK_IMPORTED_MODULE_2__.liteCopy)(table);\n  db[tableName] = newValue;\n  saveDb();\n};\n\n// export const insertRecord = (tableName, payload) => {\n//   const id = uuidv4();\n\n//   let newRecord = { id, ...payload };\n//   newRecord = liteCopy(newRecord);\n\n//   try {\n//     db[tableName].push(newRecord);\n//     saveDb();\n//   } catch {\n//     return null;\n//   }\n//   return newRecord;\n// };\n\n// export const editRecord = (tableName, payload) => {\n//   const newRecord = liteCopy(payload);\n//   const id = newRecord?.id;\n//   if (!id) return null;\n//   const index = db.findIndex((item) => item.id === id);\n//   if (index < 0) return null;\n//   db[tableName][index] = newRecord;\n//   console.log(db);\n//   return newRecord;\n// };\n\n//# sourceURL=webpack://aquadoctor/./src-electron/api/db-api.js?");

/***/ }),

/***/ "./src-electron/electron-preload.js":
/*!******************************************!*\
  !*** ./src-electron/electron-preload.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_db_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/db-api */ \"./src-electron/api/db-api.js\");\n/**\n * This file is used specifically for security reasons.\n * Here you can access Nodejs stuff and inject functionality into\n * the renderer thread (accessible there through the \"window\" object)\n *\n * WARNING!\n * If you import anything from node_modules, then make sure that the package is specified\n * in package.json > dependencies and NOT in devDependencies\n *\n * Example (injects window.myAPI.doAThing() into renderer thread):\n *\n *  import { contextBridge } from 'electron'\n *  contextBridge.exposeInMainWorld('myAPI', {\n *   doAThing: () => {}\n *  })\n *\n *\n * WARNING!\n * If accessing Node functionality (like importing @electron/remote) then in your\n * electron-main.js you will need to set the following when you instantiate BrowserWindow:\n *\n * mainWindow = new BrowserWindow({\n *   // ...\n *   webPreferences: {\n *     // ...\n *     sandbox: false // <-- to be able to import @electron/remote in preload script\n *   }\n * }\n */\n\n\n\n\n\nlet db = (0,_api_db_api__WEBPACK_IMPORTED_MODULE_3__.loadDb)();\nelectron__WEBPACK_IMPORTED_MODULE_0__.contextBridge.exposeInMainWorld(\"DB\", {\n  getAll: tableName => {\n    const table = (0,_api_db_api__WEBPACK_IMPORTED_MODULE_3__.getTable)(tableName);\n    return table;\n  },\n  insert: (tableName, payload = {}) => {\n    const newRecord = insertRecord(tableName, payload);\n    return newRecord;\n  },\n  saveTable: (tableName, table) => {\n    (0,_api_db_api__WEBPACK_IMPORTED_MODULE_3__.setTable)(tableName, table);\n  },\n  getTrackFile: (id, track) => {\n    const source = path__WEBPACK_IMPORTED_MODULE_1__.resolve(_api_db_api__WEBPACK_IMPORTED_MODULE_3__.dir, \"programs\", id, track);\n    const buffer = (0,fs__WEBPACK_IMPORTED_MODULE_2__.readFileSync)(source);\n    let arrayBuffer = buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);\n    arrayBuffer = [arrayBuffer];\n    return new File(arrayBuffer, source);\n  }\n});\n\n//# sourceURL=webpack://aquadoctor/./src-electron/electron-preload.js?");

/***/ }),

/***/ "./src/services/tools.js":
/*!*******************************!*\
  !*** ./src/services/tools.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"liteCopy\": () => (/* binding */ liteCopy)\n/* harmony export */ });\nconst liteCopy = value => {\n  return JSON.parse(JSON.stringify(value));\n};\n\n//# sourceURL=webpack://aquadoctor/./src/services/tools.js?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src-electron/electron-preload.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;