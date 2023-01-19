/*
En este desafío tendrás un archivo llamado api.js que estará al mismo nivel que tu archivo exercise.js.

Este archivo tendrá una función asíncrona getData() que te retornará una lista de resultados misteriosa.

Tu función solution() deberá retornar la misma lista de resultados que te brinda la función getData().

Input:

solution();

Ouput:

[{
    movie: "El despertar de los michis",
    year: 2021,
    protagonist: "Mr. Michi"
}, {
    movie: "101 Michis",
    year: 2019,
    protagonist: "Tommy Michiguire"
}]
*/


import { getData } from './api.js';

function solution () {
    return getData().then(response => console.log(response));
}

resultado = solution();

import { getData } from './api.js';

function solution () {
    return getData().then(response => response);// Se usa el método .then para obtener el resolve de la promesa y retornarlo como valor de la función
}

solution(); // Llamando la función nos retornará el valor del resolve de la función asincrona y con esto se resuleve lo solicitado en el ejercicio. Pero para ver el resultado impreso deberiamos hacerlo usando el método .then para llamar el resolve y en la lógica incluir el console.log

solution().then(resultado => console.log(resultado));