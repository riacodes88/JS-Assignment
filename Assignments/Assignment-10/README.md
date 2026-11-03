# Assignment 10: Objects and Destructuring

## 1. Experiment Title

Working with Objects and Destructuring.

## 2. Aim

To create an object, read and change its properties, and take values out of an array and an object with destructuring.

## 3. Software / Tools Required

- Programming Language: JavaScript (ES6+)
- Web Browser: Google Chrome (with the Console in Developer Tools)
- IDE / Text Editor: Visual Studio Code (VS Code)

## 4. Theory

An object stores related data as name-value pairs called properties.

The following concepts are used in this experiment:


1. Properties are read and changed with dot notation, such as student.name and student.marks = 81.

2. Array destructuring (const [first, second] = array) takes values by position. Object destructuring (const { name, roll } = object) takes values by property name.


## 5. Algorithm / Procedure

### Task 1: Object properties

1. Start the program.

2. Create the object student with name, roll and marks.

3. Print the name.

4. Change marks to 81 and print marks.

5. Stop.


### Task 2: Array destructuring

1. Start the program.

2. Store Maths, Science and English in an array.

3. Use const [first, second] = subjects.

4. Print first and second on separate lines.

5. Stop.


### Task 3: Object destructuring

1. Start the program.

2. Create student with name Rohan, roll 12 and marks 81.

3. Use const { name, roll } = student.

4. Print name and roll on separate lines.

5. Stop.


## 6. Input

The following values are used in the experiment:


### Task 1:
name = Rohan; roll = 12; marks = 78 (changed to 81).


### Task 2:
subjects = [Maths, Science, English].


### Task 3:
name = Rohan; roll = 12; marks = 81.


## 7. Output

### Task 1:
```text
Rohan
81
```


### Task 2:
```text
Maths
Science
```


### Task 3:
```text
Rohan
12
```


---

**Result:** Objects were created and changed, and values were successfully taken out of arrays and objects using destructuring.
