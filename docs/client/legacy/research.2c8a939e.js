import{_ as t,a as n,i as a,s as r,b as e,S as o,g as c,E as s,h as f,j as i,k as u,F as l,f as h,l as v,m,d,n as g,G as p,H as $,I as y,J as E,a1 as I,p as R,X as D,B as b,a2 as x,K as P,V,u as B,v as j,ab as w,W as A,M as J}from"./client.d24453ec.js";function S(t){return function(){var n,a=B(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var r=B(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return j(this,n)}}function k(t,n,a){var r=t.slice();return r[3]=n[a],r[5]=a,r}function q(t){var n,a,r,e,o=new w({props:{icon:F,date:t[3].ago,html:t[3].html,decoration:"energon"}});return{c:function(){n=c("div"),a=c("div"),s(o.$$.fragment),r=f(),this.h()},l:function(t){n=i(t,"DIV",{class:!0});var e=u(n);a=i(e,"DIV",{class:!0});var c=u(a);l(o.$$.fragment,c),c.forEach(h),r=v(e),e.forEach(h),this.h()},h:function(){m(a,"class","col-xs-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8"),m(n,"class","row mb-4")},m:function(t,c){d(t,n,c),g(n,a),p(o,a,null),g(n,r),e=!0},p:function(t,n){var a={};1&n&&(a.date=t[3].ago),1&n&&(a.html=t[3].html),o.$set(a)},i:function(t){e||($(o.$$.fragment,t),e=!0)},o:function(t){y(o.$$.fragment,t),e=!1},d:function(t){t&&h(n),E(o)}}}function C(t){for(var n,a,r,e=t[0].research,o=[],s=0;s<e.length;s+=1)o[s]=q(k(t,e,s));var l=function(t){return y(o[t],1,1,function(){o[t]=null})};return{c:function(){n=f(),a=c("div");for(var t=0;t<o.length;t+=1)o[t].c();this.h()},l:function(t){I('[data-svelte="svelte-4x98q0"]',document.head).forEach(h),n=v(t),a=i(t,"DIV",{class:!0});for(var r=u(a),e=0;e<o.length;e+=1)o[e].l(r);r.forEach(h),this.h()},h:function(){document.title="CATPEA! Research, Progress, Peanut Butter, and Jelly",m(a,"class","container")},m:function(t,e){d(t,n,e),d(t,a,e);for(var c=0;c<o.length;c+=1)o[c].m(a,null);r=!0},p:function(t,n){var r=R(n,1)[0];if(1&r){var c;for(e=t[0].research,c=0;c<e.length;c+=1){var s=k(t,e,c);o[c]?(o[c].p(s,r),$(o[c],1)):(o[c]=q(s),o[c].c(),$(o[c],1),o[c].m(a,null))}for(A(),c=e.length;c<o.length;c+=1)l(c);D()}},i:function(t){if(!r){for(var n=0;n<e.length;n+=1)$(o[n]);r=!0}},o:function(t){o=o.filter(Boolean);for(var n=0;n<o.length;n+=1)y(o[n]);r=!1},d:function(t){t&&h(n),t&&h(a),b(o,t)}}}var F="mortar-board";function G(t,n,a){var r=x();function e(){a(0,r.research=r.research.map(function(t){return t.ago=J(t.date).from(J()),t}),r)}var o;return o=setInterval(e,6e4),e(),P(function(){clearInterval(o)}),V(function(){}),[r]}export default(function(c){t(f,o);var s=S(f);function f(t){var o;return n(this,f),o=s.call(this),a(e(o),t,G,C,r,{}),o}return f}());
