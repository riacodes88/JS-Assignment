# Assignment 12: Callbacks and Higher-Order Functions

## 1. Experiment Title

Passing Functions as Arguments.

## 2. Aim

To pass a function as an argument to another function and call it.

## 3. Software / Tools Required

- Programming Language: JavaScript (ES6+)
- Web Browser: Google Chrome (with the Console in Developer Tools)
- IDE / Text Editor: Visual Studio Code (VS Code)

## 4. Theory

In JavaScript, functions are values and can be passed to other functions.

The following concepts are used in this experiment:


1. A callback is a function passed as an argument to another function, which calls it when needed. A function that takes or returns another function is called a higher-order function.

2. Arrow functions are often used to write short callbacks directly inside the call.


## 5. Algorithm / Procedure

### Task 1: applyTwice

1. Start the program.

2. Create applyTwice(fn, value) returning fn(fn(value)).

3. Create addTen(n) returning n + 10.

4. Print applyTwice(addTen, 5).

5. Stop.


### Task 2: formatMarks with a callback

1. Start the program.

2. Create formatMarks(marks, callback) returning callback(marks).

3. Call it with 76 and an arrow function returning "Marks: " + marks + "/100".

4. Print the result.

5. Stop.


### Task 3: repeatAction

1. Start the program.

2. Create repeatAction(times, action) that calls action(round) for round 1 to times.

3. Call it with 3 and an arrow function printing "Round " + round.

4. Stop.


## 6. Input

The following values are used in the experiment:


### Task 1:
value = 5.


### Task 2:
marks = 76.


### Task 3:
times = 3.


## 7. Output

### Task 1:
```text
25
```


### Task 2:
```text
Marks: 76/100
```


### Task 3:
```text
Round 1
Round 2
Round 3
```


---

**Result:** Callbacks and higher-order functions were successfully used to pass functions as arguments.
