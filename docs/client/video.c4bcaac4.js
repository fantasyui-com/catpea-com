import{S as e,i as a,s as r,e as s,h as t,t as l,c,a as n,d as o,j as i,f as d,k as h,b as p,l as u,g as f,R as y,v,E as g,n as I,u as q,a0 as b,a1 as m,C as E}from"./client.cee5c456.js";function w(e,a,r){const s=e.slice();return s[8]=a[r],s}function V(e){let a,r,y,v,g,I,q,b,m,E,w,V,x=e[8].title+"";return{c(){a=s("div"),r=s("div"),y=s("a"),v=s("img"),b=t(),m=s("div"),E=s("h5"),w=l(x),V=t(),this.h()},l(e){a=c(e,"DIV",{class:!0});var s=n(a);r=c(s,"DIV",{class:!0});var t=n(r);y=c(t,"A",{href:!0,rel:!0,target:!0});var l=n(y);v=c(l,"IMG",{src:!0,class:!0,alt:!0}),l.forEach(o),b=i(t),m=c(t,"DIV",{class:!0});var h=n(m);E=c(h,"H5",{class:!0});var p=n(E);w=d(p,x),p.forEach(o),h.forEach(o),t.forEach(o),V=i(s),s.forEach(o),this.h()},h(){v.src!==(g=e[8].image)&&h(v,"src",g),h(v,"class","card-img-top"),h(v,"alt",I=e[8].title),h(y,"href",q=e[8].url),h(y,"rel","noopener noreferrer"),h(y,"target","_blank"),h(E,"class","card-text small"),h(m,"class","card-body p-3"),h(r,"class","card bg-secondary text-white shadow p-0 m-0"),h(a,"class","col mb-4")},m(e,s){p(e,a,s),u(a,r),u(r,y),u(y,v),u(r,b),u(r,m),u(m,E),u(E,w),u(a,V)},p(e,a){8&a&&v.src!==(g=e[8].image)&&h(v,"src",g),8&a&&I!==(I=e[8].title)&&h(v,"alt",I),8&a&&q!==(q=e[8].url)&&h(y,"href",q),8&a&&x!==(x=e[8].title+"")&&f(w,x)},d(e){e&&o(a)}}}function x(e){let a,r,b,m,E,x,D,$,k,R,j,A,M,P,z,C,G,H,S,_,B,F,J,K,L,N,O,Q,T,U,W,X=parseInt(e[2].query.p)+"",Y=parseInt(e[2].query.p)+1+"",Z=Math.ceil(e[1].length/parseInt(e[2].query.i))+"",ee=parseInt(e[2].query.p)+2+"",ae=e[3],re=[];for(let a=0;a<ae.length;a+=1)re[a]=V(w(e,ae,a));return{c(){a=t(),r=s("div"),b=s("div");for(let e=0;e<re.length;e+=1)re[e].c();m=t(),E=s("div"),x=s("div"),D=s("a"),$=l("« Return to page "),k=l(X),j=t(),A=s("div"),M=s("div"),P=l("Viewing page "),z=l(Y),C=l(" out of "),G=l(Z),H=t(),S=s("div"),_=s("div"),B=s("a"),F=l("Page "),J=l(ee),K=l(" »"),N=t(),O=s("div"),Q=s("div"),T=s("a"),U=l("Return to page 1 ∞"),this.h()},l(e){y('[data-svelte="svelte-z3634x"]',document.head).forEach(o),a=i(e),r=c(e,"DIV",{class:!0,style:!0});var s=n(r);b=c(s,"DIV",{class:!0});var t=n(b);for(let e=0;e<re.length;e+=1)re[e].l(t);t.forEach(o),m=i(s),E=c(s,"DIV",{class:!0,style:!0});var l=n(E);x=c(l,"DIV",{class:!0});var h=n(x);D=c(h,"A",{class:!0,href:!0});var p=n(D);$=d(p,"« Return to page "),k=d(p,X),p.forEach(o),h.forEach(o),j=i(l),A=c(l,"DIV",{class:!0});var u=n(A);M=c(u,"DIV",{class:!0});var f=n(M);P=d(f,"Viewing page "),z=d(f,Y),C=d(f," out of "),G=d(f,Z),f.forEach(o),u.forEach(o),l.forEach(o),H=i(s),S=c(s,"DIV",{class:!0,style:!0});var v=n(S);_=c(v,"DIV",{class:!0});var g=n(_);B=c(g,"A",{class:!0,href:!0});var I=n(B);F=d(I,"Page "),J=d(I,ee),K=d(I," »"),I.forEach(o),g.forEach(o),v.forEach(o),N=i(s),O=c(s,"DIV",{class:!0,style:!0});var q=n(O);Q=c(q,"DIV",{class:!0});var w=n(Q);T=c(w,"A",{class:!0,href:!0});var V=n(T);U=d(V,"Return to page 1 ∞"),V.forEach(o),w.forEach(o),q.forEach(o),s.forEach(o),this.h()},h(){document.title="𝗖𝗔𝗧𝗣𝗘𝗔: Videos",h(b,"class","row row-cols-1 row-cols-md-2 row-cols-xl-4"),h(D,"class","btn btn-secondary btn-lg text-dark shadow"),h(D,"href",R="/video?p="+(parseInt(e[2].query.p)-1)+"&i="+e[2].query.i),h(x,"class","col-md-6 mb-4 order-2 order-md-1"),h(M,"class","p-2 lead text-muted"),h(A,"class","col-md-6 mb-4 text-md-right order-1 order-md-2"),h(E,"class","row"),v(E,"display","none"),g(E,"d-flex",parseInt(e[2].query.p)-1>-1),h(B,"class","btn btn-secondary btn-lg btn-block shadow"),h(B,"href",L="/video?p="+(parseInt(e[2].query.p)+1)+"&i="+e[2].query.i),h(_,"class","col mb-4"),h(S,"class","row"),v(S,"display","none"),g(S,"d-flex",(parseInt(e[2].query.p)+1)*parseInt(e[2].query.i)<e[1].length),h(T,"class","btn btn-secondary btn-lg btn-block shadow"),h(T,"href",W="/video?p=0&i="+e[2].query.i),h(Q,"class","col mb-4"),h(O,"class","row"),v(O,"display","none"),g(O,"d-flex",(parseInt(e[2].query.p)+1)*parseInt(e[2].query.i)>=e[1].length),h(r,"class","container-fluid"),v(r,"visibility","hidden"),g(r,"visible",e[0])},m(e,s){p(e,a,s),p(e,r,s),u(r,b);for(let e=0;e<re.length;e+=1)re[e].m(b,null);u(r,m),u(r,E),u(E,x),u(x,D),u(D,$),u(D,k),u(E,j),u(E,A),u(A,M),u(M,P),u(M,z),u(M,C),u(M,G),u(r,H),u(r,S),u(S,_),u(_,B),u(B,F),u(B,J),u(B,K),u(r,N),u(r,O),u(O,Q),u(Q,T),u(T,U)},p(e,[a]){if(8&a){let r;for(ae=e[3],r=0;r<ae.length;r+=1){const s=w(e,ae,r);re[r]?re[r].p(s,a):(re[r]=V(s),re[r].c(),re[r].m(b,null))}for(;r<re.length;r+=1)re[r].d(1);re.length=ae.length}4&a&&X!==(X=parseInt(e[2].query.p)+"")&&f(k,X),4&a&&R!==(R="/video?p="+(parseInt(e[2].query.p)-1)+"&i="+e[2].query.i)&&h(D,"href",R),4&a&&Y!==(Y=parseInt(e[2].query.p)+1+"")&&f(z,Y),6&a&&Z!==(Z=Math.ceil(e[1].length/parseInt(e[2].query.i))+"")&&f(G,Z),4&a&&g(E,"d-flex",parseInt(e[2].query.p)-1>-1),4&a&&ee!==(ee=parseInt(e[2].query.p)+2+"")&&f(J,ee),4&a&&L!==(L="/video?p="+(parseInt(e[2].query.p)+1)+"&i="+e[2].query.i)&&h(B,"href",L),6&a&&g(S,"d-flex",(parseInt(e[2].query.p)+1)*parseInt(e[2].query.i)<e[1].length),4&a&&W!==(W="/video?p=0&i="+e[2].query.i)&&h(T,"href",W),6&a&&g(O,"d-flex",(parseInt(e[2].query.p)+1)*parseInt(e[2].query.i)>=e[1].length),1&a&&g(r,"visible",e[0])},i:I,o:I,d(e){e&&o(a),e&&o(r),q(re,e)}}}function D(e,a,r){let s;const{page:t}=b();m(e,t,e=>r(2,s=e));let l,c,n,o=!1,i=[];return E(async function(){const e=await fetch("youtube.json"),a=await e.json();r(1,i=a),console.log("database.length: %d",i.length),r(0,o=!0)}),e.$$.update=(()=>{4&e.$$.dirty&&r(5,l=parseInt(s.query.p)*parseInt(s.query.i)),36&e.$$.dirty&&r(6,c=l+parseInt(s.query.i)),98&e.$$.dirty&&r(3,n=i.slice(l,c))}),[o,i,s,n,t]}export default class extends e{constructor(e){super(),a(this,e,D,x,r,{})}}
