import{_ as r,a as e,i as a,s as t,b as s,S as n,e as c,y as o,x as l,c as i,d as u,f,B as d,A as h,D as p,g as v,E as y,H as g,a3 as I,L as q,Y as m,h as b,n as E,O as x,ad as w,ae as D,Q as V,j as R,k as $,R as k,T as A}from"./client.fd5a9790.js";function j(r){return function(){var e,a=R(r);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(r){return!1}}()){var t=R(this).constructor;e=Reflect.construct(a,arguments,t)}else e=a.apply(this,arguments);return $(this,e)}}function M(r,e,a){var t=r.slice();return t[8]=e[a],t}function P(r){var e,a,t,s,n,I,q,m,b,E,x,w,D=r[8].title+"";return{c:function(){e=c("div"),a=c("div"),t=c("a"),s=c("img"),m=o(),b=c("div"),E=c("h5"),x=l(D),w=o(),this.h()},l:function(r){e=i(r,"DIV",{class:!0});var n=u(e);a=i(n,"DIV",{class:!0});var c=u(a);t=i(c,"A",{href:!0,rel:!0,target:!0});var o=u(t);s=i(o,"IMG",{src:!0,class:!0,alt:!0}),o.forEach(f),m=d(c),b=i(c,"DIV",{class:!0});var l=u(b);E=i(l,"H5",{class:!0});var p=u(E);x=h(p,D),p.forEach(f),l.forEach(f),c.forEach(f),w=d(n),n.forEach(f),this.h()},h:function(){s.src!==(n=r[8].image)&&p(s,"src",n),p(s,"class","card-img-top"),p(s,"alt",I=r[8].title),p(t,"href",q=r[8].url),p(t,"rel","noopener noreferrer"),p(t,"target","_blank"),p(E,"class","card-text small"),p(b,"class","card-body p-3"),p(a,"class","card bg-secondary text-white shadow p-0 m-0"),p(e,"class","col mb-4")},m:function(r,n){v(r,e,n),y(e,a),y(a,t),y(t,s),y(a,m),y(a,b),y(b,E),y(E,x),y(e,w)},p:function(r,e){8&e&&s.src!==(n=r[8].image)&&p(s,"src",n),8&e&&I!==(I=r[8].title)&&p(s,"alt",I),8&e&&q!==(q=r[8].url)&&p(t,"href",q),8&e&&D!==(D=r[8].title+"")&&g(x,D)},d:function(r){r&&f(e)}}}function H(r){for(var e,a,t,s,n,w,D,V,R,$,k,A,j,H,S,_,z,B,G,L,O,Q,T,Y,C,F,J,K,N,U,W,X=parseInt(r[2].query.p)+"",Z=parseInt(r[2].query.p)+1+"",rr=Math.ceil(r[1].length/parseInt(r[2].query.i))+"",er=parseInt(r[2].query.p)+2+"",ar=r[3],tr=[],sr=0;sr<ar.length;sr+=1)tr[sr]=P(M(r,ar,sr));return{c:function(){e=o(),a=c("div"),t=c("div");for(var r=0;r<tr.length;r+=1)tr[r].c();s=o(),n=c("div"),w=c("div"),D=c("a"),V=l("« Return to page "),R=l(X),k=o(),A=c("div"),j=c("div"),H=l("Viewing page "),S=l(Z),_=l(" out of "),z=l(rr),B=o(),G=c("div"),L=c("div"),O=c("a"),Q=l("Page "),T=l(er),Y=l(" »"),F=o(),J=c("div"),K=c("div"),N=c("a"),U=l("Return to page 1 ∞"),this.h()},l:function(r){I('[data-svelte="svelte-z3634x"]',document.head).forEach(f),e=d(r),a=i(r,"DIV",{class:!0,style:!0});var c=u(a);t=i(c,"DIV",{class:!0});for(var o=u(t),l=0;l<tr.length;l+=1)tr[l].l(o);o.forEach(f),s=d(c),n=i(c,"DIV",{class:!0,style:!0});var p=u(n);w=i(p,"DIV",{class:!0});var v=u(w);D=i(v,"A",{class:!0,href:!0});var y=u(D);V=h(y,"« Return to page "),R=h(y,X),y.forEach(f),v.forEach(f),k=d(p),A=i(p,"DIV",{class:!0});var g=u(A);j=i(g,"DIV",{class:!0});var q=u(j);H=h(q,"Viewing page "),S=h(q,Z),_=h(q," out of "),z=h(q,rr),q.forEach(f),g.forEach(f),p.forEach(f),B=d(c),G=i(c,"DIV",{class:!0,style:!0});var m=u(G);L=i(m,"DIV",{class:!0});var b=u(L);O=i(b,"A",{class:!0,href:!0});var E=u(O);Q=h(E,"Page "),T=h(E,er),Y=h(E," »"),E.forEach(f),b.forEach(f),m.forEach(f),F=d(c),J=i(c,"DIV",{class:!0,style:!0});var x=u(J);K=i(x,"DIV",{class:!0});var $=u(K);N=i($,"A",{class:!0,href:!0});var M=u(N);U=h(M,"Return to page 1 ∞"),M.forEach(f),$.forEach(f),x.forEach(f),c.forEach(f),this.h()},h:function(){document.title="𝗖𝗔𝗧𝗣𝗘𝗔: Videos",p(t,"class","row row-cols-1 row-cols-md-2 row-cols-xl-4"),p(D,"class","btn btn-secondary btn-lg text-dark shadow"),p(D,"href",$="/video?p="+(parseInt(r[2].query.p)-1)+"&i="+r[2].query.i),p(w,"class","col-md-6 mb-4 order-2 order-md-1"),p(j,"class","p-2 lead text-muted"),p(A,"class","col-md-6 mb-4 text-md-right order-1 order-md-2"),p(n,"class","row"),q(n,"display","none"),m(n,"d-flex",parseInt(r[2].query.p)-1>-1),p(O,"class","btn btn-secondary btn-lg btn-block shadow"),p(O,"href",C="/video?p="+(parseInt(r[2].query.p)+1)+"&i="+r[2].query.i),p(L,"class","col mb-4"),p(G,"class","row"),q(G,"display","none"),m(G,"d-flex",(parseInt(r[2].query.p)+1)*parseInt(r[2].query.i)<r[1].length),p(N,"class","btn btn-secondary btn-lg btn-block shadow"),p(N,"href",W="/video?p=0&i="+r[2].query.i),p(K,"class","col mb-4"),p(J,"class","row"),q(J,"display","none"),m(J,"d-flex",(parseInt(r[2].query.p)+1)*parseInt(r[2].query.i)>=r[1].length),p(a,"class","container-fluid"),q(a,"visibility","hidden"),m(a,"visible",r[0])},m:function(r,c){v(r,e,c),v(r,a,c),y(a,t);for(var o=0;o<tr.length;o+=1)tr[o].m(t,null);y(a,s),y(a,n),y(n,w),y(w,D),y(D,V),y(D,R),y(n,k),y(n,A),y(A,j),y(j,H),y(j,S),y(j,_),y(j,z),y(a,B),y(a,G),y(G,L),y(L,O),y(O,Q),y(O,T),y(O,Y),y(a,F),y(a,J),y(J,K),y(K,N),y(N,U)},p:function(r,e){var s=b(e,1)[0];if(8&s){var c;for(ar=r[3],c=0;c<ar.length;c+=1){var o=M(r,ar,c);tr[c]?tr[c].p(o,s):(tr[c]=P(o),tr[c].c(),tr[c].m(t,null))}for(;c<tr.length;c+=1)tr[c].d(1);tr.length=ar.length}4&s&&X!==(X=parseInt(r[2].query.p)+"")&&g(R,X),4&s&&$!==($="/video?p="+(parseInt(r[2].query.p)-1)+"&i="+r[2].query.i)&&p(D,"href",$),4&s&&Z!==(Z=parseInt(r[2].query.p)+1+"")&&g(S,Z),6&s&&rr!==(rr=Math.ceil(r[1].length/parseInt(r[2].query.i))+"")&&g(z,rr),4&s&&m(n,"d-flex",parseInt(r[2].query.p)-1>-1),4&s&&er!==(er=parseInt(r[2].query.p)+2+"")&&g(T,er),4&s&&C!==(C="/video?p="+(parseInt(r[2].query.p)+1)+"&i="+r[2].query.i)&&p(O,"href",C),6&s&&m(G,"d-flex",(parseInt(r[2].query.p)+1)*parseInt(r[2].query.i)<r[1].length),4&s&&W!==(W="/video?p=0&i="+r[2].query.i)&&p(N,"href",W),6&s&&m(J,"d-flex",(parseInt(r[2].query.p)+1)*parseInt(r[2].query.i)>=r[1].length),1&s&&m(a,"visible",r[0])},i:E,o:E,d:function(r){r&&f(e),r&&f(a),x(tr,r)}}}function S(r,e,a){var t,s=w().page;D(r,s,function(r){return a(2,t=r)});var n,c,o,l=!1,i=[];return V(k(A.mark(function r(){var e,t;return A.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("youtube.json");case 2:return e=r.sent,r.next=5,e.json();case 5:t=r.sent,a(1,i=t),console.log("database.length: %d",i.length),a(0,l=!0);case 9:case"end":return r.stop()}},r)}))),r.$$.update=function(){4&r.$$.dirty&&a(5,n=parseInt(t.query.p)*parseInt(t.query.i)),36&r.$$.dirty&&a(6,c=n+parseInt(t.query.i)),98&r.$$.dirty&&a(3,o=i.slice(n,c))},[l,i,t,o,s]}export default(function(c){r(l,n);var o=j(l);function l(r){var n;return e(this,l),n=o.call(this),a(s(n),r,S,H,t,{}),n}return l}());