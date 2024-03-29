'use strict';
// Coding Challenge #2
// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
class CarCl {
  constructor(make, speed) {
    (this.make = make), (this.speed = speed);
  }
  // 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
  // by 1.6)
  get speedUs() {
    return this.speed / 1.6;
  }

  accelerate() {
    this.speed += 10;
    console.log(`The car spees is ${this.speed}`);
  }
  break() {
    this.speed -= 5;
    console.log(`The car speed is ${this.speed}`);
  }
  // 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
  // converts it to km/h before storing the value, by multiplying the input by 1.6)
  set speedUs(speedKmH) {
    this.speed = speedKmH * 1.6;
  }
}
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h
const ford = new CarCl('Ford', 120);
console.log(ford.speedUs);
ford.accelerate();
ford.break();
ford.accelerate();
ford.break();
ford.speedUs = 50;
console.log(ford.speedUs);
console.log(ford.speed);
