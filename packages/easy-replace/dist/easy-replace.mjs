/**
 * easy-replace
 * Replace strings with optional lookarounds, but without regexes
 * Version: 4.0.11
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/easy-replace/
 */

const e="4.0.11";function t(e){function t(e){return null!=e}return t(e)&&"boolean"!=typeof e?Array.isArray(e)?e.filter((e=>t(e)&&"boolean"!=typeof e)).map((e=>String(e))).filter((e=>e.length>0)):[String(e)]:[""]}function r(e,t,r,i){let o=!0;const f=Array.from(e);for(let l=0,n=f.length;l<n;l++)if(i){if(f[l].toLowerCase()!==t[r-Array.from(e).length+l].toLowerCase()){o=!1;break}}else if(f[l]!==t[r-Array.from(e).length+l]){o=!1;break}return o}function i(e,t,r,i){let o=!0;const f=Array.from(e);for(let e=0,l=f.length;e<l;e++)if(i){if(f[e].toLowerCase()!==t[r+e].toLowerCase()){o=!1;break}}else if(f[e]!==t[r+e]){o=!1;break}return o}function o(e,o,f){const l={i:{leftOutsideNot:!1,leftOutside:!1,leftMaybe:!1,searchFor:!1,rightMaybe:!1,rightOutside:!1,rightOutsideNot:!1},...o},n=t(e);l.leftOutsideNot=t(l.leftOutsideNot),l.leftOutside=t(l.leftOutside),l.leftMaybe=t(l.leftMaybe),l.searchFor=String(l.searchFor),l.rightMaybe=t(l.rightMaybe),l.rightOutside=t(l.rightOutside),l.rightOutsideNot=t(l.rightOutsideNot);const s=t(f),h=Array.from(n[0]);let a,g,u,c;const y=[];let d="";const b=function(e,t,r){function i(e){return null!=e}if("string"!=typeof e||0===e.length||"string"!=typeof t||0===t.length)return[];const o=[],f=Array.from(e),l=Array.from(t);let n;for(let e=0;e<f.length;e++)if(r&&r.i){if(f[e].toLowerCase()===l[0].toLowerCase()){n=!0;for(let t=0;t<l.length;t++)if(!i(f[e+t])||!i(l[t])||f[e+t].toLowerCase()!==l[t].toLowerCase()){n=!1;break}n&&o.push(e)}}else if(f[e]===l[0]){n=!0;for(let t=0;t<l.length;t++)if(f[e+t]!==l[t]){n=!1;break}n&&o.push(e)}return o}(n[0],l.searchFor,{i:l.i.searchFor});for(let e=0,t=b.length;e<t;e++){const t=b[e];if(a=t,g=t+Array.from(l.searchFor).length,l.leftMaybe.length>0)for(let e=0,r=l.leftMaybe.length;e<r;e++){u=!0;const r=Array.from(l.leftMaybe[e]);for(let e=0,i=r.length;e<i;e++)if(l.i.leftMaybe){if(r[e].toLowerCase()!==h[t-r.length+e].toLowerCase()){u=!1;break}}else if(r[e]!==h[t-r.length+e]){u=!1;break}u&&t-r.length<a&&(a=t-r.length)}if(l.rightMaybe.length>0)for(let e=0,r=l.rightMaybe.length;e<r;e++){u=!0;const r=Array.from(l.rightMaybe[e]);for(let e=0,i=r.length;e<i;e++)if(l.i.rightMaybe){if(r[e].toLowerCase()!==h[t+Array.from(l.searchFor).length+e].toLowerCase()){u=!1;break}}else if(r[e]!==h[t+Array.from(l.searchFor).length+e]){u=!1;break}u&&g<t+Array.from(l.searchFor).length+r.length&&(g=t+Array.from(l.searchFor).length+r.length)}if(""!==l.leftOutside[0]){c=!1;for(let e=0,t=l.leftOutside.length;e<t;e++)u=r(l.leftOutside[e],h,a,l.i.leftOutside),u&&(c=!0);if(!c)continue}if(""!==l.rightOutside[0]){c=!1;for(let e=0,t=l.rightOutside.length;e<t;e++)u=i(l.rightOutside[e],h,g,l.i.rightOutside),u&&(c=!0);if(!c)continue}if(""!==l.leftOutsideNot[0]){for(let e=0,t=l.leftOutsideNot.length;e<t;e++)if(u=r(l.leftOutsideNot[e],h,a,l.i.leftOutsideNot),u){a=-1,g=-1;break}if(-1===a)continue}if(""!==l.rightOutsideNot[0]){for(let e=0,t=l.rightOutsideNot.length;e<t;e++)if(u=i(l.rightOutsideNot[e],h,g,l.i.rightOutsideNot),u){a=-1,g=-1;break}if(-1===a)continue}y.push([a,g])}return y.length>0?(y.forEach(((e,t)=>{void 0!==y[t+1]&&y[t][1]>y[t+1][0]&&(y[t+1][0]=y[t][1])})),y.forEach(((e,t)=>{e[0]===e[1]&&y.splice(t,1)})),y.length>0&&0!==y[0][0]&&(d+=h.slice(0,y[0][0]).join("")),y.forEach(((e,t)=>{d+=s.join(""),d+=void 0!==y[t+1]?h.slice(y[t][1],y[t+1][0]).join(""):h.slice(y[t][1]).join("")})),d):n.join("")}export{o as er,e as version};
