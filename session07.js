//  ****** Basic Array Methods ******

let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange', 'grape'];
// console.log(numbers.indexOf(3)); // 2
// console.log(numbers.includes(4)); // false

// let sliced = numbers.slice(2, 4); // [ 3, 4 ]
// numbers.splice(2, 1, 6); // [1, 2, 6, 4, 5]
// console.log(numbers);

let joinedString = fruits.join('-'); // "1-2-6-4-5"
// console.log(joinedString);

let splitArray = "34,5,67,89".split(','); // ['a', 'b', 'c']

// OR 

// let beforSplit = "a,b,c";
// let splitArray = beforSplit.split(',');

// console.log(splitArray);



// Object

let person = {
    name: 'John',
    family: "Travolta",
    children: {
        sex: 'male',
        name: 'Jack',
        greet: function() {
            console.log(`Hello, I am ${this.name}`);
        }
    },
    age: 30,
    greet: function() {
        console.log(`Hello, I am ${this.name} ${this.family}`);
    }
};

// console.log(person.name + ' ' + person.family); // John
// console.log(`Hello, I am ${person.name} ${person.family}`);
// console.log(person.children.sex);
person.greet(); // Hello, my name is John
person.children.greet();