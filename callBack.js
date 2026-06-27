/*
callback is a function which can be passed as a argument in another function. 
Whenever we call with name of that argument it invokes the callback function.
-> A callback function is a function that is passed as an argument to another function and is executed later by that function.
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
