//Fetching the data from API's using promise.
//getting the data from this particular url and convert it into json format.
//After that logs the data what we have fetched from url.
//If any error occurs while fetching the data, it will trigger the catch block and logs the error message.
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
