const prices = [45,18,7,39,99,86,77,10];
const totalAmount = prices.reduce((total, currPrice) => {
    return total+currPrice;
},0);
//initially total is the value which we have specified above (0), but if we don't specify the value it would take first index value of array (it is not recommended).
console.log(totalAmount);

//combining into sentence.
const words = ["Hello"," ","World"];
const sentence = words.reduce((result, current) => {
    return result+current;
}, '');
console.log(sentence);

//reducing an array into object.
const fruits = ["apple", "banana", "apple", "apple", "carrot", "banana", "apple", "carrot", "banana", "carrot"];
const new_fruits = fruits.reduce((fruit, index) => {
    fruit[index] = (fruit[index] || 0)+1;
    return fruit;
}, {});
console.log(new_fruits);

//combining all methods map, filter and reduce.
const products = [
{ name : "laptop", price : 40000, colour : "white", inShoppingCart : true},
{ name : "smartphone", price : 20000, colour : "Black", inShoppingCart : false},
{ name : "Headphones", price : 5000, colour : "Brown", inShoppingCart : true},
{ name : "Tablet", price : 10000, colour : "Blue", inShoppingCart : false},
{ name : "smartwatch", price : 3000, colour : "red", inShoppingCart : true}
];
//I want to calculate total price all the products which are in cart and also deduct 50% discount from total price.
const discount = 0.5;
const totalPrice =  products.filter(p => p.inShoppingCart)
                            .map(p => p.price * discount)
                            .reduce((prod,curr) =>
                            {
                                return prod+curr;
                            }, 0);
console.log(totalPrice);