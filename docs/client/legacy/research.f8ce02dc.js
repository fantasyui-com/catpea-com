import{d as t,e as n,f as r,s as a,g as e,S as o,m as c,G as s,n as f,o as i,p as u,H as l,l as h,q as m,r as v,j as d,u as g,I as p,J as $,K as y,L as I,a1 as R,x as D,X as E,E as P,M as j,z as x,A as b,W as V}from"./client.91d216a2.js";import{a as w,m as B}from"./moment.377c4759.js";import{P as J}from"./Post.6fcfec66.js";function S(t){return function(){var n,r=x(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var a=x(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return b(this,n)}}function q(t,n,r){var a=t.slice();return a[3]=n[r],a[5]=r,a}function z(t){var n,r,a,e,o=new J({props:{title:t[3].name,icon:G,date:t[3].ago,html:t[3].html}});return{c:function(){n=c("div"),r=c("div"),s(o.$$.fragment),a=f(),this.h()},l:function(t){n=i(t,"DIV",{class:!0});var e=u(n);r=i(e,"DIV",{class:!0});var c=u(r);l(o.$$.fragment,c),c.forEach(h),a=m(e),e.forEach(h),this.h()},h:function(){v(r,"class","col-xs-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8"),v(n,"class","row")},m:function(t,c){d(t,n,c),g(n,r),p(o,r,null),g(n,a),e=!0},p:function(t,n){var r={};1&n&&(r.title=t[3].name),1&n&&(r.date=t[3].ago),1&n&&(r.html=t[3].html),o.$set(r)},i:function(t){e||($(o.$$.fragment,t),e=!0)},o:function(t){y(o.$$.fragment,t),e=!1},d:function(t){t&&h(n),I(o)}}}function A(t){for(var n,r,a,e=t[0].research,o=[],s=0;s<e.length;s+=1)o[s]=z(q(t,e,s));var l=function(t){return y(o[t],1,1,function(){o[t]=null})};return{c:function(){n=f(),r=c("div");for(var t=0;t<o.length;t+=1)o[t].c();this.h()},l:function(t){R('[data-svelte="svelte-1b13bsd"]',document.head).forEach(h),n=m(t),r=i(t,"DIV",{class:!0});for(var a=u(r),e=0;e<o.length;e+=1)o[e].l(a);a.forEach(h),this.h()},h:function(){document.title="𝗖𝗔𝗧𝗣𝗘𝗔: Research, Progress, Peanut Butter, and Jelly",v(r,"class","container")},m:function(t,e){d(t,n,e),d(t,r,e);for(var c=0;c<o.length;c+=1)o[c].m(r,null);a=!0},p:function(t,n){var a=D(n,1)[0];if(1&a){var c;for(e=t[0].research,c=0;c<e.length;c+=1){var s=q(t,e,c);o[c]?(o[c].p(s,a),$(o[c],1)):(o[c]=z(s),o[c].c(),$(o[c],1),o[c].m(r,null))}for(V(),c=e.length;c<o.length;c+=1)l(c);E()}},i:function(t){if(!a){for(var n=0;n<e.length;n+=1)$(o[n]);a=!0}},o:function(t){o=o.filter(Boolean);for(var n=0;n<o.length;n+=1)y(o[n]);a=!1},d:function(t){t&&h(n),t&&h(r),P(o,t)}}}var G="mortar-board";function H(t,n,r){var a=w();function e(){r(0,a.research=a.research.map(function(t){return t.ago=B(t.date).from(B()),t}),a)}var o;return o=setInterval(e,6e4),e(),j(function(){clearInterval(o)}),[a]}export default(function(c){t(f,o);var s=S(f);function f(t){var o;return n(this,f),o=s.call(this),r(e(o),t,H,A,a,{}),o}return f}());
