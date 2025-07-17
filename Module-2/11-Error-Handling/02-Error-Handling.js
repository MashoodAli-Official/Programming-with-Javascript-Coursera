// The Error handling in JavaScript is done using throw try-catch.
// In javascript if a piece of code throws an error, it can be caught using a try-catch block.
// For this we have to wrap the code that might throw an error in a try block.
// If an error occurs, the control is transferred to the catch block where we can handle the error and check the error message.

try {
    throw new Error("This is an error message");
}catch (err) {
    console.log("Caught an error:", err.message);
}
console.log("This code will still run after the error is caught.");