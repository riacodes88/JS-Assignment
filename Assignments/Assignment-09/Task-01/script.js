/*
 * Student Name: Riya Chaudhary
 * Roll Number: 2510303439
 * Course: B.Tech CSE
 * Section: C
 * Subject: JavaScript Programming Lab (BCS354)
 * Assignment: 9, Task: 1
 */

let heading = document.getElementById("heading");
let btn = document.getElementById("changeBtn");

btn.addEventListener("click", function () {
  heading.textContent = "Button clicked";
});
