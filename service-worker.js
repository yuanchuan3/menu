const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), r = [
  e + "/_app/immutable/entry/app.1c35dc3a.js",
  e + "/_app/immutable/assets/0.5051b36a.css",
  e + "/_app/immutable/nodes/0.70a50f5c.js",
  e + "/_app/immutable/nodes/1.f601a41e.js",
  e + "/_app/immutable/assets/2.8f182e04.css",
  e + "/_app/immutable/nodes/2.51dec540.js",
  e + "/_app/immutable/chunks/index.b6a93595.js",
  e + "/_app/immutable/chunks/scheduler.bcb5595c.js",
  e + "/_app/immutable/chunks/singletons.bdbeb385.js",
  e + "/_app/immutable/entry/start.a076c6b5.js"
], p = [
  e + "/.nojekyll",
  e + "/favicon.svg",
  e + "/manifest.json"
], i = "1690678874708", o = `cache${i}`, l = r.concat(p), u = new Set(l);
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
async function m(s) {
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
    (async () => n && await caches.match(s.request) || m(s.request))()
  );
});
