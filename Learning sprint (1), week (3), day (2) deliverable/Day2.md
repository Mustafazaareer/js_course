# Learning sprint (1), week (3), day (2) 
## Sections that have been studied on this day
### Section 1: Static Typing
#### discusses the benefits and drawbacks of using tools like TypeScript and Flow for type checking.     and defines what inferencing is in static typing.   also defines what custom types are and explains how they can help to reduce type misassignments.    discusses benefits of static typing. 

### Section 2: Scope
#### - We discusses that in Compilation phase we have :scope manager and compiler ,and they interact with each other to determind the scopes and the visible variable in each scope .
#### - There is two stages in run any program : 
##### 1- Compilation stage 
##### 2- Execuation stage 
#### - Take examples into nested scope 
#### - reviews the difference between a variable that is undefined versus one that is undeclared.



# Learning sprint (1), week (3), day (2) delieverables

## STATIC TYPING QUESTIONS:

### QUESTION #1

Given the following promisesArray, convert the array into an object using the
`convertToObj` function.

You should apply typescript types to every promise, the input of `convertToObj`,
and the output of `convertToObj`. 

Build interfaces and types as needed.

```javascript

const sayHelloWorld = new Promise(resolve, reject => {
  resolve("Hello world!");
});

const checkBoolean = (boolean) => new Promise(resolve, reject => {
  if (boolean) {
    resolve(boolean);
  } else {
    reject(`Input is false :(`)
  }
})

const returnObj = new Promise(resolve, reject => {
  resolve({
    x: "meow",
    y: 45,
  })
})

const promisesArray = [sayHeloWorld, checkBoolean, returnObj];

const convertToObj = (array) => {
  //write your code here;
  return obj;
}

```

### The answer :
```javascript
interface HelloWorldPromise extends Promise<string> {}

interface CheckBooleanPromise extends Promise<boolean> {}

interface ReturnObjPromise extends Promise<{ x: string; y: number }> {}

type PromisesArray = [HelloWorldPromise, CheckBooleanPromise, ReturnObjPromise];

type ConvertedObject = {
  sayHelloWorld: string;
  checkBoolean: boolean;
  returnObj: { x: string; y: number };
};

const sayHelloWorld: HelloWorldPromise = new Promise((resolve, reject) => {
  resolve("Hello world!");
});

const checkBoolean = (boolean: boolean): CheckBooleanPromise =>
  new Promise((resolve, reject) => {
    if (boolean) {
      resolve(boolean);
    } else {
      reject(`Input is false :(`);
    }
  });

const returnObj: ReturnObjPromise = new Promise((resolve, reject) => {
  resolve({
    x: "meow",
    y: 45,
  });
});

const promisesArray: PromisesArray = [sayHelloWorld, checkBoolean, returnObj];

const convertToObj = async (array: PromisesArray): Promise<ConvertedObject> => {
  const [sayHelloWorldResult, checkBooleanResult, returnObjResult] = await Promise.all(array);
  const obj: ConvertedObject = {
    sayHelloWorld: sayHelloWorldResult,
    checkBoolean: checkBooleanResult,
    returnObj: returnObjResult,
  };
  return obj;
};
```

-------------------------------------------------------------------

## SCOPE & HOISTING QUESTIONS:

### QUESTION #1:

What will be the output of the following code snippet? Pick the right choice
then **justify your answer with an explanation**.

```javascript
function testScope1() {
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }
  console.log(a);
  console.log(b);
  console.log(c);
}

testScope1();

```

### The answer :

#### `1`, `ReferenceError`, `ReferenceError`   
#### Explanation
#### In the code snippet, the variables a, b, and c are declared within the scope of the if statement. However, var declarations have function scope, meaning they are accessible throughout the entire function in which they are declared. On the other hand, let and const declarations have block scope, meaning they are only accessible within the block where they are defined.

#### In the case of the testScope1 function, when the console.log(a) statement is executed, a will be accessible and its value of 1 will be printed to the console. However, when the console.log(b) statement is executed, it will result in a reference error because b is not accessible outside the if block. Similarly, the console.log(c) statement will also result in a reference error because c is not accessible outside the if block.

#### Therefore, the code will print the value of a (1) but will throw reference errors for b and c.

-------------------------------------------------------------------

### QUESTION #2:

What will be the output of the following code snippet? Pick the right choice
then **justify your answer with an explanation**.

```javascript
function testScope2() {
  console.log(a);
  console.log(b);
  console.log(c);
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }
}

testScope2();

```


### The answer :

#### `undefined`, `ReferenceError`, `ReferenceError`   
#### Explanation
#### In the code snippet, the variables a, b, and c are declared within the scope of the if statement. However,a with var declaraion statment when it declared it go to the top of the testScope2 function with value undefined until execution arrive to it inside the if statment and assign the value 1 to it , so console.log statment can see variable a but it type in undefind . On the other hand, let and const declarations have block scope, meaning they are only accessible within the block where they are defined.

#### In the case of the testScope2 function, when the console.log(a) statement is executed, a will be accessible and its value of undefined will be printed to the console. However, when the console.log(b) statement is executed, it will result in a reference error because b is not accessible outside the if block. Similarly, the console.log(c) statement will also result in a reference error because c is not accessible outside the if block.

#### Therefore, the code will print the value of a (undefined) but will throw reference errors for b and c.

-------------------------------------------------------------------

### QUESTION #3:

What will be the output of the following code snippet? Pick the right choice
then **justify your answer with an explanation**.

```javascript

function testScope3() {
  var a = 36;
  let b = 100;
  const c = 45;

  console.log([a, b, c]);

  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;

    console.log([a, b, c]);
  }

  console.log([a, b, c]);
}

testScope3();
```
### The answer :

#### `[ 36, 100, 45 ]` | `[ 1, 2, 3 ]` | `[ 1,100, 45 ]`  
#### Explanation
##### Inside the testScope3 function, three variables are declared: a using var, b using let, and c using const. These variables are scoped to the entire function.
##### The first console.log statement prints the initial values of a, b, and c, which are [36, 100, 45].
##### Inside the if statement block, new variables a, b, and c are declared and assigned new values: a = 1, b = 2, and c = 3. These new variables are distinct from the ones declared outside the if statement block due to block scoping.
##### The second console.log statement prints the values of the variables inside the if statement block, which are [1, 2, 3].
##### After the if statement block, the values of a, b, and c outside the if statement block are printed, which are [1, 100, 45]. The value of a has been reassigned to 1, but the values of b and c remain the same as their initial declarations within the function scope.
