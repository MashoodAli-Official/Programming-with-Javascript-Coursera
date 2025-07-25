// Introduction to Object Oriented Programming (OOP) in JavaScript
// As we have discuss there are two main paradigms in programming, Functional Programming (FP) and Object Oriented Programming (OOP).

// In OOP, we encapsulate data and behavior together in objects. 
// This allows us to model real-world entities more effectively.
// For example, A new car object with const, The function start() is a method of the car object that can be called to start the car.
const car = {
    make : "Toyota",
    model : "Corolla",
    year : 2020,
    start: function() {
        console.log(`Starting the ${this.year} ${this.make} ${this.model}`);
    }
}
console.log(car);
// We can access properties of the car object using dot notation or bracket notation.
console.log(car.make); // Output: Toyota
console.log(car['model']); // Output: Corolla
// The Car is an object with properties like make, model, and year, and a method called start() that prints a message when called.
// This is the simple exmaple of OOP encapsulation in JavaScript