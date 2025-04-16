
/*
Event Loops
-> In JS for every program a global execution context is created in callstack. And this callstack is inside in JS Engine.
-> JS Engine is inside the browser and this browser has LocalStorage, Timer, Bluetooth and Geolocation access.
-> If JS Engine have to access all these resources of browser it needs some connection are called Web API's.
-> Web API's like setTimeOut(), DOM API's, fetch(), localStorage(), console and location. so these are all part of browser.
-> In callstack we never have timer to execute after some time. What if, we have to execute some code after some delay.
-> We can access Timer using setTimeOut() in browser, if we want to execute some code after some delay.
-> for all these web API's window is the object, so whenever we accessing we have to use window.setTimeOut() in js code.
-> Even we don't mention window we can access just with the setTimeOut() in js code. Because window is global Object.

Example:

*/
    console.log("Start");           //This will access console and put it into callstack to execute.
    
    setTimeout(function cb()    
    {
        console.log("Callback");    //It access to timer and puts it into web api's environment attached with 5 sec.
    }, 5000);                       //After expiring this time it has to be present in callstack.

    console.log("End");             //By that time it will print this msg because js engine does not wait for anything.

//JS engine executes code when the code is present in callstack. Incase of setTimeOut(), it will be in outside after time expires.
//callback cannot go directly into callstack so, now EventLoop and Callback Queue comes into picture.
//After timer expires this callback function moves inside to callback queue and EventLoop job is to check the callback queue, if present something and pushed it into callstack.
//After executing all the lines of code, Global Execution Context will be popped out of the callstack.
