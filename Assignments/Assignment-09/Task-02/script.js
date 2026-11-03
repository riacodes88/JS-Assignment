/*
 * Student Name: Riya Chaudhary
 * Roll Number: 2510303439
 * Course: B.Tech CSE
 * Section: C
 * Subject: JavaScript Programming Lab (BCS354)
 * Assignment: 9, Task: 2
 */

function validateForm(name) {
  let errors = [];

  if (name === "") {
    errors.push("Name is required");
  }

  return errors;
}

console.log(validateForm("Asha"));
console.log(validateForm(""));
