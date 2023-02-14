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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\nfunction authorization() {\r\n    // const express = require(\"express\");\r\n    // const fs = require(\"fs\");\r\n    const app = express__WEBPACK_IMPORTED_MODULE_1___default()();\r\n    const pathToBuild = path__WEBPACK_IMPORTED_MODULE_2__.resolve() + \"\\\\build\\\\resources\\\\\";\r\n    app.use(express__WEBPACK_IMPORTED_MODULE_1___default().json());\r\n    app.get(\"/listUsers\", function (req, res) {\r\n        fs__WEBPACK_IMPORTED_MODULE_0__.readFile(pathToBuild + \"users.json\", \"utf8\", function (err, data) {\r\n            console.log(pathToBuild);\r\n            res.end(data);\r\n        });\r\n    });\r\n    app.post(\"/addUser\", function (req, res) {\r\n        // First read existing users.\r\n        const reqData = req.body;\r\n        fs__WEBPACK_IMPORTED_MODULE_0__.readFile(pathToBuild + \"users.json\", \"utf8\", function (err, data) {\r\n            try {\r\n                const newData = JSON.parse(data);\r\n                const newId = newData[`${newData.length - 1}`].id + 1;\r\n                newData.forEach(elem => {\r\n                    if (elem.email === reqData.email) {\r\n                        res.status(500);\r\n                        res.end('THIS EMAIL EXIST');\r\n                    }\r\n                });\r\n                reqData.id = newId;\r\n                newData.push(reqData);\r\n                fs__WEBPACK_IMPORTED_MODULE_0__.writeFile(pathToBuild + \"users.json\", JSON.stringify(newData), {}, (err) => { return err; });\r\n                res.end(JSON.stringify(newData));\r\n            }\r\n            catch (err) {\r\n                return err;\r\n            }\r\n        });\r\n    });\r\n    app.get(\"/:id\", function (req, res) {\r\n        // First read existing users.\r\n        fs__WEBPACK_IMPORTED_MODULE_0__.readFile(pathToBuild + \"users.json\", \"utf8\", function (err, data) {\r\n            const users = JSON.parse(data);\r\n            let user = {};\r\n            users.forEach((elem) => {\r\n                if ((elem.id == Number(req.params.id))) {\r\n                    user = elem;\r\n                }\r\n            });\r\n            if (Object.keys(user).length === 0) {\r\n                res.status(404);\r\n                res.end('Not such id');\r\n            }\r\n            else {\r\n                res.end(JSON.stringify(user));\r\n            }\r\n        });\r\n    });\r\n    app.delete('/deleteUser/:id', function (req, res) {\r\n        // First read existing users.\r\n        fs__WEBPACK_IMPORTED_MODULE_0__.readFile(pathToBuild + \"users.json\", 'utf8', function (err, data) {\r\n            const newData = JSON.parse(data);\r\n            newData.forEach((elem, index) => {\r\n                if (elem.id == Number(req.params.id)) {\r\n                    console.log(elem.id);\r\n                    console.log(req.params.id);\r\n                    newData.splice(index, 1);\r\n                    fs__WEBPACK_IMPORTED_MODULE_0__.writeFile(pathToBuild + \"users.json\", JSON.stringify(newData), {}, (err) => { return err; });\r\n                }\r\n            });\r\n            res.end(JSON.stringify(newData));\r\n        });\r\n    });\r\n    const server = app.listen(8081, function () {\r\n        const host = server.address().address;\r\n        const port = server.address().port;\r\n        console.log(\"Example app listening at http://%s:%s\", host, port);\r\n    });\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authorization);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsR0FBRyxFQUFFLEVBQUUsR0FBRSxPQUFPLEdBQUcsQ0FBQyxFQUFDLENBQ3ZCLENBQUM7aUJBQ0g7WUFDRixDQUFDLENBQUMsQ0FBQztZQUNILEdBQUcsQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtRQUM5QixNQUFNLElBQUksR0FBSSxNQUFNLENBQUMsT0FBTyxFQUFjLENBQUMsT0FBTyxDQUFDO1FBQ25ELE1BQU0sSUFBSSxHQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQWUsQ0FBQyxJQUFJLENBQUM7UUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQyxDQUFDLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWUsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnMtY2xvbmUtYXBpLy4vc3JjL2NvbXBvbmVudHMvYXV0aG9yaXphdGlvbi50cz80NDRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZXIsIGFkZHJlc3MgfSBmcm9tICcuL3R5cGUnO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuZnVuY3Rpb24gYXV0aG9yaXphdGlvbigpIHtcclxuLy8gY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xyXG4vLyBjb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5jb25zdCBwYXRoVG9CdWlsZCA9IHBhdGgucmVzb2x2ZSgpICsgXCJcXFxcYnVpbGRcXFxccmVzb3VyY2VzXFxcXFwiO1xyXG5cclxuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XHJcblxyXG5hcHAuZ2V0KFwiL2xpc3RVc2Vyc1wiLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuICBmcy5yZWFkRmlsZShwYXRoVG9CdWlsZCArIFwidXNlcnMuanNvblwiLCBcInV0ZjhcIiwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2cocGF0aFRvQnVpbGQpO1xyXG4gICAgcmVzLmVuZChkYXRhKTtcclxuICB9KTtcclxufSk7XHJcblxyXG5hcHAucG9zdChcIi9hZGRVc2VyXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xyXG4gIC8vIEZpcnN0IHJlYWQgZXhpc3RpbmcgdXNlcnMuXHJcbiAgY29uc3QgcmVxRGF0YSA9IHJlcS5ib2R5O1xyXG4gIGZzLnJlYWRGaWxlKHBhdGhUb0J1aWxkICsgXCJ1c2Vycy5qc29uXCIsIFwidXRmOFwiLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBuZXdEYXRhID0gSlNPTi5wYXJzZShkYXRhKSBhcyB1c2VyW107XHJcbiAgICAgIGNvbnN0IG5ld0lkID0gbmV3RGF0YVtgJHtuZXdEYXRhLmxlbmd0aCAtIDF9YF0uaWQgKyAxO1xyXG4gICAgICBuZXdEYXRhLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW0uZW1haWwgPT09IHJlcURhdGEuZW1haWwpIHtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKTtcclxuICAgICAgICAgIHJlcy5lbmQoJ1RISVMgRU1BSUwgRVhJU1QnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXFEYXRhLmlkID0gbmV3SWQ7XHJcbiAgICAgIG5ld0RhdGEucHVzaChyZXFEYXRhKTtcclxuICAgICAgZnMud3JpdGVGaWxlKFxyXG4gICAgICAgIHBhdGhUb0J1aWxkICsgXCJ1c2Vycy5qc29uXCIsXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkobmV3RGF0YSksXHJcbiAgICAgICAge30sXHJcbiAgICAgICAgKGVycikgPT4ge3JldHVybiBlcnI7fVxyXG4gICAgICApO1xyXG4gICAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KG5ld0RhdGEpKTtcclxuICAgIH0gY2F0Y2ggKGVycikge3JldHVybiBlcnI7fVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbmFwcC5nZXQoXCIvOmlkXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xyXG4gIC8vIEZpcnN0IHJlYWQgZXhpc3RpbmcgdXNlcnMuXHJcbiAgZnMucmVhZEZpbGUocGF0aFRvQnVpbGQgKyBcInVzZXJzLmpzb25cIiwgXCJ1dGY4XCIsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcclxuICAgIGNvbnN0IHVzZXJzID0gSlNPTi5wYXJzZShkYXRhKSBhcyB1c2VyW107XHJcbiAgICBsZXQgdXNlciA9IHt9O1xyXG4gICAgdXNlcnMuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICBpZiAoKGVsZW0uaWQgPT0gTnVtYmVyKHJlcS5wYXJhbXMuaWQpKSkge1xyXG4gICAgICAgIHVzZXIgPSBlbGVtO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmIChPYmplY3Qua2V5cyh1c2VyKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmVzLnN0YXR1cyg0MDQpO1xyXG4gICAgICByZXMuZW5kKCdOb3Qgc3VjaCBpZCcpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbmFwcC5kZWxldGUoJy9kZWxldGVVc2VyLzppZCcsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xyXG4gIC8vIEZpcnN0IHJlYWQgZXhpc3RpbmcgdXNlcnMuXHJcbiAgZnMucmVhZEZpbGUocGF0aFRvQnVpbGQgKyBcInVzZXJzLmpzb25cIiwgJ3V0ZjgnLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XHJcbiAgICAgY29uc3QgbmV3RGF0YSA9IEpTT04ucGFyc2UoIGRhdGEgKSBhcyB1c2VyW107XHJcbiAgICAgbmV3RGF0YS5mb3JFYWNoKChlbGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgaWYgKGVsZW0uaWQgPT0gTnVtYmVyKHJlcS5wYXJhbXMuaWQpKXtcclxuICAgICAgICAgY29uc29sZS5sb2coZWxlbS5pZCk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKHJlcS5wYXJhbXMuaWQpO1xyXG4gICAgICAgICBuZXdEYXRhLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgZnMud3JpdGVGaWxlKFxyXG4gICAgICAgICAgcGF0aFRvQnVpbGQgKyBcInVzZXJzLmpzb25cIixcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KG5ld0RhdGEpLFxyXG4gICAgICAgICAge30sXHJcbiAgICAgICAgICAoZXJyKSA9PiB7cmV0dXJuIGVycjt9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgIH0pO1xyXG4gICAgIHJlcy5lbmQoIEpTT04uc3RyaW5naWZ5KG5ld0RhdGEpKTtcclxuICB9KTtcclxufSk7XHJcblxyXG5jb25zdCBzZXJ2ZXIgPSBhcHAubGlzdGVuKDgwODEsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBob3N0ID0gKHNlcnZlci5hZGRyZXNzKCkgYXMgYWRkcmVzcykuYWRkcmVzcztcclxuICBjb25zdCBwb3J0ID0gKHNlcnZlci5hZGRyZXNzKCkgYXMgYWRkcmVzcyApLnBvcnQ7XHJcbiAgY29uc29sZS5sb2coXCJFeGFtcGxlIGFwcCBsaXN0ZW5pbmcgYXQgaHR0cDovLyVzOiVzXCIsIGhvc3QsIHBvcnQpO1xyXG59KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aG9yaXphdGlvbjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/authorization.ts\n");

/***/ }),

/***/ "./src/components/playlists.ts":
/*!*************************************!*\
  !*** ./src/components/playlists.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* eslint-disable @typescript-eslint/ban-ts-comment */\r\n/* eslint-disable @typescript-eslint/no-var-requires */\r\n// @ts-ignore\r\n// @ts-nocheck\r\n\r\n\r\n\r\nfunction playlist() {\r\n    // const express = require(\"express\");\r\n    // const fs = require(\"fs\");\r\n    const app1 = express__WEBPACK_IMPORTED_MODULE_1__();\r\n    const pathToBuild = path__WEBPACK_IMPORTED_MODULE_2__.resolve() + \"\\\\build\\\\resources\\\\\";\r\n    app1.use(express__WEBPACK_IMPORTED_MODULE_1__.json());\r\n    app1.get(\"/allPlaylists\", function (req, res) {\r\n        fs__WEBPACK_IMPORTED_MODULE_0__.readFile(pathToBuild + \"playlists.json\", \"utf8\", function (err, data) {\r\n            console.log(pathToBuild);\r\n            res.end(data);\r\n        });\r\n    });\r\n    // app.post(\"/addPlaylist\", function (req, res) {\r\n    //   // First read existing users.\r\n    //   const reqData = req.body;\r\n    //   fs.readFile(pathToBuild + \"playlist.json\", \"utf8\", function (err, data) {\r\n    //     try {\r\n    //       const newData = JSON.parse(data);\r\n    //       const newId = newData[`${newData.length - 1}`].id + 1;\r\n    //       newData.forEach((elem) => {\r\n    //         if (elem.email === reqData.email) {\r\n    //           res.end('THIS EMAIL EXIST');\r\n    //           throw new Error('Error: this email exist');\r\n    //         }\r\n    //       });\r\n    //       reqData.id = newId;\r\n    //       newData.push(reqData);\r\n    //       fs.writeFile(\r\n    //         pathToBuild + \"playlist.json\",\r\n    //         JSON.stringify(newData),\r\n    //         {},\r\n    //         (err) => {return err;}\r\n    //       );\r\n    //       res.end(JSON.stringify(newData));\r\n    //     } catch (err) {return err;}\r\n    //   });\r\n    // });\r\n    app1.get(\"/:id/:playlist\", function (req, res) {\r\n        // First read existing users.\r\n        fs__WEBPACK_IMPORTED_MODULE_0__.readFile(pathToBuild + \"playlists.json\", \"utf8\", function (err, data) {\r\n            // const users = JSON.parse(data);\r\n            // let user = {};\r\n            // users.forEach((elem) => {\r\n            //   if ((elem.id = req.params.id)) {\r\n            //     user = elem;\r\n            //   }\r\n            // });\r\n            console.log(req.params);\r\n            res.end(JSON.stringify(req.params));\r\n        });\r\n        console.log(res.params);\r\n    });\r\n    // app.delete('/deletePodcast/:id&&:playlist', function (req, res) {\r\n    //   // First read existing users.\r\n    //   fs.readFile(pathToBuild + \"playlist.json\", 'utf8', function (err, data) {\r\n    //      const newData = JSON.parse( data );\r\n    //      newData.forEach((elem, index) => {\r\n    //        if (elem.id == req.params.id){\r\n    //          console.log(elem.id);\r\n    //          console.log(req.params.id);\r\n    //          newData.splice(index, 1);\r\n    //         fs.writeFile(\r\n    //           pathToBuild + \"playlist.json\",\r\n    //           JSON.stringify(newData),\r\n    //           {},\r\n    //           (err) => {return err;}\r\n    //         );\r\n    //       }\r\n    //      });\r\n    //      res.end( JSON.stringify(newData));\r\n    //   });\r\n    // });\r\n    const server = app1.listen(8082, function () {\r\n        const host = server.address().address;\r\n        const port = server.address().port;\r\n        console.log(\"Example app listening at http://%s:%s\", host, port);\r\n    });\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playlist);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNILENBQUM7QUFFRCxpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ycy1jbG9uZS1hcGkvLi9zcmMvY29tcG9uZW50cy9wbGF5bGlzdHMudHM/ZjQzMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnQgKi9cclxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXZhci1yZXF1aXJlcyAqL1xyXG4vLyBAdHMtaWdub3JlXHJcbi8vIEB0cy1ub2NoZWNrXHJcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcclxuXHJcbmZ1bmN0aW9uIHBsYXlsaXN0KCkge1xyXG4vLyBjb25zdCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XHJcbi8vIGNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xyXG5jb25zdCBhcHAxID0gZXhwcmVzcygpO1xyXG5jb25zdCBwYXRoVG9CdWlsZCA9IHBhdGgucmVzb2x2ZSgpICsgXCJcXFxcYnVpbGRcXFxccmVzb3VyY2VzXFxcXFwiO1xyXG5cclxuYXBwMS51c2UoZXhwcmVzcy5qc29uKCkpO1xyXG5cclxuYXBwMS5nZXQoXCIvYWxsUGxheWxpc3RzXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xyXG4gIGZzLnJlYWRGaWxlKHBhdGhUb0J1aWxkICsgXCJwbGF5bGlzdHMuanNvblwiLCBcInV0ZjhcIiwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2cocGF0aFRvQnVpbGQpO1xyXG4gICAgcmVzLmVuZChkYXRhKTtcclxuICB9KTtcclxufSk7XHJcblxyXG4vLyBhcHAucG9zdChcIi9hZGRQbGF5bGlzdFwiLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuLy8gICAvLyBGaXJzdCByZWFkIGV4aXN0aW5nIHVzZXJzLlxyXG4vLyAgIGNvbnN0IHJlcURhdGEgPSByZXEuYm9keTtcclxuLy8gICBmcy5yZWFkRmlsZShwYXRoVG9CdWlsZCArIFwicGxheWxpc3QuanNvblwiLCBcInV0ZjhcIiwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgY29uc3QgbmV3RGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbi8vICAgICAgIGNvbnN0IG5ld0lkID0gbmV3RGF0YVtgJHtuZXdEYXRhLmxlbmd0aCAtIDF9YF0uaWQgKyAxO1xyXG4vLyAgICAgICBuZXdEYXRhLmZvckVhY2goKGVsZW0pID0+IHtcclxuLy8gICAgICAgICBpZiAoZWxlbS5lbWFpbCA9PT0gcmVxRGF0YS5lbWFpbCkge1xyXG4vLyAgICAgICAgICAgcmVzLmVuZCgnVEhJUyBFTUFJTCBFWElTVCcpO1xyXG4vLyAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvcjogdGhpcyBlbWFpbCBleGlzdCcpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfSk7XHJcbi8vICAgICAgIHJlcURhdGEuaWQgPSBuZXdJZDtcclxuLy8gICAgICAgbmV3RGF0YS5wdXNoKHJlcURhdGEpO1xyXG4vLyAgICAgICBmcy53cml0ZUZpbGUoXHJcbi8vICAgICAgICAgcGF0aFRvQnVpbGQgKyBcInBsYXlsaXN0Lmpzb25cIixcclxuLy8gICAgICAgICBKU09OLnN0cmluZ2lmeShuZXdEYXRhKSxcclxuLy8gICAgICAgICB7fSxcclxuLy8gICAgICAgICAoZXJyKSA9PiB7cmV0dXJuIGVycjt9XHJcbi8vICAgICAgICk7XHJcbi8vICAgICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkobmV3RGF0YSkpO1xyXG4vLyAgICAgfSBjYXRjaCAoZXJyKSB7cmV0dXJuIGVycjt9XHJcbi8vICAgfSk7XHJcbi8vIH0pO1xyXG5cclxuYXBwMS5nZXQoXCIvOmlkLzpwbGF5bGlzdFwiLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuICAvLyBGaXJzdCByZWFkIGV4aXN0aW5nIHVzZXJzLlxyXG4gIGZzLnJlYWRGaWxlKHBhdGhUb0J1aWxkICsgXCJwbGF5bGlzdHMuanNvblwiLCBcInV0ZjhcIiwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xyXG4gICAgLy8gY29uc3QgdXNlcnMgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgLy8gbGV0IHVzZXIgPSB7fTtcclxuICAgIC8vIHVzZXJzLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgIC8vICAgaWYgKChlbGVtLmlkID0gcmVxLnBhcmFtcy5pZCkpIHtcclxuICAgIC8vICAgICB1c2VyID0gZWxlbTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXEucGFyYW1zKTtcclxuICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkocmVxLnBhcmFtcykpO1xyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKHJlcy5wYXJhbXMpO1xyXG59KTtcclxuXHJcbi8vIGFwcC5kZWxldGUoJy9kZWxldGVQb2RjYXN0LzppZCYmOnBsYXlsaXN0JywgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XHJcbi8vICAgLy8gRmlyc3QgcmVhZCBleGlzdGluZyB1c2Vycy5cclxuLy8gICBmcy5yZWFkRmlsZShwYXRoVG9CdWlsZCArIFwicGxheWxpc3QuanNvblwiLCAndXRmOCcsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcclxuLy8gICAgICBjb25zdCBuZXdEYXRhID0gSlNPTi5wYXJzZSggZGF0YSApO1xyXG4vLyAgICAgIG5ld0RhdGEuZm9yRWFjaCgoZWxlbSwgaW5kZXgpID0+IHtcclxuLy8gICAgICAgIGlmIChlbGVtLmlkID09IHJlcS5wYXJhbXMuaWQpe1xyXG4vLyAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtLmlkKTtcclxuLy8gICAgICAgICAgY29uc29sZS5sb2cocmVxLnBhcmFtcy5pZCk7XHJcbi8vICAgICAgICAgIG5ld0RhdGEuc3BsaWNlKGluZGV4LCAxKTtcclxuLy8gICAgICAgICBmcy53cml0ZUZpbGUoXHJcbi8vICAgICAgICAgICBwYXRoVG9CdWlsZCArIFwicGxheWxpc3QuanNvblwiLFxyXG4vLyAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkobmV3RGF0YSksXHJcbi8vICAgICAgICAgICB7fSxcclxuLy8gICAgICAgICAgIChlcnIpID0+IHtyZXR1cm4gZXJyO31cclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICAgfSk7XHJcbi8vICAgICAgcmVzLmVuZCggSlNPTi5zdHJpbmdpZnkobmV3RGF0YSkpO1xyXG4vLyAgIH0pO1xyXG4vLyB9KTtcclxuXHJcbmNvbnN0IHNlcnZlciA9IGFwcDEubGlzdGVuKDgwODIsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBob3N0ID0gc2VydmVyLmFkZHJlc3MoKS5hZGRyZXNzO1xyXG4gIGNvbnN0IHBvcnQgPSBzZXJ2ZXIuYWRkcmVzcygpLnBvcnQ7XHJcbiAgY29uc29sZS5sb2coXCJFeGFtcGxlIGFwcCBsaXN0ZW5pbmcgYXQgaHR0cDovLyVzOiVzXCIsIGhvc3QsIHBvcnQpO1xyXG59KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGxheWxpc3Q7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/playlists.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _resources_users_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources/users.json */ \"./src/resources/users.json\");\n/* harmony import */ var _resources_playlists_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources/playlists.json */ \"./src/resources/playlists.json\");\n/* harmony import */ var _components_authorization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/authorization */ \"./src/components/authorization.ts\");\n/* harmony import */ var _components_playlists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/playlists */ \"./src/components/playlists.ts\");\n\r\n\r\n\r\n\r\n(0,_components_authorization__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_components_playlists__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0M7QUFDSTtBQUNtQjtBQUNUO0FBQzlDLHFFQUFhLEVBQUUsQ0FBQztBQUNoQixpRUFBUSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ycy1jbG9uZS1hcGkvLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vcmVzb3VyY2VzL3VzZXJzLmpzb24nO1xyXG5pbXBvcnQgJy4vcmVzb3VyY2VzL3BsYXlsaXN0cy5qc29uJztcclxuaW1wb3J0IGF1dGhvcml6YXRpb24gZnJvbSAnLi9jb21wb25lbnRzL2F1dGhvcml6YXRpb24nO1xyXG5pbXBvcnQgcGxheWxpc3QgZnJvbSAnLi9jb21wb25lbnRzL3BsYXlsaXN0cyc7XHJcbmF1dGhvcml6YXRpb24oKTtcclxucGxheWxpc3QoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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

module.exports = JSON.parse('[{"userId":1,"likedPodcasts":[{"id":13387515273}],"subscribedPodcasts":[{"id":5723904}],"playlist1":[{"id":13330914891},{"id":13387460226},{"id":10548558719}]},{"userId":2,"likedPodcasts":[{"id":13387508685}],"subscribedPodcasts":[{"id":180707}],"playlist1":[{"id":13387436769},{"id":13387460227},{"id":10548519672}]},{"userId":3,"likedPodcasts":[{"id":12393581619}],"subscribedPodcasts":[{"id":3103401}],"playlist1":[{"id":13387425883},{"id":10549014669},{"id":10548545683}]}]');

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