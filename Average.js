const details = {
    "SaiKiran" : 100,
    "Santosh" : "50",
    "Hemanth" : 50,
    "Samiksha" : NaN,
    "MadhuVarun" : 78
}

//get the keys of object using Object.keys() method and iterate through the keys. check the marks using keys.
Object.keys(details).forEach((key) => {
    const marks = details[key];

    if(typeof marks !== 'number' || isNaN(marks))     //for ensuring the numbers(validating)
    {
        console.log(`Invalid marks`);
        return;                             //it skips the below statements if the marks are invalid.
    }

    if(marks<=100 && marks>=90)
    {
        console.log(`${key} got a grade A`);
    }
    else if(marks<90 && marks>=80)
    {
        console.log(`${key} got a grade B`);
    }
    else if(marks<80 && marks>=70)
    {
        console.log(`${key} got a grade C`);
    }
    else if(marks<70 && marks>=60)
    {
        console.log(`${key} got a grade D`);
    }
    else if(marks<60)
    {
        console.log(`${key} got a grade E`);
    }
    else
    {
        console.log(`Invalid Marks`);
    }
});