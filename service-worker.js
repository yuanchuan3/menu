const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), r = [
  s + "/_app/immutable/entry/app.401e10aa.js",
  s + "/_app/immutable/assets/0.731183ec.css",
  s + "/_app/immutable/nodes/0.c72192f2.js",
  s + "/_app/immutable/nodes/1.fe59cbf7.js",
  s + "/_app/immutable/assets/2.0ec1ad69.css",
  s + "/_app/immutable/nodes/2.ce646fd0.js",
  s + "/_app/immutable/chunks/index.3a043c0e.js",
  s + "/_app/immutable/chunks/scheduler.c12c5fa2.js",
  s + "/_app/immutable/chunks/singletons.d5e04f8f.js",
  s + "/_app/immutable/entry/start.443dec4d.js"
], p = [
  s + "/.nojekyll",
  s + "/favicon.svg",
  s + "/manifest.json"
], i = "1690684818069", o = `cache${i}`, l = r.concat(p), f = new Set(l);
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(o).then((t) => t.addAll(l)).then(() => {
      self.skipWaiting();
    })
  );
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (t) => {
      for (const a of t)
        a !== o && await caches.delete(a);
      self.clients.claim();
    })
  );
});
async function u(e) {
  const t = await caches.open(`offline${i}`);
  try {
    const a = await fetch(e);
    return t.put(e, a.clone()), a;
  } catch (a) {
    const c = await t.match(e);
    if (c)
      return c;
    throw a;
  }
}
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const t = new URL(e.request.url), a = t.protocol.startsWith("http"), c = t.hostname === self.location.hostname && t.port !== self.location.port, n = t.host === self.location.host && f.has(t.pathname), h = e.request.cache === "only-if-cached" && !n;
  String(e.request.url), a && !c && !h && e.respondWith(
    (async () => n && await caches.match(e.request) || u(e.request))()
  );
});
