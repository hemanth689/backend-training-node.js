Function.prototype.mybind = function()
{
    console.log("Hello this is mybind function.");
}

function empty1()
{

}
function empty2()
{

}

//every function can access to mybind function because it binds to Function prototype.
console.log(empty1.mybind());
console.log(empty2.mybind());