Function.prototype.mybind = function()
{
    console.log("Hello this is mybind function.");
}

function fun1()
{

}
function fun2()
{

}

//every function can access to mybind function because it binds to Function prototype.
console.log(fun1.mybind());
console.log(fun2.mybind());