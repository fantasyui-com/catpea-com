import{n as t,s as e,S as r,i as s,e as n,a,t as o,c,b as l,d as i,f as u,g as f,h,j as p,l as d,k as m,m as g,o as v,p as b,q as $,r as y,u as E,v as x,w as S,x as w,y as _,z as P,A,B as I,C as R,D as L,E as C,F as N,G as j,H as k,I as O}from"./index.e7c638ad.js";const D=[];function U(r,s=t){let n;const a=[];function o(t){if(e(r,t)&&(r=t,n)){const t=!D.length;for(let t=0;t<a.length;t+=1){const e=a[t];e[1](),D.push(e,r)}if(t){for(let t=0;t<D.length;t+=2)D[t][0](D[t+1]);D.length=0}}}return{set:o,update:function(t){o(t(r))},subscribe:function(e,c=t){const l=[e,c];return a.push(l),1===a.length&&(n=s(o)||t),e(r),()=>{const t=a.indexOf(l);-1!==t&&a.splice(t,1),0===a.length&&(n(),n=null)}}}}const q={},V=()=>({});function H(e){let r,s,v,b,$,y,E,x,S,w,_,P,A,I,R,L,C,N,j,k,O,D,U,q,V,H,T,B;return{c(){r=n("nav"),s=n("a"),v=n("img"),$=a(),y=n("button"),E=n("span"),x=a(),S=n("div"),w=n("ul"),_=n("li"),P=n("a"),A=o("Home "),I=n("span"),R=o("(current)"),L=a(),C=n("li"),N=n("a"),j=o("Stream "),k=n("span"),O=o("(current)"),D=a(),U=n("li"),q=n("a"),V=o("About "),H=n("span"),T=o("(current)"),this.h()},l(t){r=c(t,"NAV",{class:!0});var e=l(r);s=c(e,"A",{class:!0,href:!0});var n=l(s);v=c(n,"IMG",{src:!0,alt:!0}),n.forEach(i),$=u(e),y=c(e,"BUTTON",{class:!0,type:!0});var a=l(y);E=c(a,"SPAN",{class:!0}),l(E).forEach(i),a.forEach(i),x=u(e),S=c(e,"DIV",{class:!0});var o=l(S);w=c(o,"UL",{class:!0});var h=l(w);_=c(h,"LI",{class:!0});var p=l(_);P=c(p,"A",{class:!0,href:!0});var d=l(P);A=f(d,"Home "),I=c(d,"SPAN",{class:!0});var m=l(I);R=f(m,"(current)"),m.forEach(i),d.forEach(i),p.forEach(i),L=u(h),C=c(h,"LI",{class:!0});var g=l(C);N=c(g,"A",{class:!0,rel:!0,href:!0});var b=l(N);j=f(b,"Stream "),k=c(b,"SPAN",{class:!0});var B=l(k);O=f(B,"(current)"),B.forEach(i),b.forEach(i),g.forEach(i),D=u(h),U=c(h,"LI",{class:!0});var K=l(U);q=c(K,"A",{class:!0,href:!0});var G=l(q);V=f(G,"About "),H=c(G,"SPAN",{class:!0});var J=l(H);T=f(J,"(current)"),J.forEach(i),G.forEach(i),K.forEach(i),h.forEach(i),o.forEach(i),e.forEach(i),this.h()},h(){v.src!==(b="cats/cat-01.png")&&h(v,"src","cats/cat-01.png"),h(v,"alt","Logo Image"),h(s,"class","navbar-brand"),h(s,"href","."),h(E,"class","navbar-toggler-icon"),h(y,"class","navbar-toggler"),h(y,"type","button"),h(I,"class","sr-only"),h(P,"class","nav-link"),h(P,"href","."),h(_,"class","nav-item"),p(_,"selected",void 0===e[0]),h(k,"class","sr-only"),h(N,"class","nav-link"),h(N,"rel","prefetch"),h(N,"href","stream"),h(C,"class","nav-item"),p(C,"selected","stream"===e[0]),h(H,"class","sr-only"),h(q,"class","nav-link"),h(q,"href","about"),h(U,"class","nav-item"),p(U,"selected","about"===e[0]),h(w,"class","navbar-nav mr-auto"),h(S,"class","navbar-collapse"),p(S,"collapse",e[1]),h(r,"class","navbar navbar-expand-lg navbar-light bg-secondary shadow text-white\tmb-3 rounded-sm"),B=d(y,"click",e[2])},m(t,e){m(t,r,e),g(r,s),g(s,v),g(r,$),g(r,y),g(y,E),g(r,x),g(r,S),g(S,w),g(w,_),g(_,P),g(P,A),g(P,I),g(I,R),g(w,L),g(w,C),g(C,N),g(N,j),g(N,k),g(k,O),g(w,D),g(w,U),g(U,q),g(q,V),g(q,H),g(H,T)},p(t,[e]){1&e&&p(_,"selected",void 0===t[0]),1&e&&p(C,"selected","stream"===t[0]),1&e&&p(U,"selected","about"===t[0]),2&e&&p(S,"collapse",t[1])},i:t,o:t,d(t){t&&i(r),B()}}}function T(t,e,r){let{segment:s}=e,n=!0;return t.$set=(t=>{"segment"in t&&r(0,s=t.segment)}),[s,n,function(){r(1,n=!n)}]}class B extends r{constructor(t){super(),s(this,t,T,H,e,{segment:0})}}function K(t,e,r){const s=t.slice();return s[9]=e[r],s}function G(t,e,r){const s=t.slice();return s[6]=e[r],s}function J(t,e,r){const s=t.slice();return s[12]=e[r],s}function M(t){let e,r,s,p,d,v=t[12].text+"",b=t[12].icon&&z(t);return{c(){e=n("div"),r=n("div"),b&&b.c(),s=a(),p=n("p"),d=o(v),this.h()},l(t){e=c(t,"DIV",{class:!0});var n=l(e);r=c(n,"DIV",{class:!0});var a=l(r);b&&b.l(a),s=u(a),p=c(a,"P",{class:!0});var o=l(p);d=f(o,v),o.forEach(i),a.forEach(i),n.forEach(i),this.h()},h(){h(p,"class","card-text small"),h(r,"class","card-body"),h(e,"class","card bg-info shadow border-primary border-left-0 border-right-0 border-top-0 rounded-lg mr-5 mb-2")},m(t,n){m(t,e,n),g(e,r),b&&b.m(r,null),g(r,s),g(r,p),g(p,d)},p(t,e){t[12].icon?b?b.p(t,e):((b=z(t)).c(),b.m(r,s)):b&&(b.d(1),b=null),1&e&&v!==(v=t[12].text+"")&&$(d,v)},d(t){t&&i(e),b&&b.d()}}}function Y(t){let e,r,s,p,d,v,b,y=t[12].text+"";return{c(){e=n("div"),r=n("div"),s=n("h5"),p=o("You:"),d=a(),v=n("p"),b=o(y),this.h()},l(t){e=c(t,"DIV",{class:!0});var n=l(e);r=c(n,"DIV",{class:!0});var a=l(r);s=c(a,"H5",{class:!0});var o=l(s);p=f(o,"You:"),o.forEach(i),d=u(a),v=c(a,"P",{class:!0});var h=l(v);b=f(h,y),h.forEach(i),a.forEach(i),n.forEach(i),this.h()},h(){h(s,"class","card-title small text-dark"),h(v,"class","card-text small"),h(r,"class","card-body"),h(e,"class","card bg-success shadow border-primary border-left-0 border-right-0 border-top-0 rounded-lg ml-5 mb-2")},m(t,n){m(t,e,n),g(e,r),g(r,s),g(s,p),g(r,d),g(r,v),g(v,b)},p(t,e){1&e&&y!==(y=t[12].text+"")&&$(b,y)},d(t){t&&i(e)}}}function z(t){let e,r;return{c(){e=n("img"),this.h()},l(t){e=c(t,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){e.src!==(r=t[12].icon)&&h(e,"src",r),h(e,"class","d-inline"),h(e,"alt","Icon")},m(t,r){m(t,e,r)},p(t,s){1&s&&e.src!==(r=t[12].icon)&&h(e,"src",r)},d(t){t&&i(e)}}}function F(t){let e;function r(t,e){return t[12].user?Y:M}let s=r(t),n=s(t);return{c(){n.c(),e=v()},l(t){n.l(t),e=v()},m(t,r){n.m(t,r),m(t,e,r)},p(t,a){s===(s=r(t))&&n?n.p(t,a):(n.d(1),(n=s(t))&&(n.c(),n.m(e.parentNode,e)))},d(t){n.d(t),t&&i(e)}}}function W(t){let e,r,s,p,v=t[9].text+"";function y(...e){return t[5](t[9],...e)}return{c(){e=n("button"),r=o(v),s=a(),this.h()},l(t){e=c(t,"BUTTON",{type:!0,class:!0});var n=l(e);r=f(n,v),s=u(n),n.forEach(i),this.h()},h(){h(e,"type","button"),h(e,"class","btn btn-outline-primary m-1"),p=d(e,"click",b(y))},m(t,n){m(t,e,n),g(e,r),g(e,s)},p(e,s){t=e,2&s&&v!==(v=t[9].text+"")&&$(r,v)},d(t){t&&i(e),p()}}}function X(t){let e,r=t[6].choices,s=[];for(let e=0;e<r.length;e+=1)s[e]=W(K(t,r,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=v()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=v()},m(t,r){for(let e=0;e<s.length;e+=1)s[e].m(t,r);m(t,e,r)},p(t,n){if(10&n){let a;for(r=t[6].choices,a=0;a<r.length;a+=1){const o=K(t,r,a);s[a]?s[a].p(o,n):(s[a]=W(o),s[a].c(),s[a].m(e.parentNode,e))}for(;a<s.length;a+=1)s[a].d(1);s.length=r.length}},d(t){y(s,t),t&&i(e)}}}function Q(e){let r,s,o,f,p,v,b,$,E,x,S,w,_,P=e[0],A=[];for(let t=0;t<P.length;t+=1)A[t]=F(J(e,P,t));let I=e[1],R=[];for(let t=0;t<I.length;t+=1)R[t]=X(G(e,I,t));return{c(){r=n("footer"),s=n("div"),o=n("div"),f=a(),p=n("div"),v=n("div"),b=n("img"),E=a();for(let t=0;t<A.length;t+=1)A[t].c();x=a();for(let t=0;t<R.length;t+=1)R[t].c();S=a(),w=n("div"),this.h()},l(t){r=c(t,"FOOTER",{class:!0});var e=l(r);s=c(e,"DIV",{class:!0});var n=l(s);o=c(n,"DIV",{class:!0}),l(o).forEach(i),f=u(n),p=c(n,"DIV",{class:!0});var a=l(p);v=c(a,"DIV",{class:!0});var h=l(v);b=c(h,"IMG",{src:!0,class:!0,alt:!0}),h.forEach(i),E=u(a);for(let t=0;t<A.length;t+=1)A[t].l(a);x=u(a);for(let t=0;t<R.length;t+=1)R[t].l(a);a.forEach(i),S=u(n),w=c(n,"DIV",{class:!0}),l(w).forEach(i),n.forEach(i),e.forEach(i),this.h()},h(){h(o,"class","col-lg-4"),b.src!==($="cats/cat-03.png")&&h(b,"src","cats/cat-03.png"),h(b,"class","d-inline"),h(b,"alt","Catpea Bot Image"),h(v,"class","bg-secondary shadow border-primary border-bottom rounded-lg my-3 p-3 text-center"),h(p,"class","col"),h(w,"class","col-lg-4"),h(s,"class","row"),h(r,"class","container-fluid"),_=d(v,"click",e[2])},m(t,e){m(t,r,e),g(r,s),g(s,o),g(s,f),g(s,p),g(p,v),g(v,b),g(p,E);for(let t=0;t<A.length;t+=1)A[t].m(p,null);g(p,x);for(let t=0;t<R.length;t+=1)R[t].m(p,null);g(s,S),g(s,w)},p(t,[e]){if(1&e){let r;for(P=t[0],r=0;r<P.length;r+=1){const s=J(t,P,r);A[r]?A[r].p(s,e):(A[r]=F(s),A[r].c(),A[r].m(p,x))}for(;r<A.length;r+=1)A[r].d(1);A.length=P.length}if(10&e){let r;for(I=t[1],r=0;r<I.length;r+=1){const s=G(t,I,r);R[r]?R[r].p(s,e):(R[r]=X(s),R[r].c(),R[r].m(p,null))}for(;r<R.length;r+=1)R[r].d(1);R.length=I.length}},i:t,o:t,d(t){t&&i(r),y(A,t),y(R,t),_()}}}function Z(t,e,r){let s=[],n=[];function a(t){console.log("Click",t),r(0,s=[...s,{text:t.text,user:!0}]),t.action&&t.action();const e={};t.reply&&(e.text=t.reply),t.icon&&(e.icon=t.icon),Object.keys(e).length&&r(0,s=[...s,e]),r(1,n=[])}return[s,n,function(){r(0,s=[]),r(1,n=[]),r(0,s=[...s,{text:"Hello, by touching my face you have initialized a highly advanced artificial intelligence."}]),r(0,s=[...s,{text:"Why did you touch?"}]),r(1,n=[...n,{choices:[{text:"It was a mistake.",action:()=>{r(0,s=[...s,{text:"OK, well, quit it."}])}},{text:"Kyoot Kitteh!",reply:"Aww.",icon:"cats/cat-02.png"},{text:"I was just searching for the terminal.",trigger:"terminal"},{text:"Ew, not you again, go away do!"}]}])},a,[],t=>a(t)]}class tt extends r{constructor(t){super(),s(this,t,Z,Q,e,{})}}function et(t){let e,r,s,o;const f=new B({props:{segment:t[0]}}),h=t[2].default,p=E(h,t,t[1],null),d=new tt({});return{c(){x(f.$$.fragment),e=a(),r=n("main"),p&&p.c(),s=a(),x(d.$$.fragment)},l(t){S(f.$$.fragment,t),e=u(t),r=c(t,"MAIN",{});var n=l(r);p&&p.l(n),n.forEach(i),s=u(t),S(d.$$.fragment,t)},m(t,n){w(f,t,n),m(t,e,n),m(t,r,n),p&&p.m(r,null),m(t,s,n),w(d,t,n),o=!0},p(t,[e]){const r={};1&e&&(r.segment=t[0]),f.$set(r),p&&p.p&&2&e&&p.p(_(h,t,t[1],null),P(h,t[1],e,null))},i(t){o||(A(f.$$.fragment,t),A(p,t),A(d.$$.fragment,t),o=!0)},o(t){I(f.$$.fragment,t),I(p,t),I(d.$$.fragment,t),o=!1},d(t){R(f,t),t&&i(e),t&&i(r),p&&p.d(t),t&&i(s),R(d,t)}}}function rt(t,e,r){let{segment:s}=e,{$$slots:n={},$$scope:a}=e;return t.$set=(t=>{"segment"in t&&r(0,s=t.segment),"$$scope"in t&&r(1,a=t.$$scope)}),[s,a,n]}class st extends r{constructor(t){super(),s(this,t,rt,et,e,{segment:0})}}function nt(t){let e,r,s=t[1].stack+"";return{c(){e=n("pre"),r=o(s)},l(t){e=c(t,"PRE",{});var n=l(e);r=f(n,s),n.forEach(i)},m(t,s){m(t,e,s),g(e,r)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&$(r,s)},d(t){t&&i(e)}}}function at(e){let r,s,p,d,b,y,E,x,S,w=e[1].message+"";document.title=r=e[0];let _=e[2]&&e[1].stack&&nt(e);return{c(){s=a(),p=n("h1"),d=o(e[0]),b=a(),y=n("p"),E=o(w),x=a(),_&&_.c(),S=v(),this.h()},l(t){s=u(t),p=c(t,"H1",{class:!0});var r=l(p);d=f(r,e[0]),r.forEach(i),b=u(t),y=c(t,"P",{class:!0});var n=l(y);E=f(n,w),n.forEach(i),x=u(t),_&&_.l(t),S=v(),this.h()},h(){h(p,"class","svelte-8od9u6"),h(y,"class","svelte-8od9u6")},m(t,e){m(t,s,e),m(t,p,e),g(p,d),m(t,b,e),m(t,y,e),g(y,E),m(t,x,e),_&&_.m(t,e),m(t,S,e)},p(t,[e]){1&e&&r!==(r=t[0])&&(document.title=r),1&e&&$(d,t[0]),2&e&&w!==(w=t[1].message+"")&&$(E,w),t[2]&&t[1].stack?_?_.p(t,e):((_=nt(t)).c(),_.m(S.parentNode,S)):_&&(_.d(1),_=null)},i:t,o:t,d(t){t&&i(s),t&&i(p),t&&i(b),t&&i(y),t&&i(x),_&&_.d(t),t&&i(S)}}}function ot(t,e,r){let{status:s}=e,{error:n}=e;return t.$set=(t=>{"status"in t&&r(0,s=t.status),"error"in t&&r(1,n=t.error)}),[s,n,!1]}class ct extends r{constructor(t){super(),s(this,t,ot,at,e,{status:0,error:1})}}function lt(t){let e,r;const s=[t[4].props];var n=t[4].component;function a(t){let e={};for(let t=0;t<s.length;t+=1)e=L(e,s[t]);return{props:e}}if(n)var o=new n(a());return{c(){o&&x(o.$$.fragment),e=v()},l(t){o&&S(o.$$.fragment,t),e=v()},m(t,s){o&&w(o,t,s),m(t,e,s),r=!0},p(t,r){const c=16&r?C(s,[N(t[4].props)]):{};if(n!==(n=t[4].component)){if(o){k();const t=o;I(t.$$.fragment,1,0,()=>{R(t,1)}),O()}n?(o=new n(a()),x(o.$$.fragment),A(o.$$.fragment,1),w(o,e.parentNode,e)):o=null}else n&&o.$set(c)},i(t){r||(o&&A(o.$$.fragment,t),r=!0)},o(t){o&&I(o.$$.fragment,t),r=!1},d(t){t&&i(e),o&&R(o,t)}}}function it(t){let e;const r=new ct({props:{error:t[0],status:t[1]}});return{c(){x(r.$$.fragment)},l(t){S(r.$$.fragment,t)},m(t,s){w(r,t,s),e=!0},p(t,e){const s={};1&e&&(s.error=t[0]),2&e&&(s.status=t[1]),r.$set(s)},i(t){e||(A(r.$$.fragment,t),e=!0)},o(t){I(r.$$.fragment,t),e=!1},d(t){R(r,t)}}}function ut(t){let e,r,s,n;const a=[it,lt],o=[];function c(t,e){return t[0]?0:1}return e=c(t),r=o[e]=a[e](t),{c(){r.c(),s=v()},l(t){r.l(t),s=v()},m(t,r){o[e].m(t,r),m(t,s,r),n=!0},p(t,n){let l=e;(e=c(t))===l?o[e].p(t,n):(k(),I(o[l],1,1,()=>{o[l]=null}),O(),(r=o[e])||(r=o[e]=a[e](t)).c(),A(r,1),r.m(s.parentNode,s))},i(t){n||(A(r),n=!0)},o(t){I(r),n=!1},d(t){o[e].d(t),t&&i(s)}}}function ft(t){let e;const r=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[ut]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)s=L(s,r[t]);const n=new st({props:s});return{c(){x(n.$$.fragment)},l(t){S(n.$$.fragment,t)},m(t,r){w(n,t,r),e=!0},p(t,[e]){const s=12&e?C(r,[4&e&&{segment:t[2][0]},8&e&&N(t[3].props)]):{};83&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(A(n.$$.fragment,t),e=!0)},o(t){I(n.$$.fragment,t),e=!1},d(t){R(n,t)}}}function ht(t,e,r){let{stores:s}=e,{error:n}=e,{status:a}=e,{segments:o}=e,{level0:c}=e,{level1:l=null}=e;return j(q,s),t.$set=(t=>{"stores"in t&&r(5,s=t.stores),"error"in t&&r(0,n=t.error),"status"in t&&r(1,a=t.status),"segments"in t&&r(2,o=t.segments),"level0"in t&&r(3,c=t.level0),"level1"in t&&r(4,l=t.level1)}),[n,a,o,c,l,s]}class pt extends r{constructor(t){super(),s(this,t,ht,ft,e,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const dt=[/^\/stream.json$/,/^\/stream\/([^\/]+?).json$/],mt=[{js:()=>import("./index.c102981c.js"),css:[]},{js:()=>import("./index.5b800827.js"),css:[]},{js:()=>import("./[slug].502cccdc.js"),css:[]},{js:()=>import("./about.fe9bde88.js"),css:[]}],gt=(t=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/stream\/?$/,parts:[{i:1}]},{pattern:/^\/stream\/([^\/]+?)\/?$/,parts:[null,{i:2,params:e=>({slug:t(e[1])})}]},{pattern:/^\/about\/?$/,parts:[{i:3}]}])(decodeURIComponent);const vt="undefined"!=typeof __SAPPER__&&__SAPPER__;let bt,$t,yt,Et=!1,xt=[],St="{}";const wt={page:U({}),preloading:U(null),session:U(vt&&vt.session)};let _t,Pt;wt.session.subscribe(async t=>{if(_t=t,!Et)return;Pt=!0;const e=kt(new URL(location.href)),r=$t={},{redirect:s,props:n,branch:a}=await qt(e);r===$t&&await Ut(s,a,n,e.page)});let At,It=null;let Rt,Lt=1;const Ct="undefined"!=typeof history?history:{pushState:(t,e,r)=>{},replaceState:(t,e,r)=>{},scrollRestoration:""},Nt={};function jt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,r,s=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[r]&&(e[r]=[e[r]]),"object"==typeof e[r]?e[r].push(s):e[r]=s}),e}function kt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(vt.baseUrl))return null;let e=t.pathname.slice(vt.baseUrl.length);if(""===e&&(e="/"),!dt.some(t=>t.test(e)))for(let r=0;r<gt.length;r+=1){const s=gt[r],n=s.pattern.exec(e);if(n){const r=jt(t.search),a=s.parts[s.parts.length-1],o=a.params?a.params(n):{},c={host:location.host,path:e,query:r,params:o};return{href:t.href,route:s,match:n,page:c}}}}function Ot(){return{x:pageXOffset,y:pageYOffset}}async function Dt(t,e,r,s){if(e)Rt=e;else{const t=Ot();Nt[Rt]=t,e=Rt=++Lt,Nt[Rt]=r?t:{x:0,y:0}}Rt=e,bt&&wt.preloading.set(!0);const n=It&&It.href===t.href?It.promise:qt(t);It=null;const a=$t={},{redirect:o,props:c,branch:l}=await n;if(a===$t&&(await Ut(o,l,c,t.page),document.activeElement&&document.activeElement.blur(),!r)){let t=Nt[e];if(s){const e=document.getElementById(s.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Nt[Rt]=t,t&&scrollTo(t.x,t.y)}}async function Ut(t,e,r,s){if(t)return function(t,e={replaceState:!1}){const r=kt(new URL(t,document.baseURI));return r?(Ct[e.replaceState?"replaceState":"pushState"]({id:Rt},"",t),Dt(r,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(wt.page.set(s),wt.preloading.set(!1),bt)bt.$set(r);else{r.stores={page:{subscribe:wt.page.subscribe},preloading:{subscribe:wt.preloading.subscribe},session:wt.session},r.level0={props:await yt};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Ht(t.nextSibling);Ht(t),Ht(e)}bt=new pt({target:At,props:r,hydrate:!0})}xt=e,St=JSON.stringify(s.query),Et=!0,Pt=!1}async function qt(t){const{route:e,page:r}=t,s=r.path.split("/").filter(Boolean);let n=null;const a={error:null,status:200,segments:[s[0]]},o={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(n&&(n.statusCode!==t||n.location!==e))throw new Error("Conflicting redirects");n={statusCode:t,location:e}},error:(t,e)=>{a.error="string"==typeof e?new Error(e):e,a.status=t}};let c;yt||(yt=vt.preloaded[0]||V.call(o,{host:r.host,path:r.path,query:r.query,params:{}},_t));let l=1;try{const n=JSON.stringify(r.query),i=e.pattern.exec(r.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=s[c];if(function(t,e,r,s){if(s!==St)return!0;const n=xt[t];return!!n&&(e!==n.segment||!(!n.match||JSON.stringify(n.match.slice(1,t+2))===JSON.stringify(r.slice(1,t+2)))||void 0)}(c,f,i,n)&&(u=!0),a.segments[l]=s[c+1],!e)return{segment:f};const h=l++;if(!Pt&&!u&&xt[c]&&xt[c].part===e.i)return xt[c];u=!1;const{default:p,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Vt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(mt[e.i]);let m;return m=Et||!vt.preloaded[c+1]?d?await d.call(o,{host:r.host,path:r.path,query:r.query,params:e.params?e.params(t.match):{}},_t):{}:vt.preloaded[c+1],a[`level${h}`]={component:p,props:m,segment:f,match:i,part:e.i}}))}catch(t){a.error=t,a.status=500,c=[]}return{redirect:n,props:a,branch:c}}function Vt(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,r)=>{const s=document.createElement("link");s.rel="stylesheet",s.href=e,s.onload=(()=>t()),s.onerror=r,document.head.appendChild(s)})}function Ht(t){t.parentNode.removeChild(t)}function Tt(t){const e=kt(new URL(t,document.baseURI));if(e)return It&&t===It.href||function(t,e){It={href:t,promise:e}}(t,qt(e)),It.promise}let Bt;function Kt(t){clearTimeout(Bt),Bt=setTimeout(()=>{Gt(t)},20)}function Gt(t){const e=Mt(t.target);e&&"prefetch"===e.rel&&Tt(e.href)}function Jt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Mt(t.target);if(!e)return;if(!e.href)return;const r="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(r?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(r?e.target.baseVal:e.target)return;const n=new URL(s);if(n.pathname===location.pathname&&n.search===location.search)return;const a=kt(n);if(a){Dt(a,null,e.hasAttribute("sapper-noscroll"),n.hash),t.preventDefault(),Ct.pushState({id:Rt},"",n.href)}}function Mt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Yt(t){if(Nt[Rt]=Ot(),t.state){const e=kt(new URL(location.href));e?Dt(e,t.state.id):location.href=location.href}else(function(t){Rt=t})(Lt=Lt+1),Ct.replaceState({id:Rt},"",location.href)}!function(t){var e;"scrollRestoration"in Ct&&(Ct.scrollRestoration="manual"),e=t.target,At=e,addEventListener("click",Jt),addEventListener("popstate",Yt),addEventListener("touchstart",Gt),addEventListener("mousemove",Kt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Ct.replaceState({id:Lt},"",e);const r=new URL(location.href);if(vt.error)return function(t){const{host:e,pathname:r,search:s}=location,{session:n,preloaded:a,status:o,error:c}=vt;yt||(yt=a&&a[0]),Ut(null,[],{error:c,status:o,session:n,level0:{props:yt},level1:{props:{status:o,error:c},component:ct},segments:a},{host:e,path:r,query:jt(s),params:{}})}();const s=kt(r);return s?Dt(s,Lt,!0,t):void 0})}({target:document.querySelector("#sapper")});