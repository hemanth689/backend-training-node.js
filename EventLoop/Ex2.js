let result = "";        //for appending the output
let output = document.getElementById("result");     //accessng the element to display on screen

console.log("Start");
result += "Start<br>";

document.getElementById("btn")              //It access through DOM API from browser and it finds the button with id(btn) and returns it.
.addEventListener("click", function cb(){   //This event listener also registers the callback on an event called click. 
    console.log("Callback");                //callback method (cb) is waits in web api's environment until the user clicks on the button.
    result += "Callback<br>";
    output.innerHTML = result;     //for displaying on screen if button is clicked.
});
//if the user clicks the button it pushed it into the callback queue and pushed it into the callstack by EventLoop to execute.

console.log("End");
result += "End<br>";

output.innerHTML = result;      //it gets displayed when page is loaded.