/*
 * Student Name: Riya Chaudhary
 * Roll Number: 2510303439
 * Course: B.Tech CSE
 * Section: C
 * Subject: JavaScript Programming Lab (BCS354)
 * Assignment: 9, Task: 4
 */

let checkBtn = document.getElementById("checkBtn");
let result = document.getElementById("result");

checkBtn.addEventListener("click", function () {
  let chosen = document.querySelector('input[name="answer"]:checked');

  if (chosen && chosen.value === "5") {
    result.textContent = "Correct";
  } else {
    result.textContent = "Try again";
  }
});
