if(true){
    //Block is also called as Compound Statements.
    //It is used to combining multiple Statements into group.
    //We wrapping up all the statements into group(block) and use it in where js excepts one statement.
    console.log("This is block.")

    //Block scope is what are all variables and functions can access in this block.

    var a=10;
    let b=100;
    const c=1000;

    //here we can only access the let and const variables inside the block and var as well.
    //But we cannot access let and const variables outside the block but we can access var inside and outside as well.
    //Because let and const are assigns a memory in separate space called as Block but var assigns in Global.
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);