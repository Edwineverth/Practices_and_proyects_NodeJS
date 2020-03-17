const {Duplex}  = require('stream');
//duplex implementa ambas ineterfaces tanto writeablestream y readable

const duplexStream = Duplex({

    write (chunk, encoding, callback){
        console.log(chunk.toString());
        callback();

    }
    ,
    read(size){
        if(this.currentCharCode > 90){
            this.push(null);
            return;
        }
        this.push(String.fromCharCode(this.currentCharCode++));

    }
});

duplexStream.currentCharCode = 65;
process.stdin.pipe(duplexStream).pipe(process.stdout);
