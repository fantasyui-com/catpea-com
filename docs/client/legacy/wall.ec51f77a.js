import{d as a,e as t,i as n,s as r,f as s,S as e,q as o,J as c,B as i,u as l,v as f,K as u,C as h,k as v,x as d,h as p,L as g,z as m,n as E,M as D,N as b,O as w,r as V,a1 as I,w as y,D as R,A as $,j as x,X as k,H as B,m as M,p as O,W as j}from"./client.8eb9af7f.js";import"./index.a9e22bc8.js";import{R as A}from"./RandomVideo.3685a92b.js";function C(a){return function(){var t,n=M(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}()){var r=M(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return O(this,t)}}function N(a,t,n){var r=a.slice();return r[3]=t[n],r[5]=n,r}function P(a){var t,n,r,s=new A({props:{duration:G(10,30)}});return{c:function(){t=o("div"),c(s.$$.fragment),n=i(),this.h()},l:function(a){t=l(a,"DIV",{class:!0});var r=f(t);u(s.$$.fragment,r),n=h(r),r.forEach(v),this.h()},h:function(){d(t,"class","col-xl-2 pb-3")},m:function(a,e){p(a,t,e),g(s,t,null),m(t,n),r=!0},p:E,i:function(a){r||(D(s.$$.fragment,a),r=!0)},o:function(a){b(s.$$.fragment,a),r=!1},d:function(a){a&&v(t),w(s)}}}function T(a){for(var t,n,r,s,e,c,u,g,E,w,M,O,A,C,T,G,S,F=a[2],U=[],W=0;W<F.length;W+=1)U[W]=P(N(a,F,W));var q=function(a){return b(U[a],1,1,function(){U[a]=null})};return{c:function(){t=i(),n=o("div"),r=o("div"),s=o("div"),e=o("div"),c=o("button"),u=o("span"),g=V("×"),E=i(),w=o("figure"),M=o("img"),O=o("figcaption"),A=V("Best Viewed On Desktop."),C=i(),T=o("div");for(var a=0;a<U.length;a+=1)U[a].c();this.h()},l:function(a){I('[data-svelte="svelte-1j7borr"]',document.head).forEach(v),t=h(a),n=l(a,"DIV",{class:!0});var o=f(n);r=l(o,"DIV",{class:!0});var i=f(r);s=l(i,"DIV",{class:!0});var d=f(s);e=l(d,"DIV",{class:!0,role:!0});var p=f(e);c=l(p,"BUTTON",{type:!0,class:!0,"aria-label":!0});var m=f(c);u=l(m,"SPAN",{"aria-hidden":!0});var D=f(u);g=y(D,"×"),D.forEach(v),m.forEach(v),E=h(p),w=l(p,"FIGURE",{class:!0});var b=f(w);M=l(b,"IMG",{src:!0,class:!0,alt:!0}),O=l(b,"FIGCAPTION",{class:!0});var V=f(O);A=y(V,"Best Viewed On Desktop."),V.forEach(v),b.forEach(v),p.forEach(v),d.forEach(v),i.forEach(v),C=h(o),T=l(o,"DIV",{class:!0});for(var R=f(T),$=0;$<U.length;$+=1)U[$].l(R);R.forEach(v),o.forEach(v),this.h()},h:function(){document.title="CATPEA! Video Wall",d(u,"aria-hidden","true"),d(c,"type","button"),d(c,"class","close p-1"),d(c,"aria-label","Close"),M.src!=="previews/wall.png"&&d(M,"src","previews/wall.png"),d(M,"class","figure-img rounded"),d(M,"alt","Best Viewed On Desktop"),d(O,"class","figure-caption text-right"),d(w,"class","figure mb-0 mr-3"),d(e,"class","alert alert-info d-inline-block d-xl-none"),d(e,"role","alert"),d(s,"class","col"),d(r,"class","row"),R(r,"d-none",!a[0]),d(T,"class","row"),d(n,"class","container-fluid")},m:function(o,i,l){p(o,t,i),p(o,n,i),m(n,r),m(r,s),m(s,e),m(e,c),m(c,u),m(u,g),m(e,E),m(e,w),m(w,M),m(w,O),m(O,A),m(n,C),m(n,T);for(var f=0;f<U.length;f+=1)U[f].m(T,null);G=!0,l&&S(),S=$(c,"click",a[1])},p:function(a,t){var n=x(t,1)[0];if(1&n&&R(r,"d-none",!a[0]),0&n){var s;for(F=a[2],s=0;s<F.length;s+=1){var e=N(a,F,s);U[s]?(U[s].p(e,n),D(U[s],1)):(U[s]=P(),U[s].c(),D(U[s],1),U[s].m(T,null))}for(j(),s=F.length;s<U.length;s+=1)q(s);k()}},i:function(a){if(!G){for(var t=0;t<F.length;t+=1)D(U[t]);G=!0}},o:function(a){U=U.filter(Boolean);for(var t=0;t<U.length;t+=1)b(U[t]);G=!1},d:function(a){a&&v(t),a&&v(n),B(U,a),S()}}}function G(a,t){return a=Math.ceil(a),t=Math.floor(t),Math.floor(Math.random()*(t-a+1))+a}function S(a,t,n){var r=!0;return[r,function(){n(0,r=!r)},[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]]}export default(function(o){a(i,e);var c=C(i);function i(a){var e;return t(this,i),e=c.call(this),n(s(e),a,S,T,r,{}),e}return i}());