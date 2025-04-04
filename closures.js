/* 
closure is a function which remembers its variables, functions which are declared in this function.
It can access those attributes even after function execution.
It can access its lexical scope as well which means scope of parent function.
It can refer to parent scope is it does not find the variable, even if does not find in parent scope then 
it goes to its parent of parent scope until it finds. It doesn't find anywhere it just throw an error like Reference Error - not defined.
*/

//Example1

function outerFunction1()
{
    var value=7;
    return function innerFunction1()
    {
        console.log(value);
    }
    //return innerFunction;
}

var newFunction=outerFunction1();
//..............so many lines of code............ if we write so many lines of code.

console.log(newFunction);   //it return a y function.
newFunction();       //it still remembers its lexical environment and all the things even x() function is vanished from execution context.


//Example2
function OutestFunction()
{
    var value1=900;
    function outerFunction()
    {
        var value2=20;
        function innerFunction()
        {
            console.log(value1, value2);
        }
        innerFunction();
    }
    outerFunction();
}
OutestFunction();