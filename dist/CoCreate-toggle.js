(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["toggle"] = factory();
	else
		root["CoCreate"] = root["CoCreate"] || {}, root["CoCreate"]["toggle"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../CoCreate-components/CoCreate-toggle/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../CoCreate-components/CoCreate-toggle/src/index.js":
/*!***********************************************************!*\
  !*** ../CoCreate-components/CoCreate-toggle/src/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nconst CoCreateToggle = {\n  init: function () {\n    this.initElement(document, 'toggle');\n    this.initElement(document, 'hover');\n  },\n  initElement: function (container, prefix) {\n    this.__initElementEvent(container || document, prefix);\n  },\n  __initElementEvent: function (mainContainer, prefix) {\n    const self = this;\n    let eventNames = [];\n    if (prefix === 'toggle') eventNames = ['click'];\n    if (prefix === 'hover') eventNames = ['mouseover', 'mouseout'];\n    eventNames.forEach(event_name => {\n      mainContainer.addEventListener(event_name, function (event) {\n        const target = event.target.closest(`[data-${prefix}]`);\n\n        if (target) {\n          self.__changeElementStatus(target, prefix);\n        }\n      });\n    });\n  },\n  __changeElementStatus: function (element, prefix) {\n    const self = this;\n    let values = element.dataset[prefix].split(',');\n\n    if (!values || values.length == 0) {\n      return;\n    }\n\n    let target_attribute = element.dataset[`${prefix}_attribute`] || 'class';\n    let targetSelector = element.dataset[`${prefix}_target`];\n    let targetClosest = element.dataset[`${prefix}_closest`];\n    let targetElements = [element];\n\n    if (typeof targetClosest != 'undefined') {\n      targetElements = [element.closest(targetClosest)];\n    }\n\n    if (targetSelector) {\n      targetElements = document.querySelectorAll(targetSelector);\n    }\n\n    values = values.map(x => x.trim());\n    targetElements.forEach(el => self.setValue(el, target_attribute, values));\n  },\n  setValue: function (element, attrName, values) {\n    if (element.getAttribute(attrName) === null) {\n      return;\n    }\n\n    let attrValues = element.getAttribute(attrName).split(' ').map(x => x.trim());\n    let oldValue = values.filter(x => attrValues.includes(x))[0] || '';\n\n    let newValue = this.__getNextValue(values, oldValue);\n\n    if (attrName === 'class') {\n      if (oldValue != '') {\n        element.classList.remove(oldValue);\n\n        if (values.length === 1) {\n          return;\n        }\n      }\n\n      if (newValue != '') {\n        element.classList.add(newValue);\n      }\n    } else {\n      element.setAttribute(attrName, newValue);\n    }\n  },\n  __getNextValue: function (values, val) {\n    let size = values.length;\n    let nn = values.indexOf(val);\n\n    if (nn == -1) {\n      return values[0];\n    } else {\n      return values[(nn + 1) % size];\n    }\n  }\n};\nCoCreateToggle.init();\nvar _default = CoCreateToggle;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS50b2dnbGUvLi4vQ29DcmVhdGUtY29tcG9uZW50cy9Db0NyZWF0ZS10b2dnbGUvc3JjL2luZGV4LmpzPzA0NmIiXSwibmFtZXMiOlsiQ29DcmVhdGVUb2dnbGUiLCJpbml0IiwiaW5pdEVsZW1lbnQiLCJkb2N1bWVudCIsImNvbnRhaW5lciIsInByZWZpeCIsIl9faW5pdEVsZW1lbnRFdmVudCIsIm1haW5Db250YWluZXIiLCJzZWxmIiwiZXZlbnROYW1lcyIsImZvckVhY2giLCJldmVudF9uYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGFyZ2V0IiwiY2xvc2VzdCIsIl9fY2hhbmdlRWxlbWVudFN0YXR1cyIsImVsZW1lbnQiLCJ2YWx1ZXMiLCJkYXRhc2V0Iiwic3BsaXQiLCJsZW5ndGgiLCJ0YXJnZXRfYXR0cmlidXRlIiwidGFyZ2V0U2VsZWN0b3IiLCJ0YXJnZXRDbG9zZXN0IiwidGFyZ2V0RWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWFwIiwieCIsInRyaW0iLCJlbCIsInNldFZhbHVlIiwiYXR0ck5hbWUiLCJnZXRBdHRyaWJ1dGUiLCJhdHRyVmFsdWVzIiwib2xkVmFsdWUiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsIm5ld1ZhbHVlIiwiX19nZXROZXh0VmFsdWUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJ2YWwiLCJzaXplIiwibm4iLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNQSxjQUFjLEdBQUc7QUFFdEJDLE1BQUksRUFBRSxZQUFXO0FBQ2hCLFNBQUtDLFdBQUwsQ0FBaUJDLFFBQWpCLEVBQTJCLFFBQTNCO0FBQ0EsU0FBS0QsV0FBTCxDQUFpQkMsUUFBakIsRUFBMkIsT0FBM0I7QUFDQSxHQUxxQjtBQU90QkQsYUFBVyxFQUFFLFVBQVNFLFNBQVQsRUFBb0JDLE1BQXBCLEVBQTRCO0FBQ3hDLFNBQUtDLGtCQUFMLENBQXdC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QUEzQyxLQUFpRCxFQUFoRTs7QUFDQSxRQUFJVSxRQUFRLEdBQUcsS0FBS0MsY0FBTCxDQUFvQnJCLE1BQXBCLEVBQTRCaUIsUUFBNUIsQ0FBZjs7QUFFQSxRQUFJSCxRQUFRLEtBQUssT0FBakIsRUFBMEI7QUFDekIsVUFBSUcsUUFBUSxJQUFJLEVBQWhCLEVBQW9CO0FBQ25CbEIsZUFBTyxDQUFDdUIsU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUJOLFFBQXpCOztBQUNBLFlBQUlqQixNQUFNLENBQUNHLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDeEI7QUFDQTtBQUNEOztBQUVELFVBQUlpQixRQUFRLElBQUksRUFBaEIsRUFBb0I7QUFDbkJyQixlQUFPLENBQUN1QixTQUFSLENBQWtCRSxHQUFsQixDQUFzQkosUUFBdEI7QUFDQTtBQUNELEtBWEQsTUFXTztBQUNOckIsYUFBTyxDQUFDMEIsWUFBUixDQUFxQlgsUUFBckIsRUFBK0JNLFFBQS9CO0FBQ0E7QUFDRCxHQTNFcUI7QUE2RXRCQyxnQkFBYyxFQUFFLFVBQVNyQixNQUFULEVBQWlCMEIsR0FBakIsRUFBc0I7QUFDckMsUUFBSUMsSUFBSSxHQUFHM0IsTUFBTSxDQUFDRyxNQUFsQjtBQUNBLFFBQUl5QixFQUFFLEdBQUc1QixNQUFNLENBQUM2QixPQUFQLENBQWVILEdBQWYsQ0FBVDs7QUFDQSxRQUFJRSxFQUFFLElBQUksQ0FBQyxDQUFYLEVBQWM7QUFDYixhQUFPNUIsTUFBTSxDQUFDLENBQUQsQ0FBYjtBQUNBLEtBRkQsTUFFTztBQUNOLGFBQU9BLE1BQU0sQ0FBQyxDQUFDNEIsRUFBRSxHQUFHLENBQU4sSUFBV0QsSUFBWixDQUFiO0FBQ0E7QUFDRDtBQXJGcUIsQ0FBdkI7QUF3RkE3QyxjQUFjLENBQUNDLElBQWY7ZUFFZUQsYyIsImZpbGUiOiIuLi9Db0NyZWF0ZS1jb21wb25lbnRzL0NvQ3JlYXRlLXRvZ2dsZS9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDb0NyZWF0ZVRvZ2dsZSA9IHtcblx0XG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuaW5pdEVsZW1lbnQoZG9jdW1lbnQsICd0b2dnbGUnKTtcblx0XHR0aGlzLmluaXRFbGVtZW50KGRvY3VtZW50LCAnaG92ZXInKTtcblx0fSxcblx0XG5cdGluaXRFbGVtZW50OiBmdW5jdGlvbihjb250YWluZXIsIHByZWZpeCkge1xuXHRcdHRoaXMuX19pbml0RWxlbWVudEV2ZW50KGNvbnRhaW5lciB8fCBkb2N1bWVudCwgcHJlZml4KVxuXHR9LFxuXHRcblx0X19pbml0RWxlbWVudEV2ZW50OiBmdW5jdGlvbihtYWluQ29udGFpbmVyLCBwcmVmaXgpIHtcblx0XHRcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRsZXQgZXZlbnROYW1lcyA9IFtdOyBcblx0XHRcblx0XHRpZiAocHJlZml4ID09PSAndG9nZ2xlJykgZXZlbnROYW1lcyA9IFsnY2xpY2snXVxuXHRcdGlmIChwcmVmaXggPT09ICdob3ZlcicpIGV2ZW50TmFtZXMgPSBbJ21vdXNlb3ZlcicsICdtb3VzZW91dCddO1xuXHRcblx0XHRldmVudE5hbWVzLmZvckVhY2goKGV2ZW50X25hbWUpID0+IHtcblx0XHRcdG1haW5Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudF9uYW1lLCBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQuY2xvc2VzdChgW2RhdGEtJHtwcmVmaXh9XWApO1xuXHRcdFx0XHRpZih0YXJnZXQpIHtcblx0XHRcdFx0XHRzZWxmLl9fY2hhbmdlRWxlbWVudFN0YXR1cyh0YXJnZXQsIHByZWZpeClcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSlcblx0fSxcblx0XG5cdF9fY2hhbmdlRWxlbWVudFN0YXR1czogZnVuY3Rpb24oZWxlbWVudCwgcHJlZml4KSB7XG5cdFx0Y29uc3Qgc2VsZiA9dGhpcztcblx0XHRsZXQgdmFsdWVzID0gZWxlbWVudC5kYXRhc2V0W3ByZWZpeF0uc3BsaXQoJywnKTtcblx0XHRpZiAoIXZhbHVlcyB8fCB2YWx1ZXMubGVuZ3RoID09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0XG5cdFx0bGV0IHRhcmdldF9hdHRyaWJ1dGUgPSBlbGVtZW50LmRhdGFzZXRbYCR7cHJlZml4fV9hdHRyaWJ1dGVgXSB8fCAnY2xhc3MnO1xuXHRcdGxldCB0YXJnZXRTZWxlY3RvciA9IGVsZW1lbnQuZGF0YXNldFtgJHtwcmVmaXh9X3RhcmdldGBdO1xuXHRcdGxldCB0YXJnZXRDbG9zZXN0ID0gZWxlbWVudC5kYXRhc2V0W2Ake3ByZWZpeH1fY2xvc2VzdGBdO1xuXHRcdFxuXHRcdGxldCB0YXJnZXRFbGVtZW50cyA9IFtlbGVtZW50XVxuXHRcdGlmICh0eXBlb2YodGFyZ2V0Q2xvc2VzdCkgIT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHRhcmdldEVsZW1lbnRzID0gW2VsZW1lbnQuY2xvc2VzdCh0YXJnZXRDbG9zZXN0KV07XG5cdFx0fVxuXHRcdFxuXHRcdGlmICh0YXJnZXRTZWxlY3Rvcikge1xuXHRcdFx0dGFyZ2V0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldFNlbGVjdG9yKTtcblx0XHR9XG5cblx0XHR2YWx1ZXMgPSB2YWx1ZXMubWFwKHggPT4geC50cmltKCkpXG5cdFx0dGFyZ2V0RWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHNlbGYuc2V0VmFsdWUoZWwsIHRhcmdldF9hdHRyaWJ1dGUsIHZhbHVlcykpO1xuXHR9LFxuXHRcblx0c2V0VmFsdWU6IGZ1bmN0aW9uKGVsZW1lbnQsIGF0dHJOYW1lLCB2YWx1ZXMpIHtcblx0XHRpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGxldCBhdHRyVmFsdWVzID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpLnNwbGl0KCcgJykubWFwKHggPT4geC50cmltKCkpO1xuXHRcdGxldCBvbGRWYWx1ZSA9IHZhbHVlcy5maWx0ZXIoeCA9PiBhdHRyVmFsdWVzLmluY2x1ZGVzKHgpKVswXSB8fCAnJztcblx0XHRsZXQgbmV3VmFsdWUgPSB0aGlzLl9fZ2V0TmV4dFZhbHVlKHZhbHVlcywgb2xkVmFsdWUpXG5cdFx0XG5cdFx0aWYgKGF0dHJOYW1lID09PSAnY2xhc3MnKSB7XG5cdFx0XHRpZiAob2xkVmFsdWUgIT0gJycpIHtcblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKG9sZFZhbHVlKTtcblx0XHRcdFx0aWYgKHZhbHVlcy5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYgKG5ld1ZhbHVlICE9ICcnKSB7XG5cdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChuZXdWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBuZXdWYWx1ZSk7XG5cdFx0fVxuXHR9LFxuXG5cdF9fZ2V0TmV4dFZhbHVlOiBmdW5jdGlvbih2YWx1ZXMsIHZhbCkge1xuXHRcdGxldCBzaXplID0gdmFsdWVzLmxlbmd0aDtcblx0XHRsZXQgbm4gPSB2YWx1ZXMuaW5kZXhPZih2YWwpO1xuXHRcdGlmIChubiA9PSAtMSkge1xuXHRcdFx0cmV0dXJuIHZhbHVlc1swXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHZhbHVlc1sobm4gKyAxKSAlIHNpemVdO1xuXHRcdH1cblx0fVxufVxuXG5Db0NyZWF0ZVRvZ2dsZS5pbml0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvQ3JlYXRlVG9nZ2xlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../CoCreate-components/CoCreate-toggle/src/index.js\n");

/***/ })

/******/ })["default"];
});