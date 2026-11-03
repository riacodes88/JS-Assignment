/*
 * Student Name: Riya Chaudhary
 * Roll Number: 2510303439
 * Course: B.Tech CSE
 * Section: C
 * Subject: JavaScript Programming Lab (BCS354)
 * Assignment: 11, Task: 2
 */

function makeCounter() {
  let count = 0;

  return function () {
    count = count + 1;
    return count;
  };
}

let counter = makeCounter();

console.log(counter());
console.log(counter());