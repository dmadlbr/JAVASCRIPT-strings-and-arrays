// const promise = new Promise((resolve,reject)=>{
//     resolve("hi")
// })
// console.log(promise);

// const promise2 = new Promise((resolve,reject)=>{
//     reject("rejected")
// })

// promise.then((res)=>{
//     console.log(res);
// }).catch((res)=>{
//     console.log(res);
// }).finally((res)=>{
//     console.log("completed");
// })

// promise2.then((res)=>{
//     console.log(res);
// })
// .catch((res)=>{
//     console.log(res);
// }).finally((res)=>{
//     console.log("done");
// })

// const promise3 =new Promise (function(resolve,reject){
//     setTimeout(()=>{
//         resolve("Hello after 2 seconds")
//     },2000)
// })

// console.log(promise3);

// promise3.then((res)=>{
//     console.log(res);
// })


// //
// const p1 = Promise.resolve("hi p1");
// const p2 = Promise.reject('hi p2');
// const p3 = Promise.resolve('hi p3');

// const pAll = Promise.all([p1,p2,p3]);
// pAll.then((res)=>{
//     console.log(res);
// }).catch((res)=>{
//     console.log(res);
// })

// const pAny = Promise.any([p1,p2,p3]);
// pAny.then((res)=>{
//     console.log(res);
// }).catch((res)=>{
//     console.log(res);
// })

// const pRace = Promise.race([p1,p2,p3]);
// pRace.then((res)=>{
//     console.log(res);
// }).catch((res)=>{
//     console.log(res);
// })

// //
// const pro1 = () =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('good')
//         },4000)
//     })
// }

// const pro2 = () =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//              reject("bad")
    
//         },1000)
       
//     })
// }

// const pro3 = () =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//              resolve("happy")
    
//         },0)
       
//     })
// }

// const promiseAll = Promise.all([pro1(),pro2(),pro3()]);
// promiseAll.then(res=>{
//     console.log(res);
// }).catch(res=>{
//     console.log(res);
// }).finally(res=>{
//     console.log('DONE');
// })

// const promiseRace = Promise.race([pro1(),pro2(),pro3()])
// promiseRace.then(res=>{
//     console.log(res);
// })

// const promiseAny = Promise.any([pro1(),pro2(),pro3()])
// promiseAny.then(res=>{
//     console.log(res);
// })


const promise = new Promise((resolve,reject)=>{
    reject('hi')
})

promise.catch(res=>{
    console.log(res);
})

const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve ("happy holidays")
    },1000)
})

p.then(res=>{
    console.log(res);
})

const a =  Promise.reject("helo");
const b =  Promise.resolve("bye");
const promiseAll = Promise.all([a,b]);
promiseAll.then(res=>{
    console.log(res);
}).catch(res=>{
    console.log(res);
})

const p1 = () =>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("apple")
    },2000)
      })
}

const p2 = () =>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("mango")
    })
      })
}

const prorace = Promise.race([p1(),p2()]);
prorace.then(res=>{
    console.log(res);
}).catch(res=>{
    console.log(res);
})

const any = Promise.any([p1(),p2()]);
any.then(res=>{
    console.log(res);
}).catch(res=>{
    console.log(res);
})