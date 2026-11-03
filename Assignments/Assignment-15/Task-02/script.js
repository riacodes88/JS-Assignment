/*
 * Student Name: Riya Chaudhary
 * Roll Number: 2510303439
 * Course: B.Tech CSE
 * Section: C
 * Subject: JavaScript Programming Lab (BCS354)
 * Assignment: 15, Task: 2
 */

function checkMarks(marks) {
  return new Promise(function (resolve, reject) {
    if (marks >= 0 && marks <= 100) {
      resolve(marks);
    } else {
      reject(new Error("Marks out of range"));
    }
  });
}

checkMarks(120)
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err.message);
  });
