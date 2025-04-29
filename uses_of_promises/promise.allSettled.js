//This waits for all promises until the completion of their execution.
//This will give their status and value/reason even the promise fails.
//This will returns an array with {status: 'fulfilled'/'rejected', value/reason} for each promise. 
const promise1 = Promise.resolve('Success');
const promise2 = Promise.reject('Error');
const promise3 = Promise.resolve('Success');

Promise.allSettled([promise1, promise2, promise3])
  .then(results => console.log(results));
