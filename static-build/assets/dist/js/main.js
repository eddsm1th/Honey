/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./static-build/assets/src/js/highlight.js":
/*!*************************************************!*\
  !*** ./static-build/assets/src/js/highlight.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var highlights = document.querySelectorAll('.js-highlight'),
    highlightBillboard = document.querySelector('.js-highlight-billboard');

if (highlights && highlightBillboard) {

            [].concat(_toConsumableArray(highlights)).forEach(function (highlight) {

                        var highlightImagePath = highlight.dataset.highlightSrc;

                        highlight.addEventListener('mouseenter', function () {

                                    highlightBillboard.querySelector('img').src = highlightImagePath;

                                    highlightBillboard.classList.add('hello');
                        });

                        highlight.addEventListener('mouseleave', function () {

                                    highlightBillboard.classList.remove('hello');
                        });
            });

            window.addEventListener('mousemove', function (event) {

                        highlightBillboard.style.transform = 'translate(' + (event.clientX + 1) + 'px, ' + event.clientY + 'px)';
            });
}

/***/ }),

/***/ "./static-build/assets/src/js/index.js":
/*!*********************************************!*\
  !*** ./static-build/assets/src/js/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./work-archive */ "./static-build/assets/src/js/work-archive.js");

__webpack_require__(/*! ./highlight */ "./static-build/assets/src/js/highlight.js");

/***/ }),

/***/ "./static-build/assets/src/js/work-archive.js":
/*!****************************************************!*\
  !*** ./static-build/assets/src/js/work-archive.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var workArchive = document.querySelector('.js-work-archive'),
    windowHeight = window.innerHeight;

if (workArchive) {

            var workArchiveItems = workArchive.querySelectorAll('.js-work-archive-item'),
                workArchiveBox = workArchive.querySelector('.js-work-archive-box'),
                workArchiveDecoration = workArchive.querySelector('.js-work-archive-decoration'),
                workArchiveDecorationImg = workArchiveDecoration.querySelector('img');

            document.addEventListener('mousemove', function (event) {

                        var mouseY = event.clientY,
                            mouseYAsPercentOfWindow = mouseY / windowHeight;

                        workArchiveBox.classList.remove('no-js');

                        var elemHeight = workArchiveBox.offsetHeight,
                            mouseYPercentRelativeToElem = elemHeight * mouseYAsPercentOfWindow,
                            getProperElemTranslation = workArchiveBox.offsetHeight - mouseYPercentRelativeToElem - elemHeight / 2;

                        if (window.innerWidth > 1024) {

                                    workArchiveBox.style.transform = 'translateY(' + getProperElemTranslation + 'px)';
                        }

                        window.addEventListener('resize', function () {

                                    if (window.innerWidth < 1024) {

                                                workArchiveBox.style.transform = 'translateY(0px)';
                                    }
                        });
            });

            workArchiveItems.forEach(function (workArchiveItem) {

                        var highlightImage = workArchiveItem.dataset.highlightImageSrc,
                            highlightColour = workArchiveItem.dataset.highlightColour;

                        workArchiveItem.addEventListener('mouseenter', function () {

                                    if (!workArchiveDecoration.classList.contains('hello') && highlightImage != null && highlightImage != '') {

                                                workArchiveDecoration.classList.add('hello');
                                    }

                                    workArchiveDecoration.style.backgroundColor = highlightColour != null && highlightColour != '' ? highlightColour : 'rgb(0, 200, 253)';

                                    if (highlightImage != null && highlightImage != '') {

                                                workArchiveDecorationImg.src = highlightImage;
                                    }
                        });
            });
}

/***/ }),

/***/ "./static-build/assets/src/scss/main.scss":
/*!************************************************!*\
  !*** ./static-build/assets/src/scss/main.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!********************************************************************************************!*\
  !*** multi ./static-build/assets/src/js/index.js ./static-build/assets/src/scss/main.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./static-build/assets/src/js/index.js */"./static-build/assets/src/js/index.js");
module.exports = __webpack_require__(/*! ./static-build/assets/src/scss/main.scss */"./static-build/assets/src/scss/main.scss");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map