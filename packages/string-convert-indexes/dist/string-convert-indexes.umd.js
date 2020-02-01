/**
 * string-convert-indexes
 * Convert string character indexes from JS native index-based to Unicode character-count-based and backwards.
 * Version: 1.10.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-convert-indexes
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).stringConvertIndexes={})}(this,(function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}Function.prototype.toString.call(Object);var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(t,e){return t(e={exports:{}},e.exports),e.exports}var a=i((function(t,e){var r,n,i,a,c,s,u,f,l,h,y,p,g,d,b,v,m,_;t.exports=(r="function"==typeof Promise,n="object"==typeof self?self:o,i="undefined"!=typeof Symbol,a="undefined"!=typeof Map,c="undefined"!=typeof Set,s="undefined"!=typeof WeakMap,u="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,l=i&&void 0!==Symbol.iterator,h=i&&void 0!==Symbol.toStringTag,y=c&&"function"==typeof Set.prototype.entries,p=a&&"function"==typeof Map.prototype.entries,g=y&&Object.getPrototypeOf((new Set).entries()),d=p&&Object.getPrototypeOf((new Map).entries()),b=l&&"function"==typeof Array.prototype[Symbol.iterator],v=b&&Object.getPrototypeOf([][Symbol.iterator]()),m=l&&"function"==typeof String.prototype[Symbol.iterator],_=m&&Object.getPrototypeOf(""[Symbol.iterator]()),function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===n)return"global";if(Array.isArray(t)&&(!1===h||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var o=h&&t[Symbol.toStringTag];if("string"==typeof o)return o;var i=Object.getPrototypeOf(t);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":r&&i===Promise.prototype?"Promise":c&&i===Set.prototype?"Set":a&&i===Map.prototype?"Map":u&&i===WeakSet.prototype?"WeakSet":s&&i===WeakMap.prototype?"WeakMap":f&&i===DataView.prototype?"DataView":a&&i===d?"Map Iterator":c&&i===g?"Set Iterator":b&&i===v?"Array Iterator":m&&i===_?"String Iterator":null===i?"Object":Object.prototype.toString.call(t).slice(8,-1)})}));function c(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,u,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function s(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}function u(t){return t!=t}var f=Array.prototype.splice;function l(t,e,r,n){var o,i=n?s:c,a=-1,u=e.length,l=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(l=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(o=r,function(t){return o(t)})));++a<u;)for(var h=0,y=e[a],p=r?r(y):y;(h=i(l,p,h,n))>-1;)l!==t&&f.call(l,h,1),f.call(t,h,1);return t}var h=function(t,e){return t&&t.length&&e&&e.length?l(t,e):t},y=i((function(t,e){var r="[object Arguments]",n="[object Function]",i="[object GeneratorFunction]",a="[object Map]",c="[object Set]",s=/\w*$/,u=/^\[object .+?Constructor\]$/,f=/^(?:0|[1-9]\d*)$/,l={};l[r]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object DataView]"]=l["[object Boolean]"]=l["[object Date]"]=l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l[a]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l[c]=l["[object String]"]=l["[object Symbol]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Error]"]=l[n]=l["[object WeakMap]"]=!1;var h="object"==typeof o&&o&&o.Object===Object&&o,y="object"==typeof self&&self&&self.Object===Object&&self,p=h||y||Function("return this")(),g=e&&!e.nodeType&&e,d=g&&t&&!t.nodeType&&t,b=d&&d.exports===g;function v(t,e){return t.set(e[0],e[1]),t}function m(t,e){return t.add(e),t}function _(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function j(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function w(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function O(t,e){return function(r){return t(e(r))}}function $(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var S,A=Array.prototype,T=Function.prototype,k=Object.prototype,W=p["__core-js_shared__"],I=(S=/[^.]+$/.exec(W&&W.keys&&W.keys.IE_PROTO||""))?"Symbol(src)_1."+S:"",N=T.toString,x=k.hasOwnProperty,E=k.toString,P=RegExp("^"+N.call(x).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),M=b?p.Buffer:void 0,D=p.Symbol,R=p.Uint8Array,F=O(Object.getPrototypeOf,Object),H=Object.create,J=k.propertyIsEnumerable,C=A.splice,L=Object.getOwnPropertySymbols,V=M?M.isBuffer:void 0,K=O(Object.keys,Object),q=dt(p,"DataView"),U=dt(p,"Map"),B=dt(p,"Promise"),z=dt(p,"Set"),G=dt(p,"WeakMap"),Q=dt(Object,"create"),X=jt(q),Y=jt(U),Z=jt(B),tt=jt(z),et=jt(G),rt=D?D.prototype:void 0,nt=rt?rt.valueOf:void 0;function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function it(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ct(t){this.__data__=new it(t)}function st(t,e){var n=Ot(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&$t(t)}(t)&&x.call(t,"callee")&&(!J.call(t,"callee")||E.call(t)==r)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],o=n.length,i=!!o;for(var a in t)!e&&!x.call(t,a)||i&&("length"==a||mt(a,o))||n.push(a);return n}function ut(t,e,r){var n=t[e];x.call(t,e)&&wt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function ft(t,e){for(var r=t.length;r--;)if(wt(t[r][0],e))return r;return-1}function lt(t,e,o,u,f,h,y){var p;if(u&&(p=h?u(t,f,h,y):u(t)),void 0!==p)return p;if(!Tt(t))return t;var g=Ot(t);if(g){if(p=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&x.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,p)}else{var d=vt(t),b=d==n||d==i;if(St(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if("[object Object]"==d||d==r||b&&!h){if(j(t))return h?t:{};if(p=function(t){return"function"!=typeof t.constructor||_t(t)?{}:(e=F(t),Tt(e)?H(e):{});var e}(b?{}:t),!e)return function(t,e){return pt(t,bt(t),e)}(t,function(t,e){return t&&pt(e,kt(e),t)}(p,t))}else{if(!l[d])return h?t:{};p=function(t,e,r,n){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return yt(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var r=e?yt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?yt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case a:return function(t,e,r){return _(e?r(w(t),!0):w(t),v,new t.constructor)}(t,n,r);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,s.exec(t));return e.lastIndex=t.lastIndex,e}(t);case c:return function(t,e,r){return _(e?r($(t),!0):$(t),m,new t.constructor)}(t,n,r);case"[object Symbol]":return i=t,nt?Object(nt.call(i)):{}}var i}(t,d,lt,e)}}y||(y=new ct);var O=y.get(t);if(O)return O;if(y.set(t,p),!g)var S=o?function(t){return function(t,e,r){var n=e(t);return Ot(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,kt,bt)}(t):kt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(S||t,(function(r,n){S&&(r=t[n=r]),ut(p,n,lt(r,e,o,u,n,t,y))})),p}function ht(t){return!(!Tt(t)||(e=t,I&&I in e))&&(At(t)||j(t)?P:u).test(jt(t));var e}function yt(t){var e=new t.constructor(t.byteLength);return new R(e).set(new R(t)),e}function pt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;ut(r,a,void 0===c?t[a]:c)}return r}function gt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function dt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return ht(r)?r:void 0}ot.prototype.clear=function(){this.__data__=Q?Q(null):{}},ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ot.prototype.get=function(t){var e=this.__data__;if(Q){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return x.call(e,t)?e[t]:void 0},ot.prototype.has=function(t){var e=this.__data__;return Q?void 0!==e[t]:x.call(e,t)},ot.prototype.set=function(t,e){return this.__data__[t]=Q&&void 0===e?"__lodash_hash_undefined__":e,this},it.prototype.clear=function(){this.__data__=[]},it.prototype.delete=function(t){var e=this.__data__,r=ft(e,t);return!(r<0)&&(r==e.length-1?e.pop():C.call(e,r,1),!0)},it.prototype.get=function(t){var e=this.__data__,r=ft(e,t);return r<0?void 0:e[r][1]},it.prototype.has=function(t){return ft(this.__data__,t)>-1},it.prototype.set=function(t,e){var r=this.__data__,n=ft(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},at.prototype.clear=function(){this.__data__={hash:new ot,map:new(U||it),string:new ot}},at.prototype.delete=function(t){return gt(this,t).delete(t)},at.prototype.get=function(t){return gt(this,t).get(t)},at.prototype.has=function(t){return gt(this,t).has(t)},at.prototype.set=function(t,e){return gt(this,t).set(t,e),this},ct.prototype.clear=function(){this.__data__=new it},ct.prototype.delete=function(t){return this.__data__.delete(t)},ct.prototype.get=function(t){return this.__data__.get(t)},ct.prototype.has=function(t){return this.__data__.has(t)},ct.prototype.set=function(t,e){var r=this.__data__;if(r instanceof it){var n=r.__data__;if(!U||n.length<199)return n.push([t,e]),this;r=this.__data__=new at(n)}return r.set(t,e),this};var bt=L?O(L,Object):function(){return[]},vt=function(t){return E.call(t)};function mt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||f.test(t))&&t>-1&&t%1==0&&t<e}function _t(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||k)}function jt(t){if(null!=t){try{return N.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function wt(t,e){return t===e||t!=t&&e!=e}(q&&"[object DataView]"!=vt(new q(new ArrayBuffer(1)))||U&&vt(new U)!=a||B&&"[object Promise]"!=vt(B.resolve())||z&&vt(new z)!=c||G&&"[object WeakMap]"!=vt(new G))&&(vt=function(t){var e=E.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?jt(r):void 0;if(n)switch(n){case X:return"[object DataView]";case Y:return a;case Z:return"[object Promise]";case tt:return c;case et:return"[object WeakMap]"}return e});var Ot=Array.isArray;function $t(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!At(t)}var St=V||function(){return!1};function At(t){var e=Tt(t)?E.call(t):"";return e==n||e==i}function Tt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function kt(t){return $t(t)?st(t):function(t){if(!_t(t))return K(t);var e=[];for(var r in Object(t))x.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return lt(t,!0,!0)}}));const p=Array.isArray;function g(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function d(t,e){return function t(e,r,n,o){const i=y(e);let a,c,s;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,p(i))for(a=0,c=i.length;a<c&&!o.now;a++){const e=`${n.path}.${a}`;void 0!==i[a]?(n.parent=y(i),n.parentType="array",s=t(r(i[a],void 0,Object.assign({},n,{path:g(e)}),o),r,Object.assign({},n,{path:g(e)}),o),Number.isNaN(s)&&a<i.length?(i.splice(a,1),a-=1):i[a]=s):i.splice(a,1)}else if((u=i)&&"object"==typeof u&&!Array.isArray(u))for(const e in i){if(o.now&&null!=e)break;const a=`${n.path}.${e}`;0===n.depth&&null!=e&&(n.topmostKey=e),n.parent=y(i),n.parentType="object",s=t(r(e,i[e],Object.assign({},n,{path:g(a)}),o),r,Object.assign({},n,{path:g(a)}),o),Number.isNaN(s)?delete i[e]:i[e]=s}var u;return i}(t,e,{},{now:!1})}var b=/^\[object .+?Constructor\]$/,v="object"==typeof o&&o&&o.Object===Object&&o,m="object"==typeof self&&self&&self.Object===Object&&self,_=v||m||Function("return this")();function j(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}function w(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,S,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function O(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function $(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function S(t){return t!=t}function A(t){return function(e){return t(e)}}function T(t,e){return t.has(e)}var k,W,I,N=Array.prototype,x=Function.prototype,E=Object.prototype,P=_["__core-js_shared__"],M=(k=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+k:"",D=x.toString,R=E.hasOwnProperty,F=E.toString,H=RegExp("^"+D.call(R).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),J=N.splice,C=Math.max,L=Math.min,V=Z(_,"Map"),K=Z(Object,"create");function q(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function U(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function B(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function z(t){var e=-1,r=t?t.length:0;for(this.__data__=new B;++e<r;)this.add(t[e])}function G(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function Q(t){return!(!et(t)||(e=t,M&&M in e))&&(tt(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?H:b).test(function(t){if(null!=t){try{return D.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function X(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!tt(t)}(t)}(t)?t:[]}function Y(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Z(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Q(r)?r:void 0}function tt(t){var e=et(t)?F.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}function et(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}q.prototype.clear=function(){this.__data__=K?K(null):{}},q.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},q.prototype.get=function(t){var e=this.__data__;if(K){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return R.call(e,t)?e[t]:void 0},q.prototype.has=function(t){var e=this.__data__;return K?void 0!==e[t]:R.call(e,t)},q.prototype.set=function(t,e){return this.__data__[t]=K&&void 0===e?"__lodash_hash_undefined__":e,this},U.prototype.clear=function(){this.__data__=[]},U.prototype.delete=function(t){var e=this.__data__,r=G(e,t);return!(r<0)&&(r==e.length-1?e.pop():J.call(e,r,1),!0)},U.prototype.get=function(t){var e=this.__data__,r=G(e,t);return r<0?void 0:e[r][1]},U.prototype.has=function(t){return G(this.__data__,t)>-1},U.prototype.set=function(t,e){var r=this.__data__,n=G(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},B.prototype.clear=function(){this.__data__={hash:new q,map:new(V||U),string:new q}},B.prototype.delete=function(t){return Y(this,t).delete(t)},B.prototype.get=function(t){return Y(this,t).get(t)},B.prototype.has=function(t){return Y(this,t).has(t)},B.prototype.set=function(t,e){return Y(this,t).set(t,e),this},z.prototype.add=z.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},z.prototype.has=function(t){return this.__data__.has(t)};var rt=(W=function(t){var e=$(t,X);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?O:w,o=t[0].length,i=t.length,a=i,c=Array(i),s=1/0,u=[];a--;){var f=t[a];a&&e&&(f=$(f,A(e))),s=L(f.length,s),c[a]=!r&&(e||o>=120&&f.length>=120)?new z(a&&f):void 0}f=t[0];var l=-1,h=c[0];t:for(;++l<o&&u.length<s;){var y=f[l],p=e?e(y):y;if(y=r||0!==y?y:0,!(h?T(h,p):n(u,p,r))){for(a=i;--a;){var g=c[a];if(!(g?T(g,p):n(t[a],p,r)))continue t}h&&h.push(p),u.push(y)}}return u}(e):[]},I=C(void 0===I?W.length-1:I,0),function(){for(var t=arguments,e=-1,r=C(t.length-I,0),n=Array(r);++e<r;)n[e]=t[I+e];e=-1;for(var o=Array(I+1);++e<I;)o[e]=t[e];return o[I]=n,j(W,this,o)});function nt(t){return"string"==typeof t?t.length>0?[t]:[]:t}var ot=i((function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function r(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function n(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function i(t){var e=parseInt(t);return e.toString()===t?e:t}function a(t){t=t||{};var a=function(t){return Object.keys(a).reduce((function(e,r){return"create"===r?e:("function"==typeof a[r]&&(e[r]=a[r].bind(a,t)),e)}),{})};function c(r,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||e(r,n)}function s(t,e){if(c(t,e))return t[e]}function u(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return u(t,e.split(".").map(i),r,n);var o=e[0],a=s(t,o);return 1===e.length?(void 0!==a&&n||(t[o]=r),a):(void 0===a&&("number"==typeof e[1]?t[o]=[]:t[o]={}),u(t[o],e.slice(1),r,n))}return a.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var a=0;a<n.length;a++){var c=i(n[a]);if(!("number"==typeof c&&o(r)&&c<r.length||(t.includeInheritedProps?c in Object(r):e(r,c))))return!1;r=r[c]}return!0},a.ensureExists=function(t,e,r){return u(t,e,r,!0)},a.set=function(t,e,r,n){return u(t,e,r,n)},a.insert=function(t,e,r,n){var i=a.get(t,e);n=~~n,o(i)||(i=[],a.set(t,e,i)),i.splice(n,0,r)},a.empty=function(t,e){var i,s;if(!r(e)&&null!=t&&(i=a.get(t,e))){if("string"==typeof i)return a.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}(i))return a.set(t,e,!1);if("number"==typeof i)return a.set(t,e,0);if(o(i))i.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===n(t)}(i))return a.set(t,e,null);for(s in i)c(i,s)&&delete i[s]}}},a.push=function(t,e){var r=a.get(t,e);o(r)||(r=[],a.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},a.coalesce=function(t,e,r){for(var n,o=0,i=e.length;o<i;o++)if(void 0!==(n=a.get(t,e[o])))return n;return r},a.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return a.get(t,e.split("."),r);var n=i(e[0]),o=s(t,n);return void 0===o?r:1===e.length?o:a.get(t[n],e.slice(1),r)},a.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(r(e))return t;if("string"==typeof e)return a.del(t,e.split("."));var n=i(e[0]);return c(t,n)?1!==e.length?a.del(t[n],e.slice(1)):(o(t)?t.splice(n,1):delete t[n],t):t},a}var c=a();return c.create=a,c.withInheritedProps=a({includeInheritedProps:!0}),c}()}));const it=/[|\\{}()[\]^$+*?.-]/g;const at=new Map;function ct(t,e){e={caseSensitive:!1,...e};const r=t+JSON.stringify(e);if(at.has(r))return at.get(r);const n="!"===t[0];n&&(t=t.slice(1)),t=(t=>{if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(it,"\\$&")})(t).replace(/\\\*/g,".*");const o=new RegExp(`^${t}$`,e.caseSensitive?"":"i");return o.negated=n,at.set(r,o),o}var st=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>ct(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};function ut(t,e,r){return function t(e,r,n,o=!0){const i=Object.prototype.hasOwnProperty;function c(t){return null!=t}function s(t){return"Object"===a(t)}function u(t,e){return e=nt(e),Array.from(t).filter(t=>!e.some(e=>st.isMatch(t,e,{caseSensitive:!0})))}const f=["any","anything","every","everything","all","whatever","whatevs"],l=Array.isArray;if(!c(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const y={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let p;if(p=c(n)&&s(n)?Object.assign({},y,n):Object.assign({},y),c(p.ignoreKeys)&&p.ignoreKeys?p.ignoreKeys=nt(p.ignoreKeys):p.ignoreKeys=[],c(p.ignorePaths)&&p.ignorePaths?p.ignorePaths=nt(p.ignorePaths):p.ignorePaths=[],c(p.acceptArraysIgnore)&&p.acceptArraysIgnore?p.acceptArraysIgnore=nt(p.acceptArraysIgnore):p.acceptArraysIgnore=[],p.msg="string"==typeof p.msg?p.msg.trim():p.msg,":"===p.msg[p.msg.length-1]&&(p.msg=p.msg.slice(0,p.msg.length-1).trim()),p.schema&&(Object.keys(p.schema).forEach(t=>{if(s(p.schema[t])){const e={};d(p.schema[t],(r,n,o)=>{const i=void 0!==n?n:r;return l(i)||s(i)||(e[`${t}.${o.path}`]=i),i}),delete p.schema[t],p.schema=Object.assign(p.schema,e)}}),Object.keys(p.schema).forEach(t=>{l(p.schema[t])||(p.schema[t]=[p.schema[t]]),p.schema[t]=p.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())})),c(r)||(r={}),o&&t(p,y,{enforceStrictKeyset:!1},!1),p.enforceStrictKeyset)if(c(p.schema)&&Object.keys(p.schema).length>0){if(0!==u(h(Object.keys(e),Object.keys(r).concat(Object.keys(p.schema))),p.ignoreKeys).length){const t=h(Object.keys(e),Object.keys(r).concat(Object.keys(p.schema)));throw new TypeError(`${p.msg}: ${p.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(c(r)&&Object.keys(r).length>0))throw new TypeError(`${p.msg}: Both ${p.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==u(h(Object.keys(e),Object.keys(r)),p.ignoreKeys).length){const t=h(Object.keys(e),Object.keys(r));throw new TypeError(`${p.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==u(h(Object.keys(r),Object.keys(e)),p.ignoreKeys).length){const t=h(Object.keys(r),Object.keys(e));throw new TypeError(`${p.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}const g=[];d(e,(t,n,o)=>{let c=n,u=t;if("array"===o.parentType&&(u=void 0,c=t),l(g)&&g.length&&g.some(t=>o.path.startsWith(t)))return c;if(u&&p.ignoreKeys.some(t=>st.isMatch(u,t)))return c;if(p.ignorePaths.some(t=>st.isMatch(o.path,t)))return c;const h=!(!s(c)&&!l(c)&&l(o.parent));let y=!1;s(p.schema)&&i.call(p.schema,ot.get(o.path))&&(y=!0);let d=!1;if(s(r)&&ot.has(r,ot.get(o.path))&&(d=!0),p.enforceStrictKeyset&&h&&!y&&!d)throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path} is neither covered by reference object (second input argument), nor ${p.optsVarName}.schema! To stop this error, turn off ${p.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${p.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(e,null,4)}\n\nref = ${JSON.stringify(r,null,4)}\n\ninnerObj = ${JSON.stringify(o,null,4)}\n\nopts = ${JSON.stringify(p,null,4)}\n\ncurrent = ${JSON.stringify(c,null,4)}\n\n`);if(y){const t=nt(p.schema[o.path]).map(String).map(t=>t.toLowerCase());if(ot.set(p.schema,o.path,t),rt(t,f).length)g.push(o.path);else if(!0!==c&&!1!==c&&!t.includes(a(c).toLowerCase())||(!0===c||!1===c)&&!t.includes(String(c))&&!t.includes("boolean")){if(!l(c)||!p.acceptArrays)throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path} was customised to ${"string"!==a(c)?'"':""}${JSON.stringify(c,null,0)}${"string"!==a(c)?'"':""} (type: ${a(c).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let e=0,r=c.length;e<r;e++)if(!t.includes(a(c[e]).toLowerCase()))throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path}.${e}, the ${e}th element (equal to ${JSON.stringify(c[e],null,0)}) is of a type ${a(c[e]).toLowerCase()}, but only the following are allowed by the ${p.optsVarName}.schema: ${t.join(", ")}`)}}else if(d){const e=ot.get(r,o.path);if(p.acceptArrays&&l(c)&&!p.acceptArraysIgnore.includes(t)){if(!c.every(e=>a(e).toLowerCase()===a(r[t]).toLowerCase()))throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path} was customised to be array, but not all of its elements are ${a(r[t]).toLowerCase()}-type`)}else if(a(c)!==a(e))throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path} was customised to ${"string"===a(c).toLowerCase()?"":'"'}${JSON.stringify(c,null,0)}${"string"===a(c).toLowerCase()?"":'"'} which is not ${a(e).toLowerCase()} but ${a(c).toLowerCase()}`)}return c})}(t,e,r)}function ft(t){if("string"==typeof t)return!t.trim().length;if(!["object","string"].includes(typeof t)||!t)return!1;let e=!0;return t=d(t,(t,r,n,o)=>{const i=void 0!==r?r:t;return"string"==typeof i&&i.trim().length&&(e=!1,o.now=!0),i}),e}st.isMatch=(t,e,r)=>{const n=Array.isArray(t)?t:[t],o=Array.isArray(e)?e:[e];return n.some(t=>o.every(e=>{const n=ct(e,r),o=n.test(t);return n.negated?!o:o}))};const lt=Array.isArray;function ht(t){return null!=t}function yt(t){return t&&"object"==typeof t&&!Array.isArray(t)}function pt(t){return"string"==typeof t}function gt(t){return yt(t)||pt(t)||function(t){return"number"==typeof t}(t)||function(t){return"boolean"==typeof t}(t)||lt(t)||function(t){return null===t}(t)}function dt(t,e,r){if(void 0===t)throw new TypeError("ast-compare/compare(): [THROW_ID_01] first argument is missing!");if(void 0===e)throw new TypeError("ast-compare/compare(): [THROW_ID_02] second argument is missing!");if(ht(t)&&!gt(t))throw new TypeError(`ast-compare/compare(): [THROW_ID_03] first input argument is of a wrong type, ${a(t)}, equal to: ${JSON.stringify(t,null,4)}`);if(ht(e)&&!gt(e))throw new TypeError(`ast-compare/compare(): [THROW_ID_04] second input argument is of a wrong type, ${a(e)}, equal to: ${JSON.stringify(e,null,4)}`);if(ht(r)&&!yt(r))throw new TypeError(`ast-compare/compare(): [THROW_ID_05] third argument, options object, must, well, be an object! Currently it's: ${a(r)} and equal to: ${JSON.stringify(r,null,4)}`);let n,o,i,c=0;const s=Object.assign({},{hungryForWhitespace:!1,matchStrictly:!1,verboseWhenMismatches:!1,useWildcards:!1},r);if(s.hungryForWhitespace&&s.matchStrictly&&yt(t)&&ft(t)&&yt(e)&&0===Object.keys(e).length)return!0;if((!s.hungryForWhitespace||s.hungryForWhitespace&&!ft(t)&&ft(e))&&yt(t)&&0!==Object.keys(t).length&&yt(e)&&0===Object.keys(e).length||a(t)!==a(e)&&(!s.hungryForWhitespace||s.hungryForWhitespace&&!ft(t)))return!1;if(pt(t)&&pt(e))return!!(s.hungryForWhitespace&&ft(t)&&ft(e))||(s.verboseWhenMismatches?t===e||`Given string ${e} is not matched! We have ${t} on the other end.`:s.useWildcards?st.isMatch(t,e,{caseSensitive:!0}):t===e);if(lt(t)&&lt(e)){if(s.hungryForWhitespace&&ft(e)&&(!s.matchStrictly||s.matchStrictly&&t.length===e.length))return!0;if(!s.hungryForWhitespace&&e.length>t.length||s.matchStrictly&&e.length!==t.length)return!!s.verboseWhenMismatches&&`The length of a given array, ${JSON.stringify(e,null,4)} is ${e.length} but the length of an array on the other end, ${JSON.stringify(t,null,4)} is ${t.length}`;if(0===e.length)return 0===t.length||!!s.verboseWhenMismatches&&`The given array has no elements, but the array on the other end, ${JSON.stringify(t,null,4)} does have some`;for(let r=0,n=e.length;r<n;r++){i=!1;for(let n=c,o=t.length;n<o;n++)if(c+=1,!0===dt(t[n],e[r],s)){i=!0;break}if(!i)return!!s.verboseWhenMismatches&&`The given array ${JSON.stringify(e,null,4)} is not a subset of an array on the other end, ${JSON.stringify(t,null,4)}`}}else{if(!yt(t)||!yt(e))return!!(s.hungryForWhitespace&&ft(t)&&ft(e)&&(!s.matchStrictly||s.matchStrictly&&(u=e,yt(u)?0===Object.keys(u).length:(lt(u)||pt(u))&&0===u.length)))||t===e;if(n=Object.keys(e),o=Object.keys(t),s.matchStrictly&&n.length!==o.length){if(!s.verboseWhenMismatches)return!1;const t=h(y(n),y(o)),e=t.length>0?`First object has unique keys: ${JSON.stringify(t,null,4)}.`:"",r=h(y(o),y(n));return`When matching strictly, we found that both objects have different amount of keys. ${e} ${r.length>0?`Second object has unique keys:\n        ${JSON.stringify(r,null,4)}.`:""}`}for(let r=0,o=n.length;r<o;r++){if(!ht(t[n[r]]))return!s.useWildcards||s.useWildcards&&!n[r].includes("*")?!!s.verboseWhenMismatches&&`The given object has key ${n[r]} which the other-one does not have.`:!!Object.keys(t).some(t=>st.isMatch(t,n[r],{caseSensitive:!0}))||!!s.verboseWhenMismatches&&`The given object has key ${n[r]} which the other-one does not have.`;if(void 0!==t[n[r]]&&!gt(t[n[r]]))throw new TypeError(`ast-compare/compare(): [THROW_ID_07] The input ${JSON.stringify(t,null,4)} contains a value of a wrong type, ${a(t[n[r]])} at index ${r}, equal to: ${JSON.stringify(t[n[r]],null,4)}`);if(!gt(e[n[r]]))throw new TypeError(`ast-compare/compare(): [THROW_ID_08] The input ${JSON.stringify(e,null,4)} contains a value of a wrong type, ${a(e[n[r]])} at index ${r}, equal to: ${JSON.stringify(e[n[r]],null,4)}`);if(ht(t[n[r]])&&a(t[n[r]])!==a(e[n[r]])){if(!(ft(t[n[r]])&&ft(e[n[r]])&&s.hungryForWhitespace))return!!s.verboseWhenMismatches&&`The given key ${n[r]} is of a different type on both objects. On the first-one, it's ${a(e[n[r]])}, on the second-one, it's ${a(t[n[r]])}`}else if(!0!==dt(t[n[r]],e[n[r]],s))return!!s.verboseWhenMismatches&&`The given piece ${JSON.stringify(e[n[r]],null,4)} and ${JSON.stringify(t[n[r]],null,4)} don't match.`}}var u;return!0}function bt(t){return null!=t}function vt(t){return void 0!==t}function mt(t,e){return typeof t==typeof e&&dt(t,e,{matchStrictly:!0,useWildcards:!0})}function _t(t,e){if(!bt(t))throw new Error("ast-monkey/main.js/set(): [THROW_ID_12] Please provide the input");if(!(r=e)||"object"!=typeof r||Array.isArray(r))throw new Error("ast-monkey/main.js/set(): [THROW_ID_13] Please provide the input");var r;if(!bt(e.key)&&!vt(e.val))throw new Error("ast-monkey/main.js/set(): [THROW_ID_14] Please provide opts.val");if(!bt(e.index))throw new Error("ast-monkey/main.js/set(): [THROW_ID_15] Please provide opts.index");if("string"==typeof e.index&&/^\d*$/.test(e.index))e.index=parseInt(e.index,10);else if(!Number.isInteger(e.index))throw new Error(`ast-monkey/main.js/set(): [THROW_ID_17] opts.index must be a natural number. It was given as: ${e.index}`);return bt(e.key)&&!vt(e.val)&&(e.val=e.key),ut(e,null,{schema:{key:[null,"string"],val:"any",index:"number"},msg:"ast-monkey/set(): [THROW_ID_18*]"}),function(t,e){if(!bt(t))throw new Error("ast-monkey/main.js/monkey(): [THROW_ID_01] Please provide an input");e=Object.assign({key:null,val:void 0},e);const r={count:0,gatherPath:[],finding:null},n=[];let o=!1,i=!1;return bt(e.key)&&!vt(e.val)&&(o=!0),!bt(e.key)&&vt(e.val)&&(i=!0),"arrayFirstOnly"===e.mode&&Array.isArray(t)&&t.length>0&&(t=[t[0]]),t=d(t,(t,a,c)=>{let s;if(r.count+=1,r.gatherPath.length=c.depth,r.gatherPath.push(r.count),"get"===e.mode)r.count===e.index&&(vt(a)?(r.finding={},r.finding[t]=a):r.finding=t);else if("find"===e.mode||"del"===e.mode){if(!("any"===e.only||"array"===e.only&&void 0===a||"object"===e.only&&void 0!==a)||!(o&&mt(t,e.key)||i&&mt(a,e.val)||!o&&!i&&mt(t,e.key)&&mt(a,e.val)))return void 0!==a?a:t;if("find"!==e.mode)return NaN;s={},s.index=r.count,s.key=t,s.val=a,s.path=[...r.gatherPath],n.push(s)}return"set"===e.mode&&r.count===e.index?e.val:"drop"===e.mode&&r.count===e.index?NaN:"arrayFirstOnly"===e.mode?vt(a)&&Array.isArray(a)?[a[0]]:bt(t)&&Array.isArray(t)?[t[0]]:void 0!==a?a:t:void 0!==a?a:t}),"get"===e.mode?r.finding:"find"===e.mode?n.length>0?n:null:t}(t,Object.assign({},e,{mode:"set"}))}function jt(t){return"string"==typeof t}function wt(t){throw new Error("string-convert-indexes: [THROW_ID_01*] Missing ".concat(t,"th parameter!"))}function Ot(t){return"string"==typeof t?parseInt(t,10):t}function $t(t,o,i,a){if(!jt(o)||0===o.length)throw new TypeError("string-convert-indexes: [THROW_ID_02] the first input argument, input string, must be a non-zero-length string! Currently it's: ".concat(e(o),", equal to:\n").concat(o));if(null!=a&&(!(c=a)||"object"!==e(c)||Array.isArray(c)))throw new TypeError("string-convert-indexes: [THROW_ID_03] the third input argument, Optional Options Object, must be a plain object! Currently it's: ".concat(e(a),", equal to:\n").concat(a));var c,s=Object.assign({},{throwIfAnyOfTheIndexesAreOutsideOfTheReferenceString:!0},a),u={id:0},f=[];if(Number.isInteger(i)&&i>=0||/^\d*$/.test(i)?f=[{id:1,val:i}]:i=d(i,(function(t,e){return u.id+=1,u.val=void 0!==e?e:t,(Number.isInteger(u.val)&&u.val>=0||/^\d*$/.test(u.val))&&f.push(function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({},u)),u.val})),0===f.length)return i;f=f.sort((function(t,e){return Ot(t.val)<Ot(e.val)?-1:Ot(t.val)>Ot(e.val)?1:0}));for(var l=-1,h=!1,p=0,g=o.length;p<=g;p++){if(void 0===o[p]?l+=1:o[p].charCodeAt(0)>=55296&&o[p].charCodeAt(0)<=57343?!0!==h?(l+=1,h=!0):h=!1:(l+=1,!0===h&&(h=!1)),"n"===t){for(var b=0,v=f.length;b<v;b++)if(Ot(f[b].val)===p)f[b].res=jt(f[b].val)?String(l):l;else if(Ot(f[b].val)>p)break}else for(var m=0,_=f.length;m<_;m++)if(Ot(f[m].val)===l&&void 0===f[m].res)f[m].res=jt(f[m].val)?String(p):p;else if(Ot(f[m].val)>l)break;if(s.throwIfAnyOfTheIndexesAreOutsideOfTheReferenceString&&p===g-1&&("n"===t&&Ot(f[f.length-1].val)>g||"u"===t&&Ot(f[f.length-1].val)>l+1))throw"n"===t?new Error("string-convert-indexes: [THROW_ID_05] the reference string has native JS string indexes going only upto ".concat(p,", but you are trying to convert an index larger than that, ").concat(Ot(f[f.length-1].val))):new Error("string-convert-indexes: [THROW_ID_06] the reference string has Unicode character count going only upto ".concat(l,", but you are trying to convert an index larger than that, ").concat(Ot(f[f.length-1].val)))}if(Number.isInteger(i)&&i>=0||/^\d*$/.test(i))return void 0!==f[0].res?f[0].res:f[0].val;for(var j=y(i),w=f.length;w--;)j=_t(j,{index:f[w].id,val:void 0!==f[w].res?f[w].res:f[w].val});return j}t.nativeToUnicode=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt(1),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:wt(2),r=arguments.length>2?arguments[2]:void 0;return $t("n",t,e,r)},t.unicodeToNative=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt(1),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:wt(2),r=arguments.length>2?arguments[2]:void 0;return $t("u",t,e,r)},Object.defineProperty(t,"__esModule",{value:!0})}));
