"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./helpers/AuthHelper.js":
/*!*******************************!*\
  !*** ./helpers/AuthHelper.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ApiHelper; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nvar ApiHelper = /*#__PURE__*/ function() {\n    \"use strict\";\n    function ApiHelper() {\n        _classCallCheck(this, ApiHelper);\n    }\n    _createClass(ApiHelper, null, [\n        {\n            key: \"isLogged\",\n            value: function isLogged() {\n                return this.getUser();\n            }\n        },\n        {\n            key: \"saveUser\",\n            value: function saveUser(user) {\n                // User is an object\n                localStorage.setItem(\"user\", JSON.stringify(user));\n            }\n        },\n        {\n            key: \"getUser\",\n            value: function getUser() {\n                return JSON.parse(localStorage.getItem(\"user\"));\n            }\n        }\n    ]);\n    return ApiHelper;\n}();\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL0F1dGhIZWxwZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxTQUFTLGlCQUFmLFFBQVE7O2FBQUZBLFNBQVM7OEJBQVRBLFNBQVM7O2lCQUFUQSxTQUFTOztZQUNuQkMsR0FBUSxFQUFSQSxDQUFRO21CQUFmLFFBQVEsQ0FBREEsUUFBUSxHQUFJLENBQUM7Z0JBQ2hCLE1BQU0sQ0FBRSxJQUFJLENBQUNDLE9BQU87WUFDeEIsQ0FBQzs7O1lBRU1DLEdBQVEsRUFBUkEsQ0FBUTttQkFBZixRQUFRLENBQURBLFFBQVEsQ0FBRUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3BCLEVBQW9CO2dCQUNwQkMsWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBTSxPQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osSUFBSTtZQUNwRCxDQUFDOzs7WUFFTUYsR0FBTyxFQUFQQSxDQUFPO21CQUFkLFFBQVEsQ0FBREEsT0FBTyxHQUFJLENBQUM7Z0JBQ2YsTUFBTSxDQUFDSyxJQUFJLENBQUNFLEtBQUssQ0FBQ0osWUFBWSxDQUFDSyxPQUFPLENBQUMsQ0FBTTtZQUNqRCxDQUFDOzs7V0FaZ0JWLFNBQVM7O0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9BdXRoSGVscGVyLmpzPzYzMDkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpSGVscGVyIHtcclxuICAgIHN0YXRpYyBpc0xvZ2dlZCAoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmdldFVzZXIoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNhdmVVc2VyICh1c2VyKSB7XHJcbiAgICAgICAgLy8gVXNlciBpcyBhbiBvYmplY3RcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkodXNlcikpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFVzZXIgKCkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiQXBpSGVscGVyIiwiaXNMb2dnZWQiLCJnZXRVc2VyIiwic2F2ZVVzZXIiLCJ1c2VyIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsImdldEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./helpers/AuthHelper.js\n");

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_GiveGetSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GiveGetSection */ \"./components/GiveGetSection.js\");\n/* harmony import */ var _helpers_AuthHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/AuthHelper */ \"./helpers/AuthHelper.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Signup = function() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (_helpers_AuthHelper__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isLogged()) {\n            window.location = '/';\n        }\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        id: \"main-signup\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\yakov\\\\Desktop\\\\giveget\\\\client\\\\pages\\\\signup.js\",\n            lineNumber: 13,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                id: \"main-signup-hero\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\yakov\\\\Desktop\\\\giveget\\\\client\\\\pages\\\\signup.js\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                    id: \"signup-hero-title\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\yakov\\\\Desktop\\\\giveget\\\\client\\\\pages\\\\signup.js\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: \"התחברות\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_GiveGetSection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\yakov\\\\Desktop\\\\giveget\\\\client\\\\pages\\\\signup.js\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_s(Signup, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Signup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Signup);\nvar _c;\n$RefreshReg$(_c, \"Signup\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWdudXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBQ2lCO0FBQ1g7OztBQUU5QyxHQUFLLENBQUNJLE1BQU0sR0FBRyxRQUFRLEdBQUYsQ0FBQzs7SUFDbEJILGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDYixFQUFFLEVBQUVFLG9FQUFtQixJQUFJLENBQUM7WUFDeEJHLE1BQU0sQ0FBQ0MsUUFBUSxHQUFHLENBQUc7UUFDekIsQ0FBQztJQUNMLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxNQUFNLHVFQUNEQyxDQUFHO1FBQUNDLEVBQUUsRUFBQyxDQUFhOzs7Ozs7OztpRkFDaEJELENBQUc7Z0JBQUNDLEVBQUUsRUFBQyxDQUFrQjs7Ozs7OzsrRkFDckJDLENBQUU7b0JBQUNELEVBQUUsRUFBQyxDQUFtQjs7Ozs7Ozs4QkFBQyxDQUFPOzs7aUZBR3JDUCxrRUFBYzs7Ozs7Ozs7OztBQUczQixDQUFDO0dBaEJLRSxNQUFNO0tBQU5BLE1BQU07QUFrQlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWdudXAuanM/Y2E4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR2l2ZUdldFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvR2l2ZUdldFNlY3Rpb25cIjtcclxuaW1wb3J0IEF1dGhIZWxwZXIgZnJvbSAnLi4vaGVscGVycy9BdXRoSGVscGVyJztcclxuXHJcbmNvbnN0IFNpZ251cCA9ICgpID0+IHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKEF1dGhIZWxwZXIuaXNMb2dnZWQoKSkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnLyc7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cIm1haW4tc2lnbnVwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtYWluLXNpZ251cC1oZXJvXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgaWQ9XCJzaWdudXAtaGVyby10aXRsZVwiPteU16rXl9eR16jXldeqPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8R2l2ZUdldFNlY3Rpb24vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJHaXZlR2V0U2VjdGlvbiIsIkF1dGhIZWxwZXIiLCJTaWdudXAiLCJpc0xvZ2dlZCIsIndpbmRvdyIsImxvY2F0aW9uIiwiZGl2IiwiaWQiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signup.js\n");

/***/ })

});