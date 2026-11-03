/*
 * Student Name: Riya Chaudhary
 * Roll Number: 2510303439
 * Course: B.Tech CSE
 * Section: C
 * Subject: JavaScript Programming Lab (BCS354)
 * Assignment: 5, Task: 3
 */

let marks = [72, 85, 45, 90];

let passMarks = marks.filter(function (m) {
  return m >= 60;
});

console.log(passMarks);
