// Mejora en el manejo modulos usando dynamic import para hacer el llamado de las herramientas cuando las necesitamos y no traer todo desde un inicio

const button = document.querySelector('#btn');

button.addEventListener('click', async function () {
    const module = await import('./module.js');
    console.log(module);
    module.hello();
});