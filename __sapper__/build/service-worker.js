!function(){"use strict";const t=["client/client.82723e75.js","client/video.c2c0cb98.js","client/index.9e01c9fb.js","client/app.05f89e73.js","client/index.8b86c9a4.js"].concat(["service-worker-index.html","bootstrap/css/bootstrap-grid.css","bootstrap/css/bootstrap-grid.css.map","bootstrap/css/bootstrap-grid.min.css","bootstrap/css/bootstrap-grid.min.css.map","bootstrap/css/bootstrap-reboot.css","bootstrap/css/bootstrap-reboot.css.map","bootstrap/css/bootstrap-reboot.min.css","bootstrap/css/bootstrap-reboot.min.css.map","bootstrap/css/bootstrap.css","bootstrap/css/bootstrap.css.map","bootstrap/css/bootstrap.min.css","bootstrap/css/bootstrap.min.css.map","bootstrap/js/bootstrap.bundle.js","bootstrap/js/bootstrap.bundle.js.map","bootstrap/js/bootstrap.bundle.min.js","bootstrap/js/bootstrap.bundle.min.js.map","bootstrap/js/bootstrap.js","bootstrap/js/bootstrap.js.map","bootstrap/js/bootstrap.min.js","bootstrap/js/bootstrap.min.js.map","cats/cat-01.kra","cats/cat-01.png","cats/cat-02.kra","cats/cat-02.png","cats/cat-03.kra","cats/cat-03.png","favicon.png","global.css","logo-192.png","logo-512.png","manifest.json","memes/01.jpg","memes/02.mp4","memes/03.mp4","videos.png","youtube.json"]),s=new Set(t);self.addEventListener("install",s=>{s.waitUntil(caches.open("cache1579912677327").then(s=>s.addAll(t)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",t=>{t.waitUntil(caches.keys().then(async t=>{for(const s of t)"cache1579912677327"!==s&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const o=new URL(t.request.url);o.protocol.startsWith("http")&&(o.hostname===self.location.hostname&&o.port!==self.location.port||(o.host===self.location.host&&s.has(o.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline1579912677327").then(async s=>{try{const o=await fetch(t.request);return s.put(t.request,o.clone()),o}catch(o){const a=await s.match(t.request);if(a)return a;throw o}}))))})}();
