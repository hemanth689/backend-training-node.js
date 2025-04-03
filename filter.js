const num = [12,98,45,70,18,17,89];
const even = num.filter(n => n%2 === 0);
console.log(even);

const products = [
{ name : "laptop", price: 40000, colour: "white"},
{ name : "smartphone", price: 20000, colour: "Black" },
{ name : "Headphones", price : 5000, colour: "Brown" },
{ name : "Tablet", price : 10000, colour: "Blue" }
];

const newArr1 = products.filter(p => p.name.includes("phone"));
const newArr2 = products.filter(p => p.price>2000);
const newArr3 = products.filter(p => { return p.price>2000 && p.colour.includes("B") });
console.log(newArr1, newArr2, newArr3);
