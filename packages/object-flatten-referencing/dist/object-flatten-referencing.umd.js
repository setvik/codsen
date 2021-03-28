/**
 * object-flatten-referencing
 * Flatten complex nested objects according to a reference objects
 * Version: 5.0.11
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/object-flatten-referencing/
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).objectFlattenReferencing={})}(this,(function(t){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var r=function(t){var e={exports:{}};return t(e,e.exports),e.exports}((function(t,r){var n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",a="[object Boolean]",c="[object Date]",s="[object Function]",u="[object GeneratorFunction]",f="[object Map]",l="[object Number]",p="[object Object]",h="[object Promise]",y="[object RegExp]",g="[object Set]",d="[object String]",b="[object Symbol]",_="[object WeakMap]",v="[object ArrayBuffer]",w="[object DataView]",j="[object Float32Array]",W="[object Float64Array]",m="[object Int8Array]",A="[object Int16Array]",O="[object Int32Array]",T="[object Uint8Array]",x="[object Uint8ClampedArray]",I="[object Uint16Array]",$="[object Uint32Array]",E=/\w*$/,S=/^\[object .+?Constructor\]$/,P=/^(?:0|[1-9]\d*)$/,R={};R[i]=R["[object Array]"]=R[v]=R[w]=R[a]=R[c]=R[j]=R[W]=R[m]=R[A]=R[O]=R[f]=R[l]=R[p]=R[y]=R[g]=R[d]=R[b]=R[T]=R[x]=R[I]=R[$]=!0,R["[object Error]"]=R[s]=R[_]=!1;var C="object"==typeof self&&self&&self.Object===Object&&self,D="object"==typeof e&&e&&e.Object===Object&&e||C||Function("return this")(),M=r&&!r.nodeType&&r,k=M&&t&&!t.nodeType&&t,B=k&&k.exports===M;function F(t,e){return t.set(e[0],e[1]),t}function H(t,e){return t.add(e),t}function L(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function K(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function G(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function U(t,e){return function(r){return t(e(r))}}function V(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var J,N=Array.prototype,z=Function.prototype,q=Object.prototype,Q=D["__core-js_shared__"],X=(J=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+J:"",Y=z.toString,Z=q.hasOwnProperty,tt=q.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=B?D.Buffer:void 0,nt=D.Symbol,ot=D.Uint8Array,it=U(Object.getPrototypeOf,Object),at=Object.create,ct=q.propertyIsEnumerable,st=N.splice,ut=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,lt=U(Object.keys,Object),pt=kt(D,"DataView"),ht=kt(D,"Map"),yt=kt(D,"Promise"),gt=kt(D,"Set"),dt=kt(D,"WeakMap"),bt=kt(Object,"create"),_t=Kt(pt),vt=Kt(ht),wt=Kt(yt),jt=Kt(gt),Wt=Kt(dt),mt=nt?nt.prototype:void 0,At=mt?mt.valueOf:void 0;function Ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function xt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function It(t){this.__data__=new Tt(t)}function $t(t,e){var r=Ut(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Vt(t)}(t)&&Z.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==i)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var a in t)!e&&!Z.call(t,a)||o&&("length"==a||Ht(a,n))||r.push(a);return r}function Et(t,e,r){var n=t[e];Z.call(t,e)&&Gt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function St(t,e){for(var r=t.length;r--;)if(Gt(t[r][0],e))return r;return-1}function Pt(t,e,r,n,o,h,_){var S;if(n&&(S=h?n(t,o,h,_):n(t)),void 0!==S)return S;if(!zt(t))return t;var P=Ut(t);if(P){if(S=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,S)}else{var C=Ft(t),D=C==s||C==u;if(Jt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(C==p||C==i||D&&!h){if(K(t))return h?t:{};if(S=function(t){return"function"!=typeof t.constructor||Lt(t)?{}:(e=it(t),zt(e)?at(e):{});var e}(D?{}:t),!e)return function(t,e){return Dt(t,Bt(t),e)}(t,function(t,e){return t&&Dt(e,qt(e),t)}(S,t))}else{if(!R[C])return h?t:{};S=function(t,e,r,n){var o=t.constructor;switch(e){case v:return Ct(t);case a:case c:return new o(+t);case w:return function(t,e){var r=e?Ct(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case j:case W:case m:case A:case O:case T:case x:case I:case $:return function(t,e){var r=e?Ct(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case f:return function(t,e,r){return L(e?r(G(t),!0):G(t),F,new t.constructor)}(t,n,r);case l:case d:return new o(t);case y:return function(t){var e=new t.constructor(t.source,E.exec(t));return e.lastIndex=t.lastIndex,e}(t);case g:return function(t,e,r){return L(e?r(V(t),!0):V(t),H,new t.constructor)}(t,n,r);case b:return i=t,At?Object(At.call(i)):{}}var i}(t,C,Pt,e)}}_||(_=new It);var M=_.get(t);if(M)return M;if(_.set(t,S),!P)var k=r?function(t){return function(t,e,r){var n=e(t);return Ut(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,qt,Bt)}(t):qt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(k||t,(function(o,i){k&&(o=t[i=o]),Et(S,i,Pt(o,e,r,n,i,t,_))})),S}function Rt(t){return!(!zt(t)||(e=t,X&&X in e))&&(Nt(t)||K(t)?et:S).test(Kt(t));var e}function Ct(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Dt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;Et(r,a,void 0===c?t[a]:c)}return r}function Mt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function kt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Rt(r)?r:void 0}Ot.prototype.clear=function(){this.__data__=bt?bt(null):{}},Ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Ot.prototype.get=function(t){var e=this.__data__;if(bt){var r=e[t];return r===n?void 0:r}return Z.call(e,t)?e[t]:void 0},Ot.prototype.has=function(t){var e=this.__data__;return bt?void 0!==e[t]:Z.call(e,t)},Ot.prototype.set=function(t,e){return this.__data__[t]=bt&&void 0===e?n:e,this},Tt.prototype.clear=function(){this.__data__=[]},Tt.prototype.delete=function(t){var e=this.__data__,r=St(e,t);return!(r<0)&&(r==e.length-1?e.pop():st.call(e,r,1),!0)},Tt.prototype.get=function(t){var e=this.__data__,r=St(e,t);return r<0?void 0:e[r][1]},Tt.prototype.has=function(t){return St(this.__data__,t)>-1},Tt.prototype.set=function(t,e){var r=this.__data__,n=St(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},xt.prototype.clear=function(){this.__data__={hash:new Ot,map:new(ht||Tt),string:new Ot}},xt.prototype.delete=function(t){return Mt(this,t).delete(t)},xt.prototype.get=function(t){return Mt(this,t).get(t)},xt.prototype.has=function(t){return Mt(this,t).has(t)},xt.prototype.set=function(t,e){return Mt(this,t).set(t,e),this},It.prototype.clear=function(){this.__data__=new Tt},It.prototype.delete=function(t){return this.__data__.delete(t)},It.prototype.get=function(t){return this.__data__.get(t)},It.prototype.has=function(t){return this.__data__.has(t)},It.prototype.set=function(t,e){var r=this.__data__;if(r instanceof Tt){var n=r.__data__;if(!ht||n.length<199)return n.push([t,e]),this;r=this.__data__=new xt(n)}return r.set(t,e),this};var Bt=ut?U(ut,Object):function(){return[]},Ft=function(t){return tt.call(t)};function Ht(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||P.test(t))&&t>-1&&t%1==0&&t<e}function Lt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||q)}function Kt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Gt(t,e){return t===e||t!=t&&e!=e}(pt&&Ft(new pt(new ArrayBuffer(1)))!=w||ht&&Ft(new ht)!=f||yt&&Ft(yt.resolve())!=h||gt&&Ft(new gt)!=g||dt&&Ft(new dt)!=_)&&(Ft=function(t){var e=tt.call(t),r=e==p?t.constructor:void 0,n=r?Kt(r):void 0;if(n)switch(n){case _t:return w;case vt:return f;case wt:return h;case jt:return g;case Wt:return _}return e});var Ut=Array.isArray;function Vt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Nt(t)}var Jt=ft||function(){return!1};function Nt(t){var e=zt(t)?tt.call(t):"";return e==s||e==u}function zt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function qt(t){return Vt(t)?$t(t):function(t){if(!Lt(t))return lt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Pt(t,!0,!0)}}));function n(t,e,r=0){if("string"!=typeof t)throw new TypeError("str-indexes-of-plus/strIndexesOfPlus(): first input argument must be a string! Currently it's: "+typeof t);if("string"!=typeof e)throw new TypeError("str-indexes-of-plus/strIndexesOfPlus(): second input argument must be a string! Currently it's: "+typeof e);if(isNaN(+r)||"string"==typeof r&&!/^\d*$/.test(r))throw new TypeError(`str-indexes-of-plus/strIndexesOfPlus(): third input argument must be a natural number! Currently it's: ${r}`);const n=Array.from(t),o=Array.from(e);if(0===n.length||0===o.length||null!=r&&+r>=n.length)return[];r||(r=0);const i=[];let a,c=!1;for(let t=r,e=n.length;t<e;t++)c&&(n[t]===o[t-+a]?t-+a+1===o.length&&i.push(+a):(a=null,c=!1)),c||n[t]===o[0]&&(1===o.length?i.push(t):(c=!0,a=t));return i}const o=new Map;function i(t,e){if(!Array.isArray(t))switch(typeof t){case"string":t=[t];break;case"undefined":t=[];break;default:throw new TypeError(`Expected '${e}' to be a string or an array, but got a type of '${typeof t}'`)}return t.filter((t=>{if("string"!=typeof t){if(void 0===t)return!1;throw new TypeError(`Expected '${e}' to be an array of strings, but found a type of '${typeof t}' in the array`)}return!0}))}function a(t,e){e={caseSensitive:!1,...e};const r=t+JSON.stringify(e);if(o.has(r))return o.get(r);const n="!"===t[0];n&&(t=t.slice(1)),t=(t=>{if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")})(t).replace(/\\\*/g,"[\\s\\S]*");const i=new RegExp(`^${t}$`,e.caseSensitive?"":"i");return i.negated=n,o.set(r,i),i}var c=(t,e,r)=>{if(t=i(t,"inputs"),0===(e=i(e,"patterns")).length)return[];const n="!"===e[0][0];e=e.map((t=>a(t,r)));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};c.isMatch=(t,e,r)=>(t=i(t,"inputs"),0!==(e=i(e,"patterns")).length&&t.some((t=>e.every((e=>{const n=a(e,r),o=n.test(t);return n.negated?!o:o})))));var s,u,f=Object.prototype,l=Function.prototype.toString,p=f.hasOwnProperty,h=l.call(Object),y=f.toString,g=(s=Object.getPrototypeOf,u=Object,function(t){return s(u(t))});var d=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=y.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=g(t);if(null===e)return!0;var r=p.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&l.call(r)==h};const b={wrapHeadsWith:"%%_",wrapTailsWith:"_%%",dontWrapKeys:[],dontWrapPaths:[],xhtml:!0,preventDoubleWrapping:!0,preventWrappingIfContains:[],objectKeyAndValueJoinChar:".",wrapGlobalFlipSwitch:!0,ignore:[],whatToDoWhenReferenceIsMissing:0,mergeArraysWithLineBreaks:!0,mergeWithoutTrailingBrIfLineContainsBr:!0,enforceStrictKeyset:!0};function _(t){return"string"==typeof t}function v(t,e){const n={...b,...e};if(0===arguments.length||0===Object.keys(t).length)return[];const o=r(t);let i=[];return d(o)&&Object.keys(o).forEach((t=>{d(o[t])&&(o[t]=v(o[t],n)),Array.isArray(o[t])&&(i=i.concat(o[t].map((e=>t+n.objectKeyAndValueJoinChar+e)))),_(o[t])&&i.push(t+n.objectKeyAndValueJoinChar+o[t])})),i}function w(t,e,n=!1,o=!1){const i={...b,...e};if(0===arguments.length||0===t.length)return"";const a=r(t);let c="";if(a.length>0)if(o){for(let t=0,e=a.length;t<e;t++)if(_(a[t])){let e;e="",i.mergeArraysWithLineBreaks&&t>0&&(!i.mergeWithoutTrailingBrIfLineContainsBr||"string"!=typeof a[t-1]||i.mergeWithoutTrailingBrIfLineContainsBr&&void 0!==a[t-1]&&!a[t-1].toLowerCase().includes("<br"))&&(e=`<br${i.xhtml?" /":""}>`),c+=e+(n?i.wrapHeadsWith:"")+a[t]+(n?i.wrapTailsWith:"")}else if(Array.isArray(a[t])&&a[t].length>0&&a[t].every(_)){let e="";i.mergeArraysWithLineBreaks&&c.length>0&&(e=`<br${i.xhtml?" /":""}>`),c=a[t].reduce(((t,r,o,a)=>{let c="";return o!==a.length-1&&(c=" "),t+(0===o?e:"")+(n?i.wrapHeadsWith:"")+r+(n?i.wrapTailsWith:"")+c}),c)}}else c=a.reduce(((t,e,r,o)=>{let a="";i.mergeArraysWithLineBreaks&&r>0&&(a=`<br${i.xhtml?" /":""}>`);let c="";return r!==o.length-1&&(c=" "),t+(0===r?a:"")+(n?i.wrapHeadsWith:"")+e+(n?i.wrapTailsWith:"")+c}),c);return c}function j(t){return _(t)?t.length>0?[t]:[]:t}function W(t){return null!=t}function m(t){return"string"==typeof t}t.arrayiffyString=j,t.defaults=b,t.flattenArr=w,t.flattenObject=v,t.flattenReferencing=function(t,e,o){if(0===arguments.length)throw new Error("object-flatten-referencing/ofr(): [THROW_ID_01] all inputs missing!");if(1===arguments.length)throw new Error("object-flatten-referencing/ofr(): [THROW_ID_02] reference object missing!");if(W(o)&&!d(o))throw new Error("object-flatten-referencing/ofr(): [THROW_ID_03] third input, options object must be a plain object. Currently it's: "+typeof o);const i={...b,...o};function a(t,e,o,i=!0,s=!0,u=""){let f=r(t);const l=r(e);return o.wrapGlobalFlipSwitch||(i=!1),d(f)?Object.keys(f).forEach((t=>{const e=u+(0===u.length?t:`.${t}`);if(0===o.ignore.length||!o.ignore.includes(t))if(o.wrapGlobalFlipSwitch&&(i=!0,o.dontWrapKeys.length>0&&(i=i&&!o.dontWrapKeys.some((e=>c.isMatch(t,e,{caseSensitive:!0})))),o.dontWrapPaths.length>0&&(i=i&&!o.dontWrapPaths.some((t=>t===e))),o.preventWrappingIfContains.length>0&&"string"==typeof f[t]&&(i=i&&!o.preventWrappingIfContains.some((e=>f[t].includes(e))))),W(l[t])||!W(l[t])&&2===o.whatToDoWhenReferenceIsMissing)if(Array.isArray(f[t]))if(2===o.whatToDoWhenReferenceIsMissing||m(l[t]))f[t]=w(f[t],o,i,s);else{if(f[t].every((t=>"string"==typeof t||Array.isArray(t)))){let e=!0;f[t].forEach((t=>{Array.isArray(t)&&!t.every(m)&&(e=!1)})),e&&(s=!1)}f[t]=a(f[t],l[t],o,i,s,e)}else d(f[t])?f[t]=2===o.whatToDoWhenReferenceIsMissing||m(l[t])?w(v(f[t],o),o,i,s):a(f[t],l[t],i?o:{...o,wrapGlobalFlipSwitch:!1},i,s,e):m(f[t])&&(f[t]=a(f[t],l[t],o,i,s,e));else if(typeof f[t]!=typeof l[t]&&1===o.whatToDoWhenReferenceIsMissing)throw new Error(`object-flatten-referencing/ofr(): [THROW_ID_06] reference object does not have the key ${t} and we need it. TIP: Turn off throwing via opts.whatToDoWhenReferenceIsMissing.`)})):Array.isArray(f)?Array.isArray(l)?f.forEach(((t,e)=>{f[e]=W(f[e])&&W(l[e])?a(f[e],l[e],o,i,s,`${u}[${e}]`):a(f[e],l[0],o,i,s,`${u}[${e}]`)})):m(l)&&(f=w(f,o,i,s)):m(f)&&f.length>0&&(o.wrapHeadsWith||o.wrapTailsWith)&&(o.preventDoubleWrapping&&(""!==o.wrapHeadsWith&&n(f,o.wrapHeadsWith.trim()).length||""!==o.wrapTailsWith&&n(f,o.wrapTailsWith.trim()).length)||(f=(i?o.wrapHeadsWith:"")+f+(i?o.wrapTailsWith:""))),f}return i.dontWrapKeys=j(i.dontWrapKeys),i.preventWrappingIfContains=j(i.preventWrappingIfContains),i.dontWrapPaths=j(i.dontWrapPaths),i.ignore=j(i.ignore),"number"!=typeof i.whatToDoWhenReferenceIsMissing&&(i.whatToDoWhenReferenceIsMissing=+i.whatToDoWhenReferenceIsMissing||0),a(t,e,i)},t.version="5.0.11",Object.defineProperty(t,"__esModule",{value:!0})}));
