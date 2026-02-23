self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open('gyros-v4').then(c => c.addAll(['index.html', 'manifest.json']))); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.map(key => { if (key !== 'gyros-v4') return caches.delete(key); })))); });
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
