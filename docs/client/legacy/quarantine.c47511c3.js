import{d as t,e as n,f as a,s as r,g as e,S as o,m as c,G as s,n as f,o as i,p as u,H as l,l as h,q as m,r as v,j as g,u as d,I as p,J as $,K as y,L as q,a1 as I,x as j,X as D,E,M as R,z as b,A as x,W as P}from"./client.19a95b71.js";import{a as V,m as w}from"./moment.eea6bb85.js";import{P as S}from"./Post.17ccb4f0.js";function z(t){return function(){var n,a=b(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var r=b(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return x(this,n)}}function A(t,n,a){var r=t.slice();return r[3]=n[a],r[5]=a,r}function B(t){var n,a,r,e,o=new S({props:{title:t[3].name,icon:H,date:t[3].ago,html:t[3].html}});return{c:function(){n=c("div"),a=c("div"),s(o.$$.fragment),r=f(),this.h()},l:function(t){n=i(t,"DIV",{class:!0});var e=u(n);a=i(e,"DIV",{class:!0});var c=u(a);l(o.$$.fragment,c),c.forEach(h),r=m(e),e.forEach(h),this.h()},h:function(){v(a,"class","col-xs-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8"),v(n,"class","row")},m:function(t,c){g(t,n,c),d(n,a),p(o,a,null),d(n,r),e=!0},p:function(t,n){var a={};1&n&&(a.title=t[3].name),1&n&&(a.date=t[3].ago),1&n&&(a.html=t[3].html),o.$set(a)},i:function(t){e||($(o.$$.fragment,t),e=!0)},o:function(t){y(o.$$.fragment,t),e=!1},d:function(t){t&&h(n),q(o)}}}function G(t){for(var n,a,r,e=t[0].quarantine,o=[],s=0;s<e.length;s+=1)o[s]=B(A(t,e,s));var l=function(t){return y(o[t],1,1,function(){o[t]=null})};return{c:function(){n=f(),a=c("div");for(var t=0;t<o.length;t+=1)o[t].c();this.h()},l:function(t){I('[data-svelte="svelte-1h0mj43"]',document.head).forEach(h),n=m(t),a=i(t,"DIV",{class:!0});for(var r=u(a),e=0;e<o.length;e+=1)o[e].l(r);r.forEach(h),this.h()},h:function(){document.title="𝗖𝗔𝗧𝗣𝗘𝗔: Quarantine and Poetry",v(a,"class","container")},m:function(t,e){g(t,n,e),g(t,a,e);for(var c=0;c<o.length;c+=1)o[c].m(a,null);r=!0},p:function(t,n){var r=j(n,1)[0];if(1&r){var c;for(e=t[0].quarantine,c=0;c<e.length;c+=1){var s=A(t,e,c);o[c]?(o[c].p(s,r),$(o[c],1)):(o[c]=B(s),o[c].c(),$(o[c],1),o[c].m(a,null))}for(P(),c=e.length;c<o.length;c+=1)l(c);D()}},i:function(t){if(!r){for(var n=0;n<e.length;n+=1)$(o[n]);r=!0}},o:function(t){o=o.filter(Boolean);for(var n=0;n<o.length;n+=1)y(o[n]);r=!1},d:function(t){t&&h(n),t&&h(a),E(o,t)}}}var H="squirrel";function J(t,n,a){var r=V();function e(){a(0,r.quarantine=r.quarantine.map(function(t){return t.ago=w(t.date).from(w()),t}),r)}var o;return o=setInterval(e,6e4),e(),R(function(){clearInterval(o)}),[r]}export default(function(c){t(f,o);var s=z(f);function f(t){var o;return n(this,f),o=s.call(this),a(e(o),t,J,G,r,{}),o}return f}());
