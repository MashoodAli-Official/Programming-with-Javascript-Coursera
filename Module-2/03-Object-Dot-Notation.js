// Object in JavaScript, an object is a collection of properties where each property is defined as a key-value pair.
// An object can be created using object literal notation or the Object constructor.
// Object and its properties can be accessed using dot notation or bracket notation.

var gamer = {
    name: "John",
    age: 25,
    score: 1000,
    isActive: true,
    games: ["Halo", "Call of Duty", "Fortnite"],
};
console.log(gamer); // Output: { name: 'John', age: 25, score: 1000, isActive: true, games: [ 'Halo', 'Call of Duty', 'Fortnite' ] }
console.log(gamer.name); // Output: John
console.log(gamer["age"]); // Output: 25
console.log(gamer.games[1]); // Output: Call of Duty

// Adding a new property to the object
gamer.level = 5;
console.log('After adding new property',gamer); // Output: { name: 'John', age: 25, score: 1000, isActive: true, games: [ 'Halo', 'Call of Duty', 'Fortnite' ], level: 5 }

// Modifying an existing property
gamer.score = 2500;
console.log('After modifying the existing property: ',gamer.score); 

// After deleting a existing property
delete gamer.isActive;
console.log('After deleting a property: ',gamer); // Output: { name: 'John', age: 25, score: 2500, games: [ 'Halo', 'Call of Duty', 'Fortnite' ], level: 5 }