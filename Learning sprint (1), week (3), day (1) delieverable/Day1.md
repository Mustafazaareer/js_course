
# Learning sprint (1), week (3), day (1) 
## Sections that have been studied on this day
### Section 1: Async JavaScript
#### In this chapter, the basic data types in this java script are identified, as well as how there are some conflicting things in these types as a result of the old versions of the language.

# Learning sprint (1), week (3), day (1) delieverables

## Question 1:

Write a function called `convertStringToNumber` that converts a string to a
number using the unary plus operator. 

If the input is not a string, return an object of the input's value and type.

```javascript
function convertStringToNumber(input) {
  if (typeof input === 'string') {
    return +input;
  } else {
    return {
      value: input,
      type: typeof input
    };
  }
}
```

-------------------------------------------------------------------

## Question 2:

Write a function called `checkNaN` that takes a single argument and returns
`true` if the argument is `NaN` and `false` otherwise. 

```javascript
const checkNaN = (value) => {
  return Number.isNaN(value);
}
```

-------------------------------------------------------------------

## Question 3: 

Write a function called `isEmptyValue` that checks if a given input is an empty value (undefined,
null, or empty string). 

```javascript
function isEmptyValue(input) {
  return typeof input === "undefined" || input === null || input === '';
}
```

-------------------------------------------------------------------

## Question 4: 

Write a function called `compareObjects` that takes 2 arguments of type
`"object"` and compares them. If both arguments are equal, return `true`. If
not, return `false`.

If either argument is not of type `"object"`, the function should return an
array of the arguments. 

```javascript
function compareObjects(obj1, obj2) {
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return [obj1, obj2];
  }

  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
```

-------------------------------------------------------------------

## Question 5: 

Write a function called `complexCoercion` that takes a single argument and
checks if its type is primitive, and if so returns a coerced value according to
the rules below.

coercion rules: 
- if input is primive and:
  - if input is a number, convert to string and then return a boolean. 
  - if input is a string, return a boolean.
  - if input is `null` or `undefined`, return `false`.

If input is not a primitive type, return the argument.

```javascript
function complexCoercion(input) {
  const inputType = typeof input;

  if (inputType === 'number') {
    return Boolean(String(input));
  } else if (inputType === 'string') {
    return Boolean(input);
  } else if (input === null || input === undefined) {
    return false;
  } else {
    return input;
  }
}
```
