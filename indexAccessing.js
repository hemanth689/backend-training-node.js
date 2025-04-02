//.......Taking input from user..........
const readline = require('readline'); //for importing readline module
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
//It creates Interface where input takes from terminal and also output prints in terminal itself.
const array = ['h','e','l','l','o'];
function getValue(index)
{
    if(index>=0&&index<array.length)
    {
        console.log(array[index]);
    }
    else
    {
        console.log("Invalid index");    //if index is value is not there in array.
    }
}
rl.question('Enter the index value : ', (input) => {
    const id = parseInt(input);  //converting string to number because it reads as string.
    getValue(id); 
    rl.close();  //we should close this interface at the end.
})