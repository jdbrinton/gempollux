import{a2 as H,a3 as O,O as R,K as M,a4 as Y,G as k,a5 as T,l as j,e as C,g as P,a6 as b,i as g,j as A,a7 as $,k as v,a8 as q,a9 as B,aa as G,ab as K,ac as W,ad as z,b as F,ae as J,p as Q,h as E,a as U,o as X}from"./runtime.f59T_FOX.js";import{r as Z}from"./svelte-head.DUdzEqUO.js";import{b as x}from"./disclose-version.C0Npfatb.js";const aa=new Set,D=new Set;function m(a){var N;var r=this,n=r.ownerDocument,_=a.type,o=((N=a.composedPath)==null?void 0:N.call(a))||[],e=o[0]||a.target,d=0,h=a.__root;if(h){var u=o.indexOf(h);if(u!==-1&&(r===document||r===window)){a.__root=r;return}var l=o.indexOf(r);if(l===-1)return;u<=l&&(d=u)}if(e=o[d]||a.target,e!==r){H(a,"currentTarget",{configurable:!0,get(){return e||n}});var w=Y,i=k;O(null),R(null);try{for(var t,s=[];e!==null;){var f=e.assignedSlot||e.parentNode||e.host||null;try{var c=e["__"+_];if(c!==void 0&&!e.disabled)if(M(c)){var[L,...V]=c;L.apply(e,[a,...V])}else c.call(e,a)}catch(y){t?s.push(y):t=y}if(a.cancelBubble||f===r||f===null)break;e=f}if(t){for(let y of s)queueMicrotask(()=>{throw y});throw t}}finally{a.__root=r,delete a.currentTarget,O(w),R(i)}}}const ra=["touchstart","touchmove"];function ea(a){return ra.includes(a)}function oa(a,r){var n=r==null?"":typeof r=="object"?r+"":r;n!==(a.__t??(a.__t=a.nodeValue))&&(a.__t=n,a.nodeValue=n==null?"":n+"")}function ta(a,r){return I(a,r)}function fa(a,r){T(),r.intro=r.intro??!1;const n=r.target,_=E,o=v;try{for(var e=j(n);e&&(e.nodeType!==8||e.data!==C);)e=P(e);if(!e)throw b;g(!0),A(e),$();const d=I(a,{...r,anchor:e});if(v===null||v.nodeType!==8||v.data!==q)throw B(),b;return g(!1),d}catch(d){if(d===b)return r.recover===!1&&G(),T(),K(n),g(!1),ta(a,r);throw d}finally{g(_),A(o),Z()}}const p=new Map;function I(a,{target:r,anchor:n,props:_={},events:o,context:e,intro:d=!0}){T();var h=new Set,u=i=>{for(var t=0;t<i.length;t++){var s=i[t];if(!h.has(s)){h.add(s);var f=ea(s);r.addEventListener(s,m,{passive:f});var c=p.get(s);c===void 0?(document.addEventListener(s,m,{passive:f}),p.set(s,1)):p.set(s,c+1)}}};u(W(aa)),D.add(u);var l=void 0,w=z(()=>{var i=n??r.appendChild(F());return J(()=>{if(e){Q({});var t=X;t.c=e}o&&(_.$$events=o),E&&x(i,null),l=a(i,_)||{},E&&(k.nodes_end=v),e&&U()}),()=>{var f;for(var t of h){r.removeEventListener(t,m);var s=p.get(t);--s===0?(document.removeEventListener(t,m),p.delete(t)):p.set(t,s)}D.delete(u),S.delete(l),i!==n&&((f=i.parentNode)==null||f.removeChild(i))}});return S.set(l,w),l}let S=new WeakMap;function da(a){const r=S.get(a);r&&r()}export{fa as h,ta as m,oa as s,da as u};
