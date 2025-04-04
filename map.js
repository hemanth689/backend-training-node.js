const words = ["Apple", "Basket", "Cover"];
const newWords = words.map((word, index, array) => {
    console.log(words[index]);
    console.log(word, array[index+1]);

    //convert it into uppercase use map
    return word.toUpperCase();
})
console.log(words, newWords);

//map method doesn't modify the original array instead it just creates a new array and push the return value.
const prices=[4,2,8,3,9,1,5];
const discount = 0.5;
const discountPrices = prices.map((price)=> {
    return price*discount;
});

console.log(prices, discountPrices);

const products = [
{ name : "laptop", price: 40000, colour: "white"},
{ name : "smartphone", price: 20000, colour: "Black" },
{ name : "HeadPhones", price : 5000, colour: "Brown" },
{ name : "Tablet", price : 10000, colour: "Blue" }
];

const newProducts = products.map((value) => {
    return {
        ...value,
       price : value.price*discount
    }
    //this will return all the properties with changes in price as well.
})
console.log(products,newProducts);