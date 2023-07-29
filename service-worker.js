const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), r = [
  e + "/_app/immutable/entry/app.d1a9b3c6.js",
  e + "/_app/immutable/assets/0.852acbe6.css",
  e + "/_app/immutable/nodes/0.217d78a4.js",
  e + "/_app/immutable/nodes/1.3b677223.js",
  e + "/_app/immutable/assets/2.c1b109f0.css",
  e + "/_app/immutable/nodes/2.4599e8e4.js",
  e + "/_app/immutable/chunks/index.1c4c00b1.js",
  e + "/_app/immutable/chunks/scheduler.3d04e4e5.js",
  e + "/_app/immutable/chunks/singletons.69365d49.js",
  e + "/_app/immutable/entry/start.26829ac2.js"
], p = [
  e + "/.nojekyll",
  e + "/favicon.svg",
  e + "/manifest.json"
], i = "1690647636002", o = `cache${i}`, l = r.concat(p), u = new Set(l);
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
