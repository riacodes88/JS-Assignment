/*
 * Student Name: Riya Chaudhary
 * Roll Number: 2510303439
 * Course: B.Tech CSE
 * Section: C
 * Subject: JavaScript Programming Lab (BCS354)
 * Assignment: 12, Task: 3
 */

function repeatAction(times, action) {
  for (let round = 1; round <= times; round++) {
    action(round);
  }
}

repeatAction(3, (r) => {
  console.log("Round " + r);
});
