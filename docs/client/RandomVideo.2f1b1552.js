import{S as t,i as a,s as e,w as s,x as r,y as n,z as o,A as c,B as i,E as l,H as u,n as d,e as p,h,c as f,a as m,j as g,d as b,k as v,b as x,l as y,r as w,m as E,t as k,f as I,o as D,g as V,q as _,p as S,v as T}from"./client.2a96ea07.js";import{i as j}from"./Icon.268bf5b2.js";import{c as L}from"./commonjsHelpers.b9e74a66.js";import{c as $}from"./index.edd3fa17.js";import{P as N}from"./PreferenceCard.ea3044df.js";var A=L(function(t,a){!function(){var t={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function e(a){return function(a,s){var r,n,o,c,i,l,u,d,p,h=1,f=a.length,m="";for(n=0;n<f;n++)if("string"==typeof a[n])m+=a[n];else if("object"==typeof a[n]){if((c=a[n]).keys)for(r=s[h],o=0;o<c.keys.length;o++){if(null==r)throw new Error(e('[sprintf] Cannot access property "%s" of undefined value "%s"',c.keys[o],c.keys[o-1]));r=r[c.keys[o]]}else r=c.param_no?s[c.param_no]:s[h++];if(t.not_type.test(c.type)&&t.not_primitive.test(c.type)&&r instanceof Function&&(r=r()),t.numeric_arg.test(c.type)&&"number"!=typeof r&&isNaN(r))throw new TypeError(e("[sprintf] expecting number but found %T",r));switch(t.number.test(c.type)&&(d=r>=0),c.type){case"b":r=parseInt(r,10).toString(2);break;case"c":r=String.fromCharCode(parseInt(r,10));break;case"d":case"i":r=parseInt(r,10);break;case"j":r=JSON.stringify(r,null,c.width?parseInt(c.width):0);break;case"e":r=c.precision?parseFloat(r).toExponential(c.precision):parseFloat(r).toExponential();break;case"f":r=c.precision?parseFloat(r).toFixed(c.precision):parseFloat(r);break;case"g":r=c.precision?String(Number(r.toPrecision(c.precision))):parseFloat(r);break;case"o":r=(parseInt(r,10)>>>0).toString(8);break;case"s":r=String(r),r=c.precision?r.substring(0,c.precision):r;break;case"t":r=String(!!r),r=c.precision?r.substring(0,c.precision):r;break;case"T":r=Object.prototype.toString.call(r).slice(8,-1).toLowerCase(),r=c.precision?r.substring(0,c.precision):r;break;case"u":r=parseInt(r,10)>>>0;break;case"v":r=r.valueOf(),r=c.precision?r.substring(0,c.precision):r;break;case"x":r=(parseInt(r,10)>>>0).toString(16);break;case"X":r=(parseInt(r,10)>>>0).toString(16).toUpperCase()}t.json.test(c.type)?m+=r:(!t.number.test(c.type)||d&&!c.sign?p="":(p=d?"+":"-",r=r.toString().replace(t.sign,"")),l=c.pad_char?"0"===c.pad_char?"0":c.pad_char.charAt(1):" ",u=c.width-(p+r).length,i=c.width&&u>0?l.repeat(u):"",m+=c.align?p+r+i:"0"===l?p+i+r:i+p+r)}return m}(function(a){if(r[a])return r[a];var e,s=a,n=[],o=0;for(;s;){if(null!==(e=t.text.exec(s)))n.push(e[0]);else if(null!==(e=t.modulo.exec(s)))n.push("%");else{if(null===(e=t.placeholder.exec(s)))throw new SyntaxError("[sprintf] unexpected placeholder");if(e[2]){o|=1;var c=[],i=e[2],l=[];if(null===(l=t.key.exec(i)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(c.push(l[1]);""!==(i=i.substring(l[0].length));)if(null!==(l=t.key_access.exec(i)))c.push(l[1]);else{if(null===(l=t.index_access.exec(i)))throw new SyntaxError("[sprintf] failed to parse named argument key");c.push(l[1])}e[2]=c}else o|=2;if(3===o)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");n.push({placeholder:e[0],param_no:e[1],keys:e[2],sign:e[3],pad_char:e[4],align:e[5],width:e[6],precision:e[7],type:e[8]})}s=s.substring(e[0].length)}return r[a]=n}(a),arguments)}function s(t,a){return e.apply(null,[t].concat(a||[]))}var r=Object.create(null);a.sprintf=e,a.vsprintf=s,"undefined"!=typeof window&&(window.sprintf=e,window.vsprintf=s)}()});function B(t){let a,e=t[10]["triangle-right"].toSVG({class:"fill-white"})+"";return{c(){this.h()},l(t){this.h()},h(){a=new u(e,null)},m(t,e){a.m(t,e)},p:d,d(t){t&&a.d()}}}function P(t){let a,e=t[10]["primitive-square"].toSVG({class:"fill-white"})+"";return{c(){this.h()},l(t){this.h()},h(){a=new u(e,null)},m(t,e){a.m(t,e)},p:d,d(t){t&&a.d()}}}function C(t){let a,e,s,r,n,o=t[10]["arrow-right"].toSVG({class:"fill-white"})+"",c=t[10]["arrow-left"].toSVG({class:"fill-white"})+"",i=t[6]&&B(t),l=!t[6]&&P(t);return{c(){a=p("button"),i&&i.c(),e=h(),l&&l.c(),s=p("button"),r=p("button"),this.h()},l(t){a=f(t,"BUTTON",{slot:!0,class:!0});var n=m(a);i&&i.l(n),e=g(n),l&&l.l(n),n.forEach(b),s=f(t,"BUTTON",{slot:!0,class:!0}),m(s).forEach(b),r=f(t,"BUTTON",{slot:!0,class:!0}),m(r).forEach(b),this.h()},h(){v(a,"slot","buttons"),v(a,"class","btn btn-text btn-sm border border-secondary float-right  mr-1"),v(s,"slot","buttons"),v(s,"class","btn btn-text btn-sm border border-secondary float-right  mr-1"),v(r,"slot","buttons"),v(r,"class","btn btn-text btn-sm border border-secondary float-right  mr-1")},m(u,d,p){x(u,a,d),i&&i.m(a,null),y(a,e),l&&l.m(a,null),x(u,s,d),s.innerHTML=o,x(u,r,d),r.innerHTML=c,p&&w(n),n=[E(a,"click",t[16]),E(s,"click",t[11]),E(r,"click",t[12])]},p(t,s){t[6]?i?i.p(t,s):((i=B(t)).c(),i.m(a,e)):i&&(i.d(1),i=null),t[6]?l&&(l.d(1),l=null):l?l.p(t,s):((l=P(t)).c(),l.m(a,null))},d(t){t&&b(a),i&&i.d(),l&&l.d(),t&&b(s),t&&b(r),w(n)}}}function F(t){let a,e,s,r,n,o,c,i,l,u,d,V,_,S,T,j,L,$,N,A,B,P,C,F,M,O,U,z,G,H,X,q,J,R,K,Q,W,Y,Z,tt,at,et,st,rt,nt=!1,ot=!1;function ct(){nt=!0,t[17].call(c)}function it(){ot=!0,t[18].call($)}return{c(){a=p("div"),e=p("div"),s=p("label"),r=k("Duration"),n=h(),o=p("div"),c=p("input"),i=h(),l=p("div"),u=p("span"),d=k("seconds"),V=h(),_=p("div"),S=p("label"),T=k("Autopause"),j=h(),L=p("div"),$=p("input"),A=h(),B=p("div"),P=p("span"),C=k("minutes"),F=h(),M=p("div"),O=p("label"),U=k("Big Titles"),z=h(),G=p("div"),H=p("div"),X=p("input"),q=h(),J=p("label"),R=h(),K=p("div"),Q=p("label"),W=k("Footer"),Y=h(),Z=p("div"),tt=p("div"),at=p("input"),et=h(),st=p("label"),this.h()},l(t){a=f(t,"DIV",{slot:!0,class:!0});var p=m(a);e=f(p,"DIV",{class:!0});var h=m(e);s=f(h,"LABEL",{class:!0,for:!0});var v=m(s);r=I(v,"Duration"),v.forEach(b),n=g(h),o=f(h,"DIV",{class:!0});var x=m(o);c=f(x,"INPUT",{type:!0,id:!0,min:!0,max:!0,class:!0,placeholder:!0}),i=g(x),l=f(x,"DIV",{class:!0});var y=m(l);u=f(y,"SPAN",{class:!0,id:!0});var w=m(u);d=I(w,"seconds"),w.forEach(b),y.forEach(b),x.forEach(b),h.forEach(b),V=g(p),_=f(p,"DIV",{class:!0});var E=m(_);S=f(E,"LABEL",{class:!0,for:!0});var k=m(S);T=I(k,"Autopause"),k.forEach(b),j=g(E),L=f(E,"DIV",{class:!0});var D=m(L);$=f(D,"INPUT",{type:!0,id:!0,min:!0,max:!0,class:!0,placeholder:!0}),A=g(D),B=f(D,"DIV",{class:!0});var N=m(B);P=f(N,"SPAN",{class:!0,id:!0});var rt=m(P);C=I(rt,"minutes"),rt.forEach(b),N.forEach(b),D.forEach(b),E.forEach(b),F=g(p),M=f(p,"DIV",{class:!0});var nt=m(M);O=f(nt,"LABEL",{class:!0,for:!0});var ot=m(O);U=I(ot,"Big Titles"),ot.forEach(b),z=g(nt),G=f(nt,"DIV",{class:!0});var ct=m(G);H=f(ct,"DIV",{class:!0});var it=m(H);X=f(it,"INPUT",{type:!0,class:!0,id:!0}),q=g(it),J=f(it,"LABEL",{class:!0,for:!0}),m(J).forEach(b),it.forEach(b),ct.forEach(b),nt.forEach(b),R=g(p),K=f(p,"DIV",{class:!0});var lt=m(K);Q=f(lt,"LABEL",{class:!0,for:!0});var ut=m(Q);W=I(ut,"Footer"),ut.forEach(b),Y=g(lt),Z=f(lt,"DIV",{class:!0});var dt=m(Z);tt=f(dt,"DIV",{class:!0});var pt=m(tt);at=f(pt,"INPUT",{type:!0,class:!0,id:!0}),et=g(pt),st=f(pt,"LABEL",{class:!0,for:!0}),m(st).forEach(b),pt.forEach(b),dt.forEach(b),lt.forEach(b),p.forEach(b),this.h()},h(){v(s,"class","small"),v(s,"for","duration"),v(c,"type","number"),v(c,"id","duration"),v(c,"min","10"),v(c,"max","120"),v(c,"class","form-control"),v(c,"placeholder","number of seconds to display"),v(u,"class","input-group-text "),v(u,"id","duration-addon"),v(l,"class","input-group-append"),v(o,"class","input-group mb-3"),v(e,"class","card-text"),v(S,"class","small"),v(S,"for","duration"),v($,"type","number"),v($,"id","duration"),v($,"min","15"),v($,"max",N=1440),v($,"class","form-control"),v($,"placeholder","minutes until autopause"),v(P,"class","input-group-text "),v(P,"id","duration-addon"),v(B,"class","input-group-append"),v(L,"class","input-group mb-3"),v(_,"class","card-text"),v(O,"class","small"),v(O,"for","duration"),v(X,"type","checkbox"),v(X,"class","custom-control-input"),v(X,"id","titleControl"),v(J,"class","custom-control-label"),v(J,"for","titleControl"),v(H,"class","custom-control custom-switch"),v(G,"class","input-group mb-3"),v(M,"class","card-text"),v(Q,"class","small"),v(Q,"for","duration"),v(at,"type","checkbox"),v(at,"class","custom-control-input"),v(at,"id","footerControl"),v(st,"class","custom-control-label"),v(st,"for","footerControl"),v(tt,"class","custom-control custom-switch"),v(Z,"class","input-group mb-3"),v(K,"class","card-text"),v(a,"slot","preferences"),v(a,"class","card-text")},m(p,h,f){x(p,a,h),y(a,e),y(e,s),y(s,r),y(e,n),y(e,o),y(o,c),D(c,t[1]),y(o,i),y(o,l),y(l,u),y(u,d),y(a,V),y(a,_),y(_,S),y(S,T),y(_,j),y(_,L),y(L,$),D($,t[5]),y(L,A),y(L,B),y(B,P),y(P,C),y(a,F),y(a,M),y(M,O),y(O,U),y(M,z),y(M,G),y(G,H),y(H,X),X.checked=t[4],y(H,q),y(H,J),y(a,R),y(a,K),y(K,Q),y(Q,W),y(K,Y),y(K,Z),y(Z,tt),y(tt,at),at.checked=t[0],y(tt,et),y(tt,st),f&&w(rt),rt=[E(c,"input",ct),E($,"input",it),E(X,"change",t[19]),E(at,"change",t[20])]},p(t,a){!nt&&2&a&&D(c,t[1]),nt=!1,!ot&&32&a&&D($,t[5]),ot=!1,16&a&&(X.checked=t[4]),1&a&&(at.checked=t[0])},d(t){t&&b(a),w(rt)}}}function M(t){let a,e,s,r,n,o,c,i,l=t[2].indexOf(t[3])+1+"",u=t[2].length+"",d=60*t[5]-t[7]+"";return{c(){a=p("div"),e=k("Showing video #"),s=k(l),r=k(" out of "),n=k(u),o=k(" videos.\n  There is "),c=k(d),i=k(" seconds left until autopause."),this.h()},l(t){a=f(t,"DIV",{slot:!0});var p=m(a);e=I(p,"Showing video #"),s=I(p,l),r=I(p," out of "),n=I(p,u),o=I(p," videos.\n  There is "),c=I(p,d),i=I(p," seconds left until autopause."),p.forEach(b),this.h()},h(){v(a,"slot","preferences-footer")},m(t,l){x(t,a,l),y(a,e),y(a,s),y(a,r),y(a,n),y(a,o),y(a,c),y(a,i)},p(t,a){12&a&&l!==(l=t[2].indexOf(t[3])+1+"")&&V(s,l),4&a&&u!==(u=t[2].length+"")&&V(n,u),160&a&&d!==(d=60*t[5]-t[7]+"")&&V(c,d)},d(t){t&&b(a)}}}function O(t){let a,e,s,r,n,o,c,i,l,u,d=t[4]&&z(t),w=!t[4]&&G(t),E=t[0]&&H(t);return{c(){a=p("a"),e=p("img"),o=h(),c=p("div"),d&&d.c(),i=h(),w&&w.c(),l=h(),E&&E.c(),u=_(),this.h()},l(t){a=f(t,"A",{href:!0,rel:!0,target:!0});var s=m(a);e=f(s,"IMG",{src:!0,class:!0,alt:!0}),s.forEach(b),o=g(t),c=f(t,"DIV",{class:!0});var r=m(c);d&&d.l(r),i=g(r),w&&w.l(r),r.forEach(b),l=g(t),E&&E.l(t),u=_(),this.h()},h(){e.src!==(s=t[3].image)&&v(e,"src",s),v(e,"class","card-img"),v(e,"alt",r=t[3].title),v(a,"href",n=t[3].url),v(a,"rel","noopener noreferrer"),v(a,"target","_blank"),v(c,"class","card-body p-1 m-0")},m(t,s){x(t,a,s),y(a,e),x(t,o,s),x(t,c,s),d&&d.m(c,null),y(c,i),w&&w.m(c,null),x(t,l,s),E&&E.m(t,s),x(t,u,s)},p(t,o){8&o&&e.src!==(s=t[3].image)&&v(e,"src",s),8&o&&r!==(r=t[3].title)&&v(e,"alt",r),8&o&&n!==(n=t[3].url)&&v(a,"href",n),t[4]?d?d.p(t,o):((d=z(t)).c(),d.m(c,i)):d&&(d.d(1),d=null),t[4]?w&&(w.d(1),w=null):w?w.p(t,o):((w=G(t)).c(),w.m(c,null)),t[0]?E?E.p(t,o):((E=H(t)).c(),E.m(u.parentNode,u)):E&&(E.d(1),E=null)},d(t){t&&b(a),t&&b(o),t&&b(c),d&&d.d(),w&&w.d(),t&&b(l),E&&E.d(t),t&&b(u)}}}function U(t){let a,e,s,r,n,o,c;return{c(){a=p("div"),e=p("div"),s=k("Loading Database..."),r=h(),n=p("div"),o=p("span"),c=k("Loading Database..."),this.h()},l(t){a=f(t,"DIV",{class:!0});var i=m(a);e=f(i,"DIV",{class:!0});var l=m(e);s=I(l,"Loading Database..."),l.forEach(b),r=g(i),n=f(i,"DIV",{class:!0,role:!0});var u=m(n);o=f(u,"SPAN",{class:!0});var d=m(o);c=I(d,"Loading Database..."),d.forEach(b),u.forEach(b),i.forEach(b),this.h()},h(){v(e,"class","text-warning p-5"),v(o,"class","sr-only"),v(n,"class","spinner-border text-danger"),v(n,"role","status"),v(a,"class","card-body text-center")},m(t,i){x(t,a,i),y(a,e),y(e,s),y(a,r),y(a,n),y(n,o),y(o,c)},p:d,d(t){t&&b(a)}}}function z(t){let a,e,s=t[3].title+"";return{c(){a=p("h5"),e=k(s),this.h()},l(t){a=f(t,"H5",{class:!0});var r=m(a);e=I(r,s),r.forEach(b),this.h()},h(){v(a,"class","card-title text-center m-0 p-2")},m(t,s){x(t,a,s),y(a,e)},p(t,a){8&a&&s!==(s=t[3].title+"")&&V(e,s)},d(t){t&&b(a)}}}function G(t){let a,e,s=t[3].title+"";return{c(){a=p("p"),e=k(s),this.h()},l(t){a=f(t,"P",{class:!0});var r=m(a);e=I(r,s),r.forEach(b),this.h()},h(){v(a,"class","card-text small text-secondary text-center")},m(t,s){x(t,a,s),y(a,e)},p(t,a){8&a&&s!==(s=t[3].title+"")&&V(e,s)},d(t){t&&b(a)}}}function H(t){let a,e,s,r,n;return{c(){a=p("div"),e=p("div"),s=h(),r=p("div"),n=p("div"),this.h()},l(t){a=f(t,"DIV",{class:!0,style:!0});var o=m(a);e=f(o,"DIV",{class:!0,role:!0,style:!0,"aria-valuenow":!0,"aria-valuemin":!0,"aria-valuemax":!0}),m(e).forEach(b),o.forEach(b),s=g(t),r=f(t,"DIV",{class:!0,style:!0});var c=m(r);n=f(c,"DIV",{class:!0,role:!0,style:!0,"aria-valuenow":!0,"aria-valuemin":!0,"aria-valuemax":!0}),m(n).forEach(b),c.forEach(b),this.h()},h(){v(e,"class","progress-bar bg-warning"),v(e,"role","progressbar"),T(e,"width",t[8]+"%"),v(e,"aria-valuenow",t[8]),v(e,"aria-valuemin","0"),v(e,"aria-valuemax","100"),v(a,"class","progress"),T(a,"height","1px"),T(a,"background","black"),v(n,"class","progress-bar bg-secondary"),v(n,"role","progressbar"),T(n,"width",t[9]+"%"),v(n,"aria-valuenow",t[9]),v(n,"aria-valuemin","0"),v(n,"aria-valuemax","100"),v(r,"class","progress mt-1"),T(r,"height","1px"),T(r,"background","black")},m(t,o){x(t,a,o),y(a,e),x(t,s,o),x(t,r,o),y(r,n)},p(t,a){256&a&&T(e,"width",t[8]+"%"),256&a&&v(e,"aria-valuenow",t[8]),512&a&&T(n,"width",t[9]+"%"),512&a&&v(n,"aria-valuenow",t[9])},d(t){t&&b(a),t&&b(s),t&&b(r)}}}function X(t){let a,e,s,r,n,o;function c(t,a){return 0===t[2].length?U:O}let i=c(t),l=i(t);return{c(){a=h(),e=h(),s=h(),r=h(),n=h(),l.c(),o=_()},l(t){a=g(t),e=g(t),s=g(t),r=g(t),n=g(t),l.l(t),o=_()},m(t,c){x(t,a,c),x(t,e,c),x(t,s,c),x(t,r,c),x(t,n,c),l.m(t,c),x(t,o,c)},p(t,a){i===(i=c(t))&&l?l.p(t,a):(l.d(1),(l=i(t))&&(l.c(),l.m(o.parentNode,o)))},d(t){t&&b(a),t&&b(e),t&&b(s),t&&b(r),t&&b(n),l.d(t),t&&b(o)}}}function q(t){let a;const e=new N({props:{title:"Videos",$$slots:{default:[X],"preferences-footer":[M],preferences:[F],buttons:[C]},$$scope:{ctx:t}}});return{c(){s(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,s){n(e,t,s),a=!0},p(t,[a]){const s={};2098175&a&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){a||(o(e.$$.fragment,t),a=!0)},o(t){c(e.$$.fragment,t),a=!1},d(t){i(e,t)}}}function J(t){for(let a=t.length-1;a>0;a--){const e=Math.floor(Math.random()*(a+1));[t[a],t[e]]=[t[e],t[a]]}return t}function R(t,a){return t=Math.ceil(t),a=Math.floor(a),Math.floor(Math.random()*(a-t+1))+t}function K(t,a,e){const s=j(),r=A.sprintf;let n=[],o="",c=!1,i=15,{footer:u=!0}=a,{duration:d=R(10,60)}=a;l(async function(){const t=await fetch("/youtube.json"),a=await t.json();setTimeout(t=>{e(2,n=J(a)),v()},1e3)});let p=!1,h=0,f=0,m=0,g=0,b=-1;function v(){h=0,e(8,m=0),++b+1>n.length&&(e(2,n=J(n)),b=0),e(3,o=n[b])}setInterval(function(){p||0!==n.length&&(h>=d&&v(),h++,e(7,f++,f),e(8,m=100*$(h,d)),e(9,g=r("%.0f",100*$(b+1,n.length))),f>=60*i&&(e(6,p=!0),e(7,f=0)))},1e3);return t.$set=(t=>{"footer"in t&&e(0,u=t.footer),"duration"in t&&e(1,d=t.duration)}),[u,d,n,o,c,i,p,f,m,g,s,v,function(){h=0,e(8,m=0),0==b||b--,e(3,o=n[b])},h,b,r,t=>e(6,p=!p),function(){d=S(this.value),e(1,d)},function(){i=S(this.value),e(5,i)},function(){c=this.checked,e(4,c)},function(){u=this.checked,e(0,u)}]}class Q extends t{constructor(t){super(),a(this,t,K,q,e,{footer:0,duration:1})}}export{Q as R,A as s};