import{d as a,e as t,i as r,s as n,f as s,S as c,l as e,m as o,t as i,n as f,o as l,k as u,p as h,g as d,q as v,h as m,r as p,j as g,a3 as y,w as D,x as E,D as I,a0 as x,y as V,z as b}from"./client.c0380d1f.js";import{i as j}from"./icons.5b7841c2.js";import{m as P}from"./index.0ce8775c.js";import{m as R}from"./moment.06e300a8.js";function S(a){return function(){var t,r=V(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}()){var n=V(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return b(this,t)}}function k(a,t,r){var n=a.slice();return n[4]=t[r],n[6]=r,n}function w(a){var t,r,n,s,c,y,D,E,I,x,V,b,j,P=a[1][L].toSVG({class:"fill-info"})+"",R=a[4].ago+"",S=a[4].html+"";return{c:function(){t=e("div"),r=e("div"),n=e("div"),s=e("div"),c=e("span"),y=o(),D=e("span"),E=i("Posted "),I=i(R),x=o(),V=e("div"),b=e("div"),j=o(),this.h()},l:function(a){t=f(a,"DIV",{class:!0});var e=l(t);r=f(e,"DIV",{class:!0});var o=l(r);n=f(o,"DIV",{class:!0});var i=l(n);s=f(i,"DIV",{class:!0});var v=l(s);c=f(v,"SPAN",{class:!0}),l(c).forEach(u),y=h(v),D=f(v,"SPAN",{class:!0});var m=l(D);E=d(m,"Posted "),I=d(m,R),m.forEach(u),v.forEach(u),x=h(i),V=f(i,"DIV",{class:!0});var p=l(V);b=f(p,"DIV",{class:!0}),l(b).forEach(u),p.forEach(u),i.forEach(u),o.forEach(u),j=h(e),e.forEach(u),this.h()},h:function(){v(c,"class","shake"),v(D,"class","badge badge-secondary px-2"),v(s,"class","card-header"),v(b,"class","card-text"),v(V,"class","card-body"),v(n,"class","card text-white bg-dark mb-3"),v(r,"class","col-xs-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6"),v(t,"class","row")},m:function(a,e){m(a,t,e),p(t,r),p(r,n),p(n,s),p(s,c),c.innerHTML=P,p(s,y),p(s,D),p(D,E),p(D,I),p(n,x),p(n,V),p(V,b),b.innerHTML=S,p(t,j)},p:function(a,t){1&t&&R!==(R=a[4].ago+"")&&g(I,R),1&t&&S!==(S=a[4].html+"")&&(b.innerHTML=S)},d:function(a){a&&u(t)}}}function H(a){for(var t,r,n=a[0].research,s=[],c=0;c<n.length;c+=1)s[c]=w(k(a,n,c));return{c:function(){t=o(),r=e("div");for(var a=0;a<s.length;a+=1)s[a].c();this.h()},l:function(a){y('[data-svelte="svelte-1h0mj43"]',document.head).forEach(u),t=h(a),r=f(a,"DIV",{class:!0});for(var n=l(r),c=0;c<s.length;c+=1)s[c].l(n);n.forEach(u),this.h()},h:function(){document.title="𝗖𝗔𝗧𝗣𝗘𝗔: Quarantine and Poetry",v(r,"class","container")},m:function(a,n){m(a,t,n),m(a,r,n);for(var c=0;c<s.length;c+=1)s[c].m(r,null)},p:function(a,t){var c=D(t,1)[0];if(3&c){var e;for(n=a[0].research,e=0;e<n.length;e+=1){var o=k(a,n,e);s[e]?s[e].p(o,c):(s[e]=w(o),s[e].c(),s[e].m(r,null))}for(;e<s.length;e+=1)s[e].d(1);s.length=n.length}},i:E,o:E,d:function(a){a&&u(t),a&&u(r),I(s,a)}}}var L="squirrel";function M(a,t,r){var n=j(),s=P();function c(){r(0,s.research=s.research.map(function(a){return a.ago=R(a.date).from(R()),a}),s)}var e;return e=setInterval(c,6e4),c(),x(function(){clearInterval(e)}),[s,n]}export default(function(e){a(i,c);var o=S(i);function i(a){var c;return t(this,i),c=o.call(this),r(s(c),a,M,H,n,{}),c}return i}());