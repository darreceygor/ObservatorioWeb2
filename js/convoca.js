window.onload = convoca();

async function convoca(){
// Solicitud GET (Request).
fetch('https://www.cultura.gob.ar/api/v2.0/convocatorias/',
{  method: 'GET',
   mode: 'cors', // <---
   cache: 'default'
})
    // Exito
    .then(response => response.json())  // convertir a json
    .then(json => console.log(json))    //imprimir los datos en la consola
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
}