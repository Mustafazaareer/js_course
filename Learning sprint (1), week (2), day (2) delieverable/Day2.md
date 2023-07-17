# Learning sprint (1), week (2), day (2) 
## Sections that have been studied on this day
### Section 1: Closure
#### It was the best part of this course was where we discussed terms such as ,,,,, while writing code to apply these concepts in practice, also learning how to keep information that is permanently linked to a function


# Learning sprint (1), week (2), day (2) delieverables

### Tasks : Learning sprint (1), week (2), day (2) delieverables
[click here](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/edit/main/learning-sprint-1/week2-day2-tasks/tasks.md)

## Questions 



### Question 1:

Write a closure named createCounter that takes an initial value start and returns a function. 
The returned function, when invoked, should increment the counter by 1 and return the updated value.


```js
function createIncreamentFunction(initioalValue){
    let counter = initioalValue;
    function increament(){
        counter++;
        console.log(counter);
    }
    return increament;
}

const IncreaseCounter=createIncreamentFunction(5);

IncreaseCounter();
IncreaseCounter();
IncreaseCounter();
IncreaseCounter();
}
```

-------------------------------------------------------------------
### Question 2:

Write a closure named calculateAverage that takes an array of numbers, nums, and returns a function. 
The returned function, when invoked, should calculate and return the average of the numbers in the array.


```js
function calculateAverage(arr){
    let array = arr;
    function average(){
        let total =0;
        for(let i=0;i<array.length;i++){
            total +=array[i];
        }
        console.log(total/array.length);
        return total/array.length;
    }
    return average;
}

const getAverage = calculateAverage([2,3,4,5,6]);

let avg =getAverage();
console.log(avg);
```

-------------------------------------------------------------------
### Question 3: 

Write a closure named powerOf that takes a base number base and returns a function. 
The returned function, when invoked with an exponent exp, should calculate and return the result of base raised to the power of exp.


```js
 function powerOf(num,exp){
        let baseNum =num;
        const exponent=exp;
        function power(){
            console.log(Math.pow(baseNum,exponent));
            return Math.pow(baseNum,exponent);
        }
        return power;
    }
    
    const getPowerOf = powerOf(10,5);
    
    let power =getPowerOf();
    console.log(power);
```

-------------------------------------------------------------------
### Question 4: 

Write a closure named compose that takes multiple functions as arguments and returns a new function. 
The returned function should apply the provided functions in reverse order, passing the result of each function as an argument to the next function.


```js
 fun1 =(num1)=>num1*num1;
fun2 =(num2)=>num2*num2;

function compose(firstFun,secondFun){
        let fun1=firstFun;
        let fun2=secondFun;
        function composition(){
            let arrFunctions=[fun2(fun1(3)),fun1(fun2(2))];
            console.log(arrFunctions);
            return arrFunctions;
        }
        return composition;
    }
    
    const getCompose = compose(fun1,fun2);
    
    let result =getCompose();
    console.log(result);
```


