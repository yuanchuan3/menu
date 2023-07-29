const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), r = [
  e + "/_app/immutable/entry/app.341bad15.js",
  e + "/_app/immutable/assets/0.ad96e833.css",
  e + "/_app/immutable/nodes/0.1a0ef987.js",
  e + "/_app/immutable/nodes/1.adca4ddf.js",
  e + "/_app/immutable/assets/2.09871786.css",
  e + "/_app/immutable/nodes/2.b1ccad32.js",
  e + "/_app/immutable/chunks/index.1c4c00b1.js",
  e + "/_app/immutable/chunks/scheduler.3d04e4e5.js",
  e + "/_app/immutable/chunks/singletons.679d3b0b.js",
  e + "/_app/immutable/entry/start.36231fb8.js"
], p = [
  e + "/.nojekyll",
  e + "/favicon.svg",
  e + "/manifest.json"
], i = "1690645707964", o = `cache${i}`, l = r.concat(p), d = new Set(l);
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
async function u(s) {
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
  const t = new URL(s.request.url), a = t.protocol.startsWith("http"), c = t.hostname === self.location.hostname && t.port !== self.location.port, n = t.host === self.location.host && d.has(t.pathname), h = s.request.cache === "only-if-cached" && !n;
  String(s.request.url), a && !c && !h && s.respondWith(
    (async () => n && await caches.match(s.request) || u(s.request))()
  );
});
