# Learning sprint (1), week (3), day (3) 
## Sections that have been studied on this day
### Section 1: Scope & Function Expressions
#### defines and analyzes function expressions in relation to scope, discusses why named function expressions are superior to anonymous function expressions, and discusses   why people use arrow functions and brings to light a few of their flaws.  


### Section 2: Advanced Scope
#### Discusses the difference between lexical scoping and dynamic scoping,  demonstrates how dynamic scope works ,  and introduces the benefits of using the IIFE pattern, and the differentiates between situations where it is and is not useful to create block scoping, and how  to choose let or var in the contexts of performance and code communication.



# Learning sprint (1), week (3), day (3) delieverables

## Scope & Function Expressions:

### QUESTION #1

Create a function called `arrowHOF` that takes an arrow function as input and
returns a new arrow function that enhances the behavior of the input function. 

The enhanced function should accept additional arguments and execute the input
function multiple times based on these arguments.


```javascript

const exampleNormalFunc1 = (a, b, c) => {
  return a * (b + c);
}

const exampleNormalFunc2 = (x, y) => {
  return x * y;
}

const exampleNormalFunc3 = (string) => {
  return string + " " + string + " " + string + "!";
}


const arrowHOF = (normalFunc) => {
  // write your code here;
}

const hofNormalFunc1 = arrowHOF(exampleNormalFunc1);
const hofNormalFunc2 = arrowHOF(exampleNormalFunc2);
const hofNormalFunc3 = arrowHOF(exampleNormalFunc3);

console.log(hofNormalFunc1(3, 4, 5)(2)); // logs 60 twice
console.log(hofNormalFunc2(20, 35))(4); // logs 700 four times
console.log(hofNormalFunc3("Meow")()); // logs "Meow Meow Meow!" once

```
### the solution 
```javascript
const exampleNormalFunc1 = (a, b, c) => {
  return a * (b + c);
}

const exampleNormalFunc2 = (x, y) => {
  return x * y;
}

const exampleNormalFunc3 = (string) => {
  return string + " " + string + " " + string + "!";
}

const arrowHOF = (normalFunc) => {

  return (...args1) => {
    return (...args2) => {
      const repeatCount = args2[0];
      let result = ""
      for (let i = 0; i < repeatCount; i++) {
        result += normalFunc(...args1);
        if (i < repeatCount - 1) {
          result += " ";
        }
      }
      return result;
    };
  };
};
const hofNormalFunc1 = arrowHOF(exampleNormalFunc1);
const hofNormalFunc2 = arrowHOF(exampleNormalFunc2);
const hofNormalFunc3 = arrowHOF(exampleNormalFunc3);
```

-------------------------------------------------------------------
## Scope & Function Expressions:

### QUESTION #2

Build a function called `preserveThis` that takes a function as input and
returns a new arrow function that behaves the same way as the input function but
preserves the original this context when used as a method of an object.

```javascript

// Example object
const obj = {
  name: 'John',
  greet: function (greeting) {
    console.log(`${greeting}, ${this.name}!`);
  }
};

const preserveThis = (func) => {
  // write your code here;
  return func;
}

// Wrap the greet function using preserveThis
const preservedGreet = preserveThis(obj.greet);

// Call the wrapped function as a method of the object
preservedGreet('Hello'); // Output: "Hello, John!"

```

### the solution 
```javascript
const obj = {
  name: 'John',
  greet: function (greeting) {
    console.log(`${greeting}, ${this.name}!`);
  }
};

const preserveThis = (func) => (...args) => func(...args);

// Wrap the greet function using preserveThis
const preservedGreet = preserveThis(obj.greet);

// Call the wrapped function as a method of the object
preservedGreet('Hello');
```

-------------------------------------------------------------------
## Scope & Function Expressions:

### QUESTION #3

Consider the 2 following examples and distinguish the different output in each
one with them with a reasoning.

**Example 1:**

```javascript
function outer1() {
  var x = 10;

  var inner1 = function() {
    console.log(x);
  };

  inner1();
}

outer1(); // Output: 10
```

> **Reasoning for example 1's output:**

### The function outer1 is defined and contains a variable x initialized with the value 10.
### Inside outer1, there's a nested function inner1, which has access to the outer function's variable x because the function inner1 does not find variable x in it scope so it go to the outer scope and found the varible x and get its value .
### When inner1 is called inside outer1 using inner1();, it logs the value of x (which is 10) to the console.


--------

**Example 2:**

```javascript
function outer2() {
  var x = 10;

  var inner2 = function() {
    var x = 20;
    console.log(x);
  };

  inner2();
}

outer2(); // Output: 20
```

> **Reasoning for example 2's output:**
> 
### The function outer2 is defined and contains a variable x initialized with the value 10.
### Inside outer2, there's a nested function inner2, which also has a local variable x initialized with the value 20.
### When inner2 is called inside outer2 using inner2();, it logs the value of its local x (which is 20) to the console. This happens because inner2 looks for the variable x in its own scope first before checking the outer scope.





