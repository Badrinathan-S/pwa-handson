self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./src/matser.css", "./image/logo192.png"])
        })
    );
});