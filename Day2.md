
# Learning sprint (1), week (1), day (5) delieverable

## Task requirements

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

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-the-plus-equals-operator

## Day2
### I leanred About Some Basic Advance Topics  In Java Script Which Is:

#### 1-Expressions 
##### We Dsicussed What Is Expressions ,And How To Remember Values Of Expressions By Declaring Varibales And Assign The Values To Them ,Discusses The Difference Between The const And let Keywords .
#### 2-Arrays
##### Here I'm Leaned How Wo Declare Arrays And Using Some Methodes Like :length,slice,include,sort,push,pop And How every Methode Work .
#### 3-Objects
#####  Here I'm Leaned How Wo Declare Objects And How To Access Them And Add Properties And How To Access These Properties.

## Day3
### In This Day We Reveiw All What We Have Learned So Far And Practice It By Some Exercises For These Topics
