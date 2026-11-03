/*
 * Student Name: Riya Chaudhary
 * Roll Number: 2510303439
 * Course: B.Tech CSE
 * Section: C
 * Subject: JavaScript Programming Lab (BCS354)
 * Assignment: 8, Task: 1
 */

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return "Hi, I am " + this.name;
  }
}

class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }

  greet() {
    return super.greet() + ". I teach " + this.subject;
  }
}

let t1 = new Teacher("Anita", "Maths");
console.log(t1.greet());