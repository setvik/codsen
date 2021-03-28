/**
 * generate-atomic-css
 * Generate Atomic CSS
 * Version: 1.4.11
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/generate-atomic-css/
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).generateAtomicCss={})}(this,(function(t){"use strict";var e,n,r=Object.prototype,i=Function.prototype.toString,o=r.hasOwnProperty,u=i.call(Object),l=r.toString,c=(e=Object.getPrototypeOf,n=Object,function(t){return e(n(t))});var s=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=l.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=c(t);if(null===e)return!0;var n=o.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&i.call(n)==u},f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t){var e={exports:{}};t(e,e.exports)}((function(t,e){var n="__lodash_hash_undefined__",r=9007199254740991,i="[object Arguments]",o="[object Boolean]",u="[object Date]",l="[object Function]",c="[object GeneratorFunction]",s="[object Map]",a="[object Number]",d="[object Object]",h="[object Promise]",g="[object RegExp]",p="[object Set]",y="[object String]",v="[object Symbol]",_="[object WeakMap]",O="[object ArrayBuffer]",m="[object DataView]",b="[object Float32Array]",$="[object Float64Array]",w="[object Int8Array]",j="[object Int16Array]",A="[object Int32Array]",x="[object Uint8Array]",T="[object Uint8ClampedArray]",C="[object Uint16Array]",E="[object Uint32Array]",S=/\w*$/,N=/^\[object .+?Constructor\]$/,I=/^(?:0|[1-9]\d*)$/,F={};F[i]=F["[object Array]"]=F[O]=F[m]=F[o]=F[u]=F[b]=F[$]=F[w]=F[j]=F[A]=F[s]=F[a]=F[d]=F[g]=F[p]=F[y]=F[v]=F[x]=F[T]=F[C]=F[E]=!0,F["[object Error]"]=F[l]=F[_]=!1;var W="object"==typeof self&&self&&self.Object===Object&&self,R="object"==typeof f&&f&&f.Object===Object&&f||W||Function("return this")(),D=e&&!e.nodeType&&e,P=D&&t&&!t.nodeType&&t,H=P&&P.exports===D;function G(t,e){return t.set(e[0],e[1]),t}function L(t,e){return t.add(e),t}function M(t,e,n,r){var i=-1,o=t?t.length:0;for(r&&o&&(n=t[++i]);++i<o;)n=e(n,t[i],i,t);return n}function k(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function B(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function U(t,e){return function(n){return t(e(n))}}function q(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var z,V=Array.prototype,J=Function.prototype,K=Object.prototype,Q=R["__core-js_shared__"],X=(z=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"",Y=J.toString,Z=K.hasOwnProperty,tt=K.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),nt=H?R.Buffer:void 0,rt=R.Symbol,it=R.Uint8Array,ot=U(Object.getPrototypeOf,Object),ut=Object.create,lt=K.propertyIsEnumerable,ct=V.splice,st=Object.getOwnPropertySymbols,ft=nt?nt.isBuffer:void 0,at=U(Object.keys,Object),dt=Pt(R,"DataView"),ht=Pt(R,"Map"),gt=Pt(R,"Promise"),pt=Pt(R,"Set"),yt=Pt(R,"WeakMap"),vt=Pt(Object,"create"),_t=kt(dt),Ot=kt(ht),mt=kt(gt),bt=kt(pt),$t=kt(yt),wt=rt?rt.prototype:void 0,jt=wt?wt.valueOf:void 0;function At(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function xt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Tt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Ct(t){this.__data__=new xt(t)}function Et(t,e){var n=Ut(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&qt(t)}(t)&&Z.call(t,"callee")&&(!lt.call(t,"callee")||tt.call(t)==i)}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,o=!!r;for(var u in t)!e&&!Z.call(t,u)||o&&("length"==u||Lt(u,r))||n.push(u);return n}function St(t,e,n){var r=t[e];Z.call(t,e)&&Bt(r,n)&&(void 0!==n||e in t)||(t[e]=n)}function Nt(t,e){for(var n=t.length;n--;)if(Bt(t[n][0],e))return n;return-1}function It(t,e,n,r,f,h,_){var N;if(r&&(N=h?r(t,f,h,_):r(t)),void 0!==N)return N;if(!Jt(t))return t;var I=Ut(t);if(I){if(N=function(t){var e=t.length,n=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(t),!e)return function(t,e){var n=-1,r=t.length;e||(e=Array(r));for(;++n<r;)e[n]=t[n];return e}(t,N)}else{var W=Gt(t),R=W==l||W==c;if(zt(t))return function(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(t,e);if(W==d||W==i||R&&!h){if(k(t))return h?t:{};if(N=function(t){return"function"!=typeof t.constructor||Mt(t)?{}:(e=ot(t),Jt(e)?ut(e):{});var e}(R?{}:t),!e)return function(t,e){return Rt(t,Ht(t),e)}(t,function(t,e){return t&&Rt(e,Kt(e),t)}(N,t))}else{if(!F[W])return h?t:{};N=function(t,e,n,r){var i=t.constructor;switch(e){case O:return Wt(t);case o:case u:return new i(+t);case m:return function(t,e){var n=e?Wt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,r);case b:case $:case w:case j:case A:case x:case T:case C:case E:return function(t,e){var n=e?Wt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,r);case s:return function(t,e,n){return M(e?n(B(t),!0):B(t),G,new t.constructor)}(t,r,n);case a:case y:return new i(t);case g:return function(t){var e=new t.constructor(t.source,S.exec(t));return e.lastIndex=t.lastIndex,e}(t);case p:return function(t,e,n){return M(e?n(q(t),!0):q(t),L,new t.constructor)}(t,r,n);case v:return l=t,jt?Object(jt.call(l)):{}}var l}(t,W,It,e)}}_||(_=new Ct);var D=_.get(t);if(D)return D;if(_.set(t,N),!I)var P=n?function(t){return function(t,e,n){var r=e(t);return Ut(t)?r:function(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}(r,n(t))}(t,Kt,Ht)}(t):Kt(t);return function(t,e){for(var n=-1,r=t?t.length:0;++n<r&&!1!==e(t[n],n,t););}(P||t,(function(i,o){P&&(i=t[o=i]),St(N,o,It(i,e,n,r,o,t,_))})),N}function Ft(t){return!(!Jt(t)||function(t){return!!X&&X in t}(t))&&(Vt(t)||k(t)?et:N).test(kt(t))}function Wt(t){var e=new t.constructor(t.byteLength);return new it(e).set(new it(t)),e}function Rt(t,e,n,r){n||(n={});for(var i=-1,o=e.length;++i<o;){var u=e[i],l=r?r(n[u],t[u],u,n,t):void 0;St(n,u,void 0===l?t[u]:l)}return n}function Dt(t,e){var n,r,i=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof e?"string":"hash"]:i.map}function Pt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return Ft(n)?n:void 0}At.prototype.clear=function(){this.__data__=vt?vt(null):{}},At.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},At.prototype.get=function(t){var e=this.__data__;if(vt){var r=e[t];return r===n?void 0:r}return Z.call(e,t)?e[t]:void 0},At.prototype.has=function(t){var e=this.__data__;return vt?void 0!==e[t]:Z.call(e,t)},At.prototype.set=function(t,e){return this.__data__[t]=vt&&void 0===e?n:e,this},xt.prototype.clear=function(){this.__data__=[]},xt.prototype.delete=function(t){var e=this.__data__,n=Nt(e,t);return!(n<0)&&(n==e.length-1?e.pop():ct.call(e,n,1),!0)},xt.prototype.get=function(t){var e=this.__data__,n=Nt(e,t);return n<0?void 0:e[n][1]},xt.prototype.has=function(t){return Nt(this.__data__,t)>-1},xt.prototype.set=function(t,e){var n=this.__data__,r=Nt(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},Tt.prototype.clear=function(){this.__data__={hash:new At,map:new(ht||xt),string:new At}},Tt.prototype.delete=function(t){return Dt(this,t).delete(t)},Tt.prototype.get=function(t){return Dt(this,t).get(t)},Tt.prototype.has=function(t){return Dt(this,t).has(t)},Tt.prototype.set=function(t,e){return Dt(this,t).set(t,e),this},Ct.prototype.clear=function(){this.__data__=new xt},Ct.prototype.delete=function(t){return this.__data__.delete(t)},Ct.prototype.get=function(t){return this.__data__.get(t)},Ct.prototype.has=function(t){return this.__data__.has(t)},Ct.prototype.set=function(t,e){var n=this.__data__;if(n instanceof xt){var r=n.__data__;if(!ht||r.length<199)return r.push([t,e]),this;n=this.__data__=new Tt(r)}return n.set(t,e),this};var Ht=st?U(st,Object):function(){return[]},Gt=function(t){return tt.call(t)};function Lt(t,e){return!!(e=null==e?r:e)&&("number"==typeof t||I.test(t))&&t>-1&&t%1==0&&t<e}function Mt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||K)}function kt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Bt(t,e){return t===e||t!=t&&e!=e}(dt&&Gt(new dt(new ArrayBuffer(1)))!=m||ht&&Gt(new ht)!=s||gt&&Gt(gt.resolve())!=h||pt&&Gt(new pt)!=p||yt&&Gt(new yt)!=_)&&(Gt=function(t){var e=tt.call(t),n=e==d?t.constructor:void 0,r=n?kt(n):void 0;if(r)switch(r){case _t:return m;case Ot:return s;case mt:return h;case bt:return p;case $t:return _}return e});var Ut=Array.isArray;function qt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}(t.length)&&!Vt(t)}var zt=ft||function(){return!1};function Vt(t){var e=Jt(t)?tt.call(t):"";return e==l||e==c}function Jt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Kt(t){return qt(t)?Et(t):function(t){if(!Mt(t))return at(t);var e=[];for(var n in Object(t))Z.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)}t.exports=function(t){return It(t,!0,!0)}}));const a=" ";function d(t){const e={value:t,hungry:!1,optional:!1};return(e.value.endsWith("?*")||e.value.endsWith("*?"))&&e.value.length>2?(e.value=e.value.slice(0,e.value.length-2),e.optional=!0,e.hungry=!0):e.value.endsWith("?")&&e.value.length>1?(e.value=e.value.slice(0,~-e.value.length),e.optional=!0):e.value.endsWith("*")&&e.value.length>1&&(e.value=e.value.slice(0,~-e.value.length),e.hungry=!0),e}function h(t,e=0){return function({str:t,idx:e=0,stopAtNewlines:n=!1,stopAtRawNbsp:r=!1}){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),!t[e+1])return null;if(t[e+1]&&(t[e+1].trim()||n&&"\n\r".includes(t[e+1])||r&&t[e+1]===a))return e+1;if(t[e+2]&&(t[e+2].trim()||n&&"\n\r".includes(t[e+2])||r&&t[e+2]===a))return e+2;for(let i=e+1,o=t.length;i<o;i++)if(t[i].trim()||n&&"\n\r".includes(t[i])||r&&t[i]===a)return i;return null}({str:t,idx:e,stopAtNewlines:!1,stopAtRawNbsp:!1})}function g(t,e=0){return function({str:t,idx:e,stopAtNewlines:n,stopAtRawNbsp:r}){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),e<1)return null;if(t[~-e]&&(t[~-e].trim()||n&&"\n\r".includes(t[~-e])||r&&t[~-e]===a))return~-e;if(t[e-2]&&(t[e-2].trim()||n&&"\n\r".includes(t[e-2])||r&&t[e-2]===a))return e-2;for(let i=e;i--;)if(t[i]&&(t[i].trim()||n&&"\n\r".includes(t[i])||r&&t[i]===a))return i;return null}({str:t,idx:e,stopAtNewlines:!1,stopAtRawNbsp:!1})}function p(t,e,n,r,i){if("string"!=typeof e||!e.length)return null;if("number"!=typeof n&&(n=0),"right"===t&&!e[n+1]||"left"===t&&!e[~-n])return null;let o=n;const u=[];let l,c,s,f=0;for(;f<i.length;){if("string"!=typeof i[f]||!i[f].length){f+=1;continue}const{value:n,optional:a,hungry:p}=d(i[f]),y="right"===t?h(e,o):g(e,o);if(!(r.i&&e[y].toLowerCase()===n.toLowerCase()||!r.i&&e[y]===n)){if(a){f+=1;continue}if(s){f+=1,s=void 0;continue}return null}{const i="right"===t?h(e,y):g(e,y);p&&(r.i&&e[i].toLowerCase()===n.toLowerCase()||!r.i&&e[i]===n)?s=!0:f+=1,"number"==typeof y&&"right"===t&&y>o+1?u.push([o+1,y]):"left"===t&&"number"==typeof y&&y<~-o&&u.unshift([y+1,o]),o=y,"right"===t?(void 0===l&&(l=y),c=y):(void 0===c&&(c=y),l=y)}}return void 0===l||void 0===c?null:{gaps:u,leftmostChar:l,rightmostChar:c}}const y={i:!1};function v(t,e,...n){if(!n||!n.length)throw new Error("string-left-right/leftSeq(): only two input arguments were passed! Did you intend to use left() method instead?");let r;return r=s(n[0])?{...y,...n.shift()}:y,p("left",t,e,r,Array.from(n).reverse())}function _(t,e,...n){if(!n||!n.length)throw new Error("string-left-right/rightSeq(): only two input arguments were passed! Did you intend to use right() method instead?");let r;return r=s(n[0])?{...y,...n.shift()}:y,p("right",t,e,r,n)}function O(t){return"string"==typeof t}const m={CONFIGHEAD:"GENERATE-ATOMIC-CSS-CONFIG-STARTS",CONFIGTAIL:"GENERATE-ATOMIC-CSS-CONFIG-ENDS",CONTENTHEAD:"GENERATE-ATOMIC-CSS-CONTENT-STARTS",CONTENTTAIL:"GENERATE-ATOMIC-CSS-CONTENT-ENDS"},b=["px","em","%","rem","cm","mm","in","pt","pc","ex","ch","vw","vmin","vmax"],{CONFIGHEAD:$,CONFIGTAIL:w,CONTENTHEAD:j,CONTENTTAIL:A}=m,x=[":"];function T(t){let e=t,n="",r="";if(t.includes($)&&t.includes(w)){if(-1!==t.indexOf(w)&&-1!==t.indexOf(j)&&t.indexOf(w)>t.indexOf(j))throw new Error("generate-atomic-css: [THROW_ID_02] Config heads are after config tails!");let i=t.indexOf($)+$.length,o=t.indexOf(w);if("*"===t[h(t,i)]&&"/"===t[h(t,h(t,i))]&&(i=h(t,h(t,i))+1),"*"===t[g(t,o)]&&"/"===t[g(t,g(t,o))]&&(o=g(t,g(t,o))),e=t.slice(i,o).trim(),!O(e)||!e.trim().length)return[e,n,r]}else if(t.includes($)&&!t.includes(w)&&t.includes(j)){if(t.indexOf($)>t.indexOf(j))throw new Error("generate-atomic-css: [THROW_ID_03] Config heads are after content heads!");e=t.slice(t.indexOf($)+$.length,t.indexOf(j))}else if(t.includes($)||t.includes(w)||!t.includes(j)&&!t.includes(A)){const i=new RegExp(`(\\/\\s*\\*\\s*)*${j}(\\s*\\*\\s*\\/)*`),o=new RegExp(`(\\/\\s*\\*\\s*)*${A}(\\s*\\*\\s*\\/)*`);let u=!1;const l=[],c=[],s=t.split("\n").filter((t=>!!u||(t.includes("$$$")||t.includes("{")||t.includes(":")?(u=!0,!0):(l.push(t),!1))));for(let t=s.length;t--&&!(s[t].includes("$$$")||s[t].includes("}")||s[t].includes(":"));)c.unshift(s.pop());e=s.join("\n").replace(i,"").replace(o,""),l.length&&(n=`${l.join("\n")}\n`),c.length&&(r=`\n${c.join("\n")}`)}else if(e=t,e.includes(j)){if(g(t,e.indexOf(j))){let r=e.indexOf(j);v(t,r,"/","*")&&(r=v(t,r,"/","*").leftmostChar),n=0===r?"":t.slice(0,r)}let i=e.indexOf(j)+j.length;_(e,i-1,"*","/")&&(i=_(e,i-1,"*","/").rightmostChar+1);let o=null;if(t.includes(A)){o=t.indexOf(A),"*"===t[g(t,o)]&&"/"===t[g(t,g(t,o))]&&(o=g(t,g(t,o)));let e=t.indexOf(A)+A.length;"*"===t[h(t,e-1)]&&"/"===t[h(t,h(t,e-1))]&&(e=h(t,h(t,e-1))+1),h(t,e)&&(r=t.slice(e))}e=o?e.slice(i,o).trim():e.slice(i).trim()}else if(e.includes(A)){const i=[];let o=!1;e=e.split("\n").filter((t=>t.includes("$$$")||o?(o||(o=!0),!0):(o||i.push(t),!1))).join("\n");let u,l=e.indexOf(A);v(e,l,"/","*")&&(l=v(e,l,"/","*").leftmostChar),e=e.slice(0,l).trim(),i.length&&(n=`${i.join("\n")}\n`),h(t,t.indexOf(A)+A.length)&&(u=t.indexOf(A)+A.length,"*"===t[h(t,u)]&&"/"===t[h(t,h(t,u))]&&(u=h(t,h(t,u))+1,h(t,u)&&(r=t.slice(u))))}return[e,n,r]}function C(t,e=0,n=500){let r,i=e,o=n,u=t;if(t.lastIndexOf("}")>0&&t.slice(t.lastIndexOf("}")+1).includes("|")?r=t.slice(t.lastIndexOf("}")+1).split("|").filter((t=>t.trim().length)).map((t=>t.trim())).filter((t=>String(t).split("").every((t=>/\d/g.test(t))))):t.includes("|")&&(r=t.split("|").filter((t=>t.trim().length)).map((t=>t.trim())).filter((t=>String(t).split("").every((t=>/\d/g.test(t)))))),Array.isArray(r)&&(1===r.length?o=Number.parseInt(r[0],10):r.length>1&&(i=Number.parseInt(r[0],10),o=Number.parseInt(r[1],10))),t.lastIndexOf("}")>0&&t.slice(t.lastIndexOf("}")+1).includes("|")){if(u=t.slice(0,t.indexOf("|",t.lastIndexOf("}")+1)).trimEnd(),u.trim().startsWith("|"))for(;u.trim().startsWith("|");)u=u.trim().slice(1)}else{let e=null,n=!1,r=0,i=t.length,o=null;for(let u=0,l=t.length;u<l;u++)if("0123456789".includes(t[u])?null===o&&t[u].trim().length&&(o=!0):"|"!==t[u]&&t[u].trim().length&&(o=!1),!t[u+1]&&o&&e&&(i=e),"|"===t[u]){if(o&&e){i=e;break}e=u,o=null}else!n&&t[u].trim().length&&(n=!0,null!==e&&(r=e+1));u=t.slice(r,i).trimEnd()}return[i,o,u]}function E(t,e,n,r,i=!0,o,u){return function(t,e=!0){if(!e)return t;const n=Array.from(t);if(n.length&&O(n[0])&&!n[0].trim().length)do{n.shift()}while(O(n[0])&&!n[0].trim().length);if(n.length&&O(n[n.length-1])&&!n[n.length-1].trim().length)do{n.pop()}while(n&&n[n.length-1]&&!n[n.length-1].trim().length);return n}(t.split(/\r?\n/).map(((t,i,l)=>t.includes("$$$")?function(t,e,n,r,i,o){let u,l=0;const[c,s,f]=C(t,0,500),a=r-n;let d="";for(let t=c;t<=s;t++){let r=0,g=0;for(let e=0,n=f.length;e<n;e++){if(f[e].charCodeAt(0),"$"===f[e]&&"$"===f[e-1]&&"$"===f[e-2]){const n=f.slice(e+1);let i;if(0!==t||!b.some((t=>{if(n.startsWith(t))return i=t,!0}))||"{"!==f[h(f,e+i.length)]&&f[e+i.length+1].trim().length){let n;if(b.some((t=>{if(f.startsWith(t,e+1))return n=t,!0})),!f[e-3].trim().length||x.some((t=>f.slice(g,e-2).trim().endsWith(t)))){let r=0;0===t&&b.some((t=>(`${f.slice(g,e-2)}`.startsWith(t)&&(r=t.length),!0))),d+=`${f.slice(g+r,e-2)}${o?String(t).padStart(String(s).length+(0===t&&n?n.length:0)):t}`}else f[e+1].trim().length&&"{"!==f[h(f,e)]?(d+=`${f.slice(g,e-2)}${t}`,o&&(r=String(s).length-String(t).length)):d+=`${f.slice(g,e-2)}${o?String(t).padEnd(String(s).length+(0===t&&n?n.length:0)):t}`;g=e+1}else d+=`${f.slice(g,e-2)}${o?String(t).padStart(String(s).length-String(t).length+i.length+1):t}`,g=e+1+(i?i.length:0)}if("{"===f[e]&&o&&r&&(d+=`${f.slice(g,e)}${" ".repeat(r)}`,g=e,r=0),!f[e+1]){let e;const n=f.slice(g);0===t&&b.some((t=>{if(n.startsWith(t))return e=t,!0}))?d+=`${f.slice(g+e.length)}`:d+=`${f.slice(g)}`,d+=t!==s?"\n":""}}i.count+=1,"function"==typeof e&&(u=Math.floor(n+t/(s-c)*a),u!==l&&(l=u,e(u)))}return d}(t,e,n+(r-n)/l.length*i,n+(r-n)/l.length*(i+1),o,u):function(t,e){return/\.\w/g.test(t)&&(e.count+=1),t}(t,o))),i).join("\n")}const S={includeConfig:!0,includeHeadsAndTails:!0,pad:!0,configOverride:null,reportProgressFunc:null,reportProgressFuncFrom:0,reportProgressFuncTo:100};t.defaults=S,t.extractFromToSource=C,t.genAtomic=function(t,e){if("string"!=typeof t)throw new Error(`generate-atomic-css: [THROW_ID_01] First input argument must be a string! It was given as "${JSON.stringify(t,null,4)}" (type ${typeof t})`);const{CONFIGHEAD:n,CONFIGTAIL:r,CONTENTHEAD:i,CONTENTTAIL:o}=m,u={count:0},l={...S,...e};if(l.includeConfig&&!l.includeHeadsAndTails&&(l.includeHeadsAndTails=!0),!l.configOverride&&!t.includes("$$$")&&!t.includes(n)&&!t.includes(r)&&!t.includes(i)&&!t.includes(o)||l&&l.configOverride&&"string"==typeof l.configOverride&&!l.configOverride.includes("$$$")&&!l.configOverride.includes(n)&&!l.configOverride.includes(r)&&!l.configOverride.includes(i)&&!l.configOverride.includes(o))return{log:{count:0},result:t};let c="",s="",[f,a,d]=T(l.configOverride?l.configOverride:t);if("string"!=typeof f||!f.trim())return{log:{count:0},result:""};if((l.includeConfig||l.includeHeadsAndTails)&&(c=`${i} */\n`,l.includeConfig||(c=`/* ${c}`),s=`\n/* ${o} */`),l.includeConfig&&(c=`/* ${n}\n${f.trim()}\n${r}\n${c}`),t.includes(n)&&null!=g(t,t.indexOf(n))){let e=t.indexOf(n);"*"===t[g(t,e)]&&"/"===t[g(t,g(t,e))]&&(e=g(t,g(t,e)));let r="/* ";("/"===t[h(t,e-1)]&&"*"===t[h(t,h(t,e-1))]||c.trim().startsWith("/*"))&&(r=""),c=`${t.slice(0,e)}${r}${c}`}if(t.includes(r)&&h(t,t.indexOf(r)+r.length)){let e=t.indexOf(r)+r.length;if("*"===t[h(t,t.indexOf(r)+r.length)]&&"/"===t[h(t,h(t,t.indexOf(r)+r.length))]&&(e=h(t,h(t,t.indexOf(r)+r.length))+1),t.slice(h(t,e-1)).startsWith(i)){e=h(t,e)||0+i.length,"*"===t[h(t,e-1)]&&"/"===t[h(t,h(t,e-1))]&&(e=h(t,h(t,e-1))+1),t.includes(o)&&(e=t.indexOf(o)+o.length,"*"===t[h(t,e)]&&"/"===t[h(t,h(t,e))]&&(e=h(t,h(t,e))+1))}const n=t.slice(e);n.length&&n.includes(o)&&(e=t.indexOf(o)+o.length,"*"===t[h(t,e)]&&"/"===t[h(t,h(t,e))]&&(e=h(t,h(t,e))+1)),s=`${s}${t[e]&&h(t,e-1)?t.slice(e):""}`}if("string"==typeof a&&(c=`${a}${c}`),"string"==typeof d){if(d.trim().endsWith("/*")&&!d.trim().startsWith("*/")){let t="";"string"==typeof d&&d[0]&&!d[0].trim()&&(t=d.slice(0,h(d,0)||0)),d=`${t}/* ${d.trim()}`}s=`${s}${d}`}const p=`${function(t,e={}){return e.includeConfig||e.includeHeadsAndTails?t.trim():t}(`${c}${E(f,l.reportProgressFunc,l.reportProgressFuncFrom,l.reportProgressFuncTo,!0,u,l.pad)}${s}`,l)}\n`;return{log:{count:u.count},result:p}},t.headsAndTails=m,t.version="1.4.11",Object.defineProperty(t,"__esModule",{value:!0})}));
