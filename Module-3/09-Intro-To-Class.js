// Class in JavaScript
// A class is a blueprint for creating objects with shared properties and methods that you can use it to create multiple instances.
// It encapsulates data and behavior, allowing for object-oriented programming.

// 1st: we can create a class using the `class` keyword followed by the class name.
// The class name should be in PascalCase (first letter of each word capitalized).
class Car {
    //2nd: we have to define a constructor method using the `constructor` keyword. Moreover we can define parameters/properties inside the constructor.
    details(make, model, year) {
        this.make = make; // `this` refers to the current instance of the class
        this.model = model;
        this.year = year;
    }

    // 3rd: we can define methods inside the class to perform actions or behaviors related to the class.
    displayDetails() {
        console.log(`Car Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
};
// 4th: we can create an instance of the class using the `new` keyword followed by the class name and passing any required parameters to the constructor.
const myCar = new Car();
myCar.details('Toyota', 'Corolla', 2020); // Setting properties using the
// details method
myCar.displayDetails(); // Output: Car Make: Toyota, Model: Corolla, Year: