/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const WeatherData = () =>{\n\n    const getData = async () =>{\n\n        const data = await fetch(\"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/07930?unitGroup=metric&key=5583ST8L2ELBXT2B3GC4V5UKN&contentType=json\")\n\n        console.log(data);\n\n    }\n\n    return {\n\n        getData\n\n    }\n}\n\nWeatherData().getData();\n\n//# sourceURL=webpack://weather-forcast/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;