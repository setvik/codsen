/**
 * string-overlap-one-on-another
 * Lay one string on top of another, with an optional offset
 * Version: 1.5.21
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-overlap-one-on-another
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).stringOverlapOneOnAnother=e()}(this,function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t,e){return t(e={exports:{}},e.exports),e.exports}var n=r(function(t,r){var n,o,i,a,c,s,u,f,l,p,h,y,g,b,d,v,_,m,w,j;t.exports=(n="function"==typeof Promise,o="object"==typeof self?self:e,i="undefined"!=typeof Symbol,a="undefined"!=typeof Map,c="undefined"!=typeof Set,s="undefined"!=typeof WeakMap,u="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,l=i&&void 0!==Symbol.iterator,p=i&&void 0!==Symbol.toStringTag,h=c&&"function"==typeof Set.prototype.entries,y=a&&"function"==typeof Map.prototype.entries,g=h&&Object.getPrototypeOf((new Set).entries()),b=y&&Object.getPrototypeOf((new Map).entries()),d=l&&"function"==typeof Array.prototype[Symbol.iterator],v=d&&Object.getPrototypeOf([][Symbol.iterator]()),_=l&&"function"==typeof String.prototype[Symbol.iterator],m=_&&Object.getPrototypeOf(""[Symbol.iterator]()),w=8,j=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===p||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var r=p&&t[Symbol.toStringTag];if("string"==typeof r)return r;var i=Object.getPrototypeOf(t);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":n&&i===Promise.prototype?"Promise":c&&i===Set.prototype?"Set":a&&i===Map.prototype?"Map":u&&i===WeakSet.prototype?"WeakSet":s&&i===WeakMap.prototype?"WeakMap":f&&i===DataView.prototype?"DataView":a&&i===b?"Map Iterator":c&&i===g?"Set Iterator":d&&i===v?"Array Iterator":_&&i===m?"String Iterator":null===i?"Object":Object.prototype.toString.call(t).slice(w,j)})});function o(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,a,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function i(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}function a(t){return t!=t}var c=Array.prototype.splice;function s(t,e,r,n){var a,s=n?i:o,u=-1,f=e.length,l=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(l=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(a=r,function(t){return a(t)})));++u<f;)for(var p=0,h=e[u],y=r?r(h):h;(p=s(l,y,p,n))>-1;)l!==t&&c.call(l,p,1),c.call(t,p,1);return t}var u=function(t,e){return t&&t.length&&e&&e.length?s(t,e):t},f=r(function(t,r){var n=200,o="__lodash_hash_undefined__",i=9007199254740991,a="[object Arguments]",c="[object Boolean]",s="[object Date]",u="[object Function]",f="[object GeneratorFunction]",l="[object Map]",p="[object Number]",h="[object Object]",y="[object RegExp]",g="[object Set]",b="[object String]",d="[object Symbol]",v="[object ArrayBuffer]",_="[object DataView]",m="[object Float32Array]",w="[object Float64Array]",j="[object Int8Array]",O="[object Int16Array]",$="[object Int32Array]",S="[object Uint8Array]",A="[object Uint8ClampedArray]",T="[object Uint16Array]",E="[object Uint32Array]",k=/\w*$/,N=/^\[object .+?Constructor\]$/,M=/^(?:0|[1-9]\d*)$/,P={};P[a]=P["[object Array]"]=P[v]=P[_]=P[c]=P[s]=P[m]=P[w]=P[j]=P[O]=P[$]=P[l]=P[p]=P[h]=P[y]=P[g]=P[b]=P[d]=P[S]=P[A]=P[T]=P[E]=!0,P["[object Error]"]=P[u]=P["[object WeakMap]"]=!1;var I="object"==typeof e&&e&&e.Object===Object&&e,x="object"==typeof self&&self&&self.Object===Object&&self,C=I||x||Function("return this")(),L=r&&!r.nodeType&&r,K=L&&t&&!t.nodeType&&t,D=K&&K.exports===L;function F(t,e){return t.set(e[0],e[1]),t}function W(t,e){return t.add(e),t}function V(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function H(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function J(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function R(t,e){return function(r){return t(e(r))}}function B(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var U,Z=Array.prototype,q=Function.prototype,z=Object.prototype,G=C["__core-js_shared__"],Q=(U=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+U:"",X=q.toString,Y=z.hasOwnProperty,tt=z.toString,et=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=D?C.Buffer:void 0,nt=C.Symbol,ot=C.Uint8Array,it=R(Object.getPrototypeOf,Object),at=Object.create,ct=z.propertyIsEnumerable,st=Z.splice,ut=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,lt=R(Object.keys,Object),pt=Kt(C,"DataView"),ht=Kt(C,"Map"),yt=Kt(C,"Promise"),gt=Kt(C,"Set"),bt=Kt(C,"WeakMap"),dt=Kt(Object,"create"),vt=Ht(pt),_t=Ht(ht),mt=Ht(yt),wt=Ht(gt),jt=Ht(bt),Ot=nt?nt.prototype:void 0,$t=Ot?Ot.valueOf:void 0;function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){this.__data__=new At(t)}function kt(t,e){var r=Rt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Bt(t)}(t)&&Y.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==a)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var i in t)!e&&!Y.call(t,i)||o&&("length"==i||Wt(i,n))||r.push(i);return r}function Nt(t,e,r){var n=t[e];Y.call(t,e)&&Jt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Mt(t,e){for(var r=t.length;r--;)if(Jt(t[r][0],e))return r;return-1}function Pt(t,e,r,n,o,i,N){var M;if(n&&(M=i?n(t,o,i,N):n(t)),void 0!==M)return M;if(!qt(t))return t;var I=Rt(t);if(I){if(M=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Y.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,M)}else{var x=Ft(t),C=x==u||x==f;if(Ut(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(x==h||x==a||C&&!i){if(H(t))return i?t:{};if(M=function(t){return"function"!=typeof t.constructor||Vt(t)?{}:(e=it(t),qt(e)?at(e):{});var e}(C?{}:t),!e)return function(t,e){return Ct(t,Dt(t),e)}(t,function(t,e){return t&&Ct(e,zt(e),t)}(M,t))}else{if(!P[x])return i?t:{};M=function(t,e,r,n){var o=t.constructor;switch(e){case v:return xt(t);case c:case s:return new o(+t);case _:return function(t,e){var r=e?xt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case m:case w:case j:case O:case $:case S:case A:case T:case E:return function(t,e){var r=e?xt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return V(e?r(J(t),!0):J(t),F,new t.constructor)}(t,n,r);case p:case b:return new o(t);case y:return(u=new(a=t).constructor(a.source,k.exec(a))).lastIndex=a.lastIndex,u;case g:return function(t,e,r){return V(e?r(B(t),!0):B(t),W,new t.constructor)}(t,n,r);case d:return i=t,$t?Object($t.call(i)):{}}var i;var a,u}(t,x,Pt,e)}}N||(N=new Et);var L=N.get(t);if(L)return L;if(N.set(t,M),!I)var K=r?function(t){return function(t,e,r){var n=e(t);return Rt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,zt,Dt)}(t):zt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(K||t,function(o,i){K&&(o=t[i=o]),Nt(M,i,Pt(o,e,r,n,i,t,N))}),M}function It(t){return!(!qt(t)||(e=t,Q&&Q in e))&&(Zt(t)||H(t)?et:N).test(Ht(t));var e}function xt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Ct(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;Nt(r,a,void 0===c?t[a]:c)}return r}function Lt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Kt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return It(r)?r:void 0}St.prototype.clear=function(){this.__data__=dt?dt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var e=this.__data__;if(dt){var r=e[t];return r===o?void 0:r}return Y.call(e,t)?e[t]:void 0},St.prototype.has=function(t){var e=this.__data__;return dt?void 0!==e[t]:Y.call(e,t)},St.prototype.set=function(t,e){return this.__data__[t]=dt&&void 0===e?o:e,this},At.prototype.clear=function(){this.__data__=[]},At.prototype.delete=function(t){var e=this.__data__,r=Mt(e,t);return!(r<0||(r==e.length-1?e.pop():st.call(e,r,1),0))},At.prototype.get=function(t){var e=this.__data__,r=Mt(e,t);return r<0?void 0:e[r][1]},At.prototype.has=function(t){return Mt(this.__data__,t)>-1},At.prototype.set=function(t,e){var r=this.__data__,n=Mt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Tt.prototype.clear=function(){this.__data__={hash:new St,map:new(ht||At),string:new St}},Tt.prototype.delete=function(t){return Lt(this,t).delete(t)},Tt.prototype.get=function(t){return Lt(this,t).get(t)},Tt.prototype.has=function(t){return Lt(this,t).has(t)},Tt.prototype.set=function(t,e){return Lt(this,t).set(t,e),this},Et.prototype.clear=function(){this.__data__=new At},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,e){var r=this.__data__;if(r instanceof At){var o=r.__data__;if(!ht||o.length<n-1)return o.push([t,e]),this;r=this.__data__=new Tt(o)}return r.set(t,e),this};var Dt=ut?R(ut,Object):function(){return[]},Ft=function(t){return tt.call(t)};function Wt(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||M.test(t))&&t>-1&&t%1==0&&t<e}function Vt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||z)}function Ht(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Jt(t,e){return t===e||t!=t&&e!=e}(pt&&Ft(new pt(new ArrayBuffer(1)))!=_||ht&&Ft(new ht)!=l||yt&&"[object Promise]"!=Ft(yt.resolve())||gt&&Ft(new gt)!=g||bt&&"[object WeakMap]"!=Ft(new bt))&&(Ft=function(t){var e=tt.call(t),r=e==h?t.constructor:void 0,n=r?Ht(r):void 0;if(n)switch(n){case vt:return _;case _t:return l;case mt:return"[object Promise]";case wt:return g;case jt:return"[object WeakMap]"}return e});var Rt=Array.isArray;function Bt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!Zt(t)}var Ut=ft||function(){return!1};function Zt(t){var e=qt(t)?tt.call(t):"";return e==u||e==f}function qt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function zt(t){return Bt(t)?kt(t):function(t){if(!Vt(t))return lt(t);var e=[];for(var r in Object(t))Y.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Pt(t,!0,!0)}}),l="[object Object]";var p,h,y=Function.prototype,g=Object.prototype,b=y.toString,d=g.hasOwnProperty,v=b.call(Object),_=g.toString,m=(p=Object.getPrototypeOf,h=Object,function(t){return p(h(t))});var w=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||_.call(t)!=l||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=m(t);if(null===e)return!0;var r=d.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&b.call(r)==v};const j=Array.isArray;function O(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function $(t,e){return function t(e,r,n){const o=f(e);let i,a,c,s,u;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,j(o))for(i=0,a=o.length;i<a;i++){const e=`${n.path}.${i}`;void 0!==o[i]?(n.parent=f(o),n.parentType="array",c=t(r(o[i],void 0,Object.assign({},n,{path:O(e)})),r,Object.assign({},n,{path:O(e)})),Number.isNaN(c)&&i<o.length?(o.splice(i,1),i-=1):o[i]=c):o.splice(i,1)}else if(w(o))for(i=0,a=(s=Object.keys(o)).length;i<a;i++){u=s[i];const e=`${n.path}.${u}`;0===n.depth&&null!=u&&(n.topmostKey=u),n.parent=f(o),n.parentType="object",c=t(r(u,o[u],Object.assign({},n,{path:O(e)})),r,Object.assign({},n,{path:O(e)})),Number.isNaN(c)?delete o[u]:o[u]=c}return o}(t,e,{})}var S="__lodash_hash_undefined__",A=9007199254740991,T="[object Function]",E="[object GeneratorFunction]",k=/^\[object .+?Constructor\]$/,N="object"==typeof e&&e&&e.Object===Object&&e,M="object"==typeof self&&self&&self.Object===Object&&self,P=N||M||Function("return this")();function I(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,L,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function x(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function C(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function L(t){return t!=t}function K(t){return function(e){return t(e)}}function D(t,e){return t.has(e)}var F,W=Array.prototype,V=Function.prototype,H=Object.prototype,J=P["__core-js_shared__"],R=(F=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||""))?"Symbol(src)_1."+F:"",B=V.toString,U=H.hasOwnProperty,Z=H.toString,q=RegExp("^"+B.call(U).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),z=W.splice,G=Math.max,Q=Math.min,X=st(P,"Map"),Y=st(Object,"create");function tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function rt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function nt(t){var e=-1,r=t?t.length:0;for(this.__data__=new rt;++e<r;)this.add(t[e])}function ot(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function it(t){return!(!ft(t)||(e=t,R&&R in e))&&(ut(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?q:k).test(function(t){if(null!=t){try{return B.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function at(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=A}(t.length)&&!ut(t)}(t)}(t)?t:[]}function ct(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function st(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return it(r)?r:void 0}function ut(t){var e=ft(t)?Z.call(t):"";return e==T||e==E}function ft(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}tt.prototype.clear=function(){this.__data__=Y?Y(null):{}},tt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},tt.prototype.get=function(t){var e=this.__data__;if(Y){var r=e[t];return r===S?void 0:r}return U.call(e,t)?e[t]:void 0},tt.prototype.has=function(t){var e=this.__data__;return Y?void 0!==e[t]:U.call(e,t)},tt.prototype.set=function(t,e){return this.__data__[t]=Y&&void 0===e?S:e,this},et.prototype.clear=function(){this.__data__=[]},et.prototype.delete=function(t){var e=this.__data__,r=ot(e,t);return!(r<0||(r==e.length-1?e.pop():z.call(e,r,1),0))},et.prototype.get=function(t){var e=this.__data__,r=ot(e,t);return r<0?void 0:e[r][1]},et.prototype.has=function(t){return ot(this.__data__,t)>-1},et.prototype.set=function(t,e){var r=this.__data__,n=ot(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},rt.prototype.clear=function(){this.__data__={hash:new tt,map:new(X||et),string:new tt}},rt.prototype.delete=function(t){return ct(this,t).delete(t)},rt.prototype.get=function(t){return ct(this,t).get(t)},rt.prototype.has=function(t){return ct(this,t).has(t)},rt.prototype.set=function(t,e){return ct(this,t).set(t,e),this},nt.prototype.add=nt.prototype.push=function(t){return this.__data__.set(t,S),this},nt.prototype.has=function(t){return this.__data__.has(t)};var lt=function(t,e){return e=G(void 0===e?t.length-1:e,0),function(){for(var r=arguments,n=-1,o=G(r.length-e,0),i=Array(o);++n<o;)i[n]=r[e+n];n=-1;for(var a=Array(e+1);++n<e;)a[n]=r[n];return a[e]=i,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,a)}}(function(t){var e=C(t,at);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?x:I,o=t[0].length,i=t.length,a=i,c=Array(i),s=1/0,u=[];a--;){var f=t[a];a&&e&&(f=C(f,K(e))),s=Q(f.length,s),c[a]=!r&&(e||o>=120&&f.length>=120)?new nt(a&&f):void 0}f=t[0];var l=-1,p=c[0];t:for(;++l<o&&u.length<s;){var h=f[l],y=e?e(h):h;if(h=r||0!==h?h:0,!(p?D(p,y):n(u,y,r))){for(a=i;--a;){var g=c[a];if(!(g?D(g,y):n(t[a],y,r)))continue t}p&&p.push(y),u.push(h)}}return u}(e):[]});function pt(t){return"string"==typeof t?t.length>0?[t]:[]:t}var ht=r(function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function r(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function n(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function i(t){var e=parseInt(t);return e.toString()===t?e:t}function a(t){t=t||{};var a=function(t){return Object.keys(a).reduce(function(e,r){return"create"===r?e:("function"==typeof a[r]&&(e[r]=a[r].bind(a,t)),e)},{})};function c(r,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||e(r,n)}function s(t,e){if(c(t,e))return t[e]}function u(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return u(t,e.split(".").map(i),r,n);var o=e[0],a=s(t,o);return 1===e.length?(void 0!==a&&n||(t[o]=r),a):(void 0===a&&("number"==typeof e[1]?t[o]=[]:t[o]={}),u(t[o],e.slice(1),r,n))}return a.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var a=0;a<n.length;a++){var c=i(n[a]);if(!("number"==typeof c&&o(r)&&c<r.length||(t.includeInheritedProps?c in Object(r):e(r,c))))return!1;r=r[c]}return!0},a.ensureExists=function(t,e,r){return u(t,e,r,!0)},a.set=function(t,e,r,n){return u(t,e,r,n)},a.insert=function(t,e,r,n){var i=a.get(t,e);n=~~n,o(i)||(i=[],a.set(t,e,i)),i.splice(n,0,r)},a.empty=function(t,e){var i,s;if(!r(e)&&null!=t&&(i=a.get(t,e))){if("string"==typeof i)return a.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}(i))return a.set(t,e,!1);if("number"==typeof i)return a.set(t,e,0);if(o(i))i.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===n(t)}(i))return a.set(t,e,null);for(s in i)c(i,s)&&delete i[s]}}},a.push=function(t,e){var r=a.get(t,e);o(r)||(r=[],a.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},a.coalesce=function(t,e,r){for(var n,o=0,i=e.length;o<i;o++)if(void 0!==(n=a.get(t,e[o])))return n;return r},a.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return a.get(t,e.split("."),r);var n=i(e[0]),o=s(t,n);return void 0===o?r:1===e.length?o:a.get(t[n],e.slice(1),r)},a.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(r(e))return t;if("string"==typeof e)return a.del(t,e.split("."));var n=i(e[0]);return c(t,n)?1!==e.length?a.del(t[n],e.slice(1)):(o(t)?t.splice(n,1):delete t[n],t):t},a}var c=a();return c.create=a,c.withInheritedProps=a({includeInheritedProps:!0}),c}()}),yt=function(t){var e=t%100;if(e>=10&&e<=20)return"th";var r=t%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"};function gt(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return t+yt(t)}gt.indicator=yt;var bt=gt,dt=/[|\\{}()[\]^$+*?.]/g,vt=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(dt,"\\$&")};const _t=new Map;function mt(t,e){const r=Object.assign({caseSensitive:!1},e),n=t+JSON.stringify(r);if(_t.has(n))return _t.get(n);const o="!"===t[0];o&&(t=t.slice(1)),t=vt(t).replace(/\\\*/g,".*");const i=new RegExp(`^${t}$`,r.caseSensitive?"":"i");return i.negated=o,_t.set(n,i),i}var wt=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>mt(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};function jt(t,e,r){return function t(e,r,o,i=!0){const a=Object.prototype.hasOwnProperty;function c(t){return null!=t}function s(t){return"Object"===n(t)}function f(t,e){return e=pt(e),Array.from(t).filter(t=>!e.some(e=>wt.isMatch(t,e,{caseSensitive:!0})))}const l=["any","anything","every","everything","all","whatever","whatevs"],p=Array.isArray;if(!c(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const h={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let y;if(y=c(o)&&s(o)?Object.assign({},h,o):Object.assign({},h),c(y.ignoreKeys)&&y.ignoreKeys?y.ignoreKeys=pt(y.ignoreKeys):y.ignoreKeys=[],c(y.ignorePaths)&&y.ignorePaths?y.ignorePaths=pt(y.ignorePaths):y.ignorePaths=[],c(y.acceptArraysIgnore)&&y.acceptArraysIgnore?y.acceptArraysIgnore=pt(y.acceptArraysIgnore):y.acceptArraysIgnore=[],y.msg="string"==typeof y.msg?y.msg.trim():y.msg,":"===y.msg[y.msg.length-1]&&(y.msg=y.msg.slice(0,y.msg.length-1).trim()),y.schema&&(Object.keys(y.schema).forEach(t=>{if(s(y.schema[t])){const e={};$(y.schema[t],(r,n,o)=>{const i=void 0!==n?n:r;return p(i)||s(i)||(e[`${t}.${o.path}`]=i),i}),delete y.schema[t],y.schema=Object.assign(y.schema,e)}}),Object.keys(y.schema).forEach(t=>{p(y.schema[t])||(y.schema[t]=[y.schema[t]]),y.schema[t]=y.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())})),c(r)||(r={}),i&&t(y,h,{enforceStrictKeyset:!1},!1),y.enforceStrictKeyset)if(c(y.schema)&&Object.keys(y.schema).length>0){if(0!==f(u(Object.keys(e),Object.keys(r).concat(Object.keys(y.schema))),y.ignoreKeys).length){const t=u(Object.keys(e),Object.keys(r).concat(Object.keys(y.schema)));throw new TypeError(`${y.msg}: ${y.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(c(r)&&Object.keys(r).length>0))throw new TypeError(`${y.msg}: Both ${y.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==f(u(Object.keys(e),Object.keys(r)),y.ignoreKeys).length){const t=u(Object.keys(e),Object.keys(r));throw new TypeError(`${y.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==f(u(Object.keys(r),Object.keys(e)),y.ignoreKeys).length){const t=u(Object.keys(r),Object.keys(e));throw new TypeError(`${y.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}const g=[];$(e,(t,o,i)=>{let c=o,u=t;if("array"===i.parentType&&(u=void 0,c=t),p(g)&&g.length&&g.some(t=>i.path.startsWith(t)))return c;if(u&&y.ignoreKeys.some(t=>wt.isMatch(u,t)))return c;if(y.ignorePaths.some(t=>wt.isMatch(i.path,t)))return c;const f=!(!s(c)&&!p(c)&&p(i.parent));let h=!1;s(y.schema)&&a.call(y.schema,ht.get(i.path))&&(h=!0);let b=!1;if(s(r)&&ht.has(r,ht.get(i.path))&&(b=!0),y.enforceStrictKeyset&&f&&!h&&!b)throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path} is neither covered by reference object (second input argument), nor ${y.optsVarName}.schema! To stop this error, turn off ${y.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${y.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(e,null,4)}\n\nref = ${JSON.stringify(r,null,4)}\n\ninnerObj = ${JSON.stringify(i,null,4)}\n\nopts = ${JSON.stringify(y,null,4)}\n\ncurrent = ${JSON.stringify(c,null,4)}\n\n`);if(h){const t=pt(y.schema[i.path]).map(String).map(t=>t.toLowerCase());if(ht.set(y.schema,i.path,t),lt(t,l).length)g.push(i.path);else if(!0!==c&&!1!==c&&!t.includes(n(c).toLowerCase())||(!0===c||!1===c)&&!t.includes(String(c))&&!t.includes("boolean")){if(!p(c)||!y.acceptArrays)throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path} was customised to ${"string"!==n(c)?'"':""}${JSON.stringify(c,null,0)}${"string"!==n(c)?'"':""} (type: ${n(c).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let e=0,r=c.length;e<r;e++)if(!t.includes(n(c[e]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path}.${e}, the ${bt(e+1)} element (equal to ${JSON.stringify(c[e],null,0)}) is of a type ${n(c[e]).toLowerCase()}, but only the following are allowed by the ${y.optsVarName}.schema: ${t.join(", ")}`)}}else if(b){const e=ht.get(r,i.path);if(y.acceptArrays&&p(c)&&!y.acceptArraysIgnore.includes(t)){if(!c.every(e=>n(e).toLowerCase()===n(r[t]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path} was customised to be array, but not all of its elements are ${n(r[t]).toLowerCase()}-type`)}else if(n(c)!==n(e))throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path} was customised to ${"string"===n(c).toLowerCase()?"":'"'}${JSON.stringify(c,null,0)}${"string"===n(c).toLowerCase()?"":'"'} which is not ${n(e).toLowerCase()} but ${n(c).toLowerCase()}`)}return c})}(t,e,r)}wt.isMatch=((t,e,r)=>{const n=mt(e,r),o=n.test(t);return n.negated?!o:o});var Ot=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1};return function(e,r,n){if("string"!=typeof e)throw new Error("string-overlap-one-on-another: [THROW_ID_01] The first input argument must be a string but it was given as ".concat(JSON.stringify(e,null,4),', which is type "').concat(t(e),'"'));if("string"!=typeof r)throw new Error("string-overlap-one-on-another: [THROW_ID_02] The second input argument must be a string but it was given as ".concat(JSON.stringify(r,null,4),', which is type "').concat(t(r),'"'));var o,i={offset:0,offsetFillerCharacter:" "};if(n){if(!w(n))throw new Error("string-overlap-one-on-another: [THROW_ID_03] The third input argument must be a plain object but it was given as ".concat(JSON.stringify(r,null,4),', which is type "').concat(t(n),'"'));if((o=Object.assign({},i,n)).offset){if(!Ot(Math.abs(o.offset)))throw new Error("string-overlap-one-on-another: [THROW_ID_04] The second input argument must be a string but it was given as ".concat(JSON.stringify(r,null,4),', which is type "').concat(t(r),'"'))}else o.offset=0;o.offsetFillerCharacter||""===o.offsetFillerCharacter||(o.offsetFillerCharacter=" "),jt(o,i,{msg:"string-overlap-one-on-another: [THROW_ID_05*]"})}else o=i;return 0===r.length?e:0===e.length?r:o.offset<0?r+(Math.abs(o.offset)>r.length?o.offsetFillerCharacter.repeat(Math.abs(o.offset)-r.length):"")+e.slice(r.length-Math.abs(o.offset)>0?r.length-Math.abs(o.offset):0):o.offset>0?e.slice(0,o.offset)+(o.offset>e.length?o.offsetFillerCharacter.repeat(Math.abs(o.offset)-e.length):"")+r+(e.length-o.offset-r.length>0?e.slice(e.length-o.offset-r.length+1):""):r+(e.length>r.length?e.slice(r.length):"")}});
