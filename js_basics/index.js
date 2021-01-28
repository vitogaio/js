/*
let bto = $("#btn");
let name = $("#san");

$(document).ready(function() {
    bto.on("click", function(){
    document.getElementById("san").innerHTML = "ja";
    });
});

*/
/*
let name = "vittorino";
let age = 52;
let isApproved = false;
let firstName = undefined;
let selectColor = null;
*/


/*
// OBJECT
let person = {
    name: "veronica",
    age: 35
}

console.log(person);
console.log(person.name);
console.log(person.age);

// Dot Notation
person.name = "vittorino";
console.log("i just change the name to " + person.name);

// Bracket Notation
person['name'] = 'nina';
let selection = "name";
person[selection] = "tuco";
console.log("His name is " + '' + person.name);


// ARRAJS
let selectColors = ['red', 'blue'];
console.log(selectColors);
selectColors[2] = 'green';
console.log(selectColors[2]);
console.log(selectColors.length);

*/

// FUNCTIONS

// Performing a task
function greet(name1, name2) {
    console.log(name1 + ' and ' + name2 + " are about to drink a coffee");
}

greet("frank", "joe");
greet("rita", "josie");

function adding(a,b) {
    let add = a + b;
    console.log(add);
}
 adding(12,3);

let value = prompt();

 function square(number) {
     if(isNaN(value)) {
        console.log("sorry, this is not a number");
} else {
    let result = value * number;
    console.log(result);
}
 };
square(10);


// fatory or constuction function
function createCircle() {
    return {
        radius: 1,
        draw: function() {
            console.log("early in the morning");
        }
    }
}

const circle = createCircle("draw");
circle.draw();