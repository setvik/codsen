/**
 * ast-monkey-traverse
 * Utility library to traverse parsed HTML (AST's) or anything nested (plain objects within arrays within plain objects)
 * Version: 1.12.13
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ast-monkey-traverse
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).astMonkeyTraverse=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var c=function(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports}((function(t,e){var r="[object Arguments]",n="[object Function]",c="[object GeneratorFunction]",a="[object Map]",u="[object Set]",i=/\w*$/,f=/^\[object .+?Constructor\]$/,s=/^(?:0|[1-9]\d*)$/,l={};l[r]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object DataView]"]=l["[object Boolean]"]=l["[object Date]"]=l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l[a]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l[u]=l["[object String]"]=l["[object Symbol]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Error]"]=l[n]=l["[object WeakMap]"]=!1;var p="object"==typeof o&&o&&o.Object===Object&&o,y="object"==typeof self&&self&&self.Object===Object&&self,b=p||y||Function("return this")(),h=e&&!e.nodeType&&e,_=h&&t&&!t.nodeType&&t,d=_&&_.exports===h;function j(t,e){return t.set(e[0],e[1]),t}function v(t,e){return t.add(e),t}function g(t,e,r,n){var o=-1,c=t?t.length:0;for(n&&c&&(r=t[++o]);++o<c;)r=e(r,t[o],o,t);return r}function w(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function O(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function m(t,e){return function(r){return t(e(r))}}function A(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var S,x=Array.prototype,P=Function.prototype,D=Object.prototype,E=b["__core-js_shared__"],k=(S=/[^.]+$/.exec(E&&E.keys&&E.keys.IE_PROTO||""))?"Symbol(src)_1."+S:"",I=P.toString,U=D.hasOwnProperty,F=D.toString,N=RegExp("^"+I.call(U).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),T=d?b.Buffer:void 0,$=b.Symbol,B=b.Uint8Array,M=m(Object.getPrototypeOf,Object),V=Object.create,R=D.propertyIsEnumerable,W=x.splice,C=Object.getOwnPropertySymbols,q=T?T.isBuffer:void 0,z=m(Object.keys,Object),L=_t(b,"DataView"),G=_t(b,"Map"),K=_t(b,"Promise"),H=_t(b,"Set"),J=_t(b,"WeakMap"),Q=_t(Object,"create"),X=wt(L),Y=wt(G),Z=wt(K),tt=wt(H),et=wt(J),rt=$?$.prototype:void 0,nt=rt?rt.valueOf:void 0;function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ct(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ut(t){this.__data__=new ct(t)}function it(t,e){var n=mt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&At(t)}(t)&&U.call(t,"callee")&&(!R.call(t,"callee")||F.call(t)==r)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],o=n.length,c=!!o;for(var a in t)!e&&!U.call(t,a)||c&&("length"==a||vt(a,o))||n.push(a);return n}function ft(t,e,r){var n=t[e];U.call(t,e)&&Ot(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function st(t,e){for(var r=t.length;r--;)if(Ot(t[r][0],e))return r;return-1}function lt(t,e,o,f,s,p,y){var b;if(f&&(b=p?f(t,s,p,y):f(t)),void 0!==b)return b;if(!Pt(t))return t;var h=mt(t);if(h){if(b=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&U.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,b)}else{var _=jt(t),d=_==n||_==c;if(St(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if("[object Object]"==_||_==r||d&&!p){if(w(t))return p?t:{};if(b=function(t){return"function"!=typeof t.constructor||gt(t)?{}:(e=M(t),Pt(e)?V(e):{});var e}(d?{}:t),!e)return function(t,e){return bt(t,dt(t),e)}(t,function(t,e){return t&&bt(e,Dt(e),t)}(b,t))}else{if(!l[_])return p?t:{};b=function(t,e,r,n){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return yt(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var r=e?yt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?yt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case a:return function(t,e,r){return g(e?r(O(t),!0):O(t),j,new t.constructor)}(t,n,r);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,i.exec(t));return e.lastIndex=t.lastIndex,e}(t);case u:return function(t,e,r){return g(e?r(A(t),!0):A(t),v,new t.constructor)}(t,n,r);case"[object Symbol]":return c=t,nt?Object(nt.call(c)):{}}var c}(t,_,lt,e)}}y||(y=new ut);var m=y.get(t);if(m)return m;if(y.set(t,b),!h)var S=o?function(t){return function(t,e,r){var n=e(t);return mt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Dt,dt)}(t):Dt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(S||t,(function(r,n){S&&(r=t[n=r]),ft(b,n,lt(r,e,o,f,n,t,y))})),b}function pt(t){return!(!Pt(t)||(e=t,k&&k in e))&&(xt(t)||w(t)?N:f).test(wt(t));var e}function yt(t){var e=new t.constructor(t.byteLength);return new B(e).set(new B(t)),e}function bt(t,e,r,n){r||(r={});for(var o=-1,c=e.length;++o<c;){var a=e[o],u=n?n(r[a],t[a],a,r,t):void 0;ft(r,a,void 0===u?t[a]:u)}return r}function ht(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function _t(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return pt(r)?r:void 0}ot.prototype.clear=function(){this.__data__=Q?Q(null):{}},ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ot.prototype.get=function(t){var e=this.__data__;if(Q){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return U.call(e,t)?e[t]:void 0},ot.prototype.has=function(t){var e=this.__data__;return Q?void 0!==e[t]:U.call(e,t)},ot.prototype.set=function(t,e){return this.__data__[t]=Q&&void 0===e?"__lodash_hash_undefined__":e,this},ct.prototype.clear=function(){this.__data__=[]},ct.prototype.delete=function(t){var e=this.__data__,r=st(e,t);return!(r<0)&&(r==e.length-1?e.pop():W.call(e,r,1),!0)},ct.prototype.get=function(t){var e=this.__data__,r=st(e,t);return r<0?void 0:e[r][1]},ct.prototype.has=function(t){return st(this.__data__,t)>-1},ct.prototype.set=function(t,e){var r=this.__data__,n=st(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},at.prototype.clear=function(){this.__data__={hash:new ot,map:new(G||ct),string:new ot}},at.prototype.delete=function(t){return ht(this,t).delete(t)},at.prototype.get=function(t){return ht(this,t).get(t)},at.prototype.has=function(t){return ht(this,t).has(t)},at.prototype.set=function(t,e){return ht(this,t).set(t,e),this},ut.prototype.clear=function(){this.__data__=new ct},ut.prototype.delete=function(t){return this.__data__.delete(t)},ut.prototype.get=function(t){return this.__data__.get(t)},ut.prototype.has=function(t){return this.__data__.has(t)},ut.prototype.set=function(t,e){var r=this.__data__;if(r instanceof ct){var n=r.__data__;if(!G||n.length<199)return n.push([t,e]),this;r=this.__data__=new at(n)}return r.set(t,e),this};var dt=C?m(C,Object):function(){return[]},jt=function(t){return F.call(t)};function vt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||s.test(t))&&t>-1&&t%1==0&&t<e}function gt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||D)}function wt(t){if(null!=t){try{return I.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ot(t,e){return t===e||t!=t&&e!=e}(L&&"[object DataView]"!=jt(new L(new ArrayBuffer(1)))||G&&jt(new G)!=a||K&&"[object Promise]"!=jt(K.resolve())||H&&jt(new H)!=u||J&&"[object WeakMap]"!=jt(new J))&&(jt=function(t){var e=F.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?wt(r):void 0;if(n)switch(n){case X:return"[object DataView]";case Y:return a;case Z:return"[object Promise]";case tt:return u;case et:return"[object WeakMap]"}return e});var mt=Array.isArray;function At(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!xt(t)}var St=q||function(){return!1};function xt(t){var e=Pt(t)?F.call(t):"";return e==n||e==c}function Pt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Dt(t){return At(t)?it(t):function(t){if(!gt(t))return z(t);var e=[];for(var r in Object(t))U.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return lt(t,!0,!0)}}));function a(t){return"string"==typeof t&&t.length&&"."===t[0]?t.slice(1):t}return function(e,r){return function e(r,o,u,i){var f,s,l,p,y=c(r),b=n({depth:-1,path:""},u);if(b.depth+=1,Array.isArray(y))for(f=0,s=y.length;f<s&&!i.now;f++){var h="".concat(b.path,".").concat(f);void 0!==y[f]?(b.parent=c(y),b.parentType="array",l=e(o(y[f],void 0,n(n({},b),{},{path:a(h)}),i),o,n(n({},b),{},{path:a(h)}),i),Number.isNaN(l)&&f<y.length?(y.splice(f,1),f-=1):y[f]=l):y.splice(f,1)}else if((p=y)&&"object"===t(p)&&!Array.isArray(p))for(var _ in y){if(i.now&&null!=_)break;var d="".concat(b.path,".").concat(_);0===b.depth&&null!=_&&(b.topmostKey=_),b.parent=c(y),b.parentType="object",l=e(o(_,y[_],n(n({},b),{},{path:a(d)}),i),o,n(n({},b),{},{path:a(d)}),i),Number.isNaN(l)?delete y[_]:y[_]=l}return y}(e,r,{},{now:!1})}}));
