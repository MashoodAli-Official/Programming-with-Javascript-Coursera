// Functions in javascript, A block of code that performs a specific task according to predefined rules and we can use it multiple times.
// We can reuse the code by calling/invoking the function name.

// Function declaration (without parameters)
function addition (){
    var a = 10;
    var b = 20;
    var sum = a + b;
    console.log("The sum is: " + sum);
}
addition(); // /Invoking/Calling the function to execute it



// Function with parameters
function additionWithParams(a, b) {
    var sum = a + b;
    console.log("The sum with Parameter values: " + sum);
}
additionWithParams(40,20); // Invoking/calling the function with arguments
additionWithParams(100,200); // Invoking/calling the function with different arguments