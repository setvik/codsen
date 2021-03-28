/**
 * ast-delete-object
 * Delete all plain objects in AST if they contain a certain key/value pair
 * Version: 2.0.11
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ast-delete-object/
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).astDeleteObject={})}(this,(function(t){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t){var e={exports:{}};return t(e,e.exports),e.exports}var n=r((function(t,r){var n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",a="[object Boolean]",c="[object Date]",u="[object Function]",s="[object GeneratorFunction]",f="[object Map]",l="[object Number]",p="[object Object]",y="[object Promise]",h="[object RegExp]",d="[object Set]",g="[object String]",b="[object Symbol]",v="[object WeakMap]",_="[object ArrayBuffer]",j="[object DataView]",w="[object Float32Array]",m="[object Float64Array]",O="[object Int8Array]",S="[object Int16Array]",W="[object Int32Array]",$="[object Uint8Array]",T="[object Uint8ClampedArray]",A="[object Uint16Array]",M="[object Uint32Array]",k=/\w*$/,x=/^\[object .+?Constructor\]$/,E=/^(?:0|[1-9]\d*)$/,F={};F[i]=F["[object Array]"]=F[_]=F[j]=F[a]=F[c]=F[w]=F[m]=F[O]=F[S]=F[W]=F[f]=F[l]=F[p]=F[h]=F[d]=F[g]=F[b]=F[$]=F[T]=F[A]=F[M]=!0,F["[object Error]"]=F[u]=F[v]=!1;var N="object"==typeof self&&self&&self.Object===Object&&self,P="object"==typeof e&&e&&e.Object===Object&&e||N||Function("return this")(),D=r&&!r.nodeType&&r,I=D&&t&&!t.nodeType&&t,H=I&&I.exports===D;function J(t,e){return t.set(e[0],e[1]),t}function L(t,e){return t.add(e),t}function R(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function K(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function z(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function B(t,e){return function(r){return t(e(r))}}function U(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var C,V=Array.prototype,q=Function.prototype,G=Object.prototype,Q=P["__core-js_shared__"],X=(C=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+C:"",Y=q.toString,Z=G.hasOwnProperty,tt=G.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=H?P.Buffer:void 0,nt=P.Symbol,ot=P.Uint8Array,it=B(Object.getPrototypeOf,Object),at=Object.create,ct=G.propertyIsEnumerable,ut=V.splice,st=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,lt=B(Object.keys,Object),pt=It(P,"DataView"),yt=It(P,"Map"),ht=It(P,"Promise"),dt=It(P,"Set"),gt=It(P,"WeakMap"),bt=It(Object,"create"),vt=Kt(pt),_t=Kt(yt),jt=Kt(ht),wt=Kt(dt),mt=Kt(gt),Ot=nt?nt.prototype:void 0,St=Ot?Ot.valueOf:void 0;function Wt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function $t(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function At(t){this.__data__=new $t(t)}function Mt(t,e){var r=Bt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ut(t)}(t)&&Z.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==i)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var a in t)!e&&!Z.call(t,a)||o&&("length"==a||Lt(a,n))||r.push(a);return r}function kt(t,e,r){var n=t[e];Z.call(t,e)&&zt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function xt(t,e){for(var r=t.length;r--;)if(zt(t[r][0],e))return r;return-1}function Et(t,e,r,n,o,y,v){var x;if(n&&(x=y?n(t,o,y,v):n(t)),void 0!==x)return x;if(!qt(t))return t;var E=Bt(t);if(E){if(x=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,x)}else{var N=Jt(t),P=N==u||N==s;if(Ct(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(N==p||N==i||P&&!y){if(K(t))return y?t:{};if(x=function(t){return"function"!=typeof t.constructor||Rt(t)?{}:(e=it(t),qt(e)?at(e):{});var e}(P?{}:t),!e)return function(t,e){return Pt(t,Ht(t),e)}(t,function(t,e){return t&&Pt(e,Gt(e),t)}(x,t))}else{if(!F[N])return y?t:{};x=function(t,e,r,n){var o=t.constructor;switch(e){case _:return Nt(t);case a:case c:return new o(+t);case j:return function(t,e){var r=e?Nt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case w:case m:case O:case S:case W:case $:case T:case A:case M:return function(t,e){var r=e?Nt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case f:return function(t,e,r){return R(e?r(z(t),!0):z(t),J,new t.constructor)}(t,n,r);case l:case g:return new o(t);case h:return function(t){var e=new t.constructor(t.source,k.exec(t));return e.lastIndex=t.lastIndex,e}(t);case d:return function(t,e,r){return R(e?r(U(t),!0):U(t),L,new t.constructor)}(t,n,r);case b:return i=t,St?Object(St.call(i)):{}}var i}(t,N,Et,e)}}v||(v=new At);var D=v.get(t);if(D)return D;if(v.set(t,x),!E)var I=r?function(t){return function(t,e,r){var n=e(t);return Bt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Gt,Ht)}(t):Gt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(I||t,(function(o,i){I&&(o=t[i=o]),kt(x,i,Et(o,e,r,n,i,t,v))})),x}function Ft(t){return!(!qt(t)||(e=t,X&&X in e))&&(Vt(t)||K(t)?et:x).test(Kt(t));var e}function Nt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Pt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;kt(r,a,void 0===c?t[a]:c)}return r}function Dt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function It(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Ft(r)?r:void 0}Wt.prototype.clear=function(){this.__data__=bt?bt(null):{}},Wt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Wt.prototype.get=function(t){var e=this.__data__;if(bt){var r=e[t];return r===n?void 0:r}return Z.call(e,t)?e[t]:void 0},Wt.prototype.has=function(t){var e=this.__data__;return bt?void 0!==e[t]:Z.call(e,t)},Wt.prototype.set=function(t,e){return this.__data__[t]=bt&&void 0===e?n:e,this},$t.prototype.clear=function(){this.__data__=[]},$t.prototype.delete=function(t){var e=this.__data__,r=xt(e,t);return!(r<0)&&(r==e.length-1?e.pop():ut.call(e,r,1),!0)},$t.prototype.get=function(t){var e=this.__data__,r=xt(e,t);return r<0?void 0:e[r][1]},$t.prototype.has=function(t){return xt(this.__data__,t)>-1},$t.prototype.set=function(t,e){var r=this.__data__,n=xt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Tt.prototype.clear=function(){this.__data__={hash:new Wt,map:new(yt||$t),string:new Wt}},Tt.prototype.delete=function(t){return Dt(this,t).delete(t)},Tt.prototype.get=function(t){return Dt(this,t).get(t)},Tt.prototype.has=function(t){return Dt(this,t).has(t)},Tt.prototype.set=function(t,e){return Dt(this,t).set(t,e),this},At.prototype.clear=function(){this.__data__=new $t},At.prototype.delete=function(t){return this.__data__.delete(t)},At.prototype.get=function(t){return this.__data__.get(t)},At.prototype.has=function(t){return this.__data__.has(t)},At.prototype.set=function(t,e){var r=this.__data__;if(r instanceof $t){var n=r.__data__;if(!yt||n.length<199)return n.push([t,e]),this;r=this.__data__=new Tt(n)}return r.set(t,e),this};var Ht=st?B(st,Object):function(){return[]},Jt=function(t){return tt.call(t)};function Lt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||E.test(t))&&t>-1&&t%1==0&&t<e}function Rt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||G)}function Kt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function zt(t,e){return t===e||t!=t&&e!=e}(pt&&Jt(new pt(new ArrayBuffer(1)))!=j||yt&&Jt(new yt)!=f||ht&&Jt(ht.resolve())!=y||dt&&Jt(new dt)!=d||gt&&Jt(new gt)!=v)&&(Jt=function(t){var e=tt.call(t),r=e==p?t.constructor:void 0,n=r?Kt(r):void 0;if(n)switch(n){case vt:return j;case _t:return f;case jt:return y;case wt:return d;case mt:return v}return e});var Bt=Array.isArray;function Ut(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Vt(t)}var Ct=ft||function(){return!1};function Vt(t){var e=qt(t)?tt.call(t):"";return e==u||e==s}function qt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Gt(t){return Ut(t)?Mt(t):function(t){if(!Rt(t))return lt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Et(t,!0,!0)}})),o=r((function(t,r){t.exports=function(){var t="function"==typeof Promise,r="object"==typeof self?self:e,n="undefined"!=typeof Symbol,o="undefined"!=typeof Map,i="undefined"!=typeof Set,a="undefined"!=typeof WeakMap,c="undefined"!=typeof WeakSet,u="undefined"!=typeof DataView,s=n&&void 0!==Symbol.iterator,f=n&&void 0!==Symbol.toStringTag,l=i&&"function"==typeof Set.prototype.entries,p=o&&"function"==typeof Map.prototype.entries,y=l&&Object.getPrototypeOf((new Set).entries()),h=p&&Object.getPrototypeOf((new Map).entries()),d=s&&"function"==typeof Array.prototype[Symbol.iterator],g=d&&Object.getPrototypeOf([][Symbol.iterator]()),b=s&&"function"==typeof String.prototype[Symbol.iterator],v=b&&Object.getPrototypeOf(""[Symbol.iterator]()),_=8,j=-1;function w(e){var n=typeof e;if("object"!==n)return n;if(null===e)return"null";if(e===r)return"global";if(Array.isArray(e)&&(!1===f||!(Symbol.toStringTag in e)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&e===window.location)return"Location";if("object"==typeof window.document&&e===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&e===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&e===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&e instanceof window.HTMLElement){if("BLOCKQUOTE"===e.tagName)return"HTMLQuoteElement";if("TD"===e.tagName)return"HTMLTableDataCellElement";if("TH"===e.tagName)return"HTMLTableHeaderCellElement"}}var s=f&&e[Symbol.toStringTag];if("string"==typeof s)return s;var l=Object.getPrototypeOf(e);return l===RegExp.prototype?"RegExp":l===Date.prototype?"Date":t&&l===Promise.prototype?"Promise":i&&l===Set.prototype?"Set":o&&l===Map.prototype?"Map":c&&l===WeakSet.prototype?"WeakSet":a&&l===WeakMap.prototype?"WeakMap":u&&l===DataView.prototype?"DataView":o&&l===h?"Map Iterator":i&&l===y?"Set Iterator":d&&l===g?"Array Iterator":b&&l===v?"String Iterator":null===l?"Object":Object.prototype.toString.call(e).slice(_,j)}return w}()}));var i,a,c=Object.prototype,u=Function.prototype.toString,s=c.hasOwnProperty,f=u.call(Object),l=c.toString,p=(i=Object.getPrototypeOf,a=Object,function(t){return i(a(t))});var y=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=l.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=p(t);if(null===e)return!0;var r=s.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&u.call(r)==f};function h(t){if(t.includes(".")){const e=t.lastIndexOf(".");if(!t.slice(0,e).includes("."))return t.slice(0,e);for(let r=e-1;r--;)if("."===t[r])return t.slice(r+1,e)}return null}function d(t,e){return function t(e,r,o,i){const a=n(e);let c;const u={depth:-1,path:"",...o};if(u.depth+=1,Array.isArray(a))for(let e=0,o=a.length;e<o&&!i.now;e++){const o=u.path?`${u.path}.${e}`:`${e}`;void 0!==a[e]?(u.parent=n(a),u.parentType="array",u.parentKey=h(o),c=t(r(a[e],void 0,{...u,path:o},i),r,{...u,path:o},i),Number.isNaN(c)&&e<a.length?(a.splice(e,1),e-=1):a[e]=c):a.splice(e,1)}else if(y(a))for(const e in a){if(i.now&&null!=e)break;const o=u.path?`${u.path}.${e}`:e;0===u.depth&&null!=e&&(u.topmostKey=e),u.parent=n(a),u.parentType="object",u.parentKey=h(o),c=t(r(e,a[e],{...u,path:o},i),r,{...u,path:o},i),Number.isNaN(c)?delete a[e]:a[e]=c}return a}(t,e,{},{now:!1})}function g(t){if("string"==typeof t)return!t.trim();if(!["object","string"].includes(typeof t)||!t)return!1;let e=!0;return t=d(t,((t,r,n,o)=>{const i=void 0!==r?r:t;return"string"==typeof i&&i.trim()&&(e=!1,o.now=!0),i})),e}const b=new Map;function v(t,e){if(!Array.isArray(t))switch(typeof t){case"string":t=[t];break;case"undefined":t=[];break;default:throw new TypeError(`Expected '${e}' to be a string or an array, but got a type of '${typeof t}'`)}return t.filter((t=>{if("string"!=typeof t){if(void 0===t)return!1;throw new TypeError(`Expected '${e}' to be an array of strings, but found a type of '${typeof t}' in the array`)}return!0}))}function _(t,e){e={caseSensitive:!1,...e};const r=t+JSON.stringify(e);if(b.has(r))return b.get(r);const n="!"===t[0];n&&(t=t.slice(1)),t=(t=>{if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")})(t).replace(/\\\*/g,"[\\s\\S]*");const o=new RegExp(`^${t}$`,e.caseSensitive?"":"i");return o.negated=n,b.set(r,o),o}var j=(t,e,r)=>{if(t=v(t,"inputs"),0===(e=v(e,"patterns")).length)return[];const n="!"===e[0][0];e=e.map((t=>_(t,r)));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};function w(t,e,r){let n,i,a,c=0;const u={hungryForWhitespace:!1,matchStrictly:!1,verboseWhenMismatches:!1,useWildcards:!1,...r};if(u.hungryForWhitespace&&u.matchStrictly&&y(t)&&g(t)&&y(e)&&!Object.keys(e).length)return!0;if((!u.hungryForWhitespace||u.hungryForWhitespace&&!g(t)&&g(e))&&y(t)&&0!==Object.keys(t).length&&y(e)&&0===Object.keys(e).length||o(t)!==o(e)&&(!u.hungryForWhitespace||u.hungryForWhitespace&&!g(t)))return!1;if("string"==typeof t&&"string"==typeof e)return!!(u.hungryForWhitespace&&g(t)&&g(e))||(u.verboseWhenMismatches?t===e||`Given string ${e} is not matched! We have ${t} on the other end.`:u.useWildcards?j.isMatch(t,e,{caseSensitive:!0}):t===e);if(Array.isArray(t)&&Array.isArray(e)){if(u.hungryForWhitespace&&g(e)&&(!u.matchStrictly||u.matchStrictly&&t.length===e.length))return!0;if(!u.hungryForWhitespace&&e.length>t.length||u.matchStrictly&&e.length!==t.length)return!!u.verboseWhenMismatches&&`The length of a given array, ${JSON.stringify(e,null,4)} is ${e.length} but the length of an array on the other end, ${JSON.stringify(t,null,4)} is ${t.length}`;if(0===e.length)return 0===t.length||!!u.verboseWhenMismatches&&`The given array has no elements, but the array on the other end, ${JSON.stringify(t,null,4)} does have some`;for(let r=0,n=e.length;r<n;r++){a=!1;for(let n=c,o=t.length;n<o;n++)if(c+=1,!0===w(t[n],e[r],u)){a=!0;break}if(!a)return!!u.verboseWhenMismatches&&`The given array ${JSON.stringify(e,null,4)} is not a subset of an array on the other end, ${JSON.stringify(t,null,4)}`}}else{if(!y(t)||!y(e))return!(!(u.hungryForWhitespace&&g(t)&&g(e))||u.matchStrictly&&(!u.matchStrictly||(s=e,y(s)?Object.keys(s).length:!Array.isArray(s)&&"string"!=typeof s||s.length)))||t===e;if(n=new Set(Object.keys(e)),i=new Set(Object.keys(t)),u.matchStrictly&&n.size!==i.size){if(!u.verboseWhenMismatches)return!1;const t=new Set([...n].filter((t=>!i.has(t)))),e=t.size?` First object has unique keys: ${JSON.stringify(t,null,4)}.`:"",r=new Set([...i].filter((t=>!n.has(t))));return`When matching strictly, we found that both objects have different amount of keys.${e}${r.size?` Second object has unique keys:\n        ${JSON.stringify(r,null,4)}.`:""}`}for(const r of n){if(!Object.prototype.hasOwnProperty.call(t,r))return!u.useWildcards||u.useWildcards&&!r.includes("*")?!!u.verboseWhenMismatches&&`The given object has key "${r}" which the other-one does not have.`:!!Object.keys(t).some((t=>j.isMatch(t,r,{caseSensitive:!0})))||!!u.verboseWhenMismatches&&`The given object has key "${r}" which the other-one does not have.`;if(null!=t[r]&&o(t[r])!==o(e[r])){if(!(g(t[r])&&g(e[r])&&u.hungryForWhitespace))return!!u.verboseWhenMismatches&&`The given key ${r} is of a different type on both objects. On the first-one, it's ${o(e[r])}, on the second-one, it's ${o(t[r])}`}else if(!0!==w(t[r],e[r],u))return!!u.verboseWhenMismatches&&`The given piece ${JSON.stringify(e[r],null,4)} and ${JSON.stringify(t[r],null,4)} don't match.`}}var s;return!0}j.isMatch=(t,e,r)=>(t=v(t,"inputs"),0!==(e=v(e,"patterns")).length&&t.some((t=>e.every((e=>{const n=_(e,r),o=n.test(t);return n.negated?!o:o})))));const m={matchKeysStrictly:!1,hungryForWhitespace:!1};t.defaults=m,t.deleteObj=function(t,e,r){if(!t)throw new Error("ast-delete-object/deleteObj(): [THROW_ID_01] Missing input!");if(!e)throw new Error("ast-delete-object/deleteObj(): [THROW_ID_02] Missing second argument, object to search for and delete!");if(r&&!y(r))throw new Error("ast-delete-object/deleteObj(): [THROW_ID_03] Third argument, options object, must be an object!");const o={...m,...r};let i,a=n(t);return w(a,e,{hungryForWhitespace:o.hungryForWhitespace,matchStrictly:o.matchKeysStrictly})?{}:(a=d(a,((t,r)=>{if(i=void 0!==r?r:t,y(i)){if(y(e)&&y(i)&&!Object.keys(e).length&&!Object.keys(i).length)return NaN;if(w(i,e,{hungryForWhitespace:o.hungryForWhitespace,matchStrictly:o.matchKeysStrictly}))return NaN}return i})),a)},t.version="2.0.11",Object.defineProperty(t,"__esModule",{value:!0})}));
