/**
 * util-array-object-or-both
 * Validate and normalise user choice: array, object or both?
 * Version: 2.7.66
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/util-array-object-or-both/
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).utilArrayObjectOrBoth=r()}(this,(function(){"use strict";function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(r)}function r(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function e(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))}))}return t}var o=1/0,c=9007199254740991,u=17976931348623157e292,i=NaN,a="[object Arguments]",f="[object Function]",l="[object GeneratorFunction]",s="[object String]",b="[object Symbol]",y=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,v=/^0o[0-7]+$/i,m=/^(?:0|[1-9]\d*)$/,j=parseInt;function O(t){return t!=t}function h(t,r){return function(t,r){for(var e=-1,n=t?t.length:0,o=Array(n);++e<n;)o[e]=r(t[e],e,t);return o}(r,(function(r){return t[r]}))}var w,d,S=Object.prototype,P=S.hasOwnProperty,N=S.toString,A=S.propertyIsEnumerable,D=(w=Object.keys,d=Object,function(t){return w(d(t))}),E=Math.max;function I(t,r){var e=_(t)||function(t){return function(t){return $(t)&&x(t)}(t)&&P.call(t,"callee")&&(!A.call(t,"callee")||N.call(t)==a)}(t)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],n=e.length,o=!!n;for(var c in t)!r&&!P.call(t,c)||o&&("length"==c||C(c,n))||e.push(c);return e}function T(t){if(e=(r=t)&&r.constructor,n="function"==typeof e&&e.prototype||S,r!==n)return D(t);var r,e,n,o=[];for(var c in Object(t))P.call(t,c)&&"constructor"!=c&&o.push(c);return o}function C(t,r){return!!(r=null==r?c:r)&&("number"==typeof t||m.test(t))&&t>-1&&t%1==0&&t<r}var _=Array.isArray;function x(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=c}(t.length)&&!function(t){var r=V(t)?N.call(t):"";return r==f||r==l}(t)}function V(r){var e=t(r);return!!r&&("object"==e||"function"==e)}function $(r){return!!r&&"object"==t(r)}var k=function(r,e,n,c){var a;r=x(r)?r:(a=r)?h(a,function(t){return x(t)?I(t):T(t)}(a)):[],n=n&&!c?function(r){var e=function(r){if(!r)return 0===r?r:0;if((r=function(r){if("number"==typeof r)return r;if(function(r){return"symbol"==t(r)||$(r)&&N.call(r)==b}(r))return i;if(V(r)){var e="function"==typeof r.valueOf?r.valueOf():r;r=V(e)?e+"":e}if("string"!=typeof r)return 0===r?r:+r;r=r.replace(y,"");var n=g.test(r);return n||v.test(r)?j(r.slice(2),n?2:8):p.test(r)?i:+r}(r))===o||r===-1/0){return(r<0?-1:1)*u}return r==r?r:0}(r),n=e%1;return e==e?n?e-n:e:0}(n):0;var f=r.length;return n<0&&(n=E(f+n,0)),function(t){return"string"==typeof t||!_(t)&&$(t)&&N.call(t)==s}(r)?n<=f&&r.indexOf(e,n)>-1:!!f&&function(t,r,e){if(r!=r)return function(t,r,e,n){for(var o=t.length,c=e+(n?1:-1);n?c--:++c<o;)if(r(t[c],c,t))return c;return-1}(t,O,e);for(var n=e-1,o=t.length;++n<o;)if(t[n]===r)return n;return-1}(r,e,n)>-1};var q=Function.prototype,F=Object.prototype,H=q.toString,J=F.hasOwnProperty,L=H.call(Object),R=F.toString,W=function(t,r){return function(e){return t(r(e))}}(Object.getPrototypeOf,Object);var B=function(r){if(!function(r){return!!r&&"object"==t(r)}(r)||"[object Object]"!=R.call(r)||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(r))return!1;var e=W(r);if(null===e)return!0;var n=J.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&H.call(n)==L};return function(r,e){function o(t){return null!=t}if(!o(r))throw new Error("util-array-object-or-both/validate(): [THROW_ID_01] Please provide a string to work on. Currently it's equal to ".concat(JSON.stringify(r,null,4)));if("string"!=typeof r)throw new Error("util-array-object-or-both/validate(): [THROW_ID_02] Input must be string! Currently it's ".concat(t(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(o(e)&&!B(e))throw new Error("util-array-object-or-both/validate(): [THROW_ID_03] Second argument, options object, must be, well, object! Currenlty it's: ".concat(t(e),", equal to: ").concat(JSON.stringify(e,null,4)));var c=n(n({},{msg:"",optsVarName:"given variable"}),e);if(o(c.msg)&&c.msg.length>0&&(c.msg="".concat(c.msg.trim()," ")),"given variable"!==c.optsVarName&&(c.optsVarName='variable "'.concat(c.optsVarName,'"')),k(["object","objects","obj","ob","o"],r.toLowerCase().trim()))return"object";if(k(["array","arrays","arr","aray","arr","a"],r.toLowerCase().trim()))return"array";if(k(["any","all","everything","both","either","each","whatever","whatevs","e"],r.toLowerCase().trim()))return"any";throw new TypeError("".concat(c.msg,"The ").concat(c.optsVarName," was customised to an unrecognised value: ").concat(r,". Please check it against the API documentation."))}}));
