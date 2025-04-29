const multiply = (value1, value2) => value1 * value2;
const divide = (value1, value2) => value1 / value2;

export { multiply, divide };

//default export is only one per file but named export can have multiple per file.
//for default export no need to use curly brackets while exporting and importing.
//for named export we have to use curly brackets while exporting and importing.
//Always use .js extension while importing like import { add } from './math.js'
//If we are using ES6 import/export, we must:
//Add "type": "module" in package.json (or) use .mjs file extension.

const greet = (name) => `Hello, ${name}!`;
export default greet;

