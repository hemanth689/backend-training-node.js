/*
    Flow of the below code:
    -> first it checks for synchronous code, here first it logs "begins".
    -> so it checks from first setTimeout goes to web api's environment attached with 5 sec.
    -> After that it checks the promise so it executes immediately and logs the "promise 2".
    -> inside we have another setTimeout it goes to web api's attached with 8 sec.
    -> It waits for 5 seconds and then it logs the "setTimeout 1".
    -> Again we have promise it executes immediately so it logs "promise 1".
    -> After completion of 8 seconds the setTimeout goes to callback queue and evetloop pushed this into callstack
    -> It logs the "setTimeout 2" and inside it has one resolve it calls the resolve method with some msg.
    -> It executes .then() and it logs the "dot then 1".
    -> Inside this we have another setTimeout with 0 sec so after completion of 0 seconds it logs the "resolve 1"
*/
console.log("begins");
setTimeout(() => {
    console.log("setTimeout 1");
    Promise.resolve().then(() => {
        console.log("promise 1");
    });
}, 5000);
  
new Promise(function (resolve, reject) {
    console.log("promise 2");
    setTimeout(function () {
        console.log("setTimeout 2");
        resolve("resolve 1");
    }, 8000);
}).then((res) => {
    console.log("dot then 1");
    setTimeout(() => {
        console.log(res);
    }, 0);
});

/*
    output:

    begins
    promise 2
    setTimeout 1
    promise 1
    setTimeout 2
    dot then 1
    resolve 1
*/