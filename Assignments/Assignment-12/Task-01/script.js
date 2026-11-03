/*
 * Student Name: Riya Chaudhary
 * Roll Number: 2510303439
 * Course: B.Tech CSE
 * Section: C
 * Subject: JavaScript Programming Lab (BCS354)
 * Assignment: 12, Task: 1
 */

function applyTwice(fn, value) {
  let firstResult = fn(value);
  let secondResult = fn(firstResult);
  return secondResult;
}

function addTen(n) {
  return n + 10;
}

console.log(applyTwice(addTen, 5));
