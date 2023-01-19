// Los generadores son funciones especiales que pueden pausar su ejecución, luego volver al punto donde se quedaron, recordando su scope y seguir retornando valores. 
//Estos se utilizan para guardar la totalidad de datos infinitos, a través de una función matemática a valores futuros. De esta manera ocupan poca memoria, con respecto a si creamos un array u objeto

// La sintaxis de los generadores comprende lo siguiente:

// La palabra reservada function* (con el asterisco al final) que indica que es un generador.
// La palabra reservada yield que hace referencia al valor retornado cada vez que se invoque, recordando el valor anterior.
// Crear una variable a partir de la función generadora.
// El método next devuelve un objeto que contiene una propiedad value con cada valor de yield; y otra propiedad done con el valor true o false si el generador ha terminado.

function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Oscar', 'David', 'Ana', 'Ulises', 'Jennifer']);

console.log('value: ' + it.next().value + ', done; ' + it.next().done);
console.log('value: ' + it.next().value + ', done; ' + it.next().done);
console.log('value: ' + it.next().value + ', done; ' + it.next().done);
console.log('value: ' + it.next().value + ', done; ' + it.next().done);
console.log('value: ' + it.next().value + ', done; ' + it.next().done);
console.log('value: ' + it.next().value + ', done; ' + it.next().done);
console.log('value: ' + it.next().value + ', done; ' + it.next().done);


// Otros ejemplos
function* generator(){
    yield 1
    yield 2
    yield 3
}

const generador = generator()

generador.next().value //1
generador.next().value //2
generador.next().value //3
generador.next() // {value: undefined, done: true}

