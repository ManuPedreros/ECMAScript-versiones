// El método Object.fromentries nos permite ahora pasar de un array a un objeto que es lo contrario a lo que hacia inicialmente Object.entries
const entries = new Map([['name', 'lili'], ['age', 34]]);
console.log(entries);
console.log(Object.fromEntries(entries));