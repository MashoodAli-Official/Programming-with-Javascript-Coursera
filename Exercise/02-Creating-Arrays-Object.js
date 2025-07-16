// Simple example of code where we create an array and an object in JavaScript

var eGames = []; // creating an empty array
eGames.push("Call of Duty", "Assassin creed", "Asphalt",); // adding an element to the array
console.log("Games Array: ", eGames); // logging the array to the console

var newGamer = {} // empty object
console.log("New Gamer Object: ", newGamer); // logging the empty object to the console
newGamer.name = "Harry"; // adding a string property to the object
newGamer.age = 25; // adding a number property to the object
newGamer.userAccount = true; // adding a boolean property to the object
newGamer.games = eGames; // adding an array property to the object
console.log("Gamer Object: ", newGamer); // logging the object to the console
