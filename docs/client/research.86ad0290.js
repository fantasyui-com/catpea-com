import{S as a,i as s,s as t,f as e,e as r,t as c,R as n,d as l,j as o,g as h,h as u,c as i,k as p,a as f,l as m,n as d,$ as v,M as b,J as g,a0 as w}from"./client.8a670479.js";function x(a){let s,t,v;return{c(){s=e(),t=r("a"),v=c("http://news.catpea.com »"),this.h()},l(a){n('[data-svelte="svelte-4x98q0"]',document.head).forEach(l),s=o(a),t=h(a,"A",{href:!0,class:!0});var e=u(t);v=i(e,"http://news.catpea.com »"),e.forEach(l),this.h()},h(){document.title="CATPEA! Research, Progress, Peanut Butter, and Jelly",p(t,"href","http://news.catpea.com"),p(t,"class","btn btn-primary btn-a")},m(a,e){f(a,s,e),f(a,t,e),m(t,v)},p:d,i:d,o:d,d(a){a&&l(s),a&&l(t)}}}function A(a){let s=v();function t(){s.research=s.research.map(a=>(a.ago=w(a.date).from(w()),a))}let e=null;return e=setInterval(t,6e4),t(),b(()=>{clearInterval(e)}),g(()=>{}),[]}export default class extends a{constructor(a){super(),s(this,a,A,x,t,{})}}