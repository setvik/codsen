/**
 * email-comb
 * Remove unused CSS from email templates
 * Version: 5.0.11
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/email-comb/
 */

import{matchRightIncl as e,matchLeft as t,matchRight as r}from"string-match-left-right";import{emptyCondCommentRegex as n}from"regex-empty-conditional-comments";import{extract as l}from"string-extract-class-names";import{pull as i}from"array-pull-all-with-glob";import{left as s,right as o}from"string-left-right";import a from"lodash.intersection";import{expander as u}from"string-range-expander";import{uglifyArr as c}from"string-uglify";import{rApply as h}from"ranges-apply";import f from"lodash.pullall";import{crush as m}from"html-crush";import{Ranges as g}from"ranges-push";import p from"lodash.uniq";import d from"matcher";const y=/[\n]?\s*<style[^>]*>\s*<\/style\s*>/g,T=/[\n]?\s*@(media|supports|document)[^{]*{\s*}/g,v=/@media[^{@}]+{(?=\s*<\/style>)/g;function S(e){return e&&"object"==typeof e&&!Array.isArray(e)}function w(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function C(e){return"string"==typeof e&&1===e.length&&(e.charCodeAt(0)>64&&e.charCodeAt(0)<91||e.charCodeAt(0)>96&&e.charCodeAt(0)<123)}const b="5.0.11",O={whitelist:[],backend:[],uglify:!1,removeHTMLComments:!0,removeCSSComments:!0,doNotRemoveHTMLCommentsWhoseOpeningTagContains:["[if","[endif"],reportProgressFunc:null,reportProgressFuncFrom:0,reportProgressFuncTo:100};function A(b,A){const M=Date.now(),F=new g({limitToBeAddedWhitespace:!0}),L=new g,P=new g;function W(e){return/[-_A-Za-z0-9]/.test(e)}function R(e={}){return{valuesStart:null,valueStart:null,nameStart:null,quoteless:!1,...e}}let k,H;const I=[],N=[],$=[];let _,x,B,E,D;const q={};let J,j,U,z,Z,G,K,Q,V,X,Y,ee=0,te=null,re=[],ne=0,le=0,ie=0,se=!1,oe=null,ae=!1,ue=0,ce=0;const he=".# ~\\!@$%^&*()+=,/';:\"?><[]{}|`\t\n",fe=["media","supports","document"],me=["font-feature-values","counter-style","namespace","font-face","keyframes","viewport","charset","import","page"],ge=["{","(","<",'"',"'","@",";"];if("string"!=typeof b)throw new TypeError("email-comb: [THROW_ID_01] Input must be string! Currently it's "+typeof b);if(A&&!S(A))throw new TypeError(`email-comb: [THROW_ID_02] Options, second input argument, must be a plain object! Currently it's ${typeof A}, equal to: ${JSON.stringify(A,null,4)}`);const pe={...O,...A};if("string"==typeof pe.doNotRemoveHTMLCommentsWhoseOpeningTagContains&&(pe.doNotRemoveHTMLCommentsWhoseOpeningTagContains=[pe.doNotRemoveHTMLCommentsWhoseOpeningTagContains].filter((e=>e.trim()))),"string"==typeof pe.whitelist)pe.whitelist=[pe.whitelist];else if(!Array.isArray(pe.whitelist))throw new TypeError(`email-comb: [THROW_ID_03] opts.whitelist should be an array, but it was customised to a wrong thing, ${JSON.stringify(pe.whitelist,null,4)}`);if(pe.whitelist.length>0&&!pe.whitelist.every((e=>"string"==typeof e)))throw new TypeError(`email-comb: [THROW_ID_04] opts.whitelist array should contain only string-type elements. Currently we\ve got:\n${JSON.stringify(pe.whitelist,null,4)}`);if(!Array.isArray(pe.backend))throw new TypeError(`email-comb: [THROW_ID_05] opts.backend should be an array, but it was customised to a wrong thing, ${JSON.stringify(pe.backend,null,4)}`);if(pe.backend.length>0&&pe.backend.some((e=>!S(e))))throw new TypeError(`email-comb: [THROW_ID_06] opts.backend array should contain only plain objects but it contains something else:\n${JSON.stringify(pe.backend,null,4)}`);if(pe.backend.length>0&&!pe.backend.every((e=>w(e,"heads")&&w(e,"tails"))))throw new TypeError(`email-comb: [THROW_ID_07] every object within opts.backend should contain keys "heads" and "tails" but currently it's not the case. Whole "opts.backend" value array is currently equal to:\n${JSON.stringify(pe.backend,null,4)}`);if("boolean"!=typeof pe.uglify){if(1!==pe.uglify&&0!==pe.uglify)throw new TypeError(`email-comb: [THROW_ID_08] opts.uglify should be a Boolean. Currently it's set to: ${JSON.stringify(pe.uglify,null,4)}}`);pe.uglify=!!pe.uglify}if(pe.reportProgressFunc&&"function"!=typeof pe.reportProgressFunc)throw new TypeError(`email-comb: [THROW_ID_09] opts.reportProgressFunc should be a function but it was given as :\n${JSON.stringify(pe.reportProgressFunc,null,4)} (${typeof pe.reportProgressFunc})`);let de=null,ye=null;Array.isArray(pe.backend)&&pe.backend.length&&(de=pe.backend.map((e=>e.heads)),ye=pe.backend.map((e=>e.tails)));const Te=b.length;let ve=1;pe.reportProgressFunc&&(ve=Math.floor((pe.reportProgressFuncTo-.06*(pe.reportProgressFuncTo-pe.reportProgressFuncFrom)-pe.reportProgressFuncFrom)/2));let Se,we,Ce=0;b.length&&"\r\n".includes(b[b.length-1])||(Ce=1);let be,Oe,Ae,Me,Fe,Le,Pe,We,Re=[],ke=[],He=[],Ie=[],Ne={},$e=[],_e=0,xe=[],Be=[],Ee=[];for(let n=1;n<=2;n++){J=!1,G=null,se=!1,X=!0,V=!0,E=R(),U=!0,ae=!1,K=null,D=R(),x=null,oe=null,Ae=null,Oe=!1,Me=null,j=!1,Z=null,Fe=!1,_=null,we=null,k=null,B=null,Le=null,H=null,Se=!1,ee+=Te;e:for(let l=0;l<Te;l++){pe.reportProgressFunc&&(Te>1e3&&Te<2e3?1===n&&0===l&&pe.reportProgressFunc(Math.floor((pe.reportProgressFuncTo-pe.reportProgressFuncFrom)/2)):Te>=2e3&&(be=pe.reportProgressFuncFrom+Math.floor(l/Te*ve)+(1===n?0:ve),be!==_e&&(_e=be,pe.reportProgressFunc(be))));const i=b[l];if(!0!==Oe&&(null===H&&null!==k&&l>=k||null!==k&&null!==H&&k>H&&k<l)?(Oe=!0,Fe=!1):!0!==Fe&&null!==B&&(null===k||k<l)&&(null===H||H<l)&&(Fe=!0,Oe=!1),!Se&&('"'===b[l]||"'"===b[l]))if(Ae){if('"'===b[l]&&"'"===b[o(b,l)]&&'"'===b[o(b,o(b,l))]||"'"===b[l]&&'"'===b[o(b,l)]&&"'"===b[o(b,o(b,l))]){l=o(b,o(b,l));continue}Ae===b[l]&&(Ae=null)}else{const e=s(b,l);"number"==typeof e&&(Oe&&["(",",",":"].includes(b[e])||Fe&&!Oe&&["(",",",":","="].includes(b[e]))&&(Ae=b[l])}if(Se)if(null===we||"string"!=typeof we||"string"==typeof we&&!we)Se=!1;else if(e(b,l,we)){if(null!==_){if(1===n&&pe.removeCSSComments){const e=t(b,_,["\r\n","\n","\r"]);let r=_;"string"==typeof e&&e.length&&(r-=e.length),b[r-1]&&W(b[r-1])&&b[l+we.length]&&W(b[l+we.length])?(F.push(r,l+we.length,";"),ce+=l+we.length-r):(F.push(r,l+we.length),ce+=l+we.length-r)}_=null}l=l+we.length-1,we=null,Se=!1;continue}if(!Se&&"<"===b[l]&&"s"===b[l+1]&&"t"===b[l+2]&&"y"===b[l+3]&&"l"===b[l+4]&&"e"===b[l+5]){J=!0,Oe||(Oe=!0);for(let e=l;e<Te;e++)if(ee+=1,">"===b[e]){k=e+1,Z=e+1;break}}if(!Se&&Oe&&"<"===b[l]&&"/"===b[l+1]&&"s"===b[l+2]&&"t"===b[l+3]&&"y"===b[l+4]&&"l"===b[l+5]&&"e"===b[l+6]&&(H=l-1,Z=null,J=!1,Oe&&(Oe=!1)),1!==n||!Oe&&!Fe||"/"!==b[l]||"*"!==b[l+1]||null!==_){if(!Se&&Oe&&"@"===b[l]){Me&&(Me=null);const e=r(b,l,fe)||r(b,l,me);if("string"==typeof e){let t,i;(";"===b[l+e.length+1]||b[l+e.length+1]&&!b[l+e.length+1].trim()&&r(b,l+e.length+1,";",{trimBeforeMatching:!0,cb:(e,r,n)=>(t=n,!0)}))&&F.push(l,t||l+e.length+2);for(let t=l+1;t<Te;t++)if(ee+=1,i&&b[t]===i){if("}"===b[t]&&me.includes(e)||"{"===b[t]&&fe.includes(e)){l=t,Z=t+1;continue e}i=void 0}else if('"'!==b[t]||i?"'"!==b[t]||i?"("!==b[t]||i?me.includes(e)&&"{"===b[t]&&!i&&(i="}"):i=")":i="'":i='"',!i&&ge.includes(b[t])){let e,r;if("{"===b[t]||";"===b[t]){j=!1,Z=t+1,l=t;continue e}"@"!==b[t]&&"<"!==b[t]||1!==n||b.slice(l,t).includes("{")||b.slice(l,t).includes("(")||b.slice(l,t).includes('"')||b.slice(l,t).includes("'")||(e=l,r=t+(";"===b[t]?1:0),F.push(e,r));const i=r?r-1:t-1+("{"===b[t]?1:0);l=i,Z=i+1;continue e}}}if(!Se&&Oe&&j&&J&&"}"===i&&!Ae&&!ie&&(2===n&&V&&Z&&F.push(Z,l+1),j=!1,Z&&(Z=l+1),G=null,se=!1,V=!0,K=null,oe=null,ae=!1),!Se&&!_&&k&&l>=k&&(null===H&&l>=k||H&&k>H&&k<=l)&&!j){if(null===K){if("."===i||"#"===i)K=l;else if(t(b,l,"[class="))C(i)?(K=l,Q="."):"\"'".includes(i)&&C(b[o(b,l)])&&(K=o(b,l),Q=".");else if(t(b,l,"[id="))C(i)?(K=l,Q="#"):"\"'".includes(i)&&C(b[o(b,l)])&&(K=o(b,l),Q="#");else if(i.trim())if("}"===i)Z=l+1,Le=null;else if("<"===i&&"!"===b[l+1])for(let e=l;e<Te;e++)if(ee+=1,">"===b[e]){Z=e+1,G=e+1,l=e;continue e}}else if(null!==K&&!W(i)){let e=b.slice(K,l);Q&&(e=`${Q}${e}`,Q=void 0),2===n&&!se&&Ee.includes(e)?(se=!0,ae=!0):2!==n||se||(!pe.uglify||Array.isArray(pe.whitelist)&&pe.whitelist.length&&d([e],pe.whitelist).length||L.push(K,l,re[ke.indexOf(e)]),","===i&&(oe=l,ae=!1)),K="."===i||"#"===i?l:null}if(null===G)!i.trim()||"}"===i||";"===i||"/"===b[l]&&"*"===b[l+1]||(se=!1,G=l);else if(",{".includes(i)){if(Le=b.slice(G,Me||l),1===n)Me&&(","===i&&Me<l?(F.push(Me,l),ue+=l-Me):"{"===i&&Me<l-1&&(F.push(Me,l-1),ue+=l-1-Me)),I.push(Le);else if(se){let e=G,r=l,n=0;if("{"===i&&">"!==b[e-1]&&"}"!==b[e-1]){for(let t=G;t--;)if(ee+=1,b[t].trim()&&","!==b[t]){e=t+1;break}b[l-1].trim()||(r=l-1)}else if(","!==i||b[l+1].trim())t(b,e,"{",{trimBeforeMatching:!0,cb:(e,t,r)=>(n=r,!0)})&&(e=n+2);else for(let e=l+1;e<Te;e++)if(ee+=1,b[e].trim()){r=e;break}const s=u({str:b,from:e,to:r,ifRightSideIncludesThisThenCropTightly:".#",ifRightSideIncludesThisCropItToo:",",extendToOneSide:"right"});F.push(...s),pe.uglify&&L.wipe()}else V&&(V=!1),ae&&(ae=!1),pe.uglify&&(F.push(L.current()),L.wipe());if("{"!==i)G=null;else if(2===n&&!V&&null!==oe&&ae){let e=oe+1;if("\n\r".includes(b[oe+1]))for(let t=oe+1;t<Te;t++)if(b[t].trim()){e=t;break}F.push(oe,e),oe=null,ae=!1}}}if(!Se&&!Oe&&Fe&&"/"===b[l]&&r(b,l,"body",{trimBeforeMatching:!0,i:!0})&&t(b,l,"<",{trimBeforeMatching:!0})&&(Fe=!1,B=null),!Se&&"<"===b[l]&&r(b,l,"body",{i:!0,trimBeforeMatching:!0,cb:(e,t,r)=>{if(1===n){if(void 0!==e&&(""===e.trim()||">"===e)&&"number"==typeof r){if(!(r-l>5))return!0;F.push(l,r,"<body"),ue+=r-l-5}return!0}return!0}}))for(let e=l;e<Te;e++)if(ee+=1,">"===b[e]){B=e+1;break}if(!Se&&Fe&&!Oe&&"s"===b[l]&&"t"===b[l+1]&&"y"===b[l+2]&&"l"===b[l+3]&&"e"===b[l+4]&&"="===b[l+5]&&he.includes(b[l-1])&&"\"'".includes(b[l+6]),!Se&&Fe&&!Oe&&!Ae&&"c"===b[l]&&"l"===b[l+1]&&"a"===b[l+2]&&"s"===b[l+3]&&"s"===b[l+4]&&b[l-1]&&!b[l-1].trim()){let e,t=!1;if("="===b[l+5]){if('"'===b[l+6]||"'"===b[l+6])e=l+7;else if(W(b[l+6]))e=l+6,t=!0;else if(b[l+6]&&(!b[l+6].trim()||"/>".includes(b[l+6]))){const e=u({str:b,from:l,to:l+6,ifRightSideIncludesThisThenCropTightly:"/>",wipeAllWhitespaceOnLeft:!0});F.push(...e)}}else if(!b[l+5].trim())for(let t=l+5;t<Te;t++)if(ee+=1,b[t].trim()){if("="===b[t])if(t>l+5&&1===n&&F.push(l+5,t),'"'!==b[t+1]&&"'"!==b[t+1]||!b[t+2]){if(b[t+1]&&!b[t+1].trim())for(let r=t+1;r<Te;r++)if(ee+=1,b[r].trim()){r>t+1&&1===n&&F.push(t+1,r),'"'!==b[r]&&"'"!==b[r]||!b[r+1]||(e=r+1);break}}else e=t+2;break}e&&(E=R({valuesStart:e,quoteless:t,nameStart:l}),1===n?U=!0:2===n&&(X=!0))}if(!Se&&Fe&&!Oe&&!Ae&&"i"===b[l]&&"d"===b[l+1]&&b[l-1]&&!b[l-1].trim()){let e,t=!1;if("="===b[l+2]){if('"'===b[l+3]||"'"===b[l+3])e=l+4;else if(W(b[l+3]))e=l+3,t=!0;else if(b[l+3]&&(!b[l+3].trim()||"/>".includes(b[l+3]))){const e=u({str:b,from:l,to:l+3,ifRightSideIncludesThisThenCropTightly:"/>",wipeAllWhitespaceOnLeft:!0});F.push(...e)}}else if(!b[l+2].trim())for(let t=l+2;t<Te;t++)if(ee+=1,b[t].trim()){if("="===b[t])if(t>l+2&&1===n&&F.push(l+2,t),'"'!==b[t+1]&&"'"!==b[t+1]||!b[t+2]){if(b[t+1]&&!b[t+1].trim())for(let r=t+1;r<Te;r++)if(ee+=1,b[r].trim()){r>t+1&&1===n&&F.push(t+1,r),'"'!==b[r]&&"'"!==b[r]||!b[r+1]||(e=r+1);break}}else e=t+2;break}e&&(D=R({valuesStart:e,quoteless:t,nameStart:l}),1===n?U=!0:2===n&&(X=!0))}if(!Se&&null!==E.valuesStart&&l>=E.valuesStart&&null===E.valueStart)if(de&&e(b,l,de)){if(Se=!0,X=!1,Me&&l>Me+1){const e=u({str:b,from:Me,to:l,ifLeftSideIncludesThisThenCropTightly:"\"'",ifRightSideIncludesThisThenCropTightly:"\"'"});F.push(...e),Me=null}else Me&&(Me=null);const t=e(b,l,de),r=pe.backend.find((e=>e.heads===t));r&&r.tails&&(we=r.tails)}else W(i)&&(E.valueStart=l,1===n&&(U&&null!==E.valuesStart&&!b.slice(E.valuesStart,l).trim()&&E.valuesStart<l?(F.push(E.valuesStart,l),ue+=l-E.valuesStart,U=!1):null!==Me&&Me<l-1&&(F.push(Me+1,l),ue+=l-Me+1)));if(!Se&&null!==E.valueStart&&l>E.valueStart&&(!W(i)||ye&&e(b,l,ye)))if(de&&e(b,l,de)){E.valueStart=null,E=R();const t=e(b,l,de),r=pe.backend.find((e=>e.heads===t));r&&r.tails&&(we=r.tails)}else{const r=`${b.slice(E.valueStart,l)}`;if(1===n)N.push(`.${r}`);else if(null!=E.valueStart&&$e.includes(r)){const r=u({str:b,from:E.valueStart,to:l,ifLeftSideIncludesThisThenCropTightly:"\"'",ifRightSideIncludesThisThenCropTightly:"\"'",wipeAllWhitespaceOnLeft:!0});let n="";b[r[0]-1]&&b[r[0]-1].trim()&&b[r[1]]&&b[r[1]].trim()&&(de||ye)&&(de&&t(b,r[0],ye)||ye&&e(b,r[1],de))&&(n=" "),F.push(...r,n)}else X=!1,!pe.uglify||Array.isArray(pe.whitelist)&&pe.whitelist.length&&d([`.${r}`],pe.whitelist).length||F.push(E.valueStart,l,re[ke.indexOf(`.${r}`)].slice(1));E.valueStart=null}if(!Se&&D&&null!==D.valueStart&&l>D.valueStart&&(!W(i)||ye&&e(b,l,ye))){const r=b.slice(D.valueStart,l);if(1===n)$.push(`#${r}`);else if(null!=D.valueStart&&xe.includes(r)){const r=u({str:b,from:D.valueStart,to:l,ifRightSideIncludesThisThenCropTightly:"\"'",wipeAllWhitespaceOnLeft:!0});b[r[0]-1]&&b[r[0]-1].trim()&&b[r[1]]&&b[r[1]].trim()&&(de||ye)&&(de&&t(b,r[0],ye||[])||ye&&e(b,r[1],de||[]))&&(r[0]+=1),F.push(...r)}else X=!1,!pe.uglify||Array.isArray(pe.whitelist)&&pe.whitelist.length&&d([`#${r}`],pe.whitelist).length||F.push(D.valueStart,l,re[ke.indexOf(`#${r}`)].slice(1));D.valueStart=null}if(!Se&&null!=E.valuesStart&&(!E.quoteless&&("'"===i||'"'===i)||E.quoteless&&!W(b[l]))&&l>=E.valuesStart){if(l===E.valuesStart)1===n&&F.push(...u({str:b,from:E.nameStart,to:l+1,ifRightSideIncludesThisThenCropTightly:"/>",wipeAllWhitespaceOnLeft:!0}));else{if(2===n&&X){const e=u({str:b,from:E.valuesStart-7,to:"'\"".includes(b[l])?l+1:l,ifRightSideIncludesThisThenCropTightly:"/>",wipeAllWhitespaceOnLeft:!0});let t="";b[e[0]-1]&&b[e[0]-1].trim()&&b[e[1]]&&b[e[1]].trim()&&!"/>".includes(b[e[1]])&&(t=" "),F.push(...e,t)}null!==Me&&F.push(Me,l)}E=R()}if(!Se&&null!==D.valuesStart&&(!D.quoteless&&("'"===i||'"'===i)||D.quoteless&&!W(b[l]))&&l>=D.valuesStart){if(l===D.valuesStart)1===n&&F.push(...u({str:b,from:D.nameStart,to:l+1,ifRightSideIncludesThisThenCropTightly:"/>",wipeAllWhitespaceOnLeft:!0}));else{if(2===n&&X){const e=u({str:b,from:D.valuesStart-4,to:l+1,ifRightSideIncludesThisThenCropTightly:"/>",wipeAllWhitespaceOnLeft:!0});let t="";b[e[0]-1]&&b[e[0]-1].trim()&&b[e[1]]&&b[e[1]].trim()&&!"/>".includes(b[e[1]])&&(t=" "),F.push(...e,t)}null!==Me&&F.push(Me,l)}D=R()}if(!Se&&D.valuesStart&&l>=D.valuesStart&&null===D.valueStart)if(de&&e(b,l,de)){if(Se=!0,X=!1,Me&&l>Me+1){const e=u({str:b,from:Me,to:l,ifLeftSideIncludesThisThenCropTightly:"\"'",ifRightSideIncludesThisThenCropTightly:"\"'"});F.push(...e),Me=null}else Me&&(Me=null);const t=e(b,l,de),r=pe.backend.find((e=>e.heads===t));r&&r.tails&&(we=r.tails)}else W(i)&&(D.valueStart=l,1===n&&(U&&null!==D.valuesStart&&!b.slice(D.valuesStart,l).trim()&&D.valuesStart<l?(F.push(D.valuesStart,l),ue+=l-D.valuesStart,U=!1):null!==Me&&Me<l-1&&(F.push(Me+1,l),ue+=l-Me+1)));if(!Se&&1===n){if(null!==_&&_<l&&">"===b[l]&&!We&&(pe.doNotRemoveHTMLCommentsWhoseOpeningTagContains&&Array.isArray(pe.doNotRemoveHTMLCommentsWhoseOpeningTagContains)&&pe.doNotRemoveHTMLCommentsWhoseOpeningTagContains.length&&pe.doNotRemoveHTMLCommentsWhoseOpeningTagContains.some((e=>e.trim()&&b.slice(_,l).toLowerCase().includes(e)))&&(Pe=!1),We=!0),null!==_&&">"===b[l])if(z||"-"!==b[l-1]||"-"!==b[l-2]){if(z){const e=u({str:b,from:_,to:l+1,wipeAllWhitespaceOnLeft:!0,addSingleSpaceToPreventAccidentalConcatenation:!0});pe.removeHTMLComments&&Pe&&F.push(...e),ce+=e[1]-e[0],_=null,z=void 0}}else{const e=u({str:b,from:_,to:l+1,wipeAllWhitespaceOnLeft:!0,addSingleSpaceToPreventAccidentalConcatenation:!0});pe.removeHTMLComments&&Pe&&F.push(...e),ce+=e[1]-e[0],_=null,z=void 0}pe.removeHTMLComments&&null===_&&"<"===b[l]&&"!"===b[l+1]&&((!de||Array.isArray(de)&&de.length&&!de.includes("<!"))&&(!ye||Array.isArray(ye)&&ye.length&&!ye.includes("<!"))&&(r(b,l+1,"doctype",{i:!0,trimBeforeMatching:!0})||"-"===b[l+2]&&"-"===b[l+3]&&Array.isArray(pe.doNotRemoveHTMLCommentsWhoseOpeningTagContains)&&pe.doNotRemoveHTMLCommentsWhoseOpeningTagContains.length&&r(b,l+3,pe.doNotRemoveHTMLCommentsWhoseOpeningTagContains,{trimBeforeMatching:!0})||(_=l,We=!1,Pe=!0),z=!("-"===b[l+2]&&"-"===b[l+3])),_!==l&&(x=l))}if("}"===i&&ie&&(ie-=1),!Se&&"{"===i&&J&&(j?ie+=1:(j=!0,null!==Me&&(b.slice(Me,l).includes("\n")||b.slice(Me,l).includes("\r"))&&F.push(Me,l))),Se||(b[l].trim()?null!==Me&&(Me=null):null===Me&&(Me=l)),!Se&&2===n&&Array.isArray(Y)&&Y.length&&l===Y[0][0]){const e=Y.shift();e&&e[1]-1>l&&(l=e[1]-1)}else if(null!==x&&">"===b[l]){x=null;let e=0;if(pe.removeHTMLComments&&Array.isArray(pe.doNotRemoveHTMLCommentsWhoseOpeningTagContains)&&pe.doNotRemoveHTMLCommentsWhoseOpeningTagContains.length&&(pe.doNotRemoveHTMLCommentsWhoseOpeningTagContains.some((e=>e.includes("if")))||pe.doNotRemoveHTMLCommentsWhoseOpeningTagContains.some((e=>e.includes("mso")))||pe.doNotRemoveHTMLCommentsWhoseOpeningTagContains.some((e=>e.includes("ie"))))&&r(b,l,"\x3c!--",{trimBeforeMatching:!0,cb:(t,r,n)=>(e=n,!0)})){r(b,e-1,"--\x3e",{trimBeforeMatching:!0,cb:(t,r,n)=>(e=n,!0)}),"number"==typeof e&&(l=e-1);continue}}}else _=l,Se=!0,we="*/",l+=1}if(1===n){Ie=p(N.concat($)),I.forEach((e=>{l(e).res.forEach((e=>{Object.prototype.hasOwnProperty.call(q,e)?q[e]+=1:q[e]=1}))})),Ne={...q},He=p(I.reduce(((e,t)=>e.concat(l(t).res)),[])),le=He.length;const e=Array.from(I);let t,r=[];for(let t=0,n=e.length;t<n;t++){let i;ee+=1,null!=e[t]&&(i=l(e[t]).res),i&&!i.every((e=>Ie.includes(e)))&&(r.push(...l(e[t]).res),e.splice(t,1),t-=1,n-=1)}r=p(i(r,pe.whitelist)),t=e&&e.length?e.reduce(((e,t)=>e.concat(l(t).res)),[]):[],Ee=i(f(p(Array.from(He)),N.concat($)),pe.whitelist),Be=p(i(f(N.concat($),t),pe.whitelist)),Ee=p(Ee.concat(a(r,Be))),$e=Be.filter((e=>e.startsWith("."))).map((e=>e.slice(1))),xe=Be.filter((e=>e.startsWith("#"))).map((e=>e.slice(1))),Re=Object.keys(Ne).filter((e=>Ne[e]<1)),$e=p($e.concat(a(i(Ie,pe.whitelist),Re).filter((e=>"."===e[0])).map((e=>e.slice(1)))));const n=d(Ie,pe.whitelist);Be=p(Be.concat($e.map((e=>`.${e}`)),xe.map((e=>`#${e}`)))),ke=f(f(Array.from(He),Be),Ee),Array.isArray(n)&&n.length&&n.forEach((e=>{ke.includes(e)||ke.push(e)})),pe.uglify&&(re=c(ke)),ne=ke.length,te=pe.uglify?ke.map(((e,t)=>[e,re[t]])).filter((e=>!pe.whitelist.some((t=>d.isMatch(e[0],t))))):null,Y=F.current()?Array.from(F.current()||[]):null}}F.push(P.current()),b.length&&F.current()&&(b=h(b,F.current()),F.wipe());const De=pe.reportProgressFuncTo-.06*(pe.reportProgressFuncTo-pe.reportProgressFuncFrom);for(pe.reportProgressFunc&&Te>=2e3&&(be=Math.floor(De+(pe.reportProgressFuncTo-De)/5),be!==_e&&(_e=be,pe.reportProgressFunc(be)));T.test(b)||v.test(b);)ee+=(b=(b=b.replace(T,"")).replace(v,"")).length;pe.reportProgressFunc&&Te>=2e3&&(be=Math.floor(De+(pe.reportProgressFuncTo-De)/5*2),be!==_e&&(_e=be,pe.reportProgressFunc(be))),ee+=(b=b.replace(y,"\n")).length,pe.reportProgressFunc&&Te>=2e3&&(be=Math.floor(De+(pe.reportProgressFuncTo-De)/5*3),be!==_e&&(_e=be,pe.reportProgressFunc(be)));let qe=b.length;return ee+=(b=b.replace(n(),"")).length,qe!==b.length&&(ce+=b.length-qe),pe.reportProgressFunc&&Te>=2e3&&(be=Math.floor(De+(pe.reportProgressFuncTo-De)/5*4),be!==_e&&(_e=be,pe.reportProgressFunc(be))),qe=(b=m(b,{removeLineBreaks:!1,removeIndentations:!1,removeHTMLComments:!1,removeCSSComments:!1,lineLengthLimit:500}).result).length,qe!==b.length&&(ue+=b.length-qe),ee+=b.length,pe.reportProgressFunc&&Te>=2e3&&(be=Math.floor(De+(pe.reportProgressFuncTo-De)),be!==_e&&(_e=be,pe.reportProgressFunc(be))),b.length&&(b[0].trim()&&b[b.length-1].trim()||b.length===b.trim().length||(ue+=b.length-b.trim().length),b=b.trimStart()),b=b.replace(/ ((class|id)=["']) /g," $1"),{log:{timeTakenInMilliseconds:Date.now()-M,traversedTotalCharacters:ee,traversedTimesInputLength:Te?Math.round(ee/Te*100)/100:0,originalLength:Te,cleanedLength:b.length,bytesSaved:Math.max(Te-b.length,0),percentageReducedOfOriginal:Te?Math.round(100*Math.max(Te-b.length,0)/Te):0,nonIndentationsWhitespaceLength:Math.max(ue-Ce,0),nonIndentationsTakeUpPercentageOfOriginal:Te&&Math.max(ue-Ce,0)?Math.round(100*Math.max(ue,0)/Te):0,commentsLength:ce,commentsTakeUpPercentageOfOriginal:Te&&ce?Math.round(100*ce/Te):0,uglified:te},result:b,countAfterCleaning:ne,countBeforeCleaning:le,allInHead:He.sort(),allInBody:Ie.sort(),deletedFromHead:Ee.sort(),deletedFromBody:Be.sort()}}export{A as comb,O as defaults,b as version};
