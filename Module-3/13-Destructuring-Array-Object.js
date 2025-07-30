// Destructuring Arrays and Objects
// Destructuring allows unpacking values from arrays or properties from objects into distinct variables.

// Example of Array Destructuring
const fruits = ['apple', 'banana', 'cherry'];
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1); // Output: apple
console.log(fruit2); // Output: banana
console.log(fruit3); // Output: cherry


// Example of Object Destructuring
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
const { name, age, city } = person;
console.log(name); // Output: John
console.log(age); // Output: 30
console.log(city); // Output: New York