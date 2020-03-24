/**
 * is-html-tag-opening
 * Is given opening bracket a beginning of a tag?
 * Version: 1.7.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/is-html-tag-opening
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).isHtmlTagOpening=e()}(this,(function(){"use strict";function t(t){return t&&"object"==typeof t&&!Array.isArray(t)}function e(t){return"string"==typeof t}function r(t,e,r,n,i,a){const o="function"==typeof r?r():r;if(e<0&&i&&"EOL"===o)return o;if(e>=t.length&&!i)return!1;let s=i?1:r.length,c=!1,h=!1,f=n.maxMismatches,g=e,l=!1,u=!1,m=!1;for(;t[g];){const e=a(g);if(n.trimBeforeMatching&&""===t[g].trim()){if(!t[e]&&i&&"EOL"===r)return!0;g=a(g);continue}if(!n.i&&n.trimCharsBeforeMatching.includes(t[g])||n.i&&n.trimCharsBeforeMatching.map(t=>t.toLowerCase()).includes(t[g].toLowerCase())){if(i&&"EOL"===r&&!t[e])return!0;g=a(g);continue}const o=e>g?r[r.length-s]:r[s-1];if(!n.i&&t[g]===o||n.i&&t[g].toLowerCase()===o.toLowerCase()){if(l||(l=!0),h||(h=!0),s===r.length?u=!0:1===s&&(m=!0),s-=1,s<1)return g}else{if(!(n.maxMismatches&&f&&g))return!(0!==g||1!==s||n.lastMustMatch||!h)&&0;f--;for(let i=0;i<=f;i++){const o=e>g?r[r.length-s+1+i]:r[s-2-i],c=t[a(g)];if(o&&(!n.i&&t[g]===o||n.i&&t[g].toLowerCase()===o.toLowerCase())&&(!n.firstMustMatch||s!==r.length)){s-=2,l=!0;break}if(c&&o&&(!n.i&&c===o||n.i&&c.toLowerCase()===o.toLowerCase())&&(!n.firstMustMatch||s!==r.length)){s-=1,l=!0;break}if(void 0===o&&f>=0&&l&&(!n.firstMustMatch||u)&&(!n.lastMustMatch||m))return g}l||(c=g)}if(!1!==c&&c!==g&&(c=!1),s<1)return g;g=a(g)}return s>0?!(!i||"EOL"!==o)||!!(n.maxMismatches>=s&&h)&&(c||0):void 0}function n(n,i,a,o,s){if(t(s)&&Object.prototype.hasOwnProperty.call(s,"trimBeforeMatching")&&"boolean"!=typeof s.trimBeforeMatching)throw new Error(`string-match-left-right/${n}(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!${Array.isArray(s.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""}`);const c=Object.assign({},{i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],maxMismatches:0,firstMustMatch:!1,lastMustMatch:!1},s);var h;if(c.trimCharsBeforeMatching="string"==typeof(h=c.trimCharsBeforeMatching)?h.length>0?[h]:[]:h,c.trimCharsBeforeMatching=c.trimCharsBeforeMatching.map(t=>e(t)?t:String(t)),!e(i))return!1;if(!i.length)return!1;if(!Number.isInteger(a)||a<0)throw new Error(`string-match-left-right/${n}(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ${typeof a}, equal to:\n${JSON.stringify(a,null,4)}`);let f,g,l,u;if(e(o))f=[o];else if(Array.isArray(o))f=o;else if(o){if("function"!=typeof o)throw new Error(`string-match-left-right/${n}(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ${typeof o}, equal to:\n${JSON.stringify(o,null,4)}`);f=[],f.push(o)}else f=o;if(s&&!t(s))throw new Error(`string-match-left-right/${n}(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type "${typeof s}", and equal to:\n${JSON.stringify(s,null,4)}`);if(c.trimCharsBeforeMatching.some((t,e)=>t.length>1&&(l=e,u=t,!0)))throw new Error(`string-match-left-right/${n}(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ${l} is longer than 1 character, ${u.length} (equals to ${u}). Please split it into separate characters and put into array as separate elements.`);if(!f||!Array.isArray(f)||Array.isArray(f)&&!f.length||Array.isArray(f)&&1===f.length&&e(f[0])&&!f[0].trim().length){if("function"==typeof c.cb){let t,e=a;if("matchLeftIncl"!==n&&"matchRight"!==n||(e+=1),"L"===n[5])for(let r=e;r--;){const e=i[r];if((!c.trimBeforeMatching||c.trimBeforeMatching&&void 0!==e&&e.trim().length)&&(!c.trimCharsBeforeMatching.length||void 0!==e&&!c.trimCharsBeforeMatching.includes(e))){t=r;break}}else if(n.startsWith("matchRight"))for(let r=e;r<i.length;r++){const e=i[r];if((!c.trimBeforeMatching||c.trimBeforeMatching&&e.trim().length)&&(!c.trimCharsBeforeMatching.length||!c.trimCharsBeforeMatching.includes(e))){t=r;break}}if(void 0===t)return!1;const r=i[t],o=t+1;let s="";return o&&o>0&&(s=i.slice(0,o)),"L"===n[5]?c.cb(r,s,t):(t&&t>0&&(s=i.slice(t)),c.cb(r,s,t))}let t="";throw s||(t=" More so, the whole options object, the fourth input argument, is missing!"),new Error(`string-match-left-right/${n}(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!${t}`)}for(let t=0,e=f.length;t<e;t++){g="function"==typeof f[t];const e=f[t];let o,s,h="",l=a;"matchRight"===n?l++:"matchLeft"===n&&l--;const u=r(i,l,e,c,g,t=>"L"===n[5]?t-1:t+1);if(u&&g&&"function"==typeof e&&"EOL"===e())return!(!e()||c.cb&&!c.cb(o,h,s))&&e();if(Number.isInteger(u)&&(s=n.startsWith("matchLeft")?u-1:u+1,h="L"===n[5]?i.slice(0,u):i.slice(s)),s<0&&(s=void 0),i[s]&&(o=i[s]),Number.isInteger(u)&&(!c.cb||c.cb(o,h,s)))return e}return!1}function i(t,e,r,i){return n("matchRightIncl",t,e,r,i)}function a(t,e,r,i){return n("matchRight",t,e,r,i)}var o=["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","doctype","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h1 - h6","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xml"];function s(t){return"string"==typeof t}function c(t){return void 0===t||t.toUpperCase()===t.toLowerCase()&&!"0123456789".includes(t)&&"="!==t}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0,n={allowCustomTagNames:!1,skipOpeningBracket:!1},h=Object.assign({},n,r),f="[\\\\ \\t\\r\\n/]*",g="._a-z0-9·À-ÖØ-öø-ͽͿ-῿‌-‍‿-⁀⁰-￿",l=new RegExp("^".concat(h.skipOpeningBracket?"":"<").concat(f,"\\w+").concat(f,">"),"g"),u=new RegExp("^".concat(h.skipOpeningBracket?"":"<").concat(f,"[").concat(g,"]+[-").concat(g,"]*").concat(f,">"),"g"),m=new RegExp("^".concat(h.skipOpeningBracket?"":"<","\\s*\\w+\\s+\\w+(?:-\\w+)?\\s*=\\s*['\"\\w]"),"g"),p=new RegExp("^".concat(h.skipOpeningBracket?"":"<","\\s*\\w+\\s+[").concat(g,"]+[-").concat(g,"]*(?:-\\w+)?\\s*=\\s*['\"\\w]")),d=new RegExp("^".concat(h.skipOpeningBracket?"":"<","\\s*\\/?\\s*\\w+\\s*\\/?\\s*>"),"g"),b=new RegExp("^".concat(h.skipOpeningBracket?"":"<","\\s*\\/?\\s*[").concat(g,"]+[-").concat(g,"]*\\s*\\/?\\s*>"),"g"),w=new RegExp("^".concat(h.skipOpeningBracket?"":"<").concat(f,"\\w+(?:\\s*\\w+)*\\s*\\w+=['\"]"),"g"),y=new RegExp("^".concat(h.skipOpeningBracket?"":"<").concat(f,"[").concat(g,"]+[-").concat(g,"]*(?:\\s*\\w+)*\\s*\\w+=['\"]"),"g"),M=e?t.slice(e):t,B=!1,k={cb:c,i:!0,trimCharsBeforeMatching:["/","\\","!"," ","\t","\n","\r"]};h.allowCustomTagNames?(u.test(M)||p.test(M)||b.test(M)||y.test(M))&&(B=!0):i(t,e,o,{cb:c,i:!0,trimCharsBeforeMatching:["<","/","\\","!"," ","\t","\n","\r"]})&&(l.test(M)||m.test(M)||d.test(M)||w.test(M))&&(B=!0),!B&&!h.skipOpeningBracket&&"<"===t[e]&&t[e+1].trim().length&&a(t,e,o,k)&&(B=!0);var C=s(t)&&e<t.length&&B;return C}}));
