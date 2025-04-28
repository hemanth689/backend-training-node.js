//Promise Chaining which implements that multiple .then() calls to run in sequence.
//first it will run signup() after resolving this it goes to login() and so on.
function signup() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Signing up...')
      resolve("Account created Successfull!\nNow, Please Login");
    }, 5000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Login Successfull');
    }, 2000);
  });
}

signup()
  .then(result => {
    console.log(result);
    return login();
  })
  .then(finalResult => console.log(finalResult))
  .catch(error => console.error("Error:", error));
