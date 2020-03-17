const fs = require('fs');

try {
    const file = process.argv[2];   // [0]= Node  [1]= Nombre del ARchivo  [2] = parametro que le paso  Argumentos en vector: Poder leer lo que pasamos por la terminal
    const content = fs.readFileSync(file).toString();
    const lines = content.split("\n").length;
    console.log(lines);
} catch (err) {
    console.log(err)
}