# Assignment 13: Reduce, Some, Every and Map

## 1. Experiment Title

Array Methods reduce, some, every and map.

## 2. Aim

To use reduce, some, every and map on arrays, and to keep the original array unchanged.

## 3. Software / Tools Required

- Programming Language: JavaScript (ES6+)
- Web Browser: Google Chrome (with the Console in Developer Tools)
- IDE / Text Editor: Visual Studio Code (VS Code)

## 4. Theory

Array methods process every item of an array without writing a loop.

The following concepts are used in this experiment:


1. reduce combines all items into one value, starting from an initial value. some returns true if at least one item passes a test, and every returns true only if all items pass.

2. map creates a new array by applying a function to every item. It does not change the original array.


## 5. Algorithm / Procedure

### Task 1: reduce

1. Start the program.

2. Store 120, 45 and 300 in an array.

3. Use reduce starting from 0 to add the prices.

4. Print the total.

5. Stop.


### Task 2: some and every

1. Start the program.

2. Store 72, 85, 30 and 90 in an array.

3. Use some to check whether any mark is below 40 and print the result.

4. Use every to check whether all marks are 35 or more and print the result.

5. Stop.


### Task 3: map

1. Start the program.

2. Store 72, 85, 64 and 90 in an array.

3. Use map to make a new array with every mark 5 more.

4. Print the new array and then the original array.

5. Stop.


## 6. Input

The following values are used in the experiment:


### Task 1:
prices = [120, 45, 300].


### Task 2:
marks = [72, 85, 30, 90].


### Task 3:
marks = [72, 85, 64, 90].


## 7. Output

### Task 1:
```text
465
```


### Task 2:
```text
true
false
```


### Task 3:
```text
[ 77, 90, 69, 95 ]
[ 72, 85, 64, 90 ]
```


---

**Result:** reduce, some, every and map were successfully used to process arrays, and the original array stayed unchanged.
