import{S as s,i as e,s as t,e as l,t as a,h as n,c as o,a as r,f as c,j as i,d as f,k as m,D as h,b as g,l as u,m as d,g as p,n as v,u as b,r as E,v as k,w as y,x as w,y as I,z as O,A as $,B as D,K as A,L as x,T as j,U as V,V as T,E as B,O as C}from"./client.66f77e10.js";import{I as H}from"./Icon.4f79407b.js";function P(s,e,t){const l=s.slice();return l[3]=e[t],l[5]=t,l}function S(s){let e,t,v,b,E,k=s[3].name+"";function y(...e){return s[2](s[5],...e)}return{c(){e=l("li"),t=a(k),v=n(),this.h()},l(s){e=o(s,"LI",{class:!0,title:!0});var l=r(e);t=c(l,k),v=i(l),l.forEach(f),this.h()},h(){m(e,"class","list-group-item cursor-pointer select-none"),m(e,"title",b=s[0].help.messages["select-song-part"]),h(e,"bg-dark-light",s[0].selections.part==s[5]),h(e,"bg-dark",s[0].selections.part!=s[5]),h(e,"text-secondary",s[0].selections.part!==s[5]),h(e,"text-warning",s[0].selections.part==s[5])},m(s,l,a){g(s,e,l),u(e,t),u(e,v),a&&E(),E=d(e,"click",y)},p(l,a){s=l,2&a&&k!==(k=s[3].name+"")&&p(t,k),1&a&&b!==(b=s[0].help.messages["select-song-part"])&&m(e,"title",b),1&a&&h(e,"bg-dark-light",s[0].selections.part==s[5]),1&a&&h(e,"bg-dark",s[0].selections.part!=s[5]),1&a&&h(e,"text-secondary",s[0].selections.part!==s[5]),1&a&&h(e,"text-warning",s[0].selections.part==s[5])},d(s){s&&f(e),E()}}}function z(s){let e,t=s[1].parts,a=[];for(let e=0;e<t.length;e+=1)a[e]=S(P(s,t,e));return{c(){e=l("ul");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){e=o(s,"UL",{class:!0});var t=r(e);for(let s=0;s<a.length;s+=1)a[s].l(t);t.forEach(f),this.h()},h(){m(e,"class","list-group list-group-horizontal")},m(s,t){g(s,e,t);for(let s=0;s<a.length;s+=1)a[s].m(e,null)},p(s,[l]){if(3&l){let n;for(t=s[1].parts,n=0;n<t.length;n+=1){const o=P(s,t,n);a[n]?a[n].p(o,l):(a[n]=S(o),a[n].c(),a[n].m(e,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=t.length}},i:v,o:v,d(s){s&&f(e),b(a,s)}}}function N(s,e,t){let{program:l}=e,{song:a}=e;return s.$set=(s=>{"program"in s&&t(0,l=s.program),"song"in s&&t(1,a=s.song)}),[l,a,s=>{t(0,l.selections.part=s,l),l.unselections.part.map(s=>t(0,l.selections[s]=0,l))}]}class J extends s{constructor(s){super(),e(this,s,N,z,t,{program:0,song:1})}}function R(s,e,t){const l=s.slice();return l[12]=e[t],l[14]=t,l}function L(s,e,t){const l=s.slice();return l[9]=e[t],l[11]=t,l}function Q(s,e,t){const l=s.slice();return l[12]=e[t],l[14]=t,l}function U(s){let e,t,n,i=s[14]+1+"";function p(...e){return s[5](s[12],s[14],...e)}return{c(){e=l("th"),t=a(i),this.h()},l(s){e=o(s,"TH",{scope:!0,class:!0});var l=r(e);t=c(l,i),l.forEach(f),this.h()},h(){m(e,"scope","col"),m(e,"class","daw-form-table-header-cell selectable"),h(e,"active",s[0].selections.slot==s[14])},m(s,l,a){g(s,e,l),u(e,t),a&&n(),n=d(e,"click",p)},p(t,l){s=t,1&l&&h(e,"active",s[0].selections.slot==s[14])},d(s){s&&f(e),n()}}}function Y(s){let e,t,n,i,p,v;function b(...e){return s[8](s[12],s[14],s[11],...e)}return{c(){e=l("td"),t=l("div"),n=a(" "),this.h()},l(s){e=o(s,"TD",{class:!0,colspan:!0});var l=r(e);t=o(l,"DIV",{class:!0,title:!0});var a=r(t);n=c(a," "),a.forEach(f),l.forEach(f),this.h()},h(){m(t,"class","daw-form-table-cell-selector selectable"),m(t,"title",i=s[0].help.messages["activate-music"]),h(t,"active",s[12].enabled),m(e,"class","daw-form-table-cell"),m(e,"colspan",p=1)},m(s,l,a){g(s,e,l),u(e,t),u(t,n),a&&v(),v=d(t,"click",b)},p(e,l){s=e,1&l&&i!==(i=s[0].help.messages["activate-music"])&&m(t,"title",i),3&l&&h(t,"active",s[12].enabled)},d(s){s&&f(e),v()}}}function F(s){let e,t,v,k,y,w,I,O,$,D=s[11]+1+"",A=s[9].name+"";function x(...e){return s[6](s[11],...e)}function j(...e){return s[7](s[11],...e)}let V=s[9].slots,T=[];for(let e=0;e<V.length;e+=1)T[e]=Y(R(s,V,e));return{c(){e=l("tr"),t=l("th"),v=a(D),k=n(),y=l("th"),w=a(A),I=n();for(let s=0;s<T.length;s+=1)T[s].c();O=n(),this.h()},l(s){e=o(s,"TR",{class:!0});var l=r(e);t=o(l,"TH",{scope:!0,class:!0});var a=r(t);v=c(a,D),a.forEach(f),k=i(l),y=o(l,"TH",{scope:!0,class:!0});var n=r(y);w=c(n,A),n.forEach(f),I=i(l);for(let s=0;s<T.length;s+=1)T[s].l(l);O=i(l),l.forEach(f),this.h()},h(){m(t,"scope","row"),m(t,"class","daw-form-table-cell selectable"),h(t,"active",s[0].selections.track==s[11]),m(y,"scope","row"),m(y,"class","daw-form-table-cell selectable text-left"),h(y,"active",s[0].selections.track==s[11]),m(e,"class","daw-form-table-row")},m(s,l,a){g(s,e,l),u(e,t),u(t,v),u(e,k),u(e,y),u(y,w),u(e,I);for(let s=0;s<T.length;s+=1)T[s].m(e,null);u(e,O),a&&E($),$=[d(t,"click",x),d(y,"click",j)]},p(l,a){if(s=l,1&a&&h(t,"active",s[0].selections.track==s[11]),3&a&&A!==(A=s[9].name+"")&&p(w,A),1&a&&h(y,"active",s[0].selections.track==s[11]),19&a){let t;for(V=s[9].slots,t=0;t<V.length;t+=1){const l=R(s,V,t);T[t]?T[t].p(l,a):(T[t]=Y(l),T[t].c(),T[t].m(e,O))}for(;t<T.length;t+=1)T[t].d(1);T.length=V.length}},d(s){s&&f(e),b(T,s),E($)}}}function G(s){let e,t,h,d,p,E,y,w,I,O,$,D,A,x=s[1].parts[s[0].selections.part].tracks[s[0].selections.track].slots,j=[];for(let e=0;e<x.length;e+=1)j[e]=U(Q(s,x,e));let V=s[1].parts[s[0].selections.part].tracks,T=[];for(let e=0;e<V.length;e+=1)T[e]=F(L(s,V,e));return{c(){e=l("div"),t=l("div"),h=l("table"),d=l("thead"),p=l("tr"),E=l("th"),y=a("#"),w=n(),I=l("th"),O=a("Track Description"),$=n();for(let s=0;s<j.length;s+=1)j[s].c();D=n(),A=l("tbody");for(let s=0;s<T.length;s+=1)T[s].c();this.h()},l(s){e=o(s,"DIV",{class:!0});var l=r(e);t=o(l,"DIV",{class:!0});var a=r(t);h=o(a,"TABLE",{class:!0});var n=r(h);d=o(n,"THEAD",{});var m=r(d);p=o(m,"TR",{});var g=r(p);E=o(g,"TH",{scope:!0,class:!0});var u=r(E);y=c(u,"#"),u.forEach(f),w=i(g),I=o(g,"TH",{scope:!0,class:!0,style:!0});var v=r(I);O=c(v,"Track Description"),v.forEach(f),$=i(g);for(let s=0;s<j.length;s+=1)j[s].l(g);g.forEach(f),m.forEach(f),D=i(n),A=o(n,"TBODY",{});var b=r(A);for(let s=0;s<T.length;s+=1)T[s].l(b);b.forEach(f),n.forEach(f),a.forEach(f),l.forEach(f),this.h()},h(){m(E,"scope","col"),m(E,"class","daw-form-table-header-cell"),m(I,"scope","col"),m(I,"class","daw-form-table-header-cell"),k(I,"min-width","16rem"),m(h,"class","daw-form-table table table-sm table-dark text-light"),m(t,"class","daw-form-table-container table-responsive"),m(e,"class","daw-form")},m(s,l){g(s,e,l),u(e,t),u(t,h),u(h,d),u(d,p),u(p,E),u(E,y),u(p,w),u(p,I),u(I,O),u(p,$);for(let s=0;s<j.length;s+=1)j[s].m(p,null);u(h,D),u(h,A);for(let s=0;s<T.length;s+=1)T[s].m(A,null)},p(s,[e]){if(11&e){let t;for(x=s[1].parts[s[0].selections.part].tracks[s[0].selections.track].slots,t=0;t<x.length;t+=1){const l=Q(s,x,t);j[t]?j[t].p(l,e):(j[t]=U(l),j[t].c(),j[t].m(p,null))}for(;t<j.length;t+=1)j[t].d(1);j.length=x.length}if(23&e){let t;for(V=s[1].parts[s[0].selections.part].tracks,t=0;t<V.length;t+=1){const l=L(s,V,t);T[t]?T[t].p(l,e):(T[t]=F(l),T[t].c(),T[t].m(A,null))}for(;t<T.length;t+=1)T[t].d(1);T.length=V.length}},i:v,o:v,d(s){s&&f(e),b(j,s),b(T,s)}}}function K(s,e,t){let{program:l={}}=e,{song:a={}}=e;function n({trackIndex:s}){t(0,l.selections.track=s,l)}function o({slot:s,slotIndex:e}){t(0,l.selections.slot=e,l)}function r({slot:s,slotIndex:e,trackIndex:a}){s.enabled=!s.enabled,t(0,l.selections.slot=e,l),t(0,l.selections.track=a,l)}return s.$set=(s=>{"program"in s&&t(0,l=s.program),"song"in s&&t(1,a=s.song)}),[l,a,n,o,r,(s,e)=>o({slot:s,slotIndex:e}),s=>n({trackIndex:s}),s=>n({trackIndex:s}),(s,e,t)=>r({slot:s,slotIndex:e,trackIndex:t})]}class W extends s{constructor(s){super(),e(this,s,K,G,t,{program:0,song:1})}}function q(s,e,t){const l=s.slice();return l[6]=e[t],l[5]=t,l}function M(s,e,t){const l=s.slice();return l[3]=e[t],l[5]=t,l}function X(s,e,t){const l=s.slice();return l[8]=e[t],l[5]=t,l}function Z(s){let e,t,n=s[5]+1+"";return{c(){e=l("th"),t=a(n),this.h()},l(s){e=o(s,"TH",{scope:!0,class:!0});var l=r(e);t=c(l,n),l.forEach(f),this.h()},h(){m(e,"scope","col"),m(e,"class","small text-muted text-center")},m(s,l){g(s,e,l),u(e,t)},p:v,d(s){s&&f(e)}}}function _(s){let e,t,n,i;function p(...e){return s[2](s[6],...e)}return{c(){e=l("td"),t=l("div"),n=a(" "),this.h()},l(s){e=o(s,"TD",{});var l=r(e);t=o(l,"DIV",{class:!0,style:!0});var a=r(t);n=c(a," "),a.forEach(f),l.forEach(f),this.h()},h(){m(t,"class","rounded"),k(t,"min-width","2rem"),k(t,"user-select","none"),h(t,"bg-success",s[6].enabled),h(t,"bg-secondary",!s[6].enabled),h(t,"shadow",!s[6].enabled)},m(s,l,a){g(s,e,l),u(e,t),u(t,n),a&&i(),i=d(t,"click",p)},p(e,l){s=e,3&l&&h(t,"bg-success",s[6].enabled),3&l&&h(t,"bg-secondary",!s[6].enabled),3&l&&h(t,"shadow",!s[6].enabled)},d(s){s&&f(e),i()}}}function ss(s){let e,t,h,d,v,E,k,A,x,j,V=s[5]+1+"",T=s[3].instrument+"";const B=new H({props:{name:"gear",color:"warning"}});let C=s[3].notes,P=[];for(let e=0;e<C.length;e+=1)P[e]=_(q(s,C,e));return{c(){e=l("tr"),t=l("th"),h=a(V),d=n(),v=l("th"),y(B.$$.fragment),E=n(),k=a(T),A=n();for(let s=0;s<P.length;s+=1)P[s].c();x=n(),this.h()},l(s){e=o(s,"TR",{});var l=r(e);t=o(l,"TH",{scope:!0,class:!0});var a=r(t);h=c(a,V),a.forEach(f),d=i(l),v=o(l,"TH",{scope:!0,class:!0});var n=r(v);w(B.$$.fragment,n),E=i(n),k=c(n,T),n.forEach(f),A=i(l);for(let s=0;s<P.length;s+=1)P[s].l(l);x=i(l),l.forEach(f),this.h()},h(){m(t,"scope","row"),m(t,"class","small text-muted"),m(v,"scope","row"),m(v,"class","small text-muted")},m(s,l){g(s,e,l),u(e,t),u(t,h),u(e,d),u(e,v),I(B,v,null),u(v,E),u(v,k),u(e,A);for(let s=0;s<P.length;s+=1)P[s].m(e,null);u(e,x),j=!0},p(s,t){if((!j||3&t)&&T!==(T=s[3].instrument+"")&&p(k,T),3&t){let l;for(C=s[3].notes,l=0;l<C.length;l+=1){const a=q(s,C,l);P[l]?P[l].p(a,t):(P[l]=_(a),P[l].c(),P[l].m(e,x))}for(;l<P.length;l+=1)P[l].d(1);P.length=C.length}},i(s){j||(O(B.$$.fragment,s),j=!0)},o(s){$(B.$$.fragment,s),j=!1},d(s){s&&f(e),D(B),b(P,s)}}}function es(s){let e,t,h,d,p,v,E,y,w,I,D,j,V,T,B=s[1].parts[s[0].selections.part].tracks[s[0].selections.track].melodies[0].notes,C=[];for(let e=0;e<B.length;e+=1)C[e]=Z(X(s,B,e));let H=s[1].parts[s[0].selections.part].tracks[s[0].selections.track].melodies,P=[];for(let e=0;e<H.length;e+=1)P[e]=ss(M(s,H,e));const S=s=>$(P[s],1,1,()=>{P[s]=null});return{c(){e=l("div"),t=l("div"),h=l("table"),d=l("thead"),p=l("tr"),v=l("th"),E=a("#"),y=n(),w=l("th"),I=a("Instrument Configuration"),D=n();for(let s=0;s<C.length;s+=1)C[s].c();j=n(),V=l("tbody");for(let s=0;s<P.length;s+=1)P[s].c();this.h()},l(s){e=o(s,"DIV",{class:!0});var l=r(e);t=o(l,"DIV",{class:!0});var a=r(t);h=o(a,"TABLE",{class:!0});var n=r(h);d=o(n,"THEAD",{});var m=r(d);p=o(m,"TR",{});var g=r(p);v=o(g,"TH",{scope:!0,class:!0});var u=r(v);E=c(u,"#"),u.forEach(f),y=i(g),w=o(g,"TH",{scope:!0,class:!0,style:!0});var b=r(w);I=c(b,"Instrument Configuration"),b.forEach(f),D=i(g);for(let s=0;s<C.length;s+=1)C[s].l(g);g.forEach(f),m.forEach(f),j=i(n),V=o(n,"TBODY",{});var k=r(V);for(let s=0;s<P.length;s+=1)P[s].l(k);k.forEach(f),n.forEach(f),a.forEach(f),l.forEach(f),this.h()},h(){m(v,"scope","col"),m(v,"class","small text-muted"),m(w,"scope","col"),m(w,"class","small text-muted"),k(w,"min-width","16rem"),m(h,"class","table table-sm table-dark rounded"),m(t,"class","table-responsive rounded"),m(e,"class","bg-dark rounded")},m(s,l){g(s,e,l),u(e,t),u(t,h),u(h,d),u(d,p),u(p,v),u(v,E),u(p,y),u(p,w),u(w,I),u(p,D);for(let s=0;s<C.length;s+=1)C[s].m(p,null);u(h,j),u(h,V);for(let s=0;s<P.length;s+=1)P[s].m(V,null);T=!0},p(s,[e]){if(3&e){let t;for(B=s[1].parts[s[0].selections.part].tracks[s[0].selections.track].melodies[0].notes,t=0;t<B.length;t+=1){const l=X(s,B,t);C[t]?C[t].p(l,e):(C[t]=Z(l),C[t].c(),C[t].m(p,null))}for(;t<C.length;t+=1)C[t].d(1);C.length=B.length}if(3&e){let t;for(H=s[1].parts[s[0].selections.part].tracks[s[0].selections.track].melodies,t=0;t<H.length;t+=1){const l=M(s,H,t);P[t]?(P[t].p(l,e),O(P[t],1)):(P[t]=ss(l),P[t].c(),O(P[t],1),P[t].m(V,null))}for(A(),t=H.length;t<P.length;t+=1)S(t);x()}},i(s){if(!T){for(let s=0;s<H.length;s+=1)O(P[s]);T=!0}},o(s){P=P.filter(Boolean);for(let s=0;s<P.length;s+=1)$(P[s]);T=!1},d(s){s&&f(e),b(C,s),b(P,s)}}}function ts(s,e,t){let{program:l={}}=e,{song:a={}}=e;return s.$set=(s=>{"program"in s&&t(0,l=s.program),"song"in s&&t(1,a=s.song)}),[l,a,s=>{t(1,s.enabled=!s.enabled,a,t(0,l))}]}class ls extends s{constructor(s){super(),e(this,s,ts,es,t,{program:0,song:1})}}function as(s){let e,t=s[0].help.messages[s[0].help.message]+"";return{c(){e=a(t)},l(s){e=c(s,t)},m(s,t){g(s,e,t)},p(s,l){1&l&&t!==(t=s[0].help.messages[s[0].help.message]+"")&&p(e,t)},d(s){s&&f(e)}}}function ns(s){let e,t,h,d,v,b,E,A,x,B,C,H,P,S,z,N,R,L,Q,U,Y,F,G,K,q,M,X,Z,_,ss,es,ts,ns,os,rs,cs,is,fs,ms,hs,gs,us,ds,ps,vs,bs,Es,ks,ys,ws,Is,Os,$s,Ds,As=s[0].selections.part+"",xs=s[0].selections.track+"",js=s[0].selections.slot+"",Vs=s[0].selections.note+"",Ts=JSON.stringify(s[0],null,"  ")+"",Bs=JSON.stringify(s[1],null,"  ")+"",Cs=s[0].help.messages[s[0].help.message]&&as(s);function Hs(e){s[4].call(null,e)}function Ps(e){s[5].call(null,e)}let Ss={};void 0!==s[0]&&(Ss.program=s[0]),void 0!==s[1]&&(Ss.song=s[1]);const zs=new J({props:Ss});function Ns(e){s[6].call(null,e)}function Js(e){s[7].call(null,e)}j.push(()=>V(zs,"program",Hs)),j.push(()=>V(zs,"song",Ps));let Rs={};void 0!==s[0]&&(Rs.program=s[0]),void 0!==s[1]&&(Rs.song=s[1]);const Ls=new W({props:Rs});function Qs(e){s[8].call(null,e)}function Us(e){s[9].call(null,e)}j.push(()=>V(Ls,"program",Ns)),j.push(()=>V(Ls,"song",Js));let Ys={};void 0!==s[0]&&(Ys.program=s[0]),void 0!==s[1]&&(Ys.song=s[1]);const Fs=new ls({props:Ys});return j.push(()=>V(Fs,"program",Qs)),j.push(()=>V(Fs,"song",Us)),{c(){e=l("div"),t=l("div"),h=l("div"),d=a("part:="),v=a(As),b=a(",\n      track:="),E=a(xs),A=a(",\n      slot:="),x=a(js),B=a(",\n      note:="),C=a(Vs),H=a(","),P=n(),S=l("div"),z=l("div"),N=l("div"),R=l("span"),Cs&&Cs.c(),L=n(),Q=l("div"),U=l("div"),y(zs.$$.fragment),G=n(),K=l("div"),q=l("div"),y(Ls.$$.fragment),Z=n(),_=l("div"),ss=l("div"),y(Fs.$$.fragment),ns=n(),os=l("div"),rs=l("div"),cs=a("..."),is=n(),fs=l("div"),ms=a("..."),hs=n(),gs=l("div"),us=a("..."),ds=n(),ps=l("div"),vs=l("div"),bs=l("code"),Es=l("pre"),ks=a(Ts),ys=n(),ws=l("div"),Is=l("code"),Os=l("pre"),$s=a(Bs),this.h()},l(s){e=o(s,"DIV",{class:!0});var l=r(e);t=o(l,"DIV",{class:!0});var a=r(t);h=o(a,"DIV",{class:!0});var n=r(h);d=c(n,"part:="),v=c(n,As),b=c(n,",\n      track:="),E=c(n,xs),A=c(n,",\n      slot:="),x=c(n,js),B=c(n,",\n      note:="),C=c(n,Vs),H=c(n,","),n.forEach(f),a.forEach(f),P=i(l),S=o(l,"DIV",{class:!0});var m=r(S);z=o(m,"DIV",{class:!0});var g=r(z);N=o(g,"DIV",{style:!0});var u=r(N);R=o(u,"SPAN",{class:!0});var p=r(R);Cs&&Cs.l(p),p.forEach(f),u.forEach(f),g.forEach(f),m.forEach(f),L=i(l),Q=o(l,"DIV",{class:!0});var k=r(Q);U=o(k,"DIV",{class:!0});var y=r(U);w(zs.$$.fragment,y),y.forEach(f),k.forEach(f),G=i(l),K=o(l,"DIV",{class:!0});var I=r(K);q=o(I,"DIV",{class:!0});var O=r(q);w(Ls.$$.fragment,O),O.forEach(f),I.forEach(f),Z=i(l),_=o(l,"DIV",{class:!0});var $=r(_);ss=o($,"DIV",{class:!0});var D=r(ss);w(Fs.$$.fragment,D),D.forEach(f),$.forEach(f),ns=i(l),os=o(l,"DIV",{class:!0});var j=r(os);rs=o(j,"DIV",{class:!0});var V=r(rs);cs=c(V,"..."),V.forEach(f),is=i(j),fs=o(j,"DIV",{class:!0});var T=r(fs);ms=c(T,"..."),T.forEach(f),hs=i(j),gs=o(j,"DIV",{class:!0});var J=r(gs);us=c(J,"..."),J.forEach(f),j.forEach(f),ds=i(l),ps=o(l,"DIV",{class:!0});var Y=r(ps);vs=o(Y,"DIV",{class:!0});var F=r(vs);bs=o(F,"CODE",{});var W=r(bs);Es=o(W,"PRE",{class:!0});var M=r(Es);ks=c(M,Ts),M.forEach(f),W.forEach(f),F.forEach(f),ys=i(Y),ws=o(Y,"DIV",{class:!0});var X=r(ws);Is=o(X,"CODE",{});var es=r(Is);Os=o(es,"PRE",{class:!0});var ts=r(Os);$s=c(ts,Bs),ts.forEach(f),es.forEach(f),X.forEach(f),Y.forEach(f),l.forEach(f),this.h()},h(){m(h,"class","col text-info"),m(t,"class","row"),m(R,"class","d-inline-block text-info small"),k(N,"min-height","2rem"),m(z,"class","col-12 pb-2"),m(S,"class","row"),m(U,"class","col-12 pb-2"),m(Q,"class","row"),m(q,"class","col-12 pb-2"),m(K,"class","row"),m(ss,"class","col-12 pb-2"),m(_,"class","row"),m(rs,"class","col pb-3"),m(fs,"class","col pb-3"),m(gs,"class","col pb-3"),m(os,"class","row"),m(Es,"class","text-info"),m(vs,"class","col"),m(Os,"class","text-warning"),m(ws,"class","col"),m(ps,"class","row"),m(e,"class","container-fluid")},m(s,l){g(s,e,l),u(e,t),u(t,h),u(h,d),u(h,v),u(h,b),u(h,E),u(h,A),u(h,x),u(h,B),u(h,C),u(h,H),u(e,P),u(e,S),u(S,z),u(z,N),u(N,R),Cs&&Cs.m(R,null),u(e,L),u(e,Q),u(Q,U),I(zs,U,null),u(e,G),u(e,K),u(K,q),I(Ls,q,null),u(e,Z),u(e,_),u(_,ss),I(Fs,ss,null),u(e,ns),u(e,os),u(os,rs),u(rs,cs),u(os,is),u(os,fs),u(fs,ms),u(os,hs),u(os,gs),u(gs,us),u(e,ds),u(e,ps),u(ps,vs),u(vs,bs),u(bs,Es),u(Es,ks),u(ps,ys),u(ps,ws),u(ws,Is),u(Is,Os),u(Os,$s),Ds=!0},p(s,[e]){(!Ds||1&e)&&As!==(As=s[0].selections.part+"")&&p(v,As),(!Ds||1&e)&&xs!==(xs=s[0].selections.track+"")&&p(E,xs),(!Ds||1&e)&&js!==(js=s[0].selections.slot+"")&&p(x,js),(!Ds||1&e)&&Vs!==(Vs=s[0].selections.note+"")&&p(C,Vs),s[0].help.messages[s[0].help.message]?Cs?Cs.p(s,e):((Cs=as(s)).c(),Cs.m(R,null)):Cs&&(Cs.d(1),Cs=null);const t={};!Y&&1&e&&(Y=!0,t.program=s[0],T(()=>Y=!1)),!F&&2&e&&(F=!0,t.song=s[1],T(()=>F=!1)),zs.$set(t);const l={};!M&&1&e&&(M=!0,l.program=s[0],T(()=>M=!1)),!X&&2&e&&(X=!0,l.song=s[1],T(()=>X=!1)),Ls.$set(l);const a={};!es&&1&e&&(es=!0,a.program=s[0],T(()=>es=!1)),!ts&&2&e&&(ts=!0,a.song=s[1],T(()=>ts=!1)),Fs.$set(a),(!Ds||1&e)&&Ts!==(Ts=JSON.stringify(s[0],null,"  ")+"")&&p(ks,Ts),(!Ds||2&e)&&Bs!==(Bs=JSON.stringify(s[1],null,"  ")+"")&&p($s,Bs)},i(s){Ds||(O(zs.$$.fragment,s),O(Ls.$$.fragment,s),O(Fs.$$.fragment,s),Ds=!0)},o(s){$(zs.$$.fragment,s),$(Ls.$$.fragment,s),$(Fs.$$.fragment,s),Ds=!1},d(s){s&&f(e),Cs&&Cs.d(),D(zs),D(Ls),D(Fs)}}}function os(s,e,t){let l=!1,a={help:{message:"welcome",messages:{none:"",welcome:"Welcome to the program!","activate-music":"Click to activate/deactivate music in this cell.","select-song-part":"Click to select the portion of a song you want to work on."}},defaults:{slot:{enabled:!1},note:{enabled:!1,note:"C4",duration:"16n"}},selections:{part:3,track:0,slot:0,note:0},unselections:{part:["track","slot","note"],track:["slot","note"],slot:["note"],note:[]}};function n(){const s=[{instrument:"Guitar",notes:Array(16).fill(1).map(s=>Object.assign({},a.defaults.note))},{instrument:"Piano",notes:Array(16).fill(1).map(s=>Object.assign({},a.defaults.note))},{instrument:"Saw",notes:Array(16).fill(1).map(s=>Object.assign({},a.defaults.note))}];return JSON.parse(JSON.stringify(s))}let o={configuration:{name:"",author:"",bpm:160,parts:4,beats:4},parts:[{name:"Intro",size:64,tracks:[{name:"Calm little melody.",slots:Array(32).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Big Bassline",slots:Array(32).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()}]},{name:"Verse",size:64,tracks:[{name:"Beat",slots:Array(32).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Quiet Bassline",slots:Array(32).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Quick Piano",slots:Array(32).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()}]},{name:"Chorus",size:64,tracks:[{name:"Beat",slots:Array(32).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Bassline",slots:Array(32).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Piano",slots:Array(32).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Cello",slots:Array(32).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()}]},{name:"Bridge",size:64,tracks:[{name:"Beat",slots:Array(32).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Bassline",slots:Array(32).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Quiet Piano",slots:Array(32).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Fast Piano",slots:Array(32).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Cello",slots:Array(32).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()}]},{name:"Chorus",size:64,tracks:[{name:"Beat",slots:Array(32).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Bassline",slots:Array(32).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Piano",slots:Array(32).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()}]},{name:"Outro",size:64,tracks:[{name:"Beat",slots:Array(32).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Beat",slots:Array(32).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Beat",slots:Array(32).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Beat",slots:Array(32).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Bassline",slots:Array(32).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Piano",slots:Array(32).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()}]}]};return B(()=>{}),C(()=>{l=!1}),[a,o,l,n,function(s){t(0,a=s)},function(s){t(1,o=s)},function(s){t(0,a=s)},function(s){t(1,o=s)},function(s){t(0,a=s)},function(s){t(1,o=s)}]}class rs extends s{constructor(s){super(),e(this,s,os,ns,t,{})}}export{rs as S};
