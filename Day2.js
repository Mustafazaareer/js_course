// profile-lookup


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



//////////////////////////////////////////////////

copy-array-items-using-slice

function forecast(arr) {
  // Only change code below this line
  let arr1=arr.slice(2,4)
  return arr1;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//////////////////////////////////////////////////

combine-arrays-with-the-spread-operator

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ["learning",...fragment, 'is', 'fun']; // Change this line
  return sentence;
}

console.log(spreadOut());




