// Pure Function
function add(a, b) {
  return a + b;
}

// unpure Function
let count = 0;
function incrementCount() {
  count++;
  return count;
}

// Immutability

// mutable expample:
// let numbers = [1, 2, 3];
// numbers.push(4); 

// immutable:
// let numbers = [1, 2, 3];
// let newNumbers = [...numbers, 4];


// Higher-Order Functions
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  }
}

let double = multiplyBy(2);
console.log(double(5)); // returns 10



// *************  Coomon functional tools in java script
let numbers = [1, 2, 3, 4, 5];

// map: transforms each element
let doubled = numbers.map(n => n * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// filter: selects elements based on a condition
let evens = numbers.filter(n => n % 2 === 0);
console.log(evens);  // [2, 4]

// reduce: combines all elements into a single value
let sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum);  // 15


/// Currying
 function curry(f) {
  return function(a) {
    return function(b) {
      return f(a, b);
    }
  }
}

let curriedAdd = curry((a, b) => a + b);
console.log(curriedAdd(2)(3));  // 5


// ========================================
// Imperative approach
function sumOfEvens(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

// Functional approach
const sumOfEvens = numbers => 
    numbers.filter(n => n % 2 === 0).reduce((sum, n) => sum + n, 0);

// ============================================
// Hybrid approach

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items = [...this.items, item];  // Immutable update
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  getDiscountedItems() {
    return this.items.filter(item => item.discounted);
  }
}