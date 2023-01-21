// La forma tradicional de manejo de errores incluye en el catch el error como parámetro, lo que indicará cual fue el error
try {
    hello();
} catch (error) {
    console.log(error);
}

// La mejora en el tratamiento del catch es que ya no tenemos que pasarle el error sino que podemos pasar una lógica personalizada
try {
    anotherFn();
} catch {
    console.log('Esto es un error');
}