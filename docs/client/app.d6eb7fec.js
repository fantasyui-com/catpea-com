import{n as e,s as t,S as r,i as s,e as n,a,t as o,c,b as l,d as i,f as u,g as f,h as p,j as h,k as m,l as d,m as g,o as v,p as $,q as y,r as b,u as E,v as S,w,x as _,y as P,z as x,A,B as L,C as R,D as N,E as C,F as k,G as U,H as j,I as q}from"./index.9e01c9fb.js";const I=[];function O(r,s=e){let n;const a=[];function o(e){if(t(r,e)&&(r=e,n)){const e=!I.length;for(let e=0;e<a.length;e+=1){const t=a[e];t[1](),I.push(t,r)}if(e){for(let e=0;e<I.length;e+=2)I[e][0](I[e+1]);I.length=0}}}return{set:o,update:function(e){o(e(r))},subscribe:function(t,c=e){const l=[t,c];return a.push(l),1===a.length&&(n=s(o)||e),t(r),()=>{const e=a.indexOf(l);-1!==e&&a.splice(e,1),0===a.length&&(n(),n=null)}}}}const B={},D=()=>({});function H(t){let r,s,v,$,y,b,E,S,w,_,P,x,A,L,R,N,C,k,U,j,q,I,O,B,D,H,T,V;return{c(){r=n("nav"),s=n("a"),v=n("img"),y=a(),b=n("button"),E=n("span"),S=a(),w=n("div"),_=n("ul"),P=n("li"),x=n("a"),A=o("Home "),L=n("span"),R=o("(current)"),N=a(),C=n("li"),k=n("a"),U=o("Video Library "),j=n("span"),q=o("(current)"),I=a(),O=n("li"),B=n("a"),D=o("The Warrior Book "),H=n("span"),T=o("(current)"),this.h()},l(e){r=c(e,"NAV",{class:!0});var t=l(r);s=c(t,"A",{class:!0,href:!0});var n=l(s);v=c(n,"IMG",{src:!0,alt:!0}),n.forEach(i),y=u(t),b=c(t,"BUTTON",{class:!0,type:!0});var a=l(b);E=c(a,"SPAN",{class:!0}),l(E).forEach(i),a.forEach(i),S=u(t),w=c(t,"DIV",{class:!0});var o=l(w);_=c(o,"UL",{class:!0});var p=l(_);P=c(p,"LI",{class:!0});var h=l(P);x=c(h,"A",{class:!0,href:!0});var m=l(x);A=f(m,"Home "),L=c(m,"SPAN",{class:!0});var d=l(L);R=f(d,"(current)"),d.forEach(i),m.forEach(i),h.forEach(i),N=u(p),C=c(p,"LI",{class:!0});var g=l(C);k=c(g,"A",{class:!0,href:!0});var $=l(k);U=f($,"Video Library "),j=c($,"SPAN",{class:!0});var V=l(j);q=f(V,"(current)"),V.forEach(i),$.forEach(i),g.forEach(i),I=u(p),O=c(p,"LI",{class:!0});var J=l(O);B=c(J,"A",{class:!0,href:!0});var G=l(B);D=f(G,"The Warrior Book "),H=c(G,"SPAN",{class:!0});var K=l(H);T=f(K,"(current)"),K.forEach(i),G.forEach(i),J.forEach(i),p.forEach(i),o.forEach(i),t.forEach(i),this.h()},h(){v.src!==($="cats/cat-01.png")&&p(v,"src","cats/cat-01.png"),p(v,"alt","Logo Image"),p(s,"class","navbar-brand"),p(s,"href","."),p(E,"class","navbar-toggler-icon"),p(b,"class","navbar-toggler"),p(b,"type","button"),p(L,"class","sr-only"),p(x,"class","nav-link"),p(x,"href","."),p(P,"class","nav-item"),h(P,"selected",void 0===t[0]),p(j,"class","sr-only"),p(k,"class","nav-link"),p(k,"href","/video?p=0&i=8"),p(C,"class","nav-item"),h(C,"selected","video"===t[0]),p(H,"class","sr-only"),p(B,"class","nav-link"),p(B,"href","/warrior"),p(O,"class","nav-item"),h(O,"selected","warrior"===t[0]),p(_,"class","navbar-nav mr-auto"),p(w,"class","navbar-collapse"),h(w,"collapse",t[1]),p(r,"class","navbar navbar-expand-lg navbar-light bg-secondary shadow text-white\tmb-3 rounded-sm")},m(e,n){m(e,r,n),d(r,s),d(s,v),d(r,y),d(r,b),d(b,E),d(r,S),d(r,w),d(w,_),d(_,P),d(P,x),d(x,A),d(x,L),d(L,R),d(_,N),d(_,C),d(C,k),d(k,U),d(k,j),d(j,q),d(_,I),d(_,O),d(O,B),d(B,D),d(B,H),d(H,T),V=g(b,"click",t[2])},p(e,[t]){1&t&&h(P,"selected",void 0===e[0]),1&t&&h(C,"selected","video"===e[0]),1&t&&h(O,"selected","warrior"===e[0]),2&t&&h(w,"collapse",e[1])},i:e,o:e,d(e){e&&i(r),V()}}}function T(e,t,r){let{segment:s}=t,n=!0;return e.$set=(e=>{"segment"in e&&r(0,s=e.segment)}),[s,n,function(){r(1,n=!n)}]}class V extends r{constructor(e){super(),s(this,e,T,H,t,{segment:0})}}function J(e){let t,r,s;const o=new V({props:{segment:e[0]}}),f=e[2].default,p=v(f,e,e[1],null);return{c(){$(o.$$.fragment),t=a(),r=n("main"),p&&p.c()},l(e){y(o.$$.fragment,e),t=u(e),r=c(e,"MAIN",{});var s=l(r);p&&p.l(s),s.forEach(i)},m(e,n){b(o,e,n),m(e,t,n),m(e,r,n),p&&p.m(r,null),s=!0},p(e,[t]){const r={};1&t&&(r.segment=e[0]),o.$set(r),p&&p.p&&2&t&&p.p(E(f,e,e[1],null),S(f,e[1],t,null))},i(e){s||(w(o.$$.fragment,e),w(p,e),s=!0)},o(e){_(o.$$.fragment,e),_(p,e),s=!1},d(e){P(o,e),e&&i(t),e&&i(r),p&&p.d(e)}}}function G(e,t,r){let{segment:s}=t,{$$slots:n={},$$scope:a}=t;return e.$set=(e=>{"segment"in e&&r(0,s=e.segment),"$$scope"in e&&r(1,a=e.$$scope)}),[s,a,n]}class K extends r{constructor(e){super(),s(this,e,G,J,t,{segment:0})}}function W(e){let t,r,s=e[1].stack+"";return{c(){t=n("pre"),r=o(s)},l(e){t=c(e,"PRE",{});var n=l(t);r=f(n,s),n.forEach(i)},m(e,s){m(e,t,s),d(t,r)},p(e,t){2&t&&s!==(s=e[1].stack+"")&&x(r,s)},d(e){e&&i(t)}}}function M(t){let r,s,h,g,v,$,y,b,E,S=t[1].message+"";document.title=r=t[0];let w=t[2]&&t[1].stack&&W(t);return{c(){s=a(),h=n("h1"),g=o(t[0]),v=a(),$=n("p"),y=o(S),b=a(),w&&w.c(),E=A(),this.h()},l(e){L('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(i),s=u(e),h=c(e,"H1",{class:!0});var r=l(h);g=f(r,t[0]),r.forEach(i),v=u(e),$=c(e,"P",{class:!0});var n=l($);y=f(n,S),n.forEach(i),b=u(e),w&&w.l(e),E=A(),this.h()},h(){p(h,"class","svelte-8od9u6"),p($,"class","svelte-8od9u6")},m(e,t){m(e,s,t),m(e,h,t),d(h,g),m(e,v,t),m(e,$,t),d($,y),m(e,b,t),w&&w.m(e,t),m(e,E,t)},p(e,[t]){1&t&&r!==(r=e[0])&&(document.title=r),1&t&&x(g,e[0]),2&t&&S!==(S=e[1].message+"")&&x(y,S),e[2]&&e[1].stack?w?w.p(e,t):((w=W(e)).c(),w.m(E.parentNode,E)):w&&(w.d(1),w=null)},i:e,o:e,d(e){e&&i(s),e&&i(h),e&&i(v),e&&i($),e&&i(b),w&&w.d(e),e&&i(E)}}}function z(e,t,r){let{status:s}=t,{error:n}=t;return e.$set=(e=>{"status"in e&&r(0,s=e.status),"error"in e&&r(1,n=e.error)}),[s,n,!1]}class F extends r{constructor(e){super(),s(this,e,z,M,t,{status:0,error:1})}}function X(e){let t,r;const s=[e[4].props];var n=e[4].component;function a(e){let t={};for(let e=0;e<s.length;e+=1)t=R(t,s[e]);return{props:t}}if(n)var o=new n(a());return{c(){o&&$(o.$$.fragment),t=A()},l(e){o&&y(o.$$.fragment,e),t=A()},m(e,s){o&&b(o,e,s),m(e,t,s),r=!0},p(e,r){const c=16&r?N(s,[C(e[4].props)]):{};if(n!==(n=e[4].component)){if(o){U();const e=o;_(e.$$.fragment,1,0,()=>{P(e,1)}),j()}n?(o=new n(a()),$(o.$$.fragment),w(o.$$.fragment,1),b(o,t.parentNode,t)):o=null}else n&&o.$set(c)},i(e){r||(o&&w(o.$$.fragment,e),r=!0)},o(e){o&&_(o.$$.fragment,e),r=!1},d(e){e&&i(t),o&&P(o,e)}}}function Y(e){let t;const r=new F({props:{error:e[0],status:e[1]}});return{c(){$(r.$$.fragment)},l(e){y(r.$$.fragment,e)},m(e,s){b(r,e,s),t=!0},p(e,t){const s={};1&t&&(s.error=e[0]),2&t&&(s.status=e[1]),r.$set(s)},i(e){t||(w(r.$$.fragment,e),t=!0)},o(e){_(r.$$.fragment,e),t=!1},d(e){P(r,e)}}}function Q(e){let t,r,s,n;const a=[Y,X],o=[];function c(e,t){return e[0]?0:1}return t=c(e),r=o[t]=a[t](e),{c(){r.c(),s=A()},l(e){r.l(e),s=A()},m(e,r){o[t].m(e,r),m(e,s,r),n=!0},p(e,n){let l=t;(t=c(e))===l?o[t].p(e,n):(U(),_(o[l],1,1,()=>{o[l]=null}),j(),(r=o[t])||(r=o[t]=a[t](e)).c(),w(r,1),r.m(s.parentNode,s))},i(e){n||(w(r),n=!0)},o(e){_(r),n=!1},d(e){o[t].d(e),e&&i(s)}}}function Z(e){let t;const r=[{segment:e[2][0]},e[3].props];let s={$$slots:{default:[Q]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)s=R(s,r[e]);const n=new K({props:s});return{c(){$(n.$$.fragment)},l(e){y(n.$$.fragment,e)},m(e,r){b(n,e,r),t=!0},p(e,[t]){const s=12&t?N(r,[4&t&&{segment:e[2][0]},8&t&&C(e[3].props)]):{};83&t&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){t||(w(n.$$.fragment,e),t=!0)},o(e){_(n.$$.fragment,e),t=!1},d(e){P(n,e)}}}function ee(e,t,r){let{stores:s}=t,{error:n}=t,{status:a}=t,{segments:o}=t,{level0:c}=t,{level1:l=null}=t;return k(B,s),e.$set=(e=>{"stores"in e&&r(5,s=e.stores),"error"in e&&r(0,n=e.error),"status"in e&&r(1,a=e.status),"segments"in e&&r(2,o=e.segments),"level0"in e&&r(3,c=e.level0),"level1"in e&&r(4,l=e.level1)}),[n,a,o,c,l,s]}class te extends r{constructor(e){super(),s(this,e,ee,Z,t,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const re=[],se=[{js:()=>import("./index.8902db0a.js"),css:[]},{js:()=>import("./warrior.f16c0741.js"),css:["app.d6eb7fec.css"]},{js:()=>import("./video.184f1540.js"),css:["app.d6eb7fec.css"]}],ne=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/warrior\/?$/,parts:[{i:1}]},{pattern:/^\/video\/?$/,parts:[{i:2}]}];const ae="undefined"!=typeof __SAPPER__&&__SAPPER__;let oe,ce,le,ie=!1,ue=[],fe="{}";const pe={page:O({}),preloading:O(null),session:O(ae&&ae.session)};let he,me;pe.session.subscribe(async e=>{if(he=e,!ie)return;me=!0;const t=Se(new URL(location.href)),r=ce={},{redirect:s,props:n,branch:a}=await xe(t);r===ce&&await Pe(s,a,n,t.page)});let de,ge=null;let ve,$e=1;const ye="undefined"!=typeof history?history:{pushState:(e,t,r)=>{},replaceState:(e,t,r)=>{},scrollRestoration:""},be={};function Ee(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,r,s=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[r]&&(t[r]=[t[r]]),"object"==typeof t[r]?t[r].push(s):t[r]=s}),t}function Se(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(ae.baseUrl))return null;let t=e.pathname.slice(ae.baseUrl.length);if(""===t&&(t="/"),!re.some(e=>e.test(t)))for(let r=0;r<ne.length;r+=1){const s=ne[r],n=s.pattern.exec(t);if(n){const r=Ee(e.search),a=s.parts[s.parts.length-1],o=a.params?a.params(n):{},c={host:location.host,path:t,query:r,params:o};return{href:e.href,route:s,match:n,page:c}}}}function we(){return{x:pageXOffset,y:pageYOffset}}async function _e(e,t,r,s){if(t)ve=t;else{const e=we();be[ve]=e,t=ve=++$e,be[ve]=r?e:{x:0,y:0}}ve=t,oe&&pe.preloading.set(!0);const n=ge&&ge.href===e.href?ge.promise:xe(e);ge=null;const a=ce={},{redirect:o,props:c,branch:l}=await n;if(a===ce&&(await Pe(o,l,c,e.page),document.activeElement&&document.activeElement.blur(),!r)){let e=be[t];if(s){const t=document.getElementById(s.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}be[ve]=e,e&&scrollTo(e.x,e.y)}}async function Pe(e,t,r,s){if(e)return function(e,t={replaceState:!1}){const r=Se(new URL(e,document.baseURI));return r?(ye[t.replaceState?"replaceState":"pushState"]({id:ve},"",e),_e(r,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(pe.page.set(s),pe.preloading.set(!1),oe)oe.$set(r);else{r.stores={page:{subscribe:pe.page.subscribe},preloading:{subscribe:pe.preloading.subscribe},session:pe.session},r.level0={props:await le};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)Le(e.nextSibling);Le(e),Le(t)}oe=new te({target:de,props:r,hydrate:!0})}ue=t,fe=JSON.stringify(s.query),ie=!0,me=!1}async function xe(e){const{route:t,page:r}=e,s=r.path.split("/").filter(Boolean);let n=null;const a={error:null,status:200,segments:[s[0]]},o={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(n&&(n.statusCode!==e||n.location!==t))throw new Error("Conflicting redirects");n={statusCode:e,location:t}},error:(e,t)=>{a.error="string"==typeof t?new Error(t):t,a.status=e}};let c;le||(le=ae.preloaded[0]||D.call(o,{host:r.host,path:r.path,query:r.query,params:{}},he));let l=1;try{const n=JSON.stringify(r.query),i=t.pattern.exec(r.path);let u=!1;c=await Promise.all(t.parts.map(async(t,c)=>{const f=s[c];if(function(e,t,r,s){if(s!==fe)return!0;const n=ue[e];return!!n&&(t!==n.segment||!(!n.match||JSON.stringify(n.match.slice(1,e+2))===JSON.stringify(r.slice(1,e+2)))||void 0)}(c,f,i,n)&&(u=!0),a.segments[l]=s[c+1],!t)return{segment:f};const p=l++;if(!me&&!u&&ue[c]&&ue[c].part===t.i)return ue[c];u=!1;const{default:h,preload:m}=await function(e){const t="string"==typeof e.css?[]:e.css.map(Ae);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(se[t.i]);let d;return d=ie||!ae.preloaded[c+1]?m?await m.call(o,{host:r.host,path:r.path,query:r.query,params:t.params?t.params(e.match):{}},he):{}:ae.preloaded[c+1],a[`level${p}`]={component:h,props:d,segment:f,match:i,part:t.i}}))}catch(e){a.error=e,a.status=500,c=[]}return{redirect:n,props:a,branch:c}}function Ae(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,r)=>{const s=document.createElement("link");s.rel="stylesheet",s.href=t,s.onload=(()=>e()),s.onerror=r,document.head.appendChild(s)})}function Le(e){e.parentNode.removeChild(e)}function Re(e){const t=Se(new URL(e,document.baseURI));if(t)return ge&&e===ge.href||function(e,t){ge={href:e,promise:t}}(e,xe(t)),ge.promise}function Ne(e){var t;return"scrollRestoration"in ye&&(ye.scrollRestoration="manual"),t=e.target,de=t,addEventListener("click",je),addEventListener("popstate",Ie),addEventListener("touchstart",Ue),addEventListener("mousemove",ke),Promise.resolve().then(()=>{const{hash:e,href:t}=location;ye.replaceState({id:$e},"",t);const r=new URL(location.href);if(ae.error)return function(e){const{host:t,pathname:r,search:s}=location,{session:n,preloaded:a,status:o,error:c}=ae;le||(le=a&&a[0]),Pe(null,[],{error:c,status:o,session:n,level0:{props:le},level1:{props:{status:o,error:c},component:F},segments:a},{host:t,path:r,query:Ee(s),params:{}})}();const s=Se(r);return s?_e(s,$e,!0,e):void 0})}let Ce;function ke(e){clearTimeout(Ce),Ce=setTimeout(()=>{Ue(e)},20)}function Ue(e){const t=qe(e.target);t&&"prefetch"===t.rel&&Re(t.href)}function je(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=qe(e.target);if(!t)return;if(!t.href)return;const r="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,s=String(r?t.href.baseVal:t.href);if(s===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(r?t.target.baseVal:t.target)return;const n=new URL(s);if(n.pathname===location.pathname&&n.search===location.search)return;const a=Se(n);if(a){_e(a,null,t.hasAttribute("sapper-noscroll"),n.hash),e.preventDefault(),ye.pushState({id:ve},"",n.href)}}function qe(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Ie(e){if(be[ve]=we(),e.state){const t=Se(new URL(location.href));t?_e(t,e.state.id):location.href=location.href}else(function(e){ve=e})($e=$e+1),ye.replaceState({id:ve},"",location.href)}const Oe=()=>q(B);export{Oe as a,Ne as s};