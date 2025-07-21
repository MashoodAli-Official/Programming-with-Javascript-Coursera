// Fibonacci sequence using recursion
// In fibonacci sequence, each number is the sum of the two preceding ones, usually starting with 0 and 1.
// For example : 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
function fib(n){
    if (n === 0) return 0; // Base case for 0
    if (n === 1) return 1; // Base case for 1
    // Recursive case: sum of the two preceding numbers
    return fib(n - 1) + fib(n - 2);
}
console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(7)); // 2
console.log(fib(10)); // 2