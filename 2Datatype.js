/**** Data Types in JavaScript ****/


// undefined
// Boolean
// Number
// String
// BigInt
// Symbol


var myName = "Ritesh Girpunje";
console.log(myName);

var myAge = 26;
console.log(myAge);

var iAmThapas = false;
console.log(iAmThapas);

// typeof operator 
console.log(typeof (iAmThapas));


//typeof operator is use to tells the type of variable ....

// DataTypes Practice

console.log(10 + "20"); //1020
9 - "5"
console.log(9 - "5"); //bug 4
"Java" + "Script"
console.log("Java " + "Script"); //javascript
" " + " "
console.log(" " + 0);
" " + 0
"vinod" - "thapa" //NaN
true + true
true + false
false + true
false - true


console.log("Ritesh " - "hunter");





// 🙋‍👨‍🏫 Interview Question 1 🙋‍👨‍🏫
// Difference between null vs undefined?


var iAmUseless = null;
console.log(iAmUseless);
console.log(typeof(iAmUseless));

// //***************2nd javascript bug****************//

var iAmStandBy;
console.log(iAmStandBy);
console.log(typeof(iAmStandBy));


// 🙋‍👨‍🏫 Interview Question 2 🙋‍👨‍🏫
// What is NaN?

// NaN is a property of the global object.
// In other words, it is a variable in global scope.
// The initial value of NaN is Not-A-Number


var myPhoneNumber = 9876543210;
var myName = "Ritesh Girpunje";

console.log(isNaN(myPhoneNumber));
console.log(isNaN(myName));

if(isNaN(myName)){
    console.log("plz enter valid phone no");
}




// NaN Practice 🤯



NaN === NaN;
Number.NaN === NaN;
isNaN(NaN);
isNaN(Number.NaN);
Number.isNaN(NaN);

  
//isNaN is the method is use to find the it is number or not a number  

console.log(Number.isNaN(NaN));




// 🙋‍👨‍🏫 Interview Question 1 🙋‍👨‍🏫
// var vs let vs const 





