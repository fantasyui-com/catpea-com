import{S as t,i as a,s as r,w as e,x as s,y as n,z as o,A as i,B as c,E as l,H as u,n as p,e as d,h,c as f,a as m,j as g,d as b,k as v,b as y,l as x,r as w,m as E,t as k,f as I,o as D,g as V,q as _,p as S,v as T}from"./client.3c805113.js";import{i as j}from"./Icon.4be25131.js";import{c as L}from"./_commonjsHelpers.b9e74a66.js";import{c as A}from"./index.edd3fa17.js";import{P as $}from"./PreferenceCard.061d9335.js";var N=L(function(t,a){!function(){var t={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function r(a){return function(a,e){var s,n,o,i,c,l,u,p,d,h=1,f=a.length,m="";for(n=0;n<f;n++)if("string"==typeof a[n])m+=a[n];else if("object"==typeof a[n]){if((i=a[n]).keys)for(s=e[h],o=0;o<i.keys.length;o++){if(null==s)throw new Error(r('[sprintf] Cannot access property "%s" of undefined value "%s"',i.keys[o],i.keys[o-1]));s=s[i.keys[o]]}else s=i.param_no?e[i.param_no]:e[h++];if(t.not_type.test(i.type)&&t.not_primitive.test(i.type)&&s instanceof Function&&(s=s()),t.numeric_arg.test(i.type)&&"number"!=typeof s&&isNaN(s))throw new TypeError(r("[sprintf] expecting number but found %T",s));switch(t.number.test(i.type)&&(p=s>=0),i.type){case"b":s=parseInt(s,10).toString(2);break;case"c":s=String.fromCharCode(parseInt(s,10));break;case"d":case"i":s=parseInt(s,10);break;case"j":s=JSON.stringify(s,null,i.width?parseInt(i.width):0);break;case"e":s=i.precision?parseFloat(s).toExponential(i.precision):parseFloat(s).toExponential();break;case"f":s=i.precision?parseFloat(s).toFixed(i.precision):parseFloat(s);break;case"g":s=i.precision?String(Number(s.toPrecision(i.precision))):parseFloat(s);break;case"o":s=(parseInt(s,10)>>>0).toString(8);break;case"s":s=String(s),s=i.precision?s.substring(0,i.precision):s;break;case"t":s=String(!!s),s=i.precision?s.substring(0,i.precision):s;break;case"T":s=Object.prototype.toString.call(s).slice(8,-1).toLowerCase(),s=i.precision?s.substring(0,i.precision):s;break;case"u":s=parseInt(s,10)>>>0;break;case"v":s=s.valueOf(),s=i.precision?s.substring(0,i.precision):s;break;case"x":s=(parseInt(s,10)>>>0).toString(16);break;case"X":s=(parseInt(s,10)>>>0).toString(16).toUpperCase()}t.json.test(i.type)?m+=s:(!t.number.test(i.type)||p&&!i.sign?d="":(d=p?"+":"-",s=s.toString().replace(t.sign,"")),l=i.pad_char?"0"===i.pad_char?"0":i.pad_char.charAt(1):" ",u=i.width-(d+s).length,c=i.width&&u>0?l.repeat(u):"",m+=i.align?d+s+c:"0"===l?d+c+s:c+d+s)}return m}(function(a){if(s[a])return s[a];var r,e=a,n=[],o=0;for(;e;){if(null!==(r=t.text.exec(e)))n.push(r[0]);else if(null!==(r=t.modulo.exec(e)))n.push("%");else{if(null===(r=t.placeholder.exec(e)))throw new SyntaxError("[sprintf] unexpected placeholder");if(r[2]){o|=1;var i=[],c=r[2],l=[];if(null===(l=t.key.exec(c)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(i.push(l[1]);""!==(c=c.substring(l[0].length));)if(null!==(l=t.key_access.exec(c)))i.push(l[1]);else{if(null===(l=t.index_access.exec(c)))throw new SyntaxError("[sprintf] failed to parse named argument key");i.push(l[1])}r[2]=i}else o|=2;if(3===o)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");n.push({placeholder:r[0],param_no:r[1],keys:r[2],sign:r[3],pad_char:r[4],align:r[5],width:r[6],precision:r[7],type:r[8]})}e=e.substring(r[0].length)}return s[a]=n}(a),arguments)}function e(t,a){return r.apply(null,[t].concat(a||[]))}var s=Object.create(null);a.sprintf=r,a.vsprintf=e,"undefined"!=typeof window&&(window.sprintf=r,window.vsprintf=e)}()});function B(t,a){if(!Array.isArray(t))throw new Error("shuffle expect an array as parameter.");a=a||{};var r,e,s=t,n=t.length,o=a.rng||Math.random;for(!0===a.copy&&(s=t.slice());n;)r=Math.floor(o()*n),e=s[n-=1],s[n]=s[r],s[r]=e;return s}B.pick=function(t,a){if(!Array.isArray(t))throw new Error("shuffle.pick() expect an array as parameter.");var r=(a=a||{}).rng||Math.random,e=a.picks||1;if("number"==typeof e&&1!==e){for(var s,n=t.length,o=t.slice(),i=[];e&&n;)s=Math.floor(r()*n),i.push(o[s]),o.splice(s,1),n-=1,e-=1;return i}return t[Math.floor(r()*t.length)]};var M;function P(t){let a,r=t[10]["triangle-right"].toSVG({class:"fill-white"})+"";return{c(){this.h()},l(t){this.h()},h(){a=new u(r,null)},m(t,r){a.m(t,r)},p:p,d(t){t&&a.d()}}}function C(t){let a,r=t[10]["primitive-square"].toSVG({class:"fill-white"})+"";return{c(){this.h()},l(t){this.h()},h(){a=new u(r,null)},m(t,r){a.m(t,r)},p:p,d(t){t&&a.d()}}}function F(t){let a,r,e,s,n,o=t[10]["arrow-right"].toSVG({class:"fill-white"})+"",i=t[10]["arrow-left"].toSVG({class:"fill-white"})+"",c=t[6]&&P(t),l=!t[6]&&C(t);return{c(){a=d("button"),c&&c.c(),r=h(),l&&l.c(),e=d("button"),s=d("button"),this.h()},l(t){a=f(t,"BUTTON",{slot:!0,class:!0});var n=m(a);c&&c.l(n),r=g(n),l&&l.l(n),n.forEach(b),e=f(t,"BUTTON",{slot:!0,class:!0}),m(e).forEach(b),s=f(t,"BUTTON",{slot:!0,class:!0}),m(s).forEach(b),this.h()},h(){v(a,"slot","buttons"),v(a,"class","btn btn-text btn-sm border border-secondary float-right  mr-1"),v(e,"slot","buttons"),v(e,"class","btn btn-text btn-sm border border-secondary float-right  mr-1"),v(s,"slot","buttons"),v(s,"class","btn btn-text btn-sm border border-secondary float-right  mr-1")},m(u,p,d){y(u,a,p),c&&c.m(a,null),x(a,r),l&&l.m(a,null),y(u,e,p),e.innerHTML=o,y(u,s,p),s.innerHTML=i,d&&w(n),n=[E(a,"click",t[16]),E(e,"click",t[11]),E(s,"click",t[12])]},p(t,e){t[6]?c?c.p(t,e):((c=P(t)).c(),c.m(a,r)):c&&(c.d(1),c=null),t[6]?l&&(l.d(1),l=null):l?l.p(t,e):((l=C(t)).c(),l.m(a,null))},d(t){t&&b(a),c&&c.d(),l&&l.d(),t&&b(e),t&&b(s),w(n)}}}function O(t){let a,r,e,s,n,o,i,c,l,u,p,V,_,S,T,j,L,A,$,N,B,M,P,C,F,O,U,z,G,H,X,q,J,R,K,Q,W,Y,Z,tt,at,rt,et,st,nt=!1,ot=!1;function it(){nt=!0,t[17].call(i)}function ct(){ot=!0,t[18].call(A)}return{c(){a=d("div"),r=d("div"),e=d("label"),s=k("Duration"),n=h(),o=d("div"),i=d("input"),c=h(),l=d("div"),u=d("span"),p=k("seconds"),V=h(),_=d("div"),S=d("label"),T=k("Autopause"),j=h(),L=d("div"),A=d("input"),N=h(),B=d("div"),M=d("span"),P=k("minutes"),C=h(),F=d("div"),O=d("label"),U=k("Big Titles"),z=h(),G=d("div"),H=d("div"),X=d("input"),q=h(),J=d("label"),R=h(),K=d("div"),Q=d("label"),W=k("Footer"),Y=h(),Z=d("div"),tt=d("div"),at=d("input"),rt=h(),et=d("label"),this.h()},l(t){a=f(t,"DIV",{slot:!0,class:!0});var d=m(a);r=f(d,"DIV",{class:!0});var h=m(r);e=f(h,"LABEL",{class:!0,for:!0});var v=m(e);s=I(v,"Duration"),v.forEach(b),n=g(h),o=f(h,"DIV",{class:!0});var y=m(o);i=f(y,"INPUT",{type:!0,id:!0,min:!0,max:!0,class:!0,placeholder:!0}),c=g(y),l=f(y,"DIV",{class:!0});var x=m(l);u=f(x,"SPAN",{class:!0,id:!0});var w=m(u);p=I(w,"seconds"),w.forEach(b),x.forEach(b),y.forEach(b),h.forEach(b),V=g(d),_=f(d,"DIV",{class:!0});var E=m(_);S=f(E,"LABEL",{class:!0,for:!0});var k=m(S);T=I(k,"Autopause"),k.forEach(b),j=g(E),L=f(E,"DIV",{class:!0});var D=m(L);A=f(D,"INPUT",{type:!0,id:!0,min:!0,max:!0,class:!0,placeholder:!0}),N=g(D),B=f(D,"DIV",{class:!0});var $=m(B);M=f($,"SPAN",{class:!0,id:!0});var st=m(M);P=I(st,"minutes"),st.forEach(b),$.forEach(b),D.forEach(b),E.forEach(b),C=g(d),F=f(d,"DIV",{class:!0});var nt=m(F);O=f(nt,"LABEL",{class:!0,for:!0});var ot=m(O);U=I(ot,"Big Titles"),ot.forEach(b),z=g(nt),G=f(nt,"DIV",{class:!0});var it=m(G);H=f(it,"DIV",{class:!0});var ct=m(H);X=f(ct,"INPUT",{type:!0,class:!0,id:!0}),q=g(ct),J=f(ct,"LABEL",{class:!0,for:!0}),m(J).forEach(b),ct.forEach(b),it.forEach(b),nt.forEach(b),R=g(d),K=f(d,"DIV",{class:!0});var lt=m(K);Q=f(lt,"LABEL",{class:!0,for:!0});var ut=m(Q);W=I(ut,"Footer"),ut.forEach(b),Y=g(lt),Z=f(lt,"DIV",{class:!0});var pt=m(Z);tt=f(pt,"DIV",{class:!0});var dt=m(tt);at=f(dt,"INPUT",{type:!0,class:!0,id:!0}),rt=g(dt),et=f(dt,"LABEL",{class:!0,for:!0}),m(et).forEach(b),dt.forEach(b),pt.forEach(b),lt.forEach(b),d.forEach(b),this.h()},h(){v(e,"class","small"),v(e,"for","duration"),v(i,"type","number"),v(i,"id","duration"),v(i,"min","10"),v(i,"max","120"),v(i,"class","form-control"),v(i,"placeholder","number of seconds to display"),v(u,"class","input-group-text "),v(u,"id","duration-addon"),v(l,"class","input-group-append"),v(o,"class","input-group mb-3"),v(r,"class","card-text"),v(S,"class","small"),v(S,"for","duration"),v(A,"type","number"),v(A,"id","duration"),v(A,"min","15"),v(A,"max",$=1440),v(A,"class","form-control"),v(A,"placeholder","minutes until autopause"),v(M,"class","input-group-text "),v(M,"id","duration-addon"),v(B,"class","input-group-append"),v(L,"class","input-group mb-3"),v(_,"class","card-text"),v(O,"class","small"),v(O,"for","duration"),v(X,"type","checkbox"),v(X,"class","custom-control-input"),v(X,"id","titleControl"),v(J,"class","custom-control-label"),v(J,"for","titleControl"),v(H,"class","custom-control custom-switch"),v(G,"class","input-group mb-3"),v(F,"class","card-text"),v(Q,"class","small"),v(Q,"for","duration"),v(at,"type","checkbox"),v(at,"class","custom-control-input"),v(at,"id","footerControl"),v(et,"class","custom-control-label"),v(et,"for","footerControl"),v(tt,"class","custom-control custom-switch"),v(Z,"class","input-group mb-3"),v(K,"class","card-text"),v(a,"slot","preferences"),v(a,"class","card-text")},m(d,h,f){y(d,a,h),x(a,r),x(r,e),x(e,s),x(r,n),x(r,o),x(o,i),D(i,t[1]),x(o,c),x(o,l),x(l,u),x(u,p),x(a,V),x(a,_),x(_,S),x(S,T),x(_,j),x(_,L),x(L,A),D(A,t[5]),x(L,N),x(L,B),x(B,M),x(M,P),x(a,C),x(a,F),x(F,O),x(O,U),x(F,z),x(F,G),x(G,H),x(H,X),X.checked=t[4],x(H,q),x(H,J),x(a,R),x(a,K),x(K,Q),x(Q,W),x(K,Y),x(K,Z),x(Z,tt),x(tt,at),at.checked=t[0],x(tt,rt),x(tt,et),f&&w(st),st=[E(i,"input",it),E(A,"input",ct),E(X,"change",t[19]),E(at,"change",t[20])]},p(t,a){!nt&&2&a&&D(i,t[1]),nt=!1,!ot&&32&a&&D(A,t[5]),ot=!1,16&a&&(X.checked=t[4]),1&a&&(at.checked=t[0])},d(t){t&&b(a),w(st)}}}function U(t){let a,r,e,s,n,o,i,c,l=t[2].indexOf(t[3])+1+"",u=t[2].length+"",p=60*t[5]-t[7]+"";return{c(){a=d("div"),r=k("Showing video #"),e=k(l),s=k(" out of "),n=k(u),o=k(" videos.\n  There is "),i=k(p),c=k(" seconds left until autopause."),this.h()},l(t){a=f(t,"DIV",{slot:!0});var d=m(a);r=I(d,"Showing video #"),e=I(d,l),s=I(d," out of "),n=I(d,u),o=I(d," videos.\n  There is "),i=I(d,p),c=I(d," seconds left until autopause."),d.forEach(b),this.h()},h(){v(a,"slot","preferences-footer")},m(t,l){y(t,a,l),x(a,r),x(a,e),x(a,s),x(a,n),x(a,o),x(a,i),x(a,c)},p(t,a){12&a&&l!==(l=t[2].indexOf(t[3])+1+"")&&V(e,l),4&a&&u!==(u=t[2].length+"")&&V(n,u),160&a&&p!==(p=60*t[5]-t[7]+"")&&V(i,p)},d(t){t&&b(a)}}}function z(t){let a,r,e,s,n,o,i,c,l,u,p=t[4]&&H(t),w=!t[4]&&X(t),E=t[0]&&q(t);return{c(){a=d("a"),r=d("img"),o=h(),i=d("div"),p&&p.c(),c=h(),w&&w.c(),l=h(),E&&E.c(),u=_(),this.h()},l(t){a=f(t,"A",{href:!0,rel:!0,target:!0});var e=m(a);r=f(e,"IMG",{src:!0,class:!0,alt:!0}),e.forEach(b),o=g(t),i=f(t,"DIV",{class:!0});var s=m(i);p&&p.l(s),c=g(s),w&&w.l(s),s.forEach(b),l=g(t),E&&E.l(t),u=_(),this.h()},h(){r.src!==(e=t[3].image)&&v(r,"src",e),v(r,"class","card-img"),v(r,"alt",s=t[3].title),v(a,"href",n=t[3].url),v(a,"rel","noopener noreferrer"),v(a,"target","_blank"),v(i,"class","card-body p-1 m-0")},m(t,e){y(t,a,e),x(a,r),y(t,o,e),y(t,i,e),p&&p.m(i,null),x(i,c),w&&w.m(i,null),y(t,l,e),E&&E.m(t,e),y(t,u,e)},p(t,o){8&o&&r.src!==(e=t[3].image)&&v(r,"src",e),8&o&&s!==(s=t[3].title)&&v(r,"alt",s),8&o&&n!==(n=t[3].url)&&v(a,"href",n),t[4]?p?p.p(t,o):((p=H(t)).c(),p.m(i,c)):p&&(p.d(1),p=null),t[4]?w&&(w.d(1),w=null):w?w.p(t,o):((w=X(t)).c(),w.m(i,null)),t[0]?E?E.p(t,o):((E=q(t)).c(),E.m(u.parentNode,u)):E&&(E.d(1),E=null)},d(t){t&&b(a),t&&b(o),t&&b(i),p&&p.d(),w&&w.d(),t&&b(l),E&&E.d(t),t&&b(u)}}}function G(t){let a,r,e,s,n,o,i;return{c(){a=d("div"),r=d("div"),e=k("Loading Database..."),s=h(),n=d("div"),o=d("span"),i=k("Loading Database..."),this.h()},l(t){a=f(t,"DIV",{class:!0});var c=m(a);r=f(c,"DIV",{class:!0});var l=m(r);e=I(l,"Loading Database..."),l.forEach(b),s=g(c),n=f(c,"DIV",{class:!0,role:!0});var u=m(n);o=f(u,"SPAN",{class:!0});var p=m(o);i=I(p,"Loading Database..."),p.forEach(b),u.forEach(b),c.forEach(b),this.h()},h(){v(r,"class","text-warning p-5"),v(o,"class","sr-only"),v(n,"class","spinner-border text-danger"),v(n,"role","status"),v(a,"class","card-body text-center")},m(t,c){y(t,a,c),x(a,r),x(r,e),x(a,s),x(a,n),x(n,o),x(o,i)},p:p,d(t){t&&b(a)}}}function H(t){let a,r,e=t[3].title+"";return{c(){a=d("h5"),r=k(e),this.h()},l(t){a=f(t,"H5",{class:!0});var s=m(a);r=I(s,e),s.forEach(b),this.h()},h(){v(a,"class","card-title text-center m-0 p-2")},m(t,e){y(t,a,e),x(a,r)},p(t,a){8&a&&e!==(e=t[3].title+"")&&V(r,e)},d(t){t&&b(a)}}}function X(t){let a,r,e=t[3].title+"";return{c(){a=d("p"),r=k(e),this.h()},l(t){a=f(t,"P",{class:!0});var s=m(a);r=I(s,e),s.forEach(b),this.h()},h(){v(a,"class","card-text small text-secondary text-center")},m(t,e){y(t,a,e),x(a,r)},p(t,a){8&a&&e!==(e=t[3].title+"")&&V(r,e)},d(t){t&&b(a)}}}function q(t){let a,r,e,s,n;return{c(){a=d("div"),r=d("div"),e=h(),s=d("div"),n=d("div"),this.h()},l(t){a=f(t,"DIV",{class:!0,style:!0});var o=m(a);r=f(o,"DIV",{class:!0,role:!0,style:!0,"aria-valuenow":!0,"aria-valuemin":!0,"aria-valuemax":!0}),m(r).forEach(b),o.forEach(b),e=g(t),s=f(t,"DIV",{class:!0,style:!0});var i=m(s);n=f(i,"DIV",{class:!0,role:!0,style:!0,"aria-valuenow":!0,"aria-valuemin":!0,"aria-valuemax":!0}),m(n).forEach(b),i.forEach(b),this.h()},h(){v(r,"class","progress-bar bg-warning"),v(r,"role","progressbar"),T(r,"width",t[8]+"%"),v(r,"aria-valuenow",t[8]),v(r,"aria-valuemin","0"),v(r,"aria-valuemax","100"),v(a,"class","progress"),T(a,"height","1px"),T(a,"background","black"),v(n,"class","progress-bar bg-secondary"),v(n,"role","progressbar"),T(n,"width",t[9]+"%"),v(n,"aria-valuenow",t[9]),v(n,"aria-valuemin","0"),v(n,"aria-valuemax","100"),v(s,"class","progress mt-1"),T(s,"height","1px"),T(s,"background","black")},m(t,o){y(t,a,o),x(a,r),y(t,e,o),y(t,s,o),x(s,n)},p(t,a){256&a&&T(r,"width",t[8]+"%"),256&a&&v(r,"aria-valuenow",t[8]),512&a&&T(n,"width",t[9]+"%"),512&a&&v(n,"aria-valuenow",t[9])},d(t){t&&b(a),t&&b(e),t&&b(s)}}}function J(t){let a,r,e,s,n,o;function i(t,a){return 0===t[2].length?G:z}let c=i(t),l=c(t);return{c(){a=h(),r=h(),e=h(),s=h(),n=h(),l.c(),o=_()},l(t){a=g(t),r=g(t),e=g(t),s=g(t),n=g(t),l.l(t),o=_()},m(t,i){y(t,a,i),y(t,r,i),y(t,e,i),y(t,s,i),y(t,n,i),l.m(t,i),y(t,o,i)},p(t,a){c===(c=i(t))&&l?l.p(t,a):(l.d(1),(l=c(t))&&(l.c(),l.m(o.parentNode,o)))},d(t){t&&b(a),t&&b(r),t&&b(e),t&&b(s),t&&b(n),l.d(t),t&&b(o)}}}function R(t){let a;const r=new $({props:{title:"Videos",$$slots:{default:[J],"preferences-footer":[U],preferences:[O],buttons:[F]},$$scope:{ctx:t}}});return{c(){e(r.$$.fragment)},l(t){s(r.$$.fragment,t)},m(t,e){n(r,t,e),a=!0},p(t,[a]){const e={};2098175&a&&(e.$$scope={dirty:a,ctx:t}),r.$set(e)},i(t){a||(o(r.$$.fragment,t),a=!0)},o(t){i(r.$$.fragment,t),a=!1},d(t){c(r,t)}}}function K(t,a){return t=Math.ceil(t),a=Math.floor(a),Math.floor(Math.random()*(a-t+1))+t}function Q(t,a,r){const e=j(),s=N.sprintf;let n=[],o="",i=!1,c=15,{footer:u=!0}=a,{duration:p=K(10,60)}=a;l(async function(){const t=await fetch("youtube.json"),a=await t.json();setTimeout(t=>{r(2,n=M(a)),v()},1e3)});let d=!1,h=0,f=0,m=0,g=0,b=-1;function v(){h=0,r(8,m=0),++b+1>n.length&&(r(2,n=M(n)),b=0),r(3,o=n[b])}setInterval(function(){d||0!==n.length&&(h>=p&&v(),h++,r(7,f++,f),r(8,m=100*A(h,p)),r(9,g=s("%.0f",100*A(b+1,n.length))),f>=60*c&&(r(6,d=!0),r(7,f=0)))},1e3);return t.$set=(t=>{"footer"in t&&r(0,u=t.footer),"duration"in t&&r(1,p=t.duration)}),[u,p,n,o,i,c,d,f,m,g,e,v,function(){h=0,r(8,m=0),0==b||b--,r(3,o=n[b])},h,b,s,t=>r(6,d=!d),function(){p=S(this.value),r(1,p)},function(){c=S(this.value),r(5,c)},function(){i=this.checked,r(4,i)},function(){u=this.checked,r(0,u)}]}class W extends t{constructor(t){super(),a(this,t,Q,R,r,{footer:0,duration:1})}}export{W as R,B as a,N as s};
