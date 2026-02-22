self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open('gyros-v1.1').then(c => c.addAll(['index.html', 'manifest.json'])));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (key !== 'gyros-v1.1') return caches.delete(key);
      })
    ))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
