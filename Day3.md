
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

## Requierments 
We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.[click here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup) 

### The Solution :
```js
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name,prop) {
  // Only change code below this line

  for(let i = 0 ; i < contacts.length ; i++){
    if(contacts[i].firstName===name){
      if(contacts[i].hasOwnProperty(prop)){
        return contacts[i][prop];
      }
       else return "No such property";
    }
  }
  return  "No such contact"; 
  // Only change code above this line
}

lookUpProfile("Akira", "likes");

```
### Second Task: Copy Array Items Using slice()

We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the string elements warm and sunny. [click here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice) 



### The Solution :
```js
function forecast(arr) {
  // Only change code below this line
  let arr1=arr.slice(2,4)
  return arr1;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```
### Third Task: Combine Arrays with the Spread Operator 

We have defined a function spreadOut that returns the variable sentence. Modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun']. [click here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/combine-arrays-with-the-spread-operator)

### The Solution :
```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ["learning",...fragment, 'is', 'fun']; // Change this line
  return sentence;
}

console.log(spreadOut());
```
