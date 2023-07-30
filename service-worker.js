const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), r = [
  e + "/_app/immutable/entry/app.1fe3748c.js",
  e + "/_app/immutable/assets/0.731183ec.css",
  e + "/_app/immutable/nodes/0.c72192f2.js",
  e + "/_app/immutable/nodes/1.e0e823d0.js",
  e + "/_app/immutable/assets/2.7950da74.css",
  e + "/_app/immutable/nodes/2.35a5fb3c.js",
  e + "/_app/immutable/chunks/index.3a043c0e.js",
  e + "/_app/immutable/chunks/scheduler.c12c5fa2.js",
  e + "/_app/immutable/chunks/singletons.0e13010d.js",
  e + "/_app/immutable/entry/start.d2186f67.js"
], p = [
  e + "/.nojekyll",
  e + "/favicon.svg",
  e + "/manifest.json"
], i = "1690690294349", o = `cache${i}`, l = r.concat(p), u = new Set(l);
self.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(o).then((t) => t.addAll(l)).then(() => {
      self.skipWaiting();
    })
  );
});
self.addEventListener("activate", (s) => {
  s.waitUntil(
    caches.keys().then(async (t) => {
      for (const a of t)
        a !== o && await caches.delete(a);
      self.clients.claim();
    })
  );
});
async function f(s) {
  const t = await caches.open(`offline${i}`);
  try {
    const a = await fetch(s);
    return t.put(s, a.clone()), a;
  } catch (a) {
    const c = await t.match(s);
    if (c)
      return c;
    throw a;
  }
}
self.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const t = new URL(s.request.url), a = t.protocol.startsWith("http"), c = t.hostname === self.location.hostname && t.port !== self.location.port, n = t.host === self.location.host && u.has(t.pathname), h = s.request.cache === "only-if-cached" && !n;
  String(s.request.url), a && !c && !h && s.respondWith(
    (async () => n && await caches.match(s.request) || f(s.request))()
  );
});
