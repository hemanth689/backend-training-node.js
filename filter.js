//filter is used to filters the values based on some condition.
const numbers = [12,98,45,70,18,17,89];
//here i need only even numbers so i used filter method to get even numbers only.
const divisor = 2;
const even = numbers.filter(num => num%divisor === 0);
console.log(even);

const products = [
{ name : "laptop", price: 40000, colour: "white"},
{ name : "smartphone", price: 20000, colour: "Black" },
{ name : "Headphones", price : 5000, colour: "Brown" },
{ name : "Tablet", price : 10000, colour: "Blue" }
];

const requiredPrice = 2000;
const productNameContains = "phone";
const productColourContains = "B";
const newProducts1 = products.filter(p => p.name.includes(productNameContains));
const newProducts2 = products.filter(p => p.price>requiredPrice);
const newProducts3 = products.filter(p => { return p.price>requiredPrice && p.colour.includes(productColourContains) });
console.log(newProducts1, newProducts2, newProducts3);
