/**
 * ranges-regex
 * Integrate regex operations into Ranges workflow
 * Version: 4.0.2
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ranges-regex/
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).rangesRegex={})}(this,(function(e){"use strict";function r(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function n(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function t(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var o={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function s(e,r){if(!Array.isArray(e)||!e.length)return e;var n,s,i=t(t({},o),r);if(i.strictlyTwoElementsInRangeArrays&&!e.filter((function(e){return e})).every((function(e,r){return 2===e.length||(n=r,s=e.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, "+n+"th range ("+JSON.stringify(e[n],null,4)+") has not two but "+s+" elements!");if(!e.filter((function(e){return e})).every((function(e,r){return!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(n=r,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, "+n+"th range ("+JSON.stringify(e[n],null,4)+") does not consist of only natural numbers!");var u=Math.pow(e.filter((function(e){return e})).length,2),a=0;return Array.from(e).filter((function(e){return e})).sort((function(e,r){return i.progressFn&&i.progressFn(Math.floor(100*(a+=1)/u)),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1}))}var i={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var a=function(e){var r={exports:{}};return e(r,r.exports),r.exports}((function(e,r){var n=r&&!r.nodeType&&r,t=n&&e&&!e.nodeType&&e,o=t&&t.exports===n&&("object"==typeof u&&u&&u.Object===Object&&u).process,s=function(){try{return o&&o.binding("util")}catch(e){}}(),i=s&&s.isRegExp;var a=Object.prototype.toString;var l,g=i?(l=i,function(e){return l(e)}):function(e){return function(e){var r=typeof e;return!!e&&("object"==r||"function"==r)}(e)&&"[object RegExp]"==a.call(e)};e.exports=g}));e.rRegex=function(e,r,n){if(void 0===e)throw new TypeError("ranges-regex: [THROW_ID_01] The first input's argument must be a regex object! Currently it is missing!");if(!a(e))throw new TypeError("ranges-regex: [THROW_ID_02] The first input's argument must be a regex object! Currently its type is: "+typeof e+", equal to: "+JSON.stringify(e,null,4));if("string"!=typeof r)throw new TypeError("ranges-regex: [THROW_ID_03] The second input's argument must be a string! Currently its type is: "+typeof r+", equal to: "+JSON.stringify(r,null,4));if(n&&"string"!=typeof n)throw new TypeError("ranges-regex: [THROW_ID_04] The third input's argument must be a string or null! Currently its type is: "+typeof n+", equal to: "+JSON.stringify(n,null,4));if(!r.length)return null;var o,u=[];if(null===n||"string"==typeof n&&n.length)for(;null!==(o=e.exec(r));)u.push([e.lastIndex-o[0].length,e.lastIndex,n]);else for(;null!==(o=e.exec(r));)u.push([e.lastIndex-o[0].length,e.lastIndex]);return u.length?function(e,r){function n(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return null;var o;if(r){if(!n(r))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n"+JSON.stringify(r,null,4)+" (type "+typeof r+")");if((o=t(t({},i),r)).progressFn&&n(o.progressFn)&&!Object.keys(o.progressFn).length)o.progressFn=null;else if(o.progressFn&&"function"!=typeof o.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'+typeof o.progressFn+'", equal to '+JSON.stringify(o.progressFn,null,4));if(o.mergeType&&1!=+o.mergeType&&2!=+o.mergeType)throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'+typeof o.mergeType+'", equal to '+JSON.stringify(o.mergeType,null,4));if("boolean"!=typeof o.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'+typeof o.joinRangesThatTouchEdges+'", equal to '+JSON.stringify(o.joinRangesThatTouchEdges,null,4))}else o=t({},i);var u,a,l,g=e.filter((function(e){return e})).map((function(e){return[].concat(e)})).filter((function(e){return void 0!==e[2]||e[0]!==e[1]}));if(!(u=o.progressFn?s(g,{progressFn:function(e){(l=Math.floor(e/5))!==a&&(a=l,o.progressFn(l))}}):s(g)))return null;for(var f=u.length-1,p=f;p>0;p--)o.progressFn&&(l=Math.floor(78*(1-p/f))+21)!==a&&l>a&&(a=l,o.progressFn(l)),(u[p][0]<=u[p-1][0]||!o.joinRangesThatTouchEdges&&u[p][0]<u[p-1][1]||o.joinRangesThatTouchEdges&&u[p][0]<=u[p-1][1])&&(u[p-1][0]=Math.min(u[p][0],u[p-1][0]),u[p-1][1]=Math.max(u[p][1],u[p-1][1]),void 0!==u[p][2]&&(u[p-1][0]>=u[p][0]||u[p-1][1]<=u[p][1])&&null!==u[p-1][2]&&(null===u[p][2]&&null!==u[p-1][2]?u[p-1][2]=null:null!=u[p-1][2]?2==+o.mergeType&&u[p-1][0]===u[p][0]?u[p-1][2]=u[p][2]:u[p-1][2]+=u[p][2]:u[p-1][2]=u[p][2]),u.splice(p,1),p=u.length);return u.length?u:null}(u):null},e.version="4.0.2",Object.defineProperty(e,"__esModule",{value:!0})}));
