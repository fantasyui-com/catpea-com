import{S as t,i as a,s as e,e as s,z as l,f as n,g as r,h as o,A as c,d as f,j as i,k as h,a as u,l as m,B as g,C as d,D as v,E as p,T as $,N as E,w as q,U as I,F as D,a1 as w,M as x,H as A}from"./client.8a28c7ee.js";function V(t,a,e){const s=t.slice();return s[3]=a[e],s[5]=e,s}function j(t){let a,e,$,E;const q=new w({props:{title:t[3].name,icon:C,date:t[3].ago,html:t[3].html}});return{c(){a=s("div"),e=s("div"),l(q.$$.fragment),$=n(),this.h()},l(t){a=r(t,"DIV",{class:!0});var s=o(a);e=r(s,"DIV",{class:!0});var l=o(e);c(q.$$.fragment,l),l.forEach(f),$=i(s),s.forEach(f),this.h()},h(){h(e,"class","col-xs-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8"),h(a,"class","row mb-4")},m(t,s){u(t,a,s),m(a,e),g(q,e,null),m(a,$),E=!0},p(t,a){const e={};1&a&&(e.title=t[3].name),1&a&&(e.date=t[3].ago),1&a&&(e.html=t[3].html),q.$set(e)},i(t){E||(d(q.$$.fragment,t),E=!0)},o(t){v(q.$$.fragment,t),E=!1},d(t){t&&f(a),p(q)}}}function B(t){let a,e,l,c=t[0].quarantine,m=[];for(let a=0;a<c.length;a+=1)m[a]=j(V(t,c,a));const g=t=>v(m[t],1,1,()=>{m[t]=null});return{c(){a=n(),e=s("div");for(let t=0;t<m.length;t+=1)m[t].c();this.h()},l(t){$('[data-svelte="svelte-1f2mr3u"]',document.head).forEach(f),a=i(t),e=r(t,"DIV",{class:!0});var s=o(e);for(let t=0;t<m.length;t+=1)m[t].l(s);s.forEach(f),this.h()},h(){document.title="CATPEA! Quarantine and Poetry",h(e,"class","container")},m(t,s){u(t,a,s),u(t,e,s);for(let t=0;t<m.length;t+=1)m[t].m(e,null);l=!0},p(t,[a]){if(1&a){let s;for(c=t[0].quarantine,s=0;s<c.length;s+=1){const l=V(t,c,s);m[s]?(m[s].p(l,a),d(m[s],1)):(m[s]=j(l),m[s].c(),d(m[s],1),m[s].m(e,null))}for(x(),s=c.length;s<m.length;s+=1)g(s);E()}},i(t){if(!l){for(let t=0;t<c.length;t+=1)d(m[t]);l=!0}},o(t){m=m.filter(Boolean);for(let t=0;t<m.length;t+=1)v(m[t]);l=!1},d(t){t&&f(a),t&&f(e),q(m,t)}}}const C="squirrel";function P(t,a,e){let s=I();function l(){e(0,s.quarantine=s.quarantine.map(t=>(t.ago=A(t.date).from(A()),t)),s)}let n=null;return n=setInterval(l,6e4),l(),D(()=>{clearInterval(n)}),[s]}export default class extends t{constructor(t){super(),a(this,t,P,B,e,{})}}
