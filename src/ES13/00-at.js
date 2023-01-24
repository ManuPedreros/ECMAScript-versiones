// Método at para manupulación de arrays permite acceder a los elementos a partir del índice, hay que tener en cuenta que tenemos índices positivos y negativos

// Los índices positivos comienzan desde 0 hasta la longitud total menos uno, de izquierda a derecha del array. El índice 0 es la primera posición.

// Los índices negativos comienzan desde -1 hasta el negativo de la longitud total del array, de derecha a izquierda. El índice -1 es la última posición.

// La utilidad más importante de este método es para manejar índices negativos. Algo que no se puede con la notación de corchetes.

const nombres = ["Andres", "Valeria", "Ana", "Ramiro", "Richard"]

console.log(nombres.at(-1)) // "Richard"
console.log(nombres[-1]) // undefined
console.log(nombres.at(-3)) // "Ana"
console.log(nombres[nombres.length -1]) // "Richard"

const array = ['one', 'two', 'tree', 'four', 'five', 'six'];

console.log(array[array.length - 1]); // Anteriormente

console.log(array.at(-1)); // Con el nuevo método at