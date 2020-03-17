//Una manera de escribir codigo sincrono q se vea asincrono. 

const promiseFunction = ()=> new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            resolve("helow word")
        }
        else {
            reject(new Error("Hellow Error"))
        }
    }, 500);

});

async function asycAwait(){
    try {
        const msg = await promiseFunction();
        console.log("message", msg)
    } catch (err) {
        console.log("error", err)
    }

}

asycAwait();