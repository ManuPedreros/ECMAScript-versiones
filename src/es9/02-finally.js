// Mejora con el método finally para promesas podemos ejecutar código cuando la promesa se ejecuta de manera resuelta o rechazada, de esta manera sabemos cuándo termina una promesa

// Creamos una promesa
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
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'));

// Si los aplicamos a la iteración dentro de un for
async function arrayOfNames(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names = arrayOfNames(['Oscar', 'Martha', 'Pau', 'Mia'])
console.log('After');
