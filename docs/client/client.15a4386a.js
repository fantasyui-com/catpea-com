function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function i(t,e,n,r){if(t){const s=l(t,e,n,r);return t[0](s)}}function l(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function u(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}function f(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function p(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function m(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function v(){return $(" ")}function y(){return $("")}function b(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function E(t){return function(e){return e.preventDefault(),t.call(this,e)}}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r||n[r]&&n[r].set?t[r]=e[r]:w(t,r,e[r])}function S(t){return""===t?void 0:+t}function x(t){return Array.from(t.childNodes)}function A(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;for(;e<s.attributes.length;){const t=s.attributes[e];n[t.name]?e++:s.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):g(e)}function L(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return $(e)}function P(t){return L(t," ")}function N(t,e){e=""+e,t.data!==e&&(t.data=e)}function R(t,e){(null!=e||t.value)&&(t.value=e)}function k(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function C(t,e,n){t.classList[n?"add":"remove"](e)}function O(t,e=document.body){return Array.from(e.querySelectorAll(t))}class j{constructor(t,e=null){this.e=g("div"),this.a=e,this.u(t)}m(t,e=null){for(let n=0;n<this.n.length;n+=1)h(t,this.n[n],e);this.t=t}u(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}p(t){this.d(),this.u(t),this.m(this.t,this.a)}d(){this.n.forEach(d)}}let q;function U(t){q=t}function I(){if(!q)throw new Error("Function called outside component initialization");return q}function T(t){I().$$.on_mount.push(t)}function D(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}const B=[],H=[],M=[],V=[],J=Promise.resolve();let W=!1;function K(t){M.push(t)}let G=!1;const z=new Set;function F(){if(!G){G=!0;do{for(let t=0;t<B.length;t+=1){const e=B[t];U(e),Q(e.$$)}for(B.length=0;H.length;)H.pop()();for(let t=0;t<M.length;t+=1){const e=M[t];z.has(e)||(z.add(e),e())}M.length=0}while(B.length);for(;V.length;)V.pop()();W=!1,G=!1,z.clear()}}function Q(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}const X=new Set;let Y;function Z(){Y={r:0,c:[],p:Y}}function tt(){Y.r||s(Y.c),Y=Y.p}function et(t,e){t&&t.i&&(X.delete(t),t.i(e))}function nt(t,e,n,r){if(t&&t.o){if(X.has(t))return;X.add(t),Y.c.push(()=>{X.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function rt(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function st(t){return"object"==typeof t&&null!==t?t:{}}function ot(t){t&&t.c()}function at(t,e){t&&t.l(e)}function ct(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),K(()=>{const e=c.map(n).filter(o);i?i.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(K)}function it(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){-1===t.$$.dirty[0]&&(B.push(t),W||(W=!0,J.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ut(e,n,o,a,c,i,l=[-1]){const u=q;U(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let h=!1;if(p.ctx=o?o(e,f,(t,n,...r)=>{const s=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=s)&&(p.bound[t]&&p.bound[t](s),h&&lt(e,t)),n}):[],p.update(),h=!0,s(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){const t=x(n.target);p.fragment&&p.fragment.l(t),t.forEach(d)}else p.fragment&&p.fragment.c();n.intro&&et(e.$$.fragment),ct(e,n.target,n.anchor),F()}U(u)}class ft{$destroy(){it(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const pt=[];function ht(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!pt.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),pt.push(n,e)}if(t){for(let t=0;t<pt.length;t+=2)pt[t][0](pt[t+1]);pt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const i=[a,c];return s.push(i),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const dt={},mt=()=>({});function gt(e){let n,r,s,o,a,c,i,l,u,f,m,y,E,_,S,N,R,k,O,j,q,U,I,T,D,B,H,M;return{c(){n=g("nav"),r=g("a"),s=g("img"),a=v(),c=g("button"),i=g("span"),l=v(),u=g("div"),f=g("ul"),m=g("li"),y=g("a"),E=$("Home "),_=g("span"),S=$("(current)"),N=v(),R=g("li"),k=g("a"),O=$("Video Library "),j=g("span"),q=$("(current)"),U=v(),I=g("li"),T=g("a"),D=$("The Warrior Book "),B=g("span"),H=$("(current)"),this.h()},l(t){var e=x(n=A(t,"NAV",{class:!0})),o=x(r=A(e,"A",{class:!0,href:!0}));s=A(o,"IMG",{src:!0,alt:!0}),o.forEach(d),a=P(e);var p=x(c=A(e,"BUTTON",{class:!0,type:!0}));x(i=A(p,"SPAN",{class:!0})).forEach(d),p.forEach(d),l=P(e);var h=x(u=A(e,"DIV",{class:!0})),g=x(f=A(h,"UL",{class:!0})),$=x(m=A(g,"LI",{class:!0})),v=x(y=A($,"A",{class:!0,href:!0}));E=L(v,"Home ");var b=x(_=A(v,"SPAN",{class:!0}));S=L(b,"(current)"),b.forEach(d),v.forEach(d),$.forEach(d),N=P(g);var w=x(R=A(g,"LI",{class:!0})),C=x(k=A(w,"A",{class:!0,href:!0}));O=L(C,"Video Library ");var M=x(j=A(C,"SPAN",{class:!0}));q=L(M,"(current)"),M.forEach(d),C.forEach(d),w.forEach(d),U=P(g);var V=x(I=A(g,"LI",{class:!0})),J=x(T=A(V,"A",{class:!0,href:!0}));D=L(J,"The Warrior Book ");var W=x(B=A(J,"SPAN",{class:!0}));H=L(W,"(current)"),W.forEach(d),J.forEach(d),V.forEach(d),g.forEach(d),h.forEach(d),e.forEach(d),this.h()},h(){s.src!==(o="cats/cat-01.png")&&w(s,"src","cats/cat-01.png"),w(s,"alt","Logo Image"),w(r,"class","navbar-brand"),w(r,"href","."),w(i,"class","navbar-toggler-icon"),w(c,"class","navbar-toggler"),w(c,"type","button"),w(_,"class","sr-only"),w(y,"class","nav-link"),w(y,"href","."),w(m,"class","nav-item"),C(m,"selected",void 0===e[0]),w(j,"class","sr-only"),w(k,"class","nav-link"),w(k,"href","/video?p=0&i=8"),w(R,"class","nav-item"),C(R,"selected","video"===e[0]),w(B,"class","sr-only"),w(T,"class","nav-link"),w(T,"href","/warrior"),w(I,"class","nav-item"),C(I,"selected","warrior"===e[0]),w(f,"class","navbar-nav mr-auto"),w(u,"class","navbar-collapse"),C(u,"collapse",e[1]),w(n,"class","navbar navbar-expand-lg navbar-light bg-secondary shadow text-white\tmb-3 rounded-sm")},m(t,o,d){h(t,n,o),p(n,r),p(r,s),p(n,a),p(n,c),p(c,i),p(n,l),p(n,u),p(u,f),p(f,m),p(m,y),p(y,E),p(y,_),p(_,S),p(f,N),p(f,R),p(R,k),p(k,O),p(k,j),p(j,q),p(f,U),p(f,I),p(I,T),p(T,D),p(T,B),p(B,H),d&&M(),M=b(c,"click",e[2])},p(t,[e]){1&e&&C(m,"selected",void 0===t[0]),1&e&&C(R,"selected","video"===t[0]),1&e&&C(I,"selected","warrior"===t[0]),2&e&&C(u,"collapse",t[1])},i:t,o:t,d(t){t&&d(n),M()}}}function $t(t,e,n){let{segment:r}=e,s=!0;return t.$set=(t=>{"segment"in t&&n(0,r=t.segment)}),[r,s,function(){n(1,s=!s)}]}class vt extends ft{constructor(t){super(),ut(this,t,$t,gt,a,{segment:0})}}function yt(t){let e,n,r;const s=new vt({props:{segment:t[0]}}),o=t[2].default,a=i(o,t,t[1],null);return{c(){ot(s.$$.fragment),e=v(),n=g("main"),a&&a.c()},l(t){at(s.$$.fragment,t),e=P(t);var r=x(n=A(t,"MAIN",{}));a&&a.l(r),r.forEach(d)},m(t,o){ct(s,t,o),h(t,e,o),h(t,n,o),a&&a.m(n,null),r=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),s.$set(n),a&&a.p&&2&e&&a.p(l(o,t,t[1],null),u(o,t[1],e,null))},i(t){r||(et(s.$$.fragment,t),et(a,t),r=!0)},o(t){nt(s.$$.fragment,t),nt(a,t),r=!1},d(t){it(s,t),t&&d(e),t&&d(n),a&&a.d(t)}}}function bt(t,e,n){let{segment:r}=e,{$$slots:s={},$$scope:o}=e;return t.$set=(t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,o=t.$$scope)}),[r,o,s]}class Et extends ft{constructor(t){super(),ut(this,t,bt,yt,a,{segment:0})}}function wt(t){let e,n,r=t[1].stack+"";return{c(){e=g("pre"),n=$(r)},l(t){var s=x(e=A(t,"PRE",{}));n=L(s,r),s.forEach(d)},m(t,r){h(t,e,r),p(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&N(n,r)},d(t){t&&d(e)}}}function _t(e){let n,r,s,o,a,c,i,l,u=e[1].message+"",f=e[2]&&e[1].stack&&wt(e);return{c(){n=v(),r=g("h1"),s=$(e[0]),o=v(),a=g("p"),c=$(u),i=v(),f&&f.c(),l=y(),this.h()},l(t){O('[data-svelte="svelte-1f2iiyn"]',document.head).forEach(d),n=P(t);var p=x(r=A(t,"H1",{class:!0}));s=L(p,e[0]),p.forEach(d),o=P(t);var h=x(a=A(t,"P",{class:!0}));c=L(h,u),h.forEach(d),i=P(t),f&&f.l(t),l=y(),this.h()},h(){document.title="𝗖𝗔𝗧 𝗣𝗘𝗔: World's Most Advanced Research Laboratories and Skunk Works",w(r,"class","svelte-hc3g3x"),w(a,"class","svelte-hc3g3x")},m(t,e){h(t,n,e),h(t,r,e),p(r,s),h(t,o,e),h(t,a,e),p(a,c),h(t,i,e),f&&f.m(t,e),h(t,l,e)},p(t,[e]){1&e&&N(s,t[0]),2&e&&u!==(u=t[1].message+"")&&N(c,u),t[2]&&t[1].stack?f?f.p(t,e):((f=wt(t)).c(),f.m(l.parentNode,l)):f&&(f.d(1),f=null)},i:t,o:t,d(t){t&&d(n),t&&d(r),t&&d(o),t&&d(a),t&&d(i),f&&f.d(t),t&&d(l)}}}function St(t,e,n){let{status:r}=e,{error:s}=e;return t.$set=(t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)}),[r,s,!1]}class xt extends ft{constructor(t){super(),ut(this,t,St,_t,a,{status:0,error:1})}}function At(t){let n,r;const s=[t[4].props];var o=t[4].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}if(o)var c=new o(a());return{c(){c&&ot(c.$$.fragment),n=y()},l(t){c&&at(c.$$.fragment,t),n=y()},m(t,e){c&&ct(c,t,e),h(t,n,e),r=!0},p(t,e){const r=16&e?rt(s,[st(t[4].props)]):{};if(o!==(o=t[4].component)){if(c){Z();const t=c;nt(t.$$.fragment,1,0,()=>{it(t,1)}),tt()}o?(ot((c=new o(a())).$$.fragment),et(c.$$.fragment,1),ct(c,n.parentNode,n)):c=null}else o&&c.$set(r)},i(t){r||(c&&et(c.$$.fragment,t),r=!0)},o(t){c&&nt(c.$$.fragment,t),r=!1},d(t){t&&d(n),c&&it(c,t)}}}function Lt(t){let e;const n=new xt({props:{error:t[0],status:t[1]}});return{c(){ot(n.$$.fragment)},l(t){at(n.$$.fragment,t)},m(t,r){ct(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(et(n.$$.fragment,t),e=!0)},o(t){nt(n.$$.fragment,t),e=!1},d(t){it(n,t)}}}function Pt(t){let e,n,r,s;const o=[Lt,At],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),r=y()},l(t){n.l(t),r=y()},m(t,n){a[e].m(t,n),h(t,r,n),s=!0},p(t,s){let i=e;(e=c(t))===i?a[e].p(t,s):(Z(),nt(a[i],1,1,()=>{a[i]=null}),tt(),(n=a[e])||(n=a[e]=o[e](t)).c(),et(n,1),n.m(r.parentNode,r))},i(t){s||(et(n),s=!0)},o(t){nt(n),s=!1},d(t){a[e].d(t),t&&d(r)}}}function Nt(t){let n;const r=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[Pt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);const o=new Et({props:s});return{c(){ot(o.$$.fragment)},l(t){at(o.$$.fragment,t)},m(t,e){ct(o,t,e),n=!0},p(t,[e]){const n=12&e?rt(r,[4&e&&{segment:t[2][0]},8&e&&st(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i(t){n||(et(o.$$.fragment,t),n=!0)},o(t){nt(o.$$.fragment,t),n=!1},d(t){it(o,t)}}}function Rt(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e;var l,u;return l=dt,u=r,I().$$.context.set(l,u),t.$set=(t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1)}),[s,o,a,c,i,r]}class kt extends ft{constructor(t){super(),ut(this,t,Rt,Nt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const Ct=[],Ot=[{js:()=>import("./index.fcc1a558.js"),css:["client.15a4386a.css"]},{js:()=>import("./warrior.fbb9c081.js"),css:["client.15a4386a.css"]},{js:()=>import("./video.a2892e8a.js"),css:["client.15a4386a.css"]}],jt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/warrior\/?$/,parts:[{i:1}]},{pattern:/^\/video\/?$/,parts:[{i:2}]}];const qt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ut,It,Tt,Dt=!1,Bt=[],Ht="{}";const Mt={page:ht({}),preloading:ht(null),session:ht(qt&&qt.session)};let Vt,Jt;Mt.session.subscribe(async t=>{if(Vt=t,!Dt)return;Jt=!0;const e=Yt(new URL(location.href)),n=It={},{redirect:r,props:s,branch:o}=await ne(e);n===It&&await ee(r,o,s,e.page)});let Wt,Kt=null;let Gt,zt=1;const Ft="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Qt={};function Xt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Yt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(qt.baseUrl))return null;let e=t.pathname.slice(qt.baseUrl.length);if(""===e&&(e="/"),!Ct.some(t=>t.test(e)))for(let n=0;n<jt.length;n+=1){const r=jt[n],s=r.pattern.exec(e);if(s){const n=Xt(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function Zt(){return{x:pageXOffset,y:pageYOffset}}async function te(t,e,n,r){if(e)Gt=e;else{const t=Zt();Qt[Gt]=t,e=Gt=++zt,Qt[Gt]=n?t:{x:0,y:0}}Gt=e,Ut&&Mt.preloading.set(!0);const s=Kt&&Kt.href===t.href?Kt.promise:ne(t);Kt=null;const o=It={},{redirect:a,props:c,branch:i}=await s;if(o===It&&(await ee(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Qt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Qt[Gt]=t,t&&scrollTo(t.x,t.y)}}async function ee(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Yt(new URL(t,document.baseURI));return n?(Ft[e.replaceState?"replaceState":"pushState"]({id:Gt},"",t),te(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Mt.page.set(r),Mt.preloading.set(!1),Ut)Ut.$set(n);else{n.stores={page:{subscribe:Mt.page.subscribe},preloading:{subscribe:Mt.preloading.subscribe},session:Mt.session},n.level0={props:await Tt};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)se(t.nextSibling);se(t),se(e)}Ut=new kt({target:Wt,props:n,hydrate:!0})}Bt=e,Ht=JSON.stringify(r.query),Dt=!0,Jt=!1}async function ne(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let c;Tt||(Tt=qt.preloaded[0]||mt.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Vt));let i=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Ht)return!0;const s=Bt[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,s)&&(u=!0),o.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Jt&&!u&&Bt[c]&&Bt[c].part===e.i)return Bt[c];u=!1;const{default:h,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(re);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Ot[e.i]);let m;return m=Dt||!qt.preloaded[c+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Vt):{}:qt.preloaded[c+1],o[`level${p}`]={component:h,props:m,segment:f,match:l,part:e.i}}))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function re(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=(()=>t()),r.onerror=n,document.head.appendChild(r)})}function se(t){t.parentNode.removeChild(t)}function oe(t){const e=Yt(new URL(t,document.baseURI));if(e)return Kt&&t===Kt.href||function(t,e){Kt={href:t,promise:e}}(t,ne(e)),Kt.promise}let ae;function ce(t){clearTimeout(ae),ae=setTimeout(()=>{ie(t)},20)}function ie(t){const e=ue(t.target);e&&"prefetch"===e.rel&&oe(e.href)}function le(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ue(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Yt(s);if(o){te(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),Ft.pushState({id:Gt},"",s.href)}}function ue(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function fe(t){if(Qt[Gt]=Zt(),t.state){const e=Yt(new URL(location.href));e?te(e,t.state.id):location.href=location.href}else(function(t){Gt=t})(zt=zt+1),Ft.replaceState({id:Gt},"",location.href)}const pe=()=>(function(t){return I().$$.context.get(t)})(dt);!function(t){var e;"scrollRestoration"in Ft&&(Ft.scrollRestoration="manual"),e=t.target,Wt=e,addEventListener("click",le),addEventListener("popstate",fe),addEventListener("touchstart",ie),addEventListener("mousemove",ce),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Ft.replaceState({id:zt},"",e);const n=new URL(location.href);if(qt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=qt;Tt||(Tt=o&&o[0]),ee(null,[],{error:c,status:a,session:s,level0:{props:Tt},level1:{props:{status:a,error:c},component:xt},segments:o},{host:e,path:n,query:Xt(r),params:{}})}();const r=Yt(n);return r?te(r,zt,!0,t):void 0})}({target:document.querySelector("#sapper")});export{i as A,l as B,u as C,ot as D,at as E,ct as F,it as G,T as H,j as I,E as J,C as K,O as L,e as M,f as N,D as O,_ as P,rt as Q,st as R,ft as S,pe as T,c as U,h as a,N as b,L as c,d,g as e,v as f,A as g,x as h,ut as i,P as j,w as k,p as l,b as m,t as n,R as o,S as p,y as q,s as r,a as s,$ as t,m as u,k as v,Z as w,nt as x,tt as y,et as z};
