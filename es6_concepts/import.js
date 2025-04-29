/*
    import is used to bring other files into this file to use.
    export is used to make the files available to other files.
*/
const value1 = 50;
const value2 = 5;
const word = "Hemanth";
//we can also rename it using alias (as).
import { multiply as product, divide } from './export.js';
console.log(product(value1, value2));
console.log(divide(value1, value2));

import greet from './export.js';
console.log(greet(word));