import{_ as t,a as n,i as a,s as r,b as e,S as o,g as c,E as f,h as s,j as i,k as u,F as l,f as h,l as v,m,d,n as g,G as p,H as $,I as y,J as E,a1 as I,p as q,X as D,B as R,a2 as b,K as x,u as P,v as V,ab as j,W as w,M as A}from"./client.3717dae8.js";function B(t){return function(){var n,a=P(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var r=P(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return V(this,n)}}function S(t,n,a){var r=t.slice();return r[3]=n[a],r[5]=a,r}function k(t){var n,a,r,e,o=new j({props:{title:t[3].name,icon:F,date:t[3].ago,html:t[3].html}});return{c:function(){n=c("div"),a=c("div"),f(o.$$.fragment),r=s(),this.h()},l:function(t){n=i(t,"DIV",{class:!0});var e=u(n);a=i(e,"DIV",{class:!0});var c=u(a);l(o.$$.fragment,c),c.forEach(h),r=v(e),e.forEach(h),this.h()},h:function(){m(a,"class","col-xs-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8"),m(n,"class","row mb-4")},m:function(t,c){d(t,n,c),g(n,a),p(o,a,null),g(n,r),e=!0},p:function(t,n){var a={};1&n&&(a.title=t[3].name),1&n&&(a.date=t[3].ago),1&n&&(a.html=t[3].html),o.$set(a)},i:function(t){e||($(o.$$.fragment,t),e=!0)},o:function(t){y(o.$$.fragment,t),e=!1},d:function(t){t&&h(n),E(o)}}}function C(t){for(var n,a,r,e=t[0].quarantine,o=[],f=0;f<e.length;f+=1)o[f]=k(S(t,e,f));var l=function(t){return y(o[t],1,1,function(){o[t]=null})};return{c:function(){n=s(),a=c("div");for(var t=0;t<o.length;t+=1)o[t].c();this.h()},l:function(t){I('[data-svelte="svelte-1f2mr3u"]',document.head).forEach(h),n=v(t),a=i(t,"DIV",{class:!0});for(var r=u(a),e=0;e<o.length;e+=1)o[e].l(r);r.forEach(h),this.h()},h:function(){document.title="CATPEA! Quarantine and Poetry",m(a,"class","container")},m:function(t,e){d(t,n,e),d(t,a,e);for(var c=0;c<o.length;c+=1)o[c].m(a,null);r=!0},p:function(t,n){var r=q(n,1)[0];if(1&r){var c;for(e=t[0].quarantine,c=0;c<e.length;c+=1){var f=S(t,e,c);o[c]?(o[c].p(f,r),$(o[c],1)):(o[c]=k(f),o[c].c(),$(o[c],1),o[c].m(a,null))}for(w(),c=e.length;c<o.length;c+=1)l(c);D()}},i:function(t){if(!r){for(var n=0;n<e.length;n+=1)$(o[n]);r=!0}},o:function(t){o=o.filter(Boolean);for(var n=0;n<o.length;n+=1)y(o[n]);r=!1},d:function(t){t&&h(n),t&&h(a),R(o,t)}}}var F="squirrel";function G(t,n,a){var r=b();function e(){a(0,r.quarantine=r.quarantine.map(function(t){return t.ago=A(t.date).from(A()),t}),r)}var o;return o=setInterval(e,6e4),e(),x(function(){clearInterval(o)}),[r]}export default(function(c){t(s,o);var f=B(s);function s(t){var o;return n(this,s),o=f.call(this),a(e(o),t,G,C,r,{}),o}return s}());
