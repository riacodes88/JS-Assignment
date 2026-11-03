# Assignment 9: DOM, Validation, Storage and Quiz

## 1. Experiment Title

Changing a Page with the DOM, Validating Input, Using Local Storage and Building a Quiz.

## 2. Aim

To change a page with a click, check form values in code, save text in local storage, and build a small quiz.

## 3. Software / Tools Required

- Programming Language: JavaScript (ES6+)
- Web Browser: Google Chrome (with the Console in Developer Tools)
- IDE / Text Editor: Visual Studio Code (VS Code)

## 4. Theory

The DOM (Document Object Model) lets JavaScript read and change the content of a web page.

The following concepts are used in this experiment:


1. document.getElementById() finds an element and addEventListener("click", function) runs code when it is clicked. Changing textContent changes the text shown on the page.

2. A validation function checks values and returns a list of error messages. localStorage.setItem(key, value) saves text in the browser and localStorage.getItem(key) reads it back, even after the page is closed.

3. For a quiz, the checked radio button is found with document.querySelector('input[name="answer"]:checked') and its value is compared with the correct answer.


## 5. Algorithm / Procedure

### Task 1: Change heading on click

1. Start the program.

2. Create a heading Welcome and a button Change text.

3. On click, change the heading text to Button clicked.

4. Stop.


### Task 2: validateForm function

1. Start the program.

2. Create validateForm(name) that makes an empty list errors.

3. If name is empty, add "Name is required" to the list.

4. Return the list.

5. Print validateForm("Asha") and validateForm("").

6. Stop.


### Task 3: Save a note in localStorage

1. Start the program.

2. Create a text box and a Save button.

3. On Save, store the text in localStorage with the key note.

4. When the page opens, read the key note and show it in the box.

5. Stop.


### Task 4: Quiz

1. Start the program.

2. Show the question What is 2 + 3? with radio buttons 4, 5 and 6.

3. On Check answer, find the selected radio button.

4. Show Correct if the answer is 5, otherwise Try again.

5. Stop.


## 6. Input

The following values are used in the experiment:


### Task 1:
Heading = Welcome; button = Change text.


### Task 2:
Names = Asha and an empty text.


### Task 3:
Key = note.


### Task 4:
Question = What is 2 + 3?; correct answer = 5.


## 7. Output

### Task 1:
```text
Button clicked
```


### Task 2:
```text
[]
[ 'Name is required' ]
```


### Task 3:
```text
My first note
```


### Task 4:
```text
Correct
```


---

**Result:** Page content was successfully changed with the DOM, input was validated, text was saved in localStorage, and a quiz was built.
