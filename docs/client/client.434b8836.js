function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function s(){return Object.create(null)}function o(t){t.forEach(r)}function a(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function l(t,e,n,r){if(t){const s=u(t,e,n,r);return t[0](s)}}function u(t,e,r,s){return t[1]&&s?n(r.ctx.slice(),t[1](s(e))):r.ctx}function f(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}function h(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}const d="undefined"!=typeof window;let p=d?()=>window.performance.now():()=>Date.now(),m=d?t=>requestAnimationFrame(t):t;const g=new Set;function $(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),0!==g.size&&m($)}function v(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function _(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function E(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function S(){return w(" ")}function x(){return w("")}function A(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function P(t){return function(e){return e.preventDefault(),t.call(this,e)}}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function L(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r||n[r]&&n[r].set?t[r]=e[r]:k(t,r,e[r])}function R(t){return""===t?void 0:+t}function C(t){return Array.from(t.childNodes)}function N(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;for(;e<s.attributes.length;){const t=s.attributes[e];n[t.name]?e++:s.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):E(e)}function j(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return w(e)}function O(t){return j(t," ")}function D(t,e){e=""+e,t.data!==e&&(t.data=e)}function q(t,e){(null!=e||t.value)&&(t.value=e)}function I(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function T(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e)return void(r.selected=!0)}}function U(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function W(t,e,n){t.classList[n?"add":"remove"](e)}function H(t,e=document.body){return Array.from(e.querySelectorAll(t))}class V{constructor(t,e=null){this.e=E("div"),this.a=e,this.u(t)}m(t,e=null){for(let n=0;n<this.n.length;n+=1)y(t,this.n[n],e);this.t=t}u(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}p(t){this.d(),this.u(t),this.m(this.t,this.a)}d(){this.n.forEach(b)}}const B=new Set;let M,z=0;function J(t,e,n,r,s,o,a,c=0){const i=16.666/r;let l="{\n";for(let t=0;t<=1;t+=i){const r=e+(n-e)*o(t);l+=100*t+`%{${a(r,1-r)}}\n`}const u=l+`100% {${a(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${c}`,h=t.ownerDocument;B.add(h);const d=h.__svelte_stylesheet||(h.__svelte_stylesheet=h.head.appendChild(E("style")).sheet),p=h.__svelte_rules||(h.__svelte_rules={});p[f]||(p[f]=!0,d.insertRule(`@keyframes ${f} ${u}`,d.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${r}ms linear ${s}ms 1 both`,z+=1,f}function K(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-r.length;s&&(t.style.animation=r.join(", "),(z-=s)||m(()=>{z||(B.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),B.clear())}))}function F(t){M=t}function G(){if(!M)throw new Error("Function called outside component initialization");return M}function X(t){G().$$.on_mount.push(t)}function Y(t){G().$$.on_destroy.push(t)}function Q(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}const Z=[],tt=[],et=[],nt=[],rt=Promise.resolve();let st=!1;function ot(t){et.push(t)}function at(t){nt.push(t)}let ct=!1;const it=new Set;function lt(){if(!ct){ct=!0;do{for(let t=0;t<Z.length;t+=1){const e=Z[t];F(e),ut(e.$$)}for(Z.length=0;tt.length;)tt.pop()();for(let t=0;t<et.length;t+=1){const e=et[t];it.has(e)||(it.add(e),e())}et.length=0}while(Z.length);for(;nt.length;)nt.pop()();st=!1,ct=!1,it.clear()}}function ut(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ot)}}let ft;function ht(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const dt=new Set;let pt;function mt(){pt={r:0,c:[],p:pt}}function gt(){pt.r||o(pt.c),pt=pt.p}function $t(t,e){t&&t.i&&(dt.delete(t),t.i(e))}function vt(t,e,n,r){if(t&&t.o){if(dt.has(t))return;dt.add(t),pt.c.push(()=>{dt.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const yt={duration:0};function bt(n,r,s,c){let i=r(n,s),l=c?0:1,u=null,f=null,h=null;function d(){h&&K(n,h)}function v(t,e){const n=t.b-l;return e*=Math.abs(n),{a:l,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function y(r){const{delay:s=0,duration:a=300,easing:c=e,tick:y=t,css:b}=i||yt,_={start:p()+s,b:r};r||(_.group=pt,pt.r+=1),u?f=_:(b&&(d(),h=J(n,l,r,a,s,c,b)),r&&y(0,1),u=v(_,a),ot(()=>ht(n,r,"start")),function(t){let e;0===g.size&&m($),new Promise(n=>{g.add(e={c:t,f:n})})}(t=>{if(f&&t>f.start&&(u=v(f,a),f=null,ht(n,u.b,"start"),b&&(d(),h=J(n,l,u.b,u.duration,0,c,i.css))),u)if(t>=u.end)y(l=u.b,1-l),ht(n,u.b,"end"),f||(u.b?d():--u.group.r||o(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;l=u.a+u.d*c(e/u.duration),y(l,1-l)}return!(!u&&!f)}))}return{run(t){a(i)?(ft||(ft=Promise.resolve()).then(()=>{ft=null}),ft).then(()=>{i=i(),y(t)}):y(t)},end(){d(),u=f=null}}}function _t(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function Et(t){return"object"==typeof t&&null!==t?t:{}}function wt(t,e,n){const r=t.$$.props[e];void 0!==r&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function St(t){t&&t.c()}function xt(t,e){t&&t.l(e)}function At(t,e,n){const{fragment:s,on_mount:c,on_destroy:i,after_update:l}=t.$$;s&&s.m(e,n),ot(()=>{const e=c.map(r).filter(a);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(ot)}function Pt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function kt(t,e){-1===t.$$.dirty[0]&&(Z.push(t),st||(st=!0,rt.then(lt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Lt(e,n,r,a,c,i,l=[-1]){const u=M;F(e);const f=n.props||{},h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:l};let d=!1;if(h.ctx=r?r(e,f,(t,n,...r)=>{const s=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=s)&&(h.bound[t]&&h.bound[t](s),d&&kt(e,t)),n}):[],h.update(),d=!0,o(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){const t=C(n.target);h.fragment&&h.fragment.l(t),t.forEach(b)}else h.fragment&&h.fragment.c();n.intro&&$t(e.$$.fragment),At(e,n.target,n.anchor),lt()}F(u)}class Rt{$destroy(){Pt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const Ct=[];function Nt(e,n=t){let r;const s=[];function o(t){if(c(e,t)&&(e=t,r)){const t=!Ct.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),Ct.push(n,e)}if(t){for(let t=0;t<Ct.length;t+=2)Ct[t][0](Ct[t+1]);Ct.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const i=[a,c];return s.push(i),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const jt={},Ot=()=>({});function Dt(e){let n,r,s,o,a,c,i,l,u,f,h,d,p,m,g,$,_,x,P,L,R,D,q,I,T,U,H,V,B,M,z,J,K,F,G,X,Y,Q,Z,tt;return{c(){n=E("nav"),r=E("a"),s=E("img"),a=S(),c=E("button"),i=E("span"),l=S(),u=E("div"),f=E("ul"),h=E("li"),d=E("a"),p=w("Home "),m=E("span"),g=w("(current)"),$=S(),_=E("li"),x=E("a"),P=w("Video Library "),L=E("span"),R=w("(current)"),D=S(),q=E("li"),I=E("a"),T=w("The Warrior Book "),U=E("span"),H=w("(current)"),V=S(),B=E("li"),M=E("a"),z=w("Digital Audio Workstation "),J=E("span"),K=w("(current)"),F=S(),G=E("li"),X=E("a"),Y=w("Bootstrap Theme "),Q=E("span"),Z=w("(current)"),this.h()},l(t){var e=C(n=N(t,"NAV",{class:!0})),o=C(r=N(e,"A",{class:!0,href:!0}));s=N(o,"IMG",{src:!0,alt:!0}),o.forEach(b),a=O(e);var v=C(c=N(e,"BUTTON",{class:!0,type:!0}));C(i=N(v,"SPAN",{class:!0})).forEach(b),v.forEach(b),l=O(e);var y=C(u=N(e,"DIV",{class:!0})),E=C(f=N(y,"UL",{class:!0})),w=C(h=N(E,"LI",{class:!0})),S=C(d=N(w,"A",{class:!0,href:!0}));p=j(S,"Home ");var A=C(m=N(S,"SPAN",{class:!0}));g=j(A,"(current)"),A.forEach(b),S.forEach(b),w.forEach(b),$=O(E);var k=C(_=N(E,"LI",{class:!0})),W=C(x=N(k,"A",{class:!0,href:!0}));P=j(W,"Video Library ");var tt=C(L=N(W,"SPAN",{class:!0}));R=j(tt,"(current)"),tt.forEach(b),W.forEach(b),k.forEach(b),D=O(E);var et=C(q=N(E,"LI",{class:!0})),nt=C(I=N(et,"A",{class:!0,href:!0}));T=j(nt,"The Warrior Book ");var rt=C(U=N(nt,"SPAN",{class:!0}));H=j(rt,"(current)"),rt.forEach(b),nt.forEach(b),et.forEach(b),V=O(E);var st=C(B=N(E,"LI",{class:!0})),ot=C(M=N(st,"A",{class:!0,href:!0}));z=j(ot,"Digital Audio Workstation ");var at=C(J=N(ot,"SPAN",{class:!0}));K=j(at,"(current)"),at.forEach(b),ot.forEach(b),st.forEach(b),F=O(E);var ct=C(G=N(E,"LI",{class:!0})),it=C(X=N(ct,"A",{class:!0,href:!0}));Y=j(it,"Bootstrap Theme ");var lt=C(Q=N(it,"SPAN",{class:!0}));Z=j(lt,"(current)"),lt.forEach(b),it.forEach(b),ct.forEach(b),E.forEach(b),y.forEach(b),e.forEach(b),this.h()},h(){s.src!==(o="cats/cat-01.png")&&k(s,"src","cats/cat-01.png"),k(s,"alt","Logo Image"),k(r,"class","navbar-brand"),k(r,"href","."),k(i,"class","navbar-toggler-icon"),k(c,"class","navbar-toggler border-0"),k(c,"type","button"),k(m,"class","sr-only"),k(d,"class","nav-link text-primary"),k(d,"href","."),k(h,"class","nav-item"),W(h,"selected",void 0===e[0]),k(L,"class","sr-only"),k(x,"class","nav-link text-primary"),k(x,"href","/video?p=0&i=8"),k(_,"class","nav-item"),W(_,"selected","video"===e[0]),k(U,"class","sr-only"),k(I,"class","nav-link text-primary"),k(I,"href","/warrior"),k(q,"class","nav-item"),W(q,"selected","warrior"===e[0]),k(J,"class","sr-only"),k(M,"class","nav-link text-primary"),k(M,"href","/daw"),k(B,"class","nav-item"),W(B,"selected","daw"===e[0]),k(Q,"class","sr-only"),k(X,"class","nav-link text-primary"),k(X,"href","/theme"),k(G,"class","nav-item"),W(G,"selected","theme"===e[0]),k(f,"class","navbar-nav mr-auto"),k(u,"class","navbar-collapse"),W(u,"collapse",e[1]),k(n,"class","navbar navbar-dark navbar-expand-lg shadow-lg border-bottom border-dark mb-3 rounded-pill")},m(t,o,b){y(t,n,o),v(n,r),v(r,s),v(n,a),v(n,c),v(c,i),v(n,l),v(n,u),v(u,f),v(f,h),v(h,d),v(d,p),v(d,m),v(m,g),v(f,$),v(f,_),v(_,x),v(x,P),v(x,L),v(L,R),v(f,D),v(f,q),v(q,I),v(I,T),v(I,U),v(U,H),v(f,V),v(f,B),v(B,M),v(M,z),v(M,J),v(J,K),v(f,F),v(f,G),v(G,X),v(X,Y),v(X,Q),v(Q,Z),b&&tt(),tt=A(c,"click",e[2])},p(t,[e]){1&e&&W(h,"selected",void 0===t[0]),1&e&&W(_,"selected","video"===t[0]),1&e&&W(q,"selected","warrior"===t[0]),1&e&&W(B,"selected","daw"===t[0]),1&e&&W(G,"selected","theme"===t[0]),2&e&&W(u,"collapse",t[1])},i:t,o:t,d(t){t&&b(n),tt()}}}function qt(t,e,n){let{segment:r}=e,s=!0;return t.$set=(t=>{"segment"in t&&n(0,r=t.segment)}),[r,s,function(){n(1,s=!s)}]}class It extends Rt{constructor(t){super(),Lt(this,t,qt,Dt,c,{segment:0})}}function Tt(t){let e,n,r;const s=new It({props:{segment:t[0]}}),o=t[2].default,a=l(o,t,t[1],null);return{c(){St(s.$$.fragment),e=S(),n=E("main"),a&&a.c()},l(t){xt(s.$$.fragment,t),e=O(t);var r=C(n=N(t,"MAIN",{}));a&&a.l(r),r.forEach(b)},m(t,o){At(s,t,o),y(t,e,o),y(t,n,o),a&&a.m(n,null),r=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),s.$set(n),a&&a.p&&2&e&&a.p(u(o,t,t[1],null),f(o,t[1],e,null))},i(t){r||($t(s.$$.fragment,t),$t(a,t),r=!0)},o(t){vt(s.$$.fragment,t),vt(a,t),r=!1},d(t){Pt(s,t),t&&b(e),t&&b(n),a&&a.d(t)}}}function Ut(t,e,n){let{segment:r}=e,{$$slots:s={},$$scope:o}=e;return t.$set=(t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,o=t.$$scope)}),[r,o,s]}class Wt extends Rt{constructor(t){super(),Lt(this,t,Ut,Tt,c,{segment:0})}}function Ht(t){let e,n,r=t[1].stack+"";return{c(){e=E("pre"),n=w(r),this.h()},l(t){var s=C(e=N(t,"PRE",{class:!0}));n=j(s,r),s.forEach(b),this.h()},h(){k(e,"class","text-warning")},m(t,r){y(t,e,r),v(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&D(n,r)},d(t){t&&b(e)}}}function Vt(e){let n,r,s,o,a,c,i,l,u,f,h,d,p,m,g,$,_=e[1].message+"",x=e[2]&&e[1].stack&&Ht(e);return{c(){n=S(),r=E("div"),s=E("div"),o=E("div"),a=E("h1"),c=w("World's Most Advanced Research Laboratories and Skunk Works"),i=S(),l=E("h2"),u=w("The catpea is an annual pouncy feline from the genus Panthera. Due to his tolerance for serious workouts and low effort, he is kind of a big deal in the semiarid plazas of Westland."),f=S(),h=E("p"),d=w("Code "),p=w(e[0]),m=w(" · "),g=w(_),$=S(),x&&x.c(),this.h()},l(t){H('[data-svelte="svelte-8uacef"]',document.head).forEach(b),n=O(t);var v=C(r=N(t,"DIV",{class:!0})),y=C(s=N(v,"DIV",{class:!0})),E=C(o=N(y,"DIV",{class:!0})),w=C(a=N(E,"H1",{class:!0}));c=j(w,"World's Most Advanced Research Laboratories and Skunk Works"),w.forEach(b),i=O(E);var S=C(l=N(E,"H2",{}));u=j(S,"The catpea is an annual pouncy feline from the genus Panthera. Due to his tolerance for serious workouts and low effort, he is kind of a big deal in the semiarid plazas of Westland."),S.forEach(b),f=O(E);var A=C(h=N(E,"P",{class:!0}));d=j(A,"Code "),p=j(A,e[0]),m=j(A," · "),g=j(A,_),A.forEach(b),$=O(E),x&&x.l(E),E.forEach(b),y.forEach(b),v.forEach(b),this.h()},h(){document.title="𝗖𝗔𝗧𝗣𝗘𝗔: World's Most Advanced Research Laboratories and Skunk Works",k(a,"class","svelte-1vi3y6o"),k(h,"class","svelte-1vi3y6o"),k(o,"class","col"),k(s,"class","row"),k(r,"class","container text-small text-primary")},m(t,e){y(t,n,e),y(t,r,e),v(r,s),v(s,o),v(o,a),v(a,c),v(o,i),v(o,l),v(l,u),v(o,f),v(o,h),v(h,d),v(h,p),v(h,m),v(h,g),v(o,$),x&&x.m(o,null)},p(t,[e]){1&e&&D(p,t[0]),2&e&&_!==(_=t[1].message+"")&&D(g,_),t[2]&&t[1].stack?x?x.p(t,e):((x=Ht(t)).c(),x.m(o,null)):x&&(x.d(1),x=null)},i:t,o:t,d(t){t&&b(n),t&&b(r),x&&x.d()}}}function Bt(t,e,n){let{status:r}=e,{error:s}=e;return t.$set=(t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)}),[r,s,!1]}class Mt extends Rt{constructor(t){super(),Lt(this,t,Bt,Vt,c,{status:0,error:1})}}function zt(t){let e,r;const s=[t[4].props];var o=t[4].component;function a(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}if(o)var c=new o(a());return{c(){c&&St(c.$$.fragment),e=x()},l(t){c&&xt(c.$$.fragment,t),e=x()},m(t,n){c&&At(c,t,n),y(t,e,n),r=!0},p(t,n){const r=16&n?_t(s,[Et(t[4].props)]):{};if(o!==(o=t[4].component)){if(c){mt();const t=c;vt(t.$$.fragment,1,0,()=>{Pt(t,1)}),gt()}o?(St((c=new o(a())).$$.fragment),$t(c.$$.fragment,1),At(c,e.parentNode,e)):c=null}else o&&c.$set(r)},i(t){r||(c&&$t(c.$$.fragment,t),r=!0)},o(t){c&&vt(c.$$.fragment,t),r=!1},d(t){t&&b(e),c&&Pt(c,t)}}}function Jt(t){let e;const n=new Mt({props:{error:t[0],status:t[1]}});return{c(){St(n.$$.fragment)},l(t){xt(n.$$.fragment,t)},m(t,r){At(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||($t(n.$$.fragment,t),e=!0)},o(t){vt(n.$$.fragment,t),e=!1},d(t){Pt(n,t)}}}function Kt(t){let e,n,r,s;const o=[Jt,zt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),r=x()},l(t){n.l(t),r=x()},m(t,n){a[e].m(t,n),y(t,r,n),s=!0},p(t,s){let i=e;(e=c(t))===i?a[e].p(t,s):(mt(),vt(a[i],1,1,()=>{a[i]=null}),gt(),(n=a[e])||(n=a[e]=o[e](t)).c(),$t(n,1),n.m(r.parentNode,r))},i(t){s||($t(n),s=!0)},o(t){vt(n),s=!1},d(t){a[e].d(t),t&&b(r)}}}function Ft(t){let e;const r=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[Kt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)s=n(s,r[t]);const o=new Wt({props:s});return{c(){St(o.$$.fragment)},l(t){xt(o.$$.fragment,t)},m(t,n){At(o,t,n),e=!0},p(t,[e]){const n=12&e?_t(r,[4&e&&{segment:t[2][0]},8&e&&Et(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i(t){e||($t(o.$$.fragment,t),e=!0)},o(t){vt(o.$$.fragment,t),e=!1},d(t){Pt(o,t)}}}function Gt(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e;var l,u;return l=jt,u=r,G().$$.context.set(l,u),t.$set=(t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1)}),[s,o,a,c,i,r]}class Xt extends Rt{constructor(t){super(),Lt(this,t,Gt,Ft,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const Yt=[],Qt=[{js:()=>import("./index.4d98330f.js"),css:["client.434b8836.css"]},{js:()=>import("./warrior.67513ec5.js"),css:["client.434b8836.css"]},{js:()=>import("./theme.e19f4746.js"),css:["client.434b8836.css"]},{js:()=>import("./video.8467b273.js"),css:["client.434b8836.css"]},{js:()=>import("./big.fb9d385b.js"),css:["client.434b8836.css"]},{js:()=>import("./daw.ca3a2c3f.js"),css:["client.434b8836.css"]}],Zt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/warrior\/?$/,parts:[{i:1}]},{pattern:/^\/theme\/?$/,parts:[{i:2}]},{pattern:/^\/video\/?$/,parts:[{i:3}]},{pattern:/^\/big\/?$/,parts:[{i:4}]},{pattern:/^\/daw\/?$/,parts:[{i:5}]}];const te="undefined"!=typeof __SAPPER__&&__SAPPER__;let ee,ne,re,se=!1,oe=[],ae="{}";const ce={page:Nt({}),preloading:Nt(null),session:Nt(te&&te.session)};let ie,le;ce.session.subscribe(async t=>{if(ie=t,!se)return;le=!0;const e=$e(new URL(location.href)),n=ne={},{redirect:r,props:s,branch:o}=await _e(e);n===ne&&await be(r,o,s,e.page)});let ue,fe=null;let he,de=1;const pe="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},me={};function ge(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function $e(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(te.baseUrl))return null;let e=t.pathname.slice(te.baseUrl.length);if(""===e&&(e="/"),!Yt.some(t=>t.test(e)))for(let n=0;n<Zt.length;n+=1){const r=Zt[n],s=r.pattern.exec(e);if(s){const n=ge(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function ve(){return{x:pageXOffset,y:pageYOffset}}async function ye(t,e,n,r){if(e)he=e;else{const t=ve();me[he]=t,e=he=++de,me[he]=n?t:{x:0,y:0}}he=e,ee&&ce.preloading.set(!0);const s=fe&&fe.href===t.href?fe.promise:_e(t);fe=null;const o=ne={},{redirect:a,props:c,branch:i}=await s;if(o===ne&&(await be(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=me[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}me[he]=t,t&&scrollTo(t.x,t.y)}}async function be(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=$e(new URL(t,document.baseURI));return n?(pe[e.replaceState?"replaceState":"pushState"]({id:he},"",t),ye(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(ce.page.set(r),ce.preloading.set(!1),ee)ee.$set(n);else{n.stores={page:{subscribe:ce.page.subscribe},preloading:{subscribe:ce.preloading.subscribe},session:ce.session},n.level0={props:await re};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)we(t.nextSibling);we(t),we(e)}ee=new Xt({target:ue,props:n,hydrate:!0})}oe=e,ae=JSON.stringify(r.query),se=!0,le=!1}async function _e(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let c;re||(re=te.preloaded[0]||Ot.call(a,{host:n.host,path:n.path,query:n.query,params:{}},ie));let i=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==ae)return!0;const s=oe[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,s)&&(u=!0),o.segments[i]=r[c+1],!e)return{segment:f};const h=i++;if(!le&&!u&&oe[c]&&oe[c].part===e.i)return oe[c];u=!1;const{default:d,preload:p}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Ee);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Qt[e.i]);let m;return m=se||!te.preloaded[c+1]?p?await p.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},ie):{}:te.preloaded[c+1],o[`level${h}`]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function Ee(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=(()=>t()),r.onerror=n,document.head.appendChild(r)})}function we(t){t.parentNode.removeChild(t)}function Se(t){const e=$e(new URL(t,document.baseURI));if(e)return fe&&t===fe.href||function(t,e){fe={href:t,promise:e}}(t,_e(e)),fe.promise}let xe;function Ae(t){clearTimeout(xe),xe=setTimeout(()=>{Pe(t)},20)}function Pe(t){const e=Le(t.target);e&&"prefetch"===e.rel&&Se(e.href)}function ke(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Le(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=$e(s);if(o){ye(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),pe.pushState({id:he},"",s.href)}}function Le(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Re(t){if(me[he]=ve(),t.state){const e=$e(new URL(location.href));e?ye(e,t.state.id):location.href=location.href}else(function(t){he=t})(de=de+1),pe.replaceState({id:he},"",location.href)}const Ce=()=>(function(t){return G().$$.context.get(t)})(jt);!function(t){var e;"scrollRestoration"in pe&&(pe.scrollRestoration="manual"),e=t.target,ue=e,addEventListener("click",ke),addEventListener("popstate",Re),addEventListener("touchstart",Pe),addEventListener("mousemove",Ae),Promise.resolve().then(()=>{const{hash:t,href:e}=location;pe.replaceState({id:de},"",e);const n=new URL(location.href);if(te.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=te;re||(re=o&&o[0]),be(null,[],{error:c,status:a,session:s,level0:{props:re},level1:{props:{status:a,error:c},component:Mt},segments:o},{host:e,path:n,query:ge(r),params:{}})}();const r=$e(n);return r?ye(r,de,!0,t):void 0})}({target:document.querySelector("#sapper")});export{Ce as $,f as A,Pt as B,I as C,q as D,o as E,_ as F,R as G,X as H,V as I,P as J,W as K,ot as L,bt as M,Y as N,T as O,U as P,H as Q,tt as R,Rt as S,wt as T,at as U,n as V,h as W,Q as X,L as Y,_t as Z,Et as _,C as a,i as a0,y as b,N as c,b as d,E as e,x as f,mt as g,gt as h,Lt as i,$t as j,l as k,w as l,S as m,t as n,St as o,j as p,O as q,xt as r,c as s,vt as t,k as u,v,At as w,A as x,D as y,u as z};