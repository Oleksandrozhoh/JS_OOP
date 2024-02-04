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
