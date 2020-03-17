const {Readable} = require('stream');

const readableStream = new Readable({
    read(size){
        setTimeout(() => {
            if(this.currentCharCode > 90){
                this.push(null);
                return;
            }
            this.push(String.fromCharCode(this.currentCharCode++)); // Abecedario tienen un codigo numerico

        }, 100);
    }
});

//readableStream.push(`${0/0} `.repeat(10).concat("Batman, Batman!"));
//readableStream.push(null); // Asi sabe que dejo de recivir datos
readableStream.currentCharCode = 1;
readableStream.pipe(process.stdout);