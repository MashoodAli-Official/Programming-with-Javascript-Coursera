// Constructor in JavaScript
// A constructor is a function that helps make new objects in JavaScript.
// In JavaScript, a constructor is a special function used to create and initialize objects. When you call a constructor with the new keyword, it creates a new object and sets this to refer to that object. 
// There are two ways to create constructors in JavaScript: using a Class or using a Function.

// 1️⃣: Constructor within a Class:
console.log("****************** Constructor within Class ***************");
class Person {
    constructor(name,age) { // In JavaScript classes, the constructor must be named constructor.
        this.name = name; // 'this' refers to the new object being created
        this.age = age; // Setting properties for the new object
    }
}
// Example of using the constructor
const person1 = new Person("John", 25); // Creating a new object using the
const person2 = new Person("Jane", 30); // Creating another object
console.log(`The person name is ${person1.name}, and person age is ${person1.age}`); // Output: The person name is John, and person age is 25
console.log(`The person name is ${person2.name}, and person age is ${person2.age}`); // Output: The person name is Jane, and person age is 30

console.log("****************** Constructor Function ***************");
// 2️⃣: Constructor using a Function:
function Book(title, author, year) {
    this.title = title; // 'this' refers to the new object being created
    this.author = author; // Setting properties for the new object
    this.year = year;
}
const book1 = new Book("1984", "George Orwell", 1949); // Creating a new object using the function
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960); // Creating another object
console.log(`The book title is ${book1.title}, written by ${book1.author} in ${book1.year}`); // Output: The book title is 1984, written by George Orwell in 1949
console.log(`The book title is ${book2.title}, written by ${book2.author} in ${book2.year}`); // Output: The book title is To Kill a Mockingbird, written by Harper Lee in