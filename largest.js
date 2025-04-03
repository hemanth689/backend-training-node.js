const a = 19;
const b = 51;
const c = 49;
const d = -65;
const e = 52;

if(a>=b && a>=c && a>=d && a>=e)
{
    alert(`${a} is the largest number`);
    //console.log(`${a} is the largest number`);
}
else if(b>=c && b>=d && b>=e && b>=a)
{
    alert(`${b} is the largest number`);
    //console.log(`${b} is the largest number`);
}
else if(c>=d && c>=e && c>=a && c>=b)
{
    alert(`${c} is the largest number`);
    //console.log(`${c} is the largest number`);
}
else if(d>=e && d>=a && d>=b && d>=c)
{
    alert(`${d} is the largest number`);
    //console.log(`${d} is the largest number`);
}
else
{
    alert(`${e} is the largest number`);
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

