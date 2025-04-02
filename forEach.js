const words = ["Apple", "Basket", "Cover"];
words.forEach((word, index, array) => {
    console.log(words[index]);
    console.log(word, array[index+1]);

    //convert it into uppercase
    word=word.toUpperCase();   //it doesn't work
    words[index]=word.toUpperCase();  //this works because it overrides with uppercase word.
})
console.log(words);

//arrayName.forEach(currentValue => console.log(currentValue));
//arrayName.forEach((currVal, indexValue, array) => { console.log(currValue); })