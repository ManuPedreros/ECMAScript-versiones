// Promise.Any permite manejar varias promesas y nos devolverá la primera que se resuleva satisfactoriamente

const promise5 = new Promise((resolve, reject) => reject('Reject'));

const promise6 = new Promise((resolve, reject) => resolve('Resolve'));

const promise7 = new Promise((resolve, reject) => resolve('Resolve1'));

Promise.any([promise5, promise6, promise7])
    .then(response => console.log(response));