const EventEmmiter = require ('events');

class Logger extends EventEmmiter{

    execute (cb) {
        console.log('Before');
        this.emit('start');
        cb();
        this.emit('finish');
        console.log('After');

    }
}

const logger = new Logger();

logger.on('start',()=> console.log('Starting'));
logger.on('finish',()=> console.log('Finishing'));
logger.on('finish',()=> console.log("It's is done"));

//logger.execute(()=> console.log("Hello word"));logger


const ejecutaEvento = function (cb)   {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            return cb(null, 'helow word')
        }
        else {
            return cb(new Error('Hellow Error'))
        }
    }, 500)
}



logger.execute(ejecutaEvento((err,msg)=>{
    if (err) {
        console.log('error', err);
    }
    else {
        console.log('mensaje', msg)
    }
}));


