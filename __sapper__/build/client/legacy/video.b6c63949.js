import{d as r,e as a,f as e,h as s,i as t,s as n,j as c,S as l,o,p as i,t as u,q as f,r as d,n as h,u as p,k as v,v as y,l as g,w as I,m as q,$ as m,F as b,Z as E,y as w,z as x,E as V,a6 as D,a7 as $,R as j,T as k,U as R}from"./client.1b776f09.js";function A(r,a,e){var s=r.slice();return s[8]=a[e],s}function M(r){var a,e,s,t,n,c,l,m,b,E,w,x,V=r[8].title+"";return{c:function(){a=o("div"),e=o("div"),s=o("a"),t=o("img"),m=i(),b=o("div"),E=o("h5"),w=u(V),x=i(),this.h()},l:function(r){a=f(r,"DIV",{class:!0});var n=d(a);e=f(n,"DIV",{class:!0});var c=d(e);s=f(c,"A",{href:!0,rel:!0,target:!0});var l=d(s);t=f(l,"IMG",{src:!0,class:!0,alt:!0}),l.forEach(h),m=p(c),b=f(c,"DIV",{class:!0});var o=d(b);E=f(o,"H5",{class:!0});var i=d(E);w=v(i,V),i.forEach(h),o.forEach(h),c.forEach(h),x=p(n),n.forEach(h),this.h()},h:function(){t.src!==(n=r[8].image)&&y(t,"src",n),y(t,"class","card-img-top"),y(t,"alt",c=r[8].title),y(s,"href",l=r[8].url),y(s,"rel","noopener noreferrer"),y(s,"target","_blank"),y(E,"class","card-text small"),y(b,"class","card-body p-3"),y(e,"class","card bg-secondary text-white shadow p-0 m-0"),y(a,"class","col mb-4")},m:function(r,n){g(r,a,n),I(a,e),I(e,s),I(s,t),I(e,m),I(e,b),I(b,E),I(E,w),I(a,x)},p:function(r,a){8&a&&t.src!==(n=r[8].image)&&y(t,"src",n),8&a&&c!==(c=r[8].title)&&y(t,"alt",c),8&a&&l!==(l=r[8].url)&&y(s,"href",l),8&a&&V!==(V=r[8].title+"")&&q(w,V)},d:function(r){r&&h(a)}}}function P(r){for(var a,e,s,t,n,c,l,D,$,j,k,R,P,z,F,G,H,S,T,U,Z,_,B,C,J,K,L,N,O,Q,W,X=parseInt(r[2].query.p)+"",Y=parseInt(r[2].query.p)+1+"",rr=Math.ceil(r[1].length/parseInt(r[2].query.i))+"",ar=parseInt(r[2].query.p)+2+"",er=r[3],sr=[],tr=0;tr<er.length;tr+=1)sr[tr]=M(A(r,er,tr));return{c:function(){a=i(),e=o("div"),s=o("div");for(var r=0;r<sr.length;r+=1)sr[r].c();t=i(),n=o("div"),c=o("div"),l=o("a"),D=u("« Return to page "),$=u(X),k=i(),R=o("div"),P=o("div"),z=u("Viewing page "),F=u(Y),G=u(" out of "),H=u(rr),S=i(),T=o("div"),U=o("div"),Z=o("a"),_=u("Page "),B=u(ar),C=u(" »"),K=i(),L=o("div"),N=o("div"),O=o("a"),Q=u("Return to page 1 ∞"),this.h()},l:function(r){m('[data-svelte="svelte-1ryjoj1"]',document.head).forEach(h),a=p(r),e=f(r,"DIV",{class:!0,style:!0});var o=d(e);s=f(o,"DIV",{class:!0});for(var i=d(s),u=0;u<sr.length;u+=1)sr[u].l(i);i.forEach(h),t=p(o),n=f(o,"DIV",{class:!0,style:!0});var y=d(n);c=f(y,"DIV",{class:!0});var g=d(c);l=f(g,"A",{class:!0,href:!0});var I=d(l);D=v(I,"« Return to page "),$=v(I,X),I.forEach(h),g.forEach(h),k=p(y),R=f(y,"DIV",{class:!0});var q=d(R);P=f(q,"DIV",{class:!0});var b=d(P);z=v(b,"Viewing page "),F=v(b,Y),G=v(b," out of "),H=v(b,rr),b.forEach(h),q.forEach(h),y.forEach(h),S=p(o),T=f(o,"DIV",{class:!0,style:!0});var E=d(T);U=f(E,"DIV",{class:!0});var w=d(U);Z=f(w,"A",{class:!0,href:!0});var x=d(Z);_=v(x,"Page "),B=v(x,ar),C=v(x," »"),x.forEach(h),w.forEach(h),E.forEach(h),K=p(o),L=f(o,"DIV",{class:!0,style:!0});var V=d(L);N=f(V,"DIV",{class:!0});var j=d(N);O=f(j,"A",{class:!0,href:!0});var A=d(O);Q=v(A,"Return to page 1 ∞"),A.forEach(h),j.forEach(h),V.forEach(h),o.forEach(h),this.h()},h:function(){document.title="𝗖𝗔𝗧 𝗣𝗘𝗔: Videos",y(s,"class","row row-cols-1 row-cols-md-2 row-cols-xl-4"),y(l,"class","btn btn-secondary btn-lg text-dark shadow"),y(l,"href",j="/video?p="+(parseInt(r[2].query.p)-1)+"&i="+r[2].query.i),y(c,"class","col-md-6 mb-4 order-2 order-md-1"),y(P,"class","p-2 lead text-muted"),y(R,"class","col-md-6 mb-4 text-md-right order-1 order-md-2"),y(n,"class","row"),b(n,"display","none"),E(n,"d-flex",parseInt(r[2].query.p)-1>-1),y(Z,"class","btn btn-secondary btn-lg btn-block shadow"),y(Z,"href",J="/video?p="+(parseInt(r[2].query.p)+1)+"&i="+r[2].query.i),y(U,"class","col mb-4"),y(T,"class","row"),b(T,"display","none"),E(T,"d-flex",(parseInt(r[2].query.p)+1)*parseInt(r[2].query.i)<r[1].length),y(O,"class","btn btn-secondary btn-lg btn-block shadow"),y(O,"href",W="/video?p=0&i="+r[2].query.i),y(N,"class","col mb-4"),y(L,"class","row"),b(L,"display","none"),E(L,"d-flex",(parseInt(r[2].query.p)+1)*parseInt(r[2].query.i)>=r[1].length),y(e,"class","container-fluid"),b(e,"visibility","hidden"),E(e,"visible",r[0])},m:function(r,o){g(r,a,o),g(r,e,o),I(e,s);for(var i=0;i<sr.length;i+=1)sr[i].m(s,null);I(e,t),I(e,n),I(n,c),I(c,l),I(l,D),I(l,$),I(n,k),I(n,R),I(R,P),I(P,z),I(P,F),I(P,G),I(P,H),I(e,S),I(e,T),I(T,U),I(U,Z),I(Z,_),I(Z,B),I(Z,C),I(e,K),I(e,L),I(L,N),I(N,O),I(O,Q)},p:function(r,a){var t=w(a,1)[0];if(8&t){var c;for(er=r[3],c=0;c<er.length;c+=1){var o=A(r,er,c);sr[c]?sr[c].p(o,t):(sr[c]=M(o),sr[c].c(),sr[c].m(s,null))}for(;c<sr.length;c+=1)sr[c].d(1);sr.length=er.length}4&t&&X!==(X=parseInt(r[2].query.p)+"")&&q($,X),4&t&&j!==(j="/video?p="+(parseInt(r[2].query.p)-1)+"&i="+r[2].query.i)&&y(l,"href",j),4&t&&Y!==(Y=parseInt(r[2].query.p)+1+"")&&q(F,Y),6&t&&rr!==(rr=Math.ceil(r[1].length/parseInt(r[2].query.i))+"")&&q(H,rr),4&t&&E(n,"d-flex",parseInt(r[2].query.p)-1>-1),4&t&&ar!==(ar=parseInt(r[2].query.p)+2+"")&&q(B,ar),4&t&&J!==(J="/video?p="+(parseInt(r[2].query.p)+1)+"&i="+r[2].query.i)&&y(Z,"href",J),6&t&&E(T,"d-flex",(parseInt(r[2].query.p)+1)*parseInt(r[2].query.i)<r[1].length),4&t&&W!==(W="/video?p=0&i="+r[2].query.i)&&y(O,"href",W),6&t&&E(L,"d-flex",(parseInt(r[2].query.p)+1)*parseInt(r[2].query.i)>=r[1].length),1&t&&E(e,"visible",r[0])},i:x,o:x,d:function(r){r&&h(a),r&&h(e),V(sr,r)}}}function z(r,a,e){var s,t=D().page;$(r,t,function(r){return e(2,s=r)});var n,c,l,o=!1,i=[];return j(k(R.mark(function r(){var a,s;return R.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("youtube.json");case 2:return a=r.sent,r.next=5,a.json();case 5:s=r.sent,e(1,i=s),console.log("database.length: %d",i.length),e(0,o=!0);case 9:case"end":return r.stop()}},r)}))),r.$$.update=function(){4&r.$$.dirty&&e(5,n=parseInt(s.query.p)*parseInt(s.query.i)),36&r.$$.dirty&&e(6,c=n+parseInt(s.query.i)),98&r.$$.dirty&&e(3,l=i.slice(n,c))},[o,i,s,l,t]}export default(function(o){function i(r){var l;return a(this,i),l=e(this,s(i).call(this)),t(c(l),r,z,P,n,{}),l}return r(i,l),i}());
