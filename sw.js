const C='ig-v16',A=['./','index.html','manifest.json','icon-192.png','icon-512.png','apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(C).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))))});
self.addEventListener('notificationclick',e=>{e.notification.close();const u=(e.notification.data||{}).u||'eli';e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(cs=>{if(cs.length){cs[0].postMessage({open:'story',u});return cs[0].focus()}return self.clients.openWindow('./?open=story-'+u)}))});
