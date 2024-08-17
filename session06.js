//  ****** Return statement ******

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); 

////////////////////////////////////////////////////

function greetBro(name) {
    console.log(`Hello, ${name}!`); 
}
greetBro("Bro");

////////////////////////////////////////////////////

// ****** Anonymous functions ******
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(3, 4)); 

// ===========================

//  ****** Arrow Finction ******

const square = (x) => x * x;
console.log(square(5)); 

const arrawGreet = () => "Hello, World!";
console.log(arrawGreet()); 

// ===========================
// ****** Scope ******
function outer(x) {
    let y = 10;
    function inner() {
        let y = 20;
        console.log(x + y);
    }
    console.log('Outer Y is' + y);
    console.log(`Hello, ${y}!`); 
    let result = 'Hello';
    result += `, ${y}`;
    console.log('Hello, ' + y + '!');
    return inner;
}
const closure = outer(5);
closure();

// ===========================

// ****** Nested Loop ******
function printSquare(size) {
    for (let i = 0; i < size; i++) {
        let row = 10;
        for (let j = 0; j < size; j++) {
            row -= 2;
        }
        console.log(row);
    }
}
printSquare(3);

// =========================================
// ****** Arrays ******
let fruits = ['apple', 'banana', 'orange'];
let emptyArray = [];

console.log(fruits[0]); // 'apple'
console.log(fruits.length); // 3

fruits.push('grape'); // ['apple', 'banana', 'orange', 'grape']
console.log(fruits[3]);

fruits.pop(); // ['apple', 'banana', 'orange']
console.log(fruits[3]);

fruits.unshift('melone'); // ['melone','apple', 'banana', 'orange']
console.log(fruits[0]);

fruits.shift(); // ['apple', 'banana', 'orange']
console.log(fruits[0]);

// ===============================
// ****** Looping through Arrays ******
let colors = ['red', 'green', 'blue'];
// Using for loop
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
// // reverse
for (let i = colors.length; i > 0; i--) {
    console.log(colors[i-1]);
}

// Using forEach
colors.forEach(function(color) {
    console.log(color);
});
