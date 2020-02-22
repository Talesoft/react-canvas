/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Canvas2d.tsx":
/*!**************************!*\
  !*** ./src/Canvas2d.tsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __webpack_require__(/*! react */ \"react\");\r\nconst react_2 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst context_1 = __webpack_require__(/*! ./common/context */ \"./src/common/context.ts\");\r\nconst fitCanvas_1 = __importDefault(__webpack_require__(/*! ./common/fitCanvas */ \"./src/common/fitCanvas.ts\"));\r\nfunction Canvas2d({ children }) {\r\n    const ref = react_1.useRef(null);\r\n    const [context, setContext] = react_1.useState(undefined);\r\n    react_1.useEffect(() => {\r\n        if (!ref.current) {\r\n            throw new Error('Failed to get canvas ref');\r\n        }\r\n        const ctx = ref.current.getContext('2d');\r\n        if (!ctx) {\r\n            throw new Error('Failed to get 2d context');\r\n        }\r\n        fitCanvas_1.default(ref.current);\r\n        setContext(ctx);\r\n    }, []);\r\n    react_1.useEffect(() => {\r\n        if (!ref.current) {\r\n            throw new Error('Failed to get canvas ref');\r\n        }\r\n        const canvas = ref.current;\r\n        const onResize = () => fitCanvas_1.default(canvas);\r\n        addEventListener('resize', onResize);\r\n        return () => removeEventListener('resize', onResize);\r\n    }, []);\r\n    react_1.useEffect(() => {\r\n        if (!context) {\r\n            return;\r\n        }\r\n        console.log('-> Clear Canvas');\r\n        context.clearRect(0, 0, context.canvas.width, context.canvas.height);\r\n    });\r\n    return (react_2.default.createElement(context_1.Canvas2dProvider, { value: context },\r\n        children,\r\n        react_2.default.createElement(\"canvas\", { ref: ref })));\r\n}\r\nexports.default = Canvas2d;\r\n\n\n//# sourceURL=webpack:///./src/Canvas2d.tsx?");

/***/ }),

/***/ "./src/common/context.ts":
/*!*******************************!*\
  !*** ./src/common/context.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __webpack_require__(/*! react */ \"react\");\r\nexports.Canvas2dContext = react_1.createContext(undefined);\r\nexports.Canvas2dProvider = exports.Canvas2dContext.Provider;\r\nexports.Canvas2dConsumer = exports.Canvas2dContext.Consumer;\r\n\n\n//# sourceURL=webpack:///./src/common/context.ts?");

/***/ }),

/***/ "./src/common/fitCanvas.ts":
/*!*********************************!*\
  !*** ./src/common/fitCanvas.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst pixelRatio_1 = __importDefault(__webpack_require__(/*! ./pixelRatio */ \"./src/common/pixelRatio.ts\"));\r\nfunction fitCanvas(canvas) {\r\n    const parentElement = canvas.parentElement;\r\n    if (!parentElement) {\r\n        throw new Error('Failed to fit a canvas without a parent element');\r\n    }\r\n    const { clientWidth, clientHeight } = parentElement;\r\n    Object.assign(canvas.style, {\r\n        width: `${clientWidth}px`,\r\n        height: `${clientHeight}px`,\r\n    });\r\n    Object.assign(canvas, {\r\n        width: clientWidth * pixelRatio_1.default,\r\n        height: clientHeight * pixelRatio_1.default,\r\n    });\r\n}\r\nexports.default = fitCanvas;\r\n\n\n//# sourceURL=webpack:///./src/common/fitCanvas.ts?");

/***/ }),

/***/ "./src/common/pixelRatio.ts":
/*!**********************************!*\
  !*** ./src/common/pixelRatio.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst pixelRatio = 'devicePixelRatio' in window ? devicePixelRatio : 1;\r\nexports.default = pixelRatio;\r\n\n\n//# sourceURL=webpack:///./src/common/pixelRatio.ts?");

/***/ }),

/***/ "./src/hooks/useCanvas2dContext.ts":
/*!*****************************************!*\
  !*** ./src/hooks/useCanvas2dContext.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __webpack_require__(/*! react */ \"react\");\r\nconst context_1 = __webpack_require__(/*! ../common/context */ \"./src/common/context.ts\");\r\nfunction useCanvas2dContext() {\r\n    return react_1.useContext(context_1.Canvas2dContext);\r\n}\r\nexports.default = useCanvas2dContext;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useCanvas2dContext.ts?");

/***/ }),

/***/ "./src/hooks/useCanvas2dEffect.ts":
/*!****************************************!*\
  !*** ./src/hooks/useCanvas2dEffect.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __webpack_require__(/*! react */ \"react\");\r\nconst useCanvas2dContext_1 = __importDefault(__webpack_require__(/*! ./useCanvas2dContext */ \"./src/hooks/useCanvas2dContext.ts\"));\r\nfunction useCanvas2dEffect(effect) {\r\n    const ctx = useCanvas2dContext_1.default();\r\n    react_1.useEffect(() => {\r\n        if (!ctx) {\r\n            return;\r\n        }\r\n        effect(ctx);\r\n    });\r\n}\r\nexports.default = useCanvas2dEffect;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useCanvas2dEffect.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./common/context */ \"./src/common/context.ts\"));\r\nvar Canvas2d_1 = __webpack_require__(/*! ./Canvas2d */ \"./src/Canvas2d.tsx\");\r\nexports.Canvas2d = Canvas2d_1.default;\r\nvar fitCanvas_1 = __webpack_require__(/*! ./common/fitCanvas */ \"./src/common/fitCanvas.ts\");\r\nexports.fitCanvas = fitCanvas_1.default;\r\nvar pixelRatio_1 = __webpack_require__(/*! ./common/pixelRatio */ \"./src/common/pixelRatio.ts\");\r\nexports.pixelRatio = pixelRatio_1.default;\r\nvar Rectangle_1 = __webpack_require__(/*! ./shapes/Rectangle */ \"./src/shapes/Rectangle.tsx\");\r\nexports.Rectangle = Rectangle_1.default;\r\nvar useCanvas2dContext_1 = __webpack_require__(/*! ./hooks/useCanvas2dContext */ \"./src/hooks/useCanvas2dContext.ts\");\r\nexports.useCanvas2dContext = useCanvas2dContext_1.default;\r\nvar useCanvas2dEffect_1 = __webpack_require__(/*! ./hooks/useCanvas2dEffect */ \"./src/hooks/useCanvas2dEffect.ts\");\r\nexports.useCanvas2dEffect = useCanvas2dEffect_1.default;\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/shapes/Rectangle.tsx":
/*!**********************************!*\
  !*** ./src/shapes/Rectangle.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst useCanvas2dEffect_1 = __importDefault(__webpack_require__(/*! ../hooks/useCanvas2dEffect */ \"./src/hooks/useCanvas2dEffect.ts\"));\r\nfunction Rectangle({ x, y, width, height, fill, stroke }) {\r\n    useCanvas2dEffect_1.default(ctx => {\r\n        console.log(`-> Draw Rectangle ${x}, ${y}, ${width}, ${height}`);\r\n        if (fill) {\r\n            ctx.fillRect(x, y, width, height);\r\n        }\r\n        if (stroke) {\r\n            ctx.strokeRect(x, y, width, height);\r\n        }\r\n    });\r\n    return null;\r\n}\r\nexports.default = Rectangle;\r\n\n\n//# sourceURL=webpack:///./src/shapes/Rectangle.tsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ })

/******/ });