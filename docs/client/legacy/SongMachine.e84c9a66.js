import{_ as n,a as t,i as r,s as a,b as e,S as o,e as s,y as c,c as l,d as i,B as f,f as u,g as h,h as m,E as g,G as p,H as d,j as v,n as b,O as y,k as E,l as A,z as $,A as O,C as j,D,F as w,r as k,w as I,u as R,K as T,L as B,t as V,v as x,Y as H,a4 as C,a5 as P,a6 as z,Q as S,a0 as L}from"./client.22dc3c99.js";import{I as M}from"./Icon.45d79ef8.js";function Q(n){return function(){var t,r=E(n);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}()){var a=E(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return A(this,t)}}function Y(n,t,r){var a=n.slice();return a[3]=t[r],a[5]=r,a}function F(n){var t,r,a,e=n[3].name+"";function o(){for(var t,r=arguments.length,a=new Array(r),e=0;e<r;e++)a[e]=arguments[e];return(t=n)[2].apply(t,[n[5]].concat(a))}return{c:function(){t=s("li"),r=c(e),this.h()},l:function(n){t=l(n,"LI",{class:!0});var a=i(t);r=f(a,e),a.forEach(u),this.h()},h:function(){h(t,"class","list-group-item bg-dark text-primary cursor-pointer")},m:function(n,e,s){m(n,t,e),g(t,r),s&&a(),a=p(t,"click",o)},p:function(t,a){n=t,2&a&&e!==(e=n[3].name+"")&&d(r,e)},d:function(n){n&&u(t),a()}}}function G(n){for(var t,r=n[1].parts,a=[],e=0;e<r.length;e+=1)a[e]=F(Y(n,r,e));return{c:function(){t=s("ul");for(var n=0;n<a.length;n+=1)a[n].c();this.h()},l:function(n){t=l(n,"UL",{class:!0});for(var r=i(t),e=0;e<a.length;e+=1)a[e].l(r);r.forEach(u),this.h()},h:function(){h(t,"class","list-group list-group-horizontal")},m:function(n,r){m(n,t,r);for(var e=0;e<a.length;e+=1)a[e].m(t,null)},p:function(n,e){var o=v(e,1)[0];if(3&o){var s;for(r=n[1].parts,s=0;s<r.length;s+=1){var c=Y(n,r,s);a[s]?a[s].p(c,o):(a[s]=F(c),a[s].c(),a[s].m(t,null))}for(;s<a.length;s+=1)a[s].d(1);a.length=r.length}},i:b,o:b,d:function(n){n&&u(t),y(a,n)}}}function K(n,t,r){var a=t.program,e=t.song;return n.$set=function(n){"program"in n&&r(0,a=n.program),"song"in n&&r(1,e=n.song)},[a,e,function(n){r(0,a.selections.part=n,a)}]}var U=function(s){n(l,o);var c=Q(l);function l(n){var o;return t(this,l),o=c.call(this),r(e(o),n,K,G,a,{program:0,song:1}),o}return l}();function _(n){return function(){var t,r=E(n);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}()){var a=E(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return A(this,t)}}function q(n,t,r){var a=n.slice();return a[7]=t[r],a[6]=r,a}function J(n,t,r){var a=n.slice();return a[4]=t[r],a[6]=r,a}function N(n,t,r){var a=n.slice();return a[7]=t[r],a[6]=r,a}function W(n){var t,r,a=n[6]+1+"";return{c:function(){t=s("th"),r=c(a),this.h()},l:function(n){t=l(n,"TH",{scope:!0,class:!0});var e=i(t);r=f(e,a),e.forEach(u),this.h()},h:function(){h(t,"scope","col"),h(t,"class","small text-muted text-center")},m:function(n,a){m(n,t,a),g(t,r)},p:b,d:function(n){n&&u(t)}}}function X(n){var t,r,a,e;function o(){for(var t,r=arguments.length,a=new Array(r),e=0;e<r;e++)a[e]=arguments[e];return(t=n)[3].apply(t,[n[7]].concat(a))}return{c:function(){t=s("td"),r=s("div"),a=c(" "),this.h()},l:function(n){t=l(n,"TD",{});var e=i(t);r=l(e,"DIV",{class:!0,style:!0});var o=i(r);a=f(o," "),o.forEach(u),e.forEach(u),this.h()},h:function(){h(r,"class","rounded"),B(r,"min-width","2rem"),B(r,"user-select","none"),H(r,"bg-primary",n[7].enabled),H(r,"bg-secondary",!n[7].enabled),H(r,"shadow",!n[7].enabled)},m:function(n,s,c){m(n,t,s),g(t,r),g(r,a),c&&e(),e=p(r,"click",o)},p:function(t,a){n=t,3&a&&H(r,"bg-primary",n[7].enabled),3&a&&H(r,"bg-secondary",!n[7].enabled),3&a&&H(r,"shadow",!n[7].enabled)},d:function(n){n&&u(t),e()}}}function Z(n){var t,r,a,e;function o(){for(var t,r=arguments.length,a=new Array(r),e=0;e<r;e++)a[e]=arguments[e];return(t=n)[2].apply(t,[n[7]].concat(a))}return{c:function(){t=s("td"),r=s("div"),a=c(" "),this.h()},l:function(n){t=l(n,"TD",{colspan:!0});var e=i(t);r=l(e,"DIV",{class:!0,style:!0});var o=i(r);a=f(o," "),o.forEach(u),e.forEach(u),this.h()},h:function(){var a,e;h(r,"class","rounded"),B(r,"min-width","2rem"),B(r,"user-select","none"),H(r,"bg-primary",n[7].enabled),H(r,"bg-secondary",!n[7].enabled),H(r,"shadow",!n[7].enabled),h(t,"colspan",(a=1,e=6,a=Math.ceil(a),e=Math.floor(e),Math.floor(Math.random()*(e-a+1))+a))},m:function(n,s,c){m(n,t,s),g(t,r),g(r,a),c&&e(),e=p(r,"click",o)},p:function(t,a){n=t,3&a&&H(r,"bg-primary",n[7].enabled),3&a&&H(r,"bg-secondary",!n[7].enabled),3&a&&H(r,"shadow",!n[7].enabled)},d:function(n){n&&u(t),e()}}}function nn(n){var t;var r=(Math.random()<.2?Z:X)(n);return{c:function(){r.c(),t=k()},l:function(n){r.l(n),t=k()},m:function(n,a){r.m(n,a),m(n,t,a)},p:function(n,t){r.p(n,t)},d:function(n){r.d(n),n&&u(t)}}}function tn(n){for(var t,r,a,e,o,p,v,b,E,A,k=n[6]+1+"",B=n[4].name+"",V=new M({props:{name:"gear",color:"warning"}}),x=n[4].slots,H=[],C=0;C<x.length;C+=1)H[C]=nn(q(n,x,C));return{c:function(){t=s("tr"),r=s("th"),a=c(k),e=$(),o=s("th"),O(V.$$.fragment),p=$(),v=c(B),b=$();for(var n=0;n<H.length;n+=1)H[n].c();E=$(),this.h()},l:function(n){t=l(n,"TR",{});var s=i(t);r=l(s,"TH",{scope:!0,class:!0});var c=i(r);a=f(c,k),c.forEach(u),e=j(s),o=l(s,"TH",{scope:!0,class:!0});var h=i(o);D(V.$$.fragment,h),p=j(h),v=f(h,B),h.forEach(u),b=j(s);for(var m=0;m<H.length;m+=1)H[m].l(s);E=j(s),s.forEach(u),this.h()},h:function(){h(r,"scope","row"),h(r,"class","small text-muted"),h(o,"scope","row"),h(o,"class","small text-muted")},m:function(n,s){m(n,t,s),g(t,r),g(r,a),g(t,e),g(t,o),w(V,o,null),g(o,p),g(o,v),g(t,b);for(var c=0;c<H.length;c+=1)H[c].m(t,null);g(t,E),A=!0},p:function(n,r){if((!A||3&r)&&B!==(B=n[4].name+"")&&d(v,B),3&r){var a;for(x=n[4].slots,a=0;a<x.length;a+=1){var e=q(n,x,a);H[a]?H[a].p(e,r):(H[a]=nn(e),H[a].c(),H[a].m(t,E))}for(;a<H.length;a+=1)H[a].d(1);H.length=x.length}},i:function(n){A||(I(V.$$.fragment,n),A=!0)},o:function(n){R(V.$$.fragment,n),A=!1},d:function(n){n&&u(t),T(V),y(H,n)}}}function rn(n){for(var t,r,a,e,o,p,d,b,E,A,O,D,w,k,T=n[1].parts[n[0].selections.part].tracks[n[0].selections.track].slots,H=[],C=0;C<T.length;C+=1)H[C]=W(N(n,T,C));for(var P=n[1].parts[n[0].selections.part].tracks,z=[],S=0;S<P.length;S+=1)z[S]=tn(J(n,P,S));var L=function(n){return R(z[n],1,1,function(){z[n]=null})};return{c:function(){t=s("div"),r=s("div"),a=s("table"),e=s("thead"),o=s("tr"),p=s("th"),d=c("#"),b=$(),E=s("th"),A=c("Instrument Configuration"),O=$();for(var n=0;n<H.length;n+=1)H[n].c();D=$(),w=s("tbody");for(var l=0;l<z.length;l+=1)z[l].c();this.h()},l:function(n){t=l(n,"DIV",{class:!0});var s=i(t);r=l(s,"DIV",{class:!0});var c=i(r);a=l(c,"TABLE",{class:!0});var h=i(a);e=l(h,"THEAD",{});var m=i(e);o=l(m,"TR",{});var g=i(o);p=l(g,"TH",{scope:!0,class:!0});var v=i(p);d=f(v,"#"),v.forEach(u),b=j(g),E=l(g,"TH",{scope:!0,class:!0,style:!0});var y=i(E);A=f(y,"Instrument Configuration"),y.forEach(u),O=j(g);for(var $=0;$<H.length;$+=1)H[$].l(g);g.forEach(u),m.forEach(u),D=j(h),w=l(h,"TBODY",{});for(var k=i(w),I=0;I<z.length;I+=1)z[I].l(k);k.forEach(u),h.forEach(u),c.forEach(u),s.forEach(u),this.h()},h:function(){h(p,"scope","col"),h(p,"class","small text-muted"),h(E,"scope","col"),h(E,"class","small text-muted"),B(E,"min-width","16rem"),h(a,"class","table table-sm table-dark rounded"),h(r,"class","table-responsive rounded"),h(t,"class","bg-dark rounded")},m:function(n,s){m(n,t,s),g(t,r),g(r,a),g(a,e),g(e,o),g(o,p),g(p,d),g(o,b),g(o,E),g(E,A),g(o,O);for(var c=0;c<H.length;c+=1)H[c].m(o,null);g(a,D),g(a,w);for(var l=0;l<z.length;l+=1)z[l].m(w,null);k=!0},p:function(n,t){var r=v(t,1)[0];if(3&r){var a;for(T=n[1].parts[n[0].selections.part].tracks[n[0].selections.track].slots,a=0;a<T.length;a+=1){var e=N(n,T,a);H[a]?H[a].p(e,r):(H[a]=W(e),H[a].c(),H[a].m(o,null))}for(;a<H.length;a+=1)H[a].d(1);H.length=T.length}if(3&r){var s;for(P=n[1].parts[n[0].selections.part].tracks,s=0;s<P.length;s+=1){var c=J(n,P,s);z[s]?(z[s].p(c,r),I(z[s],1)):(z[s]=tn(c),z[s].c(),I(z[s],1),z[s].m(w,null))}for(V(),s=P.length;s<z.length;s+=1)L(s);x()}},i:function(n){if(!k){for(var t=0;t<P.length;t+=1)I(z[t]);k=!0}},o:function(n){z=z.filter(Boolean);for(var t=0;t<z.length;t+=1)R(z[t]);k=!1},d:function(n){n&&u(t),y(H,n),y(z,n)}}}function an(n,t,r){var a=t.program,e=void 0===a?{}:a,o=t.song,s=void 0===o?{}:o;return n.$set=function(n){"program"in n&&r(0,e=n.program),"song"in n&&r(1,s=n.song)},[e,s,function(n){r(1,n.enabled=!n.enabled,s,r(0,e))},function(n){r(1,n.enabled=!n.enabled,s,r(0,e))}]}var en=function(s){n(l,o);var c=_(l);function l(n){var o;return t(this,l),o=c.call(this),r(e(o),n,an,rn,a,{program:0,song:1}),o}return l}();function on(n){return function(){var t,r=E(n);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}()){var a=E(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return A(this,t)}}function sn(n,t,r){var a=n.slice();return a[6]=t[r],a[5]=r,a}function cn(n,t,r){var a=n.slice();return a[3]=t[r],a[5]=r,a}function ln(n,t,r){var a=n.slice();return a[6]=t[r],a[5]=r,a}function fn(n){var t,r,a=n[5]+1+"";return{c:function(){t=s("th"),r=c(a),this.h()},l:function(n){t=l(n,"TH",{scope:!0,class:!0});var e=i(t);r=f(e,a),e.forEach(u),this.h()},h:function(){h(t,"scope","col"),h(t,"class","small text-muted text-center")},m:function(n,a){m(n,t,a),g(t,r)},p:b,d:function(n){n&&u(t)}}}function un(n){var t,r,a,e;function o(){for(var t,r=arguments.length,a=new Array(r),e=0;e<r;e++)a[e]=arguments[e];return(t=n)[2].apply(t,[n[6]].concat(a))}return{c:function(){t=s("td"),r=s("div"),a=c(" "),this.h()},l:function(n){t=l(n,"TD",{});var e=i(t);r=l(e,"DIV",{class:!0,style:!0});var o=i(r);a=f(o," "),o.forEach(u),e.forEach(u),this.h()},h:function(){h(r,"class","rounded"),B(r,"min-width","2rem"),B(r,"user-select","none"),H(r,"bg-primary",n[6].enabled),H(r,"bg-secondary",!n[6].enabled),H(r,"shadow",!n[6].enabled)},m:function(n,s,c){m(n,t,s),g(t,r),g(r,a),c&&e(),e=p(r,"click",o)},p:function(t,a){n=t,3&a&&H(r,"bg-primary",n[6].enabled),3&a&&H(r,"bg-secondary",!n[6].enabled),3&a&&H(r,"shadow",!n[6].enabled)},d:function(n){n&&u(t),e()}}}function hn(n){for(var t,r,a,e,o,p,v,b,E,A,k=n[5]+1+"",B=n[3].name+"",V=new M({props:{name:"gear",color:"warning"}}),x=n[3].notes,H=[],C=0;C<x.length;C+=1)H[C]=un(sn(n,x,C));return{c:function(){t=s("tr"),r=s("th"),a=c(k),e=$(),o=s("th"),O(V.$$.fragment),p=$(),v=c(B),b=$();for(var n=0;n<H.length;n+=1)H[n].c();E=$(),this.h()},l:function(n){t=l(n,"TR",{});var s=i(t);r=l(s,"TH",{scope:!0,class:!0});var c=i(r);a=f(c,k),c.forEach(u),e=j(s),o=l(s,"TH",{scope:!0,class:!0});var h=i(o);D(V.$$.fragment,h),p=j(h),v=f(h,B),h.forEach(u),b=j(s);for(var m=0;m<H.length;m+=1)H[m].l(s);E=j(s),s.forEach(u),this.h()},h:function(){h(r,"scope","row"),h(r,"class","small text-muted"),h(o,"scope","row"),h(o,"class","small text-muted")},m:function(n,s){m(n,t,s),g(t,r),g(r,a),g(t,e),g(t,o),w(V,o,null),g(o,p),g(o,v),g(t,b);for(var c=0;c<H.length;c+=1)H[c].m(t,null);g(t,E),A=!0},p:function(n,r){if((!A||3&r)&&B!==(B=n[3].name+"")&&d(v,B),3&r){var a;for(x=n[3].notes,a=0;a<x.length;a+=1){var e=sn(n,x,a);H[a]?H[a].p(e,r):(H[a]=un(e),H[a].c(),H[a].m(t,E))}for(;a<H.length;a+=1)H[a].d(1);H.length=x.length}},i:function(n){A||(I(V.$$.fragment,n),A=!0)},o:function(n){R(V.$$.fragment,n),A=!1},d:function(n){n&&u(t),T(V),y(H,n)}}}function mn(n){for(var t,r,a,e,o,p,d,b,E,A,O,D,w,k,T=n[1].parts[n[0].selections.part].tracks[n[0].selections.track].slots,H=[],C=0;C<T.length;C+=1)H[C]=fn(ln(n,T,C));for(var P=n[1].parts[n[0].selections.part].tracks,z=[],S=0;S<P.length;S+=1)z[S]=hn(cn(n,P,S));var L=function(n){return R(z[n],1,1,function(){z[n]=null})};return{c:function(){t=s("div"),r=s("div"),a=s("table"),e=s("thead"),o=s("tr"),p=s("th"),d=c("#"),b=$(),E=s("th"),A=c("Instrument Configuration"),O=$();for(var n=0;n<H.length;n+=1)H[n].c();D=$(),w=s("tbody");for(var l=0;l<z.length;l+=1)z[l].c();this.h()},l:function(n){t=l(n,"DIV",{class:!0});var s=i(t);r=l(s,"DIV",{class:!0});var c=i(r);a=l(c,"TABLE",{class:!0});var h=i(a);e=l(h,"THEAD",{});var m=i(e);o=l(m,"TR",{});var g=i(o);p=l(g,"TH",{scope:!0,class:!0});var v=i(p);d=f(v,"#"),v.forEach(u),b=j(g),E=l(g,"TH",{scope:!0,class:!0,style:!0});var y=i(E);A=f(y,"Instrument Configuration"),y.forEach(u),O=j(g);for(var $=0;$<H.length;$+=1)H[$].l(g);g.forEach(u),m.forEach(u),D=j(h),w=l(h,"TBODY",{});for(var k=i(w),I=0;I<z.length;I+=1)z[I].l(k);k.forEach(u),h.forEach(u),c.forEach(u),s.forEach(u),this.h()},h:function(){h(p,"scope","col"),h(p,"class","small text-muted"),h(E,"scope","col"),h(E,"class","small text-muted"),B(E,"min-width","16rem"),h(a,"class","table table-sm table-dark rounded"),h(r,"class","table-responsive rounded"),h(t,"class","bg-dark rounded")},m:function(n,s){m(n,t,s),g(t,r),g(r,a),g(a,e),g(e,o),g(o,p),g(p,d),g(o,b),g(o,E),g(E,A),g(o,O);for(var c=0;c<H.length;c+=1)H[c].m(o,null);g(a,D),g(a,w);for(var l=0;l<z.length;l+=1)z[l].m(w,null);k=!0},p:function(n,t){var r=v(t,1)[0];if(3&r){var a;for(T=n[1].parts[n[0].selections.part].tracks[n[0].selections.track].slots,a=0;a<T.length;a+=1){var e=ln(n,T,a);H[a]?H[a].p(e,r):(H[a]=fn(e),H[a].c(),H[a].m(o,null))}for(;a<H.length;a+=1)H[a].d(1);H.length=T.length}if(3&r){var s;for(P=n[1].parts[n[0].selections.part].tracks,s=0;s<P.length;s+=1){var c=cn(n,P,s);z[s]?(z[s].p(c,r),I(z[s],1)):(z[s]=hn(c),z[s].c(),I(z[s],1),z[s].m(w,null))}for(V(),s=P.length;s<z.length;s+=1)L(s);x()}},i:function(n){if(!k){for(var t=0;t<P.length;t+=1)I(z[t]);k=!0}},o:function(n){z=z.filter(Boolean);for(var t=0;t<z.length;t+=1)R(z[t]);k=!1},d:function(n){n&&u(t),y(H,n),y(z,n)}}}function gn(n,t,r){var a=t.program,e=void 0===a?{}:a,o=t.song,s=void 0===o?{}:o;return n.$set=function(n){"program"in n&&r(0,e=n.program),"song"in n&&r(1,s=n.song)},[e,s,function(n){r(1,n.enabled=!n.enabled,s,r(0,e))}]}var pn=function(s){n(l,o);var c=on(l);function l(n){var o;return t(this,l),o=c.call(this),r(e(o),n,gn,mn,a,{program:0,song:1}),o}return l}();function dn(n){return function(){var t,r=E(n);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}()){var a=E(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return A(this,t)}}function vn(n){var t,r,a,e,o,p,d,b,y,E,A,k,B,V,x,H,S,L,M,Q,Y,F,G,K,_,q;function J(t){n[3].call(null,t)}function N(t){n[4].call(null,t)}var W={};void 0!==n[0]&&(W.program=n[0]),void 0!==n[1]&&(W.song=n[1]);var X=new U({props:W});function Z(t){n[5].call(null,t)}function nn(t){n[6].call(null,t)}C.push(function(){return P(X,"program",J)}),C.push(function(){return P(X,"song",N)});var tn={};void 0!==n[0]&&(tn.program=n[0]),void 0!==n[1]&&(tn.song=n[1]);var rn=new en({props:tn});function an(t){n[7].call(null,t)}function on(t){n[8].call(null,t)}C.push(function(){return P(rn,"program",Z)}),C.push(function(){return P(rn,"song",nn)});var sn={};void 0!==n[0]&&(sn.program=n[0]),void 0!==n[1]&&(sn.song=n[1]);var cn=new pn({props:sn});return C.push(function(){return P(cn,"program",an)}),C.push(function(){return P(cn,"song",on)}),{c:function(){t=s("div"),r=s("div"),a=s("div"),O(X.$$.fragment),p=$(),d=s("div"),b=s("div"),O(rn.$$.fragment),A=$(),k=s("div"),B=s("div"),O(cn.$$.fragment),H=$(),S=s("div"),L=s("div"),M=c("..."),Q=$(),Y=s("div"),F=c("..."),G=$(),K=s("div"),_=c("..."),this.h()},l:function(n){t=l(n,"DIV",{class:!0});var e=i(t);r=l(e,"DIV",{class:!0});var o=i(r);a=l(o,"DIV",{class:!0});var s=i(a);D(X.$$.fragment,s),s.forEach(u),o.forEach(u),p=j(e),d=l(e,"DIV",{class:!0});var c=i(d);b=l(c,"DIV",{class:!0});var h=i(b);D(rn.$$.fragment,h),h.forEach(u),c.forEach(u),A=j(e),k=l(e,"DIV",{class:!0});var m=i(k);B=l(m,"DIV",{class:!0});var g=i(B);D(cn.$$.fragment,g),g.forEach(u),m.forEach(u),H=j(e),S=l(e,"DIV",{class:!0});var v=i(S);L=l(v,"DIV",{class:!0});var y=i(L);M=f(y,"..."),y.forEach(u),Q=j(v),Y=l(v,"DIV",{class:!0});var E=i(Y);F=f(E,"..."),E.forEach(u),G=j(v),K=l(v,"DIV",{class:!0});var $=i(K);_=f($,"..."),$.forEach(u),v.forEach(u),e.forEach(u),this.h()},h:function(){h(a,"class","col-12 pb-2"),h(r,"class","row"),h(b,"class","col-12 pb-2"),h(d,"class","row"),h(B,"class","col-12 pb-2"),h(k,"class","row"),h(L,"class","col pb-3"),h(Y,"class","col pb-3"),h(K,"class","col pb-3"),h(S,"class","row"),h(t,"class","container-fluid")},m:function(n,e){m(n,t,e),g(t,r),g(r,a),w(X,a,null),g(t,p),g(t,d),g(d,b),w(rn,b,null),g(t,A),g(t,k),g(k,B),w(cn,B,null),g(t,H),g(t,S),g(S,L),g(L,M),g(S,Q),g(S,Y),g(Y,F),g(S,G),g(S,K),g(K,_),q=!0},p:function(n,t){var r=v(t,1)[0],a={};!e&&1&r&&(e=!0,a.program=n[0],z(function(){return e=!1})),!o&&2&r&&(o=!0,a.song=n[1],z(function(){return o=!1})),X.$set(a);var s={};!y&&1&r&&(y=!0,s.program=n[0],z(function(){return y=!1})),!E&&2&r&&(E=!0,s.song=n[1],z(function(){return E=!1})),rn.$set(s);var c={};!V&&1&r&&(V=!0,c.program=n[0],z(function(){return V=!1})),!x&&2&r&&(x=!0,c.song=n[1],z(function(){return x=!1})),cn.$set(c)},i:function(n){q||(I(X.$$.fragment,n),I(rn.$$.fragment,n),I(cn.$$.fragment,n),q=!0)},o:function(n){R(X.$$.fragment,n),R(rn.$$.fragment,n),R(cn.$$.fragment,n),q=!1},d:function(n){n&&u(t),T(X),T(rn),T(cn)}}}function bn(n,t,r){var a=!1,e={defaults:{slot:{enabled:!1},note:{instrument:"piano",note:"C4",duration:"16n"}},selections:{part:3,track:0,note:0}},o={configuration:{name:"",author:"",bpm:160,parts:4,beats:4},parts:[{name:"Intro",size:64,tracks:[{name:"Initial",slots:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.slot)}),notes:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.note)})},{name:"Big Bassline",slots:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.slot)}),notes:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.note)})}]},{name:"Verse",size:64,tracks:[{name:"Beat",slots:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.slot)}),notes:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.note)})},{name:"Quiet Bassline",slots:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.slot)}),notes:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.note)})},{name:"Quick Piano",slots:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.slot)}),notes:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.note)})}]},{name:"Choir",size:64,tracks:[{name:"Beat",slots:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.slot)}),notes:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.note)})},{name:"Bassline",slots:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.slot)}),notes:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.note)})},{name:"Piano",slots:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.slot)}),notes:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.note)})},{name:"Cello",slots:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.slot)}),notes:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.note)})}]},{name:"Bridge",size:64,tracks:[{name:"Beat",slots:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.slot)}),notes:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.note)})},{name:"Bassline",slots:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.slot)}),notes:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.note)})},{name:"Quiet Piano",slots:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.slot)}),notes:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.note)})},{name:"Fast Piano",slots:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.slot)}),notes:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.note)})},{name:"Cello",slots:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.slot)}),notes:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.note)})}]},{name:"Choir",size:64,tracks:[{name:"Beat",slots:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.slot)}),notes:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.note)})},{name:"Bassline",slots:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.slot)}),notes:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.note)})},{name:"Piano",slots:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.slot)}),notes:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.note)})}]},{name:"Outro",size:64,tracks:[{name:"Beat",slots:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.note)}),notes:Array(64).fill(e.defaults.note)},{name:"Piano",slots:Array(64).fill(1).map(function(n){return Object.assign({},e.defaults.note)}),notes:Array(64).fill(e.defaults.note)}]}]};return S(function(){}),L(function(){a=!1}),[e,o,a,function(n){r(0,e=n)},function(n){r(1,o=n)},function(n){r(0,e=n)},function(n){r(1,o=n)},function(n){r(0,e=n)},function(n){r(1,o=n)}]}var yn=function(s){n(l,o);var c=dn(l);function l(n){var o;return t(this,l),o=c.call(this),r(e(o),n,bn,vn,a,{}),o}return l}();export{yn as S};