/*
 * Student Name: Riya Chaudhary
 * Roll Number: 2510303439
 * Course: B.Tech CSE
 * Section: C
 * Subject: JavaScript Programming Lab (BCS354)
 * Assignment: 14, Task: 3
 */

let count = 0;

let id = setInterval(function () {
  count++;
  console.log("Tick " + count);

  if (count == 3) {
    clearInterval(id);
  }
}, 200);
