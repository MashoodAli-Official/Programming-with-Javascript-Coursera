// Let scope in JavaScript
// Let is a block-scoped variable declaration introduced in ES6.
// It allows you to declare variables that are limited in scope to the block, statement, or expression where they are defined.
let name = "Harry";
{
    let name = "John"; // This x is different from the outer x
    console.log("Inner name:", name); // Outputs: Inner x: 20
}
console.log("Outer name:", name); // Outputs: Outer x: 10