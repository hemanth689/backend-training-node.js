const details = require('./data');

console.log(details);

//when we exports the module using module.exports use this format to see the output
/*
console.log('Name : '+details.name);
console.log('Age : '+details.age);
console.log('Email : '+details.email);
console.log('City : '+details.city);
*/

//when we exports the module using exports then use the below one. 
//Because it returns some name for this object as a property. In this case userDetails
console.log('Name : '+details.userDetails.name);
console.log('Age : '+details.userDetails.age);
console.log('Email : '+details.userDetails.email);
console.log('City : '+details.userDetails.city);