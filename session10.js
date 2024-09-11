// const name = 'Ehsan';

// // Multi line template
// const greeting = `Hello, ${name}
// Welcome to the ES6`;

// console.log(greeting);

// **********************
const score = 10;
function highlight(strings, ...values) {
  return strings.reduce((acc, str, i) => 
    `${acc}${str}<span class="highlight">${values[i] || ''}</span>`, '');
}

// const highlighted = highlight`Hello, ${name}! Your score is ${score}.`;
// console.log(highlight);

// ********************** Destructuring
// const [ali, ehsan, third, ...baghie] = [1, 2, 3, 4, 5, 6, 7];
// console.log(third, baghie);

// const { name, age, job = 'Developer' } = { name: 'John', age: 30 };
// console.log(name, age, job); 

// function printPerson({ name, age }) {
//   console.log(`${name} is ${age} years old.`);
// }
// printPerson({ age: 25, name: 'Alice' });

// **********************  Spread Operators

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5];
// console.log(arr2);

// const obj1 = { x: 1, y: 2};
// const obj2 = { ...obj1, z: 3 };
// console.log(obj2); 

// **********************  Reduce
// const initialValue = 0;
// const sumWithInitial = (array) => array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// const array1 = [1, 2, 3, 4, 5];
// console.log(sumWithInitial(array1));

// **********************  Rest Operators
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
// console.log(sum(1, 2, 3, 4)); 

// **********************  Shorthand 
const name = 'John';
const age = 30;

const person = {
  name, // Shorthand property
  age,
  greet() { // shorthand method
    console.log(`Hello, I'm ${this.name}`);
  },
  ['say' + 'Hi']() { // Computed property
    console.log('Hi!');
  }
};

// person.greet(); // Hello, I'm John
// person.sayHi(); // Hi!

// **********************  Default parameters
function greet(name = 'Ehsan', greeting = "Welcome") {
    result = `${greeting} ${name}`;
  console.log(result);
}

greet();
greet('Bob');
greet('Bob', 'Salam');