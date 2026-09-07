const CACHE_NAME = 'dtp-v1';
const PRECACHE = ['./', './index.html', './manifest.json', './ss1/', './ss2/'];

// One at a time, not cache.addAll. addAll is all-or-nothing: a single entry
// that 404s rejects the whole batch and the term ends up cached as nothing,
// quietly, which is the failure this list was written to stop.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(
        PRECACHE.map((url) =>
          cache.add(url).catch((err) => {
            console.warn('[sw] could not precache', url, err);
          })
        )
      )
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Page loads served from the cache versus fetched, kept here until a page asks
// for them. The worker cannot just post each one as it happens: the only client
// alive at that moment is the page being navigated away from, and it is usually
// gone before the message arrives. Navigations only - reporting all 138 assets
// would fill a student's 500-event log on the first visit and answer nothing
// that the navigations do not.
let pendingHits = [];

function recordHit(request, fromCache) {
  if (request.mode !== 'navigate') return;
  pendingHits.push({
    url: new URL(request.url).pathname,
    fromCache,
    online: self.navigator ? self.navigator.onLine !== false : null,
  });
  // A cap, in case nothing ever drains them.
  if (pendingHits.length > 50) pendingHits = pendingHits.slice(-50);
}

self.addEventListener('message', (event) => {
  if (!event.data || event.data.type !== 'drain-hits') return;
  const hits = pendingHits;
  pendingHits = [];
  const port = event.ports && event.ports[0];
  if (port) port.postMessage({ hits });
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        recordHit(event.request, true);
        return cached;
      }
      return fetch(event.request)
        .then((response) => {
          recordHit(event.request, false);
          if (response && response.status === 200 && response.type === 'basic') {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clone);
            });
          }
          return response;
        })
        .catch(() => {
          if (event.request.mode === 'navigate') {
            return caches.match('./');
          }
          return new Response('Offline', { status: 503 });
        });
    })
  );
});
