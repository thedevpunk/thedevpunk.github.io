webpackHotUpdate_N_E("pages/game",{

/***/ "./pages/game.tsx":
/*!************************!*\
  !*** ./pages/game.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _game_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game.module.css */ \"./pages/game.module.css\");\n/* harmony import */ var _game_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_game_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_data_defaults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/data/defaults */ \"./src/data/defaults.ts\");\n/* harmony import */ var _src_components_AreaSelection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/AreaSelection */ \"./src/components/AreaSelection.tsx\");\n/* harmony import */ var _src_components_Map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Map */ \"./src/components/Map.tsx\");\n/* harmony import */ var _src_components_CoinStrip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/CoinStrip */ \"./src/components/CoinStrip.tsx\");\n/* harmony import */ var _src_components_Points__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/Points */ \"./src/components/Points.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/andrelinde/Projects/der-kartograph/pages/game.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar game = function game() {\n  _s();\n\n  var initializeAreaButtons = function initializeAreaButtons() {\n    return _src_data_defaults__WEBPACK_IMPORTED_MODULE_4__[\"areasData\"].filter(function (e) {\n      return e.name !== 'empty' && e.name !== 'mountains' && e.name !== 'ruins' && e.name !== 'valley';\n    });\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(_src_data_defaults__WEBPACK_IMPORTED_MODULE_4__[\"tilesData\"]),\n      tiles = _useState[0],\n      setTiles = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(initializeAreaButtons),\n      areaButtons = _useState2[0],\n      setAreaButtons = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      selectedArea = _useState3[0],\n      setSelectedArea = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      coins = _useState4[0],\n      setCoins = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var tilesStringFromLocalStorage = localStorage.getItem('tiles');\n    tilesStringFromLocalStorage ? setTiles(JSON.parse(tilesStringFromLocalStorage)) : setTiles(_src_data_defaults__WEBPACK_IMPORTED_MODULE_4__[\"tilesData\"]);\n    var coinsStringFromLocalStorage = localStorage.getItem('coins');\n    console.log(coinsStringFromLocalStorage);\n    coinsStringFromLocalStorage ? setCoins(parseInt(coinsStringFromLocalStorage)) : setCoins(0);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    localStorage.setItem('tiles', JSON.stringify(tiles));\n  }, [tiles]);\n\n  var handleSetCoins = function handleSetCoins(value) {\n    localStorage.setItem('coins', coins.toString());\n    setCoins(value);\n  };\n\n  var handleMarkTile = function handleMarkTile(id) {\n    var tilesTemp = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tiles);\n\n    for (var i = 0; i < tilesTemp.length; i++) {\n      var rowTemp = tilesTemp[i];\n\n      for (var j = 0; j < rowTemp.length; j++) {\n        var tileTemp = rowTemp[j];\n\n        if (tileTemp.id === id) {\n          if (tileTemp.area.name === 'mountains' || tileTemp.area.name === 'valley') {\n            return;\n          }\n\n          var tileIndex = rowTemp.indexOf(tileTemp);\n          var areaToApply = selectedArea && selectedArea.id != tileTemp.area.id ? selectedArea : _src_data_defaults__WEBPACK_IMPORTED_MODULE_4__[\"areasData\"].find(function (e) {\n            return e.name === 'empty';\n          });\n          rowTemp[tileIndex] = _objectSpread(_objectSpread({}, tileTemp), {}, {\n            area: areaToApply\n          });\n          break;\n        }\n      }\n    }\n\n    setTiles(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tilesTemp));\n  };\n\n  return __jsx(\"div\", {\n    className: _game_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 5\n    }\n  }, __jsx(_src_components_AreaSelection__WEBPACK_IMPORTED_MODULE_5__[\"AreaSelection\"], {\n    areas: areaButtons,\n    selectedArea: selectedArea,\n    selectArea: setSelectedArea,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }), __jsx(_src_components_Map__WEBPACK_IMPORTED_MODULE_6__[\"Map\"], {\n    tiles: tiles,\n    markTile: handleMarkTile,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }\n  }), __jsx(_src_components_CoinStrip__WEBPACK_IMPORTED_MODULE_7__[\"CoinStrip\"], {\n    coins: coins,\n    setCoins: handleSetCoins,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  }), __jsx(_src_components_Points__WEBPACK_IMPORTED_MODULE_8__[\"Points\"], {\n    coins: coins,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(game, \"A+XNytIZ6LOVoa5WAB8+0e9pm5A=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (game);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZS50c3g/MTI2MSJdLCJuYW1lcyI6WyJnYW1lIiwiaW5pdGlhbGl6ZUFyZWFCdXR0b25zIiwiYXJlYXNEYXRhIiwiZmlsdGVyIiwiZSIsIm5hbWUiLCJ1c2VTdGF0ZSIsInRpbGVzRGF0YSIsInRpbGVzIiwic2V0VGlsZXMiLCJhcmVhQnV0dG9ucyIsInNldEFyZWFCdXR0b25zIiwic2VsZWN0ZWRBcmVhIiwic2V0U2VsZWN0ZWRBcmVhIiwiY29pbnMiLCJzZXRDb2lucyIsInVzZUVmZmVjdCIsInRpbGVzU3RyaW5nRnJvbUxvY2FsU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJjb2luc1N0cmluZ0Zyb21Mb2NhbFN0b3JhZ2UiLCJjb25zb2xlIiwibG9nIiwicGFyc2VJbnQiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiaGFuZGxlU2V0Q29pbnMiLCJ2YWx1ZSIsInRvU3RyaW5nIiwiaGFuZGxlTWFya1RpbGUiLCJpZCIsInRpbGVzVGVtcCIsImkiLCJsZW5ndGgiLCJyb3dUZW1wIiwiaiIsInRpbGVUZW1wIiwiYXJlYSIsInRpbGVJbmRleCIsImluZGV4T2YiLCJhcmVhVG9BcHBseSIsImZpbmQiLCJzdHlsZXMiLCJtYWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFlO0FBQzNDLFdBQU9DLDREQUFTLENBQUNDLE1BQVYsQ0FBaUIsVUFBQUMsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ0MsSUFBRixLQUFXLE9BQVgsSUFBc0JELENBQUMsQ0FBQ0MsSUFBRixLQUFXLFdBQWpDLElBQWdERCxDQUFDLENBQUNDLElBQUYsS0FB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QUFDQStCLGlCQUFPLENBQUNJLFNBQUQsQ0FBUCxtQ0FBMEJGLFFBQTFCO0FBQW9DQyxnQkFBSSxFQUFFRztBQUExQztBQUNBO0FBQ0Q7QUFDRjtBQUNGOztBQUNEakMsWUFBUSxDQUFDLDZGQUFJd0IsU0FBTCxFQUFSO0FBQ0QsR0F2QkQ7O0FBeUJBLFNBQ0U7QUFBSyxhQUFTLEVBQUVXLHVEQUFNLENBQUNDLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLDJFQUFEO0FBQ0UsU0FBSyxFQUFFbkMsV0FEVDtBQUVFLGdCQUFZLEVBQUVFLFlBRmhCO0FBR0UsY0FBVSxFQUFFQyxlQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQVFFLE1BQUMsdURBQUQ7QUFDRSxTQUFLLEVBQUVMLEtBRFQ7QUFFRSxZQUFRLEVBQUV1QixjQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQWFFLE1BQUMsbUVBQUQ7QUFDRSxTQUFLLEVBQUVqQixLQURUO0FBRUUsWUFBUSxFQUFFYyxjQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRixFQWtCRSxNQUFDLDZEQUFEO0FBQVEsU0FBSyxFQUFFZCxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQkYsQ0FERjtBQXVCRCxDQTVFRDs7R0FBTWQsSTs7QUE4RVNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZ2FtZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJVGlsZSB9IGZyb20gJy4uL3NyYy9tb2RlbHMvdGlsZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZ2FtZS5tb2R1bGUuY3NzJztcbmltcG9ydCB7IElBcmVhIH0gZnJvbSBcIi4uL3NyYy9tb2RlbHMvYXJlYVwiO1xuaW1wb3J0IHsgYXJlYXNEYXRhLCB0aWxlc0RhdGEgfSBmcm9tICcuLi9zcmMvZGF0YS9kZWZhdWx0cyc7XG5pbXBvcnQgeyBBcmVhU2VsZWN0aW9uIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQXJlYVNlbGVjdGlvbic7XG5pbXBvcnQgeyBNYXAgfSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9NYXAnO1xuaW1wb3J0IHsgQ29pblN0cmlwIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQ29pblN0cmlwJztcbmltcG9ydCB7IFBvaW50cyB9IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1BvaW50cyc7XG5cbmNvbnN0IGdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGluaXRpYWxpemVBcmVhQnV0dG9ucyA9ICgpOiBJQXJlYVtdID0+IHtcbiAgICByZXR1cm4gYXJlYXNEYXRhLmZpbHRlcihlID0+IGUubmFtZSAhPT0gJ2VtcHR5JyAmJiBlLm5hbWUgIT09ICdtb3VudGFpbnMnICYmIGUubmFtZSAhPT0gJ3J1aW5zJyAmJiBlLm5hbWUgIT09ICd2YWxsZXknKTtcbiAgfVxuXG4gIGNvbnN0IFt0aWxlcywgc2V0VGlsZXNdID0gdXNlU3RhdGU8SVRpbGVbXVtdPih0aWxlc0RhdGEpO1xuICBjb25zdCBbYXJlYUJ1dHRvbnMsIHNldEFyZWFCdXR0b25zXSA9IHVzZVN0YXRlPElBcmVhW10+KGluaXRpYWxpemVBcmVhQnV0dG9ucyk7XG4gIGNvbnN0IFtzZWxlY3RlZEFyZWEsIHNldFNlbGVjdGVkQXJlYV0gPSB1c2VTdGF0ZTxJQXJlYSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbY29pbnMsIHNldENvaW5zXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGlsZXNTdHJpbmdGcm9tTG9jYWxTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpbGVzJyk7XG4gICAgdGlsZXNTdHJpbmdGcm9tTG9jYWxTdG9yYWdlID8gc2V0VGlsZXMoSlNPTi5wYXJzZSh0aWxlc1N0cmluZ0Zyb21Mb2NhbFN0b3JhZ2UpKSA6IHNldFRpbGVzKHRpbGVzRGF0YSk7XG5cbiAgICBjb25zdCBjb2luc1N0cmluZ0Zyb21Mb2NhbFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29pbnMnKTtcbiAgICBjb25zb2xlLmxvZyhjb2luc1N0cmluZ0Zyb21Mb2NhbFN0b3JhZ2UpO1xuICAgIGNvaW5zU3RyaW5nRnJvbUxvY2FsU3RvcmFnZSA/IHNldENvaW5zKHBhcnNlSW50KGNvaW5zU3RyaW5nRnJvbUxvY2FsU3RvcmFnZSkpIDogc2V0Q29pbnMoMCk7XG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RpbGVzJywgSlNPTi5zdHJpbmdpZnkodGlsZXMpKTtcbiAgfSwgW3RpbGVzXSlcblxuICBjb25zdCBoYW5kbGVTZXRDb2lucyA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvaW5zJywgY29pbnMudG9TdHJpbmcoKSk7XG4gICAgc2V0Q29pbnModmFsdWUpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlTWFya1RpbGUgPSAoaWQ6IHN0cmluZykgPT4ge1xuXG4gICAgY29uc3QgdGlsZXNUZW1wID0gWy4uLnRpbGVzXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGlsZXNUZW1wLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCByb3dUZW1wID0gdGlsZXNUZW1wW2ldO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvd1RlbXAubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgdGlsZVRlbXAgPSByb3dUZW1wW2pdO1xuXG4gICAgICAgIGlmICh0aWxlVGVtcC5pZCA9PT0gaWQpIHtcbiAgICAgICAgICBpZiAodGlsZVRlbXAuYXJlYS5uYW1lID09PSAnbW91bnRhaW5zJyB8fCB0aWxlVGVtcC5hcmVhLm5hbWUgPT09ICd2YWxsZXknKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgdGlsZUluZGV4ID0gcm93VGVtcC5pbmRleE9mKHRpbGVUZW1wKTtcbiAgICAgICAgICBjb25zdCBhcmVhVG9BcHBseSA9IHNlbGVjdGVkQXJlYSAmJiBzZWxlY3RlZEFyZWEuaWQgIT0gdGlsZVRlbXAuYXJlYS5pZCA/IHNlbGVjdGVkQXJlYSA6IGFyZWFzRGF0YS5maW5kKGUgPT4gZS5uYW1lID09PSAnZW1wdHknKSE7XG4gICAgICAgICAgcm93VGVtcFt0aWxlSW5kZXhdID0geyAuLi50aWxlVGVtcCwgYXJlYTogYXJlYVRvQXBwbHkgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBzZXRUaWxlcyhbLi4udGlsZXNUZW1wXSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG5cbiAgICAgIDxBcmVhU2VsZWN0aW9uXG4gICAgICAgIGFyZWFzPXthcmVhQnV0dG9uc31cbiAgICAgICAgc2VsZWN0ZWRBcmVhPXtzZWxlY3RlZEFyZWF9XG4gICAgICAgIHNlbGVjdEFyZWE9e3NldFNlbGVjdGVkQXJlYX1cbiAgICAgIC8+XG5cbiAgICAgIDxNYXBcbiAgICAgICAgdGlsZXM9e3RpbGVzfVxuICAgICAgICBtYXJrVGlsZT17aGFuZGxlTWFya1RpbGV9XG4gICAgICAvPlxuXG4gICAgICA8Q29pblN0cmlwXG4gICAgICAgIGNvaW5zPXtjb2luc31cbiAgICAgICAgc2V0Q29pbnM9e2hhbmRsZVNldENvaW5zfVxuICAgICAgLz5cblxuICAgICAgPFBvaW50cyBjb2lucz17Y29pbnN9IC8+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBnYW1lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/game.tsx\n");

/***/ })

})