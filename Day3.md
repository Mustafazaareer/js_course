
# Learning sprint (1), week (1), day (3) 

## Sections that have been studied on this day
### Section 1: Quiz Project 
### In This Day We Reveiw All What We Have Learned So Far , We Write Some Code To Upload The Web Page Angena Give Us To Practice on Dom And How To Declear Variables And Assign Value To Them.

### Section 2: Quiz Project Functions 
#### In This Section We Learn Bundle Of Stuff :
#### - First We Learn What Is Funcion And The Structure Of The Funcion .
#### - How To Pass Parameters To The Funcion And Whats The Different Between Arguments And Values .
#### - Arrow Funcions How To Implement Them In Different Ways According To Number Of The Arguments .
#### - Recognition What Is Scope And What The Scope For Variables That Was Decleard By let ,const or var


## Task requirements
### First Task: Return a Value from a Function with Return .

## Requierments 
Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.[click here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/return-a-value-from-a-function-with-return) 

### The Solution :
```js
unction timesFive (num){
  return num*5;
}

```
### Second Task: Global Scope and Functions

Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.
Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords. [click here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice) 



### The Solution :
```js
// Declare the myGlobal variable below this line
const myGlobal =10;

function fun1() {
  // Assign 5 to oopsGlobal here
oopsGlobal =5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```
### Third Task: Local Scope and Functions

The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

Note: The console will still display ReferenceError: myVar is not defined, but this will not cause the tests to fail.[click here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/local-scope-and-functions)

### The Solution :
```js
function myLocalScope() {
  // Only change code below this line
  let myVar =22;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```
### Fourth Task: Global vs. Local Scope in Functions

Add a local variable to myOutfit function to override the value of outerWear with the string sweater. [click here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-vs--local-scope-in-functions)

### The Solution :
```js
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear ="sweater"
  // Only change code above this line
  return outerWear;
}

myOutfit();
```
