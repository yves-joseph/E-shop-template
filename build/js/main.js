/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./asset/js/main.js":
/*!**************************!*\
  !*** ./asset/js/main.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "categoryMobileMenu": () => (/* binding */ categoryMobileMenu),
/* harmony export */   "categoryMobileToggle": () => (/* binding */ categoryMobileToggle),
/* harmony export */   "navBarAutoFixed": () => (/* binding */ navBarAutoFixed)
/* harmony export */ });
function categoryMobileMenu() {
  var buttons = document.querySelectorAll('.category-btn-toggle'),
      buttonClose = document.querySelector('#navigation-close'),
      menu = document.querySelector('#page-wrapper-main-header-container-left'),
      menuContent = document.querySelector('.page-wrapper-main-header-container-left-content');

  if (buttons.length && buttonClose) {
    for (var i = 0; i < buttons.length; i++) {
      buttons.item(i).addEventListener('click', function (e) {
        e.stopPropagation();
        menu.classList.add('open');
        menu.classList.remove('close');
      });
    }

    buttonClose.addEventListener('click', function () {
      menu.classList.add('close');
      menu.classList.remove('open');
    });
    menu.addEventListener('click', function () {
      menu.classList.add('close');
      menu.classList.remove('open');
    });
    menuContent.addEventListener('click', function (event) {
      return event.stopPropagation();
    });
  }
}
function categoryMobileToggle() {
  var sub_menus = document.querySelectorAll('.navigation-sub-menu,.navigation-sub-menu_');

  var _loop = function _loop(i) {
    var __sub_menu = sub_menus.item(i),
        __sub_menu_btn = __sub_menu.previousElementSibling,
        add_icon = __sub_menu_btn.querySelector('.icon-add'),
        sub_icon = __sub_menu_btn.querySelector('.icon-sub'),
        query = matchMedia('(max-width:992px)');

    if (__sub_menu_btn) {
      __sub_menu_btn.addEventListener('click', function (e) {
        if (query.matches) {
          e.preventDefault();

          if (__sub_menu.style.display === "" || __sub_menu.style.display === "none") {
            __sub_menu.style.display = "block";
            add_icon.style.display = "none";
            sub_icon.style.display = "block";
          } else {
            __sub_menu.style.display = "none";
            add_icon.style.display = "block";
            sub_icon.style.display = "none";
          }
        }
      });
    }
  };

  for (var i = 0; i < sub_menus.length; i++) {
    _loop(i);
  }
}
function navBarAutoFixed() {
  var nav = document.getElementById('page-wrapper-header'),
      query = matchMedia('(max-width:992px)');

  if (nav) {
    autoFixedNavBar();

    window.onscroll = function () {
      autoFixedNavBar();
    };
  }

  function autoFixedNavBar() {
    if (!query.matches) {
      if (document.documentElement.scrollTop < 116) {
        if (nav.classList.contains('fixed')) nav.classList.remove('fixed');
      } else {
        if (!nav.classList.contains('fixed')) nav.classList.add('fixed');
      }
    }
  }
}
categoryMobileMenu();
categoryMobileToggle();
navBarAutoFixed();

/***/ }),

/***/ "./asset/scss/main.scss":
/*!******************************!*\
  !*** ./asset/scss/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/build/js/main": 0,
/******/ 			"build/css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["build/css/main"], () => (__webpack_require__("./asset/js/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["build/css/main"], () => (__webpack_require__("./asset/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;