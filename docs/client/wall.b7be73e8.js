import{S as a,a as s,s as e,f as t,x as l,g as r,h as o,j as n,y as c,k as i,e as f,l as h,b as d,z as u,m as p,o as m,A as g,B as v,C as E,t as I,O as V,c as b,F as w,n as D,J as $,v as x,I as j}from"./client.e023b365.js";import"./commonjsHelpers.b9e74a66.js";import{R as k}from"./RandomVideo.55a96414.js";import"./index.edd3fa17.js";function B(a,s,e){const t=a.slice();return t[3]=s[e],t[5]=e,t}function O(a){let s,e,I;const V=new k({props:{duration:y(10,30)}});return{c(){s=t("div"),l(V.$$.fragment),e=r(),this.h()},l(a){s=o(a,"DIV",{class:!0});var t=n(s);c(V.$$.fragment,t),e=i(t),t.forEach(f),this.h()},h(){h(s,"class","col-xl-2 pb-3")},m(a,t){d(a,s,t),u(V,s,null),p(s,e),I=!0},p:m,i(a){I||(g(V.$$.fragment,a),I=!0)},o(a){v(V.$$.fragment,a),I=!1},d(a){a&&f(s),E(V)}}}function M(a){let s,e,l,c,u,m,E,k,M,y,A,C,F,G,N,R,T,P,S=a[2],U=[];for(let s=0;s<S.length;s+=1)U[s]=O(B(a,S,s));const z=a=>v(U[a],1,1,()=>{U[a]=null});return{c(){s=r(),e=t("div"),l=t("div"),c=t("div"),u=t("div"),m=t("button"),E=t("span"),k=I("×"),M=r(),y=t("figure"),A=t("img"),F=t("figcaption"),G=I("Best Viewed On Desktop."),N=r(),R=t("div");for(let a=0;a<U.length;a+=1)U[a].c();this.h()},l(a){V('[data-svelte="svelte-113atii"]',document.head).forEach(f),s=i(a),e=o(a,"DIV",{class:!0});var t=n(e);l=o(t,"DIV",{class:!0});var r=n(l);c=o(r,"DIV",{class:!0});var h=n(c);u=o(h,"DIV",{class:!0,role:!0});var d=n(u);m=o(d,"BUTTON",{type:!0,class:!0,"aria-label":!0});var p=n(m);E=o(p,"SPAN",{"aria-hidden":!0});var g=n(E);k=b(g,"×"),g.forEach(f),p.forEach(f),M=i(d),y=o(d,"FIGURE",{class:!0});var v=n(y);A=o(v,"IMG",{src:!0,class:!0,alt:!0}),F=o(v,"FIGCAPTION",{class:!0});var I=n(F);G=b(I,"Best Viewed On Desktop."),I.forEach(f),v.forEach(f),d.forEach(f),h.forEach(f),r.forEach(f),N=i(t),R=o(t,"DIV",{class:!0});var w=n(R);for(let a=0;a<U.length;a+=1)U[a].l(w);w.forEach(f),t.forEach(f),this.h()},h(){document.title="𝗖𝗔𝗧𝗣𝗘𝗔: Video Wall",h(E,"aria-hidden","true"),h(m,"type","button"),h(m,"class","close p-1"),h(m,"aria-label","Close"),A.src!==(C="previews/wall.png")&&h(A,"src","previews/wall.png"),h(A,"class","figure-img rounded"),h(A,"alt","Best Viewed On Desktop"),h(F,"class","figure-caption text-right"),h(y,"class","figure mb-0 mr-3"),h(u,"class","alert alert-info d-inline-block d-xl-none"),h(u,"role","alert"),h(c,"class","col"),h(l,"class","row"),w(l,"d-none",!a[0]),h(R,"class","row"),h(e,"class","container-fluid")},m(t,r,o){d(t,s,r),d(t,e,r),p(e,l),p(l,c),p(c,u),p(u,m),p(m,E),p(E,k),p(u,M),p(u,y),p(y,A),p(y,F),p(F,G),p(e,N),p(e,R);for(let a=0;a<U.length;a+=1)U[a].m(R,null);T=!0,o&&P(),P=D(m,"click",a[1])},p(a,[s]){if(1&s&&w(l,"d-none",!a[0]),0&s){let e;for(S=a[2],e=0;e<S.length;e+=1){const t=B(a,S,e);U[e]?(U[e].p(t,s),g(U[e],1)):(U[e]=O(),U[e].c(),g(U[e],1),U[e].m(R,null))}for(j(),e=S.length;e<U.length;e+=1)z(e);$()}},i(a){if(!T){for(let a=0;a<S.length;a+=1)g(U[a]);T=!0}},o(a){U=U.filter(Boolean);for(let a=0;a<U.length;a+=1)v(U[a]);T=!1},d(a){a&&f(s),a&&f(e),x(U,a),P()}}}function y(a,s){return a=Math.ceil(a),s=Math.floor(s),Math.floor(Math.random()*(s-a+1))+a}function A(a,s,e){let t=!0;return[t,function(){e(0,t=!t)},[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]]}export default class extends a{constructor(a){super(),s(this,a,A,M,e,{})}}
