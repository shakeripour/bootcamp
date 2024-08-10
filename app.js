// Imports (if any)

/* This is a multiline comment
we can use it in multiple lines */

// import { calculateArea, f2 } from './module.js';
// import { someFunction } from './module.js';

// Global variables
const PI = 3.14159;

// // Function declarations
function calculateArea(radius) {
    return PI * radius * radius;
}

// // کامنت فارسی هم میشه نوشت
let r = 10;
let area = calculateArea(r);

console.log(`The area of a circle with radius ${r} is ${area}`);


// // Event listeners (in browser environment)
// // document.addEventListener('DOMContentLoaded', () => {
// //     // DOM manipulation code here
// // });




let _another;
let $alsoValid;
let x1234;
// let 111xyz; this is not valid!


// // *******************************************
var x = 1;
function example() {
    var x = 2;  // Different variable
    console.log(x);  // 2
}
console.log(x); // 1
// // *******************************************

let y = 1;
if (true) {
    let y = 2;  // Different variable
    console.log(y);  // 2
}
console.log(y);  // 1

// // *******************************************
const z = 1;
// z = 2;  // This would cause an error

const obj = { prop: 1 };
obj = 'aaa'; // This is not allowed
obj.prop = 2;  // This is allowed
console.log(obj.prop);  // 2

// *******************************************
var x = 1;
function example() {
    x = 2;  // Different variable
    console.log(x);  // 2
}
console.log(x); // 1

// *******************************************
// Operators
function checkoperators() {
    let x = 5;
    let y = 10;
    let sum = x + y; // => 15
    let sub = x - y; // => -5
    let allOperators = x * y / 10;
    let remain = 12 % 5; // => 2
    let power = x ^ y;
    ++x; // 6
    --y; // 9
    x = x + 1; // ++x or x++;
}
// *******************************************

let age = 20;

if(age >= 18) {
    console.log("You can vote");
} else if (age >= 10){
     console.log("You need 8 years to waite");
} else {
    console.log("You can not vote");
}

// Ternary operator
let canVote = age >= 18 ? "Yes" : "No";

switch (age) {
    case 10: canVote = "No"; break;
    case age > 10: canVote = 'No';break;
    case 20: canVote = 'Yes'; break;
    default: canVote = 'You are not suppose to vote';
}












