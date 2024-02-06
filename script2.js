'use strict';

// protoObject
const Person = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  return 2024 - this.birthYear;
};

// Child object
const Student = function (name, birthYear, course) {
  Person.call(this, name, birthYear);
  this.course = course;
};

// linking prototypes, now student prototype will inherit from Person.prototype
Student.prototype = Object.create(Person.prototype); // has to be done before assigning anything to student.prototype

Student.prototype.introduce = function () {
  console.log(`Hi! my name is ${this.name} and I study ${this.course}`);
};

//creating student object
const mike = new Student('Mike', 1991, 'Computer Science');

// mike has acess to person.prototype mehtods
mike.introduce();
console.log(mike.calcAge());

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

console.log(mike);
console.log(mike.__proto__); // Student.prototype with introduce function
console.log(mike.__proto__.__proto__); // Person.prototype with calcAge function
