/*
 * Student Name: Riya Chaudhary
 * Roll Number: 2510303439
 * Course: B.Tech CSE
 * Section: C
 * Subject: JavaScript Programming Lab (BCS354)
 * Assignment: 4, Task: 3
 */

function billWithTax(amount, taxRate = 0.18) {
  return amount + amount * taxRate;
}

console.log(billWithTax(100));
