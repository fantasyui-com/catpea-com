import{_ as r,a as e,i as a,s as t,b as s,S as n,g as c,h as i,t as l,j as o,k as u,f,l as p,c as h,m as d,d as v,n as y,e as g,a1 as I,D as q,L as m,p as b,q as E,B as x,ai as V,aj as D,V as w,u as R,v as k,T as $,U as j}from"./client.23a5719d.js";function A(r){return function(){var e,a=R(r);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(r){return!1}}()){var t=R(this).constructor;e=Reflect.construct(a,arguments,t)}else e=a.apply(this,arguments);return k(this,e)}}function P(r,e,a){var t=r.slice();return t[8]=e[a],t}function M(r){var e,a,t,s,n,I,q,m,b,E,x,V,D=r[8].title+"";return{c:function(){e=c("div"),a=c("div"),t=c("a"),s=c("img"),m=i(),b=c("div"),E=c("h5"),x=l(D),V=i(),this.h()},l:function(r){e=o(r,"DIV",{class:!0});var n=u(e);a=o(n,"DIV",{class:!0});var c=u(a);t=o(c,"A",{href:!0,rel:!0,target:!0});var i=u(t);s=o(i,"IMG",{src:!0,class:!0,alt:!0}),i.forEach(f),m=p(c),b=o(c,"DIV",{class:!0});var l=u(b);E=o(l,"H5",{class:!0});var d=u(E);x=h(d,D),d.forEach(f),l.forEach(f),c.forEach(f),V=p(n),n.forEach(f),this.h()},h:function(){s.src!==(n=r[8].image)&&d(s,"src",n),d(s,"class","card-img-top"),d(s,"alt",I=r[8].title),d(t,"href",q=r[8].url),d(t,"rel","noopener noreferrer"),d(t,"target","_blank"),d(E,"class","card-text small"),d(b,"class","card-body p-3"),d(a,"class","card bg-night text-night shadow p-0 m-0"),d(e,"class","col mb-4")},m:function(r,n){v(r,e,n),y(e,a),y(a,t),y(t,s),y(a,m),y(a,b),y(b,E),y(E,x),y(e,V)},p:function(r,e){8&e&&s.src!==(n=r[8].image)&&d(s,"src",n),8&e&&I!==(I=r[8].title)&&d(s,"alt",I),8&e&&q!==(q=r[8].url)&&d(t,"href",q),8&e&&D!==(D=r[8].title+"")&&g(x,D)},d:function(r){r&&f(e)}}}function S(r){for(var e,a,t,s,n,V,D,w,R,k,$,j,A,S,T,_,B,C,G,H,L,U,z,F,J,K,N,O,Q,W,X,Y=parseInt(r[2].query.p)+"",Z=parseInt(r[2].query.p)+1+"",rr=Math.ceil(r[1].length/parseInt(r[2].query.i))+"",er=parseInt(r[2].query.p)+2+"",ar=r[3],tr=[],sr=0;sr<ar.length;sr+=1)tr[sr]=M(P(r,ar,sr));return{c:function(){e=i(),a=c("div"),t=c("div");for(var r=0;r<tr.length;r+=1)tr[r].c();s=i(),n=c("div"),V=c("div"),D=c("a"),w=l("« Return to page "),R=l(Y),$=i(),j=c("div"),A=c("div"),S=l("Viewing page "),T=l(Z),_=l(" out of "),B=l(rr),C=i(),G=c("div"),H=c("div"),L=c("a"),U=l("Page "),z=l(er),F=l(" »"),K=i(),N=c("div"),O=c("div"),Q=c("a"),W=l("Return to page 1 ∞"),this.h()},l:function(r){I('[data-svelte="svelte-1dnoj30"]',document.head).forEach(f),e=p(r),a=o(r,"DIV",{class:!0,style:!0});var c=u(a);t=o(c,"DIV",{class:!0});for(var i=u(t),l=0;l<tr.length;l+=1)tr[l].l(i);i.forEach(f),s=p(c),n=o(c,"DIV",{class:!0,style:!0});var d=u(n);V=o(d,"DIV",{class:!0});var v=u(V);D=o(v,"A",{class:!0,href:!0});var y=u(D);w=h(y,"« Return to page "),R=h(y,Y),y.forEach(f),v.forEach(f),$=p(d),j=o(d,"DIV",{class:!0});var g=u(j);A=o(g,"DIV",{class:!0});var q=u(A);S=h(q,"Viewing page "),T=h(q,Z),_=h(q," out of "),B=h(q,rr),q.forEach(f),g.forEach(f),d.forEach(f),C=p(c),G=o(c,"DIV",{class:!0,style:!0});var m=u(G);H=o(m,"DIV",{class:!0});var b=u(H);L=o(b,"A",{class:!0,href:!0});var E=u(L);U=h(E,"Page "),z=h(E,er),F=h(E," »"),E.forEach(f),b.forEach(f),m.forEach(f),K=p(c),N=o(c,"DIV",{class:!0,style:!0});var x=u(N);O=o(x,"DIV",{class:!0});var k=u(O);Q=o(k,"A",{class:!0,href:!0});var P=u(Q);W=h(P,"Return to page 1 ∞"),P.forEach(f),k.forEach(f),x.forEach(f),c.forEach(f),this.h()},h:function(){document.title="CATPEA! Videos",d(t,"class","row row-cols-1 row-cols-md-2 row-cols-xl-4"),d(D,"class","btn btn-dark btn-lg shadow"),d(D,"href",k="/video?p="+(parseInt(r[2].query.p)-1)+"&i="+r[2].query.i),d(V,"class","col-md-6 mb-4 order-2 order-md-1"),d(A,"class","p-2 lead"),d(j,"class","col-md-6 mb-4 text-md-right order-1 order-md-2"),d(n,"class","row"),q(n,"display","none"),m(n,"d-flex",parseInt(r[2].query.p)-1>-1),d(L,"class","btn btn-dark btn-lg text-primary btn-block shadow"),d(L,"href",J="/video?p="+(parseInt(r[2].query.p)+1)+"&i="+r[2].query.i),d(H,"class","col mb-4"),d(G,"class","row"),q(G,"display","none"),m(G,"d-flex",(parseInt(r[2].query.p)+1)*parseInt(r[2].query.i)<r[1].length),d(Q,"class","btn btn-dark btn-lg text-primary btn-block shadow"),d(Q,"href",X="/video?p=0&i="+r[2].query.i),d(O,"class","col mb-4"),d(N,"class","row"),q(N,"display","none"),m(N,"d-flex",(parseInt(r[2].query.p)+1)*parseInt(r[2].query.i)>=r[1].length),d(a,"class","container-fluid"),q(a,"visibility","hidden"),m(a,"visible",r[0])},m:function(r,c){v(r,e,c),v(r,a,c),y(a,t);for(var i=0;i<tr.length;i+=1)tr[i].m(t,null);y(a,s),y(a,n),y(n,V),y(V,D),y(D,w),y(D,R),y(n,$),y(n,j),y(j,A),y(A,S),y(A,T),y(A,_),y(A,B),y(a,C),y(a,G),y(G,H),y(H,L),y(L,U),y(L,z),y(L,F),y(a,K),y(a,N),y(N,O),y(O,Q),y(Q,W)},p:function(r,e){var s=b(e,1)[0];if(8&s){var c;for(ar=r[3],c=0;c<ar.length;c+=1){var i=P(r,ar,c);tr[c]?tr[c].p(i,s):(tr[c]=M(i),tr[c].c(),tr[c].m(t,null))}for(;c<tr.length;c+=1)tr[c].d(1);tr.length=ar.length}4&s&&Y!==(Y=parseInt(r[2].query.p)+"")&&g(R,Y),4&s&&k!==(k="/video?p="+(parseInt(r[2].query.p)-1)+"&i="+r[2].query.i)&&d(D,"href",k),4&s&&Z!==(Z=parseInt(r[2].query.p)+1+"")&&g(T,Z),6&s&&rr!==(rr=Math.ceil(r[1].length/parseInt(r[2].query.i))+"")&&g(B,rr),4&s&&m(n,"d-flex",parseInt(r[2].query.p)-1>-1),4&s&&er!==(er=parseInt(r[2].query.p)+2+"")&&g(z,er),4&s&&J!==(J="/video?p="+(parseInt(r[2].query.p)+1)+"&i="+r[2].query.i)&&d(L,"href",J),6&s&&m(G,"d-flex",(parseInt(r[2].query.p)+1)*parseInt(r[2].query.i)<r[1].length),4&s&&X!==(X="/video?p=0&i="+r[2].query.i)&&d(Q,"href",X),6&s&&m(N,"d-flex",(parseInt(r[2].query.p)+1)*parseInt(r[2].query.i)>=r[1].length),1&s&&m(a,"visible",r[0])},i:E,o:E,d:function(r){r&&f(e),r&&f(a),x(tr,r)}}}function T(r,e,a){var t,s=V().page;D(r,s,function(r){return a(2,t=r)});var n,c,i,l=!1,o=[];return w($(j.mark(function r(){var e,t;return j.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("youtube.json");case 2:return e=r.sent,r.next=5,e.json();case 5:t=r.sent,a(1,o=t),console.log("database.length: %d",o.length),a(0,l=!0);case 9:case"end":return r.stop()}},r)}))),r.$$.update=function(){4&r.$$.dirty&&a(5,n=parseInt(t.query.p)*parseInt(t.query.i)),36&r.$$.dirty&&a(6,c=n+parseInt(t.query.i)),98&r.$$.dirty&&a(3,i=o.slice(n,c))},[l,o,t,i,s]}export default(function(c){r(l,n);var i=A(l);function l(r){var n;return e(this,l),n=i.call(this),a(s(n),r,T,S,t,{}),n}return l}());