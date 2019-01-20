/**
 * object-set-all-values-to
 * Recursively walk the input and set all found values in plain objects to something
 * Version: 3.9.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://bitbucket.org/codsen/codsen/src/master/packages/object-set-all-values-to
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).objectSetAllValuesTo=e()}(this,function(){"use strict";var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var r=e(function(e,r){var n=200,o="__lodash_hash_undefined__",i=9007199254740991,a="[object Arguments]",u="[object Boolean]",c="[object Date]",f="[object Function]",s="[object GeneratorFunction]",p="[object Map]",l="[object Number]",y="[object Object]",d="[object RegExp]",b="[object Set]",_="[object String]",v="[object Symbol]",h="[object ArrayBuffer]",g="[object DataView]",j="[object Float32Array]",w="[object Float64Array]",m="[object Int8Array]",O="[object Int16Array]",S="[object Int32Array]",A="[object Uint8Array]",M="[object Uint8ClampedArray]",T="[object Uint16Array]",x="[object Uint32Array]",E=/\w*$/,P=/^\[object .+?Constructor\]$/,k=/^(?:0|[1-9]\d*)$/,D={};D[a]=D["[object Array]"]=D[h]=D[g]=D[u]=D[c]=D[j]=D[w]=D[m]=D[O]=D[S]=D[p]=D[l]=D[y]=D[d]=D[b]=D[_]=D[v]=D[A]=D[M]=D[T]=D[x]=!0,D["[object Error]"]=D[f]=D["[object WeakMap]"]=!1;var I="object"==typeof t&&t&&t.Object===Object&&t,W="object"==typeof self&&self&&self.Object===Object&&self,L=I||W||Function("return this")(),H=r&&!r.nodeType&&r,$=H&&e&&!e.nodeType&&e,B=$&&$.exports===H;function F(t,e){return t.set(e[0],e[1]),t}function R(t,e){return t.add(e),t}function U(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function V(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function C(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function N(t,e){return function(r){return t(e(r))}}function z(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var Q,G=Array.prototype,K=Function.prototype,q=Object.prototype,J=L["__core-js_shared__"],X=(Q=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||""))?"Symbol(src)_1."+Q:"",Y=K.toString,Z=q.hasOwnProperty,tt=q.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=B?L.Buffer:void 0,nt=L.Symbol,ot=L.Uint8Array,it=N(Object.getPrototypeOf,Object),at=Object.create,ut=q.propertyIsEnumerable,ct=G.splice,ft=Object.getOwnPropertySymbols,st=rt?rt.isBuffer:void 0,pt=N(Object.keys,Object),lt=$t(L,"DataView"),yt=$t(L,"Map"),dt=$t(L,"Promise"),bt=$t(L,"Set"),_t=$t(L,"WeakMap"),vt=$t(Object,"create"),ht=Vt(lt),gt=Vt(yt),jt=Vt(dt),wt=Vt(bt),mt=Vt(_t),Ot=nt?nt.prototype:void 0,St=Ot?Ot.valueOf:void 0;function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Mt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function xt(t){this.__data__=new Mt(t)}function Et(t,e){var r=Nt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&zt(t)}(t)&&Z.call(t,"callee")&&(!ut.call(t,"callee")||tt.call(t)==a)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var i in t)!e&&!Z.call(t,i)||o&&("length"==i||Rt(i,n))||r.push(i);return r}function Pt(t,e,r){var n=t[e];Z.call(t,e)&&Ct(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function kt(t,e){for(var r=t.length;r--;)if(Ct(t[r][0],e))return r;return-1}function Dt(t,e,r,n,o,i,P){var k;if(n&&(k=i?n(t,o,i,P):n(t)),void 0!==k)return k;if(!Kt(t))return t;var I=Nt(t);if(I){if(k=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,k)}else{var W=Ft(t),L=W==f||W==s;if(Qt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(W==y||W==a||L&&!i){if(V(t))return i?t:{};if(k=function(t){return"function"!=typeof t.constructor||Ut(t)?{}:(e=it(t),Kt(e)?at(e):{});var e}(L?{}:t),!e)return function(t,e){return Lt(t,Bt(t),e)}(t,function(t,e){return t&&Lt(e,qt(e),t)}(k,t))}else{if(!D[W])return i?t:{};k=function(t,e,r,n){var o=t.constructor;switch(e){case h:return Wt(t);case u:case c:return new o(+t);case g:return function(t,e){var r=e?Wt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case j:case w:case m:case O:case S:case A:case M:case T:case x:return function(t,e){var r=e?Wt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case p:return function(t,e,r){return U(e?r(C(t),!0):C(t),F,new t.constructor)}(t,n,r);case l:case _:return new o(t);case d:return(f=new(a=t).constructor(a.source,E.exec(a))).lastIndex=a.lastIndex,f;case b:return function(t,e,r){return U(e?r(z(t),!0):z(t),R,new t.constructor)}(t,n,r);case v:return i=t,St?Object(St.call(i)):{}}var i;var a,f}(t,W,Dt,e)}}P||(P=new xt);var H=P.get(t);if(H)return H;if(P.set(t,k),!I)var $=r?function(t){return function(t,e,r){var n=e(t);return Nt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,qt,Bt)}(t):qt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}($||t,function(o,i){$&&(o=t[i=o]),Pt(k,i,Dt(o,e,r,n,i,t,P))}),k}function It(t){return!(!Kt(t)||(e=t,X&&X in e))&&(Gt(t)||V(t)?et:P).test(Vt(t));var e}function Wt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Lt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],u=n?n(r[a],t[a],a,r,t):void 0;Pt(r,a,void 0===u?t[a]:u)}return r}function Ht(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function $t(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return It(r)?r:void 0}At.prototype.clear=function(){this.__data__=vt?vt(null):{}},At.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},At.prototype.get=function(t){var e=this.__data__;if(vt){var r=e[t];return r===o?void 0:r}return Z.call(e,t)?e[t]:void 0},At.prototype.has=function(t){var e=this.__data__;return vt?void 0!==e[t]:Z.call(e,t)},At.prototype.set=function(t,e){return this.__data__[t]=vt&&void 0===e?o:e,this},Mt.prototype.clear=function(){this.__data__=[]},Mt.prototype.delete=function(t){var e=this.__data__,r=kt(e,t);return!(r<0||(r==e.length-1?e.pop():ct.call(e,r,1),0))},Mt.prototype.get=function(t){var e=this.__data__,r=kt(e,t);return r<0?void 0:e[r][1]},Mt.prototype.has=function(t){return kt(this.__data__,t)>-1},Mt.prototype.set=function(t,e){var r=this.__data__,n=kt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Tt.prototype.clear=function(){this.__data__={hash:new At,map:new(yt||Mt),string:new At}},Tt.prototype.delete=function(t){return Ht(this,t).delete(t)},Tt.prototype.get=function(t){return Ht(this,t).get(t)},Tt.prototype.has=function(t){return Ht(this,t).has(t)},Tt.prototype.set=function(t,e){return Ht(this,t).set(t,e),this},xt.prototype.clear=function(){this.__data__=new Mt},xt.prototype.delete=function(t){return this.__data__.delete(t)},xt.prototype.get=function(t){return this.__data__.get(t)},xt.prototype.has=function(t){return this.__data__.has(t)},xt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof Mt){var o=r.__data__;if(!yt||o.length<n-1)return o.push([t,e]),this;r=this.__data__=new Tt(o)}return r.set(t,e),this};var Bt=ft?N(ft,Object):function(){return[]},Ft=function(t){return tt.call(t)};function Rt(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||k.test(t))&&t>-1&&t%1==0&&t<e}function Ut(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||q)}function Vt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ct(t,e){return t===e||t!=t&&e!=e}(lt&&Ft(new lt(new ArrayBuffer(1)))!=g||yt&&Ft(new yt)!=p||dt&&"[object Promise]"!=Ft(dt.resolve())||bt&&Ft(new bt)!=b||_t&&"[object WeakMap]"!=Ft(new _t))&&(Ft=function(t){var e=tt.call(t),r=e==y?t.constructor:void 0,n=r?Vt(r):void 0;if(n)switch(n){case ht:return g;case gt:return p;case jt:return"[object Promise]";case wt:return b;case mt:return"[object WeakMap]"}return e});var Nt=Array.isArray;function zt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!Gt(t)}var Qt=st||function(){return!1};function Gt(t){var e=Kt(t)?tt.call(t):"";return e==f||e==s}function Kt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function qt(t){return zt(t)?Et(t):function(t){if(!Ut(t))return pt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}e.exports=function(t){return Dt(t,!0,!0)}}),n=e(function(e,r){var n,o,i,a,u,c,f,s,p,l,y,d,b,_,v,h,g,j,w,m;e.exports=(n="function"==typeof Promise,o="object"==typeof self?self:t,i="undefined"!=typeof Symbol,a="undefined"!=typeof Map,u="undefined"!=typeof Set,c="undefined"!=typeof WeakMap,f="undefined"!=typeof WeakSet,s="undefined"!=typeof DataView,p=i&&void 0!==Symbol.iterator,l=i&&void 0!==Symbol.toStringTag,y=u&&"function"==typeof Set.prototype.entries,d=a&&"function"==typeof Map.prototype.entries,b=y&&Object.getPrototypeOf((new Set).entries()),_=d&&Object.getPrototypeOf((new Map).entries()),v=p&&"function"==typeof Array.prototype[Symbol.iterator],h=v&&Object.getPrototypeOf([][Symbol.iterator]()),g=p&&"function"==typeof String.prototype[Symbol.iterator],j=g&&Object.getPrototypeOf(""[Symbol.iterator]()),w=8,m=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===l||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var r=l&&t[Symbol.toStringTag];if("string"==typeof r)return r;var i=Object.getPrototypeOf(t);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":n&&i===Promise.prototype?"Promise":u&&i===Set.prototype?"Set":a&&i===Map.prototype?"Map":f&&i===WeakSet.prototype?"WeakSet":c&&i===WeakMap.prototype?"WeakMap":s&&i===DataView.prototype?"DataView":a&&i===_?"Map Iterator":u&&i===b?"Set Iterator":v&&i===h?"Array Iterator":g&&i===j?"String Iterator":null===i?"Object":Object.prototype.toString.call(t).slice(w,m)})});function o(t){return"Object"===n(t)}function i(t){return Array.isArray(t)}return function t(e,n){var a;if(0===arguments.length)throw new Error("object-set-all-values-to: [THROW_ID_01] All the inputs are missing!");var u=r(e);return a=!(arguments.length<2)&&(o(n)||i(n)?r(n):n),i(u)?u.forEach(function(e,r){(o(u[r])||i(u[r]))&&(u[r]=t(u[r],a))}):o(u)&&Object.keys(u).forEach(function(e){i(u[e])||o(u[e])?u[e]=t(u[e],a):u[e]=a}),u}});
