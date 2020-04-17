import{S as t,a,s,u as e,b as r,I as n,B as o,J as l,A as c,e as i,P as d,N as u,f as p,t as h,g as f,x as m,h as g,j as v,c as b,k as y,y as x,l as E,m as w,z as k,n as I,d as $,Q as D,R as V,C as S,w as _,o as T,i as N,G as P,D as L,H as A,r as j,p as B,q as C}from"./client.3a753dfb.js";import{c as F}from"./commonjsHelpers.b9e74a66.js";import{c as M}from"./index.edd3fa17.js";var O=F(function(t,a){!function(){var t={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function s(a){return function(a,e){var r,n,o,l,c,i,d,u,p,h=1,f=a.length,m="";for(n=0;n<f;n++)if("string"==typeof a[n])m+=a[n];else if("object"==typeof a[n]){if((l=a[n]).keys)for(r=e[h],o=0;o<l.keys.length;o++){if(null==r)throw new Error(s('[sprintf] Cannot access property "%s" of undefined value "%s"',l.keys[o],l.keys[o-1]));r=r[l.keys[o]]}else r=l.param_no?e[l.param_no]:e[h++];if(t.not_type.test(l.type)&&t.not_primitive.test(l.type)&&r instanceof Function&&(r=r()),t.numeric_arg.test(l.type)&&"number"!=typeof r&&isNaN(r))throw new TypeError(s("[sprintf] expecting number but found %T",r));switch(t.number.test(l.type)&&(u=r>=0),l.type){case"b":r=parseInt(r,10).toString(2);break;case"c":r=String.fromCharCode(parseInt(r,10));break;case"d":case"i":r=parseInt(r,10);break;case"j":r=JSON.stringify(r,null,l.width?parseInt(l.width):0);break;case"e":r=l.precision?parseFloat(r).toExponential(l.precision):parseFloat(r).toExponential();break;case"f":r=l.precision?parseFloat(r).toFixed(l.precision):parseFloat(r);break;case"g":r=l.precision?String(Number(r.toPrecision(l.precision))):parseFloat(r);break;case"o":r=(parseInt(r,10)>>>0).toString(8);break;case"s":r=String(r),r=l.precision?r.substring(0,l.precision):r;break;case"t":r=String(!!r),r=l.precision?r.substring(0,l.precision):r;break;case"T":r=Object.prototype.toString.call(r).slice(8,-1).toLowerCase(),r=l.precision?r.substring(0,l.precision):r;break;case"u":r=parseInt(r,10)>>>0;break;case"v":r=r.valueOf(),r=l.precision?r.substring(0,l.precision):r;break;case"x":r=(parseInt(r,10)>>>0).toString(16);break;case"X":r=(parseInt(r,10)>>>0).toString(16).toUpperCase()}t.json.test(l.type)?m+=r:(!t.number.test(l.type)||u&&!l.sign?p="":(p=u?"+":"-",r=r.toString().replace(t.sign,"")),i=l.pad_char?"0"===l.pad_char?"0":l.pad_char.charAt(1):" ",d=l.width-(p+r).length,c=l.width&&d>0?i.repeat(d):"",m+=l.align?p+r+c:"0"===i?p+c+r:c+p+r)}return m}(function(a){if(r[a])return r[a];var s,e=a,n=[],o=0;for(;e;){if(null!==(s=t.text.exec(e)))n.push(s[0]);else if(null!==(s=t.modulo.exec(e)))n.push("%");else{if(null===(s=t.placeholder.exec(e)))throw new SyntaxError("[sprintf] unexpected placeholder");if(s[2]){o|=1;var l=[],c=s[2],i=[];if(null===(i=t.key.exec(c)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(l.push(i[1]);""!==(c=c.substring(i[0].length));)if(null!==(i=t.key_access.exec(c)))l.push(i[1]);else{if(null===(i=t.index_access.exec(c)))throw new SyntaxError("[sprintf] failed to parse named argument key");l.push(i[1])}s[2]=l}else o|=2;if(3===o)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");n.push({placeholder:s[0],param_no:s[1],keys:s[2],sign:s[3],pad_char:s[4],align:s[5],width:s[6],precision:s[7],type:s[8]})}e=e.substring(s[0].length)}return r[a]=n}(a),arguments)}function e(t,a){return s.apply(null,[t].concat(a||[]))}var r=Object.create(null);a.sprintf=s,a.vsprintf=e,"undefined"!=typeof window&&(window.sprintf=s,window.vsprintf=e)}()});const U=t=>({}),G=t=>({}),z=t=>({}),H=t=>({}),X=t=>({}),q=t=>({}),J=t=>({}),R=t=>({});function Q(t){let a,s,e,n,l,T,N,P,L,A;const j=t[3].subtitle,B=d(j,t,t[2],H),C=new u({props:{name:"settings",color:"secondary"}}),F=t[3].buttons,M=d(F,t,t[2],G),O=t[3].default,X=d(O,t,t[2],null),q=X||function(t){let a,s,e;return{c(){a=p("div"),s=p("p"),e=h("Application Empty"),this.h()},l(t){a=g(t,"DIV",{class:!0,style:!0});var r=v(a);s=g(r,"P",{class:!0});var n=v(s);e=b(n,"Application Empty"),n.forEach(i),r.forEach(i),this.h()},h(){E(s,"class","card-text"),E(a,"class","card-body p-2"),_(a,"box-shadow","inset 0 0 10px #000000")},m(t,n){r(t,a,n),w(a,s),w(s,e)},d(t){t&&i(a)}}}();return{c(){a=p("div"),s=p("div"),e=h(t[0]),n=f(),B&&B.c(),l=f(),T=p("span"),m(C.$$.fragment),N=f(),M&&M.c(),P=f(),q&&q.c(),this.h()},l(r){a=g(r,"DIV",{class:!0});var o=v(a);s=g(o,"DIV",{class:!0});var c=v(s);e=b(c,t[0]),n=y(c),B&&B.l(c),l=y(c),T=g(c,"SPAN",{class:!0});var d=v(T);x(C.$$.fragment,d),d.forEach(i),N=y(c),M&&M.l(c),c.forEach(i),P=y(o),q&&q.l(o),o.forEach(i),this.h()},h(){E(T,"class","float-right border border-secondary rounded d-inline-block px-1"),E(s,"class","card-header lead bg-gradient-gold shadow"),E(a,"class","card bg-night text-night shadow")},m(o,c,i){r(o,a,c),w(a,s),w(s,e),w(s,n),B&&B.m(s,null),w(s,l),w(s,T),k(C,T,null),w(s,N),M&&M.m(s,null),w(a,P),q&&q.m(a,null),L=!0,i&&A(),A=I(T,"click",t[5])},p(t,a){(!L||1&a)&&$(e,t[0]),B&&B.p&&4&a&&B.p(D(j,t,t[2],H),V(j,t[2],a,z)),M&&M.p&&4&a&&M.p(D(F,t,t[2],G),V(F,t[2],a,U)),X&&X.p&&4&a&&X.p(D(O,t,t[2],null),V(O,t[2],a,null))},i(t){L||(c(B,t),c(C.$$.fragment,t),c(M,t),c(q,t),L=!0)},o(t){o(B,t),o(C.$$.fragment,t),o(M,t),o(q,t),L=!1},d(t){t&&i(a),B&&B.d(t),S(C),M&&M.d(t),q&&q.d(t),A()}}}function K(t){let a,s,e,n,l,$,N,P,L,A;const j=new u({props:{name:"checklist",color:"warning"}}),B=t[3].preferences,C=d(B,t,t[2],R),F=C||function(t){let a,s;return{c(){a=p("p"),s=h("Preferences Empty"),this.h()},l(t){a=g(t,"P",{class:!0});var e=v(a);s=b(e,"Preferences Empty"),e.forEach(i),this.h()},h(){E(a,"class","card-text")},m(t,e){r(t,a,e),w(a,s)},d(t){t&&i(a)}}}(),M=t[3]["preferences-footer"],O=d(M,t,t[2],q),U=O||{c:T,l:T,m:T,d:T};return{c(){a=p("div"),s=p("div"),e=h("Preferences\n      \n      "),n=p("span"),m(j.$$.fragment),l=f(),$=p("div"),F&&F.c(),N=f(),P=p("div"),U&&U.c(),this.h()},l(t){a=g(t,"DIV",{class:!0});var r=v(a);s=g(r,"DIV",{class:!0});var o=v(s);e=b(o,"Preferences\n      \n      "),n=g(o,"SPAN",{class:!0});var c=v(n);x(j.$$.fragment,c),c.forEach(i),o.forEach(i),l=y(r),$=g(r,"DIV",{class:!0,style:!0});var d=v($);F&&F.l(d),d.forEach(i),N=y(r),P=g(r,"DIV",{class:!0});var u=v(P);U&&U.l(u),u.forEach(i),r.forEach(i),this.h()},h(){E(n,"class","float-right border border-warning rounded d-inline-block px-1"),E(s,"class","card-header lead"),E($,"class","card-body p-2"),_($,"max-height","25rem"),_($,"overflow-y","auto"),E(P,"class","card-footer small"),E(a,"class","card bg-night text-night shadow")},m(o,c,i){r(o,a,c),w(a,s),w(s,e),w(s,n),k(j,n,null),w(a,l),w(a,$),F&&F.m($,null),w(a,N),w(a,P),U&&U.m(P,null),L=!0,i&&A(),A=I(n,"click",t[4])},p(t,a){C&&C.p&&4&a&&C.p(D(B,t,t[2],R),V(B,t[2],a,J)),O&&O.p&&4&a&&O.p(D(M,t,t[2],q),V(M,t[2],a,X))},i(t){L||(c(j.$$.fragment,t),c(F,t),c(U,t),L=!0)},o(t){o(j.$$.fragment,t),o(F,t),o(U,t),L=!1},d(t){t&&i(a),S(j),F&&F.d(t),U&&U.d(t),A()}}}function W(t){let a,s,d,u;const p=[K,Q],h=[];function f(t,a){return 0==t[1]?0:1==t[1]?1:-1}return~(a=f(t))&&(s=h[a]=p[a](t)),{c(){s&&s.c(),d=e()},l(t){s&&s.l(t),d=e()},m(t,s){~a&&h[a].m(t,s),r(t,d,s),u=!0},p(t,[e]){let r=a;(a=f(t))===r?~a&&h[a].p(t,e):(s&&(n(),o(h[r],1,1,()=>{h[r]=null}),l()),~a?((s=h[a])||(s=h[a]=p[a](t)).c(),c(s,1),s.m(d.parentNode,d)):s=null)},i(t){u||(c(s),u=!0)},o(t){o(s),u=!1},d(t){~a&&h[a].d(t),t&&i(d)}}}function Y(t,a,s){let{title:e="Preferences Card"}=a,r=1,{$$slots:n={},$$scope:o}=a;return t.$set=(t=>{"title"in t&&s(0,e=t.title),"$$scope"in t&&s(2,o=t.$$scope)}),[e,r,o,n,t=>s(1,r=1),t=>s(1,r=0)]}class Z extends t{constructor(t){super(),a(this,t,Y,W,s,{title:0})}}function tt(t){let a,s=t[10]["triangle-right"].toSVG({class:"fill-white"})+"";return{c(){this.h()},l(t){this.h()},h(){a=new A(s,null)},m(t,s){a.m(t,s)},p:T,d(t){t&&a.d()}}}function at(t){let a,s=t[10]["primitive-square"].toSVG({class:"fill-white"})+"";return{c(){this.h()},l(t){this.h()},h(){a=new A(s,null)},m(t,s){a.m(t,s)},p:T,d(t){t&&a.d()}}}function st(t){let a,s,e,n,o,l=t[10]["arrow-right"].toSVG({class:"fill-white"})+"",c=t[10]["arrow-left"].toSVG({class:"fill-white"})+"",d=t[6]&&tt(t),u=!t[6]&&at(t);return{c(){a=p("button"),d&&d.c(),s=f(),u&&u.c(),e=p("button"),n=p("button"),this.h()},l(t){a=g(t,"BUTTON",{slot:!0,class:!0});var r=v(a);d&&d.l(r),s=y(r),u&&u.l(r),r.forEach(i),e=g(t,"BUTTON",{slot:!0,class:!0}),v(e).forEach(i),n=g(t,"BUTTON",{slot:!0,class:!0}),v(n).forEach(i),this.h()},h(){E(a,"slot","buttons"),E(a,"class","btn btn-text btn-sm border border-secondary float-right  mr-1"),E(e,"slot","buttons"),E(e,"class","btn btn-text btn-sm border border-secondary float-right  mr-1"),E(n,"slot","buttons"),E(n,"class","btn btn-text btn-sm border border-secondary float-right  mr-1")},m(i,p,h){r(i,a,p),d&&d.m(a,null),w(a,s),u&&u.m(a,null),r(i,e,p),e.innerHTML=l,r(i,n,p),n.innerHTML=c,h&&j(o),o=[I(a,"click",t[17]),I(e,"click",t[11]),I(n,"click",t[12])]},p(t,e){t[6]?d?d.p(t,e):((d=tt(t)).c(),d.m(a,s)):d&&(d.d(1),d=null),t[6]?u&&(u.d(1),u=null):u?u.p(t,e):((u=at(t)).c(),u.m(a,null))},d(t){t&&i(a),d&&d.d(),u&&u.d(),t&&i(e),t&&i(n),j(o)}}}function et(t){let a,s,e,n,o,l,c,d,u,m,x,k,$,D,V,S,_,T,N,P,L,A,C,F,M,O,U,G,z,H,X,q,J,R,Q,K,W,Y,Z,tt,at,st,et,rt,nt=!1,ot=!1;function lt(){nt=!0,t[18].call(c)}function ct(){ot=!0,t[19].call(T)}return{c(){a=p("div"),s=p("div"),e=p("label"),n=h("Duration"),o=f(),l=p("div"),c=p("input"),d=f(),u=p("div"),m=p("span"),x=h("seconds"),k=f(),$=p("div"),D=p("label"),V=h("Autopause"),S=f(),_=p("div"),T=p("input"),P=f(),L=p("div"),A=p("span"),C=h("minutes"),F=f(),M=p("div"),O=p("label"),U=h("Big Titles"),G=f(),z=p("div"),H=p("div"),X=p("input"),q=f(),J=p("label"),R=f(),Q=p("div"),K=p("label"),W=h("Footer"),Y=f(),Z=p("div"),tt=p("div"),at=p("input"),st=f(),et=p("label"),this.h()},l(t){a=g(t,"DIV",{slot:!0,class:!0});var r=v(a);s=g(r,"DIV",{class:!0});var p=v(s);e=g(p,"LABEL",{class:!0,for:!0});var h=v(e);n=b(h,"Duration"),h.forEach(i),o=y(p),l=g(p,"DIV",{class:!0});var f=v(l);c=g(f,"INPUT",{type:!0,id:!0,min:!0,max:!0,class:!0,placeholder:!0}),d=y(f),u=g(f,"DIV",{class:!0});var E=v(u);m=g(E,"SPAN",{class:!0,id:!0});var w=v(m);x=b(w,"seconds"),w.forEach(i),E.forEach(i),f.forEach(i),p.forEach(i),k=y(r),$=g(r,"DIV",{class:!0});var I=v($);D=g(I,"LABEL",{class:!0,for:!0});var N=v(D);V=b(N,"Autopause"),N.forEach(i),S=y(I),_=g(I,"DIV",{class:!0});var j=v(_);T=g(j,"INPUT",{type:!0,id:!0,min:!0,max:!0,class:!0,placeholder:!0}),P=y(j),L=g(j,"DIV",{class:!0});var B=v(L);A=g(B,"SPAN",{class:!0,id:!0});var rt=v(A);C=b(rt,"minutes"),rt.forEach(i),B.forEach(i),j.forEach(i),I.forEach(i),F=y(r),M=g(r,"DIV",{class:!0});var nt=v(M);O=g(nt,"LABEL",{class:!0,for:!0});var ot=v(O);U=b(ot,"Big Titles"),ot.forEach(i),G=y(nt),z=g(nt,"DIV",{class:!0});var lt=v(z);H=g(lt,"DIV",{class:!0});var ct=v(H);X=g(ct,"INPUT",{type:!0,class:!0,id:!0}),q=y(ct),J=g(ct,"LABEL",{class:!0,for:!0}),v(J).forEach(i),ct.forEach(i),lt.forEach(i),nt.forEach(i),R=y(r),Q=g(r,"DIV",{class:!0});var it=v(Q);K=g(it,"LABEL",{class:!0,for:!0});var dt=v(K);W=b(dt,"Footer"),dt.forEach(i),Y=y(it),Z=g(it,"DIV",{class:!0});var ut=v(Z);tt=g(ut,"DIV",{class:!0});var pt=v(tt);at=g(pt,"INPUT",{type:!0,class:!0,id:!0}),st=y(pt),et=g(pt,"LABEL",{class:!0,for:!0}),v(et).forEach(i),pt.forEach(i),ut.forEach(i),it.forEach(i),r.forEach(i),this.h()},h(){E(e,"class","small"),E(e,"for","duration"),E(c,"type","number"),E(c,"id","duration"),E(c,"min","10"),E(c,"max","120"),E(c,"class","form-control"),E(c,"placeholder","number of seconds to display"),E(m,"class","input-group-text "),E(m,"id","duration-addon"),E(u,"class","input-group-append"),E(l,"class","input-group mb-3"),E(s,"class","card-text"),E(D,"class","small"),E(D,"for","duration"),E(T,"type","number"),E(T,"id","duration"),E(T,"min","15"),E(T,"max",N=1440),E(T,"class","form-control"),E(T,"placeholder","minutes until autopause"),E(A,"class","input-group-text "),E(A,"id","duration-addon"),E(L,"class","input-group-append"),E(_,"class","input-group mb-3"),E($,"class","card-text"),E(O,"class","small"),E(O,"for","duration"),E(X,"type","checkbox"),E(X,"class","custom-control-input"),E(X,"id","titleControl"),E(J,"class","custom-control-label"),E(J,"for","titleControl"),E(H,"class","custom-control custom-switch"),E(z,"class","input-group mb-3"),E(M,"class","card-text"),E(K,"class","small"),E(K,"for","duration"),E(at,"type","checkbox"),E(at,"class","custom-control-input"),E(at,"id","footerControl"),E(et,"class","custom-control-label"),E(et,"for","footerControl"),E(tt,"class","custom-control custom-switch"),E(Z,"class","input-group mb-3"),E(Q,"class","card-text"),E(a,"slot","preferences"),E(a,"class","card-text")},m(i,p,h){r(i,a,p),w(a,s),w(s,e),w(e,n),w(s,o),w(s,l),w(l,c),B(c,t[1]),w(l,d),w(l,u),w(u,m),w(m,x),w(a,k),w(a,$),w($,D),w(D,V),w($,S),w($,_),w(_,T),B(T,t[5]),w(_,P),w(_,L),w(L,A),w(A,C),w(a,F),w(a,M),w(M,O),w(O,U),w(M,G),w(M,z),w(z,H),w(H,X),X.checked=t[4],w(H,q),w(H,J),w(a,R),w(a,Q),w(Q,K),w(K,W),w(Q,Y),w(Q,Z),w(Z,tt),w(tt,at),at.checked=t[0],w(tt,st),w(tt,et),h&&j(rt),rt=[I(c,"input",lt),I(T,"input",ct),I(X,"change",t[20]),I(at,"change",t[21])]},p(t,a){!nt&&2&a&&B(c,t[1]),nt=!1,!ot&&32&a&&B(T,t[5]),ot=!1,16&a&&(X.checked=t[4]),1&a&&(at.checked=t[0])},d(t){t&&i(a),j(rt)}}}function rt(t){let a,s,e,n,o,l,c,d,u=t[2].indexOf(t[3])+1+"",f=t[2].length+"",m=60*t[5]-t[7]+"";return{c(){a=p("div"),s=h("Showing video #"),e=h(u),n=h(" out of "),o=h(f),l=h(" videos.\n  There is "),c=h(m),d=h(" seconds left until autopause."),this.h()},l(t){a=g(t,"DIV",{slot:!0});var r=v(a);s=b(r,"Showing video #"),e=b(r,u),n=b(r," out of "),o=b(r,f),l=b(r," videos.\n  There is "),c=b(r,m),d=b(r," seconds left until autopause."),r.forEach(i),this.h()},h(){E(a,"slot","preferences-footer")},m(t,i){r(t,a,i),w(a,s),w(a,e),w(a,n),w(a,o),w(a,l),w(a,c),w(a,d)},p(t,a){12&a&&u!==(u=t[2].indexOf(t[3])+1+"")&&$(e,u),4&a&&f!==(f=t[2].length+"")&&$(o,f),160&a&&m!==(m=60*t[5]-t[7]+"")&&$(c,m)},d(t){t&&i(a)}}}function nt(t){let a,s,n,o,l,c,d,u,h,m,b=t[4]&&lt(t),x=!t[4]&&ct(t),k=t[0]&&it(t);return{c(){a=p("a"),s=p("img"),c=f(),d=p("div"),b&&b.c(),u=f(),x&&x.c(),h=f(),k&&k.c(),m=e(),this.h()},l(t){a=g(t,"A",{href:!0,rel:!0,target:!0});var r=v(a);s=g(r,"IMG",{src:!0,class:!0,alt:!0}),r.forEach(i),c=y(t),d=g(t,"DIV",{class:!0});var n=v(d);b&&b.l(n),u=y(n),x&&x.l(n),n.forEach(i),h=y(t),k&&k.l(t),m=e(),this.h()},h(){s.src!==(n=t[3].image)&&E(s,"src",n),E(s,"class","card-img"),E(s,"alt",o=t[3].title),E(a,"href",l=t[3].url),E(a,"rel","noopener noreferrer"),E(a,"target","_blank"),E(d,"class","card-body p-1 m-0")},m(t,e){r(t,a,e),w(a,s),r(t,c,e),r(t,d,e),b&&b.m(d,null),w(d,u),x&&x.m(d,null),r(t,h,e),k&&k.m(t,e),r(t,m,e)},p(t,e){8&e&&s.src!==(n=t[3].image)&&E(s,"src",n),8&e&&o!==(o=t[3].title)&&E(s,"alt",o),8&e&&l!==(l=t[3].url)&&E(a,"href",l),t[4]?b?b.p(t,e):((b=lt(t)).c(),b.m(d,u)):b&&(b.d(1),b=null),t[4]?x&&(x.d(1),x=null):x?x.p(t,e):((x=ct(t)).c(),x.m(d,null)),t[0]?k?k.p(t,e):((k=it(t)).c(),k.m(m.parentNode,m)):k&&(k.d(1),k=null)},d(t){t&&i(a),t&&i(c),t&&i(d),b&&b.d(),x&&x.d(),t&&i(h),k&&k.d(t),t&&i(m)}}}function ot(t){let a,s,e,n,o,l,c;return{c(){a=p("div"),s=p("div"),e=h("Loading Database..."),n=f(),o=p("div"),l=p("span"),c=h("Loading Database..."),this.h()},l(t){a=g(t,"DIV",{class:!0});var r=v(a);s=g(r,"DIV",{class:!0});var d=v(s);e=b(d,"Loading Database..."),d.forEach(i),n=y(r),o=g(r,"DIV",{class:!0,role:!0});var u=v(o);l=g(u,"SPAN",{class:!0});var p=v(l);c=b(p,"Loading Database..."),p.forEach(i),u.forEach(i),r.forEach(i),this.h()},h(){E(s,"class","p-5"),E(l,"class","sr-only"),E(o,"class","spinner-border"),E(o,"role","status"),E(a,"class","card-body text-center")},m(t,i){r(t,a,i),w(a,s),w(s,e),w(a,n),w(a,o),w(o,l),w(l,c)},p:T,d(t){t&&i(a)}}}function lt(t){let a,s,e=t[3].title+"";return{c(){a=p("h5"),s=h(e),this.h()},l(t){a=g(t,"H5",{class:!0});var r=v(a);s=b(r,e),r.forEach(i),this.h()},h(){E(a,"class","card-title text-center m-0 p-2")},m(t,e){r(t,a,e),w(a,s)},p(t,a){8&a&&e!==(e=t[3].title+"")&&$(s,e)},d(t){t&&i(a)}}}function ct(t){let a,s,e=t[3].title+"";return{c(){a=p("p"),s=h(e),this.h()},l(t){a=g(t,"P",{class:!0});var r=v(a);s=b(r,e),r.forEach(i),this.h()},h(){E(a,"class","card-text small text-center")},m(t,e){r(t,a,e),w(a,s)},p(t,a){8&a&&e!==(e=t[3].title+"")&&$(s,e)},d(t){t&&i(a)}}}function it(t){let a,s,e,n,o,l;return{c(){a=p("div"),s=p("div"),e=p("div"),n=f(),o=p("div"),l=p("div"),this.h()},l(t){a=g(t,"DIV",{class:!0});var r=v(a);s=g(r,"DIV",{class:!0,style:!0});var c=v(s);e=g(c,"DIV",{class:!0,role:!0,style:!0,"aria-valuenow":!0,"aria-valuemin":!0,"aria-valuemax":!0}),v(e).forEach(i),c.forEach(i),n=y(r),o=g(r,"DIV",{class:!0,style:!0});var d=v(o);l=g(d,"DIV",{class:!0,role:!0,style:!0,"aria-valuenow":!0,"aria-valuemin":!0,"aria-valuemax":!0}),v(l).forEach(i),d.forEach(i),r.forEach(i),this.h()},h(){E(e,"class","progress-bar bg-warning"),E(e,"role","progressbar"),_(e,"width",t[8]+"%"),E(e,"aria-valuenow",t[8]),E(e,"aria-valuemin","0"),E(e,"aria-valuemax","100"),E(s,"class","progress"),_(s,"height","1px"),_(s,"background","black"),E(l,"class","progress-bar bg-secondary"),E(l,"role","progressbar"),_(l,"width",t[9]+"%"),E(l,"aria-valuenow",t[9]),E(l,"aria-valuemin","0"),E(l,"aria-valuemax","100"),E(o,"class","progress mt-1"),_(o,"height","1px"),_(o,"background","black"),E(a,"class","card-footer")},m(t,c){r(t,a,c),w(a,s),w(s,e),w(a,n),w(a,o),w(o,l)},p(t,a){256&a&&_(e,"width",t[8]+"%"),256&a&&E(e,"aria-valuenow",t[8]),512&a&&_(l,"width",t[9]+"%"),512&a&&E(l,"aria-valuenow",t[9])},d(t){t&&i(a)}}}function dt(t){let a,s,n,o,l,c;function d(t,a){return 0===t[2].length?ot:nt}let u=d(t),p=u(t);return{c(){a=f(),s=f(),n=f(),o=f(),l=f(),p.c(),c=e()},l(t){a=y(t),s=y(t),n=y(t),o=y(t),l=y(t),p.l(t),c=e()},m(t,e){r(t,a,e),r(t,s,e),r(t,n,e),r(t,o,e),r(t,l,e),p.m(t,e),r(t,c,e)},p(t,a){u===(u=d(t))&&p?p.p(t,a):(p.d(1),(p=u(t))&&(p.c(),p.m(c.parentNode,c)))},d(t){t&&i(a),t&&i(s),t&&i(n),t&&i(o),t&&i(l),p.d(t),t&&i(c)}}}function ut(t){let a;const s=new Z({props:{title:"Videos",$$slots:{default:[dt],"preferences-footer":[rt],preferences:[et],buttons:[st]},$$scope:{ctx:t}}});return{c(){m(s.$$.fragment)},l(t){x(s.$$.fragment,t)},m(t,e){k(s,t,e),a=!0},p(t,[a]){const e={};4195327&a&&(e.$$scope={dirty:a,ctx:t}),s.$set(e)},i(t){a||(c(s.$$.fragment,t),a=!0)},o(t){o(s.$$.fragment,t),a=!1},d(t){S(s,t)}}}function pt(t){for(let a=t.length-1;a>0;a--){const s=Math.floor(Math.random()*(a+1));[t[a],t[s]]=[t[s],t[a]]}return t}function ht(t,a){return t=Math.ceil(t),a=Math.floor(a),Math.floor(Math.random()*(a-t+1))+t}function ft(t,a,s){const e=N(),r=O.sprintf;let n=[],o="",l=!1,c=15,{footer:i=!0}=a,{duration:d=ht(10,60)}=a;P(async function(){const t=await fetch("/youtube.json"),a=await t.json();setTimeout(t=>{s(2,n=pt(a)),b()},1e3)});let u=!1,p=0,h=0,f=0,m=0,g=-1,v=setInterval(function(){u||0!==n.length&&(p>=d&&b(),p++,s(7,h++,h),s(8,f=100*M(p,d)),s(9,m=r("%.0f",100*M(g+1,n.length))),h>=60*c&&(s(6,u=!0),s(7,h=0)))},1e3);function b(){p=0,s(8,f=0),++g+1>n.length&&(s(2,n=pt(n)),g=0),s(3,o=n[g]),console.log(o)}L(()=>{clearInterval(v)});return t.$set=(t=>{"footer"in t&&s(0,i=t.footer),"duration"in t&&s(1,d=t.duration)}),[i,d,n,o,l,c,u,h,f,m,e,b,function(){p=0,s(8,f=0),0==g||g--,s(3,o=n[g])},p,g,r,v,t=>s(6,u=!u),function(){d=C(this.value),s(1,d)},function(){c=C(this.value),s(5,c)},function(){l=this.checked,s(4,l)},function(){i=this.checked,s(0,i)}]}class mt extends t{constructor(t){super(),a(this,t,ft,ut,s,{footer:0,duration:1})}}export{Z as P,mt as R,O as s};