/* 
Ex1 : This is also one closure.
closure : Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure
In JS we can pass functions as parameters and we can return function and we can assign function to a variable as well.

function x()
{
    var a=7;
    function y()
    {
        console.log(a);
    }
    y();
}
x();

*/

/*
Ex2

function x()
{
    var a=7;
    return function y()
    {
        console.log(a);
    }
    //return y;
}

var z=x();



//..............so many lines of code............

console.log(z);   //it return a y function.
z();       //it still remembers its lexical environment and all the things even x() function is vanished from execution context.

*/

/*
Ex3

function x()
{
    var a=7;
    function y()
    {
        console.log(a);
    }
    a=100;
    return y;
}

var z=x();
z();

*/

function z()
{
    var b=900;
    function x()
    {
        var a=7;
        function y()
        {
            console.log(a, b);
        }
        y();
    }
    x();
}
z();

/* 
    Uses of Closures:
    - Module design pattern
    - currying
    - functions like once
    - memoize 
    - maintaining state in async world
    - setTimeOuts
    - Iterators
    - and many more...
*/