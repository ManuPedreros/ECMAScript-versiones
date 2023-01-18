// Mejora en la asignación de objetos con objects literals

// Forma antigua
function newUser (user, age, country) {
    return {
        user: user,
        age: age,
        country: country,
    }
}

// Forma propuesta object literals, cuanddo el nombre de la variable que returna el objeto es el mismo del parámetro se puede omitir la asignación
function newUser (user, age, country) {
    return {
        user,
        age,
        country,
    }
}
// Si quisieramos agregar un elemento al objeto que no viene en el parámetro, lo hacemos de manera regular
function newUser (user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}
console.log(newUser("vmp", 45, 'COL', 1));