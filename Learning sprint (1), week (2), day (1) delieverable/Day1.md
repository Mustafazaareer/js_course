# Learning sprint (1), week (2), day (1) 
## Sections that have been studied on this day
### Section 1: Introduction 
### Will introduces the agenda for the course, defines the purpose of the course that differs for mid level and senior level engineers, then explains how this version of the course is an improvement to version one.
### Section 2: DOM
#### understand how functions scope the thread of execution and memory and understand the consecpt call stack to explain how JavaScript keeps track of the thread of execution..
### Section 3: Functions & Callbacks
#### Discusses why we need functions and the higher order functions and how it works backstage.


## Task requirements
### Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem.

## Requierments 

Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

Note: Your function should not use any kind of for or while loops or the forEach() function. [click here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem) 

### The Solution :
```js
const squareList = arr => {
  // Only change code below this line
   const newArray = arr.filter((num)=>{if(num >=0 && Number.isInteger(num)){
     return num;
   }});
   const desiredArray = newArray.map((number)=>{
     return number*number;
   })
  return desiredArray;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
```
### Second Task: Apply Functional Programming to Convert Strings to URL Slugs

## Requierments 

Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

The input is a string with spaces and title-cased words

The output is a string with the spaces between words replaced by a hyphen (-)

The output should be all lower-cased letters

The output should not have any spaces. [click here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs) 



### The Solution :
```js
// Only change code below this line

function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");}

// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
```
### Third Task : Learning sprint (1), week (2), day (1) delieverables
[click here](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day1-tasks/tasks.md)

## Questions 
### Question 1: Functions and Callbacks

Implement a JavaScript function called mapAsync that takes an array and a callback function. 
The function should map each element of the array to a new value using the callback function 
asynchronously. 

The final result should be returned as a Promise.

```js
 async function callBack  (arr){
    const newArray = await arr.map((ele)=>ele*ele)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(newArray);
        }, 300);
      });
 }

function mapAsync(arr,callBack){
    callBack(arr)
    .then((result)=>{console.log(result);})
    .catch((error) => { console.error(error);});;
}

mapAsync([1,2,3],callBack);
```


-------------------------------------------------------------------
### Question 2: Call Stack and Recursion

Write a JavaScript function called sumRange that calculates the sum of all integers in a given range. 
The function should use recursion to handle the calculation and demonstrate understanding of the call stack.

```js
 function sumRange(start, end) {
  if (start === end) {
    return start;
  } else {
    return start + sumRange(start + 1, end);
  }
}
```
-------------------------------------------------------------------




