import{t as f}from"./toString.9c41fa57.js";var u=function(f,u,r){var e=-1,n=f.length;u<0&&(u=-u>n?0:n+u),(r=r>n?n:r)<0&&(r+=n),n=u>r?0:r-u>>>0,u>>>=0;for(var t=Array(n);++e<n;)t[e]=f[e+u];return t};var r=function(f,r,e){var n=f.length;return e=void 0===e?n:e,!r&&e>=n?f:u(f,r,e)},e=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var n=function(f){return e.test(f)};var t=function(f){return f.split("")},d="[\\ud800-\\udfff]",a="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",o="\\ud83c[\\udffb-\\udfff]",i="[^\\ud800-\\udfff]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",s="(?:"+a+"|"+o+")"+"?",p="[\\ufe0e\\ufe0f]?"+s+("(?:\\u200d(?:"+[i,c,v].join("|")+")[\\ufe0e\\ufe0f]?"+s+")*"),g="(?:"+[i+a+"?",a,c,v,d].join("|")+")",h=RegExp(o+"(?="+o+")|"+g+p,"g");var j=function(f){return f.match(h)||[]};var l=function(f){return n(f)?j(f):t(f)};var m=function(u){return function(e){e=f(e);var t=n(e)?l(e):void 0,d=t?t[0]:e.charAt(0),a=t?r(t,1).join(""):e.slice(1);return d[u]()+a}}("toUpperCase");var x=function(u){return m(f(u).toLowerCase())};export{x as a,x as c};