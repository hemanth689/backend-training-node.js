//Normal functions
function addition(value1, value2) {
    return value1 + value2;
}

//Arrow function are safer for callbacks, promises because it automatically binds this.
//It is a simple and cleaner syntax.
//if only one statement is there no need to specify return.
//if multiple statement is there then we have to wrap those with curly brackets and also we have to specify return.
const multiply = (value1, value2) => value1 * value2;

const statement = (word1, word2) => {
    const word3 = "Good";
    //Template literals is also one concept of ES6 which helps we can use values in a string easily.
    return `${word1} ${word3} ${word2}`;
}

const num1 = 5;
const num2 = 10;
const word1 = "Hello,";
const word2 = "Morning";
console.log(addition(num1, num2));
console.log(multiply(num1, num2));
console.log(statement(word1, word2));
