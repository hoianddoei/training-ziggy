// Vakantie Fit service worker: maakt de app offline bruikbaar.
// Verhoog VERSION bij elke update van index.html, zodat telefoons de nieuwe versie ophalen.
const VERSION = 'v5';
const CACHE = 'vakantiefit-' + VERSION;
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-64.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('vakantiefit-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Eerst uit de cache (snel en offline), op de achtergrond verversen als er internet is.
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  const key = req.mode === 'navigate' ? './index.html' : req;
  event.respondWith(
    caches.open(CACHE).then(async cache => {
      const cached = await cache.match(key, {ignoreSearch: true});
      const network = fetch(req).then(res => {
        if (res && res.ok) cache.put(key, res.clone());
        return res;
      }).catch(() => null);
      if (cached) { event.waitUntil(network); return cached; }
      const res = await network;
      return res || new Response('Offline en nog niet in de cache. Open de app één keer met internet.', {status: 503, headers: {'Content-Type': 'text/plain; charset=utf-8'}});
    })
  );
});
