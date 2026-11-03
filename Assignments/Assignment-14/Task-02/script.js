/*
 * Student Name: Riya Chaudhary
 * Roll Number: 2510303439
 * Course: B.Tech CSE
 * Section: C
 * Subject: JavaScript Programming Lab (BCS354)
 * Assignment: 14, Task: 2
 */

let timerId = setTimeout(function () {
  console.log("Not shown");
}, 1000);

clearTimeout(timerId);
console.log("Cancelled");
