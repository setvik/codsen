/**
 * array-of-arrays-sort-by-col
 * sort array of arrays by column, rippling the sorting outwards from that column
 * Version: 2.12.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/array-of-arrays-sort-by-col
 */

!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r=r||self).arrayOfArraysSortByCol=t()}(this,(function(){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(t)}function t(r){return function(r){if(Array.isArray(r)){for(var t=0,n=new Array(r.length);t<r.length;t++)n[t]=r[t];return n}}(r)||function(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function n(r){return null!=r}return function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!Array.isArray(e))throw new Error("array-of-arrays-sort-by-col: [THROW_ID_01]: The first input argument was given not as array but as ".concat(r(e),", equal to:\n").concat(JSON.stringify(e,null,0)));if(!Number.isInteger(o)){if(!/^\d*$/.test(o))throw new Error("array-of-arrays-sort-by-col: [THROW_ID_02]: The second input argument, index of the column to sort by (axis), is not integer (incl. zero)! It's currently given as:\n".concat(JSON.stringify(o,null,0)));o=parseInt(o,10)}var i=Math.max.apply(Math,t(e.map((function(r){return r.length}))));if(0===i)return e;if(o>=i)throw new Error("array-of-arrays-sort-by-col: [THROW_ID_03]: The second input argument, index of the column to sort by (axis), is marking the column which does not exist on any of the input arrays. Axis was given as ".concat(o," while highest index goes as far as ").concat(i,"."));var a=Array.from(e).sort((function(r,t){if(r[o]!==t[o]){if(!n(r[o])&&n(t[o])||n(r[o])&&n(t[o])&&r[o]>t[o])return 1;if(n(r[o])&&!n(t[o])||n(r[o])&&n(t[o])&&r[o]<t[o])return-1}for(var e=Math.max(r.length,t.length),i=Math.max(o,e-o-1),a=1;a<=i;a++){if(o-a>=0)if(n(r[o-a])){if(!n(t[o-a]))return-1;if(r[o-a]<t[o-a])return-1;if(r[o-a]>t[o-a])return 1}else if(n(t[o-a]))return 1;if(o+a<e)if(n(r[o+a])){if(!n(t[o+a]))return-1;if(r[o+a]<t[o+a])return-1;if(r[o+a]>t[o+a])return 1}else if(n(t[o+a]))return 1}return 0}));return a}}));
