import{S as e,i as a,s as r,e as s,a as t,t as l,c,b as n,d as o,f as i,g as d,h as p,k as h,m as u,z as f,I as y,j as g,n as v,J as I,K as q,L as b}from"./index.d2ddc949.js";import{a as m}from"./app.3908f6b8.js";function E(e,a,r){const s=e.slice();return s[8]=a[r],s}function w(e){let a,r,y,g,v,I,q,b,m,E,w,x,V=e[8].title+"";return{c(){a=s("div"),r=s("div"),y=s("a"),g=s("img"),b=t(),m=s("div"),E=s("h5"),w=l(V),x=t(),this.h()},l(e){a=c(e,"DIV",{class:!0});var s=n(a);r=c(s,"DIV",{class:!0});var t=n(r);y=c(t,"A",{href:!0,rel:!0,target:!0});var l=n(y);g=c(l,"IMG",{src:!0,class:!0,alt:!0}),l.forEach(o),b=i(t),m=c(t,"DIV",{class:!0});var p=n(m);E=c(p,"H5",{class:!0});var h=n(E);w=d(h,V),h.forEach(o),p.forEach(o),t.forEach(o),x=i(s),s.forEach(o),this.h()},h(){g.src!==(v=e[8].image)&&p(g,"src",v),p(g,"class","card-img-top"),p(g,"alt",I=e[8].title),p(y,"href",q=e[8].url),p(y,"rel","noopener noreferrer"),p(y,"target","_blank"),p(E,"class","card-text small"),p(m,"class","card-body p-3"),p(r,"class","card bg-secondary text-white shadow p-0 m-0"),p(a,"class","col mb-4")},m(e,s){h(e,a,s),u(a,r),u(r,y),u(y,g),u(r,b),u(r,m),u(m,E),u(E,w),u(a,x)},p(e,a){8&a&&g.src!==(v=e[8].image)&&p(g,"src",v),8&a&&I!==(I=e[8].title)&&p(g,"alt",I),8&a&&q!==(q=e[8].url)&&p(y,"href",q),8&a&&V!==(V=e[8].title+"")&&f(w,V)},d(e){e&&o(a)}}}function x(e){let a,r,q,b,m,x,V,D,$,j,k,A,R,M,P,z,C,G,H,J,K,L,S,_,B,F,N,O,Q,T,U,W=parseInt(e[2].query.p)+"",X=parseInt(e[2].query.p)+1+"",Y=Math.ceil(e[1].length/parseInt(e[2].query.i))+"",Z=parseInt(e[2].query.p)+2+"",ee=e[3],ae=[];for(let a=0;a<ee.length;a+=1)ae[a]=w(E(e,ee,a));return{c(){a=t(),r=s("div"),q=s("div");for(let e=0;e<ae.length;e+=1)ae[e].c();b=t(),m=s("div"),x=s("div"),V=s("a"),D=l("« Return to page "),$=l(W),k=t(),A=s("div"),R=s("div"),M=l("Viewing page "),P=l(X),z=l(" out of "),C=l(Y),G=t(),H=s("div"),J=s("div"),K=s("a"),L=l("Page "),S=l(Z),_=l(" »"),F=t(),N=s("div"),O=s("div"),Q=s("a"),T=l("Return to page 1 ∞"),this.h()},l(e){a=i(e),r=c(e,"DIV",{class:!0,style:!0});var s=n(r);q=c(s,"DIV",{class:!0});var t=n(q);for(let e=0;e<ae.length;e+=1)ae[e].l(t);t.forEach(o),b=i(s),m=c(s,"DIV",{class:!0,style:!0});var l=n(m);x=c(l,"DIV",{class:!0});var p=n(x);V=c(p,"A",{class:!0,href:!0});var h=n(V);D=d(h,"« Return to page "),$=d(h,W),h.forEach(o),p.forEach(o),k=i(l),A=c(l,"DIV",{class:!0});var u=n(A);R=c(u,"DIV",{class:!0});var f=n(R);M=d(f,"Viewing page "),P=d(f,X),z=d(f," out of "),C=d(f,Y),f.forEach(o),u.forEach(o),l.forEach(o),G=i(s),H=c(s,"DIV",{class:!0,style:!0});var y=n(H);J=c(y,"DIV",{class:!0});var g=n(J);K=c(g,"A",{class:!0,href:!0});var v=n(K);L=d(v,"Page "),S=d(v,Z),_=d(v," »"),v.forEach(o),g.forEach(o),y.forEach(o),F=i(s),N=c(s,"DIV",{class:!0,style:!0});var I=n(N);O=c(I,"DIV",{class:!0});var E=n(O);Q=c(E,"A",{class:!0,href:!0});var w=n(Q);T=d(w,"Return to page 1 ∞"),w.forEach(o),E.forEach(o),I.forEach(o),s.forEach(o),this.h()},h(){document.title="Cat Pea",p(q,"class","row row-cols-1 row-cols-md-2 row-cols-xl-4"),p(V,"class","btn btn-secondary btn-lg text-dark shadow"),p(V,"href",j="/video?p="+(parseInt(e[2].query.p)-1)+"&i="+e[2].query.i),p(x,"class","col-md-6 mb-4 order-2 order-md-1"),p(R,"class","p-2 lead text-muted"),p(A,"class","col-md-6 mb-4 text-md-right order-1 order-md-2"),p(m,"class","row"),y(m,"display","none"),g(m,"d-flex",parseInt(e[2].query.p)-1>-1),p(K,"class","btn btn-secondary btn-lg btn-block shadow"),p(K,"href",B="/video?p="+(parseInt(e[2].query.p)+1)+"&i="+e[2].query.i),p(J,"class","col mb-4"),p(H,"class","row"),y(H,"display","none"),g(H,"d-flex",(parseInt(e[2].query.p)+1)*parseInt(e[2].query.i)<e[1].length),p(Q,"class","btn btn-secondary btn-lg btn-block shadow"),p(Q,"href",U="/video?p=0&i="+e[2].query.i),p(O,"class","col mb-4"),p(N,"class","row"),y(N,"display","none"),g(N,"d-flex",(parseInt(e[2].query.p)+1)*parseInt(e[2].query.i)>=e[1].length),p(r,"class","container-fluid"),y(r,"visibility","hidden"),g(r,"visible",e[0])},m(e,s){h(e,a,s),h(e,r,s),u(r,q);for(let e=0;e<ae.length;e+=1)ae[e].m(q,null);u(r,b),u(r,m),u(m,x),u(x,V),u(V,D),u(V,$),u(m,k),u(m,A),u(A,R),u(R,M),u(R,P),u(R,z),u(R,C),u(r,G),u(r,H),u(H,J),u(J,K),u(K,L),u(K,S),u(K,_),u(r,F),u(r,N),u(N,O),u(O,Q),u(Q,T)},p(e,[a]){if(8&a){let r;for(ee=e[3],r=0;r<ee.length;r+=1){const s=E(e,ee,r);ae[r]?ae[r].p(s,a):(ae[r]=w(s),ae[r].c(),ae[r].m(q,null))}for(;r<ae.length;r+=1)ae[r].d(1);ae.length=ee.length}4&a&&W!==(W=parseInt(e[2].query.p)+"")&&f($,W),4&a&&j!==(j="/video?p="+(parseInt(e[2].query.p)-1)+"&i="+e[2].query.i)&&p(V,"href",j),4&a&&X!==(X=parseInt(e[2].query.p)+1+"")&&f(P,X),6&a&&Y!==(Y=Math.ceil(e[1].length/parseInt(e[2].query.i))+"")&&f(C,Y),4&a&&g(m,"d-flex",parseInt(e[2].query.p)-1>-1),4&a&&Z!==(Z=parseInt(e[2].query.p)+2+"")&&f(S,Z),4&a&&B!==(B="/video?p="+(parseInt(e[2].query.p)+1)+"&i="+e[2].query.i)&&p(K,"href",B),6&a&&g(H,"d-flex",(parseInt(e[2].query.p)+1)*parseInt(e[2].query.i)<e[1].length),4&a&&U!==(U="/video?p=0&i="+e[2].query.i)&&p(Q,"href",U),6&a&&g(N,"d-flex",(parseInt(e[2].query.p)+1)*parseInt(e[2].query.i)>=e[1].length),1&a&&g(r,"visible",e[0])},i:v,o:v,d(e){e&&o(a),e&&o(r),I(ae,e)}}}function V(e,a,r){let s;const{page:t}=m();q(e,t,e=>r(2,s=e));let l,c,n,o=!1,i=[];return b(async function(){const e=await fetch("youtube.json"),a=await e.json();r(1,i=a),console.log("database.length: %d",i.length),r(0,o=!0)}),e.$$.update=(()=>{4&e.$$.dirty&&r(5,l=parseInt(s.query.p)*parseInt(s.query.i)),36&e.$$.dirty&&r(6,c=l+parseInt(s.query.i)),98&e.$$.dirty&&r(3,n=i.slice(l,c))}),[o,i,s,n,t]}export default class extends e{constructor(e){super(),a(this,e,V,x,r,{})}}
