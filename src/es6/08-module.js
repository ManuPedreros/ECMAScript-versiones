// ES6 introduce una nueva característica que permite separar archivos que va a ser presentados como modulos para luego ser importados en otro archivo usando palabras reservadas como import y export

// Para trabajar con módulos debemos indicarlo y podemos hacerlo de dos formas: 1) Incluyendo en el package.json los archivos tipo module con "type": "module" y la 2) Colocandole la extensión .mjs a los archivos que van a trabajar con módulos


import hello from './module.mjs';

hello();

// Otra forma de importar varios elementos y no uno seria
import {hello, anotherFunction, ...} from './module.mjs';

// Si queremos importar todos los elementos del módulo con * e incluso cambiar el nombre (para evitar repetición de funciones o variables con el archivo a donde importamos)con la palabra reservada as
import * as myMathModule from './math_functions.js'
