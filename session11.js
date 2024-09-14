let name = 'Ehsan';
let person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

// Accessing the properties of an object
console.log(person.name); // "John"
console.log(person['age']); // 30

person.age = 31;
person['name'] = "Johnny";

// Modifying the properties of an object
console.log(person.name);
console.log(person['age']); 

person.greet(); 

// ====================== Constractor Function (an old way to define an object)
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
}

let john = new Person("John", 30);
john.greet(); // "Hello, my name is John"

// Prototype Property
Person.prototype.introduce = function() {
  console.log(`I'm ${this.name} and I'm ${this.age} years old.`);
};

john.introduce();

// ======== Defining an object using Class syntax
class NewPerson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }

}

let johnn = new NewPerson("John", 30);
johnn.greet(); 

// static method

class MathOperations {
  static add(x, y) {
    return x + y;
  }
}
console.log(MathOperations.add(5, 3));

// Inheritance

class Employee extends NewPerson {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }

  introduce() {
    super.greet();
    console.log(`I work as a ${this.job}`);
  }
}

let alice = new Employee("Alice", 25, "Developer");
alice.introduce();

////// Encapsulation and Privacy
class BankAccount {
  #balance = 0; // private field

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  get balance() {
    return this.#balance;
  }
}

let account = new BankAccount();
account.deposit(100);
console.log(account.balance); // 100

// console.log(account.#balance); // This would cause an error

// Polymorphism
class Animal {
    speak() {
    console.log("The animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("The dog barks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("The cat meows");
  }
}

class Cow extends Animal {
  speaks() { // it dosen't work
    console.log("The cow moooos");
  }
}


let animals = [new Animal(), new Dog(), new Cat(), new Cow()];
animals.forEach(animal => animal.speak());