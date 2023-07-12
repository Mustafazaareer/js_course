
# Learning sprint (1), week (1), day (1) 
## Sections that have been studied on this day
### Section 1: Introduction 
### I leanred About Some Basic Conceptes In Java Script Which Is :
#### Here We Discussed Topics Such As: What is JavaScript,Where to Write JavaScript .
### Section 2: DOM
#### Here I'm Leaned About DOM And How To Use It To Deal And Mainten With Web Pages .
### Section 3: Values & Data Types
#### In This Section I Got To Know Data Types In Js and How To Declear Variables And Assigned It To Values .
### Section 4: Operators 
#### Discusses The Various Operators In JavaScript, Arithmetic Operators And Logical Operations

## Task requirements
### First Task : Compound Assignment With Augmented Multiplication

Convert the assignments for a, b, and c to use the *= operator [First Task ](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-multiplication).

## The Solution :
```js
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;
```


Create a web page that fetches data from the [Rick and Morty API](https://rickandmortyapi.com/documentation/#get-all-characters), and displays a list of characters.

### Requirements:

- Use the Fetch API (in async/await format) to retrieve the character data from the following endpoint: `https://rickandmortyapi.com/api/character`.
- Handle any potential errors that may occur during the API request and display an error message on the webpage if an error occurs.
- Only display the list of characters whose status is "alive" (filter out other status types). *Hint: use the query parameter `status=alive`.*
- If the number of characters returned is greater than 50, only display the first 50 characters returned.
- Once the character data is retrieved successfully, iterate through the list of characters and create `<li>` elements for each alive character and display the character's: **name**, **image**, **location**, **species**, and **gender**.
- Display the resulting list of alive character names on the webpage.
- Apply simple CSS styling to make the character list display properly. Write your CSS styles in the `./styles.css` file.

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
