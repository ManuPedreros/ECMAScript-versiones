// Usando métodos para manejar varias promesas promise.all y promise.allSettled

// Promise.AllSettled
const promise1 = new Promise((resolve, reject) => reject('Reject'));

const promise2 = new Promise((resolve, reject) => resolve('Resolve'));

const promise3 = new Promise((resolve, reject) => resolve('Resolve'));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

// Promise.All

const promise4 = new Promise((resolve, reject) => resolve('Resolve'));

const promise5 = new Promise((resolve, reject) => resolve('Resolve'));

Promise.all([promise4, promise5])
    .then(response => console.log(response));

// Promise.All

const promise6 = new Promise((resolve, reject) => resolve('Resolve'));

const promise7 = new Promise((resolve, reject) => reject('Reject'));

Promise.all([promise6, promise7])
    .then(response => console.log(response));