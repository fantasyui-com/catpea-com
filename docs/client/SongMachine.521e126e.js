import{S as s,a as e,s as t,f as l,t as a,g as n,h as o,j as r,c,k as i,e as f,l as h,F as m,b as d,m as g,n as u,d as p,o as v,v as b,r as E,w as k,x as y,y as w,z as I,A as $,B as O,C as D,I as A,J as j,N as x,V,W as T,X as B,G as C,D as H}from"./client.2e22984d.js";function P(s,e,t){const l=s.slice();return l[3]=e[t],l[5]=t,l}function S(s){let e,t,v,b,E,k=s[3].name+"";function y(...e){return s[2](s[5],...e)}return{c(){e=l("li"),t=a(k),v=n(),this.h()},l(s){e=o(s,"LI",{class:!0,title:!0});var l=r(e);t=c(l,k),v=i(l),l.forEach(f),this.h()},h(){h(e,"class","list-group-item cursor-pointer select-none"),h(e,"title",b=s[0].help.messages["select-song-part"]),m(e,"bg-dark-light",s[0].selections.part==s[5]),m(e,"bg-dark",s[0].selections.part!=s[5]),m(e,"text-secondary",s[0].selections.part!==s[5]),m(e,"text-warning",s[0].selections.part==s[5])},m(s,l,a){d(s,e,l),g(e,t),g(e,v),a&&E(),E=u(e,"click",y)},p(l,a){s=l,2&a&&k!==(k=s[3].name+"")&&p(t,k),1&a&&b!==(b=s[0].help.messages["select-song-part"])&&h(e,"title",b),1&a&&m(e,"bg-dark-light",s[0].selections.part==s[5]),1&a&&m(e,"bg-dark",s[0].selections.part!=s[5]),1&a&&m(e,"text-secondary",s[0].selections.part!==s[5]),1&a&&m(e,"text-warning",s[0].selections.part==s[5])},d(s){s&&f(e),E()}}}function z(s){let e,t=s[1].parts,a=[];for(let e=0;e<t.length;e+=1)a[e]=S(P(s,t,e));return{c(){e=l("ul");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){e=o(s,"UL",{class:!0});var t=r(e);for(let s=0;s<a.length;s+=1)a[s].l(t);t.forEach(f),this.h()},h(){h(e,"class","list-group list-group-horizontal")},m(s,t){d(s,e,t);for(let s=0;s<a.length;s+=1)a[s].m(e,null)},p(s,[l]){if(3&l){let n;for(t=s[1].parts,n=0;n<t.length;n+=1){const o=P(s,t,n);a[n]?a[n].p(o,l):(a[n]=S(o),a[n].c(),a[n].m(e,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=t.length}},i:v,o:v,d(s){s&&f(e),b(a,s)}}}function N(s,e,t){let{program:l}=e,{song:a}=e;return s.$set=(s=>{"program"in s&&t(0,l=s.program),"song"in s&&t(1,a=s.song)}),[l,a,s=>{t(0,l.selections.part=s,l),l.unselections.part.map(s=>t(0,l.selections[s]=0,l))}]}class J extends s{constructor(s){super(),e(this,s,N,z,t,{program:0,song:1})}}function R(s,e,t){const l=s.slice();return l[12]=e[t],l[14]=t,l}function L(s,e,t){const l=s.slice();return l[9]=e[t],l[11]=t,l}function Q(s,e,t){const l=s.slice();return l[12]=e[t],l[14]=t,l}function F(s){let e,t,n,i=s[14]+1+"";function p(...e){return s[5](s[12],s[14],...e)}return{c(){e=l("th"),t=a(i),this.h()},l(s){e=o(s,"TH",{scope:!0,class:!0});var l=r(e);t=c(l,i),l.forEach(f),this.h()},h(){h(e,"scope","col"),h(e,"class","daw-form-table-header-cell selectable"),m(e,"active",s[0].selections.slot==s[14])},m(s,l,a){d(s,e,l),g(e,t),a&&n(),n=u(e,"click",p)},p(t,l){s=t,1&l&&m(e,"active",s[0].selections.slot==s[14])},d(s){s&&f(e),n()}}}function G(s){let e,t,n,i,p,v;function b(...e){return s[8](s[12],s[14],s[11],...e)}return{c(){e=l("td"),t=l("div"),n=a(" "),this.h()},l(s){e=o(s,"TD",{class:!0,colspan:!0});var l=r(e);t=o(l,"DIV",{class:!0,title:!0});var a=r(t);n=c(a," "),a.forEach(f),l.forEach(f),this.h()},h(){h(t,"class","daw-form-table-cell-selector selectable"),h(t,"title",i=s[0].help.messages["activate-music"]),m(t,"active",s[12].enabled),h(e,"class","daw-form-table-cell text-center"),h(e,"colspan",p=1)},m(s,l,a){d(s,e,l),g(e,t),g(t,n),a&&v(),v=u(t,"click",b)},p(e,l){s=e,1&l&&i!==(i=s[0].help.messages["activate-music"])&&h(t,"title",i),3&l&&m(t,"active",s[12].enabled)},d(s){s&&f(e),v()}}}function W(s){let e,t,v,k,y,w,I,$,O,D=s[11]+1+"",A=s[9].name+"";function j(...e){return s[6](s[11],...e)}function x(...e){return s[7](s[11],...e)}let V=s[9].slots,T=[];for(let e=0;e<V.length;e+=1)T[e]=G(R(s,V,e));return{c(){e=l("tr"),t=l("th"),v=a(D),k=n(),y=l("th"),w=a(A),I=n();for(let s=0;s<T.length;s+=1)T[s].c();$=n(),this.h()},l(s){e=o(s,"TR",{class:!0});var l=r(e);t=o(l,"TH",{scope:!0,class:!0});var a=r(t);v=c(a,D),a.forEach(f),k=i(l),y=o(l,"TH",{scope:!0,class:!0});var n=r(y);w=c(n,A),n.forEach(f),I=i(l);for(let s=0;s<T.length;s+=1)T[s].l(l);$=i(l),l.forEach(f),this.h()},h(){h(t,"scope","row"),h(t,"class","daw-form-table-cell selectable"),m(t,"active",s[0].selections.track==s[11]),h(y,"scope","row"),h(y,"class","daw-form-table-cell selectable text-left"),m(y,"active",s[0].selections.track==s[11]),h(e,"class","daw-form-table-row")},m(s,l,a){d(s,e,l),g(e,t),g(t,v),g(e,k),g(e,y),g(y,w),g(e,I);for(let s=0;s<T.length;s+=1)T[s].m(e,null);g(e,$),a&&E(O),O=[u(t,"click",j),u(y,"click",x)]},p(l,a){if(s=l,1&a&&m(t,"active",s[0].selections.track==s[11]),3&a&&A!==(A=s[9].name+"")&&p(w,A),1&a&&m(y,"active",s[0].selections.track==s[11]),19&a){let t;for(V=s[9].slots,t=0;t<V.length;t+=1){const l=R(s,V,t);T[t]?T[t].p(l,a):(T[t]=G(l),T[t].c(),T[t].m(e,$))}for(;t<T.length;t+=1)T[t].d(1);T.length=V.length}},d(s){s&&f(e),b(T,s),E(O)}}}function Y(s){let e,t,m,u,p,E,y,w,I,$,O,D,A,j=s[1].parts[s[0].selections.part].tracks[s[0].selections.track].slots,x=[];for(let e=0;e<j.length;e+=1)x[e]=F(Q(s,j,e));let V=s[1].parts[s[0].selections.part].tracks,T=[];for(let e=0;e<V.length;e+=1)T[e]=W(L(s,V,e));return{c(){e=l("div"),t=l("div"),m=l("table"),u=l("thead"),p=l("tr"),E=l("th"),y=a("#"),w=n(),I=l("th"),$=a("Track Description"),O=n();for(let s=0;s<x.length;s+=1)x[s].c();D=n(),A=l("tbody");for(let s=0;s<T.length;s+=1)T[s].c();this.h()},l(s){e=o(s,"DIV",{class:!0});var l=r(e);t=o(l,"DIV",{class:!0});var a=r(t);m=o(a,"TABLE",{class:!0});var n=r(m);u=o(n,"THEAD",{});var h=r(u);p=o(h,"TR",{});var d=r(p);E=o(d,"TH",{scope:!0,class:!0});var g=r(E);y=c(g,"#"),g.forEach(f),w=i(d),I=o(d,"TH",{scope:!0,class:!0,style:!0});var v=r(I);$=c(v,"Track Description"),v.forEach(f),O=i(d);for(let s=0;s<x.length;s+=1)x[s].l(d);d.forEach(f),h.forEach(f),D=i(n),A=o(n,"TBODY",{});var b=r(A);for(let s=0;s<T.length;s+=1)T[s].l(b);b.forEach(f),n.forEach(f),a.forEach(f),l.forEach(f),this.h()},h(){h(E,"scope","col"),h(E,"class","daw-form-table-header-cell"),h(I,"scope","col"),h(I,"class","daw-form-table-header-cell"),k(I,"min-width","16rem"),h(m,"class","daw-form-table table table-sm table-dark text-light"),h(t,"class","daw-form-table-container table-responsive"),h(e,"class","daw-form")},m(s,l){d(s,e,l),g(e,t),g(t,m),g(m,u),g(u,p),g(p,E),g(E,y),g(p,w),g(p,I),g(I,$),g(p,O);for(let s=0;s<x.length;s+=1)x[s].m(p,null);g(m,D),g(m,A);for(let s=0;s<T.length;s+=1)T[s].m(A,null)},p(s,[e]){if(11&e){let t;for(j=s[1].parts[s[0].selections.part].tracks[s[0].selections.track].slots,t=0;t<j.length;t+=1){const l=Q(s,j,t);x[t]?x[t].p(l,e):(x[t]=F(l),x[t].c(),x[t].m(p,null))}for(;t<x.length;t+=1)x[t].d(1);x.length=j.length}if(23&e){let t;for(V=s[1].parts[s[0].selections.part].tracks,t=0;t<V.length;t+=1){const l=L(s,V,t);T[t]?T[t].p(l,e):(T[t]=W(l),T[t].c(),T[t].m(A,null))}for(;t<T.length;t+=1)T[t].d(1);T.length=V.length}},i:v,o:v,d(s){s&&f(e),b(x,s),b(T,s)}}}function U(s,e,t){let{program:l={}}=e,{song:a={}}=e;function n({trackIndex:s}){t(0,l.selections.track=s,l)}function o({slot:s,slotIndex:e}){t(0,l.selections.slot=e,l)}function r({slot:s,slotIndex:e,trackIndex:a}){s.enabled=!s.enabled,t(0,l.selections.slot=e,l),t(0,l.selections.track=a,l)}return s.$set=(s=>{"program"in s&&t(0,l=s.program),"song"in s&&t(1,a=s.song)}),[l,a,n,o,r,(s,e)=>o({slot:s,slotIndex:e}),s=>n({trackIndex:s}),s=>n({trackIndex:s}),(s,e,t)=>r({slot:s,slotIndex:e,trackIndex:t})]}class X extends s{constructor(s){super(),e(this,s,U,Y,t,{program:0,song:1})}}function q(s,e,t){const l=s.slice();return l[6]=e[t],l[5]=t,l}function K(s,e,t){const l=s.slice();return l[3]=e[t],l[5]=t,l}function M(s,e,t){const l=s.slice();return l[8]=e[t],l[5]=t,l}function Z(s){let e,t,n=s[5]+1+"";return{c(){e=l("th"),t=a(n),this.h()},l(s){e=o(s,"TH",{scope:!0,class:!0});var l=r(e);t=c(l,n),l.forEach(f),this.h()},h(){h(e,"scope","col"),h(e,"class","small text-muted text-center")},m(s,l){d(s,e,l),g(e,t)},p:v,d(s){s&&f(e)}}}function _(s){let e,t,n,i;function p(...e){return s[2](s[6],...e)}return{c(){e=l("td"),t=l("div"),n=a(" "),this.h()},l(s){e=o(s,"TD",{});var l=r(e);t=o(l,"DIV",{class:!0,style:!0});var a=r(t);n=c(a," "),a.forEach(f),l.forEach(f),this.h()},h(){h(t,"class","rounded"),k(t,"min-width","2rem"),k(t,"user-select","none"),m(t,"bg-success",s[6].enabled),m(t,"bg-secondary",!s[6].enabled),m(t,"shadow",!s[6].enabled)},m(s,l,a){d(s,e,l),g(e,t),g(t,n),a&&i(),i=u(t,"click",p)},p(e,l){s=e,3&l&&m(t,"bg-success",s[6].enabled),3&l&&m(t,"bg-secondary",!s[6].enabled),3&l&&m(t,"shadow",!s[6].enabled)},d(s){s&&f(e),i()}}}function ss(s){let e,t,m,u,v,E,k,A,j,V,T=s[5]+1+"",B=s[3].instrument+"";const C=new x({props:{name:"gear",color:"warning"}});let H=s[3].notes,P=[];for(let e=0;e<H.length;e+=1)P[e]=_(q(s,H,e));return{c(){e=l("tr"),t=l("th"),m=a(T),u=n(),v=l("th"),y(C.$$.fragment),E=n(),k=a(B),A=n();for(let s=0;s<P.length;s+=1)P[s].c();j=n(),this.h()},l(s){e=o(s,"TR",{});var l=r(e);t=o(l,"TH",{scope:!0,class:!0});var a=r(t);m=c(a,T),a.forEach(f),u=i(l),v=o(l,"TH",{scope:!0,class:!0});var n=r(v);w(C.$$.fragment,n),E=i(n),k=c(n,B),n.forEach(f),A=i(l);for(let s=0;s<P.length;s+=1)P[s].l(l);j=i(l),l.forEach(f),this.h()},h(){h(t,"scope","row"),h(t,"class","small text-muted"),h(v,"scope","row"),h(v,"class","small text-muted")},m(s,l){d(s,e,l),g(e,t),g(t,m),g(e,u),g(e,v),I(C,v,null),g(v,E),g(v,k),g(e,A);for(let s=0;s<P.length;s+=1)P[s].m(e,null);g(e,j),V=!0},p(s,t){if((!V||3&t)&&B!==(B=s[3].instrument+"")&&p(k,B),3&t){let l;for(H=s[3].notes,l=0;l<H.length;l+=1){const a=q(s,H,l);P[l]?P[l].p(a,t):(P[l]=_(a),P[l].c(),P[l].m(e,j))}for(;l<P.length;l+=1)P[l].d(1);P.length=H.length}},i(s){V||($(C.$$.fragment,s),V=!0)},o(s){O(C.$$.fragment,s),V=!1},d(s){s&&f(e),D(C),b(P,s)}}}function es(s){let e,t,m,u,p,v,E,y,w,I,D,x,V,T,B=s[1].parts[s[0].selections.part].tracks[s[0].selections.track].melodies[0].notes,C=[];for(let e=0;e<B.length;e+=1)C[e]=Z(M(s,B,e));let H=s[1].parts[s[0].selections.part].tracks[s[0].selections.track].melodies,P=[];for(let e=0;e<H.length;e+=1)P[e]=ss(K(s,H,e));const S=s=>O(P[s],1,1,()=>{P[s]=null});return{c(){e=l("div"),t=l("div"),m=l("table"),u=l("thead"),p=l("tr"),v=l("th"),E=a("#"),y=n(),w=l("th"),I=a("Instrument Configuration"),D=n();for(let s=0;s<C.length;s+=1)C[s].c();x=n(),V=l("tbody");for(let s=0;s<P.length;s+=1)P[s].c();this.h()},l(s){e=o(s,"DIV",{class:!0});var l=r(e);t=o(l,"DIV",{class:!0});var a=r(t);m=o(a,"TABLE",{class:!0});var n=r(m);u=o(n,"THEAD",{});var h=r(u);p=o(h,"TR",{});var d=r(p);v=o(d,"TH",{scope:!0,class:!0});var g=r(v);E=c(g,"#"),g.forEach(f),y=i(d),w=o(d,"TH",{scope:!0,class:!0,style:!0});var b=r(w);I=c(b,"Instrument Configuration"),b.forEach(f),D=i(d);for(let s=0;s<C.length;s+=1)C[s].l(d);d.forEach(f),h.forEach(f),x=i(n),V=o(n,"TBODY",{});var k=r(V);for(let s=0;s<P.length;s+=1)P[s].l(k);k.forEach(f),n.forEach(f),a.forEach(f),l.forEach(f),this.h()},h(){h(v,"scope","col"),h(v,"class","small text-muted"),h(w,"scope","col"),h(w,"class","small text-muted"),k(w,"min-width","16rem"),h(m,"class","table table-sm table-dark rounded"),h(t,"class","table-responsive rounded"),h(e,"class","bg-dark rounded")},m(s,l){d(s,e,l),g(e,t),g(t,m),g(m,u),g(u,p),g(p,v),g(v,E),g(p,y),g(p,w),g(w,I),g(p,D);for(let s=0;s<C.length;s+=1)C[s].m(p,null);g(m,x),g(m,V);for(let s=0;s<P.length;s+=1)P[s].m(V,null);T=!0},p(s,[e]){if(3&e){let t;for(B=s[1].parts[s[0].selections.part].tracks[s[0].selections.track].melodies[0].notes,t=0;t<B.length;t+=1){const l=M(s,B,t);C[t]?C[t].p(l,e):(C[t]=Z(l),C[t].c(),C[t].m(p,null))}for(;t<C.length;t+=1)C[t].d(1);C.length=B.length}if(3&e){let t;for(H=s[1].parts[s[0].selections.part].tracks[s[0].selections.track].melodies,t=0;t<H.length;t+=1){const l=K(s,H,t);P[t]?(P[t].p(l,e),$(P[t],1)):(P[t]=ss(l),P[t].c(),$(P[t],1),P[t].m(V,null))}for(A(),t=H.length;t<P.length;t+=1)S(t);j()}},i(s){if(!T){for(let s=0;s<H.length;s+=1)$(P[s]);T=!0}},o(s){P=P.filter(Boolean);for(let s=0;s<P.length;s+=1)O(P[s]);T=!1},d(s){s&&f(e),b(C,s),b(P,s)}}}function ts(s,e,t){let{program:l={}}=e,{song:a={}}=e;return s.$set=(s=>{"program"in s&&t(0,l=s.program),"song"in s&&t(1,a=s.song)}),[l,a,s=>{t(1,s.enabled=!s.enabled,a,t(0,l))}]}class ls extends s{constructor(s){super(),e(this,s,ts,es,t,{program:0,song:1})}}function as(s){let e,t=s[0].help.messages[s[0].help.message]+"";return{c(){e=a(t)},l(s){e=c(s,t)},m(s,t){d(s,e,t)},p(s,l){1&l&&t!==(t=s[0].help.messages[s[0].help.message]+"")&&p(e,t)},d(s){s&&f(e)}}}function ns(s){let e,t,m,u,v,b,E,A,j,x,C,H,P,S,z,N,R,L,Q,F,G,W,Y,U,q,K,M,Z,_,ss,es,ts,ns,os,rs,cs,is,fs,hs,ms,ds,gs,us,ps,vs,bs,Es,ks,ys,ws,Is,$s,Os,Ds,As=s[0].selections.part+"",js=s[0].selections.track+"",xs=s[0].selections.slot+"",Vs=s[0].selections.note+"",Ts=JSON.stringify(s[0],null,"  ")+"",Bs=JSON.stringify(s[1],null,"  ")+"",Cs=s[0].help.messages[s[0].help.message]&&as(s);function Hs(e){s[4].call(null,e)}function Ps(e){s[5].call(null,e)}let Ss={};void 0!==s[0]&&(Ss.program=s[0]),void 0!==s[1]&&(Ss.song=s[1]);const zs=new J({props:Ss});function Ns(e){s[6].call(null,e)}function Js(e){s[7].call(null,e)}V.push(()=>T(zs,"program",Hs)),V.push(()=>T(zs,"song",Ps));let Rs={};void 0!==s[0]&&(Rs.program=s[0]),void 0!==s[1]&&(Rs.song=s[1]);const Ls=new X({props:Rs});function Qs(e){s[8].call(null,e)}function Fs(e){s[9].call(null,e)}V.push(()=>T(Ls,"program",Ns)),V.push(()=>T(Ls,"song",Js));let Gs={};void 0!==s[0]&&(Gs.program=s[0]),void 0!==s[1]&&(Gs.song=s[1]);const Ws=new ls({props:Gs});return V.push(()=>T(Ws,"program",Qs)),V.push(()=>T(Ws,"song",Fs)),{c(){e=l("div"),t=l("div"),m=l("div"),u=a("part:="),v=a(As),b=a(",\n      track:="),E=a(js),A=a(",\n      slot:="),j=a(xs),x=a(",\n      note:="),C=a(Vs),H=a(","),P=n(),S=l("div"),z=l("div"),N=l("div"),R=l("span"),Cs&&Cs.c(),L=n(),Q=l("div"),F=l("div"),y(zs.$$.fragment),Y=n(),U=l("div"),q=l("div"),y(Ls.$$.fragment),Z=n(),_=l("div"),ss=l("div"),y(Ws.$$.fragment),ns=n(),os=l("div"),rs=l("div"),cs=a("..."),is=n(),fs=l("div"),hs=a("..."),ms=n(),ds=l("div"),gs=a("..."),us=n(),ps=l("div"),vs=l("div"),bs=l("code"),Es=l("pre"),ks=a(Ts),ys=n(),ws=l("div"),Is=l("code"),$s=l("pre"),Os=a(Bs),this.h()},l(s){e=o(s,"DIV",{class:!0});var l=r(e);t=o(l,"DIV",{class:!0});var a=r(t);m=o(a,"DIV",{class:!0});var n=r(m);u=c(n,"part:="),v=c(n,As),b=c(n,",\n      track:="),E=c(n,js),A=c(n,",\n      slot:="),j=c(n,xs),x=c(n,",\n      note:="),C=c(n,Vs),H=c(n,","),n.forEach(f),a.forEach(f),P=i(l),S=o(l,"DIV",{class:!0});var h=r(S);z=o(h,"DIV",{class:!0});var d=r(z);N=o(d,"DIV",{style:!0});var g=r(N);R=o(g,"SPAN",{class:!0});var p=r(R);Cs&&Cs.l(p),p.forEach(f),g.forEach(f),d.forEach(f),h.forEach(f),L=i(l),Q=o(l,"DIV",{class:!0});var k=r(Q);F=o(k,"DIV",{class:!0});var y=r(F);w(zs.$$.fragment,y),y.forEach(f),k.forEach(f),Y=i(l),U=o(l,"DIV",{class:!0});var I=r(U);q=o(I,"DIV",{class:!0});var $=r(q);w(Ls.$$.fragment,$),$.forEach(f),I.forEach(f),Z=i(l),_=o(l,"DIV",{class:!0});var O=r(_);ss=o(O,"DIV",{class:!0});var D=r(ss);w(Ws.$$.fragment,D),D.forEach(f),O.forEach(f),ns=i(l),os=o(l,"DIV",{class:!0});var V=r(os);rs=o(V,"DIV",{class:!0});var T=r(rs);cs=c(T,"..."),T.forEach(f),is=i(V),fs=o(V,"DIV",{class:!0});var B=r(fs);hs=c(B,"..."),B.forEach(f),ms=i(V),ds=o(V,"DIV",{class:!0});var J=r(ds);gs=c(J,"..."),J.forEach(f),V.forEach(f),us=i(l),ps=o(l,"DIV",{class:!0});var G=r(ps);vs=o(G,"DIV",{class:!0});var W=r(vs);bs=o(W,"CODE",{});var X=r(bs);Es=o(X,"PRE",{});var K=r(Es);ks=c(K,Ts),K.forEach(f),X.forEach(f),W.forEach(f),ys=i(G),ws=o(G,"DIV",{class:!0});var M=r(ws);Is=o(M,"CODE",{});var es=r(Is);$s=o(es,"PRE",{});var ts=r($s);Os=c(ts,Bs),ts.forEach(f),es.forEach(f),M.forEach(f),G.forEach(f),l.forEach(f),this.h()},h(){h(m,"class","col"),h(t,"class","row"),h(R,"class","d-inline-block small"),k(N,"min-height","2rem"),h(z,"class","col-12 pb-2"),h(S,"class","row"),h(F,"class","col-12 pb-2"),h(Q,"class","row"),h(q,"class","col-12 pb-2"),h(U,"class","row"),h(ss,"class","col-12 pb-2"),h(_,"class","row"),h(rs,"class","col pb-3"),h(fs,"class","col pb-3"),h(ds,"class","col pb-3"),h(os,"class","row"),h(vs,"class","col"),h(ws,"class","col"),h(ps,"class","row"),h(e,"class","container-fluid")},m(s,l){d(s,e,l),g(e,t),g(t,m),g(m,u),g(m,v),g(m,b),g(m,E),g(m,A),g(m,j),g(m,x),g(m,C),g(m,H),g(e,P),g(e,S),g(S,z),g(z,N),g(N,R),Cs&&Cs.m(R,null),g(e,L),g(e,Q),g(Q,F),I(zs,F,null),g(e,Y),g(e,U),g(U,q),I(Ls,q,null),g(e,Z),g(e,_),g(_,ss),I(Ws,ss,null),g(e,ns),g(e,os),g(os,rs),g(rs,cs),g(os,is),g(os,fs),g(fs,hs),g(os,ms),g(os,ds),g(ds,gs),g(e,us),g(e,ps),g(ps,vs),g(vs,bs),g(bs,Es),g(Es,ks),g(ps,ys),g(ps,ws),g(ws,Is),g(Is,$s),g($s,Os),Ds=!0},p(s,[e]){(!Ds||1&e)&&As!==(As=s[0].selections.part+"")&&p(v,As),(!Ds||1&e)&&js!==(js=s[0].selections.track+"")&&p(E,js),(!Ds||1&e)&&xs!==(xs=s[0].selections.slot+"")&&p(j,xs),(!Ds||1&e)&&Vs!==(Vs=s[0].selections.note+"")&&p(C,Vs),s[0].help.messages[s[0].help.message]?Cs?Cs.p(s,e):((Cs=as(s)).c(),Cs.m(R,null)):Cs&&(Cs.d(1),Cs=null);const t={};!G&&1&e&&(G=!0,t.program=s[0],B(()=>G=!1)),!W&&2&e&&(W=!0,t.song=s[1],B(()=>W=!1)),zs.$set(t);const l={};!K&&1&e&&(K=!0,l.program=s[0],B(()=>K=!1)),!M&&2&e&&(M=!0,l.song=s[1],B(()=>M=!1)),Ls.$set(l);const a={};!es&&1&e&&(es=!0,a.program=s[0],B(()=>es=!1)),!ts&&2&e&&(ts=!0,a.song=s[1],B(()=>ts=!1)),Ws.$set(a),(!Ds||1&e)&&Ts!==(Ts=JSON.stringify(s[0],null,"  ")+"")&&p(ks,Ts),(!Ds||2&e)&&Bs!==(Bs=JSON.stringify(s[1],null,"  ")+"")&&p(Os,Bs)},i(s){Ds||($(zs.$$.fragment,s),$(Ls.$$.fragment,s),$(Ws.$$.fragment,s),Ds=!0)},o(s){O(zs.$$.fragment,s),O(Ls.$$.fragment,s),O(Ws.$$.fragment,s),Ds=!1},d(s){s&&f(e),Cs&&Cs.d(),D(zs),D(Ls),D(Ws)}}}function os(s,e,t){let l=!1,a={help:{message:"welcome",messages:{none:"",welcome:"Welcome to the program!","activate-music":"Click to activate/deactivate music in this cell.","select-song-part":"Click to select the portion of a song you want to work on."}},defaults:{slot:{enabled:!1},note:{enabled:!1,note:"C4",duration:"16n"}},selections:{part:3,track:0,slot:0,note:0},unselections:{part:["track","slot","note"],track:["slot","note"],slot:["note"],note:[]}};function n(){const s=[{instrument:"Guitar",notes:Array(16).fill(1).map(s=>Object.assign({},a.defaults.note))},{instrument:"Piano",notes:Array(16).fill(1).map(s=>Object.assign({},a.defaults.note))},{instrument:"Saw",notes:Array(16).fill(1).map(s=>Object.assign({},a.defaults.note))}];return JSON.parse(JSON.stringify(s))}let o={configuration:{name:"",author:"",bpm:160,parts:4,beats:4},parts:[{name:"Intro",size:64,tracks:[{name:"Calm little melody.",slots:Array(8).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Big Bassline",slots:Array(8).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()}]},{name:"Verse",size:64,tracks:[{name:"Beat",slots:Array(8).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Quiet Bassline",slots:Array(8).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Quick Piano",slots:Array(8).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()}]},{name:"Chorus",size:64,tracks:[{name:"Beat",slots:Array(8).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Bassline",slots:Array(8).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Piano",slots:Array(8).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Cello",slots:Array(8).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()}]},{name:"Bridge",size:64,tracks:[{name:"Beat",slots:Array(8).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Bassline",slots:Array(8).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Quiet Piano",slots:Array(8).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Fast Piano",slots:Array(8).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Cello",slots:Array(8).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()}]},{name:"Chorus",size:64,tracks:[{name:"Beat",slots:Array(8).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Bassline",slots:Array(8).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Piano",slots:Array(8).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()}]},{name:"Outro",size:64,tracks:[{name:"Beat",slots:Array(8).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Beat",slots:Array(8).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Beat",slots:Array(8).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Beat",slots:Array(8).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Bassline",slots:Array(8).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()},{name:"Piano",slots:Array(8).fill(1).map(s=>Object.assign({},a.defaults.slot)),melodies:n()}]}]};return C(()=>{}),H(()=>{l=!1}),[a,o,l,n,function(s){t(0,a=s)},function(s){t(1,o=s)},function(s){t(0,a=s)},function(s){t(1,o=s)},function(s){t(0,a=s)},function(s){t(1,o=s)}]}class rs extends s{constructor(s){super(),e(this,s,os,ns,t,{})}}export{rs as S};
