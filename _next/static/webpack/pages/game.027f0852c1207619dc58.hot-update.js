webpackHotUpdate_N_E("pages/game",{

/***/ "./src/components/Points.tsx":
/*!***********************************!*\
  !*** ./src/components/Points.tsx ***!
  \***********************************/
/*! exports provided: Points */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Points\", function() { return Points; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _RoundPoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoundPoints */ \"./src/components/RoundPoints.tsx\");\n/* harmony import */ var _models_pointsType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/pointsType */ \"./src/models/pointsType.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/andrelinde/Projects/der-kartograph/src/components/Points.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Points = function Points() {\n  _s();\n\n  var initializePoints = function initializePoints() {\n    return [{\n      value: 0,\n      type: _models_pointsType__WEBPACK_IMPORTED_MODULE_2__[\"EPointsType\"].FirstDecree\n    }, {\n      value: 0,\n      type: _models_pointsType__WEBPACK_IMPORTED_MODULE_2__[\"EPointsType\"].SecondDecree\n    }, {\n      value: 0,\n      type: _models_pointsType__WEBPACK_IMPORTED_MODULE_2__[\"EPointsType\"].Coins\n    }, {\n      value: 0,\n      type: _models_pointsType__WEBPACK_IMPORTED_MODULE_2__[\"EPointsType\"].Monsters\n    }];\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initializePoints),\n      PointsRoundOne = _useState[0],\n      setPointsRoundOne = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initializePoints),\n      PointsRoundTwo = _useState2[0],\n      setPointsRoundTwo = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initializePoints),\n      PointsRoundThree = _useState3[0],\n      setPointsRoundThree = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initializePoints),\n      PointsRoundFour = _useState4[0],\n      setPointsRoundFour = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log('Points.tsx', 'rerender');\n  });\n  return __jsx(\"div\", {\n    className: StyleSheet.points,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }\n  }, __jsx(_RoundPoints__WEBPACK_IMPORTED_MODULE_1__[\"RoundPoints\"], {\n    points: PointsRoundOne,\n    setPoints: setPointsRoundOne,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }), __jsx(_RoundPoints__WEBPACK_IMPORTED_MODULE_1__[\"RoundPoints\"], {\n    points: PointsRoundTwo,\n    setPoints: setPointsRoundTwo,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }), __jsx(_RoundPoints__WEBPACK_IMPORTED_MODULE_1__[\"RoundPoints\"], {\n    points: PointsRoundThree,\n    setPoints: setPointsRoundThree,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }), __jsx(_RoundPoints__WEBPACK_IMPORTED_MODULE_1__[\"RoundPoints\"], {\n    points: PointsRoundFour,\n    setPoints: setPointsRoundFour,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Points, \"wUgt2iJE8RzDR8jBlRg/WjRdaNA=\");\n\n_c = Points;\n\nvar _c;\n\n$RefreshReg$(_c, \"Points\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9pbnRzLnRzeD8wNDcxIl0sIm5hbWVzIjpbIlBvaW50cyIsImluaXRpYWxpemVQb2ludHMiLCJ2YWx1ZSIsInR5cGUiLCJFUG9pbnRzVHlwZSIsIkZpcnN0RGVjcmVlIiwiU2Vjb25kRGVjcmVlIiwiQ29pbnMiLCJNb25zdGVycyIsInVzZVN0YXRlIiwiUG9pbnRzUm91bmRPbmUiLCJzZXRQb2ludHNSb3VuZE9uZSIsIlBvaW50c1JvdW5kVHdvIiwic2V0UG9pbnRzUm91bmRUd28iLCJQb2ludHNSb3VuZFRocmVlIiwic2V0UG9pbnRzUm91bmRUaHJlZSIsIlBvaW50c1JvdW5kRm91ciIsInNldFBvaW50c1JvdW5kRm91ciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJTdHlsZVNoZWV0IiwicG9pbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUdPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFDMUIsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFpQjtBQUN4QyxXQUFPLENBQ0w7QUFDRUMsV0FBSyxFQUFFLENBRFQ7QUFFRUMsVUFBSSxFQUFFQyw4REFBVyxDQUFDQztBQUZwQixLQURLLEVBS0w7QUFDRUgsV0FBSyxFQUFFLENBRFQ7QUFFRUMsVUFBSSxFQUFFQyw4REFBVyxDQUFDRTtBQUZwQixLQUxLLEVBU0w7QUFDRUosV0FBSyxFQUFFLENBRFQ7QUFFRUMsVUFBSSxFQUFFQyw4REFBVyxDQUFDRztBQUZwQixLQVRLLEVBYUw7QUFDRUwsV0FBSyxFQUFFLENBRFQ7QUFFRUMsVUFBSSxFQUFFQyw4REFBVyxDQUFDSTtBQUZwQixLQWJLLENBQVA7QUFrQkQsR0FuQkQ7O0FBRDBCLGtCQXNCa0JDLHNEQUFRLENBQVlSLGdCQUFaLENBdEIxQjtBQUFBLE1Bc0JuQlMsY0F0Qm1CO0FBQUEsTUFzQkhDLGlCQXRCRzs7QUFBQSxtQkF1QmtCRixzREFBUSxDQUFZUixnQkFBWixDQXZCMUI7QUFBQSxNQXVCbkJXLGNBdkJtQjtBQUFBLE1BdUJIQyxpQkF2Qkc7O0FBQUEsbUJBd0JzQkosc0RBQVEsQ0FBWVIsZ0JBQVosQ0F4QjlCO0FBQUEsTUF3Qm5CYSxnQkF4Qm1CO0FBQUEsTUF3QkRDLG1CQXhCQzs7QUFBQSxtQkF5Qm9CTixzREFBUSxDQUFZUixnQkFBWixDQXpCNUI7QUFBQSxNQXlCbkJlLGVBekJtQjtBQUFBLE1BeUJGQyxrQkF6QkU7O0FBMkIxQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEIsVUFBMUI7QUFDRCxHQUZRLENBQVQ7QUFJQSxTQUNFO0FBQUssYUFBUyxFQUFFQyxVQUFVLENBQUNDLE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQWEsVUFBTSxFQUFFWixjQUFyQjtBQUFxQyxhQUFTLEVBQUVDLGlCQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLHdEQUFEO0FBQWEsVUFBTSxFQUFFQyxjQUFyQjtBQUFxQyxhQUFTLEVBQUVDLGlCQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLHdEQUFEO0FBQWEsVUFBTSxFQUFFQyxnQkFBckI7QUFBdUMsYUFBUyxFQUFFQyxtQkFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUUsTUFBQyx3REFBRDtBQUFhLFVBQU0sRUFBRUMsZUFBckI7QUFBc0MsYUFBUyxFQUFFQyxrQkFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBREY7QUFRRCxDQXZDTTs7R0FBTWpCLE07O0tBQUFBLE0iLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb2ludHMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJUG9pbnRzIH0gZnJvbSAnLi4vbW9kZWxzL3BvaW50cyc7XG5pbXBvcnQgeyBSb3VuZFBvaW50cyB9IGZyb20gJy4vUm91bmRQb2ludHMnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBFUG9pbnRzVHlwZSB9IGZyb20gJy4uL21vZGVscy9wb2ludHNUeXBlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Qb2ludHMubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBQb2ludHMgPSAoKSA9PiB7XG4gIGNvbnN0IGluaXRpYWxpemVQb2ludHMgPSAoKTogSVBvaW50c1tdID0+IHtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgdHlwZTogRVBvaW50c1R5cGUuRmlyc3REZWNyZWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICB0eXBlOiBFUG9pbnRzVHlwZS5TZWNvbmREZWNyZWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICB0eXBlOiBFUG9pbnRzVHlwZS5Db2luc1xuICAgICAgfSwgXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICB0eXBlOiBFUG9pbnRzVHlwZS5Nb25zdGVyc1xuICAgICAgfVxuICAgIF1cbiAgfVxuXG4gIGNvbnN0IFtQb2ludHNSb3VuZE9uZSwgc2V0UG9pbnRzUm91bmRPbmVdID0gdXNlU3RhdGU8SVBvaW50c1tdPihpbml0aWFsaXplUG9pbnRzKTtcbiAgY29uc3QgW1BvaW50c1JvdW5kVHdvLCBzZXRQb2ludHNSb3VuZFR3b10gPSB1c2VTdGF0ZTxJUG9pbnRzW10+KGluaXRpYWxpemVQb2ludHMpO1xuICBjb25zdCBbUG9pbnRzUm91bmRUaHJlZSwgc2V0UG9pbnRzUm91bmRUaHJlZV0gPSB1c2VTdGF0ZTxJUG9pbnRzW10+KGluaXRpYWxpemVQb2ludHMpO1xuICBjb25zdCBbUG9pbnRzUm91bmRGb3VyLCBzZXRQb2ludHNSb3VuZEZvdXJdID0gdXNlU3RhdGU8SVBvaW50c1tdPihpbml0aWFsaXplUG9pbnRzKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdQb2ludHMudHN4JywgJ3JlcmVuZGVyJyk7XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVTaGVldC5wb2ludHN9PlxuICAgICAgPFJvdW5kUG9pbnRzIHBvaW50cz17UG9pbnRzUm91bmRPbmV9IHNldFBvaW50cz17c2V0UG9pbnRzUm91bmRPbmV9IC8+XG4gICAgICA8Um91bmRQb2ludHMgcG9pbnRzPXtQb2ludHNSb3VuZFR3b30gc2V0UG9pbnRzPXtzZXRQb2ludHNSb3VuZFR3b30gLz5cbiAgICAgIDxSb3VuZFBvaW50cyBwb2ludHM9e1BvaW50c1JvdW5kVGhyZWV9IHNldFBvaW50cz17c2V0UG9pbnRzUm91bmRUaHJlZX0gLz5cbiAgICAgIDxSb3VuZFBvaW50cyBwb2ludHM9e1BvaW50c1JvdW5kRm91cn0gc2V0UG9pbnRzPXtzZXRQb2ludHNSb3VuZEZvdXJ9IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Points.tsx\n");

/***/ })

})