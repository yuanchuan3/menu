const t = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), r = [
  t + "/_app/immutable/entry/app.161ad5af.js",
  t + "/_app/immutable/assets/0.6b8d38ea.css",
  t + "/_app/immutable/nodes/0.2f06969d.js",
  t + "/_app/immutable/nodes/1.04a593d8.js",
  t + "/_app/immutable/assets/2.de569156.css",
  t + "/_app/immutable/nodes/2.b97c7c43.js",
  t + "/_app/immutable/chunks/index.3a043c0e.js",
  t + "/_app/immutable/chunks/scheduler.c12c5fa2.js",
  t + "/_app/immutable/chunks/singletons.a40b1391.js",
  t + "/_app/immutable/entry/start.64d8bf28.js"
], p = [
  t + "/.nojekyll",
  t + "/favicon.svg",
  t + "/manifest.json"
], i = "1691741293232", o = `cache${i}`, l = r.concat(p), u = new Set(l);
self.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(o).then((e) => e.addAll(l)).then(() => {
      self.skipWaiting();
    })
  );
});
self.addEventListener("activate", (s) => {
  s.waitUntil(
    caches.keys().then(async (e) => {
      for (const a of e)
        a !== o && await caches.delete(a);
      self.clients.claim();
    })
  );
});
async function d(s) {
  const e = await caches.open(`offline${i}`);
  try {
    const a = await fetch(s);
    return e.put(s, a.clone()), a;
  } catch (a) {
    const c = await e.match(s);
    if (c)
      return c;
    throw a;
  }
}
self.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const e = new URL(s.request.url), a = e.protocol.startsWith("http"), c = e.hostname === self.location.hostname && e.port !== self.location.port, n = e.host === self.location.host && u.has(e.pathname), h = s.request.cache === "only-if-cached" && !n;
  String(s.request.url), a && !c && !h && s.respondWith(
    (async () => n && await caches.match(s.request) || d(s.request))()
  );
});
