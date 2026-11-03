# Assignment 8: Inheritance, Methods and Composition

## 1. Experiment Title

Class Inheritance, Methods and Object Composition.

## 2. Aim

To use extends to make a child class, write a method that checks a value, and place one object inside another.

## 3. Software / Tools Required

- Programming Language: JavaScript (ES6+)
- Web Browser: Google Chrome (with the Console in Developer Tools)
- IDE / Text Editor: Visual Studio Code (VS Code)

## 4. Theory

Classes can reuse code from other classes and can contain other objects.

The following concepts are used in this experiment:


1. A child class created with extends inherits the properties and methods of the parent class. super() calls the parent constructor so that the parent's values are set first.

2. Composition means an object holds another object as one of its properties (a Car has an Engine). A method can compare a given value with a stored value and return true or false.


## 5. Algorithm / Procedure

### Task 1: Inheritance with extends

1. Start the program.

2. Create class Person with greet() returning "Hi, I am " + name.

3. Create class Teacher extends Person with a subject.

4. Create Teacher Anita (Maths) and print her greeting.

5. Stop.


### Task 2: Locker with checkPin

1. Start the program.

2. Create class Locker with the pin 1234.

3. Add checkPin(number) returning true if number equals the pin, otherwise false.

4. Print checkPin(1111) and checkPin(1234).

5. Stop.


### Task 3: Composition: Car has an Engine

1. Start the program.

2. Create class Engine that stores a power.

3. Create class Car that builds an Engine from its power.

4. Add start() returning "Car starts with " + power + " HP".

5. Create Car(150) and print start().

6. Stop.


## 6. Input

The following values are used in the experiment:


### Task 1:
name = Anita; subject = Maths.


### Task 2:
pin = 1234; tests = 1111 and 1234.


### Task 3:
power = 150.


## 7. Output

### Task 1:
```text
Hi, I am Anita
```


### Task 2:
```text
false
true
```


### Task 3:
```text
Car starts with 150 HP
```


---

**Result:** Inheritance, a pin-checking method and composition were successfully implemented using JavaScript classes.
