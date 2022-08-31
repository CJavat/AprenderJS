// SELF es la palabra reservada que se usa en los service workers. Es como decir THIS.
/* self.addEventListener("install", e => { // Verifica que se esté instalando.
    console.log("Instalando Service Worker.");
});

self.addEventListener("activate", () => { // Verifica que esté activo.
    console.log("El Service Worker está activo.");
});

self.addEventListener("error", e => { // Verifica que error tiene el SW.
    console.log("ERROR -> " + e);
});

self.addEventListener("fetch", () => { // Verifica que se le esté enviando una solicitud al SW.
    console.log("Service Worker interseptando petición.");
});

self.addEventListener("message", e => {
    console.log("He recibido un mensaje del navegador:");
    console.log(e.data);
    e.source.postMessage("Este es un mensaje del service worker.");
}); */

/* CACHEAR SITIO WEB Y MOSTRARLO OFFLINE */
/* const version = "version 1";

self.addEventListener("install", e => {
    caches.open(version).then(cache => {
        cache.add("index.html").then(res => {
            console.log("Informacion cacheada.");
        }).catch(e => {
            console.log(e);
        });
    });
});

self.addEventListener("activate", () => { 
    caches.keys().then(key => {
        if(key !== version) { // ELIMINA EL CACHE ANTIGUO.
            return Promise.all(
                key.map(cache => {
                    if(cache !== version) {
                        console.log("Cache antiguo,. eliminado.");
                        return caches.delete(cache);
                    }
                })
            );
        }
    });
});

self.addEventListener("fetch", (e) => { //MUESTRA LA PAGINA EN MODO OFFLINE.
    e.respondWith(async () => {
        const respuestaEnCache = await caches.match(e.request);
        if(respuestaEnCache) return respuestaEnCache;
        return e.request;
    });
}); */
























