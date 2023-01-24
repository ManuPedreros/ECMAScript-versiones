// Replace nos permite reemplazar un string, al usarlo primero le indicamos que vamos a reemplazar y luego le indicamos con qué vamos a reemplazar

//El método replace()devuelve una nueva cadena con algunas o todas las coincidencias de un patrón, siendo cada una de estas coincidencias reemplazadas por remplazo. El patrónpuede ser una cadena o una RegExp, y el reemplazopuede ser una cadena o una función que será llamada para cada coincidencia. Si el patrónes una cadena, sólo la primera coincidencia será reemplazada

const string = 'JavaScript es un maravilloso lenguaje de programación';

const replace = string.replace('m', 'T');

const replaceAll = string.replaceAll('m', 'T');


console.log(string);
console.log(replace);
console.log(replaceAll);