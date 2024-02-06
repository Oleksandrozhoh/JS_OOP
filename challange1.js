'use strict';
// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`The new speed of ${this.make} is ${this.speed}`);
};
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`The new speed of ${this.make} is ${this.speed}`);
};
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h
const car1 = new Car('Toyota', 50);
const car2 = new Car('BMW', 80);
console.log(car1);
console.log(car2);
car1.accelerate();
car2.accelerate();
car1.brake();
car2.brake();

// Coding Challenge #3
// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
const tesla = new EV('tesla', 120, 23);
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
console.log(tesla.charge);
