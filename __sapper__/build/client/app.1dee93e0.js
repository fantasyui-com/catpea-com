import{n as e,s as t,S as s,i as r,e as n,a,t as o,c,b as l,d as i,f as u,g as f,h as p,j as h,k as m,l as d,m as g,o as v,p as $,q as y,r as b,u as E,v as S,w,x,y as P,z as A,A as L,B as R,C as _,D as N,E as U,F as C,G as q,H as k,I}from"./index.9e01c9fb.js";const O=[];function j(s,r=e){let n;const a=[];function o(e){if(t(s,e)&&(s=e,n)){const e=!O.length;for(let e=0;e<a.length;e+=1){const t=a[e];t[1](),O.push(t,s)}if(e){for(let e=0;e<O.length;e+=2)O[e][0](O[e+1]);O.length=0}}}return{set:o,update:function(e){o(e(s))},subscribe:function(t,c=e){const l=[t,c];return a.push(l),1===a.length&&(n=r(o)||e),t(s),()=>{const e=a.indexOf(l);-1!==e&&a.splice(e,1),0===a.length&&(n(),n=null)}}}}const V={},D=()=>({});function H(t){let s,r,v,$,y,b,E,S,w,x,P,A,L,R,_,N,U,C,q,k,I,O;return{c(){s=n("nav"),r=n("a"),v=n("img"),y=a(),b=n("button"),E=n("span"),S=a(),w=n("div"),x=n("ul"),P=n("li"),A=n("a"),L=o("Home "),R=n("span"),_=o("(current)"),N=a(),U=n("li"),C=n("a"),q=o("Video Library "),k=n("span"),I=o("(current)"),this.h()},l(e){s=c(e,"NAV",{class:!0});var t=l(s);r=c(t,"A",{class:!0,href:!0});var n=l(r);v=c(n,"IMG",{src:!0,alt:!0}),n.forEach(i),y=u(t),b=c(t,"BUTTON",{class:!0,type:!0});var a=l(b);E=c(a,"SPAN",{class:!0}),l(E).forEach(i),a.forEach(i),S=u(t),w=c(t,"DIV",{class:!0});var o=l(w);x=c(o,"UL",{class:!0});var p=l(x);P=c(p,"LI",{class:!0});var h=l(P);A=c(h,"A",{class:!0,href:!0});var m=l(A);L=f(m,"Home "),R=c(m,"SPAN",{class:!0});var d=l(R);_=f(d,"(current)"),d.forEach(i),m.forEach(i),h.forEach(i),N=u(p),U=c(p,"LI",{class:!0});var g=l(U);C=c(g,"A",{class:!0,href:!0});var $=l(C);q=f($,"Video Library "),k=c($,"SPAN",{class:!0});var O=l(k);I=f(O,"(current)"),O.forEach(i),$.forEach(i),g.forEach(i),p.forEach(i),o.forEach(i),t.forEach(i),this.h()},h(){v.src!==($="cats/cat-01.png")&&p(v,"src","cats/cat-01.png"),p(v,"alt","Logo Image"),p(r,"class","navbar-brand"),p(r,"href","."),p(E,"class","navbar-toggler-icon"),p(b,"class","navbar-toggler"),p(b,"type","button"),p(R,"class","sr-only"),p(A,"class","nav-link"),p(A,"href","."),p(P,"class","nav-item"),h(P,"selected",void 0===t[0]),p(k,"class","sr-only"),p(C,"class","nav-link"),p(C,"href","/video?p=0&i=8"),p(U,"class","nav-item"),h(U,"selected","videos"===t[0]),p(x,"class","navbar-nav mr-auto"),p(w,"class","navbar-collapse"),h(w,"collapse",t[1]),p(s,"class","navbar navbar-expand-lg navbar-light bg-secondary shadow text-white\tmb-3 rounded-sm")},m(e,n){m(e,s,n),d(s,r),d(r,v),d(s,y),d(s,b),d(b,E),d(s,S),d(s,w),d(w,x),d(x,P),d(P,A),d(A,L),d(A,R),d(R,_),d(x,N),d(x,U),d(U,C),d(C,q),d(C,k),d(k,I),O=g(b,"click",t[2])},p(e,[t]){1&t&&h(P,"selected",void 0===e[0]),1&t&&h(U,"selected","videos"===e[0]),2&t&&h(w,"collapse",e[1])},i:e,o:e,d(e){e&&i(s),O()}}}function B(e,t,s){let{segment:r}=t,n=!0;return e.$set=(e=>{"segment"in e&&s(0,r=e.segment)}),[r,n,function(){s(1,n=!n)}]}class T extends s{constructor(e){super(),r(this,e,B,H,t,{segment:0})}}function J(e){let t,s,r;const o=new T({props:{segment:e[0]}}),f=e[2].default,p=v(f,e,e[1],null);return{c(){$(o.$$.fragment),t=a(),s=n("main"),p&&p.c()},l(e){y(o.$$.fragment,e),t=u(e),s=c(e,"MAIN",{});var r=l(s);p&&p.l(r),r.forEach(i)},m(e,n){b(o,e,n),m(e,t,n),m(e,s,n),p&&p.m(s,null),r=!0},p(e,[t]){const s={};1&t&&(s.segment=e[0]),o.$set(s),p&&p.p&&2&t&&p.p(E(f,e,e[1],null),S(f,e[1],t,null))},i(e){r||(w(o.$$.fragment,e),w(p,e),r=!0)},o(e){x(o.$$.fragment,e),x(p,e),r=!1},d(e){P(o,e),e&&i(t),e&&i(s),p&&p.d(e)}}}function G(e,t,s){let{segment:r}=t,{$$slots:n={},$$scope:a}=t;return e.$set=(e=>{"segment"in e&&s(0,r=e.segment),"$$scope"in e&&s(1,a=e.$$scope)}),[r,a,n]}class K extends s{constructor(e){super(),r(this,e,G,J,t,{segment:0})}}function M(e){let t,s,r=e[1].stack+"";return{c(){t=n("pre"),s=o(r)},l(e){t=c(e,"PRE",{});var n=l(t);s=f(n,r),n.forEach(i)},m(e,r){m(e,t,r),d(t,s)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&A(s,r)},d(e){e&&i(t)}}}function z(t){let s,r,h,g,v,$,y,b,E,S=t[1].message+"";document.title=s=t[0];let w=t[2]&&t[1].stack&&M(t);return{c(){r=a(),h=n("h1"),g=o(t[0]),v=a(),$=n("p"),y=o(S),b=a(),w&&w.c(),E=L(),this.h()},l(e){R('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(i),r=u(e),h=c(e,"H1",{class:!0});var s=l(h);g=f(s,t[0]),s.forEach(i),v=u(e),$=c(e,"P",{class:!0});var n=l($);y=f(n,S),n.forEach(i),b=u(e),w&&w.l(e),E=L(),this.h()},h(){p(h,"class","svelte-8od9u6"),p($,"class","svelte-8od9u6")},m(e,t){m(e,r,t),m(e,h,t),d(h,g),m(e,v,t),m(e,$,t),d($,y),m(e,b,t),w&&w.m(e,t),m(e,E,t)},p(e,[t]){1&t&&s!==(s=e[0])&&(document.title=s),1&t&&A(g,e[0]),2&t&&S!==(S=e[1].message+"")&&A(y,S),e[2]&&e[1].stack?w?w.p(e,t):((w=M(e)).c(),w.m(E.parentNode,E)):w&&(w.d(1),w=null)},i:e,o:e,d(e){e&&i(r),e&&i(h),e&&i(v),e&&i($),e&&i(b),w&&w.d(e),e&&i(E)}}}function F(e,t,s){let{status:r}=t,{error:n}=t;return e.$set=(e=>{"status"in e&&s(0,r=e.status),"error"in e&&s(1,n=e.error)}),[r,n,!1]}class W extends s{constructor(e){super(),r(this,e,F,z,t,{status:0,error:1})}}function X(e){let t,s;const r=[e[4].props];var n=e[4].component;function a(e){let t={};for(let e=0;e<r.length;e+=1)t=_(t,r[e]);return{props:t}}if(n)var o=new n(a());return{c(){o&&$(o.$$.fragment),t=L()},l(e){o&&y(o.$$.fragment,e),t=L()},m(e,r){o&&b(o,e,r),m(e,t,r),s=!0},p(e,s){const c=16&s?N(r,[U(e[4].props)]):{};if(n!==(n=e[4].component)){if(o){q();const e=o;x(e.$$.fragment,1,0,()=>{P(e,1)}),k()}n?(o=new n(a()),$(o.$$.fragment),w(o.$$.fragment,1),b(o,t.parentNode,t)):o=null}else n&&o.$set(c)},i(e){s||(o&&w(o.$$.fragment,e),s=!0)},o(e){o&&x(o.$$.fragment,e),s=!1},d(e){e&&i(t),o&&P(o,e)}}}function Y(e){let t;const s=new W({props:{error:e[0],status:e[1]}});return{c(){$(s.$$.fragment)},l(e){y(s.$$.fragment,e)},m(e,r){b(s,e,r),t=!0},p(e,t){const r={};1&t&&(r.error=e[0]),2&t&&(r.status=e[1]),s.$set(r)},i(e){t||(w(s.$$.fragment,e),t=!0)},o(e){x(s.$$.fragment,e),t=!1},d(e){P(s,e)}}}function Q(e){let t,s,r,n;const a=[Y,X],o=[];function c(e,t){return e[0]?0:1}return t=c(e),s=o[t]=a[t](e),{c(){s.c(),r=L()},l(e){s.l(e),r=L()},m(e,s){o[t].m(e,s),m(e,r,s),n=!0},p(e,n){let l=t;(t=c(e))===l?o[t].p(e,n):(q(),x(o[l],1,1,()=>{o[l]=null}),k(),(s=o[t])||(s=o[t]=a[t](e)).c(),w(s,1),s.m(r.parentNode,r))},i(e){n||(w(s),n=!0)},o(e){x(s),n=!1},d(e){o[t].d(e),e&&i(r)}}}function Z(e){let t;const s=[{segment:e[2][0]},e[3].props];let r={$$slots:{default:[Q]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)r=_(r,s[e]);const n=new K({props:r});return{c(){$(n.$$.fragment)},l(e){y(n.$$.fragment,e)},m(e,s){b(n,e,s),t=!0},p(e,[t]){const r=12&t?N(s,[4&t&&{segment:e[2][0]},8&t&&U(e[3].props)]):{};83&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){t||(w(n.$$.fragment,e),t=!0)},o(e){x(n.$$.fragment,e),t=!1},d(e){P(n,e)}}}function ee(e,t,s){let{stores:r}=t,{error:n}=t,{status:a}=t,{segments:o}=t,{level0:c}=t,{level1:l=null}=t;return C(V,r),e.$set=(e=>{"stores"in e&&s(5,r=e.stores),"error"in e&&s(0,n=e.error),"status"in e&&s(1,a=e.status),"segments"in e&&s(2,o=e.segments),"level0"in e&&s(3,c=e.level0),"level1"in e&&s(4,l=e.level1)}),[n,a,o,c,l,r]}class te extends s{constructor(e){super(),r(this,e,ee,Z,t,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const se=[],re=[{js:()=>import("./index.17e87a81.js"),css:[]},{js:()=>import("./video.5282d6cf.js"),css:["app.1dee93e0.css"]}],ne=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/video\/?$/,parts:[{i:1}]}];const ae="undefined"!=typeof __SAPPER__&&__SAPPER__;let oe,ce,le,ie=!1,ue=[],fe="{}";const pe={page:j({}),preloading:j(null),session:j(ae&&ae.session)};let he,me;pe.session.subscribe(async e=>{if(he=e,!ie)return;me=!0;const t=Se(new URL(location.href)),s=ce={},{redirect:r,props:n,branch:a}=await Ae(t);s===ce&&await Pe(r,a,n,t.page)});let de,ge=null;let ve,$e=1;const ye="undefined"!=typeof history?history:{pushState:(e,t,s)=>{},replaceState:(e,t,s)=>{},scrollRestoration:""},be={};function Ee(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,s,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[s]&&(t[s]=[t[s]]),"object"==typeof t[s]?t[s].push(r):t[s]=r}),t}function Se(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(ae.baseUrl))return null;let t=e.pathname.slice(ae.baseUrl.length);if(""===t&&(t="/"),!se.some(e=>e.test(t)))for(let s=0;s<ne.length;s+=1){const r=ne[s],n=r.pattern.exec(t);if(n){const s=Ee(e.search),a=r.parts[r.parts.length-1],o=a.params?a.params(n):{},c={host:location.host,path:t,query:s,params:o};return{href:e.href,route:r,match:n,page:c}}}}function we(){return{x:pageXOffset,y:pageYOffset}}async function xe(e,t,s,r){if(t)ve=t;else{const e=we();be[ve]=e,t=ve=++$e,be[ve]=s?e:{x:0,y:0}}ve=t,oe&&pe.preloading.set(!0);const n=ge&&ge.href===e.href?ge.promise:Ae(e);ge=null;const a=ce={},{redirect:o,props:c,branch:l}=await n;if(a===ce&&(await Pe(o,l,c,e.page),document.activeElement&&document.activeElement.blur(),!s)){let e=be[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}be[ve]=e,e&&scrollTo(e.x,e.y)}}async function Pe(e,t,s,r){if(e)return function(e,t={replaceState:!1}){const s=Se(new URL(e,document.baseURI));return s?(ye[t.replaceState?"replaceState":"pushState"]({id:ve},"",e),xe(s,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(pe.page.set(r),pe.preloading.set(!1),oe)oe.$set(s);else{s.stores={page:{subscribe:pe.page.subscribe},preloading:{subscribe:pe.preloading.subscribe},session:pe.session},s.level0={props:await le};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)Re(e.nextSibling);Re(e),Re(t)}oe=new te({target:de,props:s,hydrate:!0})}ue=t,fe=JSON.stringify(r.query),ie=!0,me=!1}async function Ae(e){const{route:t,page:s}=e,r=s.path.split("/").filter(Boolean);let n=null;const a={error:null,status:200,segments:[r[0]]},o={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(n&&(n.statusCode!==e||n.location!==t))throw new Error("Conflicting redirects");n={statusCode:e,location:t}},error:(e,t)=>{a.error="string"==typeof t?new Error(t):t,a.status=e}};let c;le||(le=ae.preloaded[0]||D.call(o,{host:s.host,path:s.path,query:s.query,params:{}},he));let l=1;try{const n=JSON.stringify(s.query),i=t.pattern.exec(s.path);let u=!1;c=await Promise.all(t.parts.map(async(t,c)=>{const f=r[c];if(function(e,t,s,r){if(r!==fe)return!0;const n=ue[e];return!!n&&(t!==n.segment||!(!n.match||JSON.stringify(n.match.slice(1,e+2))===JSON.stringify(s.slice(1,e+2)))||void 0)}(c,f,i,n)&&(u=!0),a.segments[l]=r[c+1],!t)return{segment:f};const p=l++;if(!me&&!u&&ue[c]&&ue[c].part===t.i)return ue[c];u=!1;const{default:h,preload:m}=await function(e){const t="string"==typeof e.css?[]:e.css.map(Le);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(re[t.i]);let d;return d=ie||!ae.preloaded[c+1]?m?await m.call(o,{host:s.host,path:s.path,query:s.query,params:t.params?t.params(e.match):{}},he):{}:ae.preloaded[c+1],a[`level${p}`]={component:h,props:d,segment:f,match:i,part:t.i}}))}catch(e){a.error=e,a.status=500,c=[]}return{redirect:n,props:a,branch:c}}function Le(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,s)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=(()=>e()),r.onerror=s,document.head.appendChild(r)})}function Re(e){e.parentNode.removeChild(e)}function _e(e){const t=Se(new URL(e,document.baseURI));if(t)return ge&&e===ge.href||function(e,t){ge={href:e,promise:t}}(e,Ae(t)),ge.promise}function Ne(e){var t;return"scrollRestoration"in ye&&(ye.scrollRestoration="manual"),t=e.target,de=t,addEventListener("click",ke),addEventListener("popstate",Oe),addEventListener("touchstart",qe),addEventListener("mousemove",Ce),Promise.resolve().then(()=>{const{hash:e,href:t}=location;ye.replaceState({id:$e},"",t);const s=new URL(location.href);if(ae.error)return function(e){const{host:t,pathname:s,search:r}=location,{session:n,preloaded:a,status:o,error:c}=ae;le||(le=a&&a[0]),Pe(null,[],{error:c,status:o,session:n,level0:{props:le},level1:{props:{status:o,error:c},component:W},segments:a},{host:t,path:s,query:Ee(r),params:{}})}();const r=Se(s);return r?xe(r,$e,!0,e):void 0})}let Ue;function Ce(e){clearTimeout(Ue),Ue=setTimeout(()=>{qe(e)},20)}function qe(e){const t=Ie(e.target);t&&"prefetch"===t.rel&&_e(t.href)}function ke(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=Ie(e.target);if(!t)return;if(!t.href)return;const s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(s?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(s?t.target.baseVal:t.target)return;const n=new URL(r);if(n.pathname===location.pathname&&n.search===location.search)return;const a=Se(n);if(a){xe(a,null,t.hasAttribute("sapper-noscroll"),n.hash),e.preventDefault(),ye.pushState({id:ve},"",n.href)}}function Ie(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Oe(e){if(be[ve]=we(),e.state){const t=Se(new URL(location.href));t?xe(t,e.state.id):location.href=location.href}else(function(e){ve=e})($e=$e+1),ye.replaceState({id:ve},"",location.href)}const je=()=>I(V);export{je as a,Ne as s};