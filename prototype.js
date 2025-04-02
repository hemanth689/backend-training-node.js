let arr=["Hemanth", "Kumar"];
let object = {
    name : "Hemanth",
    city : "Kurnool",
    getIntro : function()
    {
        console.log(this.name+" from "+this.city);
    }
}
function func()
{
    //
}

console.log(arr.__proto__);
console.log(Array.prototype)
console.log(func.__proto__);
console.log(Function.prototype);
console.log(arr.__proto__.__proto__);
console.log(Object.prototype);
console.log(func.__proto__.__proto__);
console.log(Object.prototype);
console.log(arr.__proto__.__proto__.__proto__);
console.log(func.__proto__.__proto__.__proto__);
/*

Inheritance in JS => When an object trying to access variables and properties of another object.
Prototype is an Object that get attach to function/method/object and this object has some hidden properties.
Whenever we create object/ function/ methods/ array/ variable , these all are attached with some hidden properties, which we call prototype
_proto_ is reference to prototype ( or it points towards prototype ), if we want to access prototype, we do _proto_
prototype object has a prototype of its own, and so on until an object is reached with null as its prototype,  this is called prototype chaining.

let's we have an array let a=[1,2,3,4,5];
if we do like arr.__proto__ it prints something which is called Array.prototype.
if arr.__proto__.__proto__ it prints something which is called as Object.prototype.
if arr.__proto__.__proto__.__proto__ it prints null because it refers to null.
This is called as prototype chaining.

In case of Objects
Object.__proto__ is called as Object prototype, and prototype of Object prototype is null (Object.__proto__.__proto__ -> null).

In case of functions
func.__proto__ -> Function prototype.
func.__proto__.__proto__ -> Object prototype.
func.__proto__.__proto__.__proto__ -> null.
So everything in javascript is object.
*/