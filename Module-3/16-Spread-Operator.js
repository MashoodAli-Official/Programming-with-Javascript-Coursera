// Spread operator in JavaScript
const numbers = [1, 2, 3, 4, 5];
const moreNumbers = [6, 7, 8, 9, 10];
// Using spread operator to combine arrays
const combinedNumbers = [...numbers, ...moreNumbers];
console.log(combinedNumbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const person = {
  name: 'John',
  age: 30
};
const address = {
  city: 'New York',
  country: 'USA'
};
// Using spread operator to merge objects
const personWithAddress = { ...person, ...address };
console.log(personWithAddress); // Output: { name: 'John', age: 30, city: 'New York', country: 'USA' }