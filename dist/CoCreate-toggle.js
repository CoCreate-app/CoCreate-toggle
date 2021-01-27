(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CoCreateToggle"] = factory();
	else
		root["CoCreateToggle"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./CoCreate-components/CoCreate-toggle/src/CoCreate-toggle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./CoCreate-components/CoCreate-toggle/src/CoCreate-toggle.js":
/*!********************************************************************!*\
  !*** ./CoCreate-components/CoCreate-toggle/src/CoCreate-toggle.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar CoCreateToggle = {\n  init: function init() {\n    this.initElement(document, 'toggle');\n    this.initElement(document, 'hover');\n  },\n  initElement: function initElement(container, prefix) {\n    this.__initElementEvent(container || document, prefix);\n  },\n  __initElementEvent: function __initElementEvent(mainContainer, prefix) {\n    var self = this;\n    var eventNames = [];\n    if (prefix === 'toggle') eventNames = ['click'];\n    if (prefix === 'hover') eventNames = ['mouseover', 'mouseout'];\n    eventNames.forEach(function (event_name) {\n      mainContainer.addEventListener(event_name, function (event) {\n        var target = event.target.closest(\"[data-\".concat(prefix, \"]\"));\n\n        if (target) {\n          self.__changeElementStatus(target, prefix);\n        }\n      });\n    });\n  },\n  __changeElementStatus: function __changeElementStatus(element, prefix) {\n    var self = this;\n    var values = element.dataset[prefix].split(',');\n\n    if (!values || values.length == 0) {\n      return;\n    }\n\n    var target_attribute = element.dataset[\"\".concat(prefix, \"_attribute\")] || 'class';\n    var targetSelector = element.dataset[\"\".concat(prefix, \"_target\")];\n    var targetClosest = element.dataset[\"\".concat(prefix, \"_closest\")];\n    var targetElements = [element];\n\n    if (typeof targetClosest != 'undefined') {\n      targetElements = [element.closest(targetClosest)];\n    }\n\n    if (targetSelector) {\n      targetElements = document.querySelectorAll(targetSelector);\n    }\n\n    values = values.map(function (x) {\n      return x.trim();\n    });\n    targetElements.forEach(function (el) {\n      return self.setValue(el, target_attribute, values);\n    });\n  },\n  setValue: function setValue(element, attrName, values) {\n    if (element.getAttribute(attrName) === null) {\n      return;\n    }\n\n    var attrValues = element.getAttribute(attrName).split(' ').map(function (x) {\n      return x.trim();\n    });\n    var oldValue = values.filter(function (x) {\n      return attrValues.includes(x);\n    })[0] || '';\n\n    var newValue = this.__getNextValue(values, oldValue);\n\n    if (attrName === 'class') {\n      if (oldValue != '') {\n        element.classList.remove(oldValue);\n\n        if (values.length === 1) {\n          return;\n        }\n      }\n\n      if (newValue != '') {\n        element.classList.add(newValue);\n      }\n    } else {\n      element.setAttribute(attrName, newValue);\n    }\n  },\n  __getNextValue: function __getNextValue(values, val) {\n    var size = values.length;\n    var nn = values.indexOf(val);\n\n    if (nn == -1) {\n      return values[0];\n    } else {\n      return values[(nn + 1) % size];\n    }\n  }\n};\nCoCreateToggle.init();\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoCreateToggle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZVRvZ2dsZS8uL0NvQ3JlYXRlLWNvbXBvbmVudHMvQ29DcmVhdGUtdG9nZ2xlL3NyYy9Db0NyZWF0ZS10b2dnbGUuanM/ODMzMCJdLCJuYW1lcyI6WyJDb0NyZWF0ZVRvZ2dsZSIsImluaXQiLCJpbml0RWxlbWVudCIsImRvY3VtZW50IiwiY29udGFpbmVyIiwicHJlZml4IiwiX19pbml0RWxlbWVudEV2ZW50IiwibWFpbkNvbnRhaW5lciIsInNlbGYiLCJldmVudE5hbWVzIiwiZm9yRWFjaCIsImV2ZW50X25hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiX19jaGFuZ2VFbGVtZW50U3RhdHVzIiwiZWxlbWVudCIsInZhbHVlcyIsImRhdGFzZXQiLCJzcGxpdCIsImxlbmd0aCIsInRhcmdldF9hdHRyaWJ1dGUiLCJ0YXJnZXRTZWxlY3RvciIsInRhcmdldENsb3Nlc3QiLCJ0YXJnZXRFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtYXAiLCJ4IiwidHJpbSIsImVsIiwic2V0VmFsdWUiLCJhdHRyTmFtZSIsImdldEF0dHJpYnV0ZSIsImF0dHJWYWx1ZXMiLCJvbGRWYWx1ZSIsImZpbHRlciIsImluY2x1ZGVzIiwibmV3VmFsdWUiLCJfX2dldE5leHRWYWx1ZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInNldEF0dHJpYnV0ZSIsInZhbCIsInNpemUiLCJubiIsImluZGV4T2YiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsSUFBTUEsY0FBYyxHQUFHO0FBRXRCQyxNQUFJLEVBQUUsZ0JBQVc7QUFDaEIsU0FBS0MsV0FBTCxDQUFpQkMsUUFBakIsRUFBMkIsUUFBM0I7QUFDQSxTQUFLRCxXQUFMLENBQWlCQyxRQUFqQixFQUEyQixPQUEzQjtBQUNBLEdBTHFCO0FBT3RCRCxhQUFXLEVBQUUscUJBQVNFLFNBQVQsRUFBb0JDLE1BQXBCLEVBQTRCO0FBQ3hDLFNBQUtDLGtC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Q3JlYXRlLXRvZ2dsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENvQ3JlYXRlVG9nZ2xlID0ge1xuXHRcblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5pbml0RWxlbWVudChkb2N1bWVudCwgJ3RvZ2dsZScpO1xuXHRcdHRoaXMuaW5pdEVsZW1lbnQoZG9jdW1lbnQsICdob3ZlcicpO1xuXHR9LFxuXHRcblx0aW5pdEVsZW1lbnQ6IGZ1bmN0aW9uKGNvbnRhaW5lciwgcHJlZml4KSB7XG5cdFx0dGhpcy5fX2luaXRFbGVtZW50RXZlbnQoY29udGFpbmVyIHx8IGRvY3VtZW50LCBwcmVmaXgpXG5cdH0sXG5cdFxuXHRfX2luaXRFbGVtZW50RXZlbnQ6IGZ1bmN0aW9uKG1haW5Db250YWluZXIsIHByZWZpeCkge1xuXHRcdFxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGxldCBldmVudE5hbWVzID0gW107IFxuXHRcdFxuXHRcdGlmIChwcmVmaXggPT09ICd0b2dnbGUnKSBldmVudE5hbWVzID0gWydjbGljayddXG5cdFx0aWYgKHByZWZpeCA9PT0gJ2hvdmVyJykgZXZlbnROYW1lcyA9IFsnbW91c2VvdmVyJywgJ21vdXNlb3V0J107XG5cdFxuXHRcdGV2ZW50TmFtZXMuZm9yRWFjaCgoZXZlbnRfbmFtZSkgPT4ge1xuXHRcdFx0bWFpbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKGV2ZW50X25hbWUsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KGBbZGF0YS0ke3ByZWZpeH1dYCk7XG5cdFx0XHRcdGlmKHRhcmdldCkge1xuXHRcdFx0XHRcdHNlbGYuX19jaGFuZ2VFbGVtZW50U3RhdHVzKHRhcmdldCwgcHJlZml4KVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KVxuXHR9LFxuXHRcblx0X19jaGFuZ2VFbGVtZW50U3RhdHVzOiBmdW5jdGlvbihlbGVtZW50LCBwcmVmaXgpIHtcblx0XHRjb25zdCBzZWxmID10aGlzO1xuXHRcdGxldCB2YWx1ZXMgPSBlbGVtZW50LmRhdGFzZXRbcHJlZml4XS5zcGxpdCgnLCcpO1xuXHRcdGlmICghdmFsdWVzIHx8IHZhbHVlcy5sZW5ndGggPT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRcblx0XHRsZXQgdGFyZ2V0X2F0dHJpYnV0ZSA9IGVsZW1lbnQuZGF0YXNldFtgJHtwcmVmaXh9X2F0dHJpYnV0ZWBdIHx8ICdjbGFzcyc7XG5cdFx0bGV0IHRhcmdldFNlbGVjdG9yID0gZWxlbWVudC5kYXRhc2V0W2Ake3ByZWZpeH1fdGFyZ2V0YF07XG5cdFx0bGV0IHRhcmdldENsb3Nlc3QgPSBlbGVtZW50LmRhdGFzZXRbYCR7cHJlZml4fV9jbG9zZXN0YF07XG5cdFx0XG5cdFx0bGV0IHRhcmdldEVsZW1lbnRzID0gW2VsZW1lbnRdXG5cdFx0aWYgKHR5cGVvZih0YXJnZXRDbG9zZXN0KSAhPSAndW5kZWZpbmVkJykge1xuXHRcdFx0dGFyZ2V0RWxlbWVudHMgPSBbZWxlbWVudC5jbG9zZXN0KHRhcmdldENsb3Nlc3QpXTtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKHRhcmdldFNlbGVjdG9yKSB7XG5cdFx0XHR0YXJnZXRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0U2VsZWN0b3IpO1xuXHRcdH1cblxuXHRcdHZhbHVlcyA9IHZhbHVlcy5tYXAoeCA9PiB4LnRyaW0oKSlcblx0XHR0YXJnZXRFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4gc2VsZi5zZXRWYWx1ZShlbCwgdGFyZ2V0X2F0dHJpYnV0ZSwgdmFsdWVzKSk7XG5cdH0sXG5cdFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24oZWxlbWVudCwgYXR0ck5hbWUsIHZhbHVlcykge1xuXHRcdGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyTmFtZSkgPT09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGV0IGF0dHJWYWx1ZXMgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyTmFtZSkuc3BsaXQoJyAnKS5tYXAoeCA9PiB4LnRyaW0oKSk7XG5cdFx0bGV0IG9sZFZhbHVlID0gdmFsdWVzLmZpbHRlcih4ID0+IGF0dHJWYWx1ZXMuaW5jbHVkZXMoeCkpWzBdIHx8ICcnO1xuXHRcdGxldCBuZXdWYWx1ZSA9IHRoaXMuX19nZXROZXh0VmFsdWUodmFsdWVzLCBvbGRWYWx1ZSlcblx0XHRcblx0XHRpZiAoYXR0ck5hbWUgPT09ICdjbGFzcycpIHtcblx0XHRcdGlmIChvbGRWYWx1ZSAhPSAnJykge1xuXHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUob2xkVmFsdWUpO1xuXHRcdFx0XHRpZiAodmFsdWVzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZiAobmV3VmFsdWUgIT0gJycpIHtcblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKG5ld1ZhbHVlKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIG5ld1ZhbHVlKTtcblx0XHR9XG5cdH0sXG5cblx0X19nZXROZXh0VmFsdWU6IGZ1bmN0aW9uKHZhbHVlcywgdmFsKSB7XG5cdFx0bGV0IHNpemUgPSB2YWx1ZXMubGVuZ3RoO1xuXHRcdGxldCBubiA9IHZhbHVlcy5pbmRleE9mKHZhbCk7XG5cdFx0aWYgKG5uID09IC0xKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWVzWzBdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdmFsdWVzWyhubiArIDEpICUgc2l6ZV07XG5cdFx0fVxuXHR9XG59XG5cbkNvQ3JlYXRlVG9nZ2xlLmluaXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29DcmVhdGVUb2dnbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./CoCreate-components/CoCreate-toggle/src/CoCreate-toggle.js\n");

/***/ })

/******/ })["default"];
});