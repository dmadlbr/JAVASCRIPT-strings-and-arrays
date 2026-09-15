// //Promise states - fulfilled,rejected,pending

console.log('A');

const promise = new Promise(function(resolve,reject){
    resolve('hi');

});
console.log(promise);

console.log('B');

const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("ERROR after 3 seconds");
    },3000);
})
console.log(p);

console.log('C');

p.then((success)=>{
    console.log(success + " completed");
}).catch((fail)=>{
    console.log(fail + " completed");
}).finally(()=>{
    console.log("p done");
})


promise.then((success)=>{
    console.log(success + " completed");
}).catch((fail)=>{
    console.log(fail + " completed");
}).finally(()=>{
    console.log("Promise done");
})

console.log('D');

//promise methods

const getPromise1 = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('APPLE')
        },2000)
    })
}

const getPromise2 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('BALL')
        },1000)
    })
}

const getPromise3 = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Cat')
        },8000)
    })
}

//all
const allPro = Promise.all([getPromise1(),getPromise3()]);
allPro.then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})


const allErrorPro = Promise.all([getPromise1(),getPromise2(),getPromise3()]);
allErrorPro.then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})

//race
const racePro = Promise.race([getPromise1(),getPromise2(),getPromise3()]);
racePro.then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})

//any
const anyPro = Promise.any([getPromise1(),getPromise2(),getPromise3()]);
anyPro.then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})

//resolve
Promise.resolve(5).then(res =>{
    return res*10;
}).then(res =>{
    console.log(res);
})

Promise.resolve(6).then(res =>{
    return res - 5;
}).then(final =>{
    console.log(final);
})

Promise.resolve(5).then(res =>{
    console.log(res*10)
})

Promise.resolve(5).then(res =>{
    console.log(res*10);
    return res
}).then(secRes =>{
    return secRes * 3;
}).then(thirdRes =>{
    console.log( thirdRes);
})


