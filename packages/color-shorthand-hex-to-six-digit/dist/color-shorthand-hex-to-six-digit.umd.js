!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):t.conv=r()}(this,function(){"use strict";function t(r){function e(t){return 4===t.length&&"#"===t.charAt(0)&&(t="#"+t.charAt(1)+t.charAt(1)+t.charAt(2)+t.charAt(2)+t.charAt(3)+t.charAt(3)),t}function o(t){return t.toLowerCase()}var c=g(r);if(_(r))c=(c=c.replace(n(),e)).replace(n(),o);else if(m(c))for(var u=0,i=c.length;u<i;u++)c[u]=t(c[u]);else{if(!y(r))return r;Object.keys(c).forEach(function(r){c[r]=t(c[r])})}return c}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=function(t){return(t=t&&"object"===(void 0===t?"undefined":r(t))?t:{}).strict?/^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/i:/#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})\b/gi},e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o="[object Object]",c=Function.prototype,u=Object.prototype,i=c.toString,f=u.hasOwnProperty,a=i.call(Object),s=u.toString,l=function(t,r){return function(n){return t(r(n))}}(Object.getPrototypeOf,Object),y=function(t){if(!function(t){return!!t&&"object"==(void 0===t?"undefined":e(t))}(t)||s.call(t)!=o||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t))return!1;var r=l(t);if(null===r)return!0;var n=f.call(r,"constructor")&&r.constructor;return"function"==typeof n&&n instanceof n&&i.call(n)==a},p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b="[object String]",d=Object.prototype.toString,h=Array.isArray,_=function(t){return"string"==typeof t||!h(t)&&function(t){return!!t&&"object"==(void 0===t?"undefined":p(t))}(t)&&d.call(t)==b},v="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g=function(t,r){return r={exports:{}},t(r,r.exports),r.exports}(function(t,r){function n(t,r){return t.set(r[0],r[1]),t}function e(t,r){return t.add(r),t}function o(t,r,n,e){var o=-1,c=t?t.length:0;for(e&&c&&(n=t[++o]);++o<c;)n=r(n,t[o],o,t);return n}function c(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function u(t){var r=-1,n=Array(t.size);return t.forEach(function(t,e){n[++r]=[e,t]}),n}function i(t,r){return function(n){return t(r(n))}}function f(t){var r=-1,n=Array(t.size);return t.forEach(function(t){n[++r]=t}),n}function a(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function s(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function l(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function y(t){this.__data__=new s(t)}function p(t,r){var n=Kt(t)||function(t){return function(t){return function(t){return!!t&&"object"==(void 0===t?"undefined":j(t))}(t)&&P(t)}(t)&&mt.call(t,"callee")&&(!Et.call(t,"callee")||wt.call(t)==U)}(t)?function(t,r){for(var n=-1,e=Array(t);++n<t;)e[n]=r(n);return e}(t.length,String):[],e=n.length,o=!!e;for(var c in t)!r&&!mt.call(t,c)||o&&("length"==c||function(t,r){return!!(r=null==r?B:r)&&("number"==typeof t||it.test(t))&&t>-1&&t%1==0&&t<r}(c,e))||n.push(c);return n}function b(t,r,n){var e=t[r];mt.call(t,r)&&x(e,n)&&(void 0!==n||r in t)||(t[r]=n)}function d(t,r){for(var n=t.length;n--;)if(x(t[n][0],r))return n;return-1}function h(t,r,i,a,s,l,p){var d;if(a&&(d=l?a(t,s,l,p):a(t)),void 0!==d)return d;if(!E(t))return t;var _=Kt(t);if(_){if(d=function(t){var r=t.length,n=t.constructor(r);r&&"string"==typeof t[0]&&mt.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(t),!r)return function(t,r){var n=-1,e=t.length;r||(r=Array(e));for(;++n<e;)r[n]=t[n];return r}(t,d)}else{var v=Jt(t),j=v==D||v==L;if(Qt(t))return function(t,r){if(r)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(t,r);if(v==z||v==U||j&&!l){if(c(t))return l?t:{};if(d=function(t){return"function"!=typeof t.constructor||O(t)?{}:function(t){return E(t)?$t(t):{}}(Pt(t))}(j?{}:t),!r)return function(t,r){return m(t,Ht(t),r)}(t,function(t,r){return t&&m(r,F(r),t)}(d,t))}else{if(!ft[v])return l?t:{};d=function(t,r,c,i){var a=t.constructor;switch(r){case J:return g(t);case M:case C:return new a(+t);case K:return function(t,r){var n=r?g(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,i);case Q:case X:case Y:case Z:case tt:case rt:case nt:case et:case ot:return function(t,r){var n=r?g(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,i);case R:return function(t,r,e){return o(r?e(u(t),!0):u(t),n,new t.constructor)}(t,i,c);case T:case N:return new a(t);case W:return function(t){var r=new t.constructor(t.source,ct.exec(t));return r.lastIndex=t.lastIndex,r}(t);case G:return function(t,r,n){return o(r?n(f(t),!0):f(t),e,new t.constructor)}(t,i,c);case q:return function(t){return qt?Object(qt.call(t)):{}}(t)}}(t,v,h,r)}}p||(p=new y);var w=p.get(t);if(w)return w;if(p.set(t,d),!_)var S=i?function(t){return function(t,r,n){var e=r(t);return Kt(t)?e:function(t,r){for(var n=-1,e=r.length,o=t.length;++n<e;)t[o+n]=r[n];return t}(e,n(t))}(t,F,Ht)}(t):F(t);return function(t,r){for(var n=-1,e=t?t.length:0;++n<e&&!1!==r(t[n],n,t););}(S||t,function(n,e){S&&(n=t[e=n]),b(d,e,h(n,r,i,a,e,t,p))}),d}function _(t){if(!E(t)||function(t){return!!jt&&jt in t}(t))return!1;return($(t)||c(t)?St:ut).test(A(t))}function g(t){var r=new t.constructor(t.byteLength);return new xt(r).set(new xt(t)),r}function m(t,r,n,e){n||(n={});for(var o=-1,c=r.length;++o<c;){var u=r[o],i=e?e(n[u],t[u],u,n,t):void 0;b(n,u,void 0===i?t[u]:i)}return n}function w(t,r){var n=t.__data__;return function(t){var r=void 0===t?"undefined":j(t);return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t}(r)?n["string"==typeof r?"string":"hash"]:n.map}function S(t,r){var n=function(t,r){return null==t?void 0:t[r]}(t,r);return _(n)?n:void 0}function O(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||_t)}function A(t){if(null!=t){try{return gt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function x(t,r){return t===r||t!=t&&r!=r}function P(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=B}(t.length)&&!$(t)}function $(t){var r=E(t)?wt.call(t):"";return r==D||r==L}function E(t){var r=void 0===t?"undefined":j(t);return!!t&&("object"==r||"function"==r)}function F(t){return P(t)?p(t):function(t){if(!O(t))return Bt(t);var r=[];for(var n in Object(t))mt.call(t,n)&&"constructor"!=n&&r.push(n);return r}(t)}var I=200,k="__lodash_hash_undefined__",B=9007199254740991,U="[object Arguments]",M="[object Boolean]",C="[object Date]",D="[object Function]",L="[object GeneratorFunction]",R="[object Map]",T="[object Number]",z="[object Object]",V="[object Promise]",W="[object RegExp]",G="[object Set]",N="[object String]",q="[object Symbol]",H="[object WeakMap]",J="[object ArrayBuffer]",K="[object DataView]",Q="[object Float32Array]",X="[object Float64Array]",Y="[object Int8Array]",Z="[object Int16Array]",tt="[object Int32Array]",rt="[object Uint8Array]",nt="[object Uint8ClampedArray]",et="[object Uint16Array]",ot="[object Uint32Array]",ct=/\w*$/,ut=/^\[object .+?Constructor\]$/,it=/^(?:0|[1-9]\d*)$/,ft={};ft[U]=ft["[object Array]"]=ft[J]=ft[K]=ft[M]=ft[C]=ft[Q]=ft[X]=ft[Y]=ft[Z]=ft[tt]=ft[R]=ft[T]=ft[z]=ft[W]=ft[G]=ft[N]=ft[q]=ft[rt]=ft[nt]=ft[et]=ft[ot]=!0,ft["[object Error]"]=ft[D]=ft[H]=!1;var at="object"==j(v)&&v&&v.Object===Object&&v,st="object"==("undefined"==typeof self?"undefined":j(self))&&self&&self.Object===Object&&self,lt=at||st||Function("return this")(),yt=r&&!r.nodeType&&r,pt=yt&&t&&!t.nodeType&&t,bt=pt&&pt.exports===yt,dt=Array.prototype,ht=Function.prototype,_t=Object.prototype,vt=lt["__core-js_shared__"],jt=function(){var t=/[^.]+$/.exec(vt&&vt.keys&&vt.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),gt=ht.toString,mt=_t.hasOwnProperty,wt=_t.toString,St=RegExp("^"+gt.call(mt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ot=bt?lt.Buffer:void 0,At=lt.Symbol,xt=lt.Uint8Array,Pt=i(Object.getPrototypeOf,Object),$t=Object.create,Et=_t.propertyIsEnumerable,Ft=dt.splice,It=Object.getOwnPropertySymbols,kt=Ot?Ot.isBuffer:void 0,Bt=i(Object.keys,Object),Ut=S(lt,"DataView"),Mt=S(lt,"Map"),Ct=S(lt,"Promise"),Dt=S(lt,"Set"),Lt=S(lt,"WeakMap"),Rt=S(Object,"create"),Tt=A(Ut),zt=A(Mt),Vt=A(Ct),Wt=A(Dt),Gt=A(Lt),Nt=At?At.prototype:void 0,qt=Nt?Nt.valueOf:void 0;a.prototype.clear=function(){this.__data__=Rt?Rt(null):{}},a.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},a.prototype.get=function(t){var r=this.__data__;if(Rt){var n=r[t];return n===k?void 0:n}return mt.call(r,t)?r[t]:void 0},a.prototype.has=function(t){var r=this.__data__;return Rt?void 0!==r[t]:mt.call(r,t)},a.prototype.set=function(t,r){return this.__data__[t]=Rt&&void 0===r?k:r,this},s.prototype.clear=function(){this.__data__=[]},s.prototype.delete=function(t){var r=this.__data__,n=d(r,t);return!(n<0||(n==r.length-1?r.pop():Ft.call(r,n,1),0))},s.prototype.get=function(t){var r=this.__data__,n=d(r,t);return n<0?void 0:r[n][1]},s.prototype.has=function(t){return d(this.__data__,t)>-1},s.prototype.set=function(t,r){var n=this.__data__,e=d(n,t);return e<0?n.push([t,r]):n[e][1]=r,this},l.prototype.clear=function(){this.__data__={hash:new a,map:new(Mt||s),string:new a}},l.prototype.delete=function(t){return w(this,t).delete(t)},l.prototype.get=function(t){return w(this,t).get(t)},l.prototype.has=function(t){return w(this,t).has(t)},l.prototype.set=function(t,r){return w(this,t).set(t,r),this},y.prototype.clear=function(){this.__data__=new s},y.prototype.delete=function(t){return this.__data__.delete(t)},y.prototype.get=function(t){return this.__data__.get(t)},y.prototype.has=function(t){return this.__data__.has(t)},y.prototype.set=function(t,r){var n=this.__data__;if(n instanceof s){var e=n.__data__;if(!Mt||e.length<I-1)return e.push([t,r]),this;n=this.__data__=new l(e)}return n.set(t,r),this};var Ht=It?i(It,Object):function(){return[]},Jt=function(t){return wt.call(t)};(Ut&&Jt(new Ut(new ArrayBuffer(1)))!=K||Mt&&Jt(new Mt)!=R||Ct&&Jt(Ct.resolve())!=V||Dt&&Jt(new Dt)!=G||Lt&&Jt(new Lt)!=H)&&(Jt=function(t){var r=wt.call(t),n=r==z?t.constructor:void 0,e=n?A(n):void 0;if(e)switch(e){case Tt:return K;case zt:return R;case Vt:return V;case Wt:return G;case Gt:return H}return r});var Kt=Array.isArray,Qt=kt||function(){return!1};t.exports=function(t){return h(t,!0,!0)}}),m=Array.isArray;return t});
