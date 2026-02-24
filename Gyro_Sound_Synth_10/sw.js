const CACHE_NAME = 'gyros-v10.1-cache';
const APP_SHELL = ['./', './index.html', './manifest.json', './sw.js'];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
        cacheNames.map(cache => { if (cache !== CACHE_NAME) return caches.delete(cache); })
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        fetch(event.request).then(netRes => {
          if (netRes && netRes.status === 200) caches.open(CACHE_NAME).then(c => c.put(event.request, netRes.clone()));
        }).catch(() => {});
        return cachedResponse;
      }
      return fetch(event.request).then(netRes => {
        if (!netRes || netRes.status !== 200 || netRes.type === 'opaque') return netRes;
        const resClone = netRes.clone();
        caches.open(CACHE_NAME).then(c => c.put(event.request, resClone));
        return netRes;
      }).catch(err => console.error('[Gyr-OS] Offline:', err));
    })
  );
});
