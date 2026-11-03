/*
 * Student Name: Riya Chaudhary
 * Roll Number: 2510303439
 * Course: B.Tech CSE
 * Section: C
 * Subject: JavaScript Programming Lab (BCS354)
 * Assignment: 9, Task: 3
 */

let noteBox = document.getElementById("noteBox");
let saveBtn = document.getElementById("saveBtn");

let savedNote = localStorage.getItem("note");
if (savedNote) {
  noteBox.value = savedNote;
}

saveBtn.addEventListener("click", function () {
  localStorage.setItem("note", noteBox.value);
});
