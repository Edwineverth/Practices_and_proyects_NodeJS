// %s =  Stream
// %j = Json
// %d = numero
// La consola se alimenta del paquete util.format()
//console.log("Un %s y un %s", "Perrito", "Gatito");

//console.info("Hello World");

//console.warn("Hello World");

//console.assert(42==="42");

//console.trace("hello"); //Nos indica la linea donde ocurre el error

const util = require('util');

const debuglog = util.debuglog('foo');
debuglog("Hello from foo");