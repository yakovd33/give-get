"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/meet/[id]";
exports.ids = ["pages/meet/[id]"];
exports.modules = {

/***/ "./helpers/AuthHelper.js":
/*!*******************************!*\
  !*** ./helpers/AuthHelper.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ApiHelper)\n/* harmony export */ });\nclass ApiHelper {\n    static isLogged() {\n        return this.getUser();\n    }\n    static saveUser(user) {\n        // User is an object\n        localStorage.setItem(\"user\", JSON.stringify(user));\n    }\n    static getUser() {\n        if (false) {}\n    }\n    static logout() {\n        localStorage.removeItem('user');\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL0F1dGhIZWxwZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BLFNBQVM7V0FDbkJDLFFBQVEsR0FBSSxDQUFDO1FBQ2hCLE1BQU0sQ0FBRSxJQUFJLENBQUNDLE9BQU87SUFDeEIsQ0FBQztXQUVNQyxRQUFRLENBQUVDLElBQUksRUFBRSxDQUFDO1FBQ3BCLEVBQW9CO1FBQ3BCQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFNLE9BQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSixJQUFJO0lBQ3BELENBQUM7V0FFTUYsT0FBTyxHQUFJLENBQUM7UUFDZixFQUFFLEVBQUUsS0FBNkIsRUFBRSxFQUVsQztJQUNMLENBQUM7V0FFTVMsTUFBTSxHQUFJLENBQUM7UUFDZE4sWUFBWSxDQUFDTyxVQUFVLENBQUMsQ0FBTTtJQUNsQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJ1aXRzLy4vaGVscGVycy9BdXRoSGVscGVyLmpzPzYzMDkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpSGVscGVyIHtcclxuICAgIHN0YXRpYyBpc0xvZ2dlZCAoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmdldFVzZXIoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNhdmVVc2VyICh1c2VyKSB7XHJcbiAgICAgICAgLy8gVXNlciBpcyBhbiBvYmplY3RcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkodXNlcikpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFVzZXIgKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbG9nb3V0ICgpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIkFwaUhlbHBlciIsImlzTG9nZ2VkIiwiZ2V0VXNlciIsInNhdmVVc2VyIiwidXNlciIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJnZXRJdGVtIiwibG9nb3V0IiwicmVtb3ZlSXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./helpers/AuthHelper.js\n");

/***/ }),

/***/ "./pages/meet/[id].js":
/*!****************************!*\
  !*** ./pages/meet/[id].js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_AuthHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/AuthHelper */ \"./helpers/AuthHelper.js\");\n\n\n\n\nconst meet = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_helpers_AuthHelper__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getUser());\n    console.log(user);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\yakov\\\\Desktop\\\\giveget\\\\client\\\\pages\\\\meet\\\\[id].js\",\n            lineNumber: 13,\n            columnNumber: 9\n        },\n        __self: undefined\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meet);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tZWV0L1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1g7QUFDVTtBQUVqRCxLQUFLLENBQUNLLElBQUksT0FBUyxDQUFDO0lBQ2hCLEtBQUssQ0FBQ0MsTUFBTSxHQUFHSCxzREFBUztJQUN4QixLQUFLLENBQUMsQ0FBQyxDQUFDSSxFQUFFLEVBQUMsQ0FBQyxHQUFHRCxNQUFNLENBQUNFLEtBQUs7SUFDM0IsS0FBSyxNQUFHQyxJQUFJLE1BQUVDLE9BQU8sTUFBS1QsK0NBQVEsQ0FBQ0csbUVBQWtCO0lBRXJEUSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osSUFBSTtJQUVoQixNQUFNLHNFQUNESyxDQUFHOzs7Ozs7OztBQUlaLENBQUM7QUFFRCxpRUFBZVQsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZydWl0cy8uL3BhZ2VzL21lZXQvW2lkXS5qcz9lYjQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBBdXRoSGVscGVyIGZyb20gJy4uLy4uL2hlbHBlcnMvQXV0aEhlbHBlcic7XHJcblxyXG5jb25zdCBtZWV0ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zdCBbIHVzZXIsIHNldFVzZXIgXSA9IHVzZVN0YXRlKEF1dGhIZWxwZXIuZ2V0VXNlcigpICk7XHJcblxyXG4gICAgY29uc29sZS5sb2codXNlcik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7LyogeyB1c2VyLnR5cGUgPT0gJ2dldHRlcicgJiYgJ2dldHRlcicgfSAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVldFxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkF1dGhIZWxwZXIiLCJtZWV0Iiwicm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZXIiLCJzZXRVc2VyIiwiZ2V0VXNlciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/meet/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/meet/[id].js"));
module.exports = __webpack_exports__;

})();