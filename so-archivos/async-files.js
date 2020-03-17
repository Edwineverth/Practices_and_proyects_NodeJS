const fs = require('fs');


    const file = process.argv[2];   // [0]= Node  [1]= Nombre del ARchivo  [2] = parametro que le paso  Argumentos en vector: Poder leer lo que pasamos por la terminal

    if(!file){
        throw new Error('Debes indicar el arhcivo que quieres leer')
    }
    const content = fs.readFile(file, function(err,content){
        if(err){
            return console.log(err);
        }
        const lines = content.toString().split("\n").length;
        console.log(lines);
    });

