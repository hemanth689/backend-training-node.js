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