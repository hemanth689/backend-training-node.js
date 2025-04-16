
    console.log("Start");
/*
This callback function will sit inside the web api's environment and attaches with the time of 5000ms.
Once the timer expires it pushed it into callback queue also called as task queue.
Event Loop monitors the callstack if this is empty then it pushed this callback functions from callback queue into callstack.
*/

    setTimeout(function cbT(){                 
        console.log("CB setTimeOut");
    }, 0);      //even if i put 0 ms it gets executed after microtask queue function.

/*
    This is also one callback function from promises, it goes to web api's environment initially.
    Once it gets the data from network, it goes into microtask queue which is different from callback queue.
    microtask queue has higher priority than callback queue which means the functions inside microtask queue goes first than callback queue.
    Only the callback functions from promises and mutation observer are goes into microtask queue and remaining goes into callback queue.
*/
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(function cbF()
    {
        console.log("CB Netflix");
    })

    console.log("End");

/*
    Event Loop is responsible for continuously monitoring the callstack, callback queue and microtask queue.
    If callstack is empty then only it checks microtask queue first if any pushed into callstack, then checks callback queue.
*/