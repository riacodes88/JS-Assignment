/*
 * Student Name: Riya Chaudhary
 * Roll Number: 2510303439
 * Course: B.Tech CSE
 * Section: C
 * Subject: JavaScript Programming Lab (BCS354)
 * Assignment: 8, Task: 3
 */

class Engine {
  constructor(power) {
    this.power = power;
  }
}

class Car {
  constructor(power) {
    this.engine = new Engine(power);
  }

  start() {
    return "Car starts with " + this.engine.power + " HP";
  }
}

let car1 = new Car(150);
console.log(car1.start());
