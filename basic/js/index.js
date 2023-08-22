"use strict";

// console.log("Learning from bro code is fun");

// taking user inputs in Js

// // this is a simple way using a window prompt
// let userName = window.prompt("What is your name");
// console.log("Hello " +userName );

//this is using a html form

// let username;

// document.getElementById("mysubmit").onclick = function(){
//     username= document.getElementById("myusername").value;
//     console.log(username);
//     document.getElementById("label_name").innerHTML="Hello "+ username;
// }


// this is the code for the hypotensue program...

// let a;
// let b;
// let c;

// document.getElementById("submitButton").onclick= function(){

//     a = document.getElementById("sideA").value;
//     a= Number(a);

//     b= document.getElementById("sideB").value;
//     b=Number(b);

//     c= Math.pow(a,2)+Math.pow(b,2);
//     c=Math.sqrt(c);

//     document.getElementById("cLabel").innerHTML= "The hypotenuse is "+ c;


// }



// this is the Js for counter program

// let count=0;

// document.getElementById("decreaseBtn").onclick = function(){
//     count--;
//     document.getElementById("labelCounter").innerHTML= count;

// }

// document.getElementById("resetBtn").onclick= function(){
//     count=0;
//     document.getElementById("labelCounter").innerHTML= count;
// }

// document.getElementById("increaseBtn").onclick= function(){
//     count++;
//     document.getElementById("labelCounter").innerHTML= count;
// }


//this is the code for the random number generation
// let a;
// let b;
// let c;

// document.getElementById("rollBtn").onclick= function(){
//     a= Math.floor(Math.random()*6) +1;
//     b= Math.floor(Math.random()*6)+1;
//     c= Math.floor(Math.random()*6)+1;

//     document.getElementById("numA").innerHTML= "num1: "+a;
//     document.getElementById("numB").innerHTML= "num2: "+b;
//     document.getElementById("numC").innerHTML= "num3: " +c;
// }

// checkWinner(true)

// function checkWinner(win){
//     win ? console.log("You win !!!"): console.log("Booooo.... loser");
// }


// number guessing game

// let answer = Math.floor((Math.random() * 10) + 1);
// let guesses = 0;

// document.getElementById("submitButton").onclick = function () {
//     let guess = document.getElementById("guessNumber").value;
//     guesses += 1;

//     if (guess == answer) {
//         alert(`${guess} is the correct number. It took you ${guesses} guess.`)
//     }
//     else if (guess < answer) {
//         alert(`Too small.... Think larger.`)
//     }
//     else if (guess > answer) {
//         alert(`Larger to anticipate...`)
//     }
//     else {
//         alert("Something went wrong!!!!")
//     }
// }


/// temperature conversion prorgram

// document.getElementById("submitBtn").onclick = function () {

//     let temp;

//     if (document.getElementById("cButton").checked) {
//         temp = document.getElementById("temp").value;
//         temp = Number(temp);
//         temp = toCelsius(temp);
//         document.getElementById("result").innerHTML = temp + " C";
//     }
//     else if (document.getElementById("fButton").checked) {
//         temp = document.getElementById("temp").value;
//         temp = Number(temp);
//         temp = toFarenheit(temp);
//         document.getElementById("result").innerHTML = temp + " \u00B0 C";
//     }
//     else {
//         document.getElementById("result").innerHTML = "Select a unit..."
//     }
// }
// function toCelsius(temp) {
//     return (temp - 32) * (5 / 9);
// }

// function toFarenheit(temp) {
//     return (temp * 5 / 9) - 32;
// }


// anonymyous functions

// let count=0;
// document.getElementById("increaseBtn").onclick= function(){
//     count++;
//     document.getElementById("number").innerHTML= count;
// }
// document.getElementById("decreaseBtn").onclick= function(){
//     count--;
//     document.getElementById("number").innerHTML= count;
// }
// ... is the spread operator which can spread the values of an array/string into string...
// const names=['rajib','rajip','rajiv'];
// let sentence= 'This is a sentence';
// console.log(...sentence);


/*rest parameters in function accepts indefinite number of parameters
When we pass a function with rest parameters (... param) it will pack the result in array
then we need to find some way to access the array.
let a=5;
let b=45;
let c=50;
let d=59;
function sum(...numbers){
    let total=0;
    for(let number of numbers){
        total+=number;
    }
    return total;
}
console.log(sum(a,b));
*/


//arrow functions

// let myFunction = newFunction => console.log("this is my function");
// myFunction();


// call backs in function
// here we create different functions and pass those functions as parameters to the 
// other functions. This is very important in asynchronours coding of javascript.

// sum(5,6,displayDOM);

// function sum(a,b,callBack){
//     let result= a+b;
//     callBack(result);
// };

// function displayDOM(result){
//     document.getElementById('callback').innerHTML=result;
// };


// let lap1=43;
// let lap2=41;
// let lap3=45;

// let addLaps=()=>lap1+lap2+lap3;

// console.log(addLaps())

// let count= parseInt(document.getElementById("text").innerHTML);
// increment=()=>{
//     count= count+1;
//     document.getElementById("text").innerText= count;
// }

// var names="Rajib Pokhrel";
// let greetings="My name is ";
// let myGreeting="hi"+" " + greetings +" "+names;

// console.log(myGreeting);

// var welcomeEl= document.getElementById("welcome-el");
// var names= "Rajib Pokhrel";
// var greetings="Hello MR.";

// var all= greetings+" "+names;
// welcomeEl.innerText= all;

// let sc = document.getElementById("text1");
// let el = parseInt(sc.innerHTML);

// console.log(el);

// const increment = () => {
//     el += 1;
//     sc.innerHTML = el;
//     return el;
// }

// let save = () => {

//     document.getElementById("display").textContent = el += el + "-";;
// }


// var point =3;

// function add3Points(){
//     return point+=3;
// }
// function remove1Point(){
//     return point-=1;
// }

// console.log(remove1Point());


function byID(e) {
    return document.getElementById(e);
}
//generating the random numbers
var firstCard = Math.floor(Math.random() * 10 + 2);
var secondCard = Math.floor(Math.random() * 10 + 2);
var sum = firstCard + secondCard;
var message = "";

//defining the variables connecting to DOM
var card = byID("cards");
var sum = byID("sum");
var result = byID("result");

//function to start the game...
const startGame = () => {
    card.textContent = firstCard + " & " + secondCard;
    sum.textContent = firstCard + secondCard;
    if (sum === 21) {
        message = "You won";
    } else if (sum>21) {
        message = "You lost";
    }else if(sum<21){
        message="Do you want to draw again?";
    }
    result.textContent = message;
}
byID("button-id").addEventListener("click", startGame);
