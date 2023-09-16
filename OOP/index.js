// 'use strict';

// //creating a class
// class user {

//     //constructor method
//     //variables should be defined inside this
//     constructor(name){
//       this.name=name;
//       let age;
//     }

//     //prototype method
//     message() {
//         console.log(`Hello Mr ${this.name} of ${this.age}`);
//     }
//     sorry(){
//         console.log("sorry world")
//     }

//     //static method can be called without making an object of the class
//     static newFunction(){
//         console.log("This is new function");
//     }

// }

// //making an object of the class and calling it

// let newUser = new user('rajib');
// newUser.age=21;

// newUser.message();
// user.newFunction(); //calling an static function



//inheritance and multilevel inheritance

class users{

    constructor(name){
        this.name =name;
    }
}

class admin extends users{
    showName(){
        console.log(this.name);
    }
}
let a = new admin('rajib');
a.showName();