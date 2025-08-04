// Rest operator in JavaScript
// Rest operator use to collect all remaining elements into an array
// Rest operator must be last parameter

let arr = [3, 4, 5, 6];
console.log(...arr); // Spread operator to log elements
let arr2 = [1, 2, ...arr, 7, 8];
console.log(arr2);
