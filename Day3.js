// Return a Value from a Function with Return

function timesFive (num){
  return num*5;
}

/////////////////////////////////////////////////////

//global-scope-and-functions.

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

/////////////////////////////////////////////////////

// local-scope-and-functions

function myLocalScope() {
  // Only change code below this line
  let myVar =22;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

/////////////////////////////////////////////////////

// global-vs--local-scope-in-functions

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear ="sweater"
  // Only change code above this line
  return outerWear;
}

myOutfit();



/////////////////////////////////////////////////////

// stand-in-line

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  return arr.shift();
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


