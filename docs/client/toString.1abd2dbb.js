import{a as t}from"./commonjsHelpers.b9e74a66.js";var r="object"==typeof t&&t&&t.Object===Object&&t,e="object"==typeof self&&self&&self.Object===Object&&self,o=(r||e||Function("return this")()).Symbol;var n=function(t,r){for(var e=-1,o=null==t?0:t.length,n=Array(o);++e<o;)n[e]=r(t[e],e,t);return n},a=Array.isArray,c=Object.prototype,i=c.hasOwnProperty,l=c.toString,u=o?o.toStringTag:void 0;var f=function(t){var r=i.call(t,u),e=t[u];try{t[u]=void 0;var o=!0}catch(t){}var n=l.call(t);return o&&(r?t[u]=e:delete t[u]),n},v=Object.prototype.toString;var b=function(t){return v.call(t)},y="[object Null]",j="[object Undefined]",p=o?o.toStringTag:void 0;var s=function(t){return null==t?void 0===t?j:y:p&&p in Object(t)?f(t):b(t)};var d=function(t){return null!=t&&"object"==typeof t},g="[object Symbol]";var O=function(t){return"symbol"==typeof t||d(t)&&s(t)==g},m=1/0,S=o?o.prototype:void 0,h=S?S.toString:void 0;var A=function t(r){if("string"==typeof r)return r;if(a(r))return n(r,t)+"";if(O(r))return h?h.call(r):"";var e=r+"";return"0"==e&&1/r==-m?"-0":e};var T=function(t){return null==t?"":A(t)};export{T as t};
