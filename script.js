'use strict';

/////////////////////////////////////////
// constructor functions
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const alex = new Person('Alex', 1992);
const matilda = new Person('Matilda', 1982);
const bob = new Person('Bob', 1989);

console.log(alex);
console.log(matilda);
console.log(bob);

// prototypes
console.log(Person.prototype);
Person.prototype.protFunction = function () {
  console.log('prototype function');
};
console.log(Person.prototype);

alex.protFunction();
matilda.protFunction();
bob.protFunction();

// deep dive into a prototype
console.log(alex.__proto__);
console.log(Person.prototype);
console.log(alex.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(alex));
console.log(Person.prototype.isPrototypeOf(Person));

// prototype object located inside of our object
Person.prototype.species = 'Human';
console.log(alex.species);
console.log(alex.__proto__.species); // same field

//Prototype chain
console.log(alex.__proto__); // Person.prototype
console.log(alex.__proto__.__proto__); // Object.prototype
console.log(alex.__proto__.__proto__.__proto__); // null

// prototype of an array
const arr = [1, 2, 3, 4, 5, 6, 1, 2, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

// adding new method to Array prototype property
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

// ES6 classes
class PersonClass {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    return `Age is ${2024 - this.birthYear}`;
  }

  get age() {
    return 2024 - this.birthYear;
  }
}

const jessica = new PersonClass('Jessica', 1999);
console.log(jessica);
console.log(jessica.calcAge());
console.log(jessica.__proto__);
console.log(`Jessica's age is ${jessica.age}`);

// getters and setters
const account = {
  owner: 'Jonas',
  movements: [200, 300, 400],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 1000;
console.log(account.movements);

//
class Human {
  constructor(fullName, age) {
    this.fullName = fullName;
    this.age = age;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
}

const greg = new Human('Greg Smit', 1998);
console.log(greg);
console.log(greg.fullName);
