import{S as e,i as a,s as r,e as s,a as t,t as l,c,b as n,d as o,f as i,g as d,h as p,k as h,l as u,z as f,B as y,N as v,j as g,n as I,M as q,O as b,P as m}from"./index.5d6d5b66.js";import{a as E}from"./app.4af0587b.js";function w(e,a,r){const s=e.slice();return s[8]=a[r],s}function x(e){let a,r,y,v,g,I,q,b,m,E,w,x,V=e[8].title+"";return{c(){a=s("div"),r=s("div"),y=s("a"),v=s("img"),b=t(),m=s("div"),E=s("h5"),w=l(V),x=t(),this.h()},l(e){a=c(e,"DIV",{class:!0});var s=n(a);r=c(s,"DIV",{class:!0});var t=n(r);y=c(t,"A",{href:!0,rel:!0,target:!0});var l=n(y);v=c(l,"IMG",{src:!0,class:!0,alt:!0}),l.forEach(o),b=i(t),m=c(t,"DIV",{class:!0});var p=n(m);E=c(p,"H5",{class:!0});var h=n(E);w=d(h,V),h.forEach(o),p.forEach(o),t.forEach(o),x=i(s),s.forEach(o),this.h()},h(){v.src!==(g=e[8].image)&&p(v,"src",g),p(v,"class","card-img-top"),p(v,"alt",I=e[8].title),p(y,"href",q=e[8].url),p(y,"rel","noopener noreferrer"),p(y,"target","_blank"),p(E,"class","card-text small"),p(m,"class","card-body p-3"),p(r,"class","card bg-secondary text-white shadow p-0 m-0"),p(a,"class","col mb-4")},m(e,s){h(e,a,s),u(a,r),u(r,y),u(y,v),u(r,b),u(r,m),u(m,E),u(E,w),u(a,x)},p(e,a){8&a&&v.src!==(g=e[8].image)&&p(v,"src",g),8&a&&I!==(I=e[8].title)&&p(v,"alt",I),8&a&&q!==(q=e[8].url)&&p(y,"href",q),8&a&&V!==(V=e[8].title+"")&&f(w,V)},d(e){e&&o(a)}}}function V(e){let a,r,b,m,E,V,D,$,j,k,A,M,P,R,z,B,C,G,H,N,O,S,_,F,J,K,L,Q,T,U,W,X=parseInt(e[2].query.p)+"",Y=parseInt(e[2].query.p)+1+"",Z=Math.ceil(e[1].length/parseInt(e[2].query.i))+"",ee=parseInt(e[2].query.p)+2+"",ae=e[3],re=[];for(let a=0;a<ae.length;a+=1)re[a]=x(w(e,ae,a));return{c(){a=t(),r=s("div"),b=s("div");for(let e=0;e<re.length;e+=1)re[e].c();m=t(),E=s("div"),V=s("div"),D=s("a"),$=l("« Return to page "),j=l(X),A=t(),M=s("div"),P=s("div"),R=l("Viewing page "),z=l(Y),B=l(" out of "),C=l(Z),G=t(),H=s("div"),N=s("div"),O=s("a"),S=l("Page "),_=l(ee),F=l(" »"),K=t(),L=s("div"),Q=s("div"),T=s("a"),U=l("Return to page 1 ∞"),this.h()},l(e){y('[data-svelte="svelte-43404m"]',document.head).forEach(o),a=i(e),r=c(e,"DIV",{class:!0,style:!0});var s=n(r);b=c(s,"DIV",{class:!0});var t=n(b);for(let e=0;e<re.length;e+=1)re[e].l(t);t.forEach(o),m=i(s),E=c(s,"DIV",{class:!0,style:!0});var l=n(E);V=c(l,"DIV",{class:!0});var p=n(V);D=c(p,"A",{class:!0,href:!0});var h=n(D);$=d(h,"« Return to page "),j=d(h,X),h.forEach(o),p.forEach(o),A=i(l),M=c(l,"DIV",{class:!0});var u=n(M);P=c(u,"DIV",{class:!0});var f=n(P);R=d(f,"Viewing page "),z=d(f,Y),B=d(f," out of "),C=d(f,Z),f.forEach(o),u.forEach(o),l.forEach(o),G=i(s),H=c(s,"DIV",{class:!0,style:!0});var v=n(H);N=c(v,"DIV",{class:!0});var g=n(N);O=c(g,"A",{class:!0,href:!0});var I=n(O);S=d(I,"Page "),_=d(I,ee),F=d(I," »"),I.forEach(o),g.forEach(o),v.forEach(o),K=i(s),L=c(s,"DIV",{class:!0,style:!0});var q=n(L);Q=c(q,"DIV",{class:!0});var w=n(Q);T=c(w,"A",{class:!0,href:!0});var x=n(T);U=d(x,"Return to page 1 ∞"),x.forEach(o),w.forEach(o),q.forEach(o),s.forEach(o),this.h()},h(){document.title="Cat Pea",p(b,"class","row row-cols-1 row-cols-md-2 row-cols-xl-4"),p(D,"class","btn btn-secondary btn-lg text-dark shadow"),p(D,"href",k="/video?p="+(parseInt(e[2].query.p)-1)+"&i="+e[2].query.i),p(V,"class","col-md-6 mb-4 order-2 order-md-1"),p(P,"class","p-2 lead text-muted"),p(M,"class","col-md-6 mb-4 text-md-right order-1 order-md-2"),p(E,"class","row"),v(E,"display","none"),g(E,"d-flex",parseInt(e[2].query.p)-1>-1),p(O,"class","btn btn-secondary btn-lg btn-block shadow"),p(O,"href",J="/video?p="+(parseInt(e[2].query.p)+1)+"&i="+e[2].query.i),p(N,"class","col mb-4"),p(H,"class","row"),v(H,"display","none"),g(H,"d-flex",(parseInt(e[2].query.p)+1)*parseInt(e[2].query.i)<e[1].length),p(T,"class","btn btn-secondary btn-lg btn-block shadow"),p(T,"href",W="/video?p=0&i="+e[2].query.i),p(Q,"class","col mb-4"),p(L,"class","row"),v(L,"display","none"),g(L,"d-flex",(parseInt(e[2].query.p)+1)*parseInt(e[2].query.i)>=e[1].length),p(r,"class","container-fluid"),v(r,"visibility","hidden"),g(r,"visible",e[0])},m(e,s){h(e,a,s),h(e,r,s),u(r,b);for(let e=0;e<re.length;e+=1)re[e].m(b,null);u(r,m),u(r,E),u(E,V),u(V,D),u(D,$),u(D,j),u(E,A),u(E,M),u(M,P),u(P,R),u(P,z),u(P,B),u(P,C),u(r,G),u(r,H),u(H,N),u(N,O),u(O,S),u(O,_),u(O,F),u(r,K),u(r,L),u(L,Q),u(Q,T),u(T,U)},p(e,[a]){if(8&a){let r;for(ae=e[3],r=0;r<ae.length;r+=1){const s=w(e,ae,r);re[r]?re[r].p(s,a):(re[r]=x(s),re[r].c(),re[r].m(b,null))}for(;r<re.length;r+=1)re[r].d(1);re.length=ae.length}4&a&&X!==(X=parseInt(e[2].query.p)+"")&&f(j,X),4&a&&k!==(k="/video?p="+(parseInt(e[2].query.p)-1)+"&i="+e[2].query.i)&&p(D,"href",k),4&a&&Y!==(Y=parseInt(e[2].query.p)+1+"")&&f(z,Y),6&a&&Z!==(Z=Math.ceil(e[1].length/parseInt(e[2].query.i))+"")&&f(C,Z),4&a&&g(E,"d-flex",parseInt(e[2].query.p)-1>-1),4&a&&ee!==(ee=parseInt(e[2].query.p)+2+"")&&f(_,ee),4&a&&J!==(J="/video?p="+(parseInt(e[2].query.p)+1)+"&i="+e[2].query.i)&&p(O,"href",J),6&a&&g(H,"d-flex",(parseInt(e[2].query.p)+1)*parseInt(e[2].query.i)<e[1].length),4&a&&W!==(W="/video?p=0&i="+e[2].query.i)&&p(T,"href",W),6&a&&g(L,"d-flex",(parseInt(e[2].query.p)+1)*parseInt(e[2].query.i)>=e[1].length),1&a&&g(r,"visible",e[0])},i:I,o:I,d(e){e&&o(a),e&&o(r),q(re,e)}}}function D(e,a,r){let s;const{page:t}=E();b(e,t,e=>r(2,s=e));let l,c,n,o=!1,i=[];return m(async function(){const e=await fetch("youtube.json"),a=await e.json();r(1,i=a),console.log("database.length: %d",i.length),r(0,o=!0)}),e.$$.update=(()=>{4&e.$$.dirty&&r(5,l=parseInt(s.query.p)*parseInt(s.query.i)),36&e.$$.dirty&&r(6,c=l+parseInt(s.query.i)),98&e.$$.dirty&&r(3,n=i.slice(l,c))}),[o,i,s,n,t]}export default class extends e{constructor(e){super(),a(this,e,D,V,r,{})}}
