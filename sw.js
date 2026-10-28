// Offline support: everything the game needs is cached on first visit.
// Bump CACHE when any listed file changes so phones pick up the new version.
const CACHE = 'pack-dorm-home-v3';
const FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "fonts/jua/jua.css",
  "vendor/three.min.js",
  "vendor/OrbitControls.js",
  "vendor/RoundedBoxGeometry.js",
  "vendor/RoomEnvironment.js",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apple-touch-icon.png",
  "fonts/jua/jua-10-400-normal.woff2",
  "fonts/jua/jua-100-400-normal.woff2",
  "fonts/jua/jua-101-400-normal.woff2",
  "fonts/jua/jua-102-400-normal.woff2",
  "fonts/jua/jua-103-400-normal.woff2",
  "fonts/jua/jua-104-400-normal.woff2",
  "fonts/jua/jua-105-400-normal.woff2",
  "fonts/jua/jua-106-400-normal.woff2",
  "fonts/jua/jua-107-400-normal.woff2",
  "fonts/jua/jua-108-400-normal.woff2",
  "fonts/jua/jua-109-400-normal.woff2",
  "fonts/jua/jua-11-400-normal.woff2",
  "fonts/jua/jua-110-400-normal.woff2",
  "fonts/jua/jua-111-400-normal.woff2",
  "fonts/jua/jua-112-400-normal.woff2",
  "fonts/jua/jua-113-400-normal.woff2",
  "fonts/jua/jua-114-400-normal.woff2",
  "fonts/jua/jua-115-400-normal.woff2",
  "fonts/jua/jua-116-400-normal.woff2",
  "fonts/jua/jua-117-400-normal.woff2",
  "fonts/jua/jua-118-400-normal.woff2",
  "fonts/jua/jua-119-400-normal.woff2",
  "fonts/jua/jua-12-400-normal.woff2",
  "fonts/jua/jua-13-400-normal.woff2",
  "fonts/jua/jua-14-400-normal.woff2",
  "fonts/jua/jua-15-400-normal.woff2",
  "fonts/jua/jua-16-400-normal.woff2",
  "fonts/jua/jua-17-400-normal.woff2",
  "fonts/jua/jua-18-400-normal.woff2",
  "fonts/jua/jua-19-400-normal.woff2",
  "fonts/jua/jua-2-400-normal.woff2",
  "fonts/jua/jua-20-400-normal.woff2",
  "fonts/jua/jua-21-400-normal.woff2",
  "fonts/jua/jua-22-400-normal.woff2",
  "fonts/jua/jua-23-400-normal.woff2",
  "fonts/jua/jua-24-400-normal.woff2",
  "fonts/jua/jua-25-400-normal.woff2",
  "fonts/jua/jua-26-400-normal.woff2",
  "fonts/jua/jua-27-400-normal.woff2",
  "fonts/jua/jua-28-400-normal.woff2",
  "fonts/jua/jua-29-400-normal.woff2",
  "fonts/jua/jua-3-400-normal.woff2",
  "fonts/jua/jua-30-400-normal.woff2",
  "fonts/jua/jua-31-400-normal.woff2",
  "fonts/jua/jua-32-400-normal.woff2",
  "fonts/jua/jua-33-400-normal.woff2",
  "fonts/jua/jua-34-400-normal.woff2",
  "fonts/jua/jua-35-400-normal.woff2",
  "fonts/jua/jua-36-400-normal.woff2",
  "fonts/jua/jua-37-400-normal.woff2",
  "fonts/jua/jua-38-400-normal.woff2",
  "fonts/jua/jua-39-400-normal.woff2",
  "fonts/jua/jua-4-400-normal.woff2",
  "fonts/jua/jua-40-400-normal.woff2",
  "fonts/jua/jua-41-400-normal.woff2",
  "fonts/jua/jua-42-400-normal.woff2",
  "fonts/jua/jua-43-400-normal.woff2",
  "fonts/jua/jua-44-400-normal.woff2",
  "fonts/jua/jua-45-400-normal.woff2",
  "fonts/jua/jua-46-400-normal.woff2",
  "fonts/jua/jua-47-400-normal.woff2",
  "fonts/jua/jua-48-400-normal.woff2",
  "fonts/jua/jua-49-400-normal.woff2",
  "fonts/jua/jua-5-400-normal.woff2",
  "fonts/jua/jua-50-400-normal.woff2",
  "fonts/jua/jua-51-400-normal.woff2",
  "fonts/jua/jua-52-400-normal.woff2",
  "fonts/jua/jua-53-400-normal.woff2",
  "fonts/jua/jua-54-400-normal.woff2",
  "fonts/jua/jua-55-400-normal.woff2",
  "fonts/jua/jua-56-400-normal.woff2",
  "fonts/jua/jua-57-400-normal.woff2",
  "fonts/jua/jua-58-400-normal.woff2",
  "fonts/jua/jua-59-400-normal.woff2",
  "fonts/jua/jua-6-400-normal.woff2",
  "fonts/jua/jua-60-400-normal.woff2",
  "fonts/jua/jua-61-400-normal.woff2",
  "fonts/jua/jua-62-400-normal.woff2",
  "fonts/jua/jua-63-400-normal.woff2",
  "fonts/jua/jua-64-400-normal.woff2",
  "fonts/jua/jua-65-400-normal.woff2",
  "fonts/jua/jua-7-400-normal.woff2",
  "fonts/jua/jua-8-400-normal.woff2",
  "fonts/jua/jua-9-400-normal.woff2",
  "fonts/jua/jua-94-400-normal.woff2",
  "fonts/jua/jua-95-400-normal.woff2",
  "fonts/jua/jua-korean-400-normal.woff2",
  "fonts/jua/jua-latin-400-normal.woff2"
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if (req.mode === 'navigate') {
    // page itself: try the network for updates, fall back to the cached copy offline
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('index.html', copy));
          return res;
        })
        .catch(() => caches.match('index.html'))
    );
    return;
  }
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req)));
});
