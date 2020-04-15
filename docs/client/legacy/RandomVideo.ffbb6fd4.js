import{c as n,_ as t,d as r,e as a,f as e,s as c,g as o,S as s,D as i,j as l,x as u,W as f,K as d,X as p,J as h,l as v,z as m,A as g,a2 as b,a0 as y,m as x,t as E,n as w,G as k,o as I,p as $,h as D,q as V,H as S,r as _,u as T,I as P,w as L,k as N,a3 as A,a4 as j,L as B,F as R,y as C,i as F,V as M,T as O,U,M as G,R as z,v as H,B as X,C as q}from"./client.7d6f0227.js";import{c as J}from"./index.a9e22bc8.js";var K=n(function(n,r){!function(){var n={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function a(r){return function(r,e){var c,o,s,i,l,u,f,d,p,h=1,v=r.length,m="";for(o=0;o<v;o++)if("string"==typeof r[o])m+=r[o];else if("object"===t(r[o])){if((i=r[o]).keys)for(c=e[h],s=0;s<i.keys.length;s++){if(null==c)throw new Error(a('[sprintf] Cannot access property "%s" of undefined value "%s"',i.keys[s],i.keys[s-1]));c=c[i.keys[s]]}else c=i.param_no?e[i.param_no]:e[h++];if(n.not_type.test(i.type)&&n.not_primitive.test(i.type)&&c instanceof Function&&(c=c()),n.numeric_arg.test(i.type)&&"number"!=typeof c&&isNaN(c))throw new TypeError(a("[sprintf] expecting number but found %T",c));switch(n.number.test(i.type)&&(d=c>=0),i.type){case"b":c=parseInt(c,10).toString(2);break;case"c":c=String.fromCharCode(parseInt(c,10));break;case"d":case"i":c=parseInt(c,10);break;case"j":c=JSON.stringify(c,null,i.width?parseInt(i.width):0);break;case"e":c=i.precision?parseFloat(c).toExponential(i.precision):parseFloat(c).toExponential();break;case"f":c=i.precision?parseFloat(c).toFixed(i.precision):parseFloat(c);break;case"g":c=i.precision?String(Number(c.toPrecision(i.precision))):parseFloat(c);break;case"o":c=(parseInt(c,10)>>>0).toString(8);break;case"s":c=String(c),c=i.precision?c.substring(0,i.precision):c;break;case"t":c=String(!!c),c=i.precision?c.substring(0,i.precision):c;break;case"T":c=Object.prototype.toString.call(c).slice(8,-1).toLowerCase(),c=i.precision?c.substring(0,i.precision):c;break;case"u":c=parseInt(c,10)>>>0;break;case"v":c=c.valueOf(),c=i.precision?c.substring(0,i.precision):c;break;case"x":c=(parseInt(c,10)>>>0).toString(16);break;case"X":c=(parseInt(c,10)>>>0).toString(16).toUpperCase()}n.json.test(i.type)?m+=c:(!n.number.test(i.type)||d&&!i.sign?p="":(p=d?"+":"-",c=c.toString().replace(n.sign,"")),u=i.pad_char?"0"===i.pad_char?"0":i.pad_char.charAt(1):" ",f=i.width-(p+c).length,l=i.width&&f>0?u.repeat(f):"",m+=i.align?p+c+l:"0"===u?p+l+c:l+p+c)}return m}(function(t){if(c[t])return c[t];var r,a=t,e=[],o=0;for(;a;){if(null!==(r=n.text.exec(a)))e.push(r[0]);else if(null!==(r=n.modulo.exec(a)))e.push("%");else{if(null===(r=n.placeholder.exec(a)))throw new SyntaxError("[sprintf] unexpected placeholder");if(r[2]){o|=1;var s=[],i=r[2],l=[];if(null===(l=n.key.exec(i)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(s.push(l[1]);""!==(i=i.substring(l[0].length));)if(null!==(l=n.key_access.exec(i)))s.push(l[1]);else{if(null===(l=n.index_access.exec(i)))throw new SyntaxError("[sprintf] failed to parse named argument key");s.push(l[1])}r[2]=s}else o|=2;if(3===o)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");e.push({placeholder:r[0],param_no:r[1],keys:r[2],sign:r[3],pad_char:r[4],align:r[5],width:r[6],precision:r[7],type:r[8]})}a=a.substring(r[0].length)}return c[t]=e}(r),arguments)}function e(n,t){return a.apply(null,[n].concat(t||[]))}var c=Object.create(null);r.sprintf=a,r.vsprintf=e,"undefined"!=typeof window&&(window.sprintf=a,window.vsprintf=e)}()});function W(n){return function(){var t,r=m(n);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}()){var a=m(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return g(this,t)}}var Q=function(n){return{}},Y=function(n){return{}},Z=function(n){return{}},nn=function(n){return{}},tn=function(n){return{}},rn=function(n){return{}},an=function(n){return{}},en=function(n){return{}};function cn(n){var t,r,a,e,c,o,s,i,u,f,p,m,g,C=n[3].subtitle,F=b(C,n,n[2],nn),M=new y({props:{name:"settings",color:"secondary"}}),O=n[3].buttons,U=b(O,n,n[2],Y),G=n[3].default,z=b(G,n,n[2],null),H=z||{c:function(){p=x("div"),m=x("p"),g=E("Application Empty"),this.h()},l:function(n){p=I(n,"DIV",{class:!0,style:!0});var t=$(p);m=I(t,"P",{class:!0});var r=$(m);g=D(r,"Application Empty"),r.forEach(v),t.forEach(v),this.h()},h:function(){_(m,"class","card-text"),_(p,"class","card-body p-2"),R(p,"box-shadow","inset 0 0 10px #000000")},m:function(n,t){l(n,p,t),T(p,m),T(m,g)},d:function(n){n&&v(p)}};return{c:function(){t=x("div"),r=x("div"),a=E(n[0]),e=w(),F&&F.c(),c=w(),o=x("span"),k(M.$$.fragment),s=w(),U&&U.c(),i=w(),H&&H.c(),this.h()},l:function(l){t=I(l,"DIV",{class:!0});var u=$(t);r=I(u,"DIV",{class:!0});var f=$(r);a=D(f,n[0]),e=V(f),F&&F.l(f),c=V(f),o=I(f,"SPAN",{class:!0});var d=$(o);S(M.$$.fragment,d),d.forEach(v),s=V(f),U&&U.l(f),f.forEach(v),i=V(u),H&&H.l(u),u.forEach(v),this.h()},h:function(){_(o,"class","float-right border border-secondary rounded d-inline-block px-1"),_(r,"class","card-header lead bg-gradient-gold shadow"),_(t,"class","card bg-night text-night shadow")},m:function(d,p,h){l(d,t,p),T(t,r),T(r,a),T(r,e),F&&F.m(r,null),T(r,c),T(r,o),P(M,o,null),T(r,s),U&&U.m(r,null),T(t,i),H&&H.m(t,null),u=!0,h&&f(),f=L(o,"click",n[5])},p:function(n,t){(!u||1&t)&&N(a,n[0]),F&&F.p&&4&t&&F.p(A(C,n,n[2],nn),j(C,n[2],t,Z)),U&&U.p&&4&t&&U.p(A(O,n,n[2],Y),j(O,n[2],t,Q)),z&&z.p&&4&t&&z.p(A(G,n,n[2],null),j(G,n[2],t,null))},i:function(n){u||(h(F,n),h(M.$$.fragment,n),h(U,n),h(H,n),u=!0)},o:function(n){d(F,n),d(M.$$.fragment,n),d(U,n),d(H,n),u=!1},d:function(n){n&&v(t),F&&F.d(n),B(M),U&&U.d(n),H&&H.d(n),f()}}}function on(n){var t,r,a,e,c,o,s,i,u,f,p,m,g=new y({props:{name:"checklist",color:"warning"}}),N=n[3].preferences,F=b(N,n,n[2],en),M=F||{c:function(){p=x("p"),m=E("Preferences Empty"),this.h()},l:function(n){p=I(n,"P",{class:!0});var t=$(p);m=D(t,"Preferences Empty"),t.forEach(v),this.h()},h:function(){_(p,"class","card-text")},m:function(n,t){l(n,p,t),T(p,m)},d:function(n){n&&v(p)}},O=n[3]["preferences-footer"],U=b(O,n,n[2],rn),G=U||{c:C,l:C,m:C,d:C};return{c:function(){t=x("div"),r=x("div"),a=E("Preferences\n      \n      "),e=x("span"),k(g.$$.fragment),c=w(),o=x("div"),M&&M.c(),s=w(),i=x("div"),G&&G.c(),this.h()},l:function(n){t=I(n,"DIV",{class:!0});var l=$(t);r=I(l,"DIV",{class:!0});var u=$(r);a=D(u,"Preferences\n      \n      "),e=I(u,"SPAN",{class:!0});var f=$(e);S(g.$$.fragment,f),f.forEach(v),u.forEach(v),c=V(l),o=I(l,"DIV",{class:!0,style:!0});var d=$(o);M&&M.l(d),d.forEach(v),s=V(l),i=I(l,"DIV",{class:!0});var p=$(i);G&&G.l(p),p.forEach(v),l.forEach(v),this.h()},h:function(){_(e,"class","float-right border border-warning rounded d-inline-block px-1"),_(r,"class","card-header lead"),_(o,"class","card-body p-2"),R(o,"max-height","25rem"),R(o,"overflow-y","auto"),_(i,"class","card-footer small"),_(t,"class","card bg-night text-night shadow")},m:function(d,p,h){l(d,t,p),T(t,r),T(r,a),T(r,e),P(g,e,null),T(t,c),T(t,o),M&&M.m(o,null),T(t,s),T(t,i),G&&G.m(i,null),u=!0,h&&f(),f=L(e,"click",n[4])},p:function(n,t){F&&F.p&&4&t&&F.p(A(N,n,n[2],en),j(N,n[2],t,an)),U&&U.p&&4&t&&U.p(A(O,n,n[2],rn),j(O,n[2],t,tn))},i:function(n){u||(h(g.$$.fragment,n),h(M,n),h(G,n),u=!0)},o:function(n){d(g.$$.fragment,n),d(M,n),d(G,n),u=!1},d:function(n){n&&v(t),B(g),M&&M.d(n),G&&G.d(n),f()}}}function sn(n){var t,r,a,e,c=[on,cn],o=[];function s(n,t){return 0==n[1]?0:1==n[1]?1:-1}return~(t=s(n))&&(r=o[t]=c[t](n)),{c:function(){r&&r.c(),a=i()},l:function(n){r&&r.l(n),a=i()},m:function(n,r){~t&&o[t].m(n,r),l(n,a,r),e=!0},p:function(n,e){var i=u(e,1)[0],l=t;(t=s(n))===l?~t&&o[t].p(n,i):(r&&(f(),d(o[l],1,1,function(){o[l]=null}),p()),~t?((r=o[t])||(r=o[t]=c[t](n)).c(),h(r,1),r.m(a.parentNode,a)):r=null)},i:function(n){e||(h(r),e=!0)},o:function(n){d(r),e=!1},d:function(n){~t&&o[t].d(n),n&&v(a)}}}function ln(n,t,r){var a=t.title,e=void 0===a?"Preferences Card":a,c=1,o=t.$$slots,s=void 0===o?{}:o,i=t.$$scope;return n.$set=function(n){"title"in n&&r(0,e=n.title),"$$scope"in n&&r(2,i=n.$$scope)},[e,c,i,s,function(n){return r(1,c=1)},function(n){return r(1,c=0)}]}var un=function(n){r(i,s);var t=W(i);function i(n){var r;return a(this,i),r=t.call(this),e(o(r),n,ln,sn,c,{title:0}),r}return i}();function fn(n){return function(){var t,r=m(n);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}()){var a=m(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return g(this,t)}}function dn(n){var t,r=n[10]["triangle-right"].toSVG({class:"fill-white"})+"";return{c:function(){this.h()},l:function(n){this.h()},h:function(){t=new z(r,null)},m:function(n,r){t.m(n,r)},p:C,d:function(n){n&&t.d()}}}function pn(n){var t,r=n[10]["primitive-square"].toSVG({class:"fill-white"})+"";return{c:function(){this.h()},l:function(n){this.h()},h:function(){t=new z(r,null)},m:function(n,r){t.m(n,r)},p:C,d:function(n){n&&t.d()}}}function hn(n){var t,r,a,e,c,o=n[10]["arrow-right"].toSVG({class:"fill-white"})+"",s=n[10]["arrow-left"].toSVG({class:"fill-white"})+"",i=n[6]&&dn(n),u=!n[6]&&pn(n);return{c:function(){t=x("button"),i&&i.c(),r=w(),u&&u.c(),a=x("button"),e=x("button"),this.h()},l:function(n){t=I(n,"BUTTON",{slot:!0,class:!0});var c=$(t);i&&i.l(c),r=V(c),u&&u.l(c),c.forEach(v),a=I(n,"BUTTON",{slot:!0,class:!0}),$(a).forEach(v),e=I(n,"BUTTON",{slot:!0,class:!0}),$(e).forEach(v),this.h()},h:function(){_(t,"slot","buttons"),_(t,"class","btn btn-text btn-sm border border-secondary float-right  mr-1"),_(a,"slot","buttons"),_(a,"class","btn btn-text btn-sm border border-secondary float-right  mr-1"),_(e,"slot","buttons"),_(e,"class","btn btn-text btn-sm border border-secondary float-right  mr-1")},m:function(f,d,p){l(f,t,d),i&&i.m(t,null),T(t,r),u&&u.m(t,null),l(f,a,d),a.innerHTML=o,l(f,e,d),e.innerHTML=s,p&&H(c),c=[L(t,"click",n[17]),L(a,"click",n[11]),L(e,"click",n[12])]},p:function(n,a){n[6]?i?i.p(n,a):((i=dn(n)).c(),i.m(t,r)):i&&(i.d(1),i=null),n[6]?u&&(u.d(1),u=null):u?u.p(n,a):((u=pn(n)).c(),u.m(t,null))},d:function(n){n&&v(t),i&&i.d(),u&&u.d(),n&&v(a),n&&v(e),H(c)}}}function vn(n){var t,r,a,e,c,o,s,i,u,f,d,p,h,m,g,b,y,k,S,P,N,A,j,B,R,C,F,M,O,U,G,z,q,J,K,W,Q,Y,Z,nn,tn,rn,an,en=!1,cn=!1;function on(){en=!0,n[18].call(s)}function sn(){cn=!0,n[19].call(k)}return{c:function(){t=x("div"),r=x("div"),a=x("label"),e=E("Duration"),c=w(),o=x("div"),s=x("input"),i=w(),u=x("div"),f=x("span"),d=E("seconds"),p=w(),h=x("div"),m=x("label"),g=E("Autopause"),b=w(),y=x("div"),k=x("input"),S=w(),P=x("div"),N=x("span"),A=E("minutes"),j=w(),B=x("div"),R=x("label"),C=E("Big Titles"),F=w(),M=x("div"),O=x("div"),U=x("input"),G=w(),z=x("label"),q=w(),J=x("div"),K=x("label"),W=E("Footer"),Q=w(),Y=x("div"),Z=x("div"),nn=x("input"),tn=w(),rn=x("label"),this.h()},l:function(n){t=I(n,"DIV",{slot:!0,class:!0});var l=$(t);r=I(l,"DIV",{class:!0});var x=$(r);a=I(x,"LABEL",{class:!0,for:!0});var E=$(a);e=D(E,"Duration"),E.forEach(v),c=V(x),o=I(x,"DIV",{class:!0});var w=$(o);s=I(w,"INPUT",{type:!0,id:!0,min:!0,max:!0,class:!0,placeholder:!0}),i=V(w),u=I(w,"DIV",{class:!0});var _=$(u);f=I(_,"SPAN",{class:!0,id:!0});var T=$(f);d=D(T,"seconds"),T.forEach(v),_.forEach(v),w.forEach(v),x.forEach(v),p=V(l),h=I(l,"DIV",{class:!0});var L=$(h);m=I(L,"LABEL",{class:!0,for:!0});var H=$(m);g=D(H,"Autopause"),H.forEach(v),b=V(L),y=I(L,"DIV",{class:!0});var X=$(y);k=I(X,"INPUT",{type:!0,id:!0,min:!0,max:!0,class:!0,placeholder:!0}),S=V(X),P=I(X,"DIV",{class:!0});var an=$(P);N=I(an,"SPAN",{class:!0,id:!0});var en=$(N);A=D(en,"minutes"),en.forEach(v),an.forEach(v),X.forEach(v),L.forEach(v),j=V(l),B=I(l,"DIV",{class:!0});var cn=$(B);R=I(cn,"LABEL",{class:!0,for:!0});var on=$(R);C=D(on,"Big Titles"),on.forEach(v),F=V(cn),M=I(cn,"DIV",{class:!0});var sn=$(M);O=I(sn,"DIV",{class:!0});var ln=$(O);U=I(ln,"INPUT",{type:!0,class:!0,id:!0}),G=V(ln),z=I(ln,"LABEL",{class:!0,for:!0}),$(z).forEach(v),ln.forEach(v),sn.forEach(v),cn.forEach(v),q=V(l),J=I(l,"DIV",{class:!0});var un=$(J);K=I(un,"LABEL",{class:!0,for:!0});var fn=$(K);W=D(fn,"Footer"),fn.forEach(v),Q=V(un),Y=I(un,"DIV",{class:!0});var dn=$(Y);Z=I(dn,"DIV",{class:!0});var pn=$(Z);nn=I(pn,"INPUT",{type:!0,class:!0,id:!0}),tn=V(pn),rn=I(pn,"LABEL",{class:!0,for:!0}),$(rn).forEach(v),pn.forEach(v),dn.forEach(v),un.forEach(v),l.forEach(v),this.h()},h:function(){_(a,"class","small"),_(a,"for","duration"),_(s,"type","number"),_(s,"id","duration"),_(s,"min","10"),_(s,"max","120"),_(s,"class","form-control"),_(s,"placeholder","number of seconds to display"),_(f,"class","input-group-text "),_(f,"id","duration-addon"),_(u,"class","input-group-append"),_(o,"class","input-group mb-3"),_(r,"class","card-text"),_(m,"class","small"),_(m,"for","duration"),_(k,"type","number"),_(k,"id","duration"),_(k,"min","15"),_(k,"max",1440),_(k,"class","form-control"),_(k,"placeholder","minutes until autopause"),_(N,"class","input-group-text "),_(N,"id","duration-addon"),_(P,"class","input-group-append"),_(y,"class","input-group mb-3"),_(h,"class","card-text"),_(R,"class","small"),_(R,"for","duration"),_(U,"type","checkbox"),_(U,"class","custom-control-input"),_(U,"id","titleControl"),_(z,"class","custom-control-label"),_(z,"for","titleControl"),_(O,"class","custom-control custom-switch"),_(M,"class","input-group mb-3"),_(B,"class","card-text"),_(K,"class","small"),_(K,"for","duration"),_(nn,"type","checkbox"),_(nn,"class","custom-control-input"),_(nn,"id","footerControl"),_(rn,"class","custom-control-label"),_(rn,"for","footerControl"),_(Z,"class","custom-control custom-switch"),_(Y,"class","input-group mb-3"),_(J,"class","card-text"),_(t,"slot","preferences"),_(t,"class","card-text")},m:function(v,x,E){l(v,t,x),T(t,r),T(r,a),T(a,e),T(r,c),T(r,o),T(o,s),X(s,n[1]),T(o,i),T(o,u),T(u,f),T(f,d),T(t,p),T(t,h),T(h,m),T(m,g),T(h,b),T(h,y),T(y,k),X(k,n[5]),T(y,S),T(y,P),T(P,N),T(N,A),T(t,j),T(t,B),T(B,R),T(R,C),T(B,F),T(B,M),T(M,O),T(O,U),U.checked=n[4],T(O,G),T(O,z),T(t,q),T(t,J),T(J,K),T(K,W),T(J,Q),T(J,Y),T(Y,Z),T(Z,nn),nn.checked=n[0],T(Z,tn),T(Z,rn),E&&H(an),an=[L(s,"input",on),L(k,"input",sn),L(U,"change",n[20]),L(nn,"change",n[21])]},p:function(n,t){!en&&2&t&&X(s,n[1]),en=!1,!cn&&32&t&&X(k,n[5]),cn=!1,16&t&&(U.checked=n[4]),1&t&&(nn.checked=n[0])},d:function(n){n&&v(t),H(an)}}}function mn(n){var t,r,a,e,c,o,s,i,u=n[2].indexOf(n[3])+1+"",f=n[2].length+"",d=60*n[5]-n[7]+"";return{c:function(){t=x("div"),r=E("Showing video #"),a=E(u),e=E(" out of "),c=E(f),o=E(" videos.\n  There is "),s=E(d),i=E(" seconds left until autopause."),this.h()},l:function(n){t=I(n,"DIV",{slot:!0});var l=$(t);r=D(l,"Showing video #"),a=D(l,u),e=D(l," out of "),c=D(l,f),o=D(l," videos.\n  There is "),s=D(l,d),i=D(l," seconds left until autopause."),l.forEach(v),this.h()},h:function(){_(t,"slot","preferences-footer")},m:function(n,u){l(n,t,u),T(t,r),T(t,a),T(t,e),T(t,c),T(t,o),T(t,s),T(t,i)},p:function(n,t){12&t&&u!==(u=n[2].indexOf(n[3])+1+"")&&N(a,u),4&t&&f!==(f=n[2].length+"")&&N(c,f),160&t&&d!==(d=60*n[5]-n[7]+"")&&N(s,d)},d:function(n){n&&v(t)}}}function gn(n){var t,r,a,e,c,o,s,u,f,d,p=n[4]&&yn(n),h=!n[4]&&xn(n),m=n[0]&&En(n);return{c:function(){t=x("a"),r=x("img"),o=w(),s=x("div"),p&&p.c(),u=w(),h&&h.c(),f=w(),m&&m.c(),d=i(),this.h()},l:function(n){t=I(n,"A",{href:!0,rel:!0,target:!0});var a=$(t);r=I(a,"IMG",{src:!0,class:!0,alt:!0}),a.forEach(v),o=V(n),s=I(n,"DIV",{class:!0});var e=$(s);p&&p.l(e),u=V(e),h&&h.l(e),e.forEach(v),f=V(n),m&&m.l(n),d=i(),this.h()},h:function(){r.src!==(a=n[3].image)&&_(r,"src",a),_(r,"class","card-img"),_(r,"alt",e=n[3].title),_(t,"href",c=n[3].url),_(t,"rel","noopener noreferrer"),_(t,"target","_blank"),_(s,"class","card-body p-1 m-0")},m:function(n,a){l(n,t,a),T(t,r),l(n,o,a),l(n,s,a),p&&p.m(s,null),T(s,u),h&&h.m(s,null),l(n,f,a),m&&m.m(n,a),l(n,d,a)},p:function(n,o){8&o&&r.src!==(a=n[3].image)&&_(r,"src",a),8&o&&e!==(e=n[3].title)&&_(r,"alt",e),8&o&&c!==(c=n[3].url)&&_(t,"href",c),n[4]?p?p.p(n,o):((p=yn(n)).c(),p.m(s,u)):p&&(p.d(1),p=null),n[4]?h&&(h.d(1),h=null):h?h.p(n,o):((h=xn(n)).c(),h.m(s,null)),n[0]?m?m.p(n,o):((m=En(n)).c(),m.m(d.parentNode,d)):m&&(m.d(1),m=null)},d:function(n){n&&v(t),n&&v(o),n&&v(s),p&&p.d(),h&&h.d(),n&&v(f),m&&m.d(n),n&&v(d)}}}function bn(n){var t,r,a,e,c,o,s;return{c:function(){t=x("div"),r=x("div"),a=E("Loading Database..."),e=w(),c=x("div"),o=x("span"),s=E("Loading Database..."),this.h()},l:function(n){t=I(n,"DIV",{class:!0});var i=$(t);r=I(i,"DIV",{class:!0});var l=$(r);a=D(l,"Loading Database..."),l.forEach(v),e=V(i),c=I(i,"DIV",{class:!0,role:!0});var u=$(c);o=I(u,"SPAN",{class:!0});var f=$(o);s=D(f,"Loading Database..."),f.forEach(v),u.forEach(v),i.forEach(v),this.h()},h:function(){_(r,"class","p-5"),_(o,"class","sr-only"),_(c,"class","spinner-border"),_(c,"role","status"),_(t,"class","card-body text-center")},m:function(n,i){l(n,t,i),T(t,r),T(r,a),T(t,e),T(t,c),T(c,o),T(o,s)},p:C,d:function(n){n&&v(t)}}}function yn(n){var t,r,a=n[3].title+"";return{c:function(){t=x("h5"),r=E(a),this.h()},l:function(n){t=I(n,"H5",{class:!0});var e=$(t);r=D(e,a),e.forEach(v),this.h()},h:function(){_(t,"class","card-title text-center m-0 p-2")},m:function(n,a){l(n,t,a),T(t,r)},p:function(n,t){8&t&&a!==(a=n[3].title+"")&&N(r,a)},d:function(n){n&&v(t)}}}function xn(n){var t,r,a=n[3].title+"";return{c:function(){t=x("p"),r=E(a),this.h()},l:function(n){t=I(n,"P",{class:!0});var e=$(t);r=D(e,a),e.forEach(v),this.h()},h:function(){_(t,"class","card-text small text-center")},m:function(n,a){l(n,t,a),T(t,r)},p:function(n,t){8&t&&a!==(a=n[3].title+"")&&N(r,a)},d:function(n){n&&v(t)}}}function En(n){var t,r,a,e,c,o;return{c:function(){t=x("div"),r=x("div"),a=x("div"),e=w(),c=x("div"),o=x("div"),this.h()},l:function(n){t=I(n,"DIV",{class:!0});var s=$(t);r=I(s,"DIV",{class:!0,style:!0});var i=$(r);a=I(i,"DIV",{class:!0,role:!0,style:!0,"aria-valuenow":!0,"aria-valuemin":!0,"aria-valuemax":!0}),$(a).forEach(v),i.forEach(v),e=V(s),c=I(s,"DIV",{class:!0,style:!0});var l=$(c);o=I(l,"DIV",{class:!0,role:!0,style:!0,"aria-valuenow":!0,"aria-valuemin":!0,"aria-valuemax":!0}),$(o).forEach(v),l.forEach(v),s.forEach(v),this.h()},h:function(){_(a,"class","progress-bar bg-warning"),_(a,"role","progressbar"),R(a,"width",n[8]+"%"),_(a,"aria-valuenow",n[8]),_(a,"aria-valuemin","0"),_(a,"aria-valuemax","100"),_(r,"class","progress"),R(r,"height","1px"),R(r,"background","black"),_(o,"class","progress-bar bg-secondary"),_(o,"role","progressbar"),R(o,"width",n[9]+"%"),_(o,"aria-valuenow",n[9]),_(o,"aria-valuemin","0"),_(o,"aria-valuemax","100"),_(c,"class","progress mt-1"),R(c,"height","1px"),R(c,"background","black"),_(t,"class","card-footer")},m:function(n,s){l(n,t,s),T(t,r),T(r,a),T(t,e),T(t,c),T(c,o)},p:function(n,t){256&t&&R(a,"width",n[8]+"%"),256&t&&_(a,"aria-valuenow",n[8]),512&t&&R(o,"width",n[9]+"%"),512&t&&_(o,"aria-valuenow",n[9])},d:function(n){n&&v(t)}}}function wn(n){var t,r,a,e,c,o;function s(n,t){return 0===n[2].length?bn:gn}var u=s(n),f=u(n);return{c:function(){t=w(),r=w(),a=w(),e=w(),c=w(),f.c(),o=i()},l:function(n){t=V(n),r=V(n),a=V(n),e=V(n),c=V(n),f.l(n),o=i()},m:function(n,s){l(n,t,s),l(n,r,s),l(n,a,s),l(n,e,s),l(n,c,s),f.m(n,s),l(n,o,s)},p:function(n,t){u===(u=s(n))&&f?f.p(n,t):(f.d(1),(f=u(n))&&(f.c(),f.m(o.parentNode,o)))},d:function(n){n&&v(t),n&&v(r),n&&v(a),n&&v(e),n&&v(c),f.d(n),n&&v(o)}}}function kn(n){var t,r=new un({props:{title:"Videos",$$slots:{default:[wn],"preferences-footer":[mn],preferences:[vn],buttons:[hn]},$$scope:{ctx:n}}});return{c:function(){k(r.$$.fragment)},l:function(n){S(r.$$.fragment,n)},m:function(n,a){P(r,n,a),t=!0},p:function(n,t){var a=u(t,1)[0],e={};4195327&a&&(e.$$scope={dirty:a,ctx:n}),r.$set(e)},i:function(n){t||(h(r.$$.fragment,n),t=!0)},o:function(n){d(r.$$.fragment,n),t=!1},d:function(n){B(r,n)}}}function In(n){for(var t=n.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),a=[n[r],n[t]];n[t]=a[0],n[r]=a[1]}return n}function $n(n,t,r){var a,e,c=F(),o=K.sprintf,s=[],i="",l=!1,u=15,f=t.footer,d=void 0===f||f,p=t.duration,h=void 0===p?(a=10,e=60,a=Math.ceil(a),e=Math.floor(e),Math.floor(Math.random()*(e-a+1))+a):p;M(O(U.mark(function n(){var t,a;return U.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/youtube.json");case 2:return t=n.sent,n.next=5,t.json();case 5:a=n.sent,setTimeout(function(n){r(2,s=In(a)),w()},1e3);case 7:case"end":return n.stop()}},n)})));var v=!1,m=0,g=0,b=0,y=0,x=-1,E=setInterval(function(){v||0!==s.length&&(m>=h&&w(),m++,r(7,g++,g),r(8,b=100*J(m,h)),r(9,y=o("%.0f",100*J(x+1,s.length))),g>=60*u&&(r(6,v=!0),r(7,g=0)))},1e3);function w(){m=0,r(8,b=0),++x+1>s.length&&(r(2,s=In(s)),x=0),r(3,i=s[x]),console.log(i)}G(function(){clearInterval(E)});return n.$set=function(n){"footer"in n&&r(0,d=n.footer),"duration"in n&&r(1,h=n.duration)},[d,h,s,i,l,u,v,g,b,y,c,w,function(){m=0,r(8,b=0),0==x||x--,r(3,i=s[x])},m,x,o,E,function(n){return r(6,v=!v)},function(){h=q(this.value),r(1,h)},function(){u=q(this.value),r(5,u)},function(){l=this.checked,r(4,l)},function(){d=this.checked,r(0,d)}]}var Dn=function(n){r(i,s);var t=fn(i);function i(n){var r;return a(this,i),r=t.call(this),e(o(r),n,$n,kn,c,{footer:0,duration:1}),r}return i}();export{un as P,Dn as R,K as s};
