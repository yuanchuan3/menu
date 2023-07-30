const t = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), h = [
  t + "/_app/immutable/entry/app.4b5d5884.js",
  t + "/_app/immutable/assets/0.5051b36a.css",
  t + "/_app/immutable/nodes/0.70a50f5c.js",
  t + "/_app/immutable/nodes/1.1b64922f.js",
  t + "/_app/immutable/assets/2.4b66e42f.css",
  t + "/_app/immutable/nodes/2.29b18f9b.js",
  t + "/_app/immutable/chunks/index.b6a93595.js",
  t + "/_app/immutable/chunks/scheduler.bcb5595c.js",
  t + "/_app/immutable/chunks/singletons.9842f735.js",
  t + "/_app/immutable/entry/start.b128b221.js"
], p = [
  t + "/.nojekyll",
  t + "/favicon.svg",
  t + "/fullscreen.png",
  t + "/manifest.json"
], i = "1690677211930", o = `cache${i}`, l = h.concat(p), u = new Set(l);
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
async function f(s) {
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
  const e = new URL(s.request.url), a = e.protocol.startsWith("http"), c = e.hostname === self.location.hostname && e.port !== self.location.port, n = e.host === self.location.host && u.has(e.pathname), r = s.request.cache === "only-if-cached" && !n;
  String(s.request.url), a && !c && !r && s.respondWith(
    (async () => n && await caches.match(s.request) || f(s.request))()
  );
});
