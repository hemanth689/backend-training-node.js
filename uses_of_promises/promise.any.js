//It return first fulfilled promise and it ignores failures.
//If atleast one promise is successful, it resolves with first fulfilled value.
//if all fails, it rejects with AggregateError.
//Once one promise is successful then it ignores all promises even they will be successful.
const promise1 = Promise.reject('Error 1');
const promise2 = Promise.resolve('Success 1');
const promise3 = Promise.resolve('Success 2');

Promise.any([promise1, promise2, promise3])
  .then(result => console.log(result))   
  .catch(error => console.log(error));
