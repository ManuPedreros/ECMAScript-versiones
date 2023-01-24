// Métodos privados agregandoles Almohadilla o Hashtag antes de su nombre, haciendo que se puedan acceder dentro de la misma clase
class User {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Métodos
    #speak() {
        return 'Hello';
    }
    greetings() {
        return `${this.speak()} ${this.name}`;
    }
    // Get
    get #uAge() {
        return this.age;
    }
    // Set
    set #uAge(n) {
        this.age = n;
    }
}

const vmp1 = new User('Manu', 45);
console.log(vmp1.uAge);
console.log(vmp1.uAge = 20);
console.log(vmp1.greetings);
console.log(vmp1.speak);
