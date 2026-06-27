/*
callback is a function which can be passed as a argument in another function. 
Whenever we call with name of that argument it invokes the callback function.
-> A callback function is a function passed as an argument to another function, which is later invoked by that function. 
It allows us to customize behavior or execute code after a specific task or event. 
Common examples include map(), filter(), forEach(), setTimeout(), addEventListener(), and asynchronous operations like API calls.
*/
function greet(name, callback)
{
    console.log(`Hii ${name}, How are you?...`);
    callback();
}

function callMe(name)
{
    console.log("This is callback function.");
}

greet("Hemanth Kumar", callMe);
