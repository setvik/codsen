/**
 * array-of-arrays-sort-by-col
 * sort array of arrays by column, rippling the sorting outwards from that column
 * Version: 2.4.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://bitbucket.org/codsen/codsen/src/master/packages/array-of-arrays-sort-by-col
 */

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).arrayOfArraysSortByCol=n()}(this,function(){"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function n(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var e,o=(function(t,n){var e=200,o="__lodash_hash_undefined__",u=9007199254740991,i="[object Arguments]",f="[object Boolean]",c="[object Date]",a="[object Function]",s="[object GeneratorFunction]",l="[object Map]",p="[object Number]",h="[object Object]",_="[object RegExp]",y="[object Set]",d="[object String]",v="[object Symbol]",b="[object ArrayBuffer]",g="[object DataView]",w="[object Float32Array]",m="[object Float64Array]",A="[object Int8Array]",j="[object Int16Array]",O="[object Int32Array]",S="[object Uint8Array]",E="[object Uint8ClampedArray]",I="[object Uint16Array]",T="[object Uint32Array]",Z=/\w*$/,M=/^\[object .+?Constructor\]$/,$=/^(?:0|[1-9]\d*)$/,B={};B[i]=B["[object Array]"]=B[b]=B[g]=B[f]=B[c]=B[w]=B[m]=B[A]=B[j]=B[O]=B[l]=B[p]=B[h]=B[_]=B[y]=B[d]=B[v]=B[S]=B[E]=B[I]=B[T]=!0,B["[object Error]"]=B[a]=B["[object WeakMap]"]=!1;var W="object"==typeof r&&r&&r.Object===Object&&r,k="object"==typeof self&&self&&self.Object===Object&&self,R=W||k||Function("return this")(),U=n&&!n.nodeType&&n,F=U&&t&&!t.nodeType&&t,N=F&&F.exports===U;function z(t,n){return t.set(n[0],n[1]),t}function D(t,n){return t.add(n),t}function J(t,n,r,e){var o=-1,u=t?t.length:0;for(e&&u&&(r=t[++o]);++o<u;)r=n(r,t[o],o,t);return r}function L(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}function P(t){var n=-1,r=Array(t.size);return t.forEach(function(t,e){r[++n]=[e,t]}),r}function V(t,n){return function(r){return t(n(r))}}function q(t){var n=-1,r=Array(t.size);return t.forEach(function(t){r[++n]=t}),r}var C,G=Array.prototype,H=Function.prototype,K=Object.prototype,Q=R["__core-js_shared__"],X=(C=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+C:"",Y=H.toString,x=K.hasOwnProperty,tt=K.toString,nt=RegExp("^"+Y.call(x).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=N?R.Buffer:void 0,et=R.Symbol,ot=R.Uint8Array,ut=V(Object.getPrototypeOf,Object),it=Object.create,ft=K.propertyIsEnumerable,ct=G.splice,at=Object.getOwnPropertySymbols,st=rt?rt.isBuffer:void 0,lt=V(Object.keys,Object),pt=Ft(R,"DataView"),ht=Ft(R,"Map"),_t=Ft(R,"Promise"),yt=Ft(R,"Set"),dt=Ft(R,"WeakMap"),vt=Ft(Object,"create"),bt=Lt(pt),gt=Lt(ht),wt=Lt(_t),mt=Lt(yt),At=Lt(dt),jt=et?et.prototype:void 0,Ot=jt?jt.valueOf:void 0;function St(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function Et(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function It(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function Tt(t){this.__data__=new Et(t)}function Zt(t,n){var r=Vt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&qt(t)}(t)&&x.call(t,"callee")&&(!ft.call(t,"callee")||tt.call(t)==i)}(t)?function(t,n){for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);return e}(t.length,String):[],e=r.length,o=!!e;for(var u in t)!n&&!x.call(t,u)||o&&("length"==u||Dt(u,e))||r.push(u);return r}function Mt(t,n,r){var e=t[n];x.call(t,n)&&Pt(e,r)&&(void 0!==r||n in t)||(t[n]=r)}function $t(t,n){for(var r=t.length;r--;)if(Pt(t[r][0],n))return r;return-1}function Bt(t,n,r,e,o,u,M){var $;if(e&&($=u?e(t,o,u,M):e(t)),void 0!==$)return $;if(!Ht(t))return t;var W=Vt(t);if(W){if($=function(t){var n=t.length,r=t.constructor(n);n&&"string"==typeof t[0]&&x.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!n)return function(t,n){var r=-1,e=t.length;n||(n=Array(e));for(;++r<e;)n[r]=t[r];return n}(t,$)}else{var k=zt(t),R=k==a||k==s;if(Ct(t))return function(t,n){if(n)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,n);if(k==h||k==i||R&&!u){if(L(t))return u?t:{};if($=function(t){return"function"!=typeof t.constructor||Jt(t)?{}:(n=ut(t),Ht(n)?it(n):{});var n}(R?{}:t),!n)return function(t,n){return Rt(t,Nt(t),n)}(t,function(t,n){return t&&Rt(n,Kt(n),t)}($,t))}else{if(!B[k])return u?t:{};$=function(t,n,r,e){var o=t.constructor;switch(n){case b:return kt(t);case f:case c:return new o(+t);case g:return function(t,n){var r=n?kt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,e);case w:case m:case A:case j:case O:case S:case E:case I:case T:return function(t,n){var r=n?kt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,e);case l:return function(t,n,r){return J(n?r(P(t),!0):P(t),z,new t.constructor)}(t,e,r);case p:case d:return new o(t);case _:return(a=new(i=t).constructor(i.source,Z.exec(i))).lastIndex=i.lastIndex,a;case y:return function(t,n,r){return J(n?r(q(t),!0):q(t),D,new t.constructor)}(t,e,r);case v:return u=t,Ot?Object(Ot.call(u)):{}}var u;var i,a}(t,k,Bt,n)}}M||(M=new Tt);var U=M.get(t);if(U)return U;if(M.set(t,$),!W)var F=r?function(t){return function(t,n,r){var e=n(t);return Vt(t)?e:function(t,n){for(var r=-1,e=n.length,o=t.length;++r<e;)t[o+r]=n[r];return t}(e,r(t))}(t,Kt,Nt)}(t):Kt(t);return function(t,n){for(var r=-1,e=t?t.length:0;++r<e&&!1!==n(t[r],r,t););}(F||t,function(o,u){F&&(o=t[u=o]),Mt($,u,Bt(o,n,r,e,u,t,M))}),$}function Wt(t){return!(!Ht(t)||(n=t,X&&X in n))&&(Gt(t)||L(t)?nt:M).test(Lt(t));var n}function kt(t){var n=new t.constructor(t.byteLength);return new ot(n).set(new ot(t)),n}function Rt(t,n,r,e){r||(r={});for(var o=-1,u=n.length;++o<u;){var i=n[o],f=e?e(r[i],t[i],i,r,t):void 0;Mt(r,i,void 0===f?t[i]:f)}return r}function Ut(t,n){var r,e,o=t.__data__;return("string"==(e=typeof(r=n))||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==r:null===r)?o["string"==typeof n?"string":"hash"]:o.map}function Ft(t,n){var r=function(t,n){return null==t?void 0:t[n]}(t,n);return Wt(r)?r:void 0}St.prototype.clear=function(){this.__data__=vt?vt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var n=this.__data__;if(vt){var r=n[t];return r===o?void 0:r}return x.call(n,t)?n[t]:void 0},St.prototype.has=function(t){var n=this.__data__;return vt?void 0!==n[t]:x.call(n,t)},St.prototype.set=function(t,n){return this.__data__[t]=vt&&void 0===n?o:n,this},Et.prototype.clear=function(){this.__data__=[]},Et.prototype.delete=function(t){var n=this.__data__,r=$t(n,t);return!(r<0||(r==n.length-1?n.pop():ct.call(n,r,1),0))},Et.prototype.get=function(t){var n=this.__data__,r=$t(n,t);return r<0?void 0:n[r][1]},Et.prototype.has=function(t){return $t(this.__data__,t)>-1},Et.prototype.set=function(t,n){var r=this.__data__,e=$t(r,t);return e<0?r.push([t,n]):r[e][1]=n,this},It.prototype.clear=function(){this.__data__={hash:new St,map:new(ht||Et),string:new St}},It.prototype.delete=function(t){return Ut(this,t).delete(t)},It.prototype.get=function(t){return Ut(this,t).get(t)},It.prototype.has=function(t){return Ut(this,t).has(t)},It.prototype.set=function(t,n){return Ut(this,t).set(t,n),this},Tt.prototype.clear=function(){this.__data__=new Et},Tt.prototype.delete=function(t){return this.__data__.delete(t)},Tt.prototype.get=function(t){return this.__data__.get(t)},Tt.prototype.has=function(t){return this.__data__.has(t)},Tt.prototype.set=function(t,n){var r=this.__data__;if(r instanceof Et){var o=r.__data__;if(!ht||o.length<e-1)return o.push([t,n]),this;r=this.__data__=new It(o)}return r.set(t,n),this};var Nt=at?V(at,Object):function(){return[]},zt=function(t){return tt.call(t)};function Dt(t,n){return!!(n=null==n?u:n)&&("number"==typeof t||$.test(t))&&t>-1&&t%1==0&&t<n}function Jt(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||K)}function Lt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Pt(t,n){return t===n||t!=t&&n!=n}(pt&&zt(new pt(new ArrayBuffer(1)))!=g||ht&&zt(new ht)!=l||_t&&"[object Promise]"!=zt(_t.resolve())||yt&&zt(new yt)!=y||dt&&"[object WeakMap]"!=zt(new dt))&&(zt=function(t){var n=tt.call(t),r=n==h?t.constructor:void 0,e=r?Lt(r):void 0;if(e)switch(e){case bt:return g;case gt:return l;case wt:return"[object Promise]";case mt:return y;case At:return"[object WeakMap]"}return n});var Vt=Array.isArray;function qt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=u}(t.length)&&!Gt(t)}var Ct=st||function(){return!1};function Gt(t){var n=Ht(t)?tt.call(t):"";return n==a||n==s}function Ht(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function Kt(t){return qt(t)?Zt(t):function(t){if(!Jt(t))return lt(t);var n=[];for(var r in Object(t))x.call(t,r)&&"constructor"!=r&&n.push(r);return n}(t)}t.exports=function(t){return Bt(t,!0,!0)}}(e={exports:{}},e.exports),e.exports),u=function(t,n){if(n){if("object"!=typeof n)throw new TypeError(String(n)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in n){if("boolean"!=typeof n.includeZero)throw new TypeError(String(n.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(n.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},i=function(t,n){if("string"!=typeof t)return!1;if(n&&"includeZero"in n){if("boolean"!=typeof n.includeZero)throw new TypeError(String(n.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(n.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(t)}return/^[1-9]\d*(\.0+)?$/.test(t)},f=Array.isArray;function c(t){return null!=t}return function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!f(r))throw new Error("array-of-arrays-sort-by-col: [THROW_ID_01]: The first input argument was given not as array but as ".concat(t(r),", equal to:\n").concat(JSON.stringify(r,null,0)));if(!u(e,{includeZero:!0})){if(!i(e,{includeZero:!0}))throw new Error("array-of-arrays-sort-by-col: [THROW_ID_02]: The second input argument, index of the column to sort by (axis), is not integer (incl. zero)! It's currently given as:\n".concat(JSON.stringify(e,null,0)));e=parseInt(e,10)}var a=Math.max.apply(Math,n(r.map(function(t){return t.length})));if(0===a)return r;if(e>=a)throw new Error("array-of-arrays-sort-by-col: [THROW_ID_03]: The second input argument, index of the column to sort by (axis), is marking the column which does not exist on any of the input arrays. Axis was given as ".concat(e," while highest index goes as far as ").concat(a,"."));return o(r).sort(function(t,n){if(t[e]!==n[e]){if(!c(t[e])&&c(n[e])||c(t[e])&&c(n[e])&&t[e]>n[e])return 1;if(c(t[e])&&!c(n[e])||c(t[e])&&c(n[e])&&t[e]<n[e])return-1}for(var r=Math.max(t.length,n.length),o=Math.max(e,r-e-1),u=1;u<=o;u++){if(e-u>=0)if(c(t[e-u])){if(!c(n[e-u]))return-1;if(t[e-u]<n[e-u])return-1;if(t[e-u]>n[e-u])return 1}else if(c(n[e-u]))return 1;if(e+u<r)if(c(t[e+u])){if(!c(n[e+u]))return-1;if(t[e+u]<n[e+u])return-1;if(t[e+u]>n[e+u])return 1}else if(c(n[e+u]))return 1}return 0})}});
