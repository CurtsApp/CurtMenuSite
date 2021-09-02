self["webpackHotUpdate_N_E"]("pages/index",{

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
  // No caching needed because this will be exported as static data and not calculated at runtime
  var menuItems = getDrinks();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Curt's Bar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Curt's bar menu"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),
        children: "Curt's Bar Menu"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().description),
        children: "For today's event"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().grid),
        children: menuItems.map(function (item) {
          return renderMenuItem(item);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
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
        lineNumber: 35,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: menuItem.ingredients.map(function (ingredient) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: ingredient
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 49
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 12
    }, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZHJpbmtEYXRhIiwicmVxdWlyZSIsIkhvbWUiLCJtZW51SXRlbXMiLCJnZXREcmlua3MiLCJzdHlsZXMiLCJtYXAiLCJpdGVtIiwicmVuZGVyTWVudUl0ZW0iLCJtZW51SXRlbSIsInRpdGxlIiwiaW5ncmVkaWVudHMiLCJpbmdyZWRpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxJQUFNQSxTQUFTLEdBQUdDLG1CQUFPLENBQUMsaURBQUQsQ0FBekI7O0FBRWUsU0FBU0MsSUFBVCxHQUFnQjtBQUM1QjtBQUNELE1BQU1DLFNBQVMsR0FBR0MsU0FBUyxFQUEzQjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFFQywwRUFBaEI7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFPRTtBQUFNLGVBQVMsRUFBRUEscUVBQWpCO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFFQSxzRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0U7QUFBRyxpQkFBUyxFQUFFQSw0RUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBU0U7QUFBSyxpQkFBUyxFQUFFQSxxRUFBaEI7QUFBQSxrQkFDR0YsU0FBUyxDQUFDRyxHQUFWLENBQWMsVUFBQUMsSUFBSTtBQUFBLGlCQUFJQyxjQUFjLENBQUNELElBQUQsQ0FBbEI7QUFBQSxTQUFsQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjs7QUF3QkEsV0FBU0MsY0FBVCxDQUF3QkMsUUFBeEIsRUFBa0M7QUFBQTs7QUFDaEMsd0JBQU87QUFBSyxlQUFTLEVBQUVKLHFFQUFoQjtBQUFBLDhCQUNMO0FBQUEsa0JBQUtJLFFBQVEsQ0FBQ0M7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREssZUFFTDtBQUFBLGtCQUNHRCxRQUFRLENBQUNFLFdBQVQsQ0FBcUJMLEdBQXJCLENBQXlCLFVBQUFNLFVBQVU7QUFBQSw4QkFBSTtBQUFBLHNCQUFLQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUo7QUFBQSxTQUFuQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQU1EO0FBSUY7S0F2Q3VCVixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIwZDliYTQyYmMwZTEwMDk1ZmExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5jb25zdCBkcmlua0RhdGEgPSByZXF1aXJlKCcuLi9tZWRpYS9kcmlua3MuanNvbicpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgLy8gTm8gY2FjaGluZyBuZWVkZWQgYmVjYXVzZSB0aGlzIHdpbGwgYmUgZXhwb3J0ZWQgYXMgc3RhdGljIGRhdGEgYW5kIG5vdCBjYWxjdWxhdGVkIGF0IHJ1bnRpbWVcbiAgY29uc3QgbWVudUl0ZW1zID0gZ2V0RHJpbmtzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkN1cnQncyBCYXI8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQ3VydCdzIGJhciBtZW51XCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBDdXJ0J3MgQmFyIE1lbnVcbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgRm9yIHRvZGF5J3MgZXZlbnRcbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgICAge21lbnVJdGVtcy5tYXAoaXRlbSA9PiByZW5kZXJNZW51SXRlbShpdGVtKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApXG5cbiAgZnVuY3Rpb24gcmVuZGVyTWVudUl0ZW0obWVudUl0ZW0pIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgIDxoMj57bWVudUl0ZW0udGl0bGV9PC9oMj5cbiAgICAgIDx1bD5cbiAgICAgICAge21lbnVJdGVtLmluZ3JlZGllbnRzLm1hcChpbmdyZWRpZW50ID0+IDxsaT57aW5ncmVkaWVudH08L2xpPil9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICB9XG5cbiBcbiBcbn1cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=