/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/authorization.ts":
/*!*****************************************!*\
  !*** ./src/components/authorization.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* eslint-disable @typescript-eslint/ban-ts-comment */\r\n/* eslint-disable @typescript-eslint/no-var-requires */\r\n// @ts-ignore\r\n// @ts-nocheck\r\n\r\n\r\n\r\nfunction authorization() {\r\n    // const express = require(\"express\");\r\n    // const fs = require(\"fs\");\r\n    const app = express__WEBPACK_IMPORTED_MODULE_1__();\r\n    const pathToBuild = path__WEBPACK_IMPORTED_MODULE_2__.resolve() + \"\\\\build\\\\resources\\\\\";\r\n    app.use(express__WEBPACK_IMPORTED_MODULE_1__.json());\r\n    app.get(\"/listUsers\", function (req, res) {\r\n        fs__WEBPACK_IMPORTED_MODULE_0__.readFile(pathToBuild + \"users.json\", \"utf8\", function (err, data) {\r\n            console.log(pathToBuild);\r\n            res.end(data);\r\n        });\r\n    });\r\n    app.post(\"/addUser\", function (req, res) {\r\n        // First read existing users.\r\n        const reqData = req.body;\r\n        fs__WEBPACK_IMPORTED_MODULE_0__.readFile(pathToBuild + \"users.json\", \"utf8\", function (err, data) {\r\n            try {\r\n                const newData = JSON.parse(data);\r\n                const newId = newData[`${newData.length - 1}`].id + 1;\r\n                newData.forEach((elem) => {\r\n                    if (elem.email === reqData.email) {\r\n                        res.end('THIS EMAIL EXIST');\r\n                        throw new Error('Error: this email exist');\r\n                    }\r\n                });\r\n                reqData.id = newId;\r\n                newData.push(reqData);\r\n                fs__WEBPACK_IMPORTED_MODULE_0__.writeFile(pathToBuild + \"users.json\", JSON.stringify(newData), {}, (err) => { return err; });\r\n                res.end(JSON.stringify(newData));\r\n            }\r\n            catch (err) {\r\n                return err;\r\n            }\r\n        });\r\n    });\r\n    app.get(\"/:id\", function (req, res) {\r\n        // First read existing users.\r\n        fs__WEBPACK_IMPORTED_MODULE_0__.readFile(pathToBuild + \"users.json\", \"utf8\", function (err, data) {\r\n            const users = JSON.parse(data);\r\n            let user = {};\r\n            users.forEach((elem) => {\r\n                if ((elem.id = req.params.id)) {\r\n                    user = elem;\r\n                }\r\n            });\r\n            res.end(JSON.stringify(user));\r\n        });\r\n    });\r\n    app.delete('/deleteUser/:id', function (req, res) {\r\n        // First read existing users.\r\n        fs__WEBPACK_IMPORTED_MODULE_0__.readFile(pathToBuild + \"users.json\", 'utf8', function (err, data) {\r\n            const newData = JSON.parse(data);\r\n            newData.forEach((elem, index) => {\r\n                if (elem.id == req.params.id) {\r\n                    console.log(elem.id);\r\n                    console.log(req.params.id);\r\n                    newData.splice(index, 1);\r\n                    fs__WEBPACK_IMPORTED_MODULE_0__.writeFile(pathToBuild + \"users.json\", JSON.stringify(newData), {}, (err) => { return err; });\r\n                }\r\n            });\r\n            res.end(JSON.stringify(newData));\r\n        });\r\n    });\r\n    const server = app.listen(8081, function () {\r\n        const host = server.address().address;\r\n        const port = server.address().port;\r\n        console.log(\"Example app listening at http://%s:%s\", host, port);\r\n    });\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authorization);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQzlCLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDdEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQztRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDLENBQUMsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ycy1jbG9uZS1hcGkvLi9zcmMvY29tcG9uZW50cy9hdXRob3JpemF0aW9uLnRzPzQ0NGIiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXMgKi9cclxuLy8gQHRzLWlnbm9yZVxyXG4vLyBAdHMtbm9jaGVja1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5mdW5jdGlvbiBhdXRob3JpemF0aW9uKCkge1xyXG4vLyBjb25zdCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XHJcbi8vIGNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcbmNvbnN0IHBhdGhUb0J1aWxkID0gcGF0aC5yZXNvbHZlKCkgKyBcIlxcXFxidWlsZFxcXFxyZXNvdXJjZXNcXFxcXCI7XHJcblxyXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcclxuXHJcbmFwcC5nZXQoXCIvbGlzdFVzZXJzXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xyXG4gIGZzLnJlYWRGaWxlKHBhdGhUb0J1aWxkICsgXCJ1c2Vycy5qc29uXCIsIFwidXRmOFwiLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhwYXRoVG9CdWlsZCk7XHJcbiAgICByZXMuZW5kKGRhdGEpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbmFwcC5wb3N0KFwiL2FkZFVzZXJcIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XHJcbiAgLy8gRmlyc3QgcmVhZCBleGlzdGluZyB1c2Vycy5cclxuICBjb25zdCByZXFEYXRhID0gcmVxLmJvZHk7XHJcbiAgZnMucmVhZEZpbGUocGF0aFRvQnVpbGQgKyBcInVzZXJzLmpzb25cIiwgXCJ1dGY4XCIsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IG5ld0RhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICBjb25zdCBuZXdJZCA9IG5ld0RhdGFbYCR7bmV3RGF0YS5sZW5ndGggLSAxfWBdLmlkICsgMTtcclxuICAgICAgbmV3RGF0YS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW0uZW1haWwgPT09IHJlcURhdGEuZW1haWwpIHtcclxuICAgICAgICAgIHJlcy5lbmQoJ1RISVMgRU1BSUwgRVhJU1QnKTtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3I6IHRoaXMgZW1haWwgZXhpc3QnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXFEYXRhLmlkID0gbmV3SWQ7XHJcbiAgICAgIG5ld0RhdGEucHVzaChyZXFEYXRhKTtcclxuICAgICAgZnMud3JpdGVGaWxlKFxyXG4gICAgICAgIHBhdGhUb0J1aWxkICsgXCJ1c2Vycy5qc29uXCIsXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkobmV3RGF0YSksXHJcbiAgICAgICAge30sXHJcbiAgICAgICAgKGVycikgPT4ge3JldHVybiBlcnI7fVxyXG4gICAgICApO1xyXG4gICAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KG5ld0RhdGEpKTtcclxuICAgIH0gY2F0Y2ggKGVycikge3JldHVybiBlcnI7fVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbmFwcC5nZXQoXCIvOmlkXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xyXG4gIC8vIEZpcnN0IHJlYWQgZXhpc3RpbmcgdXNlcnMuXHJcbiAgZnMucmVhZEZpbGUocGF0aFRvQnVpbGQgKyBcInVzZXJzLmpzb25cIiwgXCJ1dGY4XCIsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcclxuICAgIGNvbnN0IHVzZXJzID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgIGxldCB1c2VyID0ge307XHJcbiAgICB1c2Vycy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgIGlmICgoZWxlbS5pZCA9IHJlcS5wYXJhbXMuaWQpKSB7XHJcbiAgICAgICAgdXNlciA9IGVsZW07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuYXBwLmRlbGV0ZSgnL2RlbGV0ZVVzZXIvOmlkJywgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XHJcbiAgLy8gRmlyc3QgcmVhZCBleGlzdGluZyB1c2Vycy5cclxuICBmcy5yZWFkRmlsZShwYXRoVG9CdWlsZCArIFwidXNlcnMuanNvblwiLCAndXRmOCcsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcclxuICAgICBjb25zdCBuZXdEYXRhID0gSlNPTi5wYXJzZSggZGF0YSApO1xyXG4gICAgIG5ld0RhdGEuZm9yRWFjaCgoZWxlbSwgaW5kZXgpID0+IHtcclxuICAgICAgIGlmIChlbGVtLmlkID09IHJlcS5wYXJhbXMuaWQpe1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhlbGVtLmlkKTtcclxuICAgICAgICAgY29uc29sZS5sb2cocmVxLnBhcmFtcy5pZCk7XHJcbiAgICAgICAgIG5ld0RhdGEuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBmcy53cml0ZUZpbGUoXHJcbiAgICAgICAgICBwYXRoVG9CdWlsZCArIFwidXNlcnMuanNvblwiLFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkobmV3RGF0YSksXHJcbiAgICAgICAgICB7fSxcclxuICAgICAgICAgIChlcnIpID0+IHtyZXR1cm4gZXJyO31cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgfSk7XHJcbiAgICAgcmVzLmVuZCggSlNPTi5zdHJpbmdpZnkobmV3RGF0YSkpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbmNvbnN0IHNlcnZlciA9IGFwcC5saXN0ZW4oODA4MSwgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGhvc3QgPSBzZXJ2ZXIuYWRkcmVzcygpLmFkZHJlc3M7XHJcbiAgY29uc3QgcG9ydCA9IHNlcnZlci5hZGRyZXNzKCkucG9ydDtcclxuICBjb25zb2xlLmxvZyhcIkV4YW1wbGUgYXBwIGxpc3RlbmluZyBhdCBodHRwOi8vJXM6JXNcIiwgaG9zdCwgcG9ydCk7XHJcbn0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRob3JpemF0aW9uOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/authorization.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _resources_users_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources/users.json */ \"./src/resources/users.json\");\n/* harmony import */ var _resources_playlists_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources/playlists.json */ \"./src/resources/playlists.json\");\n/* harmony import */ var _components_authorization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/authorization */ \"./src/components/authorization.ts\");\n\r\n\r\n\r\n(0,_components_authorization__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFnQztBQUNJO0FBQ21CO0FBQ3ZELHFFQUFhLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JzLWNsb25lLWFwaS8uL3NyYy9pbmRleC50cz9mZmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9yZXNvdXJjZXMvdXNlcnMuanNvbic7XHJcbmltcG9ydCAnLi9yZXNvdXJjZXMvcGxheWxpc3RzLmpzb24nO1xyXG5pbXBvcnQgYXV0aG9yaXphdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvYXV0aG9yaXphdGlvbic7XHJcbmF1dGhvcml6YXRpb24oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "express":
/*!*************************************!*\
  !*** external "require('express')" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require('express');

/***/ }),

/***/ "fs":
/*!********************************!*\
  !*** external "require('fs')" ***!
  \********************************/
/***/ ((module) => {

module.exports = require('fs');

/***/ }),

/***/ "path":
/*!**********************************!*\
  !*** external "require('path')" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require('path');

/***/ }),

/***/ "./src/resources/playlists.json":
/*!**************************************!*\
  !*** ./src/resources/playlists.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"userId":1,"likedPodcasts":[],"subscribedPodcasts":[],"playlist1":[]},{"userId":2,"likedPodcasts":[],"subscribedPodcasts":[],"playlist1":[]},{"userId":3,"likedPodcasts":[],"subscribedPodcasts":[],"playlist1":[]}]');

/***/ }),

/***/ "./src/resources/users.json":
/*!**********************************!*\
  !*** ./src/resources/users.json ***!
  \**********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"userName":"Andrew","userPassword":"password1","email":"test1@gmail.com","phone":"+375259882978"},{"id":2,"userName":"Anastasiya","userPassword":"password2","email":"test2@gmail.com","phone":"+375291111111"},{"id":3,"userName":"Yaroslav","userPassword":"password3","email":"test3@gmail.com","phone":"+79030455953"}]');

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;