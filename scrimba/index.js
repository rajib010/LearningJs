var names = [];

// document.querySelector("#saveBtn").addEventListener("click", function () {
//     var Uname = document.getElementById("Uname").value;
//     names.push(Uname);
//     var list = document.getElementById("listElem");
//     list.innerHTML = names.map(function (name) {
//         return "<li>" + name + "</li>";
//     }).join("");
// });
// a paragraph or sth that you write using the tempalte sting will show in the same way in DOM as you write in the js file...
// const recipient = "Rajib"

// // Refactor the email string to use template strings
// const email = `Hey ${recipient} !
//  How is it going?
//  Cheers Per`

// document.getElementById("hello").innerText=email;

// localStorage.setItem("userName","rajibPokhrel");



// create a function that takes array as an parameter and returns the first element of the array

// function getFirstEle(arr){
//     return arr[0];
// }
// console.log(getFirstEle(['Ram','Shyam','Hari']));


// This variable stores the list of names.



// // SETTING THE STAGE
// const player = "Per"
// const opponent = "Nick"
// const game = "AmazingFighter"
// let points = 0
// let hasWon = false

// // PLAYING THE GAME
// points += 100
// hasWon = true

// // ANNOUNCING THE WINNER
// if (hasWon) {
//     console.log(`${player} got points points and won the ${game} game!`)
// } else {
//     console.log(`The winner is ${opponent}. ${player} lost the game`)
// }

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes


// let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// function elemOfArray(arr){
//     for(let i=0;i<arr.length;i++){
//         console.log(arr[i])
//     }
// }

// elemOfArray(myCourses);


// var names = [];

// const saveBtn = document.querySelector("#saveBtn");
// const deleteBtn = document.querySelector("#deleteAll");
// const saveTab = document.querySelector("#saveTab");
// const Uname = document.getElementById("Uname");
// var listElem = document.getElementById("listElem");
// let nameFromLocalStorage = JSON.parse(localStorage.getItem("names"));

// //to add the items into the array after fetching from the local storage....
// if (nameFromLocalStorage) {
//     names = nameFromLocalStorage;
//     showNames(names);
// }

// //to add the items into the localstorage...
// saveBtn.addEventListener("click", function () {
//     names.push(Uname.value);
//     Uname.value = "";
//     localStorage.setItem("names", JSON.stringify(names));
//     showNames(names);
// });

// function showNames(array) {
//     var listItems = "";
//     for (let i = 0; i < array.length; i++) {
//         listItems += `
//         <li>
//             <a href='#'> ${array[i]} </a> 
//         </li>`;
//     }
//     listElem.innerHTML = listItems;
// }

// //to clear the items from the local storage...
// deleteBtn.addEventListener("dblclick", function () {
//     localStorage.clear();
//     names = [];
//     showNames(names);
// });


// //on the click of savetAB BUTTON

// saveTab.addEventListener("click", function () {

//     chrome.tabs.query({active: true,currentWindow: true}, function (tabs) {
//         names.push(tabs[0].url)
//         localStorage.setItem("names", JSON.stringify(names));
//         showNames(names)
//     });



//     // console.log(arr[0].url)
   
// })




// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", "   
        }
    }
    return baseString
}

const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"])
console.log(sentence)

