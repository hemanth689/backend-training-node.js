// we can run multiple promises in parallel and wait for all to finish.
//By using Promise.all() to run all promises once.
//It will wait until all promises should be resolved then only it prints some message.
//If one promise fails, then entire promise.all immediatley fails and skips all successfull results.
//And the catch() block will trigger and prints error messag.
function fetchData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fetchData1 done");
      resolve("Data from API 1");
    }, 2000);
  });
}

function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fetchData2 done");
      resolve("Data from API 2");
    }, 1000);
  });
}

Promise.all([fetchData1(), fetchData2()])
  .then(([data1, data2]) => {
    console.log("All data fetched:");
    console.log("data1:", data1);
    console.log("data2:", data2);
  })
  .catch(error => console.error("Error fetching data:", error));


//Even though fetchData2 will complete early but it has to wait for other promises to logs the message.  