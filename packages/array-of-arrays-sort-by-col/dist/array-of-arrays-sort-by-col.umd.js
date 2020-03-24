/**
 * array-of-arrays-sort-by-col
 * sort array of arrays by column, rippling the sorting outwards from that column
 * Version: 2.12.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/array-of-arrays-sort-by-col
 */

!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r=r||self).arrayOfArraysSortByCol=t()}(this,(function(){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(t)}function t(r){return function(r){if(Array.isArray(r))return n(r)}(r)||function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}(r)||function(r,t){if(!r)return;if("string"==typeof r)return n(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return n(r,t)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function e(r){return null!=r}return function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!Array.isArray(n))throw new Error("array-of-arrays-sort-by-col: [THROW_ID_01]: The first input argument was given not as array but as ".concat(r(n),", equal to:\n").concat(JSON.stringify(n,null,0)));if(!Number.isInteger(o)){if(!/^\d*$/.test(o))throw new Error("array-of-arrays-sort-by-col: [THROW_ID_02]: The second input argument, index of the column to sort by (axis), is not integer (incl. zero)! It's currently given as:\n".concat(JSON.stringify(o,null,0)));o=parseInt(o,10)}var i=Math.max.apply(Math,t(n.map((function(r){return r.length}))));if(0===i)return n;if(o>=i)throw new Error("array-of-arrays-sort-by-col: [THROW_ID_03]: The second input argument, index of the column to sort by (axis), is marking the column which does not exist on any of the input arrays. Axis was given as ".concat(o," while highest index goes as far as ").concat(i,"."));var a=Array.from(n).sort((function(r,t){if(r[o]!==t[o]){if(!e(r[o])&&e(t[o])||e(r[o])&&e(t[o])&&r[o]>t[o])return 1;if(e(r[o])&&!e(t[o])||e(r[o])&&e(t[o])&&r[o]<t[o])return-1}for(var n=Math.max(r.length,t.length),i=Math.max(o,n-o-1),a=1;a<=i;a++){if(o-a>=0)if(e(r[o-a])){if(!e(t[o-a]))return-1;if(r[o-a]<t[o-a])return-1;if(r[o-a]>t[o-a])return 1}else if(e(t[o-a]))return 1;if(o+a<n)if(e(r[o+a])){if(!e(t[o+a]))return-1;if(r[o+a]<t[o+a])return-1;if(r[o+a]>t[o+a])return 1}else if(e(t[o+a]))return 1}return 0}));return a}}));
