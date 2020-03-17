const fs = require('fs');

// __dirname = La información del directorio actual.

const files = fs.readdir(__dirname, (err, files) =>{
    if(err){
        return console.log(err);
    }
    console.log(files);
});