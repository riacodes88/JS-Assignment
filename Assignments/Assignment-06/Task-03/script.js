/*
 * Student Name: Riya Chaudhary
 * Roll Number: 2510303439
 * Course: B.Tech CSE
 * Section: C
 * Subject: JavaScript Programming Lab (BCS354)
 * Assignment: 6, Task: 3
 */

let badText = "{name: Rohan}";

try {
  JSON.parse(badText);
} catch (err) {
  console.log("Invalid JSON");
}
