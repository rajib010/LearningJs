"use strict";

function log(element) {
        return console.log(element)
}

function print(element) {
        return document.write(element + "<br>");
}

//array.foreach()== this will run the provided call back function for each element of the array
// let students = ['ram', 'gopal', 'hari'];
// students.forEach(capitalize);
// students.forEach(print);
// function capitalize(element,index,array) {
//     array[index]=element[0].toUpperCase()+ element.substring(1);
// };
// function print(element){
//     console.log(element);
// };


// map method of arrays..
// // runs the provided call back function for each arry and creates new array...
// let numbers=[1,2,3,4,5];
// let squareNumbers= numbers.map(square);
// squareNumbers.forEach(print);
// let cubeNumbers = numbers.map(cube);
// cubeNumbers.forEach(print);
// function square(element){
//     return Math.pow(element, 2);
// };
// function cube(element){
//     return Math.pow(element,3);
// }
// function print(element){
//     console.log(element)
// }


//array.filter();
// this will filter the elements and create a new array from the filtered elements..

// let ages=[18,16,21,19,15,17];

// let adult = ages.filter(checkAge);
// adult.forEach(printAge);

// function checkAge(element){
//     return element>=18;
// };
// function printAge(element){
//     console.log(element);
// }


// array.reduce();
// reduces an array to a single value, very useful to find the sum of the values

// let prices =[ 10,12,43,31,12];
// let total= prices.reduce(sumUp);
// console.log(`The total price is: ${total}`)

// function sumUp(total, element){
//     return total+element;
// }

// function display(element){
//     console.log(element);
// }


//sorting an array of numbers in js

// let marks = [100, 20, 32, 43, 64, 21, 54, 23];

// // marks.sort(descendingSort);
// marks.sort(ascendingSort);

// marks.forEach(print);
// function descendingSort(x, y) {
//     return y - x;
// }
// function ascendingSort(x,y){
//     return x -y;
// }
// function print(element) {
//     console.log(element);
// }


// check to see the different elements of an array
// let data = [1, 2, 3, 4, 9];
// let data1 = [1, 2, 6, 7, 4];

// let newArray= [];
// data.forEach(item=>{
//     if(!data1.includes(item)){
//         newArray.push(item);
//     }
// })
// console.log(newArray)


// search things in array
// let data=['ram','sita','gita','hari','ram'];
// let search_name='ram'

// let newArray=data.filter(item=>{
//     return item.includes(search_name)
// });
// console.log(newArray);


//
// let search_email='hari@gmail.com';
// let search_name='hari';
// let users=[
//     {name:'sophia',email:'sophia@gmail.com'},
//     {name:'hari',email:'hari@gmail.com'},
//     {name:'gita',email:'gita@gmail.com'},
// ]
// let newArray= data.filter(item=>{
//     return item.includes(search_name || search_email);
// })
// console.log(newArray);



// array methods in js
// types of array functions in js
/* there are total 24 array methods in js 
delete array[i]= deletes the element of the mentioned index...

array.sort() == sorts the array in ascending order...
array.reverse()== sorts the array in reverse order...
array.pop()== removes the last element of an array...
array.push()== add element to the last of the array...
array.shift() == deletes the first element of the array...
array.unshift()== adds a new element to the first index of an array...
array.concat()==   to join two arrays...
                let a= [1,2,3]
                let b= a.concat(4,5,6);
                document.write(b);
array.join()=== takes all the values of an array and joins them into a single one...
                let a=['ram','sita','hari'];
                var c= a.join("/"); the inside value determines what is the joining factor to show in between the elements
                document.write(c);
array.slice()= takes the values from the existing array and create a new array ...
                take parameters(start, end) which are the index values of the array
                if parameters are given in negative then the array is reversed
array.splice()= to insert the values into the array inbetween some other elements of array...
                this takes three parameters(index,howmany values to delete, new value)
                can also be used to delete values..
array.isarray()== is used to check if the given variable is array or not...
                return the boolean values
array.indexof('value', startfrom)== takes the parameter of element to be searched in a array and returns its index
                can also be given another parameter to start the searching from destined position
                if value is not found then the index is retured as -1
array.lastindexof()== is similar to the .indexof() function, but it searches the data from the last element of an array
array.includes()== checks if the  given value is present or not in the given array, is case sensitive
                and returns boolean value...
array.some()== checks if the values of the arrays match the given condition or not...
                takes the function as arguement 
                here is the code to check if there are any odd numbers in the array...
                var arr = [12, 14, 10, 20, 24]
                var b = arr.some(odd);
                function odd(element) {
                        return element % 2 == 1;
                }
                print(b);
                returns boolean values
array.every()== checks if every element of the function matches the given condition
                takes a function as a parameter
array.find()== takes function as parameter and checks the condition and returns the first element in the array without checking the others
array.findIndex()== similar to the find function but returns the index of the first element of array which matches the condition of function
array.filter()== creates a new array, by taking only those elements of the previous array that passes the test...
                var a=[10,20,30,15,18,40];
                let b= a.filter(adult);
                function adult(element){
                        return element>=18;
                }
                print(b);
array.toString()= converts the values inside a array into a string value of a variable
array.valueof()== normal function, to print the values of an array..
array.fill() == this fills the array with the same elements.. like['ram','ram','ram','ram']
array.forEach() == runs the function for each value of an array...
array.map() == returns a new array by running the function in every element of  an existing array..
*/

// let a=[1,2,3,4,5,6,7];

// let b= a.map(element=>element*10)

// print(b);
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
mulTen=number=>number*10;
new_arr = arr.map(mulTen);
document.write(new_arr);


/* we can convert a string into an array by using the method of JSON.parse(nameOfString)
and then reconvert the array into the string by using JSON.stringify(nameOfArray)*/








































