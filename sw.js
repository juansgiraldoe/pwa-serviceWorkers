const nombreCache = 'apv-v4';
const archivos = [
  '/',
  '/index.html',
  '/error.html',
  '/css/bootstrap.css',
  '/css/styles.css',
  'js/app.js',
  'js/apv.js',
  '/manifest.json'
];

//Cuando se instala el service worler.
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(nombreCache)
      .then( cache => {
        cache.addAll(archivos);
      })
  );

});

//Cuando se activa el service worker.
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => {
        return Promise.all(
          keys.filter( key => key !== nombreCache )
          .map(key => cache.delete(key))
        );
      })
  )
});

//Evento fetch para descargar.
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(respuesta =>{ return respuesta })
      .catch( ()=> caches.match('/error.html') )
  );
});