import{d as a,e as r,f as e,h as s,i as t,s as n,j as c,S as l,o,p as i,t as u,q as f,r as h,n as d,u as p,k as v,v as y,l as g,w as I,m as q,Y as m,F as b,a4 as E,y as w,z as x,E as V,a5 as D,a6 as $,R as k,T as R,U as j}from"./client.9eb6952f.js";function A(a,r,e){var s=a.slice();return s[8]=r[e],s}function M(a){var r,e,s,t,n,c,l,m,b,E,w,x,V=a[8].title+"";return{c:function(){r=o("div"),e=o("div"),s=o("a"),t=o("img"),m=i(),b=o("div"),E=o("h5"),w=u(V),x=i(),this.h()},l:function(a){r=f(a,"DIV",{class:!0});var n=h(r);e=f(n,"DIV",{class:!0});var c=h(e);s=f(c,"A",{href:!0,rel:!0,target:!0});var l=h(s);t=f(l,"IMG",{src:!0,class:!0,alt:!0}),l.forEach(d),m=p(c),b=f(c,"DIV",{class:!0});var o=h(b);E=f(o,"H5",{class:!0});var i=h(E);w=v(i,V),i.forEach(d),o.forEach(d),c.forEach(d),x=p(n),n.forEach(d),this.h()},h:function(){t.src!==(n=a[8].image)&&y(t,"src",n),y(t,"class","card-img-top"),y(t,"alt",c=a[8].title),y(s,"href",l=a[8].url),y(s,"rel","noopener noreferrer"),y(s,"target","_blank"),y(E,"class","card-text small"),y(b,"class","card-body p-3"),y(e,"class","card bg-secondary text-white shadow p-0 m-0"),y(r,"class","col mb-4")},m:function(a,n){g(a,r,n),I(r,e),I(e,s),I(s,t),I(e,m),I(e,b),I(b,E),I(E,w),I(r,x)},p:function(a,r){8&r&&t.src!==(n=a[8].image)&&y(t,"src",n),8&r&&c!==(c=a[8].title)&&y(t,"alt",c),8&r&&l!==(l=a[8].url)&&y(s,"href",l),8&r&&V!==(V=a[8].title+"")&&q(w,V)},d:function(a){a&&d(r)}}}function P(a){for(var r,e,s,t,n,c,l,D,$,k,R,j,P,z,C,F,G,H,S,T,U,Y,_,B,J,K,L,N,O,Q,W,X=parseInt(a[2].query.p)+"",Z=parseInt(a[2].query.p)+1+"",aa=Math.ceil(a[1].length/parseInt(a[2].query.i))+"",ra=parseInt(a[2].query.p)+2+"",ea=a[3],sa=[],ta=0;ta<ea.length;ta+=1)sa[ta]=M(A(a,ea,ta));return{c:function(){r=i(),e=o("div"),s=o("div");for(var a=0;a<sa.length;a+=1)sa[a].c();t=i(),n=o("div"),c=o("div"),l=o("a"),D=u("« Return to page "),$=u(X),R=i(),j=o("div"),P=o("div"),z=u("Viewing page "),C=u(Z),F=u(" out of "),G=u(aa),H=i(),S=o("div"),T=o("div"),U=o("a"),Y=u("Page "),_=u(ra),B=u(" »"),K=i(),L=o("div"),N=o("div"),O=o("a"),Q=u("Return to page 1 ∞"),this.h()},l:function(a){m('[data-svelte="svelte-43404m"]',document.head).forEach(d),r=p(a),e=f(a,"DIV",{class:!0,style:!0});var o=h(e);s=f(o,"DIV",{class:!0});for(var i=h(s),u=0;u<sa.length;u+=1)sa[u].l(i);i.forEach(d),t=p(o),n=f(o,"DIV",{class:!0,style:!0});var y=h(n);c=f(y,"DIV",{class:!0});var g=h(c);l=f(g,"A",{class:!0,href:!0});var I=h(l);D=v(I,"« Return to page "),$=v(I,X),I.forEach(d),g.forEach(d),R=p(y),j=f(y,"DIV",{class:!0});var q=h(j);P=f(q,"DIV",{class:!0});var b=h(P);z=v(b,"Viewing page "),C=v(b,Z),F=v(b," out of "),G=v(b,aa),b.forEach(d),q.forEach(d),y.forEach(d),H=p(o),S=f(o,"DIV",{class:!0,style:!0});var E=h(S);T=f(E,"DIV",{class:!0});var w=h(T);U=f(w,"A",{class:!0,href:!0});var x=h(U);Y=v(x,"Page "),_=v(x,ra),B=v(x," »"),x.forEach(d),w.forEach(d),E.forEach(d),K=p(o),L=f(o,"DIV",{class:!0,style:!0});var V=h(L);N=f(V,"DIV",{class:!0});var k=h(N);O=f(k,"A",{class:!0,href:!0});var A=h(O);Q=v(A,"Return to page 1 ∞"),A.forEach(d),k.forEach(d),V.forEach(d),o.forEach(d),this.h()},h:function(){document.title="Cat Pea",y(s,"class","row row-cols-1 row-cols-md-2 row-cols-xl-4"),y(l,"class","btn btn-secondary btn-lg text-dark shadow"),y(l,"href",k="/video?p="+(parseInt(a[2].query.p)-1)+"&i="+a[2].query.i),y(c,"class","col-md-6 mb-4 order-2 order-md-1"),y(P,"class","p-2 lead text-muted"),y(j,"class","col-md-6 mb-4 text-md-right order-1 order-md-2"),y(n,"class","row"),b(n,"display","none"),E(n,"d-flex",parseInt(a[2].query.p)-1>-1),y(U,"class","btn btn-secondary btn-lg btn-block shadow"),y(U,"href",J="/video?p="+(parseInt(a[2].query.p)+1)+"&i="+a[2].query.i),y(T,"class","col mb-4"),y(S,"class","row"),b(S,"display","none"),E(S,"d-flex",(parseInt(a[2].query.p)+1)*parseInt(a[2].query.i)<a[1].length),y(O,"class","btn btn-secondary btn-lg btn-block shadow"),y(O,"href",W="/video?p=0&i="+a[2].query.i),y(N,"class","col mb-4"),y(L,"class","row"),b(L,"display","none"),E(L,"d-flex",(parseInt(a[2].query.p)+1)*parseInt(a[2].query.i)>=a[1].length),y(e,"class","container-fluid"),b(e,"visibility","hidden"),E(e,"visible",a[0])},m:function(a,o){g(a,r,o),g(a,e,o),I(e,s);for(var i=0;i<sa.length;i+=1)sa[i].m(s,null);I(e,t),I(e,n),I(n,c),I(c,l),I(l,D),I(l,$),I(n,R),I(n,j),I(j,P),I(P,z),I(P,C),I(P,F),I(P,G),I(e,H),I(e,S),I(S,T),I(T,U),I(U,Y),I(U,_),I(U,B),I(e,K),I(e,L),I(L,N),I(N,O),I(O,Q)},p:function(a,r){var t=w(r,1)[0];if(8&t){var c;for(ea=a[3],c=0;c<ea.length;c+=1){var o=A(a,ea,c);sa[c]?sa[c].p(o,t):(sa[c]=M(o),sa[c].c(),sa[c].m(s,null))}for(;c<sa.length;c+=1)sa[c].d(1);sa.length=ea.length}4&t&&X!==(X=parseInt(a[2].query.p)+"")&&q($,X),4&t&&k!==(k="/video?p="+(parseInt(a[2].query.p)-1)+"&i="+a[2].query.i)&&y(l,"href",k),4&t&&Z!==(Z=parseInt(a[2].query.p)+1+"")&&q(C,Z),6&t&&aa!==(aa=Math.ceil(a[1].length/parseInt(a[2].query.i))+"")&&q(G,aa),4&t&&E(n,"d-flex",parseInt(a[2].query.p)-1>-1),4&t&&ra!==(ra=parseInt(a[2].query.p)+2+"")&&q(_,ra),4&t&&J!==(J="/video?p="+(parseInt(a[2].query.p)+1)+"&i="+a[2].query.i)&&y(U,"href",J),6&t&&E(S,"d-flex",(parseInt(a[2].query.p)+1)*parseInt(a[2].query.i)<a[1].length),4&t&&W!==(W="/video?p=0&i="+a[2].query.i)&&y(O,"href",W),6&t&&E(L,"d-flex",(parseInt(a[2].query.p)+1)*parseInt(a[2].query.i)>=a[1].length),1&t&&E(e,"visible",a[0])},i:x,o:x,d:function(a){a&&d(r),a&&d(e),V(sa,a)}}}function z(a,r,e){var s,t=D().page;$(a,t,function(a){return e(2,s=a)});var n,c,l,o=!1,i=[];return k(R(j.mark(function a(){var r,s;return j.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("youtube.json");case 2:return r=a.sent,a.next=5,r.json();case 5:s=a.sent,e(1,i=s),console.log("database.length: %d",i.length),e(0,o=!0);case 9:case"end":return a.stop()}},a)}))),a.$$.update=function(){4&a.$$.dirty&&e(5,n=parseInt(s.query.p)*parseInt(s.query.i)),36&a.$$.dirty&&e(6,c=n+parseInt(s.query.i)),98&a.$$.dirty&&e(3,l=i.slice(n,c))},[o,i,s,l,t]}export default(function(o){function i(a){var l;return r(this,i),l=e(this,s(i).call(this)),t(c(l),a,z,P,n,{}),l}return a(i,l),i}());
