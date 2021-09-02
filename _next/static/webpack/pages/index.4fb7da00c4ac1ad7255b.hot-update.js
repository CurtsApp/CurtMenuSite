self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./media/drinks.json":
/*!***************************!*\
  !*** ./media/drinks.json ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('[{"title":"Whiskey Sour","ingredients":["lemon juice","whiskey"]},{"title":"Kalua Drank","ingredients":["kalua","choclate liquor"]},{"title":"Gretta\'s Gumdrop","ingredients":["bliss","fiend oil"]}]');

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\code\\CurtMenuSite\\pages\\index.js";



var drinkData = __webpack_require__(/*! ../media/drinks.json */ "./media/drinks.json");

function Home() {
  var menuItems = getDrinks();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Curt's Bar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Curt's bar menu"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),
        children: "Curt's Bar Menu"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().description),
        children: "For today's event"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().grid),
        children: menuItems.map(function (item) {
          return renderMenuItem(item);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);

  function renderMenuItem(menuItem) {
    var _this = this;

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: menuItem.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: menuItem.ingredients.map(function (ingredient) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: ingredient
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 49
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 12
    }, this);
  } // No caching needed because this will be exported as static data and not calculated at runtime


  function getDrinks() {
    var drinks = null;
    drinks = JSON.parse(drinkData);
    return drinks;
  }
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZHJpbmtEYXRhIiwicmVxdWlyZSIsIkhvbWUiLCJtZW51SXRlbXMiLCJnZXREcmlua3MiLCJzdHlsZXMiLCJtYXAiLCJpdGVtIiwicmVuZGVyTWVudUl0ZW0iLCJtZW51SXRlbSIsInRpdGxlIiwiaW5ncmVkaWVudHMiLCJpbmdyZWRpZW50IiwiZHJpbmtzIiwiSlNPTiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLElBQU1BLFNBQVMsR0FBR0MsbUJBQU8sQ0FBQyxpREFBRCxDQUF6Qjs7QUFFZSxTQUFTQyxJQUFULEdBQWdCO0FBQzdCLE1BQU1DLFNBQVMsR0FBR0MsU0FBUyxFQUEzQjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFFQywwRUFBaEI7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFPRTtBQUFNLGVBQVMsRUFBRUEscUVBQWpCO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFFQSxzRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0U7QUFBRyxpQkFBUyxFQUFFQSw0RUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBU0U7QUFBSyxpQkFBUyxFQUFFQSxxRUFBaEI7QUFBQSxrQkFDR0YsU0FBUyxDQUFDRyxHQUFWLENBQWMsVUFBQUMsSUFBSTtBQUFBLGlCQUFJQyxjQUFjLENBQUNELElBQUQsQ0FBbEI7QUFBQSxTQUFsQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjs7QUF3QkEsV0FBU0MsY0FBVCxDQUF3QkMsUUFBeEIsRUFBa0M7QUFBQTs7QUFDaEMsd0JBQU87QUFBSyxlQUFTLEVBQUVKLHFFQUFoQjtBQUFBLDhCQUNMO0FBQUEsa0JBQUtJLFFBQVEsQ0FBQ0M7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREssZUFFTDtBQUFBLGtCQUNHRCxRQUFRLENBQUNFLFdBQVQsQ0FBcUJMLEdBQXJCLENBQXlCLFVBQUFNLFVBQVU7QUFBQSw4QkFBSTtBQUFBLHNCQUFLQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUo7QUFBQSxTQUFuQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQU1ELEdBbEM0QixDQW9DN0I7OztBQUNBLFdBQVNSLFNBQVQsR0FBcUI7QUFDbkIsUUFBSVMsTUFBTSxHQUFHLElBQWI7QUFDQUEsVUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV2YsU0FBWCxDQUFUO0FBQ0EsV0FBT2EsTUFBUDtBQUNEO0FBQ0Y7S0ExQ3VCWCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRmYjdkYTAwYzRhYzFhZDcyNTViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5jb25zdCBkcmlua0RhdGEgPSByZXF1aXJlKCcuLi9tZWRpYS9kcmlua3MuanNvbicpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBtZW51SXRlbXMgPSBnZXREcmlua3MoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3VydCdzIEJhcjwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJDdXJ0J3MgYmFyIG1lbnVcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIEN1cnQncyBCYXIgTWVudVxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBGb3IgdG9kYXkncyBldmVudFxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICB7bWVudUl0ZW1zLm1hcChpdGVtID0+IHJlbmRlck1lbnVJdGVtKGl0ZW0pKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gIClcblxuICBmdW5jdGlvbiByZW5kZXJNZW51SXRlbShtZW51SXRlbSkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgPGgyPnttZW51SXRlbS50aXRsZX08L2gyPlxuICAgICAgPHVsPlxuICAgICAgICB7bWVudUl0ZW0uaW5ncmVkaWVudHMubWFwKGluZ3JlZGllbnQgPT4gPGxpPntpbmdyZWRpZW50fTwvbGk+KX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIH1cblxuICAvLyBObyBjYWNoaW5nIG5lZWRlZCBiZWNhdXNlIHRoaXMgd2lsbCBiZSBleHBvcnRlZCBhcyBzdGF0aWMgZGF0YSBhbmQgbm90IGNhbGN1bGF0ZWQgYXQgcnVudGltZVxuICBmdW5jdGlvbiBnZXREcmlua3MoKSB7XG4gICAgbGV0IGRyaW5rcyA9IG51bGw7XG4gICAgZHJpbmtzID0gSlNPTi5wYXJzZShkcmlua0RhdGEpO1xuICAgIHJldHVybiBkcmlua3M7XG4gIH1cbn1cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=