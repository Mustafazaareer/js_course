# Learning sprint (1), week (2), day (3) 
## Sections that have been studied on this day
### Section 1: Async JavaScript
#### Will explain what issues could be posed by having only a single thread of execution when calling to an API. The additional features on top of JavaScript that have to be introduced to explain the functionality of a setTimeOut function are defined as web browser or Node background APIs, promises, and the event loop, callback/task queue, and microtask queue.
### Explain how java script interact with web browser features.
### Deep understanding how to write a perfect code and determind the oreder of execution to promises functions "facade functions".
### Section 2: Promises
#### Explain how funcion fetch work and how it linked with Network Request feature in web browser ,and what then word do and how it work.
#### Explain by diagrams how java script thread determind what funcion to get wither if it from call back queue or from micro queue 


### Tasks : Learning sprint (1), week (2), day (3) delieverables
[click here](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day3-tasks/tasks.md)

## Questions 

# Learning sprint (1), week (2), day (3) delieverables

## Question 1:

You are given a function `executeInSequenceWithCBs` and some code. The task is to
modify the `executeInSequenceWithCBs` function so that it runs and executes all
the tasks inside the asyncTasks array. 

The function should return an array of messages obtained from each task's
execution.

You are only allowed to change the `executeInSequenceWithCBs` function or add new
functions/code. You cannot modify the tasks' functions.

```javascript


    function callback(message){
        console.log(message);
    }
    

    const task1 = (cb) => setTimeout(() => {
        const message = "Task 1 has executed successfully!";
        cb(message);
    }, 3000)
    
    const task2 = (cb) => setTimeout(() => {
        const message = "Task 2 has executed successfully!";
        cb(message);
    }, 0)
    
    const task3 = (cb) => setTimeout(() => {
        const message = "Task 3 has executed successfully!";
        cb(message);
    }, 1000)
    
    const task4 = (cb) => setTimeout(() => {
        const message = "Task 4 has executed successfully!";
        cb(message);
    }, 2000)
    
    const task5 = (cb) => setTimeout(() => {
        const message = "Task 5 has executed successfully!";
        cb(message);
    }, 4000)
    
    const asyncTasks = [task1, task2, task3, task4, task5];
    
    async function test(task,callBack){
        console.log(await task(callback));
    }
    test(task1,callback);

    const executeInSequenceWithCBs = async (tasks, callback) => {
        tasks.map(async(task)=>{await task(callback)})
    }
    
    executeInSequenceWithCBs(asyncTasks,callback);

```

-------------------------------------------------------------------

## Question 2:

You are given a function called `executeInParallelWithPromises`, which takes an
array of APIs (represented by objects). 

Your task is to write code that fetches the data of each API in parallel using
promises. In Parallel means that the api which resolves first, returns its value
first, regardless of the execution order. 

The output of the `executeInParallelWithPromises` function should be an array
containing the results of each API's execution.

Each result should be an object with three keys: `apiName`, `apiUrl`, and
`apiData`..

```javascript
    const apis = [
        {
            apiName: "products", 
            apiUrl: "https://dummyjson.com/products",
        }, 
        {
            apiName: "users", 
            apiUrl: "https://dummyjson.com/users",
        }, 
        {
            apiName: "posts", 
            apiUrl: "https://dummyjson.com/posts",
        }, 
        {
            apiName: "comments", 
            apiUrl: "https://dummyjson.com/comments",
        }
    ]
    
    const executeInParallelWithPromises = async(apis) => {
        let newApi = apis.map(async(api)=>{
            await fetch(api.apiUrl).then((result)=>{apis.apiData=result.body;console.log(result.body)}).catch((err)=>{console.log(err)});
            return newApi;
        })
    }
    executeInParallelWithPromises(apis);

```

-------------------------------------------------------------------
## Question 3: 

You are given a function called `executeInSequenceWithPromises`, which takes an
array of APIs (represented by objects). 

Your task is to write code that fetches the data of each API sequentially (one
after the other) using promises. 

In Sequence means that the api which executes first, returns its value
first.

The output of the `executeInSequenceWithPromises` function should be an array
containing the results of each API's execution.

Each result should be an object with three keys: `apiName`, `apiUrl`, and
`apiData`.

```javascript

    const apis = [
        {
            apiName: "products", 
            apiUrl: "https://dummyjson.com/products",
        }, 
        {
            apiName: "users", 
            apiUrl: "https://dummyjson.com/users",
        }, 
        {
            apiName: "posts", 
            apiUrl: "https://dummyjson.com/posts",
        }, 
        {
            apiName: "comments", 
            apiUrl: "https://dummyjson.com/comments",
        }
    ]
    
    const executeInSequenceWithPromises = async(apis) => {
        
        let newApi = apis.map(async(api)=>{
            await fetch(api.apiUrl).then((result)=>{apis.apiData=result.body;console.log(result.body)}).catch((err)=>{console.log(err)});
            return newApi;
        })
    }
        
    
    executeInSequenceWithPromises(apis);

```
