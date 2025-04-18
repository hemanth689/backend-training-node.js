const userData = {
    name: "Hemanth Kumar",
    age: 22,
    email: "hemanth789@gmail.com",
    city: "Bangalore"
  };
  
// Export the object so it can be used in other files
//we can exports into two different ways

//1. module.exports = userData;

//2. 
exports.userDetails = userData;

/*
    exports and module.exports both are doing same thing which is used to exports the modules.
    method.exports is the actual syntax for exporting the module. We can export multiple functions by enclosing in curly brackets.
    exports is shorthand reference to module.exports at the start of the file. we can export only one item at a time.

    exports.add = (a, b) => a + b;
    exports.multiply = (a, b) => a * b; 
            (or)  
    module.exports = {
    add: (a, b) => a + b,
    multiply: (a, b) => a * b
    };
*/
