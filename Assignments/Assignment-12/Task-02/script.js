/*
 * Student Name: Riya Chaudhary
 * Roll Number: 2510303439
 * Course: B.Tech CSE
 * Section: C
 * Subject: JavaScript Programming Lab (BCS354)
 * Assignment: 12, Task: 2
 */

function formatMarks(marks, callback) {
  return callback(marks);
}

let output = formatMarks(76, (m) => "Marks: " + m + "/100");
console.log(output);