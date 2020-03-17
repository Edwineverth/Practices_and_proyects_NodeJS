const {Readable} = require('stream');

const readableStream = new Readable();

readableStream.push(`${0/0} `.repeat(10).concat("Batman, Batman!"));
readableStream.push(null); // Asi sabe que dejo de recivir datos

readableStream.pipe(process.stdout);
