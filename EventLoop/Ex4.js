/*
    Event Loop has several phases and each phase has it's own queue of callbacks.
    It runs according to this order. These are all macrotasks in callback queue.
    -> Timers phase (setTimeout, setInterval)
    -> Check (setImmediate)
    for every phase if any callbacks in callstack, next tick queue, and microtask queue present then those will runs first.
    process.nextTick() is goes to separate queue called as next tick queue. This has highest priority than microtasks.
    so it runs in the order like callstack -> next tick queue -> microtask queue -> macrotask queue.

    nextTick() is used to schedule things that must happen immediately, before giving control back to the event loop.
    setImmediate() is used for things you want to run as soon as the event loop is free, after I/O is done.
*/

setTimeout(function cbT(){
    console.log("setTimeout callback");
},0);

setImmediate(function cbI(){
    console.log("setImmediate callback");
});

process.nextTick(function cbN(){
    console.log("process.nextTick callback");
});

Promise.resolve().then(function cbP(){
    console.log("promise callback");
});

console.log("Main thread");

//process.nextTick() -> Runs before the event loop starts the next phase.

//Promise.then() -> It also runs before the event loop starts, but after nextTick().

//setTimeout() -> In Timers phase runs first when event loop starts.

//setImmediate() -> In Check phase runs last.