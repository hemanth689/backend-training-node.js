//...........Promises...............
//promise is used to handles the asynchronous operations.
//Asynchronous operations is the operation doesn't halt for another operation to complete its execution.
//But Javascript is Synchronous so we need to perform those asynchronous operations in synchronous manner.
//For this we can use callbacks and promises.
//problem with callback is inorder to perform we have to use nested callback functions which is also called as callback hell.
//This problem can overcome by using promises. here we have resolve and reject we invoke resolve when the operation is successfull.
//we invoke reject when the operation is failed.
//Example:


let mypromise = new Promise((resolve, reject) => 
{
    let work=false;
    if(work)
    {
        resolve("Work is completed...");
    }
    else
    {
        reject("Work isn't completed yet...");
    }
});
mypromise.then(msg => { console.log(msg); }).catch( error => { console.error(error); });
    
    
    //Example:
    
    //Promise = An Object that manages asynchronous operations.
    //Wrap a Promise Object around {asynchronous code}
    //"I promise to return a value"
    //PENDING -> RESOLVED or REJECTED
    //new Promise((resolve, reject) => {asynchronous code})
    // DO THESE CHORES IN ORDER
    // 1. WALK THE DOG
    // 2. CLEAN THE KITCHEN
    // 3. TAKE OUT THE TRASH
    
function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if(dogWalked){
                resolve("You walk the dog 🐕");
            }
            else{
                reject("You DIDN'T walk the dog");
            }
        }, 1500);
    });
}
function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve("You clean the kitchen 🧹");
            }
            else{
                reject("You DIDN'T clean the kitchen");
            }
        }, 2500);
    });
}
function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;
            if(trashTakenOut){
                resolve("You take out the trash ♻");
            }
            else{
                reject("You DIDN'T take out the trash");
            }
        }, 500);
    });
}
walkDog().then(value => {console.log(value); return cleanKitchen()})
        .then(value => {console.log(value); return takeOutTrash()})
        .then(value => {console.log(value); console.log("You finished all the chores!")})
        .catch(error => console.error(error));

//We can implement the above program by using callback functions also but it is like nesting of callback functions.
//If we didn't complete atleast one task then it won't goes to next tasks.