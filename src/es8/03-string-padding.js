// EL método padding nos permite agregarle al string caracteres a su longitud en el inicio o final de la cadena indicándole qué se debe agregar para completar 
const string = 'Hello'

console.log(string.padStart(7, 'hi'));
console.log(string.padStart(10, 'hi'));
console.log(string.padStart(6, '_'));

console.log(string.padEnd(7, 'hi'));
console.log(string.padEnd(10, 'hi'));
console.log(string.padEnd(6, '_'));