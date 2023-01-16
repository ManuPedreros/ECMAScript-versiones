//Declaración y asignación de variable var, su scope es global
var lastName = 'David';
//Reasignación de variable var
lastName = 'Oscar';
console.log(lastName);

//Declaración y asignación de variable let, su scope es de bloque
let fruit = 'Apple';
//Reasignación de variable let
fruit = 'kiwi';
console.log(fruit);

//Declaración y asignación de variable const
const animal = 'dog';
//Esta variable es una constante y no se puede re asignar por lo que deberia salir un error
animal = 'cat';
console.log(animal);

//EL siguiente ejercicio sirve para entender el concepto de scope de las variables
const fruits = () => {
    if (true) {
        var fruit1 = 'Apple'; // global scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
//Al llamar a la función, se ejecuta el primer console pq puede acceder a su variable que tiene scope global, mientras que los otros console no puede ejecutarse pues no encuentran sus variables que solo podrian ser accedidas dentro del bloque donde se crearon (el del if)
fruits();
