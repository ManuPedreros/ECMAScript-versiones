// Hay distintas formas de acceder al objeto global, por ejemplo en el navegador tenemos el objeto global window, en node tenemos global, en webworkers tenemos self y existe incompatibilidad cuando se trabaja una app que vive en esos diferentes espacios pq un objeto windows no puede accederse si estamos en node o webworker e igual con los otros.

// Global this viene a resolver este problema

console.log(windows); //funciona en los navegadores unicamente si se intenta acceder desde otro espacio no se podrá, ocurrira un error

console.log(global); //funciona en node y no en otros espacios, al ejecutarlo desde node accederemos a él

console.log(self); // Funciona desde un webworker

console.log(globalThis); // Podra accederse desde cualquier contexto o espacio