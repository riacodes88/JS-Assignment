/*
 * Student Name: Riya Chaudhary
 * Roll Number: 2510303439
 * Course: B.Tech CSE
 * Section: C
 * Subject: JavaScript Programming Lab (BCS354)
 * Assignment: 8, Task: 2
 */

class Locker {
  constructor(pin) {
    this.pin = pin;
  }

  checkPin(num) {
    if (num === this.pin) {
      return true;
    }
    return false;
  }
}

let myLocker = new Locker(1234);

console.log(myLocker.checkPin(1111));
console.log(myLocker.checkPin(1234));