if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then( res => console.log('Registrado...', res))
    .catch( err => console.log('Fallo...', err))
} else {
  console.log('No soportado.');
};