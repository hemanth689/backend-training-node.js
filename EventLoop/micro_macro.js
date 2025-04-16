/*
Microtask Queue:

These tasks that are runs right after the current code finishes.
callback functions like Promise.then(), process.nextTick(), queueMicrotask().
And also process.nextTick() runs first than those two functions.
Runs first before anything else, even before timers like setTimeout.
It is a smaller, faster queue and it is best for short and quick updates.
It can block other tasks if overused, so we should be used wisely.

Macrotask Queue:

This queue handles things like setTimeout, setInterval, setImmediate, and I/O callbacks.
These tasks run in the next round of the event loop, after microtasks are done.
It can be used for bigger or delayed operations.
Only one macrotask runs per loop cycle, then the microtasks are processed again.
Incase of microtasks all are runs only in one cycle itself.
*/

console.log("Start");

setTimeout(() => {
    console.log("Macrotask")
}, 0);

Promise.resolve().then(() => {
    console.log("Microtask")
});

console.log("End");