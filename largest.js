const value1 = 19;
const value2 = 51;
const value3 = 49;
const value4 = -65;
const value5 = 52;

if(value1>=value2 && value1>=value3 && value1>=value4 && value1>=value5)
{
    alert(`${value1} is the largest number`);
    //console.log(`${a} is the largest number`);
}
else if(value2>=value3 && value2>=value4 && value2>=value5 && value2>=value1)
{
    alert(`${value2} is the largest number`);
    //console.log(`${b} is the largest number`);
}
else if(value3>=value4 && value3>=value5 && value3>=value1 && value3>=value2)
{
    alert(`${value3} is the largest number`);
    //console.log(`${c} is the largest number`);
}
else if(value4>=value5 && value4>=value1 && value4>=value2 && value4>=value3)
{
    alert(`${value4} is the largest number`);
    //console.log(`${d} is the largest number`);
}
else
{
    alert(`${value5} is the largest number`);
    //console.log(`${e} is the largest number`);
}

//..........some optimal check..........
//we can reduce the number of comparisons by this code.
// // if(a>=b && a>=c && a>=d && a>=e)
// {
//     console.log(`${a} is the largest number`);
// }
// else if(b>=c && b>=d && b>=e)
// {
//     console.log(`${b} is the largest number`);
// }
// else if(c>=d && c>=e)
// {
//     console.log(`${c} is the largest number`);
// }
// else if(d>=e)
// {
//     console.log(`${d} is the largest number`);
// }
// else
// {
//     console.log(`${e} is the largest number`);
// }

