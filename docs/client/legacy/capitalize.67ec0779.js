import{t as u}from"./toString.83c15738.js";var f=function(u,f,r){var e=-1,n=u.length;f<0&&(f=-f>n?0:n+f),(r=r>n?n:r)<0&&(r+=n),n=f>r?0:r-f>>>0,f>>>=0;for(var t=Array(n);++e<n;)t[e]=u[e+f];return t};var r=function(u,r,e){var n=u.length;return e=void 0===e?n:e,!r&&e>=n?u:f(u,r,e)},e=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var n=function(u){return e.test(u)};var t=function(u){return u.split("")},d="[\\ud800-\\udfff]",o="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",a="\\ud83c[\\udffb-\\udfff]",i="[^\\ud800-\\udfff]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",s="(?:"+o+"|"+a+")"+"?",p="[\\ufe0e\\ufe0f]?"+s+("(?:\\u200d(?:"+[i,c,v].join("|")+")[\\ufe0e\\ufe0f]?"+s+")*"),g="(?:"+[i+o+"?",o,c,v,d].join("|")+")",h=RegExp(a+"(?="+a+")|"+g+p,"g");var j=function(u){return u.match(h)||[]};var l=function(u){return n(u)?j(u):t(u)};var m=function(f){return function(e){e=u(e);var t=n(e)?l(e):void 0,d=t?t[0]:e.charAt(0),o=t?r(t,1).join(""):e.slice(1);return d[f]()+o}}("toUpperCase");var x=function(f){return m(u(f).toLowerCase())};export{x as a,x as c};
