import{S as t,a as e,s as a,f as s,x as l,g as r,h as o,j as n,y as c,e as f,k as h,l as m,b as i,m as u,z as d,A as g,B as p,C as v,O as $,J as b,v as j,D as I,I as x}from"./client.36fdc49c.js";import{a as D,m as E}from"./moment.b5aa25aa.js";import"./commonjsHelpers.b9e74a66.js";import{P}from"./Post.f0911a9a.js";function B(t,e,a){const s=t.slice();return s[3]=e[a],s[5]=a,s}function V(t){let e,a,$,b;const j=new P({props:{title:t[3].name,icon:y,date:t[3].ago,html:t[3].html}});return{c(){e=s("div"),a=s("div"),l(j.$$.fragment),$=r(),this.h()},l(t){e=o(t,"DIV",{class:!0});var s=n(e);a=o(s,"DIV",{class:!0});var l=n(a);c(j.$$.fragment,l),l.forEach(f),$=h(s),s.forEach(f),this.h()},h(){m(a,"class","col-xs-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8"),m(e,"class","row")},m(t,s){i(t,e,s),u(e,a),d(j,a,null),u(e,$),b=!0},p(t,e){const a={};1&e&&(a.title=t[3].name),1&e&&(a.date=t[3].ago),1&e&&(a.html=t[3].html),j.$set(a)},i(t){b||(g(j.$$.fragment,t),b=!0)},o(t){p(j.$$.fragment,t),b=!1},d(t){t&&f(e),v(j)}}}function w(t){let e,a,l,c=t[0].research,u=[];for(let e=0;e<c.length;e+=1)u[e]=V(B(t,c,e));const d=t=>p(u[t],1,1,()=>{u[t]=null});return{c(){e=r(),a=s("div");for(let t=0;t<u.length;t+=1)u[t].c();this.h()},l(t){$('[data-svelte="svelte-1b13bsd"]',document.head).forEach(f),e=h(t),a=o(t,"DIV",{class:!0});var s=n(a);for(let t=0;t<u.length;t+=1)u[t].l(s);s.forEach(f),this.h()},h(){document.title="𝗖𝗔𝗧𝗣𝗘𝗔: Research, Progress, Peanut Butter, and Jelly",m(a,"class","container")},m(t,s){i(t,e,s),i(t,a,s);for(let t=0;t<u.length;t+=1)u[t].m(a,null);l=!0},p(t,[e]){if(1&e){let s;for(c=t[0].research,s=0;s<c.length;s+=1){const l=B(t,c,s);u[s]?(u[s].p(l,e),g(u[s],1)):(u[s]=V(l),u[s].c(),g(u[s],1),u[s].m(a,null))}for(x(),s=c.length;s<u.length;s+=1)d(s);b()}},i(t){if(!l){for(let t=0;t<c.length;t+=1)g(u[t]);l=!0}},o(t){u=u.filter(Boolean);for(let t=0;t<u.length;t+=1)p(u[t]);l=!1},d(t){t&&f(e),t&&f(a),j(u,t)}}}const y="mortar-board";function J(t,e,a){let s=D();function l(){a(0,s.research=s.research.map(t=>(t.ago=E(t.date).from(E()),t)),s)}let r=null;return r=setInterval(l,6e4),l(),I(()=>{clearInterval(r)}),[s]}export default class extends t{constructor(t){super(),e(this,t,J,w,a,{})}}