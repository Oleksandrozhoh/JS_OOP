'use strict';

// protoObject
class Person {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  calcAge() {
    return 2024 - this.birthYear;
  }
}

// child object
class Student extends Person {
  // extend keyword links prototypes
  constructor(name, birthYear, course) {
    super(name, birthYear); // super keyword will call parent constructor and pont this keyword
    this.course = course;
  }

  check() {
    console.log(`Student is studying ${this.course}`);
  }

  calcAge() {
    console.log(`Student is ${2024 - this.birthYear}`);
  }
}

const jake = new Student('Jake', 1992, 'Computer science');
jake.check();
console.log(jake);
jake.calcAge();

/// another example

class Account {
  // public fields:
  // _movements = [];
  locale = navigator.language;

  //Private fields:
  #movements = [];
  #pin;

  constructor(owner, currency, pin, movements) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = []; // convention to mark protected fields
    // this.locale = navigator.language;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  #approveLoan(val) {
    // private method
    // method meant to be used internaly only
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan have been approved');
    }
    return this;
  }

  getMovements() {
    return this.#movements;
  }

  getPin() {
    return this.#pin;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111, []);
console.log(acc1);
acc1.deposit(500);
acc1.withdraw(200);
// console.log(acc1._movements); - its wrong to access _ properties directly
console.log(acc1.getMovements());
console.log(acc1.getPin());
acc1.requestLoan(500);
// console.log(acc1.#movements); - is NOT accessible outside of the class

acc1.deposit(200).deposit(400).withdraw(500).requestLoan(400);
