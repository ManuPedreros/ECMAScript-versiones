// Hacemos el llamado a una api y la lógica que implementará el recurso

// Para poder utilizar fetch dentro de node debemos instalar la dependencia node-fetch en la carpeta del proyecto desde nuestra terminal (npm install node-fetch) y lo importamos para usarlo

import fetch from 'node-fetch';

// Ahora con fetch nos permite llamar apis

const response = await fetch('https://api.escuelajs.co/api/v1/products'); // Hacemos el llamado a la api que requerimos

const products = await response.json(); // Guardamos los que recibimos de la api en products y los transformamos a formato json

export { products }; // Ahora hacemos un export de nuestros productos para poder llamarlos desde otro lado, como si fuera un modulo

