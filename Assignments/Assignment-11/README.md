# Assignment 11: Scope and Closures

## 1. Experiment Title

Block Scope, Global Scope and Closures.

## 2. Aim

To explain block scope and global scope, and to use a function that returns a function that keeps a value between calls.

## 3. Software / Tools Required

- Programming Language: JavaScript (ES6+)
- Web Browser: Google Chrome (with the Console in Developer Tools)
- IDE / Text Editor: Visual Studio Code (VS Code)

## 4. Theory

Scope decides where a variable can be used in a program.

The following concepts are used in this experiment:


1. A variable declared with let or const inside a block { } exists only in that block (block scope). A variable declared outside every function is global and can be used inside functions.

2. A closure is a function that remembers the variables of the function in which it was created. In a counter, the inner function keeps count alive between calls.


## 5. Algorithm / Procedure

### Task 1: Block scope

1. Start the program.

2. Declare let level = "outer".

3. Inside a block declare let level = "inner" and print it.

4. After the block print level again.

5. Stop.


### Task 2: Closure counter

1. Start the program.

2. Create makeCounter() that sets count = 0.

3. Return a function that adds 1 to count and returns it.

4. Call the returned function twice and print each result.

5. Stop.


### Task 3: Global scope

1. Start the program.

2. Declare const school = "Sample College" outside any function.

3. Create showSchool() that prints "Welcome to " + school.

4. Call showSchool().

5. Stop.


## 6. Input

The following values are used in the experiment:


### Task 1:
Values = outer and inner.


### Task 2:
Initial count = 0.


### Task 3:
school = Sample College.


## 7. Output

### Task 1:
```text
inner
outer
```


### Task 2:
```text
1
2
```


### Task 3:
```text
Welcome to Sample College
```


---

**Result:** Block scope, global scope and closures were successfully demonstrated with working programs.
