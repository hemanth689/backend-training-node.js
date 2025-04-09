/*
JSON stands for JavaScript Object Notation. It is a lightweight data-interchange format.
It can be used to send data between two computers. It is similar to JavaScript Objects.
The JSON format is syntactically similar to the code for creating JavaScript objects. 
Because of this, a JavaScript program can easily convert JSON data into JavaScript objects.
JavaScript has built-in functions like JSON.parse() and JSON.stringify().
JSON.parse() is used to converting JSON strings into javascript object.
JSON.stringify() is used to converting javascript objects into JSON string.
Keys and values of JSON objects are enclosed by double quotes.
*/

//In JSON values must be one of the datatypes like string, number, object, array, boolean and null.
//But the values cannot be one of the datatypes like function, date and undefined.

//String to JS Object.
const details = JSON.parse('{"name":"Hemanth", "age":21, "city":"Banglore"}');
console.log(details.name, details.age, details.city);

//String to JS Object(Array).
const cars = JSON.parse('["Ford", "BMW", "Audi", "Fiat"]');
cars.forEach((car) => {
    console.log(car);
});

//JS Objects to String
const data = JSON.stringify(details);
console.log(data);

const items = JSON.stringify(cars);
console.log(items);

//JSON.stringify() not only converts JS Objects into strings, it can convert any value into string.
const num = 123e-5;
console.log(JSON.stringify(num));
console.log(typeof(JSON.stringify(num)));

let bool = Boolean(1);
console.log(JSON.stringify(bool));
console.log(typeof(JSON.stringify(bool)));

//if we have functions and dates in JS Objects so we can convert these into strings using stringify() method.
const details1 = {name: "Hemanth", today: new Date(), city: "Hyderabad"};
const details2 = {name: "Kumar", age: function () {return 21;}, city: "Mumbai"};
console.log(JSON.stringify(details1));
//In this case the functions are omitted.
console.log(JSON.stringify(details2));

//objects can contain arrays.
const details3 = JSON.parse('{"name":"MSDhoni", "age":43, "cars":["Ford", "BMW", "Fiat"]}');
for(let i=0;i<details3.cars.length;i++)
{
    console.log(details3.cars[i]);
} 