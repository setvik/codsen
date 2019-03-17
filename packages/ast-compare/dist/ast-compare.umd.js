/**
 * ast-compare
 * Compare anything: AST, objects, arrays, strings and nested thereof
 * Version: 1.11.13
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ast-compare
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).astCompare=e()}(this,function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t,e){return t(e={exports:{}},e.exports),e.exports}var n=r(function(t,r){var n=200,o="__lodash_hash_undefined__",i=9007199254740991,a="[object Arguments]",c="[object Boolean]",u="[object Date]",s="[object Function]",f="[object GeneratorFunction]",l="[object Map]",p="[object Number]",h="[object Object]",y="[object RegExp]",g="[object Set]",d="[object String]",b="[object Symbol]",v="[object ArrayBuffer]",m="[object DataView]",_="[object Float32Array]",j="[object Float64Array]",w="[object Int8Array]",O="[object Int16Array]",S="[object Int32Array]",$="[object Uint8Array]",A="[object Uint8ClampedArray]",T="[object Uint16Array]",k="[object Uint32Array]",N=/\w*$/,W=/^\[object .+?Constructor\]$/,E=/^(?:0|[1-9]\d*)$/,M={};M[a]=M["[object Array]"]=M[v]=M[m]=M[c]=M[u]=M[_]=M[j]=M[w]=M[O]=M[S]=M[l]=M[p]=M[h]=M[y]=M[g]=M[d]=M[b]=M[$]=M[A]=M[T]=M[k]=!0,M["[object Error]"]=M[s]=M["[object WeakMap]"]=!1;var P="object"==typeof e&&e&&e.Object===Object&&e,I="object"==typeof self&&self&&self.Object===Object&&self,x=P||I||Function("return this")(),J=r&&!r.nodeType&&r,F=J&&t&&!t.nodeType&&t,L=F&&F.exports===J;function C(t,e){return t.set(e[0],e[1]),t}function D(t,e){return t.add(e),t}function K(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function R(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function H(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function V(t,e){return function(r){return t(e(r))}}function q(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var B,U=Array.prototype,G=Function.prototype,z=Object.prototype,Q=x["__core-js_shared__"],X=(B=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+B:"",Y=G.toString,Z=z.hasOwnProperty,tt=z.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=L?x.Buffer:void 0,nt=x.Symbol,ot=x.Uint8Array,it=V(Object.getPrototypeOf,Object),at=Object.create,ct=z.propertyIsEnumerable,ut=U.splice,st=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,lt=V(Object.keys,Object),pt=Ft(x,"DataView"),ht=Ft(x,"Map"),yt=Ft(x,"Promise"),gt=Ft(x,"Set"),dt=Ft(x,"WeakMap"),bt=Ft(Object,"create"),vt=Rt(pt),mt=Rt(ht),_t=Rt(yt),jt=Rt(gt),wt=Rt(dt),Ot=nt?nt.prototype:void 0,St=Ot?Ot.valueOf:void 0;function $t(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function kt(t){this.__data__=new At(t)}function Nt(t,e){var r=Vt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&qt(t)}(t)&&Z.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==a)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var i in t)!e&&!Z.call(t,i)||o&&("length"==i||Dt(i,n))||r.push(i);return r}function Wt(t,e,r){var n=t[e];Z.call(t,e)&&Ht(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Et(t,e){for(var r=t.length;r--;)if(Ht(t[r][0],e))return r;return-1}function Mt(t,e,r,n,o,i,W){var E;if(n&&(E=i?n(t,o,i,W):n(t)),void 0!==E)return E;if(!Gt(t))return t;var P=Vt(t);if(P){if(E=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,E)}else{var I=Ct(t),x=I==s||I==f;if(Bt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(I==h||I==a||x&&!i){if(R(t))return i?t:{};if(E=function(t){return"function"!=typeof t.constructor||Kt(t)?{}:(e=it(t),Gt(e)?at(e):{});var e}(x?{}:t),!e)return function(t,e){return xt(t,Lt(t),e)}(t,function(t,e){return t&&xt(e,zt(e),t)}(E,t))}else{if(!M[I])return i?t:{};E=function(t,e,r,n){var o=t.constructor;switch(e){case v:return It(t);case c:case u:return new o(+t);case m:return function(t,e){var r=e?It(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case _:case j:case w:case O:case S:case $:case A:case T:case k:return function(t,e){var r=e?It(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return K(e?r(H(t),!0):H(t),C,new t.constructor)}(t,n,r);case p:case d:return new o(t);case y:return(s=new(a=t).constructor(a.source,N.exec(a))).lastIndex=a.lastIndex,s;case g:return function(t,e,r){return K(e?r(q(t),!0):q(t),D,new t.constructor)}(t,n,r);case b:return i=t,St?Object(St.call(i)):{}}var i;var a,s}(t,I,Mt,e)}}W||(W=new kt);var J=W.get(t);if(J)return J;if(W.set(t,E),!P)var F=r?function(t){return function(t,e,r){var n=e(t);return Vt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,zt,Lt)}(t):zt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(F||t,function(o,i){F&&(o=t[i=o]),Wt(E,i,Mt(o,e,r,n,i,t,W))}),E}function Pt(t){return!(!Gt(t)||(e=t,X&&X in e))&&(Ut(t)||R(t)?et:W).test(Rt(t));var e}function It(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function xt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;Wt(r,a,void 0===c?t[a]:c)}return r}function Jt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Ft(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Pt(r)?r:void 0}$t.prototype.clear=function(){this.__data__=bt?bt(null):{}},$t.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},$t.prototype.get=function(t){var e=this.__data__;if(bt){var r=e[t];return r===o?void 0:r}return Z.call(e,t)?e[t]:void 0},$t.prototype.has=function(t){var e=this.__data__;return bt?void 0!==e[t]:Z.call(e,t)},$t.prototype.set=function(t,e){return this.__data__[t]=bt&&void 0===e?o:e,this},At.prototype.clear=function(){this.__data__=[]},At.prototype.delete=function(t){var e=this.__data__,r=Et(e,t);return!(r<0||(r==e.length-1?e.pop():ut.call(e,r,1),0))},At.prototype.get=function(t){var e=this.__data__,r=Et(e,t);return r<0?void 0:e[r][1]},At.prototype.has=function(t){return Et(this.__data__,t)>-1},At.prototype.set=function(t,e){var r=this.__data__,n=Et(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Tt.prototype.clear=function(){this.__data__={hash:new $t,map:new(ht||At),string:new $t}},Tt.prototype.delete=function(t){return Jt(this,t).delete(t)},Tt.prototype.get=function(t){return Jt(this,t).get(t)},Tt.prototype.has=function(t){return Jt(this,t).has(t)},Tt.prototype.set=function(t,e){return Jt(this,t).set(t,e),this},kt.prototype.clear=function(){this.__data__=new At},kt.prototype.delete=function(t){return this.__data__.delete(t)},kt.prototype.get=function(t){return this.__data__.get(t)},kt.prototype.has=function(t){return this.__data__.has(t)},kt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof At){var o=r.__data__;if(!ht||o.length<n-1)return o.push([t,e]),this;r=this.__data__=new Tt(o)}return r.set(t,e),this};var Lt=st?V(st,Object):function(){return[]},Ct=function(t){return tt.call(t)};function Dt(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||E.test(t))&&t>-1&&t%1==0&&t<e}function Kt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||z)}function Rt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ht(t,e){return t===e||t!=t&&e!=e}(pt&&Ct(new pt(new ArrayBuffer(1)))!=m||ht&&Ct(new ht)!=l||yt&&"[object Promise]"!=Ct(yt.resolve())||gt&&Ct(new gt)!=g||dt&&"[object WeakMap]"!=Ct(new dt))&&(Ct=function(t){var e=tt.call(t),r=e==h?t.constructor:void 0,n=r?Rt(r):void 0;if(n)switch(n){case vt:return m;case mt:return l;case _t:return"[object Promise]";case jt:return g;case wt:return"[object WeakMap]"}return e});var Vt=Array.isArray;function qt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!Ut(t)}var Bt=ft||function(){return!1};function Ut(t){var e=Gt(t)?tt.call(t):"";return e==s||e==f}function Gt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function zt(t){return qt(t)?Nt(t):function(t){if(!Kt(t))return lt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Mt(t,!0,!0)}});function o(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,a,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function i(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}function a(t){return t!=t}var c=Array.prototype.splice;function u(t,e,r,n){var a,u=n?i:o,s=-1,f=e.length,l=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(l=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(a=r,function(t){return a(t)})));++s<f;)for(var p=0,h=e[s],y=r?r(h):h;(p=u(l,y,p,n))>-1;)l!==t&&c.call(l,p,1),c.call(t,p,1);return t}var s=function(t,e){return t&&t.length&&e&&e.length?u(t,e):t},f=r(function(t,r){var n,o,i,a,c,u,s,f,l,p,h,y,g,d,b,v,m,_,j,w;t.exports=(n="function"==typeof Promise,o="object"==typeof self?self:e,i="undefined"!=typeof Symbol,a="undefined"!=typeof Map,c="undefined"!=typeof Set,u="undefined"!=typeof WeakMap,s="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,l=i&&void 0!==Symbol.iterator,p=i&&void 0!==Symbol.toStringTag,h=c&&"function"==typeof Set.prototype.entries,y=a&&"function"==typeof Map.prototype.entries,g=h&&Object.getPrototypeOf((new Set).entries()),d=y&&Object.getPrototypeOf((new Map).entries()),b=l&&"function"==typeof Array.prototype[Symbol.iterator],v=b&&Object.getPrototypeOf([][Symbol.iterator]()),m=l&&"function"==typeof String.prototype[Symbol.iterator],_=m&&Object.getPrototypeOf(""[Symbol.iterator]()),j=8,w=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===p||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var r=p&&t[Symbol.toStringTag];if("string"==typeof r)return r;var i=Object.getPrototypeOf(t);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":n&&i===Promise.prototype?"Promise":c&&i===Set.prototype?"Set":a&&i===Map.prototype?"Map":s&&i===WeakSet.prototype?"WeakSet":u&&i===WeakMap.prototype?"WeakMap":f&&i===DataView.prototype?"DataView":a&&i===d?"Map Iterator":c&&i===g?"Set Iterator":b&&i===v?"Array Iterator":m&&i===_?"String Iterator":null===i?"Object":Object.prototype.toString.call(t).slice(j,w)})}),l=1/0,p="[object Symbol]",h=/^\s+|\s+$/g,y="[\\ud800-\\udfff]",g="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",d="\\ud83c[\\udffb-\\udfff]",b="[^\\ud800-\\udfff]",v="(?:\\ud83c[\\udde6-\\uddff]){2}",m="[\\ud800-\\udbff][\\udc00-\\udfff]",_="(?:"+g+"|"+d+")"+"?",j="[\\ufe0e\\ufe0f]?"+_+("(?:\\u200d(?:"+[b,v,m].join("|")+")[\\ufe0e\\ufe0f]?"+_+")*"),w="(?:"+[b+g+"?",g,v,m,y].join("|")+")",O=RegExp(d+"(?="+d+")|"+w+j,"g"),S=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),$="object"==typeof e&&e&&e.Object===Object&&e,A="object"==typeof self&&self&&self.Object===Object&&self,T=$||A||Function("return this")();function k(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,N,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function N(t){return t!=t}function W(t){return function(t){return S.test(t)}(t)?function(t){return t.match(O)||[]}(t):function(t){return t.split("")}(t)}var E=Object.prototype.toString,M=T.Symbol,P=M?M.prototype:void 0,I=P?P.toString:void 0;function x(t){if("string"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&E.call(t)==p}(t))return I?I.call(t):"";var e=t+"";return"0"==e&&1/t==-l?"-0":e}function J(t,e,r){var n=t.length;return r=void 0===r?n:r,!e&&r>=n?t:function(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(r=r>o?o:r)<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var i=Array(o);++n<o;)i[n]=t[n+e];return i}(t,e,r)}var F=function(t,e,r){var n;if((t=null==(n=t)?"":x(n))&&(r||void 0===e))return t.replace(h,"");if(!t||!(e=x(e)))return t;var o=W(t),i=W(e);return J(o,function(t,e){for(var r=-1,n=t.length;++r<n&&k(e,t[r],0)>-1;);return r}(o,i),function(t,e){for(var r=t.length;r--&&k(e,t[r],0)>-1;);return r}(o,i)+1).join("")},L="[object Object]";var C,D,K=Function.prototype,R=Object.prototype,H=K.toString,V=R.hasOwnProperty,q=H.call(Object),B=R.toString,U=(C=Object.getPrototypeOf,D=Object,function(t){return C(D(t))});var G=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||B.call(t)!=L||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=U(t);if(null===e)return!0;var r=V.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&H.call(r)==q};const z=Array.isArray;function Q(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function X(t,e){return function t(e,r,o){const i=n(e);let a,c,u,s,f;if((o=Object.assign({depth:-1,path:""},o)).depth+=1,z(i))for(a=0,c=i.length;a<c;a++){const e=`${o.path}.${a}`;void 0!==i[a]?(o.parent=n(i),o.parentType="array",u=t(r(i[a],void 0,Object.assign({},o,{path:Q(e)})),r,Object.assign({},o,{path:Q(e)})),Number.isNaN(u)&&a<i.length?(i.splice(a,1),a-=1):i[a]=u):i.splice(a,1)}else if(G(i))for(a=0,c=(s=Object.keys(i)).length;a<c;a++){f=s[a];const e=`${o.path}.${f}`;0===o.depth&&null!=f&&(o.topmostKey=f),o.parent=n(i),o.parentType="object",u=t(r(f,i[f],Object.assign({},o,{path:Q(e)})),r,Object.assign({},o,{path:Q(e)})),Number.isNaN(u)?delete i[f]:i[f]=u}return i}(t,e,{})}function Y(t){function e(t){return"string"==typeof t}const r=Array.isArray;let n=!0;return!!(r(t)||G(t)||e(t))&&(e(t)?0===F(t).length:(t=X(t,(t,r)=>{const o=void 0!==r?r:t;return e(o)&&""!==F(o)&&(n=!1),o}),n))}var Z=/[|\\{}()[\]^$+*?.]/g,tt=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(Z,"\\$&")};const et=new Map;function rt(t,e){const r=Object.assign({caseSensitive:!1},e),n=t+JSON.stringify(r);if(et.has(n))return et.get(n);const o="!"===t[0];o&&(t=t.slice(1)),t=tt(t).replace(/\\\*/g,".*");const i=new RegExp(`^${t}$`,r.caseSensitive?"":"i");return i.negated=o,et.set(n,i),i}var nt=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>rt(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};nt.isMatch=((t,e,r)=>{const n=rt(e,r),o=n.test(t);return n.negated?!o:o});var ot="__lodash_hash_undefined__",it=9007199254740991,at="[object Function]",ct="[object GeneratorFunction]",ut=/^\[object .+?Constructor\]$/,st="object"==typeof e&&e&&e.Object===Object&&e,ft="object"==typeof self&&self&&self.Object===Object&&self,lt=st||ft||Function("return this")();function pt(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,gt,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function ht(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function yt(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function gt(t){return t!=t}function dt(t){return function(e){return t(e)}}function bt(t,e){return t.has(e)}var vt,mt=Array.prototype,_t=Function.prototype,jt=Object.prototype,wt=lt["__core-js_shared__"],Ot=(vt=/[^.]+$/.exec(wt&&wt.keys&&wt.keys.IE_PROTO||""))?"Symbol(src)_1."+vt:"",St=_t.toString,$t=jt.hasOwnProperty,At=jt.toString,Tt=RegExp("^"+St.call($t).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),kt=mt.splice,Nt=Math.max,Wt=Math.min,Et=Kt(lt,"Map"),Mt=Kt(Object,"create");function Pt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function It(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function xt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Jt(t){var e=-1,r=t?t.length:0;for(this.__data__=new xt;++e<r;)this.add(t[e])}function Ft(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function Lt(t){return!(!Ht(t)||(e=t,Ot&&Ot in e))&&(Rt(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?Tt:ut).test(function(t){if(null!=t){try{return St.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function Ct(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=it}(t.length)&&!Rt(t)}(t)}(t)?t:[]}function Dt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Kt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Lt(r)?r:void 0}function Rt(t){var e=Ht(t)?At.call(t):"";return e==at||e==ct}function Ht(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}Pt.prototype.clear=function(){this.__data__=Mt?Mt(null):{}},Pt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Pt.prototype.get=function(t){var e=this.__data__;if(Mt){var r=e[t];return r===ot?void 0:r}return $t.call(e,t)?e[t]:void 0},Pt.prototype.has=function(t){var e=this.__data__;return Mt?void 0!==e[t]:$t.call(e,t)},Pt.prototype.set=function(t,e){return this.__data__[t]=Mt&&void 0===e?ot:e,this},It.prototype.clear=function(){this.__data__=[]},It.prototype.delete=function(t){var e=this.__data__,r=Ft(e,t);return!(r<0||(r==e.length-1?e.pop():kt.call(e,r,1),0))},It.prototype.get=function(t){var e=this.__data__,r=Ft(e,t);return r<0?void 0:e[r][1]},It.prototype.has=function(t){return Ft(this.__data__,t)>-1},It.prototype.set=function(t,e){var r=this.__data__,n=Ft(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},xt.prototype.clear=function(){this.__data__={hash:new Pt,map:new(Et||It),string:new Pt}},xt.prototype.delete=function(t){return Dt(this,t).delete(t)},xt.prototype.get=function(t){return Dt(this,t).get(t)},xt.prototype.has=function(t){return Dt(this,t).has(t)},xt.prototype.set=function(t,e){return Dt(this,t).set(t,e),this},Jt.prototype.add=Jt.prototype.push=function(t){return this.__data__.set(t,ot),this},Jt.prototype.has=function(t){return this.__data__.has(t)};var Vt=function(t,e){return e=Nt(void 0===e?t.length-1:e,0),function(){for(var r=arguments,n=-1,o=Nt(r.length-e,0),i=Array(o);++n<o;)i[n]=r[e+n];n=-1;for(var a=Array(e+1);++n<e;)a[n]=r[n];return a[e]=i,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,a)}}(function(t){var e=yt(t,Ct);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?ht:pt,o=t[0].length,i=t.length,a=i,c=Array(i),u=1/0,s=[];a--;){var f=t[a];a&&e&&(f=yt(f,dt(e))),u=Wt(f.length,u),c[a]=!r&&(e||o>=120&&f.length>=120)?new Jt(a&&f):void 0}f=t[0];var l=-1,p=c[0];t:for(;++l<o&&s.length<u;){var h=f[l],y=e?e(h):h;if(h=r||0!==h?h:0,!(p?bt(p,y):n(s,y,r))){for(a=i;--a;){var g=c[a];if(!(g?bt(g,y):n(t[a],y,r)))continue t}p&&p.push(y),s.push(h)}}return s}(e):[]});function qt(t){return"string"==typeof t?t.length>0?[t]:[]:t}var Bt=r(function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function r(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function n(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function i(t){var e=parseInt(t);return e.toString()===t?e:t}function a(t){t=t||{};var a=function(t){return Object.keys(a).reduce(function(e,r){return"create"===r?e:("function"==typeof a[r]&&(e[r]=a[r].bind(a,t)),e)},{})};function c(r,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||e(r,n)}function u(t,e){if(c(t,e))return t[e]}function s(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return s(t,e.split(".").map(i),r,n);var o=e[0],a=u(t,o);return 1===e.length?(void 0!==a&&n||(t[o]=r),a):(void 0===a&&("number"==typeof e[1]?t[o]=[]:t[o]={}),s(t[o],e.slice(1),r,n))}return a.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var a=0;a<n.length;a++){var c=i(n[a]);if(!("number"==typeof c&&o(r)&&c<r.length||(t.includeInheritedProps?c in Object(r):e(r,c))))return!1;r=r[c]}return!0},a.ensureExists=function(t,e,r){return s(t,e,r,!0)},a.set=function(t,e,r,n){return s(t,e,r,n)},a.insert=function(t,e,r,n){var i=a.get(t,e);n=~~n,o(i)||(i=[],a.set(t,e,i)),i.splice(n,0,r)},a.empty=function(t,e){var i,u;if(!r(e)&&null!=t&&(i=a.get(t,e))){if("string"==typeof i)return a.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}(i))return a.set(t,e,!1);if("number"==typeof i)return a.set(t,e,0);if(o(i))i.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===n(t)}(i))return a.set(t,e,null);for(u in i)c(i,u)&&delete i[u]}}},a.push=function(t,e){var r=a.get(t,e);o(r)||(r=[],a.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},a.coalesce=function(t,e,r){for(var n,o=0,i=e.length;o<i;o++)if(void 0!==(n=a.get(t,e[o])))return n;return r},a.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return a.get(t,e.split("."),r);var n=i(e[0]),o=u(t,n);return void 0===o?r:1===e.length?o:a.get(t[n],e.slice(1),r)},a.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(r(e))return t;if("string"==typeof e)return a.del(t,e.split("."));var n=i(e[0]);return c(t,n)?1!==e.length?a.del(t[n],e.slice(1)):(o(t)?t.splice(n,1):delete t[n],t):t},a}var c=a();return c.create=a,c.withInheritedProps=a({includeInheritedProps:!0}),c}()}),Ut=function(t){var e=t%100;if(e>=10&&e<=20)return"th";var r=t%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"};function Gt(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return t+Ut(t)}Gt.indicator=Ut;var zt=Gt;function Qt(t,e,r){return function t(e,r,n,o=!0){const i=Object.prototype.hasOwnProperty;function a(t){return null!=t}function c(t){return"Object"===f(t)}function u(t,e){return e=qt(e),Array.from(t).filter(t=>!e.some(e=>nt.isMatch(t,e,{caseSensitive:!0})))}const l=["any","anything","every","everything","all","whatever","whatevs"],p=Array.isArray;if(!a(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const h={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let y;if(y=a(n)&&c(n)?Object.assign({},h,n):Object.assign({},h),a(y.ignoreKeys)&&y.ignoreKeys?y.ignoreKeys=qt(y.ignoreKeys):y.ignoreKeys=[],a(y.ignorePaths)&&y.ignorePaths?y.ignorePaths=qt(y.ignorePaths):y.ignorePaths=[],a(y.acceptArraysIgnore)&&y.acceptArraysIgnore?y.acceptArraysIgnore=qt(y.acceptArraysIgnore):y.acceptArraysIgnore=[],y.msg="string"==typeof y.msg?y.msg.trim():y.msg,":"===y.msg[y.msg.length-1]&&(y.msg=y.msg.slice(0,y.msg.length-1).trim()),y.schema&&(Object.keys(y.schema).forEach(t=>{if(c(y.schema[t])){const e={};X(y.schema[t],(r,n,o)=>{const i=void 0!==n?n:r;return p(i)||c(i)||(e[`${t}.${o.path}`]=i),i}),delete y.schema[t],y.schema=Object.assign(y.schema,e)}}),Object.keys(y.schema).forEach(t=>{p(y.schema[t])||(y.schema[t]=[y.schema[t]]),y.schema[t]=y.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())})),a(r)||(r={}),o&&t(y,h,{enforceStrictKeyset:!1},!1),y.enforceStrictKeyset)if(a(y.schema)&&Object.keys(y.schema).length>0){if(0!==u(s(Object.keys(e),Object.keys(r).concat(Object.keys(y.schema))),y.ignoreKeys).length){const t=s(Object.keys(e),Object.keys(r).concat(Object.keys(y.schema)));throw new TypeError(`${y.msg}: ${y.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(a(r)&&Object.keys(r).length>0))throw new TypeError(`${y.msg}: Both ${y.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==u(s(Object.keys(e),Object.keys(r)),y.ignoreKeys).length){const t=s(Object.keys(e),Object.keys(r));throw new TypeError(`${y.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==u(s(Object.keys(r),Object.keys(e)),y.ignoreKeys).length){const t=s(Object.keys(r),Object.keys(e));throw new TypeError(`${y.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}const g=[];X(e,(t,n,o)=>{let a=n,u=t;if("array"===o.parentType&&(u=void 0,a=t),p(g)&&g.length&&g.some(t=>o.path.startsWith(t)))return a;if(u&&y.ignoreKeys.some(t=>nt.isMatch(u,t)))return a;if(y.ignorePaths.some(t=>nt.isMatch(o.path,t)))return a;const s=!(!c(a)&&!p(a)&&p(o.parent));let h=!1;c(y.schema)&&i.call(y.schema,Bt.get(o.path))&&(h=!0);let d=!1;if(c(r)&&Bt.has(r,Bt.get(o.path))&&(d=!0),y.enforceStrictKeyset&&s&&!h&&!d)throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path} is neither covered by reference object (second input argument), nor ${y.optsVarName}.schema! To stop this error, turn off ${y.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${y.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(e,null,4)}\n\nref = ${JSON.stringify(r,null,4)}\n\ninnerObj = ${JSON.stringify(o,null,4)}\n\nopts = ${JSON.stringify(y,null,4)}\n\ncurrent = ${JSON.stringify(a,null,4)}\n\n`);if(h){const t=qt(y.schema[o.path]).map(String).map(t=>t.toLowerCase());if(Bt.set(y.schema,o.path,t),Vt(t,l).length)g.push(o.path);else if(!0!==a&&!1!==a&&!t.includes(f(a).toLowerCase())||(!0===a||!1===a)&&!t.includes(String(a))&&!t.includes("boolean")){if(!p(a)||!y.acceptArrays)throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path} was customised to ${"string"!==f(a)?'"':""}${JSON.stringify(a,null,0)}${"string"!==f(a)?'"':""} (type: ${f(a).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let e=0,r=a.length;e<r;e++)if(!t.includes(f(a[e]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path}.${e}, the ${zt(e+1)} element (equal to ${JSON.stringify(a[e],null,0)}) is of a type ${f(a[e]).toLowerCase()}, but only the following are allowed by the ${y.optsVarName}.schema: ${t.join(", ")}`)}}else if(d){const e=Bt.get(r,o.path);if(y.acceptArrays&&p(a)&&!y.acceptArraysIgnore.includes(t)){if(!a.every(e=>f(e).toLowerCase()===f(r[t]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path} was customised to be array, but not all of its elements are ${f(r[t]).toLowerCase()}-type`)}else if(f(a)!==f(e))throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path} was customised to ${"string"===f(a).toLowerCase()?"":'"'}${JSON.stringify(a,null,0)}${"string"===f(a).toLowerCase()?"":'"'} which is not ${f(e).toLowerCase()} but ${f(a).toLowerCase()}`)}return a})}(t,e,r)}var Xt=Array.isArray;function Yt(t){return null!=t}function Zt(t){return"Object"===f(t)}function te(t){return"string"===f(t)}function ee(t){return Zt(t)||te(t)||function(t){return"number"===f(t)}(t)||function(t){return"boolean"===f(t)}(t)||Xt(t)||function(t){return null===t}(t)}var re=Array.isArray;return function e(r,o,i){if(void 0===r)throw new TypeError("ast-compare/compare(): [THROW_ID_01] first argument is missing!");if(void 0===o)throw new TypeError("ast-compare/compare(): [THROW_ID_02] second argument is missing!");if(Yt(r)&&!ee(r))throw new TypeError("ast-compare/compare(): [THROW_ID_03] first input argument is of a wrong type, ".concat(f(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(Yt(o)&&!ee(o))throw new TypeError("ast-compare/compare(): [THROW_ID_04] second input argument is of a wrong type, ".concat(f(o),", equal to: ").concat(JSON.stringify(o,null,4)));if(Yt(i)&&!Zt(i))throw new TypeError("ast-compare/compare(): [THROW_ID_05] third argument, options object, must, well, be an object! Currently it's: ".concat(f(i)," and equal to: ").concat(JSON.stringify(i,null,4)));var a,c,u,l,p=n(o),h=n(r),y=0,g={hungryForWhitespace:!1,matchStrictly:!1,verboseWhenMismatches:!1,useWildcards:!1},d=Object.assign({},g,i);if(Qt(d,g,{msg:"ast-compare/compare(): [THROW_ID_06*]"}),d.hungryForWhitespace&&d.matchStrictly&&Zt(r)&&Y(r)&&Zt(o)&&0===Object.keys(o).length)return!0;if((!d.hungryForWhitespace||d.hungryForWhitespace&&!Y(r)&&Y(o))&&Zt(r)&&0!==Object.keys(r).length&&Zt(o)&&0===Object.keys(o).length||f(r)!==f(o)&&(!d.hungryForWhitespace||d.hungryForWhitespace&&!Y(r)))return!1;if(te(h)&&te(p))return!!(d.hungryForWhitespace&&Y(h)&&Y(p))||(d.verboseWhenMismatches?h===p||"Given string ".concat(p," is not matched! We have ").concat(h," on the other end."):d.useWildcards?nt.isMatch(h,p,{caseSensitive:!0}):h===p);if(re(h)&&re(p)){if(d.hungryForWhitespace&&Y(p)&&(!d.matchStrictly||d.matchStrictly&&h.length===p.length))return!0;if(!d.hungryForWhitespace&&p.length>h.length||d.matchStrictly&&p.length!==h.length)return!!d.verboseWhenMismatches&&"The length of a given array, ".concat(JSON.stringify(p,null,4)," is ").concat(p.length," but the length of an array on the other end, ").concat(JSON.stringify(h,null,4)," is ").concat(h.length);if(0===p.length)return 0===h.length||!!d.verboseWhenMismatches&&"The given array has no elements, but the array on the other end, ".concat(JSON.stringify(h,null,4)," does have some");for(var b=0,v=p.length;b<v;b++){u=!1;for(var m=y,_=h.length;m<_;m++)if(y+=1,!0===e(h[m],p[b],d)){u=!0;break}if(!u)return!!d.verboseWhenMismatches&&"The given array ".concat(JSON.stringify(p,null,4)," is not a subset of an array on the other end, ").concat(JSON.stringify(h,null,4))}}else{if(!Zt(h)||!Zt(p))return!!(d.hungryForWhitespace&&Y(h)&&Y(p)&&(!d.matchStrictly||d.matchStrictly&&(l=p,Zt(l)?0===Object.keys(l).length:(Xt(l)||te(l))&&0===l.length)))||h===p;if(a=Object.keys(p),c=Object.keys(h),d.matchStrictly&&a.length!==c.length){if(!d.verboseWhenMismatches)return!1;var j=s(n(a),n(c)),w=j.length>0?"First object has unique keys: ".concat(JSON.stringify(j,null,4),"."):"",O=s(n(c),n(a)),S=O.length>0?"Second object has unique keys:\n        ".concat(JSON.stringify(O,null,4),"."):"";return"When matching strictly, we found that both objects have different amount of keys. ".concat(w," ").concat(S)}for(var $=function(t,r){if(!Yt(h[a[r]]))return!d.useWildcards||d.useWildcards&&!a[r].includes("*")?d.verboseWhenMismatches?{v:"The given object has key ".concat(a[r]," which the other-one does not have.")}:{v:!1}:Object.keys(h).some(function(t){return nt.isMatch(t,a[r],{caseSensitive:!0})})?{v:!0}:d.verboseWhenMismatches?{v:"The given object has key ".concat(a[r]," which the other-one does not have.")}:{v:!1};if(void 0!==h[a[r]]&&!ee(h[a[r]]))throw new TypeError("ast-compare/compare(): [THROW_ID_07] The input ".concat(JSON.stringify(h,null,4)," contains a value of a wrong type, ").concat(f(h[a[r]])," at index ").concat(r,", equal to: ").concat(JSON.stringify(h[a[r]],null,4)));if(!ee(p[a[r]]))throw new TypeError("ast-compare/compare(): [THROW_ID_08] The input ".concat(JSON.stringify(p,null,4)," contains a value of a wrong type, ").concat(f(p[a[r]])," at index ").concat(r,", equal to: ").concat(JSON.stringify(p[a[r]],null,4)));if(Yt(h[a[r]])&&f(h[a[r]])!==f(p[a[r]])){if(!(Y(h[a[r]])&&Y(p[a[r]])&&d.hungryForWhitespace))return d.verboseWhenMismatches?{v:"The given key ".concat(a[r]," is of a different type on both objects. On the first-one, it's ").concat(f(p[a[r]]),", on the second-one, it's ").concat(f(h[a[r]]))}:{v:!1}}else if(!0!==e(h[a[r]],p[a[r]],d))return d.verboseWhenMismatches?{v:"The given piece ".concat(JSON.stringify(p[a[r]],null,4)," and ").concat(JSON.stringify(h[a[r]],null,4)," don't match.")}:{v:!1}},A=0,T=a.length;A<T;A++){var k=$(0,A);if("object"===t(k))return k.v}}return!0}});
