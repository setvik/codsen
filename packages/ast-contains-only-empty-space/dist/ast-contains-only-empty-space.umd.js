/**
 * ast-contains-only-empty-space
 * Returns Boolean depending if passed AST contain only empty space
 * Version: 1.8.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://bitbucket.org/codsen/codsen/src/master/packages/ast-contains-only-empty-space
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t=t||self).astContainsOnlyEmptySpace=r()}(this,function(){"use strict";var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var r=1/0,e="[object Symbol]",n=/^\s+|\s+$/g,o="[\\ud800-\\udfff]",u="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",c="\\ud83c[\\udffb-\\udfff]",i="[^\\ud800-\\udfff]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",a="[\\ud800-\\udbff][\\udc00-\\udfff]",s="(?:"+u+"|"+c+")"+"?",l="[\\ufe0e\\ufe0f]?"+s+("(?:\\u200d(?:"+[i,f,a].join("|")+")[\\ufe0e\\ufe0f]?"+s+")*"),p="(?:"+[i+u+"?",u,f,a,o].join("|")+")",y=RegExp(c+"(?="+c+")|"+p+l,"g"),h=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),d="object"==typeof t&&t&&t.Object===Object&&t,v="object"==typeof self&&self&&self.Object===Object&&self,b=d||v||Function("return this")();function _(t,r,e){if(r!=r)return function(t,r,e,n){for(var o=t.length,u=e+(n?1:-1);n?u--:++u<o;)if(r(t[u],u,t))return u;return-1}(t,j,e);for(var n=e-1,o=t.length;++n<o;)if(t[n]===r)return n;return-1}function j(t){return t!=t}function g(t){return function(t){return h.test(t)}(t)?function(t){return t.match(y)||[]}(t):function(t){return t.split("")}(t)}var O=Object.prototype.toString,w=b.Symbol,m=w?w.prototype:void 0,A=m?m.toString:void 0;function S(t){if("string"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&O.call(t)==e}(t))return A?A.call(t):"";var n=t+"";return"0"==n&&1/t==-r?"-0":n}function x(t,r,e){var n=t.length;return e=void 0===e?n:e,!r&&e>=n?t:function(t,r,e){var n=-1,o=t.length;r<0&&(r=-r>o?0:o+r),(e=e>o?o:e)<0&&(e+=o),o=r>e?0:e-r>>>0,r>>>=0;for(var u=Array(o);++n<o;)u[n]=t[n+r];return u}(t,r,e)}var $=function(t,r,e){var o;if((t=null==(o=t)?"":S(o))&&(e||void 0===r))return t.replace(n,"");if(!t||!(r=S(r)))return t;var u=g(t),c=g(r);return x(u,function(t,r){for(var e=-1,n=t.length;++e<n&&_(r,t[e],0)>-1;);return e}(u,c),function(t,r){for(var e=t.length;e--&&_(r,t[e],0)>-1;);return e}(u,c)+1).join("")},E="[object Object]";var P,k,F=Function.prototype,I=Object.prototype,N=F.toString,M=I.hasOwnProperty,B=N.call(Object),R=I.toString,U=(P=Object.getPrototypeOf,k=Object,function(t){return P(k(t))});var W,C=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||R.call(t)!=E||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t))return!1;var r=U(t);if(null===r)return!0;var e=M.call(r,"constructor")&&r.constructor;return"function"==typeof e&&e instanceof e&&N.call(e)==B},D=(function(r,e){var n=200,o="__lodash_hash_undefined__",u=9007199254740991,c="[object Arguments]",i="[object Boolean]",f="[object Date]",a="[object Function]",s="[object GeneratorFunction]",l="[object Map]",p="[object Number]",y="[object Object]",h="[object RegExp]",d="[object Set]",v="[object String]",b="[object Symbol]",_="[object ArrayBuffer]",j="[object DataView]",g="[object Float32Array]",O="[object Float64Array]",w="[object Int8Array]",m="[object Int16Array]",A="[object Int32Array]",S="[object Uint8Array]",x="[object Uint8ClampedArray]",$="[object Uint16Array]",E="[object Uint32Array]",P=/\w*$/,k=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,I={};I[c]=I["[object Array]"]=I[_]=I[j]=I[i]=I[f]=I[g]=I[O]=I[w]=I[m]=I[A]=I[l]=I[p]=I[y]=I[h]=I[d]=I[v]=I[b]=I[S]=I[x]=I[$]=I[E]=!0,I["[object Error]"]=I[a]=I["[object WeakMap]"]=!1;var N="object"==typeof t&&t&&t.Object===Object&&t,M="object"==typeof self&&self&&self.Object===Object&&self,B=N||M||Function("return this")(),R=e&&!e.nodeType&&e,U=R&&r&&!r.nodeType&&r,W=U&&U.exports===R;function C(t,r){return t.set(r[0],r[1]),t}function D(t,r){return t.add(r),t}function T(t,r,e,n){var o=-1,u=t?t.length:0;for(n&&u&&(e=t[++o]);++o<u;)e=r(e,t[o],o,t);return e}function z(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function L(t){var r=-1,e=Array(t.size);return t.forEach(function(t,n){e[++r]=[n,t]}),e}function V(t,r){return function(e){return t(r(e))}}function G(t){var r=-1,e=Array(t.size);return t.forEach(function(t){e[++r]=t}),e}var K,q=Array.prototype,H=Function.prototype,J=Object.prototype,Q=B["__core-js_shared__"],X=(K=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+K:"",Y=H.toString,Z=J.hasOwnProperty,tt=J.toString,rt=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=W?B.Buffer:void 0,nt=B.Symbol,ot=B.Uint8Array,ut=V(Object.getPrototypeOf,Object),ct=Object.create,it=J.propertyIsEnumerable,ft=q.splice,at=Object.getOwnPropertySymbols,st=et?et.isBuffer:void 0,lt=V(Object.keys,Object),pt=Ut(B,"DataView"),yt=Ut(B,"Map"),ht=Ut(B,"Promise"),dt=Ut(B,"Set"),vt=Ut(B,"WeakMap"),bt=Ut(Object,"create"),_t=zt(pt),jt=zt(yt),gt=zt(ht),Ot=zt(dt),wt=zt(vt),mt=nt?nt.prototype:void 0,At=mt?mt.valueOf:void 0;function St(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function xt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function $t(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Et(t){this.__data__=new xt(t)}function Pt(t,r){var e=Vt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Gt(t)}(t)&&Z.call(t,"callee")&&(!it.call(t,"callee")||tt.call(t)==c)}(t)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],n=e.length,o=!!n;for(var u in t)!r&&!Z.call(t,u)||o&&("length"==u||Dt(u,n))||e.push(u);return e}function kt(t,r,e){var n=t[r];Z.call(t,r)&&Lt(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function Ft(t,r){for(var e=t.length;e--;)if(Lt(t[e][0],r))return e;return-1}function It(t,r,e,n,o,u,k){var F;if(n&&(F=u?n(t,o,u,k):n(t)),void 0!==F)return F;if(!Ht(t))return t;var N=Vt(t);if(N){if(F=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&Z.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!r)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(t,F)}else{var M=Ct(t),B=M==a||M==s;if(Kt(t))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,r);if(M==y||M==c||B&&!u){if(z(t))return u?t:{};if(F=function(t){return"function"!=typeof t.constructor||Tt(t)?{}:(r=ut(t),Ht(r)?ct(r):{});var r}(B?{}:t),!r)return function(t,r){return Bt(t,Wt(t),r)}(t,function(t,r){return t&&Bt(r,Jt(r),t)}(F,t))}else{if(!I[M])return u?t:{};F=function(t,r,e,n){var o=t.constructor;switch(r){case _:return Mt(t);case i:case f:return new o(+t);case j:return function(t,r){var e=r?Mt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,n);case g:case O:case w:case m:case A:case S:case x:case $:case E:return function(t,r){var e=r?Mt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,n);case l:return function(t,r,e){return T(r?e(L(t),!0):L(t),C,new t.constructor)}(t,n,e);case p:case v:return new o(t);case h:return(a=new(c=t).constructor(c.source,P.exec(c))).lastIndex=c.lastIndex,a;case d:return function(t,r,e){return T(r?e(G(t),!0):G(t),D,new t.constructor)}(t,n,e);case b:return u=t,At?Object(At.call(u)):{}}var u;var c,a}(t,M,It,r)}}k||(k=new Et);var R=k.get(t);if(R)return R;if(k.set(t,F),!N)var U=e?function(t){return function(t,r,e){var n=r(t);return Vt(t)?n:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(n,e(t))}(t,Jt,Wt)}(t):Jt(t);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(U||t,function(o,u){U&&(o=t[u=o]),kt(F,u,It(o,r,e,n,u,t,k))}),F}function Nt(t){return!(!Ht(t)||(r=t,X&&X in r))&&(qt(t)||z(t)?rt:k).test(zt(t));var r}function Mt(t){var r=new t.constructor(t.byteLength);return new ot(r).set(new ot(t)),r}function Bt(t,r,e,n){e||(e={});for(var o=-1,u=r.length;++o<u;){var c=r[o],i=n?n(e[c],t[c],c,e,t):void 0;kt(e,c,void 0===i?t[c]:i)}return e}function Rt(t,r){var e,n,o=t.__data__;return("string"==(n=typeof(e=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?o["string"==typeof r?"string":"hash"]:o.map}function Ut(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return Nt(e)?e:void 0}St.prototype.clear=function(){this.__data__=bt?bt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var r=this.__data__;if(bt){var e=r[t];return e===o?void 0:e}return Z.call(r,t)?r[t]:void 0},St.prototype.has=function(t){var r=this.__data__;return bt?void 0!==r[t]:Z.call(r,t)},St.prototype.set=function(t,r){return this.__data__[t]=bt&&void 0===r?o:r,this},xt.prototype.clear=function(){this.__data__=[]},xt.prototype.delete=function(t){var r=this.__data__,e=Ft(r,t);return!(e<0||(e==r.length-1?r.pop():ft.call(r,e,1),0))},xt.prototype.get=function(t){var r=this.__data__,e=Ft(r,t);return e<0?void 0:r[e][1]},xt.prototype.has=function(t){return Ft(this.__data__,t)>-1},xt.prototype.set=function(t,r){var e=this.__data__,n=Ft(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},$t.prototype.clear=function(){this.__data__={hash:new St,map:new(yt||xt),string:new St}},$t.prototype.delete=function(t){return Rt(this,t).delete(t)},$t.prototype.get=function(t){return Rt(this,t).get(t)},$t.prototype.has=function(t){return Rt(this,t).has(t)},$t.prototype.set=function(t,r){return Rt(this,t).set(t,r),this},Et.prototype.clear=function(){this.__data__=new xt},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,r){var e=this.__data__;if(e instanceof xt){var o=e.__data__;if(!yt||o.length<n-1)return o.push([t,r]),this;e=this.__data__=new $t(o)}return e.set(t,r),this};var Wt=at?V(at,Object):function(){return[]},Ct=function(t){return tt.call(t)};function Dt(t,r){return!!(r=null==r?u:r)&&("number"==typeof t||F.test(t))&&t>-1&&t%1==0&&t<r}function Tt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||J)}function zt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Lt(t,r){return t===r||t!=t&&r!=r}(pt&&Ct(new pt(new ArrayBuffer(1)))!=j||yt&&Ct(new yt)!=l||ht&&"[object Promise]"!=Ct(ht.resolve())||dt&&Ct(new dt)!=d||vt&&"[object WeakMap]"!=Ct(new vt))&&(Ct=function(t){var r=tt.call(t),e=r==y?t.constructor:void 0,n=e?zt(e):void 0;if(n)switch(n){case _t:return j;case jt:return l;case gt:return"[object Promise]";case Ot:return d;case wt:return"[object WeakMap]"}return r});var Vt=Array.isArray;function Gt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=u}(t.length)&&!qt(t)}var Kt=st||function(){return!1};function qt(t){var r=Ht(t)?tt.call(t):"";return r==a||r==s}function Ht(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function Jt(t){return Gt(t)?Pt(t):function(t){if(!Tt(t))return lt(t);var r=[];for(var e in Object(t))Z.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}r.exports=function(t){return It(t,!0,!0)}}(W={exports:{}},W.exports),W.exports);const T=Array.isArray;function z(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function L(t,r){return function t(r,e,n){const o=D(r);let u,c,i,f,a;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,T(o))for(u=0,c=o.length;u<c;u++){const r=`${n.path}.${u}`;void 0!==o[u]?(n.parent=D(o),i=t(e(o[u],void 0,Object.assign({},n,{path:z(r)})),e,Object.assign({},n,{path:z(r)})),Number.isNaN(i)&&u<o.length?(o.splice(u,1),u-=1):o[u]=i):o.splice(u,1)}else if(C(o))for(u=0,c=(f=Object.keys(o)).length;u<c;u++){a=f[u];const r=`${n.path}.${a}`;0===n.depth&&null!=a&&(n.topmostKey=a),n.parent=D(o),i=t(e(a,o[a],Object.assign({},n,{path:z(r)})),e,Object.assign({},n,{path:z(r)})),Number.isNaN(i)?delete o[a]:o[a]=i}return o}(t,r,{})}return function(t){function r(t){return"string"==typeof t}var e=Array.isArray,n=!0;return!!(e(t)||C(t)||r(t))&&(r(t)?0===$(t).length:(t=L(t,function(t,e){var o=void 0!==e?e:t;return r(o)&&""!==$(o)&&(n=!1),o}),n))}});
