"use strict";

window.addEventListener("load", function() {

let button = document.getElementById("btn");
button.addEventListener("click", function() {

    let heightObj = document.getElementById("height").value;
    let weightObj = document.getElementById("weight").value;

    let height = parseFloat(heightObj.replace(",", "."));
    let weight = parseFloat(weightObj.replace(",", "."));

    let bmi = (weight / (height * height));
    
    let resultObj = document.getElementById("result");
    resultObj.replace(".", ",");
    resultObj.innerText = Math.round(bmi);
    
    
});
});
