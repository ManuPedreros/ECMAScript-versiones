// Se establece una nueva forma de manejar el asincronismo Async-Await al método ya existente .then

// Hacemos una promesa dentro de la que tenemos diferentes resultados
const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => {
           resolve('AsynC!!') 
        }, 2000)
        : reject(new Error('Error'));
    })
}
// Ahora usando async await generamos una función para ejectuar la promesa, async se usa para declarar que una función es asincrona y await que solo funciona dentro de funciones asincronas sirve para decir que espere hasta que una promesa sea resuelta para luego continuar ejecutando
const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello');
}
// Ejecutamos un programa
console.log('Before');
anotherFn();
console.log('After');