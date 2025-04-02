let object1={
    name : "Hemanth",
    city : "Kurnool",
    getIntro: function()
    {
        console.log(this.name+" from "+this.city);
    }
}
let object2={
    name : "Janardhan"
}

//Never do this, there are several methods to modifying.
object2.__proto__= object1;

console.log(object2.city);
console.log(object2.getIntro());

/* 
    object2 has no city and getIntro but still it prints something because of inheritance
    first it check whether it has or not otherwise it goes to its parent object checks there and prints if it is present.
    In this case it found name property but it doesn't find the city so that it refers to its parent object.
*/