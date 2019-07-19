// Cache name: adjust version number to invalidate service worker cachce.
var urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/main.css'
];
var CACHE_NAME = 'james-ives-cache-v2';

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

this.addEventListener('fetch', function (event) {
  // it can be empty if you just want to get rid of that error
});