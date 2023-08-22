"use script";

// objects are advanced form of arrays
// they use {curly braces}
// while arrays have the index of various elements contained, objects have the name for every elements 

// var info = {
//     firstName: "Ram",
//     lname: "Kumar",
//     age: 18,
//     country: "ayodhya",
//     salary: function () {
//         return 25000;
//     },
//     fullname: function () {
//         return this.firstName + " " + this.lname;
//     },
//     favMovies:['sholay','dhoom','hum']
// }

// document.write("Your name is " + info.firstName + " " + info.lname);
// // console.log(info.fullname())
// console.log(info.favMovies[2]);


// another method of writing objects

// var info = new Object();
// info.name="ram";
// info.caste="bahadur";

// document.write(`Your name is ${info.name} ${info.caste}`);


//keeping objects inside array and printing them

// var students = [
//     { name: 'Ram', caste: 'Sharma', age: 20 },
//     { name: 'Sita', caste: 'Kumari', age: 18 },
//     { name: 'Hanuman', caste: 'RamBhakta', age: 29 },
//     { name: 'Ravan', caste: 'Lankapati', age: 40 }
// ];
// printFunc = student =>
//     document.write(student.name + " " + student.caste + "<br>");

// students.forEach(printFunc);



// using the const variable, we cannot redefine the array or object but we can change the element of objects and arrays..
// const info={
//     name: 'rajib',
//     caste:'pokhrel',
//     address:'jhiljhile'
// }
// document.write(info.name+" "+info.caste+" "+info.address+"<br>");
// info.name='dipesh';// we can only change the inside elements but no redefine all the parent ones
// document.write(info.name+" "+info.caste+" "+info.address);


// using for in loops to print the contents of an object

// const info = {
//     name: 'rajib',
//     caste: 'pokhrel',
//     address: 'jhiljhile'
// }

// for (var key in info) {
//     document.write(`${key} : ${info[key]}<br>`);
// }

// using the map method in objects

let arr = [
    { firstName: 'Rahul', lastName: 'Bhosle' },
    { firstName: 'Nikita', lastName: 'Chadda' },
    { firstName: 'Jasmine', lastName: 'Willams' }
]

giveName = x => x.firstName + " " + x.lastName + "<br>";
let new_arr = arr.map(giveName).join(" ");

document.write(new_arr);