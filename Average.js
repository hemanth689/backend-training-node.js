const details = {
    "SaiKiran" : 65,
    "Santosh" : 75,
    "Hemanth" : 50,
    "Samiksha" : 80,
    "MadhuVarun" : 95
}

//get the keys of object using Object.keys() method and iterate through the keys. check the marks using keys.
Object.keys(details).forEach((key) => {
    if(details[key]<100 && details[key]>=90)
    {
        console.log(`${key} got a grade A`);
    }
    else if(details[key]<90 && details[key]>=80)
    {
        console.log(`${key} got a grade B`);
    }
    else if(details[key]<80 && details[key]>=70)
    {
        console.log(`${key} got a grade C`);
    }
    else if(details[key]<70 && details[key]>=60)
    {
        console.log(`${key} got a grade D`);
    }
    else if(details[key]<60)
    {
        console.log(`${key} got a grade E`);
    }
});