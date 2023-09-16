'use strict';
//first promise

// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     //Db calls, cryptography, network
//     setTimeout(function(){
//         console.log("Async task is completed");
//         resolve();
//     },1000)
// });
// promiseOne.then(function(){
//     console.log("Promise Consumed..");
// })


//second promise

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Aysnc promise 2...");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Aysnc promise 2 has been successfully completed...")
// })


//third promise

// const promiseThree = new Promise(function(resolve, reject){
//     setInterval(function(){
//         resolve({username:"rajib",email:"pokhrelrajib@gmail.com"});
//     },1000)
// });

// promiseThree.then(function(user){
//     console.log(user);
// })


//fourth promise

// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true;
//         if (!error) {
//             resolve({ username: "rajib", password: "123" })
//         } else {
//             reject("Error: Something went wrong")
//         }
//     }, 1000)
// });

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function (error) {
//     console.log(error);
// }).finally(()=>console.log("The promise is either run or rejected"));


//promise five 

// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true;
//         if (!error) {
//             resolve({ username: "JavaScript", password: "123" })
//         } else {
//             reject("Error: Js went wrong")
//         }
//     }, 1000)
// })


// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive();



//reading users 

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }

// getAllUsers()


//reading users using then catch 

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error);
})