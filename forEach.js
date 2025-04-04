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

//Generally, if we want to get out of the loop we use break or return keywords. But these doesn't work in forEach().
//These are just skips the current iteration just like what continue keyword does.
//Example:
const numbers = [1,2,3,4,5,6];
numbers.forEach((num) => {
    if(num === 3)
    {
        console.log("Exit from the loop");
        return;
    }
    else
    {
        console.log(num);
    }
    console.log("Continuing...");
});
//Output :
/*
1
Continuing...
2
Continuing...
Exit from the loop
4
Continuing...
5
Continuing...
6
Continuing...

we can see here, whenever the num is 3 it just goes to if block and prints the message.
And skips the below statements and starts goes to next iteration.
*/
//what if, we want to get out of the entire forEach(), in this case we have to use normal for loop.
//we can get out of the entire loop, if we use some().
//some() is also works same as forEach(), here we use return true to get out of the entire loop.

numbers.some((num) => {
    if(num === 3)
    {
        console.log("Exit from the loop");
        return true;
    }
    else
    {
        console.log(num);
    }
    console.log("Continuing...");
});

//output :
/*
1
Continuing...
2
Continuing...
Exit from the loop

It actually exit from the entire loop whenever num becomes 3.
*/