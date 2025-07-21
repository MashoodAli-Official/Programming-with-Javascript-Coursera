//There are three types of scope in JavaScript: Global, Function, and Block scope.
// Global scope: Variables declared outside of any function or block are in the global scope.
var globalVar = "I am a global variable";

// Function scope: Variables declared within a function are in the function scope.
function myFunction() {
    var functionVar = "I am a function variable";
    console.log(globalVar); // Accessing global variable
    console.log(functionVar); // Accessing function variable
}

// Block scope: Variables declared with let or const within a block (e.g., if statement, loop) are in the block scope.
if (true) {
    let blockVar = "I am a block variable";
    console.log(blockVar); // Accessing block variable
}
// Calling the function to see the output
myFunction();

const blockVar = "I am a constant block variable";
console.log(blockVar); // Accessing constant block variable
// blockVar = "Trying to change constant"; // UNCOMMENT THIS, This will throw an error because blockVar is a constant

// Note: Trying to access functionVar or blockVar outside their respective scopes will result in an error.
// var: Function-scoped or globally scoped. Can be redeclared and updated. Avoid using in modern code.
// let: Block-scoped. Can be updated but not redeclared in the same scope.
// const: Block-scoped. Cannot be updated or redeclared; must be assigned a value when declared.
var x = 1;      // function/global scope and can change
let y = 2;      // block scope, can change
const z = 3;    // block scope, cannot change
y = 5;          // allowed
// z = 6;       // Error: Assignment to