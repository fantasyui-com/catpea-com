import{S as a,i as s,s as e,e as l,z as t,f as r,g as o,h as n,A as c,j as i,d as f,k as h,a as d,B as u,l as g,n as p,C as m,D as v,E,t as w,R as I,c as V,I as D,m as b,L as $,w as k,K as x}from"./client.062954bf.js";import{R as B}from"./RandomVideo.e7dd731e.js";import"./index.edd3fa17.js";function j(a,s,e){const l=a.slice();return l[3]=s[e],l[5]=e,l}function A(a){let s,e,w;const I=new B({props:{duration:O(10,30)}});return{c(){s=l("div"),t(I.$$.fragment),e=r(),this.h()},l(a){s=o(a,"DIV",{class:!0});var l=n(s);c(I.$$.fragment,l),e=i(l),l.forEach(f),this.h()},h(){h(s,"class","col-xl-2 pb-3")},m(a,l){d(a,s,l),u(I,s,null),g(s,e),w=!0},p:p,i(a){w||(m(I.$$.fragment,a),w=!0)},o(a){v(I.$$.fragment,a),w=!1},d(a){a&&f(s),E(I)}}}function M(a){let s,e,t,c,u,p,E,B,M,O,C,R,T,G,N,P,y,F,S=a[2],U=[];for(let s=0;s<S.length;s+=1)U[s]=A(j(a,S,s));const z=a=>v(U[a],1,1,()=>{U[a]=null});return{c(){s=r(),e=l("div"),t=l("div"),c=l("div"),u=l("div"),p=l("button"),E=l("span"),B=w("×"),M=r(),O=l("figure"),C=l("img"),T=l("figcaption"),G=w("Best Viewed On Desktop."),N=r(),P=l("div");for(let a=0;a<U.length;a+=1)U[a].c();this.h()},l(a){I('[data-svelte="svelte-1j7borr"]',document.head).forEach(f),s=i(a),e=o(a,"DIV",{class:!0});var l=n(e);t=o(l,"DIV",{class:!0});var r=n(t);c=o(r,"DIV",{class:!0});var h=n(c);u=o(h,"DIV",{class:!0,role:!0});var d=n(u);p=o(d,"BUTTON",{type:!0,class:!0,"aria-label":!0});var g=n(p);E=o(g,"SPAN",{"aria-hidden":!0});var m=n(E);B=V(m,"×"),m.forEach(f),g.forEach(f),M=i(d),O=o(d,"FIGURE",{class:!0});var v=n(O);C=o(v,"IMG",{src:!0,class:!0,alt:!0}),T=o(v,"FIGCAPTION",{class:!0});var w=n(T);G=V(w,"Best Viewed On Desktop."),w.forEach(f),v.forEach(f),d.forEach(f),h.forEach(f),r.forEach(f),N=i(l),P=o(l,"DIV",{class:!0});var D=n(P);for(let a=0;a<U.length;a+=1)U[a].l(D);D.forEach(f),l.forEach(f),this.h()},h(){document.title="CATPEA! Video Wall",h(E,"aria-hidden","true"),h(p,"type","button"),h(p,"class","close p-1"),h(p,"aria-label","Close"),C.src!==(R="previews/wall.png")&&h(C,"src","previews/wall.png"),h(C,"class","figure-img rounded"),h(C,"alt","Best Viewed On Desktop"),h(T,"class","figure-caption text-right"),h(O,"class","figure mb-0 mr-3"),h(u,"class","alert alert-info d-inline-block d-xl-none"),h(u,"role","alert"),h(c,"class","col"),h(t,"class","row"),D(t,"d-none",!a[0]),h(P,"class","row"),h(e,"class","container-fluid")},m(l,r,o){d(l,s,r),d(l,e,r),g(e,t),g(t,c),g(c,u),g(u,p),g(p,E),g(E,B),g(u,M),g(u,O),g(O,C),g(O,T),g(T,G),g(e,N),g(e,P);for(let a=0;a<U.length;a+=1)U[a].m(P,null);y=!0,o&&F(),F=b(p,"click",a[1])},p(a,[s]){if(1&s&&D(t,"d-none",!a[0]),0&s){let e;for(S=a[2],e=0;e<S.length;e+=1){const l=j(a,S,e);U[e]?(U[e].p(l,s),m(U[e],1)):(U[e]=A(),U[e].c(),m(U[e],1),U[e].m(P,null))}for(x(),e=S.length;e<U.length;e+=1)z(e);$()}},i(a){if(!y){for(let a=0;a<S.length;a+=1)m(U[a]);y=!0}},o(a){U=U.filter(Boolean);for(let a=0;a<U.length;a+=1)v(U[a]);y=!1},d(a){a&&f(s),a&&f(e),k(U,a),F()}}}function O(a,s){return a=Math.ceil(a),s=Math.floor(s),Math.floor(Math.random()*(s-a+1))+a}function C(a,s,e){let l=!0;return[l,function(){e(0,l=!l)},[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]]}export default class extends a{constructor(a){super(),s(this,a,C,M,e,{})}}