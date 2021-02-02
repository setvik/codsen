/**
 * check-types-mini
 * Validate options object
 * Version: 6.0.2
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/check-types-mini/
 */

import e from"type-detect";import t from"lodash.pullall";import{traverse as r}from"ast-monkey-traverse";import s from"lodash.intersection";import{arrayiffy as o}from"arrayiffy-if-string";import n from"object-path";import a from"matcher";const i={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};function c(c,h,y){return function(c,h,y){function m(e){return null!=e}function p(t){return"Object"===e(t)}function g(e,t){return"string"==typeof t&&(t=o(t)),Array.from(e).filter((e=>!t.some((t=>a.isMatch(e,t,{caseSensitive:!0})))))}const l=Object.prototype.hasOwnProperty,f=["any","anything","every","everything","all","whatever","whatevs"];if(!m(c))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const $={...i,...y};if("string"==typeof $.ignoreKeys&&($.ignoreKeys=[$.ignoreKeys]),"string"==typeof $.ignorePaths&&($.ignorePaths=[$.ignorePaths]),"string"==typeof $.acceptArraysIgnore&&($.acceptArraysIgnore=[$.acceptArraysIgnore]),$.msg=`${$.msg}`.trim(),":"===$.msg[$.msg.length-1]&&($.msg=$.msg.slice(0,$.msg.length-1).trim()),p($.schema))Object.keys($.schema).forEach((e=>{if(p($.schema[e])){const t={};r($.schema[e],((r,s,o)=>{const n=void 0!==s?s:r;return Array.isArray(n)||p(n)||(t[`${e}.${o.path}`]=n),n})),delete $.schema[e],$.schema={...$.schema,...t}}})),Object.keys($.schema).forEach((e=>{Array.isArray($.schema[e])||($.schema[e]=[$.schema[e]]),$.schema[e]=$.schema[e].map((e=>`${e}`.toLowerCase().trim()))}));else if(null!=$.schema)throw new Error(`check-types-mini: opts.schema was customised to ${JSON.stringify($.schema,null,0)} which is not object but ${typeof $.schema}`);if(m(h)||(h={}),$.enforceStrictKeyset)if(m($.schema)&&Object.keys($.schema).length>0){if(h&&g(t(Object.keys(c),Object.keys(h).concat(Object.keys($.schema))),$.ignoreKeys).length){const e=t(Object.keys(c),Object.keys(h).concat(Object.keys($.schema)));throw new TypeError(`${$.msg}: ${$.optsVarName}.enforceStrictKeyset is on and the following key${e.length>1?"s":""} ${e.length>1?"are":"is"} not covered by schema and/or reference objects: ${e.join(", ")}`)}}else{if(!(p(h)&&Object.keys(h).length>0))throw new TypeError(`${$.msg}: Both ${$.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==g(t(Object.keys(c),Object.keys(h)),$.ignoreKeys).length){const e=t(Object.keys(c),Object.keys(h));throw new TypeError(`${$.msg}: The input object has key${e.length>1?"s":""} which ${e.length>1?"are":"is"} not covered by the reference object: ${e.join(", ")}`)}if(0!==g(t(Object.keys(h),Object.keys(c)),$.ignoreKeys).length){const e=t(Object.keys(h),Object.keys(c));throw new TypeError(`${$.msg}: The reference object has key${e.length>1?"s":""} which ${e.length>1?"are":"is"} not present in the input object: ${e.join(", ")}`)}}const u=[];r(c,((t,r,i)=>{let y=r,m=t;if("array"===i.parentType&&(m=void 0,y=t),Array.isArray(u)&&u.length&&u.some((e=>i.path.startsWith(e))))return y;if(m&&$.ignoreKeys.some((e=>a.isMatch(m,e))))return y;if($.ignorePaths.some((e=>a.isMatch(i.path,e))))return y;const g=!(!p(y)&&!Array.isArray(y)&&Array.isArray(i.parent));let w=!1;p($.schema)&&l.call($.schema,i.path)&&(w=!0);let b=!1;if(p(h)&&n.has(h,i.path)&&(b=!0),$.enforceStrictKeyset&&g&&!w&&!b)throw new TypeError(`${$.msg}: ${$.optsVarName}.${i.path} is neither covered by reference object (second input argument), nor ${$.optsVarName}.schema! To stop this error, turn off ${$.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${$.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(c,null,4)}\n\nref = ${JSON.stringify(h,null,4)}\n\ninnerObj = ${JSON.stringify(i,null,4)}\n\nopts = ${JSON.stringify($,null,4)}\n\ncurrent = ${JSON.stringify(y,null,4)}\n\n`);if(w){const t=o($.schema[i.path]).map((e=>`${e}`.toLowerCase()));if(n.set($.schema,i.path,t),s(t,f).length)u.push(i.path);else if(!0!==y&&!1!==y&&!t.includes(e(y).toLowerCase())||(!0===y||!1===y)&&!t.includes(String(y))&&!t.includes("boolean")){if(!Array.isArray(y)||!$.acceptArrays)throw new TypeError(`${$.msg}: ${$.optsVarName}.${i.path} was customised to ${"string"!==e(y)?'"':""}${JSON.stringify(y,null,0)}${"string"!==e(y)?'"':""} (type: ${e(y).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let r=0,s=y.length;r<s;r++)if(!t.includes(e(y[r]).toLowerCase()))throw new TypeError(`${$.msg}: ${$.optsVarName}.${i.path}.${r}, the ${r}th element (equal to ${JSON.stringify(y[r],null,0)}) is of a type ${e(y[r]).toLowerCase()}, but only the following are allowed by the ${$.optsVarName}.schema: ${t.join(", ")}`)}}else if(h&&p(h)&&b){const r=n.get(h,i.path);if($.acceptArrays&&Array.isArray(y)&&!$.acceptArraysIgnore.includes(t)){if(!y.every((r=>e(r).toLowerCase()===e(h[t]).toLowerCase())))throw new TypeError(`${$.msg}: ${$.optsVarName}.${i.path} was customised to be array, but not all of its elements are ${e(h[t]).toLowerCase()}-type`)}else if(e(y)!==e(r))throw new TypeError(`${$.msg}: ${$.optsVarName}.${i.path} was customised to ${"string"===e(y).toLowerCase()?"":'"'}${JSON.stringify(y,null,0)}${"string"===e(y).toLowerCase()?"":'"'} which is not ${e(r).toLowerCase()} but ${e(y).toLowerCase()}`)}return y}))}(c,h,y)}export{c as checkTypesMini};
