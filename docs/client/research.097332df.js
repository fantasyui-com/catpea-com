import{S as t,i as e,s as a,e as s,z as l,f as r,g as n,h as o,A as c,d as h,j as f,k as i,a as m,l as d,B as g,C as u,D as v,E as p,T as $,N as E,w as I,U as x,F as D,L as w,a1 as A,M as B,H as P}from"./client.548edf69.js";function V(t,e,a){const s=t.slice();return s[3]=e[a],s[5]=a,s}function b(t){let e,a,$,E;const I=new A({props:{icon:C,date:t[3].ago,html:t[3].html,decoration:"energon"}});return{c(){e=s("div"),a=s("div"),l(I.$$.fragment),$=r(),this.h()},l(t){e=n(t,"DIV",{class:!0});var s=o(e);a=n(s,"DIV",{class:!0});var l=o(a);c(I.$$.fragment,l),l.forEach(h),$=f(s),s.forEach(h),this.h()},h(){i(a,"class","col-xs-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8"),i(e,"class","row mb-4")},m(t,s){m(t,e,s),d(e,a),g(I,a,null),d(e,$),E=!0},p(t,e){const a={};1&e&&(a.date=t[3].ago),1&e&&(a.html=t[3].html),I.$set(a)},i(t){E||(u(I.$$.fragment,t),E=!0)},o(t){v(I.$$.fragment,t),E=!1},d(t){t&&h(e),p(I)}}}function j(t){let e,a,l,c=t[0].research,d=[];for(let e=0;e<c.length;e+=1)d[e]=b(V(t,c,e));const g=t=>v(d[t],1,1,()=>{d[t]=null});return{c(){e=r(),a=s("div");for(let t=0;t<d.length;t+=1)d[t].c();this.h()},l(t){$('[data-svelte="svelte-4x98q0"]',document.head).forEach(h),e=f(t),a=n(t,"DIV",{class:!0});var s=o(a);for(let t=0;t<d.length;t+=1)d[t].l(s);s.forEach(h),this.h()},h(){document.title="CATPEA! Research, Progress, Peanut Butter, and Jelly",i(a,"class","container")},m(t,s){m(t,e,s),m(t,a,s);for(let t=0;t<d.length;t+=1)d[t].m(a,null);l=!0},p(t,[e]){if(1&e){let s;for(c=t[0].research,s=0;s<c.length;s+=1){const l=V(t,c,s);d[s]?(d[s].p(l,e),u(d[s],1)):(d[s]=b(l),d[s].c(),u(d[s],1),d[s].m(a,null))}for(B(),s=c.length;s<d.length;s+=1)g(s);E()}},i(t){if(!l){for(let t=0;t<c.length;t+=1)u(d[t]);l=!0}},o(t){d=d.filter(Boolean);for(let t=0;t<d.length;t+=1)v(d[t]);l=!1},d(t){t&&h(e),t&&h(a),I(d,t)}}}const C="mortar-board";function T(t,e,a){let s=x();function l(){a(0,s.research=s.research.map(t=>(t.ago=P(t.date).from(P()),t)),s)}let r=null;return r=setInterval(l,6e4),l(),D(()=>{clearInterval(r)}),w(()=>{}),[s]}export default class extends t{constructor(t){super(),e(this,t,T,j,a,{})}}
