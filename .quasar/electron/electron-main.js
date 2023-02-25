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

/***/ "./src-electron/electron-main.js":
/*!***************************************!*\
  !*** ./src-electron/electron-main.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("var __dirname = \"src-electron\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! os */ \"os\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n// needed in case process is undefined under Linux\nconst platform = process.platform || os__WEBPACK_IMPORTED_MODULE_2___default().platform();\ntry {\n  if (platform === \"win32\" && electron__WEBPACK_IMPORTED_MODULE_0__.nativeTheme.shouldUseDarkColors === true) {\n    (__webpack_require__(/*! fs */ \"fs\").unlinkSync)(path__WEBPACK_IMPORTED_MODULE_1___default().join(electron__WEBPACK_IMPORTED_MODULE_0__.app.getPath(\"userData\"), \"DevTools Extensions\"));\n  }\n} catch (_) {}\nlet mainWindow;\nfunction createWindow() {\n  /**\n   * Initial window options\n   */\n  mainWindow = new electron__WEBPACK_IMPORTED_MODULE_0__.BrowserWindow({\n    icon: path__WEBPACK_IMPORTED_MODULE_1___default().resolve(__dirname, \"icons/icon.png\"),\n    // tray icon\n    width: 1000,\n    height: 600,\n    fullscreen: true,\n    useContentSize: true,\n    webPreferences: {\n      contextIsolation: true,\n      // More info: https://v2.quasar.dev/quasar-cli-webpack/developing-electron-apps/electron-preload-script\n      preload: path__WEBPACK_IMPORTED_MODULE_1___default().resolve(__dirname, \"C:\\\\WEB\\\\aquadoctor\\\\.quasar\\\\electron\\\\electron-preload.js\"),\n      nodeIntegration: true\n    }\n  });\n  mainWindow.removeMenu();\n  mainWindow.loadURL(\"http://localhost:8080\");\n  if (true) {\n    // if on DEV or Production with debug enabled\n    mainWindow.webContents.openDevTools();\n  } else {}\n  mainWindow.on(\"closed\", () => {\n    mainWindow = null;\n  });\n}\nelectron__WEBPACK_IMPORTED_MODULE_0__.app.whenReady().then(async () => {\n  // await loadDb();\n  createWindow();\n});\nelectron__WEBPACK_IMPORTED_MODULE_0__.app.on(\"window-all-closed\", () => {\n  if (platform !== \"darwin\") {\n    electron__WEBPACK_IMPORTED_MODULE_0__.app.quit();\n  }\n});\nelectron__WEBPACK_IMPORTED_MODULE_0__.app.on(\"activate\", () => {\n  if (mainWindow === null) {\n    createWindow();\n  }\n});\n\n//# sourceURL=webpack://aquadoctor/./src-electron/electron-main.js?");

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

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src-electron/electron-main.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;