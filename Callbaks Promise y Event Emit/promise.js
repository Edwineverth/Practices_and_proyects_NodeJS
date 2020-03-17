
// new Promise resibe dos parametros, resolve encargada de resolver la promesa y reject en caso de que suceda un error. 
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            resolve('helow word')
        }
        else {
            reject(new Error('Hellow Error'))
        }
    }, 1000);

});

promise
    .then(msg => msg.toUpperCase())
    .then(msg => console.log("Mensaje", msg))
    .catch(err => console.log("error", err))