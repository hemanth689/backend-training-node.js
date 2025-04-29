//promise.race() return the promise which executes first whether it is failure or success doesn't matter.
//It returns only one promise which will finished first and rest all promises are ignored.

const promise1 = new Promise((resolve) => setTimeout(resolve, 500, 'First'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'Second'));

Promise.race([promise1, promise2])
    .then(result => console.log(result)); // Output: Second


//Example with failure
//Here the argument like _ is it takes argument as anything but here this promise is definitely rejected so instead of using resolve just kept _ .
const promise3 = new Promise((_, reject) => setTimeout(reject, 100, 'Error Fast'));
const promise4 = new Promise((resolve) => setTimeout(resolve, 500, 'Success Slow'));

Promise.race([promise3, promise4])
    .then(result => console.log(result))
    .catch(error => console.log(error)); // Output: Error Fast
