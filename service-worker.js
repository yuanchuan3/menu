const t = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), r = [
  t + "/_app/immutable/entry/app.ba2bb420.js",
  t + "/_app/immutable/assets/0.5051b36a.css",
  t + "/_app/immutable/nodes/0.70a50f5c.js",
  t + "/_app/immutable/nodes/1.32042700.js",
  t + "/_app/immutable/assets/2.69f27661.css",
  t + "/_app/immutable/nodes/2.7c233fc2.js",
  t + "/_app/immutable/chunks/index.b6a93595.js",
  t + "/_app/immutable/chunks/scheduler.bcb5595c.js",
  t + "/_app/immutable/chunks/singletons.ecaacdea.js",
  t + "/_app/immutable/entry/start.d1dd33bb.js"
], p = [
  t + "/.nojekyll",
  t + "/favicon.svg",
  t + "/manifest.json"
], i = "1690653962529", o = `cache${i}`, l = r.concat(p), u = new Set(l);
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
async function m(s) {
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
    (async () => n && await caches.match(s.request) || m(s.request))()
  );
});
