// Propiedades de propagación con spread operators, ahora se permite su uso con objetos y no solo con arrays
const user = { username: 'gndx', age: 34, country: 'MX'};
const { username, ...values} = user;
console.log(username);
console.log(values);

// Recordemos que el uso de spread operators para hacer copia de arrays u objetos solo se puede hacer en el primer nivel de profundidad

// Si el objeto o array tiene más niveles de profundidad, es decir contiene array dentro de array u objeto dentro de objeto, para acceder al elemento en varios niveles no se puede con el spread operator aunque ya salio una herramienta para ello conocida como StructuredClon