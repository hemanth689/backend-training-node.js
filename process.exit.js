/*
    -> process.exit() will end the node.js process.
    -> Based on the number we passed, the system tells why the app is exited.
    -> if it is 0 then it is success.
    -> if it is any other number then it is error or failure.
    ex:
    console.log('Finished setup!');
    process.exit(0); 
    -> it is 0, so it is exit with success.

    -> It stops the process immediately so no more code runs after this.
    -> Any pending async operations (like DB writes, file I/O) will be aborted unless you wait for them first.
    -> we can use it when the task is done and we want to stop the app cleanly.
    -> For every number it stops the process, the number is called as exit code.
*/
for (let i = 0; i < 5; i++) {
    console.log('Iteration', i);

    if (i === 2) {
        console.log('Exiting...');
        process.exit(0);
    }
}

// process.exit(0); // Success — stops the process
// process.exit(1); // General error — stops the process
// process.exit(99); // Custom code — still stops the process
