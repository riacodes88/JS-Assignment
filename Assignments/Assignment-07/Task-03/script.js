/*
 * Student Name: Riya Chaudhary
 * Roll Number: 2510303439
 * Course: B.Tech CSE
 * Section: C
 * Subject: JavaScript Programming Lab (BCS354)
 * Assignment: 7, Task: 3
 */

function Student(name, marks) {
  this.name = name;
  this.marks = marks;
}

Student.prototype.result = function () {
  if (this.marks >= 40) {
    return "Pass";
  } else {
    return "Fail";
  }
};

let s1 = new Student("Asha", 88);
console.log(s1.result());
