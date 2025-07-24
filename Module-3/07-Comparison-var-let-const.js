// Comparison  between var, let, and const
console.log("Comparison between var, let, and const");
// var is function-scoped or globally scoped
var x = 10;
if (true) {
    var x = 20; // same variable
    console.log("Inside if block, x =", x); // 20
}
console.log("Outside if block, x =", x); // 20

// let is block-scoped
let y = 10;
if (true) {
    let y = 20; // different variable
    console.log("Inside if block, y =", y); // 20
}
console.log("Outside if block, y =", y); // 10
// const is also block-scoped and cannot be reassigned
const z = 10;
if (true) {
    const z = 20; // different variable
    console.log("Inside if block, z =", z); // 20
}
console.log("Outside if block, z =", z); // 10