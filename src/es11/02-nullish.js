// Cuando tenemos datos numérico y queremos trabajar con el pero queremos asegurarnos que en caso de que sea nulo tengamos un valor por defecto, para eso usamos el operador nullish coalescing ??

const anotherNumber = 1;
const validate = anotherNumber ?? 5;
console.log(validate);

const anotherNumber1 = null;
const validate1 = anotherNumber1 ?? 5;
console.log(validate1);

// otro ejemplo

const usuario1 = {}
const nombre1 = usuario1.name ?? "Andres"

const usuario2 = {name: "Juan"}
const nombre2 = usuario2.name ?? "Andres"

console.log(nombre1) // 'Andres' 
console.log(nombre2) // 'Juan'