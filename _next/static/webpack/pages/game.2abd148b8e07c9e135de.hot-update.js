webpackHotUpdate_N_E("pages/game",{

/***/ "./pages/game.tsx":
/*!************************!*\
  !*** ./pages/game.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _game_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game.module.css */ \"./pages/game.module.css\");\n/* harmony import */ var _game_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_game_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_data_defaults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/data/defaults */ \"./src/data/defaults.ts\");\n/* harmony import */ var _src_components_AreaSelection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/AreaSelection */ \"./src/components/AreaSelection.tsx\");\n/* harmony import */ var _src_components_Map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Map */ \"./src/components/Map.tsx\");\n/* harmony import */ var _src_components_CoinStrip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/CoinStrip */ \"./src/components/CoinStrip.tsx\");\n/* harmony import */ var _src_components_Points__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/Points */ \"./src/components/Points.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/andrelinde/Projects/der-kartograph/pages/game.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar game = function game() {\n  _s();\n\n  var initializeAreaButtons = function initializeAreaButtons() {\n    return _src_data_defaults__WEBPACK_IMPORTED_MODULE_4__[\"areasData\"].filter(function (e) {\n      return e.name !== 'empty' && e.name !== 'mountains' && e.name !== 'ruins' && e.name !== 'valley';\n    });\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(_src_data_defaults__WEBPACK_IMPORTED_MODULE_4__[\"tilesData\"]),\n      tiles = _useState[0],\n      setTiles = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(initializeAreaButtons),\n      areaButtons = _useState2[0],\n      setAreaButtons = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      selectedArea = _useState3[0],\n      setSelectedArea = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      coins = _useState4[0],\n      setCoins = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var tilesStringFromLocalStorage = localStorage.getItem('tiles');\n    tilesStringFromLocalStorage ? setTiles(JSON.parse(tilesStringFromLocalStorage)) : setTiles(_src_data_defaults__WEBPACK_IMPORTED_MODULE_4__[\"tilesData\"]);\n    console.log(tilesStringFromLocalStorage);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    localStorage.setItem('tiles', JSON.stringify(tiles));\n  }, [tiles]);\n\n  var handleMarkTile = function handleMarkTile(id) {\n    var tilesTemp = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tiles);\n\n    for (var i = 0; i < tilesTemp.length; i++) {\n      var rowTemp = tilesTemp[i];\n\n      for (var j = 0; j < rowTemp.length; j++) {\n        var tileTemp = rowTemp[j];\n\n        if (tileTemp.id === id) {\n          if (tileTemp.area.name === 'mountains' || tileTemp.area.name === 'valley') {\n            return;\n          }\n\n          var tileIndex = rowTemp.indexOf(tileTemp);\n          var areaToApply = selectedArea && selectedArea.id != tileTemp.area.id ? selectedArea : _src_data_defaults__WEBPACK_IMPORTED_MODULE_4__[\"areasData\"].find(function (e) {\n            return e.name === 'empty';\n          });\n          rowTemp[tileIndex] = _objectSpread(_objectSpread({}, tileTemp), {}, {\n            area: areaToApply\n          });\n          break;\n        }\n      }\n    }\n\n    setTiles(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tilesTemp));\n  };\n\n  return __jsx(\"div\", {\n    className: _game_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 5\n    }\n  }, __jsx(_src_components_AreaSelection__WEBPACK_IMPORTED_MODULE_5__[\"AreaSelection\"], {\n    areas: areaButtons,\n    selectedArea: selectedArea,\n    selectArea: setSelectedArea,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }), __jsx(_src_components_Map__WEBPACK_IMPORTED_MODULE_6__[\"Map\"], {\n    tiles: tiles,\n    markTile: handleMarkTile,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }), __jsx(_src_components_CoinStrip__WEBPACK_IMPORTED_MODULE_7__[\"CoinStrip\"], {\n    coins: coins,\n    setCoins: setCoins,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }), __jsx(_src_components_Points__WEBPACK_IMPORTED_MODULE_8__[\"Points\"], {\n    coins: coins,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(game, \"A+XNytIZ6LOVoa5WAB8+0e9pm5A=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (game);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZS50c3g/MTI2MSJdLCJuYW1lcyI6WyJnYW1lIiwiaW5pdGlhbGl6ZUFyZWFCdXR0b25zIiwiYXJlYXNEYXRhIiwiZmlsdGVyIiwiZSIsIm5hbWUiLCJ1c2VTdGF0ZSIsInRpbGVzRGF0YSIsInRpbGVzIiwic2V0VGlsZXMiLCJhcmVhQnV0dG9ucyIsInNldEFyZWFCdXR0b25zIiwic2VsZWN0ZWRBcmVhIiwic2V0U2VsZWN0ZWRBcmVhIiwiY29pbnMiLCJzZXRDb2lucyIsInVzZUVmZmVjdCIsInRpbGVzU3RyaW5nRnJvbUxvY2FsU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImhhbmRsZU1hcmtUaWxlIiwiaWQiLCJ0aWxlc1RlbXAiLCJpIiwibGVuZ3RoIiwicm93VGVtcCIsImoiLCJ0aWxlVGVtcCIsImFyZWEiLCJ0aWxlSW5kZXgiLCJpbmRleE9mIiwiYXJlYVRvQXBwbHkiLCJmaW5kIiwic3R5bGVzIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBZTtBQUMzQyxXQUFPQyw0REFBUyxDQUFDQyxNQUFWLENBQWlCLFVBQUFDLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUNDLElBQUYsS0FBVyxPQUFYLElBQXNCRCxDQUFDLENBQUNDLElBQUYsS0FBVyxXQUFqQyxJQUFnREQsQ0FBQyxDQUFDQyxJQUFGLEtBQVcsT0FBM0QsSUFBc0VELENBQUMsQ0FBQ0MsSUFBRixLQUFXLFFBQXJGO0FBQUEsS0FBbEIsQ0FBUDtBQUNELEdBRkQ7O0FBRGlCLGtC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RUUsWUFBUSxFQUFFa0IsY0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFhRSxNQUFDLG1FQUFEO0FBQ0UsU0FBSyxFQUFFWixLQURUO0FBRUUsWUFBUSxFQUFFQyxRQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRixFQWtCRSxNQUFDLDZEQUFEO0FBQVEsU0FBSyxFQUFFRCxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQkYsQ0FERjtBQXVCRCxDQXBFRDs7R0FBTWQsSTs7QUFzRVNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZ2FtZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJVGlsZSB9IGZyb20gJy4uL3NyYy9tb2RlbHMvdGlsZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZ2FtZS5tb2R1bGUuY3NzJztcbmltcG9ydCB7IElBcmVhIH0gZnJvbSBcIi4uL3NyYy9tb2RlbHMvYXJlYVwiO1xuaW1wb3J0IHsgYXJlYXNEYXRhLCB0aWxlc0RhdGEgfSBmcm9tICcuLi9zcmMvZGF0YS9kZWZhdWx0cyc7XG5pbXBvcnQgeyBBcmVhU2VsZWN0aW9uIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQXJlYVNlbGVjdGlvbic7XG5pbXBvcnQgeyBNYXAgfSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9NYXAnO1xuaW1wb3J0IHsgQ29pblN0cmlwIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQ29pblN0cmlwJztcbmltcG9ydCB7IFBvaW50cyB9IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1BvaW50cyc7XG5cbmNvbnN0IGdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGluaXRpYWxpemVBcmVhQnV0dG9ucyA9ICgpOiBJQXJlYVtdID0+IHtcbiAgICByZXR1cm4gYXJlYXNEYXRhLmZpbHRlcihlID0+IGUubmFtZSAhPT0gJ2VtcHR5JyAmJiBlLm5hbWUgIT09ICdtb3VudGFpbnMnICYmIGUubmFtZSAhPT0gJ3J1aW5zJyAmJiBlLm5hbWUgIT09ICd2YWxsZXknKTtcbiAgfVxuXG4gIGNvbnN0IFt0aWxlcywgc2V0VGlsZXNdID0gdXNlU3RhdGU8SVRpbGVbXVtdPih0aWxlc0RhdGEpO1xuICBjb25zdCBbYXJlYUJ1dHRvbnMsIHNldEFyZWFCdXR0b25zXSA9IHVzZVN0YXRlPElBcmVhW10+KGluaXRpYWxpemVBcmVhQnV0dG9ucyk7XG4gIGNvbnN0IFtzZWxlY3RlZEFyZWEsIHNldFNlbGVjdGVkQXJlYV0gPSB1c2VTdGF0ZTxJQXJlYSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbY29pbnMsIHNldENvaW5zXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGlsZXNTdHJpbmdGcm9tTG9jYWxTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpbGVzJyk7XG4gICAgdGlsZXNTdHJpbmdGcm9tTG9jYWxTdG9yYWdlID8gc2V0VGlsZXMoSlNPTi5wYXJzZSh0aWxlc1N0cmluZ0Zyb21Mb2NhbFN0b3JhZ2UpKSA6IHNldFRpbGVzKHRpbGVzRGF0YSk7XG4gICAgY29uc29sZS5sb2codGlsZXNTdHJpbmdGcm9tTG9jYWxTdG9yYWdlKTtcbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGlsZXMnLCBKU09OLnN0cmluZ2lmeSh0aWxlcykpO1xuICB9LCBbdGlsZXNdKVxuXG4gIGNvbnN0IGhhbmRsZU1hcmtUaWxlID0gKGlkOiBzdHJpbmcpID0+IHtcblxuICAgIGNvbnN0IHRpbGVzVGVtcCA9IFsuLi50aWxlc107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbGVzVGVtcC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgcm93VGVtcCA9IHRpbGVzVGVtcFtpXTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3dUZW1wLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IHRpbGVUZW1wID0gcm93VGVtcFtqXTtcblxuICAgICAgICBpZiAodGlsZVRlbXAuaWQgPT09IGlkKSB7XG4gICAgICAgICAgaWYgKHRpbGVUZW1wLmFyZWEubmFtZSA9PT0gJ21vdW50YWlucycgfHwgdGlsZVRlbXAuYXJlYS5uYW1lID09PSAndmFsbGV5Jykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHRpbGVJbmRleCA9IHJvd1RlbXAuaW5kZXhPZih0aWxlVGVtcCk7XG4gICAgICAgICAgY29uc3QgYXJlYVRvQXBwbHkgPSBzZWxlY3RlZEFyZWEgJiYgc2VsZWN0ZWRBcmVhLmlkICE9IHRpbGVUZW1wLmFyZWEuaWQgPyBzZWxlY3RlZEFyZWEgOiBhcmVhc0RhdGEuZmluZChlID0+IGUubmFtZSA9PT0gJ2VtcHR5JykhO1xuICAgICAgICAgIHJvd1RlbXBbdGlsZUluZGV4XSA9IHsgLi4udGlsZVRlbXAsIGFyZWE6IGFyZWFUb0FwcGx5IH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgc2V0VGlsZXMoWy4uLnRpbGVzVGVtcF0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuXG4gICAgICA8QXJlYVNlbGVjdGlvblxuICAgICAgICBhcmVhcz17YXJlYUJ1dHRvbnN9XG4gICAgICAgIHNlbGVjdGVkQXJlYT17c2VsZWN0ZWRBcmVhfVxuICAgICAgICBzZWxlY3RBcmVhPXtzZXRTZWxlY3RlZEFyZWF9XG4gICAgICAvPlxuXG4gICAgICA8TWFwXG4gICAgICAgIHRpbGVzPXt0aWxlc31cbiAgICAgICAgbWFya1RpbGU9e2hhbmRsZU1hcmtUaWxlfVxuICAgICAgLz5cblxuICAgICAgPENvaW5TdHJpcFxuICAgICAgICBjb2lucz17Y29pbnN9XG4gICAgICAgIHNldENvaW5zPXtzZXRDb2luc31cbiAgICAgIC8+XG5cbiAgICAgIDxQb2ludHMgY29pbnM9e2NvaW5zfSAvPlxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2FtZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/game.tsx\n");

/***/ })

})