/**
 * js-row-num
 * Update all row numbers in all console.logs in JS code
 * Version: 2.7.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/js-row-num
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).jsRowNum=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}const t=" ";function r(e,r=!0,n){if(!(n.trim().length||e.length&&"\n"!==n&&n!==t&&" "===(r?e[e.length-1]:e[0])||e.length&&"\n"===(r?e[e.length-1]:e[0])&&"\n"!==n&&n!==t))if(r){if(("\n"===n||n===t)&&e.length&&" "===e[e.length-1])for(;e.length&&" "===e[e.length-1];)e.pop();e.push(n===t||"\n"===n?n:" ")}else{if(("\n"===n||n===t)&&e.length&&" "===e[0])for(;e.length&&" "===e[0];)e.shift();e.unshift(n===t||"\n"===n?n:" ")}}function n(e,t){if("string"==typeof e&&e.length){let n,o,i=!1;if(e.includes("\r\n")&&(i=!0),n=t&&"number"==typeof t?t:1,""===e.trim()){const t=[];for(o=n,Array.from(e).forEach(e=>{("\n"!==e||o)&&("\n"===e&&o--,r(t,!0,e))});t.length>1&&" "===t[t.length-1];)t.pop();return t.join("")}const s=[];if(o=n,""===e[0].trim())for(let t=0,n=e.length;t<n&&0===e[t].trim().length;t++)("\n"!==e[t]||o)&&("\n"===e[t]&&o--,r(s,!0,e[t]));const a=[];if(o=n,""===e.slice(-1).trim())for(let t=e.length;t--&&0===e[t].trim().length;)("\n"!==e[t]||o)&&("\n"===e[t]&&o--,r(a,!1,e[t]));return i?`${s.join("")}${e.trim()}${a.join("")}`.replace(/\n/g,"\r\n"):s.join("")+e.trim()+a.join("")}return e}
/*!
   * is-natural-number-string | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-natural-number-string
  */var o=function(e,t){if("string"!=typeof e)return!1;if(t&&"includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(e)}return/^[1-9]\d*(\.0+)?$/.test(e)},i=function(e,t){if(t){if("object"!=typeof t)throw new TypeError(String(t)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero&&0===e)return!0}}return Number.isSafeInteger(e)&&e>=1};
/*!
   * is-natural-number.js | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-natural-number.js
  */const s=Array.isArray;function a(e,t){if(!s(e))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===e.length)return e;const r=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null},t);let n,o;if(r.strictlyTwoElementsInRangeArrays&&!e.every((e,t)=>2===e.length||(n=t,o=e.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) has not two but ${o} elements!`);if(!e.every((e,t)=>!(!i(e[0],{includeZero:!0})||!i(e[1],{includeZero:!0}))||(n=t,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) does not consist of only natural numbers!`);const a=e.length*e.length;let u=0;return Array.from(e).sort((e,t)=>(r.progressFn&&(u++,r.progressFn(Math.floor(100*u/a))),e[0]===t[0]?e[1]<t[1]?-1:e[1]>t[1]?1:0:e[0]<t[0]?-1:1))}var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var l=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){var r=200,n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",s="[object Boolean]",a="[object Date]",l="[object Function]",c="[object GeneratorFunction]",f="[object Map]",p="[object Number]",g="[object Object]",h="[object RegExp]",y="[object Set]",d="[object String]",m="[object Symbol]",b="[object ArrayBuffer]",_="[object DataView]",v="[object Float32Array]",w="[object Float64Array]",T="[object Int8Array]",O="[object Int16Array]",j="[object Int32Array]",$="[object Uint8Array]",S="[object Uint8ClampedArray]",I="[object Uint16Array]",R="[object Uint32Array]",E=/\w*$/,A=/^\[object .+?Constructor\]$/,N=/^(?:0|[1-9]\d*)$/,W={};W[i]=W["[object Array]"]=W[b]=W[_]=W[s]=W[a]=W[v]=W[w]=W[T]=W[O]=W[j]=W[f]=W[p]=W[g]=W[h]=W[y]=W[d]=W[m]=W[$]=W[S]=W[I]=W[R]=!0,W["[object Error]"]=W[l]=W["[object WeakMap]"]=!1;var x="object"==typeof u&&u&&u.Object===Object&&u,F="object"==typeof self&&self&&self.Object===Object&&self,D=x||F||Function("return this")(),Z=t&&!t.nodeType&&t,H=Z&&e&&!e.nodeType&&e,J=H&&H.exports===Z;function C(e,t){return e.set(t[0],t[1]),e}function k(e,t){return e.add(t),e}function M(e,t,r,n){var o=-1,i=e?e.length:0;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function q(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function B(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function L(e,t){return function(r){return e(t(r))}}function P(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}var K,G=Array.prototype,z=Function.prototype,U=Object.prototype,V=D["__core-js_shared__"],Q=(K=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+K:"",X=z.toString,Y=U.hasOwnProperty,ee=U.toString,te=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),re=J?D.Buffer:void 0,ne=D.Symbol,oe=D.Uint8Array,ie=L(Object.getPrototypeOf,Object),se=Object.create,ae=U.propertyIsEnumerable,ue=G.splice,le=Object.getOwnPropertySymbols,ce=re?re.isBuffer:void 0,fe=L(Object.keys,Object),pe=He(D,"DataView"),ge=He(D,"Map"),he=He(D,"Promise"),ye=He(D,"Set"),de=He(D,"WeakMap"),me=He(Object,"create"),be=qe(pe),_e=qe(ge),ve=qe(he),we=qe(ye),Te=qe(de),Oe=ne?ne.prototype:void 0,je=Oe?Oe.valueOf:void 0;function $e(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Se(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ie(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Re(e){this.__data__=new Se(e)}function Ee(e,t){var r=Le(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&Pe(e)}(e)&&Y.call(e,"callee")&&(!ae.call(e,"callee")||ee.call(e)==i)}(e)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],n=r.length,o=!!n;for(var s in e)!t&&!Y.call(e,s)||o&&("length"==s||ke(s,n))||r.push(s);return r}function Ae(e,t,r){var n=e[t];Y.call(e,t)&&Be(n,r)&&(void 0!==r||t in e)||(e[t]=r)}function Ne(e,t){for(var r=e.length;r--;)if(Be(e[r][0],t))return r;return-1}function We(e,t,r,n,o,u,A){var N;if(n&&(N=u?n(e,o,u,A):n(e)),void 0!==N)return N;if(!ze(e))return e;var x=Le(e);if(x){if(N=function(e){var t=e.length,r=e.constructor(t);t&&"string"==typeof e[0]&&Y.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!t)return function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(e,N)}else{var F=Ce(e),D=F==l||F==c;if(Ke(e))return function(e,t){if(t)return e.slice();var r=new e.constructor(e.length);return e.copy(r),r}(e,t);if(F==g||F==i||D&&!u){if(q(e))return u?e:{};if(N=function(e){return"function"!=typeof e.constructor||Me(e)?{}:(t=ie(e),ze(t)?se(t):{});var t}(D?{}:e),!t)return function(e,t){return De(e,Je(e),t)}(e,function(e,t){return e&&De(t,Ue(t),e)}(N,e))}else{if(!W[F])return u?e:{};N=function(e,t,r,n){var o=e.constructor;switch(t){case b:return Fe(e);case s:case a:return new o(+e);case _:return function(e,t){var r=t?Fe(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,n);case v:case w:case T:case O:case j:case $:case S:case I:case R:return function(e,t){var r=t?Fe(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}(e,n);case f:return function(e,t,r){return M(t?r(B(e),!0):B(e),C,new e.constructor)}(e,n,r);case p:case d:return new o(e);case h:return function(e){var t=new e.constructor(e.source,E.exec(e));return t.lastIndex=e.lastIndex,t}(e);case y:return function(e,t,r){return M(t?r(P(e),!0):P(e),k,new e.constructor)}(e,n,r);case m:return i=e,je?Object(je.call(i)):{}}var i}(e,F,We,t)}}A||(A=new Re);var Z=A.get(e);if(Z)return Z;if(A.set(e,N),!x)var H=r?function(e){return function(e,t,r){var n=t(e);return Le(e)?n:function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}(n,r(e))}(e,Ue,Je)}(e):Ue(e);return function(e,t){for(var r=-1,n=e?e.length:0;++r<n&&!1!==t(e[r],r,e););}(H||e,(function(o,i){H&&(o=e[i=o]),Ae(N,i,We(o,t,r,n,i,e,A))})),N}function xe(e){return!(!ze(e)||(t=e,Q&&Q in t))&&(Ge(e)||q(e)?te:A).test(qe(e));var t}function Fe(e){var t=new e.constructor(e.byteLength);return new oe(t).set(new oe(e)),t}function De(e,t,r,n){r||(r={});for(var o=-1,i=t.length;++o<i;){var s=t[o],a=n?n(r[s],e[s],s,r,e):void 0;Ae(r,s,void 0===a?e[s]:a)}return r}function Ze(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function He(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return xe(r)?r:void 0}$e.prototype.clear=function(){this.__data__=me?me(null):{}},$e.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},$e.prototype.get=function(e){var t=this.__data__;if(me){var r=t[e];return r===n?void 0:r}return Y.call(t,e)?t[e]:void 0},$e.prototype.has=function(e){var t=this.__data__;return me?void 0!==t[e]:Y.call(t,e)},$e.prototype.set=function(e,t){return this.__data__[e]=me&&void 0===t?n:t,this},Se.prototype.clear=function(){this.__data__=[]},Se.prototype.delete=function(e){var t=this.__data__,r=Ne(t,e);return!(r<0)&&(r==t.length-1?t.pop():ue.call(t,r,1),!0)},Se.prototype.get=function(e){var t=this.__data__,r=Ne(t,e);return r<0?void 0:t[r][1]},Se.prototype.has=function(e){return Ne(this.__data__,e)>-1},Se.prototype.set=function(e,t){var r=this.__data__,n=Ne(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},Ie.prototype.clear=function(){this.__data__={hash:new $e,map:new(ge||Se),string:new $e}},Ie.prototype.delete=function(e){return Ze(this,e).delete(e)},Ie.prototype.get=function(e){return Ze(this,e).get(e)},Ie.prototype.has=function(e){return Ze(this,e).has(e)},Ie.prototype.set=function(e,t){return Ze(this,e).set(e,t),this},Re.prototype.clear=function(){this.__data__=new Se},Re.prototype.delete=function(e){return this.__data__.delete(e)},Re.prototype.get=function(e){return this.__data__.get(e)},Re.prototype.has=function(e){return this.__data__.has(e)},Re.prototype.set=function(e,t){var n=this.__data__;if(n instanceof Se){var o=n.__data__;if(!ge||o.length<r-1)return o.push([e,t]),this;n=this.__data__=new Ie(o)}return n.set(e,t),this};var Je=le?L(le,Object):function(){return[]},Ce=function(e){return ee.call(e)};function ke(e,t){return!!(t=null==t?o:t)&&("number"==typeof e||N.test(e))&&e>-1&&e%1==0&&e<t}function Me(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||U)}function qe(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Be(e,t){return e===t||e!=e&&t!=t}(pe&&Ce(new pe(new ArrayBuffer(1)))!=_||ge&&Ce(new ge)!=f||he&&"[object Promise]"!=Ce(he.resolve())||ye&&Ce(new ye)!=y||de&&"[object WeakMap]"!=Ce(new de))&&(Ce=function(e){var t=ee.call(e),r=t==g?e.constructor:void 0,n=r?qe(r):void 0;if(n)switch(n){case be:return _;case _e:return f;case ve:return"[object Promise]";case we:return y;case Te:return"[object WeakMap]"}return t});var Le=Array.isArray;function Pe(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=o}(e.length)&&!Ge(e)}var Ke=ce||function(){return!1};function Ge(e){var t=ze(e)?ee.call(e):"";return t==l||t==c}function ze(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Ue(e){return Pe(e)?Ee(e):function(e){if(!Me(e))return fe(e);var t=[];for(var r in Object(e))Y.call(e,r)&&"constructor"!=r&&t.push(r);return t}(e)}e.exports=function(e){return We(e,!0,!0)}})),c="[object Object]";var f,p,g=Function.prototype,h=Object.prototype,y=g.toString,d=h.hasOwnProperty,m=y.call(Object),b=h.toString,_=(f=Object.getPrototypeOf,p=Object,function(e){return f(p(e))});var v=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||b.call(e)!=c||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=_(e);if(null===t)return!0;var r=d.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&y.call(r)==m};function w(e,t){function r(e){return"string"==typeof e}if(!Array.isArray(e))return e;const n={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let o;if(t){if(!v(t))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(t,null,4)} (type ${typeof t})`);if(o=Object.assign({},n,t),o.progressFn&&v(o.progressFn)&&!Object.keys(o.progressFn).length)o.progressFn=null;else if(o.progressFn&&"function"!=typeof o.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof o.progressFn}", equal to ${JSON.stringify(o.progressFn,null,4)}`);if(o.mergeType&&1!==o.mergeType&&2!==o.mergeType)if(r(o.mergeType)&&"1"===o.mergeType.trim())o.mergeType=1;else{if(!r(o.mergeType)||"2"!==o.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof o.mergeType}", equal to ${JSON.stringify(o.mergeType,null,4)}`);o.mergeType=2}if("boolean"!=typeof o.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof o.joinRangesThatTouchEdges}", equal to ${JSON.stringify(o.joinRangesThatTouchEdges,null,4)}`)}else o=l(n);const i=l(e).filter(e=>void 0!==e[2]||e[0]!==e[1]);let s,u,c;s=o.progressFn?a(i,{progressFn:e=>{c=Math.floor(e/5),c!==u&&(u=c,o.progressFn(c))}}):a(i);const f=s.length-1;for(let e=f;e>0;e--)o.progressFn&&(c=Math.floor(78*(1-e/f))+21,c!==u&&c>u&&(u=c,o.progressFn(c))),(s[e][0]<=s[e-1][0]||!o.joinRangesThatTouchEdges&&s[e][0]<s[e-1][1]||o.joinRangesThatTouchEdges&&s[e][0]<=s[e-1][1])&&(s[e-1][0]=Math.min(s[e][0],s[e-1][0]),s[e-1][1]=Math.max(s[e][1],s[e-1][1]),void 0!==s[e][2]&&(s[e-1][0]>=s[e][0]||s[e-1][1]<=s[e][1])&&null!==s[e-1][2]&&(null===s[e][2]&&null!==s[e-1][2]?s[e-1][2]=null:void 0!==s[e-1][2]?2===o.mergeType&&s[e-1][0]===s[e][0]?s[e-1][2]=s[e][2]:s[e-1][2]+=s[e][2]:s[e-1][2]=s[e][2]),s.splice(e,1),e=s.length);return s}function T(e){return null!=e}const O=Array.isArray,j=Number.isInteger;function $(e){return"string"==typeof e}function S(e){return o(e,{includeZero:!0})?parseInt(e,10):e}class I{constructor(e){const t=Object.assign({},{limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1},e);if(t.mergeType&&1!==t.mergeType&&2!==t.mergeType)if($(t.mergeType)&&"1"===t.mergeType.trim())t.mergeType=1;else{if(!$(t.mergeType)||"2"!==t.mergeType.trim())throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof t.mergeType}", equal to ${JSON.stringify(t.mergeType,null,4)}`);t.mergeType=2}this.opts=t}add(e,t,r,...i){if(i.length>0)throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ${JSON.stringify(i,null,4)}`);if(!T(e)&&!T(t))return;if(T(e)&&!T(t)){if(O(e)){if(e.length){if(e.some(e=>O(e)))return void e.forEach(e=>{O(e)&&this.add(...e)});e.length>1&&j(S(e[0]))&&j(S(e[1]))&&this.add(...e)}return}throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(e,null,0)}) but second-one, "to" is not (${JSON.stringify(t,null,0)})`)}if(!T(e)&&T(t))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(t,null,0)}) but first-one, "from" is not (${JSON.stringify(e,null,0)})`);const s=o(e,{includeZero:!0})?parseInt(e,10):e,a=o(t,{includeZero:!0})?parseInt(t,10):t;if(j(r)&&(r=String(r)),!j(s)||!j(a))throw j(s)&&s>=0?new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof a}" equal to: ${JSON.stringify(a,null,4)}`):new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof s}" equal to: ${JSON.stringify(s,null,4)}`);if(T(r)&&!$(r)&&!j(r))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof r}, equal to:\n${JSON.stringify(r,null,4)}`);if(T(this.slices)&&O(this.last())&&s===this.last()[1]){if(this.last()[1]=a,this.last()[2],null!==this.last()[2]&&T(r)){let e=!(T(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?r:this.last()[2]+r;this.opts.limitToBeAddedWhitespace&&(e=n(e,this.opts.limitLinebreaksCount)),$(e)&&!e.length||(this.last()[2]=e)}}else{this.slices||(this.slices=[]);const e=void 0===r||$(r)&&!r.length?[s,a]:[s,a,this.opts.limitToBeAddedWhitespace?n(r,this.opts.limitLinebreaksCount):r];this.slices.push(e)}}push(e,t,r,...n){this.add(e,t,r,...n)}current(){return null!=this.slices?(this.slices=w(this.slices,{mergeType:this.opts.mergeType}),this.opts.limitToBeAddedWhitespace?this.slices.map(e=>T(e[2])?[e[0],e[1],n(e[2],this.opts.limitLinebreaksCount)]:e):this.slices):null}wipe(){this.slices=void 0}replace(e){if(O(e)&&e.length){if(!O(e[0])||!j(e[0][0]))throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(e[0],null,4)} should be an array and its first element should be an integer, a string index.`);this.slices=l(e)}else this.slices=void 0}last(){return void 0!==this.slices&&Array.isArray(this.slices)?this.slices[this.slices.length-1]:null}}const R=Array.isArray;var E="\\";return function(t,r){if("string"!=typeof t||0===t.length)return t;function n(e){return/[0-9]/.test(e)}function i(t){return"object"===e(t)&&null!==t}var s=Object.assign({padStart:3,overrideRowNum:null,returnRangesOnly:!1,triggerKeywords:["console.log"],extractedLogContentsWereGiven:!1},r);(!s.padStart||"number"!=typeof s.padStart||"number"==typeof s.padStart&&s.padStart<0)&&(s.padStart=0);var a,u,l=new I,c=t.length,f=null,p=null,g=null,h=1,y=!1,d=null;for(s.padStart&&c>45e3&&(s.padStart=4),a=0;a<c;a++){if(null===s.overrideRowNum&&("\n"===t[a]||"\r"===t[a]&&"\n"!==t[a+1])&&h++,!s.extractedLogContentsWereGiven&&null!==f&&f.start<a&&f.type===t[a]&&(f=null,p=null,g=null,d=null,y=!1),null===f&&(s.extractedLogContentsWereGiven||p&&p<a&&g&&g<a)&&t[a].trim().length)if('"'===t[a]||"'"===t[a]||"`"===t[a])(f={}).start=a,f.type=t[a],y=!1;else if(s.extractedLogContentsWereGiven&&null===d){if(!n(t[a]))break;if(t[a-2]&&"u"===t[a-1]&&"\\"===t[a-2])break;d=a}else t[a].trim().length&&"/"!==t[a]&&!s.extractedLogContentsWereGiven&&(p=null,g=null,d=null);if(f&&Number.isInteger(f.start)&&f.start<a&&!y&&null===d&&n(t[a])&&(d=a),!Number.isInteger(d)||n(t[a])&&t[a+1]||!(a>d)&&t[a+1]||(l.push(d,n(t[a])?a+1:a,s.padStart?String(null!==s.overrideRowNum?s.overrideRowNum:h).padStart(s.padStart,"0"):"".concat(null!==s.overrideRowNum?s.overrideRowNum:h)),d=null,y=!0),f&&Number.isInteger(f.start)&&f.start<a&&!y&&(u=t[a],/[A-Za-z]/.test(u))&&("n"!==t[a]||t[a-1]!==E)){if("\\"===t[a-1]&&"u"===t[a]&&"0"===t[a+1]&&"0"===t[a+2]&&"1"===t[a+3]&&("b"===t[a+4]||"B"===t[a+5])&&"["===t[a+5]){var m=void 0;n(t[a+6])?m=a+6:"$"===t[a+6]&&"{"===t[a+7]&&n(t[a+8])&&(m=a+8);var b=void 0;if(m)for(var _=m;_<c;_++)if(!n(t[_])){b=_;break}var v=void 0;if("m"===t[b]?v=b:"}"===t[b]&&"m"===t[b+1]&&(v=b+1),!v){y=!0;continue}if("$"===t[v+1]&&"{"===t[v+2]&&"`"===t[v+3]){a=v+3;continue}}y=!0}!g&&t[a].trim().length&&p&&p<=a&&("("===t[a]?g=a:(p=null,d=null));var T=void 0;(i(s)&&s.triggerKeywords&&Array.isArray(s.triggerKeywords)&&s.triggerKeywords.some((function(e){if(t.startsWith(e,a))return T=e,!0}))||!(null===s.triggerKeywords||Array.isArray(s.triggerKeywords)&&s.triggerKeywords.length)&&["console.log"].some((function(e){if(t.startsWith(e,a))return T=e,!0})))&&(p=a+T.length,a=a+T.length-1)}return f=null,p=null,g=null,h=1,y=void 0,d=null,h=1,s.returnRangesOnly?l.current():l.current()?function(e,t,r){let n=0,i=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof e)throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(null===t)return e;if(!R(t))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(r&&"function"!=typeof r)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);R(t)&&(Number.isInteger(t[0],{includeZero:!0})||o(t[0],{includeZero:!0}))&&(Number.isInteger(t[1],{includeZero:!0})||o(t[1],{includeZero:!0}))&&(t=[t]);const s=t.length;let a=0;t.forEach((e,u)=>{if(r&&(n=Math.floor(a/s*10),n!==i&&(i=n,r(n))),!R(e))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${u}th element not an array: ${JSON.stringify(e,null,4)}, which is ${typeof e}`);if(!Number.isInteger(e[0],{includeZero:!0})){if(!o(e[0],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${u}th element, array [${e[0]},${e[1]}]. That array has first element not an integer, but ${typeof e[0]}, equal to: ${JSON.stringify(e[0],null,4)}. Computer doesn't like this.`);t[u][0]=Number.parseInt(t[u][0],10)}if(!Number.isInteger(e[1],{includeZero:!0})){if(!o(e[1],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${u}th element, array [${e[0]},${e[1]}]. That array has second element not an integer, but ${typeof e[1]}, equal to: ${JSON.stringify(e[1],null,4)}. Computer doesn't like this.`);t[u][1]=Number.parseInt(t[u][1],10)}a++});const u=w(t,{progressFn:e=>{r&&(n=10+Math.floor(e/10),n!==i&&(i=n,r(n)))}}),l=u.length;if(l>0){const t=e.slice(u[l-1][1]);e=u.reduce((t,o,s,a)=>{r&&(n=20+Math.floor(s/l*80),n!==i&&(i=n,r(n)));const u=0===s?0:a[s-1][1],c=a[s][0];return t+e.slice(u,c)+(function(e){return null!=e}(a[s][2])?a[s][2]:"")},""),e+=t}return e}(t,l.current()):t}}));
