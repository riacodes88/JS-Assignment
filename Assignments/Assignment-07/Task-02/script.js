/*
 * Student Name: Riya Chaudhary
 * Roll Number: 2510303439
 * Course: B.Tech CSE
 * Section: C
 * Subject: JavaScript Programming Lab (BCS354)
 * Assignment: 7, Task: 2
 */

class Book {
  constructor(title, pages) {
    this.title = title;
    this.pages = pages;
  }

  summary() {
    return this.title + " has " + this.pages + " pages";
  }
}

let b1 = new Book("Algorithms", 320);
console.log(b1.summary());
