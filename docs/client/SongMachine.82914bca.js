import{S as t,i as s,s as a,e,m as l,c as n,a as r,q as o,d as c,b as i,f,v as h,x as m,y as u,n as g,F as d,o as p,p as b,r as v,u as y,w as E,g as $,k as A,t as j,B as O,C as k,h as w,j as I,K as D,R as T,T as x,U as B,H as V,N as H}from"./client.cb543f6c.js";import{I as C}from"./Icon.d7dd0cd8.js";function z(t,s,a){const e=t.slice();return e[3]=s[a],e[5]=a,e}function P(t){let s,a,g,d=t[3].name+"";function p(...s){return t[2](t[5],...s)}return{c(){s=e("li"),a=l(d),this.h()},l(t){s=n(t,"LI",{class:!0});var e=r(s);a=o(e,d),e.forEach(c),this.h()},h(){i(s,"class","list-group-item bg-dark text-primary cursor-pointer")},m(t,e,l){f(t,s,e),h(s,a),l&&g(),g=m(s,"click",p)},p(s,e){t=s,2&e&&d!==(d=t[3].name+"")&&u(a,d)},d(t){t&&c(s),g()}}}function M(t){let s,a=t[1].parts,l=[];for(let s=0;s<a.length;s+=1)l[s]=P(z(t,a,s));return{c(){s=e("ul");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){s=n(t,"UL",{class:!0});var a=r(s);for(let t=0;t<l.length;t+=1)l[t].l(a);a.forEach(c),this.h()},h(){i(s,"class","list-group list-group-horizontal")},m(t,a){f(t,s,a);for(let t=0;t<l.length;t+=1)l[t].m(s,null)},p(t,[e]){if(3&e){let n;for(a=t[1].parts,n=0;n<a.length;n+=1){const r=z(t,a,n);l[n]?l[n].p(r,e):(l[n]=P(r),l[n].c(),l[n].m(s,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=a.length}},i:g,o:g,d(t){t&&c(s),d(l,t)}}}function R(t,s,a){let{program:e}=s,{song:l}=s;return t.$set=(t=>{"program"in t&&a(0,e=t.program),"song"in t&&a(1,l=t.song)}),[e,l,t=>{a(0,e.selections.part=t,e)}]}class L extends t{constructor(t){super(),s(this,t,R,M,a,{program:0,song:1})}}function Q(t,s,a){const e=t.slice();return e[7]=s[a],e[6]=a,e}function F(t,s,a){const e=t.slice();return e[4]=s[a],e[6]=a,e}function S(t,s,a){const e=t.slice();return e[7]=s[a],e[6]=a,e}function U(t){let s,a,m=t[6]+1+"";return{c(){s=e("th"),a=l(m),this.h()},l(t){s=n(t,"TH",{scope:!0,class:!0});var e=r(s);a=o(e,m),e.forEach(c),this.h()},h(){i(s,"scope","col"),i(s,"class","small text-muted text-center")},m(t,e){f(t,s,e),h(s,a)},p:g,d(t){t&&c(s)}}}function Y(t){let s,a,u,g;function d(...s){return t[3](t[7],...s)}return{c(){s=e("td"),a=e("div"),u=l(" "),this.h()},l(t){s=n(t,"TD",{});var e=r(s);a=n(e,"DIV",{class:!0,style:!0});var l=r(a);u=o(l," "),l.forEach(c),e.forEach(c),this.h()},h(){i(a,"class","rounded"),k(a,"min-width","2rem"),k(a,"user-select","none"),D(a,"bg-primary",t[7].enabled),D(a,"bg-secondary",!t[7].enabled),D(a,"shadow",!t[7].enabled)},m(t,e,l){f(t,s,e),h(s,a),h(a,u),l&&g(),g=m(a,"click",d)},p(s,e){t=s,3&e&&D(a,"bg-primary",t[7].enabled),3&e&&D(a,"bg-secondary",!t[7].enabled),3&e&&D(a,"shadow",!t[7].enabled)},d(t){t&&c(s),g()}}}function q(t){let s,a,u,g,d;function p(...s){return t[2](t[7],...s)}return{c(){s=e("td"),a=e("div"),u=l(" "),this.h()},l(t){s=n(t,"TD",{colspan:!0});var e=r(s);a=n(e,"DIV",{class:!0,style:!0});var l=r(a);u=o(l," "),l.forEach(c),e.forEach(c),this.h()},h(){var e,l;i(a,"class","rounded"),k(a,"min-width","2rem"),k(a,"user-select","none"),D(a,"bg-primary",t[7].enabled),D(a,"bg-secondary",!t[7].enabled),D(a,"shadow",!t[7].enabled),i(s,"colspan",(e=1,l=6,e=Math.ceil(e),l=Math.floor(l),g=Math.floor(Math.random()*(l-e+1))+e))},m(t,e,l){f(t,s,e),h(s,a),h(a,u),l&&d(),d=m(a,"click",p)},p(s,e){t=s,3&e&&D(a,"bg-primary",t[7].enabled),3&e&&D(a,"bg-secondary",!t[7].enabled),3&e&&D(a,"shadow",!t[7].enabled)},d(t){t&&c(s),d()}}}function K(t){let s;let a=(Math.random()<.2?q:Y)(t);return{c(){a.c(),s=$()},l(t){a.l(t),s=$()},m(t,e){a.m(t,e),f(t,s,e)},p(t,s){a.p(t,s)},d(t){a.d(t),t&&c(s)}}}function N(t){let s,a,m,g,$,k,w,I,D,T,x=t[6]+1+"",B=t[4].name+"";const V=new C({props:{name:"gear",color:"warning"}});let H=t[4].slots,z=[];for(let s=0;s<H.length;s+=1)z[s]=K(Q(t,H,s));return{c(){s=e("tr"),a=e("th"),m=l(x),g=p(),$=e("th"),b(V.$$.fragment),k=p(),w=l(B),I=p();for(let t=0;t<z.length;t+=1)z[t].c();D=p(),this.h()},l(t){s=n(t,"TR",{});var e=r(s);a=n(e,"TH",{scope:!0,class:!0});var l=r(a);m=o(l,x),l.forEach(c),g=v(e),$=n(e,"TH",{scope:!0,class:!0});var i=r($);y(V.$$.fragment,i),k=v(i),w=o(i,B),i.forEach(c),I=v(e);for(let t=0;t<z.length;t+=1)z[t].l(e);D=v(e),e.forEach(c),this.h()},h(){i(a,"scope","row"),i(a,"class","small text-muted"),i($,"scope","row"),i($,"class","small text-muted")},m(t,e){f(t,s,e),h(s,a),h(a,m),h(s,g),h(s,$),E(V,$,null),h($,k),h($,w),h(s,I);for(let t=0;t<z.length;t+=1)z[t].m(s,null);h(s,D),T=!0},p(t,a){if((!T||3&a)&&B!==(B=t[4].name+"")&&u(w,B),3&a){let e;for(H=t[4].slots,e=0;e<H.length;e+=1){const l=Q(t,H,e);z[e]?z[e].p(l,a):(z[e]=K(l),z[e].c(),z[e].m(s,D))}for(;e<z.length;e+=1)z[e].d(1);z.length=H.length}},i(t){T||(A(V.$$.fragment,t),T=!0)},o(t){j(V.$$.fragment,t),T=!1},d(t){t&&c(s),O(V),d(z,t)}}}function G(t){let s,a,m,u,g,b,y,E,$,O,D,T,x,B,V=t[1].parts[t[0].selections.part].tracks[t[0].selections.track].slots,H=[];for(let s=0;s<V.length;s+=1)H[s]=U(S(t,V,s));let C=t[1].parts[t[0].selections.part].tracks,z=[];for(let s=0;s<C.length;s+=1)z[s]=N(F(t,C,s));const P=t=>j(z[t],1,1,()=>{z[t]=null});return{c(){s=e("div"),a=e("div"),m=e("table"),u=e("thead"),g=e("tr"),b=e("th"),y=l("#"),E=p(),$=e("th"),O=l("Instrument Configuration"),D=p();for(let t=0;t<H.length;t+=1)H[t].c();T=p(),x=e("tbody");for(let t=0;t<z.length;t+=1)z[t].c();this.h()},l(t){s=n(t,"DIV",{class:!0});var e=r(s);a=n(e,"DIV",{class:!0});var l=r(a);m=n(l,"TABLE",{class:!0});var i=r(m);u=n(i,"THEAD",{});var f=r(u);g=n(f,"TR",{});var h=r(g);b=n(h,"TH",{scope:!0,class:!0});var d=r(b);y=o(d,"#"),d.forEach(c),E=v(h),$=n(h,"TH",{scope:!0,class:!0,style:!0});var p=r($);O=o(p,"Instrument Configuration"),p.forEach(c),D=v(h);for(let t=0;t<H.length;t+=1)H[t].l(h);h.forEach(c),f.forEach(c),T=v(i),x=n(i,"TBODY",{});var A=r(x);for(let t=0;t<z.length;t+=1)z[t].l(A);A.forEach(c),i.forEach(c),l.forEach(c),e.forEach(c),this.h()},h(){i(b,"scope","col"),i(b,"class","small text-muted"),i($,"scope","col"),i($,"class","small text-muted"),k($,"min-width","16rem"),i(m,"class","table table-sm table-dark rounded"),i(a,"class","table-responsive rounded"),i(s,"class","bg-dark rounded")},m(t,e){f(t,s,e),h(s,a),h(a,m),h(m,u),h(u,g),h(g,b),h(b,y),h(g,E),h(g,$),h($,O),h(g,D);for(let t=0;t<H.length;t+=1)H[t].m(g,null);h(m,T),h(m,x);for(let t=0;t<z.length;t+=1)z[t].m(x,null);B=!0},p(t,[s]){if(3&s){let a;for(V=t[1].parts[t[0].selections.part].tracks[t[0].selections.track].slots,a=0;a<V.length;a+=1){const e=S(t,V,a);H[a]?H[a].p(e,s):(H[a]=U(e),H[a].c(),H[a].m(g,null))}for(;a<H.length;a+=1)H[a].d(1);H.length=V.length}if(3&s){let a;for(C=t[1].parts[t[0].selections.part].tracks,a=0;a<C.length;a+=1){const e=F(t,C,a);z[a]?(z[a].p(e,s),A(z[a],1)):(z[a]=N(e),z[a].c(),A(z[a],1),z[a].m(x,null))}for(w(),a=C.length;a<z.length;a+=1)P(a);I()}},i(t){if(!B){for(let t=0;t<C.length;t+=1)A(z[t]);B=!0}},o(t){z=z.filter(Boolean);for(let t=0;t<z.length;t+=1)j(z[t]);B=!1},d(t){t&&c(s),d(H,t),d(z,t)}}}function J(t,s,a){let{program:e={}}=s,{song:l={}}=s;return t.$set=(t=>{"program"in t&&a(0,e=t.program),"song"in t&&a(1,l=t.song)}),[e,l,t=>{a(1,t.enabled=!t.enabled,l,a(0,e))},t=>{a(1,t.enabled=!t.enabled,l,a(0,e))}]}class W extends t{constructor(t){super(),s(this,t,J,G,a,{program:0,song:1})}}function X(t,s,a){const e=t.slice();return e[6]=s[a],e[5]=a,e}function Z(t,s,a){const e=t.slice();return e[3]=s[a],e[5]=a,e}function _(t,s,a){const e=t.slice();return e[6]=s[a],e[5]=a,e}function tt(t){let s,a,m=t[5]+1+"";return{c(){s=e("th"),a=l(m),this.h()},l(t){s=n(t,"TH",{scope:!0,class:!0});var e=r(s);a=o(e,m),e.forEach(c),this.h()},h(){i(s,"scope","col"),i(s,"class","small text-muted text-center")},m(t,e){f(t,s,e),h(s,a)},p:g,d(t){t&&c(s)}}}function st(t){let s,a,u,g;function d(...s){return t[2](t[6],...s)}return{c(){s=e("td"),a=e("div"),u=l(" "),this.h()},l(t){s=n(t,"TD",{});var e=r(s);a=n(e,"DIV",{class:!0,style:!0});var l=r(a);u=o(l," "),l.forEach(c),e.forEach(c),this.h()},h(){i(a,"class","rounded"),k(a,"min-width","2rem"),k(a,"user-select","none"),D(a,"bg-primary",t[6].enabled),D(a,"bg-secondary",!t[6].enabled),D(a,"shadow",!t[6].enabled)},m(t,e,l){f(t,s,e),h(s,a),h(a,u),l&&g(),g=m(a,"click",d)},p(s,e){t=s,3&e&&D(a,"bg-primary",t[6].enabled),3&e&&D(a,"bg-secondary",!t[6].enabled),3&e&&D(a,"shadow",!t[6].enabled)},d(t){t&&c(s),g()}}}function at(t){let s,a,m,g,$,k,w,I,D,T,x=t[5]+1+"",B=t[3].name+"";const V=new C({props:{name:"gear",color:"warning"}});let H=t[3].notes,z=[];for(let s=0;s<H.length;s+=1)z[s]=st(X(t,H,s));return{c(){s=e("tr"),a=e("th"),m=l(x),g=p(),$=e("th"),b(V.$$.fragment),k=p(),w=l(B),I=p();for(let t=0;t<z.length;t+=1)z[t].c();D=p(),this.h()},l(t){s=n(t,"TR",{});var e=r(s);a=n(e,"TH",{scope:!0,class:!0});var l=r(a);m=o(l,x),l.forEach(c),g=v(e),$=n(e,"TH",{scope:!0,class:!0});var i=r($);y(V.$$.fragment,i),k=v(i),w=o(i,B),i.forEach(c),I=v(e);for(let t=0;t<z.length;t+=1)z[t].l(e);D=v(e),e.forEach(c),this.h()},h(){i(a,"scope","row"),i(a,"class","small text-muted"),i($,"scope","row"),i($,"class","small text-muted")},m(t,e){f(t,s,e),h(s,a),h(a,m),h(s,g),h(s,$),E(V,$,null),h($,k),h($,w),h(s,I);for(let t=0;t<z.length;t+=1)z[t].m(s,null);h(s,D),T=!0},p(t,a){if((!T||3&a)&&B!==(B=t[3].name+"")&&u(w,B),3&a){let e;for(H=t[3].notes,e=0;e<H.length;e+=1){const l=X(t,H,e);z[e]?z[e].p(l,a):(z[e]=st(l),z[e].c(),z[e].m(s,D))}for(;e<z.length;e+=1)z[e].d(1);z.length=H.length}},i(t){T||(A(V.$$.fragment,t),T=!0)},o(t){j(V.$$.fragment,t),T=!1},d(t){t&&c(s),O(V),d(z,t)}}}function et(t){let s,a,m,u,g,b,y,E,$,O,D,T,x,B,V=t[1].parts[t[0].selections.part].tracks[t[0].selections.track].slots,H=[];for(let s=0;s<V.length;s+=1)H[s]=tt(_(t,V,s));let C=t[1].parts[t[0].selections.part].tracks,z=[];for(let s=0;s<C.length;s+=1)z[s]=at(Z(t,C,s));const P=t=>j(z[t],1,1,()=>{z[t]=null});return{c(){s=e("div"),a=e("div"),m=e("table"),u=e("thead"),g=e("tr"),b=e("th"),y=l("#"),E=p(),$=e("th"),O=l("Instrument Configuration"),D=p();for(let t=0;t<H.length;t+=1)H[t].c();T=p(),x=e("tbody");for(let t=0;t<z.length;t+=1)z[t].c();this.h()},l(t){s=n(t,"DIV",{class:!0});var e=r(s);a=n(e,"DIV",{class:!0});var l=r(a);m=n(l,"TABLE",{class:!0});var i=r(m);u=n(i,"THEAD",{});var f=r(u);g=n(f,"TR",{});var h=r(g);b=n(h,"TH",{scope:!0,class:!0});var d=r(b);y=o(d,"#"),d.forEach(c),E=v(h),$=n(h,"TH",{scope:!0,class:!0,style:!0});var p=r($);O=o(p,"Instrument Configuration"),p.forEach(c),D=v(h);for(let t=0;t<H.length;t+=1)H[t].l(h);h.forEach(c),f.forEach(c),T=v(i),x=n(i,"TBODY",{});var A=r(x);for(let t=0;t<z.length;t+=1)z[t].l(A);A.forEach(c),i.forEach(c),l.forEach(c),e.forEach(c),this.h()},h(){i(b,"scope","col"),i(b,"class","small text-muted"),i($,"scope","col"),i($,"class","small text-muted"),k($,"min-width","16rem"),i(m,"class","table table-sm table-dark rounded"),i(a,"class","table-responsive rounded"),i(s,"class","bg-dark rounded")},m(t,e){f(t,s,e),h(s,a),h(a,m),h(m,u),h(u,g),h(g,b),h(b,y),h(g,E),h(g,$),h($,O),h(g,D);for(let t=0;t<H.length;t+=1)H[t].m(g,null);h(m,T),h(m,x);for(let t=0;t<z.length;t+=1)z[t].m(x,null);B=!0},p(t,[s]){if(3&s){let a;for(V=t[1].parts[t[0].selections.part].tracks[t[0].selections.track].slots,a=0;a<V.length;a+=1){const e=_(t,V,a);H[a]?H[a].p(e,s):(H[a]=tt(e),H[a].c(),H[a].m(g,null))}for(;a<H.length;a+=1)H[a].d(1);H.length=V.length}if(3&s){let a;for(C=t[1].parts[t[0].selections.part].tracks,a=0;a<C.length;a+=1){const e=Z(t,C,a);z[a]?(z[a].p(e,s),A(z[a],1)):(z[a]=at(e),z[a].c(),A(z[a],1),z[a].m(x,null))}for(w(),a=C.length;a<z.length;a+=1)P(a);I()}},i(t){if(!B){for(let t=0;t<C.length;t+=1)A(z[t]);B=!0}},o(t){z=z.filter(Boolean);for(let t=0;t<z.length;t+=1)j(z[t]);B=!1},d(t){t&&c(s),d(H,t),d(z,t)}}}function lt(t,s,a){let{program:e={}}=s,{song:l={}}=s;return t.$set=(t=>{"program"in t&&a(0,e=t.program),"song"in t&&a(1,l=t.song)}),[e,l,t=>{a(1,t.enabled=!t.enabled,l,a(0,e))}]}class nt extends t{constructor(t){super(),s(this,t,lt,et,a,{program:0,song:1})}}function rt(t){let s,a,m,u,g,d,$,k,w,I,D,V,H,C,z,P,M,R,Q,F,S,U,Y,q,K,N;function G(s){t[3].call(null,s)}function J(s){t[4].call(null,s)}let X={};void 0!==t[0]&&(X.program=t[0]),void 0!==t[1]&&(X.song=t[1]);const Z=new L({props:X});function _(s){t[5].call(null,s)}function tt(s){t[6].call(null,s)}T.push(()=>x(Z,"program",G)),T.push(()=>x(Z,"song",J));let st={};void 0!==t[0]&&(st.program=t[0]),void 0!==t[1]&&(st.song=t[1]);const at=new W({props:st});function et(s){t[7].call(null,s)}function lt(s){t[8].call(null,s)}T.push(()=>x(at,"program",_)),T.push(()=>x(at,"song",tt));let rt={};void 0!==t[0]&&(rt.program=t[0]),void 0!==t[1]&&(rt.song=t[1]);const ot=new nt({props:rt});return T.push(()=>x(ot,"program",et)),T.push(()=>x(ot,"song",lt)),{c(){s=e("div"),a=e("div"),m=e("div"),b(Z.$$.fragment),d=p(),$=e("div"),k=e("div"),b(at.$$.fragment),D=p(),V=e("div"),H=e("div"),b(ot.$$.fragment),P=p(),M=e("div"),R=e("div"),Q=l("..."),F=p(),S=e("div"),U=l("..."),Y=p(),q=e("div"),K=l("..."),this.h()},l(t){s=n(t,"DIV",{class:!0});var e=r(s);a=n(e,"DIV",{class:!0});var l=r(a);m=n(l,"DIV",{class:!0});var i=r(m);y(Z.$$.fragment,i),i.forEach(c),l.forEach(c),d=v(e),$=n(e,"DIV",{class:!0});var f=r($);k=n(f,"DIV",{class:!0});var h=r(k);y(at.$$.fragment,h),h.forEach(c),f.forEach(c),D=v(e),V=n(e,"DIV",{class:!0});var u=r(V);H=n(u,"DIV",{class:!0});var g=r(H);y(ot.$$.fragment,g),g.forEach(c),u.forEach(c),P=v(e),M=n(e,"DIV",{class:!0});var p=r(M);R=n(p,"DIV",{class:!0});var b=r(R);Q=o(b,"..."),b.forEach(c),F=v(p),S=n(p,"DIV",{class:!0});var E=r(S);U=o(E,"..."),E.forEach(c),Y=v(p),q=n(p,"DIV",{class:!0});var A=r(q);K=o(A,"..."),A.forEach(c),p.forEach(c),e.forEach(c),this.h()},h(){i(m,"class","col-12 pb-2"),i(a,"class","row"),i(k,"class","col-12 pb-2"),i($,"class","row"),i(H,"class","col-12 pb-2"),i(V,"class","row"),i(R,"class","col pb-3"),i(S,"class","col pb-3"),i(q,"class","col pb-3"),i(M,"class","row"),i(s,"class","container-fluid")},m(t,e){f(t,s,e),h(s,a),h(a,m),E(Z,m,null),h(s,d),h(s,$),h($,k),E(at,k,null),h(s,D),h(s,V),h(V,H),E(ot,H,null),h(s,P),h(s,M),h(M,R),h(R,Q),h(M,F),h(M,S),h(S,U),h(M,Y),h(M,q),h(q,K),N=!0},p(t,[s]){const a={};!u&&1&s&&(u=!0,a.program=t[0],B(()=>u=!1)),!g&&2&s&&(g=!0,a.song=t[1],B(()=>g=!1)),Z.$set(a);const e={};!w&&1&s&&(w=!0,e.program=t[0],B(()=>w=!1)),!I&&2&s&&(I=!0,e.song=t[1],B(()=>I=!1)),at.$set(e);const l={};!C&&1&s&&(C=!0,l.program=t[0],B(()=>C=!1)),!z&&2&s&&(z=!0,l.song=t[1],B(()=>z=!1)),ot.$set(l)},i(t){N||(A(Z.$$.fragment,t),A(at.$$.fragment,t),A(ot.$$.fragment,t),N=!0)},o(t){j(Z.$$.fragment,t),j(at.$$.fragment,t),j(ot.$$.fragment,t),N=!1},d(t){t&&c(s),O(Z),O(at),O(ot)}}}function ot(t,s,a){let e=!1,l={defaults:{slot:{enabled:!1},note:{instrument:"piano",note:"C4",duration:"16n"}},selections:{part:3,track:0,note:0}},n={configuration:{name:"",author:"",bpm:160,parts:4,beats:4},parts:[{name:"Intro",size:64,tracks:[{name:"Initial",slots:Array(64).fill(1).map(t=>Object.assign({},l.defaults.slot)),notes:Array(64).fill(1).map(t=>Object.assign({},l.defaults.note))},{name:"Big Bassline",slots:Array(64).fill(1).map(t=>Object.assign({},l.defaults.slot)),notes:Array(64).fill(1).map(t=>Object.assign({},l.defaults.note))}]},{name:"Verse",size:64,tracks:[{name:"Beat",slots:Array(64).fill(1).map(t=>Object.assign({},l.defaults.slot)),notes:Array(64).fill(1).map(t=>Object.assign({},l.defaults.note))},{name:"Quiet Bassline",slots:Array(64).fill(1).map(t=>Object.assign({},l.defaults.slot)),notes:Array(64).fill(1).map(t=>Object.assign({},l.defaults.note))},{name:"Quick Piano",slots:Array(64).fill(1).map(t=>Object.assign({},l.defaults.slot)),notes:Array(64).fill(1).map(t=>Object.assign({},l.defaults.note))}]},{name:"Choir",size:64,tracks:[{name:"Beat",slots:Array(64).fill(1).map(t=>Object.assign({},l.defaults.slot)),notes:Array(64).fill(1).map(t=>Object.assign({},l.defaults.note))},{name:"Bassline",slots:Array(64).fill(1).map(t=>Object.assign({},l.defaults.slot)),notes:Array(64).fill(1).map(t=>Object.assign({},l.defaults.note))},{name:"Piano",slots:Array(64).fill(1).map(t=>Object.assign({},l.defaults.slot)),notes:Array(64).fill(1).map(t=>Object.assign({},l.defaults.note))},{name:"Cello",slots:Array(64).fill(1).map(t=>Object.assign({},l.defaults.slot)),notes:Array(64).fill(1).map(t=>Object.assign({},l.defaults.note))}]},{name:"Bridge",size:64,tracks:[{name:"Beat",slots:Array(64).fill(1).map(t=>Object.assign({},l.defaults.slot)),notes:Array(64).fill(1).map(t=>Object.assign({},l.defaults.note))},{name:"Bassline",slots:Array(64).fill(1).map(t=>Object.assign({},l.defaults.slot)),notes:Array(64).fill(1).map(t=>Object.assign({},l.defaults.note))},{name:"Quiet Piano",slots:Array(64).fill(1).map(t=>Object.assign({},l.defaults.slot)),notes:Array(64).fill(1).map(t=>Object.assign({},l.defaults.note))},{name:"Fast Piano",slots:Array(64).fill(1).map(t=>Object.assign({},l.defaults.slot)),notes:Array(64).fill(1).map(t=>Object.assign({},l.defaults.note))},{name:"Cello",slots:Array(64).fill(1).map(t=>Object.assign({},l.defaults.slot)),notes:Array(64).fill(1).map(t=>Object.assign({},l.defaults.note))}]},{name:"Choir",size:64,tracks:[{name:"Beat",slots:Array(64).fill(1).map(t=>Object.assign({},l.defaults.slot)),notes:Array(64).fill(1).map(t=>Object.assign({},l.defaults.note))},{name:"Bassline",slots:Array(64).fill(1).map(t=>Object.assign({},l.defaults.slot)),notes:Array(64).fill(1).map(t=>Object.assign({},l.defaults.note))},{name:"Piano",slots:Array(64).fill(1).map(t=>Object.assign({},l.defaults.slot)),notes:Array(64).fill(1).map(t=>Object.assign({},l.defaults.note))}]},{name:"Outro",size:64,tracks:[{name:"Beat",slots:Array(64).fill(1).map(t=>Object.assign({},l.defaults.note)),notes:Array(64).fill(l.defaults.note)},{name:"Piano",slots:Array(64).fill(1).map(t=>Object.assign({},l.defaults.note)),notes:Array(64).fill(l.defaults.note)}]}]};return V(()=>{}),H(()=>{e=!1}),[l,n,e,function(t){a(0,l=t)},function(t){a(1,n=t)},function(t){a(0,l=t)},function(t){a(1,n=t)},function(t){a(0,l=t)},function(t){a(1,n=t)}]}class ct extends t{constructor(t){super(),s(this,t,ot,rt,a,{})}}export{ct as S};
