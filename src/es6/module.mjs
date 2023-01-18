const hello = () => {
    console.log('Hello!');
}

export default hello;// export dfault se usa cuando solo UN elemnto va a ser importado

// Tambien se puede exportar con la siguiente sintaxis, indicando varios elementos a exportar
export {hello,  anotherFunction, ...}

// También declarando el export cuando se declara la función
export const hello2 = () => {
    console.log('Hello!');
}