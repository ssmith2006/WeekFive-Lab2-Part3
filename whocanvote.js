"use strict";

function canyouvote(age){
    if (age >= 18 ){
        alert("Congrats! You Can Vote!") ;
    }else if (age <18){
        alert("Too Young, Son!");
    }else{
        alert("Invalid");
    }
}

let userInput = prompt("Enter Your Age");
canyouvote(userInput);