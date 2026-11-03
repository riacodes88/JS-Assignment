# Assignment 7: Constructor Functions and Classes

## 1. Experiment Title

Creating Objects with Constructor Functions, Classes and Prototypes.

## 2. Aim

To create objects with a constructor function and with an ES6 class, and to add a method through the prototype.

## 3. Software / Tools Required

- Programming Language: JavaScript (ES6+)
- Web Browser: Google Chrome (with the Console in Developer Tools)
- IDE / Text Editor: Visual Studio Code (VS Code)

## 4. Theory

Constructors and classes are templates used to create many similar objects.

The following concepts are used in this experiment:


1. A constructor function is called with new and uses this to save values on the new object. An ES6 class uses the class keyword with a constructor method and other methods.

2. A method added to Constructor.prototype is shared by all objects created from that constructor, so it is stored only once in memory.


## 5. Algorithm / Procedure

### Task 1: Constructor function

1. Start the program.

2. Create function Student(name, marks) saving both on this.

3. Create new Student("Asha", 88).

4. Print the name and marks on separate lines.

5. Stop.


### Task 2: ES6 class

1. Start the program.

2. Create class Book with a constructor(title, pages).

3. Add method summary() returning title + " has " + pages + " pages".

4. Create Book("Algorithms", 320) and print the summary.

5. Stop.


### Task 3: Prototype method

1. Start the program.

2. Create the constructor function Student(name, marks).

3. Add result() to Student.prototype: Pass for marks >= 40, otherwise Fail.

4. Create Asha with marks 88 and print the result.

5. Stop.


## 6. Input

The following values are used in the experiment:


### Task 1:
name = Asha; marks = 88.


### Task 2:
title = Algorithms; pages = 320.


### Task 3:
name = Asha; marks = 88.


## 7. Output

### Task 1:
```text
Asha
88
```


### Task 2:
```text
Algorithms has 320 pages
```


### Task 3:
```text
Pass
```


---

**Result:** Objects were successfully created using a constructor function, an ES6 class and a prototype method.
