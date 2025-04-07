var result=""; //result is added up to this variable.
function checkNumber(number)
{
    if(number%2===0)
    {
        result+=`${number} is an even number\n`;
        //console.log(`${n} is an even number`);
    }
    else{
        result+=`${number} is an odd number\n`;
        //console.log(`${n} is an odd number`);
    }
}

for(let i=0;i<=15;i++)
{
    checkNumber(i);   //calling function to check whether the current value is even or odd.
}
alert(result);  //It will display the all the result on screen.