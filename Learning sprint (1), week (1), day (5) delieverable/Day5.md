
# Learning sprint (1), week (1), day (5) 

## Sections that have been studied on this day
### Section 1: Data Fetching & Promises
#### - Discusses How To Using The Fetch Function To Load Data From An API Endpoint On The Internet. If The Request Is Successful, The API Will Respond With Data Contained In A JSON Object.
#### - We Discusses The States Of A Promise, Including Pending, Fulfilled, And Rejected ,And Where To Use Promises.
#### -  Demonstrates Using The Await Operator To Wait For A Promise And Obtain Its Resulting Value. If The Await Operator Is Not Used, JavaScript Will Return The Promise Object Without The Value Of The Promise.
### Section 2: Destructuring Dataf
#### It Is A Feature That Came Along With ES6. Destructuring Is A JavaScript Expression That Makes It Possible To Unpack Values From Arrays, Or Properties From Objects, Into Distinct Variables. That Ss, We Can Extract Data From Arrays And Objects And Assign Them To Variables.

### Section 3 : Async
#### Using And Combining Async Fetching , The Async Function Also Needs To Be Awaited To Retrieve The Contents Of The Returned Promise.
### Section 4 : Modules
#### Discusses The Used Of Modules In JavaScript Code Of Splitting Large Codebases Into Multiple Smaller Files Using Modules.

### Create A Web Page That Fetches Data From The [Rick and Morty API](https://rickandmortyapi.com/documentation/#get-all-characters), And Displays A List Of Characters.

### Requirements:

- Use The Fetch API (In Async/Await Format) To Retrieve The Character Data From The Following Endpoint: `https://rickandmortyapi.com/api/character`.
- Handle Any Potential Errors That May Occur During The API Request And Display An Error Message On The Webpage If An Error Occurs.
- Only Display The List Of Characters Whose Status Is "Alive" (filter out other status types). *Hint: use the query parameter `status=alive`.*
- If the number of characters returned is greater than 50, only display the first 50 characters returned.
- Once the character data is retrieved successfully, iterate through the list of characters and create `<li>` elements for each alive character and display the character's: **name**, **image**, **location**, **species**, and **gender**.
- Display the resulting list of alive character names on the webpage.
- Apply simple CSS styling to make the character list display properly. Write your CSS styles in the `./styles.css` file.

### HTML FILE:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Alive Character List</title>
  <link rel="stylesheet" href="./styles.css">
</head>
<body>
  <h1>Alive Character List</h1>
  <ul id="characterList"></ul>

  <script src="./script.js"></script>
</body>
</html>
```
### CSS FILE
```css
* {
    padding: 0px;
    margin: 0px;
  }
  
  body {
    background-color: gainsboro;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: aliceblue;
  }
  
  .title {
    color:black;
    font-size: 48px;
    text-align: center;
    margin: 40px;
  }
  #characterList{
    display:flex;
    flex-direction: column;
    flex-wrap:1rem;
    margin: auto;
    padding: 20px;
    margin-left:100px ;
  }
  #characterList li{
    padding-top:5px ;
    width:2400px;
    height:60px;
    margin: 10px 0;
    background: black;
    color: rgb(86, 176, 112);
  }

```
### JAVA SCRIPT FILES
```js
const getData = async()=>{
    try{
        const data=await fetch("https://rickandmortyapi.com/api/character");
        const result =await data.json();
        const chunks = result.results;
        let newData =[];
        chunks.filter((chunk)=>{
            if(chunk.status.includes('Alive')){
                newData.push(chunk);
            }
        });
        let desiredData = newData;
        if(newData.length>50){
            desiredData=newData.slice(50,newData.length-1)
        }
        console.log(desiredData)
        desiredData.map((theData)=>{
            const para = document.createElement("li");
            const node = document.createTextNode(`${theData.name},${theData.image},${theData.location},${theData.gender},${theData.species}`);
            para.appendChild(node);
            const element = document.getElementById("characterList");
            element.appendChild(para);
        })
    }
    catch(error){
        console.log(error);
    }
}
getData();
```

myOutfit();
```
