// customForEach():
// In the custom implementation, we explicitly check if the callback is a function and throw a TypeError if it's not. 
// This check is added manually to ensure type safety in the custom method.

// if (typeof callback !== 'function') {
//   throw new TypeError(callback + ' is not a function');
// }

// Example1

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

//Example2
Array.prototype.len = function(array)
{
    return array.length;
};

const arr1 = [10,20,30,40,50,60,70];
console.log(arr1.len(arr1));

const arr2 = [21,31,41,51,61,71,81,91,101,111,121,131];
console.log(arr2.len(arr2));