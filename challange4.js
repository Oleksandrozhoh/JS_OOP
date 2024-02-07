'use strict';

class CarCl {
  constructor(make, speed) {
    (this.make = make), (this.speed = speed);
  }
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
    return this;
  }
  set speedUs(speedKmH) {
    this.speed = speedKmH * 1.6;
  }
}

// Coding Challenge #4
// Your tasks:
// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
// child class of the 'CarCl' class

class EVCl extends CarCl {
  // 2. Make the 'charge' property private
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  // 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
  // methods of this class, and also update the 'brake' method in the 'CarCl'
  // class. Then experiment with chaining!
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(`The ${this.make} speed is ${this.speed}`);
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`The ${this.make} charge is ${this.#charge}`);
    return this;
  }
}
// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian.accelerate().chargeBattery(90).break().break().break();
