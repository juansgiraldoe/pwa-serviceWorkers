//Cuando se instala el service worler.
const nombreCache = 'apv-v1';
const archivos = [
  '/',
  '/index.html',
  '/css/bootstrap.css',
  '/css/styles.css',
  'js/app.js',
  'js/apv.js',
];


self.addEventListener('install', e => {
  console.log('Instalando...');
  e.waitUntil(
    caches.open(nombreCache)
      .then( cache => {
        cache.addAll(archivos);
      })
  );

});

//Cuando se activa el service worker.
self.addEventListener('activate', e => {
  console.log('Activado');
  console.log(e);
});

//Evento fetch para descargar.
self.addEventListener('fetch', e => {
  console.log('Fetch...', e);
});