/*
callback is a function which can be passed as a argument in another function. 
Whenever we call with name of that argument it invokes the callback function.
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