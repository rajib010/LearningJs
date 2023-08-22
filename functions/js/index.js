"use strict";

// instead of writing console.log or document.write everytime we can use this function
// let p= function(element){
//     return document.write(element)
// };

// p("This is displayed.");

//function expression is anonymous function..avoid polluting the global scopes with names.
// just write about it and forget it

// this is using the normal functions
// let count = 0;
// function increaseCount(){
//     count+=1;
//     document.getElementById("count-id").innerHTML=count;
// }
// function decreaseCount(){
//     count-=1;
//     document.getElementById("count-id").innerHTML=count;
// }

//this is using the function expression
// =+1 and +=1 are completely different. one assigns the value to 1 and other increments the value by 1.
// document.getElementById("increaseBtn").onclick = function () {
//     count += 1;
//     document.getElementById("count-id").innerHTML = count;
// }
// document.getElementById("decreaseBtn").onclick = function () {
//     count -= 1;
//     document.getElementById("count-id").innerHTML = count;
// }



// arrow functions in js
// compact alternative to traditional function expression

// you should give curly brackets if your function uses more than one statements
// can use empty () if the function takes no arguments
/*
const greeting = (username) =>
    console.log(`Jay ${username}`);
greeting("Bajrangbali");*/

// this is the normal function 
// const percentage= function(x,y){
//     return x/y *100;
// }
// console.log(`The percentage is ${percentage(1.2,50)} %.`)

// this is the above function converted into arrow one

// const percentage=(x,y)=>x/y*100;
// console.log(`The percentage is ${percentage(12,50)} %.`)

// sorting using arrow functions

// let numbers = [100, 20, 50, 70, 10, 80, 60];
// numbers.sort((x, y) => x - y);
// numbers.forEach(element => console.log(element));





