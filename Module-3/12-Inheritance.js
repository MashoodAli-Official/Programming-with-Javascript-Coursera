// Inheritance in JavaScript
// Inheritance is revolving the Prototype. A prototype is an object that other objects inherit properties and methods from.
// Inheritance allows one class to inherit properties and methods from another class and object.
// This helps in reusing code and creating a hierarchy of classes.

// Define a new object
var superHero = {
    name: "Superman",
    age: 30,
    power: true
};

// Create a new object that inherits from superHero
// This means superHero1 will have all properties of superHero
var superHero1 = Object.create(superHero);
console.log(`The name of superhero is ${superHero1.name}, He is ${superHero1.age} years old, Can fly: ${superHero1.power}`);

// We can also Edit/add properties to the parent object
var superHero2 = Object.create(superHero);
superHero2.name = "Ironman";
superHero2.age = 35;
console.log(`The name of superhero is ${superHero2.name}, He is ${superHero2.age} years old, Can fly: ${superHero2.power}`);