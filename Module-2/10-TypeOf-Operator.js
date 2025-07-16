// The typeOf operator in JavaScript is used to determine the type of a given variable or expression.

var variable1 = "Hello, World!"; 
console.log(typeof variable1); // Output: "string"

var variable2 = 42;
console.log(typeof variable2); // Output: "number"

var variable3 = true;
console.log(typeof variable3); // Output: "boolean"

var variable4 = { name: "Alice", age: 30 };
console.log(typeof variable4); // Output: "object"

var variable5 = [1, 2, 3, 4, 5];
console.log(typeof variable5); // Output: "object" (This is because arrays are also objects in JavaScript)

console.log(typeof(18 > 27)); // Output: "object" (This is a known quirk in JavaScript)

function newGamer(name, age) {
    name = 'Harry';
    age = 25;
}
console.log(typeof newGamer); // Output: "function" (Functions are also a type in JavaScript)