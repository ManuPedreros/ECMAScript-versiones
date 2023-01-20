// EL método add añade un nuevo elemento de la sentencia u objeto sett
const list = new Set();

list.add('item 1');
// Se pueden encadenar varios add
list.add('item 2').add('item 3');

console.log(list);