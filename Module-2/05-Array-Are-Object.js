// Arrays are special types of objects in JavaScript

let fruits = ["apple", "banana", "cherry"];

// Internally, arrays use numeric keys like object properties
console.log(fruits[0]); // Output: apple
console.log(fruits["1"]); // Output: banana (string key works like number key)

fruits.color = "red"; // Adding a custom property like an object
console.log(fruits.color); // Output: red

console.log(typeof fruits); // Output: object