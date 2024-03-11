//Cuando se instala el service worler.
self.addEventListener('install', e => {
  console.log('Instalando...');
  console.log(e);
});

//Cuando se activa el service worker.
self.addEventListener('activate', e => {
  console.log('Activado');
  console.log(e);
});