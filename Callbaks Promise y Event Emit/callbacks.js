// Un callback es un parametro que se ejecuta con una funcion mas adelante
const asyncCallBack = function (cb) {

    setTimeout(() => {
        if (Math.random() < 0.5) {
            return cb(null, 'helow word')
        }
        else {
            return cb(new Error('Hellow Error'))
        }
    }, 2000);
}

asyncCallBack((err, msg) => {
    if (err) {
        console.log('error', err);
    }
    else {
        console.log('mensaje', msg)
    }

})

// En los callbacks se maneja el concepto de error first callback, o el error se captura primero 
// por lo tanto cunando se ejecute el callback tomara dos argumentos el error y el mensaje, si no hay error por defecto es null
const realiza = function(cb){
    return cb("esta es mi función"); 
}


realiza((mensaje)=>{
    console.log('Mensaje')
    console.log(mensaje);
    console.log('Mensaje')
})

