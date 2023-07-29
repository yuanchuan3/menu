const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), h = [
  s + "/_app/immutable/entry/app.0c1e5a67.js",
  s + "/_app/immutable/assets/0.5051b36a.css",
  s + "/_app/immutable/nodes/0.70a50f5c.js",
  s + "/_app/immutable/nodes/1.3efc24b4.js",
  s + "/_app/immutable/assets/2.d005b368.css",
  s + "/_app/immutable/nodes/2.33ec5ef7.js",
  s + "/_app/immutable/chunks/index.b6a93595.js",
  s + "/_app/immutable/chunks/scheduler.bcb5595c.js",
  s + "/_app/immutable/chunks/singletons.e5e319de.js",
  s + "/_app/immutable/entry/start.48774930.js"
], p = [
  s + "/.nojekyll",
  s + "/favicon.svg",
  s + "/fullscreen.png",
  s + "/manifest.json"
], i = "1690658362074", o = `cache${i}`, l = h.concat(p), u = new Set(l);
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
async function m(e) {
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
  const t = new URL(e.request.url), a = t.protocol.startsWith("http"), c = t.hostname === self.location.hostname && t.port !== self.location.port, n = t.host === self.location.host && u.has(t.pathname), r = e.request.cache === "only-if-cached" && !n;
  String(e.request.url), a && !c && !r && e.respondWith(
    (async () => n && await caches.match(e.request) || m(e.request))()
  );
});
