/**
 * array-of-arrays-sort-by-col
 * sort array of arrays by column, rippling the sorting outwards from that column
 * Version: 2.11.26
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/array-of-arrays-sort-by-col
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t=t||self).arrayOfArraysSortByCol=r()}(this,(function(){"use strict";function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(r)}function r(t){return function(t){if(Array.isArray(t)){for(var r=0,e=new Array(t.length);r<t.length;r++)e[r]=t[r];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var n=function(t,r){return t(r={exports:{}},r.exports),r.exports}((function(t,r){var n=200,o="__lodash_hash_undefined__",u=9007199254740991,i="[object Arguments]",a="[object Boolean]",c="[object Date]",f="[object Function]",s="[object GeneratorFunction]",l="[object Map]",y="[object Number]",p="[object Object]",h="[object RegExp]",_="[object Set]",b="[object String]",d="[object Symbol]",v="[object ArrayBuffer]",g="[object DataView]",j="[object Float32Array]",w="[object Float64Array]",m="[object Int8Array]",O="[object Int16Array]",A="[object Int32Array]",x="[object Uint8Array]",S="[object Uint8ClampedArray]",I="[object Uint16Array]",T="[object Uint32Array]",E=/\w*$/,M=/^\[object .+?Constructor\]$/,$=/^(?:0|[1-9]\d*)$/,k={};k[i]=k["[object Array]"]=k[v]=k[g]=k[a]=k[c]=k[j]=k[w]=k[m]=k[O]=k[A]=k[l]=k[y]=k[p]=k[h]=k[_]=k[b]=k[d]=k[x]=k[S]=k[I]=k[T]=!0,k["[object Error]"]=k[f]=k["[object WeakMap]"]=!1;var P="object"==typeof e&&e&&e.Object===Object&&e,B="object"==typeof self&&self&&self.Object===Object&&self,W=P||B||Function("return this")(),Z=r&&!r.nodeType&&r,D=Z&&t&&!t.nodeType&&t,F=D&&D.exports===Z;function R(t,r){return t.set(r[0],r[1]),t}function U(t,r){return t.add(r),t}function N(t,r,e,n){var o=-1,u=t?t.length:0;for(n&&u&&(e=t[++o]);++o<u;)e=r(e,t[o],o,t);return e}function z(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function C(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e}function H(t,r){return function(e){return t(r(e))}}function J(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e}var L,V=Array.prototype,q=Function.prototype,G=Object.prototype,K=W["__core-js_shared__"],Q=(L=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"",X=q.toString,Y=G.hasOwnProperty,tt=G.toString,rt=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=F?W.Buffer:void 0,nt=W.Symbol,ot=W.Uint8Array,ut=H(Object.getPrototypeOf,Object),it=Object.create,at=G.propertyIsEnumerable,ct=V.splice,ft=Object.getOwnPropertySymbols,st=et?et.isBuffer:void 0,lt=H(Object.keys,Object),yt=Dt(W,"DataView"),pt=Dt(W,"Map"),ht=Dt(W,"Promise"),_t=Dt(W,"Set"),bt=Dt(W,"WeakMap"),dt=Dt(Object,"create"),vt=zt(yt),gt=zt(pt),jt=zt(ht),wt=zt(_t),mt=zt(bt),Ot=nt?nt.prototype:void 0,At=Ot?Ot.valueOf:void 0;function xt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function St(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function It(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Tt(t){this.__data__=new St(t)}function Et(t,r){var e=Ht(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Jt(t)}(t)&&Y.call(t,"callee")&&(!at.call(t,"callee")||tt.call(t)==i)}(t)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],n=e.length,o=!!n;for(var u in t)!r&&!Y.call(t,u)||o&&("length"==u||Ut(u,n))||e.push(u);return e}function Mt(t,r,e){var n=t[r];Y.call(t,r)&&Ct(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function $t(t,r){for(var e=t.length;e--;)if(Ct(t[e][0],r))return e;return-1}function kt(t,r,e,n,o,u,M){var $;if(n&&($=u?n(t,o,u,M):n(t)),void 0!==$)return $;if(!qt(t))return t;var P=Ht(t);if(P){if($=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&Y.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!r)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(t,$)}else{var B=Rt(t),W=B==f||B==s;if(Lt(t))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,r);if(B==p||B==i||W&&!u){if(z(t))return u?t:{};if($=function(t){return"function"!=typeof t.constructor||Nt(t)?{}:(r=ut(t),qt(r)?it(r):{});var r}(W?{}:t),!r)return function(t,r){return Wt(t,Ft(t),r)}(t,function(t,r){return t&&Wt(r,Gt(r),t)}($,t))}else{if(!k[B])return u?t:{};$=function(t,r,e,n){var o=t.constructor;switch(r){case v:return Bt(t);case a:case c:return new o(+t);case g:return function(t,r){var e=r?Bt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,n);case j:case w:case m:case O:case A:case x:case S:case I:case T:return function(t,r){var e=r?Bt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,n);case l:return function(t,r,e){return N(r?e(C(t),!0):C(t),R,new t.constructor)}(t,n,e);case y:case b:return new o(t);case h:return function(t){var r=new t.constructor(t.source,E.exec(t));return r.lastIndex=t.lastIndex,r}(t);case _:return function(t,r,e){return N(r?e(J(t),!0):J(t),U,new t.constructor)}(t,n,e);case d:return u=t,At?Object(At.call(u)):{}}var u}(t,B,kt,r)}}M||(M=new Tt);var Z=M.get(t);if(Z)return Z;if(M.set(t,$),!P)var D=e?function(t){return function(t,r,e){var n=r(t);return Ht(t)?n:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(n,e(t))}(t,Gt,Ft)}(t):Gt(t);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(D||t,(function(o,u){D&&(o=t[u=o]),Mt($,u,kt(o,r,e,n,u,t,M))})),$}function Pt(t){return!(!qt(t)||(r=t,Q&&Q in r))&&(Vt(t)||z(t)?rt:M).test(zt(t));var r}function Bt(t){var r=new t.constructor(t.byteLength);return new ot(r).set(new ot(t)),r}function Wt(t,r,e,n){e||(e={});for(var o=-1,u=r.length;++o<u;){var i=r[o],a=n?n(e[i],t[i],i,e,t):void 0;Mt(e,i,void 0===a?t[i]:a)}return e}function Zt(t,r){var e,n,o=t.__data__;return("string"==(n=typeof(e=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?o["string"==typeof r?"string":"hash"]:o.map}function Dt(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return Pt(e)?e:void 0}xt.prototype.clear=function(){this.__data__=dt?dt(null):{}},xt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},xt.prototype.get=function(t){var r=this.__data__;if(dt){var e=r[t];return e===o?void 0:e}return Y.call(r,t)?r[t]:void 0},xt.prototype.has=function(t){var r=this.__data__;return dt?void 0!==r[t]:Y.call(r,t)},xt.prototype.set=function(t,r){return this.__data__[t]=dt&&void 0===r?o:r,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var r=this.__data__,e=$t(r,t);return!(e<0)&&(e==r.length-1?r.pop():ct.call(r,e,1),!0)},St.prototype.get=function(t){var r=this.__data__,e=$t(r,t);return e<0?void 0:r[e][1]},St.prototype.has=function(t){return $t(this.__data__,t)>-1},St.prototype.set=function(t,r){var e=this.__data__,n=$t(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},It.prototype.clear=function(){this.__data__={hash:new xt,map:new(pt||St),string:new xt}},It.prototype.delete=function(t){return Zt(this,t).delete(t)},It.prototype.get=function(t){return Zt(this,t).get(t)},It.prototype.has=function(t){return Zt(this,t).has(t)},It.prototype.set=function(t,r){return Zt(this,t).set(t,r),this},Tt.prototype.clear=function(){this.__data__=new St},Tt.prototype.delete=function(t){return this.__data__.delete(t)},Tt.prototype.get=function(t){return this.__data__.get(t)},Tt.prototype.has=function(t){return this.__data__.has(t)},Tt.prototype.set=function(t,r){var e=this.__data__;if(e instanceof St){var o=e.__data__;if(!pt||o.length<n-1)return o.push([t,r]),this;e=this.__data__=new It(o)}return e.set(t,r),this};var Ft=ft?H(ft,Object):function(){return[]},Rt=function(t){return tt.call(t)};function Ut(t,r){return!!(r=null==r?u:r)&&("number"==typeof t||$.test(t))&&t>-1&&t%1==0&&t<r}function Nt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||G)}function zt(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ct(t,r){return t===r||t!=t&&r!=r}(yt&&Rt(new yt(new ArrayBuffer(1)))!=g||pt&&Rt(new pt)!=l||ht&&"[object Promise]"!=Rt(ht.resolve())||_t&&Rt(new _t)!=_||bt&&"[object WeakMap]"!=Rt(new bt))&&(Rt=function(t){var r=tt.call(t),e=r==p?t.constructor:void 0,n=e?zt(e):void 0;if(n)switch(n){case vt:return g;case gt:return l;case jt:return"[object Promise]";case wt:return _;case mt:return"[object WeakMap]"}return r});var Ht=Array.isArray;function Jt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=u}(t.length)&&!Vt(t)}var Lt=st||function(){return!1};function Vt(t){var r=qt(t)?tt.call(t):"";return r==f||r==s}function qt(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function Gt(t){return Jt(t)?Et(t):function(t){if(!Nt(t))return lt(t);var r=[];for(var e in Object(t))Y.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}t.exports=function(t){return kt(t,!0,!0)}})),o=function(t,r){if("string"!=typeof t)return!1;if(r&&"includeZero"in r){if("boolean"!=typeof r.includeZero)throw new TypeError(String(r.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(r.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(t)}return/^[1-9]\d*(\.0+)?$/.test(t)},u=Array.isArray;
/*!
   * is-natural-number-string | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-natural-number-string
  */function i(t){return null!=t}return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!u(e))throw new Error("array-of-arrays-sort-by-col: [THROW_ID_01]: The first input argument was given not as array but as ".concat(t(e),", equal to:\n").concat(JSON.stringify(e,null,0)));if(!Number.isInteger(a,{includeZero:!0})){if(!o(a,{includeZero:!0}))throw new Error("array-of-arrays-sort-by-col: [THROW_ID_02]: The second input argument, index of the column to sort by (axis), is not integer (incl. zero)! It's currently given as:\n".concat(JSON.stringify(a,null,0)));a=parseInt(a,10)}var c=Math.max.apply(Math,r(e.map((function(t){return t.length}))));if(0===c)return e;if(a>=c)throw new Error("array-of-arrays-sort-by-col: [THROW_ID_03]: The second input argument, index of the column to sort by (axis), is marking the column which does not exist on any of the input arrays. Axis was given as ".concat(a," while highest index goes as far as ").concat(c,"."));return n(e).sort((function(t,r){if(t[a]!==r[a]){if(!i(t[a])&&i(r[a])||i(t[a])&&i(r[a])&&t[a]>r[a])return 1;if(i(t[a])&&!i(r[a])||i(t[a])&&i(r[a])&&t[a]<r[a])return-1}for(var e=Math.max(t.length,r.length),n=Math.max(a,e-a-1),o=1;o<=n;o++){if(a-o>=0)if(i(t[a-o])){if(!i(r[a-o]))return-1;if(t[a-o]<r[a-o])return-1;if(t[a-o]>r[a-o])return 1}else if(i(r[a-o]))return 1;if(a+o<e)if(i(t[a+o])){if(!i(r[a+o]))return-1;if(t[a+o]<r[a+o])return-1;if(t[a+o]>r[a+o])return 1}else if(i(r[a+o]))return 1}return 0}))}}));
