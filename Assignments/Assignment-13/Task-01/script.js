/*
 * Student Name: Riya Chaudhary
 * Roll Number: 2510303439
 * Course: B.Tech CSE
 * Section: C
 * Subject: JavaScript Programming Lab (BCS354)
 * Assignment: 13, Task: 1
 */

let prices = [120, 45, 300];

let total = prices.reduce(function (sum, p) {
  return sum + p;
}, 0);

console.log(total);
