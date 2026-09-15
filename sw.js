const CACHE='car-upgrade-v9';
const STATIC=['./','./index.html','./manifest.json','./icons/icon-192.png','./icons/icon-512.png','./icons/logo.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(STATIC)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const r=e.request;if(r.mode==='navigate'){e.respondWith(fetch(r).then(resp=>{const cp=resp.clone();caches.open(CACHE).then(c=>c.put('./index.html',cp));return resp}).catch(()=>caches.match('./index.html')));return}e.respondWith(caches.match(r).then(hit=>hit||fetch(r).then(resp=>{if(r.method==='GET'&&resp.ok){const cp=resp.clone();caches.open(CACHE).then(c=>c.put(r,cp))}return resp})))});
