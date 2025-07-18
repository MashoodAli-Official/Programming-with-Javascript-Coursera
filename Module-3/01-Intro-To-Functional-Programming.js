// In programming there are two main paradigms or styles are using . There are ,
// 1. Functional Programming (FP)
// 2. Object Oriented Programming (OOP)

// Functional Programming:
// Functional programming is a programming style where you build programs using pure functions, avoiding changing data and side effects.
// Pure functions are functions that always produce the same output for the same input and do not have side effects (they do not change any external state).

// Object Oriented Programming (OOP)
// In OOP we combine the data and function in objects and we can change the data and state of the object.

// Example of Functional Programming in JavaScript
var currencyOne = 10; // Here we are using the camelCase naming convention, first word is lowercase and subsequent words are capitalized.
var currencyTwo = 0;
var exchangeRate = 1.2;

function covertCurrency(amount, rate){
    return amount * rate; // This is a pure function, it does not change any external state.
};

currencyTwo = covertCurrency (currencyOne, exchangeRate); // Here we are calling the function and passing the arguments.
console.log(currencyTwo); // Output: 12