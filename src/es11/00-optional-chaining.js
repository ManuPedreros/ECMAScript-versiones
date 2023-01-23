// Podemos tener un objeto que dentro tiene una representación de llave valor que puede ser otro objeto y cuando queremos acceder a ese elemento se puede romper nuestro aplicativo y con optional chaining podemos solucionar este problema.

const users = {
    gndx: {
        country: 'MX'
    },
    Ana: {
        country: 'CO'
    }
}

// En forma común accederiamos a los elementos de un elemento encadenando sus propiedades
console.log(users.gndx.country);

// Si vamos a acceder a un elemento que no esta definidido saldra un undefined o un error y si hay una lógica que dependa de esto se romperia nuestro programa
console.log(users.gndx.age);
console.log(users.pedro.country);

// Solución optional chaining (encadenamiento opcional) usando símbolo de pregunta sobre el elemento y la cadena consecuente
console.log(users?.pedro?.country);

