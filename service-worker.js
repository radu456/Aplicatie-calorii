self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("calorii-v1").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./script.js",
        "./manifest.json",
        "./logo-192.png",
        "./logo-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
