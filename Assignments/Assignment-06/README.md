# Assignment 6: JSON Text

## 1. Experiment Title

Converting Between Objects and JSON Text.

## 2. Aim

To convert an object to JSON text, convert JSON text back to an object, and catch invalid JSON.

## 3. Software / Tools Required

- Programming Language: JavaScript (ES6+)
- Web Browser: Google Chrome (with the Console in Developer Tools)
- IDE / Text Editor: Visual Studio Code (VS Code)

## 4. Theory

JSON (JavaScript Object Notation) is a text format used to store and exchange data.

The following concepts are used in this experiment:


1. JSON.stringify() converts a JavaScript object into JSON text and JSON.parse() converts JSON text back into an object. In JSON, property names and text values must be written in double quotes.

2. JSON.parse() throws an error when the text is not valid JSON. A try block runs the risky code and the catch block runs when an error occurs.


## 5. Algorithm / Procedure

### Task 1: stringify

1. Start the program.

2. Create an object with name Rohan and marks [70, 80].

3. Convert it with JSON.stringify.

4. Print the text.

5. Stop.


### Task 2: parse

1. Start the program.

2. Store the text {"city":"Pune","pin":411001}.

3. Convert it with JSON.parse.

4. Print the city.

5. Stop.


### Task 3: Invalid JSON with try and catch

1. Start the program.

2. Store the invalid text {name: Rohan}.

3. Call JSON.parse inside a try block.

4. Print Invalid JSON in the catch block.

5. Stop.


## 6. Input

The following values are used in the experiment:


### Task 1:
name = Rohan; marks = [70, 80].


### Task 2:
JSON text = {"city":"Pune","pin":411001}.


### Task 3:
Text = {name: Rohan}.


## 7. Output

### Task 1:
```text
{"name":"Rohan","marks":[70,80]}
```


### Task 2:
```text
Pune
```


### Task 3:
```text
Invalid JSON
```


---

**Result:** Objects were successfully converted to JSON text and back, and invalid JSON was handled with try and catch.
