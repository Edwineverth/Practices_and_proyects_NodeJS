const fs = require('fs');

fs.copyFile('lanaranja.txt', 'limon.txt', err =>{

    if(err){
        return console.log(err);
    }
    console.log('La naranja.txt fue copiado como limon')
})