/*
 * Student Name: Riya Chaudhary
 * Roll Number: 2510303439
 * Course: B.Tech CSE
 * Section: C
 * Subject: JavaScript Programming Lab (BCS354)
 * Assignment: 11, Task: 1
 */

let level = "outer";

{
  let level = "inner";
  console.log(level);
}

console.log(level);
