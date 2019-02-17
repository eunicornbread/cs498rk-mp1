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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js?-url!../node_modules/postcss-loader/src/index.js!../node_modules/sass-loader/lib/loader.js!./styles/main.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js?-url!../node_modules/postcss-loader/src!../node_modules/sass-loader/lib/loader.js!./styles/main.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\n  margin: 0; }\\n\\n.navbar {\\n  background-color: #ef5350;\\n  padding: 10px 20px;\\n  height: 70px;\\n  overflow: hidden;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  z-index: 100;\\n  transition: 0.15s linear all; }\\n\\n.navbar.big {\\n  height: 100px;\\n  background-color: rgba(239, 83, 80, 0.1); }\\n\\n.navbar.big ul a::before {\\n  height: 40px;\\n  top: -40px; }\\n\\n.navbar.big ul a::after {\\n  height: 40px;\\n  top: -40px; }\\n\\n.navbar.big ul li {\\n  margin-left: 20px;\\n  margin-top: 10px;\\n  border-radius: 7px;\\n  position: relative; }\\n\\n.navbar ul {\\n  list-style-type: none;\\n  position: absolute;\\n  z-index: 10;\\n  right: 20px;\\n  top: 30px;\\n  padding: 0px; }\\n\\n.navbar img {\\n  margin-bottom: -50px;\\n  position: absolute;\\n  z-index: 0;\\n  top: 20px; }\\n\\n.navbar ul li {\\n  display: inline-block;\\n  float: right;\\n  color: #FFFFFF !important;\\n  background: #D32F2F;\\n  margin-left: 20px;\\n  margin-top: -10px;\\n  border-radius: 7px;\\n  position: relative;\\n  transition: 0.15s linear all; }\\n\\n.navbar ul a {\\n  display: inline-block;\\n  height: 20px;\\n  padding: 10px;\\n  color: #FFF; }\\n\\n.navbar ul a:link {\\n  text-decoration: none;\\n  color: #FFFFFF !important;\\n  font-family: 'Work Sans', sans-serif; }\\n\\n.navbar ul a::before {\\n  content: ' ';\\n  display: block;\\n  height: 20px;\\n  width: 5px;\\n  background: #FFFFFF;\\n  position: absolute;\\n  top: -20px;\\n  left: 10px;\\n  transition: 0.15s linear all; }\\n\\n.navbar ul a::after {\\n  content: ' ';\\n  display: block;\\n  height: 20px;\\n  width: 5px;\\n  background: #FFFFFF;\\n  position: absolute;\\n  top: -20px;\\n  right: 10px;\\n  transition: 0.15s linear all; }\\n\\n.intro {\\n  text-align: center;\\n  padding-top: 170px;\\n  margin-top: -1px;\\n  height: 100vh;\\n  background-color: #F3E5F5;\\n  background-image: url(\\\"assets/background.jpg\\\");\\n  background-size: cover;\\n  background-position-y: top;\\n  background-position-x: center; }\\n\\n.intro h1 {\\n  color: #FFFFFF;\\n  font-family: 'Work Sans', sans-serif;\\n  font-size: 72px; }\\n\\nspan {\\n  font-family: 'Indie Flower', cursive;\\n  font-size: 94px;\\n  font-style: italic; }\\n\\n.item {\\n  width: 27%;\\n  box-sizing: border-box;\\n  text-align: center;\\n  height: 500px;\\n  display: inline-block;\\n  margin: 50px;\\n  border-radius: 10px; }\\n\\n#item1 {\\n  background: #90CAF9; }\\n\\n#item2 {\\n  background: #FFCDD2; }\\n\\n#item3 {\\n  background: #C8E6C9; }\\n\\n#item4 {\\n  background: #E1BEE7; }\\n\\n#item5 {\\n  background: #FFF9C4; }\\n\\n#item6 {\\n  background: #FFCCBC; }\\n\\n.item img {\\n  width: 350px; }\\n\\n.portfolio h1 {\\n  text-align: center;\\n  font-family: 'Work Sans', sans-serif;\\n  margin-top: 80px;\\n  font-size: 50px; }\\n\\n#web {\\n  height: 700px;\\n  background: #00BCD4; }\\n\\n#cpp {\\n  height: 700px;\\n  background: #BA68C8; }\\n\\n#python {\\n  height: 700px;\\n  background: #FF8A65; }\\n\\n#java {\\n  height: 700px;\\n  background: #00E676; }\\n\\n.portfolio {\\n  margin-bottom: 80px;\\n  clear: both; }\\n\\n.skills img {\\n  height: 400px;\\n  position: absolute;\\n  top: 50%;\\n  left: 25%;\\n  -webkit-transform: translate(-50%, -50%);\\n          transform: translate(-50%, -50%); }\\n\\n.skills .slide {\\n  position: relative; }\\n\\n.skills h2 {\\n  position: absolute;\\n  top: 40%;\\n  right: 30%;\\n  -webkit-transform: translate(50%, -50%);\\n          transform: translate(50%, -50%);\\n  font-size: 60px;\\n  font-family: 'Work Sans', sans-serif;\\n  color: #424242; }\\n\\n.footer {\\n  height: 170px;\\n  margin-top: 50px;\\n  background: #102C37;\\n  position: relative; }\\n\\n.footer p {\\n  color: #FFFFFF;\\n  position: absolute;\\n  top: 70%;\\n  right: 15%;\\n  -webkit-transform: translate(50%, -50%);\\n          transform: translate(50%, -50%);\\n  font-family: 'Work Sans', sans-serif; }\\n\\n.footer ul {\\n  list-style-type: none; }\\n\\n.footer ul li {\\n  font-size: 80px;\\n  display: inline-block;\\n  margin-top: 40px;\\n  margin-right: 50px; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./styles/main.scss?../node_modules/css-loader/dist/cjs.js?-url!../node_modules/postcss-loader/src!../node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/style-loader/lib/addStyles.js":
/*!*****************************************************!*\
  !*** ../node_modules/style-loader/lib/addStyles.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"../node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///../node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "../node_modules/style-loader/lib/urls.js":
/*!************************************************!*\
  !*** ../node_modules/style-loader/lib/urls.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///../node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./html/index.html":
/*!*************************!*\
  !*** ./html/index.html ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"utf-8\\\">\\r\\n    <meta http-equiv=\\\"x-ua-compatible\\\" content=\\\"ie=edge\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n    <title>MP1 Starter</title>\\r\\n    <link href=\\\"https://fonts.googleapis.com/css?family=Work+Sans\\\" rel=\\\"stylesheet\\\">\\r\\n    <link href=\\\"https://fonts.googleapis.com/css?family=Indie+Flower\\\" rel=\\\"stylesheet\\\">\\r\\n</head>\\r\\n\\r\\n<body>\\r\\n\\r\\n    <div id=\\\"navbar\\\" class=\\\"navbar big\\\">\\r\\n    \\t<img src=\\\"assets/logo.png\\\" height=\\\"50px\\\">\\r\\n    \\t<ul>\\r\\n    \\t\\t<li><a href=\\\"#skills\\\"><i class=\\\"fas fa-code\\\"></i> Skills</a></li>\\r\\n    \\t\\t<li><a href=\\\"#portfolio\\\"><i class=\\\"fas fa-th\\\"></i> Portfolio</a></li>\\r\\n    \\t\\t<li><a href=\\\"#intro\\\"><i class=\\\"fas fa-user-alt\\\"></i> Intro</a></li>\\r\\n    \\t</ul>\\r\\n    </div>\\r\\n\\r\\n    <dir class=\\\"intro\\\">\\r\\n    \\t<h1>Hi! I'm <span>Eunice</span>.</h1>\\r\\n    </dir>\\r\\n\\r\\n    <div class=\\\"portfolio\\\">\\r\\n        <h1>Portfolio</h1>\\r\\n    \\t\\r\\n        <div class=\\\"item\\\" id=\\\"item1\\\">\\r\\n    \\t\\t<h3>Naive-Bayes Classifier</h3>\\r\\n    \\t\\t<p>An implementation of the Naive Bayes Algorithm in C++</p>\\r\\n    \\t\\t<img src=\\\"assets/naivebayes.png\\\">\\r\\n    \\t</div>\\r\\n\\r\\n    \\t<div class=\\\"item\\\" id=\\\"item2\\\">\\r\\n    \\t\\t<h3>Planet Game</h3>\\r\\n    \\t\\t<p>An exploring game in C++ using the openFrameworks library</p>\\r\\n    \\t\\t<img src=\\\"assets/planetgame.png\\\">\\r\\n    \\t</div>\\r\\n\\r\\n    \\t<div class=\\\"item\\\" id=\\\"item3\\\">\\r\\n    \\t\\t<h3>Refereed Delegation of Computation</h3>\\r\\n    \\t\\t<p>An implementation of the RDoc protocol in Python</p>\\r\\n    \\t\\t<img src=\\\"assets/pureproject.png\\\">\\r\\n    \\t</div>\\r\\n\\r\\n    \\t<div class=\\\"item\\\" id=\\\"item4\\\">\\r\\n    \\t\\t<h3>Gradient Rasterization Engine</h3>\\r\\n    \\t\\t<p>An image generator in C++</p>\\r\\n    \\t\\t<img src=\\\"assets/gradient.png\\\">\\r\\n    \\t</div>\\r\\n\\r\\n    \\t<div class=\\\"item\\\" id=\\\"item5\\\">\\r\\n    \\t\\t<h3>Sushi Go Game</h3>\\r\\n    \\t\\t<p>Implemented the game engine and AI algorithm of the game Sushi Go in Java</p>\\r\\n    \\t\\t<img src=\\\"assets/sushigo.png\\\">\\r\\n    \\t</div>\\r\\n\\r\\n    \\t<div class=\\\"item\\\" id=\\\"item6\\\">\\r\\n    \\t\\t<h3>Snake Game</h3>\\r\\n    \\t\\t<p>An implementation of the snake game in C++</p>\\r\\n    \\t\\t<img src=\\\"assets/snakegame.png\\\">\\r\\n    \\t</div>\\r\\n\\r\\n        <br>\\r\\n        <p></p>\\r\\n    </div>\\r\\n\\r\\n    <div class=\\\"skills\\\">\\r\\n    \\t<div class=\\\"slide\\\" id=\\\"java\\\">\\r\\n            <img src=\\\"assets/java.png\\\">\\r\\n            <h2>3 Years Java Experience</h2>   \\r\\n        </div>\\r\\n        <div class=\\\"slide\\\" id=\\\"cpp\\\">\\r\\n            <img src=\\\"assets/cpp.png\\\">\\r\\n            <h2>1 Year C++ Experience</h2>\\r\\n        </div>\\r\\n        <div class=\\\"slide\\\" id=\\\"python\\\">\\r\\n            <img src=\\\"assets/python.png\\\">\\r\\n            <h2>1 Year Python Experience</h2>\\r\\n        </div>\\r\\n        <div class=\\\"slide\\\" id=\\\"web\\\">\\r\\n            <img src=\\\"assets/html-css-js.png\\\">\\r\\n            <h2>1 Year HTML, CSS, <br>JavaScript Experience</h2>\\r\\n        </div>\\r\\n    </div>\\r\\n\\r\\n    <div class=\\\"footer\\\">\\r\\n        <p>Copyright &copy;2019 Eunice Zhou &mdash; All Rights Reserved</p>\\r\\n        <!-- Social Media Icons -->\\r\\n        <ul>\\r\\n            <li><a href=\\\"https://github.com/eunicornbread\\\"><i class=\\\"fab fa-github\\\"></i></a></li>\\r\\n            <li><a href=\\\"https://www.facebook.com/eunice.zhou.908\\\"><i class=\\\"fab fa-facebook-square\\\"></i></a></li>\\r\\n            <li><a href=\\\"https://www.linkedin.com/in/eunicexzhou/\\\"><i class=\\\"fab fa-linkedin\\\"></i></a></li>\\r\\n        </ul>\\r\\n    </div>\\r\\n    <!--\\r\\n    - navbar: sticky/resizing\\r\\n    - hero unit: video #intro\\r\\n    \\t- Hi! I'm Eunice.\\r\\n    - multicolumn section #portfolio\\r\\n    - carousel #skills\\r\\n    - footer: social media icons\\r\\n    - modal #contact\\r\\n    -->\\r\\n\\r\\n    <script src=\\\"bundle.js\\\" type=\\\"text/javascript\\\"></script>\\r\\n    <script defer src=\\\"https://use.fontawesome.com/releases/v5.7.2/js/all.js\\\" integrity=\\\"sha384-0pzryjIRos8mFBWMzSSZApWtPl/5++eIfzYmTgBBmXYdhvxPc+XcFEk+zJwDgWbP\\\" crossorigin=\\\"anonymous\\\"></script>\\r\\n</body>\\r\\n\\r\\n</html>\\r\\n\"\n\n//# sourceURL=webpack:///./html/index.html?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\r\n * This is the main entry point for Webpack, the compiler & dependency loader.\r\n * All files that are necessary for your web page and need to be 'watched' for changes should be included here!\r\n */\n\n// HTML Files\n__webpack_require__(/*! ./html/index.html */ \"./html/index.html\");\n\n// Stylesheets\n__webpack_require__(/*! ./styles/main.scss */ \"./styles/main.scss\");\n\n// Scripts\n__webpack_require__(/*! ./scripts/main.js */ \"./scripts/main.js\");\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./scripts/main.js":
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nwindow.onscroll = function () {\n\tif (document.documentElement.scrollTop == 0) {\n\t\tdocument.getElementById(\"navbar\").classList.add(\"big\");\n\t} else {\n\t\tdocument.getElementById(\"navbar\").classList.remove(\"big\");\n\t}\n};\n\n//# sourceURL=webpack:///./scripts/main.js?");

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js?-url!../../node_modules/postcss-loader/src!../../node_modules/sass-loader/lib/loader.js!./main.scss */ \"../node_modules/css-loader/dist/cjs.js?-url!../node_modules/postcss-loader/src/index.js!../node_modules/sass-loader/lib/loader.js!./styles/main.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./styles/main.scss?");

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\EuniceZhou\\CS498RK\\mp1\\source/index.js */\"./index.js\");\n\n\n//# sourceURL=webpack:///multi_./index.js?");

/***/ })

/******/ });