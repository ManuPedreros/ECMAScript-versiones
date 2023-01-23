// Para el uso de números muy grandes se solian escribir con una n al final
const aBigNumber = 9465212168462n;
const anotherBigNumber = BigInt(9465212168462);
console.log(aBigNumber);
console.log(anotherBigNumber);

// JavaScript tiene límites en el manejo de números y cuando estos límites se superan muestra resultados erróneos, con BigInt se pueden hacer operaciones que superan los límites
const max = Number.MAX_SAFE_INTEGER;
const min = Number.MIN_SAFE_INTEGER;

console.log(max);  // 9007199254740991
console.log(min);  // -9007199254740991

// Ejemplo
const increment = 10;
const number = Number.MAX_SAFE_INTEGER + increment; // tradicionalmente
const bigInt = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(increment); // Con BigInt

console.log(number); // 9007199254741000
console.log(bigInt); // 9007199254741001n