webpackHotUpdate_N_E("pages/game",{

/***/ "./src/components/Points.tsx":
/*!***********************************!*\
  !*** ./src/components/Points.tsx ***!
  \***********************************/
/*! exports provided: Points */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Points\", function() { return Points; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _RoundPoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoundPoints */ \"./src/components/RoundPoints.tsx\");\n/* harmony import */ var _models_pointsType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/pointsType */ \"./src/models/pointsType.ts\");\n/* harmony import */ var _Points_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Points.module.css */ \"./src/components/Points.module.css\");\n/* harmony import */ var _Points_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Points_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/andrelinde/Projects/der-kartograph/src/components/Points.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar initializePoints = function initializePoints() {\n  return [{\n    value: 0,\n    type: _models_pointsType__WEBPACK_IMPORTED_MODULE_2__[\"EPointsType\"].FirstDecree\n  }, {\n    value: 0,\n    type: _models_pointsType__WEBPACK_IMPORTED_MODULE_2__[\"EPointsType\"].SecondDecree\n  }, {\n    value: 0,\n    type: _models_pointsType__WEBPACK_IMPORTED_MODULE_2__[\"EPointsType\"].Coins\n  }, {\n    value: 0,\n    type: _models_pointsType__WEBPACK_IMPORTED_MODULE_2__[\"EPointsType\"].Monsters\n  }];\n};\n\nvar calculateTotalPoints = function calculateTotalPoints(points) {\n  return points.reduce(function (prev, cur, idx) {\n    if (idx === 3) {\n      return prev - cur.value;\n    }\n\n    return prev + cur.value;\n  }, 0);\n};\n\nvar Points = function Points() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initializePoints),\n      pointsRoundOne = _useState[0],\n      setPointsRoundOne = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initializePoints),\n      pointsRoundTwo = _useState2[0],\n      setPointsRoundTwo = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initializePoints),\n      pointsRoundThree = _useState3[0],\n      setPointsRoundThree = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initializePoints),\n      pointsRoundFour = _useState4[0],\n      setPointsRoundFour = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      totalPointsRoundOne = _useState5[0],\n      setTotalPointsRoundOne = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      totalPointsRoundTwo = _useState6[0],\n      setTotalPointsRoundTwo = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      totalPointsRoundThree = _useState7[0],\n      setTotalPointsRoundThree = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      totalPointsRoundFour = _useState8[0],\n      setTotalPointsRoundFour = _useState8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setTotalPointsRoundOne(calculateTotalPoints(pointsRoundOne));\n  }, [pointsRoundOne]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setTotalPointsRoundTwo(calculateTotalPoints(pointsRoundTwo));\n  }, [pointsRoundTwo]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setTotalPointsRoundThree(calculateTotalPoints(pointsRoundThree));\n  }, [pointsRoundThree]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setTotalPointsRoundFour(calculateTotalPoints(pointsRoundFour));\n  }, [pointsRoundFour]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log('Points.tsx', 'rerender');\n  });\n  return __jsx(\"div\", {\n    className: _Points_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.points,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 5\n    }\n  }, __jsx(_RoundPoints__WEBPACK_IMPORTED_MODULE_1__[\"RoundPoints\"], {\n    points: pointsRoundOne,\n    totalPoints: totalPointsRoundOne,\n    setPoints: setPointsRoundOne,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }), __jsx(_RoundPoints__WEBPACK_IMPORTED_MODULE_1__[\"RoundPoints\"], {\n    points: pointsRoundTwo,\n    totalPoints: totalPointsRoundTwo,\n    setPoints: setPointsRoundTwo,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }\n  }), __jsx(_RoundPoints__WEBPACK_IMPORTED_MODULE_1__[\"RoundPoints\"], {\n    points: pointsRoundThree,\n    totalPoints: totalPointsRoundThree,\n    setPoints: setPointsRoundThree,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }\n  }), __jsx(_RoundPoints__WEBPACK_IMPORTED_MODULE_1__[\"RoundPoints\"], {\n    points: pointsRoundFour,\n    totalPoints: totalPointsRoundFour,\n    setPoints: setPointsRoundFour,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Points, \"01gY/s0+8gr8fm0aJmbYRXUwF1E=\");\n\n_c = Points;\n\nvar _c;\n\n$RefreshReg$(_c, \"Points\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9pbnRzLnRzeD8wNDcxIl0sIm5hbWVzIjpbImluaXRpYWxpemVQb2ludHMiLCJ2YWx1ZSIsInR5cGUiLCJFUG9pbnRzVHlwZSIsIkZpcnN0RGVjcmVlIiwiU2Vjb25kRGVjcmVlIiwiQ29pbnMiLCJNb25zdGVycyIsImNhbGN1bGF0ZVRvdGFsUG9pbnRzIiwicG9pbnRzIiwicmVkdWNlIiwicHJldiIsImN1ciIsImlkeCIsIlBvaW50cyIsInVzZVN0YXRlIiwicG9pbnRzUm91bmRPbmUiLCJzZXRQb2ludHNSb3VuZE9uZSIsInBvaW50c1JvdW5kVHdvIiwic2V0UG9pbnRzUm91bmRUd28iLCJwb2ludHNSb3VuZFRocmVlIiwic2V0UG9pbnRzUm91bmRUaHJlZSIsInBvaW50c1JvdW5kRm91ciIsInNldFBvaW50c1JvdW5kRm91ciIsInRvdGFsUG9pbnRzUm91bmRPbmUiLCJzZXRUb3RhbFBvaW50c1JvdW5kT25lIiwidG90YWxQb2ludHNSb3VuZFR3byIsInNldFRvdGFsUG9pbnRzUm91bmRUd28iLCJ0b3RhbFBvaW50c1JvdW5kVGhyZWUiLCJzZXRUb3RhbFBvaW50c1JvdW5kVGhyZWUiLCJ0b3RhbFBvaW50c1JvdW5kRm91ciIsInNldFRvdGFsUG9pbnRzUm91bmRGb3VyIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBaUI7QUFDeEMsU0FBTyxDQUNMO0FBQ0VDLFNBQUssRUFBRSxDQURUO0FBRUVDLFFBQUksRUFBRUMsOERBQVcsQ0FBQ0M7QUFGcEIsR0FESyxFQUtMO0FBQ0VILFNBQUssRUFBRSxDQURUO0FBRUVDLFFBQUksRUFBRUMsOERBQVcsQ0FBQ0U7QUFGcEIsR0FMSyxFQVNMO0FBQ0VKLFNBQUssRUFBRSxD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QyxlQUFXLEVBQUVRLG1CQUFsRDtBQUF1RSxhQUFTLEVBQUVQLGlCQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLHdEQUFEO0FBQWEsVUFBTSxFQUFFQyxnQkFBckI7QUFBdUMsZUFBVyxFQUFFUSxxQkFBcEQ7QUFBMkUsYUFBUyxFQUFFUCxtQkFBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUUsTUFBQyx3REFBRDtBQUFhLFVBQU0sRUFBRUMsZUFBckI7QUFBc0MsZUFBVyxFQUFFUSxvQkFBbkQ7QUFBeUUsYUFBUyxFQUFFUCxrQkFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBREY7QUFRRCxDQXZDTTs7R0FBTVQsTTs7S0FBQUEsTSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1BvaW50cy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElQb2ludHMgfSBmcm9tICcuLi9tb2RlbHMvcG9pbnRzJztcbmltcG9ydCB7IFJvdW5kUG9pbnRzIH0gZnJvbSAnLi9Sb3VuZFBvaW50cyc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IEVQb2ludHNUeXBlIH0gZnJvbSAnLi4vbW9kZWxzL3BvaW50c1R5cGUnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1BvaW50cy5tb2R1bGUuY3NzJztcblxuY29uc3QgaW5pdGlhbGl6ZVBvaW50cyA9ICgpOiBJUG9pbnRzW10gPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgdHlwZTogRVBvaW50c1R5cGUuRmlyc3REZWNyZWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgdHlwZTogRVBvaW50c1R5cGUuU2Vjb25kRGVjcmVlXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWx1ZTogMCxcbiAgICAgIHR5cGU6IEVQb2ludHNUeXBlLkNvaW5zXG4gICAgfSwgXG4gICAge1xuICAgICAgdmFsdWU6IDAsXG4gICAgICB0eXBlOiBFUG9pbnRzVHlwZS5Nb25zdGVyc1xuICAgIH1cbiAgXVxufVxuXG5jb25zdCBjYWxjdWxhdGVUb3RhbFBvaW50cyA9IChwb2ludHM6IElQb2ludHNbXSk6IG51bWJlciA9PiB7XG4gIHJldHVybiBwb2ludHMucmVkdWNlKChwcmV2LCBjdXIsIGlkeCkgPT4ge1xuICAgIGlmKGlkeCA9PT0gMykge1xuICAgICAgcmV0dXJuIHByZXYgLSBjdXIudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBwcmV2ICsgY3VyLnZhbHVlO1xuICB9LCAwKTtcbn1cblxuZXhwb3J0IGNvbnN0IFBvaW50cyA9ICgpID0+IHtcblxuICBjb25zdCBbcG9pbnRzUm91bmRPbmUsIHNldFBvaW50c1JvdW5kT25lXSA9IHVzZVN0YXRlPElQb2ludHNbXT4oaW5pdGlhbGl6ZVBvaW50cyk7XG4gIGNvbnN0IFtwb2ludHNSb3VuZFR3bywgc2V0UG9pbnRzUm91bmRUd29dID0gdXNlU3RhdGU8SVBvaW50c1tdPihpbml0aWFsaXplUG9pbnRzKTtcbiAgY29uc3QgW3BvaW50c1JvdW5kVGhyZWUsIHNldFBvaW50c1JvdW5kVGhyZWVdID0gdXNlU3RhdGU8SVBvaW50c1tdPihpbml0aWFsaXplUG9pbnRzKTtcbiAgY29uc3QgW3BvaW50c1JvdW5kRm91ciwgc2V0UG9pbnRzUm91bmRGb3VyXSA9IHVzZVN0YXRlPElQb2ludHNbXT4oaW5pdGlhbGl6ZVBvaW50cyk7XG4gIGNvbnN0IFt0b3RhbFBvaW50c1JvdW5kT25lLCBzZXRUb3RhbFBvaW50c1JvdW5kT25lXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdG90YWxQb2ludHNSb3VuZFR3bywgc2V0VG90YWxQb2ludHNSb3VuZFR3b10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RvdGFsUG9pbnRzUm91bmRUaHJlZSwgc2V0VG90YWxQb2ludHNSb3VuZFRocmVlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdG90YWxQb2ludHNSb3VuZEZvdXIsIHNldFRvdGFsUG9pbnRzUm91bmRGb3VyXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VG90YWxQb2ludHNSb3VuZE9uZShjYWxjdWxhdGVUb3RhbFBvaW50cyhwb2ludHNSb3VuZE9uZSkpO1xuICB9LCBbcG9pbnRzUm91bmRPbmVdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VG90YWxQb2ludHNSb3VuZFR3byhjYWxjdWxhdGVUb3RhbFBvaW50cyhwb2ludHNSb3VuZFR3bykpO1xuICB9LCBbcG9pbnRzUm91bmRUd29dKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VG90YWxQb2ludHNSb3VuZFRocmVlKGNhbGN1bGF0ZVRvdGFsUG9pbnRzKHBvaW50c1JvdW5kVGhyZWUpKTtcbiAgfSwgW3BvaW50c1JvdW5kVGhyZWVdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VG90YWxQb2ludHNSb3VuZEZvdXIoY2FsY3VsYXRlVG90YWxQb2ludHMocG9pbnRzUm91bmRGb3VyKSk7XG4gIH0sIFtwb2ludHNSb3VuZEZvdXJdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1BvaW50cy50c3gnLCAncmVyZW5kZXInKTtcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9pbnRzfT5cbiAgICAgIDxSb3VuZFBvaW50cyBwb2ludHM9e3BvaW50c1JvdW5kT25lfSB0b3RhbFBvaW50cz17dG90YWxQb2ludHNSb3VuZE9uZX0gc2V0UG9pbnRzPXtzZXRQb2ludHNSb3VuZE9uZX0gLz5cbiAgICAgIDxSb3VuZFBvaW50cyBwb2ludHM9e3BvaW50c1JvdW5kVHdvfSB0b3RhbFBvaW50cz17dG90YWxQb2ludHNSb3VuZFR3b30gc2V0UG9pbnRzPXtzZXRQb2ludHNSb3VuZFR3b30gLz5cbiAgICAgIDxSb3VuZFBvaW50cyBwb2ludHM9e3BvaW50c1JvdW5kVGhyZWV9IHRvdGFsUG9pbnRzPXt0b3RhbFBvaW50c1JvdW5kVGhyZWV9IHNldFBvaW50cz17c2V0UG9pbnRzUm91bmRUaHJlZX0gLz5cbiAgICAgIDxSb3VuZFBvaW50cyBwb2ludHM9e3BvaW50c1JvdW5kRm91cn0gdG90YWxQb2ludHM9e3RvdGFsUG9pbnRzUm91bmRGb3VyfSBzZXRQb2ludHM9e3NldFBvaW50c1JvdW5kRm91cn0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Points.tsx\n");

/***/ })

})