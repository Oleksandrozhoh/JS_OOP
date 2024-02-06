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
