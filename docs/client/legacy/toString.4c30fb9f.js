import{N as t,z as r}from"./client.ad4fc339.js";var n="object"==t(r)&&r&&r.Object===Object&&r,e="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,o=(n||e||Function("return this")()).Symbol;var i=function(t,r){for(var n=-1,e=null==t?0:t.length,o=Array(e);++n<e;)o[n]=r(t[n],n,t);return o},c=Array.isArray,a=Object.prototype,l=a.hasOwnProperty,u=a.toString,f=o?o.toStringTag:void 0;var v=function(t){var r=l.call(t,f),n=t[f];try{t[f]=void 0;var e=!0}catch(t){}var o=u.call(t);return e&&(r?t[f]=n:delete t[f]),o},b=Object.prototype.toString;var d=function(t){return b.call(t)},j="[object Null]",s="[object Undefined]",y=o?o.toStringTag:void 0;var p=function(t){return null==t?void 0===t?s:j:y&&y in Object(t)?v(t):d(t)};var g=function(r){return null!=r&&"object"==t(r)},O="[object Symbol]";var S=function(r){return"symbol"==t(r)||g(r)&&p(r)==O},m=1/0,h=o?o.prototype:void 0,A=h?h.toString:void 0;var N=function t(r){if("string"==typeof r)return r;if(c(r))return i(r,t)+"";if(S(r))return A?A.call(r):"";var n=r+"";return"0"==n&&1/r==-m?"-0":n};var T=function(t){return null==t?"":N(t)};export{T as t};
