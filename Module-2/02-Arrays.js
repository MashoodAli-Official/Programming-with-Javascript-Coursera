// Array in JavaScript
// Arrays are used to store multiple values in a single variable
// An array can hold items of any type, including numbers, strings, and even other arrays.
// Array elements can be accessed using their index (number), which starts at 0.

// Example of creating an array
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry']

// There are several methods to manipulate arrays in JavaScript:
// 1. Adding elements
fruits.push('Date'); // Adds 'Date' to the end of the array
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry', 'Date']

// 2. Removing elements
fruits.pop(); // Removes the last element from the array
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry']

// 3. Accessing elements
console.log(fruits[0]); // Output: 'Apple' (first element)

// 4. Looping through an array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Outputs each fruit in the array
}

// 5. Finding the length of an array
console.log(fruits.length); // Output: 3 (number of elements in the array)

// 6. Checking if a variable is an array
console.log(Array.isArray(fruits)); // Output: true (fruits is an array)

// 7. Joining elements into a string
let fruitString = fruits.join(', '); // Joins elements with a comma and space
console.log(fruitString); // Output: 'Apple, Banana, Cherry'

// 8. Slicing an array
let slicedFruits = fruits.slice(1, 3); // Slices the array from index 1 to index 3 (not inclusive)
console.log(slicedFruits); // Output: ['Banana', 'Cherry']

// 9. Splicing an array
fruits.splice(1, 1, 'Blueberry'); // Removes 1 element at index 1 and adds 'Blueberry'
console.log(fruits); // Output: ['Apple', 'Blueberry', 'Cherry']

// 10. Concatenating arrays
let moreFruits = ['Elderberry', 'Fig'];
let allFruits = fruits.concat(moreFruits); // Combines two arrays
console.log(allFruits); // Output: ['Apple', 'Blueberry', 'Cherry', 'Elderberry', 'Fig']

// 11. Finding an element
let index = allFruits.indexOf('Cherry'); // Finds the index of 'Cherry'
console.log(index); // Output: 2 (index of 'Cherry' in allFruits)

// 12. Filtering an array
let filteredFruits = allFruits.filter(fruit => fruit.startsWith('B')); // Filters fruits that start with 'B'
console.log(filteredFruits); // Output: ['Blueberry']

// 13. Mapping an array, which creates a new array with the results of calling a function on every element
let upperFruits = allFruits.map(fruit => fruit.toUpperCase()); // Converts each fruit to uppercase
console.log(upperFruits); // Output: ['APPLE', 'BLUEBERRY', 'CHERRY', 'ELDERBERRY', 'FIG']

// 14. Reducing an array to a single value
let totalLength = allFruits.reduce((total, fruit) => total + fruit.length, 0); // Sums the lengths of all fruit names
console.log(totalLength); // Output: 30 (total length of all fruit names)