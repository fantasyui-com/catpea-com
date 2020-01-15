import{a as t,b as n,c as r,d as a,i as o,s as c,e,S as s,g as l,w as i,q as f,h as u,j as h,k as v,y as d,r as m,z as g,l as p,u as y,v as b,n as w,K as x,L as E,M}from"./index.e3b5345c.js";import{_ as V}from"./slicedToArray.f13a096f.js";import{c as A,_ as T,a as I}from"./asyncToGenerator.6fcce2e7.js";for(var j=A(function(t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);t.exports=function(){return n(r),r}}else{var a=new Array(16);t.exports=function(){for(var t,n=0;n<16;n++)0==(3&n)&&(t=4294967296*Math.random()),a[n]=t>>>((3&n)<<3)&255;return a}}}),D=[],k=0;k<256;++k)D[k]=(k+256).toString(16).substr(1);var C=function(t,n){var r=n||0,a=D;return[a[t[r++]],a[t[r++]],a[t[r++]],a[t[r++]],"-",a[t[r++]],a[t[r++]],"-",a[t[r++]],a[t[r++]],"-",a[t[r++]],a[t[r++]],"-",a[t[r++]],a[t[r++]],a[t[r++]],a[t[r++]],a[t[r++]],a[t[r++]]].join("")};var P=function(t,n,r){var a=n&&r||0;"string"==typeof t&&(n="binary"===t?new Array(16):null,t=null);var o=(t=t||{}).random||(t.rng||j)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,n)for(var c=0;c<16;++c)n[a+c]=o[c];return n||C(o)};function N(t,n,r){var a=t.slice();return a[11]=n[r],a}function R(t){var n,r,a,o,c,e,s,w,x,E,M,V,A=t[11].title+"";return{c:function(){n=l("div"),r=l("div"),a=l("a"),o=l("img"),w=i(),x=l("div"),E=l("h5"),M=f(A),V=i(),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var c=h(n);r=u(c,"DIV",{class:!0});var e=h(r);a=u(e,"A",{href:!0});var s=h(a);o=u(s,"IMG",{src:!0,class:!0,alt:!0}),s.forEach(v),w=d(e),x=u(e,"DIV",{class:!0});var l=h(x);E=u(l,"H5",{class:!0});var i=h(E);M=m(i,A),i.forEach(v),l.forEach(v),e.forEach(v),V=d(c),c.forEach(v),this.h()},h:function(){o.src!==(c=t[11].image)&&g(o,"src",c),g(o,"class","card-img-top"),g(o,"alt",e=t[11].title),g(a,"href",s=t[11].url),g(E,"class","card-title small"),g(x,"class","card-body"),g(r,"class","card bg-secondary text-white fade-in"),g(n,"class","col mb-4")},m:function(t,c){p(t,n,c),y(n,r),y(r,a),y(a,o),y(r,w),y(r,x),y(x,E),y(E,M),y(n,V)},p:function(t,n){1&n&&o.src!==(c=t[11].image)&&g(o,"src",c),1&n&&e!==(e=t[11].title)&&g(o,"alt",e),1&n&&s!==(s=t[11].url)&&g(a,"href",s),1&n&&A!==(A=t[11].title+"")&&b(M,A)},d:function(t){t&&v(n)}}}function S(t){var n,r,a;return{c:function(){n=l("button"),r=f("Next »"),this.h()},l:function(t){n=u(t,"BUTTON",{class:!0});var a=h(n);r=m(a,"Next »"),a.forEach(v),this.h()},h:function(){g(n,"class","btn btn-primary btn-lg btn-block"),a=M(n,"click",t[2])},m:function(t,a){p(t,n,a),y(n,r)},p:w,d:function(t){t&&v(n),a()}}}function U(t){var n,r,a;return{c:function(){n=l("button"),r=f("More »"),this.h()},l:function(t){n=u(t,"BUTTON",{class:!0});var a=h(n);r=m(a,"More »"),a.forEach(v),this.h()},h:function(){g(n,"class","btn btn-info btn-lg btn-block"),a=M(n,"click",t[2])},m:function(t,a){p(t,n,a),y(n,r)},p:w,d:function(t){t&&v(n),a()}}}function B(t){for(var n,r,a,o,c,e=t[0],s=[],f=0;f<e.length;f+=1)s[f]=R(N(t,e,f));function m(t,n){return t[1]?U:S}var b=m(t),E=b(t);return{c:function(){n=i(),r=l("div"),a=l("div");for(var t=0;t<s.length;t+=1)s[t].c();o=i(),c=l("div"),E.c(),this.h()},l:function(t){n=d(t),r=u(t,"DIV",{class:!0});var e=h(r);a=u(e,"DIV",{class:!0});for(var l=h(a),i=0;i<s.length;i+=1)s[i].l(l);l.forEach(v),o=d(e),c=u(e,"DIV",{class:!0});var f=h(c);E.l(f),f.forEach(v),e.forEach(v),this.h()},h:function(){document.title="Cat Pea",g(a,"class","row row-cols-1 row-cols-md-2 row-cols-xl-4"),g(c,"class","row p-5"),g(r,"class","container-fluid")},m:function(t,e){p(t,n,e),p(t,r,e),y(r,a);for(var l=0;l<s.length;l+=1)s[l].m(a,null);y(r,o),y(r,c),E.m(c,null)},p:function(t,n){var r=V(n,1)[0];if(1&r){var o;for(e=t[0],o=0;o<e.length;o+=1){var l=N(t,e,o);s[o]?s[o].p(l,r):(s[o]=R(l),s[o].c(),s[o].m(a,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=e.length}b===(b=m(t))&&E?E.p(t,r):(E.d(1),(E=b(t))&&(E.c(),E.m(c,null)))},i:w,o:w,d:function(t){t&&v(n),t&&v(r),x(s,t),E.d()}}}var G=8;function O(t){for(var n=t.length-1;n>0;n--){var r=Math.floor(Math.random()*(n+1)),a=[t[r],t[n]];t[n]=a[0],t[r]=a[1]}return t}function _(t,n,r){(new Date).getFullYear();var a=[["Catpea"],["Advanced"],["Technological"],["Product"],["Emergence"],["Architecture"]],o="",c=function(){o="";var t,n,r=!0,c=!1,e=void 0;try{for(var s,l=a[Symbol.iterator]();!(r=(s=l.next()).done);r=!0){var i=s.value;console.log(a,i);var f=i[(t=0,n=i.length-1,t=Math.ceil(t),n=Math.floor(n),Math.floor(Math.random()*(n-t+1))+t)];o=o+" "+f}}catch(t){c=!0,e=t}finally{try{r||null==l.return||l.return()}finally{if(c)throw e}}};c(),setInterval(c,6e4);var e=0,s=[],l=[];P();E(T(I.mark(function t(){var n,r;return I.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("youtube.json");case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,O(s=r),f();case 9:case"end":return t.stop()}},t)})));var i=!1;function f(){if(e>s.length-1&&r(1,i=!0),console.log("exhausted",i),i)O(s),r(0,l=s.slice(0,G));else{var t=(s.length-1)/G+1,n=e/G+1;console.log("startAt=%d, showPerPage=%d, page=%d/%d",e,G,n,t),r(0,l=s.slice(e,e+G)),e+=G,console.log("startAt=%d, showPerPage=%d",e,G)}setTimeout(function(){window.scrollTo({top:0,left:0})},2)}return[l,i,f]}export default(function(l){function i(t){var s;return n(this,i),s=r(this,a(i).call(this)),o(e(s),t,_,B,c,{}),s}return t(i,s),i}());
