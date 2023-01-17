// De manera tradicional asignabamos parametros a la función incluyendo doble barra en la asignación y luego el valor por defecto, si al llamar la función no se incluyen parámetros le asignará el valor por defecto establecido
function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || '34';
    var country = country || 'MX';
    console.log(name, age, country);
}

// EL método propuesto por ES6
function newAdmin(name = 'Oscar', age = '32', country = 'COL') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 23, 'PE');
newAdmin('Lili');

