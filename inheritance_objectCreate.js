'use strict';

const PersonProto = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

PersonProto.calcAge = function () {
  console.log(`The age is ${2024 - this.birthYear}`);
};

// PersonProto becomes a prototype of StudentProto
const StudentProto = Object.create(PersonProto);
// init function to be able to instantiate fields programaticaly
StudentProto.init = function (name, birthYear, course) {
  PersonProto.call(this, name, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`Hi, i'm ${this.name} and I study ${this.course}`);
};

// creating jay object with StudentPtoto as ptototype
const jay = Object.create(StudentProto);
jay.init('Jay', 1995, 'Computer Scence');
console.log(jay);
jay.introduce();
jay.calcAge();

console.log(jay.__proto__ === StudentProto); // true
console.log(StudentProto.__proto__ === PersonProto); // true
