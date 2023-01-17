// Template literals nos permiten concatenar strings de una forma amigable y jugar con variables y elementos

// Creamos dos variables asignadas a strings
let hello = 'Hello';
let world = 'World';

// unirlos de la forma tradicional
let epicPhrase = hello + ' ' + world + '!';
console.log(epicPhrase); // Hello World!

// Con propuesta de template literals, se usa comillas francesas, las variables se introducen a la frase usando signo dinero y handlebars
let epicPhrase2 = `${hello} ${world}!`;

// Otra novedad es el Multi.line strings

// De forma tradicional, se aplica el salto de línea colocando al final backslash invertido y n
let lorem = 'esto es un string \n' + 'Esto es otra línea';

// Usando template literals, se aplica el salto con enter
let lorem2 = `Esta es una frase épica
  esta es la continuación de la frase épica`;

console.log(lorem);
console.log(lorem2);
