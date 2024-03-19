(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();const Tt={context:void 0,registry:void 0},Et=(e,t)=>e===t,$=Symbol("solid-proxy"),Se=Symbol("solid-track"),ue={equals:Et};let Ze=it;const G=1,fe=2,ze={owned:null,cleanups:null,context:null,owner:null};var m=null;let Oe=null,_t=null,y=null,w=null,v=null,_e=0;function ee(e,t){const n=y,r=m,i=e.length===0,l=t===void 0?r:t,o=i?ze:{owned:null,cleanups:null,context:l?l.context:null,owner:l},s=i?e:()=>e(()=>S(()=>be(o)));m=o,y=null;try{return H(s,!0)}finally{y=n,m=r}}function W(e,t){t=t?Object.assign({},ue,t):ue;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=i=>(typeof i=="function"&&(i=i(n.value)),rt(n,i));return[nt.bind(n),r]}function O(e,t,n){const r=Ge(e,t,!1,G);ie(r)}function et(e,t,n){Ze=St;const r=Ge(e,t,!1,G);(!n||!n.render)&&(r.user=!0),v?v.push(r):ie(r)}function k(e,t,n){n=n?Object.assign({},ue,n):ue;const r=Ge(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,ie(r),nt.bind(r)}function bt(e){return H(e,!1)}function S(e){if(y===null)return e();const t=y;y=null;try{return e()}finally{y=t}}function tt(e){et(()=>S(e))}function Ae(e){return m===null||(m.cleanups===null?m.cleanups=[e]:m.cleanups.push(e)),e}function $e(){return y}function pt(){return m}function wt(e,t){const n=m,r=y;m=e,y=null;try{return H(t,!0)}catch(i){Fe(i)}finally{m=n,y=r}}function Ot(e,t){const n=Symbol("context");return{id:n,Provider:$t(n),defaultValue:e}}function Ct(e){return m&&m.context&&m.context[e.id]!==void 0?m.context[e.id]:e.defaultValue}function ae(e){const t=k(e),n=k(()=>Le(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function nt(){if(this.sources&&this.state)if(this.state===G)ie(this);else{const e=w;w=null,H(()=>he(this),!1),w=e}if(y){const e=this.observers?this.observers.length:0;y.sources?(y.sources.push(this),y.sourceSlots.push(e)):(y.sources=[this],y.sourceSlots=[e]),this.observers?(this.observers.push(y),this.observerSlots.push(y.sources.length-1)):(this.observers=[y],this.observerSlots=[y.sources.length-1])}return this.value}function rt(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&H(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],o=Oe&&Oe.running;o&&Oe.disposed.has(l),(o?!l.tState:!l.state)&&(l.pure?w.push(l):v.push(l),l.observers&&lt(l)),o||(l.state=G)}if(w.length>1e6)throw w=[],new Error},!1)),t}function ie(e){if(!e.fn)return;be(e);const t=_e;Rt(e,e.value,t)}function Rt(e,t,n){let r;const i=m,l=y;y=m=e;try{r=e.fn(t)}catch(o){return e.pure&&(e.state=G,e.owned&&e.owned.forEach(be),e.owned=null),e.updatedAt=n+1,Fe(o)}finally{y=l,m=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?rt(e,r):e.value=r,e.updatedAt=n)}function Ge(e,t,n,r=G,i){const l={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:m,context:m?m.context:null,pure:n};return m===null||m!==ze&&(m.owned?m.owned.push(l):m.owned=[l]),l}function de(e){if(e.state===0)return;if(e.state===fe)return he(e);if(e.suspense&&S(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<_e);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===G)ie(e);else if(e.state===fe){const r=w;w=null,H(()=>he(e,t[0]),!1),w=r}}function H(e,t){if(w)return e();let n=!1;t||(w=[]),v?n=!0:v=[],_e++;try{const r=e();return Nt(n),r}catch(r){n||(v=null),w=null,Fe(r)}}function Nt(e){if(w&&(it(w),w=null),e)return;const t=v;v=null,t.length&&H(()=>Ze(t),!1)}function it(e){for(let t=0;t<e.length;t++)de(e[t])}function St(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:de(r)}for(t=0;t<n;t++)de(e[t])}function he(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const i=r.state;i===G?r!==t&&(!r.updatedAt||r.updatedAt<_e)&&de(r):i===fe&&he(r,t)}}}function lt(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=fe,n.pure?w.push(n):v.push(n),n.observers&&lt(n))}}function be(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const l=i.pop(),o=n.observerSlots.pop();r<i.length&&(l.sourceSlots[o]=r,i[r]=l,n.observerSlots[r]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)be(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function At(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Fe(e,t=m){throw At(e)}function Le(e){if(typeof e=="function"&&!e.length)return Le(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=Le(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function $t(e,t){return function(r){let i;return O(()=>i=S(()=>(m.context={...m.context,[e]:r.value},ae(()=>r.children))),void 0),i}}const Lt=Symbol("fallback");function Pe(e){for(let t=0;t<e.length;t++)e[t]()}function kt(e,t,n={}){let r=[],i=[],l=[],o=0,s=t.length>1?[]:null;return Ae(()=>Pe(l)),()=>{let c=e()||[],f,u;return c[Se],S(()=>{let a=c.length,h,b,C,x,D,R,N,A,_;if(a===0)o!==0&&(Pe(l),l=[],r=[],i=[],o=0,s&&(s=[])),n.fallback&&(r=[Lt],i[0]=ee(le=>(l[0]=le,n.fallback())),o=1);else if(o===0){for(i=new Array(a),u=0;u<a;u++)r[u]=c[u],i[u]=ee(d);o=a}else{for(C=new Array(a),x=new Array(a),s&&(D=new Array(a)),R=0,N=Math.min(o,a);R<N&&r[R]===c[R];R++);for(N=o-1,A=a-1;N>=R&&A>=R&&r[N]===c[A];N--,A--)C[A]=i[N],x[A]=l[N],s&&(D[A]=s[N]);for(h=new Map,b=new Array(A+1),u=A;u>=R;u--)_=c[u],f=h.get(_),b[u]=f===void 0?-1:f,h.set(_,u);for(f=R;f<=N;f++)_=r[f],u=h.get(_),u!==void 0&&u!==-1?(C[u]=i[f],x[u]=l[f],s&&(D[u]=s[f]),u=b[u],h.set(_,u)):l[f]();for(u=R;u<a;u++)u in C?(i[u]=C[u],l[u]=x[u],s&&(s[u]=D[u],s[u](u))):i[u]=ee(d);i=i.slice(0,o=a),r=c.slice(0)}return i});function d(a){if(l[u]=a,s){const[h,b]=W(u);return s[u]=b,t(c[u],h)}return t(c[u])}}}function g(e,t){return S(()=>e(t||{}))}function oe(){return!0}const ke={get(e,t,n){return t===$?n:e.get(t)},has(e,t){return t===$?!0:e.has(t)},set:oe,deleteProperty:oe,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:oe,deleteProperty:oe}},ownKeys(e){return e.keys()}};function Ce(e){return(e=typeof e=="function"?e():e)?e:{}}function xt(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function P(...e){let t=!1;for(let o=0;o<e.length;o++){const s=e[o];t=t||!!s&&$ in s,e[o]=typeof s=="function"?(t=!0,k(s)):s}if(t)return new Proxy({get(o){for(let s=e.length-1;s>=0;s--){const c=Ce(e[s])[o];if(c!==void 0)return c}},has(o){for(let s=e.length-1;s>=0;s--)if(o in Ce(e[s]))return!0;return!1},keys(){const o=[];for(let s=0;s<e.length;s++)o.push(...Object.keys(Ce(e[s])));return[...new Set(o)]}},ke);const n={},r=Object.create(null);for(let o=e.length-1;o>=0;o--){const s=e[o];if(!s)continue;const c=Object.getOwnPropertyNames(s);for(let f=c.length-1;f>=0;f--){const u=c[f];if(u==="__proto__"||u==="constructor")continue;const d=Object.getOwnPropertyDescriptor(s,u);if(!r[u])r[u]=d.get?{enumerable:!0,configurable:!0,get:xt.bind(n[u]=[d.get.bind(s)])}:d.value!==void 0?d:void 0;else{const a=n[u];a&&(d.get?a.push(d.get.bind(s)):d.value!==void 0&&a.push(()=>d.value))}}}const i={},l=Object.keys(r);for(let o=l.length-1;o>=0;o--){const s=l[o],c=r[s];c&&c.get?Object.defineProperty(i,s,c):i[s]=c?c.value:void 0}return i}function pe(e,...t){if($ in e){const i=new Set(t.length>1?t.flat():t[0]),l=t.map(o=>new Proxy({get(s){return o.includes(s)?e[s]:void 0},has(s){return o.includes(s)&&s in e},keys(){return o.filter(s=>s in e)}},ke));return l.push(new Proxy({get(o){return i.has(o)?void 0:e[o]},has(o){return i.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!i.has(o))}},ke)),l}const n={},r=t.map(()=>({}));for(const i of Object.getOwnPropertyNames(e)){const l=Object.getOwnPropertyDescriptor(e,i),o=!l.get&&!l.set&&l.enumerable&&l.writable&&l.configurable;let s=!1,c=0;for(const f of t)f.includes(i)&&(s=!0,o?r[c][i]=l.value:Object.defineProperty(r[c],i,l)),++c;s||(o?n[i]=l.value:Object.defineProperty(n,i,l))}return[...r,n]}const ot=e=>`Stale read from <${e}>.`;function It(e){const t="fallback"in e&&{fallback:()=>e.fallback};return k(kt(()=>e.each,e.children,t||void 0))}function st(e){const t=e.keyed,n=k(()=>e.when,void 0,{equals:(r,i)=>t?r===i:!r==!i});return k(()=>{const r=n();if(r){const i=e.children;return typeof i=="function"&&i.length>0?S(()=>i(t?r:()=>{if(!S(n))throw ot("Show");return e.when})):i}return e.fallback},void 0,void 0)}function Mt(e){let t=!1;const n=(l,o)=>(t?l[1]===o[1]:!l[1]==!o[1])&&l[2]===o[2],r=ae(()=>e.children),i=k(()=>{let l=r();Array.isArray(l)||(l=[l]);for(let o=0;o<l.length;o++){const s=l[o].when;if(s)return t=!!l[o].keyed,[o,s,l[o]]}return[-1]},void 0,{equals:n});return k(()=>{const[l,o,s]=i();if(l<0)return e.fallback;const c=s.children;return typeof c=="function"&&c.length>0?S(()=>c(t?o:()=>{if(S(i)[0]!==l)throw ot("Match");return s.when})):c},void 0,void 0)}function Re(e){return e}const vt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Dt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...vt]),jt=new Set(["innerHTML","textContent","innerText","children"]),Bt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Gt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Ft(e,t){const n=Gt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const Ht=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Ut={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Vt(e,t,n){let r=n.length,i=t.length,l=r,o=0,s=0,c=t[i-1].nextSibling,f=null;for(;o<i||s<l;){if(t[o]===n[s]){o++,s++;continue}for(;t[i-1]===n[l-1];)i--,l--;if(i===o){const u=l<r?s?n[s-1].nextSibling:n[l-s]:c;for(;s<l;)e.insertBefore(n[s++],u)}else if(l===s)for(;o<i;)(!f||!f.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[l-1]&&n[s]===t[i-1]){const u=t[--i].nextSibling;e.insertBefore(n[s++],t[o++].nextSibling),e.insertBefore(n[--l],u),t[i]=n[l]}else{if(!f){f=new Map;let d=s;for(;d<l;)f.set(n[d],d++)}const u=f.get(t[o]);if(u!=null)if(s<u&&u<l){let d=o,a=1,h;for(;++d<i&&d<l&&!((h=f.get(t[d]))==null||h!==u+a);)a++;if(a>u-s){const b=t[o];for(;s<u;)e.insertBefore(n[s++],b)}else e.replaceChild(n[s++],t[o++])}else o++;else t[o++].remove()}}}const qe="_$DX_DELEGATE";function Kt(e,t,n,r={}){let i;return ee(l=>{i=l,t===document?e():T(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{i(),t.textContent=""}}function F(e,t,n){let r;const i=()=>{const o=document.createElement("template");return o.innerHTML=e,n?o.content.firstChild.firstChild:o.content.firstChild},l=t?()=>S(()=>document.importNode(r||(r=i()),!0)):()=>(r||(r=i())).cloneNode(!0);return l.cloneNode=l,l}function Pt(e,t=window.document){const n=t[qe]||(t[qe]=new Set);for(let r=0,i=e.length;r<i;r++){const l=e[r];n.has(l)||(n.add(l),t.addEventListener(l,Zt))}}function xe(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function qt(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function M(e,t){t==null?e.removeAttribute("class"):e.className=t}function Wt(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=l=>i.call(e,n[1],l))}else e.addEventListener(t,n)}function ct(e,t,n={}){const r=Object.keys(t||{}),i=Object.keys(n);let l,o;for(l=0,o=i.length;l<o;l++){const s=i[l];!s||s==="undefined"||t[s]||(We(e,s,!1),delete n[s])}for(l=0,o=r.length;l<o;l++){const s=r[l],c=!!t[s];!s||s==="undefined"||n[s]===c||!c||(We(e,s,!0),n[s]=c)}return n}function Xt(e,t,n){if(!t)return n?xe(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let i,l;for(l in n)t[l]==null&&r.removeProperty(l),delete n[l];for(l in t)i=t[l],i!==n[l]&&(r.setProperty(l,i),n[l]=i);return n}function te(e,t={},n,r){const i={};return r||O(()=>i.children=X(e,t.children,i.children)),O(()=>t.ref&&t.ref(e)),O(()=>Qt(e,t,n,!0,i,!0)),i}function Yt(e,t,n){return S(()=>e(t,n))}function T(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return X(e,t,r,n);O(i=>X(e,t(),i,n),r)}function Qt(e,t,n,r,i={},l=!1){t||(t={});for(const o in i)if(!(o in t)){if(o==="children")continue;i[o]=Xe(e,o,null,i[o],n,l)}for(const o in t){if(o==="children"){r||X(e,t.children);continue}const s=t[o];i[o]=Xe(e,o,s,i[o],n,l)}}function Jt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function We(e,t,n){const r=t.trim().split(/\s+/);for(let i=0,l=r.length;i<l;i++)e.classList.toggle(r[i],n)}function Xe(e,t,n,r,i,l){let o,s,c,f,u;if(t==="style")return Xt(e,n,r);if(t==="classList")return ct(e,n,r);if(n===r)return r;if(t==="ref")l||n(e);else if(t.slice(0,3)==="on:"){const d=t.slice(3);r&&e.removeEventListener(d,r),n&&e.addEventListener(d,n)}else if(t.slice(0,10)==="oncapture:"){const d=t.slice(10);r&&e.removeEventListener(d,r,!0),n&&e.addEventListener(d,n,!0)}else if(t.slice(0,2)==="on"){const d=t.slice(2).toLowerCase(),a=Ht.has(d);if(!a&&r){const h=Array.isArray(r)?r[0]:r;e.removeEventListener(d,h)}(a||n)&&(Wt(e,d,n,a),a&&Pt([d]))}else if(t.slice(0,5)==="attr:")xe(e,t.slice(5),n);else if((u=t.slice(0,5)==="prop:")||(c=jt.has(t))||!i&&((f=Ft(t,e.tagName))||(s=Dt.has(t)))||(o=e.nodeName.includes("-")))u&&(t=t.slice(5),s=!0),t==="class"||t==="className"?M(e,n):o&&!s&&!c?e[Jt(t)]=n:e[f||t]=n;else{const d=i&&t.indexOf(":")>-1&&Ut[t.split(":")[0]];d?qt(e,d,t,n):xe(e,Bt[t]||t,n)}return n}function Zt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const r=n[t];if(r&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?r.call(n,i,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function X(e,t,n,r,i){for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=r!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number")if(l==="number"&&(t=t.toString()),o){let s=n[0];s&&s.nodeType===3?s.data!==t&&(s.data=t):s=document.createTextNode(t),n=U(e,n,r,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||l==="boolean")n=U(e,n,r);else{if(l==="function")return O(()=>{let s=t();for(;typeof s=="function";)s=s();n=X(e,s,n,r)}),()=>n;if(Array.isArray(t)){const s=[],c=n&&Array.isArray(n);if(Ie(s,t,n,i))return O(()=>n=X(e,s,n,r,!0)),()=>n;if(s.length===0){if(n=U(e,n,r),o)return n}else c?n.length===0?Ye(e,s,r):Vt(e,n,s):(n&&U(e),Ye(e,s));n=s}else if(t.nodeType){if(Array.isArray(n)){if(o)return n=U(e,n,r,t);U(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Ie(e,t,n,r){let i=!1;for(let l=0,o=t.length;l<o;l++){let s=t[l],c=n&&n[e.length],f;if(!(s==null||s===!0||s===!1))if((f=typeof s)=="object"&&s.nodeType)e.push(s);else if(Array.isArray(s))i=Ie(e,s,c)||i;else if(f==="function")if(r){for(;typeof s=="function";)s=s();i=Ie(e,Array.isArray(s)?s:[s],Array.isArray(c)?c:[c])||i}else e.push(s),i=!0;else{const u=String(s);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return i}function Ye(e,t,n=null){for(let r=0,i=t.length;r<i;r++)e.insertBefore(t[r],n)}function U(e,t,n,r){if(n===void 0)return e.textContent="";const i=r||document.createTextNode("");if(t.length){let l=!1;for(let o=t.length-1;o>=0;o--){const s=t[o];if(i!==s){const c=s.parentNode===e;!l&&!o?c?e.replaceChild(i,s):e.insertBefore(i,n):c&&s.remove()}else l=!0}}else e.insertBefore(i,n);return[i]}const zt="http://www.w3.org/2000/svg";function en(e,t=!1){return t?document.createElementNS(zt,e):document.createElement(e)}function tn(e){const{useShadow:t}=e,n=document.createTextNode(""),r=()=>e.mount||document.body,i=pt();let l,o=!!Tt.context;return et(()=>{l||(l=wt(i,()=>k(()=>e.children)));const s=r();if(s instanceof HTMLHeadElement){const[c,f]=W(!1),u=()=>f(!0);ee(d=>T(s,()=>c()?d():l(),null)),Ae(u)}else{const c=en(e.isSVG?"g":"div",e.isSVG),f=t&&c.attachShadow?c.attachShadow({mode:"open"}):c;Object.defineProperty(c,"_$host",{get(){return n.parentNode},configurable:!0}),T(f,l),s.appendChild(c),e.ref&&e.ref(c),Ae(()=>s.removeChild(c))}},void 0,{render:!o}),n}function ut(...e){let t={};for(let n=0;n<e.length;n++)t[e[n]]=!0;return t}const V=8,j=8;var Y=(e=>(e[e.LEFT_TOP=0]="LEFT_TOP",e[e.LEFT_CENTER_TO_BOTTOM=1]="LEFT_CENTER_TO_BOTTOM",e[e.LEFT_CENTER=2]="LEFT_CENTER",e[e.LEFT_CENTER_TO_TOP=3]="LEFT_CENTER_TO_TOP",e[e.LEFT_BOTTOM=4]="LEFT_BOTTOM",e[e.RIGHT_TOP=5]="RIGHT_TOP",e[e.RIGHT_CENTER_TO_BOTTOM=6]="RIGHT_CENTER_TO_BOTTOM",e[e.RIGHT_CENTER=7]="RIGHT_CENTER",e[e.RIGHT_CENTER_TO_TOP=8]="RIGHT_CENTER_TO_TOP",e[e.RIGHT_BOTTOM=9]="RIGHT_BOTTOM",e[e.CENTER_TOP_TO_RIGHT=10]="CENTER_TOP_TO_RIGHT",e[e.CENTER_TOP=11]="CENTER_TOP",e[e.CENTER_TOP_TO_LEFT=12]="CENTER_TOP_TO_LEFT",e[e.CENTER_BOTTOM_TO_RIGHT=13]="CENTER_BOTTOM_TO_RIGHT",e[e.CENTER_BOTTOM=14]="CENTER_BOTTOM",e[e.CENTER_BOTTOM_TO_LEFT=15]="CENTER_BOTTOM_TO_LEFT",e[e.CENTER_CENTER_LEFT_TOP=16]="CENTER_CENTER_LEFT_TOP",e[e.CENTER_CENTER_LEFT=17]="CENTER_CENTER_LEFT",e[e.CENTER_CENTER_LEFT_BOTTOM=18]="CENTER_CENTER_LEFT_BOTTOM",e[e.CENTER_CENTER_TOP=19]="CENTER_CENTER_TOP",e[e.CENTER_CENTER=20]="CENTER_CENTER",e[e.CENTER_CENTER_BOTTOM=21]="CENTER_CENTER_BOTTOM",e[e.CENTER_CENTER_RIGHT_TOP=22]="CENTER_CENTER_RIGHT_TOP",e[e.CENTER_CENTER_RIGHT=23]="CENTER_CENTER_RIGHT",e[e.CENTER_CENTER_RIGHT_BOTTOM=24]="CENTER_CENTER_RIGHT_BOTTOM",e))(Y||{});function nn(e,t=13,n=document.body,r=null){const i={element:r?{left:r.x,right:r.x,x:r.x,top:r.y,bottom:r.y,y:r.y,height:0,width:0}:n.getBoundingClientRect(),popover:e},l={width:document.body.clientWidth,height:window.innerHeight},o={screen:{top:l.height/2,left:l.width/2},element:{top:i.element.top+i.element.height/2,left:i.element.left+i.element.width/2}},s={width:l.width-V*2,height:l.height-V*2},c={top:V,left:V,bottom:l.height-V,right:l.width-V};let f=0,u=0;const d=()=>u+i.popover.width,a=()=>f+i.popover.height;return i.popover.width=i.popover.width>s.width?s.width:i.popover.width,i.popover.height=i.popover.height>s.height?s.height:i.popover.height,[0,1,2,3,4].includes(t)?(u=i.element.left-i.popover.width-j,u<c.left&&(o.element.left<o.screen.left?u=i.element.right+j:u=c.left)):[10,16,17,18,13].includes(t)?(u=i.element.left,d()>c.right&&(o.element.left>o.screen.left?u=i.element.right-i.popover.width:u=c.right-i.popover.width)):[11,19,20,21,14].includes(t)?u=i.element.left+i.element.width/2-i.popover.width/2:[12,22,23,24,15].includes(t)?(u=i.element.right-i.popover.width,u<c.left&&(o.element.left<o.screen.left?u=i.element.left:u=c.left)):[5,6,7,8,9].includes(t)&&(u=i.element.right+j,d()>c.right&&(o.element.left>o.screen.left?u=i.element.left-i.popover.width-j:u=c.right-i.popover.width)),[0,10,11,12,5].includes(t)?(f=i.element.top-i.popover.height-j,f<c.top&&(o.element.top<o.screen.top?f=i.element.bottom+j:f=c.top)):[1,16,19,22,6].includes(t)?(f=i.element.top,a()>c.bottom&&(o.element.top>o.screen.top?f=i.element.right-i.popover.height:f=c.right-i.popover.height)):[2,17,20,23,7].includes(t)?f=i.element.top+i.element.height/2-i.popover.height/2:[3,18,21,24,8].includes(t)?(f=i.element.bottom-i.popover.height,f<c.top&&(o.element.top<o.screen.top?f=i.element.top:f=c.top)):[4,13,14,15,9].includes(t)&&(f=i.element.bottom+j,a()>c.bottom&&(o.element.top>o.screen.top?f=i.element.top-i.popover.height-j:f=c.bottom-i.popover.height)),f<c.top&&(f=c.top),a()>c.bottom&&(f=c.bottom-i.popover.height),u<c.left&&(u=c.left),d()>c.right&&(u=c.right-i.popover.width),{top:f,left:u}}const Me=Symbol("store-raw"),q=Symbol("store-node"),I=Symbol("store-has"),ft=Symbol("store-self");function at(e){let t=e[$];if(!t&&(Object.defineProperty(e,$,{value:t=new Proxy(e,on)}),!Array.isArray(e))){const n=Object.keys(e),r=Object.getOwnPropertyDescriptors(e);for(let i=0,l=n.length;i<l;i++){const o=n[i];r[o].get&&Object.defineProperty(e,o,{enumerable:r[o].enumerable,get:r[o].get.bind(t)})}}return t}function ge(e){let t;return e!=null&&typeof e=="object"&&(e[$]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function ne(e,t=new Set){let n,r,i,l;if(n=e!=null&&e[Me])return n;if(!ge(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let o=0,s=e.length;o<s;o++)i=e[o],(r=ne(i,t))!==i&&(e[o]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const o=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let c=0,f=o.length;c<f;c++)l=o[c],!s[l].get&&(i=e[l],(r=ne(i,t))!==i&&(e[l]=r))}return e}function me(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function re(e,t,n){if(e[t])return e[t];const[r,i]=W(n,{equals:!1,internal:!0});return r.$=i,e[t]=r}function rn(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===$||t===q||(delete n.value,delete n.writable,n.get=()=>e[$][t]),n}function dt(e){$e()&&re(me(e,q),ft)()}function ln(e){return dt(e),Reflect.ownKeys(e)}const on={get(e,t,n){if(t===Me)return e;if(t===$)return n;if(t===Se)return dt(e),n;const r=me(e,q),i=r[t];let l=i?i():e[t];if(t===q||t===I||t==="__proto__")return l;if(!i){const o=Object.getOwnPropertyDescriptor(e,t);$e()&&(typeof l!="function"||e.hasOwnProperty(t))&&!(o&&o.get)&&(l=re(r,t,l)())}return ge(l)?at(l):l},has(e,t){return t===Me||t===$||t===Se||t===q||t===I||t==="__proto__"?!0:($e()&&re(me(e,I),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:ln,getOwnPropertyDescriptor:rn};function ye(e,t,n,r=!1){if(!r&&e[t]===n)return;const i=e[t],l=e.length;n===void 0?(delete e[t],e[I]&&e[I][t]&&i!==void 0&&e[I][t].$()):(e[t]=n,e[I]&&e[I][t]&&i===void 0&&e[I][t].$());let o=me(e,q),s;if((s=re(o,t,i))&&s.$(()=>n),Array.isArray(e)&&e.length!==l){for(let c=e.length;c<l;c++)(s=o[c])&&s.$();(s=re(o,"length",l))&&s.$(e.length)}(s=o[ft])&&s.$()}function ht(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const i=n[r];ye(e,i,t[i])}}function sn(e,t){if(typeof t=="function"&&(t=t(e)),t=ne(t),Array.isArray(t)){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){const i=t[n];e[n]!==i&&ye(e,n,i)}ye(e,"length",r)}else ht(e,t)}function Q(e,t,n=[]){let r,i=e;if(t.length>1){r=t.shift();const o=typeof r,s=Array.isArray(e);if(Array.isArray(r)){for(let c=0;c<r.length;c++)Q(e,[r[c]].concat(t),n);return}else if(s&&o==="function"){for(let c=0;c<e.length;c++)r(e[c],c)&&Q(e,[c].concat(t),n);return}else if(s&&o==="object"){const{from:c=0,to:f=e.length-1,by:u=1}=r;for(let d=c;d<=f;d+=u)Q(e,[d].concat(t),n);return}else if(t.length>1){Q(e[r],t,[r].concat(n));return}i=e[r],n=[r].concat(n)}let l=t[0];typeof l=="function"&&(l=l(i,n),l===i)||r===void 0&&l==null||(l=ne(l),r===void 0||ge(i)&&ge(l)&&!Array.isArray(l)?ht(i,l):ye(e,r,l))}function gt(...[e,t]){const n=ne(e||{}),r=Array.isArray(n),i=at(n);function l(...o){bt(()=>{r&&o.length===1?sn(n,o[0]):Q(n,o)})}return[i,l]}var E=(e=>(e.light="light",e.dark="dark",e.system="system",e))(E||{});function mt(e){return e!=null&&e!=null}const ve=e=>{const[t,n]=we(),r=P({delayDuration:500,position:Y.CENTER_BOTTOM_TO_RIGHT},e),i=ae(()=>r.children),[l,o]=gt({x:0,y:0});let s,c,f;function u(a,h=500){a.stopPropagation(),t.tooltip.timeoutId&&(clearTimeout(t.tooltip.timeoutId),n("tooltip","timeoutId",null));const b=setTimeout(()=>{s.hidePopover(),n("tooltip","isOpen",!1),n("tooltip","timeoutId",null)},h);n("tooltip","timeoutId",b)}function d(a){const h=()=>{const C=c.getBoundingClientRect();s.setAttribute("class","tooltip scrollbar:none"),s.style.whiteSpace="nowrap",r.class&&s.setAttribute("class",`tooltip scrollbar:none ${r.class??""}`),s.style.width=C.width+24+"px",s.style.height=C.height+12+"px",s.innerHTML=c.innerHTML;const x=nn({height:C.height+12,width:C.width+24},r.position??Y.CENTER_BOTTOM_TO_RIGHT,f,mt(r.position)?null:{x:l.x,y:l.y+24});s.style.top=(r.top?r.top:x.top)+"px",s.style.left=(r.left?r.left:x.left)+"px",setTimeout(()=>{s.style.whiteSpace="normal"},200)};o({x:a.clientX,y:a.clientY}),a.stopPropagation(),t.tooltip.timeoutId&&(clearTimeout(t.tooltip.timeoutId),n("tooltip","timeoutId",null)),t.tooltip.isOpen||h();const b=setTimeout(()=>{t.tooltip.isOpen&&h(),s.showPopover(),n("tooltip","timeoutId",null),n("tooltip","isOpen",!0)},r.delayDuration);n("tooltip","timeoutId",b)}return tt(()=>{s=document.querySelector(".tooltip"),typeof r.child=="string"?r.child:ae(()=>r.child)(),f=i(),(f instanceof Node||f instanceof Element)&&(f.addEventListener("mouseenter",d),f.addEventListener("mouseleave",a=>u(a)),f.addEventListener("mousemove",a=>o({x:a.clientX,y:a.clientY})),f.addEventListener("mousedown",a=>u(a,0)),f.addEventListener("touchstart",d),f.addEventListener("touchend",a=>u(a)),f.addEventListener("touchcancel",a=>u(a)))}),[k(i),g(tn,{ref(a){var h=c;typeof h=="function"?h(a):c=a},get mount(){return document.querySelector(".tooltips")},get children(){return r.child}})]};function B(e,t=!1){if(mt(e))return typeof e=="boolean"&&!t?e?"":void 0:t?`${e}`:""}var cn=F("<i class=icon translate=no>");const K=e=>{const[t,n]=pe(e,["children","filled","inline"]);return(()=>{var r=cn();return te(r,P({get"data-inline"(){return B(t.inline)}},n),!1,!0),T(r,g(st,{get fallback(){return t.children},get when(){return t.filled},get children(){return String.fromCharCode(`${t.children}`.charCodeAt(0)-1)}})),r})()};var un=F("<button class=btn><div class=btn-layer>");const De=e=>{const t=P({variant:"transparent",indicatorPosition:"bottom"},e),[n,r]=pe(t,["children","indicatorPosition","variant","classList","focus","compact","selected","elevation","iconOnly","layerAttr"]);return(()=>{var i=un(),l=i.firstChild;return te(i,P({get classList(){return{"btn-transparent":n.variant=="transparent","btn-filled":n.variant=="filled","btn-outlined":n.variant=="outlined","btn-filled-tonal":n.variant=="filled-tonal","btn-elevated":n.variant=="elevated",...n.classList}},get"data-icon"(){return B(n.iconOnly)},get"data-indicator"(){return n.selected?n.indicatorPosition:void 0},get"data-selected"(){return B(n.selected)},get"data-elevation"(){return B(n.elevation,!0)},get"data-focus"(){return B(n.focus)},get"data-compact"(){return B(n.compact)}},r),!1,!0),te(l,P(()=>n.layerAttr),!1,!0),T(l,()=>n.children),i})()};var fn=F("<div class=body>");const an=e=>{const[t,n]=pe(e,["children"]);return(()=>{var r=fn();return te(r,n,!1,!0),T(r,()=>t.children),r})()},dn="_body_1oi5g_1",hn="_colorInput_1oi5g_5",gn="_h1_1oi5g_22",mn="_input_1oi5g_28",yn="_lists_1oi5g_41",Tn="_onPrimary_1oi5g_62",En="_onPrimaryDark_1oi5g_68",_n="_primary_1oi5g_74",bn="_primaryDark_1oi5g_80",pn="_result_1oi5g_86",L={body:dn,colorInput:hn,h1:gn,input:mn,lists:yn,onPrimary:Tn,onPrimaryDark:En,primary:_n,primaryDark:bn,result:pn};function Te(e){const t=Math.pow(e.r/255,2.2),n=Math.pow(e.g/255,2.2),r=Math.pow(e.b/255,2.2);return t*.2126+n*.7152+r*.0722}function Ee(e){return e<=216/24389?e*(24389/27):Math.pow(e,1/3)*116-16}function wn(e,t){const n=Ee(Te(e)),r=Ee(Te(t));return Math.max(n,r)-Math.min(n,r)}function On(e){if(!/^#?([0-9a-f]{3}){1,2}$/i.test(e))throw console.log(e),new Error("Invalid hex color format!");e=e.startsWith("#")?e.slice(1):e;const t=parseInt(e.substring(0,2),16)/255,n=parseInt(e.substring(2,4),16)/255,r=parseInt(e.substring(4,6),16)/255,i=Math.max(t,n,r),l=Math.min(t,n,r);let o;i===l?o=0:i===t?o=60*(n-r)/(i-l)+360:i===n?o=60*(r-t)/(i-l)+120:o=60*(t-n)/(i-l)+240;const s=(i+l)/2,c=i===l?0:(i-l)/(s>.5?2-i-l:i+l);return{h:o/360,s:c,l:s}}function se(e){if(!/^#?([0-9a-f]{3}){1,2}$/i.test(e))throw new Error("Invalid hex color format!");e=e.startsWith("#")?e.slice(1):e;const t=parseInt(e.substring(0,2),16),n=parseInt(e.substring(2,4),16),r=parseInt(e.substring(4,6),16);return{r:t,g:n,b:r}}function Ne(e,t,n){for(;n<0;)n+=1;for(;n>1;)n-=1;return 6*n<1?e+(t-e)*6*n:2*n<1?t:3*n<2?e+(t-e)*(2/3-n)*6:e}function J(e){let t,n,r;if(e.s==0)t=n=r=e.l;else{const i=e.l<.5?e.l*(1+e.s):e.l+e.s-e.s*e.l,l=2*e.l-i;t=Ne(l,i,e.h+1/3),n=Ne(l,i,e.h),r=Ne(l,i,e.h-1/3)}return{r:Math.round(t*255),g:Math.round(n*255),b:Math.round(r*255)}}function ce(e){return Cn(J(e))}function Cn(e){return"#"+e.r.toString(16).padStart(2,"0")+e.g.toString(16).padStart(2,"0")+e.b.toString(16).padStart(2,"0")}function je(e){const t={...On(e),s:1};let n,r,i,l;function o(c,f){let u=0;const d=Ee(Te(J(c)));for(let a=0;a<101&&(d>50?u=a/100:u=1-a/100,!(wn(J(c),J({...c,l:u}))<f));a++);return Math.max(0,Math.min(1,u))}function s(c,f){const u=f<=50,d=h=>Ee(Te(J(h)));let a=0;for(let h=0;h<101;h++)if(u){if(a=1-h/100,c={...c,l:a},d(c)<=f)break}else if(a=h/100,c={...c,l:a},d(c)>=f)break;return c}return n=s(t,36),r={...n,l:o(n,100)},i=s(t,72),l={...i,l:o(i,100)},{color:ce(n),onColor:ce(r),colorDark:ce(i),onColorDark:ce(l)}}var Rn=F("<div class=list><div class=list-leading></div><div class=list-content><div class=list-title></div><div class=list-subtitle></div></div><div class=list-trailing>");const Nn=e=>{const[t,n]=pe(e,["leading","child","trailing","subtitle","compact"]);return(()=>{var r=Rn(),i=r.firstChild,l=i.nextSibling,o=l.firstChild,s=o.nextSibling,c=l.nextSibling;return te(r,P({get"data-trailing"(){return B(t.trailing)},get"data-compact"(){return B(t.compact)}},n),!1,!0),T(i,()=>t.leading),T(o,()=>t.child),T(s,()=>t.subtitle),T(c,()=>t.trailing),r})()};var Z=(e=>(e.color="color",e.theme="theme",e))(Z||{});function Qe(e,t,n={sameSite:"Lax",expires:9999,path:"/"}){let r=e+"="+encodeURIComponent(t);if(n.expires){const i=new Date;i.setTime(i.getTime()+n.expires*24*60*60*1e3),r+="; expires="+i.toUTCString()}n.maxAge&&(r+="; max-age="+n.maxAge),n.path&&(r+="; path="+n.path),n.domain&&(r+="; domain="+n.domain),n.sameSite&&(r+="; SameSite="+n.sameSite),n.secure&&(r+="; secure"),n.httpOnly&&(r+="; httpOnly"),document.cookie=r}function Je(e){const t=e+"=",n=document.cookie.split(";");for(let r=0;r<n.length;r++){const i=n[r].trim();if(i.indexOf(t)===0)return decodeURIComponent(i.substring(t.length))}return null}async function Sn(e){await navigator.clipboard.writeText(e)}function p(e){return e.toUpperCase()}var An=F('<label class="btn btn-filled-tonal"data-icon><div class=btn-layer><input type=color>'),Be=F("<div>"),$n=F("<div><div><div>Primary Light<br><span></span></div><div>On Primary Light<br><span></span></div></div><div><div>Primary Dark<br><span></span></div><div>On Primary Dark<br><span>"),Ln=F("<h1>Color Pallette Generator");const z=e=>{const[t,n]=W(null),[r,i]=W(!1);function l(){t()&&(clearTimeout(t()),n(null),i(!1));const o=setTimeout(()=>{n(null),i(!1)},1500);Sn(e.text),i(!0),n(o)}return g(ve,{child:"Copy color",get position(){return Y.CENTER_BOTTOM},get children(){return g(De,{iconOnly:!0,onClick:l,get variant(){return e.variant??"filled-tonal"},get children(){return g(st,{get when(){return r()},get fallback(){return g(K,{children:""})},get children(){return g(K,{children:""})}})}})}})},kn=()=>{const[e,t]=we(),[n,r]=W(E.system);let i;function l(f){return`${f.r}, ${f.g}, ${f.b}`}function o(f){const u=je(f);t("colors",{seed:f,...u}),Qe(Z.color,f,{path:document.URL});const d=document.documentElement;d.style.setProperty("--color-primary-light",l(se(u.color))),d.style.setProperty("--color-on-primary-light",l(se(u.onColor))),d.style.setProperty("--color-primary-dark",l(se(u.colorDark))),d.style.setProperty("--color-on-primary-dark",l(se(u.onColorDark)))}function s(){for(const f of e.colorLists)if(f.color==e.colors.color)return;t("colorLists",f=>[...f,{seed:e.colors.seed,...je(e.colors.seed)}])}function c(){const f=document.documentElement;let u=E.dark;switch(n()){case E.light:r(E.dark),f.setAttribute("class",E.dark),u=E.dark;break;case E.dark:r(E.system),f.setAttribute("class",E.system),u=E.system;break;case E.system:r(E.light),f.setAttribute("class",E.light),u=E.light;break}Qe(Z.theme,u,{path:document.URL})}return tt(()=>{const f=document.documentElement,u=Je(Z.theme),d=Je(Z.color);u&&[E.system,E.light,E.dark].includes(u)&&(f.setAttribute("class",u),r(u)),d&&(o(d),i.value=d)}),(()=>{var f=Be();return T(f,g(ve,{child:"Change theme",get position(){return Y.CENTER_BOTTOM},get children(){return g(De,{onClick:c,variant:"filled-tonal",get children(){return g(Mt,{get children(){return[g(Re,{get when(){return n()==E.system},get children(){return[g(K,{children:""}),"System"]}}),g(Re,{get when(){return n()==E.dark},get children(){return[g(K,{children:""}),"Dark"]}}),g(Re,{get when(){return n()==E.light},get children(){return[g(K,{children:""}),"Light"]}})]}})}})}}),null),T(f,g(ve,{child:"Change color",get position(){return Y.CENTER_BOTTOM},get children(){var u=An(),d=u.firstChild,a=d.firstChild;a.addEventListener("change",b=>o(b.currentTarget.value));var h=i;return typeof h=="function"?Yt(h,a):i=a,T(d,()=>p(e.colors.seed),null),O(b=>ct(u,ut(L.colorInput),b)),O(()=>a.value=e.colors.seed),u}}),null),T(f,g(De,{variant:"filled-tonal",onClick:s,get children(){return[g(K,{children:""}),"Add to list"]}}),null),O(()=>M(f,L.input)),f})()},xn=()=>{const[e,t]=we();return(()=>{var n=$n(),r=n.firstChild,i=r.firstChild,l=i.firstChild,o=l.nextSibling,s=o.nextSibling,c=i.nextSibling,f=c.firstChild,u=f.nextSibling,d=u.nextSibling,a=r.nextSibling,h=a.firstChild,b=h.firstChild,C=b.nextSibling,x=C.nextSibling,D=h.nextSibling,R=D.firstChild,N=R.nextSibling,A=N.nextSibling;return T(s,()=>p(e.colors.color)),T(i,g(z,{get text(){return p(e.colors.color)}}),null),T(d,()=>p(e.colors.onColor)),T(c,g(z,{get text(){return p(e.colors.onColor)}}),null),T(x,()=>p(e.colors.colorDark)),T(h,g(z,{get text(){return p(e.colors.onColorDark)}}),null),T(A,()=>p(e.colors.onColorDark)),T(D,g(z,{get text(){return p(e.colors.onColorDark)}}),null),O(_=>{var le=L.result,He=L.primary,Ue=L.onPrimary,Ve=L.primaryDark,Ke=L.onPrimaryDark;return le!==_.e&&M(n,_.e=le),He!==_.t&&M(i,_.t=He),Ue!==_.a&&M(c,_.a=Ue),Ve!==_.o&&M(h,_.o=Ve),Ke!==_.i&&M(D,_.i=Ke),_},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),n})()},In=()=>{const[e,t]=we();return(()=>{var n=Be();return T(n,g(It,{get each(){return e.colorLists},children:r=>g(Nn,{get leading(){return(()=>{var i=Be();return O(()=>r.seed!=null?i.style.setProperty("background-color",r.seed):i.style.removeProperty("background-color")),i})()},get child(){return p(r.seed)},get subtitle(){return[r.color,r.onColor,r.colorDark,r.onColorDark].map(i=>p(i)).join(", ")},get trailing(){return g(z,{variant:"transparent",get text(){return["--seed: "+p(r.seed),"--color-light: "+p(r.color),"--on-color-light: "+p(r.onColor),"--color-dark: "+p(r.colorDark),"--on-color-dark: "+p(r.onColorDark)].join(`;
`)+";"}})}})})),O(()=>M(n,L.lists)),n})()},Mn=()=>{const[e,t]=gt({tooltip:{isOpen:!1,timeoutId:null},colors:{seed:"#52099a",...je("#52099a")},colorLists:[]});return g(yt.Provider,{value:[e,t],get children(){return g(an,{get classList(){return ut(L.body)},get children(){return[(()=>{var n=Ln();return O(()=>M(n,L.h1)),n})(),g(kn,{}),g(xn,{}),g(In,{})]}})}})},yt=Ot(null),we=()=>Ct(yt),vn=document.getElementById("__root__");Kt(()=>g(Mn,{}),vn);