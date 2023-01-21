// Flat-map nos devuelve una matriz de cualquier submatriz, sirve para aplanar arrays

// El método flat transforma un array de arrays a una sola dimensión.. aplanarlo especificandole el nivel de profuncidad

// Si se desea aplanar todos los sub-arrays en una sola dimensión, utiliza el valor de Infinity
const array = [1, 1, 2, 3, 4, [4, 6, 8, 0, [12, 45], 21], 33];
console.log(array.flat(1));

const array2 = [1, 1, 2, 3, 4, [4, 6, 8, 0, [12, 45], 21], 33];
console.log(array2.flat(Infinity));

// Con flatMap mapea los elementos y luego aplana el resultado
const array3 = [1, 2, 3, 4, 5];
console.log(array3.flatMap(v => [v, v * 2]));

const array4 = [1, 2, 3, 4, 5];
console.log(array4.flatMap(v => [v * 10]));


