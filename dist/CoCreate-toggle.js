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
/******/ 	return __webpack_require__(__webpack_require__.s = "../CoCreate-components/CoCreate-toggle/src/CoCreate-toggle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../CoCreate-components/CoCreate-toggle/src/CoCreate-toggle.js":
/*!*********************************************************************!*\
  !*** ../CoCreate-components/CoCreate-toggle/src/CoCreate-toggle.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar CoCreateToggle = {\n  init: function init() {\n    this.initElement(document, 'toggle');\n    this.initElement(document, 'hover');\n  },\n  initElement: function initElement(container, prefix) {\n    this.__initElementEvent(container || document, prefix);\n  },\n  __initElementEvent: function __initElementEvent(mainContainer, prefix) {\n    var self = this;\n    var eventNames = [];\n    if (prefix === 'toggle') eventNames = ['click'];\n    if (prefix === 'hover') eventNames = ['mouseover', 'mouseout'];\n    eventNames.forEach(function (event_name) {\n      mainContainer.addEventListener(event_name, function (event) {\n        var target = event.target.closest(\"[data-\".concat(prefix, \"]\"));\n\n        if (target) {\n          self.__changeElementStatus(target, prefix);\n        }\n      });\n    });\n  },\n  __changeElementStatus: function __changeElementStatus(element, prefix) {\n    var self = this;\n    var values = element.dataset[prefix].split(',');\n\n    if (!values || values.length == 0) {\n      return;\n    }\n\n    var target_attribute = element.dataset[\"\".concat(prefix, \"_attribute\")] || 'class';\n    var targetSelector = element.dataset[\"\".concat(prefix, \"_target\")];\n    var targetClosest = element.dataset[\"\".concat(prefix, \"_closest\")];\n    var targetElements = [element];\n\n    if (typeof targetClosest != 'undefined') {\n      targetElements = [element.closest(targetClosest)];\n    }\n\n    if (targetSelector) {\n      targetElements = document.querySelectorAll(targetSelector);\n    }\n\n    values = values.map(function (x) {\n      return x.trim();\n    });\n    targetElements.forEach(function (el) {\n      return self.setValue(el, target_attribute, values);\n    });\n  },\n  setValue: function setValue(element, attrName, values) {\n    if (element.getAttribute(attrName) === null) {\n      return;\n    }\n\n    var attrValues = element.getAttribute(attrName).split(' ').map(function (x) {\n      return x.trim();\n    });\n    var oldValue = values.filter(function (x) {\n      return attrValues.includes(x);\n    })[0] || '';\n\n    var newValue = this.__getNextValue(values, oldValue);\n\n    if (attrName === 'class') {\n      if (oldValue != '') {\n        element.classList.remove(oldValue);\n\n        if (values.length === 1) {\n          return;\n        }\n      }\n\n      if (newValue != '') {\n        element.classList.add(newValue);\n      }\n    } else {\n      element.setAttribute(attrName, newValue);\n    }\n  },\n  __getNextValue: function __getNextValue(values, val) {\n    var size = values.length;\n    var nn = values.indexOf(val);\n\n    if (nn == -1) {\n      return values[0];\n    } else {\n      return values[(nn + 1) % size];\n    }\n  }\n};\nCoCreateToggle.init();\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoCreateToggle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS50b2dnbGUvLi4vQ29DcmVhdGUtY29tcG9uZW50cy9Db0NyZWF0ZS10b2dnbGUvc3JjL0NvQ3JlYXRlLXRvZ2dsZS5qcz8yNDVjIl0sIm5hbWVzIjpbIkNvQ3JlYXRlVG9nZ2xlIiwiaW5pdCIsImluaXRFbGVtZW50IiwiZG9jdW1lbnQiLCJjb250YWluZXIiLCJwcmVmaXgiLCJfX2luaXRFbGVtZW50RXZlbnQiLCJtYWluQ29udGFpbmVyIiwic2VsZiIsImV2ZW50TmFtZXMiLCJmb3JFYWNoIiwiZXZlbnRfbmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsImNsb3Nlc3QiLCJfX2NoYW5nZUVsZW1lbnRTdGF0dXMiLCJlbGVtZW50IiwidmFsdWVzIiwiZGF0YXNldCIsInNwbGl0IiwibGVuZ3RoIiwidGFyZ2V0X2F0dHJpYnV0ZSIsInRhcmdldFNlbGVjdG9yIiwidGFyZ2V0Q2xvc2VzdCIsInRhcmdldEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1hcCIsIngiLCJ0cmltIiwiZWwiLCJzZXRWYWx1ZSIsImF0dHJOYW1lIiwiZ2V0QXR0cmlidXRlIiwiYXR0clZhbHVlcyIsIm9sZFZhbHVlIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJuZXdWYWx1ZSIsIl9fZ2V0TmV4dFZhbHVlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2V0QXR0cmlidXRlIiwidmFsIiwic2l6ZSIsIm5uIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxJQUFNQSxjQUFjLEdBQUc7QUFFdEJDLE1BQUksRUFBRSxnQkFBVztBQUNoQixTQUFLQyxXQUFMLENBQWlCQyxRQUFqQixFQUEyQixRQUEzQjtBQUNBLFNBQUtELFdBQUwsQ0FBaUJDLFFBQWpCLEVBQTJCLE9BQTNCO0FBQ0EsR0FMcUI7QUFPdEJELGFBQVcsRUFBRSxxQkFBU0UsU0FBVCxFQUFvQkMsTUFBcEIsRUFBNEI7QUFDeEMsU0FBS0Ms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L0NvQ3JlYXRlLXRvZ2dsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENvQ3JlYXRlVG9nZ2xlID0ge1xuXHRcblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5pbml0RWxlbWVudChkb2N1bWVudCwgJ3RvZ2dsZScpO1xuXHRcdHRoaXMuaW5pdEVsZW1lbnQoZG9jdW1lbnQsICdob3ZlcicpO1xuXHR9LFxuXHRcblx0aW5pdEVsZW1lbnQ6IGZ1bmN0aW9uKGNvbnRhaW5lciwgcHJlZml4KSB7XG5cdFx0dGhpcy5fX2luaXRFbGVtZW50RXZlbnQoY29udGFpbmVyIHx8IGRvY3VtZW50LCBwcmVmaXgpXG5cdH0sXG5cdFxuXHRfX2luaXRFbGVtZW50RXZlbnQ6IGZ1bmN0aW9uKG1haW5Db250YWluZXIsIHByZWZpeCkge1xuXHRcdFxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGxldCBldmVudE5hbWVzID0gW107IFxuXHRcdFxuXHRcdGlmIChwcmVmaXggPT09ICd0b2dnbGUnKSBldmVudE5hbWVzID0gWydjbGljayddXG5cdFx0aWYgKHByZWZpeCA9PT0gJ2hvdmVyJykgZXZlbnROYW1lcyA9IFsnbW91c2VvdmVyJywgJ21vdXNlb3V0J107XG5cdFxuXHRcdGV2ZW50TmFtZXMuZm9yRWFjaCgoZXZlbnRfbmFtZSkgPT4ge1xuXHRcdFx0bWFpbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKGV2ZW50X25hbWUsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KGBbZGF0YS0ke3ByZWZpeH1dYCk7XG5cdFx0XHRcdGlmKHRhcmdldCkge1xuXHRcdFx0XHRcdHNlbGYuX19jaGFuZ2VFbGVtZW50U3RhdHVzKHRhcmdldCwgcHJlZml4KVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KVxuXHR9LFxuXHRcblx0X19jaGFuZ2VFbGVtZW50U3RhdHVzOiBmdW5jdGlvbihlbGVtZW50LCBwcmVmaXgpIHtcblx0XHRjb25zdCBzZWxmID10aGlzO1xuXHRcdGxldCB2YWx1ZXMgPSBlbGVtZW50LmRhdGFzZXRbcHJlZml4XS5zcGxpdCgnLCcpO1xuXHRcdGlmICghdmFsdWVzIHx8IHZhbHVlcy5sZW5ndGggPT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRcblx0XHRsZXQgdGFyZ2V0X2F0dHJpYnV0ZSA9IGVsZW1lbnQuZGF0YXNldFtgJHtwcmVmaXh9X2F0dHJpYnV0ZWBdIHx8ICdjbGFzcyc7XG5cdFx0bGV0IHRhcmdldFNlbGVjdG9yID0gZWxlbWVudC5kYXRhc2V0W2Ake3ByZWZpeH1fdGFyZ2V0YF07XG5cdFx0bGV0IHRhcmdldENsb3Nlc3QgPSBlbGVtZW50LmRhdGFzZXRbYCR7cHJlZml4fV9jbG9zZXN0YF07XG5cdFx0XG5cdFx0bGV0IHRhcmdldEVsZW1lbnRzID0gW2VsZW1lbnRdXG5cdFx0aWYgKHR5cGVvZih0YXJnZXRDbG9zZXN0KSAhPSAndW5kZWZpbmVkJykge1xuXHRcdFx0dGFyZ2V0RWxlbWVudHMgPSBbZWxlbWVudC5jbG9zZXN0KHRhcmdldENsb3Nlc3QpXTtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKHRhcmdldFNlbGVjdG9yKSB7XG5cdFx0XHR0YXJnZXRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0U2VsZWN0b3IpO1xuXHRcdH1cblxuXHRcdHZhbHVlcyA9IHZhbHVlcy5tYXAoeCA9PiB4LnRyaW0oKSlcblx0XHR0YXJnZXRFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4gc2VsZi5zZXRWYWx1ZShlbCwgdGFyZ2V0X2F0dHJpYnV0ZSwgdmFsdWVzKSk7XG5cdH0sXG5cdFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24oZWxlbWVudCwgYXR0ck5hbWUsIHZhbHVlcykge1xuXHRcdGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyTmFtZSkgPT09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGV0IGF0dHJWYWx1ZXMgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyTmFtZSkuc3BsaXQoJyAnKS5tYXAoeCA9PiB4LnRyaW0oKSk7XG5cdFx0bGV0IG9sZFZhbHVlID0gdmFsdWVzLmZpbHRlcih4ID0+IGF0dHJWYWx1ZXMuaW5jbHVkZXMoeCkpWzBdIHx8ICcnO1xuXHRcdGxldCBuZXdWYWx1ZSA9IHRoaXMuX19nZXROZXh0VmFsdWUodmFsdWVzLCBvbGRWYWx1ZSlcblx0XHRcblx0XHRpZiAoYXR0ck5hbWUgPT09ICdjbGFzcycpIHtcblx0XHRcdGlmIChvbGRWYWx1ZSAhPSAnJykge1xuXHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUob2xkVmFsdWUpO1xuXHRcdFx0XHRpZiAodmFsdWVzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZiAobmV3VmFsdWUgIT0gJycpIHtcblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKG5ld1ZhbHVlKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIG5ld1ZhbHVlKTtcblx0XHR9XG5cdH0sXG5cblx0X19nZXROZXh0VmFsdWU6IGZ1bmN0aW9uKHZhbHVlcywgdmFsKSB7XG5cdFx0bGV0IHNpemUgPSB2YWx1ZXMubGVuZ3RoO1xuXHRcdGxldCBubiA9IHZhbHVlcy5pbmRleE9mKHZhbCk7XG5cdFx0aWYgKG5uID09IC0xKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWVzWzBdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdmFsdWVzWyhubiArIDEpICUgc2l6ZV07XG5cdFx0fVxuXHR9XG59XG5cbkNvQ3JlYXRlVG9nZ2xlLmluaXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29DcmVhdGVUb2dnbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../CoCreate-components/CoCreate-toggle/src/CoCreate-toggle.js\n");

/***/ })

/******/ })["default"];
});