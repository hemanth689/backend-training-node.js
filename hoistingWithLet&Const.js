console.log(b);
console.log(a);
console.log(x);

let a=10;
var b=100;

/* Accessing:
    for a it gives output as you cannot access b before initialization called as ReferenceError because for let variables memory is assigns in script.
    for b it gives output as undefined because memory assigns in global so js engines access it prints undefined.
    for not declaring variables like x it gives x is not defined called as ReferenceError because we didn't declare in this program anywhere.
    
    hoisting is happens for let and const variables as well when we try to access variables before declaration we didn't got error like not defined.
    Temporal dead zone for let and const variables means the time from since it is hoisted to it's been assigning a value.

    And also we can access var varibles with window / this object right in case of let and const we cannot get a output instead we get undefined which means not declared.
*/


/*
console.log("hemanth kumar");
let val=100;
let val=10;

we cannot redeclare let variables, js engine just throws a syntax error without executing a single line.
In case of var we can redeclare variables like as follows:
var f=100;
var f=1000;

In case of const variables it is even more strict than let because for let variables we can declare once and we can assign a value later.
But for const variables we must declare and assign at a time, otherwise it throws a syntax error.
If we try to assign another value to const variable once we assign it throws an TypeError.
*/