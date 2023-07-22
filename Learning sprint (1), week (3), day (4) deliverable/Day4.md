
# Learning sprint (1), week (3), day (4) 
## Sections that have been studied on this day
### Section 1: Advanced Scope
#### illustrates the potential semantic issues of using const,  identifies situations where const can be useful,  the concept of hoisting and clarifies what is actually happening in background , and discuss the common saying "let doesn't hoist"

### Section 2: Closure
####  discusses the context of closure in JavaScript in relation to functional programming languages,and what it means to close over variables and indicates where in a function it is occuring, distinguishes between what it means to close over a variable instead of a value, then    introduces the module pattern , discusses incompatibility issues with the ES6 module system and Node.js, then illustrate the two styles of importing ES6 modules. 


# Learning sprint (1), week (3), day (4) delieverables

## ADVANCED SCOPE:

### QUESTION #1

Given the following code snippet and **explain what's happening**.

```javascript
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log("value of [i] is: ", i);
    }, 100);
}
```

The current output is: "value of [i] is: 5" five times.

The output should be: 

"value of [i] is: ", 0 "value of [i] is: ", 1 "value of [i] is: ", 2 "value of
[i] is: ", 3 "value of [i] is: ", 4

Without changing anything in the for loop's code itself, provide a solution to
fix it.

### the solution 
```js
for (var i = 0; i < 5; i++) {
  function greed (index) {
    setTimeout(function() {
      console.log("value of [i] is: ", index);
    }, 100);
    greed(i);
  }
}
```

-------------------------------------------------------------------

## ADVANCED SCOPE:

### QUESTION #2

Given the following code snippet and **explain what's happening**. 

```javascript

for (let i = 0; i < 5; i++) {
   let array = [];
   array.push(i);
   console.log("Current array is: ", array)
}

```

The current output is: 

"Current array is: [ 0 ]" "Current array is: [ 1 ]" "Current array is: [ 2 ]"
"Current array is: [ 3 ]" "Current array is: [ 4 ]".

The output should be: "Current array is: [0, 1, 2, 3, 4]".

Provide a solution to fix it. 

### the solution 
```js
let array = [];
for (let i = 0; i < 5; i++) {
   array.push(i);
   console.log("Current array is: ", array);
}
```



-------------------------------------------------------------------

## ADVANCED SCOPE:

### QUESTION #3

Given the following code snippet and **explain what's happening**. 

```javascript

let functions = [];

for (var i = 0; i < 5; i++) {
  functions.push(() => {
    console.log("Current value of i is:", i);
  });
}

functions.forEach((func) => func());

```

The current output is: 

"Current value of i is: 5" "Current value of i is: 5" "Current value of i is: 5"
"Current value of i is: 5" "Current value of i is: 5"

The output should be: 

"Current value of i is: 0" "Current value of i is: 1" "Current value of i is: 2"
"Current value of i is: 3" "Current value of i is: 4"

Provide a solution to fix it. 

### the solution 
```js
let functions = [];

for (let i = 0; i < 5; i++) {
  functions.push(() => {
    console.log("Current value of i is:", i);
  });
}

functions.forEach((func) => func());
```

-------------------------------------------------------------------

## CLOSURE:

### QUESTION #1

Create a function called `privateCounter()` that behaves like a private counter.
The function should not have any public variables, and the count should only be
accessible through a closure. It should have two methods: `increment()` and
`getCount()`. The `increment()` method should increment the count, and
`getCount()` should return the current count.

### the solution 
```js
function privateCounter (){
  let count = 0;

  const increment = () => {
    count++; 
  };

  const getCount = () => {
    return count; 
  };

  const funs ={
    incrementFun:increment, 
    getContFun:getCount
  };
  return funs;
};


const counter = privateCounter();
counter.getContFun();
counter.incrementFun;
counter.getContFun();

```

-------------------------------------------------------------------

## CLOSURE:

### QUESTION #2

Write a JavaScript function called `generateFibonacci(count)` that returns a
closure. The closure should generate the next number in the Fibonacci sequence
each time it is called. The `generateFibonacci` function should take a parameter
`count` that determines how many times the closure will generate the next
number, and it should use recursion for this purpose.

### the solution 
```js
function generateFibonacci (count){
  let current = 0;
  let next = 1;
  let remainingCount = count;

  const fibonacciClosure = () => {
    if (remainingCount <= 0) {
      return undefined; // No more numbers to generate
    }

    remainingCount--;

    const result = current;
    const sum = current + next;
    current = next;
    next = sum;
    return result;
  };

  return fibonacciClosure;
};

// Usage example:
const generateNextFibonacci = generateFibonacci();
for (let i = 0; i < 10; i++) {
  console.log(generateNextFibonacci(10));
}


```









