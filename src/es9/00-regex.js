// Mejora para capturar grupos valores que estan dentro de una expresión regular

// Estudiar expresiones tipo regex

const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2022-01-01');
console.table(matchers);
