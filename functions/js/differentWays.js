// //here we will see about different ways of writing functions in js

// //1. function declaration

// function greet(){
//     console.log("Hello users");
// }
// greet();

// //2.function expression
// let greet = function(){
//     console.log("hello users");
// }

// greet();

// //3.arrow function

// let greet = ()=>{
//     console.log("Hello users");
// }
// greet();

// //4.IIFE (Immediately Invoked Function Expression)
// ;(function(){
//     console.log("Hello Users");
// })();

// //5.Method definiton in an object
// let greetings ={
//     greet: function(){
//         console.log("Hello users");
//     }
// }
// greetings.greet();

//6.using the new function syntax

// let greet = new Function('console.log("Hello world");')
// greet();

//7.Class method

// class greeting {
//     greet() {
//         console.log("Hello world");
//     }
// }
// let greets = new greeting();
// greets.greet();
