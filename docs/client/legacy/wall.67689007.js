import{_ as a,a as t,i as n,s as r,b as e,S as s,e as o,F as c,u as i,c as l,d as f,G as u,v as h,f as d,w as v,g as p,H as g,x as m,n as D,I as E,J as I,K as b,t as w,a4 as V,q as y,P as R,z as $,h as x,r as j,Z as k,D as B,j as M,k as O,Y as P}from"./client.6ab40502.js";import"./Icon.5e6acd9d.js";import{R as G}from"./RandomVideo.4b3152e5.js";import"./index.a9e22bc8.js";import"./PreferenceCard.07356993.js";function C(a){return function(){var t,n=M(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}()){var r=M(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return O(this,t)}}function F(a,t,n){var r=a.slice();return r[3]=t[n],r[5]=n,r}function N(a){var t,n,r,e=new G({props:{duration:T(10,30)}});return{c:function(){t=o("div"),c(e.$$.fragment),n=i(),this.h()},l:function(a){t=l(a,"DIV",{class:!0});var r=f(t);u(e.$$.fragment,r),n=h(r),r.forEach(d),this.h()},h:function(){v(t,"class","col-xl-2 pb-3")},m:function(a,s){p(a,t,s),g(e,t,null),m(t,n),r=!0},p:D,i:function(a){r||(E(e.$$.fragment,a),r=!0)},o:function(a){I(e.$$.fragment,a),r=!1},d:function(a){a&&d(t),b(e)}}}function S(a){for(var t,n,r,e,s,c,u,g,D,b,M,O,G,C,S,T,A,U,q=a[2],z=[],H=0;H<q.length;H+=1)z[H]=N(F(a,q,H));var J=function(a){return I(z[a],1,1,function(){z[a]=null})};return{c:function(){t=i(),n=o("div"),r=o("div"),e=o("div"),s=o("div"),c=o("button"),u=o("span"),g=w("×"),D=i(),b=o("figure"),M=o("img"),O=o("figcaption"),G=w("Best Viewed On Desktop "),C=w(a[0]),S=i(),T=o("div");for(var l=0;l<z.length;l+=1)z[l].c();this.h()},l:function(o){V('[data-svelte="svelte-113atii"]',document.head).forEach(d),t=h(o),n=l(o,"DIV",{class:!0});var i=f(n);r=l(i,"DIV",{class:!0});var v=f(r);e=l(v,"DIV",{class:!0});var p=f(e);s=l(p,"DIV",{class:!0,role:!0});var m=f(s);c=l(m,"BUTTON",{type:!0,class:!0,"aria-label":!0});var E=f(c);u=l(E,"SPAN",{"aria-hidden":!0});var I=f(u);g=y(I,"×"),I.forEach(d),E.forEach(d),D=h(m),b=l(m,"FIGURE",{class:!0});var w=f(b);M=l(w,"IMG",{src:!0,class:!0,alt:!0}),O=l(w,"FIGCAPTION",{class:!0});var R=f(O);G=y(R,"Best Viewed On Desktop "),C=y(R,a[0]),R.forEach(d),w.forEach(d),m.forEach(d),p.forEach(d),v.forEach(d),S=h(i),T=l(i,"DIV",{class:!0});for(var $=f(T),x=0;x<z.length;x+=1)z[x].l($);$.forEach(d),i.forEach(d),this.h()},h:function(){document.title="𝗖𝗔𝗧𝗣𝗘𝗔: Video Wall",v(u,"aria-hidden","true"),v(c,"type","button"),v(c,"class","close p-1"),v(c,"aria-label","Close"),M.src!=="previews/wall.png"&&v(M,"src","previews/wall.png"),v(M,"class","figure-img rounded"),v(M,"alt","Best Viewed On Desktop"),v(O,"class","figure-caption text-right"),v(b,"class","figure mb-0 mr-3"),v(s,"class","alert alert-info d-inline-block d-xl-none"),v(s,"role","alert"),v(e,"class","col"),v(r,"class","row"),R(r,"d-none",!a[0]),v(T,"class","row"),v(n,"class","container-fluid")},m:function(o,i,l){p(o,t,i),p(o,n,i),m(n,r),m(r,e),m(e,s),m(s,c),m(c,u),m(u,g),m(s,D),m(s,b),m(b,M),m(b,O),m(O,G),m(O,C),m(n,S),m(n,T);for(var f=0;f<z.length;f+=1)z[f].m(T,null);A=!0,l&&U(),U=$(c,"click",a[1])},p:function(a,t){var n=x(t,1)[0];if((!A||1&n)&&j(C,a[0]),1&n&&R(r,"d-none",!a[0]),0&n){var e;for(q=a[2],e=0;e<q.length;e+=1){var s=F(a,q,e);z[e]?(z[e].p(s,n),E(z[e],1)):(z[e]=N(),z[e].c(),E(z[e],1),z[e].m(T,null))}for(P(),e=q.length;e<z.length;e+=1)J(e);k()}},i:function(a){if(!A){for(var t=0;t<q.length;t+=1)E(z[t]);A=!0}},o:function(a){z=z.filter(Boolean);for(var t=0;t<z.length;t+=1)I(z[t]);A=!1},d:function(a){a&&d(t),a&&d(n),B(z,a),U()}}}function T(a,t){return a=Math.ceil(a),t=Math.floor(t),Math.floor(Math.random()*(t-a+1))+a}function A(a,t,n){var r=!0;return[r,function(){n(0,r=!r)},[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]]}export default(function(o){a(i,s);var c=C(i);function i(a){var s;return t(this,i),s=c.call(this),n(e(s),a,A,S,r,{}),s}return i}());