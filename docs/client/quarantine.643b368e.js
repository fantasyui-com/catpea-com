import{S as t,i as e,s as a,e as s,w as n,h as l,c as o,a as r,x as c,d as i,j as f,k as m,b as h,l as u,y as d,z as g,A as p,B as v,R as j,L as $,u as I,O as q,K as x}from"./client.7fed96fb.js";import"./Icon.3fea22e1.js";import{m as b}from"./index.484291a3.js";import"./_commonjsHelpers.b9e74a66.js";import{m as E}from"./moment.b6526e42.js";import{P as w}from"./Post.1f3c63d0.js";function D(t,e,a){const s=t.slice();return s[3]=e[a],s[5]=a,s}function P(t){let e,a,j,$;const I=new w({props:{title:t[3].name,icon:y,date:t[3].ago,html:t[3].html}});return{c(){e=s("div"),a=s("div"),n(I.$$.fragment),j=l(),this.h()},l(t){e=o(t,"DIV",{class:!0});var s=r(e);a=o(s,"DIV",{class:!0});var n=r(a);c(I.$$.fragment,n),n.forEach(i),j=f(s),s.forEach(i),this.h()},h(){m(a,"class","col-xs-12 offset-md-1 col-md-10 offset-lg-3 col-lg-6"),m(e,"class","row")},m(t,s){h(t,e,s),u(e,a),d(I,a,null),u(e,j),$=!0},p(t,e){const a={};1&e&&(a.title=t[3].name),1&e&&(a.date=t[3].ago),1&e&&(a.html=t[3].html),I.$set(a)},i(t){$||(g(I.$$.fragment,t),$=!0)},o(t){p(I.$$.fragment,t),$=!1},d(t){t&&i(e),v(I)}}}function V(t){let e,a,n,c=t[0].quarantine,u=[];for(let e=0;e<c.length;e+=1)u[e]=P(D(t,c,e));const d=t=>p(u[t],1,1,()=>{u[t]=null});return{c(){e=l(),a=s("div");for(let t=0;t<u.length;t+=1)u[t].c();this.h()},l(t){j('[data-svelte="svelte-1h0mj43"]',document.head).forEach(i),e=f(t),a=o(t,"DIV",{class:!0});var s=r(a);for(let t=0;t<u.length;t+=1)u[t].l(s);s.forEach(i),this.h()},h(){document.title="𝗖𝗔𝗧𝗣𝗘𝗔: Quarantine and Poetry",m(a,"class","container")},m(t,s){h(t,e,s),h(t,a,s);for(let t=0;t<u.length;t+=1)u[t].m(a,null);n=!0},p(t,[e]){if(1&e){let s;for(c=t[0].quarantine,s=0;s<c.length;s+=1){const n=D(t,c,s);u[s]?(u[s].p(n,e),g(u[s],1)):(u[s]=P(n),u[s].c(),g(u[s],1),u[s].m(a,null))}for(x(),s=c.length;s<u.length;s+=1)d(s);$()}},i(t){if(!n){for(let t=0;t<c.length;t+=1)g(u[t]);n=!0}},o(t){u=u.filter(Boolean);for(let t=0;t<u.length;t+=1)p(u[t]);n=!1},d(t){t&&i(e),t&&i(a),I(u,t)}}}const y="squirrel";function B(t,e,a){let s=b();function n(){a(0,s.quarantine=s.quarantine.map(t=>(t.ago=E(t.date).from(E()),t)),s)}let l=null;return l=setInterval(n,6e4),n(),q(()=>{clearInterval(l)}),[s]}export default class extends t{constructor(t){super(),e(this,t,B,V,a,{})}}
