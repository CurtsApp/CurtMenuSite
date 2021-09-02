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


function Home() {
  var menuItems = getDrinks();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Curt's Bar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Curt's bar menu"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),
        children: "Curt's Bar Menu"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().description),
        children: "For today's event"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().grid),
        children: menuItems.map(function (item) {
          return renderMenuItem(item);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
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
        lineNumber: 33,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: menuItem.ingredients.map(function (ingredient) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: ingredient
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 49
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 12
    }, this);
  }
}
_c = Home;
var drinks = null;

function getDrinks() {
  if (!drinks) {
    drinks = JSON.parse();
  }

  return drinks;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIm1lbnVJdGVtcyIsImdldERyaW5rcyIsInN0eWxlcyIsIm1hcCIsIml0ZW0iLCJyZW5kZXJNZW51SXRlbSIsIm1lbnVJdGVtIiwidGl0bGUiLCJpbmdyZWRpZW50cyIsImluZ3JlZGllbnQiLCJkcmlua3MiLCJKU09OIiwicGFyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUM3QixNQUFNQyxTQUFTLEdBQUdDLFNBQVMsRUFBM0I7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsMEVBQWhCO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBT0U7QUFBTSxlQUFTLEVBQUVBLHFFQUFqQjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBRUEsc0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFO0FBQUcsaUJBQVMsRUFBRUEsNEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQVNFO0FBQUssaUJBQVMsRUFBRUEscUVBQWhCO0FBQUEsa0JBQ0dGLFNBQVMsQ0FBQ0csR0FBVixDQUFjLFVBQUFDLElBQUk7QUFBQSxpQkFBSUMsY0FBYyxDQUFDRCxJQUFELENBQWxCO0FBQUEsU0FBbEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7O0FBd0JBLFdBQVNDLGNBQVQsQ0FBd0JDLFFBQXhCLEVBQWtDO0FBQUE7O0FBQ2hDLHdCQUFPO0FBQUssZUFBUyxFQUFFSixxRUFBaEI7QUFBQSw4QkFDTDtBQUFBLGtCQUFLSSxRQUFRLENBQUNDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURLLGVBRUw7QUFBQSxrQkFDR0QsUUFBUSxDQUFDRSxXQUFULENBQXFCTCxHQUFyQixDQUF5QixVQUFBTSxVQUFVO0FBQUEsOEJBQUk7QUFBQSxzQkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFKO0FBQUEsU0FBbkM7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFNRDtBQUNGO0tBbkN1QlYsSTtBQXFDeEIsSUFBSVcsTUFBTSxHQUFHLElBQWI7O0FBQ0EsU0FBU1QsU0FBVCxHQUFxQjtBQUNuQixNQUFHLENBQUNTLE1BQUosRUFBWTtBQUNWQSxVQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxFQUFUO0FBQ0Q7O0FBQ0QsU0FBT0YsTUFBUDtBQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBhN2FkN2NiOTU0NzExYzY2ZGRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IG1lbnVJdGVtcyA9IGdldERyaW5rcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DdXJ0J3MgQmFyPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkN1cnQncyBiYXIgbWVudVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgQ3VydCdzIEJhciBNZW51XG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIEZvciB0b2RheSdzIGV2ZW50XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIHttZW51SXRlbXMubWFwKGl0ZW0gPT4gcmVuZGVyTWVudUl0ZW0oaXRlbSkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKVxuXG4gIGZ1bmN0aW9uIHJlbmRlck1lbnVJdGVtKG1lbnVJdGVtKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICA8aDI+e21lbnVJdGVtLnRpdGxlfTwvaDI+XG4gICAgICA8dWw+XG4gICAgICAgIHttZW51SXRlbS5pbmdyZWRpZW50cy5tYXAoaW5ncmVkaWVudCA9PiA8bGk+e2luZ3JlZGllbnR9PC9saT4pfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgfVxufVxuXG5sZXQgZHJpbmtzID0gbnVsbDtcbmZ1bmN0aW9uIGdldERyaW5rcygpIHtcbiAgaWYoIWRyaW5rcykge1xuICAgIGRyaW5rcyA9IEpTT04ucGFyc2UoKVxuICB9XG4gIHJldHVybiBkcmlua3M7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9