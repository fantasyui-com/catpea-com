import{_ as t,a as n,i as e,s as r,b as a,S as s,g as o,t as c,h as l,j as i,k as f,c as u,l as h,f as m,m as p,L as v,d as g,n as d,o as b,e as y,p as E,q as k,B as w,u as D,v as I,r as $,D as A,E as O,F as j,G as x,H as V,I as R,J as T,W as B,X as P,a0 as S,a8 as H,a9 as C,aa as z,V as J,K as N}from"./client.d24453ec.js";function L(t){return function(){var n,e=D(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var r=D(this).constructor;n=Reflect.construct(e,arguments,r)}else n=e.apply(this,arguments);return I(this,n)}}function Q(t,n,e){var r=t.slice();return r[3]=n[e],r[5]=e,r}function F(t){var n,e,r,a,s,E=t[3].name+"";function k(){for(var n,e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return(n=t)[2].apply(n,[t[5]].concat(r))}return{c:function(){n=o("li"),e=c(E),r=l(),this.h()},l:function(t){n=i(t,"LI",{class:!0,title:!0});var a=f(n);e=u(a,E),r=h(a),a.forEach(m),this.h()},h:function(){p(n,"class","list-group-item cursor-pointer select-none"),p(n,"title",a=t[0].help.messages["select-song-part"]),v(n,"bg-dark-light",t[0].selections.part==t[5]),v(n,"bg-dark",t[0].selections.part!=t[5]),v(n,"text-secondary",t[0].selections.part!==t[5]),v(n,"text-warning",t[0].selections.part==t[5])},m:function(t,a,o){g(t,n,a),d(n,e),d(n,r),o&&s(),s=b(n,"click",k)},p:function(r,s){t=r,2&s&&E!==(E=t[3].name+"")&&y(e,E),1&s&&a!==(a=t[0].help.messages["select-song-part"])&&p(n,"title",a),1&s&&v(n,"bg-dark-light",t[0].selections.part==t[5]),1&s&&v(n,"bg-dark",t[0].selections.part!=t[5]),1&s&&v(n,"text-secondary",t[0].selections.part!==t[5]),1&s&&v(n,"text-warning",t[0].selections.part==t[5])},d:function(t){t&&m(n),s()}}}function G(t){for(var n,e=t[1].parts,r=[],a=0;a<e.length;a+=1)r[a]=F(Q(t,e,a));return{c:function(){n=o("ul");for(var t=0;t<r.length;t+=1)r[t].c();this.h()},l:function(t){n=i(t,"UL",{class:!0});for(var e=f(n),a=0;a<r.length;a+=1)r[a].l(e);e.forEach(m),this.h()},h:function(){p(n,"class","list-group list-group-horizontal")},m:function(t,e){g(t,n,e);for(var a=0;a<r.length;a+=1)r[a].m(n,null)},p:function(t,a){var s=E(a,1)[0];if(3&s){var o;for(e=t[1].parts,o=0;o<e.length;o+=1){var c=Q(t,e,o);r[o]?r[o].p(c,s):(r[o]=F(c),r[o].c(),r[o].m(n,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=e.length}},i:k,o:k,d:function(t){t&&m(n),w(r,t)}}}function W(t,n,e){var r=n.program,a=n.song;return t.$set=function(t){"program"in t&&e(0,r=t.program),"song"in t&&e(1,a=t.song)},[r,a,function(t){e(0,r.selections.part=t,r),r.unselections.part.map(function(t){return e(0,r.selections[t]=0,r)})}]}var Y=function(o){t(l,s);var c=L(l);function l(t){var s;return n(this,l),s=c.call(this),e(a(s),t,W,G,r,{program:0,song:1}),s}return l}();function q(t){return function(){var n,e=D(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var r=D(this).constructor;n=Reflect.construct(e,arguments,r)}else n=e.apply(this,arguments);return I(this,n)}}function K(t,n,e){var r=t.slice();return r[12]=n[e],r[14]=e,r}function U(t,n,e){var r=t.slice();return r[9]=n[e],r[11]=e,r}function X(t,n,e){var r=t.slice();return r[12]=n[e],r[14]=e,r}function _(t){var n,e,r,a=t[14]+1+"";function s(){for(var n,e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return(n=t)[5].apply(n,[t[12],t[14]].concat(r))}return{c:function(){n=o("th"),e=c(a),this.h()},l:function(t){n=i(t,"TH",{scope:!0,class:!0});var r=f(n);e=u(r,a),r.forEach(m),this.h()},h:function(){p(n,"scope","col"),p(n,"class","daw-form-table-header-cell selectable"),v(n,"active",t[0].selections.slot==t[14])},m:function(t,a,o){g(t,n,a),d(n,e),o&&r(),r=b(n,"click",s)},p:function(e,r){t=e,1&r&&v(n,"active",t[0].selections.slot==t[14])},d:function(t){t&&m(n),r()}}}function M(t){var n,e,r,a,s;function l(){for(var n,e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return(n=t)[8].apply(n,[t[12],t[14],t[11]].concat(r))}return{c:function(){n=o("td"),e=o("div"),r=c(" "),this.h()},l:function(t){n=i(t,"TD",{class:!0,colspan:!0});var a=f(n);e=i(a,"DIV",{class:!0,title:!0});var s=f(e);r=u(s," "),s.forEach(m),a.forEach(m),this.h()},h:function(){p(e,"class","daw-form-table-cell-selector selectable"),p(e,"title",a=t[0].help.messages["activate-music"]),v(e,"active",t[12].enabled),p(n,"class","daw-form-table-cell text-center"),p(n,"colspan",1)},m:function(t,a,o){g(t,n,a),d(n,e),d(e,r),o&&s(),s=b(e,"click",l)},p:function(n,r){t=n,1&r&&a!==(a=t[0].help.messages["activate-music"])&&p(e,"title",a),3&r&&v(e,"active",t[12].enabled)},d:function(t){t&&m(n),s()}}}function Z(t){var n,e,r,a,s,E,k,D,I,A=t[11]+1+"",O=t[9].name+"";function j(){for(var n,e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return(n=t)[6].apply(n,[t[11]].concat(r))}function x(){for(var n,e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return(n=t)[7].apply(n,[t[11]].concat(r))}for(var V=t[9].slots,R=[],T=0;T<V.length;T+=1)R[T]=M(K(t,V,T));return{c:function(){n=o("tr"),e=o("th"),r=c(A),a=l(),s=o("th"),E=c(O),k=l();for(var t=0;t<R.length;t+=1)R[t].c();D=l(),this.h()},l:function(t){n=i(t,"TR",{class:!0});var o=f(n);e=i(o,"TH",{scope:!0,class:!0});var c=f(e);r=u(c,A),c.forEach(m),a=h(o),s=i(o,"TH",{scope:!0,class:!0});var l=f(s);E=u(l,O),l.forEach(m),k=h(o);for(var p=0;p<R.length;p+=1)R[p].l(o);D=h(o),o.forEach(m),this.h()},h:function(){p(e,"scope","row"),p(e,"class","daw-form-table-cell selectable"),v(e,"active",t[0].selections.track==t[11]),p(s,"scope","row"),p(s,"class","daw-form-table-cell selectable text-left"),v(s,"active",t[0].selections.track==t[11]),p(n,"class","daw-form-table-row")},m:function(t,o,c){g(t,n,o),d(n,e),d(e,r),d(n,a),d(n,s),d(s,E),d(n,k);for(var l=0;l<R.length;l+=1)R[l].m(n,null);d(n,D),c&&$(I),I=[b(e,"click",j),b(s,"click",x)]},p:function(r,a){if(t=r,1&a&&v(e,"active",t[0].selections.track==t[11]),3&a&&O!==(O=t[9].name+"")&&y(E,O),1&a&&v(s,"active",t[0].selections.track==t[11]),19&a){var o;for(V=t[9].slots,o=0;o<V.length;o+=1){var c=K(t,V,o);R[o]?R[o].p(c,a):(R[o]=M(c),R[o].c(),R[o].m(n,D))}for(;o<R.length;o+=1)R[o].d(1);R.length=V.length}},d:function(t){t&&m(n),w(R,t),$(I)}}}function tt(t){for(var n,e,r,a,s,v,b,y,D,I,$,O,j,x=t[1].parts[t[0].selections.part].tracks[t[0].selections.track].slots,V=[],R=0;R<x.length;R+=1)V[R]=_(X(t,x,R));for(var T=t[1].parts[t[0].selections.part].tracks,B=[],P=0;P<T.length;P+=1)B[P]=Z(U(t,T,P));return{c:function(){n=o("div"),e=o("div"),r=o("table"),a=o("thead"),s=o("tr"),v=o("th"),b=c("#"),y=l(),D=o("th"),I=c("Track Description"),$=l();for(var t=0;t<V.length;t+=1)V[t].c();O=l(),j=o("tbody");for(var i=0;i<B.length;i+=1)B[i].c();this.h()},l:function(t){n=i(t,"DIV",{class:!0});var o=f(n);e=i(o,"DIV",{class:!0});var c=f(e);r=i(c,"TABLE",{class:!0});var l=f(r);a=i(l,"THEAD",{});var p=f(a);s=i(p,"TR",{});var g=f(s);v=i(g,"TH",{scope:!0,class:!0});var d=f(v);b=u(d,"#"),d.forEach(m),y=h(g),D=i(g,"TH",{scope:!0,class:!0,style:!0});var E=f(D);I=u(E,"Track Description"),E.forEach(m),$=h(g);for(var k=0;k<V.length;k+=1)V[k].l(g);g.forEach(m),p.forEach(m),O=h(l),j=i(l,"TBODY",{});for(var w=f(j),A=0;A<B.length;A+=1)B[A].l(w);w.forEach(m),l.forEach(m),c.forEach(m),o.forEach(m),this.h()},h:function(){p(v,"scope","col"),p(v,"class","daw-form-table-header-cell"),p(D,"scope","col"),p(D,"class","daw-form-table-header-cell"),A(D,"min-width","16rem"),p(r,"class","daw-form-table table-borderless table table-sm table-dark text-light"),p(e,"class","daw-form-table-container table-responsive"),p(n,"class","daw-form")},m:function(t,o){g(t,n,o),d(n,e),d(e,r),d(r,a),d(a,s),d(s,v),d(v,b),d(s,y),d(s,D),d(D,I),d(s,$);for(var c=0;c<V.length;c+=1)V[c].m(s,null);d(r,O),d(r,j);for(var l=0;l<B.length;l+=1)B[l].m(j,null)},p:function(t,n){var e=E(n,1)[0];if(11&e){var r;for(x=t[1].parts[t[0].selections.part].tracks[t[0].selections.track].slots,r=0;r<x.length;r+=1){var a=X(t,x,r);V[r]?V[r].p(a,e):(V[r]=_(a),V[r].c(),V[r].m(s,null))}for(;r<V.length;r+=1)V[r].d(1);V.length=x.length}if(23&e){var o;for(T=t[1].parts[t[0].selections.part].tracks,o=0;o<T.length;o+=1){var c=U(t,T,o);B[o]?B[o].p(c,e):(B[o]=Z(c),B[o].c(),B[o].m(j,null))}for(;o<B.length;o+=1)B[o].d(1);B.length=T.length}},i:k,o:k,d:function(t){t&&m(n),w(V,t),w(B,t)}}}function nt(t,n,e){var r=n.program,a=void 0===r?{}:r,s=n.song,o=void 0===s?{}:s;function c(t){var n=t.trackIndex;e(0,a.selections.track=n,a)}function l(t){t.slot;var n=t.slotIndex;e(0,a.selections.slot=n,a)}function i(t){var n=t.slot,r=t.slotIndex,s=t.trackIndex;n.enabled=!n.enabled,e(0,a.selections.slot=r,a),e(0,a.selections.track=s,a)}return t.$set=function(t){"program"in t&&e(0,a=t.program),"song"in t&&e(1,o=t.song)},[a,o,c,l,i,function(t,n){return l({slot:t,slotIndex:n})},function(t){return c({trackIndex:t})},function(t){return c({trackIndex:t})},function(t,n,e){return i({slot:t,slotIndex:n,trackIndex:e})}]}var et=function(o){t(l,s);var c=q(l);function l(t){var s;return n(this,l),s=c.call(this),e(a(s),t,nt,tt,r,{program:0,song:1}),s}return l}();function rt(t){return function(){var n,e=D(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var r=D(this).constructor;n=Reflect.construct(e,arguments,r)}else n=e.apply(this,arguments);return I(this,n)}}function at(t,n,e){var r=t.slice();return r[6]=n[e],r[5]=e,r}function st(t,n,e){var r=t.slice();return r[3]=n[e],r[5]=e,r}function ot(t,n,e){var r=t.slice();return r[8]=n[e],r[5]=e,r}function ct(t){var n,e,r=t[5]+1+"";return{c:function(){n=o("th"),e=c(r),this.h()},l:function(t){n=i(t,"TH",{scope:!0,class:!0});var a=f(n);e=u(a,r),a.forEach(m),this.h()},h:function(){p(n,"scope","col"),p(n,"class","small text-muted text-center")},m:function(t,r){g(t,n,r),d(n,e)},p:k,d:function(t){t&&m(n)}}}function lt(t){var n,e,r,a;function s(){for(var n,e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return(n=t)[2].apply(n,[t[6]].concat(r))}return{c:function(){n=o("td"),e=o("div"),r=c(" "),this.h()},l:function(t){n=i(t,"TD",{});var a=f(n);e=i(a,"DIV",{class:!0,style:!0});var s=f(e);r=u(s," "),s.forEach(m),a.forEach(m),this.h()},h:function(){p(e,"class","rounded"),A(e,"min-width","2rem"),A(e,"user-select","none"),v(e,"bg-success",t[6].enabled),v(e,"bg-secondary",!t[6].enabled),v(e,"shadow",!t[6].enabled)},m:function(t,o,c){g(t,n,o),d(n,e),d(e,r),c&&a(),a=b(e,"click",s)},p:function(n,r){t=n,3&r&&v(e,"bg-success",t[6].enabled),3&r&&v(e,"bg-secondary",!t[6].enabled),3&r&&v(e,"shadow",!t[6].enabled)},d:function(t){t&&m(n),a()}}}function it(t){for(var n,e,r,a,s,v,b,E,k,D,I=t[5]+1+"",$=t[3].instrument+"",A=new S({props:{name:"gear",color:"warning"}}),B=t[3].notes,P=[],H=0;H<B.length;H+=1)P[H]=lt(at(t,B,H));return{c:function(){n=o("tr"),e=o("th"),r=c(I),a=l(),s=o("th"),O(A.$$.fragment),v=l(),b=c($),E=l();for(var t=0;t<P.length;t+=1)P[t].c();k=l(),this.h()},l:function(t){n=i(t,"TR",{});var o=f(n);e=i(o,"TH",{scope:!0,class:!0});var c=f(e);r=u(c,I),c.forEach(m),a=h(o),s=i(o,"TH",{scope:!0,class:!0});var l=f(s);j(A.$$.fragment,l),v=h(l),b=u(l,$),l.forEach(m),E=h(o);for(var p=0;p<P.length;p+=1)P[p].l(o);k=h(o),o.forEach(m),this.h()},h:function(){p(e,"scope","row"),p(e,"class","small text-muted"),p(s,"scope","row"),p(s,"class","small text-muted")},m:function(t,o){g(t,n,o),d(n,e),d(e,r),d(n,a),d(n,s),x(A,s,null),d(s,v),d(s,b),d(n,E);for(var c=0;c<P.length;c+=1)P[c].m(n,null);d(n,k),D=!0},p:function(t,e){if((!D||3&e)&&$!==($=t[3].instrument+"")&&y(b,$),3&e){var r;for(B=t[3].notes,r=0;r<B.length;r+=1){var a=at(t,B,r);P[r]?P[r].p(a,e):(P[r]=lt(a),P[r].c(),P[r].m(n,k))}for(;r<P.length;r+=1)P[r].d(1);P.length=B.length}},i:function(t){D||(V(A.$$.fragment,t),D=!0)},o:function(t){R(A.$$.fragment,t),D=!1},d:function(t){t&&m(n),T(A),w(P,t)}}}function ft(t){for(var n,e,r,a,s,v,b,y,k,D,I,$,O,j,x=t[1].parts[t[0].selections.part].tracks[t[0].selections.track].melodies[0].notes,T=[],S=0;S<x.length;S+=1)T[S]=ct(ot(t,x,S));for(var H=t[1].parts[t[0].selections.part].tracks[t[0].selections.track].melodies,C=[],z=0;z<H.length;z+=1)C[z]=it(st(t,H,z));var J=function(t){return R(C[t],1,1,function(){C[t]=null})};return{c:function(){n=o("div"),e=o("div"),r=o("table"),a=o("thead"),s=o("tr"),v=o("th"),b=c("#"),y=l(),k=o("th"),D=c("Instrument Configuration"),I=l();for(var t=0;t<T.length;t+=1)T[t].c();$=l(),O=o("tbody");for(var i=0;i<C.length;i+=1)C[i].c();this.h()},l:function(t){n=i(t,"DIV",{class:!0});var o=f(n);e=i(o,"DIV",{class:!0});var c=f(e);r=i(c,"TABLE",{class:!0});var l=f(r);a=i(l,"THEAD",{});var p=f(a);s=i(p,"TR",{});var g=f(s);v=i(g,"TH",{scope:!0,class:!0});var d=f(v);b=u(d,"#"),d.forEach(m),y=h(g),k=i(g,"TH",{scope:!0,class:!0,style:!0});var E=f(k);D=u(E,"Instrument Configuration"),E.forEach(m),I=h(g);for(var w=0;w<T.length;w+=1)T[w].l(g);g.forEach(m),p.forEach(m),$=h(l),O=i(l,"TBODY",{});for(var A=f(O),j=0;j<C.length;j+=1)C[j].l(A);A.forEach(m),l.forEach(m),c.forEach(m),o.forEach(m),this.h()},h:function(){p(v,"scope","col"),p(v,"class","small text-muted"),p(k,"scope","col"),p(k,"class","small text-muted"),A(k,"min-width","16rem"),p(r,"class","table table-sm table-dark rounded"),p(e,"class","table-responsive rounded"),p(n,"class","bg-dark rounded")},m:function(t,o){g(t,n,o),d(n,e),d(e,r),d(r,a),d(a,s),d(s,v),d(v,b),d(s,y),d(s,k),d(k,D),d(s,I);for(var c=0;c<T.length;c+=1)T[c].m(s,null);d(r,$),d(r,O);for(var l=0;l<C.length;l+=1)C[l].m(O,null);j=!0},p:function(t,n){var e=E(n,1)[0];if(3&e){var r;for(x=t[1].parts[t[0].selections.part].tracks[t[0].selections.track].melodies[0].notes,r=0;r<x.length;r+=1){var a=ot(t,x,r);T[r]?T[r].p(a,e):(T[r]=ct(a),T[r].c(),T[r].m(s,null))}for(;r<T.length;r+=1)T[r].d(1);T.length=x.length}if(3&e){var o;for(H=t[1].parts[t[0].selections.part].tracks[t[0].selections.track].melodies,o=0;o<H.length;o+=1){var c=st(t,H,o);C[o]?(C[o].p(c,e),V(C[o],1)):(C[o]=it(c),C[o].c(),V(C[o],1),C[o].m(O,null))}for(B(),o=H.length;o<C.length;o+=1)J(o);P()}},i:function(t){if(!j){for(var n=0;n<H.length;n+=1)V(C[n]);j=!0}},o:function(t){C=C.filter(Boolean);for(var n=0;n<C.length;n+=1)R(C[n]);j=!1},d:function(t){t&&m(n),w(T,t),w(C,t)}}}function ut(t,n,e){var r=n.program,a=void 0===r?{}:r,s=n.song,o=void 0===s?{}:s;return t.$set=function(t){"program"in t&&e(0,a=t.program),"song"in t&&e(1,o=t.song)},[a,o,function(t){e(1,t.enabled=!t.enabled,o,e(0,a))}]}var ht=function(o){t(l,s);var c=rt(l);function l(t){var s;return n(this,l),s=c.call(this),e(a(s),t,ut,ft,r,{program:0,song:1}),s}return l}();function mt(t){return function(){var n,e=D(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var r=D(this).constructor;n=Reflect.construct(e,arguments,r)}else n=e.apply(this,arguments);return I(this,n)}}function pt(t){var n,e=t[0].help.messages[t[0].help.message]+"";return{c:function(){n=c(e)},l:function(t){n=u(t,e)},m:function(t,e){g(t,n,e)},p:function(t,r){1&r&&e!==(e=t[0].help.messages[t[0].help.message]+"")&&y(n,e)},d:function(t){t&&m(n)}}}function vt(t){var n,e,r,a,s,v,b,k,w,D,I,$,B,P,S,J,N,L,Q,F,G,W,q,K,U,X,_,M,Z,tt,nt,rt,at,st,ot,ct,lt,it,ft,ut,mt,vt,gt,dt,bt,yt,Et,kt,wt,Dt,It,$t,At,Ot,jt=t[0].selections.part+"",xt=t[0].selections.track+"",Vt=t[0].selections.slot+"",Rt=t[0].selections.note+"",Tt=JSON.stringify(t[0],null,"  ")+"",Bt=JSON.stringify(t[1],null,"  ")+"",Pt=t[0].help.messages[t[0].help.message]&&pt(t);function St(n){t[4].call(null,n)}function Ht(n){t[5].call(null,n)}var Ct={};void 0!==t[0]&&(Ct.program=t[0]),void 0!==t[1]&&(Ct.song=t[1]);var zt=new Y({props:Ct});function Jt(n){t[6].call(null,n)}function Nt(n){t[7].call(null,n)}H.push(function(){return C(zt,"program",St)}),H.push(function(){return C(zt,"song",Ht)});var Lt={};void 0!==t[0]&&(Lt.program=t[0]),void 0!==t[1]&&(Lt.song=t[1]);var Qt=new et({props:Lt});function Ft(n){t[8].call(null,n)}function Gt(n){t[9].call(null,n)}H.push(function(){return C(Qt,"program",Jt)}),H.push(function(){return C(Qt,"song",Nt)});var Wt={};void 0!==t[0]&&(Wt.program=t[0]),void 0!==t[1]&&(Wt.song=t[1]);var Yt=new ht({props:Wt});return H.push(function(){return C(Yt,"program",Ft)}),H.push(function(){return C(Yt,"song",Gt)}),{c:function(){n=o("div"),e=o("div"),r=o("div"),a=c("part:="),s=c(jt),v=c(",\n      track:="),b=c(xt),k=c(",\n      slot:="),w=c(Vt),D=c(",\n      note:="),I=c(Rt),$=c(","),B=l(),P=o("div"),S=o("div"),J=o("div"),N=o("span"),Pt&&Pt.c(),L=l(),Q=o("div"),F=o("div"),O(zt.$$.fragment),q=l(),K=o("div"),U=o("div"),O(Qt.$$.fragment),M=l(),Z=o("div"),tt=o("div"),O(Yt.$$.fragment),at=l(),st=o("div"),ot=o("div"),ct=c("..."),lt=l(),it=o("div"),ft=c("..."),ut=l(),mt=o("div"),vt=c("..."),gt=l(),dt=o("div"),bt=o("div"),yt=o("code"),Et=o("pre"),kt=c(Tt),wt=l(),Dt=o("div"),It=o("code"),$t=o("pre"),At=c(Bt),this.h()},l:function(t){n=i(t,"DIV",{class:!0});var o=f(n);e=i(o,"DIV",{class:!0});var c=f(e);r=i(c,"DIV",{class:!0});var l=f(r);a=u(l,"part:="),s=u(l,jt),v=u(l,",\n      track:="),b=u(l,xt),k=u(l,",\n      slot:="),w=u(l,Vt),D=u(l,",\n      note:="),I=u(l,Rt),$=u(l,","),l.forEach(m),c.forEach(m),B=h(o),P=i(o,"DIV",{class:!0});var p=f(P);S=i(p,"DIV",{class:!0});var g=f(S);J=i(g,"DIV",{style:!0});var d=f(J);N=i(d,"SPAN",{class:!0});var y=f(N);Pt&&Pt.l(y),y.forEach(m),d.forEach(m),g.forEach(m),p.forEach(m),L=h(o),Q=i(o,"DIV",{class:!0});var E=f(Q);F=i(E,"DIV",{class:!0});var A=f(F);j(zt.$$.fragment,A),A.forEach(m),E.forEach(m),q=h(o),K=i(o,"DIV",{class:!0});var O=f(K);U=i(O,"DIV",{class:!0});var x=f(U);j(Qt.$$.fragment,x),x.forEach(m),O.forEach(m),M=h(o),Z=i(o,"DIV",{class:!0});var V=f(Z);tt=i(V,"DIV",{class:!0});var R=f(tt);j(Yt.$$.fragment,R),R.forEach(m),V.forEach(m),at=h(o),st=i(o,"DIV",{class:!0});var T=f(st);ot=i(T,"DIV",{class:!0});var H=f(ot);ct=u(H,"..."),H.forEach(m),lt=h(T),it=i(T,"DIV",{class:!0});var C=f(it);ft=u(C,"..."),C.forEach(m),ut=h(T),mt=i(T,"DIV",{class:!0});var z=f(mt);vt=u(z,"..."),z.forEach(m),T.forEach(m),gt=h(o),dt=i(o,"DIV",{class:!0});var G=f(dt);bt=i(G,"DIV",{class:!0});var W=f(bt);yt=i(W,"CODE",{});var Y=f(yt);Et=i(Y,"PRE",{});var X=f(Et);kt=u(X,Tt),X.forEach(m),Y.forEach(m),W.forEach(m),wt=h(G),Dt=i(G,"DIV",{class:!0});var _=f(Dt);It=i(_,"CODE",{});var nt=f(It);$t=i(nt,"PRE",{});var et=f($t);At=u(et,Bt),et.forEach(m),nt.forEach(m),_.forEach(m),G.forEach(m),o.forEach(m),this.h()},h:function(){p(r,"class","col"),p(e,"class","row"),p(N,"class","d-inline-block small"),A(J,"min-height","2rem"),p(S,"class","col-12 pb-2"),p(P,"class","row"),p(F,"class","col-12 pb-2"),p(Q,"class","row"),p(U,"class","col-12 pb-2"),p(K,"class","row"),p(tt,"class","col-12 pb-2"),p(Z,"class","row"),p(ot,"class","col pb-3"),p(it,"class","col pb-3"),p(mt,"class","col pb-3"),p(st,"class","row"),p(bt,"class","col"),p(Dt,"class","col"),p(dt,"class","row"),p(n,"class","container-fluid")},m:function(t,o){g(t,n,o),d(n,e),d(e,r),d(r,a),d(r,s),d(r,v),d(r,b),d(r,k),d(r,w),d(r,D),d(r,I),d(r,$),d(n,B),d(n,P),d(P,S),d(S,J),d(J,N),Pt&&Pt.m(N,null),d(n,L),d(n,Q),d(Q,F),x(zt,F,null),d(n,q),d(n,K),d(K,U),x(Qt,U,null),d(n,M),d(n,Z),d(Z,tt),x(Yt,tt,null),d(n,at),d(n,st),d(st,ot),d(ot,ct),d(st,lt),d(st,it),d(it,ft),d(st,ut),d(st,mt),d(mt,vt),d(n,gt),d(n,dt),d(dt,bt),d(bt,yt),d(yt,Et),d(Et,kt),d(dt,wt),d(dt,Dt),d(Dt,It),d(It,$t),d($t,At),Ot=!0},p:function(t,n){var e=E(n,1)[0];(!Ot||1&e)&&jt!==(jt=t[0].selections.part+"")&&y(s,jt),(!Ot||1&e)&&xt!==(xt=t[0].selections.track+"")&&y(b,xt),(!Ot||1&e)&&Vt!==(Vt=t[0].selections.slot+"")&&y(w,Vt),(!Ot||1&e)&&Rt!==(Rt=t[0].selections.note+"")&&y(I,Rt),t[0].help.messages[t[0].help.message]?Pt?Pt.p(t,e):((Pt=pt(t)).c(),Pt.m(N,null)):Pt&&(Pt.d(1),Pt=null);var r={};!G&&1&e&&(G=!0,r.program=t[0],z(function(){return G=!1})),!W&&2&e&&(W=!0,r.song=t[1],z(function(){return W=!1})),zt.$set(r);var a={};!X&&1&e&&(X=!0,a.program=t[0],z(function(){return X=!1})),!_&&2&e&&(_=!0,a.song=t[1],z(function(){return _=!1})),Qt.$set(a);var o={};!nt&&1&e&&(nt=!0,o.program=t[0],z(function(){return nt=!1})),!rt&&2&e&&(rt=!0,o.song=t[1],z(function(){return rt=!1})),Yt.$set(o),(!Ot||1&e)&&Tt!==(Tt=JSON.stringify(t[0],null,"  ")+"")&&y(kt,Tt),(!Ot||2&e)&&Bt!==(Bt=JSON.stringify(t[1],null,"  ")+"")&&y(At,Bt)},i:function(t){Ot||(V(zt.$$.fragment,t),V(Qt.$$.fragment,t),V(Yt.$$.fragment,t),Ot=!0)},o:function(t){R(zt.$$.fragment,t),R(Qt.$$.fragment,t),R(Yt.$$.fragment,t),Ot=!1},d:function(t){t&&m(n),Pt&&Pt.d(),T(zt),T(Qt),T(Yt)}}}function gt(t,n,e){var r=!1,a={help:{message:"welcome",messages:{none:"",welcome:"Welcome to the program!","activate-music":"Click to activate/deactivate music in this cell.","select-song-part":"Click to select the portion of a song you want to work on."}},defaults:{slot:{enabled:!1},note:{enabled:!1,note:"C4",duration:"16n"}},selections:{part:3,track:0,slot:0,note:0},unselections:{part:["track","slot","note"],track:["slot","note"],slot:["note"],note:[]}};function s(){var t=[{instrument:"Guitar",notes:Array(16).fill(1).map(function(t){return Object.assign({},a.defaults.note)})},{instrument:"Piano",notes:Array(16).fill(1).map(function(t){return Object.assign({},a.defaults.note)})},{instrument:"Saw",notes:Array(16).fill(1).map(function(t){return Object.assign({},a.defaults.note)})}];return JSON.parse(JSON.stringify(t))}var o={configuration:{name:"",author:"",bpm:160,parts:4,beats:4},parts:[{name:"Intro",size:64,tracks:[{name:"Calm little melody.",slots:Array(8).fill(1).map(function(t){return Object.assign({},a.defaults.slot)}),melodies:s()},{name:"Big Bassline",slots:Array(8).fill(1).map(function(t){return Object.assign({},a.defaults.slot)}),melodies:s()}]},{name:"Verse",size:64,tracks:[{name:"Beat",slots:Array(8).fill(1).map(function(t){return Object.assign({},a.defaults.slot)}),melodies:s()},{name:"Quiet Bassline",slots:Array(8).fill(1).map(function(t){return Object.assign({},a.defaults.slot)}),melodies:s()},{name:"Quick Piano",slots:Array(8).fill(1).map(function(t){return Object.assign({},a.defaults.slot)}),melodies:s()}]},{name:"Chorus",size:64,tracks:[{name:"Beat",slots:Array(8).fill(1).map(function(t){return Object.assign({},a.defaults.slot)}),melodies:s()},{name:"Bassline",slots:Array(8).fill(1).map(function(t){return Object.assign({},a.defaults.slot)}),melodies:s()},{name:"Piano",slots:Array(8).fill(1).map(function(t){return Object.assign({},a.defaults.slot)}),melodies:s()},{name:"Cello",slots:Array(8).fill(1).map(function(t){return Object.assign({},a.defaults.slot)}),melodies:s()}]},{name:"Bridge",size:64,tracks:[{name:"Beat",slots:Array(8).fill(1).map(function(t){return Object.assign({},a.defaults.slot)}),melodies:s()},{name:"Bassline",slots:Array(8).fill(1).map(function(t){return Object.assign({},a.defaults.slot)}),melodies:s()},{name:"Quiet Piano",slots:Array(8).fill(1).map(function(t){return Object.assign({},a.defaults.slot)}),melodies:s()},{name:"Fast Piano",slots:Array(8).fill(1).map(function(t){return Object.assign({},a.defaults.slot)}),melodies:s()},{name:"Cello",slots:Array(8).fill(1).map(function(t){return Object.assign({},a.defaults.slot)}),melodies:s()}]},{name:"Chorus",size:64,tracks:[{name:"Beat",slots:Array(8).fill(1).map(function(t){return Object.assign({},a.defaults.slot)}),melodies:s()},{name:"Bassline",slots:Array(8).fill(1).map(function(t){return Object.assign({},a.defaults.slot)}),melodies:s()},{name:"Piano",slots:Array(8).fill(1).map(function(t){return Object.assign({},a.defaults.slot)}),melodies:s()}]},{name:"Outro",size:64,tracks:[{name:"Beat",slots:Array(8).fill(1).map(function(t){return Object.assign({},a.defaults.slot)}),melodies:s()},{name:"Beat",slots:Array(8).fill(1).map(function(t){return Object.assign({},a.defaults.slot)}),melodies:s()},{name:"Beat",slots:Array(8).fill(1).map(function(t){return Object.assign({},a.defaults.slot)}),melodies:s()},{name:"Beat",slots:Array(8).fill(1).map(function(t){return Object.assign({},a.defaults.slot)}),melodies:s()},{name:"Bassline",slots:Array(8).fill(1).map(function(t){return Object.assign({},a.defaults.slot)}),melodies:s()},{name:"Piano",slots:Array(8).fill(1).map(function(t){return Object.assign({},a.defaults.slot)}),melodies:s()}]}]};return J(function(){}),N(function(){r=!1}),[a,o,r,s,function(t){e(0,a=t)},function(t){e(1,o=t)},function(t){e(0,a=t)},function(t){e(1,o=t)},function(t){e(0,a=t)},function(t){e(1,o=t)}]}var dt=function(o){t(l,s);var c=mt(l);function l(t){var s;return n(this,l),s=c.call(this),e(a(s),t,gt,vt,r,{}),s}return l}();export{dt as S};
