# Assignment 14: Timers and Intervals

## 1. Experiment Title

Using setTimeout, clearTimeout, setInterval and clearInterval.

## 2. Aim

To run code after a delay with setTimeout, cancel a timer, and repeat code with setInterval.

## 3. Software / Tools Required

- Programming Language: JavaScript (ES6+)
- Web Browser: Google Chrome (with the Console in Developer Tools)
- IDE / Text Editor: Visual Studio Code (VS Code)

## 4. Theory

Timers run code later or repeatedly without stopping the rest of the program.

The following concepts are used in this experiment:


1. setTimeout(function, delay) runs a function once after the delay in milliseconds, even with a delay of 0, it runs only after the current code finishes. clearTimeout(id) cancels a timer that has not run yet.

2. setInterval(function, delay) runs a function again and again after every delay, and clearInterval(id) stops it.


## 5. Algorithm / Procedure

### Task 1: setTimeout order

1. Start the program.

2. Print Start.

3. Schedule "Timer done" with setTimeout and delay 0.

4. Print End.

5. Note the order of the three lines.

6. Stop.


### Task 2: clearTimeout

1. Start the program.

2. Schedule "Not shown" with setTimeout (1000 ms) and keep its id.

3. Cancel it with clearTimeout.

4. Print Cancelled.

5. Stop.


### Task 3: setInterval

1. Start the program.

2. Set count = 0.

3. Use setInterval every 200 ms to increase count and print Tick and the count.

4. Stop it with clearInterval when count reaches 3.

5. Stop.


## 6. Input

The following values are used in the experiment:


### Task 1:
Delay = 0 ms.


### Task 2:
Delay = 1000 ms.


### Task 3:
Interval = 200 ms; stop at count = 3.


## 7. Output

### Task 1:
```text
Start
End
Timer done
```


### Task 2:
```text
Cancelled
```


### Task 3:
```text
Tick 1
Tick 2
Tick 3
```


---

**Result:** setTimeout, clearTimeout, setInterval and clearInterval were successfully used to run and stop timed code.
