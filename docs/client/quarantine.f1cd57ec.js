import{S as t,a,s as e,f as s,x as l,g as n,h as o,j as r,y as c,e as f,k as i,l as m,b as h,m as u,z as d,A as g,B as p,C as v,O as $,J as j,v as I,D as q,I as b}from"./client.7e76ccc2.js";import{a as x,m as D}from"./moment.cbbd1e91.js";import"./commonjsHelpers.b9e74a66.js";import{P as E}from"./Post.843cf7cd.js";function P(t,a,e){const s=t.slice();return s[3]=a[e],s[5]=e,s}function V(t){let a,e,$,j;const I=new E({props:{title:t[3].name,icon:y,date:t[3].ago,html:t[3].html}});return{c(){a=s("div"),e=s("div"),l(I.$$.fragment),$=n(),this.h()},l(t){a=o(t,"DIV",{class:!0});var s=r(a);e=o(s,"DIV",{class:!0});var l=r(e);c(I.$$.fragment,l),l.forEach(f),$=i(s),s.forEach(f),this.h()},h(){m(e,"class","col-xs-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8"),m(a,"class","row")},m(t,s){h(t,a,s),u(a,e),d(I,e,null),u(a,$),j=!0},p(t,a){const e={};1&a&&(e.title=t[3].name),1&a&&(e.date=t[3].ago),1&a&&(e.html=t[3].html),I.$set(e)},i(t){j||(g(I.$$.fragment,t),j=!0)},o(t){p(I.$$.fragment,t),j=!1},d(t){t&&f(a),v(I)}}}function w(t){let a,e,l,c=t[0].quarantine,u=[];for(let a=0;a<c.length;a+=1)u[a]=V(P(t,c,a));const d=t=>p(u[t],1,1,()=>{u[t]=null});return{c(){a=n(),e=s("div");for(let t=0;t<u.length;t+=1)u[t].c();this.h()},l(t){$('[data-svelte="svelte-1h0mj43"]',document.head).forEach(f),a=i(t),e=o(t,"DIV",{class:!0});var s=r(e);for(let t=0;t<u.length;t+=1)u[t].l(s);s.forEach(f),this.h()},h(){document.title="𝗖𝗔𝗧𝗣𝗘𝗔: Quarantine and Poetry",m(e,"class","container")},m(t,s){h(t,a,s),h(t,e,s);for(let t=0;t<u.length;t+=1)u[t].m(e,null);l=!0},p(t,[a]){if(1&a){let s;for(c=t[0].quarantine,s=0;s<c.length;s+=1){const l=P(t,c,s);u[s]?(u[s].p(l,a),g(u[s],1)):(u[s]=V(l),u[s].c(),g(u[s],1),u[s].m(e,null))}for(b(),s=c.length;s<u.length;s+=1)d(s);j()}},i(t){if(!l){for(let t=0;t<c.length;t+=1)g(u[t]);l=!0}},o(t){u=u.filter(Boolean);for(let t=0;t<u.length;t+=1)p(u[t]);l=!1},d(t){t&&f(a),t&&f(e),I(u,t)}}}const y="squirrel";function B(t,a,e){let s=x();function l(){e(0,s.quarantine=s.quarantine.map(t=>(t.ago=D(t.date).from(D()),t)),s)}let n=null;return n=setInterval(l,6e4),l(),q(()=>{clearInterval(n)}),[s]}export default class extends t{constructor(t){super(),a(this,t,B,w,e,{})}}
