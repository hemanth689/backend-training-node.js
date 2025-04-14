/*
we can perform this property when we have nested elements. Event Bubbling is the concept, 
where an element has events like click and corresponding event handler is triggered.
-> When we click on child it executes first, after that it propagates to parent and grandparent and so on.
This is called Event Bubbling.
-> We can stop this propagation by using stopPropagation() method.
-> addEventListener(event, callback_function, boolean_value), if the value is false it will apply event bubbling.
if the value is true, it will apply event capturing concept, by default the value is false.
-> Event Capturing is opposite of Event Bubbling, it will invokes from ancestor to the element where we have clicked.
*/
document.querySelector("#grandparent").addEventListener('click', ()=>{
    console.log("GrandParent clicked");
}, false)        //capturing
document.querySelector("#parent").addEventListener('click', ()=>{
    console.log("Parent clicked");
}, false)       //bubbling
document.querySelector("#child").addEventListener('click', (e)=>{
    console.log("Child clicked");
    e.stopPropagation();        //only child is executed it doesn't move towards upwards because it stops here only.
}, false)       //bubbling