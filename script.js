//........Object Methods..........
// Object.assign() method combines properties with the values of two or more objects into one.
/*
const obj1={
    fname : "Ms",
    lname : "Dhoni",
    jerseyno : 7
}
const obj2={
    fname1 : "Rohith",
    lname1 : "Sharma",
    jerseyno1 : 45
}
const obj3={
    fname : "Virat",
    lname : "Kohli",
    jerseyno : 18
}

console.log(Object.assign(obj1, obj2));
const obj4 = Object.assign(obj2,obj3);
console.log(obj4);

//if the two objects are has similar property name (fname,lname...) then it would take last object only.
*/

// Object.keys() method return an array which contains property names only (no values).
//Object.values() method return an array which contains property values only.
/*
const obj1={
    fname : "Ms",
    lname : "Dhoni",
    jerseyno : 7
}
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
*/

//...........First class function..............
//Def : A programming language is said to have First-class functions when functions in that language are treated like any other variable. 
// For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.
/*
//Assigning a function to a variable
const func = () =>
{
    console.log("This is anonymous function");
};
func();

//Passing function as argument in function called as callback function. refer callback concept for example.

//return a function as value in another function
function a()
{
    console.log("function a");
    function b()
    {
        console.log("function b");
    }
    return b;
}
const func_b = a();
func_b();  //calling function b.

//This is why we have First-class functions in JavaScript.
*/

//...........customForEach() method.............
//It is similar to forEach() method and it works same as forEach() method.
/*

forEach():
Built-in error handling is provided by JavaScript. If the callback function is not a function, forEach() will throw a TypeError in strict mode.
It internally checks if the callback is callable before invoking it.

customForEach():
In the custom implementation, we explicitly check if the callback is a function and throw a TypeError if it's not. 
This check is added manually to ensure type safety in the custom method.

if (typeof callback !== 'function') {
  throw new TypeError(callback + ' is not a function');
}

Example:

Array.prototype.customForEach = function(callback) {
    // Step 1: Check if the callback is a function
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    // Step 2: Iterate through each element in the array
    for (let i = 0; i < this.length; i++) {
        // Step 3: Call the callback with the current element, its index, and the array itself
        callback(this[i], i, this);
    }
};
//without the above code not possible to use customForEach() method.And also it should be in top as well.
const arr = [98,88,78,68,58,48,38,28,18,8];
arr.customForEach((item, index, array) => {
    console.log(`Element at ${index} : ${item}`);
});

//Example
Array.prototype.len = function(array)
{
    return array.length;
};

const arr1 = [10,20,30,40,50,60,70];
console.log(arr1.len(arr1));

const arr2 = [21,31,41,51,61,71,81,91,101,111,121,131];
console.log(arr2.len(arr2));

*/

//...........Promises...............
//Example:

/*
let mypromise = new Promise((resolve, reject) => 
{
    let work=false;
    if(work)
    {
        resolve("Work is completed...");
    }
    else
    {
        reject("Work isn't completed yet...");
    }
});
mypromise.then(msg => { console.log(msg); }).catch( error => { console.error(error); });
*/

//Example:

//Promise = An Object that manages asynchronous operations.
//Wrap a Promise Object around {asynchronous code}
//"I promise to return a value"
//PENDING -> RESOLVED or REJECTED
//new Promise((resolve, reject) => {asynchronous code})
// DO THESE CHORES IN ORDER
// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH
/*
function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if(dogWalked){
                resolve("You walk the dog 🐕");
            }
            else{
                reject("You DIDN'T walk the dog");
            }
        }, 1500);
    });
}
function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve("You clean the kitchen 🧹");
            }
            else{
                reject("You DIDN'T clean the kitchen");
            }
        }, 2500);
    });
}
function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;
            if(trashTakenOut){
                resolve("You take out the trash ♻");
            }
            else{
                reject("You DIDN'T take out the trash");
            }
        }, 500);
    });
}
walkDog().then(value => {console.log(value); return cleanKitchen()})
        .then(value => {console.log(value); return takeOutTrash()})
        .then(value => {console.log(value); console.log("You finished all the chores!")})
        .catch(error => console.error(error));

//We can implement the above program by using callback functions also but it is like nesting of callback functions.
//If we didn't complete atleast one task then it won't goes to next tasks.
*/

//.......Taking input from user..........
//Example:

/*
const readline = require('readline'); //for importing readline module
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
//It creates Interface where input takes from terminal and also output prints in terminal itself.
const array = ['h','e','l','l','o'];
function getValue(index)
{
    if(index>=0&&index<array.length)
    {
        console.log(array[index]);
    }
    else
    {
        console.log("Invalid index");    //if index is value is not there in array.
    }
}
rl.question('Enter the index value : ', (input) => {
    const id = parseInt(input);  //converting string to number because it reads as string.
    getValue(id); 
    rl.close();  //we should close this interface at the end.
})
*/