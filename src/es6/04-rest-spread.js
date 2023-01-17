// Desestructuración es una  característica que permite trabajar con objetos y arreglos para obtener sus elementos de mejor forma

// Existen dos tipos de expresiones de desestructuración, la de arrays y la de objetos

// arrays destructuring
let fruits = ['Apple', 'Banana '];
let [a, b] = fruits;
console.log(a, b);
console.log(a, fruits[1]);

//object destructuring
let user = {username: 'Oscar', age: 34};
let {username, age} = user;
console.log(username, age);
console.log(username, user.age);

//object destructuring changing the key name
let user2 = {username2: 'Oscar', age2: 34};
let {username2: nombreUsuario, age2: edad} = user2;
console.log(nombreUsuario, edad);
console.log(username2, age2);

// Destructuring for of loop
const arr = ['pepe', 'andres'];
for (const [index, element] of arr.entries()) {
    console.log(index, element);
}
// Object.entries() when we need property  key-value pairs
// Object.keys() when we need the property keys only
// Object.values() when we need the property values only

// spread operator ..., se usa para propagar los elementos de in iterable dentro de un array
let person = { name: 'Oscar', age: 28};
let country = 'MX';

let data = { ...person, country };
let data1 = { id: 1, ...person, country };
console.log(data);
console.log(data1);

// rest, el parámetro rest consiste en agrupar el residuo de elementos mediante la sintaxis de tres puntos (...) seguido de una variable que contendrá los elementos en un array, sirve para crear funciones que acepten cualquier número de argumentos para agruparlos en un array.

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);

// rest, También sirve para obtener los elementos restantes de un array u objeto usando desestructuración.
const objeto = {
    nombre: "Andres",
    age: 23,
    plataforma: "Platzi"
  }
const array = [1,0,2,3,4,5];
  
const {plataforma, ...usuario} = objeto;
const [cero, ...positivos] = array;

console.log(usuario);
console.log(positivos);

// El parámetro rest siempre deberá estar en la última posición de los parámetros de la función, caso contrario existirá un error de sintaxis.

//Diferencias entre el parámetro rest y el operador de propagación. Aunque el parámetro rest y el operador de propagación utilicen la misma sintaxis, son diferentes. El parámetro rest agrupa el residuo de elementos y siempre debe estar en la última posición, mientras que el operador de propagación expande los elementos de un iterable en un array y no importa en que lugar esté situado.