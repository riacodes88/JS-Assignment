# Assignment 15: Promises and async/await with Local Data

## 1. Experiment Title

Promises, async/await and Loading Local Data as a Promise.

## 2. Aim

To create a Promise that resolves or rejects, use async/await with try and catch, and load local data as a Promise.

## 3. Software / Tools Required

- Programming Language: JavaScript (ES6+)
- Web Browser: Google Chrome (with the Console in Developer Tools)
- IDE / Text Editor: Visual Studio Code (VS Code)

## 4. Theory

A Promise represents a value that will be available later, either successfully or with an error.

The following concepts are used in this experiment:


1. A Promise is created with new Promise((resolve, reject) => { ... }). resolve(value) completes it successfully and reject(error) completes it with an error. then() handles the value and catch() handles the error.

2. An async function always returns a Promise, and await pauses it until a Promise finishes. Errors from a rejected Promise are caught with try and catch. setTimeout inside a Promise can simulate loading data after a delay.


## 5. Algorithm / Procedure

### Task 1: Promise resolves

1. Start the program.

2. Create checkMarks(marks) returning a Promise.

3. Resolve with marks for 0 to 100, otherwise reject with Error("Marks out of range").

4. Call checkMarks(80) and print the value.

5. Stop.


### Task 2: Promise rejects

1. Start the program.

2. Create checkMarks(marks) as before.

3. Call checkMarks(120).

4. Print the error message in catch.

5. Stop.


### Task 3: async/await with try and catch

1. Start the program.

2. Create checkMarks(marks) as before.

3. Create async function run().

4. In try, print await checkMarks(65), then await checkMarks(-5).

5. In catch, print "Caught: " and the message.

6. Call run().

7. Stop.


### Task 4: Load local users

1. Start the program.

2. Create getUsers() returning a Promise that resolves after 100 ms with three users.

3. Create an async function that awaits getUsers().

4. Print each user name.

5. Call the function.

6. Stop.


## 6. Input

The following values are used in the experiment:


### Task 1:
marks = 80.


### Task 2:
marks = 120.


### Task 3:
marks = 65 and -5.


### Task 4:
Users = Asha, Rohan, Meera.


## 7. Output

### Task 1:
```text
80
```


### Task 2:
```text
Marks out of range
```


### Task 3:
```text
65
Caught: Marks out of range
```


### Task 4:
```text
Asha
Rohan
Meera
```


---

**Result:** Promises and async/await were successfully used to handle success, errors and delayed local data.
