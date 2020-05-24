/**
 * csv-sort
 * Sorts double-entry bookkeeping CSV coming from internet banking
 * Version: 3.0.62
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/csv-sort
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e=e||self).csvSort=r()}(this,(function(){"use strict";function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function r(e,r){if(!Array.isArray(e)||!e.length)return e;const t={strictlyTwoElementsInRangeArrays:!1,progressFn:null,...r};let n,i;if(t.strictlyTwoElementsInRangeArrays&&!e.every((e,r)=>2===e.length||(n=r,i=e.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) has not two but ${i} elements!`);if(!e.every((e,r)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(n=r,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) does not consist of only natural numbers!`);const o=e.length*e.length;let s=0;return Array.from(e).sort((e,r)=>(t.progressFn&&(s+=1,t.progressFn(Math.floor(100*s/o))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1))}function t(e,t){function n(e){return"string"==typeof e}function i(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return e;const o={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let s;if(t){if(!i(t))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(t,null,4)} (type ${typeof t})`);if(s={...o,...t},s.progressFn&&i(s.progressFn)&&!Object.keys(s.progressFn).length)s.progressFn=null;else if(s.progressFn&&"function"!=typeof s.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof s.progressFn}", equal to ${JSON.stringify(s.progressFn,null,4)}`);if(s.mergeType&&1!==s.mergeType&&2!==s.mergeType)if(n(s.mergeType)&&"1"===s.mergeType.trim())s.mergeType=1;else{if(!n(s.mergeType)||"2"!==s.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof s.mergeType}", equal to ${JSON.stringify(s.mergeType,null,4)}`);s.mergeType=2}if("boolean"!=typeof s.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof s.joinRangesThatTouchEdges}", equal to ${JSON.stringify(s.joinRangesThatTouchEdges,null,4)}`)}else s={...o};const a=e.map(e=>[...e]).filter(e=>void 0!==e[2]||e[0]!==e[1]);let u,l,f;u=s.progressFn?r(a,{progressFn:e=>{f=Math.floor(e/5),f!==l&&(l=f,s.progressFn(f))}}):r(a);const c=u.length-1;for(let e=c;e>0;e--)s.progressFn&&(f=Math.floor(78*(1-e/c))+21,f!==l&&f>l&&(l=f,s.progressFn(f))),(u[e][0]<=u[e-1][0]||!s.joinRangesThatTouchEdges&&u[e][0]<u[e-1][1]||s.joinRangesThatTouchEdges&&u[e][0]<=u[e-1][1])&&(u[e-1][0]=Math.min(u[e][0],u[e-1][0]),u[e-1][1]=Math.max(u[e][1],u[e-1][1]),void 0!==u[e][2]&&(u[e-1][0]>=u[e][0]||u[e-1][1]<=u[e][1])&&null!==u[e-1][2]&&(null===u[e][2]&&null!==u[e-1][2]?u[e-1][2]=null:void 0!==u[e-1][2]?2===s.mergeType&&u[e-1][0]===u[e][0]?u[e-1][2]=u[e][2]:u[e-1][2]+=u[e][2]:u[e-1][2]=u[e][2]),u.splice(e,1),e=u.length);return u}function n(e){return null!=e}function i(e){return"string"==typeof e}function o(e,r=!0,t){if(!(t.trim()||e.length&&"\n"!==t&&" "!==t&&" "===(r?e[e.length-1]:e[0])||e.length&&"\n"===(r?e[e.length-1]:e[0])&&"\n"!==t&&" "!==t))if(r){if(("\n"===t||" "===t)&&e.length&&" "===e[e.length-1])for(;e.length&&" "===e[e.length-1];)e.pop();e.push(" "===t||"\n"===t?t:" ")}else{if(("\n"===t||" "===t)&&e.length&&" "===e[0])for(;e.length&&" "===e[0];)e.shift();e.unshift(" "===t||"\n"===t?t:" ")}}function s(e,r){if("string"==typeof e&&e.length){let t,n,i=!1;if(e.includes("\r\n")&&(i=!0),t=r&&"number"==typeof r?r:1,""===e.trim()){const r=[];for(n=t,Array.from(e).forEach(e=>{("\n"!==e||n)&&("\n"===e&&(n-=1),o(r,!0,e))});r.length>1&&" "===r[r.length-1];)r.pop();return r.join("")}const s=[];if(n=t,""===e[0].trim())for(let r=0,t=e.length;r<t&&!e[r].trim();r++)("\n"!==e[r]||n)&&("\n"===e[r]&&(n-=1),o(s,!0,e[r]));const a=[];if(n=t,""===e.slice(-1).trim())for(let r=e.length;r--&&!e[r].trim();)("\n"!==e[r]||n)&&("\n"===e[r]&&(n-=1),o(a,!1,e[r]));return i?`${s.join("")}${e.trim()}${a.join("")}`.replace(/\n/g,"\r\n"):s.join("")+e.trim()+a.join("")}return e}function a(e){return null!=e}function u(e){return Number.isInteger(e)&&e>=0}function l(e){return"string"==typeof e}function f(e){return/^\d*$/.test(e)?parseInt(e,10):e}class c{constructor(e){const r={limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1,...e};if(r.mergeType&&1!==r.mergeType&&2!==r.mergeType)if(l(r.mergeType)&&"1"===r.mergeType.trim())r.mergeType=1;else{if(!l(r.mergeType)||"2"!==r.mergeType.trim())throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof r.mergeType}", equal to ${JSON.stringify(r.mergeType,null,4)}`);r.mergeType=2}this.opts=r}add(e,r,t,...n){if(n.length>0)throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: "+JSON.stringify(n,null,4));if(!a(e)&&!a(r))return;if(a(e)&&!a(r)){if(Array.isArray(e)){if(e.length){if(e.some(e=>Array.isArray(e)))return void e.forEach(e=>{Array.isArray(e)&&this.add(...e)});e.length>1&&u(f(e[0]))&&u(f(e[1]))&&this.add(...e)}return}throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(e,null,0)}) but second-one, "to" is not (${JSON.stringify(r,null,0)})`)}if(!a(e)&&a(r))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(r,null,0)}) but first-one, "from" is not (${JSON.stringify(e,null,0)})`);const i=/^\d*$/.test(e)?parseInt(e,10):e,o=/^\d*$/.test(r)?parseInt(r,10):r;if(u(t)&&(t=String(t)),!u(i)||!u(o))throw u(i)&&i>=0?new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof o}" equal to: ${JSON.stringify(o,null,4)}`):new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof i}" equal to: ${JSON.stringify(i,null,4)}`);if(a(t)&&!l(t)&&!u(t))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof t}, equal to:\n${JSON.stringify(t,null,4)}`);if(a(this.slices)&&Array.isArray(this.last())&&i===this.last()[1]){if(this.last()[1]=o,this.last()[2],null!==this.last()[2]&&a(t)){let e=!(a(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?t:this.last()[2]+t;this.opts.limitToBeAddedWhitespace&&(e=s(e,this.opts.limitLinebreaksCount)),l(e)&&!e.length||(this.last()[2]=e)}}else{this.slices||(this.slices=[]);const e=void 0===t||l(t)&&!t.length?[i,o]:[i,o,this.opts.limitToBeAddedWhitespace?s(t,this.opts.limitLinebreaksCount):t];this.slices.push(e)}}push(e,r,t,...n){this.add(e,r,t,...n)}current(){return null!=this.slices?(this.slices=t(this.slices,{mergeType:this.opts.mergeType}),this.opts.limitToBeAddedWhitespace?this.slices.map(e=>a(e[2])?[e[0],e[1],s(e[2],this.opts.limitLinebreaksCount)]:e):this.slices):null}wipe(){this.slices=void 0}replace(e){if(Array.isArray(e)&&e.length){if(!Array.isArray(e[0])||!u(e[0][0]))throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(e[0],null,4)} should be an array and its first element should be an integer, a string index.`);this.slices=Array.from(e)}else this.slices=void 0}last(){return void 0!==this.slices&&Array.isArray(this.slices)?this.slices[this.slices.length-1]:null}}var p,h,g=Function.prototype,y=Object.prototype,m=g.toString,d=y.hasOwnProperty,v=m.call(Object),b=y.toString,T=(p=Object.getPrototypeOf,h=Object,function(e){return p(h(e))});var w=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||"[object Object]"!=b.call(e)||function(e){var r=!1;if(null!=e&&"function"!=typeof e.toString)try{r=!!(e+"")}catch(e){}return r}(e))return!1;var r=T(e);if(null===r)return!0;var t=d.call(r,"constructor")&&r.constructor;return"function"==typeof t&&t instanceof t&&m.call(t)==v},S="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var $=function(e,r,t){return e(t={path:r,exports:{},require:function(e,r){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==r&&t.path)}},t.exports),t.exports}((function(e,r){!function(t){function n(e,r){return r instanceof Object||(r={trim:!0}),"number"==typeof e&&!isNaN(e)||(e=(e||"").toString(),"trim"in r&&!r.trim?!/\s/.test(e):!!(e=e.trim())&&!isNaN(e))}e.exports&&(r=e.exports=n),r.isNumeric=n}()})),O=($.isNumeric,/^\s+|\s+$/g),N="[\\ud800-\\udfff]",_="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",A="\\ud83c[\\udffb-\\udfff]",R="[^\\ud800-\\udfff]",I="(?:\\ud83c[\\udde6-\\uddff]){2}",E="[\\ud800-\\udbff][\\udc00-\\udfff]",D="(?:"+_+"|"+A+")"+"?",F="[\\ufe0e\\ufe0f]?"+D+("(?:\\u200d(?:"+[R,I,E].join("|")+")[\\ufe0e\\ufe0f]?"+D+")*"),j="(?:"+[R+_+"?",_,I,E,N].join("|")+")",W=RegExp(A+"(?="+A+")|"+j+F,"g"),H=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),J="object"==typeof S&&S&&S.Object===Object&&S,k="object"==typeof self&&self&&self.Object===Object&&self,x=J||k||Function("return this")();function C(e,r,t){if(r!=r)return function(e,r,t,n){for(var i=e.length,o=t+(n?1:-1);n?o--:++o<i;)if(r(e[o],o,e))return o;return-1}(e,M,t);for(var n=t-1,i=e.length;++n<i;)if(e[n]===r)return n;return-1}function M(e){return e!=e}function q(e){return function(e){return H.test(e)}(e)?function(e){return e.match(W)||[]}(e):function(e){return e.split("")}(e)}var K=Object.prototype.toString,P=x.Symbol,U=P?P.prototype:void 0,V=U?U.toString:void 0;function B(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==K.call(e)}(e))return V?V.call(e):"";var r=e+"";return"0"==r&&1/e==-1/0?"-0":r}function L(e,r,t){var n=e.length;return t=void 0===t?n:t,!r&&t>=n?e:function(e,r,t){var n=-1,i=e.length;r<0&&(r=-r>i?0:i+r),(t=t>i?i:t)<0&&(t+=i),i=r>t?0:t-r>>>0,r>>>=0;for(var o=Array(i);++n<i;)o[n]=e[n+r];return o}(e,r,t)}var z=function(e,r,t){var n;if((e=null==(n=e)?"":B(n))&&(t||void 0===r))return e.replace(O,"");if(!e||!(r=B(r)))return e;var i=q(e),o=q(r);return L(i,function(e,r){for(var t=-1,n=e.length;++t<n&&C(r,e[t],0)>-1;);return t}(i,o),function(e,r){for(var t=e.length;t--&&C(r,e[t],0)>-1;);return t}(i,o)+1).join("")};function G(e,r){let o=!0;const s=[".",",","'"," "];let a;if("string"!=typeof e)throw new TypeError(`string-remove-thousand-separators/remSep(): [THROW_ID_01] Input must be string! Currently it's: ${typeof e}, equal to:\n${JSON.stringify(e,null,4)}`);if(null!=r&&!w(r))throw new TypeError(`string-remove-thousand-separators/remSep(): [THROW_ID_02] Options object must be a plain object! Currently it's: ${typeof r}, equal to:\n${JSON.stringify(r,null,4)}`);const u={removeThousandSeparatorsFromNumbers:!0,padSingleDecimalPlaceNumbers:!0,forceUKStyle:!1,...r},l=z(e.trim(),'"');if(""===l)return l;const f=new c;for(let e=0,r=l.length;e<r;e++){if(u.removeThousandSeparatorsFromNumbers&&""===l[e].trim()&&f.add(e,e+1),u.removeThousandSeparatorsFromNumbers&&"'"===l[e]&&(f.add(e,e+1),"'"===l[e+1])){o=!1;break}if(s.includes(l[e])){if(void 0!==l[e+1]&&$(l[e+1]))if(void 0!==l[e+2]){if(!$(l[e+2])){o=!1;break}if(void 0!==l[e+3]){if(!$(l[e+3])){o=!1;break}if(void 0!==l[e+4]&&$(l[e+4])){o=!1;break}if(u.removeThousandSeparatorsFromNumbers&&f.add(e,e+1),a){if(l[e]!==a){o=!1;break}}else a=l[e]}else u.removeThousandSeparatorsFromNumbers&&u.forceUKStyle&&","===l[e]&&f.add(e,e+1,".")}else u.forceUKStyle&&","===l[e]&&f.add(e,e+1,"."),u.padSingleDecimalPlaceNumbers&&f.add(e+2,e+2,"0")}else if(!$(l[e])){o=!1;break}}return o&&f.current()?function(e,r,o){let s,a=0,u=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(!i(e))throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(null===r)return e;if(!Array.isArray(r))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(o&&"function"!=typeof o)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof o}, equal to: ${JSON.stringify(o,null,4)}`);s=Array.isArray(r)&&(Number.isInteger(r[0])&&r[0]>=0||/^\d*$/.test(r[0]))&&(Number.isInteger(r[1])&&r[1]>=0||/^\d*$/.test(r[1]))?[Array.from(r)]:Array.from(r);const l=s.length;let f=0;s.forEach((e,r)=>{if(o&&(a=Math.floor(f/l*10),a!==u&&(u=a,o(a))),!Array.isArray(e))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${r}th element not an array: ${JSON.stringify(e,null,4)}, which is ${typeof e}`);if(!Number.isInteger(e[0])||e[0]<0){if(!/^\d*$/.test(e[0]))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${r}th element, array [${e[0]},${e[1]}]. That array has first element not an integer, but ${typeof e[0]}, equal to: ${JSON.stringify(e[0],null,4)}. Computer doesn't like this.`);s[r][0]=Number.parseInt(s[r][0],10)}if(!Number.isInteger(e[1])){if(!/^\d*$/.test(e[1]))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${r}th element, array [${e[0]},${e[1]}]. That array has second element not an integer, but ${typeof e[1]}, equal to: ${JSON.stringify(e[1],null,4)}. Computer doesn't like this.`);s[r][1]=Number.parseInt(s[r][1],10)}f+=1});const c=t(s,{progressFn:e=>{o&&(a=10+Math.floor(e/10),a!==u&&(u=a,o(a)))}}),p=c.length;if(p>0){const r=e.slice(c[p-1][1]);e=c.reduce((r,t,i,s)=>{o&&(a=20+Math.floor(i/p*80),a!==u&&(u=a,o(a)));const l=0===i?0:s[i-1][1],f=s[i][0];return r+e.slice(l,f)+(n(s[i][2])?s[i][2]:"")},""),e+=r}return e}(l,f.current()):l}function Z(e,r,t){switch(t.length){case 0:return e.call(r);case 1:return e.call(r,t[0]);case 2:return e.call(r,t[0],t[1]);case 3:return e.call(r,t[0],t[1],t[2])}return e.apply(r,t)}function Q(e,r,t){if(r!=r)return function(e,r,t,n){for(var i=e.length,o=t+(n?1:-1);n?o--:++o<i;)if(r(e[o],o,e))return o;return-1}(e,X,t);for(var n=t-1,i=e.length;++n<i;)if(e[n]===r)return n;return-1}function Y(e,r,t,n){for(var i=t-1,o=e.length;++i<o;)if(n(e[i],r))return i;return-1}function X(e){return e!=e}var ee=Array.prototype.splice,re=Math.max;function te(e,r,t,n){var i=n?Y:Q,o=-1,s=r.length,a=e;for(e===r&&(r=function(e,r){var t=-1,n=e.length;r||(r=Array(n));for(;++t<n;)r[t]=e[t];return r}(r)),t&&(a=function(e,r){for(var t=-1,n=e?e.length:0,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i}(e,function(e){return function(r){return e(r)}}(t)));++o<s;)for(var u=0,l=r[o],f=t?t(l):l;(u=i(a,f,u,n))>-1;)a!==e&&ee.call(a,u,1),ee.call(e,u,1);return e}var ne=function(e,r){return r=re(void 0===r?e.length-1:r,0),function(){for(var t=arguments,n=-1,i=re(t.length-r,0),o=Array(i);++n<i;)o[n]=t[r+n];n=-1;for(var s=Array(r+1);++n<r;)s[n]=t[n];return s[r]=o,Z(e,this,s)}}((function(e,r){return e&&e.length&&r&&r.length?te(e,r):e})),ie={symbol:"$",separator:",",decimal:".",formatWithSymbol:!1,errorOnInvalid:!1,precision:2,pattern:"!#",negativePattern:"-!#"},oe=function(e){return Math.round(e)},se=function(e){return Math.pow(10,e)},ae=/(\d)(?=(\d{3})+\b)/g,ue=/(\d)(?=(\d\d)+\d\b)/g;
/*!
   * currency.js - v1.2.2
   * http://scurker.github.io/currency.js
   *
   * Copyright (c) 2019 Jason Wilson
   * Released under MIT license
   */function le(e,r){if(!(this instanceof le))return new le(e,r);var t=Object.assign({},ie,r),n=se(t.precision),i=fe(e,t);this.intValue=i,this.value=i/n,t.increment=t.increment||1/n,t.useVedic?t.groups=ue:t.groups=ae,this.s=t,this.p=n}function fe(e,r){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=0,i=r.decimal,o=r.errorOnInvalid,s=r.precision,a=se(s),u="number"==typeof e;if(u||e instanceof le)n=(u?e:e.value)*a;else if("string"==typeof e){var l=new RegExp("[^-\\d"+i+"]","g"),f=new RegExp("\\"+i,"g");n=(n=e.replace(/\((.*)\)/,"-$1").replace(l,"").replace(f,".")*a)||0}else{if(o)throw Error("Invalid Input");n=0}return n=n.toFixed(4),t?oe(n):n}function ce(e){return null!=e}le.prototype={add:function(e){var r=this.intValue,t=this.s,n=this.p;return le((r+=fe(e,t))/n,t)},subtract:function(e){var r=this.intValue,t=this.s,n=this.p;return le((r-=fe(e,t))/n,t)},multiply:function(e){var r=this.intValue,t=this.s;return le((r*=e)/se(t.precision),t)},divide:function(e){var r=this.intValue,t=this.s;return le(r/=fe(e,t,!1),t)},distribute:function(e){for(var r=this.intValue,t=this.p,n=this.s,i=[],o=Math[r>=0?"floor":"ceil"](r/e),s=Math.abs(r-o*e);0!==e;e--){var a=le(o/t,n);s-- >0&&(a=r>=0?a.add(1/t):a.subtract(1/t)),i.push(a)}return i},dollars:function(){return~~this.value},cents:function(){return~~(this.intValue%this.p)},format:function(e){var r=this.s,t=r.pattern,n=r.negativePattern,i=r.formatWithSymbol,o=r.symbol,s=r.separator,a=r.decimal,u=r.groups,l=(this+"").replace(/^-/,"").split("."),f=l[0],c=l[1];return void 0===e&&(e=i),(this.value>=0?t:n).replace("!",e?o:"").replace("#","".concat(f.replace(u,"$1"+s)).concat(c?a+c:""))},toString:function(){var e,r,t=this.intValue,n=this.p,i=this.s;return(e=t/n,r=i.increment,oe(e/r)*r).toFixed(i.precision)},toJSON:function(){return this.value}};var pe=["د.إ","؋","L","֏","ƒ","Kz","$","ƒ","₼","KM","৳","лв",".د.ب","FBu","$b","R$","฿","Nu.","P","p.","BZ$","FC","CHF","¥","₡","₱","Kč","Fdj","kr","RD$","دج","kr","Nfk","Br","Ξ","€","₾","₵","GH₵","D","FG","Q","L","kn","G","Ft","Rp","₪","₹","ع.د","﷼","kr","J$","JD","¥","KSh","лв","៛","CF","₩","₩","KD","лв","₭","₨","M","Ł","Lt","Ls","LD","MAD","lei","Ar","ден","K","₮","MOP$","UM","₨","Rf","MK","RM","MT","₦","C$","kr","₨","﷼","B/.","S/.","K","₱","₨","zł","Gs","﷼","￥","lei","Дин.","₽","R₣","﷼","₨","ج.س.","kr","£","Le","S","Db","E","฿","SM","T","د.ت","T$","₤","₺","TT$","NT$","TSh","₴","USh","$U","лв","Bs","₫","VT","WS$","FCFA","Ƀ","CFA","₣","﷼","R","Z$"];function he(r){if("string"!=typeof r)throw new Error("csv-sort/util/findtype(): input must be string! Currently it's: ".concat(e(r)));return $(r)||pe.some((function(e){return $(r.replace(e,"").replace(/[,.]/g,""))}))?"numeric":r.trim()?"text":"empty"}return function(r){var t,n=null,i=null;if("string"==typeof r){if(0===r.length)return[[""]];t=function(e,r){let t=0,n=0,i=[];const o=[];let s=!1,a=!0;if(r&&"object"!=typeof r)throw new Error(`csv-split-easy/split(): [THROW_ID_02] Options object must be a plain object! Currently it's of a type ${typeof r} equal to:\n${JSON.stringify(r,null,4)}`);const u={removeThousandSeparatorsFromNumbers:!0,padSingleDecimalPlaceNumbers:!0,forceUKStyle:!1,...r};if("string"!=typeof e)throw new TypeError(`csv-split-easy/split(): [THROW_ID_04] input must be string! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(""===e)return[[""]];for(let r=0,l=(e=e.trim()).length;r<l;r++){if(a&&'"'!==e[r]&&","!==e[r]&&""!==e[r].trim()&&(a=!1),'"'===e[r])if(s&&'"'===e[r+1])r+=1;else if(s){s=!1;const n=e.slice(t,r);""!==n.trim()&&(a=!1);const o=/""/.test(n)?n.replace(/""/g,'"'):G(n,{removeThousandSeparatorsFromNumbers:u.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:u.padSingleDecimalPlaceNumbers,forceUKStyle:u.forceUKStyle});i.push(o)}else s=!0,t=r+1;else if(s||","!==e[r])if("\n"===e[r]||"\r"===e[r]){if(!n){if(n=r,!s&&'"'!==e[r-1]){const n=e.slice(t,r);""!==n.trim()&&(a=!1),i.push(G(n,{removeThousandSeparatorsFromNumbers:u.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:u.padSingleDecimalPlaceNumbers,forceUKStyle:u.forceUKStyle}))}a?i.length=0:o.push(i),a=!0,i=[]}t=r+1}else n&&(n=0,t=r);else{if('"'!==e[r-1]&&!s){const n=e.slice(t,r);""!==n.trim()&&(a=!1),i.push(G(n,{removeThousandSeparatorsFromNumbers:u.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:u.padSingleDecimalPlaceNumbers,forceUKStyle:u.forceUKStyle}))}t=r+1,n&&(n=0)}if(r+1===l){if('"'!==e[r]){const n=e.slice(t,r+1);n.trim()&&(a=!1),i.push(G(n,{removeThousandSeparatorsFromNumbers:u.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:u.padSingleDecimalPlaceNumbers,forceUKStyle:u.forceUKStyle}))}a?i=[]:o.push(i),a=!0}}return 0===o.length?[[""]]:o}(r)}else{if(!Array.isArray(r))throw new TypeError("csv-sort/csvSort(): [THROW_ID_02] The input is of a wrong type! We accept either string of array of arrays. We got instead: ".concat(e(r),", equal to:\n").concat(JSON.stringify(r,null,4)));var o,s;if(!r.every((function(e,r){return Array.isArray(e)||(o=e,s=r),Array.isArray(e)})))throw new TypeError("csv-sort/csvSort(): [THROW_ID_01] the input is array as expected, but not all of its children are arrays! For example, the element at index ".concat(s," is not array but: ").concat(e(o),", equal to:\n").concat(JSON.stringify(o,null,4)))}for(var a=null,u=!1,l=!0,f=[],c=null,p=t.length-1;p>=0;p--)if(a){0===p&&(u=t[p].every((function(e){return"text"===he(e)||"empty"===he(e)}))),u||a.length===t[p].length||(l=!1);for(var h=null,g=0,y=t[p].length;g<y;g++)if(null===h&&"empty"===he(t[p][g].trim())&&(h=g),null!==h&&"empty"!==he(t[p][g].trim())&&(h=null),he(t[p][g].trim())!==a[g]&&!u){var m=he(t[p][g].trim());if(Array.isArray(a[g]))a[g].includes(m)||a[g].push(he(t[p][g].trim()));else if(a[g]!==m){var d=a[g];a[g]=[],a[g].push(d),a[g].push(m)}}null!==c&&null!==h&&h>c&&(!u||u&&0!==p)&&(c=h)}else if(1!==t[p].length||""!==t[p][0]){a=[];for(var v=0,b=t[p].length;v<b;v++)a.push(he(t[p][v].trim())),null===c&&"empty"===he(t[p][v].trim())&&(c=v),null!==c&&"empty"!==he(t[p][v].trim())&&(c=null)}c||(c=a.length);for(var T=0,w=0,S=a.length;w<S&&"empty"===a[w];w++)T=w;0!==T&&(t=t.map((function(e){return e.slice(T+1,c)})),a=a.slice(T+1,c));var $,O=[];a.forEach((function(e,r){"numeric"===e&&O.push(r)}));var N=u?1:0;if(1===O.length)$=O[0];else{if(0===O.length)throw new Error('csv-sort/csvSort(): [THROW_ID_03] Your CSV file does not contain numeric-only columns and computer was not able to detect the "Balance" column!');for(var _=Array.from(O),A=[],R=0,I=_.length;R<I;R++){for(var E=_[R],D=void 0,F=!0,j=void 0,W=!0,H=N,J=t.length;H<J&&(F&&(ce(D)&&D===t[H][E]?(A.push(E),F=!1):D=t[H][E]),W&&(ce(j)?t[H][E]!==j&&(W=!1):j=t[H][E]),F);H++);W&&f.push(E)}if(1===(_=ne.apply(void 0,[_].concat(A))).length)$=_[0];else if(0===_.length)throw new Error('csv-sort/csvSort(): [THROW_ID_04] The computer can\'t find the "Balance" column! It saw some numeric-only columns, but they all seem to have certain rows with the same values as rows right below/above them!')}if(!$)throw new Error("csv-sort/csvSort(): [THROW_ID_05] Sadly computer couldn't find its way in this CSV and had to stop working on it.");var k=ne.apply(void 0,[Array.from(a.reduce((function(e,r,t){return("string"==typeof r&&"numeric"===r||Array.isArray(r)&&r.includes("numeric"))&&e.push(t),e}),[])),$].concat(f)),x=[];x.push(t[t.length-1].slice(0,c));for(var C=[],M=u?1:0,q=t.length-2;q>=M;q--)for(var K=t.length-2;K>=M;K--)if(!C.includes(K)){for(var P=!1,U=0,V=k.length;U<V;U++){var B=null;""!==t[K][k[U]]&&(B=le(t[K][k[U]]));var L=null;""!==t[K][$]&&(L=le(t[K][$]));var z=null;""!==x[0][$]&&(z=le(x[0][$]).format());var Z=null;""!==x[x.length-1][k[U]]&&(Z=le(x[x.length-1][k[U]]).format());var Q=null;if(""!==x[x.length-1][$]&&(Q=le(x[x.length-1][$])),B&&L.add(B).format()===z){x.unshift(t[K].slice(0,c)),C.push(K),P=!0;break}if(B&&L.subtract(B).format()===z){x.unshift(t[K].slice(0,c)),C.push(K),P=!0;break}if(Z&&Q.add(Z).format()===L.format()){x.push(t[K].slice(0,c)),C.push(K),P=!0;break}if(Z&&Q.subtract(Z).format()===L.format()){x.push(t[K].slice(0,c)),C.push(K),P=!0;break}}if(P){P=!1;break}}return u&&(l&&t[0].length>a.length&&(t[0].length=a.length),x.unshift(t[0].slice(0,c))),t.length-(u?2:1)!==C.length&&(n="Not all rows were recognised!",i="alert"),{res:x,msgContent:n,msgType:i}}}));
