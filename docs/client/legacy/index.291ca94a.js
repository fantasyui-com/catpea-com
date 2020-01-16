import{a as t,b as n,c as a,d as r,i as o,s,e as c,S as e,g as l,w as i,q as f,h as u,j as h,k as d,y as v,r as m,z as g,l as p,u as y,v as b,K as w,L as x,n as E,M as V,N as M,O as A}from"./index.a0beac56.js";import{_ as I}from"./slicedToArray.f13a096f.js";import{c as T,_ as D,a as P}from"./asyncToGenerator.a9aa147d.js";for(var j=T(function(t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var a=new Uint8Array(16);t.exports=function(){return n(a),a}}else{var r=new Array(16);t.exports=function(){for(var t,n=0;n<16;n++)0==(3&n)&&(t=4294967296*Math.random()),r[n]=t>>>((3&n)<<3)&255;return r}}}),k=[],C=0;C<256;++C)k[C]=(C+256).toString(16).substr(1);var S=function(t,n){var a=n||0,r=k;return[r[t[a++]],r[t[a++]],r[t[a++]],r[t[a++]],"-",r[t[a++]],r[t[a++]],"-",r[t[a++]],r[t[a++]],"-",r[t[a++]],r[t[a++]],"-",r[t[a++]],r[t[a++]],r[t[a++]],r[t[a++]],r[t[a++]],r[t[a++]]].join("")};var R=function(t,n,a){var r=n&&a||0;"string"==typeof t&&(n="binary"===t?new Array(16):null,t=null);var o=(t=t||{}).random||(t.rng||j)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,n)for(var s=0;s<16;++s)n[r+s]=o[s];return n||S(o)};function N(t,n,a){var r=t.slice();return r[14]=n[a],r}function O(t){var n,a,r,o,s,c,e,w,x,E,V,M,A=t[14].title+"";return{c:function(){n=l("div"),a=l("div"),r=l("a"),o=l("img"),w=i(),x=l("div"),E=l("h5"),V=f(A),M=i(),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var s=h(n);a=u(s,"DIV",{class:!0});var c=h(a);r=u(c,"A",{href:!0});var e=h(r);o=u(e,"IMG",{src:!0,class:!0,alt:!0}),e.forEach(d),w=v(c),x=u(c,"DIV",{class:!0});var l=h(x);E=u(l,"H5",{class:!0});var i=h(E);V=m(i,A),i.forEach(d),l.forEach(d),c.forEach(d),M=v(s),s.forEach(d),this.h()},h:function(){o.src!==(s=t[14].image)&&g(o,"src",s),g(o,"class","card-img-top"),g(o,"alt",c=t[14].title),g(r,"href",e=t[14].url),g(E,"class","card-text small"),g(x,"class","card-body p-3"),g(a,"class","card bg-secondary text-white shadow p-0 m-0"),g(n,"class","col mb-4")},m:function(t,s){p(t,n,s),y(n,a),y(a,r),y(r,o),y(a,w),y(a,x),y(x,E),y(E,V),y(n,M)},p:function(t,n){2&n&&o.src!==(s=t[14].image)&&g(o,"src",s),2&n&&c!==(c=t[14].title)&&g(o,"alt",c),2&n&&e!==(e=t[14].url)&&g(r,"href",e),2&n&&A!==(A=t[14].title+"")&&b(V,A)},d:function(t){t&&d(n)}}}function U(t){var n,a,r,o,s,c,e;return{c:function(){n=l("button"),a=f("Page "),r=f(t[3]),o=f("/"),s=f(t[4]),c=f(" »"),this.h()},l:function(e){n=u(e,"BUTTON",{class:!0});var l=h(n);a=m(l,"Page "),r=m(l,t[3]),o=m(l,"/"),s=m(l,t[4]),c=m(l," »"),l.forEach(d),this.h()},h:function(){g(n,"class","btn btn-secondary btn-lg btn-block shadow"),e=A(n,"click",t[5])},m:function(t,e){p(t,n,e),y(n,a),y(n,r),y(n,o),y(n,s),y(n,c)},p:function(t,n){8&n&&b(r,t[3]),16&n&&b(s,t[4])},d:function(t){t&&d(n),e()}}}function B(t){var n,a,r;return{c:function(){n=l("button"),a=f("Shuffle ∞"),this.h()},l:function(t){n=u(t,"BUTTON",{class:!0});var r=h(n);a=m(r,"Shuffle ∞"),r.forEach(d),this.h()},h:function(){g(n,"class","btn btn-secondary btn-lg btn-block shadow"),r=A(n,"click",t[5])},m:function(t,r){p(t,n,r),y(n,a)},p:E,d:function(t){t&&d(n),r()}}}function G(t){for(var n,a,r,o,s,c,e=t[1],f=[],m=0;m<e.length;m+=1)f[m]=O(N(t,e,m));function b(t,n){return t[2]?B:U}var M=b(t),A=M(t);return{c:function(){n=i(),a=l("div"),r=l("div");for(var t=0;t<f.length;t+=1)f[t].c();o=i(),s=l("div"),c=l("div"),A.c(),this.h()},l:function(t){n=v(t),a=u(t,"DIV",{class:!0,style:!0});var e=h(a);r=u(e,"DIV",{class:!0});for(var l=h(r),i=0;i<f.length;i+=1)f[i].l(l);l.forEach(d),o=v(e),s=u(e,"DIV",{class:!0});var m=h(s);c=u(m,"DIV",{class:!0});var g=h(c);A.l(g),g.forEach(d),m.forEach(d),e.forEach(d),this.h()},h:function(){document.title="Cat Pea",g(r,"class","row row-cols-1 row-cols-md-2 row-cols-xl-4"),g(c,"class","col mb-4"),g(s,"class","row"),g(a,"class","container-fluid"),w(a,"visibility","hidden"),x(a,"visible",t[0])},m:function(t,e){p(t,n,e),p(t,a,e),y(a,r);for(var l=0;l<f.length;l+=1)f[l].m(r,null);y(a,o),y(a,s),y(s,c),A.m(c,null)},p:function(t,n){var o=I(n,1)[0];if(2&o){var s;for(e=t[1],s=0;s<e.length;s+=1){var l=N(t,e,s);f[s]?f[s].p(l,o):(f[s]=O(l),f[s].c(),f[s].m(r,null))}for(;s<f.length;s+=1)f[s].d(1);f.length=e.length}M===(M=b(t))&&A?A.p(t,o):(A.d(1),(A=M(t))&&(A.c(),A.m(c,null))),1&o&&x(a,"visible",t[0])},i:E,o:E,d:function(t){t&&d(n),t&&d(a),V(f,t),A.d()}}}var _=8;function q(t){for(var n=t.length-1;n>0;n--){var a=Math.floor(Math.random()*(n+1)),r=[t[a],t[n]];t[n]=r[0],t[a]=r[1]}return t}function z(t,n,a){var r=!1,o=((new Date).getFullYear(),[["Catpea"],["Advanced"],["Technological"],["Product"],["Emergence"],["Architecture"]]),s="",c=function(){s="";var t,n,a=!0,r=!1,c=void 0;try{for(var e,l=o[Symbol.iterator]();!(a=(e=l.next()).done);a=!0){var i=e.value;console.log(o,i);var f=i[(t=0,n=i.length-1,t=Math.ceil(t),n=Math.floor(n),Math.floor(Math.random()*(n-t+1))+t)];s=s+" "+f}}catch(t){r=!0,c=t}finally{try{a||null==l.return||l.return()}finally{if(r)throw c}}};c(),setInterval(c,6e4);var e=0,l=[],i=[];R();M(D(P.mark(function t(){var n,o;return P.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("youtube.json");case 2:return n=t.sent,t.next=5,n.json();case 5:o=t.sent,q(l=o),d(),a(0,r=!0);case 10:case"end":return t.stop()}},t)})));var f=!1,u=0,h=0;function d(){e>l.length-1&&a(2,f=!0),console.log("exhausted",f),f?(q(l),a(1,i=l.slice(0,_))):(a(4,h=Math.floor((l.length-1)/_+1)),a(3,u=e/_+1),console.log("startAt=%d, showPerPage=%d, page=%d/%d",e,_,u,h),a(1,i=l.slice(e,e+_)),e+=_,console.log("startAt=%d, showPerPage=%d",e,_)),setTimeout(function(){window.scrollTo({top:0,left:0})},2)}return[r,i,f,u,h,d]}export default(function(l){function i(t){var e;return n(this,i),e=a(this,r(i).call(this)),o(c(e),t,z,G,s,{}),e}return t(i,e),i}());
