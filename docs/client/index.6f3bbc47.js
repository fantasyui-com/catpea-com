import"./client.77a91f16.js";var t=function(t,o,a=2){let r=100*t/o/100;return r=r.toPrecision(a),parseFloat(r)};function o(t){const o=t-1;return o*o*o+1}function a(t,{delay:a=0,duration:r=400,easing:e=o}){const p=getComputedStyle(t),i=+p.opacity,n=parseFloat(p.height),d=parseFloat(p.paddingTop),s=parseFloat(p.paddingBottom),l=parseFloat(p.marginTop),g=parseFloat(p.marginBottom),m=parseFloat(p.borderTopWidth),c=parseFloat(p.borderBottomWidth);return{delay:a,duration:r,easing:e,css:t=>"overflow: hidden;"+`opacity: ${Math.min(20*t,1)*i};`+`height: ${t*n}px;`+`padding-top: ${t*d}px;`+`padding-bottom: ${t*s}px;`+`margin-top: ${t*l}px;`+`margin-bottom: ${t*g}px;`+`border-top-width: ${t*m}px;`+`border-bottom-width: ${t*c}px;`}}export{t as c,a as s};