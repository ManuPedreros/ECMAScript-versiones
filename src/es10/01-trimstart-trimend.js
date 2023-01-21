// Con los métodos trimStart y trimEnd se eliminan espacios vacios al inicio o al final respectivamente
const hello = '     Hello World!    ';
console.log(hello + ' con espacios');
console.log(hello.trimStart() + ' sin espacio al inicio');
console.log(hello.trimEnd() + ' sin espacio al final');
console.log(hello.trimStart().trimEnd() + 'sin espacios');