const fs = require('fs');
const file = fs.createWriteStream('./big');

for (let i = 0; i <= 1e6; i++) {
    file.write('Estaba una pajara sentada en un terror de areana, tenia un aspecto curioso pero siempre se la pasa quejando de las cosas pero uo siempre hago q se quede ahí lol ol ol asdasdasdasdasd');

}

file.end();