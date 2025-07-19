// Uncomment the following code to see an example of a function that calls itself.
// function example(){
//     console.log("counter 1.");
//     console.log("counter 2.");
//     console.log("counter 3.");
//     example();
// }
// This code will cause a "Maximum call stack size exceeded" error because the example function calls itself forever (infinite recursion).
// When a function calls itself, this is what's known as recursion.


// Recursion is an alternative way to run repetitive code without the use of loops.
// Next time you see someone running on a treadmill,imagine a function running in the background. 
// Alternatively, you can think of recursion as a function that calls itself until it reaches a base case.
var counter = 5;
function example1(){
    console.log(counter);
    counter = counter - 1; // Decrement the counter
    if(counter === 0) return; // Base case: when counter reaches 0, stop the recursion
    example1(); // Recursive call to example1
}
example1(); // This will print the numbers 5, 4, 3, 2, 1 in sequence and then stop when the counter reaches 0.