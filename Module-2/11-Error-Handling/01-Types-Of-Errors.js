// there are three types of errors in JavaScript
// 1. Syntax Error: Occurs when the code is not written correctly, such as missing parentheses or brackets.
// 2. Runtime Error: Occurs when the code is syntactically correct but fails during execution, such as trying to access a property of `undefined`.
// 3. Logical Error: Occurs when the code runs without errors but produces incorrect results due to a flaw in the logic, such as using the wrong operator or condition.

// Syntax Error Example
// Missing closing parenthesis
// UN COMMENT to see the error
// console.log("Hello World"; // Uncaught SyntaxError: missing ) after argument list

// Runtime Error Example
let user;
console.log(user.name); // Uncaught TypeError: Cannot read properties of undefined (reading 'name')

// Logical Error Example
let total = 10;
let count = 2;
let average = total * count; // Should be total / count
console.log(average); // Output: 20 (Incorrect logic, should