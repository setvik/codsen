/**
 * string-convert-indexes
 * Convert string character indexes from JS native index-based to Unicode character-count-based and backwards.
 * Version: 1.9.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://bitbucket.org/codsen/codsen/src/master/packages/string-convert-indexes
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).stringConvertIndexes={})}(this,function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,e){return t(e={exports:{}},e.exports),e.exports}var o=n(function(t,e){var n=200,o="__lodash_hash_undefined__",i=9007199254740991,a="[object Arguments]",c="[object Boolean]",u="[object Date]",s="[object Function]",f="[object GeneratorFunction]",l="[object Map]",h="[object Number]",p="[object Object]",y="[object RegExp]",g="[object Set]",d="[object String]",v="[object Symbol]",b="[object ArrayBuffer]",m="[object DataView]",_="[object Float32Array]",w="[object Float64Array]",j="[object Int8Array]",O="[object Int16Array]",$="[object Int32Array]",S="[object Uint8Array]",A="[object Uint8ClampedArray]",T="[object Uint16Array]",k="[object Uint32Array]",x=/\w*$/,E=/^\[object .+?Constructor\]$/,N=/^(?:0|[1-9]\d*)$/,W={};W[a]=W["[object Array]"]=W[b]=W[m]=W[c]=W[u]=W[_]=W[w]=W[j]=W[O]=W[$]=W[l]=W[h]=W[p]=W[y]=W[g]=W[d]=W[v]=W[S]=W[A]=W[T]=W[k]=!0,W["[object Error]"]=W[s]=W["[object WeakMap]"]=!1;var I="object"==typeof r&&r&&r.Object===Object&&r,M="object"==typeof self&&self&&self.Object===Object&&self,P=I||M||Function("return this")(),F=e&&!e.nodeType&&e,D=F&&t&&!t.nodeType&&t,J=D&&D.exports===F;function R(t,e){return t.set(e[0],e[1]),t}function C(t,e){return t.add(e),t}function H(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function L(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function K(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function Z(t,e){return function(r){return t(e(r))}}function V(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var q,B=Array.prototype,U=Function.prototype,z=Object.prototype,G=P["__core-js_shared__"],Q=(q=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"",X=U.toString,Y=z.hasOwnProperty,tt=z.toString,et=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=J?P.Buffer:void 0,nt=P.Symbol,ot=P.Uint8Array,it=Z(Object.getPrototypeOf,Object),at=Object.create,ct=z.propertyIsEnumerable,ut=B.splice,st=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,lt=Z(Object.keys,Object),ht=Dt(P,"DataView"),pt=Dt(P,"Map"),yt=Dt(P,"Promise"),gt=Dt(P,"Set"),dt=Dt(P,"WeakMap"),vt=Dt(Object,"create"),bt=Lt(ht),mt=Lt(pt),_t=Lt(yt),wt=Lt(gt),jt=Lt(dt),Ot=nt?nt.prototype:void 0,$t=Ot?Ot.valueOf:void 0;function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function kt(t){this.__data__=new At(t)}function xt(t,e){var r=Zt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Vt(t)}(t)&&Y.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==a)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var i in t)!e&&!Y.call(t,i)||o&&("length"==i||Ct(i,n))||r.push(i);return r}function Et(t,e,r){var n=t[e];Y.call(t,e)&&Kt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Nt(t,e){for(var r=t.length;r--;)if(Kt(t[r][0],e))return r;return-1}function Wt(t,e,r,n,o,i,E){var N;if(n&&(N=i?n(t,o,i,E):n(t)),void 0!==N)return N;if(!Ut(t))return t;var I=Zt(t);if(I){if(N=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Y.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,N)}else{var M=Rt(t),P=M==s||M==f;if(qt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(M==p||M==a||P&&!i){if(L(t))return i?t:{};if(N=function(t){return"function"!=typeof t.constructor||Ht(t)?{}:(e=it(t),Ut(e)?at(e):{});var e}(P?{}:t),!e)return function(t,e){return Pt(t,Jt(t),e)}(t,function(t,e){return t&&Pt(e,zt(e),t)}(N,t))}else{if(!W[M])return i?t:{};N=function(t,e,r,n){var o=t.constructor;switch(e){case b:return Mt(t);case c:case u:return new o(+t);case m:return function(t,e){var r=e?Mt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case _:case w:case j:case O:case $:case S:case A:case T:case k:return function(t,e){var r=e?Mt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return H(e?r(K(t),!0):K(t),R,new t.constructor)}(t,n,r);case h:case d:return new o(t);case y:return(s=new(a=t).constructor(a.source,x.exec(a))).lastIndex=a.lastIndex,s;case g:return function(t,e,r){return H(e?r(V(t),!0):V(t),C,new t.constructor)}(t,n,r);case v:return i=t,$t?Object($t.call(i)):{}}var i;var a,s}(t,M,Wt,e)}}E||(E=new kt);var F=E.get(t);if(F)return F;if(E.set(t,N),!I)var D=r?function(t){return function(t,e,r){var n=e(t);return Zt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,zt,Jt)}(t):zt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(D||t,function(o,i){D&&(o=t[i=o]),Et(N,i,Wt(o,e,r,n,i,t,E))}),N}function It(t){return!(!Ut(t)||(e=t,Q&&Q in e))&&(Bt(t)||L(t)?et:E).test(Lt(t));var e}function Mt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Pt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;Et(r,a,void 0===c?t[a]:c)}return r}function Ft(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Dt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return It(r)?r:void 0}St.prototype.clear=function(){this.__data__=vt?vt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var e=this.__data__;if(vt){var r=e[t];return r===o?void 0:r}return Y.call(e,t)?e[t]:void 0},St.prototype.has=function(t){var e=this.__data__;return vt?void 0!==e[t]:Y.call(e,t)},St.prototype.set=function(t,e){return this.__data__[t]=vt&&void 0===e?o:e,this},At.prototype.clear=function(){this.__data__=[]},At.prototype.delete=function(t){var e=this.__data__,r=Nt(e,t);return!(r<0||(r==e.length-1?e.pop():ut.call(e,r,1),0))},At.prototype.get=function(t){var e=this.__data__,r=Nt(e,t);return r<0?void 0:e[r][1]},At.prototype.has=function(t){return Nt(this.__data__,t)>-1},At.prototype.set=function(t,e){var r=this.__data__,n=Nt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Tt.prototype.clear=function(){this.__data__={hash:new St,map:new(pt||At),string:new St}},Tt.prototype.delete=function(t){return Ft(this,t).delete(t)},Tt.prototype.get=function(t){return Ft(this,t).get(t)},Tt.prototype.has=function(t){return Ft(this,t).has(t)},Tt.prototype.set=function(t,e){return Ft(this,t).set(t,e),this},kt.prototype.clear=function(){this.__data__=new At},kt.prototype.delete=function(t){return this.__data__.delete(t)},kt.prototype.get=function(t){return this.__data__.get(t)},kt.prototype.has=function(t){return this.__data__.has(t)},kt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof At){var o=r.__data__;if(!pt||o.length<n-1)return o.push([t,e]),this;r=this.__data__=new Tt(o)}return r.set(t,e),this};var Jt=st?Z(st,Object):function(){return[]},Rt=function(t){return tt.call(t)};function Ct(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||N.test(t))&&t>-1&&t%1==0&&t<e}function Ht(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||z)}function Lt(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Kt(t,e){return t===e||t!=t&&e!=e}(ht&&Rt(new ht(new ArrayBuffer(1)))!=m||pt&&Rt(new pt)!=l||yt&&"[object Promise]"!=Rt(yt.resolve())||gt&&Rt(new gt)!=g||dt&&"[object WeakMap]"!=Rt(new dt))&&(Rt=function(t){var e=tt.call(t),r=e==p?t.constructor:void 0,n=r?Lt(r):void 0;if(n)switch(n){case bt:return m;case mt:return l;case _t:return"[object Promise]";case wt:return g;case jt:return"[object WeakMap]"}return e});var Zt=Array.isArray;function Vt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!Bt(t)}var qt=ft||function(){return!1};function Bt(t){var e=Ut(t)?tt.call(t):"";return e==s||e==f}function Ut(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function zt(t){return Vt(t)?xt(t):function(t){if(!Ht(t))return lt(t);var e=[];for(var r in Object(t))Y.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Wt(t,!0,!0)}}),i=n(function(t,e){var n,o,i,a,c,u,s,f,l,h,p,y,g,d,v,b,m,_,w,j;t.exports=(n="function"==typeof Promise,o="object"==typeof self?self:r,i="undefined"!=typeof Symbol,a="undefined"!=typeof Map,c="undefined"!=typeof Set,u="undefined"!=typeof WeakMap,s="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,l=i&&void 0!==Symbol.iterator,h=i&&void 0!==Symbol.toStringTag,p=c&&"function"==typeof Set.prototype.entries,y=a&&"function"==typeof Map.prototype.entries,g=p&&Object.getPrototypeOf((new Set).entries()),d=y&&Object.getPrototypeOf((new Map).entries()),v=l&&"function"==typeof Array.prototype[Symbol.iterator],b=v&&Object.getPrototypeOf([][Symbol.iterator]()),m=l&&"function"==typeof String.prototype[Symbol.iterator],_=m&&Object.getPrototypeOf(""[Symbol.iterator]()),w=8,j=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===h||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var r=h&&t[Symbol.toStringTag];if("string"==typeof r)return r;var i=Object.getPrototypeOf(t);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":n&&i===Promise.prototype?"Promise":c&&i===Set.prototype?"Set":a&&i===Map.prototype?"Map":s&&i===WeakSet.prototype?"WeakSet":u&&i===WeakMap.prototype?"WeakMap":f&&i===DataView.prototype?"DataView":a&&i===d?"Map Iterator":c&&i===g?"Set Iterator":v&&i===b?"Array Iterator":m&&i===_?"String Iterator":null===i?"Object":Object.prototype.toString.call(t).slice(w,j)})});function a(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,u,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function c(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}function u(t){return t!=t}var s=Array.prototype.splice;function f(t,e,r,n){var o,i=n?c:a,u=-1,f=e.length,l=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(l=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(o=r,function(t){return o(t)})));++u<f;)for(var h=0,p=e[u],y=r?r(p):p;(h=i(l,y,h,n))>-1;)l!==t&&s.call(l,h,1),s.call(t,h,1);return t}var l=function(t,e){return t&&t.length&&e&&e.length?f(t,e):t},h="[object Object]";var p,y,g=Function.prototype,d=Object.prototype,v=g.toString,b=d.hasOwnProperty,m=v.call(Object),_=d.toString,w=(p=Object.getPrototypeOf,y=Object,function(t){return p(y(t))});var j=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||_.call(t)!=h||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=w(t);if(null===e)return!0;var r=b.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&v.call(r)==m};const O=Array.isArray;function $(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function S(t,e){return function t(e,r,n){const i=o(e);let a,c,u,s,f;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,O(i))for(a=0,c=i.length;a<c;a++){const e=`${n.path}.${a}`;void 0!==i[a]?(n.parent=o(i),u=t(r(i[a],void 0,Object.assign({},n,{path:$(e)})),r,Object.assign({},n,{path:$(e)})),Number.isNaN(u)&&a<i.length?(i.splice(a,1),a-=1):i[a]=u):i.splice(a,1)}else if(j(i))for(a=0,c=(s=Object.keys(i)).length;a<c;a++){f=s[a];const e=`${n.path}.${f}`;0===n.depth&&null!=f&&(n.topmostKey=f),n.parent=o(i),u=t(r(f,i[f],Object.assign({},n,{path:$(e)})),r,Object.assign({},n,{path:$(e)})),Number.isNaN(u)?delete i[f]:i[f]=u}return i}(t,e,{})}var A="__lodash_hash_undefined__",T=9007199254740991,k="[object Function]",x="[object GeneratorFunction]",E=/^\[object .+?Constructor\]$/,N="object"==typeof r&&r&&r.Object===Object&&r,W="object"==typeof self&&self&&self.Object===Object&&self,I=N||W||Function("return this")();function M(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,D,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function P(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function F(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function D(t){return t!=t}function J(t){return function(e){return t(e)}}function R(t,e){return t.has(e)}var C,H=Array.prototype,L=Function.prototype,K=Object.prototype,Z=I["__core-js_shared__"],V=(C=/[^.]+$/.exec(Z&&Z.keys&&Z.keys.IE_PROTO||""))?"Symbol(src)_1."+C:"",q=L.toString,B=K.hasOwnProperty,U=K.toString,z=RegExp("^"+q.call(B).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),G=H.splice,Q=Math.max,X=Math.min,Y=st(I,"Map"),tt=st(Object,"create");function et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function rt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function nt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ot(t){var e=-1,r=t?t.length:0;for(this.__data__=new nt;++e<r;)this.add(t[e])}function it(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function at(t){return!(!lt(t)||(e=t,V&&V in e))&&(ft(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?z:E).test(function(t){if(null!=t){try{return q.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function ct(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=T}(t.length)&&!ft(t)}(t)}(t)?t:[]}function ut(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function st(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return at(r)?r:void 0}function ft(t){var e=lt(t)?U.call(t):"";return e==k||e==x}function lt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}et.prototype.clear=function(){this.__data__=tt?tt(null):{}},et.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},et.prototype.get=function(t){var e=this.__data__;if(tt){var r=e[t];return r===A?void 0:r}return B.call(e,t)?e[t]:void 0},et.prototype.has=function(t){var e=this.__data__;return tt?void 0!==e[t]:B.call(e,t)},et.prototype.set=function(t,e){return this.__data__[t]=tt&&void 0===e?A:e,this},rt.prototype.clear=function(){this.__data__=[]},rt.prototype.delete=function(t){var e=this.__data__,r=it(e,t);return!(r<0||(r==e.length-1?e.pop():G.call(e,r,1),0))},rt.prototype.get=function(t){var e=this.__data__,r=it(e,t);return r<0?void 0:e[r][1]},rt.prototype.has=function(t){return it(this.__data__,t)>-1},rt.prototype.set=function(t,e){var r=this.__data__,n=it(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},nt.prototype.clear=function(){this.__data__={hash:new et,map:new(Y||rt),string:new et}},nt.prototype.delete=function(t){return ut(this,t).delete(t)},nt.prototype.get=function(t){return ut(this,t).get(t)},nt.prototype.has=function(t){return ut(this,t).has(t)},nt.prototype.set=function(t,e){return ut(this,t).set(t,e),this},ot.prototype.add=ot.prototype.push=function(t){return this.__data__.set(t,A),this},ot.prototype.has=function(t){return this.__data__.has(t)};var ht=function(t,e){return e=Q(void 0===e?t.length-1:e,0),function(){for(var r=arguments,n=-1,o=Q(r.length-e,0),i=Array(o);++n<o;)i[n]=r[e+n];n=-1;for(var a=Array(e+1);++n<e;)a[n]=r[n];return a[e]=i,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,a)}}(function(t){var e=F(t,ct);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?P:M,o=t[0].length,i=t.length,a=i,c=Array(i),u=1/0,s=[];a--;){var f=t[a];a&&e&&(f=F(f,J(e))),u=X(f.length,u),c[a]=!r&&(e||o>=120&&f.length>=120)?new ot(a&&f):void 0}f=t[0];var l=-1,h=c[0];t:for(;++l<o&&s.length<u;){var p=f[l],y=e?e(p):p;if(p=r||0!==p?p:0,!(h?R(h,y):n(s,y,r))){for(a=i;--a;){var g=c[a];if(!(g?R(g,y):n(t[a],y,r)))continue t}h&&h.push(y),s.push(p)}}return s}(e):[]});function pt(t){return"string"==typeof t?t.length>0?[t]:[]:t}var yt=n(function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function r(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function n(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function i(t){var e=parseInt(t);return e.toString()===t?e:t}function a(t){t=t||{};var a=function(t){return Object.keys(a).reduce(function(e,r){return"create"===r?e:("function"==typeof a[r]&&(e[r]=a[r].bind(a,t)),e)},{})};function c(r,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||e(r,n)}function u(t,e){if(c(t,e))return t[e]}function s(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return s(t,e.split(".").map(i),r,n);var o=e[0],a=u(t,o);return 1===e.length?(void 0!==a&&n||(t[o]=r),a):(void 0===a&&("number"==typeof e[1]?t[o]=[]:t[o]={}),s(t[o],e.slice(1),r,n))}return a.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var a=0;a<n.length;a++){var c=i(n[a]);if(!("number"==typeof c&&o(r)&&c<r.length||(t.includeInheritedProps?c in Object(r):e(r,c))))return!1;r=r[c]}return!0},a.ensureExists=function(t,e,r){return s(t,e,r,!0)},a.set=function(t,e,r,n){return s(t,e,r,n)},a.insert=function(t,e,r,n){var i=a.get(t,e);n=~~n,o(i)||(i=[],a.set(t,e,i)),i.splice(n,0,r)},a.empty=function(t,e){var i,u;if(!r(e)&&null!=t&&(i=a.get(t,e))){if("string"==typeof i)return a.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}(i))return a.set(t,e,!1);if("number"==typeof i)return a.set(t,e,0);if(o(i))i.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===n(t)}(i))return a.set(t,e,null);for(u in i)c(i,u)&&delete i[u]}}},a.push=function(t,e){var r=a.get(t,e);o(r)||(r=[],a.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},a.coalesce=function(t,e,r){for(var n,o=0,i=e.length;o<i;o++)if(void 0!==(n=a.get(t,e[o])))return n;return r},a.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return a.get(t,e.split("."),r);var n=i(e[0]),o=u(t,n);return void 0===o?r:1===e.length?o:a.get(t[n],e.slice(1),r)},a.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(r(e))return t;if("string"==typeof e)return a.del(t,e.split("."));var n=i(e[0]);return c(t,n)?1!==e.length?a.del(t[n],e.slice(1)):(o(t)?t.splice(n,1):delete t[n],t):t},a}var c=a();return c.create=a,c.withInheritedProps=a({includeInheritedProps:!0}),c}()}),gt=function(t){var e=t%100;if(e>=10&&e<=20)return"th";var r=t%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"};function dt(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return t+gt(t)}dt.indicator=gt;var vt=dt,bt=/[|\\{}()[\]^$+*?.]/g,mt=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(bt,"\\$&")};const _t=new Map;function wt(t,e){const r=Object.assign({caseSensitive:!1},e),n=t+JSON.stringify(r);if(_t.has(n))return _t.get(n);const o="!"===t[0];o&&(t=t.slice(1)),t=mt(t).replace(/\\\*/g,".*");const i=new RegExp(`^${t}$`,r.caseSensitive?"":"i");return i.negated=o,_t.set(n,i),i}var jt=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>wt(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};function Ot(t,e,r){return function t(e,r,n,o=!0){const a=Object.prototype.hasOwnProperty;function c(t){return null!=t}function u(t){return"Object"===i(t)}function s(t,e){return e=pt(e),Array.from(t).filter(t=>!e.some(e=>jt.isMatch(t,e,{caseSensitive:!0})))}const f=["any","anything","every","everything","all","whatever","whatevs"],h=Array.isArray;if(!c(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const p={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let y;if(y=c(n)&&u(n)?Object.assign({},p,n):Object.assign({},p),c(y.ignoreKeys)&&y.ignoreKeys?y.ignoreKeys=pt(y.ignoreKeys):y.ignoreKeys=[],c(y.ignorePaths)&&y.ignorePaths?y.ignorePaths=pt(y.ignorePaths):y.ignorePaths=[],c(y.acceptArraysIgnore)&&y.acceptArraysIgnore?y.acceptArraysIgnore=pt(y.acceptArraysIgnore):y.acceptArraysIgnore=[],y.msg="string"==typeof y.msg?y.msg.trim():y.msg,":"===y.msg[y.msg.length-1]&&(y.msg=y.msg.slice(0,y.msg.length-1).trim()),y.schema&&(Object.keys(y.schema).forEach(t=>{if(u(y.schema[t])){const e={};S(y.schema[t],(r,n,o)=>{const i=void 0!==n?n:r;return h(i)||u(i)||(e[`${t}.${o.path}`]=i),i}),delete y.schema[t],y.schema=Object.assign(y.schema,e)}}),Object.keys(y.schema).forEach(t=>{h(y.schema[t])||(y.schema[t]=[y.schema[t]]),y.schema[t]=y.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())})),c(r)||(r={}),o&&t(y,p,{enforceStrictKeyset:!1},!1),y.enforceStrictKeyset)if(c(y.schema)&&Object.keys(y.schema).length>0){if(0!==s(l(Object.keys(e),Object.keys(r).concat(Object.keys(y.schema))),y.ignoreKeys).length){const t=l(Object.keys(e),Object.keys(r).concat(Object.keys(y.schema)));throw new TypeError(`${y.msg}: ${y.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(c(r)&&Object.keys(r).length>0))throw new TypeError(`${y.msg}: Both ${y.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==s(l(Object.keys(e),Object.keys(r)),y.ignoreKeys).length){const t=l(Object.keys(e),Object.keys(r));throw new TypeError(`${y.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==s(l(Object.keys(r),Object.keys(e)),y.ignoreKeys).length){const t=l(Object.keys(r),Object.keys(e));throw new TypeError(`${y.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}const g=[];S(e,(t,n,o)=>{const c=void 0!==n?n:t,s=void 0!==n?t:void 0;if(h(g)&&g.length&&g.some(t=>o.path.startsWith(t)))return c;if(s&&y.ignoreKeys.some(t=>jt.isMatch(s,t)))return c;if(y.ignorePaths.some(t=>jt.isMatch(o.path,t)))return c;const l=!(!u(c)&&!h(c)&&h(o.parent));let p=!1;u(y.schema)&&a.call(y.schema,yt.get(o.path))&&(p=!0);let d=!1;if(u(r)&&yt.has(r,yt.get(o.path))&&(d=!0),y.enforceStrictKeyset&&l&&!p&&!d)throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path} is neither covered by reference object (second input argument), nor ${y.optsVarName}.schema! To stop this error, turn off ${y.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${y.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(e,null,4)}\n\nref = ${JSON.stringify(r,null,4)}\n\ninnerObj = ${JSON.stringify(o,null,4)}\n\nopts = ${JSON.stringify(y,null,4)}\n\ncurrent = ${JSON.stringify(c,null,4)}\n\n`);if(p){const t=pt(y.schema[o.path]).map(String).map(t=>t.toLowerCase());if(yt.set(y.schema,o.path,t),ht(t,f).length)g.push(o.path);else if(!0!==c&&!1!==c&&!t.includes(i(c).toLowerCase())||(!0===c||!1===c)&&!t.includes(String(c))&&!t.includes("boolean")){if(!h(c)||!y.acceptArrays)throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path} was customised to ${"string"!==i(c)?'"':""}${JSON.stringify(c,null,0)}${"string"!==i(c)?'"':""} (type: ${i(c).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let e=0,r=c.length;e<r;e++)if(!t.includes(i(c[e]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path}.${e}, the ${vt(e+1)} element (equal to ${JSON.stringify(c[e],null,0)}) is of a type ${i(c[e]).toLowerCase()}, but only the following are allowed by the ${y.optsVarName}.schema: ${t.join(", ")}`)}}else if(d){const e=yt.get(r,o.path);if(y.acceptArrays&&h(c)&&!y.acceptArraysIgnore.includes(t)){if(!c.every(e=>i(e).toLowerCase()===i(r[t]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path} was customised to be array, but not all of its elements are ${i(r[t]).toLowerCase()}-type`)}else if(i(c)!==i(e))throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path} was customised to ${"string"===i(c).toLowerCase()?"":'"'}${JSON.stringify(c,null,0)}${"string"===i(c).toLowerCase()?"":'"'} which is not ${i(e).toLowerCase()} but ${i(c).toLowerCase()}`)}return c})}(t,e,r)}jt.isMatch=((t,e,r)=>{const n=wt(e,r),o=n.test(t);return n.negated?!o:o});var $t=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},St=1/0,At="[object Symbol]",Tt=/^\s+|\s+$/g,kt="[\\ud800-\\udfff]",xt="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",Et="\\ud83c[\\udffb-\\udfff]",Nt="[^\\ud800-\\udfff]",Wt="(?:\\ud83c[\\udde6-\\uddff]){2}",It="[\\ud800-\\udbff][\\udc00-\\udfff]",Mt="(?:"+xt+"|"+Et+")"+"?",Pt="[\\ufe0e\\ufe0f]?"+Mt+("(?:\\u200d(?:"+[Nt,Wt,It].join("|")+")[\\ufe0e\\ufe0f]?"+Mt+")*"),Ft="(?:"+[Nt+xt+"?",xt,Wt,It,kt].join("|")+")",Dt=RegExp(Et+"(?="+Et+")|"+Ft+Pt,"g"),Jt=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),Rt="object"==typeof r&&r&&r.Object===Object&&r,Ct="object"==typeof self&&self&&self.Object===Object&&self,Ht=Rt||Ct||Function("return this")();function Lt(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,Kt,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function Kt(t){return t!=t}function Zt(t){return function(t){return Jt.test(t)}(t)?function(t){return t.match(Dt)||[]}(t):function(t){return t.split("")}(t)}var Vt=Object.prototype.toString,qt=Ht.Symbol,Bt=qt?qt.prototype:void 0,Ut=Bt?Bt.toString:void 0;function zt(t){if("string"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&Vt.call(t)==At}(t))return Ut?Ut.call(t):"";var e=t+"";return"0"==e&&1/t==-St?"-0":e}function Gt(t,e,r){var n=t.length;return r=void 0===r?n:r,!e&&r>=n?t:function(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(r=r>o?o:r)<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var i=Array(o);++n<o;)i[n]=t[n+e];return i}(t,e,r)}var Qt=function(t,e,r){var n;if((t=null==(n=t)?"":zt(n))&&(r||void 0===e))return t.replace(Tt,"");if(!t||!(e=zt(e)))return t;var o=Zt(t),i=Zt(e);return Gt(o,function(t,e){for(var r=-1,n=t.length;++r<n&&Lt(e,t[r],0)>-1;);return r}(o,i),function(t,e){for(var r=t.length;r--&&Lt(e,t[r],0)>-1;);return r}(o,i)+1).join("")};function Xt(t){function e(t){return"string"==typeof t}const r=Array.isArray;let n=!0;return!!(r(t)||j(t)||e(t))&&(e(t)?0===Qt(t).length:(t=S(t,(t,r)=>{const o=void 0!==r?r:t;return e(o)&&""!==Qt(o)&&(n=!1),o}),n))}const Yt=Array.isArray;function te(t){return null!=t}function ee(t){return"Object"===i(t)}function re(t){return"string"===i(t)}function ne(t){return ee(t)||re(t)||function(t){return"number"===i(t)}(t)||function(t){return"boolean"===i(t)}(t)||Yt(t)||function(t){return null===t}(t)}const oe=Array.isArray;function ie(t,e,r){if(void 0===t)throw new TypeError("ast-compare/compare(): [THROW_ID_01] first argument is missing!");if(void 0===e)throw new TypeError("ast-compare/compare(): [THROW_ID_02] second argument is missing!");if(te(t)&&!ne(t))throw new TypeError(`ast-compare/compare(): [THROW_ID_03] first input argument is of a wrong type, ${i(t)}, equal to: ${JSON.stringify(t,null,4)}`);if(te(e)&&!ne(e))throw new TypeError(`ast-compare/compare(): [THROW_ID_04] second input argument is of a wrong type, ${i(e)}, equal to: ${JSON.stringify(e,null,4)}`);if(te(r)&&!ee(r))throw new TypeError(`ast-compare/compare(): [THROW_ID_05] third argument, options object, must, well, be an object! Currently it's: ${i(r)} and equal to: ${JSON.stringify(r,null,4)}`);const n=o(e),a=o(t);let c,u,s,f=0;const h={hungryForWhitespace:!1,matchStrictly:!1,verboseWhenMismatches:!1,useWildcards:!1},p=Object.assign({},h,r);if(Ot(p,h,{msg:"ast-compare/compare(): [THROW_ID_06*]"}),p.hungryForWhitespace&&p.matchStrictly&&ee(t)&&Xt(t)&&ee(e)&&0===Object.keys(e).length)return!0;if((!p.hungryForWhitespace||p.hungryForWhitespace&&!Xt(t)&&Xt(e))&&ee(t)&&0!==Object.keys(t).length&&ee(e)&&0===Object.keys(e).length||i(t)!==i(e)&&(!p.hungryForWhitespace||p.hungryForWhitespace&&!Xt(t)))return!1;if(re(a)&&re(n))return!!(p.hungryForWhitespace&&Xt(a)&&Xt(n))||(p.verboseWhenMismatches?a===n||`Given string ${n} is not matched! We have ${a} on the other end.`:p.useWildcards?jt.isMatch(a,n,{caseSensitive:!0}):a===n);if(oe(a)&&oe(n)){if(p.hungryForWhitespace&&Xt(n)&&(!p.matchStrictly||p.matchStrictly&&a.length===n.length))return!0;if(!p.hungryForWhitespace&&n.length>a.length||p.matchStrictly&&n.length!==a.length)return!!p.verboseWhenMismatches&&`The length of a given array, ${JSON.stringify(n,null,4)} is ${n.length} but the length of an array on the other end, ${JSON.stringify(a,null,4)} is ${a.length}`;if(0===n.length)return 0===a.length||!!p.verboseWhenMismatches&&`The given array has no elements, but the array on the other end, ${JSON.stringify(a,null,4)} does have some`;for(let t=0,e=n.length;t<e;t++){s=!1;for(let e=f,r=a.length;e<r;e++)if(f+=1,!0===ie(a[e],n[t],p)){s=!0;break}if(!s)return!!p.verboseWhenMismatches&&`The given array ${JSON.stringify(n,null,4)} is not a subset of an array on the other end, ${JSON.stringify(a,null,4)}`}}else{if(!ee(a)||!ee(n))return!!(p.hungryForWhitespace&&Xt(a)&&Xt(n)&&(!p.matchStrictly||p.matchStrictly&&(y=n,ee(y)?0===Object.keys(y).length:(Yt(y)||re(y))&&0===y.length)))||a===n;if(c=Object.keys(n),u=Object.keys(a),p.matchStrictly&&c.length!==u.length){if(!p.verboseWhenMismatches)return!1;const t=l(o(c),o(u)),e=t.length>0?`First object has unique keys: ${JSON.stringify(t,null,4)}.`:"",r=l(o(u),o(c));return`When matching strictly, we found that both objects have different amount of keys. ${e} ${r.length>0?`Second object has unique keys:\n        ${JSON.stringify(r,null,4)}.`:""}`}for(let t=0,e=c.length;t<e;t++){if(!te(a[c[t]]))return!p.useWildcards||p.useWildcards&&!c[t].includes("*")?!!p.verboseWhenMismatches&&`The given object has key ${c[t]} which the other-one does not have.`:!!Object.keys(a).some(e=>jt.isMatch(e,c[t],{caseSensitive:!0}))||!!p.verboseWhenMismatches&&`The given object has key ${c[t]} which the other-one does not have.`;if(void 0!==a[c[t]]&&!ne(a[c[t]]))throw new TypeError(`ast-compare/compare(): [THROW_ID_07] The input ${JSON.stringify(a,null,4)} contains a value of a wrong type, ${i(a[c[t]])} at index ${t}, equal to: ${JSON.stringify(a[c[t]],null,4)}`);if(!ne(n[c[t]]))throw new TypeError(`ast-compare/compare(): [THROW_ID_08] The input ${JSON.stringify(n,null,4)} contains a value of a wrong type, ${i(n[c[t]])} at index ${t}, equal to: ${JSON.stringify(n[c[t]],null,4)}`);if(te(a[c[t]])&&i(a[c[t]])!==i(n[c[t]])){if(!(Xt(a[c[t]])&&Xt(n[c[t]])&&p.hungryForWhitespace))return!!p.verboseWhenMismatches&&`The given key ${c[t]} is of a different type on both objects. On the first-one, it's ${i(n[c[t]])}, on the second-one, it's ${i(a[c[t]])}`}else if(!0!==ie(a[c[t]],n[c[t]],p))return!!p.verboseWhenMismatches&&`The given piece ${JSON.stringify(n[c[t]],null,4)} and ${JSON.stringify(a[c[t]],null,4)} don't match.`}}var y;return!0}function ae(t){return null!=t}function ce(t){return void 0!==t}function ue(t,e){return i(t)===i(e)&&ie(t,e,{matchStrictly:!0,useWildcards:!0})}function se(t,e){if(!ae(e.key)&&!ce(e.val))throw new Error("ast-monkey/main.js/set(): Please provide opts.val");if(!ae(e.index))throw new Error("ast-monkey/main.js/set(): Please provide opts.index");if("string"==typeof e.index){if(!$t(parseFloat(e.index,10),{includeZero:!0}))throw new Error(`ast-monkey/main.js/set(): opts.index must be a natural number. It was given as: ${e.index}`);e.index=parseInt(e.index,10)}else if(!$t(e.index,{includeZero:!0}))throw new Error(`ast-monkey/main.js/get(): opts.index must be a natural number. It was given as: ${e.index}`);return ae(e.key)&&!ce(e.val)&&(e.val=e.key),Ot(e,null,{schema:{key:[null,"string"],val:"any",index:"number"}}),function(t,e){if(!ae(t))throw new Error("ast-monkey/main.js/monkey(): Please provide an input");let r=o(t);(e=Object.assign({key:null,val:void 0},e)).mode;const n={count:0,gatherPath:[],finding:null},i=[];let a=!1,c=!1;return ae(e.key)&&!ce(e.val)&&(a=!0),!ae(e.key)&&ce(e.val)&&(c=!0),e.mode,e.mode,"arrayFirstOnly"===e.mode&&Array.isArray(r)&&r.length>0&&(r=[r[0]]),r=S(r,(t,r,u)=>{let s;if(n.count+=1,e.mode,e.mode,e.mode,n.gatherPath.length=u.depth,n.gatherPath.push(n.count),e.mode,"get"===e.mode)n.count===e.index&&(ce(r)?(n.finding={},n.finding[t]=r):n.finding=t);else if("find"===e.mode||"del"===e.mode){if(!("any"===e.only||"array"===e.only&&void 0===r||"object"===e.only&&void 0!==r)||!(a&&ue(t,e.key)||c&&ue(r,e.val)||!a&&!c&&ue(t,e.key)&&ue(r,e.val)))return void 0!==r?r:t;if("find"!==e.mode)return NaN;(s={}).index=n.count,s.key=t,s.val=r,s.path=o(n.gatherPath),i.push(s)}return e.mode,"set"===e.mode&&n.count===e.index?e.val:"drop"===e.mode&&n.count===e.index?NaN:"arrayFirstOnly"===e.mode?ce(r)&&Array.isArray(r)?[r[0]]:ae(t)&&Array.isArray(t)?[t[0]]:void 0!==r?r:t:void 0!==r?r:t}),"get"===e.mode?n.finding:"find"===e.mode?i.length>0?i:null:r}(t,Object.assign({},e,{mode:"set"}))}var fe=function(t,e){if("string"!=typeof t)return!1;if(e&&"includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(t)}return/^[1-9]\d*(\.0+)?$/.test(t)},le=n(function(t,e){(e=t.exports=function(t){return t+e.suffix(+t)}).suffix=function(t){return t%=100,1===Math.floor(t/10)?"th":t%10==1?"st":t%10==2?"nd":t%10==3?"rd":"th"}});le.suffix;function he(t){return"string"==typeof t}function pe(t){throw new Error("string-convert-indexes: [THROW_ID_01*] Missing ".concat(le(t)," parameter!"))}function ye(t){return"string"==typeof t?parseInt(t,10):t}function ge(t,r,n,i){if(!he(r)||0===r.length)throw new TypeError("string-convert-indexes: [THROW_ID_02] the first input argument, input string, must be a non-zero-length string! Currently it's: ".concat(e(r),", equal to:\n").concat(r));if(null!=i&&!j(i))throw new TypeError("string-convert-indexes: [THROW_ID_03] the third input argument, Optional Options Object, must be a plain object! Currently it's: ".concat(e(i),", equal to:\n").concat(i));var a={throwIfAnyOfTheIndexesAreOutsideOfTheReferenceString:!0},c=Object.assign({},a,i);Ot(c,a,{msg:"string-convert-indexes: [THROW_ID_04*]"});var u={id:0},s=[];if($t(n,{includeZero:!0})||fe(n,{includeZero:!0})?s=[{id:1,val:n}]:n=S(n,function(t,e){return u.id+=1,u.val=void 0!==e?e:t,($t(u.val,{includeZero:!0})||fe(u.val,{includeZero:!0}))&&s.push(o(u)),u.val}),0===s.length)return n;s=s.sort(function(t,e){return ye(t.val)<ye(e.val)?-1:ye(t.val)>ye(e.val)?1:0});for(var f=-1,l=!1,h=0,p=r.length;h<=p;h++){if(void 0===r[h]?f+=1:r[h].charCodeAt(0)>=55296&&r[h].charCodeAt(0)<=57343?!0!==l?(f+=1,l=!0):l=!1:(f+=1,!0===l&&(l=!1)),"n"===t){for(var y=0,g=s.length;y<g;y++)if(ye(s[y].val)===h)s[y].res=he(s[y].val)?String(f):f;else if(ye(s[y].val)>h)break}else for(var d=0,v=s.length;d<v;d++)if(ye(s[d].val)===f&&void 0===s[d].res)s[d].res=he(s[d].val)?String(h):h;else if(ye(s[d].val)>f)break;if(c.throwIfAnyOfTheIndexesAreOutsideOfTheReferenceString&&h===p-1&&("n"===t&&ye(s[s.length-1].val)>p||"u"===t&&ye(s[s.length-1].val)>f+1))throw"n"===t?new Error("string-convert-indexes: [THROW_ID_05] the reference string has native JS string indexes going only upto ".concat(h,", but you are trying to convert an index larger than that, ").concat(ye(s[s.length-1].val))):new Error("string-convert-indexes: [THROW_ID_06] the reference string has Unicode character count going only upto ".concat(f,", but you are trying to convert an index larger than that, ").concat(ye(s[s.length-1].val)))}if($t(n,{includeZero:!0})||fe(n,{includeZero:!0}))return void 0!==s[0].res?s[0].res:s[0].val;for(var b=o(n),m=s.length;m--;)b=se(b,{index:s[m].id,val:void 0!==s[m].res?s[m].res:s[m].val});return b}t.nativeToUnicode=function(){return ge("n",arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe(1),arguments.length>1&&void 0!==arguments[1]?arguments[1]:pe(2),arguments.length>2?arguments[2]:void 0)},t.unicodeToNative=function(){return ge("u",arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe(1),arguments.length>1&&void 0!==arguments[1]?arguments[1]:pe(2),arguments.length>2?arguments[2]:void 0)},Object.defineProperty(t,"__esModule",{value:!0})});
