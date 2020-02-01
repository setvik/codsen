/**
 * check-types-mini
 * Check the types of your options object's values after user has customised them
 * Version: 5.7.56
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/check-types-mini
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).checkTypesMini=e()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var r=e((function(e,r){var n,o,a,c,i,u,s,f,p,l,y,h,g,b,d,v,_,m;e.exports=(n="function"==typeof Promise,o="object"==typeof self?self:t,a="undefined"!=typeof Symbol,c="undefined"!=typeof Map,i="undefined"!=typeof Set,u="undefined"!=typeof WeakMap,s="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,p=a&&void 0!==Symbol.iterator,l=a&&void 0!==Symbol.toStringTag,y=i&&"function"==typeof Set.prototype.entries,h=c&&"function"==typeof Map.prototype.entries,g=y&&Object.getPrototypeOf((new Set).entries()),b=h&&Object.getPrototypeOf((new Map).entries()),d=p&&"function"==typeof Array.prototype[Symbol.iterator],v=d&&Object.getPrototypeOf([][Symbol.iterator]()),_=p&&"function"==typeof String.prototype[Symbol.iterator],m=_&&Object.getPrototypeOf(""[Symbol.iterator]()),function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===l||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var r=l&&t[Symbol.toStringTag];if("string"==typeof r)return r;var a=Object.getPrototypeOf(t);return a===RegExp.prototype?"RegExp":a===Date.prototype?"Date":n&&a===Promise.prototype?"Promise":i&&a===Set.prototype?"Set":c&&a===Map.prototype?"Map":s&&a===WeakSet.prototype?"WeakSet":u&&a===WeakMap.prototype?"WeakMap":f&&a===DataView.prototype?"DataView":c&&a===b?"Map Iterator":i&&a===g?"Set Iterator":d&&a===v?"Array Iterator":_&&a===m?"String Iterator":null===a?"Object":Object.prototype.toString.call(t).slice(8,-1)})}));function n(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,a=r+(n?1:-1);n?a--:++a<o;)if(e(t[a],a,t))return a;return-1}(t,a,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function o(t,e,r,n){for(var o=r-1,a=t.length;++o<a;)if(n(t[o],e))return o;return-1}function a(t){return t!=t}var c=Array.prototype.splice;function i(t,e,r,a){var i,u=a?o:n,s=-1,f=e.length,p=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(p=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(i=r,function(t){return i(t)})));++s<f;)for(var l=0,y=e[s],h=r?r(y):y;(l=u(p,h,l,a))>-1;)p!==t&&c.call(p,l,1),c.call(t,l,1);return t}var u=function(t,e){return t&&t.length&&e&&e.length?i(t,e):t},s=e((function(e,r){var n="[object Arguments]",o="[object Function]",a="[object GeneratorFunction]",c="[object Map]",i="[object Set]",u=/\w*$/,s=/^\[object .+?Constructor\]$/,f=/^(?:0|[1-9]\d*)$/,p={};p[n]=p["[object Array]"]=p["[object ArrayBuffer]"]=p["[object DataView]"]=p["[object Boolean]"]=p["[object Date]"]=p["[object Float32Array]"]=p["[object Float64Array]"]=p["[object Int8Array]"]=p["[object Int16Array]"]=p["[object Int32Array]"]=p[c]=p["[object Number]"]=p["[object Object]"]=p["[object RegExp]"]=p[i]=p["[object String]"]=p["[object Symbol]"]=p["[object Uint8Array]"]=p["[object Uint8ClampedArray]"]=p["[object Uint16Array]"]=p["[object Uint32Array]"]=!0,p["[object Error]"]=p[o]=p["[object WeakMap]"]=!1;var l="object"==typeof t&&t&&t.Object===Object&&t,y="object"==typeof self&&self&&self.Object===Object&&self,h=l||y||Function("return this")(),g=r&&!r.nodeType&&r,b=g&&e&&!e.nodeType&&e,d=b&&b.exports===g;function v(t,e){return t.set(e[0],e[1]),t}function _(t,e){return t.add(e),t}function m(t,e,r,n){var o=-1,a=t?t.length:0;for(n&&a&&(r=t[++o]);++o<a;)r=e(r,t[o],o,t);return r}function j(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function w(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function O(t,e){return function(r){return t(e(r))}}function A(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var S,k=Array.prototype,T=Function.prototype,E=Object.prototype,N=h["__core-js_shared__"],P=(S=/[^.]+$/.exec(N&&N.keys&&N.keys.IE_PROTO||""))?"Symbol(src)_1."+S:"",M=T.toString,x=E.hasOwnProperty,I=E.toString,$=RegExp("^"+M.call(x).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),L=d?h.Buffer:void 0,C=h.Symbol,V=h.Uint8Array,K=O(Object.getPrototypeOf,Object),D=Object.create,F=E.propertyIsEnumerable,W=k.splice,B=Object.getOwnPropertySymbols,J=L?L.isBuffer:void 0,R=O(Object.keys,Object),U=bt(h,"DataView"),H=bt(h,"Map"),q=bt(h,"Promise"),z=bt(h,"Set"),G=bt(h,"WeakMap"),Q=bt(Object,"create"),X=jt(U),Y=jt(H),Z=jt(q),tt=jt(z),et=jt(G),rt=C?C.prototype:void 0,nt=rt?rt.valueOf:void 0;function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ct(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function it(t){this.__data__=new at(t)}function ut(t,e){var r=Ot(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&At(t)}(t)&&x.call(t,"callee")&&(!F.call(t,"callee")||I.call(t)==n)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],o=r.length,a=!!o;for(var c in t)!e&&!x.call(t,c)||a&&("length"==c||_t(c,o))||r.push(c);return r}function st(t,e,r){var n=t[e];x.call(t,e)&&wt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function ft(t,e){for(var r=t.length;r--;)if(wt(t[r][0],e))return r;return-1}function pt(t,e,r,s,f,l,y){var h;if(s&&(h=l?s(t,f,l,y):s(t)),void 0!==h)return h;if(!Tt(t))return t;var g=Ot(t);if(g){if(h=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&x.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,h)}else{var b=vt(t),d=b==o||b==a;if(St(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if("[object Object]"==b||b==n||d&&!l){if(j(t))return l?t:{};if(h=function(t){return"function"!=typeof t.constructor||mt(t)?{}:(e=K(t),Tt(e)?D(e):{});var e}(d?{}:t),!e)return function(t,e){return ht(t,dt(t),e)}(t,function(t,e){return t&&ht(e,Et(e),t)}(h,t))}else{if(!p[b])return l?t:{};h=function(t,e,r,n){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return yt(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var r=e?yt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?yt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case c:return function(t,e,r){return m(e?r(w(t),!0):w(t),v,new t.constructor)}(t,n,r);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,u.exec(t));return e.lastIndex=t.lastIndex,e}(t);case i:return function(t,e,r){return m(e?r(A(t),!0):A(t),_,new t.constructor)}(t,n,r);case"[object Symbol]":return a=t,nt?Object(nt.call(a)):{}}var a}(t,b,pt,e)}}y||(y=new it);var O=y.get(t);if(O)return O;if(y.set(t,h),!g)var S=r?function(t){return function(t,e,r){var n=e(t);return Ot(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Et,dt)}(t):Et(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(S||t,(function(n,o){S&&(n=t[o=n]),st(h,o,pt(n,e,r,s,o,t,y))})),h}function lt(t){return!(!Tt(t)||(e=t,P&&P in e))&&(kt(t)||j(t)?$:s).test(jt(t));var e}function yt(t){var e=new t.constructor(t.byteLength);return new V(e).set(new V(t)),e}function ht(t,e,r,n){r||(r={});for(var o=-1,a=e.length;++o<a;){var c=e[o],i=n?n(r[c],t[c],c,r,t):void 0;st(r,c,void 0===i?t[c]:i)}return r}function gt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function bt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return lt(r)?r:void 0}ot.prototype.clear=function(){this.__data__=Q?Q(null):{}},ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ot.prototype.get=function(t){var e=this.__data__;if(Q){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return x.call(e,t)?e[t]:void 0},ot.prototype.has=function(t){var e=this.__data__;return Q?void 0!==e[t]:x.call(e,t)},ot.prototype.set=function(t,e){return this.__data__[t]=Q&&void 0===e?"__lodash_hash_undefined__":e,this},at.prototype.clear=function(){this.__data__=[]},at.prototype.delete=function(t){var e=this.__data__,r=ft(e,t);return!(r<0)&&(r==e.length-1?e.pop():W.call(e,r,1),!0)},at.prototype.get=function(t){var e=this.__data__,r=ft(e,t);return r<0?void 0:e[r][1]},at.prototype.has=function(t){return ft(this.__data__,t)>-1},at.prototype.set=function(t,e){var r=this.__data__,n=ft(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},ct.prototype.clear=function(){this.__data__={hash:new ot,map:new(H||at),string:new ot}},ct.prototype.delete=function(t){return gt(this,t).delete(t)},ct.prototype.get=function(t){return gt(this,t).get(t)},ct.prototype.has=function(t){return gt(this,t).has(t)},ct.prototype.set=function(t,e){return gt(this,t).set(t,e),this},it.prototype.clear=function(){this.__data__=new at},it.prototype.delete=function(t){return this.__data__.delete(t)},it.prototype.get=function(t){return this.__data__.get(t)},it.prototype.has=function(t){return this.__data__.has(t)},it.prototype.set=function(t,e){var r=this.__data__;if(r instanceof at){var n=r.__data__;if(!H||n.length<199)return n.push([t,e]),this;r=this.__data__=new ct(n)}return r.set(t,e),this};var dt=B?O(B,Object):function(){return[]},vt=function(t){return I.call(t)};function _t(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||f.test(t))&&t>-1&&t%1==0&&t<e}function mt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||E)}function jt(t){if(null!=t){try{return M.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function wt(t,e){return t===e||t!=t&&e!=e}(U&&"[object DataView]"!=vt(new U(new ArrayBuffer(1)))||H&&vt(new H)!=c||q&&"[object Promise]"!=vt(q.resolve())||z&&vt(new z)!=i||G&&"[object WeakMap]"!=vt(new G))&&(vt=function(t){var e=I.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?jt(r):void 0;if(n)switch(n){case X:return"[object DataView]";case Y:return c;case Z:return"[object Promise]";case tt:return i;case et:return"[object WeakMap]"}return e});var Ot=Array.isArray;function At(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!kt(t)}var St=J||function(){return!1};function kt(t){var e=Tt(t)?I.call(t):"";return e==o||e==a}function Tt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Et(t){return At(t)?ut(t):function(t){if(!mt(t))return R(t);var e=[];for(var r in Object(t))x.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}e.exports=function(t){return pt(t,!0,!0)}}));const f=Array.isArray;function p(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function l(t,e){return function t(e,r,n,o){const a=s(e);let c,i,u;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,f(a))for(c=0,i=a.length;c<i&&!o.now;c++){const e=`${n.path}.${c}`;void 0!==a[c]?(n.parent=s(a),n.parentType="array",u=t(r(a[c],void 0,Object.assign({},n,{path:p(e)}),o),r,Object.assign({},n,{path:p(e)}),o),Number.isNaN(u)&&c<a.length?(a.splice(c,1),c-=1):a[c]=u):a.splice(c,1)}else if((l=a)&&"object"==typeof l&&!Array.isArray(l))for(const e in a){if(o.now&&null!=e)break;const c=`${n.path}.${e}`;0===n.depth&&null!=e&&(n.topmostKey=e),n.parent=s(a),n.parentType="object",u=t(r(e,a[e],Object.assign({},n,{path:p(c)}),o),r,Object.assign({},n,{path:p(c)}),o),Number.isNaN(u)?delete a[e]:a[e]=u}var l;return a}(t,e,{},{now:!1})}var y=/^\[object .+?Constructor\]$/,h="object"==typeof t&&t&&t.Object===Object&&t,g="object"==typeof self&&self&&self.Object===Object&&self,b=h||g||Function("return this")();function d(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}function v(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,a=r+(n?1:-1);for(;n?a--:++a<o;)if(e(t[a],a,t))return a;return-1}(t,j,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function _(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function m(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function j(t){return t!=t}function w(t){return function(e){return t(e)}}function O(t,e){return t.has(e)}var A,S,k,T=Array.prototype,E=Function.prototype,N=Object.prototype,P=b["__core-js_shared__"],M=(A=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+A:"",x=E.toString,I=N.hasOwnProperty,$=N.toString,L=RegExp("^"+x.call(I).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),C=T.splice,V=Math.max,K=Math.min,D=G(b,"Map"),F=G(Object,"create");function W(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function B(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function J(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function R(t){var e=-1,r=t?t.length:0;for(this.__data__=new J;++e<r;)this.add(t[e])}function U(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function H(t){return!(!X(t)||(e=t,M&&M in e))&&(Q(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?L:y).test(function(t){if(null!=t){try{return x.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function q(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!Q(t)}(t)}(t)?t:[]}function z(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function G(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return H(r)?r:void 0}function Q(t){var e=X(t)?$.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}function X(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}W.prototype.clear=function(){this.__data__=F?F(null):{}},W.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},W.prototype.get=function(t){var e=this.__data__;if(F){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return I.call(e,t)?e[t]:void 0},W.prototype.has=function(t){var e=this.__data__;return F?void 0!==e[t]:I.call(e,t)},W.prototype.set=function(t,e){return this.__data__[t]=F&&void 0===e?"__lodash_hash_undefined__":e,this},B.prototype.clear=function(){this.__data__=[]},B.prototype.delete=function(t){var e=this.__data__,r=U(e,t);return!(r<0)&&(r==e.length-1?e.pop():C.call(e,r,1),!0)},B.prototype.get=function(t){var e=this.__data__,r=U(e,t);return r<0?void 0:e[r][1]},B.prototype.has=function(t){return U(this.__data__,t)>-1},B.prototype.set=function(t,e){var r=this.__data__,n=U(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},J.prototype.clear=function(){this.__data__={hash:new W,map:new(D||B),string:new W}},J.prototype.delete=function(t){return z(this,t).delete(t)},J.prototype.get=function(t){return z(this,t).get(t)},J.prototype.has=function(t){return z(this,t).has(t)},J.prototype.set=function(t,e){return z(this,t).set(t,e),this},R.prototype.add=R.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},R.prototype.has=function(t){return this.__data__.has(t)};var Y=(S=function(t){var e=m(t,q);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?_:v,o=t[0].length,a=t.length,c=a,i=Array(a),u=1/0,s=[];c--;){var f=t[c];c&&e&&(f=m(f,w(e))),u=K(f.length,u),i[c]=!r&&(e||o>=120&&f.length>=120)?new R(c&&f):void 0}f=t[0];var p=-1,l=i[0];t:for(;++p<o&&s.length<u;){var y=f[p],h=e?e(y):y;if(y=r||0!==y?y:0,!(l?O(l,h):n(s,h,r))){for(c=a;--c;){var g=i[c];if(!(g?O(g,h):n(t[c],h,r)))continue t}l&&l.push(h),s.push(y)}}return s}(e):[]},k=V(void 0===k?S.length-1:k,0),function(){for(var t=arguments,e=-1,r=V(t.length-k,0),n=Array(r);++e<r;)n[e]=t[k+e];e=-1;for(var o=Array(k+1);++e<k;)o[e]=t[e];return o[k]=n,d(S,this,o)});function Z(t){return"string"==typeof t?t.length>0?[t]:[]:t}var tt=e((function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function r(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function n(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function a(t){var e=parseInt(t);return e.toString()===t?e:t}function c(t){t=t||{};var c=function(t){return Object.keys(c).reduce((function(e,r){return"create"===r?e:("function"==typeof c[r]&&(e[r]=c[r].bind(c,t)),e)}),{})};function i(r,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||e(r,n)}function u(t,e){if(i(t,e))return t[e]}function s(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return s(t,e.split(".").map(a),r,n);var o=e[0],c=u(t,o);return 1===e.length?(void 0!==c&&n||(t[o]=r),c):(void 0===c&&("number"==typeof e[1]?t[o]=[]:t[o]={}),s(t[o],e.slice(1),r,n))}return c.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var c=0;c<n.length;c++){var i=a(n[c]);if(!("number"==typeof i&&o(r)&&i<r.length||(t.includeInheritedProps?i in Object(r):e(r,i))))return!1;r=r[i]}return!0},c.ensureExists=function(t,e,r){return s(t,e,r,!0)},c.set=function(t,e,r,n){return s(t,e,r,n)},c.insert=function(t,e,r,n){var a=c.get(t,e);n=~~n,o(a)||(a=[],c.set(t,e,a)),a.splice(n,0,r)},c.empty=function(t,e){var a,u;if(!r(e)&&null!=t&&(a=c.get(t,e))){if("string"==typeof a)return c.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}(a))return c.set(t,e,!1);if("number"==typeof a)return c.set(t,e,0);if(o(a))a.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===n(t)}(a))return c.set(t,e,null);for(u in a)i(a,u)&&delete a[u]}}},c.push=function(t,e){var r=c.get(t,e);o(r)||(r=[],c.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},c.coalesce=function(t,e,r){for(var n,o=0,a=e.length;o<a;o++)if(void 0!==(n=c.get(t,e[o])))return n;return r},c.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return c.get(t,e.split("."),r);var n=a(e[0]),o=u(t,n);return void 0===o?r:1===e.length?o:c.get(t[n],e.slice(1),r)},c.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(r(e))return t;if("string"==typeof e)return c.del(t,e.split("."));var n=a(e[0]);return i(t,n)?1!==e.length?c.del(t[n],e.slice(1)):(o(t)?t.splice(n,1):delete t[n],t):t},c}var i=c();return i.create=c,i.withInheritedProps=c({includeInheritedProps:!0}),i}()}));const et=/[|\\{}()[\]^$+*?.-]/g;const rt=new Map;function nt(t,e){e={caseSensitive:!1,...e};const r=t+JSON.stringify(e);if(rt.has(r))return rt.get(r);const n="!"===t[0];n&&(t=t.slice(1)),t=(t=>{if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(et,"\\$&")})(t).replace(/\\\*/g,".*");const o=new RegExp(`^${t}$`,e.caseSensitive?"":"i");return o.negated=n,rt.set(r,o),o}var ot=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>nt(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};return ot.isMatch=(t,e,r)=>{const n=Array.isArray(t)?t:[t],o=Array.isArray(e)?e:[e];return n.some(t=>o.every(e=>{const n=nt(e,r),o=n.test(t);return n.negated?!o:o}))},function(t,e,n){return function t(e,n,o){var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],c=Object.prototype.hasOwnProperty;function i(t){return null!=t}function s(t){return"Object"===r(t)}function f(t,e){return e=Z(e),Array.from(t).filter((function(t){return!e.some((function(e){return ot.isMatch(t,e,{caseSensitive:!0})}))}))}var p=["any","anything","every","everything","all","whatever","whatevs"],y=Array.isArray;if(!i(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");var h,g={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};if(h=i(o)&&s(o)?Object.assign({},g,o):Object.assign({},g),i(h.ignoreKeys)&&h.ignoreKeys?h.ignoreKeys=Z(h.ignoreKeys):h.ignoreKeys=[],i(h.ignorePaths)&&h.ignorePaths?h.ignorePaths=Z(h.ignorePaths):h.ignorePaths=[],i(h.acceptArraysIgnore)&&h.acceptArraysIgnore?h.acceptArraysIgnore=Z(h.acceptArraysIgnore):h.acceptArraysIgnore=[],h.msg="string"==typeof h.msg?h.msg.trim():h.msg,":"===h.msg[h.msg.length-1]&&(h.msg=h.msg.slice(0,h.msg.length-1).trim()),h.schema&&(Object.keys(h.schema).forEach((function(t){if(s(h.schema[t])){var e={};l(h.schema[t],(function(r,n,o){var a=void 0!==n?n:r;return y(a)||s(a)||(e["".concat(t,".").concat(o.path)]=a),a})),delete h.schema[t],h.schema=Object.assign(h.schema,e)}})),Object.keys(h.schema).forEach((function(t){y(h.schema[t])||(h.schema[t]=[h.schema[t]]),h.schema[t]=h.schema[t].map(String).map((function(t){return t.toLowerCase()})).map((function(t){return t.trim()}))}))),i(n)||(n={}),a&&t(h,g,{enforceStrictKeyset:!1},!1),h.enforceStrictKeyset)if(i(h.schema)&&Object.keys(h.schema).length>0){if(0!==f(u(Object.keys(e),Object.keys(n).concat(Object.keys(h.schema))),h.ignoreKeys).length){var b=u(Object.keys(e),Object.keys(n).concat(Object.keys(h.schema)));throw new TypeError("".concat(h.msg,": ").concat(h.optsVarName,".enforceStrictKeyset is on and the following key").concat(b.length>1?"s":""," ").concat(b.length>1?"are":"is"," not covered by schema and/or reference objects: ").concat(b.join(", ")))}}else{if(!(i(n)&&Object.keys(n).length>0))throw new TypeError("".concat(h.msg,": Both ").concat(h.optsVarName,".schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!"));if(0!==f(u(Object.keys(e),Object.keys(n)),h.ignoreKeys).length){var d=u(Object.keys(e),Object.keys(n));throw new TypeError("".concat(h.msg,": The input object has key").concat(d.length>1?"s":""," which ").concat(d.length>1?"are":"is"," not covered by the reference object: ").concat(d.join(", ")))}if(0!==f(u(Object.keys(n),Object.keys(e)),h.ignoreKeys).length){var v=u(Object.keys(n),Object.keys(e));throw new TypeError("".concat(h.msg,": The reference object has key").concat(v.length>1?"s":""," which ").concat(v.length>1?"are":"is"," not present in the input object: ").concat(v.join(", ")))}}var _=[];l(e,(function(t,o,a){var i=o,u=t;if("array"===a.parentType&&(u=void 0,i=t),y(_)&&_.length&&_.some((function(t){return a.path.startsWith(t)})))return i;if(u&&h.ignoreKeys.some((function(t){return ot.isMatch(u,t)})))return i;if(h.ignorePaths.some((function(t){return ot.isMatch(a.path,t)})))return i;var f=!(!s(i)&&!y(i)&&y(a.parent)),l=!1;s(h.schema)&&c.call(h.schema,tt.get(a.path))&&(l=!0);var g=!1;if(s(n)&&tt.has(n,tt.get(a.path))&&(g=!0),h.enforceStrictKeyset&&f&&!l&&!g)throw new TypeError("".concat(h.msg,": ").concat(h.optsVarName,".").concat(a.path," is neither covered by reference object (second input argument), nor ").concat(h.optsVarName,".schema! To stop this error, turn off ").concat(h.optsVarName,".enforceStrictKeyset or provide some type reference (2nd argument or ").concat(h.optsVarName,".schema).\n\nDebug info:\n\nobj = ").concat(JSON.stringify(e,null,4),"\n\nref = ").concat(JSON.stringify(n,null,4),"\n\ninnerObj = ").concat(JSON.stringify(a,null,4),"\n\nopts = ").concat(JSON.stringify(h,null,4),"\n\ncurrent = ").concat(JSON.stringify(i,null,4),"\n\n"));if(l){var b=Z(h.schema[a.path]).map(String).map((function(t){return t.toLowerCase()}));if(tt.set(h.schema,a.path,b),Y(b,p).length)_.push(a.path);else if(!0!==i&&!1!==i&&!b.includes(r(i).toLowerCase())||(!0===i||!1===i)&&!b.includes(String(i))&&!b.includes("boolean")){if(!y(i)||!h.acceptArrays)throw new TypeError("".concat(h.msg,": ").concat(h.optsVarName,".").concat(a.path," was customised to ").concat("string"!==r(i)?'"':"").concat(JSON.stringify(i,null,0)).concat("string"!==r(i)?'"':""," (type: ").concat(r(i).toLowerCase(),") which is not among the allowed types in schema (which is equal to ").concat(JSON.stringify(b,null,0),")"));for(var d=0,v=i.length;d<v;d++)if(!b.includes(r(i[d]).toLowerCase()))throw new TypeError("".concat(h.msg,": ").concat(h.optsVarName,".").concat(a.path,".").concat(d,", the ").concat(d,"th element (equal to ").concat(JSON.stringify(i[d],null,0),") is of a type ").concat(r(i[d]).toLowerCase(),", but only the following are allowed by the ").concat(h.optsVarName,".schema: ").concat(b.join(", ")))}}else if(g){var m=tt.get(n,a.path);if(h.acceptArrays&&y(i)&&!h.acceptArraysIgnore.includes(t)){if(!i.every((function(e){return r(e).toLowerCase()===r(n[t]).toLowerCase()})))throw new TypeError("".concat(h.msg,": ").concat(h.optsVarName,".").concat(a.path," was customised to be array, but not all of its elements are ").concat(r(n[t]).toLowerCase(),"-type"))}else if(r(i)!==r(m))throw new TypeError("".concat(h.msg,": ").concat(h.optsVarName,".").concat(a.path," was customised to ").concat("string"===r(i).toLowerCase()?"":'"').concat(JSON.stringify(i,null,0)).concat("string"===r(i).toLowerCase()?"":'"'," which is not ").concat(r(m).toLowerCase()," but ").concat(r(i).toLowerCase()))}return i}))}(t,e,n)}}));
