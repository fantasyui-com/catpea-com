import{S as a,a as s,s as e,f as t,x as l,g as r,h as o,j as n,y as c,k as i,e as f,l as d,b as h,z as u,m as p,o as m,A as g,B as v,C as E,t as b,O as I,c as V,F as w,n as D,J as $,v as x,I as j}from"./client.db2e9d7c.js";import"./commonjsHelpers.b9e74a66.js";import{R as k}from"./RandomVideo.8bfdad28.js";import"./index.edd3fa17.js";function B(a,s,e){const t=a.slice();return t[3]=s[e],t[5]=e,t}function O(a){let s,e,b;const I=new k({props:{duration:y(10,30)}});return{c(){s=t("div"),l(I.$$.fragment),e=r(),this.h()},l(a){s=o(a,"DIV",{class:!0});var t=n(s);c(I.$$.fragment,t),e=i(t),t.forEach(f),this.h()},h(){d(s,"class","col-xl-2 pb-3")},m(a,t){h(a,s,t),u(I,s,null),p(s,e),b=!0},p:m,i(a){b||(g(I.$$.fragment,a),b=!0)},o(a){v(I.$$.fragment,a),b=!1},d(a){a&&f(s),E(I)}}}function M(a){let s,e,l,c,u,m,E,k,M,y,A,C,F,G,N,R,T,P,S=a[2],U=[];for(let s=0;s<S.length;s+=1)U[s]=O(B(a,S,s));const z=a=>v(U[a],1,1,()=>{U[a]=null});return{c(){s=r(),e=t("div"),l=t("div"),c=t("div"),u=t("div"),m=t("button"),E=t("span"),k=b("×"),M=r(),y=t("figure"),A=t("img"),F=t("figcaption"),G=b("Best Viewed On Desktop."),N=r(),R=t("div");for(let a=0;a<U.length;a+=1)U[a].c();this.h()},l(a){I('[data-svelte="svelte-113atii"]',document.head).forEach(f),s=i(a),e=o(a,"DIV",{class:!0});var t=n(e);l=o(t,"DIV",{class:!0});var r=n(l);c=o(r,"DIV",{class:!0});var d=n(c);u=o(d,"DIV",{class:!0,role:!0});var h=n(u);m=o(h,"BUTTON",{type:!0,class:!0,"aria-label":!0});var p=n(m);E=o(p,"SPAN",{"aria-hidden":!0});var g=n(E);k=V(g,"×"),g.forEach(f),p.forEach(f),M=i(h),y=o(h,"FIGURE",{class:!0});var v=n(y);A=o(v,"IMG",{src:!0,class:!0,alt:!0}),F=o(v,"FIGCAPTION",{class:!0});var b=n(F);G=V(b,"Best Viewed On Desktop."),b.forEach(f),v.forEach(f),h.forEach(f),d.forEach(f),r.forEach(f),N=i(t),R=o(t,"DIV",{class:!0});var w=n(R);for(let a=0;a<U.length;a+=1)U[a].l(w);w.forEach(f),t.forEach(f),this.h()},h(){document.title="𝗖𝗔𝗧𝗣𝗘𝗔: Video Wall",d(E,"aria-hidden","true"),d(m,"type","button"),d(m,"class","close p-1"),d(m,"aria-label","Close"),A.src!==(C="previews/wall.png")&&d(A,"src","previews/wall.png"),d(A,"class","figure-img rounded"),d(A,"alt","Best Viewed On Desktop"),d(F,"class","figure-caption text-right"),d(y,"class","figure mb-0 mr-3"),d(u,"class","alert alert-info d-inline-block d-xl-none"),d(u,"role","alert"),d(c,"class","col"),d(l,"class","row"),w(l,"d-none",!a[0]),d(R,"class","row"),d(e,"class","container-fluid")},m(t,r,o){h(t,s,r),h(t,e,r),p(e,l),p(l,c),p(c,u),p(u,m),p(m,E),p(E,k),p(u,M),p(u,y),p(y,A),p(y,F),p(F,G),p(e,N),p(e,R);for(let a=0;a<U.length;a+=1)U[a].m(R,null);T=!0,o&&P(),P=D(m,"click",a[1])},p(a,[s]){if(1&s&&w(l,"d-none",!a[0]),0&s){let e;for(S=a[2],e=0;e<S.length;e+=1){const t=B(a,S,e);U[e]?(U[e].p(t,s),g(U[e],1)):(U[e]=O(),U[e].c(),g(U[e],1),U[e].m(R,null))}for(j(),e=S.length;e<U.length;e+=1)z(e);$()}},i(a){if(!T){for(let a=0;a<S.length;a+=1)g(U[a]);T=!0}},o(a){U=U.filter(Boolean);for(let a=0;a<U.length;a+=1)v(U[a]);T=!1},d(a){a&&f(s),a&&f(e),x(U,a),P()}}}function y(a,s){return a=Math.ceil(a),s=Math.floor(s),Math.floor(Math.random()*(s-a+1))+a}function A(a,s,e){let t=!0;return[t,function(){e(0,t=!t)},[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]]}export default class extends a{constructor(a){super(),s(this,a,A,M,e,{})}}