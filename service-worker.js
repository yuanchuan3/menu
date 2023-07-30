const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), h = [
  e + "/_app/immutable/entry/app.2e9f1dd8.js",
  e + "/_app/immutable/assets/0.5051b36a.css",
  e + "/_app/immutable/nodes/0.70a50f5c.js",
  e + "/_app/immutable/nodes/1.a16e8b4f.js",
  e + "/_app/immutable/assets/2.4b66e42f.css",
  e + "/_app/immutable/nodes/2.70ff5c67.js",
  e + "/_app/immutable/chunks/index.b6a93595.js",
  e + "/_app/immutable/chunks/scheduler.bcb5595c.js",
  e + "/_app/immutable/chunks/singletons.7898e0b9.js",
  e + "/_app/immutable/entry/start.7a70b49a.js"
], p = [
  e + "/.nojekyll",
  e + "/favicon.svg",
  e + "/fullscreen.png",
  e + "/manifest.json"
], i = "1690677040403", o = `cache${i}`, l = h.concat(p), u = new Set(l);
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
  const t = new URL(s.request.url), a = t.protocol.startsWith("http"), c = t.hostname === self.location.hostname && t.port !== self.location.port, n = t.host === self.location.host && u.has(t.pathname), r = s.request.cache === "only-if-cached" && !n;
  String(s.request.url), a && !c && !r && s.respondWith(
    (async () => n && await caches.match(s.request) || f(s.request))()
  );
});
