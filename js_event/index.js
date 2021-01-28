"use strict";

/*
let m = 79;
let l = 182;
let bmi = m / (l*l);
alert(bmi);
*/

/*
let run = function(callback) {
console.log("run() wurde ausgeführt");
callback();
};

setTimeout(function() {
    console.log("Hier kommts angeflogen")
}, 5000);


let f = function() {
console.log("f() wurde ausgeführt");
};
run(f);
*/


// add jeweils +1
/*
let counter = 0;
setInterval(function(){
    counter = counter + 1;
    console.log(counter);
}, 1000);
*/


// click with Interval 
/*
window.addEventListener("load", function(){
document.getElementById("btn").addEventListener("click", function(){    
    setInterval(function() {
        alert("vai italia");
    }, 2000);
});
});
*/

/*
// append TextNode and value
window.addEventListener("load", function() {

 let button = document.getElementById("btn");
    button.addEventListener("click", function(){

        //get your text value
        let val  = document.getElementById("input_txt").value;
        // get your ul id
        let item = document.getElementById("items");
        // create an li element
        let element = document.createElement("li");
        // create a text node and add value (val)
        let node = document.createTextNode(val);

        // append the node value to the element
        element.appendChild(node);
        //append the element to the item
        item.appendChild(element);
    });
});
*/

/*
// append list
window.addEventListener("load", function() {

    let button = document.getElementById("btn");
       button.addEventListener("click", function(){
   
        let itemlist = document.getElementById("items");
        let newItem = document.createElement("li");
        newItem.innerText = "orange";
        newItem.style.color = "orange";

        itemlist.appendChild(newItem);


       });
   });
   */
   
