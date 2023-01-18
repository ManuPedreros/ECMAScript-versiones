// Las promesas son una forma de trabajar el asincronismo, entre esas formas tenemos los callbacks, las promesas y async-await

// En esta versión aún no existia el asyn-await

// Las promesas venian a resolver como trabajar con los callbacks que son una función que recibe como parámetro otra función y la ejecuta según sea el caso

// Promesa : algo que va a pasar hoy, mañana o nunca. Dentro de su sintaxis se inclyen dos parámetros resolve, reject, el primero ejecutará la lógica si se resuelve el callback y el segundo la lógica si se rechaza el callback. La clase Promise y sus métodos then y catch fueron añadidos en ES6. Esto resuelve un problema del manejo del asincronismo con callbacks, llamado Callback Hell.

const anoctherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!!');
        } else {
            reject('Whooops!');
        }
    })
}

// Ahora al llamar la función debemos usar las palabras reservadas .then para indicar la lógica en caso de que se de el resolve de la promesa (pueden haber varios .then) y .catch para la lógica en caso de que la promesa no se resuelva y retorne reject. La lógica en ambos casos se incluye como arrow function con un return directo
anoctherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));