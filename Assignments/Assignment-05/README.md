# Assignment 5: Arrays, Array Methods and Nested Arrays

## 1. Experiment Title

Working with Arrays, forEach, filter and Nested Arrays.

## 2. Aim

To create an array, read its items, use forEach and filter, and read a value from an array inside an array.

## 3. Software / Tools Required

- Programming Language: JavaScript (ES6+)
- Web Browser: Google Chrome (with the Console in Developer Tools)
- IDE / Text Editor: Visual Studio Code (VS Code)

## 4. Theory

An array stores a list of values in one variable.

The following concepts are used in this experiment:


1. Array items are numbered from index 0, so marks[0] is the first item and marks.length gives the number of items. forEach runs a function once for each item.

2. filter creates a new array containing only the items for which the function returns true. An array inside an array is read with two indexes, such as grid[1][2] (row 2, column 3).


## 5. Algorithm / Procedure

### Task 1: Array length and first item

1. Start the program.

2. Store 72, 85, 64 and 90 in the array marks.

3. Print marks.length and marks[0].

4. Stop.


### Task 2: forEach

1. Start the program.

2. Store Maths, Science and English in an array.

3. Use forEach to print each subject.

4. Stop.


### Task 3: filter

1. Start the program.

2. Store 72, 85, 45 and 90 in an array.

3. Use filter to keep marks of 60 or more.

4. Print the new array.

5. Stop.


### Task 4: Nested array

1. Start the program.

2. Store [1, 2, 3] and [4, 5, 6] inside the array grid.

3. Print the number in row 2 and column 3, which is grid[1][2].

4. Stop.


## 6. Input

The following values are used in the experiment:


### Task 1:
marks = [72, 85, 64, 90].


### Task 2:
subjects = [Maths, Science, English].


### Task 3:
marks = [72, 85, 45, 90].


### Task 4:
grid = [[1, 2, 3], [4, 5, 6]].


## 7. Output

### Task 1:
```text
4
72
```


### Task 2:
```text
Maths
Science
English
```


### Task 3:
```text
[ 72, 85, 90 ]
```


### Task 4:
```text
6
```


---

**Result:** Arrays, forEach, filter and nested arrays were successfully used to store, process and read data.
