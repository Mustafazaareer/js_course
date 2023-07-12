
# Learning sprint (1), week (1), day (2) 

## Sections that have been studied on this day
### Section 1: Expressions 
#### We Dsicussed What Is Expressions ,And How To Remember Values Of Expressions By Declaring Varibales And Assign The Values To Them ,Discusses The Difference Between The const And let Keywords .
### Section 2: Arrays
#### Here I'm Leaned How Wo Declare Arrays And Using Some Methodes Like :length,slice,include,sort,push,pop And How every Methode Work .
### Section 3: Objects
#### Here I'm Leaned How Wo Declare Objects And How To Access Them And Add Properties And How To Access These Properties.

## Task requirements
### First Task: Profile Lookup .

We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.. [click here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-multiplication) 

### The Solution :
```js
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;
```
### Second Task: Concatenating Strings with the Plus Equals Operator

Build myStr over several lines by concatenating these two strings: This is the first sentence. and This is the second sentence. using the += operator. Use the += operator similar to how it is shown in the example and be sure to include a space between the two strings. Start by assigning the first string to myStr, then add on the second string . [click here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-the-plus-equals-operator) 



### The Solution :
```js
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
```
### Third Task: Use Bracket Notation to Find the Nth-to-Last Character in a String

Use bracket notation to find the second-to-last character in the lastName string. [click here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-nth-to-last-character-in-a-string)

### The Solution :
```js
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length -2]; // Change this line
```
