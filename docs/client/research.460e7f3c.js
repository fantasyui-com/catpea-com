import{S as t,a as e,s,f as a,x as l,g as r,h as o,j as n,y as c,e as f,k as h,l as m,b as i,m as d,z as u,A as g,B as p,C as v,O as $,J as b,v as j,D as I,I as x}from"./client.730f05ed.js";import{a as D,m as E}from"./moment.db788e2a.js";import"./commonjsHelpers.b9e74a66.js";import{P}from"./Post.8bbf1340.js";function B(t,e,s){const a=t.slice();return a[3]=e[s],a[5]=s,a}function V(t){let e,s,$,b;const j=new P({props:{title:t[3].name,icon:y,date:t[3].ago,html:t[3].html}});return{c(){e=a("div"),s=a("div"),l(j.$$.fragment),$=r(),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=n(e);s=o(a,"DIV",{class:!0});var l=n(s);c(j.$$.fragment,l),l.forEach(f),$=h(a),a.forEach(f),this.h()},h(){m(s,"class","col-xs-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8"),m(e,"class","row")},m(t,a){i(t,e,a),d(e,s),u(j,s,null),d(e,$),b=!0},p(t,e){const s={};1&e&&(s.title=t[3].name),1&e&&(s.date=t[3].ago),1&e&&(s.html=t[3].html),j.$set(s)},i(t){b||(g(j.$$.fragment,t),b=!0)},o(t){p(j.$$.fragment,t),b=!1},d(t){t&&f(e),v(j)}}}function w(t){let e,s,l,c=t[0].research,d=[];for(let e=0;e<c.length;e+=1)d[e]=V(B(t,c,e));const u=t=>p(d[t],1,1,()=>{d[t]=null});return{c(){e=r(),s=a("div");for(let t=0;t<d.length;t+=1)d[t].c();this.h()},l(t){$('[data-svelte="svelte-1b13bsd"]',document.head).forEach(f),e=h(t),s=o(t,"DIV",{class:!0});var a=n(s);for(let t=0;t<d.length;t+=1)d[t].l(a);a.forEach(f),this.h()},h(){document.title="𝗖𝗔𝗧𝗣𝗘𝗔: Research, Progress, Peanut Butter, and Jelly",m(s,"class","container")},m(t,a){i(t,e,a),i(t,s,a);for(let t=0;t<d.length;t+=1)d[t].m(s,null);l=!0},p(t,[e]){if(1&e){let a;for(c=t[0].research,a=0;a<c.length;a+=1){const l=B(t,c,a);d[a]?(d[a].p(l,e),g(d[a],1)):(d[a]=V(l),d[a].c(),g(d[a],1),d[a].m(s,null))}for(x(),a=c.length;a<d.length;a+=1)u(a);b()}},i(t){if(!l){for(let t=0;t<c.length;t+=1)g(d[t]);l=!0}},o(t){d=d.filter(Boolean);for(let t=0;t<d.length;t+=1)p(d[t]);l=!1},d(t){t&&f(e),t&&f(s),j(d,t)}}}const y="mortar-board";function J(t,e,s){let a=D();function l(){s(0,a.research=a.research.map(t=>(t.ago=E(t.date).from(E()),t)),a)}let r=null;return r=setInterval(l,6e4),l(),I(()=>{clearInterval(r)}),[a]}export default class extends t{constructor(t){super(),e(this,t,J,w,s,{})}}
