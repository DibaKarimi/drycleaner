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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/layout/Layout.module.css":
/*!*********************************************!*\
  !*** ./components/layout/Layout.module.css ***!
  \*********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"Layout_header__9mwqw\",\n\t\"left\": \"Layout_left__YEOQT\",\n\t\"right\": \"Layout_right__asUeX\",\n\t\"footer\": \"Layout_footer__v2SFV\",\n\t\"container\": \"Layout_container___dzs2\",\n\t\"logout\": \"Layout_logout__uRZi5\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQubW9kdWxlLmNzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcnljbGVhbmVycy8uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC5tb2R1bGUuY3NzP2Q4YTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiTGF5b3V0X2hlYWRlcl9fOW13cXdcIixcblx0XCJsZWZ0XCI6IFwiTGF5b3V0X2xlZnRfX1lFT1FUXCIsXG5cdFwicmlnaHRcIjogXCJMYXlvdXRfcmlnaHRfX2FzVWVYXCIsXG5cdFwiZm9vdGVyXCI6IFwiTGF5b3V0X2Zvb3Rlcl9fdjJTRlZcIixcblx0XCJjb250YWluZXJcIjogXCJMYXlvdXRfY29udGFpbmVyX19fZHpzMlwiLFxuXHRcImxvZ291dFwiOiBcIkxheW91dF9sb2dvdXRfX3VSWmk1XCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/Layout.module.css\n");

/***/ }),

/***/ "./components/layout/Layout.js":
/*!*************************************!*\
  !*** ./components/layout/Layout.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout.module.css */ \"./components/layout/Layout.module.css\");\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction Layout({ children }) {\n    const { status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const logOutHandler = ()=>{\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().left),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/\",\n                            children: \"LOGO DRY CLEANER\"\n                        }, void 0, false, {\n                            fileName: \"/Users/codeyourfuture/Documents/GitHub/Next-Project/drycleaner/components/layout/Layout.js\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/codeyourfuture/Documents/GitHub/Next-Project/drycleaner/components/layout/Layout.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().right),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\",\n                                children: \"HOME\"\n                            }, void 0, false, {\n                                fileName: \"/Users/codeyourfuture/Documents/GitHub/Next-Project/drycleaner/components/layout/Layout.js\",\n                                lineNumber: 17,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/services\",\n                                children: \"SERVICES\"\n                            }, void 0, false, {\n                                fileName: \"/Users/codeyourfuture/Documents/GitHub/Next-Project/drycleaner/components/layout/Layout.js\",\n                                lineNumber: 18,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/aboutus\",\n                                children: \"ABOUT US\"\n                            }, void 0, false, {\n                                fileName: \"/Users/codeyourfuture/Documents/GitHub/Next-Project/drycleaner/components/layout/Layout.js\",\n                                lineNumber: 19,\n                                columnNumber: 11\n                            }, this),\n                            status === \"authenticated\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().logout),\n                                onClick: logOutHandler,\n                                children: [\n                                    \" \",\n                                    \"Log out\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/codeyourfuture/Documents/GitHub/Next-Project/drycleaner/components/layout/Layout.js\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, this) : null,\n                            status === \"unauthenticated\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/signin\",\n                                children: \"LOGIN\"\n                            }, void 0, false, {\n                                fileName: \"/Users/codeyourfuture/Documents/GitHub/Next-Project/drycleaner/components/layout/Layout.js\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, this) : null\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/codeyourfuture/Documents/GitHub/Next-Project/drycleaner/components/layout/Layout.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/codeyourfuture/Documents/GitHub/Next-Project/drycleaner/components/layout/Layout.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/codeyourfuture/Documents/GitHub/Next-Project/drycleaner/components/layout/Layout.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"/Users/codeyourfuture/Documents/GitHub/Next-Project/drycleaner/components/layout/Layout.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/codeyourfuture/Documents/GitHub/Next-Project/drycleaner/components/layout/Layout.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNZO0FBQ2E7QUFFdEQsU0FBU0ksT0FBTyxFQUFFQyxRQUFRLEVBQUU7SUFDMUIsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0gsMkRBQVVBO0lBQzdCLE1BQU1JLGdCQUFnQjtRQUNwQkwsd0RBQU9BO0lBQ1Q7SUFDQSxxQkFDRTs7MEJBQ0UsOERBQUNNO2dCQUFPQyxXQUFXUixrRUFBYTs7a0NBQzlCLDhEQUFDUzt3QkFBSUQsV0FBV1IsZ0VBQVc7a0NBQ3pCLDRFQUFDRCxrREFBSUE7NEJBQUNZLE1BQUs7c0NBQUk7Ozs7Ozs7Ozs7O2tDQUVqQiw4REFBQ0Y7d0JBQUlELFdBQVdSLGlFQUFZOzswQ0FDMUIsOERBQUNELGtEQUFJQTtnQ0FBQ1ksTUFBSzswQ0FBSTs7Ozs7OzBDQUNmLDhEQUFDWixrREFBSUE7Z0NBQUNZLE1BQUs7MENBQVk7Ozs7OzswQ0FDdkIsOERBQUNaLGtEQUFJQTtnQ0FBQ1ksTUFBSzswQ0FBVzs7Ozs7OzRCQUNyQk4sV0FBVyxnQ0FDViw4REFBQ1E7Z0NBQUVMLFdBQVdSLGtFQUFhO2dDQUFFZSxTQUFTVDs7b0NBQ25DO29DQUFJOzs7Ozs7dUNBR0w7NEJBQ0hELFdBQVcsa0NBQ1YsOERBQUNOLGtEQUFJQTtnQ0FBQ1ksTUFBSzswQ0FBVTs7Ozs7dUNBQ25COzs7Ozs7Ozs7Ozs7OzBCQUdSLDhEQUFDRjtnQkFBSUQsV0FBV1IscUVBQWdCOzBCQUFHSTs7Ozs7OzBCQUNuQyw4REFBQ2E7Z0JBQU9ULFdBQVdSLGtFQUFhOzBCQUM5Qiw0RUFBQ1M7Ozs7Ozs7Ozs7OztBQUlUO0FBRUEsaUVBQWVOLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcnljbGVhbmVycy8uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC5qcz9jMGYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTGF5b3V0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5cbmZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgeyBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3QgbG9nT3V0SGFuZGxlciA9ICgpID0+IHtcbiAgICBzaWduT3V0KCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0fT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkxPR08gRFJZIENMRUFORVI8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkhPTUU8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zZXJ2aWNlc1wiPlNFUlZJQ0VTPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXR1c1wiPkFCT1VUIFVTPC9MaW5rPlxuICAgICAgICAgIHtzdGF0dXMgPT09IFwiYXV0aGVudGljYXRlZFwiID8gKFxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubG9nb3V0fSBvbkNsaWNrPXtsb2dPdXRIYW5kbGVyfT5cbiAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICBMb2cgb3V0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAge3N0YXR1cyA9PT0gXCJ1bmF1dGhlbnRpY2F0ZWRcIiA/IChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbmluXCI+TE9HSU48L0xpbms+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJuYW1lcyI6WyJMaW5rIiwic3R5bGVzIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJMYXlvdXQiLCJjaGlsZHJlbiIsInN0YXR1cyIsImxvZ091dEhhbmRsZXIiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJsZWZ0IiwiaHJlZiIsInJpZ2h0IiwiYSIsImxvZ291dCIsIm9uQ2xpY2siLCJjb250YWluZXIiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/Layout.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Layout */ \"./components/layout/Layout.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {\n        session: pageProps.session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/codeyourfuture/Documents/GitHub/Next-Project/drycleaner/pages/_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 10\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/codeyourfuture/Documents/GitHub/Next-Project/drycleaner/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 8\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/codeyourfuture/Documents/GitHub/Next-Project/drycleaner/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 6\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDbEI7QUFDbUI7QUFFbkMsU0FBU0UsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBTztJQUN0RCxxQkFDRSw4REFBQ0gsNERBQWVBO1FBQUNJLFNBQVNELFVBQVVDLE9BQU87a0JBQ3pDLDRFQUFDTCxpRUFBTUE7c0JBQ0wsNEVBQUNHO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcnljbGVhbmVycy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogYW55KSB7XG4gICByZXR1cm4gKFxuICAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3BhZ2VQcm9wcy5zZXNzaW9ufT5cbiAgICAgICA8TGF5b3V0PlxuICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgIDwvTGF5b3V0PlxuICAgICA8L1Nlc3Npb25Qcm92aWRlcj5cbiAgICk7XG59XG5cblxuXG5cblxuIl0sIm5hbWVzIjpbIkxheW91dCIsIlNlc3Npb25Qcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();