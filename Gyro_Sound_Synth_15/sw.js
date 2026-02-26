const CACHE_NAME = 'gyros-v15-cache';
const APP_SHELL =[
  './',
  './index.html',
  './manifest.json',
  './sw.js'
];

// Install Event: Cache the App Shell
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[Gyr-OS V15] Caching App Shell');
      return cache.addAll(APP_SHELL);
    })
  );
});

// Activate Event: Cleanup old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('[Gyr-OS V15] Clearing Old Cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Stale-While-Revalidate Strategy
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Return cached response if found
      if (cachedResponse) {
        // Fetch new version in background to update cache
        fetch(event.request).then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, networkResponse.clone());
            });
          }
        }).catch(err => console.warn('[Gyr-OS V15] Offline, using cached version.'));
        
        return cachedResponse;
      }

      // If not in cache, fetch from network and cache it dynamically
      return fetch(event.request).then(networkResponse => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(err => {
        console.error('[Gyr-OS V15] Fetch failed, offline mode:', err);
      });
    })
  );
});
