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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\code\\CurtMenuSite\\pages\\index.js";



function Home() {
  var menuItems = [{
    title: "Whiskey Sour",
    ingredients: ["lemon juice", "whiskey"]
  }, {
    title: "Kalua Drank",
    ingredients: ["kalua", "choclate liquor"]
  }, {
    title: "Gretta's Gumdrop",
    ingredients: ["kalua", "choclate liquor"]
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Curt's Bar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Curt's bar menu"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),
        children: "Curt's Bar Menu"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),
        children: "For today's event"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().grid),
        children: menuItems.map(function (item) {
          return renderMenuItem(item);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);

  function renderMenuItem(menuItem) {
    var _this = this;

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: menuItem.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: menuItem.ingredients.map(function (ingredient) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: ingredient
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 49
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIm1lbnVJdGVtcyIsInRpdGxlIiwiaW5ncmVkaWVudHMiLCJzdHlsZXMiLCJtYXAiLCJpdGVtIiwicmVuZGVyTWVudUl0ZW0iLCJtZW51SXRlbSIsImluZ3JlZGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0IsTUFBTUMsU0FBUyxHQUFHLENBQ2hCO0FBQ0VDLFNBQUssRUFBRSxjQURUO0FBRUVDLGVBQVcsRUFBRSxDQUFDLGFBQUQsRUFBZ0IsU0FBaEI7QUFGZixHQURnQixFQUtoQjtBQUNFRCxTQUFLLEVBQUUsYUFEVDtBQUVFQyxlQUFXLEVBQUUsQ0FBQyxPQUFELEVBQVUsaUJBQVY7QUFGZixHQUxnQixFQVNoQjtBQUFFRCxTQUFLLEVBQUUsa0JBQVQ7QUFDQUMsZUFBVyxFQUFFLENBQUMsT0FBRCxFQUFVLGlCQUFWO0FBRGIsR0FUZ0IsQ0FBbEI7QUFhQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsMEVBQWhCO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBT0U7QUFBTSxlQUFTLEVBQUVBLHFFQUFqQjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBRUEsc0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFO0FBQUcsaUJBQVMsRUFBRUEsNEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQVNFO0FBQUssaUJBQVMsRUFBRUEscUVBQWhCO0FBQUEsa0JBQ0dILFNBQVMsQ0FBQ0ksR0FBVixDQUFjLFVBQUFDLElBQUk7QUFBQSxpQkFBSUMsY0FBYyxDQUFDRCxJQUFELENBQWxCO0FBQUEsU0FBbEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7O0FBd0JBLFdBQVNDLGNBQVQsQ0FBd0JDLFFBQXhCLEVBQWtDO0FBQUE7O0FBQ2hDLHdCQUFPO0FBQUssZUFBUyxFQUFFSixxRUFBaEI7QUFBQSw4QkFDTDtBQUFBLGtCQUFLSSxRQUFRLENBQUNOO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURLLGVBRUw7QUFBQSxrQkFDR00sUUFBUSxDQUFDTCxXQUFULENBQXFCRSxHQUFyQixDQUF5QixVQUFBSSxVQUFVO0FBQUEsOEJBQUk7QUFBQSxzQkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFKO0FBQUEsU0FBbkM7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFNRDtBQUNGO0tBOUN1QlQsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xZjQ1Yzc3NWYxYzM5MTM4MzNlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IG1lbnVJdGVtcyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJXaGlza2V5IFNvdXJcIixcbiAgICAgIGluZ3JlZGllbnRzOiBbXCJsZW1vbiBqdWljZVwiLCBcIndoaXNrZXlcIl1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkthbHVhIERyYW5rXCIsXG4gICAgICBpbmdyZWRpZW50czogW1wia2FsdWFcIiwgXCJjaG9jbGF0ZSBsaXF1b3JcIl1cbiAgICB9LFxuICAgIHsgdGl0bGU6IFwiR3JldHRhJ3MgR3VtZHJvcFwiLFxuICAgIGluZ3JlZGllbnRzOiBbXCJrYWx1YVwiLCBcImNob2NsYXRlIGxpcXVvclwiXSB9XG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3VydCdzIEJhcjwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJDdXJ0J3MgYmFyIG1lbnVcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIEN1cnQncyBCYXIgTWVudVxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBGb3IgdG9kYXkncyBldmVudFxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICB7bWVudUl0ZW1zLm1hcChpdGVtID0+IHJlbmRlck1lbnVJdGVtKGl0ZW0pKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gIClcblxuICBmdW5jdGlvbiByZW5kZXJNZW51SXRlbShtZW51SXRlbSkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgPGgyPnttZW51SXRlbS50aXRsZX08L2gyPlxuICAgICAgPHVsPlxuICAgICAgICB7bWVudUl0ZW0uaW5ncmVkaWVudHMubWFwKGluZ3JlZGllbnQgPT4gPGxpPntpbmdyZWRpZW50fTwvbGk+KX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=