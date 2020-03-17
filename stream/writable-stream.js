const { Writable } = require('stream');

const writableStream = new Writable({
    write(chuck, encoding, callback){ // cnuck pedazos de datos, encoding opcional definir codigicación
        console.log(chuck.toString());
        callback();
    }
});
process.stdin.pipe(writableStream);