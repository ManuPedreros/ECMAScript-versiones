// Las clases introducidas en ECMAS 2015 (ES6) es una mejora sintáctica basada en prototipos de js para el uso de la herencia

// Declaración de una clase
class User {};
// Instancia de la clase
const newUser = new User();

// Declarar los métodos de la clase
class User {
    //métodos
    greetings() {
        return 'Hello';
    }
}

const vmp = new User();
console.log(vmp.greetings());
// Creamos otra instancia para ver como las instancia heredan de la clase sus métodos
const bblooper = new User();
console.log(bblooper.greetings());

// Tenemos dentro de las clases un constructor para inicializar elementos de la clase
class User {
    // Constructor
    constructor() {
        console.log('Nuevo Usuario');
    }
    // Métodos
    greetings() {
        return 'Hello';
    }
}
// Cuando creamos una instancia de la clase, automáticamente se llama el constructor de la misma y se ejecuta su lógica
const david = new User();// Aparece en pantalla *Nuevo Usuario

// Uso de this, hace referencia al elemento padre que lo contiene
class User {
    // Constructor
    constructor(name) {
        this.name = name;
    }
    // Métodos
    speak() {
        return 'Hello';
    }
    greetings() {
        return `${this.speak()} ${this.name}`;
    }
}
const usuario = new User('Ana');

console.log(saludo.greetings());

// Getters y Setters
class User {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Métodos
    speak() {
        return 'Hello';
    }
    greetings() {
        return `${this.speak()} ${this.name}`;
    }
    // Get
    get uAge() {
        return this.age;
    }
    // Set
    set uAge(n) {
        this.age = n;
    }
}

const vmp1 = new User('Manu', 45);
console.log(vmp1.uAge);
console.log(vmp1.uAge = 20);
