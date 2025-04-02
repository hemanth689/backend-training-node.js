const words = ["Apple", "Basket", "Cover"];
const newArr = words.map((word, index, array) => {
    console.log(words[index]);
    console.log(word, array[index+1]);

    //convert it into uppercase use map
    return word.toUpperCase();
})
console.log(words, newArr);

//map method doesn't modify the original array instead it just creates a new array and push the return value.
const prices=[4,2,8,3,9,1,5];
const discPrices = prices.map((price)=> {
    return price*0.5;
});

console.log(prices, discPrices);

const products = [
{ name : "laptop", price: 40000, colour: "white"},
{ name : "smartphone", price: 20000, colour: "Black" },
{ name : "HeadPhones", price : 5000, colour: "Brown" },
{ name : "Tablet", price : 10000, colour: "Blue" }
];
const newProducts = products.map((value) => {
    return {
        ...value,
       price : value.price*0.5
    }
    //this will return all the properties with changes in price as well.
})
console.log(products,newProducts);