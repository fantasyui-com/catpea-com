import{_ as t,a as r}from"./client.8eb9af7f.js";var n=function(t,r){for(var n=-1,e=null==t?0:t.length,o=Array(e);++n<e;)o[n]=r(t[n],n,t);return o},e="object"==t(r)&&r&&r.Object===Object&&r,o="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,a=e||o||Function("return this")(),i=a.Symbol,c=Object.prototype,l=c.hasOwnProperty,u=c.toString,f=i?i.toStringTag:void 0;var s=function(t){var r=l.call(t,f),n=t[f];try{t[f]=void 0;var e=!0}catch(t){}var o=u.call(t);return e&&(r?t[f]=n:delete t[f]),o},v=Object.prototype.toString;var b=function(t){return v.call(t)},j="[object Null]",d="[object Undefined]",y=i?i.toStringTag:void 0;var p=function(t){return null==t?void 0===t?d:j:y&&y in Object(t)?s(t):b(t)};var g=function(r){return null!=r&&"object"==t(r)},O=Array.isArray,S="[object Symbol]";var m=function(r){return"symbol"==t(r)||g(r)&&p(r)==S},h=1/0,A=i?i.prototype:void 0,T=A?A.toString:void 0;var _=function t(r){if("string"==typeof r)return r;if(O(r))return n(r,t)+"";if(m(r))return T?T.call(r):"";var e=r+"";return"0"==e&&1/r==-h?"-0":e};var w=function(t){return null==t?"":_(t)};export{i as _,n as a,p as b,O as c,e as f,g as i,a as r,w as t};
